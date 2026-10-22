import React, { useState } from 'react';
import {
  Check,
  X,
  Server,
  Cpu,
  HardDrive,
  Activity,
  ShieldCheck,
  Globe,
  SlidersHorizontal,
  ChevronRight,
  ChevronLeft,
  Sparkles,
  Zap,
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { NUZUL_HOSTING_PLANS } from '../../data/nuzulData';
import { RevealOnScroll } from '../common/RevealOnScroll';

interface TechnicalSpec {
  categoryAr: string;
  categoryEn: string;
  specs: {
    labelAr: string;
    labelEn: string;
    values: Record<string, string | boolean>;
  }[];
}

// Technical specifications comparison database
const TECHNICAL_SPECS: TechnicalSpec[] = [
  {
    categoryAr: 'العتاد وقدرات المعالجة (Compute & Hardware)',
    categoryEn: 'Compute & Hardware Specifications',
    specs: [
      {
        labelAr: 'أنوية المعالج (CPU Cores)',
        labelEn: 'vCPU Cores',
        values: {
          'shared-cpanel': '1 vCPU (Shared Core)',
          'wp-managed': '2 vCPU (High Priority)',
          'linux-vps': '2 Dedicated vCPU (Intel Xeon Gold)',
          'windows-rdp': '4 High-Clock vCPU (3.8+ GHz)',
        },
      },
      {
        labelAr: 'الذاكرة العشوائية (RAM Memory)',
        labelEn: 'RAM Memory',
        values: {
          'shared-cpanel': '2 GB DDR4 RAM',
          'wp-managed': '4 GB High-Speed RAM',
          'linux-vps': '4 GB DDR4 ECC Dedicated',
          'windows-rdp': '8 GB High-Speed RAM',
        },
      },
      {
        labelAr: 'نوع وحجم التخزين (NVMe Storage)',
        labelEn: 'NVMe Gen4 Storage',
        values: {
          'shared-cpanel': '25 GB NVMe Gen4',
          'wp-managed': '40 GB Enterprise NVMe',
          'linux-vps': '60 GB High-IOPS NVMe',
          'windows-rdp': '100 GB High-IOPS NVMe',
        },
      },
      {
        labelAr: 'معمارية المحاكاة الافتراضية (Virtualization)',
        labelEn: 'Virtualization Platform',
        values: {
          'shared-cpanel': 'CloudLinux OS Isolation',
          'wp-managed': 'Isolated LiteSpeed Container',
          'linux-vps': '100% Hardware KVM Isolation',
          'windows-rdp': 'Dedicated KVM / Proxmox VE',
        },
      },
    ],
  },
  {
    categoryAr: 'الشبكة والاتصال وسعة البيانات (Network & Bandwidth)',
    categoryEn: 'Networking & Data Transfer',
    specs: [
      {
        labelAr: 'سعة نقل البيانات الشهرية (Bandwidth)',
        labelEn: 'Monthly Bandwidth',
        values: {
          'shared-cpanel': '500 GB / شهر',
          'wp-managed': '1,500 GB (1.5 TB) / شهر',
          'linux-vps': '3,000 GB (3 TB) غير محدود',
          'windows-rdp': '5,000 GB (5 TB) غير محدود',
        },
      },
      {
        labelAr: 'سرعة منفذ الشبكة (Network Port)',
        labelEn: 'Uplink Port Speed',
        values: {
          'shared-cpanel': '1 Gbps Redundant',
          'wp-managed': '1 Gbps Dedicated Link',
          'linux-vps': '1 Gbps High-Speed Uplink',
          'windows-rdp': '1 Gbps Low-Latency Link',
        },
      },
      {
        labelAr: 'عناوين IP مخصصة (Dedicated IP)',
        labelEn: 'Dedicated IPv4 / IPv6',
        values: {
          'shared-cpanel': false,
          'wp-managed': 'متاح كإضافة اختيارية',
          'linux-vps': '1x IPv4 مخصص + /64 IPv6',
          'windows-rdp': '1x IPv4 مخصص فوري',
        },
      },
      {
        labelAr: 'مواقع مراكز البيانات المتاحة (DC Location)',
        labelEn: 'Available Datacenters',
        values: {
          'shared-cpanel': 'القاهرة / فرانكفورت',
          'wp-managed': 'القاهرة / فرانكفورت',
          'linux-vps': 'القاهرة (4ms) أو فرانكفورت (28ms)',
          'windows-rdp': 'القاهرة (4ms) أو فرانكفورت (28ms)',
        },
      },
    ],
  },
  {
    categoryAr: 'نظام التشغيل والأمان والنسخ الاحتياطي (OS, Security & Backups)',
    categoryEn: 'Operating System & Security',
    specs: [
      {
        labelAr: 'صلاحيات الوصول الكامل (Root / Admin)',
        labelEn: 'Root / Administrator Access',
        values: {
          'shared-cpanel': false,
          'wp-managed': false,
          'linux-vps': true,
          'windows-rdp': true,
        },
      },
      {
        labelAr: 'أنظمة التشغيل المدعومة (Operating Systems)',
        labelEn: 'Supported Operating Systems',
        values: {
          'shared-cpanel': 'CloudLinux 9 Enterprise',
          'wp-managed': 'LiteSpeed Enterprise Linux',
          'linux-vps': 'Ubuntu / Debian / AlmaLinux / Rocky',
          'windows-rdp': 'Windows Server 2022 / 2025 / Win 11 Pro',
        },
      },
      {
        labelAr: 'حماية متقدمة ضد هجمات (DDoS Shield)',
        labelEn: 'Anti-DDoS Protection',
        values: {
          'shared-cpanel': '1.2 Tbps L3/L4/L7 Shield',
          'wp-managed': '1.2 Tbps L3/L4/L7 Shield + WAF',
          'linux-vps': '1.2 Tbps Automated Mitigation',
          'windows-rdp': '1.2 Tbps Automated Mitigation',
        },
      },
      {
        labelAr: 'النسخ الاحتياطي الآلي (Automated Backups)',
        labelEn: 'Automated Snapshots & Backups',
        values: {
          'shared-cpanel': 'نسخ احتياطي يومي مجدول',
          'wp-managed': 'نسخ احتياطي يومي وسحابي خارجي',
          'linux-vps': 'لقطات Snapshots أسبوعية آلية',
          'windows-rdp': 'نسخ احتياطي أسبوعي آلي كامل',
        },
      },
      {
        labelAr: 'لوحة التحكم وإدارة الخادم (Control Panel)',
        labelEn: 'Control Panel',
        values: {
          'shared-cpanel': 'cPanel Official Suite',
          'wp-managed': 'cPanel + LiteSpeed Cache Toolkit',
          'linux-vps': 'لوحة سحابية لإعادة التثبيت وإعادة التشغيل (KVM)',
          'windows-rdp': 'بروتوكول RDP مباشر + لوحة تحكم في الطاقة',
        },
      },
    ],
  },
  {
    categoryAr: 'الدعم الفني ومستوى الخدمة (SLA & Support)',
    categoryEn: 'SLA Guarantee & Engineering Support',
    specs: [
      {
        labelAr: 'ضمان وقت التشغيل الموثق (Uptime SLA)',
        labelEn: 'Uptime SLA Guarantee',
        values: {
          'shared-cpanel': '99.9%',
          'wp-managed': '99.95%',
          'linux-vps': '99.99%',
          'windows-rdp': '99.99%',
        },
      },
      {
        labelAr: 'المساعدة في نقل المواقع والبيانات (Migration)',
        labelEn: 'Free Seamless Migration',
        values: {
          'shared-cpanel': true,
          'wp-managed': true,
          'linux-vps': 'متاح عبر فريق الدعم التقني',
          'windows-rdp': 'مساعد في إعداد بيئة العمل',
        },
      },
      {
        labelAr: 'دعم فني هندسي مصري مباشر (Support)',
        labelEn: '24/7 Engineering Support',
        values: {
          'shared-cpanel': 'تذاكر ودعم فوري',
          'wp-managed': 'تذاكر وهاتف 24/7',
          'linux-vps': 'دعم متخصص على مدار الساعة',
          'windows-rdp': 'دعم مباشر + مساعدة عبر الهاتف والواتساب',
        },
      },
    ],
  },
];

export const ComparePlansSection: React.FC = () => {
  const { locale, formatPrice, addToCart, theme } = useApp();
  const isAr = locale === 'ar';
  const isDark = theme === 'dark';

  // State to toggle which plans are selected for comparison (default: all 4 or 3 active)
  const [selectedPlanIds, setSelectedPlanIds] = useState<string[]>([
    'shared-cpanel',
    'linux-vps',
    'windows-rdp',
  ]);

  const togglePlanSelection = (planId: string) => {
    if (selectedPlanIds.includes(planId)) {
      // Keep at least 2 plans selected
      if (selectedPlanIds.length > 2) {
        setSelectedPlanIds(selectedPlanIds.filter((id) => id !== planId));
      }
    } else {
      setSelectedPlanIds([...selectedPlanIds, planId]);
    }
  };

  const activePlans = NUZUL_HOSTING_PLANS.filter((p) => selectedPlanIds.includes(p.id));

  return (
    <section
      id="compare-plans"
      className={`relative overflow-hidden scroll-mt-24 px-4 py-16 sm:py-20 sm:px-6 lg:px-8 border-t transition-colors ${
        isDark ? 'bg-[#0a101d] border-white/10 text-white' : 'bg-slate-100/70 border-slate-200 text-slate-900'
      }`}
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <RevealOnScroll direction="up" threshold={0.2}>
          <div className="mx-auto max-w-3xl text-center mb-10">
            <div className="eyebrow-mono justify-center text-emerald-600 dark:text-emerald-400">
              <SlidersHorizontal className="h-4 w-4" />
              <span>{isAr ? 'المقارنة الفنية الدقيقة' : 'SIDE-BY-SIDE SPECIFICATIONS'}</span>
            </div>

            <h2 className="mt-3 text-2xl font-black leading-tight sm:text-3xl lg:text-4xl">
              {isAr ? 'مقارنة مواصفات خوادم واستضافة نُزول تِك' : 'Compare VPS & Cloud Hosting Specifications'}
            </h2>

            <p className={`mt-3 text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              {isAr
                ? 'قارن بين خيارات السيرفرات السحابية والـ VPS بحسب مواصفات المعالج (CPU)، الذاكرة (RAM)، التخزين وسعة الباندويث لاختيار البنية الملائمة لاحتياجاتك.'
                : 'Evaluate cloud and VPS hosting plans side-by-side by CPU cores, RAM memory, NVMe storage, bandwidth, and SLA to choose the ideal infrastructure.'}
            </p>
          </div>
        </RevealOnScroll>

        {/* Interactive Plan Selector Filter Bar */}
        <div className="mb-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          <span className="text-xs font-semibold text-slate-400 ml-1">
            {isAr ? 'اختر الخطط المراد مقارنتها (حدد خطتين على الأقل):' : 'Select plans to compare (min. 2):'}
          </span>
          <div className="flex flex-wrap items-center gap-2">
            {NUZUL_HOSTING_PLANS.map((plan) => {
              const isSelected = selectedPlanIds.includes(plan.id);
              const planName = isAr ? plan.nameAr : plan.nameEn;
              return (
                <button
                  key={plan.id}
                  type="button"
                  onClick={() => togglePlanSelection(plan.id)}
                  className={`inline-flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-bold transition-all cursor-pointer border ${
                    isSelected
                      ? 'bg-emerald-500/15 border-emerald-500 text-emerald-600 dark:text-emerald-400 shadow-sm'
                      : isDark
                      ? 'bg-white/5 border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
                      : 'bg-white border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                  aria-pressed={isSelected}
                >
                  <span
                    className={`h-2 w-2 rounded-full ${
                      isSelected ? 'bg-emerald-500' : 'bg-slate-400 opacity-60'
                    }`}
                  />
                  <span>{planName}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Specifications Comparison Table Container */}
        <div
          className={`overflow-hidden rounded-2xl border shadow-xl backdrop-blur-xl transition-colors ${
            isDark ? 'bg-[#0d1524] border-white/10' : 'bg-white border-slate-200'
          }`}
        >
          {/* Scroll wrapper for mobile responsiveness */}
          <div className="overflow-x-auto">
            <table className="w-full text-right border-collapse min-w-[700px]" dir={isAr ? 'rtl' : 'ltr'}>
              {/* Table Header: Plan Names, Pricing & Deploy Button */}
              <thead>
                <tr className={`border-b ${isDark ? 'border-white/10 bg-white/[0.02]' : 'border-slate-200 bg-slate-50/70'}`}>
                  <th className="p-4 sm:p-6 w-[280px] min-w-[240px] text-start align-top">
                    <span className="text-xs uppercase font-mono tracking-wider text-slate-400">
                      {isAr ? 'المواصفة التقنية' : 'Technical Metric'}
                    </span>
                    <p className="mt-1 text-sm font-bold text-slate-700 dark:text-slate-300">
                      {isAr ? `مقارنة ${activePlans.length} خطط مختارة` : `Comparing ${activePlans.length} selected plans`}
                    </p>
                  </th>

                  {activePlans.map((plan) => {
                    const planName = isAr ? plan.nameAr : plan.nameEn;
                    return (
                      <th
                        key={plan.id}
                        className={`p-4 sm:p-6 text-center align-top border-s ${
                          isDark ? 'border-white/10' : 'border-slate-200'
                        } ${plan.popular ? (isDark ? 'bg-emerald-950/20' : 'bg-emerald-50/50') : ''}`}
                      >
                        <div className="flex flex-col items-center justify-between h-full gap-3">
                          <div>
                            {plan.popular && (
                              <span className="inline-flex items-center gap-1 mb-2 rounded-full border border-emerald-400/40 bg-emerald-400/10 px-2.5 py-0.5 font-mono text-[10px] font-bold text-emerald-600 dark:text-emerald-400">
                                <Sparkles className="h-3 w-3" />
                                {isAr ? 'الأكثر طلباً' : 'Popular'}
                              </span>
                            )}
                            <h3 className="text-base font-bold text-slate-900 dark:text-white">{planName}</h3>
                          </div>

                          <div className="my-1">
                            <span className="text-[11px] text-slate-400 block">{isAr ? 'تبدأ من' : 'From'}</span>
                            <div className="text-2xl font-black text-emerald-600 dark:text-emerald-400 font-mono">
                              {formatPrice(plan.basePriceEGP)}
                              <span className="text-xs font-normal text-slate-400">/{isAr ? 'شهر' : 'mo'}</span>
                            </div>
                          </div>

                          <button
                            type="button"
                            onClick={() => addToCart(plan, 12, 'cairo')}
                            className={`btn w-full py-2 px-3 text-xs font-bold uppercase tracking-wider rounded-xl cursor-pointer ${
                              plan.popular ? 'btn-primary shadow-md shadow-emerald-500/20' : 'btn-secondary'
                            }`}
                          >
                            <span>{isAr ? 'حجز وتفعيل' : 'Deploy Now'}</span>
                          </button>
                        </div>
                      </th>
                    );
                  })}
                </tr>
              </thead>

              {/* Table Body: Grouped Technical Specifications */}
              <tbody className="divide-y divide-current/5">
                {TECHNICAL_SPECS.map((group, groupIdx) => (
                  <React.Fragment key={groupIdx}>
                    {/* Category Header Row */}
                    <tr className={isDark ? 'bg-white/[0.04]' : 'bg-slate-100/80'}>
                      <td
                        colSpan={activePlans.length + 1}
                        className="py-3 px-4 sm:px-6 text-xs font-bold font-mono tracking-wider uppercase text-emerald-600 dark:text-emerald-400"
                      >
                        {isAr ? group.categoryAr : group.categoryEn}
                      </td>
                    </tr>

                    {/* Individual Spec Rows */}
                    {group.specs.map((spec, specIdx) => (
                      <tr
                        key={specIdx}
                        className={`transition-colors hover:bg-emerald-500/[0.03] ${
                          isDark ? 'even:bg-white/[0.01]' : 'even:bg-slate-50/50'
                        }`}
                      >
                        {/* Spec Name / Label */}
                        <td className="p-3 sm:p-4 text-xs font-medium text-slate-600 dark:text-slate-300">
                          {isAr ? spec.labelAr : spec.labelEn}
                        </td>

                        {/* Values for each active plan */}
                        {activePlans.map((plan) => {
                          const val = spec.values[plan.id];
                          return (
                            <td
                              key={plan.id}
                              className={`p-3 sm:p-4 text-center text-xs border-s ${
                                isDark ? 'border-white/10' : 'border-slate-200'
                              } ${
                                plan.popular
                                  ? isDark
                                    ? 'bg-emerald-950/10 font-medium'
                                    : 'bg-emerald-50/20 font-medium'
                                  : ''
                              }`}
                            >
                              {typeof val === 'boolean' ? (
                                val ? (
                                  <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
                                    <Check className="h-4 w-4" />
                                  </span>
                                ) : (
                                  <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-slate-500/10 text-slate-400">
                                    <X className="h-3.5 w-3.5" />
                                  </span>
                                )
                              ) : (
                                <span className="font-medium text-slate-800 dark:text-slate-200">{val}</span>
                              )}
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>

          {/* Table Footer Note */}
          <div
            className={`p-4 sm:p-5 text-center text-xs border-t ${
              isDark ? 'border-white/10 text-slate-400 bg-white/[0.01]' : 'border-slate-200 text-slate-500 bg-slate-50'
            }`}
          >
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
              <span className="flex items-center gap-1.5">
                <Check className="h-4 w-4 text-emerald-500" />
                <span>{isAr ? 'تسليم وإعداد فوري مع كافة الخطط' : 'Instant Automated Provisioning'}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-emerald-500" />
                <span>{isAr ? 'تأمين كامل ضد هجمات حجب الخدمة DDoS' : 'Enterprise DDoS Shield Included'}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Globe className="h-4 w-4 text-emerald-500" />
                <span>{isAr ? 'إمكانية النقل والترقية بين الخطط دون انقطاع' : 'Zero-Downtime Live Scale-Up'}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
