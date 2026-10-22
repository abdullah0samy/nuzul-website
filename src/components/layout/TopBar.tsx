import React, { useState, useRef, useEffect } from 'react';
import { Globe, Banknote, Phone, ChevronDown, Check, Sun, Moon } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { Currency, Locale } from '../../types';
import { NUZUL_CONTACT } from '../../data/nuzulData';
import { InstaPayLogo } from '../common/InstaPayLogo';
import { RegionalStatusBar } from '../common/RegionalStatusBar';

export const TopBar: React.FC = () => {
  const {
    locale,
    setLocale,
    theme,
    toggleTheme,
    currency,
    setCurrency,
    setActivePaymentModal,
  } = useApp();

  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isCurrOpen, setIsCurrOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);
  const currRef = useRef<HTMLDivElement>(null);

  const isAr = locale === 'ar';
  const isDark = theme === 'dark';

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setIsLangOpen(false);
      }
      if (currRef.current && !currRef.current.contains(e.target as Node)) {
        setIsCurrOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const languages: { code: Locale; label: string; sub: string }[] = [
    { code: 'ar', label: 'العربية (مصر)', sub: 'AR' },
    { code: 'en', label: 'English (US)', sub: 'EN' },
  ];

  const currencies: { code: Currency; symbol: string }[] = [
    { code: 'EGP', symbol: 'ج.م' },
    { code: 'USD', symbol: '$' },
    { code: 'SAR', symbol: 'ر.س' },
    { code: 'AED', symbol: 'د.إ' },
    { code: 'EUR', symbol: '€' },
  ];

  return (
    <div
      className={`relative z-[70] flex min-h-10 w-full items-center border-b px-3 sm:px-6 lg:px-8 text-xs transition-colors py-1 lg:py-0 ${
        isDark
          ? 'bg-[#060a12] border-white/10 text-slate-300'
          : 'bg-slate-100/90 border-slate-200 text-slate-700'
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl justify-between items-center gap-2">
        {/* Left: Operational Status & Direct Hotline */}
        <div className="flex items-center gap-2.5 sm:gap-4 text-xs shrink-0">
          <span className="flex items-center gap-2 text-slate-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="font-medium text-current text-[11px] truncate max-w-[110px] sm:max-w-none">
              {isAr ? NUZUL_CONTACT.locationAr : NUZUL_CONTACT.locationEn}
            </span>
          </span>

          <span className="hidden sm:inline-block h-3 w-px bg-slate-500/20" />

          <a
            href={`tel:${NUZUL_CONTACT.rawPhone}`}
            className="hidden sm:flex items-center gap-1.5 hover:text-emerald-500 transition-colors font-mono font-medium text-[11px]"
            dir="ltr"
          >
            <Phone className="h-3 w-3 text-emerald-500 shrink-0" />
            <span>{NUZUL_CONTACT.phone}</span>
          </a>
        </div>

        {/* Center: Regional Edge Status Bar (Cairo, Frankfurt, Riyadh) */}
        <div className="flex items-center justify-center shrink-0">
          <RegionalStatusBar />
        </div>

        {/* Right: Currency, Language, Theme Switcher, Quick Payment */}
        <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
          {/* Quick InstaPay Trigger (Desktop) */}
          <button
            type="button"
            onClick={() => setActivePaymentModal('instapay')}
            className="hidden md:inline-flex items-center gap-1.5 rounded-md bg-gradient-to-r from-[#380e3e] to-[#200524] border border-purple-500/40 px-2.5 py-0.5 text-[11px] font-bold text-white hover:border-purple-400 transition-all cursor-pointer shadow-sm"
            title="InstaPay Direct Egyptian Clearing"
          >
            <InstaPayLogo size="sm" variant="wordmark" />
            <span className="text-[10px] text-emerald-400 font-mono font-bold">● {isAr ? 'لحظي' : 'Instant'}</span>
          </button>

          <div className="hidden md:block h-3.5 w-px bg-slate-500/20" />

          {/* Currency Dropdown */}
          <div className="relative" ref={currRef}>
            <button
              type="button"
              onClick={() => setIsCurrOpen(!isCurrOpen)}
              className="inline-flex min-h-[26px] items-center gap-1 sm:gap-1.5 rounded-md px-1.5 sm:px-2 transition-colors hover:bg-slate-500/10 font-mono text-[11px] cursor-pointer"
              aria-label="Select currency"
            >
              <Banknote className="h-3 w-3 text-emerald-500" />
              <span>{currency}</span>
              <ChevronDown className={`h-3 w-3 transition-transform ${isCurrOpen ? 'rotate-180' : ''}`} />
            </button>

            {isCurrOpen && (
              <div
                className={`absolute top-full mt-1.5 w-32 overflow-hidden rounded-xl border p-1 shadow-2xl backdrop-blur-xl z-50 ${
                  isDark ? 'border-white/10 bg-[#0d1524]' : 'border-slate-200 bg-white'
                } ${isAr ? 'left-0' : 'right-0'}`}
              >
                {currencies.map((curr) => (
                  <button
                    key={curr.code}
                    onClick={() => {
                      setCurrency(curr.code);
                      setIsCurrOpen(false);
                    }}
                    className={`flex w-full items-center justify-between rounded-lg px-2.5 py-1.5 text-xs transition-colors cursor-pointer ${
                      currency === curr.code
                        ? 'bg-emerald-500/20 text-emerald-400 font-bold'
                        : 'text-slate-400 hover:bg-slate-500/10 hover:text-current'
                    }`}
                  >
                    <span className="font-mono">{curr.code}</span>
                    <span className="text-[10px] text-slate-400">{curr.symbol}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="h-3.5 w-px bg-slate-500/20" />

          {/* Language Selector */}
          <div className="relative" ref={langRef}>
            <button
              type="button"
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="inline-flex min-h-[26px] items-center gap-1 sm:gap-1.5 rounded-md px-1.5 sm:px-2 transition-colors hover:bg-slate-500/10 text-[11px] font-bold cursor-pointer"
              aria-label="Select language"
            >
              <Globe className="h-3 w-3 text-emerald-500" />
              <span>{isAr ? 'العربية' : 'EN'}</span>
              <ChevronDown className={`h-3 w-3 transition-transform ${isLangOpen ? 'rotate-180' : ''}`} />
            </button>

            {isLangOpen && (
              <div
                className={`absolute top-full mt-1.5 w-36 overflow-hidden rounded-xl border p-1 shadow-2xl backdrop-blur-xl z-50 ${
                  isDark ? 'border-white/10 bg-[#0d1524]' : 'border-slate-200 bg-white'
                } ${isAr ? 'left-0' : 'right-0'}`}
              >
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLocale(lang.code);
                      setIsLangOpen(false);
                    }}
                    className={`flex w-full items-center justify-between rounded-lg px-2.5 py-1.5 text-xs transition-colors cursor-pointer ${
                      locale === lang.code
                        ? 'bg-emerald-500/20 text-emerald-400 font-bold'
                        : 'text-slate-400 hover:bg-slate-500/10 hover:text-current'
                    }`}
                  >
                    <span>{lang.label}</span>
                    {locale === lang.code && <Check className="h-3 w-3 text-emerald-500" />}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="h-3.5 w-px bg-slate-500/20" />

          {/* Interactive Theme Switching Toggle (Persisting in LocalStorage) */}
          <div
            role="radiogroup"
            aria-label={isAr ? 'اختيار المظهر' : 'Theme mode selector'}
            className={`relative flex items-center rounded-xl p-0.5 border transition-all ${
              isDark
                ? 'bg-black/40 border-white/10 shadow-inner'
                : 'bg-slate-200/80 border-slate-300 shadow-inner'
            }`}
          >
            {/* Light Mode Button */}
            <button
              type="button"
              role="radio"
              aria-checked={!isDark}
              onClick={() => {
                if (isDark) toggleTheme();
              }}
              title={isAr ? 'تفعيل الوضع النهاري' : 'Switch to Light Mode'}
              className={`relative flex items-center gap-1 rounded-lg px-2 py-1 text-[11px] font-bold transition-all duration-200 cursor-pointer ${
                !isDark
                  ? 'bg-white text-amber-600 shadow-sm shadow-amber-500/10'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Sun className={`h-3.5 w-3.5 transition-transform duration-200 ${!isDark ? 'rotate-0 text-amber-500' : '-rotate-45'}`} />
              <span className="hidden sm:inline">{isAr ? 'النهار' : 'Light'}</span>
            </button>

            {/* Dark Mode Button */}
            <button
              type="button"
              role="radio"
              aria-checked={isDark}
              onClick={() => {
                if (!isDark) toggleTheme();
              }}
              title={isAr ? 'تفعيل الوضع الليلي' : 'Switch to Dark Mode'}
              className={`relative flex items-center gap-1 rounded-lg px-2 py-1 text-[11px] font-bold transition-all duration-200 cursor-pointer ${
                isDark
                  ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-sm shadow-emerald-500/20'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              <Moon className={`h-3.5 w-3.5 transition-transform duration-200 ${isDark ? 'rotate-0 text-cyan-200' : 'rotate-45'}`} />
              <span className="hidden sm:inline">{isAr ? 'الليل' : 'Dark'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
