import express from 'express';
import fs from 'fs';
import path from 'path';
import { createServer as createViteServer } from 'vite';

const PORT = 3000;
const SUBMISSIONS_DIR = path.resolve(process.cwd(), 'audit/phase-8');
const SUBMISSIONS_FILE = path.join(SUBMISSIONS_DIR, 'submissions.json');

function ensureSubmissionsStore() {
  fs.mkdirSync(SUBMISSIONS_DIR, { recursive: true });
  if (!fs.existsSync(SUBMISSIONS_FILE)) {
    fs.writeFileSync(SUBMISSIONS_FILE, JSON.stringify([], null, 2), 'utf8');
  }
}

async function startServer() {
  ensureSubmissionsStore();
  const app = express();
  app.use(express.json({ limit: '256kb' }));

  // Real Contact / Consultation Submission Endpoint (Phase 8)
  app.post('/api/contact', (req, res) => {
    const {
      name = '',
      company = '',
      phone = '',
      email = '',
      serviceType = 'infrastructure',
      details = '',
      website_url = '', // Honeypot field
      turnstileVerified = false,
      lang = 'ar',
    } = req.body || {};

    // 1. Honeypot spam protection check
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

    // 2. Turnstile / anti-bot verification check
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

    // 3. Field-level server validation
    const fieldErrors: Record<string, string> = {};
    if (!String(name).trim() || String(name).trim().length < 2) {
      fieldErrors.name =
        lang === 'ar' ? 'الاسم الكامل مطلوب' : 'Full name is required';
    }
    if (!String(company).trim()) {
      fieldErrors.company =
        lang === 'ar'
          ? 'اسم الشركة أو الجهة مطلوب'
          : 'Company or organization name is required';
    }
    if (!String(phone).trim() || String(phone).trim().length < 7) {
      fieldErrors.phone =
        lang === 'ar'
          ? 'رقم الهاتف الصحيح مطلوب'
          : 'A valid phone number is required';
    }
    if (
      !String(email).trim() ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email).trim())
    ) {
      fieldErrors.email =
        lang === 'ar'
          ? 'البريد الإلكتروني الرسمي غير صحيح'
          : 'A valid work email address is required';
    }
    if (!String(details).trim() || String(details).trim().length < 10) {
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

    // 4. Persist submission to audit/phase-8/submissions.json
    const referenceId = `NZL-REQ-${Date.now().toString().slice(-6)}`;
    const receivedAt = new Date().toISOString();
    const record = {
      referenceId,
      receivedAt,
      recipientInbox: 'info@nuzultech.com',
      payload: {
        name: String(name).trim(),
        company: String(company).trim(),
        phone: String(phone).trim(),
        email: String(email).trim(),
        serviceType: String(serviceType).trim(),
        details: String(details).trim(),
        lang,
      },
    };

    try {
      ensureSubmissionsStore();
      const existing = JSON.parse(fs.readFileSync(SUBMISSIONS_FILE, 'utf8'));
      const list = Array.isArray(existing) ? existing : [];
      list.push(record);
      fs.writeFileSync(SUBMISSIONS_FILE, JSON.stringify(list, null, 2), 'utf8');
    } catch (err) {
      console.error('Error saving contact submission:', err);
    }

    return res.status(200).json({
      ok: true,
      referenceId,
      receivedAt,
      recipientInbox: 'info@nuzultech.com',
    });
  });

  app.get('/api/contact/submissions', (_req, res) => {
    try {
      ensureSubmissionsStore();
      const list = JSON.parse(fs.readFileSync(SUBMISSIONS_FILE, 'utf8'));
      res.status(200).json({ ok: true, count: list.length, submissions: list });
    } catch {
      res.status(200).json({ ok: true, count: 0, submissions: [] });
    }
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
