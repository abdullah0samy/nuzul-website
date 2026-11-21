import { createRequire } from 'module';
import fs from 'fs';
import path from 'path';

const require = createRequire('/usr/local/share/bun-global/node_modules/');
const { chromium } = require('playwright');

const BASE_URL = 'http://localhost:3000';
const OUT_DIR = '/app/applet/audit/fix-loop-home';
const SCREENSHOTS_DIR = path.join(OUT_DIR, 'screenshots');
fs.mkdirSync(SCREENSHOTS_DIR, { recursive: true });

const BANNED_WORDS = [
  'حلول متكاملة',
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
  'عناقيد',
  'السيادة الرقمية',
  'حوكمة',
  'المعتمدة',
  'المفعّلة',
  'شامل',
  'محاكاة توضيحية',
];

async function runVerification() {
  console.log('--- Starting Fix Loop Home Verification ---');
  const browser = await chromium.launch({ headless: true });
  const results = {
    timestamp: new Date().toISOString(),
    viewports: {},
    measurements: {},
    bannedWordsMatches: [],
    consoleErrors: [],
    pageErrors: [],
    checks: {},
    performance: {},
  };

  const context = await browser.newContext();
  const page = await context.newPage();

  const consoleInfos = [];
  page.on('console', (msg) => {
    if (msg.type() === 'error') {
      results.consoleErrors.push(msg.text());
    } else if (msg.type() === 'info') {
      consoleInfos.push(msg.text());
    }
  });
  page.on('pageerror', (err) => {
    results.pageErrors.push(err.message);
  });

  // 1. Mobile Audit at 375x667 (Standard phone)
  await page.setViewportSize({ width: 375, height: 667 });
  await page.goto(`${BASE_URL}/`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(700);

  // Measure distance to first service card
  const servicePillarsSection = page.locator('[data-testid="home-pillars-section"]');
  const firstServiceCard = page.locator('[data-testid="pillar-card-link-infrastructure"]');

  const sectionBox = await servicePillarsSection.boundingBox();
  const firstCardBox = await firstServiceCard.boundingBox();

  const screenHeight = 667;
  const distanceToSectionPx = sectionBox ? Math.round(sectionBox.y) : null;
  const distanceToFirstCardPx = firstCardBox ? Math.round(firstCardBox.y) : null;

  const screensToSection = distanceToSectionPx !== null ? Number((distanceToSectionPx / screenHeight).toFixed(2)) : null;
  const screensToFirstCard = distanceToFirstCardPx !== null ? Number((distanceToFirstCardPx / screenHeight).toFixed(2)) : null;

  results.measurements = {
    screenHeight,
    distanceToSectionPx,
    distanceToFirstCardPx,
    screensToSection,
    screensToFirstCard,
    passesUnder1_5Screens: screensToFirstCard !== null && screensToFirstCard <= 1.5,
  };

  console.log(`Measured 375px distance:`);
  console.log(`- Top of Services Section: ${distanceToSectionPx}px (${screensToSection} screens)`);
  console.log(`- Top of First Service Card: ${distanceToFirstCardPx}px (${screensToFirstCard} screens)`);
  console.log(`- Target: <= 1.5 screens -> PASS? ${results.measurements.passesUnder1_5Screens}`);

  // 2. Check Hero Buttons on 375px
  const primaryCta = page.locator('[data-testid="hero-primary-cta"]');
  const secondaryCta = page.locator('[data-testid="hero-secondary-cta"]');
  const primaryBox = await primaryCta.boundingBox();
  const secondaryBox = await secondaryCta.boundingBox();

  results.checks.heroButtonWidths = {
    primaryWidth: primaryBox ? Math.round(primaryBox.width) : null,
    secondaryWidth: secondaryBox ? Math.round(secondaryBox.width) : null,
    primaryHeight: primaryBox ? Math.round(primaryBox.height) : null,
    secondaryHeight: secondaryBox ? Math.round(secondaryBox.height) : null,
    equalWidth: Boolean(primaryBox && secondaryBox && Math.abs(primaryBox.width - secondaryBox.width) < 2),
    equalHeight: Boolean(primaryBox && secondaryBox && Math.abs(primaryBox.height - secondaryBox.height) < 2),
  };
  console.log(`Hero buttons on 375px:`, results.checks.heroButtonWidths);

  // 3. Check Hero Network Canvas containment & mobile node count
  const heroCanvasCount = await page.locator('[data-canvas-mode="hero"]').count();
  const globalCanvasCount = await page.locator('[data-canvas-mode="global"]').count();
  const mobileNodeCount = await page.locator('[data-canvas-mode="hero"]').getAttribute('data-node-count');
  results.checks.networkCanvasMobile = {
    heroCanvasCount,
    globalCanvasCount,
    mobileNodeCount: mobileNodeCount ? Number(mobileNodeCount) : null,
  };
  console.log(`Network canvas (375px):`, results.checks.networkCanvasMobile);

  // 4. Check Mobile Header Controls (< 1024px)
  const headerContainer = page.locator('header .container-nuzul');
  const mobileControlsGroup = headerContainer.locator('> div.lg\\:hidden');
  const mobileButtons = await mobileControlsGroup.locator('button, a').count();
  results.checks.mobileHeaderControlCount = mobileButtons; // Excludes logo => 1 logo + 2 buttons = 3 controls total
  console.log(`Mobile header buttons count (excluding logo): ${mobileButtons} (total with logo = ${mobileButtons + 1})`);

  // Test opening mobile menu drawer
  const menuBtn = page.locator('[data-testid="mobile-menu-toggle-btn"]');
  await menuBtn.click();
  await page.waitForTimeout(300);
  const drawerVisible = await page.locator('[data-testid="mobile-nav-drawer"]').isVisible();
  const drawerLangBtnVisible = await page.locator('[data-testid="mobile-drawer-lang-btn"]').isVisible();
  const drawerThemeBtnsCount = await page.locator('[data-testid^="mobile-drawer-theme-btn-"]').count();
  results.checks.mobileDrawer = {
    drawerVisible,
    drawerLangBtnVisible,
    drawerThemeBtnsCount,
  };
  console.log(`Mobile drawer check:`, results.checks.mobileDrawer);

  await menuBtn.click();
  await page.waitForTimeout(200);

  // 5. Check WhatsApp Floating Widget (no red dot, Cairo status, muted sound, inline status dot, analytics call)
  const whatsappPulseDot = await page.locator('[data-testid="whatsapp-fab-pulse-dot"]').count();
  const whatsappInlineDotVisible = await page.locator('[data-testid="whatsapp-inline-status-dot"]').isVisible();
  const whatsappFabLink = page.locator('[data-testid="whatsapp-fab-link"]');
  const whatsappStatus = await whatsappFabLink.getAttribute('data-status');
  const whatsappSoundMuted = await whatsappFabLink.getAttribute('data-sound-muted');
  const fabBox = await whatsappFabLink.boundingBox();
  // Verify click event tracker without navigating away
  const analyticsFired = await page.evaluate(() => {
    const link = document.querySelector('[data-testid="whatsapp-fab-link"]');
    if (!link) return false;
    link.addEventListener('click', (e) => e.preventDefault(), { once: true });
    link.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true }));
    const events = window.__nuzulAnalytics || [];
    return events.some((ev) => ev.event === 'whatsapp_fab_click');
  });
  results.checks.whatsapp = {
    hasPulseDot: whatsappPulseDot > 0,
    inlineStatusDotVisibleOn375: whatsappInlineDotVisible,
    status: whatsappStatus,
    soundMuted: whatsappSoundMuted === 'true',
    clickAnalyticsTracked: analyticsFired,
    boundingBox: fabBox ? { x: Math.round(fabBox.x), y: Math.round(fabBox.y), w: Math.round(fabBox.width), h: Math.round(fabBox.height) } : null,
  };
  console.log(`WhatsApp check:`, results.checks.whatsapp);

  // 6. Check Service Cards
  const servicesHeading = await page.locator('[data-testid="home-pillars-section"] h2').innerText();
  const cardsCount = await page.locator('[data-testid^="home-pillar-"]').count();
  const expandButtonsCount = await page.locator('[data-testid^="pillar-expand-"]').count();
  const serviceCardsAreLinks = await page.locator('[data-testid^="pillar-card-link-"]').count();
  const firstCardTitle = await page.locator('[data-testid="pillar-card-link-infrastructure"] h3').innerText();
  results.checks.services = {
    heading: servicesHeading.trim(),
    cardsCount,
    hasShowMoreButtons: expandButtonsCount > 0,
    serviceCardsAreLinksCount: serviceCardsAreLinks,
    firstCardHasNumbering: /^\d+\./.test(firstCardTitle.trim()),
  };
  console.log(`Services check:`, results.checks.services);

  // 7. Check Architecture SVG Diagram Section (Mobile 375px + Desktop 1440px)
  const archSection = await page.locator('[data-testid="home-architecture-section"]').count();
  const archSvgMobileVisible = await page.locator('[data-testid="architecture-svg-mobile"]').isVisible();
  const archSvgDesktopHiddenOnMobile = !(await page.locator('[data-testid="architecture-svg-desktop"]').isVisible());
  const archMobileNodes = await page.locator('[data-testid^="arch-svg-mobile-node-"]').count();
  const archDesktopNodes = await page.locator('[data-testid^="arch-svg-node-"]').count();
  const mobileHorizontalOverflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);

  results.checks.architectureDiagram = {
    sectionExists: archSection > 0,
    mobileSvgVisibleAt375: archSvgMobileVisible,
    desktopSvgHiddenAt375: archSvgDesktopHiddenOnMobile,
    archMobileNodesCount: archMobileNodes,
    archDesktopNodesCount: archDesktopNodes,
    mobileHorizontalOverflow,
  };
  console.log(`Architecture SVG diagram check (375px):`, results.checks.architectureDiagram);

  // 8. Banned Words & Removed Claims on Scoped Home DOM (#main-content + header + WhatsApp widget)
  const scopedText = await page.evaluate(() => {
    const headerText = document.querySelector('header')?.innerText || '';
    const mainText = document.querySelector('#main-content')?.innerText || document.body.innerText;
    const fabText = document.querySelector('[data-testid="floating-whatsapp-wrapper"]')?.innerText || '';
    return `${headerText}\n${mainText}\n${fabText}`;
  });
  // Strip official permitted tax system name before checking standalone منظومة
  const normalizedForCheck = scopedText.replace(/ب?منظومة الفاتورة الإلكترونية/g, '');
  const EXTRA_CHECK_TERMS = [...BANNED_WORDS, 'DEMO', 'نُزول', 'في مصر والخليج', 'المصانع وسلاسل الإمداد', 'منظومة'];
  for (const word of EXTRA_CHECK_TERMS) {
    if (normalizedForCheck.includes(word)) {
      results.bannedWordsMatches.push(word);
    }
  }
  console.log(`Banned/removed words found on Scoped Home DOM: ${results.bannedWordsMatches.length} (${results.bannedWordsMatches.join(', ') || 'NONE'})`);

  // 9. Capture Screenshots across 375, 768, 1440 in light & dark
  const viewports = [
    { name: '375px', width: 375, height: 812 },
    { name: '768px', width: 768, height: 1024 },
    { name: '1440px', width: 1440, height: 900 },
  ];

  for (const vp of viewports) {
    await page.setViewportSize({ width: vp.width, height: vp.height });

    await page.evaluate(() => {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('nuzul-theme-mode', 'light');
    });
    await page.waitForTimeout(450);
    const lightPath = path.join(SCREENSHOTS_DIR, `home-${vp.name}-light.png`);
    await page.screenshot({ path: lightPath, fullPage: true });

    await page.evaluate(() => {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('nuzul-theme-mode', 'dark');
    });
    await page.waitForTimeout(450);
    const darkPath = path.join(SCREENSHOTS_DIR, `home-${vp.name}-dark.png`);
    await page.screenshot({ path: darkPath, fullPage: true });

    results.viewports[vp.name] = {
      lightScreenshot: lightPath,
      darkScreenshot: darkPath,
    };
    console.log(`Captured ${vp.name} light and dark screenshots`);
  }

  // Check Desktop SVG visibility & node count at 1440px
  const archSvgDesktopVisibleAt1440 = await page.locator('[data-testid="architecture-svg-desktop"]').isVisible();
  const archSvgMobileHiddenAt1440 = !(await page.locator('[data-testid="architecture-svg-mobile"]').isVisible());
  const desktopNodeCount = await page.locator('[data-canvas-mode="hero"]').getAttribute('data-node-count');
  const desktopHorizontalOverflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
  results.checks.desktop1440 = {
    archSvgDesktopVisibleAt1440,
    archSvgMobileHiddenAt1440,
    desktopNodeCount: desktopNodeCount ? Number(desktopNodeCount) : null,
    desktopHorizontalOverflow,
  };
  console.log(`Desktop 1440px checks:`, results.checks.desktop1440);

  // 10. Measure Mobile Web Vitals (FCP, LCP, CLS) on fresh mobile load
  const mobilePerfPage = await context.newPage();
  await mobilePerfPage.setViewportSize({ width: 375, height: 667 });
  await mobilePerfPage.addInitScript(() => {
    window.__nuzulVitals = { lcp: 0, cls: 0 };
    try {
      new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          window.__nuzulVitals.lcp = entry.startTime;
        }
      }).observe({ type: 'largest-contentful-paint', buffered: true });
      new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!entry.hadRecentInput) {
            window.__nuzulVitals.cls += entry.value;
          }
        }
      }).observe({ type: 'layout-shift', buffered: true });
    } catch {
      // fallback
    }
  });
  await mobilePerfPage.goto(`${BASE_URL}/`, { waitUntil: 'networkidle' });
  await mobilePerfPage.waitForTimeout(800);
  const perfMetrics = await mobilePerfPage.evaluate(() => {
    const timing = performance.getEntriesByType('navigation')[0];
    const paint = performance.getEntriesByType('paint');
    const fcp = paint.find((p) => p.name === 'first-contentful-paint')?.startTime || 0;
    const vitals = window.__nuzulVitals || { lcp: 0, cls: 0 };
    return {
      domContentLoadedMs: Math.round(timing?.domContentLoadedEventEnd || 0),
      loadCompleteMs: Math.round(timing?.loadEventEnd || 0),
      fcpMs: Math.round(fcp),
      lcpMs: Math.round(vitals.lcp || fcp),
      cls: Number((vitals.cls || 0).toFixed(4)),
      transferSizeKb: timing ? Math.round((timing.transferSize || 0) / 1024) : 0,
    };
  });
  await mobilePerfPage.close();
  results.performance = perfMetrics;
  console.log(`Mobile (375px) Web Vitals:`, perfMetrics);

  fs.writeFileSync(path.join(OUT_DIR, 'verification-results.json'), JSON.stringify(results, null, 2));
  console.log(`Results saved to ${path.join(OUT_DIR, 'verification-results.json')}`);

  await browser.close();
  return results;
}

runVerification().catch((err) => {
  console.error('Verification failed:', err);
  process.exit(1);
});
