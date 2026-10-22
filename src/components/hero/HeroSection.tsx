import React, { useState } from 'react';
import {
  ShieldCheck,
  ArrowRight,
  ArrowLeft,
  PhoneCall,
  Server,
  CheckCircle2,
  Building2,
  Stethoscope,
  Briefcase,
  Lock,
  Cpu,
  Layers,
  Sparkles,
  Zap,
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { NUZUL_CONTACT } from '../../data/nuzulData';
import { PaymentBadges } from '../common/PaymentBadges';
import { RevealOnScroll } from '../common/RevealOnScroll';

type IndustrySector = 'healthcare' | 'enterprise' | 'retail';

export const HeroSection: React.FC = () => {
  const { locale, theme } = useApp();
  const isAr = locale === 'ar';
  const isDark = theme === 'dark';

  const [activeSector, setActiveSector] = useState<IndustrySector>('healthcare');

  const sectorData: Record<
    IndustrySector,
    {
      titleAr: string;
      titleEn: string;
      tier1Ar: string;
      tier1En: string;
      tier2Ar: string;
      tier2En: string;
      tier3Ar: string;
      tier3En: string;
      highlightAr: string;
      highlightEn: string;
    }
  > = {
    healthcare: {
      titleAr: 'المستشفيات والمراكز الطبية',
      titleEn: 'Hospitals & Medical Centers',
      tier1Ar: 'ربط العيادات، سنترال VoIP للطوارئ، شبكات طبية معزولة',
      tier1En: 'Clinic interconnect, emergency VoIP PBX, isolated medical LAN',
      tier2Ar: 'خوادم سحابية مشفرة لملفات المرضى EMR مع نسخ احتياطي ثلاثي',
      tier2En: 'Encrypted HIPAA-compliant Cloud for EMR with 3x backup redundancy',
      tier3Ar: 'نظام إدارة المستشفيات (HIS) الشامل + الصيدليات والمختبرات',
      tier3En: 'Enterprise HIS hospital system + pharmacy, billing & labs core',
      highlightAr: 'مطبق في كبرى مستشفيات القاهرة والمحافظات',
      highlightEn: 'Deployed across premier hospitals in Cairo & Alexandria',
    },
    enterprise: {
      titleAr: 'الشركات والمؤسسات الاستثمارية',
      titleEn: 'Enterprises & Investment Groups',
      tier1Ar: 'تجهيز غرف السيرفرات (Racks)، شبكات VPN بين الفروع، جدران حماية',
      tier1En: 'Server rack installations, multi-branch site-to-site VPN, firewalls',
      tier2Ar: 'خوادم VPS مخصصة، حماية ضد الاختراق، استضافة قواعد بيانات ERP',
      tier2En: 'Dedicated VPS, advanced anti-intrusion protection, ERP database cloud',
      tier3Ar: 'أنظمة ERP مخصصة، بريد إلكتروني مؤسسي، لوحات قيادة تنفيذية',
      tier3En: 'Custom ERP systems, enterprise secure email, executive dashboards',
      highlightAr: 'استقرار تشغيلي مستمر للعمليات الإدارية والمالية',
      highlightEn: 'Zero-disruption operational continuity for business operations',
    },
    retail: {
      titleAr: 'المنصات التجارية والخدمية',
      titleEn: 'Digital Commerce & Service Platforms',
      tier1Ar: 'كاميرات مراقبة ذكية، شبكات نقاط البيع POS، كول سنتر موحد',
      tier1En: 'Smart IP CCTV, POS high-reliability network, unified call center',
      tier2Ar: 'سيرفرات سحابية سريعة تتحمل ذروة الزوار مع CDN وتسريع كاش',
      tier2En: 'High-compute cloud handling traffic surges with NVMe caching',
      tier3Ar: 'متاجر وتطبيقات موبايل تفاعلية، بوابات دفع إلكتروني محلية',
      tier3En: 'Mobile apps & e-commerce portals with instant Egyptian payment gates',
      highlightAr: 'أداء فائق السرعة وزيادة معدل تحويل المبيعات',
      highlightEn: 'Ultra-fast load times boosting sales conversions by 140%',
    },
  };

  const currentSector = sectorData[activeSector];

  return (
    <section
      className={`relative overflow-hidden px-5 pt-8 pb-20 sm:pt-12 sm:pb-24 sm:px-6 lg:px-8 transition-colors ${
        isDark
          ? 'bg-gradient-to-b from-[#070c14] via-[#09101c] to-[#070c14] text-white'
          : 'bg-gradient-to-b from-white via-slate-50 to-slate-100 text-slate-900'
      }`}
    >
      {/* Background ambient lighting */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[520px] w-[950px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.12)_0%,transparent_70%)] blur-[120px]"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl">
        <div className="grid w-full items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          {/* Left Column: Mission, Heading & Badges */}
          <RevealOnScroll direction="up" delay={0.05} threshold={0.05}>
            <div className="relative z-10 max-w-2xl">
              {/* Eyebrow */}
              <div className="eyebrow-mono text-emerald-600 dark:text-emerald-400">
                <ShieldCheck className="h-4 w-4" />
                <span>{isAr ? 'قطاع تكنولوجيا معلومات متكامل (ITaaS) لمؤسستك' : 'Enterprise IT as a Service (ITaaS)'}</span>
              </div>

              {/* Main Headline */}
              <h1 className="mt-4 text-[clamp(2.1rem,4.2vw,3.6rem)] font-black leading-[1.14] tracking-tight">
                <span className={`block ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  {isAr ? 'بنيتك التحتية، ضيفنا،' : 'Your Infrastructure, Our Guest,'}
                </span>
                <span
                  className={`block text-transparent bg-clip-text ${
                    isDark
                      ? 'bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400'
                      : 'bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-700'
                  }`}
                >
                  {isAr ? 'وفي يد أمينة' : 'In Trusted Hands'}
                </span>
              </h1>

              {/* Subtitle */}
              <p
                className={`mt-5 max-w-xl text-base sm:text-lg leading-relaxed ${
                  isDark ? 'text-slate-300' : 'text-slate-600'
                }`}
              >
                {isAr
                  ? 'منظومة تقنية متكاملة للمؤسسات المصرية: من تجهيز الشبكات الفيزيائية والسنترال وجدران الحماية، إلى الخوادم السحابية والأنظمة البرمجية المخصصة — مع دعم هندسي محلي ميداني وسحابي 24/7.'
                  : 'Integrated IT architecture for Egyptian businesses: physical cabling, VoIP PBX, firewalls, cloud VPS, and custom ERP systems with 24/7 local on-site and remote engineering.'}
              </p>

              {/* CTAs */}
              <div className="mt-8 flex flex-col gap-3.5 sm:flex-row">
                <a
                  href="#services"
                  className="btn btn-primary btn-lg group cursor-pointer shadow-lg shadow-emerald-500/20"
                >
                  <span>{isAr ? 'استكشف الخدمات والحلول' : 'Explore Solutions'}</span>
                  {isAr ? (
                    <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                  ) : (
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  )}
                </a>

                <a
                  href="#contact"
                  className={`btn btn-secondary btn-lg flex items-center gap-2 cursor-pointer transition-colors ${
                    isDark
                      ? 'border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10'
                      : 'border-emerald-500/40 text-emerald-700 hover:bg-emerald-50 shadow-sm'
                  }`}
                >
                  <PhoneCall className="h-4 w-4 text-emerald-500" />
                  <span>{isAr ? 'طلب استشارة هندسية' : 'Request Consultation'}</span>
                </a>
              </div>

              {/* Core Trust Indicators */}
              <div
                className={`mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-semibold ${
                  isDark ? 'text-slate-300' : 'text-slate-700'
                }`}
              >
                <div className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  <span>{isAr ? 'مهندسون بالمقر في القاهرة' : 'Local Cairo Engineers'}</span>
                </div>
                <div className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  <span>{isAr ? 'ضمان استمرارية تشغيل 99.98%' : '99.98% Guaranteed Uptime'}</span>
                </div>
                <div className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  <span>{isAr ? 'عقود صيانة وتشغيل SLA' : 'SLA Maintenance Contracts'}</span>
                </div>
              </div>

              {/* Verified Egyptian Payment Rails (Sleek Clean Strip) */}
              <div className="mt-7 pt-5 border-t border-current/10">
                <div className="text-[11px] font-mono text-slate-400 mb-2">
                  {isAr ? 'طرق الدفع والتعاقد الفورية في مصر:' : 'Instant Payment & Billing Rails in Egypt:'}
                </div>
                <PaymentBadges />
              </div>
            </div>
          </RevealOnScroll>

          {/* Right Column: High-End Enterprise Solution Matrix & Architecture Showcase */}
          <RevealOnScroll direction="up" delay={0.15} threshold={0.05}>
            <div className="relative z-10 w-full lg:ml-auto">
              <div
                className={`relative mx-auto w-full max-w-[38rem] rounded-2xl border p-6 shadow-2xl backdrop-blur-xl transition-all ${
                  isDark
                    ? 'border-white/10 bg-[#0d1525]/90 shadow-[0_15px_40px_rgba(0,0,0,0.6)]'
                    : 'border-slate-200 bg-white/95 shadow-xl'
                }`}
              >
                {/* Header with Live Status & Title */}
                <div className="flex items-center justify-between border-b pb-4 mb-4 border-current/10">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                    </span>
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                      {isAr ? 'معمارية الحلول المتكاملة' : 'ENTERPRISE SOLUTION MATRIX'}
                    </span>
                  </div>

                  <span className="rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[10px] font-mono font-bold text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                    Tier-III Standards
                  </span>
                </div>

                {/* Industry Sector Switcher Tabs */}
                <div className="mb-5">
                  <div className="text-[11px] font-mono text-slate-400 mb-2">
                    {isAr ? 'اختر مجال عملك لمعاينة الحل الهندسي المخصص:' : 'Select Industry for Tailored Architecture:'}
                  </div>
                  <div className="grid grid-cols-3 gap-1.5 rounded-xl border border-current/10 p-1 bg-current/5">
                    <button
                      type="button"
                      onClick={() => setActiveSector('healthcare')}
                      className={`flex items-center justify-center gap-1.5 rounded-lg py-2 px-2 text-xs font-bold transition-all cursor-pointer ${
                        activeSector === 'healthcare'
                          ? 'bg-emerald-500 text-white shadow-md shadow-emerald-500/25'
                          : isDark
                          ? 'text-slate-300 hover:text-white'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      <Stethoscope className="h-3.5 w-3.5" />
                      <span>{isAr ? 'طبي ومستشفيات' : 'Medical'}</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setActiveSector('enterprise')}
                      className={`flex items-center justify-center gap-1.5 rounded-lg py-2 px-2 text-xs font-bold transition-all cursor-pointer ${
                        activeSector === 'enterprise'
                          ? 'bg-emerald-500 text-white shadow-md shadow-emerald-500/25'
                          : isDark
                          ? 'text-slate-300 hover:text-white'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      <Building2 className="h-3.5 w-3.5" />
                      <span>{isAr ? 'شركات ومؤسسات' : 'Corporate'}</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setActiveSector('retail')}
                      className={`flex items-center justify-center gap-1.5 rounded-lg py-2 px-2 text-xs font-bold transition-all cursor-pointer ${
                        activeSector === 'retail'
                          ? 'bg-emerald-500 text-white shadow-md shadow-emerald-500/25'
                          : isDark
                          ? 'text-slate-300 hover:text-white'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      <Briefcase className="h-3.5 w-3.5" />
                      <span>{isAr ? 'تجارة وخدمات' : 'Commerce'}</span>
                    </button>
                  </div>
                </div>

                {/* 3-Tier Enterprise Architecture Visualization */}
                <div className="space-y-3">
                  {/* Tier 1: Infrastructure */}
                  <div
                    className={`rounded-2xl border p-3.5 transition-all ${
                      isDark
                        ? 'bg-white/[0.03] border-white/10 hover:border-emerald-500/30'
                        : 'bg-slate-50 border-slate-200/80 hover:border-emerald-400'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-500 font-mono text-xs font-bold">
                          1
                        </div>
                        <span className="text-xs font-bold text-slate-900 dark:text-white">
                          {isAr ? 'البنية التحتية والشبكات' : 'Physical Networks & Telephony'}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-slate-400">On-Premises</span>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-300 leading-relaxed pr-8 rtl:pr-8 rtl:pl-0 pl-8">
                      {isAr ? currentSector.tier1Ar : currentSector.tier1En}
                    </p>
                  </div>

                  {/* Tier 2: Cloud & Cybersecurity */}
                  <div
                    className={`rounded-2xl border p-3.5 transition-all ${
                      isDark
                        ? 'bg-white/[0.03] border-white/10 hover:border-emerald-500/30'
                        : 'bg-slate-50 border-slate-200/80 hover:border-emerald-400'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-500 font-mono text-xs font-bold">
                          2
                        </div>
                        <span className="text-xs font-bold text-slate-900 dark:text-white">
                          {isAr ? 'الخوادم السحابية والأمن السيبراني' : 'Cloud Compute & Cyber Defense'}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-slate-400">Cloud / Hybrid</span>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-300 leading-relaxed pr-8 rtl:pr-8 rtl:pl-0 pl-8">
                      {isAr ? currentSector.tier2Ar : currentSector.tier2En}
                    </p>
                  </div>

                  {/* Tier 3: Business Software Core */}
                  <div
                    className={`rounded-2xl border p-3.5 transition-all ${
                      isDark
                        ? 'bg-white/[0.03] border-white/10 hover:border-emerald-500/30'
                        : 'bg-slate-50 border-slate-200/80 hover:border-emerald-400'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-teal-500/10 text-teal-500 font-mono text-xs font-bold">
                          3
                        </div>
                        <span className="text-xs font-bold text-slate-900 dark:text-white">
                          {isAr ? 'الأنظمة البرمجية والـ ERP' : 'Software & Enterprise ERP'}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-slate-400">Turnkey Core</span>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-300 leading-relaxed pr-8 rtl:pr-8 rtl:pl-0 pl-8">
                      {isAr ? currentSector.tier3Ar : currentSector.tier3En}
                    </p>
                  </div>
                </div>

                {/* High Value Guarantees Banner */}
                <div className="mt-4 pt-3.5 border-t border-current/10 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-bold text-[11px]">
                    <Sparkles className="h-3.5 w-3.5" />
                    <span>{isAr ? currentSector.highlightAr : currentSector.highlightEn}</span>
                  </div>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1 text-[11px] font-bold text-slate-700 dark:text-slate-300 hover:text-emerald-500 transition-colors cursor-pointer"
                  >
                    <span>{isAr ? 'طلب خطة مخصصة' : 'Get Custom Plan'}</span>
                    {isAr ? <ArrowLeft className="h-3 w-3" /> : <ArrowRight className="h-3 w-3" />}
                  </a>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};

