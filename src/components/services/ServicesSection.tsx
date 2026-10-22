import React, { useState, useRef, useEffect } from 'react';
import {
  Code,
  Smartphone,
  ShoppingBag,
  Layout,
  Layers,
  Server,
  Terminal,
  Monitor,
  HardDrive,
  Mail,
  Globe2,
  AtSign,
  PhoneCall,
  ShieldCheck,
  Activity,
  Database,
  Cloud,
  Cpu,
  Eye,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  BookOpen,
  ChevronDown,
  ChevronUp,
  Search,
  X,
  RotateCcw,
  Clock,
  History,
  Trash2,
  FilterX,
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { NUZUL_SERVICES, NUZUL_CONTACT } from '../../data/nuzulData';
import { ServiceCategoryKey, ServiceItem } from '../../types';
import { RevealOnScroll, StaggerContainer, StaggerItem } from '../common/RevealOnScroll';

interface QuickTag {
  id: string;
  labelAr: string;
  labelEn: string;
  query: string;
  synonyms: string[];
}

// 6 Core Quick Search Tags mapped directly to Nuzul Tech service portfolio
const quickTags: QuickTag[] = [
  {
    id: 'voip',
    labelAr: 'سنترال وVoIP',
    labelEn: 'VoIP & PBX',
    query: 'سنترال وVoIP',
    synonyms: ['سنترال', 'voip', 'اتصالات', 'telephony', 'مكالمات', 'هاتف', 'ip telephony', 'كول سنتر', 'رد الي', 'ivr', 'بدالة'],
  },
  {
    id: 'cloud',
    labelAr: 'خوادم سحابية',
    labelEn: 'Cloud Servers',
    query: 'خوادم سحابية',
    synonyms: ['خوادم', 'سيرفرات', 'سحابية', 'سحابة', 'سيرفر', 'خادم', 'vps', 'cloud', 'bare-metal', 'استضافة', 'حاويات', 'افتراضية', 'vdi'],
  },
  {
    id: 'firewalls',
    labelAr: 'جدران حماية وشبكات',
    labelEn: 'Firewalls & Networks',
    query: 'جدران حماية وشبكات',
    synonyms: ['حماية', 'جدران', 'جدار', 'firewall', 'firewalls', 'شبكات', 'شبكة', 'سيبرانية', 'تأمين', 'vpn', 'كابلات', 'فايبر', 'cybersecurity'],
  },
  {
    id: 'erp',
    labelAr: 'أنظمة ERP ومستشفيات',
    labelEn: 'ERP & Hospital Systems',
    query: 'أنظمة ERP ومستشفيات',
    synonyms: ['erp', 'مستشفيات', 'مستشفى', 'عيادات', 'طبية', 'ادارية', 'مالية', 'فواتير', 'منظومات', 'سجلات', 'clinic', 'hospital', 'his', 'مرضى'],
  },
  {
    id: 'apps',
    labelAr: 'تطبيقات ويب وموبايل',
    labelEn: 'Web & Mobile Apps',
    query: 'تطبيقات ويب وموبايل',
    synonyms: ['تطبيقات', 'تطبيق', 'ويب', 'موبايل', 'جوال', 'بوابات', 'مواقع', 'متاجر', 'متجر', 'تجارة', 'واجهات', 'web', 'app', 'mobile', 'ios', 'android', 'برمجيات'],
  },
  {
    id: 'surveillance',
    labelAr: 'كاميرات ومراقبة',
    labelEn: 'CCTV & Monitoring',
    query: 'كاميرات ومراقبة',
    synonyms: ['مراقبة', 'كاميرات', 'كاميرا', 'cctv', 'رصد', 'تتبع', 'nvr', 'observability', 'استباقي', 'تنبيهات'],
  },
];

// Arabic text normalizer (handles alef forms, teh marbuta, yaa, and tashkeel)
const normalizeArabic = (text: string): string => {
  if (!text) return '';
  return text
    .toLowerCase()
    .trim()
    .replace(/[أإآ]/g, 'ا')
    .replace(/[ة]/g, 'ه')
    .replace(/[ى]/g, 'ي')
    .replace(/[ؤ]/g, 'و')
    .replace(/[ئ]/g, 'ي')
    .replace(/[\u064B-\u065F]/g, '');
};

// Strips common prefixes like conjunction 'و' and definite article 'ال'
const cleanWord = (word: string): string => {
  let cleaned = normalizeArabic(word).replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, '');
  if (cleaned.startsWith('و') && cleaned.length > 2) {
    cleaned = cleaned.slice(1);
  }
  if (cleaned.startsWith('ال') && cleaned.length > 3) {
    cleaned = cleaned.slice(2);
  }
  if (cleaned.startsWith('ب') && cleaned.length > 3) {
    cleaned = cleaned.slice(1);
  }
  if (cleaned.startsWith('ل') && cleaned.length > 3) {
    cleaned = cleaned.slice(1);
  }
  return cleaned;
};

// Levenshtein distance for fuzzy typo tolerance
const levenshteinDistance = (a: string, b: string): number => {
  if (a.length === 0) return b.length;
  if (b.length === 0) return a.length;
  const matrix: number[][] = [];
  for (let i = 0; i <= b.length; i++) matrix[i] = [i];
  for (let j = 0; j <= a.length; j++) matrix[0][j] = j;

  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1, // substitution
          matrix[i][j - 1] + 1,     // insertion
          matrix[i - 1][j] + 1      // deletion
        );
      }
    }
  }
  return matrix[b.length][a.length];
};

// Fuzzy word matcher (exact, substring, or edit-distance tolerance)
const isWordFuzzyMatch = (queryWord: string, targetWord: string): boolean => {
  if (!queryWord || !targetWord) return false;
  if (queryWord === targetWord) return true;
  if (targetWord.includes(queryWord) || queryWord.includes(targetWord)) return true;

  // For words with length >= 3, allow 1 typo; for >= 7, allow 2 typos
  const qLen = queryWord.length;
  const tLen = targetWord.length;
  if (qLen >= 3 && tLen >= 3) {
    const maxDiff = qLen >= 7 ? 2 : 1;
    if (Math.abs(qLen - tLen) <= maxDiff) {
      if (levenshteinDistance(queryWord, targetWord) <= maxDiff) {
        return true;
      }
    }
  }
  return false;
};

const getServiceHaystack = (service: ServiceItem): string => {
  return [
    service.title_ar,
    service.title_en,
    service.description_ar,
    service.description_en,
    service.category_ar,
    service.category_en,
    service.useCaseStory_ar,
    service.useCaseStory_en,
    ...(service.features_ar || []),
    ...(service.features_en || []),
  ]
    .filter(Boolean)
    .join(' ');
};

// Robust fuzzy search with weighted relevance scoring
interface MatchResult {
  matches: boolean;
  score: number;
}

const evaluateFuzzyMatch = (
  service: ServiceItem,
  query: string,
  selectedTagId: string | null
): MatchResult => {
  const trimmed = query.trim();
  // If search is completely empty and no quick tag selected, match everything
  if (!trimmed && !selectedTagId) {
    return { matches: true, score: 1 };
  }

  const haystack = getServiceHaystack(service);
  const normalizedHaystack = normalizeArabic(haystack);
  const rawHaystack = haystack.toLowerCase();
  const haystackWords = normalizedHaystack.split(/\s+/).map(cleanWord).filter((w) => w.length > 1);

  let score = 0;

  // 1. If a quick tag is selected, match against its synonym list
  if (selectedTagId) {
    const activeTag = quickTags.find((t) => t.id === selectedTagId);
    if (activeTag) {
      const tagMatch = activeTag.synonyms.some((syn) => {
        const normSyn = normalizeArabic(syn);
        return normalizedHaystack.includes(normSyn) || rawHaystack.includes(syn.toLowerCase());
      });
      if (tagMatch) {
        return { matches: true, score: 100 };
      }
    }
  }

  // 2. Check if query matches any registered quick tag directly
  const matchedQuickTag = quickTags.find(
    (t) =>
      normalizeArabic(t.labelAr) === normalizeArabic(trimmed) ||
      normalizeArabic(t.query) === normalizeArabic(trimmed) ||
      t.id.toLowerCase() === trimmed.toLowerCase()
  );

  if (matchedQuickTag) {
    const tagSynMatch = matchedQuickTag.synonyms.some((syn) => {
      const normSyn = normalizeArabic(syn);
      return normalizedHaystack.includes(normSyn) || rawHaystack.includes(syn.toLowerCase());
    });
    if (tagSynMatch) {
      return { matches: true, score: 90 };
    }
  }

  // 3. Exact full phrase match (highest natural score)
  const normQuery = normalizeArabic(trimmed);
  const rawQuery = trimmed.toLowerCase();
  if (normalizedHaystack.includes(normQuery) || rawHaystack.includes(rawQuery)) {
    score += 50;
    // Extra boost if match is in the title
    const normTitleAr = normalizeArabic(service.title_ar);
    const normTitleEn = service.title_en.toLowerCase();
    if (normTitleAr.includes(normQuery) || normTitleEn.includes(rawQuery)) {
      score += 40;
    }
    return { matches: true, score };
  }

  // 4. Token-based fuzzy matching
  const rawTokens = trimmed.split(/\s+/).filter(Boolean);
  const cleanedTokens = rawTokens.map(cleanWord).filter((t) => t.length > 1);
  if (cleanedTokens.length === 0) {
    return { matches: true, score: 1 };
  }

  let matchedTokenCount = 0;
  for (const token of cleanedTokens) {
    // Check if token matches directly or fuzzily with any word in the service haystack
    const directHit = normalizedHaystack.includes(token) || rawHaystack.includes(token);
    if (directHit) {
      matchedTokenCount++;
      score += 20;
      continue;
    }

    // Fuzzy check against haystack words
    const fuzzyHit = haystackWords.some((hWord) => isWordFuzzyMatch(token, hWord));
    if (fuzzyHit) {
      matchedTokenCount++;
      score += 15;
    }
  }

  // If at least one significant token matched fuzzily or directly
  if (matchedTokenCount > 0) {
    return { matches: true, score };
  }

  return { matches: false, score: 0 };
};

const RECENT_SEARCHES_STORAGE_KEY = 'nuzul_recent_searches_v2';
const MAX_RECENT_SEARCHES = 6;

export const ServicesSection: React.FC = () => {
  const { locale, theme } = useApp();
  const isAr = locale === 'ar';
  const isDark = theme === 'dark';

  const [activeCategory, setActiveCategory] = useState<ServiceCategoryKey>('all');
  const [showAll, setShowAll] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTagId, setSelectedTagId] = useState<string | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);

  const searchContainerRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Load recent searches from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem(RECENT_SEARCHES_STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          setRecentSearches(parsed.slice(0, MAX_RECENT_SEARCHES));
        }
      }
    } catch {
      // Graceful fallback
    }
  }, []);

  // Close recent searches dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(e.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Save query to recent searches
  const saveRecentSearch = (query: string) => {
    const trimmed = query.trim();
    if (!trimmed || trimmed.length < 2) return;

    setRecentSearches((prev) => {
      const filtered = prev.filter((item) => item.toLowerCase() !== trimmed.toLowerCase());
      const updated = [trimmed, ...filtered].slice(0, MAX_RECENT_SEARCHES);
      try {
        localStorage.setItem(RECENT_SEARCHES_STORAGE_KEY, JSON.stringify(updated));
      } catch {
        // Safe fallback
      }
      return updated;
    });
  };

  const removeRecentSearch = (queryToRemove: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setRecentSearches((prev) => {
      const updated = prev.filter((item) => item !== queryToRemove);
      try {
        localStorage.setItem(RECENT_SEARCHES_STORAGE_KEY, JSON.stringify(updated));
      } catch {
        // Safe fallback
      }
      return updated;
    });
  };

  const clearAllRecentSearches = (e: React.MouseEvent) => {
    e.stopPropagation();
    setRecentSearches([]);
    try {
      localStorage.removeItem(RECENT_SEARCHES_STORAGE_KEY);
    } catch {
      // Safe fallback
    }
  };

  const handleSelectRecentSearch = (query: string) => {
    setSearchQuery(query);
    setSelectedTagId(null);
    setActiveCategory('all');
    setShowAll(true);
    setIsDropdownOpen(false);
    saveRecentSearch(query);
  };

  const iconMap: Record<string, React.ElementType> = {
    Code,
    Smartphone,
    ShoppingBag,
    Layout,
    Layers,
    Server,
    Terminal,
    Monitor,
    HardDrive,
    Mail,
    Globe2,
    AtSign,
    PhoneCall,
    ShieldCheck,
    Activity,
    Database,
    Cloud,
    Cpu,
    Eye,
    CheckCircle2,
  };

  const isSearching = searchQuery.trim().length > 0 || selectedTagId !== null;

  // 1. Evaluate fuzzy matches across all 23 services and rank by score
  const scoredMatches = NUZUL_SERVICES.map((s) => {
    const evalResult = evaluateFuzzyMatch(s, searchQuery, selectedTagId);
    return { service: s, ...evalResult };
  })
    .filter((res) => res.matches)
    .sort((a, b) => b.score - a.score);

  const allCategoryMatches = scoredMatches.map((m) => m.service);

  // 2. Filter by active category
  const filteredServices = allCategoryMatches.filter((s) => {
    if (activeCategory === 'all') return true;
    return s.category_key === activeCategory;
  });

  const INITIAL_COUNT = 8;
  const displayedServices =
    !isSearching && activeCategory === 'all' && !showAll
      ? filteredServices.slice(0, INITIAL_COUNT)
      : filteredServices;

  const softwareCount = NUZUL_SERVICES.filter((s) => s.category_key === 'software').length;
  const infraCloudCount = NUZUL_SERVICES.filter((s) => s.category_key === 'infra_cloud').length;
  const securityObsCount = NUZUL_SERVICES.filter((s) => s.category_key === 'security_obs').length;

  const categories: { id: ServiceCategoryKey; labelAr: string; labelEn: string; count: number }[] = [
    {
      id: 'all',
      labelAr: `جميع الخدمات (${NUZUL_SERVICES.length})`,
      labelEn: `All Services (${NUZUL_SERVICES.length})`,
      count: NUZUL_SERVICES.length,
    },
    {
      id: 'infra_cloud',
      labelAr: `البنية التحتية والسحابية (${infraCloudCount})`,
      labelEn: `Infrastructure & Cloud (${infraCloudCount})`,
      count: infraCloudCount,
    },
    {
      id: 'security_obs',
      labelAr: `الأمن والمراقبة (${securityObsCount})`,
      labelEn: `Security & Observability (${securityObsCount})`,
      count: securityObsCount,
    },
    {
      id: 'software',
      labelAr: `البرمجيات والحلول الرقمية (${softwareCount})`,
      labelEn: `Software & Digital Solutions (${softwareCount})`,
      count: softwareCount,
    },
  ];

  // Completely resets search, quick tag, and category back to all services
  const handleClearFilters = () => {
    setSearchQuery('');
    setSelectedTagId(null);
    setActiveCategory('all');
    setShowAll(true);
    setIsDropdownOpen(false);
    if (searchInputRef.current) {
      searchInputRef.current.value = '';
      searchInputRef.current.focus();
    }
  };

  const handleTagClick = (tag: QuickTag) => {
    if (selectedTagId === tag.id) {
      // Deselect: restore full catalog
      setSelectedTagId(null);
      setSearchQuery('');
      setActiveCategory('all');
      setShowAll(true);
    } else {
      // Select
      setSelectedTagId(tag.id);
      setSearchQuery(tag.labelAr);
      setActiveCategory('all');
      setShowAll(true);
      saveRecentSearch(tag.labelAr);
    }
    setIsDropdownOpen(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setSearchQuery(val);
    setSelectedTagId(null);

    if (!val.trim()) {
      setActiveCategory('all');
      setShowAll(true);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (searchQuery.trim()) {
        saveRecentSearch(searchQuery);
        setIsDropdownOpen(false);
      }
    } else if (e.key === 'Escape') {
      setIsDropdownOpen(false);
      handleClearFilters();
    }
  };

  return (
    <section
      id="services"
      className={`relative overflow-hidden scroll-mt-24 px-5 py-20 sm:py-24 sm:px-6 lg:px-8 border-t transition-colors ${
        isDark ? 'bg-[#070c14] border-white/10 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'
      }`}
    >
      <div className="mx-auto max-w-7xl">
        {/* Header with Reveal on Scroll */}
        <RevealOnScroll direction="up" threshold={0.15}>
          <div className="mx-auto max-w-3xl text-center">
            <div className="eyebrow-mono justify-center text-emerald-600 dark:text-emerald-400">
              <ShieldCheck className="h-4 w-4" />
              <span>{isAr ? 'خدمات نُزول تِك المتكاملة' : 'NUZUL TECH SERVICES'}</span>
            </div>

            <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">
              {isAr ? 'كل ما يحتاجه عملك تحت سقف واحد' : 'Everything Your Business Needs Under One Roof'}
            </h2>

            <p
              className={`mt-4 text-base leading-relaxed ${
                isDark ? 'text-slate-300' : 'text-slate-600'
              }`}
            >
              {isAr
                ? 'حلول تقنية متكاملة ومترابطة للمؤسسات والشركات: من تجهيز الشبكات الفيزيائية والسنترال وجدران الحماية، إلى الخوادم السحابية والبرمجيات المخصصة مع دعم هندسي مصري متواصل.'
                : 'Integrated enterprise IT solutions: physical cabling, VoIP telephony, firewalls, high-compute cloud VPS, and bespoke software with direct engineering support.'}
            </p>

            {/* Core Capability Pills */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-xs font-mono">
              {[
                { ar: 'حلول الأمن والشبكات', en: 'Enterprise Security & Networks' },
                { ar: 'أنظمة السنترال والاتصالات', en: 'Unified Telephony & VoIP' },
                { ar: 'الأنظمة السحابية والـ ERP', en: 'Enterprise Cloud & ERP Systems' },
                { ar: 'تطبيقات الويب والموبايل', en: 'Web & Mobile Applications' },
                { ar: 'النسخ الاحتياطي واستعادة البيانات', en: 'Disaster Recovery & Backup' },
                { ar: 'المراقبة المستمرة للأجهزة', en: '24/7 System Monitoring' },
              ].map((item, idx) => (
                <span
                  key={idx}
                  className={`inline-flex items-center gap-1.5 rounded-xl border px-3 py-1.5 font-bold transition-colors ${
                    isDark
                      ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-300'
                      : 'border-emerald-300 bg-emerald-50 text-emerald-900 shadow-sm'
                  }`}
                >
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                  <span>{isAr ? item.ar : item.en}</span>
                </span>
              ))}
            </div>

            {/* Search Bar Feature with Recent Searches Dropdown & Fuzzy Matching */}
            <div className="relative mx-auto mt-8 max-w-2xl" ref={searchContainerRef}>
              <div
                className={`relative flex items-center rounded-2xl border transition-all duration-300 backdrop-blur-md ${
                  isDark
                    ? 'bg-[#0d1524]/90 border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.4)] focus-within:border-emerald-500 focus-within:ring-2 focus-within:ring-emerald-500/25'
                    : 'bg-white/95 border-slate-200 shadow-md focus-within:border-emerald-500 focus-within:ring-2 focus-within:ring-emerald-500/20'
                }`}
              >
                <div className={`pointer-events-none flex items-center ${isAr ? 'pr-4 pl-2' : 'pl-4 pr-2'}`}>
                  <Search className="h-5 w-5 text-emerald-500 transition-colors" />
                </div>

                <input
                  ref={searchInputRef}
                  type="text"
                  value={searchQuery}
                  onChange={handleInputChange}
                  onFocus={() => setIsDropdownOpen(true)}
                  onKeyDown={handleKeyDown}
                  placeholder={
                    isAr
                      ? 'ابحث فوراً: سنترال VoIP، سيرفرات سحابية، ERP، جدران حماية، تطبيقات، مراقبة...'
                      : 'Instant Search: VoIP PBX, Cloud VPS, ERP, Firewalls, Web Apps, Monitoring...'
                  }
                  className={`w-full bg-transparent py-3.5 text-sm outline-none transition-colors ${
                    isDark ? 'text-white placeholder:text-slate-500' : 'text-slate-900 placeholder:text-slate-400'
                  } ${isAr ? 'text-right' : 'text-left'}`}
                  dir={isAr ? 'rtl' : 'ltr'}
                />

                {/* Clear Button & Results Count Badge */}
                <div className={`flex items-center gap-2 ${isAr ? 'pl-3 pr-2' : 'pr-3 pl-2'}`}>
                  {isSearching && (
                    <>
                      <span className="hidden sm:inline-flex items-center rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                        {filteredServices.length} {isAr ? 'نتيجة' : 'results'}
                      </span>
                      <button
                        type="button"
                        onClick={handleClearFilters}
                        className={`rounded-full p-1.5 transition-colors cursor-pointer ${
                          isDark
                            ? 'hover:bg-white/10 text-slate-400 hover:text-white'
                            : 'hover:bg-slate-100 text-slate-400 hover:text-slate-700'
                        }`}
                        title={isAr ? 'مسح البحث (Esc)' : 'Clear search (Esc)'}
                        aria-label={isAr ? 'مسح البحث' : 'Clear search'}
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </>
                  )}
                </div>
              </div>

              {/* Recent Searches Dropdown Menu */}
              {isDropdownOpen && recentSearches.length > 0 && (
                <div
                  className={`absolute top-full mt-2 w-full overflow-hidden rounded-2xl border p-2.5 shadow-2xl backdrop-blur-xl z-50 text-start transition-all ${
                    isDark
                      ? 'bg-[#0d1524]/95 border-white/10 text-white shadow-[0_15px_40px_rgba(0,0,0,0.6)]'
                      : 'bg-white/95 border-slate-200 text-slate-900 shadow-xl'
                  }`}
                  dir={isAr ? 'rtl' : 'ltr'}
                >
                  <div className="flex items-center justify-between px-3 py-1.5 border-b border-current/10 mb-1.5">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-slate-400 font-mono">
                      <History className="h-3.5 w-3.5 text-emerald-500" />
                      <span>{isAr ? 'عمليات البحث الأخيرة' : 'Recent Searches'}</span>
                    </div>
                    <button
                      type="button"
                      onClick={clearAllRecentSearches}
                      className="text-[11px] font-medium text-slate-400 hover:text-red-500 transition-colors cursor-pointer flex items-center gap-1"
                    >
                      <Trash2 className="h-3 w-3" />
                      <span>{isAr ? 'مسح السجل' : 'Clear all'}</span>
                    </button>
                  </div>

                  <div className="space-y-1">
                    {recentSearches.map((item, idx) => (
                      <div
                        key={idx}
                        onClick={() => handleSelectRecentSearch(item)}
                        className={`group flex items-center justify-between rounded-xl px-3 py-2 text-xs transition-colors cursor-pointer ${
                          isDark
                            ? 'hover:bg-emerald-500/10 text-slate-200 hover:text-emerald-400'
                            : 'hover:bg-emerald-50 text-slate-700 hover:text-emerald-800'
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <Clock className="h-3.5 w-3.5 text-slate-400 group-hover:text-emerald-500 transition-colors" />
                          <span className="font-medium">{item}</span>
                        </div>
                        <button
                          type="button"
                          onClick={(e) => removeRecentSearch(item, e)}
                          className="text-slate-400 hover:text-red-400 p-1 rounded-md hover:bg-slate-500/10 transition-colors cursor-pointer"
                          title={isAr ? 'حذف من السجل' : 'Remove from recent'}
                        >
                          <X className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Quick Search Suggestion Tags */}
              <div className="mt-3 flex flex-wrap items-center justify-center gap-1.5 text-xs">
                <span
                  className={`inline-flex items-center gap-1 text-[11px] font-mono ${
                    isDark ? 'text-slate-400' : 'text-slate-500'
                  }`}
                >
                  <Sparkles className="h-3 w-3 text-emerald-500" />
                  <span>{isAr ? 'بحث سريع:' : 'Quick tags:'}</span>
                </span>
                {quickTags.map((tag) => {
                  const isSelected =
                    selectedTagId === tag.id ||
                    searchQuery.trim().toLowerCase() === tag.labelAr.toLowerCase();

                  return (
                    <button
                      key={tag.id}
                      type="button"
                      onClick={() => handleTagClick(tag)}
                      className={`rounded-lg px-2.5 py-1 text-[11px] font-medium transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-emerald-500 text-white font-bold shadow-sm shadow-emerald-500/25 ring-1 ring-emerald-400'
                          : isDark
                          ? 'bg-white/5 text-slate-300 hover:bg-emerald-500/10 hover:text-emerald-400 border border-white/5'
                          : 'bg-slate-100 text-slate-600 hover:bg-emerald-50 hover:text-emerald-700 border border-slate-200/60'
                      }`}
                    >
                      {isAr ? tag.labelAr : tag.labelEn}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Category Filter Tabs */}
            <div className="mt-7 flex flex-wrap items-center justify-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => {
                    setActiveCategory(cat.id as any);
                    setShowAll(true);
                  }}
                  className={`rounded-full px-5 py-2.5 text-xs font-bold transition-all cursor-pointer ${
                    activeCategory === cat.id
                      ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/25 ring-2 ring-emerald-400/40'
                      : isDark
                      ? 'bg-[#0d1524] text-slate-300 hover:bg-white/10 hover:text-white border border-white/10'
                      : 'bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200 shadow-sm'
                  }`}
                >
                  {isAr ? cat.labelAr : cat.labelEn}
                </button>
              ))}
            </div>
          </div>
        </RevealOnScroll>

        {/* Active Search Banner Indicator */}
        {isSearching && filteredServices.length > 0 && (
          <div className="mt-8 flex flex-wrap items-center justify-between gap-3 rounded-2xl border px-5 py-3 text-xs border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 backdrop-blur-md">
            <div className="flex items-center gap-2 font-medium">
              <Search className="h-4 w-4 shrink-0 text-emerald-500" />
              <span>
                {isAr
                  ? `نتائج البحث عن "${searchQuery}": تم العثور على ${filteredServices.length} خدمة متخصصة`
                  : `Search results for "${searchQuery}": ${filteredServices.length} matching services found`}
              </span>
            </div>
            <button
              type="button"
              onClick={handleClearFilters}
              className="inline-flex items-center gap-1 font-bold text-xs underline cursor-pointer hover:opacity-80"
            >
              <X className="h-3.5 w-3.5" />
              <span>{isAr ? 'مسح الفلاتر وعرض الكل' : 'Clear filters & show all'}</span>
            </button>
          </div>
        )}

        {/* Empty State when 0 services match (Exact Helpful Guidance requested) */}
        {filteredServices.length === 0 && (
          <div
            className={`mt-12 mx-auto max-w-xl text-center rounded-2xl border p-8 sm:p-10 transition-all ${
              isDark
                ? 'bg-[#0d1524] border-white/10 shadow-[0_10px_35px_rgba(0,0,0,0.5)]'
                : 'bg-white border-slate-200 shadow-xl'
            }`}
          >
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-500 mb-4 shadow-sm">
              <FilterX className="h-8 w-8 stroke-[1.5]" />
            </div>

            <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
              {isAr ? 'لم يتم العثور على خدمات مطابقة' : 'No services found'}
            </h3>

            <p
              className={`mt-2 text-sm leading-relaxed ${
                isDark ? 'text-slate-300' : 'text-slate-600'
              }`}
            >
              {isAr
                ? 'لم يتم العثور على أي خدمات مطابقة لبحثك، يرجى مسح الفلاتر وإعادة المحاولة لعرض كافة حلول نُزول تِك.'
                : 'No services found, please clear your filters and try again.'}
            </p>

            {/* Clear Filters CTA */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={handleClearFilters}
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 px-5 py-2.5 text-xs font-bold text-white shadow-md shadow-emerald-600/25 transition-all cursor-pointer"
              >
                <RotateCcw className="h-4 w-4" />
                <span>
                  {isAr ? `مسح الفلاتر وعرض كافة الخدمات (${NUZUL_SERVICES.length})` : `Clear filters & show all ${NUZUL_SERVICES.length} services`}
                </span>
              </button>

              <a
                href={NUZUL_CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 rounded-xl border px-4 py-2.5 text-xs font-bold transition-all cursor-pointer ${
                  isDark
                    ? 'border-white/10 bg-white/5 text-slate-300 hover:bg-white/10'
                    : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100'
                }`}
              >
                <span>{isAr ? 'استفسار عبر واتساب' : 'Ask via WhatsApp'}</span>
              </a>
            </div>

            {/* Suggested quick tags to immediately jump back */}
            <div className="mt-6 pt-5 border-t border-current/10">
              <span className="text-xs text-slate-400 block mb-2">
                {isAr ? 'أو اختر أحد المواضيع الأكثر طلباً:' : 'Or explore popular topics:'}
              </span>
              <div className="flex flex-wrap items-center justify-center gap-1.5">
                {quickTags.slice(0, 4).map((tag) => (
                  <button
                    key={tag.id}
                    type="button"
                    onClick={() => handleTagClick(tag)}
                    className="rounded-lg px-2 py-1 text-[11px] font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/20 transition-colors cursor-pointer"
                  >
                    {isAr ? tag.labelAr : tag.labelEn}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Services Grid with Staggered Reveal */}
        {filteredServices.length > 0 && (
          <StaggerContainer
            staggerDelay={0.06}
            className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            {displayedServices.map((service) => {
              const Icon = iconMap[service.icon] || Server;
              const title = isAr ? service.title_ar : service.title_en;
              const desc = isAr ? service.description_ar : service.description_en;
              const categoryLabel = isAr ? service.category_ar : service.category_en;
              const story = isAr ? service.useCaseStory_ar : service.useCaseStory_en;
              const features = isAr ? service.features_ar : service.features_en;

              return (
                <StaggerItem key={service.id} className="h-full">
                  <article
                    className={`group relative flex flex-col justify-between h-full rounded-2xl border-2 p-6 transition-all duration-300 hover:-translate-y-1.5 ${
                      isDark
                        ? 'border-emerald-500/25 bg-[#0d1524] hover:border-emerald-400 shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_15px_35px_rgba(16,185,129,0.18)]'
                        : 'border-slate-200 bg-white hover:border-emerald-500 shadow-md hover:shadow-xl'
                    }`}
                  >
                    <div>
                      {/* Top Header: Icon + Category Badge */}
                      <div className="flex items-start justify-between gap-3">
                        <div
                          className={`flex h-12 w-12 items-center justify-center rounded-xl border transition-all duration-300 group-hover:scale-110 ${
                            isDark
                              ? 'bg-emerald-500/15 border-emerald-500/30 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-black group-hover:shadow-[0_0_20px_rgba(16,185,129,0.4)]'
                              : 'bg-emerald-50 border-emerald-200 text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white shadow-sm'
                          }`}
                        >
                          <Icon className="h-6 w-6 stroke-[1.8]" />
                        </div>

                        <span
                          className={`rounded-full px-2.5 py-1 text-[11px] font-semibold border ${
                            isDark
                              ? 'bg-white/5 border-white/10 text-slate-300'
                              : 'bg-slate-100 border-slate-200 text-slate-600'
                          }`}
                        >
                          {categoryLabel}
                        </span>
                      </div>

                      {/* Service Title */}
                      <h3 className="mt-5 text-lg font-bold leading-snug group-hover:text-emerald-500 transition-colors">
                        {title}
                      </h3>

                      {/* Service Description */}
                      <p
                        className={`mt-2.5 text-xs leading-relaxed ${
                          isDark ? 'text-slate-300' : 'text-slate-600'
                        }`}
                      >
                        {desc}
                      </p>

                      {/* Real Customer Case Story */}
                      {story && (
                        <div
                          className={`mt-4 rounded-xl border p-3 text-xs leading-relaxed transition-colors ${
                            isDark
                              ? 'border-emerald-500/20 bg-emerald-950/20 text-emerald-200/90'
                              : 'border-emerald-200/80 bg-emerald-50/60 text-emerald-900'
                          }`}
                        >
                          <div className="flex items-center gap-1.5 font-bold text-[11px] mb-1 font-mono uppercase text-emerald-600 dark:text-emerald-400">
                            <BookOpen className="h-3 w-3" />
                            <span>{isAr ? 'قصة تنفيذ حقيقية' : 'Production Case Story'}</span>
                          </div>
                          <p>{story}</p>
                        </div>
                      )}

                      {/* Key Features Bullet List */}
                      {features && features.length > 0 && (
                        <ul className="mt-4 space-y-2 text-xs">
                          {features.map((feature, fIdx) => (
                            <li
                              key={fIdx}
                              className={`flex items-start gap-2 ${
                                isDark ? 'text-slate-300' : 'text-slate-700'
                              }`}
                            >
                              <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-emerald-500 mt-0.5" />
                              <span className="leading-tight">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>

                    {/* Footer Action: Consultation / Direct Contact */}
                    <div className="mt-6 pt-4 border-t border-current/10 flex items-center justify-between">
                      <a
                        href="#contact"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400 group-hover:underline cursor-pointer"
                      >
                        <span>{isAr ? 'طلب الخدمة' : 'Request Service'}</span>
                        {isAr ? (
                          <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
                        ) : (
                          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                        )}
                      </a>

                      <a
                        href={NUZUL_CONTACT.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[11px] font-mono text-slate-400 hover:text-emerald-500 transition-colors"
                      >
                        {isAr ? 'استفسار سريع' : 'Quick Chat'}
                      </a>
                    </div>
                  </article>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        )}

        {/* Show More / Show Less Toggle Button */}
        {!isSearching && activeCategory === 'all' && NUZUL_SERVICES.length > INITIAL_COUNT && (
          <div className="mt-12 text-center">
            <button
              type="button"
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-emerald-600/25 transition-all cursor-pointer"
            >
              <span>
                {showAll
                  ? isAr
                    ? 'عرض خدمات أقل'
                    : 'Show Less Services'
                  : isAr
                  ? `عرض كافة الخدمات المتبقية (${NUZUL_SERVICES.length - INITIAL_COUNT})`
                  : `Show All Remaining (${NUZUL_SERVICES.length - INITIAL_COUNT}) Services`}
              </span>
              {showAll ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
