import express from 'express';
import fs from 'fs';
import path from 'path';
import dns from 'dns/promises';
import crypto from 'crypto';
import { createServer as createViteServer } from 'vite';

const PORT = 3000;
const DATA_DIR = path.resolve(process.cwd(), 'data');
const SUBMISSIONS_FILE = path.join(DATA_DIR, 'contact-submissions.json');
const ORDERS_FILE = path.join(DATA_DIR, 'orders.json');

// Strict TLD allowlist and official RDAP registry endpoints (prevents arbitrary outbound fetches)
const ALLOWED_TLDS: Record<
  string,
  { rdapBase?: string; priceEGP: number; notesAr?: string; notesEn?: string }
> = {
  '.com': {
    rdapBase: 'https://rdap.verisign.com/com/v1/domain/',
    priceEGP: 750,
  },
  '.net': {
    rdapBase: 'https://rdap.verisign.com/net/v1/domain/',
    priceEGP: 850,
  },
  '.org': {
    rdapBase: 'https://rdap.publicinterestregistry.org/rdap/domain/',
    priceEGP: 800,
  },
  '.io': {
    rdapBase: 'https://rdap.identitydigital.services/rdap/domain/',
    priceEGP: 2650,
  },
  '.com.eg': {
    priceEGP: 1250,
    notesAr: 'يتطلب سجل تجاري وبطاقة ضريبية عند التسجيل الرسمي',
    notesEn: 'Requires Commercial Register & Tax Card for official registration',
  },
  '.eg': {
    priceEGP: 2200,
    notesAr: 'يتطلب سجل تجاري وعلامة تجارية أو اسم شركة مطابق',
    notesEn: 'Requires Commercial Register matching entity or trademark',
  },
};

const LABEL_REGEX = /^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?$/;

// Simple in-memory per-IP rate limiter
interface RateBucket {
  count: number;
  resetAt: number;
}
const rateBuckets = new Map<string, RateBucket>();

function isRateLimited(key: string, maxRequests: number, windowMs: number): boolean {
  const now = Date.now();
  const bucket = rateBuckets.get(key);
  if (!bucket || now > bucket.resetAt) {
    rateBuckets.set(key, { count: 1, resetAt: now + windowMs });
    return false;
  }
  bucket.count += 1;
  return bucket.count > maxRequests;
}

function getClientIp(req: express.Request): string {
  const fwd = req.headers['x-forwarded-for'];
  if (typeof fwd === 'string' && fwd.length > 0) {
    return fwd.split(',')[0].trim();
  }
  return req.socket.remoteAddress || 'unknown';
}

function ensureJsonFile(filePath: string) {
  const resolved = path.resolve(filePath);
  if (!resolved.startsWith(DATA_DIR + path.sep)) {
    throw new Error('Invalid storage path');
  }
  fs.mkdirSync(DATA_DIR, { recursive: true });
  if (!fs.existsSync(resolved)) {
    fs.writeFileSync(resolved, JSON.stringify([], null, 2), 'utf8');
  }
}

function appendJsonRecord(filePath: string, record: unknown) {
  ensureJsonFile(filePath);
  const raw = fs.readFileSync(filePath, 'utf8');
  const existing = JSON.parse(raw);
  const list = Array.isArray(existing) ? existing : [];
  list.push(record);
  fs.writeFileSync(filePath, JSON.stringify(list, null, 2), 'utf8');
}

interface DomainCheckResult {
  domain: string;
  tld: string;
  status: 'available' | 'taken' | 'likely_available' | 'error';
  source: 'RDAP' | 'DNS';
  priceEGP: number;
  checkedInMs: number;
  registrar?: string;
  expiresAt?: string;
  nameservers?: string[];
  notesAr?: string;
  notesEn?: string;
}

function extractRdapMetadata(data: any): {
  registrar?: string;
  expiresAt?: string;
  nameservers?: string[];
} {
  let registrar: string | undefined;
  let expiresAt: string | undefined;
  const nameservers: string[] = [];

  if (Array.isArray(data?.entities)) {
    const regEntity = data.entities.find(
      (ent: any) => Array.isArray(ent?.roles) && ent.roles.includes('registrar')
    );
    const vcard = regEntity?.vcardArray?.[1];
    if (Array.isArray(vcard)) {
      const fnEntry = vcard.find((row: any) => Array.isArray(row) && row[0] === 'fn');
      if (fnEntry && typeof fnEntry[3] === 'string') {
        registrar = fnEntry[3].trim();
      }
    }
  }

  if (Array.isArray(data?.events)) {
    const expEvent = data.events.find((ev: any) => ev?.eventAction === 'expiration');
    if (expEvent && typeof expEvent.eventDate === 'string') {
      expiresAt = expEvent.eventDate.slice(0, 10);
    }
  }

  if (Array.isArray(data?.nameservers)) {
    for (const ns of data.nameservers.slice(0, 3)) {
      if (typeof ns?.ldhName === 'string') {
        nameservers.push(ns.ldhName.toLowerCase());
      }
    }
  }

  return {
    registrar,
    expiresAt,
    nameservers: nameservers.length > 0 ? nameservers : undefined,
  };
}

async function checkDnsLive(domain: string): Promise<{
  hasRecords: boolean;
  nameservers?: string[];
}> {
  try {
    const ns = await dns.resolveNs(domain);
    if (Array.isArray(ns) && ns.length > 0) {
      return { hasRecords: true, nameservers: ns.slice(0, 3).map((n) => n.toLowerCase()) };
    }
  } catch {
    // Continue to SOA/A/MX checks
  }

  try {
    const soa = await dns.resolveSoa(domain);
    if (soa && soa.nsname) {
      return { hasRecords: true, nameservers: [soa.nsname.toLowerCase()] };
    }
  } catch {
    // Continue
  }

  try {
    const aRecords = await dns.resolve4(domain);
    if (Array.isArray(aRecords) && aRecords.length > 0) {
      return { hasRecords: true };
    }
  } catch {
    // Continue
  }

  try {
    const mxRecords = await dns.resolveMx(domain);
    if (Array.isArray(mxRecords) && mxRecords.length > 0) {
      return { hasRecords: true };
    }
  } catch {
    // No records found
  }

  return { hasRecords: false };
}

async function checkSingleDomain(label: string, tld: string): Promise<DomainCheckResult> {
  const started = Date.now();
  const cfg = ALLOWED_TLDS[tld];
  const domain = `${label}${tld}`;

  if (!cfg) {
    return {
      domain,
      tld,
      status: 'error',
      source: 'DNS',
      priceEGP: 0,
      checkedInMs: Date.now() - started,
    };
  }

  // 1. Authoritative RDAP check for supported registries (.com, .net, .org, .io)
  if (cfg.rdapBase) {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 4500);
    try {
      const response = await fetch(`${cfg.rdapBase}${encodeURIComponent(domain)}`, {
        method: 'GET',
        headers: {
          Accept: 'application/rdap+json, application/json',
          'User-Agent': 'NuzulTech-DomainChecker/1.0',
        },
        signal: controller.signal,
      });

      clearTimeout(timeout);

      if (response.status === 404) {
        return {
          domain,
          tld,
          status: 'available',
          source: 'RDAP',
          priceEGP: cfg.priceEGP,
          checkedInMs: Date.now() - started,
          notesAr: cfg.notesAr,
          notesEn: cfg.notesEn,
        };
      }

      if (response.ok) {
        let meta: { registrar?: string; expiresAt?: string; nameservers?: string[] } = {};
        try {
          const json = await response.json();
          meta = extractRdapMetadata(json);
        } catch {
          // Ignore malformed JSON body
        }
        return {
          domain,
          tld,
          status: 'taken',
          source: 'RDAP',
          priceEGP: cfg.priceEGP,
          checkedInMs: Date.now() - started,
          ...meta,
        };
      }
    } catch {
      clearTimeout(timeout);
      // Fallback cleanly to live DNS below
    }
  }

  // 2. Live DNS resolution (authoritative for .eg/.com.eg or RDAP fallback)
  try {
    const dnsResult = await checkDnsLive(domain);
    if (dnsResult.hasRecords) {
      return {
        domain,
        tld,
        status: 'taken',
        source: 'DNS',
        priceEGP: cfg.priceEGP,
        checkedInMs: Date.now() - started,
        nameservers: dnsResult.nameservers,
      };
    }

    return {
      domain,
      tld,
      status: tld.endsWith('.eg') ? 'likely_available' : 'likely_available',
      source: 'DNS',
      priceEGP: cfg.priceEGP,
      checkedInMs: Date.now() - started,
      notesAr: cfg.notesAr,
      notesEn: cfg.notesEn,
    };
  } catch {
    return {
      domain,
      tld,
      status: 'error',
      source: 'DNS',
      priceEGP: cfg.priceEGP,
      checkedInMs: Date.now() - started,
    };
  }
}

async function startServer() {
  ensureJsonFile(SUBMISSIONS_FILE);
  ensureJsonFile(ORDERS_FILE);

  const app = express();
  app.disable('x-powered-by');
  app.use(express.json({ limit: '256kb' }));

  // 1. Live Domain Availability API (Real RDAP + Live DNS)
  app.get('/api/domains/check', async (req, res) => {
    const ip = getClientIp(req);
    if (isRateLimited(`domain:${ip}`, 35, 60_000)) {
      return res.status(429).json({
        ok: false,
        error: 'RATE_LIMITED',
        message: 'Too many domain checks. Please wait a minute and try again.',
      });
    }

    const rawName = typeof req.query.name === 'string' ? req.query.name.trim().toLowerCase() : '';
    const rawTlds = typeof req.query.tlds === 'string' ? req.query.tlds : '';

    // Normalize domain input (strip protocol, www, path, and extract label + optional TLD)
    const stripped = rawName
      .replace(/^https?:\/\//, '')
      .replace(/^www\./, '')
      .split('/')[0]
      .split('?')[0]
      .trim();

    let label = stripped;
    let detectedTld: string | null = null;

    // Check longest allowed TLDs first (.com.eg before .eg)
    const sortedAllowedTlds = Object.keys(ALLOWED_TLDS).sort((a, b) => b.length - a.length);
    for (const candidateTld of sortedAllowedTlds) {
      if (stripped.endsWith(candidateTld) && stripped.length > candidateTld.length) {
        label = stripped.slice(0, -candidateTld.length);
        detectedTld = candidateTld;
        break;
      }
    }

    if (!detectedTld && stripped.includes('.')) {
      label = stripped.split('.')[0];
    }

    if (!label || !LABEL_REGEX.test(label)) {
      return res.status(400).json({
        ok: false,
        error: 'INVALID_DOMAIN_LABEL',
        message:
          'Domain name must contain only English letters, numbers, and hyphens (2-63 characters, cannot start or end with a hyphen).',
      });
    }

    let requestedTlds: string[] = [];
    if (rawTlds.trim().length > 0) {
      requestedTlds = rawTlds
        .split(',')
        .map((t) => t.trim().toLowerCase())
        .map((t) => (t.startsWith('.') ? t : `.${t}`))
        .filter((t) => Object.prototype.hasOwnProperty.call(ALLOWED_TLDS, t));
    }

    if (requestedTlds.length === 0) {
      requestedTlds = ['.com', '.net', '.org', '.io', '.com.eg', '.eg'];
    }

    if (detectedTld && !requestedTlds.includes(detectedTld)) {
      requestedTlds = [detectedTld, ...requestedTlds];
    } else if (detectedTld) {
      requestedTlds = [detectedTld, ...requestedTlds.filter((t) => t !== detectedTld)];
    }

    // Cap to unique allowed TLDs
    const uniqueTlds = Array.from(new Set(requestedTlds)).slice(0, 6);

    const results = await Promise.all(uniqueTlds.map((tld) => checkSingleDomain(label, tld)));

    return res.status(200).json({
      ok: true,
      label,
      primaryTld: uniqueTlds[0],
      checkedAt: new Date().toISOString(),
      results,
    });
  });

  // 2. Real Contact / Consultation Submission Endpoint
  app.post('/api/contact', (req, res) => {
    const ip = getClientIp(req);
    if (isRateLimited(`contact:${ip}`, 10, 60_000)) {
      return res.status(429).json({
        ok: false,
        error: 'RATE_LIMITED',
        message: 'تم تجاوز الحد المسموح من الطلبات. يرجى المحاولة بعد دقيقة.',
      });
    }

    const {
      name = '',
      company = '',
      phone = '',
      email = '',
      serviceType = 'infrastructure',
      details = '',
      website_url = '',
      turnstileVerified = false,
      lang = 'ar',
    } = req.body || {};

    if (typeof website_url === 'string' && website_url.trim().length > 0) {
      return res.status(400).json({
        ok: false,
        error: 'SPAM_DETECTED',
        message:
          lang === 'ar'
            ? 'تم رفض الطلب بواسطة نظام الحماية التلقائي.'
            : 'Submission rejected by automated spam protection.',
      });
    }

    if (!turnstileVerified) {
      return res.status(400).json({
        ok: false,
        error: 'VERIFICATION_REQUIRED',
        message:
          lang === 'ar'
            ? 'يرجى تأكيد التحقق الأمني قبل إرسال الطلب.'
            : 'Please complete the security verification check.',
      });
    }

    const cleanName = String(name).trim().slice(0, 120);
    const cleanCompany = String(company).trim().slice(0, 140);
    const cleanPhone = String(phone).trim().slice(0, 32);
    const cleanEmail = String(email).trim().slice(0, 140);
    const cleanServiceType = String(serviceType).trim().slice(0, 60);
    const cleanDetails = String(details).trim().slice(0, 2000);

    const fieldErrors: Record<string, string> = {};
    if (!cleanName || cleanName.length < 2) {
      fieldErrors.name = lang === 'ar' ? 'الاسم الكامل مطلوب' : 'Full name is required';
    }
    if (!cleanCompany) {
      fieldErrors.company =
        lang === 'ar' ? 'اسم الشركة أو الجهة مطلوب' : 'Company or organization name is required';
    }
    if (!cleanPhone || cleanPhone.length < 7) {
      fieldErrors.phone =
        lang === 'ar' ? 'رقم الهاتف الصحيح مطلوب' : 'A valid phone number is required';
    }
    if (!cleanEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) {
      fieldErrors.email =
        lang === 'ar' ? 'البريد الإلكتروني الرسمي غير صحيح' : 'A valid work email address is required';
    }
    if (!cleanDetails || cleanDetails.length < 10) {
      fieldErrors.details =
        lang === 'ar'
          ? 'يرجى كتابة نبذة مختصرة عن متطلبات المشروع (10 أحرف على الأقل)'
          : 'Please provide brief project details (at least 10 characters)';
    }

    if (Object.keys(fieldErrors).length > 0) {
      return res.status(422).json({
        ok: false,
        error: 'VALIDATION_ERROR',
        fieldErrors,
      });
    }

    const referenceId = `NZL-REQ-${crypto.randomBytes(3).toString('hex').toUpperCase()}`;
    const receivedAt = new Date().toISOString();

    try {
      appendJsonRecord(SUBMISSIONS_FILE, {
        referenceId,
        receivedAt,
        recipientInbox: 'info@nuzultech.com',
        payload: {
          name: cleanName,
          company: cleanCompany,
          phone: cleanPhone,
          email: cleanEmail,
          serviceType: cleanServiceType,
          details: cleanDetails,
          lang: lang === 'en' ? 'en' : 'ar',
        },
      });
    } catch (err) {
      console.error('Error saving contact submission:', err);
      return res.status(500).json({
        ok: false,
        error: 'STORAGE_ERROR',
        message:
          lang === 'ar'
            ? 'حدث خطأ أثناء حفظ الطلب، يرجى المحاولة مرة أخرى.'
            : 'Unable to save request right now. Please try again.',
      });
    }

    return res.status(200).json({
      ok: true,
      referenceId,
      receivedAt,
      recipientInbox: 'info@nuzultech.com',
    });
  });

  // 3. Real Provisioning & Order Submission Endpoint
  app.post('/api/orders', (req, res) => {
    const ip = getClientIp(req);
    if (isRateLimited(`order:${ip}`, 12, 60_000)) {
      return res.status(429).json({
        ok: false,
        error: 'RATE_LIMITED',
        message: 'Too many order attempts. Please wait a minute.',
      });
    }

    const {
      clientName = '',
      clientPhone = '',
      clientEmail = '',
      companyName = '',
      paymentMethod = 'instapay',
      referenceNumber = '',
      currency = 'EGP',
      lang = 'ar',
      items = [],
    } = req.body || {};

    const allowedMethods = new Set(['instapay', 'vodafone', 'fawry', 'payment_link', 'bank']);
    const allowedCurrencies = new Set(['EGP', 'USD', 'SAR']);

    const cleanName = String(clientName).trim().slice(0, 120);
    const cleanPhone = String(clientPhone).trim().slice(0, 32);
    const cleanEmail = String(clientEmail).trim().slice(0, 140);
    const cleanCompany = String(companyName).trim().slice(0, 140);
    const cleanRef = String(referenceNumber).trim().slice(0, 80);

    const fieldErrors: Record<string, string> = {};
    if (!cleanName || cleanName.length < 2) {
      fieldErrors.clientName =
        lang === 'ar' ? 'اسم العميل أو المسؤول مطلوب' : 'Client or contact name is required';
    }
    if (!cleanPhone || cleanPhone.length < 7) {
      fieldErrors.clientPhone =
        lang === 'ar' ? 'رقم هاتف / واتساب صحيح مطلوب' : 'Valid WhatsApp / phone number is required';
    }
    if (cleanEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) {
      fieldErrors.clientEmail =
        lang === 'ar' ? 'صيغة البريد الإلكتروني غير صحيحة' : 'Invalid email address format';
    }
    if (!allowedMethods.has(String(paymentMethod))) {
      fieldErrors.paymentMethod =
        lang === 'ar' ? 'وسيلة الدفع غير مدعومة' : 'Unsupported payment method';
    }
    if (!Array.isArray(items) || items.length === 0 || items.length > 25) {
      fieldErrors.items =
        lang === 'ar' ? 'سلة الطلبات فارغة أو غير صالحة' : 'Cart items are empty or invalid';
    }

    if (Object.keys(fieldErrors).length > 0) {
      return res.status(422).json({
        ok: false,
        error: 'VALIDATION_ERROR',
        fieldErrors,
      });
    }

    const sanitizedItems = (items as any[]).map((item) => {
      const qty = Math.min(20, Math.max(1, Math.floor(Number(item?.quantity) || 1)));
      const unitPrice = Math.max(0, Math.min(5_000_000, Math.round(Number(item?.price) || 0)));
      return {
        id: String(item?.id || '').slice(0, 80),
        name: String(item?.name || '').slice(0, 160),
        type: String(item?.type || 'service').slice(0, 24),
        billingCycle: String(item?.billingCycle || 'one-time').slice(0, 24),
        quantity: qty,
        unitPriceEGP: unitPrice,
        lineTotalEGP: unitPrice * qty,
        details: item?.details ? String(item.details).slice(0, 240) : undefined,
      };
    });

    const totalEGP = sanitizedItems.reduce((sum, it) => sum + it.lineTotalEGP, 0);
    const orderRef = `NZL-ORD-${crypto.randomBytes(3).toString('hex').toUpperCase()}`;
    const createdAt = new Date().toISOString();

    const record = {
      orderRef,
      createdAt,
      status: 'pending_verification',
      currency: allowedCurrencies.has(String(currency)) ? String(currency) : 'EGP',
      paymentMethod: String(paymentMethod),
      transferReference: cleanRef || undefined,
      totalEGP,
      customer: {
        name: cleanName,
        company: cleanCompany || undefined,
        phone: cleanPhone,
        email: cleanEmail || undefined,
      },
      items: sanitizedItems,
    };

    try {
      appendJsonRecord(ORDERS_FILE, record);
    } catch (err) {
      console.error('Error persisting order:', err);
      return res.status(500).json({
        ok: false,
        error: 'STORAGE_ERROR',
        message:
          lang === 'ar'
            ? 'تعذر تسجيل الطلب حالياً، يرجى المحاولة مرة أخرى.'
            : 'Unable to record order right now. Please try again.',
      });
    }

    return res.status(200).json({
      ok: true,
      orderRef,
      createdAt,
      totalEGP,
      itemCount: sanitizedItems.reduce((sum, it) => sum + it.quantity, 0),
    });
  });

  if (process.env.NODE_ENV === 'production') {
    const distPath = path.resolve(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  } else {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Nuzul Tech server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
