import React, { useState, useEffect, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { DOMAIN_TLDS } from '../../data/nuzulData';
import { useApp } from '../../context/AppContext';
import {
  Globe,
  Search,
  CheckCircle2,
  XCircle,
  AlertCircle,
  Plus,
  Check,
  Loader2,
  Clock,
  ShieldCheck,
} from 'lucide-react';

interface LiveDomainResult {
  domain: string;
  tld: string;
  status: 'available' | 'taken' | 'likely_available' | 'error';
  source: 'RDAP' | 'DNS';
  priceEGP: number;
  checkedInMs: number;
  registrar?: string;
  expiresAt?: string;
  nameservers?: string[];
  notesAr?: string;
  notesEn?: string;
}

interface DomainApiResponse {
  ok: boolean;
  label?: string;
  primaryTld?: string;
  checkedAt?: string;
  results?: LiveDomainResult[];
  error?: string;
  message?: string;
}

export const DomainSearchWidget: React.FC = () => {
  const { lang, formatPrice, addToCart, cart } = useApp();
  const [searchParams] = useSearchParams();
  const [domainInput, setDomainInput] = useState('');
  const [selectedTld, setSelectedTld] = useState('.com');
  const [results, setResults] = useState<LiveDomainResult[] | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [isSearching, setIsSearching] = useState(false);

  const runLiveDomainCheck = useCallback(
    async (rawQuery: string, preferredTld: string) => {
      const trimmed = rawQuery.trim();
      if (!trimmed) return;

      setIsSearching(true);
      setErrorMsg(null);

      try {
        const allTlds = [
          preferredTld,
          ...DOMAIN_TLDS.map((t) => t.tld).filter((t) => t !== preferredTld),
        ];
        const params = new URLSearchParams({
          name: trimmed,
          tlds: allTlds.join(','),
        });

        const res = await fetch(`/api/domains/check?${params.toString()}`);
        const data: DomainApiResponse = await res.json();

        if (!res.ok || !data.ok || !data.results) {
          setResults(null);
          if (data.error === 'INVALID_DOMAIN_LABEL') {
            setErrorMsg(
              lang === 'ar'
                ? 'يرجى كتابة اسم النطاق بحروف إنجليزية وأرقام أو شرطة (-) فقط، بين حرفين و63 حرفاً.'
                : 'Enter a valid domain label using English letters, digits, or hyphens (2–63 chars).'
            );
          } else if (data.error === 'RATE_LIMITED') {
            setErrorMsg(
              lang === 'ar'
                ? 'تم تنفيذ عدد كبير من عمليات الفحص، يرجى الانتظار دقيقة والمحاولة مرة أخرى.'
                : 'Too many lookups. Please wait a minute and try again.'
            );
          } else {
            setErrorMsg(
              lang === 'ar'
                ? 'تعذر الاتصال بخدمة الفحص المباشر حالياً، يرجى المحاولة مرة أخرى.'
                : 'Unable to reach live registry right now. Please try again.'
            );
          }
          return;
        }

        if (data.primaryTld && data.primaryTld !== selectedTld) {
          setSelectedTld(data.primaryTld);
        }
        setResults(data.results);
      } catch {
        setResults(null);
        setErrorMsg(
          lang === 'ar'
            ? 'حدث خطأ في الاتصال بالخادم أثناء فحص النطاق.'
            : 'Network error while verifying domain availability.'
        );
      } finally {
        setIsSearching(false);
      }
    },
    [lang, selectedTld]
  );

  // Auto-run check when navigated from Global Search (?domain=example.com)
  useEffect(() => {
    const queryDomain = searchParams.get('domain');
    if (queryDomain && queryDomain.trim()) {
      setDomainInput(queryDomain.trim());
      runLiveDomainCheck(queryDomain.trim(), selectedTld);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    runLiveDomainCheck(domainInput, selectedTld);
  };

  const isInCart = (domain: string) => cart.some((item) => item.id === `domain-${domain}`);

  const handleAddDomain = (item: LiveDomainResult) => {
    addToCart({
      id: `domain-${item.domain}`,
      name: `${lang === 'ar' ? 'تسجيل نطاق:' : 'Domain:'} ${item.domain}`,
      type: 'domain',
      price: item.priceEGP,
      quantity: 1,
      billingCycle: 'yearly',
      details:
        lang === 'ar'
          ? 'تسجيل لمدة سنة + إدارة سجلات DNS وتوجيه الخادم'
          : '1-Year Registration + Managed DNS & Server Pointing',
    });
  };

  const primaryResult = results && results.length > 0 ? results[0] : null;
  const secondaryResults = results && results.length > 1 ? results.slice(1) : [];

  return (
    <div
      id="domain-checker"
      data-testid="domain-search-widget"
      className="mb-16 glass-panel p-6 md:p-8 relative overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Header Column */}
        <div className="lg:col-span-5 space-y-2.5">
          <div className="inline-flex items-center gap-2 text-accent text-xs font-semibold">
            <Globe className="w-4 h-4 shrink-0" />
            <span>
              {lang === 'ar'
                ? 'فحص مباشر عبر سجلات RDAP وDNS العالمية'
                : 'Live RDAP Registry & DNS Domain Lookup'}
            </span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-main">
            {lang === 'ar'
              ? 'افحص توافر اسم النطاق الرسمي لشركتك'
              : 'Check Live Domain Availability'}
          </h3>
          <p className="text-xs sm:text-sm text-muted leading-relaxed">
            {lang === 'ar'
              ? 'فحص فوري وحقيقي مقابل سجلات Verisign وPIR وIdentity Digital وسجلات DNS الحية لنطاقات .eg و.com.eg.'
              : 'Real-time lookup against authoritative Verisign, PIR, Identity Digital RDAP registries and live DNS for .eg & .com.eg.'}
          </p>
        </div>

        {/* Right Interactive Search Column */}
        <div className="lg:col-span-7 space-y-3">
          <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-2.5">
            <div className="relative flex-1 flex items-center bg-surface rounded-xl border border-token focus-within:border-accent overflow-hidden">
              <Search className="w-4 h-4 text-muted ms-3.5 shrink-0" aria-hidden="true" />
              <input
                type="text"
                value={domainInput}
                onChange={(e) => setDomainInput(e.target.value)}
                data-testid="domain-search-input"
                placeholder={
                  lang === 'ar'
                    ? 'اكتب اسم النطاق (مثال: mycompany أو google.com)'
                    : 'Enter domain name (e.g. mycompany or google.com)'
                }
                dir="ltr"
                className="w-full min-h-[46px] px-3 py-2.5 bg-transparent text-sm text-main focus:outline-none ltr-num"
              />
              <select
                value={selectedTld}
                onChange={(e) => setSelectedTld(e.target.value)}
                dir="ltr"
                aria-label="Domain extension"
                className="min-h-[46px] bg-surface-2 text-accent font-bold text-sm px-3 py-2.5 border-s border-token focus:outline-none cursor-pointer ltr-num"
              >
                {DOMAIN_TLDS.map((item) => (
                  <option key={item.tld} value={item.tld}>
                    {item.tld}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              disabled={isSearching || !domainInput.trim()}
              data-testid="domain-search-submit"
              className="min-h-[46px] px-6 py-2.5 rounded-xl btn-primary font-bold text-sm whitespace-nowrap shrink-0 disabled:opacity-60 inline-flex items-center justify-center gap-2"
            >
              {isSearching && <Loader2 className="w-4 h-4 animate-spin shrink-0" />}
              <span>
                {isSearching
                  ? lang === 'ar'
                    ? 'جاري الفحص المباشر...'
                    : 'Checking Registry...'
                  : lang === 'ar'
                  ? 'فحص التوافر'
                  : 'Check Availability'}
              </span>
            </button>
          </form>

          {/* TLD Quick Pricing Strip */}
          <div className="flex flex-wrap items-center gap-2">
            {DOMAIN_TLDS.map((item) => (
              <button
                type="button"
                key={item.tld}
                onClick={() => setSelectedTld(item.tld)}
                className={`min-h-[38px] px-3 py-1.5 rounded-lg text-xs border transition-colors flex items-center gap-1.5 ltr-num whitespace-nowrap ${
                  selectedTld === item.tld
                    ? 'bg-accent-soft border-accent text-accent font-bold'
                    : 'bg-surface border-token text-muted hover-text-main'
                }`}
              >
                <span>{item.tld}</span>
                <span className="text-[11px] opacity-85">
                  {formatPrice(item.priceEGP)}/{lang === 'ar' ? 'سنة' : 'yr'}
                </span>
              </button>
            ))}
          </div>

          {errorMsg && (
            <div
              role="alert"
              data-testid="domain-search-error"
              className="p-3.5 rounded-xl bg-danger-soft border border-danger text-danger text-xs font-medium flex items-center gap-2"
            >
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}
        </div>
      </div>

      {/* Live Multi-TLD Results Panel */}
      {primaryResult && (
        <div className="mt-6 pt-6 border-t border-token space-y-4" data-testid="domain-results-panel">
          {/* Primary Result Hero Row */}
          <div
            data-testid="domain-primary-result"
            data-status={primaryResult.status}
            className={`p-4 sm:p-5 rounded-xl border flex flex-col md:flex-row md:items-center justify-between gap-4 ${
              primaryResult.status === 'available'
                ? 'bg-success-soft border-success'
                : primaryResult.status === 'taken'
                ? 'bg-surface border-token'
                : 'bg-accent-soft border-accent-soft'
            }`}
          >
            <div className="flex items-start gap-3.5 min-w-0">
              {primaryResult.status === 'available' ? (
                <CheckCircle2 className="w-6 h-6 text-success shrink-0 mt-0.5" />
              ) : primaryResult.status === 'taken' ? (
                <XCircle className="w-6 h-6 text-danger shrink-0 mt-0.5" />
              ) : (
                <ShieldCheck className="w-6 h-6 text-accent shrink-0 mt-0.5" />
              )}

              <div className="min-w-0 space-y-1">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="text-base sm:text-lg font-bold text-main ltr-num">
                    {primaryResult.domain}
                  </span>
                  <span className="text-[11px] font-semibold text-muted inline-flex items-center gap-1 ltr-num">
                    <Clock className="w-3 h-3" />
                    {primaryResult.checkedInMs}ms · {primaryResult.source}
                  </span>
                </div>

                {primaryResult.status === 'available' && (
                  <p className="text-xs font-semibold text-success">
                    {lang === 'ar'
                      ? 'متاح للتسجيل الفوري — تم التحقق من السجل الرسمي (RDAP)'
                      : 'Available to register — Verified against authoritative RDAP registry'}
                  </p>
                )}

                {primaryResult.status === 'likely_available' && (
                  <p className="text-xs font-medium text-accent">
                    {lang === 'ar'
                      ? 'لم تُرصد سجلات DNS نشطة — متاح لطلب التسجيل الرسمي عبر فريقنا'
                      : 'No active DNS records detected — Open for official registration request'}
                  </p>
                )}

                {primaryResult.status === 'taken' && (
                  <div className="space-y-1">
                    <p className="text-xs font-semibold text-danger">
                      {lang === 'ar'
                        ? 'هذا النطاق مسجّل بالفعل وغير متاح للتسجيل الجديد'
                        : 'This domain is already registered'}
                    </p>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] text-muted ltr-num">
                      {primaryResult.registrar && (
                        <span>Registrar: {primaryResult.registrar}</span>
                      )}
                      {primaryResult.expiresAt && (
                        <span>Expires: {primaryResult.expiresAt}</span>
                      )}
                      {primaryResult.nameservers && primaryResult.nameservers.length > 0 && (
                        <span>NS: {primaryResult.nameservers.slice(0, 2).join(', ')}</span>
                      )}
                    </div>
                  </div>
                )}

                {(primaryResult.notesAr || primaryResult.notesEn) &&
                  primaryResult.status !== 'taken' && (
                    <p className="text-[11px] text-muted">
                      {lang === 'ar' ? primaryResult.notesAr : primaryResult.notesEn}
                    </p>
                  )}
              </div>
            </div>

            {primaryResult.status !== 'taken' && primaryResult.status !== 'error' && (
              <div className="flex items-center justify-between md:justify-end gap-4 shrink-0 pt-3 md:pt-0 border-t md:border-t-0 border-token">
                <div className="text-start md:text-end">
                  <div className="text-base font-bold text-main ltr-num">
                    {formatPrice(primaryResult.priceEGP)}
                  </div>
                  <div className="text-[11px] text-muted">
                    {lang === 'ar' ? 'سنوياً · تجديد شفاف' : 'per year'}
                  </div>
                </div>

                {isInCart(primaryResult.domain) ? (
                  <span className="min-h-[42px] px-4 py-2 rounded-lg bg-surface border border-accent text-accent text-xs font-bold inline-flex items-center gap-1.5 whitespace-nowrap">
                    <Check className="w-3.5 h-3.5" />
                    <span>{lang === 'ar' ? 'في السلة' : 'In Cart'}</span>
                  </span>
                ) : (
                  <button
                    type="button"
                    onClick={() => handleAddDomain(primaryResult)}
                    className="min-h-[42px] px-4 py-2 rounded-lg btn-primary text-xs font-bold whitespace-nowrap inline-flex items-center gap-1.5"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>{lang === 'ar' ? 'أضف للطلب' : 'Add to Cart'}</span>
                  </button>
                )}
              </div>
            )}
          </div>

          {/* Alternative Extensions Grid */}
          {secondaryResults.length > 0 && (
            <div>
              <div className="text-xs font-bold text-muted mb-2.5">
                {lang === 'ar'
                  ? 'نتائج الامتدادات الأخرى (فحص متوازٍ مباشر):'
                  : 'Other Extensions (Live Parallel Lookup):'}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                {secondaryResults.map((item) => {
                  const added = isInCart(item.domain);
                  const canAdd = item.status === 'available' || item.status === 'likely_available';
                  return (
                    <div
                      key={item.domain}
                      data-testid={`domain-alt-${item.tld}`}
                      className="p-3 rounded-xl bg-surface border border-token flex items-center justify-between gap-2.5"
                    >
                      <div className="min-w-0">
                        <div className="text-xs font-bold text-main truncate ltr-num">
                          {item.domain}
                        </div>
                        <div className="flex items-center gap-1.5 mt-0.5 text-[11px]">
                          {item.status === 'available' ? (
                            <span className="text-success font-semibold">
                              {lang === 'ar' ? 'متاح (RDAP)' : 'Available (RDAP)'}
                            </span>
                          ) : item.status === 'likely_available' ? (
                            <span className="text-accent font-semibold">
                              {lang === 'ar' ? 'متاح مبدئياً (DNS)' : 'Open (Live DNS)'}
                            </span>
                          ) : item.status === 'taken' ? (
                            <span className="text-danger font-medium">
                              {lang === 'ar' ? 'مسجّل' : 'Taken'}
                            </span>
                          ) : (
                            <span className="text-muted">
                              {lang === 'ar' ? 'تعذر الفحص' : 'Unavailable'}
                            </span>
                          )}
                          <span className="text-muted ltr-num">· {item.checkedInMs}ms</span>
                        </div>
                      </div>

                      {canAdd ? (
                        <button
                          type="button"
                          onClick={() => handleAddDomain(item)}
                          disabled={added}
                          className={`min-h-[36px] px-2.5 py-1.5 rounded-lg text-[11px] font-bold whitespace-nowrap transition-colors shrink-0 ${
                            added
                              ? 'bg-accent-soft text-accent border border-accent'
                              : 'btn-secondary'
                          }`}
                        >
                          {added ? (
                            <span className="inline-flex items-center gap-1">
                              <Check className="w-3 h-3" />
                              {lang === 'ar' ? 'أُضيف' : 'Added'}
                            </span>
                          ) : (
                            <span className="ltr-num">{formatPrice(item.priceEGP)}</span>
                          )}
                        </button>
                      ) : (
                        <span className="text-[11px] text-muted px-2">
                          {lang === 'ar' ? 'محجوز' : 'Registered'}
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
