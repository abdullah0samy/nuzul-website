import React, { useState } from 'react';
import { DOMAIN_TLDS } from '../../data/nuzulData';
import { useApp } from '../../context/AppContext';
import { Globe, Search, CheckCircle2, Plus } from 'lucide-react';

export const DomainSearchWidget: React.FC = () => {
  const { lang, formatPrice, addToCart } = useApp();
  const [domainInput, setDomainInput] = useState('');
  const [selectedTld, setSelectedTld] = useState('.com');
  const [searchResult, setSearchResult] = useState<{
    domain: string;
    available: boolean;
    priceEGP: number;
  } | null>(null);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!domainInput.trim()) return;
    setIsSearching(true);

    const cleanName = domainInput
      .trim()
      .toLowerCase()
      .replace(/^(https?:\/\/)?(www\.)?/, '')
      .split('.')[0];

    const tldObj = DOMAIN_TLDS.find((t) => t.tld === selectedTld) || DOMAIN_TLDS[0];

    setTimeout(() => {
      setIsSearching(false);
      setSearchResult({
        domain: `${cleanName}${selectedTld}`,
        available: cleanName.length > 2,
        priceEGP: tldObj.priceEGP,
      });
    }, 350);
  };

  return (
    <div className="mb-16 clean-card p-6 md:p-8 bg-surface relative overflow-hidden">
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        <div className="lg:col-span-5">
          <div className="inline-flex items-center gap-2 text-accent text-xs font-semibold mb-2">
            <Globe className="w-4 h-4" />
            <span>
              {lang === 'ar'
                ? 'حجز النطاقات الرسمية وإدارة DNS'
                : 'Official Domain Registration & DNS'}
            </span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-main mb-2">
            {lang === 'ar'
              ? 'ابحث عن اسم النطاق الرسمي لشركتك'
              : 'Search Your Corporate Domain Name'}
          </h3>
          <p className="text-xs sm:text-sm text-muted leading-relaxed">
            {lang === 'ar'
              ? 'تحقق من الصيغة المبدئية للنطاقات التجارية (.com، .net، .org، .com.eg، .eg) واطلب تسجيلها الرسمي وربطها بخادمك.'
              : 'Check preliminary naming for commercial extensions (.com, .net, .org, .com.eg, .eg) and request official registration linked to your server.'}
          </p>
        </div>

        <div className="lg:col-span-7">
          <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1 flex items-center bg-surface rounded-xl border border-token focus-within:border-accent overflow-hidden">
              <Search className="w-4 h-4 text-muted ms-4 shrink-0" />
              <input
                type="text"
                value={domainInput}
                onChange={(e) => setDomainInput(e.target.value)}
                placeholder={
                  lang === 'ar'
                    ? 'اكتب اسم شركتك بالإنجليزية (مثال: nuzultech)'
                    : 'Enter company name (e.g. nuzultech)'
                }
                dir="ltr"
                className="w-full min-h-[44px] px-3 py-3 bg-transparent text-sm text-main focus:outline-none ltr-num"
              />
              <select
                value={selectedTld}
                onChange={(e) => setSelectedTld(e.target.value)}
                dir="ltr"
                aria-label="Domain extension"
                className="min-h-[44px] bg-surface-2 text-accent font-bold text-sm px-3 py-3 border-s border-token focus:outline-none cursor-pointer ltr-num"
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
              disabled={isSearching}
              className="min-h-[44px] px-6 py-3 rounded-xl btn-primary font-bold text-sm whitespace-nowrap shrink-0"
            >
              {isSearching
                ? lang === 'ar'
                  ? 'جاري الفحص...'
                  : 'Checking...'
                : lang === 'ar'
                ? 'فحص النطاق'
                : 'Check Domain'}
            </button>
          </form>

          <div className="flex flex-wrap items-center gap-2 mt-3">
            {DOMAIN_TLDS.map((item) => (
              <button
                type="button"
                key={item.tld}
                onClick={() => setSelectedTld(item.tld)}
                className={`min-h-[44px] px-3 py-1.5 rounded-lg text-xs border transition-all flex items-center gap-1.5 ltr-num whitespace-nowrap ${
                  selectedTld === item.tld
                    ? 'bg-accent-soft border-accent text-accent font-bold'
                    : 'bg-surface border-token text-muted hover-text-main'
                }`}
              >
                <span>{item.tld}</span>
                <span className="text-[11px]">
                  {formatPrice(item.priceEGP)}/{lang === 'ar' ? 'سنة' : 'yr'}
                </span>
              </button>
            ))}
          </div>

          <p className="text-[11px] text-muted mt-2.5 leading-relaxed">
            {lang === 'ar'
              ? 'ملاحظة: نتائج الفحص السريع استرشادية؛ يتم تأكيد التوافر النهائي وإجراءات التسجيل الرسمي (خاصة لنطاقات .eg التي تتطلب سجلاً تجارياً وبطاقة ضريبية) عبر فريق المبيعات.'
              : 'Note: Quick-search results are indicative; final registry availability and official .eg documentation requirements (Commercial Register & Tax Card) are confirmed by our provisioning team.'}
          </p>

          {searchResult && (
            <div className="mt-4 p-4 rounded-xl bg-accent-soft border border-accent-soft flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-success shrink-0" />
                <div>
                  <div className="text-sm font-bold text-main ltr-num">
                    {searchResult.domain}
                  </div>
                  <div className="text-xs text-accent">
                    {lang === 'ar'
                      ? 'متاح لطلب التسجيل الرسمي وربط سجلات DNS'
                      : 'Available for official registration & DNS provisioning'}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-end">
                  <div className="text-sm font-bold text-main ltr-num">
                    {formatPrice(searchResult.priceEGP)}
                  </div>
                  <div className="text-[10px] text-muted">
                    {lang === 'ar' ? 'سنوياً' : 'per year'}
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() =>
                    addToCart({
                      id: `domain-${searchResult.domain}`,
                      name: `${lang === 'ar' ? 'حجز نطاق:' : 'Domain:'} ${searchResult.domain}`,
                      type: 'domain',
                      price: searchResult.priceEGP,
                      billingCycle: 'yearly',
                      details:
                        lang === 'ar'
                          ? 'تسجيل لمدة سنة + إدارة سجلات DNS'
                          : '1 Year Registration + Managed DNS',
                    })
                  }
                  className="min-h-[44px] px-4 py-2 rounded-lg btn-primary text-xs font-bold whitespace-nowrap"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>{lang === 'ar' ? 'أضف للطلب' : 'Add to Request'}</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
