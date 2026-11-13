import assert from 'node:assert/strict';
import {
  normalizeArabicText,
  matchesArabicQuery,
  searchGlobalCatalog,
} from '../../src/utils/arabicSearch.ts';

const TEST_CASES = [
  {
    id: 1,
    name: 'Alef with hamza above vs bare alef (أمن سيبراني -> امن سيبراني)',
    query: 'أمن سيبراني',
    check: () => {
      const res = searchGlobalCatalog('أمن سيبراني');
      const resBare = searchGlobalCatalog('امن سيبراني');
      return (
        res.services.length > 0 &&
        res.services[0].id === resBare.services[0].id
      );
    },
  },
  {
    id: 2,
    name: 'Alef with hamza below vs bare alef (إستضافة -> استضافة)',
    query: 'إستضافة سحابية',
    check: () => {
      const res = searchGlobalCatalog('إستضافة سحابية');
      return res.plans.length > 0 && res.services.length > 0;
    },
  },
  {
    id: 3,
    name: 'Alef madda normalization (آمان الشبكات -> امان الشبكات)',
    query: 'آمان الشبكات',
    check: () => {
      const res = searchGlobalCatalog('آمان الشبكات');
      return res.services.length > 0;
    },
  },
  {
    id: 4,
    name: 'Ta marbuta vs Ha equivalence (شبكه داخليه -> شبكة داخلية)',
    query: 'شبكه داخليه',
    check: () => {
      const res = searchGlobalCatalog('شبكه داخليه');
      return (
        normalizeArabicText('شبكه داخليه') ===
          normalizeArabicText('شبكة داخلية') && res.services.length > 0
      );
    },
  },
  {
    id: 5,
    name: 'Alef maqsura vs Ya equivalence (أمن سيبرانى -> أمن سيبراني)',
    query: 'أمن سيبرانى',
    check: () => {
      const res = searchGlobalCatalog('أمن سيبرانى');
      return (
        normalizeArabicText('سيبرانى') === normalizeArabicText('سيبراني') &&
        res.services.length > 0
      );
    },
  },
  {
    id: 6,
    name: 'Tashkeel (diacritics) stripping (شَبَكَاتٌ وَخَوَادِمُ)',
    query: 'شَبَكَاتٌ وَخَوَادِمُ',
    check: () => {
      const res = searchGlobalCatalog('شَبَكَاتٌ وَخَوَادِمُ');
      return (
        normalizeArabicText('شَبَكَاتٌ') === 'شبكات' &&
        res.services.length > 0
      );
    },
  },
  {
    id: 7,
    name: 'Tatweel (kashida) stripping (ســـيـــرفـــر ســـحـــابـــي)',
    query: 'ســـيـــرفـــر ســـحـــابـــي',
    check: () => {
      const res = searchGlobalCatalog('ســـيـــرفـــر ســـحـــابـــي');
      return (
        normalizeArabicText('ســـيـــرفـــر') === 'سيرفر' &&
        res.plans.length > 0
      );
    },
  },
  {
    id: 8,
    name: 'Arabic-Indic numerals converted to Western digits (١٩٥ -> 195 EGP plan)',
    query: '١٩٥',
    check: () => {
      const res = searchGlobalCatalog('١٩٥');
      return (
        normalizeArabicText('١٩٥') === '195' &&
        res.plans.some((p) => p.id.includes('web-starter'))
      );
    },
  },
  {
    id: 9,
    name: 'Arabic-Indic 24/7 support query (دعم فني ٢٤/٧)',
    query: 'دعم فني ٢٤/٧',
    check: () => {
      const res = searchGlobalCatalog('دعم فني ٢٤/٧');
      return (
        normalizeArabicText('٢٤/٧') === '24/7' && res.services.length > 0
      );
    },
  },
  {
    id: 10,
    name: 'Synonym matching: سيرفر matches خادم / Cloud VPS plans & services',
    query: 'سيرفر',
    check: () => {
      const res = searchGlobalCatalog('سيرفر');
      return res.plans.length > 0 && res.services.length > 0;
    },
  },
  {
    id: 11,
    name: 'Synonym matching: خادم matches سيرفر / VPS plans',
    query: 'خادم',
    check: () => {
      const res = searchGlobalCatalog('خادم');
      return res.plans.length > 0 && res.services.length > 0;
    },
  },
  {
    id: 12,
    name: 'Synonym matching: كاميرات matches مراقبة / CCTV services & case studies',
    query: 'كاميرات',
    check: () => {
      const res = searchGlobalCatalog('كاميرات');
      return res.services.length > 0 && res.caseStudies.length > 0;
    },
  },
  {
    id: 13,
    name: 'Synonym matching: مراقبه (with Ha) matches CCTV surveillance',
    query: 'مراقبه',
    check: () => {
      const res = searchGlobalCatalog('مراقبه');
      return res.services.length > 0;
    },
  },
  {
    id: 14,
    name: 'Synonym matching: سنترال matches VoIP / PBX telephony services',
    query: 'سنترال',
    check: () => {
      const res = searchGlobalCatalog('سنترال');
      return (
        res.services.length > 0 &&
        matchesArabicQuery('سنترال', 'VoIP IP-PBX Telephony System')
      );
    },
  },
  {
    id: 15,
    name: 'Synonym matching: تليفون شبكي matches VoIP services',
    query: 'تليفون شبكي',
    check: () => {
      const res = searchGlobalCatalog('تليفون شبكي');
      return res.services.length > 0;
    },
  },
  {
    id: 16,
    name: 'Synonym matching: فايروول matches جدار ناري / Fortinet NGFW',
    query: 'فايروول',
    check: () => {
      const res = searchGlobalCatalog('فايروول');
      return (
        res.services.length > 0 &&
        matchesArabicQuery('فايروول', 'تركيب وبرمجة جدار ناري Fortinet NGFW')
      );
    },
  },
  {
    id: 17,
    name: 'Synonym matching: باك اب matches نسخ احتياطي / Backup articles & services',
    query: 'باك اب',
    check: () => {
      const res = searchGlobalCatalog('باك اب');
      return res.services.length > 0 && res.articles.length > 0;
    },
  },
  {
    id: 18,
    name: 'Synonym matching: ايميل شركات matches بريد إلكتروني رسمي',
    query: 'ايميل شركات',
    check: () => {
      const res = searchGlobalCatalog('ايميل شركات');
      return res.services.length > 0;
    },
  },
  {
    id: 19,
    name: 'Synonym matching: بصمه حضور matches Biometric Attendance & Access Control',
    query: 'بصمه حضور',
    check: () => {
      const res = searchGlobalCatalog('بصمه حضور');
      return (
        res.services.length > 0 &&
        matchesArabicQuery('بصمه', 'Biometric Access Control & Attendance')
      );
    },
  },
  {
    id: 20,
    name: 'Synonym matching: برنامج محاسبه ومخازن matches ERP software services',
    query: 'برنامج محاسبه ومخازن',
    check: () => {
      const res = searchGlobalCatalog('برنامج محاسبه ومخازن');
      return (
        res.services.length > 0 &&
        matchesArabicQuery('محاسبه ومخازن', 'Enterprise ERP System')
      );
    },
  },
];

console.log('=== RUNNING PHASE 6B ARABIC SEARCH UNIT TESTS (20 CASES) ===');
let passed = 0;
for (const tc of TEST_CASES) {
  const ok = tc.check();
  assert.equal(ok, true, `Failed Case #${tc.id}: ${tc.name}`);
  passed += 1;
  console.log(
    `[PASS] Case #${String(tc.id).padStart(2, '0')} | Query: "${tc.query}" -> ${tc.name}`
  );
}
console.log(`\nALL ${passed}/${TEST_CASES.length} ARABIC SEARCH UNIT TEST CASES PASSED!`);
