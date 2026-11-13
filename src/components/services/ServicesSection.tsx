import React, { useState, useEffect, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { SERVICES, ServiceItem } from '../../data/nuzulData';
import { useApp } from '../../context/AppContext';
import {
  Check,
  ArrowLeft,
  ArrowRight,
  RotateCcw,
  SlidersHorizontal,
  X,
  Search,
  ArrowUpDown,
  ChevronDown,
} from 'lucide-react';
import { scoreArabicMatch } from '../../utils/arabicSearch';
import { openGlobalSearch } from '../search/GlobalSearchCommandPalette';

const CATEGORY_DEFS = [
  {
    slug: 'all',
    internalAr: 'all',
    nameAr: 'جميع الخدمات',
    nameEn: 'All Services',
  },
  {
    slug: 'infrastructure',
    internalAr: 'الشبكات والبنية التحتية',
    nameAr: 'الشبكات والبنية التحتية',
    nameEn: 'Infrastructure & Networks',
  },
  {
    slug: 'cloud',
    internalAr: 'السحابة والاستضافة',
    nameAr: 'السحابة والاستضافة',
    nameEn: 'Cloud & Servers',
  },
  {
    slug: 'security',
    internalAr: 'الأمن السيبراني',
    nameAr: 'الأمن السيبراني',
    nameEn: 'Cybersecurity',
  },
  {
    slug: 'software',
    internalAr: 'البرمجيات وأنظمة الإدارة',
    nameAr: 'البرمجيات وأنظمة الإدارة',
    nameEn: 'Software & ERP',
  },
];

const SORT_OPTIONS = [
  { id: 'default', labelAr: 'الترتيب الافتراضي', labelEn: 'Default Order' },
  { id: 'title', labelAr: 'الترتيب الأبجدي', labelEn: 'Alphabetical' },
  { id: 'category', labelAr: 'حسب القطاع الهندسي', labelEn: 'By Engineering Pillar' },
];

const PAGE_SIZE = 9;

export const ServicesSection: React.FC = () => {
  const { lang, addToCart } = useApp();
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileSheetOpen, setMobileSheetOpen] = useState(false);
  const [isSkeletonLoading, setIsSkeletonLoading] = useState(false);
  const [expandedServiceIds, setExpandedServiceIds] = useState<Record<string, boolean>>({});

  const toggleServiceExpand = (id: string) => {
    setExpandedServiceIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const ArrowIcon = lang === 'ar' ? ArrowLeft : ArrowRight;

  // Read filters from URL query params (?cat= or ?category=, ?q=, ?sort=, ?page=, ?skeleton=)
  const rawCatParam = searchParams.get('cat') || searchParams.get('category') || 'all';
  const activeCatDef =
    CATEGORY_DEFS.find(
      (c) => c.slug === rawCatParam || c.internalAr === rawCatParam
    ) || CATEGORY_DEFS[0];
  const activeCatSlug = activeCatDef.slug;

  const queryParam = (searchParams.get('q') || '').trim();
  const sortParam = searchParams.get('sort') || 'default';
  const pageParam = Math.max(1, parseInt(searchParams.get('page') || '1', 10) || 1);
  const forceSkeleton = searchParams.get('skeleton') === '1';

  // Category counts (computed against queryParam if present so counts stay accurate)
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: 0 };
    for (const c of CATEGORY_DEFS) {
      if (c.slug !== 'all') counts[c.slug] = 0;
    }

    for (const s of SERVICES) {
      if (queryParam) {
        const matchScore = scoreArabicMatch(queryParam, {
          title: `${s.title} ${s.titleEn}`,
          subtitle: `${s.category} ${s.shortDesc} ${s.shortDescEn}`,
          tags: [...s.features, ...s.featuresEn],
        });
        if (matchScore <= 0) continue;
      }
      counts.all += 1;
      const catObj = CATEGORY_DEFS.find((c) => c.internalAr === s.category);
      if (catObj) {
        counts[catObj.slug] = (counts[catObj.slug] || 0) + 1;
      }
    }
    return counts;
  }, [queryParam]);

  // Filter & sort services
  const filteredServices = useMemo(() => {
    const result: { service: ServiceItem; score: number }[] = [];

    for (const service of SERVICES) {
      const matchesCat =
        activeCatSlug === 'all' || service.category === activeCatDef.internalAr;
      if (!matchesCat) continue;

      if (!queryParam) {
        result.push({ service, score: 1 });
      } else {
        const score = scoreArabicMatch(queryParam, {
          title: `${service.title} ${service.titleEn}`,
          subtitle: `${service.category} ${service.shortDesc} ${service.shortDescEn}`,
          tags: [...service.features, ...service.featuresEn],
        });
        if (score > 0) {
          result.push({ service, score });
        }
      }
    }

    if (sortParam === 'title') {
      result.sort((a, b) => {
        const tA = lang === 'ar' ? a.service.title : a.service.titleEn;
        const tB = lang === 'ar' ? b.service.title : b.service.titleEn;
        return tA.localeCompare(tB, lang === 'ar' ? 'ar' : 'en');
      });
    } else if (sortParam === 'category') {
      result.sort((a, b) =>
        a.service.category.localeCompare(b.service.category, 'ar')
      );
    } else if (queryParam) {
      result.sort((a, b) => b.score - a.score);
    }

    return result.map((r) => r.service);
  }, [activeCatSlug, activeCatDef.internalAr, queryParam, sortParam, lang]);

  const visibleCount = pageParam * PAGE_SIZE;
  const visibleServices = filteredServices.slice(0, visibleCount);
  const hasMore = visibleServices.length < filteredServices.length;

  const updateUrlParams = (updates: {
    cat?: string | null;
    q?: string | null;
    sort?: string | null;
    page?: number | null;
  }) => {
    setIsSkeletonLoading(true);
    const next = new URLSearchParams(searchParams);
    // Normalize legacy 'category' param to 'cat'
    next.delete('category');

    if (updates.cat !== undefined) {
      if (!updates.cat || updates.cat === 'all') {
        next.delete('cat');
      } else {
        next.set('cat', updates.cat);
      }
      if (updates.page === undefined) next.delete('page');
    }

    if (updates.q !== undefined) {
      if (!updates.q || !updates.q.trim()) {
        next.delete('q');
      } else {
        next.set('q', updates.q.trim());
      }
      if (updates.page === undefined) next.delete('page');
    }

    if (updates.sort !== undefined) {
      if (!updates.sort || updates.sort === 'default') {
        next.delete('sort');
      } else {
        next.set('sort', updates.sort);
      }
    }

    if (updates.page !== undefined) {
      if (!updates.page || updates.page <= 1) {
        next.delete('page');
      } else {
        next.set('page', String(updates.page));
      }
    }

    setSearchParams(next);
  };

  useEffect(() => {
    if (!isSkeletonLoading) return;
    const t = setTimeout(() => setIsSkeletonLoading(false), 90);
    return () => clearTimeout(t);
  }, [isSkeletonLoading, searchParams]);

  const handleClearAllFilters = () => {
    setSearchParams({});
    setMobileSheetOpen(false);
  };

  const hasActiveFilters =
    activeCatSlug !== 'all' || Boolean(queryParam) || sortParam !== 'default';

  const activeSortObj =
    SORT_OPTIONS.find((s) => s.id === sortParam) || SORT_OPTIONS[0];

  const handleRequestService = (service: ServiceItem) => {
    addToCart({
      id: service.id,
      name: lang === 'ar' ? service.title : service.titleEn,
      type: 'service',
      price: 0,
      billingCycle: 'one-time',
      details: lang === 'ar' ? service.shortDesc : service.shortDescEn,
    });
  };

  return (
    <section id="services" className="section-spacing bg-page-band">
      <div className="container-nuzul">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* STICKY FILTER SIDEBAR (Right in RTL / Left in LTR on Desktop >= 1024px) */}
          <aside
            aria-label={lang === 'ar' ? 'تصفية وترتيب الخدمات' : 'Filter and sort services'}
            data-testid="services-filter-sidebar"
            className="hidden lg:block lg:col-span-3 sticky top-24 clean-card p-5 space-y-6"
          >
            {/* Global Search Trigger Button (No per-section text box per Section 3.7) */}
            <div>
              <button
                type="button"
                onClick={() => openGlobalSearch(queryParam)}
                data-testid="sidebar-global-search-trigger"
                className="w-full min-h-[44px] px-3.5 py-2.5 rounded-xl bg-page border border-token text-xs font-semibold text-muted hover-text-main flex items-center justify-between gap-2 transition-colors"
              >
                <span className="inline-flex items-center gap-2 truncate">
                  <Search className="w-4 h-4 text-accent shrink-0" />
                  <span className="truncate">
                    {queryParam
                      ? queryParam
                      : lang === 'ar'
                      ? 'بحث (Ctrl+K)'
                      : 'Search (Ctrl+K)'}
                  </span>
                </span>
                <kbd className="px-1.5 py-0.5 rounded bg-surface border border-token text-[10px] ltr-num shrink-0">
                  ⌘K
                </kbd>
              </button>
            </div>

            {/* Category Filters with Counts */}
            <div>
              <h2 className="text-xs font-bold text-accent mb-3">
                {lang === 'ar' ? 'القطاعات الهندسية' : 'Engineering Pillars'}
              </h2>
              <div className="space-y-1.5" role="group" aria-label={lang === 'ar' ? 'تصنيفات الخدمات' : 'Service categories'}>
                {CATEGORY_DEFS.map((cat) => {
                  const isActive = activeCatSlug === cat.slug;
                  const count = categoryCounts[cat.slug] ?? 0;
                  return (
                    <button
                      key={cat.slug}
                      type="button"
                      onClick={() => updateUrlParams({ cat: cat.slug })}
                      data-testid={`filter-cat-${cat.slug}`}
                      aria-pressed={isActive}
                      className={`w-full min-h-[44px] px-3.5 py-2.5 rounded-xl text-xs font-semibold flex items-center justify-between gap-2 transition-colors border ${
                        isActive
                          ? 'bg-accent text-accent-contrast border-accent'
                          : 'bg-page text-main border-token hover-surface-2'
                      }`}
                    >
                      <span className="text-start truncate">
                        {lang === 'ar' ? cat.nameAr : cat.nameEn}
                      </span>
                      <span
                        data-testid={`filter-cat-count-${cat.slug}`}
                        className={`px-2 py-0.5 rounded text-[11px] font-bold ltr-num shrink-0 ${
                          isActive
                            ? 'bg-surface text-accent'
                            : 'bg-surface-2 text-muted'
                        }`}
                      >
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Sort Selector */}
            <div className="pt-4 border-t border-token">
              <label
                htmlFor="services-sort-select"
                className="block text-xs font-bold text-accent mb-2"
              >
                {lang === 'ar' ? 'ترتيب النتائج' : 'Sort Results'}
              </label>
              <div className="relative">
                <select
                  id="services-sort-select"
                  data-testid="services-sort-select"
                  value={sortParam}
                  onChange={(e) => updateUrlParams({ sort: e.target.value })}
                  className="w-full min-h-[44px] px-3.5 py-2.5 rounded-xl bg-page border border-token text-xs font-semibold text-main focus:outline-none focus:border-accent cursor-pointer"
                >
                  {SORT_OPTIONS.map((opt) => (
                    <option key={opt.id} value={opt.id}>
                      {lang === 'ar' ? opt.labelAr : opt.labelEn}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {hasActiveFilters && (
              <div className="pt-4 border-t border-token">
                <button
                  type="button"
                  onClick={handleClearAllFilters}
                  data-testid="sidebar-clear-all-btn"
                  className="w-full min-h-[44px] py-2.5 px-3 rounded-xl text-xs font-semibold text-muted hover-text-main border border-token bg-page inline-flex items-center justify-center gap-2"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>{lang === 'ar' ? 'مسح جميع الفلاتر' : 'Clear all filters'}</span>
                </button>
              </div>
            )}
          </aside>

          {/* MAIN SERVICES LISTING COLUMN (lg:col-span-9) */}
          <div className="lg:col-span-9 space-y-6">
            {/* Top Status Bar: Result Count + Mobile Filter Trigger + Active Filter Chips */}
            <div className="clean-card p-4 sm:p-5 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div
                  data-testid="services-result-count"
                  className="text-sm font-bold text-main"
                >
                  {lang === 'ar' ? (
                    <span>
                      <bdi dir="ltr" className="ltr-num text-accent">{visibleServices.length}</bdi> من{' '}
                      <bdi dir="ltr" className="ltr-num">{filteredServices.length}</bdi> خدمة
                    </span>
                  ) : (
                    <span>
                      <bdi dir="ltr" className="ltr-num text-accent">{visibleServices.length}</bdi> of{' '}
                      <bdi dir="ltr" className="ltr-num">{filteredServices.length}</bdi> services
                    </span>
                  )}
                </div>

                {/* Mobile Bottom Sheet Trigger (< 1024px) */}
                <div className="flex lg:hidden items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setMobileSheetOpen(true)}
                    data-testid="mobile-filter-sheet-trigger"
                    className="min-h-[44px] px-4 py-2 rounded-xl bg-page border border-token text-xs font-bold text-main inline-flex items-center gap-2 whitespace-nowrap"
                  >
                    <SlidersHorizontal className="w-4 h-4 text-accent" />
                    <span>{lang === 'ar' ? 'تصفية وترتيب' : 'Filter & Sort'}</span>
                  </button>
                </div>
              </div>

              {/* Active Filter Chips Row */}
              {hasActiveFilters && (
                <div
                  data-testid="active-filter-chips-bar"
                  className="pt-3 border-t border-token flex flex-wrap items-center gap-2"
                >
                  <span className="text-xs text-muted font-semibold">
                    {lang === 'ar' ? 'الفلاتر النشطة:' : 'Active filters:'}
                  </span>

                  {activeCatSlug !== 'all' && (
                    <span
                      data-testid="active-filter-chip-cat"
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-accent-soft border border-accent text-xs font-semibold text-accent"
                    >
                      <span>
                        {lang === 'ar' ? activeCatDef.nameAr : activeCatDef.nameEn}
                      </span>
                      <button
                        type="button"
                        onClick={() => updateUrlParams({ cat: 'all' })}
                        aria-label={lang === 'ar' ? 'إزالة فلتر القطاع' : 'Remove category filter'}
                        className="p-0.5 hover:opacity-80"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </span>
                  )}

                  {queryParam && (
                    <span
                      data-testid="active-filter-chip-q"
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-accent-soft border border-accent text-xs font-semibold text-accent"
                    >
                      <span>
                        {lang === 'ar' ? `البحث: ${queryParam}` : `Query: ${queryParam}`}
                      </span>
                      <button
                        type="button"
                        onClick={() => updateUrlParams({ q: null })}
                        aria-label={lang === 'ar' ? 'إزالة كلمة البحث' : 'Remove search query'}
                        className="p-0.5 hover:opacity-80"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </span>
                  )}

                  {sortParam !== 'default' && (
                    <span
                      data-testid="active-filter-chip-sort"
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-surface-2 border border-token text-xs font-semibold text-main"
                    >
                      <ArrowUpDown className="w-3 h-3 text-accent" />
                      <span>
                        {lang === 'ar' ? activeSortObj.labelAr : activeSortObj.labelEn}
                      </span>
                      <button
                        type="button"
                        onClick={() => updateUrlParams({ sort: 'default' })}
                        aria-label={lang === 'ar' ? 'إعادة الترتيب الافتراضي' : 'Reset sort'}
                        className="p-0.5 hover:opacity-80"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </span>
                  )}

                  <button
                    type="button"
                    onClick={handleClearAllFilters}
                    data-testid="clear-all-filters-btn"
                    className="text-xs font-bold text-accent hover:underline ms-auto"
                  >
                    {lang === 'ar' ? 'مسح الكل' : 'Clear all'}
                  </button>
                </div>
              )}
            </div>

            {/* Skeleton Loading State */}
            {isSkeletonLoading || forceSkeleton ? (
              <div
                data-testid="services-skeleton-grid"
                className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
                aria-busy="true"
                aria-label={lang === 'ar' ? 'جاري تحميل الخدمات' : 'Loading services'}
              >
                {Array.from({ length: 6 }).map((_, idx) => (
                  <div
                    key={idx}
                    className="clean-card p-7 bg-surface space-y-4 animate-pulse"
                  >
                    <div className="h-5 w-32 rounded bg-surface-2" />
                    <div className="h-6 w-3/4 rounded bg-surface-2" />
                    <div className="h-14 w-full rounded bg-surface-2" />
                    <div className="space-y-2 pt-3 border-t border-token">
                      <div className="h-4 w-5/6 rounded bg-surface-2" />
                      <div className="h-4 w-2/3 rounded bg-surface-2" />
                    </div>
                  </div>
                ))}
              </div>
            ) : filteredServices.length === 0 ? (
              /* Empty State with Suggestions + Contact CTA */
              <div
                data-testid="services-empty-state"
                className="clean-card p-10 sm:p-12 text-center space-y-4"
              >
                <p className="text-lg font-bold text-main">
                  {lang === 'ar'
                    ? 'لم يتم العثور على خدمات مطابقة للفلاتر المحددة'
                    : 'No engineering services match the selected filters'}
                </p>
                <p className="text-sm text-muted max-w-md mx-auto leading-relaxed">
                  {lang === 'ar'
                    ? 'يمكنك مسح الفلاتر لعرض جميع الخدمات الهندسية (23 خدمة) أو التواصل مباشرة مع مهندسينا لطلب مشروع مخصص.'
                    : 'Clear active filters to browse all 23 engineering services, or contact our team for a custom architectural requirement.'}
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                  <button
                    type="button"
                    onClick={handleClearAllFilters}
                    data-testid="empty-state-reset-btn"
                    className="btn-secondary min-h-[44px] px-5 py-2.5 text-xs font-bold whitespace-nowrap inline-flex items-center gap-2"
                  >
                    <RotateCcw className="w-4 h-4" />
                    <span>{lang === 'ar' ? 'مسح جميع الفلاتر' : 'Clear All Filters'}</span>
                  </button>
                  <Link
                    to="/contact"
                    data-testid="empty-state-contact-cta"
                    className="btn-primary min-h-[44px] px-5 py-2.5 text-xs font-bold whitespace-nowrap inline-flex items-center gap-2"
                  >
                    <span>
                      {lang === 'ar' ? 'تواصل مع مهندس مختص' : 'Contact an Engineer'}
                    </span>
                    <ArrowIcon className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ) : (
              /* Services Cards Grid + Load More Pagination */
              <>
                <div
                  data-testid="services-cards-grid"
                  className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 items-stretch"
                >
                  {visibleServices.map((service) => {
                    const features =
                      lang === 'ar' ? service.features : service.featuresEn;
                    const isExpanded = Boolean(expandedServiceIds[service.id]);
                    return (
                      <div
                        key={service.id}
                        data-testid={`service-card-${service.id}`}
                        className="clean-card clean-card-hover p-6 flex flex-col justify-between"
                      >
                        <div>
                          <div className="mb-3">
                            <span className="inline-block text-xs font-semibold text-accent px-2.5 py-1 rounded bg-surface-2 border border-token">
                              {service.category}
                            </span>
                          </div>

                          <h3 className="text-lg font-bold text-main mb-2">
                            <Link
                              to={`/services/${service.id}`}
                              className="hover-text-accent transition-colors"
                            >
                              {lang === 'ar' ? service.title : service.titleEn}
                            </Link>
                          </h3>

                          <p
                            className={`text-muted text-sm leading-relaxed mb-4 ${
                              isExpanded ? '' : 'line-clamp-2'
                            }`}
                          >
                            {lang === 'ar' ? service.shortDesc : service.shortDescEn}
                          </p>

                          {isExpanded && (
                            <ul className="space-y-2 border-t border-token pt-3 mb-4">
                              {features.map((feat, idx) => (
                                <li
                                  key={idx}
                                  className="flex items-start gap-2 text-xs text-main"
                                >
                                  <Check className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                                  <span>{feat}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>

                        <div className="pt-3 border-t border-token flex items-center justify-between gap-2">
                          <button
                            type="button"
                            onClick={() => toggleServiceExpand(service.id)}
                            data-testid={`service-expand-${service.id}`}
                            aria-expanded={isExpanded}
                            className="inline-flex items-center gap-1 min-h-[44px] text-xs font-semibold text-muted hover-text-main transition-colors whitespace-nowrap"
                          >
                            <span>
                              {isExpanded
                                ? lang === 'ar'
                                  ? 'إخفاء التفاصيل'
                                  : 'Show less'
                                : lang === 'ar'
                                ? 'إظهار المزيد'
                                : 'Show more'}
                            </span>
                            <ChevronDown
                              className={`w-3.5 h-3.5 transition-transform ${
                                isExpanded ? 'rotate-180 text-accent' : ''
                              }`}
                            />
                          </button>

                          <div className="flex items-center gap-2">
                            <Link
                              to={`/services/${service.id}`}
                              className="btn-secondary min-h-[44px] px-3 py-2 text-xs whitespace-nowrap"
                            >
                              {lang === 'ar' ? 'التفاصيل' : 'Details'}
                            </Link>
                            <button
                              type="button"
                              onClick={() => handleRequestService(service)}
                              className="btn-primary min-h-[44px] px-3.5 py-2 text-xs whitespace-nowrap"
                            >
                              <span>{lang === 'ar' ? 'اطلب' : 'Request'}</span>
                              <ArrowIcon className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Pagination / Load More */}
                {hasMore && (
                  <div className="pt-6 text-center">
                    <button
                      type="button"
                      onClick={() => updateUrlParams({ page: pageParam + 1 })}
                      data-testid="load-more-services-btn"
                      className="btn-secondary min-h-[44px] px-6 py-3 text-sm font-bold whitespace-nowrap"
                    >
                      {lang === 'ar'
                        ? `عرض باقي الخدمات (${filteredServices.length - visibleServices.length})`
                        : `Show remaining services (${filteredServices.length - visibleServices.length})`}
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>

      {/* MOBILE BOTTOM SHEET FILTER DIALOG (< 1024px) */}
      {mobileSheetOpen && (
        <div
          className="fixed inset-0 z-[80] lg:hidden flex flex-col justify-end"
          data-testid="mobile-filter-sheet-backdrop"
          onClick={(e) => {
            if (e.target === e.currentTarget) setMobileSheetOpen(false);
          }}
        >
          <div
            className="fixed inset-0 bg-overlay pointer-events-none"
            aria-hidden="true"
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-label={lang === 'ar' ? 'تصفية وترتيب الخدمات' : 'Filter and sort services'}
            data-testid="mobile-filter-bottom-sheet"
            className="relative z-10 w-full rounded-t-2xl bg-surface border-t-2 border-token p-5 max-h-[82vh] overflow-y-auto space-y-5"
          >
            <div className="flex items-center justify-between pb-3 border-b border-token">
              <span className="text-base font-bold text-main">
                {lang === 'ar' ? 'تصفية وترتيب الخدمات' : 'Filter & Sort Services'}
              </span>
              <button
                type="button"
                onClick={() => setMobileSheetOpen(false)}
                data-testid="mobile-filter-sheet-close"
                aria-label={lang === 'ar' ? 'إغلاق' : 'Close'}
                className="min-h-[44px] min-w-[44px] inline-flex items-center justify-center rounded-lg text-muted hover-text-main"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-2">
              <div className="text-xs font-bold text-accent">
                {lang === 'ar' ? 'القطاعات الهندسية' : 'Engineering Pillars'}
              </div>
              {CATEGORY_DEFS.map((cat) => {
                const isActive = activeCatSlug === cat.slug;
                const count = categoryCounts[cat.slug] ?? 0;
                return (
                  <button
                    key={cat.slug}
                    type="button"
                    onClick={() => {
                      updateUrlParams({ cat: cat.slug });
                      setMobileSheetOpen(false);
                    }}
                    data-testid={`mobile-filter-cat-${cat.slug}`}
                    className={`w-full min-h-[44px] px-3.5 py-2.5 rounded-xl text-xs font-semibold flex items-center justify-between border ${
                      isActive
                        ? 'bg-accent text-accent-contrast border-accent'
                        : 'bg-page text-main border-token'
                    }`}
                  >
                    <span>{lang === 'ar' ? cat.nameAr : cat.nameEn}</span>
                    <span className="ltr-num font-bold">{count}</span>
                  </button>
                );
              })}
            </div>

            <div className="space-y-2 pt-3 border-t border-token">
              <label
                htmlFor="mobile-services-sort"
                className="block text-xs font-bold text-accent"
              >
                {lang === 'ar' ? 'ترتيب النتائج' : 'Sort Results'}
              </label>
              <select
                id="mobile-services-sort"
                value={sortParam}
                onChange={(e) => {
                  updateUrlParams({ sort: e.target.value });
                  setMobileSheetOpen(false);
                }}
                className="w-full min-h-[44px] px-3.5 py-2.5 rounded-xl bg-page border border-token text-xs font-semibold text-main"
              >
                {SORT_OPTIONS.map((opt) => (
                  <option key={opt.id} value={opt.id}>
                    {lang === 'ar' ? opt.labelAr : opt.labelEn}
                  </option>
                ))}
              </select>
            </div>

            <div className="pt-3 border-t border-token flex items-center gap-3">
              <button
                type="button"
                onClick={handleClearAllFilters}
                className="btn-secondary flex-1 min-h-[44px] py-2.5 text-xs font-bold whitespace-nowrap"
              >
                {lang === 'ar' ? 'مسح الكل' : 'Clear All'}
              </button>
              <button
                type="button"
                onClick={() => setMobileSheetOpen(false)}
                className="btn-primary flex-1 min-h-[44px] py-2.5 text-xs font-bold whitespace-nowrap"
              >
                {lang === 'ar' ? 'عرض النتائج' : 'Show Results'}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
