import React, { createContext, useContext, useState, useEffect } from 'react';
import { Article, HostingPlan } from '../data/nuzulData';

export type Language = 'ar' | 'en';
export type Currency = 'EGP' | 'SAR' | 'USD';
export type ThemeMode = 'light' | 'dark' | 'system';
export type ResolvedTheme = 'light' | 'dark';

export interface CartItem {
  id: string;
  name: string;
  type: 'hosting' | 'domain' | 'service' | 'package';
  price: number; // Unit price in EGP
  quantity?: number;
  billingCycle?: 'monthly' | 'yearly' | 'one-time';
  details?: string;
}

export interface ServerConfiguratorRequest {
  plan: HostingPlan;
  initialRegion?: string;
  initialCycle?: 'monthly' | 'yearly';
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
  cartCount: number;
  addToCart: (item: CartItem) => void;
  updateCartQuantity: (id: string, delta: number) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  configuratorRequest: ServerConfiguratorRequest | null;
  openServerConfigurator: (
    plan: HostingPlan,
    initialRegion?: string,
    initialCycle?: 'monthly' | 'yearly'
  ) => void;
  closeServerConfigurator: () => void;
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
  USD: { rate: 1 / 49.5, symbol: '$' },
};

const CART_STORAGE_KEY = 'nuzul-cart-v2';
const CURRENCY_STORAGE_KEY = 'nuzul-currency';

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

function getInitialCurrency(): Currency {
  if (typeof window === 'undefined') return 'EGP';
  try {
    const saved = localStorage.getItem(CURRENCY_STORAGE_KEY);
    if (saved === 'EGP' || saved === 'USD' || saved === 'SAR') {
      return saved;
    }
  } catch {
    // ignore storage errors
  }
  return 'EGP';
}

function getInitialCart(): CartItem[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(CART_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed
      .filter((item) => item && typeof item.id === 'string' && typeof item.name === 'string')
      .map((item) => ({
        ...item,
        price: Number(item.price) || 0,
        quantity: Math.max(1, Math.min(20, Math.floor(Number(item.quantity) || 1))),
      }));
  } catch {
    return [];
  }
}

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Language>(getInitialLang);
  const [currency, setCurrencyState] = useState<Currency>(getInitialCurrency);
  const [themeMode, setThemeModeState] = useState<ThemeMode>(getInitialThemeMode);
  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>(() =>
    resolveTheme(getInitialThemeMode())
  );
  const [cart, setCart] = useState<CartItem[]>(getInitialCart);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [configuratorRequest, setConfiguratorRequest] =
    useState<ServerConfiguratorRequest | null>(null);
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

  const setCurrency = (curr: Currency) => {
    setCurrencyState(curr);
    try {
      localStorage.setItem(CURRENCY_STORAGE_KEY, curr);
    } catch {
      // ignore storage errors
    }
  };

  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    } catch {
      // ignore storage errors
    }
  }, [cart]);

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
      currency === 'EGP' ? Math.round(priceInEGP) : Math.round(priceInEGP * rate);
    if (lang === 'en') {
      return `${converted.toLocaleString('en-US')} ${currency}`;
    }
    return `${converted.toLocaleString('en-US')} ${symbol}`;
  };

  const addToCart = (item: CartItem) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        // Domains are unique per name; servers/services can increment quantity
        if (item.type === 'domain') return prev;
        return prev.map((i) =>
          i.id === item.id
            ? { ...i, quantity: Math.min(20, (i.quantity || 1) + (item.quantity || 1)) }
            : i
        );
      }
      return [...prev, { ...item, quantity: item.quantity || 1 }];
    });
    setIsCartOpen(true);
  };

  const updateCartQuantity = (id: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.id !== id) return item;
          const nextQty = (item.quantity || 1) + delta;
          if (nextQty <= 0) return null;
          return { ...item, quantity: Math.min(20, nextQty) };
        })
        .filter((x): x is CartItem => x !== null)
    );
  };

  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => setCart([]);

  const openServerConfigurator = (
    plan: HostingPlan,
    initialRegion = 'cai',
    initialCycle: 'monthly' | 'yearly' = 'yearly'
  ) => {
    setConfiguratorRequest({ plan, initialRegion, initialCycle });
  };

  const closeServerConfigurator = () => setConfiguratorRequest(null);

  const cartCount = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);

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
        cartCount,
        addToCart,
        updateCartQuantity,
        removeFromCart,
        clearCart,
        isCartOpen,
        setIsCartOpen,
        configuratorRequest,
        openServerConfigurator,
        closeServerConfigurator,
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
        resetServiceFilters,
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
