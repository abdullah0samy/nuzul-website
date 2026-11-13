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
const HEADERS_DIR = path.join(OUT_DIR, 'screenshots', 'headers');
const AFTER_IMAGES_DIR = path.join(OUT_DIR, 'screenshots', 'after-images');
const ISSUES_DIR = path.join(OUT_DIR, 'screenshots', 'issues');

fs.mkdirSync(HEADERS_DIR, { recursive: true });
fs.mkdirSync(AFTER_IMAGES_DIR, { recursive: true });
fs.mkdirSync(ISSUES_DIR, { recursive: true });

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

const WIDTHS = [320, 375, 414, 768, 1024, 1180, 1280, 1440, 1920];
const THEMES = ['light', 'dark'];
const LANGS = ['ar', 'en'];

(async () => {
  const browser = await chromium.launch({ headless: true });

  const headerAuditResults = [];
  const drawerFocusTrapAudit = {};
  const responsiveIssues = [];

  // 1. Header Audit + 36 Screenshots (9 widths x 2 langs x 2 themes)
  console.log('Running Header Audit across 9 widths x 2 langs x 2 themes...');
  for (const theme of THEMES) {
    for (const lang of LANGS) {
      const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
      await context.addInitScript(
        ({ t, l }) => {
          localStorage.setItem('nuzul-theme', t);
          localStorage.setItem('nuzul-lang', l);
        },
        { t: theme, l: lang }
      );
      const page = await context.newPage();

      for (const width of WIDTHS) {
        await page.setViewportSize({ width, height: 900 });
        await page.goto(`${BASE_URL}/?lang=${lang}`, { waitUntil: 'domcontentloaded' });
        await page.waitForTimeout(100);

        const screenshotPath = path.join(HEADERS_DIR, `header-${width}px-${lang}-${theme}.png`);
        const headerEl = await page.$('header');
        if (headerEl) {
          await headerEl.screenshot({ path: screenshotPath });
        }

        const check = await page.evaluate((vw) => {
          const header = document.querySelector('header');
          if (!header) return { ok: false, reason: 'No header' };
          const headerRect = header.getBoundingClientRect();
          const pageOverflow = document.documentElement.scrollWidth > vw + 1;
          const headerOverflow = header.scrollWidth > vw + 1;

          // Check all visible links & buttons inside header
          const items = Array.from(header.querySelectorAll('a, button')).filter((el) => {
            const style = getComputedStyle(el);
            const r = el.getBoundingClientRect();
            return style.display !== 'none' && style.visibility !== 'hidden' && r.width > 0 && r.height > 0;
          });

          const wrappedItems = [];
          for (const el of items) {
            const style = getComputedStyle(el);
            const whiteSpace = style.whiteSpace;
            // Check any child text spans or the element itself
            const lineHeight = parseFloat(style.lineHeight) || 24;
            const paddingBlock = (parseFloat(style.paddingTop) || 0) + (parseFloat(style.paddingBottom) || 0);
            const borderBlock = (parseFloat(style.borderTopWidth) || 0) + (parseFloat(style.borderBottomWidth) || 0);
            const contentHeight = el.getBoundingClientRect().height - paddingBlock - borderBlock;

            if (whiteSpace !== 'nowrap' || contentHeight > lineHeight * 1.65) {
              wrappedItems.push({
                selector: el.getAttribute('data-testid') || el.tagName.toLowerCase(),
                text: el.textContent?.trim(),
                whiteSpace,
                contentHeight: Math.round(contentHeight),
                lineHeight: Math.round(lineHeight),
              });
            }
          }

          return {
            width: vw,
            headerWidth: Math.round(headerRect.width),
            headerScrollWidth: header.scrollWidth,
            pageOverflow,
            headerOverflow,
            visibleItemCount: items.length,
            wrappedItemsCount: wrappedItems.length,
            wrappedItems,
            mode: vw >= 1024 ? 'desktop-inline' : 'hamburger-drawer',
          };
        }, width);

        headerAuditResults.push({
          width,
          lang,
          theme,
          screenshot: `audit/phase-3/screenshots/headers/header-${width}px-${lang}-${theme}.png`,
          ...check,
        });
      }
      await context.close();
    }
  }

  // 2. Verify Drawer Focus Trap + Escape Key at 375px
  {
    const context = await browser.newContext({ viewport: { width: 375, height: 812 } });
    await context.addInitScript(() => {
      localStorage.setItem('nuzul-theme', 'light');
      localStorage.setItem('nuzul-lang', 'ar');
    });
    const page = await context.newPage();
    await page.goto(`${BASE_URL}/`, { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(100);

    await page.click('[data-testid="mobile-menu-toggle-btn"]');
    await page.waitForTimeout(100);

    const focusCycle = [];
    for (let i = 0; i < 9; i++) {
      const activeInfo = await page.evaluate(() => {
        const el = document.activeElement;
        const drawer = document.querySelector('[data-testid="mobile-nav-drawer"]');
        return {
          tag: el?.tagName.toLowerCase(),
          text: el?.textContent?.trim(),
          testId: el?.getAttribute('data-testid') || null,
          insideDrawer: Boolean(drawer && el && drawer.contains(el)),
        };
      });
      focusCycle.push(activeInfo);
      await page.keyboard.press('Tab');
    }

    await page.keyboard.press('Escape');
    await page.waitForTimeout(100);
    const closedAfterEsc = await page.evaluate(
      () => !document.querySelector('[data-testid="mobile-nav-drawer"]')
    );

    drawerFocusTrapAudit.allTabsTrappedInsideDrawer = focusCycle.every((f) => f.insideDrawer);
    drawerFocusTrapAudit.focusCycle = focusCycle;
    drawerFocusTrapAudit.closedAfterEsc = closedAfterEsc;
    await context.close();
  }

  // 3. Capture After-Images Screenshots at 375, 768, 1440 in Light and Dark (Part ج Evidence)
  console.log('Capturing After-Images Screenshots...');
  const imageCompareRoutes = [
    { path: '/', name: 'home' },
    { path: '/case-studies', name: 'case-studies' },
    { path: '/case-studies/case-1', name: 'case-study-detail' },
    { path: '/blog', name: 'blog' },
    { path: '/blog/immutable-cloud-backup-ransomware-protection', name: 'blog-detail' },
    { path: '/contact', name: 'contact' },
  ];
  for (const theme of THEMES) {
    for (const w of [375, 768, 1440]) {
      const ctx = await browser.newContext({ viewport: { width: w, height: 900 } });
      await ctx.addInitScript((t) => {
        localStorage.setItem('nuzul-theme', t);
        localStorage.setItem('nuzul-lang', 'ar');
      }, theme);
      const page = await ctx.newPage();
      for (const r of imageCompareRoutes) {
        await page.goto(`${BASE_URL}${r.path}`, { waitUntil: 'domcontentloaded' });
        await page.waitForTimeout(100);
        await page.screenshot({
          path: path.join(AFTER_IMAGES_DIR, `${r.name}-${w}-${theme}.png`),
          fullPage: false,
        });
      }
      await ctx.close();
    }
  }

  // 4. Site-Wide Responsive Audit (11 routes x 9 widths x 2 langs x 2 themes = 396 checks)
  console.log('Running Site-Wide Responsive Audit across all 11 routes x 9 widths x 2 langs x 2 themes...');
  for (const theme of THEMES) {
    for (const lang of LANGS) {
      const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
      await context.addInitScript(
        ({ t, l }) => {
          localStorage.setItem('nuzul-theme', t);
          localStorage.setItem('nuzul-lang', l);
        },
        { t: theme, l: lang }
      );
      const page = await context.newPage();

      for (const route of ROUTES) {
        await page.goto(`${BASE_URL}${route.path}?lang=${lang}`, { waitUntil: 'domcontentloaded' });
        await page.waitForTimeout(50);
        await page.addScriptTag({ content: axeSource });

        for (const width of WIDTHS) {
          await page.setViewportSize({ width, height: 900 });
          await page.waitForTimeout(20);

          const pageIssues = await page.evaluate((vw) => {
            const found = [];

            const getSelector = (el) => {
              if (el.getAttribute('data-testid')) return `[data-testid="${el.getAttribute('data-testid')}"]`;
              if (el.id) return `#${el.id}`;
              const cls = typeof el.className === 'string' && el.className.trim()
                ? '.' + el.className.trim().split(/\s+/).slice(0, 2).join('.')
                : '';
              return `${el.tagName.toLowerCase()}${cls}`;
            };

            // (A) Horizontal page overflow
            if (document.documentElement.scrollWidth > vw + 1) {
              found.push({
                issue: `Horizontal page overflow (scrollWidth=${document.documentElement.scrollWidth} > viewport=${vw})`,
                selector: 'html',
              });
            }

            // (B) Header items, buttons, badges, tabs wrapping unexpectedly
            const noWrapCandidates = Array.from(
              document.querySelectorAll('header a, header button, .btn-primary, .btn-secondary, .btn-navy-secondary')
            ).filter((el) => {
              const s = getComputedStyle(el);
              const r = el.getBoundingClientRect();
              return s.display !== 'none' && s.visibility !== 'hidden' && r.width > 0 && r.height > 0;
            });

            for (const el of noWrapCandidates) {
              const s = getComputedStyle(el);
              const lh = parseFloat(s.lineHeight) || 24;
              const pad = (parseFloat(s.paddingTop) || 0) + (parseFloat(s.paddingBottom) || 0);
              const brd = (parseFloat(s.borderTopWidth) || 0) + (parseFloat(s.borderBottomWidth) || 0);
              const ch = el.getBoundingClientRect().height - pad - brd;
              if (ch > lh * 1.75) {
                found.push({
                  issue: `Unintended multi-line wrap on control/button (contentHeight=${Math.round(ch)}px > lineHeight=${Math.round(lh)}px)`,
                  selector: getSelector(el),
                });
              }
            }

            // (C) Text clipped horizontally (scrollWidth > clientWidth + 2 when overflow-x is hidden/clip without text-ellipsis)
            const textContainers = Array.from(
              document.querySelectorAll('h1, h2, h3, p, button:not(.sr-only), a:not(.sr-only), th, td')
            ).filter((el) => {
              const s = getComputedStyle(el);
              const r = el.getBoundingClientRect();
              return (
                !el.classList.contains('sr-only') &&
                s.display !== 'none' &&
                s.visibility !== 'hidden' &&
                r.width > 1 &&
                r.height > 1
              );
            });
            for (const el of textContainers) {
              const s = getComputedStyle(el);
              if (
                (s.overflowX === 'hidden' || s.overflowX === 'clip') &&
                s.textOverflow !== 'ellipsis' &&
                el.scrollWidth > el.clientWidth + 4
              ) {
                found.push({
                  issue: `Text clipped horizontally (scrollWidth=${el.scrollWidth} > clientWidth=${el.clientWidth})`,
                  selector: getSelector(el),
                });
              }
            }

            // (D) Mobile Touch Targets (< 44px height on buttons / standalone action controls at mobile widths <= 414px)
            if (vw <= 414) {
              const controls = Array.from(
                document.querySelectorAll('header button, header a:not(.sr-only), .btn-primary, .btn-secondary, .btn-navy-secondary, input:not([type="checkbox"]):not([type="radio"]), select')
              ).filter((el) => {
                const s = getComputedStyle(el);
                const r = el.getBoundingClientRect();
                return s.display !== 'none' && s.visibility !== 'hidden' && r.width > 0 && r.height > 0;
              });
              for (const el of controls) {
                const r = el.getBoundingClientRect();
                if (r.height < 43.5 || r.width < 43.5) {
                  found.push({
                    issue: `Touch target under 44px on mobile (${Math.round(r.width)}x${Math.round(r.height)}px)`,
                    selector: getSelector(el),
                  });
                }
              }
            }

            // (E) Images stretched or missing alt text
            const imgs = Array.from(document.querySelectorAll('img')).filter((img) => {
              const s = getComputedStyle(img);
              const r = img.getBoundingClientRect();
              return s.display !== 'none' && s.visibility !== 'hidden' && r.width > 0 && r.height > 0;
            });
            for (const img of imgs) {
              const alt = img.getAttribute('alt');
              if (alt === null || alt.trim() === '') {
                found.push({
                  issue: 'Image missing non-empty alt attribute',
                  selector: getSelector(img),
                });
              }
              if (img.naturalWidth > 0 && img.naturalHeight > 0) {
                const s = getComputedStyle(img);
                if (s.objectFit !== 'contain' && s.objectFit !== 'cover') {
                  const natRatio = img.naturalWidth / img.naturalHeight;
                  const r = img.getBoundingClientRect();
                  const renRatio = r.width / r.height;
                  if (Math.abs(natRatio - renRatio) / natRatio > 0.08) {
                    found.push({
                      issue: `Image aspect ratio stretched (natural=${natRatio.toFixed(2)}, rendered=${renRatio.toFixed(2)})`,
                      selector: getSelector(img),
                    });
                  }
                }
              }
            }

            return found;
          }, width);

          // Run axe color-contrast check per route/theme/lang
          if (width === 1440) {
            const contrastViolations = await page.evaluate(async () => {
              // @ts-ignore
              const res = await window.axe.run(document, {
                runOnly: { type: 'rule', values: ['color-contrast'] },
              });
              return res.violations.map((v) => ({
                issue: `Contrast failure: ${v.help} (${v.nodes.length} nodes)`,
                selector: v.nodes[0]?.target?.join(' ') || 'unknown',
              }));
            });
            pageIssues.push(...contrastViolations);
          }

          if (pageIssues.length > 0) {
            const shotName = `issue-${route.name}-${width}-${theme}-${lang}.png`;
            const shotPath = path.join(ISSUES_DIR, shotName);
            await page.screenshot({ path: shotPath });
            for (const pi of pageIssues) {
              responsiveIssues.push({
                route: route.path,
                width,
                theme,
                lang,
                issue: pi.issue,
                selector: pi.selector,
                screenshot: `audit/phase-3/screenshots/issues/${shotName}`,
              });
            }
          }
        }
      }
      await context.close();
    }
  }

  await browser.close();

  const summary = {
    timestamp: new Date().toISOString(),
    totalCombinationsChecked: ROUTES.length * WIDTHS.length * THEMES.length * LANGS.length,
    headerScreenshotsCount: headerAuditResults.length,
    headerAllPassedNoWrapNoOverflow: headerAuditResults.every(
      (h) => !h.pageOverflow && !h.headerOverflow && h.wrappedItemsCount === 0
    ),
    drawerFocusTrapAudit,
    responsiveIssuesCount: responsiveIssues.length,
    responsiveIssues,
    headerAuditResults,
  };

  fs.writeFileSync(
    path.join(OUT_DIR, 'responsive-audit-report.json'),
    JSON.stringify(summary, null, 2)
  );

  console.log('=== RESPONSIVE AUDIT SUMMARY ===');
  console.log('Total route x width x theme x lang combinations checked:', summary.totalCombinationsChecked);
  console.log('Header screenshots captured:', summary.headerScreenshotsCount);
  console.log('Header all passed (0 wrap, 0 overflow across all 36 checks):', summary.headerAllPassedNoWrapNoOverflow);
  if (!summary.headerAllPassedNoWrapNoOverflow) {
    console.log(
      'Failed header checks:',
      headerAuditResults.filter((h) => h.pageOverflow || h.headerOverflow || h.wrappedItemsCount > 0)
    );
  }
  console.log('Drawer focus trap & Esc:', JSON.stringify(drawerFocusTrapAudit));
  console.log('Total site-wide responsive issues found:', summary.responsiveIssuesCount);
  if (summary.responsiveIssuesCount > 0) {
    console.log('Sample issues:', JSON.stringify(responsiveIssues.slice(0, 15), null, 2));
  }
})();
