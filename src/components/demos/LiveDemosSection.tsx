import React, { useState } from 'react';
import {
  ExternalLink,
  Activity,
  Stethoscope,
  Server,
  Cloud,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Sparkles,
  Smartphone,
  Layers,
  ArrowRight,
  ArrowLeft,
  Calendar,
  FileText,
  CreditCard,
  Building2,
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const LiveDemosSection: React.FC = () => {
  const { locale, theme } = useApp();
  const isAr = locale === 'ar';
  const isDark = theme === 'dark';

  const [activeTab, setActiveTab] = useState<'all' | 'hospital' | 'clinics'>('all');

  return (
    <section
      id="live-demos"
      className={`relative overflow-hidden scroll-mt-24 px-5 py-20 sm:py-24 sm:px-6 lg:px-8 border-t transition-colors ${
        isDark
          ? 'bg-[#0a111c] border-white/10 text-white'
          : 'bg-slate-50 border-slate-200 text-slate-900'
      }`}
    >
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-14">
          <div className="eyebrow-mono justify-center text-emerald-600 dark:text-emerald-400">
            <Activity className="h-4 w-4" />
            <span>{isAr ? 'معاينة الأنظمة الصحية الحية' : 'ENTERPRISE HEALTHCARE PLATFORMS'}</span>
          </div>

          <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">
            {isAr
              ? 'جرّب أنظمتنا الطبية المتكاملة مباشرة على بيئات عمل حقيقية'
              : 'Experience Our Enterprise Healthcare Platforms Live in Action'}
          </h2>

          <p
            className={`mt-4 text-base leading-relaxed ${
              isDark ? 'text-slate-300' : 'text-slate-600'
            }`}
          >
            {isAr
              ? 'صممت نُزول تِك برمجيات رعاية صحية سيادية للمستشفيات والعيادات التخصصية في مصر والعالم العربي. اختبر الأنظمة بنفسك مع واجهات سلسة، سجلات EMR، وربط مالي وتأميني كامل.'
              : 'Engineered for sovereign medical operations. Test-drive our fully featured Hospital Information System (HIS) and modular ClinicCore™ SaaS / On-Premises platforms in real time.'}
          </p>

          {/* Segmented Filter Control */}
          <div className="mt-8 inline-flex items-center gap-1 rounded-2xl border p-1 text-xs font-bold backdrop-blur-md border-emerald-500/30 bg-emerald-500/5">
            <button
              type="button"
              onClick={() => setActiveTab('all')}
              className={`rounded-xl px-4 py-2 transition-all cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-emerald-500 text-white shadow-md'
                  : isDark
                  ? 'text-slate-400 hover:text-white'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {isAr ? 'كافة الأنظمة التجريبية (٢)' : 'All Demos (2)'}
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('hospital')}
              className={`rounded-xl px-4 py-2 transition-all cursor-pointer ${
                activeTab === 'hospital'
                  ? 'bg-emerald-500 text-white shadow-md'
                  : isDark
                  ? 'text-slate-400 hover:text-white'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {isAr ? 'نظام المستشفيات (HIS)' : 'Hospital HIS Demo'}
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('clinics')}
              className={`rounded-xl px-4 py-2 transition-all cursor-pointer ${
                activeTab === 'clinics'
                  ? 'bg-emerald-500 text-white shadow-md'
                  : isDark
                  ? 'text-slate-400 hover:text-white'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {isAr ? 'منصة العيادات (ClinicCore™)' : 'Clinics SaaS Platform'}
            </button>
          </div>
        </div>

        {/* 2 Premier Demo Cards Grid */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* ==============================================================
              CARD 1: HIS SYSTEM DEMO (HOSPITAL INFORMATION SYSTEM)
              ============================================================== */}
          {(activeTab === 'all' || activeTab === 'hospital') && (
            <article
              className={`relative flex flex-col justify-between overflow-hidden rounded-3xl border transition-all duration-300 hover:-translate-y-1.5 ${
                isDark
                  ? 'border-emerald-500/40 bg-gradient-to-b from-[#0d1524] to-[#070c14] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.8)] hover:border-emerald-400'
                  : 'border-emerald-500/30 bg-white shadow-xl hover:shadow-2xl hover:border-emerald-500'
              }`}
            >
              {/* Top Accent Ribbon */}
              <div className="h-1.5 w-full bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-500" />

              <div className="p-7 sm:p-9 flex-1 flex flex-col">
                {/* Meta Header */}
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-500/20 text-emerald-500">
                      <Building2 className="h-5 w-5" />
                    </span>
                    <div>
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 block">
                        ENTERPRISE HIS SUITE
                      </span>
                      <span className="text-xs text-slate-500 font-medium">
                        {isAr ? 'مشروع مستشفى لبنان والمنشآت الكبرى' : 'Lebanon Hospital & Major Facilities'}
                      </span>
                    </div>
                  </div>

                  {/* Live Status indicator */}
                  <div className="flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-[11px] font-mono font-bold text-emerald-600 dark:text-emerald-400">
                    <span className="status-dot" />
                    <span>{isAr ? 'سيرفر تجريبي مباشر' : 'LIVE DEMO ONLINE'}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="mt-5 text-2xl font-black leading-snug">
                  {isAr
                    ? 'نظام إدارة المستشفيات الشامل — Nuzul Hospital OS (HIS Demo)'
                    : 'Nuzul Hospital OS — Enterprise HIS & EMR Suite'}
                </h3>

                <p
                  className={`mt-3 text-xs sm:text-sm leading-relaxed ${
                    isDark ? 'text-slate-300' : 'text-slate-600'
                  }`}
                >
                  {isAr
                    ? 'نظام رقمي موحد لإدارة المستشفيات يربط العيادات الخارجية، أسرة الإقامة الداخلية، غرف العمليات، السجلات الطبية الإلكترونية (EMR)، الصيدليات، والمطالبات التأمينية في منصة متكاملة.'
                    : 'Turnkey hospital management suite powering clinical and administrative workflows: outpatient clinics, inpatient ward admissions, operating rooms, EMR dossiers, automated insurance billing, and pharmacy dispensing.'}
                </p>

                {/* Key Capabilities Pills/Tags */}
                <div className="mt-6 grid grid-cols-2 gap-2 text-xs font-medium">
                  <div
                    className={`flex items-center gap-2 rounded-xl p-2.5 border ${
                      isDark ? 'bg-white/5 border-white/5 text-slate-200' : 'bg-slate-50 border-slate-200 text-slate-700'
                    }`}
                  >
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500" />
                    <span>{isAr ? 'السجلات الطبية EMR' : 'Electronic Medical Records (EMR)'}</span>
                  </div>
                  <div
                    className={`flex items-center gap-2 rounded-xl p-2.5 border ${
                      isDark ? 'bg-white/5 border-white/5 text-slate-200' : 'bg-slate-50 border-slate-200 text-slate-700'
                    }`}
                  >
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500" />
                    <span>{isAr ? 'الجدولة الذكية للعيادات' : 'Clinic Smart Scheduling'}</span>
                  </div>
                  <div
                    className={`flex items-center gap-2 rounded-xl p-2.5 border ${
                      isDark ? 'bg-white/5 border-white/5 text-slate-200' : 'bg-slate-50 border-slate-200 text-slate-700'
                    }`}
                  >
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500" />
                    <span>{isAr ? 'إدارة الصيدلية والمخازن' : 'Pharmacy & Batch Inventory'}</span>
                  </div>
                  <div
                    className={`flex items-center gap-2 rounded-xl p-2.5 border ${
                      isDark ? 'bg-white/5 border-white/5 text-slate-200' : 'bg-slate-50 border-slate-200 text-slate-700'
                    }`}
                  >
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500" />
                    <span>{isAr ? 'فواتير وشركات التأمين' : 'Insurance & Co-pay Billing'}</span>
                  </div>
                </div>

                {/* Interactive Mockup Display */}
                <div
                  className={`mt-6 overflow-hidden rounded-2xl border p-4 ${
                    isDark ? 'bg-[#070c14] border-white/10' : 'bg-slate-100 border-slate-200'
                  }`}
                >
                  <div className="flex items-center justify-between border-b pb-2 mb-3 border-current/10 text-[11px] font-mono text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-red-400 inline-block" />
                      <span className="h-2 w-2 rounded-full bg-amber-400 inline-block" />
                      <span className="h-2 w-2 rounded-full bg-emerald-400 inline-block" />
                      <span className="font-semibold text-slate-500">hms-v2.karem.live</span>
                    </span>
                    <span className="text-emerald-500 font-bold">HTTPS · TLS 1.3</span>
                  </div>

                  <div className="space-y-2 text-xs">
                    <div className="flex items-center justify-between font-mono">
                      <span className="text-slate-400">{isAr ? 'بيئة التشغيل:' : 'Target Stack:'}</span>
                      <span className="font-bold text-emerald-500">Node.js · React · PostgreSQL · Redis</span>
                    </div>
                    <div className="flex items-center justify-between font-mono">
                      <span className="text-slate-400">{isAr ? 'نموذج الاستضافة:' : 'Hosting Topology:'}</span>
                      <span className="text-slate-300 dark:text-slate-200">
                        {isAr ? 'سيرفر فيزيائي Dedicated أو سحابة خاصة' : 'Bare-Metal On-Prem or Dedicated Cloud'}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Actions & Launch Button */}
                <div className="mt-8 pt-6 border-t border-current/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-xs text-slate-400">
                    <span className="font-mono text-emerald-500 font-bold">● {isAr ? 'مفتوح للتجربة الفورية' : 'Instant Guest Access'}</span>
                    <span className="block mt-0.5">{isAr ? 'بدون انتظار أو تسجيل' : 'No sign-up required'}</span>
                  </div>

                  <a
                    href="https://hms-v2.karem.live/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary w-full sm:w-auto px-6 py-3 text-xs font-bold uppercase tracking-wider group shadow-lg cursor-pointer"
                  >
                    <span>{isAr ? 'فتح الديمو التفاعلي (HIS Demo)' : 'Launch Interactive HIS Demo'}</span>
                    <ExternalLink className="h-4 w-4 transition-transform group-hover:scale-110" />
                  </a>
                </div>
              </div>
            </article>
          )}

          {/* ==============================================================
              CARD 2: CLINIC SYSTEM SAAS & ON-PREMISES (CLINICCORE PRO)
              ============================================================== */}
          {(activeTab === 'all' || activeTab === 'clinics') && (
            <article
              className={`relative flex flex-col justify-between overflow-hidden rounded-3xl border transition-all duration-300 hover:-translate-y-1.5 ${
                isDark
                  ? 'border-cyan-500/40 bg-gradient-to-b from-[#0d1524] to-[#070c14] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.8)] hover:border-cyan-400'
                  : 'border-cyan-500/30 bg-white shadow-xl hover:shadow-2xl hover:border-cyan-500'
              }`}
            >
              {/* Top Accent Ribbon */}
              <div className="h-1.5 w-full bg-gradient-to-r from-cyan-500 via-sky-400 to-indigo-500" />

              <div className="p-7 sm:p-9 flex-1 flex flex-col">
                {/* Meta Header */}
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-500/20 text-cyan-500">
                      <Stethoscope className="h-5 w-5" />
                    </span>
                    <div>
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 block">
                        CLINIC SAAS & ON-PREMISES
                      </span>
                      <span className="text-xs text-slate-500 font-medium">
                        {isAr ? 'منصة إدارة العيادات والمراكز التخصصية' : 'Multi-Specialty Clinic Platform'}
                      </span>
                    </div>
                  </div>

                  {/* Dual Deployment Badge */}
                  <div className="flex items-center gap-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-[11px] font-mono font-bold text-cyan-600 dark:text-cyan-400">
                    <Layers className="h-3.5 w-3.5" />
                    <span>{isAr ? 'سحابي SaaS أو ملكية On-Premises' : 'SaaS or Self-Hosted'}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="mt-5 text-2xl font-black leading-snug">
                  {isAr
                    ? 'منصة نُزول كلينيك كور — Nuzul ClinicCore™ Pro'
                    : 'Nuzul ClinicCore™ Pro — Clinic Operations Platform'}
                </h3>

                <p
                  className={`mt-3 text-xs sm:text-sm leading-relaxed ${
                    isDark ? 'text-slate-300' : 'text-slate-600'
                  }`}
                >
                  {isAr
                    ? 'المنصة الأكثر مرونة للمراكز الطبية التخصصية والعيادات في مصر. متاحة كاشتراك سحابي مرن (Managed SaaS) أو كترخيص ملكية كامل واستضافة محلية على خوادمك الخاصة (On-Premises).'
                    : 'The ultimate software engine for specialized clinics, polyclinics, and diagnostic centers. Available both as fully managed Cloud SaaS or 100% owned and self-hosted on your on-premises infrastructure.'}
                </p>

                {/* Deployment Options Highlight */}
                <div className="mt-5 grid grid-cols-2 gap-3 text-xs">
                  <div
                    className={`rounded-2xl border p-3 ${
                      isDark ? 'bg-cyan-950/20 border-cyan-500/30' : 'bg-cyan-50 border-cyan-200'
                    }`}
                  >
                    <div className="flex items-center gap-1.5 text-cyan-600 dark:text-cyan-400 font-bold mb-1">
                      <Cloud className="h-4 w-4" />
                      <span>{isAr ? 'الخيار ١: سحابي SaaS مُدار' : 'Option 1: Cloud SaaS'}</span>
                    </div>
                    <p className="text-[11px] text-slate-400 leading-relaxed">
                      {isAr
                        ? 'تفعيل فوري، صيانة ودعم 24/7، نسخ احتياطي يومي آلي دون الحاجة لسيرفر محلي.'
                        : 'Instant setup, 24/7 maintenance, daily automated backups, zero hardware headache.'}
                    </p>
                  </div>

                  <div
                    className={`rounded-2xl border p-3 ${
                      isDark ? 'bg-emerald-950/20 border-emerald-500/30' : 'bg-emerald-50 border-emerald-200'
                    }`}
                  >
                    <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-bold mb-1">
                      <Server className="h-4 w-4" />
                      <span>{isAr ? 'الخيار ٢: ملكية On-Premises' : 'Option 2: Self-Hosted'}</span>
                    </div>
                    <p className="text-[11px] text-slate-400 leading-relaxed">
                      {isAr
                        ? 'ملكية كاملة وتنصيب مباشر على سيرفرات عيادتك الخاصة مع سيادة كاملة على بياناتك.'
                        : '100% owned license deployed directly on your private office server hardware.'}
                    </p>
                  </div>
                </div>

                {/* Key Capabilities Pills/Tags */}
                <div className="mt-5 grid grid-cols-2 gap-2 text-xs font-medium">
                  <div
                    className={`flex items-center gap-2 rounded-xl p-2.5 border ${
                      isDark ? 'bg-white/5 border-white/5 text-slate-200' : 'bg-slate-50 border-slate-200 text-slate-700'
                    }`}
                  >
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-cyan-500" />
                    <span>{isAr ? 'الروشتة الإلكترونية الذكية E-Rx' : 'Smart Digital E-Prescriptions'}</span>
                  </div>
                  <div
                    className={`flex items-center gap-2 rounded-xl p-2.5 border ${
                      isDark ? 'bg-white/5 border-white/5 text-slate-200' : 'bg-slate-50 border-slate-200 text-slate-700'
                    }`}
                  >
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-cyan-500" />
                    <span>{isAr ? 'تأكيد الحجز عبر واتساب تلقائياً' : 'WhatsApp Automated Reminders'}</span>
                  </div>
                  <div
                    className={`flex items-center gap-2 rounded-xl p-2.5 border ${
                      isDark ? 'bg-white/5 border-white/5 text-slate-200' : 'bg-slate-50 border-slate-200 text-slate-700'
                    }`}
                  >
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-cyan-500" />
                    <span>{isAr ? 'إدارة الطوابير والأدوار Queue' : 'Live Patient Queue & Reception'}</span>
                  </div>
                  <div
                    className={`flex items-center gap-2 rounded-xl p-2.5 border ${
                      isDark ? 'bg-white/5 border-white/5 text-slate-200' : 'bg-slate-50 border-slate-200 text-slate-700'
                    }`}
                  >
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-cyan-500" />
                    <span>{isAr ? 'الإيصال الإلكتروني المصري ETA' : 'Egyptian E-Receipt Compliant'}</span>
                  </div>
                </div>

                {/* Interactive Mockup Display */}
                <div
                  className={`mt-6 overflow-hidden rounded-2xl border p-4 ${
                    isDark ? 'bg-[#070c14] border-white/10' : 'bg-slate-100 border-slate-200'
                  }`}
                >
                  <div className="flex items-center justify-between border-b pb-2 mb-3 border-current/10 text-[11px] font-mono text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-red-400 inline-block" />
                      <span className="h-2 w-2 rounded-full bg-amber-400 inline-block" />
                      <span className="h-2 w-2 rounded-full bg-emerald-400 inline-block" />
                      <span className="font-semibold text-slate-500">clinic-system.karem.live</span>
                    </span>
                    <span className="text-cyan-500 font-bold">LIVE STAGING</span>
                  </div>

                  <div className="space-y-2 text-xs">
                    <div className="flex items-center justify-between font-mono">
                      <span className="text-slate-400">{isAr ? 'تجربة المستخدم:' : 'UX Architecture:'}</span>
                      <span className="font-bold text-cyan-500">Mobile & Tablet Responsive · Arabic / English</span>
                    </div>
                    <div className="flex items-center justify-between font-mono">
                      <span className="text-slate-400">{isAr ? 'أمان البيانات:' : 'Data Security:'}</span>
                      <span className="text-slate-300 dark:text-slate-200">
                        {isAr ? 'تشفير AES-256 مع عزل قواعد البيانات' : 'Isolated Database Per Clinic · AES-256'}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Actions & Launch Button */}
                <div className="mt-8 pt-6 border-t border-current/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-xs text-slate-400">
                    <span className="font-mono text-cyan-500 font-bold">● {isAr ? 'عرض المنصة التفاعلي' : 'Live Platform Demo'}</span>
                    <span className="block mt-0.5">{isAr ? 'تجربة حية للعيادات التخصصية' : 'Specialized clinics experience'}</span>
                  </div>

                  <a
                    href="https://clinic-system.karem.live/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary bg-cyan-600 hover:bg-cyan-500 w-full sm:w-auto px-6 py-3 text-xs font-bold uppercase tracking-wider group shadow-lg cursor-pointer"
                  >
                    <span>{isAr ? 'فتح ديمو العيادات (Clinic Demo)' : 'Launch Clinic Platform Demo'}</span>
                    <ExternalLink className="h-4 w-4 transition-transform group-hover:scale-110" />
                  </a>
                </div>
              </div>
            </article>
          )}
        </div>
      </div>
    </section>
  );
};
