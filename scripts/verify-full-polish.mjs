import { createRequire } from 'module';
import fs from 'fs';
import path from 'path';

const require = createRequire('/usr/local/share/bun-global/node_modules/');
const { chromium } = require('playwright');

const BASE_URL = 'http://localhost:3000';
const OUT_DIR = path.resolve('audit/final-polish/screenshots');
fs.mkdirSync(OUT_DIR, { recursive: true });

const ROUTES = [
  { path: '/', name: 'home' },
  { path: '/services', name: 'services' },
  { path: '/services?cat=infrastructure', name: 'services-infra' },
  { path: '/pricing', name: 'pricing' },
  { path: '/hosting', name: 'hosting' },
  { path: '/case-studies', name: 'case-studies' },
  { path: '/blog', name: 'blog' },
  { path: '/about', name: 'about' },
  { path: '/contact', name: 'contact' },
];

const FORBIDDEN_PATTERNS = [
  /\[VERIFY/i,
  /نُزول|تِك/,
  /بمعايير عالمية/,
  /في مصر والخليج/,
  /المصانع وسلاسل/,
  /حوكمة/,
  /عناقيد/,
  /استباقي/,
  /100% Secured/i,
  /تفعيل فوري/,
  /تحويل لحظي/,
  /جدار الحماية|جدران الحماية/,
  /محاكاة توضيحية/,
];

async function run() {
  const browser = await chromium.launch({ headless: true });
  const results = [];
  const consoleErrors = [];
  const pageErrors = [];

  try {
    // 1. Desktop 1440px (Light & Dark) across all routes
    for (const theme of ['light', 'dark']) {
      const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
      await context.addInitScript((t) => {
        localStorage.setItem('nuzul-theme', t);
        localStorage.setItem('nuzul-lang', 'ar');
      }, theme);
      const page = await context.newPage();
      page.on('console', (msg) => {
        if (msg.type() === 'error') consoleErrors.push(`${theme}: ${msg.text()}`);
      });
      page.on('pageerror', (err) => pageErrors.push(`${theme}: ${err.message}`));

      for (const route of ROUTES) {
        await page.goto(`${BASE_URL}${route.path}`, { waitUntil: 'networkidle' });
        await page.waitForTimeout(350);

        const metrics = await page.evaluate((patternsSource) => {
          const text = document.body.innerText || '';
          const overflow = document.documentElement.scrollWidth > window.innerWidth + 1;
          const footer = document.querySelector('footer');
          const footerStyle = footer ? getComputedStyle(footer) : null;
          const footerBg = footerStyle ? footerStyle.backgroundColor : 'none';
          const footerColor = footerStyle ? footerStyle.color : 'none';
          const matches = [];
          for (const src of patternsSource) {
            const re = new RegExp(src.source, src.flags);
            const m = text.match(re);
            if (m) matches.push(m[0]);
          }
          const cardCount = document.querySelectorAll('[data-testid^="service-card-"]').length;
          return {
            overflow,
            footerBg,
            footerColor,
            forbiddenMatches: matches,
            cardCount,
            title: document.title,
          };
        }, FORBIDDEN_PATTERNS.map((r) => ({ source: r.source, flags: r.flags })));

        results.push({ viewport: '1440', theme, route: route.path, ...metrics });

        if (['home', 'services', 'pricing', 'contact'].includes(route.name)) {
          await page.screenshot({
            path: path.join(OUT_DIR, `${route.name}-1440-${theme}.png`),
            fullPage: true,
          });
        }
      }
      await context.close();
    }

    // 2. Mobile 375px Light & Dark on key pages + Pillar 1 navigation test
    for (const theme of ['light', 'dark']) {
      const context = await browser.newContext({ viewport: { width: 375, height: 812 } });
      await context.addInitScript((t) => {
        localStorage.setItem('nuzul-theme', t);
        localStorage.setItem('nuzul-lang', 'ar');
      }, theme);
      const page = await context.newPage();
      page.on('console', (msg) => {
        if (msg.type() === 'error') consoleErrors.push(`375-${theme}: ${msg.text()}`);
      });
      page.on('pageerror', (err) => pageErrors.push(`375-${theme}: ${err.message}`));

      for (const route of [ROUTES[0], ROUTES[1], ROUTES[3], ROUTES[8]]) {
        await page.goto(`${BASE_URL}${route.path}`, { waitUntil: 'networkidle' });
        await page.waitForTimeout(350);
        const m = await page.evaluate(() => ({
          overflow: document.documentElement.scrollWidth > window.innerWidth + 1,
          footerBg: getComputedStyle(document.querySelector('footer')).backgroundColor,
        }));
        results.push({ viewport: '375', theme, route: route.path, ...m, forbiddenMatches: [] });

        if (route.name === 'home') {
          await page.screenshot({
            path: path.join(OUT_DIR, `home-375-${theme}.png`),
            fullPage: true,
          });
        }
      }

      // Click Home Pillar 1 and verify it filters /services to infrastructure!
      if (theme === 'light') {
        await page.goto(`${BASE_URL}/`, { waitUntil: 'networkidle' });
        await page.click('[data-testid="pillar-card-link-infrastructure"]');
        await page.waitForTimeout(350);
        const navCheck = await page.evaluate(() => ({
          url: window.location.pathname + window.location.search,
          activeChip: document.querySelector('[data-testid="active-filter-chip-cat"]')?.textContent?.trim() || '',
          cardsCount: document.querySelectorAll('[data-testid^="service-card-"]').length,
        }));
        results.push({ test: 'pillar-1-filter-navigation', ...navCheck });
      }

      await context.close();
    }

    // 3. Verify English mode category localization on /services
    {
      const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
      await context.addInitScript(() => {
        localStorage.setItem('nuzul-theme', 'light');
        localStorage.setItem('nuzul-lang', 'en');
      });
      const page = await context.newPage();
      await page.goto(`${BASE_URL}/services`, { waitUntil: 'networkidle' });
      await page.waitForTimeout(350);
      const enCheck = await page.evaluate(() => {
        const firstBadge = document.querySelector('[data-testid^="service-card-"] span')?.textContent?.trim() || '';
        const hasArabicBadge = /[\u0600-\u06FF]/.test(firstBadge);
        const showMoreCount = document.querySelectorAll('[data-testid^="service-expand-"]').length;
        return { firstBadge, hasArabicBadge, showMoreCount, title: document.title };
      });
      results.push({ test: 'en-services-localization', ...enCheck });
      await context.close();
    }
  } finally {
    await browser.close();
  }

  const report = {
    consoleErrors,
    pageErrors,
    totalChecks: results.length,
    anyOverflow: results.some((r) => r.overflow === true),
    anyForbiddenMatches: results.filter((r) => r.forbiddenMatches && r.forbiddenMatches.length > 0),
    results,
  };

  fs.writeFileSync(path.resolve('audit/final-polish/report.json'), JSON.stringify(report, null, 2));
  console.log(JSON.stringify({
    consoleErrorsCount: consoleErrors.length,
    pageErrorsCount: pageErrors.length,
    anyOverflow: report.anyOverflow,
    anyForbiddenMatches: report.anyForbiddenMatches,
    footerBgs: [...new Set(results.filter((r) => r.footerBg).map((r) => `${r.viewport}-${r.theme}: ${r.footerBg}`))],
    pillarNav: results.find((r) => r.test === 'pillar-1-filter-navigation'),
    enLocalization: results.find((r) => r.test === 'en-services-localization'),
  }, null, 2));

  if (consoleErrors.length || pageErrors.length || report.anyOverflow || report.anyForbiddenMatches.length) {
    process.exit(1);
  }
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
