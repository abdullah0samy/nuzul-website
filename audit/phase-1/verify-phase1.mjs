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
const OUT_DIR = '/app/applet/audit/phase-1';
fs.mkdirSync(OUT_DIR, { recursive: true });

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
];

const VIEWPORTS = [
  { width: 375, height: 812 },
  { width: 768, height: 1024 },
  { width: 1440, height: 900 },
];

const THEMES = ['light', 'dark'];

function parseRgb(rgbStr) {
  const m = rgbStr.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
  if (!m) return [0, 0, 0];
  return [Number(m[1]), Number(m[2]), Number(m[3])];
}

function luminance([r, g, b]) {
  const a = [r, g, b].map((v) => {
    v /= 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}

function contrastRatio(rgb1, rgb2) {
  const l1 = luminance(parseRgb(rgb1));
  const l2 = luminance(parseRgb(rgb2));
  const brightest = Math.max(l1, l2);
  const darkest = Math.min(l1, l2);
  return Number(((brightest + 0.05) / (darkest + 0.05)).toFixed(2));
}

(async () => {
  const browser = await chromium.launch({ headless: true });
  const report = {
    timestamp: new Date().toISOString(),
    themePersistence: {},
    computedTokens: {},
    logoVariants: {},
    tableVerification: {},
    axeSummary: [],
    routeMatrix: [],
    consoleErrors: [],
    pageErrors: [],
    forbiddenTextOccurrences: [],
  };

  // 1. Verify Theme Toggle & Reload Persistence (Light / Dark / System) + Tokens + Logo Variants
  {
    const context = await browser.newContext({
      viewport: { width: 1440, height: 900 },
      colorScheme: 'dark', // OS prefers dark so we can test 'system' resolving to 'dark'
    });
    const page = await context.newPage();
    await page.goto(`${BASE_URL}/`, { waitUntil: 'domcontentloaded' });

    // Default should be system -> resolves to dark when OS is dark
    const initialAttr = await page.evaluate(() => ({
      dataTheme: document.documentElement.getAttribute('data-theme'),
      dataThemeMode: document.documentElement.getAttribute('data-theme-mode'),
    }));

    // Click Light button inside theme menu
    await page.click('[data-testid="theme-menu-btn"]');
    await page.click('[data-testid="theme-btn-light"]');
    await page.reload({ waitUntil: 'domcontentloaded' });
    const afterLightReload = await page.evaluate(() => ({
      stored: localStorage.getItem('nuzul-theme'),
      dataTheme: document.documentElement.getAttribute('data-theme'),
      dataThemeMode: document.documentElement.getAttribute('data-theme-mode'),
      colorScheme: document.documentElement.style.colorScheme,
      headerLogoSrc: document.querySelector('header img')?.getAttribute('src'),
      footerLogoSrc: document.querySelector('footer img')?.getAttribute('src'),
      tokens: [
        '--bg',
        '--surface',
        '--surface-2',
        '--border',
        '--text',
        '--text-muted',
        '--accent',
        '--accent-contrast',
        '--success',
        '--warning',
        '--danger',
        '--focus',
      ].reduce((acc, k) => {
        acc[k] = getComputedStyle(document.documentElement).getPropertyValue(k).trim();
        return acc;
      }, {}),
    }));

    // Click Dark button inside theme menu
    await page.click('[data-testid="theme-menu-btn"]');
    await page.click('[data-testid="theme-btn-dark"]');
    await page.reload({ waitUntil: 'domcontentloaded' });
    const afterDarkReload = await page.evaluate(() => ({
      stored: localStorage.getItem('nuzul-theme'),
      dataTheme: document.documentElement.getAttribute('data-theme'),
      dataThemeMode: document.documentElement.getAttribute('data-theme-mode'),
      colorScheme: document.documentElement.style.colorScheme,
      headerLogoSrc: document.querySelector('header img')?.getAttribute('src'),
      footerLogoSrc: document.querySelector('footer img')?.getAttribute('src'),
      tokens: [
        '--bg',
        '--surface',
        '--surface-2',
        '--border',
        '--text',
        '--text-muted',
        '--accent',
        '--accent-contrast',
        '--success',
        '--warning',
        '--danger',
        '--focus',
      ].reduce((acc, k) => {
        acc[k] = getComputedStyle(document.documentElement).getPropertyValue(k).trim();
        return acc;
      }, {}),
    }));

    // Click System button inside theme menu
    await page.click('[data-testid="theme-menu-btn"]');
    await page.click('[data-testid="theme-btn-system"]');
    await page.reload({ waitUntil: 'domcontentloaded' });
    const afterSystemReload = await page.evaluate(() => ({
      stored: localStorage.getItem('nuzul-theme'),
      dataTheme: document.documentElement.getAttribute('data-theme'),
      dataThemeMode: document.documentElement.getAttribute('data-theme-mode'),
      colorScheme: document.documentElement.style.colorScheme,
    }));

    report.themePersistence = {
      initialWithDarkOS: initialAttr,
      afterLightReload: {
        stored: afterLightReload.stored,
        dataTheme: afterLightReload.dataTheme,
        dataThemeMode: afterLightReload.dataThemeMode,
        colorScheme: afterLightReload.colorScheme,
      },
      afterDarkReload: {
        stored: afterDarkReload.stored,
        dataTheme: afterDarkReload.dataTheme,
        dataThemeMode: afterDarkReload.dataThemeMode,
        colorScheme: afterDarkReload.colorScheme,
      },
      afterSystemReload,
    };

    report.computedTokens = {
      light: afterLightReload.tokens,
      dark: afterDarkReload.tokens,
    };

    report.logoVariants = {
      lightModeHeaderLogo: afterLightReload.headerLogoSrc,
      lightModeFooterLogo: afterLightReload.footerLogoSrc,
      darkModeHeaderLogo: afterDarkReload.headerLogoSrc,
      darkModeFooterLogo: afterDarkReload.footerLogoSrc,
    };

    await context.close();
  }

  // 2. Verify Plans Comparison Table on /hosting (Contrast, RTL/LTR Bidi, Group Headers, Sticky Header, CTAs)
  for (const theme of THEMES) {
    const context = await browser.newContext({
      viewport: { width: 1440, height: 900 },
    });
    const page = await context.newPage();
    await page.addInitScript((t) => {
      localStorage.setItem('nuzul-theme', t);
    }, theme);

    await page.goto(`${BASE_URL}/hosting`, { waitUntil: 'domcontentloaded' });

    const tableData = await page.evaluate(() => {
      const getEffectiveBg = (el) => {
        let cur = el;
        while (cur && cur !== document.documentElement) {
          const bg = getComputedStyle(cur).backgroundColor;
          if (bg && bg !== 'rgba(0, 0, 0, 0)' && bg !== 'transparent') {
            return bg;
          }
          cur = cur.parentElement;
        }
        return getComputedStyle(document.body).backgroundColor;
      };

      const groupHeaders = Array.from(
        document.querySelectorAll('#compare-plans [data-testid^="group-header-"]')
      ).map((th) => {
        const cs = getComputedStyle(th);
        return {
          id: th.getAttribute('data-testid'),
          text: th.textContent.trim(),
          fontFamily: cs.fontFamily,
          color: cs.color,
          bg: getEffectiveBg(th),
          hasParentheses: /[()]/.test(th.textContent),
          isMonospace: /mono/i.test(cs.fontFamily),
        };
      });

      const sampleCells = Array.from(
        document.querySelectorAll('#compare-plans [data-testid^="spec-cell-"]')
      ).map((td) => {
        const bdi = td.querySelector('bdi[dir="ltr"]');
        const targetEl = bdi || td.querySelector('span') || td;
        const cs = getComputedStyle(targetEl);
        return {
          testId: td.getAttribute('data-testid'),
          text: td.textContent.trim(),
          hasBdiLtr: Boolean(bdi),
          unicodeBidi: bdi ? getComputedStyle(bdi).unicodeBidi : cs.unicodeBidi,
          direction: bdi ? getComputedStyle(bdi).direction : cs.direction,
          color: cs.color,
          bg: getEffectiveBg(td),
        };
      });

      const rowLabels = Array.from(
        document.querySelectorAll('#compare-plans tbody tr th[scope="row"]')
      ).map((th) => {
        const span = th.querySelector('span') || th;
        const cs = getComputedStyle(span);
        return {
          text: span.textContent.trim(),
          color: cs.color,
          bg: getEffectiveBg(th),
        };
      });

      const planHeaderCtas = Array.from(
        document.querySelectorAll('#compare-plans [data-testid^="thead-cta-"]')
      ).map((btn) => ({
        testId: btn.getAttribute('data-testid'),
        className: btn.className,
        isFilledPrimary: btn.classList.contains('btn-primary'),
        isSecondary: btn.classList.contains('btn-secondary'),
      }));

      return {
        groupHeaders,
        sampleCells,
        rowLabels,
        planHeaderCtas,
      };
    });

    // Test Sticky Header while scrolling vertically through #compare-plans
    const stickyResult = await page.evaluate(async () => {
      const table = document.querySelector('#compare-plans table');
      const thead = document.querySelector('[data-testid="compare-table-thead"]');
      const rectBefore = table.getBoundingClientRect();
      // Scroll so table top is 220px above viewport top (140px past the 80px navbar)
      window.scrollTo({ top: window.scrollY + rectBefore.top - 80 + 180, behavior: 'instant' });
      window.dispatchEvent(new Event('scroll'));
      await new Promise((r) => setTimeout(r, 100));
      const tableRectAfter = table.getBoundingClientRect();
      const theadRectAfter = thead.getBoundingClientRect();
      return {
        tableTopInViewport: Math.round(tableRectAfter.top),
        theadTopInViewport: Math.round(theadRectAfter.top),
        stickyTransform: thead.style.transform,
      };
    });

    // Compute contrast ratios
    const groupHeaderContrasts = tableData.groupHeaders.map((g) => ({
      ...g,
      contrastRatio: contrastRatio(g.color, g.bg),
    }));
    const rowLabelContrasts = tableData.rowLabels.map((r) => ({
      ...r,
      contrastRatio: contrastRatio(r.color, r.bg),
    }));
    const specCellContrasts = tableData.sampleCells.map((c) => ({
      ...c,
      contrastRatio: contrastRatio(c.color, c.bg),
    }));

    report.tableVerification[theme] = {
      stickyHeader: stickyResult,
      planHeaderCtas: tableData.planHeaderCtas,
      groupHeaders: groupHeaderContrasts,
      minGroupHeaderContrast: Math.min(...groupHeaderContrasts.map((x) => x.contrastRatio)),
      minRowLabelContrast: Math.min(...rowLabelContrasts.map((x) => x.contrastRatio)),
      minSpecCellContrast: Math.min(...specCellContrasts.map((x) => x.contrastRatio)),
      sampleSpecCells: specCellContrasts.slice(0, 16),
    };

    await context.close();
  }

  // 3. Screenshot Matrix (10 routes x 2 themes x 3 viewports = 60 screenshots) + Axe Audit + Forbidden Text Check
  for (const theme of THEMES) {
    for (const vp of VIEWPORTS) {
      const context = await browser.newContext({
        viewport: { width: vp.width, height: vp.height },
      });
      const page = await context.newPage();

      page.on('console', (msg) => {
        if (msg.type() === 'error') {
          report.consoleErrors.push({
            theme,
            viewport: vp.width,
            url: page.url(),
            text: msg.text(),
          });
        }
      });

      page.on('pageerror', (err) => {
        report.pageErrors.push({
          theme,
          viewport: vp.width,
          url: page.url(),
          text: String(err),
        });
      });

      await page.addInitScript((t) => {
        localStorage.setItem('nuzul-theme', t);
      }, theme);

      for (const route of ROUTES) {
        const url = `${BASE_URL}${route.path}`;
        await page.goto(url, { waitUntil: 'domcontentloaded' });
        await page.waitForTimeout(150);

        const screenshotFilename = `${route.name}-${theme}-${vp.width}px-rtl.png`;
        const screenshotPath = path.join(OUT_DIR, screenshotFilename);
        await page.screenshot({ path: screenshotPath, fullPage: true });

        const domCheck = await page.evaluate(() => {
          const bodyText = document.body.innerText || '';
          return {
            dir: document.documentElement.dir,
            lang: document.documentElement.lang,
            dataTheme: document.documentElement.getAttribute('data-theme'),
            h1Count: document.querySelectorAll('h1').length,
            hasProxmox: /proxmox/i.test(bodyText),
            hasTbps: /tbps/i.test(bodyText),
          };
        });

        if (domCheck.hasProxmox || domCheck.hasTbps) {
          report.forbiddenTextOccurrences.push({
            route: route.path,
            theme,
            viewport: vp.width,
            hasProxmox: domCheck.hasProxmox,
            hasTbps: domCheck.hasTbps,
          });
        }

        // Run axe-core on 1440px for each route in both light and dark themes
        if (vp.width === 1440) {
          await page.addScriptTag({ content: axeSource });
          const axeResults = await page.evaluate(async () => {
            // @ts-ignore
            const res = await window.axe.run(document, {
              runOnly: {
                type: 'tag',
                values: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'],
              },
            });
            const contrastViolations = res.violations.filter((v) => v.id === 'color-contrast');
            return {
              totalViolations: res.violations.length,
              contrastViolationsCount: contrastViolations.length,
              violations: res.violations.map((v) => ({
                id: v.id,
                impact: v.impact,
                description: v.description,
                nodesCount: v.nodes.length,
                sampleTargets: v.nodes.slice(0, 3).map((n) => n.target),
              })),
            };
          });

          report.axeSummary.push({
            route: route.path,
            routeName: route.name,
            theme,
            ...axeResults,
          });
        }

        report.routeMatrix.push({
          route: route.path,
          routeName: route.name,
          theme,
          viewport: vp.width,
          screenshot: `/audit/phase-1/${screenshotFilename}`,
          ...domCheck,
        });
      }

      await context.close();
    }
  }

  await browser.close();
  fs.writeFileSync(path.join(OUT_DIR, 'phase1-verification.json'), JSON.stringify(report, null, 2));
  console.log('PHASE_1_VERIFICATION_COMPLETE');
  console.log('Total screenshots:', report.routeMatrix.length);
  console.log('Console errors:', report.consoleErrors.length);
  console.log('Page errors:', report.pageErrors.length);
  console.log('Forbidden text occurrences:', report.forbiddenTextOccurrences.length);
  const totalContrastViolations = report.axeSummary.reduce((acc, r) => acc + r.contrastViolationsCount, 0);
  const totalAxeViolations = report.axeSummary.reduce((acc, r) => acc + r.totalViolations, 0);
  console.log('Total Axe Contrast Violations across all 20 route/theme runs:', totalContrastViolations);
  console.log('Total Axe WCAG Violations across all 20 route/theme runs:', totalAxeViolations);
})();
