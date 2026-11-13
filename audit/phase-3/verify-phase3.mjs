import { createRequire } from 'module';
import fs from 'fs';
import path from 'path';

const require = createRequire('/usr/local/share/bun-global/node_modules/');
const { chromium } = require('playwright');
const axeSource = fs.readFileSync(
  '/usr/local/share/bun-global/node_modules/axe-core/axe.min.js',
  'utf8'
);

const BASE_URL = 'http://localhost:3000';
const OUT_DIR = '/app/applet/audit/phase-3';
const SCREENSHOTS_DIR = path.join(OUT_DIR, 'screenshots');
fs.mkdirSync(SCREENSHOTS_DIR, { recursive: true });

const ROUTES = [
  { name: 'home', path: '/' },
  { name: 'services', path: '/services' },
  { name: 'services-slug', path: '/services/service-1' },
  { name: 'pricing', path: '/pricing' },
  { name: 'hosting', path: '/hosting' },
  { name: 'case-studies', path: '/case-studies' },
  { name: 'case-studies-slug', path: '/case-studies/case-1' },
  { name: 'blog', path: '/blog' },
  { name: 'blog-slug', path: '/blog/immutable-cloud-backup-ransomware-protection' },
  { name: 'contact', path: '/contact' },
  { name: 'not-found-404', path: '/unknown-legacy-url-404' },
];

const VIEWPORTS = [
  { width: 375, height: 812 },
  { width: 768, height: 1024 },
  { width: 1440, height: 900 },
];

const THEMES = ['light', 'dark'];
const LANGS = ['ar', 'en'];

// Mapping of old section -> new URL -> expected text snippet (AR & EN) to prove zero content loss
const CONTENT_MIGRATION_PROOFS = [
  {
    oldSection: 'HeroSection (src/components/hero/HeroSection.tsx)',
    newUrl: '/',
    snippetAr: 'نبني ونؤمّن البنية التحتية السحابية والشبكية',
    snippetEn: 'We Engineer and Secure the Cloud & Network Infrastructure',
  },
  {
    oldSection: 'HomeServicePillars (4 Pillars Summary)',
    newUrl: '/',
    snippetAr: 'أربعة قطاعات هندسية تغطي دورة حياة التقنية',
    snippetEn: 'Four Engineering Pillars Covering Your Entire Technology Lifecycle',
  },
  {
    oldSection: 'HomeFeaturedCaseStudy (Featured Project)',
    newUrl: '/',
    snippetAr: 'دراسة حالة مميزة',
    snippetEn: 'Featured Case Study',
  },
  {
    oldSection: 'HomeHowWeWork (Simplified 3-Step Process)',
    newUrl: '/',
    snippetAr: 'منهجية عمل واضحة في 3 خطوات',
    snippetEn: 'How We Work in 3 Clear Steps',
  },
  {
    oldSection: 'HomeHostingTeaser (199 EGP Hosting Teaser)',
    newUrl: '/',
    snippetAr: '199',
    snippetEn: '199',
  },
  {
    oldSection: 'HomeTestimonials (Max 3 Client Testimonials)',
    newUrl: '/',
    snippetAr: 'شهادات قادة التقنية ومديري العمليات',
    snippetEn: 'Trusted by Engineering & Operations Leaders',
  },
  {
    oldSection: 'HomeFAQ (Executive FAQ Accordion)',
    newUrl: '/',
    snippetAr: 'هل تقدمون عقود مستوى خدمة (SLA) رسمية',
    snippetEn: 'Do you provide formal SLA contracts',
  },
  {
    oldSection: 'HomeFinalCTA (Inline Consultation CTA)',
    newUrl: '/',
    snippetAr: 'هل تخطط لتحديث البنية التحتية أو نقل خوادم شركتك؟',
    snippetEn: 'Planning an Infrastructure Upgrade or Server Migration?',
  },
  {
    oldSection: 'ServicesSection (Full 23-Service Catalog)',
    newUrl: '/services',
    snippetAr: 'حلول واستشارات تقنية المعلومات للشركات',
    snippetEn: 'Enterprise IT Solutions & Engineering Consultancy',
  },
  {
    oldSection: 'ServiceDetailPage (Individual Service Spec)',
    newUrl: '/services/service-1',
    snippetAr: 'نطاق التنفيذ والمخرجات الهندسية',
    snippetEn: 'Engineering Scope & Deliverables',
  },
  {
    oldSection: 'PackagesSection (Turnkey Bundled Packages)',
    newUrl: '/services',
    snippetAr: 'باقات تأسيس وتشغيل البنية التحتية للشركات',
    snippetEn: 'Corporate Infrastructure Setup & Operations Packages',
  },
  {
    oldSection: 'ImplementationRoadmap (4-Stage Engineering Delivery)',
    newUrl: '/services',
    snippetAr: 'كيف نحوّل رؤيتك إلى بنية تحتية مستقرة في 4 مراحل؟',
    snippetEn: 'How We Transform Your Vision into Reliable Infrastructure',
  },
  {
    oldSection: 'LiveDemosSection (ERP & Software Preview)',
    newUrl: '/services',
    snippetAr: 'شاهد جودة أنظمتنا البرمجية قبل التعاقد',
    snippetEn: 'Experience Our Enterprise Software Before You Commit',
  },
  {
    oldSection: 'PricingSection (Hosting & Cloud Plan Cards)',
    newUrl: '/pricing',
    snippetAr: 'خطط الخوادم السحابية (Cloud VPS) والخوادم المخصصة',
    snippetEn: 'Cloud VPS & Dedicated Server Plans',
  },
  {
    oldSection: 'ComparePlansSection (Full Spec Comparison Table)',
    newUrl: '/pricing',
    snippetAr: 'أنوية المعالج',
    snippetEn: 'vCPU Cores',
  },
  {
    oldSection: 'HostingPage (Cloud VPS & Dedicated Servers)',
    newUrl: '/hosting',
    snippetAr: 'استضافة سحابية وخوادم افتراضية (Cloud VPS) للشركات',
    snippetEn: 'Enterprise Cloud Hosting & KVM Virtual Servers',
  },
  {
    oldSection: 'DomainSearchWidget (Domain Registration & DNS)',
    newUrl: '/hosting',
    snippetAr: 'ابحث عن اسم النطاق الرسمي لشركتك',
    snippetEn: 'Search Your Corporate Domain Name',
  },
  {
    oldSection: 'DatacenterZones (Static Regional Deployment Zones)',
    newUrl: '/hosting',
    snippetAr: 'مناطق مراكز البيانات المتاحة لنشر الخوادم',
    snippetEn: 'Available Datacenter Regions for Server Provisioning',
  },
  {
    oldSection: 'TechStackSection (Enterprise Technology Stack)',
    newUrl: '/hosting',
    snippetAr: 'توزيعات أنظمة التشغيل وقواعد البيانات المدعومة',
    snippetEn: 'Supported Operating Systems, Runtimes & Databases',
  },
  {
    oldSection: 'ProjectsSection (Case Studies Grid)',
    newUrl: '/case-studies',
    snippetAr: 'دراسات حالة لمشاريع البنية التحتية والسحابة',
    snippetEn: 'Infrastructure & Cloud Case Studies',
  },
  {
    oldSection: 'CaseStudyDetailPage (Single Project Breakdown)',
    newUrl: '/case-studies/case-1',
    snippetAr: 'التحدي التشغيلي',
    snippetEn: 'The Operational Challenge',
  },
  {
    oldSection: 'BlogSection (Engineering Blog Index)',
    newUrl: '/blog',
    snippetAr: 'مقالات وأدلة تقنية لصناع القرار',
    snippetEn: 'Technical Guides for IT Leaders',
  },
  {
    oldSection: 'BlogDetailPage (Single Technical Article)',
    newUrl: '/blog/immutable-cloud-backup-ransomware-protection',
    snippetAr: 'العودة إلى المدونة',
    snippetEn: 'Back to Blog',
  },
  {
    oldSection: 'ContactConsultationSection (Consultation & RFP Form)',
    newUrl: '/contact',
    snippetAr: 'احجز استشارة هندسية أو اطلب عرض سعر مفصل',
    snippetEn: 'Book an Engineering Consultation or Request a Proposal',
  },
  {
    oldSection: 'TeamSection (Certified Engineering Divisions & Real Photo Slot)',
    newUrl: '/contact',
    snippetAr: 'فريق هندسي معتمد يدير بنيتك التحتية',
    snippetEn: 'Certified Architects Managing Your Infrastructure',
  },
  {
    oldSection: 'PaymentBadges (Single Footer-Only Payment Rail Strip)',
    newUrl: '/',
    snippetAr: 'وسائل الدفع المعتمدة للشركات والأفراد',
    snippetEn: 'Accepted payment methods in Egypt & GCC',
  },
  {
    oldSection: 'FloatingWhatsApp (Single Floating Contact Channel)',
    newUrl: '/',
    snippetAr: 'تواصل عبر واتساب',
    snippetEn: 'Chat on WhatsApp',
  },
];

(async () => {
  const browser = await chromium.launch({ headless: true });
  const report = {
    timestamp: new Date().toISOString(),
    routeThemeLangMatrix: [],
    contentMigrationProofs: [],
    headerFooterAudit: {},
    keyboardNavigationAudit: {},
    seoAndStaticFiles: {},
    axeViolations: [],
    consoleErrors: [],
    pageErrors: [],
  };

  // 1. Verify all 11 routes render in both themes (light/dark) and both languages (ar/en)
  for (const theme of THEMES) {
    for (const lang of LANGS) {
      const context = await browser.newContext({
        viewport: { width: 1440, height: 900 },
      });
      const page = await context.newPage();

      page.on('console', (msg) => {
        if (msg.type() === 'error') {
          report.consoleErrors.push({ theme, lang, url: page.url(), text: msg.text() });
        }
      });
      page.on('pageerror', (err) => {
        report.pageErrors.push({ theme, lang, url: page.url(), text: String(err) });
      });

      await page.addInitScript(
        ({ t, l }) => {
          localStorage.setItem('nuzul-theme', t);
          localStorage.setItem('nuzul-lang', l);
        },
        { t: theme, l: lang }
      );

      for (const route of ROUTES) {
        await page.goto(`${BASE_URL}${route.path}`, { waitUntil: 'domcontentloaded' });
        await page.waitForTimeout(100);

        const info = await page.evaluate(() => {
          const h1s = Array.from(document.querySelectorAll('h1')).map((el) => el.textContent?.trim());
          const hreflangs = Array.from(document.querySelectorAll('link[rel="alternate"][hreflang]')).map((el) => ({
            hreflang: el.getAttribute('hreflang'),
            href: el.getAttribute('href'),
          }));
          const canonical = document.querySelector('link[rel="canonical"]')?.getAttribute('href');
          return {
            title: document.title,
            dir: document.documentElement.dir,
            lang: document.documentElement.lang,
            dataTheme: document.documentElement.getAttribute('data-theme'),
            h1Count: h1s.length,
            h1Text: h1s[0] || '',
            canonical,
            hreflangs,
          };
        });

        report.routeThemeLangMatrix.push({
          route: route.path,
          routeName: route.name,
          expectedTheme: theme,
          expectedLang: lang,
          ...info,
        });
      }
      await context.close();
    }
  }

  // 2. Content Migration Proof: old section -> new URL -> text snippet found at new URL (AR & EN)
  {
    const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
    const page = await context.newPage();

    for (const item of CONTENT_MIGRATION_PROOFS) {
      // Check AR
      await page.addInitScript(() => {
        localStorage.setItem('nuzul-lang', 'ar');
      });
      await page.goto(`${BASE_URL}${item.newUrl}?lang=ar`, { waitUntil: 'domcontentloaded' });
      await page.waitForTimeout(80);
      const bodyAr = await page.evaluate(() => {
        const text = document.body.innerText || '';
        const aria = Array.from(document.querySelectorAll('[aria-label]'))
          .map((e) => e.getAttribute('aria-label'))
          .join(' ');
        return `${text} ${aria}`;
      });
      const foundAr = bodyAr.includes(item.snippetAr);

      // Check EN
      await page.addInitScript(() => {
        localStorage.setItem('nuzul-lang', 'en');
      });
      await page.goto(`${BASE_URL}${item.newUrl}?lang=en`, { waitUntil: 'domcontentloaded' });
      await page.waitForTimeout(80);
      const bodyEn = await page.evaluate(() => {
        const text = document.body.innerText || '';
        const aria = Array.from(document.querySelectorAll('[aria-label]'))
          .map((e) => e.getAttribute('aria-label'))
          .join(' ');
        return `${text} ${aria}`;
      });
      const foundEn = bodyEn.includes(item.snippetEn);

      report.contentMigrationProofs.push({
        oldSection: item.oldSection,
        newUrl: item.newUrl,
        snippetAr: item.snippetAr,
        foundAr,
        snippetEn: item.snippetEn,
        foundEn,
      });
    }
    await context.close();
  }

  // 3. Header & Footer Rules Verification + Screenshots at 375px, 768px, 1440px (Light & Dark, RTL)
  for (const theme of THEMES) {
    for (const vp of VIEWPORTS) {
      const context = await browser.newContext({ viewport: { width: vp.width, height: vp.height } });
      const page = await context.newPage();
      await page.addInitScript((t) => {
        localStorage.setItem('nuzul-theme', t);
        localStorage.setItem('nuzul-lang', 'ar');
      }, theme);

      await page.goto(`${BASE_URL}/`, { waitUntil: 'domcontentloaded' });
      await page.waitForTimeout(150);

      // Header screenshot
      const headerEl = await page.$('header');
      const headerScreenshot = path.join(SCREENSHOTS_DIR, `header-${theme}-${vp.width}px-rtl.png`);
      if (headerEl) {
        await headerEl.screenshot({ path: headerScreenshot });
      }

      // Footer screenshot
      const footerEl = await page.$('footer');
      const footerScreenshot = path.join(SCREENSHOTS_DIR, `footer-${theme}-${vp.width}px-rtl.png`);
      if (footerEl) {
        await footerEl.screenshot({ path: footerScreenshot });
      }

      // Also capture full-page screenshots of all 11 routes at 375/768/1440 in RTL
      for (const route of ROUTES) {
        await page.goto(`${BASE_URL}${route.path}`, { waitUntil: 'domcontentloaded' });
        await page.waitForTimeout(100);
        const routeShot = path.join(SCREENSHOTS_DIR, `${route.name}-${theme}-${vp.width}px-rtl.png`);
        await page.screenshot({ path: routeShot, fullPage: true });
      }

      if (vp.width === 1440 && theme === 'light') {
        await page.goto(`${BASE_URL}/`, { waitUntil: 'domcontentloaded' });
        await page.waitForTimeout(100);
        report.headerFooterAudit = await page.evaluate(() => {
          const header = document.querySelector('header');
          const navLinks = Array.from(header.querySelectorAll('nav a')).map((a) => ({
            text: a.textContent?.trim(),
            href: a.getAttribute('href'),
          }));
          const headerText = header.innerText || '';
          const hasCounters = /\(\d+\)/.test(headerText);
          const hasLogo = Boolean(header.querySelector('[data-testid="header-logo-link"] img'));
          const hasSearchIcon = Boolean(header.querySelector('[data-testid="header-search-btn"]'));
          const hasThemeToggle = Boolean(header.querySelector('[data-testid="theme-menu-btn"]'));
          const hasLangToggle = Boolean(header.querySelector('[data-testid="lang-toggle-btn"]'));
          const primaryCtas = header.querySelectorAll('.btn-primary');

          const footer = document.querySelector('footer');
          const footerColumns = footer.querySelectorAll('[data-testid="footer-columns-grid"] > div');
          const allPaymentBadgeRows = document.querySelectorAll('[data-testid="footer-payment-badges"]');
          const floatingChannels = document.querySelectorAll('a[href*="wa.me"], [data-testid*="chat"]');

          return {
            headerLogoPresent: hasLogo,
            desktopNavLinkCount: navLinks.length,
            desktopNavLinks: navLinks,
            hasNavCounters: hasCounters,
            hasSearchIcon,
            hasThemeToggle,
            hasLangToggle,
            desktopPrimaryCtaCount: primaryCtas.length,
            footerColumnCount: footerColumns.length,
            paymentBadgesInstancesOnPage: allPaymentBadgeRows.length,
            floatingWhatsAppPresent: Boolean(document.querySelector('a[href*="wa.me"]')),
          };
        });
      }

      await context.close();
    }
  }

  // 4. Keyboard Navigation Test of Header and Footer (Desktop 1440px + Mobile 375px Drawer)
  {
    const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
    const page = await context.newPage();
    await page.addInitScript(() => {
      localStorage.setItem('nuzul-theme', 'light');
      localStorage.setItem('nuzul-lang', 'ar');
    });
    await page.goto(`${BASE_URL}/`, { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(100);

    const headerTabSequence = [];
    for (let i = 0; i < 12; i++) {
      await page.keyboard.press('Tab');
      const focused = await page.evaluate(() => {
        const el = document.activeElement;
        if (!el) return null;
        const cs = getComputedStyle(el);
        return {
          step: 0,
          tag: el.tagName.toLowerCase(),
          testId: el.getAttribute('data-testid') || null,
          text: el.textContent?.trim() || el.getAttribute('aria-label') || '',
          href: el.getAttribute('href') || null,
          inHeader: Boolean(el.closest('header')),
          outlineStyle: cs.outlineStyle,
          outlineColor: cs.outlineColor,
          outlineWidth: cs.outlineWidth,
        };
      });
      if (focused) {
        focused.step = i + 1;
        headerTabSequence.push(focused);
      }
    }

    // Focus first link inside footer and tab through all footer links
    await page.evaluate(() => {
      const firstFooterLink = document.querySelector('footer a');
      if (firstFooterLink) firstFooterLink.focus();
    });
    const footerTabSequence = [];
    for (let i = 0; i < 16; i++) {
      const focused = await page.evaluate(() => {
        const el = document.activeElement;
        if (!el || !el.closest('footer')) return null;
        const cs = getComputedStyle(el);
        return {
          tag: el.tagName.toLowerCase(),
          text: el.textContent?.trim() || el.getAttribute('aria-label') || '',
          href: el.getAttribute('href') || null,
          outlineStyle: cs.outlineStyle,
          outlineWidth: cs.outlineWidth,
        };
      });
      if (focused) {
        footerTabSequence.push({ step: i + 1, ...focused });
      }
      await page.keyboard.press('Tab');
    }

    // Mobile drawer keyboard test (Enter opens drawer, Escape closes drawer)
    await page.setViewportSize({ width: 375, height: 812 });
    await page.waitForTimeout(100);
    await page.focus('[data-testid="mobile-menu-toggle-btn"]');
    await page.keyboard.press('Enter');
    await page.waitForTimeout(100);
    const drawerOpenedByKeyboard = await page.evaluate(() =>
      Boolean(document.querySelector('[data-testid="mobile-nav-drawer"]'))
    );
    await page.keyboard.press('Escape');
    await page.waitForTimeout(100);
    const drawerClosedByEscape = await page.evaluate(
      () => !document.querySelector('[data-testid="mobile-nav-drawer"]')
    );

    report.keyboardNavigationAudit = {
      headerTabSequence,
      footerTabSequence,
      mobileDrawerKeyboard: {
        drawerOpenedByEnter: drawerOpenedByKeyboard,
        drawerClosedByEscape,
      },
    };
    await context.close();
  }

  // 5. Verify 404 Page, sitemap.xml, robots.txt, and hreflang
  {
    const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
    const page = await context.newPage();

    const sitemapResp = await page.goto(`${BASE_URL}/sitemap.xml`);
    const sitemapText = await sitemapResp.text();

    const robotsResp = await page.goto(`${BASE_URL}/robots.txt`);
    const robotsText = await robotsResp.text();

    await page.goto(`${BASE_URL}/non-existent-page-check`, { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(100);
    const notFoundDom = await page.evaluate(() => ({
      present: Boolean(document.querySelector('[data-testid="not-found-page"]')),
      h1Text: document.querySelector('h1')?.textContent?.trim(),
      recoveryLinksCount: document.querySelectorAll('[data-testid="not-found-page"] a').length,
      hreflangs: Array.from(document.querySelectorAll('link[rel="alternate"][hreflang]')).map((l) => ({
        hreflang: l.getAttribute('hreflang'),
        href: l.getAttribute('href'),
      })),
    }));

    report.seoAndStaticFiles = {
      sitemapStatus: sitemapResp.status(),
      sitemapUrlCount: (sitemapText.match(/<url>/g) || []).length,
      sitemapPreview: sitemapText.split('\n').slice(0, 22).join('\n'),
      robotsStatus: robotsResp.status(),
      robotsContent: robotsText.trim(),
      notFoundPage: notFoundDom,
    };

    // Run axe-core on 404 page in light and dark modes
    for (const theme of THEMES) {
      await page.addInitScript((t) => localStorage.setItem('nuzul-theme', t), theme);
      await page.goto(`${BASE_URL}/non-existent-page-check`, { waitUntil: 'domcontentloaded' });
      await page.addScriptTag({ content: axeSource });
      const axeRes = await page.evaluate(async () => {
        // @ts-ignore
        const res = await window.axe.run(document, {
          runOnly: { type: 'tag', values: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'] },
        });
        return res.violations;
      });
      if (axeRes.length > 0) {
        report.axeViolations.push({ route: '/404', theme, violations: axeRes });
      }
    }

    await context.close();
  }

  await browser.close();
  fs.writeFileSync(path.join(OUT_DIR, 'phase3-verification.json'), JSON.stringify(report, null, 2));

  console.log('=== PHASE 3B VERIFICATION SUMMARY ===');
  console.log('Route x Theme x Lang combinations verified:', report.routeThemeLangMatrix.length);
  const allSingleH1 = report.routeThemeLangMatrix.every((r) => r.h1Count === 1);
  console.log('Every route has exactly 1 H1 in both themes & languages:', allSingleH1);
  const allMigrationFound = report.contentMigrationProofs.every((m) => m.foundAr && m.foundEn);
  console.log(
    `Content migration proofs (${report.contentMigrationProofs.length} sections): all found =`,
    allMigrationFound
  );
  if (!allMigrationFound) {
    console.log(
      'Missing migration proofs:',
      report.contentMigrationProofs.filter((m) => !m.foundAr || !m.foundEn)
    );
  }
  console.log('Header audit:', JSON.stringify(report.headerFooterAudit));
  console.log('Mobile drawer keyboard test:', JSON.stringify(report.keyboardNavigationAudit.mobileDrawerKeyboard));
  console.log('Sitemap status:', report.seoAndStaticFiles.sitemapStatus, 'URLs:', report.seoAndStaticFiles.sitemapUrlCount);
  console.log('Robots status:', report.seoAndStaticFiles.robotsStatus);
  console.log('404 page rendered:', report.seoAndStaticFiles.notFoundPage.present);
  console.log('Axe violations on 404:', report.axeViolations.length);
  console.log('Console errors:', report.consoleErrors.length);
  console.log('Page errors:', report.pageErrors.length);
})();
