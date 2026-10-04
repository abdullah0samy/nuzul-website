import React, { createContext, useContext, useState, useEffect } from 'react';
import { Locale, Currency, CartItem, HostingPlan, BlogPost, EnterprisePackage } from '../types';

export type Theme = 'dark' | 'light';

interface AppContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  currency: Currency;
  setCurrency: (currency: Currency) => void;
  formatPrice: (priceEGP: number, discountMultiplier?: number) => string;
  cart: CartItem[];
  addToCart: (
    plan: HostingPlan,
    months?: 1 | 12 | 24 | 36,
    serverLocation?: 'cairo' | 'us' | 'eu',
    domainName?: string
  ) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  updateCartBilling: (id: string, months: 1 | 12 | 24 | 36) => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  isClientAreaOpen: boolean;
  setIsClientAreaOpen: (open: boolean) => void;
  clientAreaTab: 'login' | 'register' | 'forgot';
  setClientAreaTab: (tab: 'login' | 'register' | 'forgot') => void;
  isChatOpen: boolean;
  setIsChatOpen: (open: boolean) => void;
  activeArticle: BlogPost | null;
  setActiveArticle: (article: BlogPost | null) => void;
  selectedDatacenter: 'cairo' | 'us' | 'eu';
  setSelectedDatacenter: (dc: 'cairo' | 'us' | 'eu') => void;
  activePaymentModal: 'instapay' | 'vodafone' | 'card' | null;
  setActivePaymentModal: (modal: 'instapay' | 'vodafone' | 'card' | null) => void;
  selectedPackage: EnterprisePackage | null;
  setSelectedPackage: (pkg: EnterprisePackage | null) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Read initial locale from window path or hash; default to 'ar'
  const [locale, setLocaleState] = useState<Locale>(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname.toLowerCase();
      const hash = window.location.hash.toLowerCase();
      if (path.includes('/en') || hash === '#en') return 'en';
      if (path.includes('/ar') || hash === '#ar') return 'ar';
    }
    return 'ar';
  });

  // Read theme from localStorage or default to 'dark'
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('nuzul_theme');
      if (saved === 'light' || saved === 'dark') return saved;
    }
    return 'dark';
  });

  const [currency, setCurrency] = useState<Currency>('EGP');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isClientAreaOpen, setIsClientAreaOpen] = useState(false);
  const [clientAreaTab, setClientAreaTab] = useState<'login' | 'register' | 'forgot'>('login');
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [activeArticle, setActiveArticle] = useState<BlogPost | null>(null);
  const [selectedDatacenter, setSelectedDatacenter] = useState<'cairo' | 'us' | 'eu'>('cairo');
  const [activePaymentModal, setActivePaymentModal] = useState<'instapay' | 'vodafone' | 'card' | null>(null);
  const [selectedPackage, setSelectedPackage] = useState<EnterprisePackage | null>(null);

  // Sync theme with document element classes and localStorage
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
    root.setAttribute('data-theme', theme);
    try {
      localStorage.setItem('nuzul_theme', theme);
    } catch (e) {
      // ignore
    }
  }, [theme]);

  // Sync document direction and title with active locale
  useEffect(() => {
    const isAr = locale === 'ar';
    document.documentElement.dir = isAr ? 'rtl' : 'ltr';
    document.documentElement.lang = locale;

    if (isAr) {
      document.title = 'نُزول تِك | Nuzul Tech — بنيتك التحتية، ضيفنا | حلول IT وسيرفرات سحابية';
    } else {
      document.title = 'Nuzul Tech | Enterprise IT Solutions & Cloud Infrastructure';
    }

    if (typeof window !== 'undefined') {
      const targetHash = `#${locale}`;
      if (window.location.hash !== targetHash) {
        window.history.replaceState(null, '', targetHash);
      }
    }
  }, [locale]);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
  };

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
  };

  const toggleTheme = () => {
    setThemeState((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const formatPrice = (priceEGP: number, discountMultiplier = 1): string => {
    const finalEGP = priceEGP * discountMultiplier;

    if (currency === 'USD') {
      const usd = finalEGP / 50;
      return `$${usd.toFixed(2)}`;
    }
    if (currency === 'SAR') {
      const sar = (finalEGP / 50) * 3.75;
      return `${sar.toFixed(0)} ${locale === 'ar' ? 'ر.س' : 'SAR'}`;
    }
    if (currency === 'AED') {
      const aed = (finalEGP / 50) * 3.67;
      return `${aed.toFixed(0)} ${locale === 'ar' ? 'د.إ' : 'AED'}`;
    }
    if (currency === 'EUR') {
      const eur = (finalEGP / 50) * 0.92;
      return `€${eur.toFixed(2)}`;
    }
    return `${Math.round(finalEGP).toLocaleString('en-US')} ${locale === 'ar' ? 'ج.م' : 'EGP'}`;
  };

  const addToCart = (
    plan: HostingPlan,
    months: 1 | 12 | 24 | 36 = 12,
    serverLocation: 'cairo' | 'us' | 'eu' = 'cairo',
    domainName?: string
  ) => {
    const newItem: CartItem = {
      id: `${plan.id}-${Date.now()}`,
      planId: plan.id,
      planName: locale === 'ar' ? plan.nameAr : plan.nameEn,
      baseMonthlyEGP: plan.basePriceEGP,
      baseMonthlyUSD: plan.basePriceUSD,
      months,
      serverLocation,
      domainName,
    };
    setCart((prev) => [...prev, newItem]);
    setIsCartOpen(true);
  };

  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const updateCartBilling = (id: string, months: 1 | 12 | 24 | 36) => {
    setCart((prev) =>
      prev.map((item) => (item.id === id ? { ...item, months } : item))
    );
  };

  return (
    <AppContext.Provider
      value={{
        locale,
        setLocale,
        theme,
        setTheme,
        toggleTheme,
        currency,
        setCurrency,
        formatPrice,
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        updateCartBilling,
        isCartOpen,
        setIsCartOpen,
        isClientAreaOpen,
        setIsClientAreaOpen,
        clientAreaTab,
        setClientAreaTab,
        isChatOpen,
        setIsChatOpen,
        activeArticle,
        setActiveArticle,
        selectedDatacenter,
        setSelectedDatacenter,
        activePaymentModal,
        setActivePaymentModal,
        selectedPackage,
        setSelectedPackage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
