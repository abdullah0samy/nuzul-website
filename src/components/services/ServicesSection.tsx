import React, { useState } from 'react';
import {
  Code,
  Smartphone,
  ShoppingBag,
  Layout,
  Layers,
  Server,
  Terminal,
  Monitor,
  HardDrive,
  Mail,
  Globe2,
  AtSign,
  PhoneCall,
  ShieldCheck,
  Activity,
  Database,
  Cloud,
  Cpu,
  Eye,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  BookOpen,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { NUZUL_SERVICES, NUZUL_CONTACT } from '../../data/nuzulData';
import { ServiceCategoryKey } from '../../types';

export const ServicesSection: React.FC = () => {
  const { locale, theme } = useApp();
  const isAr = locale === 'ar';
  const isDark = theme === 'dark';

  const [activeCategory, setActiveCategory] = useState<ServiceCategoryKey>('all');
  const [showAll, setShowAll] = useState(false);

  const iconMap: Record<string, React.ElementType> = {
    Code,
    Smartphone,
    ShoppingBag,
    Layout,
    Layers,
    Server,
    Terminal,
    Monitor,
    HardDrive,
    Mail,
    Globe2,
    AtSign,
    PhoneCall,
    ShieldCheck,
    Activity,
    Database,
    Cloud,
    Cpu,
    Eye,
    CheckCircle2,
  };

  const filteredServices = NUZUL_SERVICES.filter((s) => {
    if (activeCategory === 'all') return true;
    return s.category_key === activeCategory;
  });

  const INITIAL_COUNT = 8;
  const displayedServices =
    activeCategory === 'all' && !showAll
      ? filteredServices.slice(0, INITIAL_COUNT)
      : filteredServices;

  const softwareCount = NUZUL_SERVICES.filter((s) => s.category_key === 'software').length;
  const infraCloudCount = NUZUL_SERVICES.filter((s) => s.category_key === 'infra_cloud').length;
  const securityObsCount = NUZUL_SERVICES.filter((s) => s.category_key === 'security_obs').length;

  const categories: { id: ServiceCategoryKey; labelAr: string; labelEn: string }[] = [
    { id: 'all', labelAr: `جميع الخدمات (${NUZUL_SERVICES.length})`, labelEn: `All Services (${NUZUL_SERVICES.length})` },
    { id: 'infra_cloud', labelAr: `البنية التحتية والسحابية (${infraCloudCount})`, labelEn: `Infrastructure & Cloud (${infraCloudCount})` },
    { id: 'security_obs', labelAr: `الأمن والمراقبة (${securityObsCount})`, labelEn: `Security & Observability (${securityObsCount})` },
    { id: 'software', labelAr: `البرمجيات والحلول الرقمية (${softwareCount})`, labelEn: `Software & Digital Solutions (${softwareCount})` },
  ];

  return (
    <section
      id="services"
      className={`relative overflow-hidden scroll-mt-24 px-5 py-20 sm:py-24 sm:px-6 lg:px-8 border-t transition-colors ${
        isDark ? 'bg-[#070c14] border-white/10 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'
      }`}
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="eyebrow-mono justify-center text-emerald-600 dark:text-emerald-400">
            <ShieldCheck className="h-4 w-4" />
            <span>{isAr ? 'خدمات نُزول تِك المتكاملة' : 'NUZUL TECH SERVICES'}</span>
          </div>

          <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">
            {isAr ? 'كل ما يحتاجه عملك تحت سقف واحد' : 'Everything Your Business Needs Under One Roof'}
          </h2>

          <p
            className={`mt-4 text-base leading-relaxed ${
              isDark ? 'text-slate-300' : 'text-slate-600'
            }`}
          >
            {isAr
              ? 'حلول تقنية متكاملة ومترابطة للمؤسسات: من تجهيز الشبكات الفيزيائية والسنترال وجدران الحماية، إلى الخوادم السحابية والبرمجيات المخصصة.'
              : 'Integrated enterprise IT solutions: from physical cabling, VoIP PBX, and firewalls to high-compute cloud VPS and bespoke hospital ERP systems.'}
          </p>

          {/* Under One Roof Core Badges */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-xs font-mono">
            {[
              { ar: 'حلول الأمن والشبكات', en: 'Enterprise Security & Networks' },
              { ar: 'أنظمة السنترال والاتصالات', en: 'Unified Telephony & VoIP' },
              { ar: 'الأنظمة السحابية والـ ERP', en: 'Enterprise Cloud & ERP Systems' },
              { ar: 'تطبيقات الويب والموبايل', en: 'Web & Mobile Applications' },
              { ar: 'النسخ الاحتياطي واستعادة البيانات', en: 'Disaster Recovery & Backup' },
              { ar: 'المراقبة السيبرانية المستمرة', en: '24/7 Threat Monitoring' },
            ].map((item, idx) => (
              <span
                key={idx}
                className={`inline-flex items-center gap-1.5 rounded-xl border px-3 py-1.5 font-bold transition-colors ${
                  isDark
                    ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-300'
                    : 'border-emerald-300 bg-emerald-50 text-emerald-900 shadow-sm'
                }`}
              >
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                <span>{isAr ? item.ar : item.en}</span>
              </span>
            ))}
          </div>

          {/* Category Filter Tabs */}
          <div className="mt-9 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id as any)}
                className={`rounded-full px-5 py-2.5 text-xs font-bold transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/25 ring-2 ring-emerald-400/40'
                    : isDark
                    ? 'bg-[#0d1524] text-slate-300 hover:bg-white/10 hover:text-white border border-white/10'
                    : 'bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200 shadow-sm'
                }`}
              >
                {isAr ? cat.labelAr : cat.labelEn}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid with High-Contrast Enhanced Borders & Glow */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {displayedServices.map((service) => {
            const Icon = iconMap[service.icon] || Server;
            const title = isAr ? service.title_ar : service.title_en;
            const desc = isAr ? service.description_ar : service.description_en;
            const categoryLabel = isAr ? service.category_ar : service.category_en;
            const story = isAr ? service.useCaseStory_ar : service.useCaseStory_en;
            const features = isAr ? service.features_ar : service.features_en;

            return (
              <article
                key={service.id}
                className={`group relative flex flex-col justify-between rounded-3xl border-2 p-6 transition-all duration-300 hover:-translate-y-1.5 ${
                  isDark
                    ? 'border-emerald-500/25 bg-[#0d1524] hover:border-emerald-400 shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_15px_35px_rgba(16,185,129,0.18)]'
                    : 'border-slate-200 bg-white hover:border-emerald-500 shadow-md hover:shadow-xl'
                }`}
              >
                {/* Top Subtle Color Accent Line */}
                <div className="absolute top-0 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 transition-all group-hover:bg-emerald-500 group-hover:text-white shadow-sm">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="rounded-lg border px-2.5 py-1 font-mono text-[10px] font-bold text-slate-400 border-current/10">
                      {categoryLabel}
                    </span>
                  </div>

                  <h3 className="mt-4 text-base font-bold leading-snug group-hover:text-emerald-500 transition-colors">
                    {title}
                  </h3>

                  <p
                    className={`mt-2 text-xs leading-relaxed ${
                      isDark ? 'text-slate-300' : 'text-slate-600'
                    }`}
                  >
                    {desc}
                  </p>

                  {/* Features Checklist */}
                  <div className="mt-4 space-y-1.5 border-t border-current/10 pt-3">
                    {features.map((feat, i) => (
                      <div
                        key={i}
                        className={`flex items-start gap-1.5 text-[11px] ${
                          isDark ? 'text-slate-300' : 'text-slate-700'
                        }`}
                      >
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Real-World Use Case Story Callout Box */}
                  <div
                    className={`mt-4 rounded-2xl border p-3 text-[11px] leading-relaxed transition-colors ${
                      isDark
                        ? 'bg-emerald-950/20 border-emerald-500/30 text-slate-200'
                        : 'bg-emerald-50/80 border-emerald-200 text-slate-800'
                    }`}
                  >
                    <div className="flex items-center gap-1.5 font-bold text-emerald-600 dark:text-emerald-400 mb-1">
                      <BookOpen className="h-3.5 w-3.5 text-emerald-500" />
                      <span>{isAr ? 'قصة نجاح وتطبيق عملي:' : 'Real-World Outcome:'}</span>
                    </div>
                    <p>{story}</p>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-current/10 flex items-center justify-between">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1 text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline cursor-pointer"
                  >
                    <span>{isAr ? 'طلب الخدمة / استشارة' : 'Request Service Quote'}</span>
                    {isAr ? <ArrowLeft className="h-3 w-3" /> : <ArrowRight className="h-3 w-3" />}
                  </a>

                  <span className="text-[10px] font-mono text-slate-400">
                    SLA 24/7
                  </span>
                </div>
              </article>
            );
          })}
        </div>

        {/* Show More / Show Less Toggle Button for Services */}
        {activeCategory === 'all' && filteredServices.length > INITIAL_COUNT && (
          <div className="mt-12 flex flex-col items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-600/25 transition-all duration-300 hover:scale-105 cursor-pointer ring-2 ring-emerald-400/40"
            >
              {showAll ? (
                <>
                  <span>{isAr ? 'عرض خدمات أقل' : 'Show Fewer Services'}</span>
                  <ChevronUp className="h-4 w-4" />
                </>
              ) : (
                <>
                  <span>
                    {isAr
                      ? `عرض باقي الخدمات (${filteredServices.length - INITIAL_COUNT} خدمة إضافية)`
                      : `View All ${filteredServices.length} Services`}
                  </span>
                  <ChevronDown className="h-4 w-4" />
                </>
              )}
            </button>
            <span className="text-xs font-mono text-slate-400">
              {isAr
                ? `يتم عرض ${displayedServices.length} من أصل ${filteredServices.length} خدمة متكاملة`
                : `Showing ${displayedServices.length} of ${filteredServices.length} total services`}
            </span>
          </div>
        )}
      </div>
    </section>
  );
};
