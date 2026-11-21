import React, { useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ARTICLES, Article } from '../../data/nuzulData';
import { useApp } from '../../context/AppContext';
import { matchesArabicQuery, scoreArabicMatch } from '../../utils/arabicSearch';
import { openGlobalSearch } from '../search/GlobalSearchCommandPalette';
import {
  Calendar,
  Clock,
  ArrowLeft,
  ArrowRight,
  SlidersHorizontal,
  Search,
  X,
  RotateCcw,
  ChevronDown,
  Check,
} from 'lucide-react';

interface BlogCategoryDef {
  slug: 'all' | 'infrastructure' | 'cloud' | 'security' | 'software';
  nameAr: string;
  nameEn: string;
}

const BLOG_CATEGORIES: BlogCategoryDef[] = [
  { slug: 'all', nameAr: 'كل المقالات والشروحات', nameEn: 'All Articles & Guides' },
  { slug: 'infrastructure', nameAr: 'الشبكات والسيرفر رووم', nameEn: 'Networks & Server Rooms' },
  { slug: 'cloud', nameAr: 'سيرفرات Cloud VPS والاستضافة', nameEn: 'Cloud VPS & Hosting' },
  { slug: 'security', nameAr: 'الأمن السيبراني والـ Backup', nameEn: 'Cybersecurity & Backup' },
  { slug: 'software', nameAr: 'أنظمة ERP والبرمجيات', nameEn: 'ERP & Business Software' },
];

const SORT_OPTIONS = [
  { id: 'default', labelAr: 'الأحدث نشراً', labelEn: 'Most Recent' },
  { id: 'title', labelAr: 'أبجدياً (أ - ي)', labelEn: 'Alphabetical (A - Z)' },
];

const ITEMS_PER_PAGE = 9;

export const BlogSection: React.FC = () => {
  const { lang } = useApp();
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileSheetOpen, setMobileSheetOpen] = useState(false);
  const [expandedBlogIds, setExpandedBlogIds] = useState<Record<string, boolean>>({});
  const ArrowIcon = lang === 'ar' ? ArrowLeft : ArrowRight;

  const toggleBlogExpand = (id: string) => {
    setExpandedBlogIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const catParam = (searchParams.get('cat') || 'all') as BlogCategoryDef['slug'];
  const queryParam = (searchParams.get('q') || '').trim();
  const sortParam = searchParams.get('sort') || 'default';
  const pageParam = Math.max(1, parseInt(searchParams.get('page') || '1', 10) || 1);

  const activeCatDef =
    BLOG_CATEGORIES.find((c) => c.slug === catParam) || BLOG_CATEGORIES[0];
  const activeCatSlug = activeCatDef.slug;

  const queryMatchedArticles = useMemo(() => {
    if (!queryParam) return ARTICLES;
    return ARTICLES.filter((a) => {
      const haystacks = [
        a.title,
        a.titleEn,
        a.category,
        a.categoryEn,
        a.excerpt,
        a.excerptEn,
        ...a.content,
        ...a.contentEn,
      ];
      return matchesArabicQuery(queryParam, haystacks);
    });
  }, [queryParam]);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {
      all: queryMatchedArticles.length,
    };
    for (const c of BLOG_CATEGORIES) {
      if (c.slug !== 'all') {
        counts[c.slug] = queryMatchedArticles.filter(
          (a) => a.categorySlug === c.slug
        ).length;
      }
    }
    return counts;
  }, [queryMatchedArticles]);

  const filteredArticles = useMemo(() => {
    let list: Article[] =
      activeCatSlug === 'all'
        ? [...queryMatchedArticles]
        : queryMatchedArticles.filter((a) => a.categorySlug === activeCatSlug);

    if (queryParam && sortParam === 'default') {
      list.sort(
        (a, b) =>
          scoreArabicMatch(queryParam, [b.title, b.titleEn, b.excerpt, b.excerptEn]) -
          scoreArabicMatch(queryParam, [a.title, a.titleEn, a.excerpt, a.excerptEn])
      );
    } else if (sortParam === 'title') {
      list.sort((a, b) => {
        const tA = lang === 'ar' ? a.title : a.titleEn;
        const tB = lang === 'ar' ? b.title : b.titleEn;
        return tA.localeCompare(tB, lang === 'ar' ? 'ar' : 'en');
      });
    }

    return list;
  }, [queryMatchedArticles, activeCatSlug, queryParam, sortParam, lang]);

  const visibleCount = pageParam * ITEMS_PER_PAGE;
  const visibleArticles = filteredArticles.slice(0, visibleCount);
  const hasMore = visibleCount < filteredArticles.length;

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
    <section id="blog" className="section-spacing bg-page-band">
      <div className="container-nuzul">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* STICKY FILTER SIDEBAR (Desktop >= 1024px) */}
          <aside
            aria-label={lang === 'ar' ? 'تصفية المقالات التقنية' : 'Filter technical articles'}
            data-testid="blog-filter-sidebar"
            className="hidden lg:block lg:col-span-3 sticky top-24 clean-card p-5 space-y-6"
          >
            <div>
              <button
                type="button"
                onClick={() => openGlobalSearch(queryParam)}
                data-testid="blog-global-search-trigger"
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
                {lang === 'ar' ? 'أقسام المدونة' : 'Topics'}
              </h2>
              <div className="space-y-1.5" role="group" aria-label={lang === 'ar' ? 'تصنيفات المدونة' : 'Blog categories'}>
                {BLOG_CATEGORIES.map((cat) => {
                  const isActive = activeCatSlug === cat.slug;
                  const count = categoryCounts[cat.slug] ?? 0;
                  return (
                    <button
                      key={cat.slug}
                      type="button"
                      onClick={() => updateUrlParams({ cat: cat.slug })}
                      data-testid={`blog-filter-cat-${cat.slug}`}
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
                htmlFor="blog-sort-select"
                className="block text-xs font-bold text-accent mb-2"
              >
                {lang === 'ar' ? 'ترتيب المقالات' : 'Sort Articles'}
              </label>
              <select
                id="blog-sort-select"
                data-testid="blog-sort-select"
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
                  data-testid="blog-sidebar-clear-btn"
                  className="w-full min-h-[44px] py-2.5 px-3 rounded-xl text-xs font-semibold text-muted hover-text-main border border-token bg-page inline-flex items-center justify-center gap-2"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>{lang === 'ar' ? 'مسح جميع الفلاتر' : 'Clear all filters'}</span>
                </button>
              </div>
            )}
          </aside>

          {/* MAIN BLOG LISTING COLUMN (lg:col-span-9) */}
          <div className="lg:col-span-9 space-y-6">
            <div className="clean-card p-4 sm:p-5 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div
                  data-testid="blog-result-count"
                  className="text-sm font-bold text-main"
                >
                  {lang === 'ar' ? (
                    <span>
                      عرض <bdi dir="ltr" className="ltr-num text-accent">{visibleArticles.length}</bdi> من{' '}
                      <bdi dir="ltr" className="ltr-num">{filteredArticles.length}</bdi> مقال تقني
                    </span>
                  ) : (
                    <span>
                      Showing <bdi dir="ltr" className="ltr-num text-accent">{visibleArticles.length}</bdi> of{' '}
                      <bdi dir="ltr" className="ltr-num">{filteredArticles.length}</bdi> technical articles
                    </span>
                  )}
                </div>

                <div className="flex lg:hidden items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setMobileSheetOpen(true)}
                    data-testid="blog-mobile-filter-trigger"
                    className="min-h-[44px] px-4 py-2 rounded-xl bg-page border border-token text-xs font-bold text-main inline-flex items-center gap-2 whitespace-nowrap"
                  >
                    <SlidersHorizontal className="w-4 h-4 text-accent" />
                    <span>{lang === 'ar' ? 'تصفية وترتيب' : 'Filter & Sort'}</span>
                  </button>
                </div>
              </div>

              {hasActiveFilters && (
                <div
                  data-testid="blog-active-filter-chips"
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
                        aria-label={lang === 'ar' ? 'إزالة فلتر التصنيف' : 'Remove category filter'}
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
                    data-testid="blog-clear-filters-btn"
                    className="ms-auto text-xs font-bold text-accent hover:underline whitespace-nowrap"
                  >
                    {lang === 'ar' ? 'مسح الكل' : 'Clear all'}
                  </button>
                </div>
              )}
            </div>

            {filteredArticles.length === 0 ? (
              <div
                data-testid="blog-empty-state"
                className="clean-card p-10 text-center space-y-4"
              >
                <h3 className="text-xl font-bold text-main">
                  {lang === 'ar'
                    ? 'مفيش مقالات مطابقة للفلتر ده'
                    : 'No articles match your selected filters'}
                </h3>
                <button
                  type="button"
                  onClick={handleClearAllFilters}
                  className="btn-secondary px-5 py-2.5 text-xs font-bold"
                >
                  {lang === 'ar' ? 'عرض كل المقالات' : 'Show All Articles'}
                </button>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {visibleArticles.map((article) => {
                    const isExpanded = Boolean(expandedBlogIds[article.id]);
                    return (
                      <article
                        key={article.id}
                        data-testid={`blog-card-${article.id}`}
                        className="clean-card clean-card-hover overflow-hidden flex flex-col justify-between"
                      >
                        <div>
                          <div className="p-6">
                            <div className="flex flex-wrap items-center gap-2 text-xs text-muted mb-3">
                              <span className="font-semibold text-accent whitespace-nowrap">
                                {lang === 'ar' ? article.category : article.categoryEn}
                              </span>
                              <span aria-hidden="true">·</span>
                              <span className="inline-flex items-center gap-1">
                                <Calendar className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                                <bdi dir="ltr" className="ltr-num">{article.date}</bdi>
                              </span>
                              <span aria-hidden="true">·</span>
                              <span className="inline-flex items-center gap-1">
                                <Clock className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                                <span>{lang === 'ar' ? article.readTime : article.readTimeEn}</span>
                              </span>
                            </div>

                            <h3 className="text-lg font-bold text-main mb-2.5 leading-snug">
                              <Link
                                to={`/blog/${article.id}`}
                                className="hover-text-accent transition-colors"
                              >
                                {lang === 'ar' ? article.title : article.titleEn}
                              </Link>
                            </h3>

                            <p
                              className={`text-muted text-sm leading-relaxed ${
                                isExpanded ? '' : 'line-clamp-2'
                              }`}
                            >
                              {lang === 'ar' ? article.excerpt : article.excerptEn}
                            </p>

                            {isExpanded && article.sections && article.sections.length > 0 && (
                              <ul className="space-y-1.5 pt-3 mt-3 border-t border-token">
                                {article.sections.map((sec) => (
                                  <li key={sec.id} className="flex items-start gap-2 text-xs text-main">
                                    <Check className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                                    <span>{lang === 'ar' ? sec.headingAr : sec.headingEn}</span>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        </div>

                        <div className="px-6 pb-4 pt-3 border-t border-token flex items-center justify-between gap-2 text-xs">
                          <button
                            type="button"
                            onClick={() => toggleBlogExpand(article.id)}
                            data-testid={`blog-expand-${article.id}`}
                            aria-expanded={isExpanded}
                            className="inline-flex items-center gap-1 min-h-[44px] font-semibold text-muted hover-text-main transition-colors whitespace-nowrap"
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
                            to={`/blog/${article.id}`}
                            className="inline-flex items-center gap-1.5 min-h-[44px] px-2 font-semibold text-accent hover:underline whitespace-nowrap"
                          >
                            <span>{lang === 'ar' ? 'اقرأ المقال' : 'Read Article'}</span>
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
                      data-testid="load-more-blog-btn"
                      className="btn-secondary px-8 py-3.5 text-sm font-bold whitespace-nowrap"
                    >
                      {lang === 'ar'
                        ? `عرض المزيد من المقالات (${filteredArticles.length - visibleArticles.length} متبقية)`
                        : `Load More Articles (${filteredArticles.length - visibleArticles.length} remaining)`}
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
            data-testid="blog-mobile-filter-sheet"
          >
            <div
              className="fixed inset-0 bg-overlay"
              onClick={() => setMobileSheetOpen(false)}
            />
            <div className="relative z-10 bg-surface border-t-2 border-token rounded-t-2xl p-6 max-h-[80vh] overflow-y-auto space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-token">
                <h3 className="text-base font-bold text-main">
                  {lang === 'ar' ? 'تصفية وترتيب المقالات' : 'Filter & Sort Articles'}
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
                {BLOG_CATEGORIES.map((cat) => {
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
