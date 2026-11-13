import React, { useState, useEffect, useRef, useMemo, useSyncExternalStore } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useApp } from '../../context/AppContext';
import {
  Search,
  X,
  Clock,
  ArrowLeft,
  ArrowRight,
  Wrench,
  Server,
  Briefcase,
  FileText,
  CornerDownLeft,
} from 'lucide-react';
import {
  searchGlobalCatalog,
  GlobalSearchResultItem,
} from '../../utils/arabicSearch';

interface SearchPaletteState {
  isOpen: boolean;
  initialQuery: string;
}

let paletteState: SearchPaletteState = {
  isOpen: false,
  initialQuery: '',
};

const paletteListeners = new Set<() => void>();

function emitPaletteChange() {
  for (const l of paletteListeners) {
    l();
  }
}

export function openGlobalSearch(initialQuery = ''): void {
  paletteState = {
    isOpen: true,
    initialQuery,
  };
  emitPaletteChange();
}

export function closeGlobalSearch(): void {
  if (!paletteState.isOpen) return;
  paletteState = {
    ...paletteState,
    isOpen: false,
  };
  emitPaletteChange();
}

function subscribePalette(listener: () => void) {
  paletteListeners.add(listener);
  return () => paletteListeners.delete(listener);
}

function getPaletteSnapshot() {
  return paletteState;
}

const RECENT_STORAGE_KEY = 'nuzul-recent-searches';

function loadRecentSearches(): string[] {
  try {
    const raw = localStorage.getItem(RECENT_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed.slice(0, 5) : [];
  } catch {
    return [];
  }
}

function saveRecentSearch(q: string): string[] {
  const trimmed = q.trim();
  if (!trimmed) return loadRecentSearches();
  const existing = loadRecentSearches().filter(
    (item) => item.toLowerCase() !== trimmed.toLowerCase()
  );
  const updated = [trimmed, ...existing].slice(0, 5);
  try {
    localStorage.setItem(RECENT_STORAGE_KEY, JSON.stringify(updated));
  } catch {
    // ignore storage errors
  }
  return updated;
}

export const GlobalSearchCommandPalette: React.FC = () => {
  const { isOpen, initialQuery } = useSyncExternalStore(
    subscribePalette,
    getPaletteSnapshot,
    getPaletteSnapshot
  );
  const { lang } = useApp();
  const navigate = useNavigate();

  const [query, setQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const [recentSearches, setRecentSearches] = useState<string[]>(() =>
    loadRecentSearches()
  );

  const inputRef = useRef<HTMLInputElement | null>(null);
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  const ArrowIcon = lang === 'ar' ? ArrowLeft : ArrowRight;

  // Global Cmd/Ctrl+K keyboard shortcut listener
  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (paletteState.isOpen) {
          closeGlobalSearch();
        } else {
          previousFocusRef.current = document.activeElement as HTMLElement | null;
          openGlobalSearch('');
        }
      }
    };
    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => window.removeEventListener('keydown', handleGlobalKeyDown);
  }, []);

  // Focus input when opened, restore focus when closed
  useEffect(() => {
    if (isOpen) {
      previousFocusRef.current =
        previousFocusRef.current || (document.activeElement as HTMLElement | null);
      if (initialQuery) {
        setQuery(initialQuery);
      }
      setRecentSearches(loadRecentSearches());
      setActiveIndex(0);
      setTimeout(() => {
        inputRef.current?.focus();
      }, 20);
    } else if (previousFocusRef.current) {
      previousFocusRef.current.focus();
      previousFocusRef.current = null;
    }
  }, [isOpen, initialQuery]);

  const groupedResults = useMemo(() => searchGlobalCatalog(query, 4), [query]);

  const flatResults: GlobalSearchResultItem[] = useMemo(
    () => [
      ...groupedResults.services,
      ...groupedResults.plans,
      ...groupedResults.caseStudies,
      ...groupedResults.articles,
    ],
    [groupedResults]
  );

  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  const handleSelectResult = (item: GlobalSearchResultItem) => {
    if (query.trim()) {
      setRecentSearches(saveRecentSearch(query));
    }
    closeGlobalSearch();
    navigate(item.href);
  };

  const handleClearRecent = () => {
    try {
      localStorage.removeItem(RECENT_STORAGE_KEY);
    } catch {
      // ignore
    }
    setRecentSearches([]);
  };

  const handleDialogKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      e.preventDefault();
      closeGlobalSearch();
      return;
    }

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (flatResults.length > 0) {
        setActiveIndex((prev) => (prev + 1) % flatResults.length);
      }
      return;
    }

    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (flatResults.length > 0) {
        setActiveIndex((prev) => (prev - 1 + flatResults.length) % flatResults.length);
      }
      return;
    }

    if (e.key === 'Enter' && flatResults.length > 0 && activeIndex >= 0) {
      const target = flatResults[activeIndex];
      if (target) {
        e.preventDefault();
        handleSelectResult(target);
      }
    }
  };

  if (!isOpen) return null;

  const suggestedQueries =
    lang === 'ar'
      ? ['سيرفر سحابي', 'كاميرات مراقبة', 'سنترال VoIP', 'جدار ناري Fortinet', 'نظام ERP']
      : ['Cloud VPS', 'CCTV Surveillance', 'VoIP PBX', 'Fortinet Firewall', 'ERP System'];

  const renderGroup = (
    groupKey: string,
    titleAr: string,
    titleEn: string,
    IconComponent: React.FC<{ className?: string }>,
    items: GlobalSearchResultItem[]
  ) => {
    if (items.length === 0) return null;
    return (
      <div
        key={groupKey}
        data-testid={`search-group-${groupKey}`}
        className="mb-4 last:mb-0"
      >
        <div className="px-3 py-1.5 text-xs font-bold text-accent flex items-center gap-2">
          <IconComponent className="w-3.5 h-3.5 shrink-0" />
          <span>{lang === 'ar' ? titleAr : titleEn}</span>
          <span className="text-muted ltr-num">({items.length})</span>
        </div>
        <ul role="listbox" aria-label={lang === 'ar' ? titleAr : titleEn} className="space-y-1">
          {items.map((item) => {
            const flatIdx = flatResults.findIndex((r) => r.id === item.id && r.type === item.type);
            const isSelected = flatIdx === activeIndex;
            return (
              <li
                key={`${item.type}-${item.id}`}
                role="option"
                aria-selected={isSelected}
                data-testid={`search-result-${item.type}-${item.id}`}
              >
                <button
                  type="button"
                  onClick={() => handleSelectResult(item)}
                  onMouseEnter={() => setActiveIndex(flatIdx)}
                  className={`w-full text-start px-3.5 py-2.5 rounded-xl flex items-center justify-between gap-3 transition-colors ${
                    isSelected
                      ? 'bg-accent text-accent-contrast'
                      : 'bg-surface hover-surface-2 text-main'
                  }`}
                >
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-sm font-bold truncate">
                        {lang === 'ar' ? item.titleAr : item.titleEn}
                      </span>
                      <span
                        className={`text-[11px] px-2 py-0.5 rounded font-semibold whitespace-nowrap ${
                          isSelected
                            ? 'bg-surface text-accent'
                            : 'bg-surface-2 text-muted border border-token'
                        }`}
                      >
                        {lang === 'ar' ? item.badgeAr : item.badgeEn}
                      </span>
                    </div>
                    <p
                      className={`text-xs truncate ${
                        isSelected ? 'text-accent-contrast opacity-90' : 'text-muted'
                      }`}
                    >
                      {lang === 'ar' ? item.subtitleAr : item.subtitleEn}
                    </p>
                  </div>
                  <CornerDownLeft
                    className={`w-4 h-4 shrink-0 ${
                      isSelected ? 'text-accent-contrast' : 'text-muted'
                    }`}
                  />
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  };

  return (
    <div
      className="fixed inset-0 z-[90] flex items-start justify-center pt-12 sm:pt-20 px-4"
      data-testid="global-search-modal-backdrop"
      onClick={(e) => {
        if (e.target === e.currentTarget) closeGlobalSearch();
      }}
    >
      {/* Dimmed Backdrop using token border/surface opacity */}
      <div
        className="fixed inset-0 bg-navy-band opacity-75 pointer-events-none"
        aria-hidden="true"
      />

      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label={
          lang === 'ar'
            ? 'البحث الشامل في خدمات وحلول نُزول تِك'
            : 'Global Search across Nuzul Tech'
        }
        data-testid="global-search-dialog"
        onKeyDown={handleDialogKeyDown}
        className="relative z-10 w-full max-w-2xl rounded-2xl bg-surface border-2 border-token shadow-2xl overflow-hidden"
      >
        {/* Top Search Input Bar */}
        <div className="p-4 border-b border-token flex items-center gap-3 bg-page">
          <Search className="w-5 h-5 text-accent shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            data-testid="global-search-input"
            placeholder={
              lang === 'ar'
                ? 'ابحث عن خدمة، خادم سحابي، دراسة حالة، أو مقال تقني (مثال: سيرفر، كاميرات، سنترال، ERP)...'
                : 'Search services, cloud plans, case studies, or articles (e.g., VPS, CCTV, VoIP, ERP)...'
            }
            aria-label={lang === 'ar' ? 'حقل البحث الشامل' : 'Global search input'}
            className="w-full min-h-[44px] bg-transparent text-sm sm:text-base text-main focus:outline-none"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              data-testid="global-search-clear-input"
              aria-label={lang === 'ar' ? 'مسح النص' : 'Clear query'}
              className="min-h-[44px] min-w-[44px] inline-flex items-center justify-center rounded-lg text-muted hover-text-main"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            type="button"
            onClick={closeGlobalSearch}
            data-testid="global-search-close-btn"
            className="min-h-[44px] px-3 py-1.5 rounded-lg bg-surface border border-token text-xs font-bold text-muted hover-text-main whitespace-nowrap"
          >
            Esc
          </button>
        </div>

        {/* Body: Recent Searches (when empty query) OR Grouped Results OR Empty State */}
        <div className="max-h-[65vh] overflow-y-auto p-4 space-y-4">
          {!query.trim() ? (
            <div className="space-y-5">
              {/* Recent Searches */}
              {recentSearches.length > 0 && (
                <div data-testid="global-search-recent-section">
                  <div className="flex items-center justify-between mb-2 px-1">
                    <span className="text-xs font-bold text-muted flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-accent" />
                      <span>
                        {lang === 'ar' ? 'عمليات البحث الأخيرة' : 'Recent Searches'}
                      </span>
                    </span>
                    <button
                      type="button"
                      onClick={handleClearRecent}
                      data-testid="clear-recent-searches-btn"
                      className="text-xs font-semibold text-accent hover:underline"
                    >
                      {lang === 'ar' ? 'مسح السجل' : 'Clear history'}
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {recentSearches.map((item, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setQuery(item)}
                        data-testid={`recent-search-item-${idx}`}
                        className="min-h-[40px] px-3 py-1.5 rounded-lg bg-page border border-token text-xs font-semibold text-main hover-surface-2 inline-flex items-center gap-1.5"
                      >
                        <Clock className="w-3 h-3 text-muted" />
                        <span>{item}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Suggested Queries */}
              <div>
                <div className="text-xs font-bold text-muted mb-2 px-1">
                  {lang === 'ar' ? 'اقتراحات بحث شائعة' : 'Suggested Searches'}
                </div>
                <div className="flex flex-wrap gap-2">
                  {suggestedQueries.map((sq, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setQuery(sq)}
                      data-testid={`suggested-search-${idx}`}
                      className="min-h-[40px] px-3 py-1.5 rounded-lg bg-surface-2 border border-token text-xs font-semibold text-main hover-text-accent"
                    >
                      {sq}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ) : flatResults.length === 0 ? (
            /* Empty State with Contact CTA */
            <div
              data-testid="global-search-empty-state"
              className="py-8 px-4 text-center space-y-4"
            >
              <p className="text-base font-bold text-main">
                {lang === 'ar'
                  ? `لا توجد نتائج مطابقة لـ "${query}"`
                  : `No matching results found for "${query}"`}
              </p>
              <p className="text-xs sm:text-sm text-muted max-w-md mx-auto leading-relaxed">
                {lang === 'ar'
                  ? 'جرب البحث بمصطلح تقني آخر (مثل: خادم، شبكة، كاميرات، VoIP، ERP) أو تواصل مباشرة مع مهندسينا لتفصيل الحل المناسب لشركتك.'
                  : 'Try another technical keyword (e.g., VPS, Network, CCTV, VoIP, ERP) or speak directly with our engineers for a custom requirement.'}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <Link
                  to="/contact"
                  onClick={() => closeGlobalSearch()}
                  data-testid="global-search-empty-contact-cta"
                  className="btn-primary min-h-[44px] px-5 py-2.5 text-xs font-bold whitespace-nowrap inline-flex items-center gap-2"
                >
                  <span>
                    {lang === 'ar'
                      ? 'احجز استشارة هندسية'
                      : 'Book an Engineering Consultation'}
                  </span>
                  <ArrowIcon className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ) : (
            /* Grouped Search Results */
            <div data-testid="global-search-results">
              {renderGroup(
                'services',
                'الخدمات الهندسية',
                'Engineering Services',
                Wrench,
                groupedResults.services
              )}
              {renderGroup(
                'plans',
                'خطط الاستضافة والباقات',
                'Plans & Packages',
                Server,
                groupedResults.plans
              )}
              {renderGroup(
                'caseStudies',
                'دراسات الحالة',
                'Case Studies',
                Briefcase,
                groupedResults.caseStudies
              )}
              {renderGroup(
                'articles',
                'المقالات والأدلة التقنية',
                'Technical Articles',
                FileText,
                groupedResults.articles
              )}

              {groupedResults.services.length > 0 && (
                <div className="pt-3 mt-2 border-t border-token flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => {
                      saveRecentSearch(query);
                      closeGlobalSearch();
                      navigate(`/services?q=${encodeURIComponent(query.trim())}`);
                    }}
                    data-testid="global-search-view-all-services"
                    className="text-xs font-bold text-accent hover:underline inline-flex items-center gap-1.5 min-h-[40px]"
                  >
                    <span>
                      {lang === 'ar'
                        ? `تصفية دليل الخدمات بالكامل حسب "${query.trim()}"`
                        : `Filter full services catalog by "${query.trim()}"`}
                    </span>
                    <ArrowIcon className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer Keyboard Hints */}
        <div className="px-4 py-2.5 bg-page border-t border-token flex flex-wrap items-center justify-between gap-2 text-[11px] text-muted">
          <div className="flex items-center gap-3">
            <span>
              <kbd className="px-1.5 py-0.5 rounded bg-surface border border-token font-semibold ltr-num">
                ↑↓
              </kbd>{' '}
              {lang === 'ar' ? 'للتنقل' : 'Navigate'}
            </span>
            <span>
              <kbd className="px-1.5 py-0.5 rounded bg-surface border border-token font-semibold ltr-num">
                Enter
              </kbd>{' '}
              {lang === 'ar' ? 'للاختيار' : 'Select'}
            </span>
            <span>
              <kbd className="px-1.5 py-0.5 rounded bg-surface border border-token font-semibold ltr-num">
                Esc
              </kbd>{' '}
              {lang === 'ar' ? 'للإغلاق' : 'Close'}
            </span>
          </div>
          <span className="ltr-num font-semibold">Ctrl / ⌘ + K</span>
        </div>
      </div>
    </div>
  );
};
