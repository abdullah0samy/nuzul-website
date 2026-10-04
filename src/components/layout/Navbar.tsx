import React, { useState, useRef, useEffect } from 'react';
import {
  Menu,
  X,
  ShoppingCart,
  User,
  PhoneCall,
  ChevronDown,
  Linkedin,
  Sun,
  Moon,
  ShieldCheck,
  Shield,
  Server,
  Activity,
  Layers,
  ArrowRight,
  ArrowLeft,
  Building2,
  Code2,
  Lock,
  Headphones,
  BookOpen,
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { NuzulLogo } from '../common/NuzulLogo';
import {
  NUZUL_CONTACT,
  NUZUL_SERVICES,
  NUZUL_BLOG_POSTS,
  NUZUL_CASE_STUDIES,
} from '../../data/nuzulData';

export const Navbar: React.FC = () => {
  const {
    locale,
    setLocale,
    currency,
    setCurrency,
    theme,
    toggleTheme,
    cart,
    setIsCartOpen,
    setIsClientAreaOpen,
    setActiveArticle,
  } = useApp();

  const isAr = locale === 'ar';
  const isDark = theme === 'dark';
  const cartCount = cart.length;

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpandedSection, setMobileExpandedSection] = useState<string | null>(null);

  const navRef = useRef<HTMLElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleDropdownToggle = (id: string) => {
    setActiveDropdown((prev) => (prev === id ? null : id));
  };

  const handleMobileSectionToggle = (id: string) => {
    setMobileExpandedSection((prev) => (prev === id ? null : id));
  };

  const liveDemosList = [
    {
      id: 'his',
      titleAr: 'ديمو نظام المستشفيات (HIS Demo)',
      titleEn: 'Hospital Information System (HIS)',
      tagAr: 'EMR والصيدليات والعمليات',
      tagEn: 'EMR, Pharmacy & Surgery Core',
    },
    {
      id: 'clinic',
      titleAr: 'منصة العيادات (ClinicCore™)',
      titleEn: 'ClinicCore™ SaaS Platform',
      tagAr: 'سحابي أو ترخيص ملكية كاملة',
      tagEn: 'SaaS or Self-Hosted License',
    },
  ];

  // Group services into 3 concise high-impact enterprise columns
  const softwareServices = NUZUL_SERVICES.filter((s) => s.category_key === 'software');
  const infraCloudServices = NUZUL_SERVICES.filter((s) => s.category_key === 'infra_cloud');
  const securityObsServices = NUZUL_SERVICES.filter((s) => s.category_key === 'security_obs');

  return (
    <header
      ref={navRef}
      className={`sticky top-0 z-50 w-full border-b backdrop-blur-md transition-colors ${
        isDark
          ? 'bg-[#070c14]/95 border-white/10 text-white'
          : 'bg-white/95 border-slate-200 text-slate-900 shadow-sm'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="flex h-17 w-full items-center justify-between gap-4">
          {/* Brand Logo & Name */}
          <div className="flex items-center gap-4 xl:gap-6 shrink-0">
            <a
              href={`#${locale}`}
              className="group inline-flex items-center gap-2.5 select-none"
              aria-label="Nuzul Tech Homepage"
            >
              <NuzulLogo size="md" />
            </a>

            {/* Desktop Navigation Links with Clean, Concise Mega Dropdowns */}
            <div className="hidden lg:flex lg:items-center lg:gap-0.5 xl:gap-1">
              {/* 1. All Services */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => handleDropdownToggle('services')}
                  onMouseEnter={() => setActiveDropdown('services')}
                  className={`inline-flex items-center gap-1 rounded-xl px-2.5 xl:px-3 py-1.5 text-xs font-bold transition-all cursor-pointer ${
                    activeDropdown === 'services'
                      ? 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400'
                      : 'text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-slate-500/5'
                  }`}
                >
                  <span>{isAr ? `كافة الخدمات (${NUZUL_SERVICES.length})` : `All Services (${NUZUL_SERVICES.length})`}</span>
                  <ChevronDown
                    className={`h-3.5 w-3.5 transition-transform duration-200 ${
                      activeDropdown === 'services' ? 'rotate-180 text-emerald-500' : 'text-slate-400'
                    }`}
                  />
                </button>

                {/* Services Dropdown (Concise 3-column list) */}
                {activeDropdown === 'services' && (
                  <div
                    onMouseLeave={() => setActiveDropdown(null)}
                    className={`absolute top-full mt-2 w-[880px] overflow-hidden rounded-2xl border p-4 shadow-2xl backdrop-blur-xl z-50 transition-all ${
                      isDark ? 'border-white/10 bg-[#0d1524]' : 'border-slate-200 bg-white'
                    } ${isAr ? 'right-0' : 'left-0'}`}
                  >
                    <div className="flex items-center justify-between border-b border-current/10 pb-2 mb-3">
                      <span className="text-xs font-mono font-bold uppercase text-emerald-600 dark:text-emerald-400">
                        {isAr ? `دليل الخدمات المتكاملة (${NUZUL_SERVICES.length})` : `All Services (${NUZUL_SERVICES.length})`}
                      </span>
                      <a
                        href="#services"
                        onClick={() => setActiveDropdown(null)}
                        className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 hover:underline inline-flex items-center gap-1"
                      >
                        <span>{isAr ? 'عرض الكل بالصفحة' : 'View All'}</span>
                        {isAr ? <ArrowLeft className="h-3 w-3" /> : <ArrowRight className="h-3 w-3" />}
                      </a>
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                      {/* Col 1: Software & Digital */}
                      <div className="space-y-1">
                        <div className="flex items-center gap-1 text-[11px] font-bold text-slate-900 dark:text-white border-b border-current/10 pb-1 mb-1.5">
                          <Code2 className="h-3.5 w-3.5 text-emerald-500" />
                          <span>{isAr ? 'البرمجيات والحلول الرقمية' : 'Software & Digital'}</span>
                        </div>
                        {softwareServices.map((svc) => (
                          <a
                            key={svc.id}
                            href="#services"
                            onClick={() => setActiveDropdown(null)}
                            className="block rounded-lg px-2 py-1 text-xs text-slate-600 dark:text-slate-300 hover:bg-emerald-500/10 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                          >
                            {isAr ? svc.title_ar : svc.title_en}
                          </a>
                        ))}
                      </div>

                      {/* Col 2: Infrastructure & Cloud */}
                      <div className="space-y-1">
                        <div className="flex items-center gap-1 text-[11px] font-bold text-slate-900 dark:text-white border-b border-current/10 pb-1 mb-1.5">
                          <Server className="h-3.5 w-3.5 text-emerald-500" />
                          <span>{isAr ? 'البنية التحتية والسحابية' : 'Infrastructure & Cloud'}</span>
                        </div>
                        {infraCloudServices.map((svc) => (
                          <a
                            key={svc.id}
                            href="#services"
                            onClick={() => setActiveDropdown(null)}
                            className="block rounded-lg px-2 py-1 text-xs text-slate-600 dark:text-slate-300 hover:bg-emerald-500/10 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                          >
                            {isAr ? svc.title_ar : svc.title_en}
                          </a>
                        ))}
                      </div>

                      {/* Col 3: Security & Observability */}
                      <div className="space-y-1">
                        <div className="flex items-center gap-1 text-[11px] font-bold text-slate-900 dark:text-white border-b border-current/10 pb-1 mb-1.5">
                          <Lock className="h-3.5 w-3.5 text-emerald-500" />
                          <span>{isAr ? 'الأمن والمراقبة' : 'Security & Observability'}</span>
                        </div>
                        {securityObsServices.map((svc) => (
                          <a
                            key={svc.id}
                            href="#services"
                            onClick={() => setActiveDropdown(null)}
                            className="block rounded-lg px-2 py-1 text-xs text-slate-600 dark:text-slate-300 hover:bg-emerald-500/10 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                          >
                            {isAr ? svc.title_ar : svc.title_en}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* 2. Live System Demos */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => handleDropdownToggle('demos')}
                  onMouseEnter={() => setActiveDropdown('demos')}
                  className={`inline-flex items-center gap-1 rounded-xl px-2.5 xl:px-3 py-1.5 text-xs font-bold transition-all cursor-pointer ${
                    activeDropdown === 'demos'
                      ? 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400'
                      : 'text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-slate-500/5'
                  }`}
                >
                  <span>{isAr ? 'الأنظمة الطبية الحية' : 'Live System Demos'}</span>
                  <ChevronDown
                    className={`h-3.5 w-3.5 transition-transform duration-200 ${
                      activeDropdown === 'demos' ? 'rotate-180 text-emerald-500' : 'text-slate-400'
                    }`}
                  />
                </button>

                {activeDropdown === 'demos' && (
                  <div
                    onMouseLeave={() => setActiveDropdown(null)}
                    className={`absolute top-full mt-2 w-80 overflow-hidden rounded-2xl border p-3.5 shadow-2xl backdrop-blur-xl z-50 ${
                      isDark ? 'border-white/10 bg-[#0d1524]' : 'border-slate-200 bg-white'
                    } ${isAr ? 'right-0' : 'left-0'}`}
                  >
                    <div className="space-y-1.5">
                      {liveDemosList.map((demo) => (
                        <a
                          key={demo.id}
                          href="#live-demos"
                          onClick={() => setActiveDropdown(null)}
                          className="group flex items-center justify-between rounded-xl p-2 transition-colors hover:bg-emerald-500/10"
                        >
                          <span className="text-xs font-bold text-slate-800 dark:text-slate-200 group-hover:text-emerald-600 dark:group-hover:text-emerald-400">
                            {isAr ? demo.titleAr : demo.titleEn}
                          </span>
                          <span className="text-[10px] font-mono text-emerald-500 bg-emerald-500/10 px-1.5 py-0.5 rounded">
                            {isAr ? demo.tagAr : demo.tagEn}
                          </span>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* 3. Case Studies */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => handleDropdownToggle('cases')}
                  onMouseEnter={() => setActiveDropdown('cases')}
                  className={`inline-flex items-center gap-1 rounded-xl px-2.5 xl:px-3 py-1.5 text-xs font-bold transition-all cursor-pointer ${
                    activeDropdown === 'cases'
                      ? 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400'
                      : 'text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-slate-500/5'
                  }`}
                >
                  <span>{isAr ? `قصص النجاح والحالة (${NUZUL_CASE_STUDIES.length})` : `Case Studies (${NUZUL_CASE_STUDIES.length})`}</span>
                  <ChevronDown
                    className={`h-3.5 w-3.5 transition-transform duration-200 ${
                      activeDropdown === 'cases' ? 'rotate-180 text-emerald-500' : 'text-slate-400'
                    }`}
                  />
                </button>

                {/* Case Studies Dropdown (Concise 2-column list of all 9 projects) */}
                {activeDropdown === 'cases' && (
                  <div
                    onMouseLeave={() => setActiveDropdown(null)}
                    className={`absolute top-full mt-2 w-[620px] overflow-hidden rounded-2xl border p-4 shadow-2xl backdrop-blur-xl z-50 ${
                      isDark ? 'border-white/10 bg-[#0d1524]' : 'border-slate-200 bg-white'
                    } ${isAr ? 'right-0' : 'left-0'}`}
                  >
                    <div className="flex items-center justify-between border-b border-current/10 pb-2 mb-2.5">
                      <span className="text-xs font-mono font-bold uppercase text-emerald-600 dark:text-emerald-400">
                        {isAr ? `قصص نجاح عملائنا ودراسات الحالة التقنية (${NUZUL_CASE_STUDIES.length} مشاريع)` : `Client Success Stories & Case Studies (${NUZUL_CASE_STUDIES.length})`}
                      </span>
                      <a
                        href="#projects"
                        onClick={() => setActiveDropdown(null)}
                        className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 hover:underline inline-flex items-center gap-1"
                      >
                        <span>{isAr ? 'عرض الكل' : 'View All'}</span>
                        {isAr ? <ArrowLeft className="h-3 w-3" /> : <ArrowRight className="h-3 w-3" />}
                      </a>
                    </div>

                    <div className="grid grid-cols-2 gap-x-3 gap-y-1">
                      {NUZUL_CASE_STUDIES.map((c) => (
                        <a
                          key={c.id}
                          href="#projects"
                          onClick={() => setActiveDropdown(null)}
                          className="group flex items-center justify-between rounded-lg px-2 py-1.5 text-xs text-slate-700 dark:text-slate-300 hover:bg-emerald-500/10 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                        >
                          <span className="truncate font-medium">
                            {c.id}. {isAr ? c.client_ar.split('—')[0] : c.client_en.split('—')[0]}
                          </span>
                          <span className="text-[10px] font-mono text-emerald-500/80 shrink-0 ml-1">
                            {c.badge ? c.badge.split(' ')[0] : ''}
                          </span>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* 4. Servers & Pricing */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => handleDropdownToggle('pricing')}
                  onMouseEnter={() => setActiveDropdown('pricing')}
                  className={`inline-flex items-center gap-1 rounded-xl px-2.5 xl:px-3 py-1.5 text-xs font-bold transition-all cursor-pointer ${
                    activeDropdown === 'pricing'
                      ? 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400'
                      : 'text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-slate-500/5'
                  }`}
                >
                  <span>{isAr ? 'السيرفرات والأسعار' : 'Servers & Pricing'}</span>
                  <ChevronDown
                    className={`h-3.5 w-3.5 transition-transform duration-200 ${
                      activeDropdown === 'pricing' ? 'rotate-180 text-emerald-500' : 'text-slate-400'
                    }`}
                  />
                </button>

                {activeDropdown === 'pricing' && (
                  <div
                    onMouseLeave={() => setActiveDropdown(null)}
                    className={`absolute top-full mt-2 w-80 overflow-hidden rounded-2xl border p-3 shadow-2xl backdrop-blur-xl z-50 ${
                      isDark ? 'border-white/10 bg-[#0d1524]' : 'border-slate-200 bg-white'
                    } ${isAr ? 'right-0' : 'left-0'}`}
                  >
                    <div className="space-y-1">
                      <a
                        href="#pricing"
                        onClick={() => setActiveDropdown(null)}
                        className="group flex items-center justify-between rounded-lg px-2.5 py-1.5 text-xs hover:bg-emerald-500/10 transition-colors"
                      >
                        <span className="font-bold text-emerald-500">
                          {isAr ? 'خوادم سطح المكتب السحابي (Remote Desktop)' : 'Cloud Desktop VPS (Remote Access)'}
                        </span>
                        <span className="text-[10px] font-mono text-emerald-400 font-bold">1,000 ج.م</span>
                      </a>

                      <a
                        href="#pricing"
                        onClick={() => setActiveDropdown(null)}
                        className="group flex items-center justify-between rounded-lg px-2.5 py-1.5 text-xs text-slate-700 dark:text-slate-300 hover:bg-emerald-500/10 hover:text-emerald-500 transition-colors"
                      >
                        <span>{isAr ? 'سيرفرات سحابية مدارة (Managed VPS)' : 'Managed Cloud VPS'}</span>
                        <span className="text-[10px] font-mono text-slate-400">NVMe</span>
                      </a>

                      <a
                        href="#pricing"
                        onClick={() => setActiveDropdown(null)}
                        className="group flex items-center justify-between rounded-lg px-2.5 py-1.5 text-xs text-slate-700 dark:text-slate-300 hover:bg-emerald-500/10 hover:text-emerald-500 transition-colors"
                      >
                        <span>{isAr ? 'سيرفرات KVM غير مدارة (Root)' : 'Unmanaged KVM VPS'}</span>
                        <span className="text-[10px] font-mono text-slate-400">1 Gbps</span>
                      </a>

                      <a
                        href="#packages"
                        onClick={() => setActiveDropdown(null)}
                        className="group flex items-center justify-between rounded-lg px-2.5 py-1.5 text-xs text-slate-700 dark:text-slate-300 hover:bg-emerald-500/10 hover:text-emerald-500 transition-colors"
                      >
                        <span className="font-bold text-emerald-600 dark:text-emerald-400">
                          {isAr ? 'باقات قطاع تقني كامل (ITaaS)' : 'IT as a Service (ITaaS)'}
                        </span>
                        <span className="text-[10px] font-mono text-cyan-400">Turnkey</span>
                      </a>
                    </div>
                  </div>
                )}
              </div>

              {/* 5. Guides (16) */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => handleDropdownToggle('guides')}
                  onMouseEnter={() => setActiveDropdown('guides')}
                  className={`inline-flex items-center gap-1 rounded-xl px-2.5 xl:px-3 py-1.5 text-xs font-bold transition-all cursor-pointer ${
                    activeDropdown === 'guides'
                      ? 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400'
                      : 'text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-slate-500/5'
                  }`}
                >
                  <span>{isAr ? `الأدلة الهندسية (${NUZUL_BLOG_POSTS.length})` : `Guides (${NUZUL_BLOG_POSTS.length})`}</span>
                  <ChevronDown
                    className={`h-3.5 w-3.5 transition-transform duration-200 ${
                      activeDropdown === 'guides' ? 'rotate-180 text-emerald-500' : 'text-slate-400'
                    }`}
                  />
                </button>

                {/* Guides Dropdown (Concise 2-column list of all 16 titles) */}
                {activeDropdown === 'guides' && (
                  <div
                    onMouseLeave={() => setActiveDropdown(null)}
                    className={`absolute top-full mt-2 w-[680px] overflow-hidden rounded-2xl border p-4 shadow-2xl backdrop-blur-xl z-50 ${
                      isDark ? 'border-white/10 bg-[#0d1524]' : 'border-slate-200 bg-white'
                    } ${isAr ? 'right-0' : 'left-0'}`}
                  >
                    <div className="flex items-center justify-between border-b border-current/10 pb-2 mb-2.5">
                      <span className="text-xs font-mono font-bold uppercase text-emerald-600 dark:text-emerald-400">
                        {isAr ? `المكتبة الهندسية (${NUZUL_BLOG_POSTS.length} دليل)` : `Guides (${NUZUL_BLOG_POSTS.length} Blueprints)`}
                      </span>
                      <a
                        href="#blog"
                        onClick={() => setActiveDropdown(null)}
                        className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 hover:underline inline-flex items-center gap-1"
                      >
                        <span>{isAr ? 'عرض الكل' : 'Browse All'}</span>
                        {isAr ? <ArrowLeft className="h-3 w-3" /> : <ArrowRight className="h-3 w-3" />}
                      </a>
                    </div>

                    <div className="grid grid-cols-2 gap-x-3 gap-y-1">
                      {NUZUL_BLOG_POSTS.map((art) => (
                        <button
                          key={art.id}
                          type="button"
                          onClick={() => {
                            setActiveDropdown(null);
                            setActiveArticle(art);
                          }}
                          className="group flex items-center justify-between rounded-lg px-2 py-1 text-start text-xs text-slate-700 dark:text-slate-300 hover:bg-emerald-500/10 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer w-full"
                        >
                          <span className="truncate font-medium">
                            {art.id}. {isAr ? art.title_ar.split(':')[0] : art.title_en.split(':')[0]}
                          </span>
                          <span className="text-[10px] font-mono text-slate-400 ml-1 shrink-0">
                            #{art.id}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* 6. Consultation */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => handleDropdownToggle('contact')}
                  onMouseEnter={() => setActiveDropdown('contact')}
                  className={`inline-flex items-center gap-1 rounded-xl px-2.5 xl:px-3 py-1.5 text-xs font-bold transition-all cursor-pointer ${
                    activeDropdown === 'contact'
                      ? 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400'
                      : 'text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-slate-500/5'
                  }`}
                >
                  <span>{isAr ? 'طلب استشارة' : 'Consultation'}</span>
                  <ChevronDown
                    className={`h-3.5 w-3.5 transition-transform duration-200 ${
                      activeDropdown === 'contact' ? 'rotate-180 text-emerald-500' : 'text-slate-400'
                    }`}
                  />
                </button>

                {activeDropdown === 'contact' && (
                  <div
                    onMouseLeave={() => setActiveDropdown(null)}
                    className={`absolute top-full mt-2 w-72 overflow-hidden rounded-2xl border p-3 shadow-2xl backdrop-blur-xl z-50 ${
                      isDark ? 'border-white/10 bg-[#0d1524]' : 'border-slate-200 bg-white'
                    } ${isAr ? 'right-0' : 'left-0'}`}
                  >
                    <div className="space-y-1">
                      <a
                        href="#contact"
                        onClick={() => setActiveDropdown(null)}
                        className="block rounded-lg px-2.5 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-emerald-500/10 hover:text-emerald-500 transition-colors"
                      >
                        {isAr ? 'معاينة هندسية فيزيائية للمقر' : 'On-Site Enterprise Inspection'}
                      </a>

                      <a
                        href={NUZUL_CONTACT.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between rounded-lg px-2.5 py-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/10 transition-colors"
                      >
                        <span>{isAr ? 'محادثة فورية (واتساب 24/7)' : 'WhatsApp Engineering 24/7'}</span>
                        <PhoneCall className="h-3 w-3" />
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Action Zone */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
            {/* 1. Official LinkedIn Button */}
            <a
              href={NUZUL_CONTACT.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-1.5 rounded-xl bg-[#0a66c2] hover:bg-[#004182] text-white px-3 py-1.5 text-xs font-bold transition-all shadow-sm cursor-pointer"
              title="Nuzul Tech Official LinkedIn"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-3.5 w-3.5 fill-current" />
              <span>LinkedIn</span>
            </a>

            {/* 2. Direct WhatsApp Action */}
            <a
              href={NUZUL_CONTACT.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white px-3 py-1.5 text-xs font-bold transition-all shadow-sm hover:shadow cursor-pointer"
              title={isAr ? 'تواصل عبر واتساب' : 'Chat via WhatsApp'}
            >
              <PhoneCall className="h-3.5 w-3.5" />
              <span>{isAr ? 'واتساب' : 'WhatsApp'}</span>
            </a>

            {/* 3. Cart Trigger */}
            <button
              type="button"
              onClick={() => setIsCartOpen(true)}
              aria-label={isAr ? 'عربة الخدمات والسيرفرات' : 'Services & Server Cart'}
              className={`relative inline-flex h-9 w-9 items-center justify-center rounded-xl border transition-all cursor-pointer ${
                isDark
                  ? 'border-white/10 bg-white/[0.04] text-slate-300 hover:border-emerald-500/40 hover:text-white'
                  : 'border-slate-200 bg-slate-100 text-slate-700 hover:border-emerald-500 hover:text-slate-900'
              }`}
            >
              <ShoppingCart className="h-4 w-4" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 flex h-4.5 min-w-[1.125rem] items-center justify-center rounded-full bg-emerald-500 px-1 font-mono text-[10px] font-bold text-white shadow-md">
                  {cartCount}
                </span>
              )}
            </button>

            {/* 4. Primary CTA: Portal (Compact on small phones, full text on sm+) */}
            <button
              type="button"
              onClick={() => setIsClientAreaOpen(true)}
              className="btn btn-primary inline-flex h-9 items-center gap-1.5 px-2.5 sm:px-4 text-xs font-bold uppercase tracking-wider cursor-pointer shadow-sm"
              title={isAr ? 'بوابة العميل' : 'Portal'}
            >
              <User className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">{isAr ? 'بوابة العميل' : 'Portal'}</span>
            </button>

            {/* 5. Mobile & Tablet 3-Stripes / Hamburger Menu (Prominent, High-Contrast & Always Visible on Mobile) */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`inline-flex h-9 w-9 items-center justify-center rounded-xl border transition-all lg:hidden cursor-pointer shadow-sm ${
                mobileMenuOpen
                  ? 'border-emerald-500/60 bg-emerald-500/20 text-emerald-400 ring-2 ring-emerald-500/30'
                  : isDark
                  ? 'border-emerald-500/40 bg-emerald-500/10 text-white hover:border-emerald-500 hover:bg-emerald-500/20'
                  : 'border-emerald-600/30 bg-emerald-50 text-slate-900 hover:bg-emerald-100'
              }`}
              aria-label={isAr ? 'قائمة خريطة الموقع والروابط' : 'Toggle navigation menu'}
              title={isAr ? 'روابط وخريطة الموقع' : 'Navigation Menu'}
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5 stroke-[2.5]" />
              ) : (
                <Menu className="h-5 w-5 stroke-[2.5] text-emerald-500 dark:text-emerald-400" />
              )}
            </button>
          </div>
        </nav>
      </div>

      {/* Responsive Mobile Drawer with Backdrop Overlay & Organized Hierarchical Accordions */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop Overlay */}
          <div
            className="fixed inset-0 top-17 z-40 bg-black/60 backdrop-blur-sm lg:hidden transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer Container */}
          <div
            className={`fixed inset-x-0 top-17 z-50 max-h-[calc(100vh-4.25rem)] overflow-y-auto border-b px-4 sm:px-6 py-5 shadow-2xl lg:hidden transition-all duration-300 ${
              isDark ? 'bg-[#0a111c]/98 border-white/10 text-white' : 'bg-white/98 border-slate-200 text-slate-900'
            }`}
          >
            <div className="space-y-3">
              {/* Quick Utility Row */}
              <div
                className={`flex items-center justify-between rounded-2xl border p-2 text-xs ${
                  isDark ? 'bg-[#0d1524] border-white/10' : 'bg-slate-100 border-slate-200'
                }`}
              >
                {/* Language Switch */}
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={() => setLocale('ar')}
                    className={`rounded-lg px-2.5 py-1 font-bold text-xs cursor-pointer ${
                      isAr ? 'bg-emerald-500 text-white' : 'text-slate-400'
                    }`}
                  >
                    العربية
                  </button>
                  <button
                    type="button"
                    onClick={() => setLocale('en')}
                    className={`rounded-lg px-2.5 py-1 font-bold text-xs cursor-pointer ${
                      !isAr ? 'bg-emerald-500 text-white' : 'text-slate-400'
                    }`}
                  >
                    EN
                  </button>
                </div>

                {/* Theme Switcher */}
                <button
                  type="button"
                  onClick={toggleTheme}
                  className={`flex items-center gap-1.5 rounded-lg border px-2.5 py-1 text-xs font-bold cursor-pointer ${
                    isDark ? 'border-white/10 bg-white/5 text-amber-300' : 'border-slate-300 bg-white text-indigo-600'
                  }`}
                  aria-label="Toggle Theme"
                >
                  {isDark ? <Sun className="h-3.5 w-3.5 text-amber-400" /> : <Moon className="h-3.5 w-3.5 text-indigo-600" />}
                  <span>{isDark ? 'النهار' : 'الليل'}</span>
                </button>

                {/* Currency */}
                <div className="flex items-center gap-1 font-mono text-xs">
                  {(['EGP', 'USD', 'SAR'] as const).map((curr) => (
                    <button
                      key={curr}
                      type="button"
                      onClick={() => setCurrency(curr)}
                      className={`rounded px-1.5 py-0.5 cursor-pointer ${
                        currency === curr ? 'bg-emerald-500 text-white font-bold' : 'text-slate-400'
                      }`}
                    >
                      {curr}
                    </button>
                  ))}
                </div>
              </div>

              {/* Mobile Nav Accordions with Concise Lists */}
              <div className="space-y-2">
                {/* Header Label: Full Site Navigation */}
                <div className="flex items-center justify-between px-1 text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                  <span>{isAr ? 'خريطة أقسام وخدمات الموقع' : 'Full Site Map & Navigation'}</span>
                  <span className="text-emerald-500 font-bold">{NUZUL_SERVICES.length + NUZUL_CASE_STUDIES.length + NUZUL_BLOG_POSTS.length} {isAr ? 'رابط' : 'Links'}</span>
                </div>

                {/* 1. Services by Category Pillar (Software, Cloud, Security) */}
                <div
                  className={`rounded-2xl border overflow-hidden transition-colors ${
                    isDark ? 'bg-[#0d1524] border-white/10' : 'bg-slate-50 border-slate-200'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => handleMobileSectionToggle('m-services')}
                    className="w-full flex items-center justify-between p-3.5 text-start font-bold text-xs cursor-pointer"
                  >
                    <div className="flex items-center gap-2">
                      <Layers className="h-4 w-4 text-emerald-500" />
                      <span>{isAr ? `دليل كافة الخدمات التقنية (${NUZUL_SERVICES.length})` : `All Technical Services (${NUZUL_SERVICES.length})`}</span>
                    </div>
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-200 ${
                        mobileExpandedSection === 'm-services' ? 'rotate-180 text-emerald-500' : 'text-slate-400'
                      }`}
                    />
                  </button>
                  {mobileExpandedSection === 'm-services' && (
                    <div className="px-3 pb-3 pt-1 space-y-3 border-t border-current/10 max-h-72 overflow-y-auto">
                      {/* Software Pillar */}
                      <div className="space-y-1">
                        <div className="text-[10px] font-bold font-mono text-emerald-600 dark:text-emerald-400 uppercase">
                          {isAr ? '1. البرمجيات والحلول الرقمية' : '1. Software & Digital Solutions'}
                        </div>
                        {softwareServices.map((s) => (
                          <a
                            key={s.id}
                            href="#services"
                            onClick={() => setMobileMenuOpen(false)}
                            className="block py-1 px-2 rounded-lg text-xs text-slate-300 dark:text-slate-300 hover:bg-emerald-500/10 hover:text-emerald-500 transition-colors"
                          >
                            • {isAr ? s.title_ar : s.title_en}
                          </a>
                        ))}
                      </div>

                      {/* Infrastructure & Cloud Pillar */}
                      <div className="space-y-1 border-t border-white/5 pt-2">
                        <div className="text-[10px] font-bold font-mono text-emerald-600 dark:text-emerald-400 uppercase">
                          {isAr ? '2. البنية التحتية والسحابية' : '2. Infrastructure & Cloud'}
                        </div>
                        {infraCloudServices.map((s) => (
                          <a
                            key={s.id}
                            href="#services"
                            onClick={() => setMobileMenuOpen(false)}
                            className="block py-1 px-2 rounded-lg text-xs text-slate-300 dark:text-slate-300 hover:bg-emerald-500/10 hover:text-emerald-500 transition-colors"
                          >
                            • {isAr ? s.title_ar : s.title_en}
                          </a>
                        ))}
                      </div>

                      {/* Security & Observability Pillar */}
                      <div className="space-y-1 border-t border-white/5 pt-2">
                        <div className="text-[10px] font-bold font-mono text-emerald-600 dark:text-emerald-400 uppercase">
                          {isAr ? '3. الأمن والمراقبة' : '3. Security & Observability'}
                        </div>
                        {securityObsServices.map((s) => (
                          <a
                            key={s.id}
                            href="#services"
                            onClick={() => setMobileMenuOpen(false)}
                            className="block py-1 px-2 rounded-lg text-xs text-slate-300 dark:text-slate-300 hover:bg-emerald-500/10 hover:text-emerald-500 transition-colors"
                          >
                            • {isAr ? s.title_ar : s.title_en}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* 2. Live System Demos */}
                <div
                  className={`rounded-2xl border overflow-hidden transition-colors ${
                    isDark ? 'bg-[#0d1524] border-white/10' : 'bg-slate-50 border-slate-200'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => handleMobileSectionToggle('m-demos')}
                    className="w-full flex items-center justify-between p-3.5 text-start font-bold text-xs cursor-pointer"
                  >
                    <div className="flex items-center gap-2">
                      <Activity className="h-4 w-4 text-emerald-500" />
                      <span>{isAr ? 'المعاينة الحية للأنظمة الطبية والعيادات' : 'Live Clinical & Hospital Demos'}</span>
                    </div>
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-200 ${
                        mobileExpandedSection === 'm-demos' ? 'rotate-180 text-emerald-500' : 'text-slate-400'
                      }`}
                    />
                  </button>
                  {mobileExpandedSection === 'm-demos' && (
                    <div className="px-3 pb-3 pt-1 space-y-1 border-t border-current/10">
                      {liveDemosList.map((d) => (
                        <a
                          key={d.id}
                          href="#live-demos"
                          onClick={() => setMobileMenuOpen(false)}
                          className="block py-1 px-2 rounded-lg text-xs text-slate-300 hover:bg-emerald-500/10 hover:text-emerald-500 transition-colors"
                        >
                          • {isAr ? d.titleAr : d.titleEn}
                        </a>
                      ))}
                    </div>
                  )}
                </div>

                {/* 3. Case Studies (12) */}
                <div
                  className={`rounded-2xl border overflow-hidden transition-colors ${
                    isDark ? 'bg-[#0d1524] border-white/10' : 'bg-slate-50 border-slate-200'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => handleMobileSectionToggle('m-cases')}
                    className="w-full flex items-center justify-between p-3.5 text-start font-bold text-xs cursor-pointer"
                  >
                    <div className="flex items-center gap-2">
                      <Shield className="h-4 w-4 text-emerald-500" />
                      <span>{isAr ? `قصص نجاح عملائنا ودراسات الحالة التقنية (${NUZUL_CASE_STUDIES.length})` : `Client Success Stories & Case Studies (${NUZUL_CASE_STUDIES.length})`}</span>
                    </div>
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-200 ${
                        mobileExpandedSection === 'm-cases' ? 'rotate-180 text-emerald-500' : 'text-slate-400'
                      }`}
                    />
                  </button>
                  {mobileExpandedSection === 'm-cases' && (
                    <div className="px-3 pb-3 pt-1 space-y-1 border-t border-current/10 max-h-60 overflow-y-auto">
                      {NUZUL_CASE_STUDIES.map((c) => (
                        <a
                          key={c.id}
                          href="#projects"
                          onClick={() => setMobileMenuOpen(false)}
                          className="block py-1 px-2 rounded-lg text-xs text-slate-300 hover:bg-emerald-500/10 hover:text-emerald-500 transition-colors"
                        >
                          • {c.id}. {isAr ? c.title_ar.split('—')[0] : c.title_en.split('—')[0]}
                        </a>
                      ))}
                    </div>
                  )}
                </div>

              {/* 4. Servers & Pricing */}
              <div
                className={`rounded-2xl border overflow-hidden transition-colors ${
                  isDark ? 'bg-[#0d1524] border-white/10' : 'bg-slate-50 border-slate-200'
                }`}
              >
                <button
                  type="button"
                  onClick={() => handleMobileSectionToggle('m-pricing')}
                  className="w-full flex items-center justify-between p-3.5 text-start font-bold text-xs cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <Server className="h-4 w-4 text-emerald-500" />
                    <span>{isAr ? 'السيرفرات والأسعار وباقات ITaaS' : 'Servers & ITaaS Pricing'}</span>
                  </div>
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${
                      mobileExpandedSection === 'm-pricing' ? 'rotate-180 text-emerald-500' : 'text-slate-400'
                    }`}
                  />
                </button>
                {mobileExpandedSection === 'm-pricing' && (
                  <div className="px-3 pb-3 pt-1 space-y-1 border-t border-current/10">
                    <a
                      href="#pricing"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1 px-2 rounded-lg text-xs text-slate-300 hover:bg-emerald-500/10 hover:text-emerald-500 transition-colors"
                    >
                      • {isAr ? 'خوادم سطح المكتب السحابي (1000 ج.م)' : 'Cloud Desktop VPS (1,000 EGP)'}
                    </a>
                    <a
                      href="#pricing"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1 px-2 rounded-lg text-xs text-slate-300 hover:bg-emerald-500/10 hover:text-emerald-500 transition-colors"
                    >
                      • {isAr ? 'السيرفرات السحابية المدارة (Managed VPS)' : 'Managed Cloud VPS'}
                    </a>
                    <a
                      href="#packages"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1 px-2 rounded-lg text-xs text-slate-300 hover:bg-emerald-500/10 hover:text-emerald-500 transition-colors"
                    >
                      • {isAr ? 'باقات قطاع تقني كامل كخدمة (ITaaS)' : 'IT as a Service (ITaaS)'}
                    </a>
                  </div>
                )}
              </div>

              {/* 5. Guides (22) */}
              <div
                className={`rounded-2xl border overflow-hidden transition-colors ${
                  isDark ? 'bg-[#0d1524] border-white/10' : 'bg-slate-50 border-slate-200'
                }`}
              >
                <button
                  type="button"
                  onClick={() => handleMobileSectionToggle('m-guides')}
                  className="w-full flex items-center justify-between p-3.5 text-start font-bold text-xs cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-emerald-500" />
                    <span>{isAr ? `الأدلة الهندسية والمدونة (${NUZUL_BLOG_POSTS.length})` : `Guides & Articles (${NUZUL_BLOG_POSTS.length})`}</span>
                  </div>
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${
                      mobileExpandedSection === 'm-guides' ? 'rotate-180 text-emerald-500' : 'text-slate-400'
                    }`}
                  />
                </button>
                {mobileExpandedSection === 'm-guides' && (
                  <div className="px-3 pb-3 pt-1 space-y-1 border-t border-current/10 max-h-60 overflow-y-auto">
                    {NUZUL_BLOG_POSTS.map((a) => (
                      <button
                        key={a.id}
                        type="button"
                        onClick={() => {
                          setMobileMenuOpen(false);
                          setActiveArticle(a);
                        }}
                        className="block w-full text-start py-1 px-2 rounded-lg text-xs text-slate-300 hover:bg-emerald-500/10 hover:text-emerald-500 transition-colors cursor-pointer"
                      >
                        • {a.id}. {isAr ? a.title_ar.split(':')[0] : a.title_en.split(':')[0]}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* 6. Consultation & WhatsApp */}
              <div
                className={`rounded-2xl border overflow-hidden transition-colors ${
                  isDark ? 'bg-[#0d1524] border-white/10' : 'bg-slate-50 border-slate-200'
                }`}
              >
                <button
                  type="button"
                  onClick={() => handleMobileSectionToggle('m-consult')}
                  className="w-full flex items-center justify-between p-3.5 text-start font-bold text-xs cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <PhoneCall className="h-4 w-4 text-emerald-500" />
                    <span>{isAr ? 'طلب استشارة والتواصل المباشر' : 'Consultation & Direct Contact'}</span>
                  </div>
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${
                      mobileExpandedSection === 'm-consult' ? 'rotate-180 text-emerald-500' : 'text-slate-400'
                    }`}
                  />
                </button>
                {mobileExpandedSection === 'm-consult' && (
                  <div className="px-3 pb-3 pt-1 space-y-1.5 border-t border-current/10">
                    <a
                      href="#contact"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1 px-2 rounded-lg text-xs text-slate-300 hover:bg-emerald-500/10 hover:text-emerald-500 transition-colors"
                    >
                      • {isAr ? 'معاينة هندسية فيزيائية لمقر المنشأة' : 'On-Site Physical Inspection'}
                    </a>
                    <a
                      href={NUZUL_CONTACT.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between py-1 px-2 rounded-lg text-xs text-emerald-400 font-bold bg-emerald-500/10"
                    >
                      <span>• {isAr ? 'محادثة فورية (واتساب 24/7): 01140565057' : 'WhatsApp 24/7: +201140565057'}</span>
                      <PhoneCall className="h-3 w-3" />
                    </a>
                    <a
                      href={`tel:${NUZUL_CONTACT.rawPhone2}`}
                      className="block py-1 px-2 rounded-lg text-xs text-slate-300 hover:text-emerald-400"
                    >
                      • {isAr ? 'هاتف الطوارئ الهندسي: 01011678830' : 'Direct Line: +201011678830'}
                    </a>
                  </div>
                )}
              </div>
            </div>

            {/* Mobile Actions: WhatsApp, LinkedIn, Portal */}
            <div className="space-y-2 pt-2">
              <a
                href={NUZUL_CONTACT.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl bg-[#0a66c2] p-2.5 text-xs font-bold text-white shadow-sm"
              >
                <Linkedin className="h-4 w-4 fill-current" />
                <span>Nuzul Tech Official LinkedIn</span>
              </a>

              <a
                href={NUZUL_CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl bg-emerald-600 p-2.5 text-xs font-bold text-white shadow-sm"
              >
                <PhoneCall className="h-4 w-4" />
                <span>{isAr ? 'تواصل معنا مباشرة عبر واتساب' : 'Chat Directly via WhatsApp'}</span>
              </a>

              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsClientAreaOpen(true);
                }}
                className="btn btn-primary w-full py-2.5 text-xs font-bold uppercase tracking-wider cursor-pointer shadow-md"
              >
                <User className="h-4 w-4" />
                <span>{isAr ? 'دخول بوابة عملاء نُزول تِك' : 'Nuzul Tech Client Portal'}</span>
              </button>
            </div>
          </div>
        </div>
      </>
    )}
  </header>
  );
};
