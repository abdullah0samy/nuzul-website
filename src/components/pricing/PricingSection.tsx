import React, { useState, useRef } from 'react';
import {
  HOSTING_PLANS,
  WEB_HOSTING_PLANS,
  WINDOWS_HOSTING_PLANS,
  HostingCategory,
  HostingPlan,
} from '../../data/nuzulData';
import { useApp, Currency } from '../../context/AppContext';
import { Check, ChevronDown, GitCompare, MapPin } from 'lucide-react';
import {
  useComparePlansStore,
  toggleComparePlan,
} from './comparePlansStore';

const CATEGORY_TABS: {
  id: HostingCategory;
  labelAr: string;
  labelEn: string;
  descAr: string;
  descEn: string;
}[] = [
  {
    id: 'vps',
    labelAr: 'سيرفرات Cloud VPS (KVM)',
    labelEn: 'Cloud VPS (KVM)',
    descAr: 'عزل KVM مخصص، معالجات AMD EPYC/Xeon، هاردات NVMe RAID-10، وترافيك 32 TB شهرياً.',
    descEn: 'Dedicated KVM isolation, AMD EPYC/Xeon vCPU, NVMe RAID-10 storage, and 32 TB outbound traffic.',
  },
  {
    id: 'web',
    labelAr: 'استضافة مواقع وووردبريس',
    labelEn: 'Managed Web & WP',
    descAr: 'سيرفرات LiteSpeed مع LSCache، لوحة cPanel، شهادات SSL مجانية، وBackup يومي أوتوماتيك.',
    descEn: 'LiteSpeed Enterprise with LSCache, cPanel/WHM, automated AutoSSL, and daily backups.',
  },
  {
    id: 'windows',
    labelAr: 'سيرفرات Windows & RDP',
    labelEn: 'Windows Cloud & RDP',
    descAr: 'مرخصة رسمياً بـ Windows Server 2022 لتشغيل قواعد بيانات MS SQL وأنظمة ERP والحسابات عن بُعد.',
    descEn: 'Licensed Windows Server 2022 instances tuned for MS SQL Server, accounting suites & RDP.',
  },
];

const REGIONS = [
  { id: 'cai', code: 'EG-CAI', ar: 'القاهرة', en: 'Cairo' },
  { id: 'fra', code: 'EU-FRA', ar: 'فرانكفورت', en: 'Frankfurt' },
  { id: 'ruh', code: 'SA-RUH', ar: 'الرياض', en: 'Riyadh' },
];

export const PricingSection: React.FC = () => {
  const { lang, currency, setCurrency, formatPrice, openServerConfigurator } = useApp();
  const [activeCategory, setActiveCategory] = useState<HostingCategory>('vps');
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('yearly');
  const [region, setRegion] = useState<string>('cai');
  const [expandedPlanId, setExpandedPlanId] = useState<string | null>(null);
  const [activeMobileIndex, setActiveMobileIndex] = useState<number>(0);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const { selectedPlanIds } = useComparePlansStore();

  const plans: HostingPlan[] =
    activeCategory === 'vps'
      ? HOSTING_PLANS
      : activeCategory === 'web'
      ? WEB_HOSTING_PLANS
      : WINDOWS_HOSTING_PLANS;

  const activeCategoryMeta =
    CATEGORY_TABS.find((t) => t.id === activeCategory) || CATEGORY_TABS[0];
  const activeRegion = REGIONS.find((r) => r.id === region) || REGIONS[0];

  const handleOrderPlan = (plan: HostingPlan) => {
    openServerConfigurator(plan, region, billingCycle);
  };

  const scrollToMobileCard = (index: number) => {
    setActiveMobileIndex(index);
    if (!trackRef.current) return;
    const cards = trackRef.current.querySelectorAll('[data-plan-card]');
    const card = cards[index] as HTMLElement | undefined;
    if (card) {
      card.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  };

  return (
    <section id="hosting" className="section-spacing bg-page-band">
      <div className="container-nuzul">
        {/* Section Heading */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 gap-6">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold text-accent mb-2">
              {lang === 'ar' ? 'مواصفات واضحة وأسعار ثابتة' : 'Clear Specs & Transparent Billing'}
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-main mb-3">
              {lang === 'ar'
                ? 'باقات سيرفرات Cloud VPS والاستضافة'
                : 'Cloud VPS, Managed Web & Windows RDP Plans'}
            </h2>
            <p className="text-sm sm:text-base text-muted leading-relaxed">
              {lang === 'ar' ? activeCategoryMeta.descAr : activeCategoryMeta.descEn}
            </p>
          </div>

          {/* Right Controls: Currency + Billing Cycle */}
          <div className="flex flex-wrap items-center gap-3 self-start lg:self-end">
            {/* Currency Switcher */}
            <div
              className="inline-flex items-center bg-surface p-1 rounded-xl border border-token"
              role="group"
              aria-label={lang === 'ar' ? 'عملة العرض' : 'Display currency'}
            >
              {(['EGP', 'USD', 'SAR'] as Currency[]).map((curr) => (
                <button
                  key={curr}
                  type="button"
                  onClick={() => setCurrency(curr)}
                  data-testid={`currency-btn-${curr}`}
                  className={`min-h-[40px] px-3 py-1.5 rounded-lg text-xs font-bold ltr-num transition-colors whitespace-nowrap ${
                    currency === curr
                      ? 'bg-surface-2 text-accent border border-token'
                      : 'text-muted hover-text-main'
                  }`}
                >
                  {curr}
                </button>
              ))}
            </div>

            {/* Billing Switcher */}
            <div
              className="inline-flex items-center bg-surface p-1 rounded-xl border border-token"
              role="group"
              aria-label={lang === 'ar' ? 'نظام الدفع' : 'Billing cycle'}
            >
              <button
                type="button"
                onClick={() => setBillingCycle('monthly')}
                data-testid="billing-toggle-monthly"
                className={`min-h-[40px] px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-semibold whitespace-nowrap transition-colors ${
                  billingCycle === 'monthly'
                    ? 'bg-accent text-accent-contrast'
                    : 'text-muted hover-text-main'
                }`}
              >
                {lang === 'ar' ? 'شهري' : 'Monthly'}
              </button>
              <button
                type="button"
                onClick={() => setBillingCycle('yearly')}
                data-testid="billing-toggle-yearly"
                className={`min-h-[40px] px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-semibold whitespace-nowrap transition-colors flex items-center gap-1.5 ${
                  billingCycle === 'yearly'
                    ? 'bg-accent text-accent-contrast'
                    : 'text-muted hover-text-main'
                }`}
              >
                <span>{lang === 'ar' ? 'سنوي' : 'Annual'}</span>
                <span
                  className={`text-[11px] px-1.5 py-0.5 rounded font-bold ltr-num whitespace-nowrap ${
                    billingCycle === 'yearly'
                      ? 'bg-surface text-accent'
                      : 'bg-surface-2 text-accent'
                  }`}
                >
                  -17%
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Contabo-Style Category Tabs + Datacenter Region Selector */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-5 border-b border-token">
          <div
            className="flex flex-wrap items-center gap-2"
            role="tablist"
            aria-label={lang === 'ar' ? 'أنواع السيرفرات والاستضافة' : 'Server categories'}
          >
            {CATEGORY_TABS.map((tab) => {
              const active = activeCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => {
                    setActiveCategory(tab.id);
                    setActiveMobileIndex(0);
                    setExpandedPlanId(null);
                  }}
                  data-testid={`pricing-tab-${tab.id}`}
                  className={`min-h-[44px] px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold border transition-colors whitespace-nowrap ${
                    active
                      ? 'bg-accent text-accent-contrast border-accent'
                      : 'bg-surface text-main border-token hover-surface-2'
                  }`}
                >
                  {lang === 'ar' ? tab.labelAr : tab.labelEn}
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-2 self-start md:self-auto">
            <MapPin className="w-4 h-4 text-accent shrink-0" aria-hidden="true" />
            <label htmlFor="region-select" className="text-xs font-medium text-muted whitespace-nowrap">
              {lang === 'ar' ? 'الداتا سنتر:' : 'Data Center:'}
            </label>
            <select
              id="region-select"
              value={region}
              onChange={(e) => setRegion(e.target.value)}
              data-testid="pricing-region-select"
              className="min-h-[40px] px-3 py-1.5 rounded-lg bg-surface border border-token text-xs font-semibold text-main focus:outline-none cursor-pointer"
            >
              {REGIONS.map((r) => (
                <option key={r.id} value={r.id}>
                  {lang === 'ar' ? `${r.ar} (${r.code})` : `${r.en} (${r.code})`}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Mobile Quick Plan Switcher (<768px) */}
        <div className="md:hidden mb-4" data-testid="mobile-pricing-swipe-nav">
          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            {plans.map((plan, idx) => {
              const isActive = activeMobileIndex === idx;
              return (
                <button
                  key={plan.id}
                  type="button"
                  onClick={() => scrollToMobileCard(idx)}
                  data-testid={`mobile-plan-pill-${plan.id}`}
                  className={`min-h-[44px] px-3.5 py-2 rounded-lg text-xs font-semibold whitespace-nowrap border transition-colors ${
                    isActive
                      ? 'bg-accent text-accent-contrast border-accent'
                      : 'bg-surface text-main border-token'
                  }`}
                >
                  {lang === 'ar' ? plan.name : plan.nameEn}
                </button>
              );
            })}
          </div>
        </div>

        {/* Pricing Tier Grid (4 Balanced Columns Desktop / Swipe Mobile) */}
        <div
          ref={trackRef}
          data-testid="pricing-cards-track"
          className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-4 md:pb-0"
        >
          {plans.map((plan, idx) => {
            const displayMonthlyEGP =
              billingCycle === 'yearly'
                ? Math.round(plan.yearlyPriceEGP / 12)
                : plan.monthlyPriceEGP;
            const features = lang === 'ar' ? plan.features : plan.featuresEn;
            const isExpanded = expandedPlanId === plan.id;
            const isSelectedForCompare = selectedPlanIds.includes(plan.id);

            return (
              <div
                key={plan.id}
                data-plan-card={plan.id}
                onFocus={() => setActiveMobileIndex(idx)}
                className={`clean-card clean-card-hover p-6 flex flex-col justify-between relative w-[86vw] max-w-[330px] shrink-0 snap-center md:w-auto md:max-w-none md:shrink ${
                  plan.popular ? 'border-accent ring-1 ring-[var(--accent)]' : ''
                }`}
              >
                <div>
                  {/* Unboxed Status & Region Metadata */}
                  <div className="min-h-[24px] mb-2 flex items-center justify-between gap-2 text-xs">
                    {plan.popular ? (
                      <span className="font-bold text-accent whitespace-nowrap">
                        {lang === 'ar' ? 'الأكثر طلباً' : 'Most Popular'}
                      </span>
                    ) : (
                      <span className="font-medium text-muted">
                        <bdi dir="ltr" className="ltr-num">{activeRegion.code}</bdi>
                      </span>
                    )}
                    {isSelectedForCompare && (
                      <span className="font-semibold text-accent whitespace-nowrap">
                        {lang === 'ar' ? 'في المقارنة' : 'Comparing'}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-main">
                    <bdi dir="ltr" className="ltr-num">
                      {lang === 'ar' ? plan.name : plan.nameEn}
                    </bdi>
                  </h3>
                  <p
                    className={`text-muted text-xs mt-1 leading-relaxed ${
                      isExpanded ? '' : 'line-clamp-2'
                    }`}
                  >
                    {lang === 'ar' ? plan.targetAudience : plan.targetAudienceEn}
                  </p>

                  {/* Contabo-Style Price Block */}
                  <div className="my-4 pb-4 border-b border-token">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-3xl font-bold text-main">
                        <bdi dir="ltr" className="ltr-num">
                          {formatPrice(displayMonthlyEGP)}
                        </bdi>
                      </span>
                      <span className="text-xs text-muted">
                        / {lang === 'ar' ? 'شهرياً' : 'mo'}
                      </span>
                    </div>
                    <div className="text-[11px] text-muted mt-1">
                      {billingCycle === 'yearly' ? (
                        <span>
                          {lang === 'ar' ? 'دفعة سنوية: ' : 'Billed annually: '}
                          <bdi dir="ltr" className="ltr-num font-semibold text-main">
                            {formatPrice(plan.yearlyPriceEGP)}
                          </bdi>
                          {' · '}
                          {lang === 'ar' ? 'إعداد مجاني' : '$0 setup'}
                        </span>
                      ) : (
                        <span>
                          {lang === 'ar'
                            ? 'دفع شهري بدون عقد · إعداد 0 ج.م'
                            : 'Month-to-month · $0 setup fee'}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Contabo-Style Core Hardware Specs Table */}
                  <dl className="space-y-2.5 text-xs mb-3 pb-3 border-b border-token">
                    <div className="flex items-center justify-between gap-2">
                      <dt className="text-muted">CPU</dt>
                      <dd className="font-semibold text-main">
                        <bdi dir="ltr" className="ltr-num">{plan.cpu}</bdi>
                      </dd>
                    </div>
                    <div className="flex items-center justify-between gap-2">
                      <dt className="text-muted">RAM</dt>
                      <dd className="font-semibold text-main">
                        <bdi dir="ltr" className="ltr-num">{plan.ram}</bdi>
                      </dd>
                    </div>
                    <div className="flex items-center justify-between gap-2">
                      <dt className="text-muted">{lang === 'ar' ? 'الهارد (NVMe)' : 'Storage'}</dt>
                      <dd className="font-semibold text-main">
                        <bdi dir="ltr" className="ltr-num">{plan.storage}</bdi>
                      </dd>
                    </div>
                    <div className="flex items-center justify-between gap-2">
                      <dt className="text-muted">{lang === 'ar' ? 'الترافيك الشهري' : 'Traffic'}</dt>
                      <dd className="font-semibold text-main">
                        <bdi dir="ltr" className="ltr-num">{plan.bandwidth}</bdi>
                      </dd>
                    </div>

                    {isExpanded && (
                      <>
                        <div className="flex items-center justify-between gap-2 pt-2 border-t border-token">
                          <dt className="text-muted">{lang === 'ar' ? 'الـ Snapshots' : 'Snapshots'}</dt>
                          <dd className="font-semibold text-main">
                            <bdi dir="ltr" className="ltr-num">{plan.snapshots}</bdi>
                          </dd>
                        </div>
                        <div className="flex items-center justify-between gap-2">
                          <dt className="text-muted">{lang === 'ar' ? 'سرعة البورت' : 'Port Speed'}</dt>
                          <dd className="font-semibold text-main">
                            <bdi dir="ltr" className="ltr-num">{plan.portSpeed}</bdi>
                          </dd>
                        </div>
                        <div className="flex items-center justify-between gap-2">
                          <dt className="text-muted">{lang === 'ar' ? 'الإدارة والتحكم' : 'Access'}</dt>
                          <dd className="font-semibold text-main">
                            <bdi dir="ltr" className="ltr-num">{plan.panel}</bdi>
                          </dd>
                        </div>
                        <div className="flex items-center justify-between gap-2">
                          <dt className="text-muted">{lang === 'ar' ? 'Uptime SLA' : 'Uptime SLA'}</dt>
                          <dd className="font-semibold text-accent">
                            <bdi dir="ltr" className="ltr-num">{plan.uptime}</bdi>
                          </dd>
                        </div>
                      </>
                    )}
                  </dl>

                  {isExpanded && (
                    <ul className="space-y-2 mb-3">
                      {features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-main">
                          <Check className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <button
                    type="button"
                    onClick={() => setExpandedPlanId(isExpanded ? null : plan.id)}
                    data-testid={`plan-expand-${plan.id}`}
                    aria-expanded={isExpanded}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:underline mb-2 min-h-[44px]"
                  >
                    <span>
                      {isExpanded
                        ? lang === 'ar'
                          ? 'إخفاء المواصفات'
                          : 'Show less'
                        : lang === 'ar'
                        ? 'عرض باقي المواصفات'
                        : 'Show full specs'}
                    </span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform ${
                        isExpanded ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                </div>

                {/* Action Buttons */}
                <div className="space-y-2 pt-2">
                  <button
                    type="button"
                    onClick={() => handleOrderPlan(plan)}
                    className={`w-full min-h-[44px] py-2.5 rounded-lg text-sm font-semibold whitespace-nowrap transition-colors ${
                      plan.popular ? 'btn-primary' : 'btn-secondary'
                    }`}
                  >
                    {lang === 'ar' ? 'تخصيص وطلب السيرفر' : 'Configure & Order'}
                  </button>

                  <button
                    type="button"
                    onClick={() => toggleComparePlan(plan.id)}
                    data-testid={`card-compare-btn-${plan.id}`}
                    aria-pressed={isSelectedForCompare}
                    className={`w-full min-h-[40px] py-2 px-3 rounded-lg text-xs font-semibold whitespace-nowrap border transition-colors inline-flex items-center justify-center gap-1.5 ${
                      isSelectedForCompare
                        ? 'bg-accent-soft border-accent text-accent'
                        : 'bg-surface border-token text-muted hover-text-main'
                    }`}
                  >
                    <GitCompare className="w-3.5 h-3.5 shrink-0" />
                    <span>
                      {isSelectedForCompare
                        ? lang === 'ar'
                          ? 'في جدول المقارنة'
                          : 'Selected to Compare'
                        : lang === 'ar'
                        ? 'أضف للمقارنة'
                        : 'Add to Compare'}
                    </span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
