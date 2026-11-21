import {
  SERVICES,
  ALL_HOSTING_PLANS,
  BUNDLED_PACKAGES,
  PROJECTS,
  ARTICLES,
} from '../data/nuzulData';

/**
 * Normalizes Arabic and English text per Section 3.7 of NUZUL_REBUILD_MASTER_BRIEF.md:
 * 1. Unifies Alef forms (أ إ آ ٱ -> ا)
 * 2. Unifies Ya and Alef Maqsura (ى ئ -> ي)
 * 3. Unifies Ta Marbuta and Ha (ة -> ه)
 * 4. Unifies Waw with Hamza (ؤ -> و)
 * 5. Strips Arabic tashkeel/diacritics ([\u064B-\u065F\u0670]) and tatweel/kashida (\u0640)
 * 6. Converts Arabic-Indic (٠-٩) and Extended Arabic-Indic (۰-۹) digits to Western digits (0-9)
 * 7. Lowercases Latin technical terms and collapses whitespace
 */
export function normalizeArabicText(input: string): string {
  if (!input) return '';

  const arabicIndicDigits = '٠١٢٣٤٥٦٧٨٩';
  const extendedArabicDigits = '۰۱۲۳۴۵۶۷۸۹';

  let out = input.toLowerCase();

  // Convert Arabic-Indic and Extended Arabic-Indic digits to Western (0-9)
  out = out.replace(/[٠-٩۰-۹]/g, (ch) => {
    const idx1 = arabicIndicDigits.indexOf(ch);
    if (idx1 !== -1) return String(idx1);
    const idx2 = extendedArabicDigits.indexOf(ch);
    if (idx2 !== -1) return String(idx2);
    return ch;
  });

  // Strip tashkeel (harakat) and tatweel (kashida)
  out = out.replace(/[\u064B-\u065F\u0670\u0640]/g, '');

  // Unify Alef variants (أ إ آ ٱ -> ا)
  out = out.replace(/[أإآٱ]/g, 'ا');

  // Unify Ya / Alef Maqsura / Ya with Hamza (ى ئ -> ي)
  out = out.replace(/[ىئ]/g, 'ي');

  // Unify Waw with Hamza (ؤ -> و)
  out = out.replace(/ؤ/g, 'و');

  // Unify Ta Marbuta (ة -> ه)
  out = out.replace(/ة/g, 'ه');

  // Strip punctuation characters that interfere with token matching while keeping spaces, slashes, and alphanumerics
  out = out.replace(/[،؛؟?!"'()[\]{}<>«»ـ]/g, ' ');

  // Collapse multiple whitespace
  return out.replace(/\s+/g, ' ').trim();
}

/**
 * Bidirectional synonym groups linking colloquial/standard Arabic IT terms
 * and Latin technical acronyms per Section 3.7.
 */
export const SYNONYM_GROUPS: string[][] = [
  ['سيرفر', 'سيرفرات', 'خادم', 'خوادم', 'server', 'servers', 'vps', 'cloud vps', 'kvm', 'استضافه سحابيه'],
  ['كاميرات', 'كاميرا', 'مراقبه', 'cctv', 'ip camera', 'surveillance', 'nvr', 'كاميرات مراقبه'],
  ['سنترال', 'تليفون', 'هاتف', 'اتصالات', 'كول سنتر', 'voip', 'pbx', 'ip pbx', 'sip', 'call center'],
  ['شبكه', 'شبكات', 'راوتر', 'سويتش', 'كابلات', 'فايبر', 'راكات', 'سيرفر رووم', 'غرفه خوادم', 'network', 'networking', 'vlan', 'lan', 'wan', 'wifi', 'واي فاي', 'cabling', 'rack', 'server room'],
  ['امن', 'امان', 'حمايه', 'سيبراني', 'فايروول', 'جدار ناري', 'اختراق', 'ثغرات', 'security', 'cybersecurity', 'firewall', 'ngfw', 'fortinet', 'siem', 'soc', 'waf', 'ddos'],
  ['حسابات', 'محاسبه', 'مخازن', 'فواتير', 'فاتوره', 'موارد', 'erp', 'crm', 'accounting', 'inventory', 'billing', 'pos', 'اداره'],
  ['استضافه', 'موقع', 'مواقع', 'دومين', 'نطاق', 'نطاقات', 'hosting', 'web hosting', 'cpanel', 'wordpress', 'ووردبريس', 'domain', 'dns'],
  ['نسخ احتياطي', 'باك اب', 'باكاب', 'استعاده', 'كوارث', 'فديه', 'backup', 'backups', 'disaster recovery', 'dr', 'snapshot', 'ransomware'],
  ['بريد', 'ايميل', 'ايميلات', 'بريد الكتروني', 'email', 'mail', 'workspace', 'office 365', 'ميكروسوفت'],
  ['بصمه', 'حضور', 'انصراف', 'دخول', 'حواجز', 'biometric', 'access control', 'attendance'],
  ['دعم', 'صيانه', 'عقد', 'عقود', 'تشغيل', 'support', 'maintenance', 'sla', 'helpdesk', 'it'],
  ['عياده', 'عيادات', 'مستشفي', 'مستشفيات', 'طبي', 'اشعه', 'clinic', 'hospital', 'medical', 'pacs', 'his'],
];

const NORMALIZED_SYNONYM_GROUPS: string[][] = SYNONYM_GROUPS.map((group) =>
  Array.from(new Set(group.map((term) => normalizeArabicText(term))))
);

/**
 * Expands a normalized query string into an array of query tokens + their synonyms.
 */
export function expandQueryWithSynonyms(rawQuery: string): {
  normalizedQuery: string;
  tokenGroups: string[][];
} {
  const normalizedQuery = normalizeArabicText(rawQuery);
  if (!normalizedQuery) {
    return { normalizedQuery: '', tokenGroups: [] };
  }

  // Strip common Arabic definite article prefix "ال" on words > 4 chars for broader matching
  const stripAlPrefix = (word: string) =>
    word.startsWith('ال') && word.length > 4 ? word.slice(2) : word;

  const rawTokens = normalizedQuery.split(' ').filter(Boolean);
  const tokenGroups: string[][] = [];

  // Check if full multi-word phrase matches a synonym group (e.g., "جدار ناري", "كول سنتر", "باك اب")
  const matchedFullGroups = NORMALIZED_SYNONYM_GROUPS.filter((group) =>
    group.some(
      (syn) =>
        syn === normalizedQuery ||
        normalizedQuery.includes(syn) ||
        syn.includes(normalizedQuery)
    )
  );

  for (const token of rawTokens) {
    const bare = stripAlPrefix(token);
    const variants = new Set<string>([token, bare]);

    for (const group of NORMALIZED_SYNONYM_GROUPS) {
      if (
        group.some(
          (syn) =>
            syn === token ||
            syn === bare ||
            stripAlPrefix(syn) === bare ||
            (bare.length >= 3 && syn.includes(bare))
        )
      ) {
        for (const gTerm of group) {
          variants.add(gTerm);
          variants.add(stripAlPrefix(gTerm));
        }
      }
    }

    for (const fg of matchedFullGroups) {
      for (const gTerm of fg) {
        variants.add(gTerm);
        variants.add(stripAlPrefix(gTerm));
      }
    }

    tokenGroups.push(Array.from(variants).filter(Boolean));
  }

  return { normalizedQuery, tokenGroups };
}

/**
 * Bounded Levenshtein distance for typo-tolerant Arabic & English search.
 */
function levenshteinDistance(a: string, b: string, maxDist = 2): number {
  if (a === b) return 0;
  const lenA = a.length;
  const lenB = b.length;
  if (Math.abs(lenA - lenB) > maxDist) return maxDist + 1;
  if (lenA === 0) return lenB;
  if (lenB === 0) return lenA;

  let prev = new Array<number>(lenB + 1);
  let curr = new Array<number>(lenB + 1);
  for (let j = 0; j <= lenB; j++) prev[j] = j;

  for (let i = 1; i <= lenA; i++) {
    curr[0] = i;
    let rowMin = curr[0];
    const chA = a.charCodeAt(i - 1);
    for (let j = 1; j <= lenB; j++) {
      const cost = chA === b.charCodeAt(j - 1) ? 0 : 1;
      const val = Math.min(prev[j] + 1, curr[j - 1] + 1, prev[j - 1] + cost);
      curr[j] = val;
      if (val < rowMin) rowMin = val;
    }
    if (rowMin > maxDist) return maxDist + 1;
    const tmp = prev;
    prev = curr;
    curr = tmp;
  }
  return prev[lenB];
}

function hasFuzzyTokenMatch(needle: string, haystackWords: string[]): boolean {
  if (needle.length < 4) return false;
  const maxDist = needle.length >= 7 ? 2 : 1;
  for (const word of haystackWords) {
    if (word.length < 3) continue;
    if (Math.abs(word.length - needle.length) > maxDist) continue;
    if (levenshteinDistance(needle, word, maxDist) <= maxDist) {
      return true;
    }
  }
  return false;
}

/**
 * Detects whether a search query looks like a domain name (e.g. "company.com", "nuzul.com.eg").
 */
export function detectDomainQuery(rawQuery: string): string | null {
  const cleaned = rawQuery
    .trim()
    .toLowerCase()
    .replace(/^https?:\/\//, '')
    .replace(/^www\./, '')
    .split('/')[0];
  if (/^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.(com|net|org|io|com\.eg|eg)$/.test(cleaned)) {
    return cleaned;
  }
  return null;
}

/**
 * Evaluates whether a target document matches the Arabic/English query,
 * returning a numeric relevance score (0 = no match, >0 = match).
 * Supports exact phrase matching, synonym expansion, and typo-tolerant fuzzy matching.
 */
export function scoreArabicMatch(
  rawQuery: string,
  fields: { title: string | string[]; subtitle?: string; body?: string; tags?: string[] } | string[]
): number {
  const { normalizedQuery, tokenGroups } = expandQueryWithSynonyms(rawQuery);
  if (!normalizedQuery || tokenGroups.length === 0) return 0;

  const normalizedFields = Array.isArray(fields)
    ? { title: fields.join(' ') }
    : fields;

  const rawTitle = Array.isArray(normalizedFields.title)
    ? normalizedFields.title.join(' ')
    : normalizedFields.title;

  const normTitle = normalizeArabicText(rawTitle || '');
  const normSubtitle = normalizeArabicText(normalizedFields.subtitle || '');
  const normBody = normalizeArabicText(normalizedFields.body || '');
  const normTags = normalizeArabicText((normalizedFields.tags || []).join(' '));
  const combined = `${normTitle} ${normSubtitle} ${normTags} ${normBody}`;

  // Exact phrase match bonus
  let score = 0;
  if (normTitle.includes(normalizedQuery)) {
    score += 60;
  } else if (normSubtitle.includes(normalizedQuery) || normTags.includes(normalizedQuery)) {
    score += 40;
  } else if (normBody.includes(normalizedQuery)) {
    score += 25;
  }

  let titleWords: string[] | null = null;
  let allWords: string[] | null = null;

  let matchedGroupsCount = 0;
  for (const group of tokenGroups) {
    let bestGroupScore = 0;
    for (const variant of group) {
      if (!variant) continue;
      if (normTitle.includes(variant)) {
        bestGroupScore = Math.max(bestGroupScore, 30);
      } else if (normTags.includes(variant) || normSubtitle.includes(variant)) {
        bestGroupScore = Math.max(bestGroupScore, 20);
      } else if (combined.includes(variant)) {
        bestGroupScore = Math.max(bestGroupScore, 10);
      }
    }

    // Typo-tolerant fallback when exact/synonym substring didn't hit
    if (bestGroupScore === 0) {
      const primaryToken = group[0];
      if (primaryToken && primaryToken.length >= 4 && !primaryToken.includes(' ')) {
        if (!titleWords) titleWords = normTitle.split(' ').filter(Boolean);
        if (hasFuzzyTokenMatch(primaryToken, titleWords)) {
          bestGroupScore = 18;
        } else {
          if (!allWords) allWords = combined.split(' ').filter(Boolean);
          if (hasFuzzyTokenMatch(primaryToken, allWords)) {
            bestGroupScore = 10;
          }
        }
      }
    }

    if (bestGroupScore > 0) {
      matchedGroupsCount += 1;
      score += bestGroupScore;
    }
  }

  if (matchedGroupsCount === tokenGroups.length) {
    return score;
  }
  if (tokenGroups.length >= 2 && matchedGroupsCount >= Math.ceil(tokenGroups.length * 0.6) && score >= 25) {
    return score;
  }

  return 0;
}

export function matchesArabicQuery(
  rawQuery: string,
  searchableText: string | string[]
): boolean {
  if (!rawQuery.trim()) return true;
  const text = Array.isArray(searchableText) ? searchableText.join(' ') : searchableText;
  return scoreArabicMatch(rawQuery, { title: text }) > 0;
}

export interface GlobalSearchResultItem {
  id: string;
  type: 'service' | 'plan' | 'case-study' | 'article';
  titleAr: string;
  titleEn: string;
  subtitleAr: string;
  subtitleEn: string;
  badgeAr: string;
  badgeEn: string;
  href: string;
  score: number;
}

export interface GroupedGlobalSearchResults {
  services: GlobalSearchResultItem[];
  plans: GlobalSearchResultItem[];
  caseStudies: GlobalSearchResultItem[];
  articles: GlobalSearchResultItem[];
  totalCount: number;
}

export function searchGlobalCatalog(rawQuery: string, limitPerGroup = 5): GroupedGlobalSearchResults {
  if (!rawQuery || !rawQuery.trim()) {
    return {
      services: [],
      plans: [],
      caseStudies: [],
      articles: [],
      totalCount: 0,
    };
  }

  const services: GlobalSearchResultItem[] = [];
  for (const s of SERVICES) {
    const score = scoreArabicMatch(rawQuery, {
      title: `${s.title} ${s.titleEn}`,
      subtitle: `${s.category} ${s.shortDesc} ${s.shortDescEn}`,
      tags: [...s.features, ...s.featuresEn],
    });
    if (score > 0) {
      services.push({
        id: s.id,
        type: 'service',
        titleAr: s.title,
        titleEn: s.titleEn,
        subtitleAr: s.shortDesc,
        subtitleEn: s.shortDescEn,
        badgeAr: s.category,
        badgeEn: 'Service',
        href: `/services/${s.id}`,
        score,
      });
    }
  }

  const plans: GlobalSearchResultItem[] = [];
  for (const p of ALL_HOSTING_PLANS) {
    const score = scoreArabicMatch(rawQuery, {
      title: `${p.name} ${p.nameAr} ${p.nameEn} ${p.monthlyPriceEGP}`,
      subtitle: `${p.targetAudience} ${p.targetAudienceEn} ${p.cpu} ${p.ram} ${p.storage}`,
      tags: [...p.features, ...p.featuresEn, 'استضافة', 'سيرفر', 'خادم', 'vps', 'cloud', 'hosting', 'windows', 'rdp', 'wordpress'],
    });
    if (score > 0) {
      plans.push({
        id: `plan-${p.id}`,
        type: 'plan',
        titleAr: `${p.nameAr} (${p.monthlyPriceEGP} ج.م/شهرياً)`,
        titleEn: `${p.nameEn} ($${p.basePriceUSD.toFixed(2)} / ${p.monthlyPriceEGP} EGP/mo)`,
        subtitleAr: `${p.cpu} · ${p.ram} · ${p.storage}`,
        subtitleEn: `${p.cpu} · ${p.ram} · ${p.storage}`,
        badgeAr: 'سيرفر / استضافة',
        badgeEn: 'Cloud Plan',
        href: `/pricing#hosting`,
        score,
      });
    }
  }

  for (const pkg of BUNDLED_PACKAGES) {
    const score = scoreArabicMatch(rawQuery, {
      title: `${pkg.title} ${pkg.titleEn} ${pkg.priceEGP ?? ''}`,
      subtitle: `${pkg.subtitle} ${pkg.subtitleEn}`,
      tags: [...pkg.features, ...pkg.featuresEn, 'باقة', 'تأسيس', 'شركات'],
    });
    if (score > 0) {
      plans.push({
        id: `pkg-${pkg.id}`,
        type: 'plan',
        titleAr: pkg.title,
        titleEn: pkg.titleEn,
        subtitleAr: pkg.subtitle,
        subtitleEn: pkg.subtitleEn,
        badgeAr: 'باقة تجهيز شركات',
        badgeEn: 'Turnkey Package',
        href: `/pricing#packages`,
        score,
      });
    }
  }

  const caseStudies: GlobalSearchResultItem[] = [];
  for (const cs of PROJECTS) {
    const score = scoreArabicMatch(rawQuery, {
      title: `${cs.title} ${cs.titleEn} ${cs.client} ${cs.clientEn}`,
      subtitle: `${cs.category} ${cs.categoryEn} ${cs.challenge} ${cs.challengeEn}`,
      body: `${cs.solution} ${cs.solutionEn}`,
      tags: cs.technologies,
    });
    if (score > 0) {
      caseStudies.push({
        id: cs.id,
        type: 'case-study',
        titleAr: cs.title,
        titleEn: cs.titleEn,
        subtitleAr: cs.client,
        subtitleEn: cs.clientEn,
        badgeAr: cs.category,
        badgeEn: cs.categoryEn,
        href: `/case-studies/${cs.id}`,
        score,
      });
    }
  }

  const articles: GlobalSearchResultItem[] = [];
  for (const art of ARTICLES) {
    const score = scoreArabicMatch(rawQuery, {
      title: `${art.title} ${art.titleEn}`,
      subtitle: `${art.category} ${art.categoryEn} ${art.excerpt} ${art.excerptEn}`,
      body: [...art.content, ...art.contentEn].join(' '),
    });
    if (score > 0) {
      articles.push({
        id: art.id,
        type: 'article',
        titleAr: art.title,
        titleEn: art.titleEn,
        subtitleAr: art.excerpt,
        subtitleEn: art.excerptEn,
        badgeAr: art.category,
        badgeEn: art.categoryEn,
        href: `/blog/${art.slug}`,
        score,
      });
    }
  }

  services.sort((a, b) => b.score - a.score);
  plans.sort((a, b) => b.score - a.score);
  caseStudies.sort((a, b) => b.score - a.score);
  articles.sort((a, b) => b.score - a.score);

  const slicedServices = services.slice(0, limitPerGroup);
  const slicedPlans = plans.slice(0, limitPerGroup);
  const slicedCaseStudies = caseStudies.slice(0, limitPerGroup);
  const slicedArticles = articles.slice(0, limitPerGroup);

  return {
    services: slicedServices,
    plans: slicedPlans,
    caseStudies: slicedCaseStudies,
    articles: slicedArticles,
    totalCount:
      slicedServices.length +
      slicedPlans.length +
      slicedCaseStudies.length +
      slicedArticles.length,
  };
}
