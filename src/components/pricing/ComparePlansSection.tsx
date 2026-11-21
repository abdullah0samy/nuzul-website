import React, { useState, useRef, useEffect, useMemo } from 'react';
import {
  ALL_HOSTING_PLANS,
  HOSTING_PLANS,
  WEB_HOSTING_PLANS,
  WINDOWS_HOSTING_PLANS,
  HostingCategory,
  HostingPlan,
} from '../../data/nuzulData';
import { useApp } from '../../context/AppContext';
import {
  Check,
  ChevronDown,
  GitCompare,
  HelpCircle,
  AlertCircle,
  X,
  Filter,
} from 'lucide-react';
import {
  useComparePlansStore,
  toggleComparePlan,
  clearComparePlans,
  dismissMaxLimitWarning,
  setShowDifferencesOnly,
} from './comparePlansStore';

interface SpecRow {
  id: string;
  labelAr: string;
  labelEn: string;
  tooltipAr: string;
  tooltipEn: string;
  getValue: (plan: HostingPlan, lang: 'ar' | 'en') => string;
}

interface SpecCategory {
  id: string;
  titleAr: string;
  titleEn: string;
  rows: SpecRow[];
}

const COMPARE_FAMILY_TABS: { id: HostingCategory; ar: string; en: string }[] = [
  { id: 'vps', ar: 'Cloud VPS (KVM)', en: 'Cloud VPS (KVM)' },
  { id: 'web', ar: 'Managed Web & WP', en: 'Managed Web & WP' },
  { id: 'windows', ar: 'Windows & RDP', en: 'Windows Cloud & RDP' },
];

export const ComparePlansSection: React.FC = () => {
  const { lang, formatPrice, openServerConfigurator } = useApp();
  const [activeFamily, setActiveFamily] = useState<HostingCategory>('vps');
  const [openTooltipId, setOpenTooltipId] = useState<string | null>(null);
  const [collapsedCategories, setCollapsedCategories] = useState<Record<string, boolean>>({});
  const [stickyOffset, setStickyOffset] = useState<number>(0);
  const [activeMobileCardIdx, setActiveMobileCardIdx] = useState<number>(0);

  const tableRef = useRef<HTMLTableElement | null>(null);
  const theadRef = useRef<HTMLTableSectionElement | null>(null);
  const mobileTrackRef = useRef<HTMLDivElement | null>(null);

  const {
    selectedPlanIds,
    maxLimitWarning,
    showDifferencesOnly,
  } = useComparePlansStore();

  useEffect(() => {
    const updateStickyHeader = () => {
      if (!tableRef.current || !theadRef.current) return;
      const navbarHeight = 64;
      const tableRect = tableRef.current.getBoundingClientRect();
      const theadHeight = theadRef.current.offsetHeight || 120;

      if (tableRect.top < navbarHeight && tableRect.bottom - theadHeight > navbarHeight) {
        setStickyOffset(Math.round(navbarHeight - tableRect.top));
      } else {
        setStickyOffset(0);
      }
    };

    window.addEventListener('scroll', updateStickyHeader, { passive: true });
    window.addEventListener('resize', updateStickyHeader);
    updateStickyHeader();

    return () => {
      window.removeEventListener('scroll', updateStickyHeader);
      window.removeEventListener('resize', updateStickyHeader);
    };
  }, []);

  const toggleCategoryCollapse = (categoryId: string) => {
    setCollapsedCategories((prev) => ({
      ...prev,
      [categoryId]: !prev[categoryId],
    }));
  };

  const familyPlans = useMemo(() => {
    if (activeFamily === 'vps') return HOSTING_PLANS;
    if (activeFamily === 'web') return WEB_HOSTING_PLANS;
    return WINDOWS_HOSTING_PLANS;
  }, [activeFamily]);

  const validSelectedIds = useMemo(
    () =>
      selectedPlanIds.filter((id) =>
        ALL_HOSTING_PLANS.some((p) => p.id === id)
      ),
    [selectedPlanIds]
  );

  const visiblePlans: HostingPlan[] =
    validSelectedIds.length > 0
      ? ALL_HOSTING_PLANS.filter((p) => validSelectedIds.includes(p.id))
      : familyPlans;

  const specCategories: SpecCategory[] = useMemo(
    () => [
      {
        id: 'compute',
        titleAr: 'المعالج والذاكرة',
        titleEn: 'Compute & Memory',
        rows: [
          {
            id: 'vcpu',
            labelAr: 'أنوية المعالج (vCPU)',
            labelEn: 'vCPU Cores',
            tooltipAr: 'أنوية المعالجة المخصصة على معالجات AMD EPYC أو Intel Xeon.',
            tooltipEn: 'Allocated processor cores on AMD EPYC / Intel Xeon nodes.',
            getValue: (p) => p.cpu,
          },
          {
            id: 'ram',
            labelAr: 'الذاكرة العشوائية (RAM)',
            labelEn: 'Memory (RAM)',
            tooltipAr: 'سعة الذاكرة DDR4 ECC لضمان استقرار قواعد البيانات وأنظمة التشغيل.',
            tooltipEn: 'DDR4 ECC memory capacity for stable OS and database execution.',
            getValue: (p) => p.ram,
          },
          {
            id: 'isolation',
            labelAr: 'بيئة العزل والتشغيل',
            labelEn: 'Virtualization / Runtime',
            tooltipAr: 'عزل KVM مخصص للخوادم الافتراضية أو حاوية CloudLinux LVE للاستضافة المدارة.',
            tooltipEn: 'KVM kernel hypervisor for VPS/Windows or CloudLinux LVE for managed web.',
            getValue: (p) =>
              p.category === 'web'
                ? 'CloudLinux LVE / LiteSpeed'
                : 'KVM Hardware Virtualization',
          },
        ],
      },
      {
        id: 'storage',
        titleAr: 'التخزين واللقطات',
        titleEn: 'Storage & Snapshots',
        rows: [
          {
            id: 'nvme',
            labelAr: 'مساحة التخزين NVMe',
            labelEn: 'NVMe SSD Storage',
            tooltipAr: 'وحدات تخزين NVMe فائقة السرعة في مصفوفة RAID-10.',
            tooltipEn: 'Enterprise NVMe SSD capacity in RAID-10 configuration.',
            getValue: (p) => p.storage,
          },
          {
            id: 'backups',
            labelAr: 'اللقطات والنسخ الاحتياطي',
            labelEn: 'Snapshots & Backups',
            tooltipAr: 'لقطات استرجاع عند الطلب (Snapshots) أو نسخ احتياطي يومي.',
            tooltipEn: 'Included point-in-time Snapshots or automated daily off-site backups.',
            getValue: (p) => p.snapshots,
          },
        ],
      },
      {
        id: 'network',
        titleAr: 'الشبكة والحماية',
        titleEn: 'Network & Protection',
        rows: [
          {
            id: 'bandwidth',
            labelAr: 'حجم نقل البيانات',
            labelEn: 'Monthly Traffic Quota',
            tooltipAr: 'بيانات واردة غير محدودة مع حصة شهرية واضحة للبيانات الصادرة.',
            tooltipEn: 'Unlimited incoming traffic with generous monthly outbound quota.',
            getValue: (p) => p.bandwidth,
          },
          {
            id: 'port-speed',
            labelAr: 'سرعة منفذ الشبكة',
            labelEn: 'Uplink Port Speed',
            tooltipAr: 'سرعة الاتصال الشبكي المتاحة لكل خادم داخل مركز البيانات.',
            tooltipEn: 'Network uplink speed assigned to each instance.',
            getValue: (p) => p.portSpeed,
          },
          {
            id: 'ddos',
            labelAr: 'الحماية من هجمات DDoS',
            labelEn: 'DDoS & Edge Protection',
            tooltipAr: 'تنقية تلقائية لحركة المرور على مستوى الشبكة أو تطبيقات الويب.',
            tooltipEn: 'Automated L3/L4 network scrubbing or L7 Web Application Firewall.',
            getValue: (p) => p.ddos,
          },
        ],
      },
      {
        id: 'management',
        titleAr: 'الإدارة واتفاقية التشغيل',
        titleEn: 'Access & SLA',
        rows: [
          {
            id: 'panel',
            labelAr: 'لوحة التحكم والصلاحيات',
            labelEn: 'Access & Control Panel',
            tooltipAr: 'وسيلة الوصول والإدارة المتوفرة للخادم أو موقع الويب.',
            tooltipEn: 'Administrative console and remote protocol access.',
            getValue: (p) => p.panel,
          },
          {
            id: 'uptime-sla',
            labelAr: 'اتفاقية التوافر (SLA)',
            labelEn: 'Uptime SLA',
            tooltipAr: 'نسبة توافر العتاد والشبكة المنصوص عليها شهرياً.',
            tooltipEn: 'Documented monthly host and network availability target.',
            getValue: (p) => p.uptime,
          },
          {
            id: 'setup-fee',
            labelAr: 'رسوم الإعداد',
            labelEn: 'Setup Fee',
            tooltipAr: 'تفعيل الخادم دون أي رسوم تأسيس إضافية عند الاشتراك الشهري أو السنوي.',
            tooltipEn: 'Zero one-time provisioning fee across monthly and annual billing.',
            getValue: (_, l) => (l === 'ar' ? '0 ج.م (مجاني)' : '$0 / Free Setup'),
          },
        ],
      },
    ],
    []
  );

  const isRowDifferentAcrossVisiblePlans = (row: SpecRow): boolean => {
    const relevantValues = visiblePlans.map((p) => row.getValue(p, lang));
    if (relevantValues.length <= 1) return true;
    return new Set(relevantValues).size > 1;
  };

  const handleSelectPlan = (plan: HostingPlan) => {
    openServerConfigurator(plan, 'cai', 'yearly');
  };

  const scrollToMobileCompareCard = (index: number) => {
    setActiveMobileCardIdx(index);
    if (!mobileTrackRef.current) return;
    const cards = mobileTrackRef.current.querySelectorAll('[data-mobile-compare-card]');
    const card = cards[index] as HTMLElement | undefined;
    if (card) {
      card.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  };

  return (
    <section id="compare-plans" className="section-spacing bg-surface-band border-t border-token">
      <div className="container-nuzul">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-accent mb-2">
              {lang === 'ar' ? 'المواصفات الهندسية التفصيلية' : 'Detailed Hardware Specifications'}
            </p>
            <h2 className="text-2xl md:text-4xl font-bold text-main mb-3">
              {lang === 'ar'
                ? 'مقارنة الموارد والشبكة بين الخطط'
                : 'Side-by-Side Resource & Network Matrix'}
            </h2>
            <p className="text-muted text-sm sm:text-base leading-relaxed">
              {lang === 'ar'
                ? 'قارن أنوية المعالج، ذاكرة ECC، سعة NVMe، واللقطات الاحتياطية لكل فئة، أو اختر حتى 3 خطط للمقارنة المباشرة.'
                : 'Compare vCPU cores, ECC RAM, NVMe storage, and snapshot quotas per tier, or select up to 3 plans across categories.'}
            </p>
          </div>

          {validSelectedIds.length === 0 && (
            <div className="flex flex-wrap items-center gap-2 self-start lg:self-end">
              {COMPARE_FAMILY_TABS.map((fam) => {
                const active = activeFamily === fam.id;
                return (
                  <button
                    key={fam.id}
                    type="button"
                    onClick={() => {
                      setActiveFamily(fam.id);
                      setActiveMobileCardIdx(0);
                    }}
                    data-testid={`compare-family-tab-${fam.id}`}
                    className={`min-h-[40px] px-3.5 py-2 rounded-lg text-xs font-semibold border transition-colors whitespace-nowrap ${
                      active
                        ? 'bg-accent text-accent-contrast border-accent'
                        : 'bg-page text-main border-token hover-surface-2'
                    }`}
                  >
                    <bdi dir="ltr" className="ltr-num">
                      {lang === 'ar' ? fam.ar : fam.en}
                    </bdi>
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Interactive Compare & Filter Controls Toolbar */}
        <div
          data-testid="compare-controls-toolbar"
          className="clean-card p-4 sm:p-5 bg-page mb-6 flex flex-col lg:flex-row lg:items-center justify-between gap-4"
        >
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold text-main">
              <GitCompare className="w-4 h-4 text-accent shrink-0" />
              <span>
                {lang === 'ar'
                  ? `اختر حتى 3 خطط للمقارنة (${validSelectedIds.length}/3):`
                  : `Pin up to 3 plans for side-by-side comparison (${validSelectedIds.length}/3):`}
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {familyPlans.map((plan) => {
                const isSelected = validSelectedIds.includes(plan.id);
                return (
                  <button
                    key={plan.id}
                    type="button"
                    onClick={() => toggleComparePlan(plan.id)}
                    data-testid={`compare-plan-toggle-${plan.id}`}
                    aria-pressed={isSelected}
                    className={`min-h-[44px] px-3.5 py-2 rounded-lg text-xs font-semibold whitespace-nowrap border transition-colors inline-flex items-center gap-2 ${
                      isSelected
                        ? 'bg-accent text-accent-contrast border-accent'
                        : 'bg-surface text-main border-token hover-surface-2'
                    }`}
                  >
                    <span
                      className={`w-4 h-4 rounded flex items-center justify-center border ${
                        isSelected
                          ? 'bg-surface text-accent border-transparent'
                          : 'border-token bg-page'
                      }`}
                    >
                      {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                    </span>
                    <bdi dir="ltr" className="ltr-num">
                      {lang === 'ar' ? plan.nameAr : plan.nameEn}
                    </bdi>
                  </button>
                );
              })}

              {validSelectedIds.length > 0 && (
                <button
                  type="button"
                  onClick={clearComparePlans}
                  data-testid="toolbar-clear-compare-btn"
                  className="min-h-[44px] px-3 py-2 rounded-lg text-xs font-semibold whitespace-nowrap text-muted hover-text-main border border-token bg-surface"
                >
                  {lang === 'ar' ? 'عرض الفئة كاملة' : 'Show Category'}
                </button>
              )}
            </div>
          </div>

          <div className="flex items-center gap-3 self-start lg:self-center">
            <button
              type="button"
              onClick={() => setShowDifferencesOnly(!showDifferencesOnly)}
              data-testid="toggle-differences-only"
              aria-pressed={showDifferencesOnly}
              className={`min-h-[44px] px-4 py-2.5 rounded-lg text-xs font-semibold whitespace-nowrap border transition-colors inline-flex items-center gap-2 ${
                showDifferencesOnly
                  ? 'bg-accent text-accent-contrast border-accent'
                  : 'bg-surface text-main border-token hover-surface-2'
              }`}
            >
              <Filter className="w-3.5 h-3.5 shrink-0" />
              <span>
                {lang === 'ar' ? 'إظهار الفروقات فقط' : 'Show differences only'}
              </span>
            </button>
          </div>
        </div>

        {/* 4th Plan Selection Warning Alert */}
        {maxLimitWarning && (
          <div
            role="alert"
            data-testid="compare-limit-alert"
            className="mb-6 p-4 rounded-xl bg-surface-2 border border-accent flex items-center justify-between gap-4"
          >
            <div className="flex items-center gap-3 text-sm font-semibold text-main">
              <AlertCircle className="w-5 h-5 text-accent shrink-0" />
              <span>
                {lang === 'ar'
                  ? 'يمكن مقارنة 3 خطط كحد أقصى في وقت واحد. قم بإلغاء تحديد إحدى الخطط المختارة أولاً.'
                  : 'A maximum of 3 plans can be pinned at once. Deselect one active plan first.'}
              </span>
            </div>
            <button
              type="button"
              onClick={dismissMaxLimitWarning}
              aria-label={lang === 'ar' ? 'إغلاق التنبيه' : 'Dismiss warning'}
              className="min-h-[44px] min-w-[44px] inline-flex items-center justify-center rounded-lg text-muted hover-text-main"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* MOBILE VIEW (<768px) */}
        <div className="md:hidden" data-testid="mobile-swipeable-compare-cards">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-3">
            {visiblePlans.map((plan, idx) => {
              const active = activeMobileCardIdx === idx;
              return (
                <button
                  key={plan.id}
                  type="button"
                  onClick={() => scrollToMobileCompareCard(idx)}
                  data-testid={`mobile-compare-tab-${plan.id}`}
                  className={`min-h-[44px] px-3.5 py-2 rounded-lg text-xs font-semibold whitespace-nowrap border transition-colors ${
                    active
                      ? 'bg-accent text-accent-contrast border-accent'
                      : 'bg-page text-main border-token'
                  }`}
                >
                  <bdi dir="ltr" className="ltr-num">
                    {lang === 'ar' ? plan.nameAr : plan.nameEn}
                  </bdi>
                </button>
              );
            })}
          </div>

          <div
            ref={mobileTrackRef}
            className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4"
          >
            {visiblePlans.map((plan, idx) => (
              <div
                key={plan.id}
                data-mobile-compare-card={plan.id}
                onFocus={() => setActiveMobileCardIdx(idx)}
                className={`clean-card p-5 bg-page w-[88vw] max-w-[340px] shrink-0 snap-center flex flex-col justify-between ${
                  plan.popular ? 'border-accent ring-1 ring-[var(--accent)]' : ''
                }`}
              >
                <div>
                  <div className="pb-4 mb-4 border-b border-token">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="text-base font-bold text-main">
                        <bdi dir="ltr" className="ltr-num">
                          {lang === 'ar' ? plan.nameAr : plan.nameEn}
                        </bdi>
                      </span>
                      {plan.popular && (
                        <span className="px-2 py-0.5 rounded bg-accent text-accent-contrast text-[11px] font-semibold whitespace-nowrap">
                          {lang === 'ar' ? 'الأكثر طلباً' : 'Popular'}
                        </span>
                      )}
                    </div>
                    <div className="text-xl font-bold text-accent mb-3">
                      <bdi dir="ltr" className="ltr-num">
                        {formatPrice(plan.monthlyPriceEGP)}
                      </bdi>
                      <span className="text-xs font-normal text-muted ms-1">
                        /{lang === 'ar' ? 'شهرياً' : 'mo'}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleSelectPlan(plan)}
                      className={`w-full min-h-[44px] py-2.5 px-3 text-xs font-semibold whitespace-nowrap rounded-lg transition-colors ${
                        plan.popular ? 'btn-primary' : 'btn-secondary'
                      }`}
                    >
                      {lang === 'ar' ? 'طلب الخطة' : 'Select Plan'}
                    </button>
                  </div>

                  <div className="space-y-4">
                    {specCategories.map((category) => {
                      const isCollapsed = Boolean(collapsedCategories[category.id]);
                      const filteredRows = showDifferencesOnly
                        ? category.rows.filter(isRowDifferentAcrossVisiblePlans)
                        : category.rows;
                      if (filteredRows.length === 0) return null;

                      return (
                        <div key={category.id} className="border border-token rounded-lg overflow-hidden">
                          <button
                            type="button"
                            onClick={() => toggleCategoryCollapse(category.id)}
                            aria-expanded={!isCollapsed}
                            className="w-full min-h-[44px] px-3.5 py-2.5 bg-surface-2 text-start text-xs font-bold text-main flex items-center justify-between gap-2"
                          >
                            <span>{lang === 'ar' ? category.titleAr : category.titleEn}</span>
                            <ChevronDown
                              className={`w-4 h-4 text-muted transition-transform ${
                                isCollapsed ? '-rotate-90' : ''
                              }`}
                            />
                          </button>
                          {!isCollapsed && (
                            <dl className="divide-y border-token bg-surface">
                              {filteredRows.map((row) => (
                                <div
                                  key={row.id}
                                  className="px-3.5 py-2.5 flex items-center justify-between gap-2 text-xs"
                                >
                                  <dt className="text-muted font-medium">
                                    {lang === 'ar' ? row.labelAr : row.labelEn}
                                  </dt>
                                  <dd className="font-semibold text-main text-end">
                                    <bdi dir="ltr" className="ltr-num">
                                      {row.getValue(plan, lang)}
                                    </bdi>
                                  </dd>
                                </div>
                              ))}
                            </dl>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* DESKTOP & TABLET VIEW (>=768px) */}
        <div className="hidden md:block glass-panel overflow-x-auto relative">
          <table
            ref={tableRef}
            className="w-full text-start border-collapse min-w-[720px]"
            aria-label={
              lang === 'ar'
                ? 'جدول مقارنة مواصفات الخوادم والاستضافة'
                : 'Hosting and Server Specifications Comparison Table'
            }
          >
            <thead
              ref={theadRef}
              data-testid="compare-table-thead"
              style={
                stickyOffset > 0
                  ? {
                      transform: `translate3d(0, ${stickyOffset}px, 0)`,
                      position: 'relative',
                      zIndex: 30,
                    }
                  : {
                      position: 'relative',
                      zIndex: 20,
                    }
              }
              className="bg-surface border-b-2 border-token transition-shadow"
            >
              <tr className="bg-surface">
                <th
                  scope="col"
                  className="p-5 text-start font-bold text-main text-base w-64 sticky start-0 bg-surface z-30 border-e border-token align-bottom"
                >
                  <span className="block text-xs font-semibold text-muted mb-1">
                    {lang === 'ar' ? 'المواصفة الهندسية' : 'Hardware & SLA'}
                  </span>
                  <span>{lang === 'ar' ? 'خطة التشغيل' : 'Instance Tier'}</span>
                </th>
                {visiblePlans.map((plan) => (
                  <th
                    key={plan.id}
                    scope="col"
                    className={`p-5 text-center align-top min-w-[165px] transition-colors ${
                      plan.popular ? 'bg-surface-2' : 'bg-surface'
                    }`}
                  >
                    <div className="flex flex-col items-center justify-between h-full gap-3">
                      <div className="space-y-1">
                        {plan.popular ? (
                          <span className="inline-block px-2.5 py-0.5 rounded bg-accent text-accent-contrast text-xs font-semibold mb-1 whitespace-nowrap">
                            {lang === 'ar' ? 'الأكثر طلباً' : 'Most Popular'}
                          </span>
                        ) : (
                          <span className="inline-block h-5 mb-1" aria-hidden="true" />
                        )}
                        <div className="text-base font-bold text-main">
                          <bdi dir="ltr" className="ltr-num">
                            {lang === 'ar' ? plan.nameAr : plan.nameEn}
                          </bdi>
                        </div>
                        <div className="text-xl font-bold text-accent">
                          <bdi dir="ltr" className="ltr-num">
                            {formatPrice(plan.monthlyPriceEGP)}
                          </bdi>
                          <span className="text-xs font-normal text-muted ms-1">
                            /{lang === 'ar' ? 'شهرياً' : 'mo'}
                          </span>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => handleSelectPlan(plan)}
                        data-testid={`thead-cta-${plan.id}`}
                        className={`w-full min-h-[44px] py-2 px-3 text-xs font-semibold whitespace-nowrap rounded-lg transition-colors ${
                          plan.popular ? 'btn-primary' : 'btn-secondary'
                        }`}
                      >
                        {lang === 'ar' ? 'طلب الخطة' : 'Configure & Order'}
                      </button>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className="divide-y border-token">
              {specCategories.map((category) => {
                const isCollapsed = Boolean(collapsedCategories[category.id]);
                const filteredRows = showDifferencesOnly
                  ? category.rows.filter(isRowDifferentAcrossVisiblePlans)
                  : category.rows;

                return (
                  <React.Fragment key={category.id}>
                    <tr className="bg-surface-2 border-y border-token">
                      <th
                        colSpan={visiblePlans.length + 1}
                        scope="colgroup"
                        data-testid={`group-header-${category.id}`}
                        className="p-0 text-start text-sm font-bold text-main"
                      >
                        <button
                          type="button"
                          onClick={() => toggleCategoryCollapse(category.id)}
                          data-testid={`group-toggle-${category.id}`}
                          aria-expanded={!isCollapsed}
                          className="w-full py-3.5 px-5 text-start text-sm font-bold text-main flex items-center justify-between gap-3 hover-surface-2 transition-colors"
                        >
                          <span>{lang === 'ar' ? category.titleAr : category.titleEn}</span>
                          <ChevronDown
                            className={`w-4 h-4 text-muted transition-transform shrink-0 ${
                              isCollapsed ? '-rotate-90' : ''
                            }`}
                          />
                        </button>
                      </th>
                    </tr>

                    {!isCollapsed &&
                      filteredRows.map((row) => {
                        const isTooltipOpen = openTooltipId === row.id;
                        return (
                          <tr
                            key={row.id}
                            data-testid={`spec-row-${row.id}`}
                            className="bg-surface hover-surface-2 transition-colors border-b border-token"
                          >
                            <th
                              scope="row"
                              className="p-4 text-start text-sm font-semibold text-main sticky start-0 bg-surface z-10 border-e border-token"
                            >
                              <div className="flex items-center justify-between gap-2">
                                <span>{lang === 'ar' ? row.labelAr : row.labelEn}</span>
                                <div className="relative shrink-0">
                                  <button
                                    type="button"
                                    onClick={() => setOpenTooltipId(isTooltipOpen ? null : row.id)}
                                    aria-expanded={isTooltipOpen}
                                    aria-label={
                                      lang === 'ar'
                                        ? `توضيح حول ${row.labelAr}`
                                        : `More info about ${row.labelEn}`
                                    }
                                    className="p-1.5 rounded-md text-muted hover-text-accent transition-colors"
                                  >
                                    <HelpCircle className="w-4 h-4" />
                                  </button>
                                  {isTooltipOpen && (
                                    <div
                                      role="tooltip"
                                      className="absolute z-40 bottom-full mb-2 start-0 w-64 p-3 rounded-lg bg-surface border border-token shadow-md text-xs font-normal text-main leading-relaxed"
                                    >
                                      <div className="flex items-start justify-between gap-2 mb-1">
                                        <span className="font-bold text-accent">
                                          {lang === 'ar' ? row.labelAr : row.labelEn}
                                        </span>
                                        <button
                                          type="button"
                                          onClick={() => setOpenTooltipId(null)}
                                          aria-label={
                                            lang === 'ar' ? 'إغلاق التوضيح' : 'Close tooltip'
                                          }
                                          className="text-muted hover-text-main"
                                        >
                                          <X className="w-3.5 h-3.5" />
                                        </button>
                                      </div>
                                      <p className="text-muted">
                                        {lang === 'ar' ? row.tooltipAr : row.tooltipEn}
                                      </p>
                                    </div>
                                  )}
                                </div>
                              </div>
                            </th>

                            {visiblePlans.map((plan) => (
                              <td
                                key={plan.id}
                                data-testid={`spec-cell-${row.id}-${plan.id}`}
                                className={`p-4 text-center text-sm font-medium text-main ${
                                  plan.popular ? 'bg-surface-2' : ''
                                }`}
                              >
                                <bdi dir="ltr" className="ltr-num font-semibold text-main">
                                  {row.getValue(plan, lang)}
                                </bdi>
                              </td>
                            ))}
                          </tr>
                        );
                      })}
                  </React.Fragment>
                );
              })}
            </tbody>

            <tfoot>
              <tr className="bg-surface border-t-2 border-token">
                <td className="p-5 font-bold text-main text-sm sticky start-0 bg-surface z-10 border-e border-token">
                  {lang === 'ar' ? 'التشغيل الفوري' : 'Deployment'}
                </td>
                {visiblePlans.map((plan) => (
                  <td
                    key={plan.id}
                    className={`p-5 text-center ${plan.popular ? 'bg-surface-2' : 'bg-surface'}`}
                  >
                    <button
                      type="button"
                      onClick={() => handleSelectPlan(plan)}
                      data-testid={`tfoot-cta-${plan.id}`}
                      className={`w-full min-h-[44px] py-2.5 px-4 text-sm font-semibold whitespace-nowrap rounded-lg transition-colors ${
                        plan.popular ? 'btn-primary' : 'btn-secondary'
                      }`}
                    >
                      {lang === 'ar' ? 'إعداد وطلب الخادم' : 'Configure & Order'}
                    </button>
                  </td>
                ))}
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

      {/* Sticky Compare Bar */}
      {validSelectedIds.length > 0 && (
        <div
          data-testid="sticky-compare-bar"
          role="region"
          aria-label={lang === 'ar' ? 'شريط مقارنة الخطط المختارة' : 'Selected plans comparison bar'}
          className="fixed bottom-4 inset-x-0 z-40 px-4 pointer-events-none"
        >
          <div className="container-nuzul">
            <div className="pointer-events-auto clean-card p-3.5 sm:p-4 bg-surface border-2 border-accent shadow-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-2">
                <span
                  data-testid="sticky-compare-count"
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-accent text-accent-contrast text-xs font-bold whitespace-nowrap"
                >
                  <GitCompare className="w-3.5 h-3.5" />
                  <bdi dir="ltr" className="ltr-num">
                    {validSelectedIds.length}/3
                  </bdi>
                  <span>{lang === 'ar' ? 'خطط للمقارنة' : 'Plans Pinned'}</span>
                </span>

                {visiblePlans.map((plan) => (
                  <span
                    key={plan.id}
                    data-testid={`sticky-chip-${plan.id}`}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-surface-2 border border-token text-xs font-semibold text-main whitespace-nowrap"
                  >
                    <bdi dir="ltr" className="ltr-num">
                      {lang === 'ar' ? plan.nameAr : plan.nameEn}
                    </bdi>
                    <button
                      type="button"
                      onClick={() => toggleComparePlan(plan.id)}
                      aria-label={
                        lang === 'ar'
                          ? `إزالة ${plan.nameAr} من المقارنة`
                          : `Remove ${plan.nameEn} from comparison`
                      }
                      className="text-muted hover-text-main p-0.5"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto justify-end">
                <button
                  type="button"
                  onClick={() => setShowDifferencesOnly(!showDifferencesOnly)}
                  data-testid="sticky-bar-diff-toggle"
                  aria-pressed={showDifferencesOnly}
                  className={`min-h-[44px] px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap border transition-colors ${
                    showDifferencesOnly
                      ? 'bg-accent text-accent-contrast border-accent'
                      : 'bg-page text-main border-token'
                  }`}
                >
                  {lang === 'ar' ? 'إظهار الفروقات فقط' : 'Differences Only'}
                </button>

                <button
                  type="button"
                  onClick={clearComparePlans}
                  data-testid="clear-compare-btn"
                  className="min-h-[44px] px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap bg-page text-muted hover-text-main border border-token"
                >
                  {lang === 'ar' ? 'إلغاء التحديد' : 'Clear Selection'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
