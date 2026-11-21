import React, { useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { PROJECTS, NormalizedProject } from '../../data/nuzulData';
import { useApp } from '../../context/AppContext';
import { matchesArabicQuery, scoreArabicMatch } from '../../utils/arabicSearch';
import { openGlobalSearch } from '../search/GlobalSearchCommandPalette';
import { ArchitectureDiagram } from '../common/ArchitectureDiagram';
import {
  ArrowLeft,
  ArrowRight,
  SlidersHorizontal,
  Search,
  X,
  RotateCcw,
  Clock,
  ChevronDown,
} from 'lucide-react';

interface CaseCategoryDef {
  slug: 'all' | 'infrastructure' | 'cloud' | 'security' | 'software';
  nameAr: string;
  nameEn: string;
}

const CASE_CATEGORIES: CaseCategoryDef[] = [
  { slug: 'all', nameAr: 'جميع المشاريع', nameEn: 'All Case Studies' },
  { slug: 'infrastructure', nameAr: 'الشبكات والبنية التحتية', nameEn: 'Infrastructure & Networks' },
  { slug: 'cloud', nameAr: 'السحابة والاستضافة', nameEn: 'Cloud & Servers' },
  { slug: 'security', nameAr: 'الأمن السيبراني', nameEn: 'Cybersecurity' },
  { slug: 'software', nameAr: 'البرمجيات وأنظمة الإدارة', nameEn: 'Software & ERP' },
];

const SORT_OPTIONS = [
  { id: 'default', labelAr: 'الترتيب القياسي', labelEn: 'Featured Order' },
  { id: 'title', labelAr: 'أبجدياً (أ - ي)', labelEn: 'Alphabetical (A - Z)' },
];

const ITEMS_PER_PAGE = 6;

export const ProjectsSection: React.FC = () => {
  const { lang } = useApp();
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileSheetOpen, setMobileSheetOpen] = useState(false);
  const [expandedCaseIds, setExpandedCaseIds] = useState<Record<string, boolean>>({});
  const ArrowIcon = lang === 'ar' ? ArrowLeft : ArrowRight;

  const toggleCaseExpand = (id: string) => {
    setExpandedCaseIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const catParam = (searchParams.get('cat') || 'all') as CaseCategoryDef['slug'];
  const queryParam = (searchParams.get('q') || '').trim();
  const sortParam = searchParams.get('sort') || 'default';
  const pageParam = Math.max(1, parseInt(searchParams.get('page') || '1', 10) || 1);

  const activeCatDef =
    CASE_CATEGORIES.find((c) => c.slug === catParam) || CASE_CATEGORIES[0];
  const activeCatSlug = activeCatDef.slug;

  const queryMatchedProjects = useMemo(() => {
    if (!queryParam) return PROJECTS;
    return PROJECTS.filter((p) => {
      const haystacks = [
        p.title,
        p.titleEn,
        p.client,
        p.clientEn,
        p.contextAr,
        p.contextEn,
        p.challenge,
        p.challengeEn,
        p.solution,
        p.solutionEn,
        p.qualitativeOutcomeAr,
        p.qualitativeOutcomeEn,
        ...p.technologies,
      ];
      return matchesArabicQuery(queryParam, haystacks);
    });
  }, [queryParam]);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {
      all: queryMatchedProjects.length,
    };
    for (const c of CASE_CATEGORIES) {
      if (c.slug !== 'all') {
        counts[c.slug] = queryMatchedProjects.filter(
          (p) => p.categorySlug === c.slug
        ).length;
      }
    }
    return counts;
  }, [queryMatchedProjects]);

  const filteredProjects = useMemo(() => {
    let list: NormalizedProject[] =
      activeCatSlug === 'all'
        ? [...queryMatchedProjects]
        : queryMatchedProjects.filter((p) => p.categorySlug === activeCatSlug);

    if (queryParam && sortParam === 'default') {
      list.sort(
        (a, b) =>
          scoreArabicMatch(queryParam, [b.title, b.titleEn, ...b.technologies]) -
          scoreArabicMatch(queryParam, [a.title, a.titleEn, ...a.technologies])
      );
    } else if (sortParam === 'title') {
      list.sort((a, b) => {
        const tA = lang === 'ar' ? a.title : a.titleEn;
        const tB = lang === 'ar' ? b.title : b.titleEn;
        return tA.localeCompare(tB, lang === 'ar' ? 'ar' : 'en');
      });
    }

    return list;
  }, [queryMatchedProjects, activeCatSlug, queryParam, sortParam, lang]);

  const visibleCount = pageParam * ITEMS_PER_PAGE;
  const visibleProjects = filteredProjects.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProjects.length;

  const updateUrlParams = (updates: {
    cat?: string | null;
    q?: string | null;
    sort?: string | null;
    page?: number | null;
  }) => {
    const next = new URLSearchParams(searchParams);

    if (updates.cat !== undefined) {
      if (!updates.cat || updates.cat === 'all') next.delete('cat');
      else next.set('cat', updates.cat);
      if (updates.page === undefined) next.delete('page');
    }
    if (updates.q !== undefined) {
      if (!updates.q || !updates.q.trim()) next.delete('q');
      else next.set('q', updates.q.trim());
      if (updates.page === undefined) next.delete('page');
    }
    if (updates.sort !== undefined) {
      if (!updates.sort || updates.sort === 'default') next.delete('sort');
      else next.set('sort', updates.sort);
    }
    if (updates.page !== undefined) {
      if (!updates.page || updates.page <= 1) next.delete('page');
      else next.set('page', String(updates.page));
    }

    setSearchParams(next);
  };

  const handleClearAllFilters = () => {
    setSearchParams({});
    setMobileSheetOpen(false);
  };

  const hasActiveFilters =
    activeCatSlug !== 'all' || Boolean(queryParam) || sortParam !== 'default';

  return (
    <section id="projects" className="section-spacing bg-page-band">
      <div className="container-nuzul">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* STICKY FILTER SIDEBAR (Desktop >= 1024px) */}
          <aside
            aria-label={lang === 'ar' ? 'تصفية دراسات الحالة' : 'Filter case studies'}
            data-testid="cases-filter-sidebar"
            className="hidden lg:block lg:col-span-3 sticky top-24 clean-card p-5 space-y-6"
          >
            <div>
              <button
                type="button"
                onClick={() => openGlobalSearch(queryParam)}
                data-testid="cases-global-search-trigger"
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

            <div>
              <h2 className="text-xs font-bold text-accent mb-3">
                {lang === 'ar' ? 'تصفية حسب القطاع التقني' : 'Filter by Engineering Pillar'}
              </h2>
              <div className="space-y-1.5" role="group" aria-label={lang === 'ar' ? 'تصنيفات المشاريع' : 'Case study categories'}>
                {CASE_CATEGORIES.map((cat) => {
                  const isActive = activeCatSlug === cat.slug;
                  const count = categoryCounts[cat.slug] ?? 0;
                  return (
                    <button
                      key={cat.slug}
                      type="button"
                      onClick={() => updateUrlParams({ cat: cat.slug })}
                      data-testid={`cases-filter-cat-${cat.slug}`}
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
                        className={`px-2 py-0.5 rounded text-[11px] font-bold ltr-num shrink-0 ${
                          isActive ? 'bg-surface text-accent' : 'bg-surface-2 text-muted'
                        }`}
                      >
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="pt-4 border-t border-token">
              <label
                htmlFor="cases-sort-select"
                className="block text-xs font-bold text-accent mb-2"
              >
                {lang === 'ar' ? 'ترتيب النتائج' : 'Sort Results'}
              </label>
              <select
                id="cases-sort-select"
                data-testid="cases-sort-select"
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

            {hasActiveFilters && (
              <div className="pt-4 border-t border-token">
                <button
                  type="button"
                  onClick={handleClearAllFilters}
                  data-testid="cases-sidebar-clear-btn"
                  className="w-full min-h-[44px] py-2.5 px-3 rounded-xl text-xs font-semibold text-muted hover-text-main border border-token bg-page inline-flex items-center justify-center gap-2"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>{lang === 'ar' ? 'مسح جميع الفلاتر' : 'Clear all filters'}</span>
                </button>
              </div>
            )}
          </aside>

          {/* MAIN CASE STUDIES LISTING COLUMN (lg:col-span-9) */}
          <div className="lg:col-span-9 space-y-6">
            {/* Status Bar: Result Count + Mobile Filter Sheet Trigger + Active Chips */}
            <div className="clean-card p-4 sm:p-5 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div
                  data-testid="cases-result-count"
                  className="text-sm font-bold text-main"
                >
                  {lang === 'ar' ? (
                    <span>
                      عرض <bdi dir="ltr" className="ltr-num text-accent">{visibleProjects.length}</bdi> من أصل{' '}
                      <bdi dir="ltr" className="ltr-num">{filteredProjects.length}</bdi> دراسة حالة هندسية
                    </span>
                  ) : (
                    <span>
                      Showing <bdi dir="ltr" className="ltr-num text-accent">{visibleProjects.length}</bdi> of{' '}
                      <bdi dir="ltr" className="ltr-num">{filteredProjects.length}</bdi> engineering case studies
                    </span>
                  )}
                </div>

                <div className="flex lg:hidden items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setMobileSheetOpen(true)}
                    data-testid="cases-mobile-filter-trigger"
                    className="min-h-[44px] px-4 py-2 rounded-xl bg-page border border-token text-xs font-bold text-main inline-flex items-center gap-2 whitespace-nowrap"
                  >
                    <SlidersHorizontal className="w-4 h-4 text-accent" />
                    <span>{lang === 'ar' ? 'تصفية وترتيب' : 'Filter & Sort'}</span>
                  </button>
                </div>
              </div>

              {hasActiveFilters && (
                <div
                  data-testid="cases-active-filter-chips"
                  className="pt-3 border-t border-token flex flex-wrap items-center gap-2"
                >
                  <span className="text-xs text-muted font-semibold">
                    {lang === 'ar' ? 'الفلاتر النشطة:' : 'Active filters:'}
                  </span>

                  {activeCatSlug !== 'all' && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-accent-soft border border-accent text-xs font-semibold text-accent">
                      <span>{lang === 'ar' ? activeCatDef.nameAr : activeCatDef.nameEn}</span>
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
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-accent-soft border border-accent text-xs font-semibold text-accent">
                      <span>
                        {lang === 'ar' ? `البحث: ${queryParam}` : `Query: ${queryParam}`}
                      </span>
                      <button
                        type="button"
                        onClick={() => updateUrlParams({ q: null })}
                        aria-label={lang === 'ar' ? 'إزالة كلمة البحث' : 'Remove query filter'}
                        className="p-0.5 hover:opacity-80"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </span>
                  )}

                  <button
                    type="button"
                    onClick={handleClearAllFilters}
                    data-testid="cases-clear-all-btn"
                    className="ms-auto text-xs font-bold text-accent hover:underline whitespace-nowrap"
                  >
                    {lang === 'ar' ? 'مسح الكل' : 'Clear all'}
                  </button>
                </div>
              )}
            </div>

            {/* Empty State */}
            {filteredProjects.length === 0 ? (
              <div
                data-testid="cases-empty-state"
                className="clean-card p-10 text-center space-y-4"
              >
                <h3 className="text-xl font-bold text-main">
                  {lang === 'ar'
                    ? 'لا توجد دراسات حالة مطابقة للفلاتر المحددة'
                    : 'No case studies match your selected filters'}
                </h3>
                <p className="text-sm text-muted max-w-md mx-auto">
                  {lang === 'ar'
                    ? 'يمكنك مسح الفلاتر لاستعراض كافة المشاريع المنفذة أو التواصل مع فريقنا الهندسي لمناقشة مشروع مماثل.'
                    : 'Clear the active filters to view all documented deployments or contact our engineering team directly.'}
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                  <button
                    type="button"
                    onClick={handleClearAllFilters}
                    className="btn-secondary px-5 py-2.5 text-xs font-bold"
                  >
                    {lang === 'ar' ? 'عرض جميع المشاريع' : 'Show All Case Studies'}
                  </button>
                  <Link to="/contact" className="btn-primary px-5 py-2.5 text-xs font-bold">
                    {lang === 'ar' ? 'احجز استشارة هندسية' : 'Book Engineering Consultation'}
                  </Link>
                </div>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {visibleProjects.map((project) => {
                    const isExpanded = Boolean(expandedCaseIds[project.id]);
                    return (
                      <article
                        key={project.id}
                        data-testid={`case-study-card-${project.id}`}
                        className="clean-card clean-card-hover overflow-hidden flex flex-col justify-between"
                      >
                        <div>
                          <div className="bg-surface-2 overflow-hidden border-b border-token">
                            <ArchitectureDiagram caseId={project.id} variant="card" />
                          </div>

                          <div className="p-6 space-y-3">
                            <div className="flex flex-wrap items-center gap-2 text-xs text-muted">
                              <span className="font-semibold text-accent whitespace-nowrap">
                                {lang === 'ar' ? project.category : project.categoryEn}
                              </span>
                              <span aria-hidden="true">·</span>
                              <span className="inline-flex items-center gap-1">
                                <Clock className="w-3.5 h-3.5 text-accent" aria-hidden="true" />
                                <span>{lang === 'ar' ? project.timelineAr : project.timelineEn}</span>
                              </span>
                            </div>

                            <div className="text-xs font-semibold text-muted">
                              {lang === 'ar' ? project.client : project.clientEn}
                            </div>

                            <h3 className="text-lg font-bold text-main leading-snug">
                              <Link
                                to={`/case-studies/${project.id}`}
                                className="hover-text-accent transition-colors"
                              >
                                {lang === 'ar' ? project.title : project.titleEn}
                              </Link>
                            </h3>

                            <p
                              className={`text-sm text-muted leading-relaxed ${
                                isExpanded ? '' : 'line-clamp-2'
                              }`}
                            >
                              {lang === 'ar'
                                ? project.qualitativeOutcomeAr
                                : project.qualitativeOutcomeEn}
                            </p>

                            {isExpanded && (
                              <div className="space-y-2.5 pt-3 border-t border-token text-xs text-muted leading-relaxed">
                                <p>
                                  <strong className="text-main font-semibold">
                                    {lang === 'ar' ? 'السياق: ' : 'Context: '}
                                  </strong>
                                  {lang === 'ar' ? project.contextAr : project.contextEn}
                                </p>
                                <p>
                                  <strong className="text-main font-semibold">
                                    {lang === 'ar' ? 'التحدي: ' : 'Challenge: '}
                                  </strong>
                                  {lang === 'ar' ? project.challenge : project.challengeEn}
                                </p>
                                <p>
                                  <strong className="text-main font-semibold">
                                    {lang === 'ar' ? 'التنفيذ: ' : 'Delivered: '}
                                  </strong>
                                  {lang === 'ar' ? project.solution : project.solutionEn}
                                </p>
                                <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 pt-1 text-[11px] text-muted">
                                  {project.technologies.map((tech, i) => (
                                    <React.Fragment key={i}>
                                      {i > 0 && <span aria-hidden="true">·</span>}
                                      <bdi dir="ltr" className="ltr-num font-medium text-main whitespace-nowrap">
                                        {tech}
                                      </bdi>
                                    </React.Fragment>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        </div>

                        <div className="px-6 pb-4 pt-3 border-t border-token flex items-center justify-between gap-3">
                          <button
                            type="button"
                            onClick={() => toggleCaseExpand(project.id)}
                            data-testid={`case-expand-${project.id}`}
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

                          <Link
                            to={`/case-studies/${project.id}`}
                            className="inline-flex items-center gap-1.5 min-h-[44px] px-2 text-xs font-bold text-accent hover:underline shrink-0 whitespace-nowrap"
                          >
                            <span>{lang === 'ar' ? 'تفاصيل المشروع' : 'Read Case Study'}</span>
                            <ArrowIcon className="w-3.5 h-3.5 shrink-0" />
                          </Link>
                        </div>
                      </article>
                    );
                  })}
                </div>

                {hasMore && (
                  <div className="pt-4 text-center">
                    <button
                      type="button"
                      onClick={() => updateUrlParams({ page: pageParam + 1 })}
                      data-testid="load-more-cases-btn"
                      className="btn-secondary px-8 py-3.5 text-sm font-bold whitespace-nowrap"
                    >
                      {lang === 'ar'
                        ? `عرض المزيد من المشاريع (${filteredProjects.length - visibleProjects.length} متبقية)`
                        : `Load More Case Studies (${filteredProjects.length - visibleProjects.length} remaining)`}
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>

        {/* MOBILE FILTER BOTTOM SHEET (< 1024px) */}
        {mobileSheetOpen && (
          <div
            className="fixed inset-0 z-50 lg:hidden flex flex-col justify-end"
            data-testid="cases-mobile-filter-sheet"
          >
            <div
              className="fixed inset-0 bg-overlay"
              onClick={() => setMobileSheetOpen(false)}
            />
            <div className="relative z-10 bg-surface border-t-2 border-token rounded-t-2xl p-6 max-h-[80vh] overflow-y-auto space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-token">
                <h3 className="text-base font-bold text-main">
                  {lang === 'ar' ? 'تصفية وترتيب المشاريع' : 'Filter & Sort Case Studies'}
                </h3>
                <button
                  type="button"
                  onClick={() => setMobileSheetOpen(false)}
                  className="min-h-[44px] min-w-[44px] inline-flex items-center justify-center rounded-lg bg-page border border-token text-muted"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-2">
                {CASE_CATEGORIES.map((cat) => {
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
                      className={`w-full min-h-[44px] px-4 py-2.5 rounded-xl text-xs font-bold flex items-center justify-between border ${
                        isActive
                          ? 'bg-accent text-accent-contrast border-accent'
                          : 'bg-page text-main border-token'
                      }`}
                    >
                      <span>{lang === 'ar' ? cat.nameAr : cat.nameEn}</span>
                      <span className="ltr-num">{count}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
