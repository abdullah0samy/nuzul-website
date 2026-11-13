import React, { createContext, useContext, useState, useEffect } from 'react';
import { Article } from '../data/nuzulData';

export type Language = 'ar' | 'en';
export type Currency = 'EGP' | 'SAR' | 'USD';
export type ThemeMode = 'light' | 'dark' | 'system';
export type ResolvedTheme = 'light' | 'dark';

export interface CartItem {
  id: string;
  name: string;
  type: 'hosting' | 'domain' | 'service' | 'package';
  price: number;
  billingCycle?: 'monthly' | 'yearly' | 'one-time';
  details?: string;
}

interface AppContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  locale: Language;
  setLocale: (lang: Language) => void;
  currency: Currency;
  setCurrency: (curr: Currency) => void;
  formatPrice: (priceInEGP: number) => string;
  themeMode: ThemeMode;
  setThemeMode: (mode: ThemeMode) => void;
  resolvedTheme: ResolvedTheme;
  theme: ResolvedTheme;
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  isClientAreaOpen: boolean;
  setIsClientAreaOpen: (open: boolean) => void;
  isPaymentModalOpen: boolean;
  setIsPaymentModalOpen: (open: boolean) => void;
  isChatOpen: boolean;
  setIsChatOpen: (open: boolean) => void;
  selectedArticle: Article | null;
  setSelectedArticle: (article: Article | null) => void;
  serviceCategoryFilter: string;
  setServiceCategoryFilter: (cat: string) => void;
  serviceSearchQuery: string;
  setServiceSearchQuery: (q: string) => void;
  resetServiceFilters: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const EXCHANGE_RATES: Record<Currency, { rate: number; symbol: string }> = {
  EGP: { rate: 1, symbol: 'ج.م' },
  SAR: { rate: 3.75 / 49.5, symbol: 'ر.س' },
  USD: { rate: 1 / 49.5, symbol: '$' }
};

function getInitialThemeMode(): ThemeMode {
  if (typeof window === 'undefined') return 'system';
  try {
    const saved = localStorage.getItem('nuzul-theme');
    if (saved === 'light' || saved === 'dark' || saved === 'system') {
      return saved;
    }
  } catch {
    // ignore storage errors
  }
  return 'system';
}

function resolveTheme(mode: ThemeMode): ResolvedTheme {
  if (mode === 'light' || mode === 'dark') return mode;
  if (typeof window !== 'undefined' && window.matchMedia) {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  return 'light';
}

function getInitialLang(): Language {
  if (typeof window === 'undefined') return 'ar';
  try {
    const params = new URLSearchParams(window.location.search);
    const urlLang = params.get('lang');
    if (urlLang === 'en' || urlLang === 'ar') {
      return urlLang;
    }
    const saved = localStorage.getItem('nuzul-lang');
    if (saved === 'en' || saved === 'ar') {
      return saved;
    }
  } catch {
    // ignore storage errors
  }
  return 'ar';
}

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Language>(getInitialLang);
  const [currency, setCurrency] = useState<Currency>('EGP');
  const [themeMode, setThemeModeState] = useState<ThemeMode>(getInitialThemeMode);
  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>(() => resolveTheme(getInitialThemeMode()));
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isClientAreaOpen, setIsClientAreaOpen] = useState(false);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [serviceCategoryFilter, setServiceCategoryFilter] = useState<string>('all');
  const [serviceSearchQuery, setServiceSearchQuery] = useState<string>('');

  const setLang = (nextLang: Language) => {
    setLangState(nextLang);
    try {
      localStorage.setItem('nuzul-lang', nextLang);
    } catch {
      // ignore storage errors
    }
  };

  const resetServiceFilters = () => {
    setServiceCategoryFilter('all');
    setServiceSearchQuery('');
  };

  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    const applyTheme = (mode: ThemeMode) => {
      const nextResolved = resolveTheme(mode);
      setResolvedTheme(nextResolved);
      document.documentElement.setAttribute('data-theme', nextResolved);
      document.documentElement.setAttribute('data-theme-mode', mode);
      document.documentElement.style.colorScheme = nextResolved;
    };

    applyTheme(themeMode);

    try {
      localStorage.setItem('nuzul-theme', themeMode);
    } catch {
      // ignore storage errors
    }

    if (themeMode === 'system' && typeof window !== 'undefined' && window.matchMedia) {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const listener = () => applyTheme('system');
      mediaQuery.addEventListener('change', listener);
      return () => mediaQuery.removeEventListener('change', listener);
    }
  }, [themeMode]);

  const setThemeMode = (mode: ThemeMode) => {
    setThemeModeState(mode);
  };

  const formatPrice = (priceInEGP: number): string => {
    const { rate, symbol } = EXCHANGE_RATES[currency];
    if (currency === 'USD') {
      const usdRaw = priceInEGP * rate;
      const usdRounded = usdRaw < 100 ? Math.round(usdRaw * 20) / 20 : Math.round(usdRaw);
      return usdRounded % 1 !== 0
        ? `$${usdRounded.toFixed(2)}`
        : `$${usdRounded.toLocaleString('en-US')}`;
    }
    const converted =
      currency === 'EGP'
        ? Math.round(priceInEGP)
        : Math.round(priceInEGP * rate);
    if (lang === 'en') {
      return `${converted.toLocaleString('en-US')} ${currency}`;
    }
    return `${converted.toLocaleString('en-US')} ${symbol}`;
  };

  const addToCart = (item: CartItem) => {
    setCart((prev) => {
      const exists = prev.find((i) => i.id === item.id);
      if (exists) return prev;
      return [...prev, item];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => setCart([]);

  return (
    <AppContext.Provider
      value={{
        lang,
        setLang,
        locale: lang,
        setLocale: setLang,
        currency,
        setCurrency,
        formatPrice,
        themeMode,
        setThemeMode,
        resolvedTheme,
        theme: resolvedTheme,
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        isCartOpen,
        setIsCartOpen,
        isClientAreaOpen,
        setIsClientAreaOpen,
        isPaymentModalOpen,
        setIsPaymentModalOpen,
        isChatOpen,
        setIsChatOpen,
        selectedArticle,
        setSelectedArticle,
        serviceCategoryFilter,
        setServiceCategoryFilter,
        serviceSearchQuery,
        setServiceSearchQuery,
        resetServiceFilters
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within AppProvider');
  return context;
};
