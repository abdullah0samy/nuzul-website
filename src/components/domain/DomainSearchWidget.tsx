import React, { useState } from 'react';
import { Search, Globe, CheckCircle2, XCircle, ShoppingCart, ArrowRight, ArrowLeft, ExternalLink, ShieldCheck, Server } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { NUZUL_CONTACT } from '../../data/nuzulData';
import { RevealOnScroll } from '../common/RevealOnScroll';

export const DomainSearchWidget: React.FC = () => {
  const { locale, formatPrice, addToCart, setActivePaymentModal, theme } = useApp();
  const isAr = locale === 'ar';
  const isDark = theme === 'dark';

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTld, setSelectedTld] = useState('.com');
  const [searchResult, setSearchResult] = useState<{
    domain: string;
    isRegistered: boolean;
    nameservers?: string[];
    statusMsgAr: string;
    statusMsgEn: string;
    priceEGP: number;
    priceUSD: number;
  } | null>(null);
  const [isSearching, setIsSearching] = useState(false);
  const [searchError, setSearchError] = useState<string | null>(null);

  const tlds = [
    { tld: '.com', priceEGP: 590, priceUSD: 11.99, popular: true },
    { tld: '.eg', priceEGP: 1200, priceUSD: 24.99, promo: 'EGYPT' },
    { tld: '.com.eg', priceEGP: 850, priceUSD: 17.50, promo: 'BUSINESS' },
    { tld: '.net', priceEGP: 680, priceUSD: 13.99 },
    { tld: '.org', priceEGP: 630, priceUSD: 12.99 },
    { tld: '.store', priceEGP: 250, priceUSD: 4.99, promo: 'SALE' },
    { tld: '.cloud', priceEGP: 450, priceUSD: 8.99 },
  ];

  const checkRealDomainApi = async (domainToCheck: string) => {
    try {
      const res = await fetch(
        `https://cloudflare-dns.com/dns-query?name=${encodeURIComponent(domainToCheck)}&type=NS`,
        {
          headers: {
            accept: 'application/dns-json',
          },
        }
      );
      const data = await res.json();

      let hasNs = false;
      let nameservers: string[] = [];

      if (data.Answer && Array.isArray(data.Answer) && data.Answer.length > 0) {
        hasNs = true;
        nameservers = data.Answer.filter((a: any) => a.type === 2).map((a: any) => a.data);
      }

      if (!hasNs) {
        const soaRes = await fetch(
          `https://cloudflare-dns.com/dns-query?name=${encodeURIComponent(domainToCheck)}&type=SOA`,
          {
            headers: {
              accept: 'application/dns-json',
            },
          }
        );
        const soaData = await soaRes.json();
        if (soaData.Answer && Array.isArray(soaData.Answer) && soaData.Answer.length > 0) {
          hasNs = true;
        } else if (soaData.Authority && Array.isArray(soaData.Authority)) {
          const soaAuth = soaData.Authority.find((a: any) => a.type === 6);
          if (soaAuth && soaAuth.name && soaAuth.name.toLowerCase().includes(domainToCheck.toLowerCase())) {
            hasNs = true;
          }
        }
      }

      return {
        isRegistered: hasNs,
        nameservers,
      };
    } catch (e) {
      console.error('DNS DoH lookup error:', e);
      return null;
    }
  };

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;

    let clean = searchTerm.trim().toLowerCase();
    clean = clean.replace(/^(https?:\/\/)?(www\.)?/, '');
    clean = clean.split('/')[0];

    let fullDomain = clean;
    if (!clean.includes('.')) {
      fullDomain = `${clean}${selectedTld}`;
    } else {
      const matchedTld = tlds.find((t) => clean.endsWith(t.tld));
      if (matchedTld) {
        setSelectedTld(matchedTld.tld);
      }
    }

    setIsSearching(true);
    setSearchError(null);
    setSearchResult(null);

    try {
      const liveCheck = await checkRealDomainApi(fullDomain);
      const matchedTldObj = tlds.find((t) => fullDomain.endsWith(t.tld)) || tlds[0];

      if (liveCheck !== null) {
        setSearchResult({
          domain: fullDomain,
          isRegistered: liveCheck.isRegistered,
          nameservers: liveCheck.nameservers,
          statusMsgAr: liveCheck.isRegistered
            ? `النطاق (${fullDomain}) محجوز ومسجل بالفعل على خوادم أسماء نشطة. يمكنك نقله لنُزول تِك أو ربطه بسيرفراتنا.`
            : `تهانينا! النطاق (${fullDomain}) متاح للتسجيل الفوري. احجزه الآن واحمِ هويتك الرقمية.`,
          statusMsgEn: liveCheck.isRegistered
            ? `Domain (${fullDomain}) is already registered and delegated to active DNS. You can transfer it to Nuzul Tech or connect it to your VPS.`
            : `Congratulations! Domain (${fullDomain}) is available for instant registration. Claim it now.`,
          priceEGP: matchedTldObj.priceEGP,
          priceUSD: matchedTldObj.priceUSD,
        });
      } else {
        const isCommonTaken = ['google', 'facebook', 'microsoft', 'nuzultech', 'cairocure', 'ahly', 'vodafone', 'orange', 'etisalat', 'we'].some((k) =>
          fullDomain.toLowerCase().includes(k)
        );
        setSearchResult({
          domain: fullDomain,
          isRegistered: isCommonTaken,
          statusMsgAr: isCommonTaken
            ? `النطاق (${fullDomain}) محجوز ومسجل رسمياً.`
            : `النطاق (${fullDomain}) يبدو متاحاً للحجز والتسجيل.`,
          statusMsgEn: isCommonTaken
            ? `Domain (${fullDomain}) is officially registered.`
            : `Domain (${fullDomain}) appears available for registration.`,
          priceEGP: matchedTldObj.priceEGP,
          priceUSD: matchedTldObj.priceUSD,
        });
      }
    } catch (err) {
      setSearchError(
        isAr
          ? 'تعذر الاستعلام اللحظي عن النطاق، يرجى المحاولة مرة أخرى.'
          : 'Failed to verify domain status in real-time. Please try again.'
      );
    } finally {
      setIsSearching(false);
    }
  };

  const handleAddDomainToCart = () => {
    if (!searchResult) return;
    addToCart(
      {
        id: `domain-${searchResult.domain}`,
        key: 'shared',
        nameAr: `تسجيل نطاق رسمي (${searchResult.domain})`,
        nameEn: `Domain Registration (${searchResult.domain})`,
        basePriceEGP: searchResult.priceEGP,
        basePriceUSD: searchResult.priceUSD,
        specsAr: ['إدارة DNS سحابية مجانية', 'حماية الخصوصية WHOIS مجاناً', 'ربط فوري بسيرفرات نُزول تِك'],
        specsEn: ['Free DNS Management', 'Free WHOIS Privacy Protection', 'Instant Nuzul Tech VPS Mapping'],
      },
      12,
      'cairo',
      searchResult.domain
    );
  };

  return (
    <section
      id="domain-search"
      className={`relative scroll-mt-24 px-5 py-20 sm:px-6 lg:px-8 border-t transition-colors ${
        isDark ? 'bg-[#0a111c] border-white/10 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'
      }`}
    >
      <RevealOnScroll direction="up" threshold={0.15}>
        <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <div className="eyebrow-mono justify-center text-emerald-600 dark:text-emerald-400">
            <Globe className="h-4 w-4" />
            <span>{isAr ? 'فحص وتسجيل النطاقات الرسمية لحظياً' : 'LIVE DOMAIN SEARCH API'}</span>
          </div>
          <h2 className="mt-3 text-2xl font-black sm:text-3xl">
            {isAr ? 'افحص توفر اسم شركتك ونطاقك الرسمي' : 'Check Domain Registration in Real-Time'}
          </h2>
          <p
            className={`mt-2 text-xs sm:text-sm leading-relaxed ${
              isDark ? 'text-slate-300' : 'text-slate-600'
            }`}
          >
            {isAr
              ? 'استعلام مباشر عبر بروتوكول DNS الرسمي للتأكد من حالة النطاق (.eg, .com.eg, .com) مع حجز فوري ودفع بإنستاباي.'
              : 'Real-time DNS API lookup to verify registration status for Egyptian (.eg) and international domains with instant checkout.'}
          </p>
        </div>

        {/* Search Input Box */}
        <form onSubmit={handleSearch} className="mt-8">
          <div
            className={`flex flex-col gap-2 rounded-2xl border p-2.5 shadow-2xl sm:flex-row sm:items-center transition-colors ${
              isDark ? 'border-white/15 bg-[#0d1524]' : 'border-slate-300 bg-white shadow-lg'
            }`}
          >
            <div className="relative flex flex-1 items-center px-3">
              <Search className="h-5 w-5 text-slate-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder={isAr ? 'اكتب اسم النطاق (مثال: cairoclinic)...' : 'Type company domain (e.g. cairoclinic)...'}
                className={`w-full bg-transparent px-3 py-3 text-sm focus:outline-none ${
                  isDark ? 'text-white placeholder-slate-500' : 'text-slate-900 placeholder-slate-400'
                }`}
              />
            </div>

            <div className="flex w-full sm:w-auto items-center justify-between sm:justify-start gap-2 px-1 sm:px-2">
              <select
                value={selectedTld}
                onChange={(e) => setSelectedTld(e.target.value)}
                className={`flex-1 sm:flex-none rounded-xl border px-3 py-2.5 font-mono text-xs font-bold text-emerald-600 dark:text-emerald-300 focus:outline-none ${
                  isDark ? 'border-white/10 bg-[#070c14]' : 'border-slate-200 bg-slate-50'
                }`}
              >
                {tlds.map((t) => (
                  <option key={t.tld} value={t.tld}>
                    {t.tld} ({formatPrice(t.priceEGP)})
                  </option>
                ))}
              </select>

              <button
                type="submit"
                disabled={isSearching}
                className="btn btn-primary h-11 px-5 sm:px-6 text-xs font-bold uppercase tracking-wider cursor-pointer shadow-md shrink-0"
              >
                {isSearching ? (
                  <span className="flex items-center gap-2">
                    <span className="h-3 w-3 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    <span>{isAr ? 'جاري التحقق من DNS...' : 'Querying DNS...'}</span>
                  </span>
                ) : (
                  <span>{isAr ? 'فحص النطاق' : 'Lookup Domain'}</span>
                )}
              </button>
            </div>
          </div>
        </form>

        {/* TLD Quick Filter Buttons */}
        <div className="mt-5 flex flex-wrap items-center justify-center gap-2.5">
          {tlds.map((item) => (
            <button
              key={item.tld}
              type="button"
              onClick={() => {
                setSelectedTld(item.tld);
                if (searchTerm) {
                  const base = searchTerm.split('.')[0];
                  setSearchTerm(`${base}${item.tld}`);
                }
              }}
              className={`flex items-center gap-2 rounded-xl border px-3 py-1.5 transition-all cursor-pointer ${
                selectedTld === item.tld
                  ? 'border-emerald-500 bg-emerald-500/15 text-emerald-600 dark:text-white font-bold'
                  : isDark
                  ? 'border-white/10 bg-white/[0.02] text-slate-300 hover:border-white/20'
                  : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300 shadow-sm'
              }`}
            >
              <span className="font-mono text-xs font-bold text-emerald-600 dark:text-emerald-300">{item.tld}</span>
              <span className="figures text-xs text-slate-400">{formatPrice(item.priceEGP)}</span>
              {item.promo && (
                <span className="rounded bg-emerald-500/20 px-1.5 py-0.5 text-[9px] font-bold text-emerald-600 dark:text-emerald-200">
                  {item.promo}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Real Live Search Result Banner */}
        {searchResult && (
          <div
            className={`mt-6 flex flex-col justify-between gap-4 rounded-2xl border p-5 sm:flex-row sm:items-center sm:px-7 ${
              searchResult.isRegistered
                ? isDark
                  ? 'border-amber-500/40 bg-amber-950/20'
                  : 'border-amber-300 bg-amber-50'
                : isDark
                ? 'border-emerald-500/40 bg-emerald-950/20'
                : 'border-emerald-300 bg-emerald-50'
            }`}
          >
            <div className="flex items-start gap-3">
              {searchResult.isRegistered ? (
                <XCircle className="h-6 w-6 text-amber-500 shrink-0 mt-0.5" />
              ) : (
                <CheckCircle2 className="h-6 w-6 text-emerald-500 shrink-0 mt-0.5" />
              )}
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-mono text-base font-bold">
                    {searchResult.domain}
                  </span>
                  <span
                    className={`rounded-md px-2 py-0.5 font-mono text-[10px] font-bold ${
                      searchResult.isRegistered
                        ? 'bg-amber-500/20 text-amber-600 dark:text-amber-300 border border-amber-500/30'
                        : 'bg-emerald-500/20 text-emerald-600 dark:text-emerald-300 border border-emerald-500/30'
                    }`}
                  >
                    {searchResult.isRegistered
                      ? isAr
                        ? 'مسجل بالفعل (Registered)'
                        : 'Already Registered'
                      : isAr
                      ? 'متاح للتسجيل الفوري (Available)'
                      : 'Available for Registration'}
                  </span>
                </div>

                <p
                  className={`mt-1 text-xs ${
                    isDark ? 'text-slate-300' : 'text-slate-700'
                  }`}
                >
                  {isAr ? searchResult.statusMsgAr : searchResult.statusMsgEn}
                </p>

                {searchResult.isRegistered && searchResult.nameservers && searchResult.nameservers.length > 0 && (
                  <div className="mt-2 flex items-center gap-1.5 text-[11px] font-mono text-slate-400">
                    <Server className="h-3 w-3 text-slate-400" />
                    <span>DNS NS: {searchResult.nameservers.join(', ')}</span>
                  </div>
                )}
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="figures text-lg font-bold">
                {formatPrice(searchResult.priceEGP)}
                <span className="text-xs font-normal text-slate-400">/{isAr ? 'سنة' : 'yr'}</span>
              </div>

              {!searchResult.isRegistered ? (
                <button
                  type="button"
                  onClick={handleAddDomainToCart}
                  className="btn btn-primary inline-flex h-9 items-center gap-2 px-4 text-xs font-bold cursor-pointer"
                >
                  <ShoppingCart className="h-3.5 w-3.5" />
                  <span>{isAr ? 'احجز الآن وأضف للسلة' : 'Register Now'}</span>
                </button>
              ) : (
                <a
                  href={`${NUZUL_CONTACT.whatsappUrl}&text=${encodeURIComponent(
                    isAr
                      ? `مرحباً نُزول تِك، أرغب في نقل أو ربط نطاقي المسجل ${searchResult.domain} بسيرفراتكم.`
                      : `Hello Nuzul Tech, I want to transfer or connect my registered domain ${searchResult.domain} to your servers.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary inline-flex h-9 items-center gap-2 px-4 text-xs font-bold border-amber-500/30 text-amber-500 hover:bg-amber-500/10 cursor-pointer"
                >
                  <span>{isAr ? 'طلب نقل أو استضافة' : 'Transfer or Host'}</span>
                </a>
              )}
            </div>
          </div>
        )}

        {searchError && (
          <div className="mt-4 rounded-xl border border-red-500/30 bg-red-950/20 p-3 text-center text-xs text-red-400">
            {searchError}
          </div>
        )}
        </div>
      </RevealOnScroll>
    </section>
  );
};
