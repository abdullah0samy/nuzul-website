import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useApp, ThemeMode } from '../../context/AppContext';
import { Menu, X, Globe, Sun, Moon, Monitor, Search, Check, ShoppingBag } from 'lucide-react';
import { NuzulLogo } from '../common/NuzulLogo';
import { openGlobalSearch } from '../search/GlobalSearchCommandPalette';

export const Navbar: React.FC = () => {
  const { lang, setLang, themeMode, setThemeMode, cartCount, setIsCartOpen } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [themeMenuOpen, setThemeMenuOpen] = useState(false);
  const location = useLocation();

  const themeDropdownRef = useRef<HTMLDivElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);
  const mobileMenuBtnRef = useRef<HTMLButtonElement>(null);

  // Section 3.10: Strictly 5 concise top-level links, zero counters, white-space: nowrap
  const navLinks = [
    { name: lang === 'ar' ? 'الخدمات' : 'Services', href: '/services' },
    { name: lang === 'ar' ? 'الاستضافة' : 'Hosting', href: '/hosting' },
    { name: lang === 'ar' ? 'الأسعار' : 'Pricing', href: '/pricing' },
    { name: lang === 'ar' ? 'دراسات الحالة' : 'Case Studies', href: '/case-studies' },
    { name: lang === 'ar' ? 'المدونة' : 'Blog', href: '/blog' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setThemeMenuOpen(false);
  }, [location.pathname]);

  // Close theme menu on outside click (Desktop)
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!themeMenuOpen) return;
      const target = e.target as Node;
      if (!themeDropdownRef.current?.contains(target)) {
        setThemeMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [themeMenuOpen]);

  // Keyboard handling: Escape closes theme menu or mobile drawer; Focus Trap inside mobile drawer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (themeMenuOpen) {
          setThemeMenuOpen(false);
          return;
        }
        if (mobileMenuOpen) {
          setMobileMenuOpen(false);
          mobileMenuBtnRef.current?.focus();
          return;
        }
      }

      // Focus trap when mobile drawer is open
      if (e.key === 'Tab' && mobileMenuOpen && drawerRef.current) {
        const focusable = Array.from(
          drawerRef.current.querySelectorAll<HTMLElement>(
            'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
          )
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        const active = document.activeElement as HTMLElement | null;

        if (e.shiftKey) {
          if (!active || active === first || !drawerRef.current.contains(active)) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (!active || active === last || !drawerRef.current.contains(active)) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen, themeMenuOpen]);

  // Move focus into drawer when opened via keyboard/click
  useEffect(() => {
    if (mobileMenuOpen && drawerRef.current) {
      const firstFocusable = drawerRef.current.querySelector<HTMLElement>('a[href], button:not([disabled])');
      firstFocusable?.focus();
    }
  }, [mobileMenuOpen]);

  const handleSearchTrigger = () => {
    setMobileMenuOpen(false);
    setThemeMenuOpen(false);
    openGlobalSearch('');
  };

  const themeOptions: { mode: ThemeMode; labelAr: string; labelEn: string; icon: React.ReactNode }[] = [
    { mode: 'light', labelAr: 'فاتح', labelEn: 'Light', icon: <Sun className="w-4 h-4 shrink-0" /> },
    { mode: 'dark', labelAr: 'داكن', labelEn: 'Dark', icon: <Moon className="w-4 h-4 shrink-0" /> },
    { mode: 'system', labelAr: 'تلقائي', labelEn: 'System', icon: <Monitor className="w-4 h-4 shrink-0" /> },
  ];

  const currentThemeOpt = themeOptions.find((o) => o.mode === themeMode) || themeOptions[2];
  const currentThemeLabel = lang === 'ar' ? currentThemeOpt.labelAr : currentThemeOpt.labelEn;

  return (
    <header className="sticky top-0 z-50 bg-header-glass border-b border-token transition-colors">
      {/* Keyboard Skip to Main Content Link */}
      <a
        href="#main-content"
        data-testid="skip-to-content"
        className="sr-only top-0 start-0 focus:not-sr-only focus:fixed focus:top-3 focus:start-4 focus:z-[100] focus:px-4 focus:py-2.5 focus:min-h-[44px] focus:inline-flex focus:items-center focus:rounded-lg focus:bg-accent focus:text-accent-contrast focus:text-sm focus:font-bold whitespace-nowrap"
      >
        {lang === 'ar' ? 'تخطي إلى المحتوى الرئيسي' : 'Skip to main content'}
      </a>

      <div className="container-nuzul h-16 flex items-center justify-between gap-2 sm:gap-4">
        {/* Logo */}
        <Link
          to="/"
          data-testid="header-logo-link"
          className="inline-flex items-center min-h-[44px] py-1.5 rounded-lg shrink-0 whitespace-nowrap"
          aria-label={lang === 'ar' ? 'نزول تك - الصفحة الرئيسية' : 'Nuzul Tech - Home'}
        >
          <NuzulLogo size={30} variant="auto" />
        </Link>

        {/* Desktop Navigation (Switches to hamburger drawer below 1024px / lg) */}
        <nav
          className="hidden lg:flex items-center gap-5 xl:gap-8 shrink-0"
          aria-label={lang === 'ar' ? 'التنقل الرئيسي' : 'Main Navigation'}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              data-testid={`nav-link-${link.href.replace('/', '')}`}
              className={`inline-flex items-center min-h-[44px] text-sm xl:text-base font-medium transition-colors py-2.5 border-b-2 whitespace-nowrap ${
                isActive(link.href)
                  ? 'text-accent border-accent font-semibold'
                  : 'text-muted border-transparent hover-text-main'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions: Search Icon + Single Theme Icon Button w/ Menu + Compact Language Toggle + Short CTA */}
        <div className="hidden lg:flex items-center gap-2 shrink-0">
          {/* Search Icon Trigger */}
          <button
            type="button"
            onClick={handleSearchTrigger}
            data-testid="header-search-btn"
            aria-label={lang === 'ar' ? 'بحث في الخدمات والحلول' : 'Search services and solutions'}
            title={lang === 'ar' ? 'بحث (Ctrl+K)' : 'Search (Ctrl+K)'}
            className="inline-flex items-center justify-center min-w-[44px] min-h-[44px] w-11 h-11 p-2.5 text-muted hover-text-main hover-surface-2 rounded-lg transition-colors border border-token whitespace-nowrap shrink-0"
          >
            <Search className="w-4 h-4 shrink-0" />
          </button>

          {/* Order Cart Trigger (Visible with count badge when items added) */}
          {cartCount > 0 && (
            <button
              type="button"
              onClick={() => setIsCartOpen(true)}
              data-testid="header-cart-btn"
              aria-label={
                lang === 'ar'
                  ? `سلة الطلبات (${cartCount} عناصر)`
                  : `Order cart (${cartCount} items)`
              }
              className="relative inline-flex items-center justify-center gap-1.5 min-w-[44px] min-h-[44px] px-3 py-2.5 text-accent bg-accent-soft hover-surface-2 rounded-lg transition-colors border border-accent whitespace-nowrap shrink-0"
            >
              <ShoppingBag className="w-4 h-4 shrink-0" />
              <span className="text-xs font-bold ltr-num">{cartCount}</span>
            </button>
          )}

          {/* Single Theme Icon Button with Dropdown Menu (فاتح / داكن / تلقائي) */}
          <div className="relative" ref={themeDropdownRef}>
            <button
              type="button"
              onClick={() => setThemeMenuOpen((prev) => !prev)}
              data-testid="theme-menu-btn"
              aria-haspopup="menu"
              aria-expanded={themeMenuOpen}
              aria-label={
                lang === 'ar'
                  ? `تغيير المظهر (الحالي: ${currentThemeLabel})`
                  : `Change theme (Current: ${currentThemeLabel})`
              }
              title={
                lang === 'ar'
                  ? `المظهر: ${currentThemeLabel}`
                  : `Theme: ${currentThemeLabel}`
              }
              className="inline-flex items-center justify-center min-w-[44px] min-h-[44px] w-11 h-11 p-2.5 text-muted hover-text-main hover-surface-2 rounded-lg transition-colors border border-token whitespace-nowrap shrink-0"
            >
              {currentThemeOpt.icon}
            </button>

            {themeMenuOpen && (
              <div
                role="menu"
                data-testid="theme-dropdown-menu"
                aria-label={lang === 'ar' ? 'قائمة المظهر' : 'Theme menu'}
                className="absolute end-0 mt-2 w-40 rounded-xl bg-surface border border-token shadow-lg p-1.5 z-50"
              >
                {themeOptions.map((opt) => {
                  const active = themeMode === opt.mode;
                  const label = lang === 'ar' ? opt.labelAr : opt.labelEn;
                  return (
                    <button
                      key={opt.mode}
                      type="button"
                      role="menuitemradio"
                      aria-checked={active}
                      onClick={() => {
                        setThemeMode(opt.mode);
                        setThemeMenuOpen(false);
                      }}
                      data-testid={`theme-btn-${opt.mode}`}
                      className={`w-full min-h-[44px] px-3 py-2.5 rounded-lg text-xs font-semibold flex items-center justify-between gap-2 transition-colors whitespace-nowrap ${
                        active
                          ? 'bg-surface-2 text-accent'
                          : 'text-main hover-surface-2'
                      }`}
                    >
                      <span className="inline-flex items-center gap-2 whitespace-nowrap">
                        {opt.icon}
                        <span>{label}</span>
                      </span>
                      {active && <Check className="w-3.5 h-3.5 text-accent shrink-0" />}
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Compact Language Toggle */}
          <button
            type="button"
            onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}
            data-testid="lang-toggle-btn"
            className="inline-flex items-center justify-center gap-1.5 min-w-[44px] min-h-[44px] px-3 py-2.5 text-xs font-semibold text-muted hover-text-main hover-surface-2 rounded-lg transition-colors border border-token whitespace-nowrap shrink-0"
            aria-label={lang === 'ar' ? 'EN - Switch to English' : 'عربي - التبديل إلى العربية'}
          >
            <Globe className="w-4 h-4 text-muted shrink-0" />
            <span className="ltr-num whitespace-nowrap">{lang === 'ar' ? 'EN' : 'عربي'}</span>
          </button>

          {/* Primary CTA (Shortened per Section 3.10: "احجز استشارة" / "Book Consultation") */}
          <Link
            to="/contact"
            data-testid="header-primary-cta"
            className="btn-primary min-h-[44px] px-4 xl:px-5 py-2.5 text-sm whitespace-nowrap shrink-0"
          >
            {lang === 'ar' ? 'احجز استشارة' : 'Book Consultation'}
          </Link>
        </div>

        {/* Mobile / Tablet Controls (< 1024px) — Strictly 3 controls: Logo, Search, Menu (Section 3.10 & 3.11) */}
        <div className="flex lg:hidden items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={handleSearchTrigger}
            data-testid="mobile-header-search-btn"
            aria-label={lang === 'ar' ? 'بحث في الخدمات والحلول' : 'Search services and solutions'}
            className="inline-flex items-center justify-center min-w-[44px] min-h-[44px] w-11 h-11 p-2.5 text-muted hover-text-main border border-token rounded-lg bg-surface whitespace-nowrap shrink-0"
          >
            <Search className="w-4 h-4 shrink-0" />
          </button>

          <button
            ref={mobileMenuBtnRef}
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="mobile-menu-toggle-btn"
            className="inline-flex items-center justify-center min-w-[44px] min-h-[44px] w-11 h-11 p-2.5 text-main hover-surface-2 border border-token rounded-lg transition-colors whitespace-nowrap shrink-0"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-drawer"
            aria-label={lang === 'ar' ? 'القائمة' : 'Menu'}
          >
            {mobileMenuOpen ? <X className="w-5 h-5 shrink-0" /> : <Menu className="w-5 h-5 shrink-0" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer with Focus Trap, Escape Support & Preferences (Theme & Lang inside) */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          ref={drawerRef}
          role="dialog"
          aria-modal="true"
          aria-label={lang === 'ar' ? 'قائمة التنقل' : 'Navigation Menu'}
          data-testid="mobile-nav-drawer"
          className="lg:hidden bg-surface border-b border-token px-6 py-5 space-y-4 shadow-xl"
        >
          <nav
            className="flex flex-col space-y-1"
            aria-label={lang === 'ar' ? 'قائمة الجوال' : 'Mobile Navigation'}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`min-h-[44px] py-3 px-3 rounded-lg text-base font-medium flex items-center transition-colors whitespace-nowrap ${
                  isActive(link.href)
                    ? 'bg-accent-soft text-accent font-semibold'
                    : 'text-main hover-surface-2'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Preferences inside mobile drawer: Language & Theme per Section 3.11 */}
          <div className="pt-3 border-t border-token space-y-3">
            <div className="flex items-center justify-between gap-3">
              <span className="text-xs font-semibold text-muted">
                {lang === 'ar' ? 'اللغة:' : 'Language:'}
              </span>
              <button
                type="button"
                onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}
                data-testid="mobile-drawer-lang-btn"
                className="inline-flex items-center gap-1.5 min-h-[44px] px-3.5 py-2 text-xs font-semibold text-main hover-surface-2 border border-token rounded-lg bg-surface whitespace-nowrap"
                aria-label={lang === 'ar' ? 'EN - Switch to English' : 'عربي - التبديل إلى العربية'}
              >
                <Globe className="w-4 h-4 text-muted shrink-0" />
                <span className="ltr-num">{lang === 'ar' ? 'English (EN)' : 'العربية (AR)'}</span>
              </button>
            </div>

            <div>
              <span className="text-xs font-semibold text-muted block mb-2">
                {lang === 'ar' ? 'المظهر:' : 'Theme:'}
              </span>
              <div className="grid grid-cols-3 gap-2">
                {themeOptions.map((opt) => {
                  const active = themeMode === opt.mode;
                  const label = lang === 'ar' ? opt.labelAr : opt.labelEn;
                  return (
                    <button
                      key={opt.mode}
                      type="button"
                      onClick={() => setThemeMode(opt.mode)}
                      data-testid={`mobile-drawer-theme-btn-${opt.mode}`}
                      className={`min-h-[44px] px-2 py-2 text-xs font-semibold rounded-lg border flex items-center justify-center gap-1.5 whitespace-nowrap transition-colors ${
                        active
                          ? 'border-accent bg-accent-soft text-accent'
                          : 'border-token bg-surface text-muted hover-text-main'
                      }`}
                    >
                      {opt.icon}
                      <span>{label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="pt-2 border-t border-token flex flex-col gap-2">
            {cartCount > 0 && (
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsCartOpen(true);
                }}
                data-testid="drawer-cart-btn"
                className="btn-secondary w-full min-h-[44px] py-2.5 text-sm font-bold inline-flex items-center justify-center gap-2 whitespace-nowrap border-accent text-accent"
              >
                <ShoppingBag className="w-4 h-4 shrink-0" />
                <span>
                  {lang === 'ar'
                    ? `عرض سلة الطلبات (${cartCount})`
                    : `View Order Cart (${cartCount})`}
                </span>
              </button>
            )}
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              data-testid="drawer-primary-cta"
              className="btn-primary w-full min-h-[44px] py-3 text-center text-sm whitespace-nowrap"
            >
              {lang === 'ar' ? 'احجز استشارة' : 'Book Consultation'}
            </Link>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                mobileMenuBtnRef.current?.focus();
              }}
              data-testid="drawer-close-btn"
              className="btn-secondary w-full min-h-[44px] py-2.5 text-center text-xs whitespace-nowrap"
            >
              {lang === 'ar' ? 'إغلاق القائمة (Esc)' : 'Close Menu (Esc)'}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
