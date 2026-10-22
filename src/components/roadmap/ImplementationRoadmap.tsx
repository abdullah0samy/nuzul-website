import React, { useState } from 'react';
import {
  Compass,
  Cloud,
  Settings,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  Activity,
  Layers,
  Database,
  Lock,
  PhoneCall,
  Sparkles,
  Server,
  Terminal,
  FileCheck2,
  RefreshCw,
  Zap,
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { NUZUL_CONTACT } from '../../data/nuzulData';
import { RevealOnScroll, StaggerContainer, StaggerItem } from '../common/RevealOnScroll';

interface StepDetail {
  id: 'planning' | 'migration' | 'optimization';
  stepNumber: '01' | '02' | '03';
  phaseAr: string;
  phaseEn: string;
  titleAr: string;
  titleEn: string;
  taglineAr: string;
  taglineEn: string;
  icon: React.ElementType;
  color: 'emerald' | 'cyan' | 'indigo';
  durationAr: string;
  durationEn: string;
  metricAr: string;
  metricEn: string;
  pillars: {
    titleAr: string;
    titleEn: string;
    descAr: string;
    descEn: string;
  }[];
  deliverables: {
    titleAr: string;
    titleEn: string;
  }[];
  technologies: string[];
}

export const ImplementationRoadmap: React.FC = () => {
  const { locale, theme } = useApp();
  const isAr = locale === 'ar';
  const isDark = theme === 'dark';

  const [activeStep, setActiveStep] = useState<'planning' | 'migration' | 'optimization'>('planning');

  const roadmapSteps: StepDetail[] = [
    {
      id: 'planning',
      stepNumber: '01',
      phaseAr: 'المرحلة الأولى: التحليل والتصميم',
      phaseEn: 'Phase 1: Discovery & Architecture',
      titleAr: 'التخطيط الهندسي ودراسة الجاهزية',
      titleEn: 'Architecture Audit & Readiness Planning',
      taglineAr: 'معاينة ميدانية للشبكات وتدقيق أمني شامل لوضع مخطط التنفيذ بصفر توقف',
      taglineEn: 'Comprehensive on-site facility audit, security scan, and zero-downtime blueprint design',
      icon: Compass,
      color: 'emerald',
      durationAr: '٣ – ٧ أيام عمل',
      durationEn: '3 – 7 Business Days',
      metricAr: '١٠٠٪ دقة تخطيطية وتحديد مسبق لكافة التكاليف',
      metricEn: '100% architectural precision with zero hidden costs',
      pillars: [
        {
          titleAr: 'المعاينة الميدانية وفحص الشبكات الفيزيائية',
          titleEn: 'On-Site Physical Cabling & Facility Survey',
          descAr: 'فحص مسارات الكابلات، قواطع التيار والـ UPS، ومواقع السيرفرات والكاميرات داخل المقر لضمان أفضل بيئة تشغيل.',
          descEn: 'Auditing physical cabling runs, UPS power redundancy, server rack layout, and CCTV blind spots on-premise.',
        },
        {
          titleAr: 'تحليل البيانات وفحص الأمان والبريد',
          titleEn: 'Database Volume & Security Vulnerability Audit',
          descAr: 'قياس أحجام قواعد البيانات وسجلات الـ EMR والأرشيف، وفحص سجلات الـ DNS والبريد الحالي لتحديد خطة الترحيل.',
          descEn: 'Evaluating database sizes, PACS scans, EMR databases, and mail DNS hygiene to prepare cutover strategies.',
        },
        {
          titleAr: 'تصميم وثيقة المخطط الهندسي (Master Runbook)',
          titleEn: 'Master Architectural Blueprint & Runbook',
          descAr: 'رسم طبولوجيا الشبكات، عزل الـ VLANs، توزيع السيرفرات السحابية والمحلية، وجدول زمني محدد بالساعات للتنفيذ.',
          descEn: 'Engineering network topology, zero-trust VLAN mapping, hybrid compute distribution, and timed cutover runbook.',
        },
      ],
      deliverables: [
        {
          titleAr: 'وثيقة المخطط الهندسي المعتمد (Master Architecture Plan)',
          titleEn: 'Certified Master Infrastructure Architecture Blueprint',
        },
        {
          titleAr: 'مصفوفة تقييم المخاطر والأمان (Risk & Security Audit Matrix)',
          titleEn: 'Comprehensive Risk Assessment & Vulnerability Matrix',
        },
        {
          titleAr: 'جدول زمني محدد للتنفيذ وخطة الترحيل بصفر توقف',
          titleEn: 'Hour-by-Hour Zero-Downtime Migration Schedule',
        },
        {
          titleAr: 'اتفاقية مستوى الخدمة المحددة (Custom SLA Agreement)',
          titleEn: 'Guaranteed SLA Agreement with Response Benchmarks',
        },
      ],
      technologies: ['Network Topology', 'VLAN Segmentation', 'DNSSEC & DMARC', 'Capacity Planning', 'SLA Framework', 'Risk Matrix'],
    },
    {
      id: 'migration',
      stepNumber: '02',
      phaseAr: 'المرحلة الثانية: التنفيذ والنقل الآمن',
      phaseEn: 'Phase 2: Execution & Zero-Downtime Migration',
      titleAr: 'الهجرة السحابية والتنفيذ المتزامن',
      titleEn: 'Cloud Migration & Turnkey Deployment',
      taglineAr: 'بناء العناقيد الافتراضية، تركيب الشبكات، ومزامنة البيانات المشفرة بصفر انقطاع',
      taglineEn: 'High-availability cluster provisioning, fiber cabling, and live encrypted database synchronization',
      icon: Cloud,
      color: 'cyan',
      durationAr: '٥ – ١٤ يوم عمل',
      durationEn: '5 – 14 Business Days',
      metricAr: 'صفر ثانية توقف عن العمل (Zero Downtime Cutover)',
      metricEn: 'Zero operational disruption during database cutover',
      pillars: [
        {
          titleAr: 'تجهيز العناقيد الافتراضية والسيرفرات السحابية',
          titleEn: 'Virtualization Cluster & Cloud VPS Setup',
          descAr: 'نشر بيئات Proxmox / VMware عالية التوافر (HA)، وتجهيز الخوادم السحابية بمساحات NVMe وأحدث معايير الأمان.',
          descEn: 'Provisioning redundant Proxmox/VMware clusters and enterprise cloud VPS instances with NVMe storage.',
        },
        {
          titleAr: 'تمديد الكابلات وجدران الحماية وسنترال VoIP',
          titleEn: 'Physical Cabling, Fortinet Firewalls & VoIP PBX',
          descAr: 'تركيب كابلات Cat6A، السويتشات المدارة، جدران الحماية Fortinet، والسنترال الداخلي وكاميرات المراقبة IP.',
          descEn: 'Deploying structured Cat6A cabling, managed PoE switches, Fortinet NGFW security, and unified VoIP PBX.',
        },
        {
          titleAr: 'المزامنة الحية لقواعد البيانات والبريد الرسمي',
          titleEn: 'Live Synchronous Database & Mailbox Migration',
          descAr: 'ترحيل السجلات المالية والطبية والبريد الرسمي لـ 100+ مستخدم مع تفعيل توثيق SPF/DKIM/DMARC دون فقدان أي رسالة.',
          descEn: 'Synchronizing critical financial and EMR data, and migrating mailboxes with enforced SPF, DKIM, and DMARC.',
        },
      ],
      deliverables: [
        {
          titleAr: 'عناقيد خوادم افتراضية مزدوجة الحماية (Virtualization HA Clusters)',
          titleEn: 'High-Availability Virtualization Clusters with Failover',
        },
        {
          titleAr: 'بنية كابلات وشبكات فايبر منظمة وسويتشات وجدران حماية نشطة',
          titleEn: 'Structured Network Backbone with NGFW Perimeter Defense',
        },
        {
          titleAr: 'قواعد بيانات وبريد مؤسسي موثق بنسبة تسليم ١٠٠٪ في صندوق الوارد',
          titleEn: 'Hardened Mailboxes with 100% Deliverability & Inbound Filters',
        },
        {
          titleAr: 'سنترال رقمي VoIP وشبكة كاميرات مراقبة IP مدمجة',
          titleEn: 'Unified IP Telephony System & NVR Video Surveillance',
        },
      ],
      technologies: ['Proxmox VE / VMware', 'Fortinet NGFW', 'PostgreSQL / SQL Server', 'Cat6A & Fiber', 'WireGuard / IPsec VPN', 'Meta WhatsApp API'],
    },
    {
      id: 'optimization',
      stepNumber: '03',
      phaseAr: 'المرحلة الثالثة: الكفاءة القصوى والحماية',
      phaseEn: 'Phase 3: Peak Efficiency & Dedicated SLA',
      titleAr: 'التحسين المستمر والدعم الهندسي 24/7',
      titleEn: 'Continuous Optimization & 24/7 Managed Operations',
      taglineAr: 'رصد لحظي، تدريب الكوادر، ونسخ احتياطي معزول ضد برمجيات الفدية',
      taglineEn: 'Proactive 24/7 telemetry monitoring, staff onboarding, and ransomware-immune immutable backups',
      icon: Settings,
      color: 'indigo',
      durationAr: 'مستمر طوال فترة التعاقد (SLA)',
      durationEn: 'Continuous Proactive SLA Operations',
      metricAr: 'جاهزية تشغيلية ٩٩.٩٩٪ واستجابة خلال ١٥ دقيقة',
      metricEn: '99.99% system availability with sub-15min incident dispatch',
      pillars: [
        {
          titleAr: 'المراقبة اللحظية والاستباقية للأعطال 24/7',
          titleEn: '24/7 Proactive Telemetry & Anomaly Alerts',
          descAr: 'تتبع مستمر لمؤشرات المعالجة والذاكرة والشبكة لكشف الاختناقات ومعالجتها تلقائياً قبل أن يشعر بها المستخدمون.',
          descEn: 'Continuous real-time CPU, RAM, and bandwidth telemetry with automated alerts before any bottleneck impacts users.',
        },
        {
          titleAr: 'النسخ الاحتياطي المعزول ضد برمجيات الفدية (Immutable)',
          titleEn: 'Immutable Ransomware-Proof Cloud Backup Vault',
          descAr: 'لقطات يومية مشفرة ومنفصلة جغرافياً لا يمكن تعديلها أو تشفيرها، مع اختبارات استعادة دورية في دقائق معدودة.',
          descEn: 'Automated encrypted off-site immutable snapshots with sub-15min recovery drills ensuring total business continuity.',
        },
        {
          titleAr: 'تدريب الموظفين وإدارة الحسابات الهندسية المخصصة',
          titleEn: 'Staff Onboarding & Dedicated Account Engineer',
          descAr: 'ورش تدريبية لفريقك، وتخصيص مهندس نظم مقيم/طوارئ، مع تقارير شهرية لتقييم الأداء والتوسع المستقبلي.',
          descEn: 'Comprehensive staff onboarding sessions, dedicated lead engineer dispatch, and quarterly architecture reviews.',
        },
      ],
      deliverables: [
        {
          titleAr: 'لوحات تحكم بيانية حية لأداء السيرفرات والشبكات (Live Dashboards)',
          titleEn: 'Real-Time Infrastructure Telemetry Dashboards',
        },
        {
          titleAr: 'خط أنابيب نسخ احتياطي يومي مشفر ومعزول (Disaster Recovery)',
          titleEn: 'Automated Immutable Cloud Backup & Rapid Recovery Vault',
        },
        {
          titleAr: 'شهادات وتوثيق تدريب الكوادر الإدارية والطبية',
          titleEn: 'Complete System Manuals & Staff Training Sign-off',
        },
        {
          titleAr: 'قناة تواصل وخط ساخن مباشر لكبار المهندسين على مدار الساعة',
          titleEn: 'Direct Senior Engineering Hotline & WhatsApp Channel 24/7',
        },
      ],
      technologies: ['Prometheus & Grafana', 'Immutable S3 Vault', '24/7 SOC Telemetry', 'Automated Failover', 'Preventative Patching', 'Quarterly ROI Audits'],
    },
  ];

  const currentStepData = roadmapSteps.find((s) => s.id === activeStep) || roadmapSteps[0];

  return (
    <section
      id="deployment-roadmap"
      className={`relative overflow-hidden scroll-mt-24 px-5 py-20 sm:py-28 sm:px-6 lg:px-8 border-t transition-colors ${
        isDark
          ? 'bg-gradient-to-b from-[#070c14] via-[#09111e] to-[#070c14] border-white/10 text-white'
          : 'bg-gradient-to-b from-slate-50 via-white to-slate-50 border-slate-200 text-slate-900'
      }`}
    >
      {/* Background Decorative Ambient Radial Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-emerald-500/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-[400px] h-[250px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <div className="eyebrow-mono justify-center text-emerald-600 dark:text-emerald-400">
            <Sparkles className="h-4 w-4" />
            <span>{isAr ? 'دورة النشر والتسليم الهندسي' : 'TURNKEY DEPLOYMENT CYCLE'}</span>
          </div>

          <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
            {isAr ? (
              <>
                خريطة طريق التنفيذ:{' '}
                <span className="bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                  من التخطيط حتى التشغيل
                </span>
              </>
            ) : (
              <>
                Client Implementation Roadmap:{' '}
                <span className="bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                  From Planning to Full Cloud Operations
                </span>
              </>
            )}
          </h2>

          <p
            className={`mt-4 text-base leading-relaxed ${
              isDark ? 'text-slate-300' : 'text-slate-600'
            }`}
          >
            {isAr
              ? 'منهجية واضحة ومدروسة في ٣ مراحل متتابعة تضمن انتقالاً آمناً بصفر توقف عن العمل، مع كفاءة تشغيلية بنسبة ٩٩.٩٩٪ وعائد استثماري فوري.'
              : 'A structured, 3-phase deployment methodology ensuring zero operational downtime, 99.99% system availability, and immediate enterprise ROI.'}
          </p>

          {/* Quick Value Badges */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-xs font-mono">
            {[
              { ar: 'صفر ثانية توقف (Zero Downtime)', en: 'Zero Downtime Cutover' },
              { ar: 'تشفير تام للبيانات AES-256', en: 'AES-256 Data In-Transit' },
              { ar: 'اتفاقية مستوى خدمة SLA صارمة', en: 'Guaranteed 15-min SLA' },
              { ar: 'إشراف كبار المهندسين بالقاهرة', en: 'Senior Cairo Engineering Team' },
            ].map((badge, idx) => (
              <span
                key={idx}
                className={`inline-flex items-center gap-1.5 rounded-xl border px-3 py-1 font-bold ${
                  isDark
                    ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-300'
                    : 'border-emerald-200 bg-emerald-50 text-emerald-800'
                }`}
              >
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                <span>{isAr ? badge.ar : badge.en}</span>
              </span>
            ))}
          </div>
        </div>

        {/* 3 Steps Navigation Timeline Strip */}
        <div className="relative mb-12">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-8 right-8 -translate-y-1/2 h-1 bg-gradient-to-r from-emerald-500/30 via-cyan-500/30 to-indigo-500/30 rounded-full z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative z-10">
            {roadmapSteps.map((step, idx) => {
              const isSelected = activeStep === step.id;
              const Icon = step.icon;

              return (
                <button
                  key={step.id}
                  type="button"
                  onClick={() => setActiveStep(step.id)}
                  className={`group relative text-start rounded-3xl border p-5 sm:p-6 transition-all duration-300 cursor-pointer backdrop-blur-xl ${
                    isSelected
                      ? isDark
                        ? 'border-emerald-400 bg-[#0d1726] shadow-[0_20px_45px_-10px_rgba(16,185,129,0.25)] ring-2 ring-emerald-500/40 -translate-y-1'
                        : 'border-emerald-500 bg-white shadow-xl ring-2 ring-emerald-400/40 -translate-y-1'
                      : isDark
                      ? 'border-white/10 bg-[#0a111c]/80 hover:border-white/25 hover:bg-[#0d1726]'
                      : 'border-slate-200 bg-slate-50/90 hover:border-slate-300 hover:bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2.5">
                      <div
                        className={`flex h-11 w-11 items-center justify-center rounded-2xl border transition-all ${
                          isSelected
                            ? 'border-emerald-400/50 bg-emerald-500/20 text-emerald-400 shadow-md shadow-emerald-500/20'
                            : isDark
                            ? 'border-white/10 bg-white/5 text-slate-400 group-hover:text-white'
                            : 'border-slate-300 bg-white text-slate-600 group-hover:text-slate-900'
                        }`}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-500">
                          {isAr ? step.phaseAr : step.phaseEn}
                        </span>
                        <div className="text-sm font-black mt-0.5">
                          {isAr ? step.titleAr : step.titleEn}
                        </div>
                      </div>
                    </div>

                    <span
                      className={`font-mono text-xs font-black px-2.5 py-1 rounded-xl border ${
                        isSelected
                          ? 'border-emerald-400/40 bg-emerald-500/10 text-emerald-400'
                          : isDark
                          ? 'border-white/10 text-slate-500'
                          : 'border-slate-200 text-slate-400'
                      }`}
                    >
                      {step.stepNumber}
                    </span>
                  </div>

                  <p
                    className={`text-xs line-clamp-2 leading-relaxed transition-colors ${
                      isSelected
                        ? isDark
                          ? 'text-slate-200'
                          : 'text-slate-700'
                        : 'text-slate-400'
                    }`}
                  >
                    {isAr ? step.taglineAr : step.taglineEn}
                  </p>

                  <div className="mt-3.5 pt-3 border-t border-current/10 flex items-center justify-between text-[11px] font-mono">
                    <span className="text-slate-400">
                      ⏱ {isAr ? step.durationAr : step.durationEn}
                    </span>
                    <span className={`font-bold transition-colors ${isSelected ? 'text-emerald-500' : 'text-slate-400'}`}>
                      {isSelected ? (isAr ? 'المرحلة النشطة ●' : 'Active Phase ●') : (isAr ? 'عرض التفاصيل ←' : 'View Details →')}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Deep Dive Details Card for the Selected Step */}
        <div
          className={`rounded-3xl border p-6 sm:p-10 shadow-2xl backdrop-blur-2xl transition-all duration-300 ${
            isDark
              ? 'border-emerald-500/30 bg-[#0d1726]/95 text-white shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)]'
              : 'border-slate-200 bg-white text-slate-900 shadow-2xl'
          }`}
        >
          {/* Step Header */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 pb-8 border-b border-current/10">
            <div>
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-500 text-white font-mono text-sm font-black shadow-md shadow-emerald-500/20">
                  {currentStepData.stepNumber}
                </span>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-500">
                  {isAr ? currentStepData.phaseAr : currentStepData.phaseEn}
                </span>
              </div>
              <h3 className="mt-2 text-2xl sm:text-3xl font-black">
                {isAr ? currentStepData.titleAr : currentStepData.titleEn}
              </h3>
              <p
                className={`mt-2 text-sm leading-relaxed max-w-2xl ${
                  isDark ? 'text-slate-300' : 'text-slate-600'
                }`}
              >
                {isAr ? currentStepData.taglineAr : currentStepData.taglineEn}
              </p>
            </div>

            {/* Time & Value Highlight Box */}
            <div
              className={`rounded-2xl border p-4 sm:p-5 shrink-0 flex flex-col gap-2 min-w-[260px] ${
                isDark ? 'border-white/10 bg-white/[0.03]' : 'border-slate-200 bg-slate-50'
              }`}
            >
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400">{isAr ? 'المدة التقديرية:' : 'Estimated Duration:'}</span>
                <span className="font-bold text-emerald-500 font-mono">
                  {isAr ? currentStepData.durationAr : currentStepData.durationEn}
                </span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400">{isAr ? 'الضمان الهندسي:' : 'Engineering Guarantee:'}</span>
                <span className="font-bold text-current text-[11px] text-end">
                  {isAr ? currentStepData.metricAr : currentStepData.metricEn}
                </span>
              </div>
            </div>
          </div>

          {/* Pillars & Deliverables Grid */}
          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            {/* Left: 3 Core Pillars in this Step */}
            <div className="space-y-4">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-500 flex items-center gap-1.5">
                <Layers className="h-4 w-4" />
                <span>{isAr ? 'محاور العمل والخطوات الميدانية:' : 'Core Execution Workflows:'}</span>
              </h4>

              <div className="space-y-3">
                {currentStepData.pillars.map((pillar, idx) => (
                  <div
                    key={idx}
                    className={`rounded-2xl border p-4.5 transition-colors ${
                      isDark ? 'border-white/5 bg-[#070c14]/60' : 'border-slate-200 bg-slate-50'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-500 font-mono text-xs font-bold mt-0.5">
                        {idx + 1}
                      </div>
                      <div>
                        <div className="text-sm font-bold text-current">
                          {isAr ? pillar.titleAr : pillar.titleEn}
                        </div>
                        <p
                          className={`mt-1 text-xs leading-relaxed ${
                            isDark ? 'text-slate-300' : 'text-slate-600'
                          }`}
                        >
                          {isAr ? pillar.descAr : pillar.descEn}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Deliverables & Tech Stack */}
            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-500 flex items-center gap-1.5 mb-4">
                  <FileCheck2 className="h-4 w-4" />
                  <span>{isAr ? 'مخرجات المرحلة والتسليمات الموثقة:' : 'Tangible Deliverables & Sign-Offs:'}</span>
                </h4>

                <div className="space-y-2.5">
                  {currentStepData.deliverables.map((del, idx) => (
                    <div
                      key={idx}
                      className={`flex items-start gap-2.5 rounded-xl border p-3 text-xs font-medium ${
                        isDark ? 'border-white/5 bg-white/[0.02]' : 'border-slate-200 bg-white'
                      }`}
                    >
                      <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{isAr ? del.titleAr : del.titleEn}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Applied */}
              <div>
                <div className="text-[11px] font-mono text-slate-400 mb-2 uppercase">
                  {isAr ? 'التقنيات والبروتوكولات المعتمدة بالمرحلة:' : 'Applied Frameworks & Protocols:'}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {currentStepData.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className={`font-mono text-[11px] px-2.5 py-1 rounded-lg border ${
                        isDark
                          ? 'border-white/10 bg-white/5 text-slate-300'
                          : 'border-slate-200 bg-slate-100 text-slate-700'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Action Row at Bottom of Card */}
          <div className="mt-10 pt-6 border-t border-current/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <ShieldCheck className="h-4 w-4 text-emerald-500 shrink-0" />
              <span>
                {isAr
                  ? 'يتم تنفيذ كافة المراحل بواسطة مهندسي نُزول تِك المقيمين في مصر مع عقود تشغيل قانونية موثقة.'
                  : 'All phases are deployed by full-time Nuzul Tech senior engineers in Egypt with formal corporate contracts.'}
              </span>
            </div>

            <div className="flex items-center gap-2.5 shrink-0">
              <a
                href={NUZUL_CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-sm inline-flex items-center gap-2 cursor-pointer shadow-md shadow-emerald-500/20"
              >
                <PhoneCall className="h-3.5 w-3.5" />
                <span>{isAr ? 'ابدأ المرحلة الأولى الآن' : 'Initiate Phase 1'}</span>
                {isAr ? <ArrowLeft className="h-3.5 w-3.5" /> : <ArrowRight className="h-3.5 w-3.5" />}
              </a>

              <a
                href="#contact"
                className="btn btn-secondary btn-sm cursor-pointer"
              >
                <span>{isAr ? 'طلب معاينة للمقر' : 'Book Facility Survey'}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Transition Comparison: Legacy vs Nuzul Tech Managed */}
        <div className="mt-14 rounded-3xl border p-6 sm:p-8 backdrop-blur-xl transition-colors border-emerald-500/20 bg-emerald-950/10">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-500">
              {isAr ? 'أثر التحول التقني' : 'TRANSFORMATION IMPACT'}
            </span>
            <h3 className="text-xl sm:text-2xl font-black mt-1">
              {isAr ? 'الفارق بين البنية القديمة ومنظومة نُزول تِك المدارة' : 'Legacy IT Headaches vs. Nuzul Tech Managed Operations'}
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Legacy Side */}
            <div
              className={`rounded-2xl border p-5 ${
                isDark ? 'border-red-500/20 bg-red-950/10' : 'border-red-200 bg-red-50/50'
              }`}
            >
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-red-500 mb-3 flex items-center gap-1.5">
                <span>⚠️</span>
                <span>{isAr ? 'قبل التحول (البنية التقليدية):' : 'Before Nuzul Tech (Legacy State):'}</span>
              </div>
              <ul className="space-y-2.5 text-xs">
                {[
                  { ar: 'شبكات وكابلات غير منظمة تتسبب في انقطاعات مفاجئة وضياع الوقت', en: 'Disorganized cabling causing sudden downtime and lost productivity' },
                  { ar: 'مخاطر حادة لفقدان البيانات الحساسة أو التشفير بفيروسات الفدية', en: 'Acute ransomware risks and unbacked local hard drives' },
                  { ar: 'سقوط فواتير وإيميلات الشركة في السبام لغياب التوثيق الرقمي', en: 'Corporate emails and invoices landing in client spam folders' },
                  { ar: 'تحمل تكاليف ورواتب باهظة لفرق IT داخلية مع بطء حل المشاكل', en: 'High internal IT payroll overhead with sluggish incident resolution' },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-slate-400">
                    <span className="text-red-400 font-bold">✕</span>
                    <span>{isAr ? item.ar : item.en}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Nuzul Tech Side */}
            <div
              className={`rounded-2xl border p-5 ${
                isDark ? 'border-emerald-500/30 bg-emerald-950/20' : 'border-emerald-200 bg-emerald-50'
              }`}
            >
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-500 mb-3 flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                <span>{isAr ? 'بعد التحول (مع نُزول تِك):' : 'With Nuzul Tech Managed Architecture:'}</span>
              </div>
              <ul className="space-y-2.5 text-xs">
                {[
                  { ar: 'بنية سحابية وهجينة مستقرة بنسبة تشغيل ٩٩.٩٩٪ مع استعادة فورية', en: 'High-availability hybrid cloud with 99.99% uptime and instant failover' },
                  { ar: 'نسخ احتياطي يومي معزول كلياً لا يمكن تشفيره أو اختراقه', en: 'Immutable daily off-site cloud backups immune to ransomware attacks' },
                  { ar: 'توثيق DMARC مشدد يضمن وصول ١٠٠٪ من المراسلات لصندوق الوارد', en: 'Enforced DMARC/SPF/DKIM guaranteeing 100% inbox placement' },
                  { ar: 'قطاع تقني كامل كخدمة (ITaaS) بدعم فني مستمر واستجابة في ١٥ دقيقة', en: 'Full IT as a Service (ITaaS) with 24/7 dedicated engineering dispatch' },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 font-medium text-current">
                    <span className="text-emerald-500 font-bold">✓</span>
                    <span>{isAr ? item.ar : item.en}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
