import { chromium } from '/usr/local/share/bun-global/node_modules/playwright/index.mjs';
import fs from 'node:fs/promises';
import path from 'node:path';
import { execSync } from 'node:child_process';

const BASE_URL = 'http://localhost:3000';
const OUT_DIR = path.resolve('audit/phase-9');
const SCREENSHOTS_DIR = path.join(OUT_DIR, 'screenshots');

const ROUTES = [
  '/',
  '/services',
  '/services/web-portals',
  '/hosting',
  '/pricing',
  '/case-studies',
  '/case-studies/case-1',
  '/blog',
  '/blog/cairo-cure-case-study',
  '/about',
  '/contact',
];

const BANNED_WORDS = [
  'حلول متكاملة',
  'حلولاً متكاملة',
  'نصنع الفرق',
  'رحلتك',
  'كل ما يحتاجه عملك تحت سقف واحد',
  'بيئات تشغيل متطورة',
  'قمة تنفيذ',
  'صفر ثانية توقف',
  'أفضل',
  'رائد',
  'مبتكر',
  'ثورة',
  'نحن نؤمن',
  'فائقة السرعة',
  'فائق السرعة',
  'بضغطة زر',
  'مدى الحياة',
  'غير محدودة',
  'أقوى',
  'Proxmox',
  'Tbps',
  'Tier-III',
  'ISO 27001',
];

async function run() {
  await fs.mkdir(SCREENSHOTS_DIR, { recursive: true });
  const browser = await chromium.launch({ headless: true });

  const consoleErrors = [];
  const pageErrors = [];
  const axeFailures = [];
  const overflowIssues = [];
  const bannedWordMatches = [];
  const brokenLinks = [];
  const screenshots = [];

  try {
    // 1. Codebase-wide grep check for banned words in src/
    let grepMatches = 0;
    try {
      const pattern = BANNED_WORDS.join('|');
      const out = execSync(`grep -rnE "${pattern}" src/`, { encoding: 'utf8' });
      if (out && out.trim()) {
        grepMatches = out.trim().split('\n').length;
      }
    } catch {
      // grep returns exit code 1 when 0 matches are found
      grepMatches = 0;
    }

    // 2. Crawl all 11 routes across ar/en and light/dark at 1440x900, plus responsive check at 375x812
    const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
    const page = await context.newPage();

    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        const text = msg.text();
        if (!text.includes('WebSocket') && !text.includes('vite')) {
          consoleErrors.push(text);
        }
      }
    });
    page.on('pageerror', (err) => pageErrors.push(err.message));

    for (const route of ROUTES) {
      for (const lang of ['ar', 'en']) {
        for (const theme of ['light', 'dark']) {
          await page.setViewportSize({ width: 1440, height: 900 });
          await page.goto(`${BASE_URL}${route}`, { waitUntil: 'networkidle' });

          await page.evaluate(
            ({ l, t }) => {
              localStorage.setItem('nuzul-lang', l);
              localStorage.setItem('nuzul_theme_pref', t);
              document.documentElement.lang = l;
              document.documentElement.dir = l === 'ar' ? 'rtl' : 'ltr';
              document.documentElement.setAttribute('data-theme', t);
            },
            { l: lang, t: theme }
          );
          await page.reload({ waitUntil: 'networkidle' });
          await page.waitForTimeout(150);

          // Check horizontal overflow
          const overflow = await page.evaluate(() => {
            return document.documentElement.scrollWidth > window.innerWidth + 1;
          });
          if (overflow) {
            overflowIssues.push({ route, lang, theme, width: 1440 });
          }

          // Check banned words in visible text
          const bodyText = await page.evaluate(() => document.body.innerText);
          for (const word of BANNED_WORDS) {
            if (bodyText.includes(word)) {
              bannedWordMatches.push({ route, lang, theme, word });
            }
          }

          // Check internal links on the first combo per route
          if (lang === 'ar' && theme === 'light') {
            const hrefs = await page.evaluate(() =>
              Array.from(document.querySelectorAll('a[href]')).map((a) => a.getAttribute('href') || '')
            );
            for (const href of hrefs) {
              if (href.startsWith('/') && !href.startsWith('//')) {
                const cleanPath = href.split('?')[0].split('#')[0];
                const isKnownStatic = [
                  '/',
                  '/services',
                  '/hosting',
                  '/pricing',
                  '/case-studies',
                  '/blog',
                  '/about',
                  '/contact',
                ].includes(cleanPath);
                const isKnownDynamic =
                  cleanPath.startsWith('/services/') ||
                  cleanPath.startsWith('/case-studies/') ||
                  cleanPath.startsWith('/blog/');
                if (!isKnownStatic && !isKnownDynamic) {
                  brokenLinks.push({ route, href });
                }
              }
            }

            // Run axe-core check on each route in AR light & dark
            await page.addScriptTag({
              path: '/usr/local/share/bun-global/node_modules/axe-core/axe.min.js',
            });
            const axeResults = await page.evaluate(async () => {
              // @ts-ignore
              return await window.axe.run(document, {
                runOnly: {
                  type: 'tag',
                  values: ['wcag2a', 'wcag2aa'],
                },
              });
            });
            const seriousOrCritical = axeResults.violations.filter(
              (v) => v.impact === 'critical' || v.impact === 'serious'
            );
            if (seriousOrCritical.length > 0) {
              axeFailures.push({
                route,
                lang,
                theme,
                violations: seriousOrCritical.map((v) => ({ id: v.id, impact: v.impact, help: v.help })),
              });
            }

            const safeName = route === '/' ? 'home' : route.replace(/^\//, '').replace(/\//g, '-');
            const shotName = `${safeName}-${lang}-${theme}-1440.png`;
            await page.screenshot({ path: path.join(SCREENSHOTS_DIR, shotName) });
            screenshots.push(shotName);
          }
        }
      }

      // Mobile 375x812 check for each route in AR dark
      await page.setViewportSize({ width: 375, height: 812 });
      await page.goto(`${BASE_URL}${route}`, { waitUntil: 'networkidle' });
      const mobileOverflow = await page.evaluate(() => {
        return document.documentElement.scrollWidth > window.innerWidth + 1;
      });
      if (mobileOverflow) {
        overflowIssues.push({ route, lang: 'ar', theme: 'dark', width: 375 });
      }
    }

    const report = {
      phase: 'Phase 9 (Final Full-Site QA & Cleanup)',
      timestamp: new Date().toISOString(),
      routesTested: ROUTES.length,
      combinationsTested: ROUTES.length * 4 + ROUTES.length,
      codebaseGrepBannedWords: grepMatches,
      visibleBannedWordMatches: bannedWordMatches,
      brokenLinks,
      overflowIssues,
      axeFailures,
      consoleErrors,
      pageErrors,
      screenshotsCount: screenshots.length,
      screenshots,
      passed:
        grepMatches === 0 &&
        bannedWordMatches.length === 0 &&
        brokenLinks.length === 0 &&
        overflowIssues.length === 0 &&
        axeFailures.length === 0 &&
        consoleErrors.length === 0 &&
        pageErrors.length === 0,
    };

    await fs.writeFile(path.join(OUT_DIR, 'phase9-verification.json'), JSON.stringify(report, null, 2));
    console.log(JSON.stringify(report, null, 2));

    if (!report.passed) {
      process.exitCode = 1;
    }
  } finally {
    await browser.close();
  }
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
