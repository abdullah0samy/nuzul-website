import { createRequire } from 'module';
import fs from 'fs';
import path from 'path';

const require = createRequire('/usr/local/share/bun-global/node_modules/');
const { chromium } = require('playwright');

const BASE_URL = 'http://localhost:3000';
const OUT_DIR = '/app/applet/audit/step-c-services';
const SCREENSHOTS_DIR = path.join(OUT_DIR, 'screenshots');
fs.mkdirSync(SCREENSHOTS_DIR, { recursive: true });

const BANNED_WORDS = [
  'عناقيد',
  'السيادة الرقمية',
  'حوكمة',
  'متكامل',
  'موثقة',
  'موثق',
  'المعتمدة',
  'المفعّلة',
  'اللحظي',
  'استباقي',
  'شاملة',
  'شامل',
  'رائد',
  'مبتكر',
  'متطور',
  'يضمن',
  'ضمان',
  'كل ما تحتاجه',
  'تحت سقف واحد',
  'نحن نؤمن',
];

const VIEWPORTS = [
  { name: '375', width: 375, height: 812 },
  { name: '768', width: 768, height: 1024 },
  { name: '1440', width: 1440, height: 900 },
];

const THEMES = ['light', 'dark'];

async function run() {
  console.log('=== STEP C VERIFICATION: /services ===');
  const browser = await chromium.launch({ headless: true, args: ['--no-sandbox'] });
  const context = await browser.newContext();
  const page = await context.newPage();

  const bannedWordOccurrences = {};
  for (const bw of BANNED_WORDS) {
    bannedWordOccurrences[bw] = 0;
  }

  for (const theme of THEMES) {
    for (const vp of VIEWPORTS) {
      await page.setViewportSize({ width: vp.width, height: vp.height });
      await page.goto(`${BASE_URL}/services`, { waitUntil: 'networkidle' });

      // Apply theme via localStorage and attributes
      await page.addInitScript((th) => {
        localStorage.setItem('nuzul-theme', th);
        document.documentElement.setAttribute('data-theme', th);
        if (th === 'dark') {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      }, theme);
      await page.reload({ waitUntil: 'networkidle' });

      await page.waitForTimeout(500);

      const shotPath = path.join(SCREENSHOTS_DIR, `services-${theme}-${vp.name}.png`);
      await page.screenshot({ path: shotPath, fullPage: true });
      console.log(`[SCREENSHOT] Saved: ${shotPath}`);

      // Extract rendered text for banned word detection
      const pageText = await page.evaluate(() => document.body.innerText);
      for (const bw of BANNED_WORDS) {
        if (pageText.includes(bw)) {
          bannedWordOccurrences[bw] += 1;
        }
      }
    }
  }

  // Also check English language mode
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(`${BASE_URL}/services`, { waitUntil: 'networkidle' });
  // Toggle language to English if language toggle button exists
  const langBtn = await page.$('[data-testid="language-toggle-btn"]');
  if (langBtn) {
    await langBtn.click();
    await page.waitForTimeout(400);
    const shotPathEn = path.join(SCREENSHOTS_DIR, `services-light-1440-en.png`);
    await page.screenshot({ path: shotPathEn, fullPage: true });
    console.log(`[SCREENSHOT] Saved: ${shotPathEn}`);
  }

  await browser.close();

  console.log('\n=== BANNED WORDS AUDIT ON /services (RENDERED DOM) ===');
  let totalBannedFound = 0;
  for (const [bw, count] of Object.entries(bannedWordOccurrences)) {
    if (count > 0) {
      console.log(`[VIOLATION] Banned word "${bw}" found in rendered page (${count} views)`);
      totalBannedFound += count;
    } else {
      console.log(`[CLEAN] "${bw}": 0 occurrences`);
    }
  }

  console.log(`\nTOTAL BANNED WORD OCCURRENCES: ${totalBannedFound}`);
}

run().catch((err) => {
  console.error('Verification failed:', err);
  process.exit(1);
});
