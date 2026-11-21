import React, { useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import {
  X,
  Server,
  MapPin,
  HardDrive,
  ShieldCheck,
  Check,
  ShoppingBag,
  Cpu,
} from 'lucide-react';

const REGIONS = [
  { id: 'cai', code: 'EG-CAI', ar: 'القاهرة', en: 'Cairo', noteAr: 'أقل زمن استجابة داخل مصر', noteEn: 'Lowest latency in Egypt' },
  { id: 'fra', code: 'EU-FRA', ar: 'فرانكفورت', en: 'Frankfurt', noteAr: 'ربط أوروبي مباشر للنسخ البعيد', noteEn: 'Direct European connectivity' },
  { id: 'ruh', code: 'SA-RUH', ar: 'الرياض', en: 'Riyadh', noteAr: 'مناسب لفروع الخليج', noteEn: 'Ideal for GCC branches' },
];

const OS_BY_CATEGORY: Record<string, { id: string; label: string; extraMonthlyEGP: number }[]> = {
  vps: [
    { id: 'ubuntu-24', label: 'Ubuntu 24.04 LTS', extraMonthlyEGP: 0 },
    { id: 'debian-12', label: 'Debian 12 Bookworm', extraMonthlyEGP: 0 },
    { id: 'almalinux-9', label: 'AlmaLinux 9 Enterprise', extraMonthlyEGP: 0 },
    { id: 'rocky-9', label: 'Rocky Linux 9', extraMonthlyEGP: 0 },
    { id: 'docker-ubuntu', label: 'Ubuntu 24.04 + Docker CE', extraMonthlyEGP: 0 },
  ],
  windows: [
    { id: 'win-2022-std', label: 'Windows Server 2022 Standard (Licensed)', extraMonthlyEGP: 0 },
    { id: 'win-2022-sql', label: 'Windows Server 2022 + MS SQL Express', extraMonthlyEGP: 0 },
  ],
  web: [
    { id: 'cpanel-litespeed', label: 'cPanel / WHM + LiteSpeed Enterprise', extraMonthlyEGP: 0 },
    { id: 'wp-managed', label: 'WordPress Pre-Tuned + LSCache + AutoSSL', extraMonthlyEGP: 0 },
  ],
};

interface AddonOption {
  id: string;
  labelAr: string;
  labelEn: string;
  descAr: string;
  descEn: string;
  monthlyEGP: number;
}

const ADDONS: AddonOption[] = [
  {
    id: 'backup-321',
    labelAr: 'نسخ احتياطي يومي معزول (3-2-1 Immutable)',
    labelEn: 'Daily Immutable Offsite Backup (3-2-1)',
    descAr: 'استعادة تلقائية مع حماية ضد الفدية خارج الخادم الأساسي',
    descEn: 'Automated daily off-server snapshots with ransomware immutability',
    monthlyEGP: 180,
  },
  {
    id: 'managed-ops',
    labelAr: 'إدارة وتشغيل كامل للخادم (Managed Ops)',
    labelEn: 'Full Managed Operations & Patching',
    descAr: 'تحديثات أمان دورية، مراقبة استباقية، وضبط أداء قواعد البيانات',
    descEn: 'OS security patching, 24/7 monitoring, and database tuning',
    monthlyEGP: 450,
  },
  {
    id: 'extra-ipv4',
    labelAr: 'عنوان IPv4 مخصص إضافي',
    labelEn: 'Additional Dedicated IPv4 Address',
    descAr: 'لعزل خدمات البريد أو شهادات SSL المستقلة',
    descEn: 'For dedicated mail gateways or isolated SSL endpoints',
    monthlyEGP: 120,
  },
];

export const ServerConfiguratorModal: React.FC = () => {
  const {
    lang,
    configuratorRequest,
    closeServerConfigurator,
    formatPrice,
    addToCart,
  } = useApp();

  const [regionId, setRegionId] = useState('cai');
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('yearly');
  const [osId, setOsId] = useState('ubuntu-24');
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);

  useEffect(() => {
    if (!configuratorRequest) return;
    setRegionId(configuratorRequest.initialRegion || 'cai');
    setBillingCycle(configuratorRequest.initialCycle || 'yearly');
    const osList = OS_BY_CATEGORY[configuratorRequest.plan.category] || OS_BY_CATEGORY.vps;
    setOsId(osList[0].id);
    setSelectedAddons([]);
  }, [configuratorRequest]);

  useEffect(() => {
    if (!configuratorRequest) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeServerConfigurator();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [configuratorRequest, closeServerConfigurator]);

  if (!configuratorRequest) return null;

  const { plan } = configuratorRequest;
  const osList = OS_BY_CATEGORY[plan.category] || OS_BY_CATEGORY.vps;
  const selectedOs = osList.find((o) => o.id === osId) || osList[0];
  const selectedRegion = REGIONS.find((r) => r.id === regionId) || REGIONS[0];

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const basePriceEGP =
    billingCycle === 'yearly' ? plan.yearlyPriceEGP : plan.monthlyPriceEGP;
  const addonsMonthlyEGP = ADDONS.filter((a) => selectedAddons.includes(a.id)).reduce(
    (sum, a) => sum + a.monthlyEGP,
    0
  );
  // Annual billing gives 2 months free (~17% discount) on add-ons as well
  const addonsTotalEGP =
    billingCycle === 'yearly' ? addonsMonthlyEGP * 10 : addonsMonthlyEGP;
  const totalEGP = basePriceEGP + addonsTotalEGP;
  const effectiveMonthlyEGP =
    billingCycle === 'yearly' ? Math.round(totalEGP / 12) : totalEGP;

  const handleConfirmAdd = () => {
    const addonLabels = ADDONS.filter((a) => selectedAddons.includes(a.id)).map((a) =>
      lang === 'ar' ? a.labelAr : a.labelEn
    );
    const addonKey = selectedAddons.slice().sort().join('-') || 'base';

    addToCart({
      id: `${plan.id}-${billingCycle}-${regionId}-${osId}-${addonKey}`,
      name: `${lang === 'ar' ? plan.name : plan.nameEn} (${
        billingCycle === 'yearly'
          ? lang === 'ar'
            ? 'سنوي'
            : 'Annual'
          : lang === 'ar'
          ? 'شهري'
          : 'Monthly'
      })`,
      type: 'hosting',
      price: totalEGP,
      quantity: 1,
      billingCycle,
      details: [
        `${plan.cpu} · ${plan.ram} · ${plan.storage}`,
        `${lang === 'ar' ? selectedRegion.ar : selectedRegion.en} (${selectedRegion.code})`,
        selectedOs.label,
        ...(addonLabels.length > 0 ? [`+ ${addonLabels.join(' + ')}`] : []),
      ].join(' | '),
    });
    closeServerConfigurator();
  };

  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center p-4 overflow-y-auto"
      data-testid="server-configurator-modal"
    >
      <div
        onClick={closeServerConfigurator}
        className="fixed inset-0 bg-overlay backdrop-blur-sm"
        aria-hidden="true"
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-label={lang === 'ar' ? 'إعداد وتخصيص الخادم' : 'Configure Your Server'}
        className="relative z-10 w-full max-w-3xl glass-panel overflow-hidden my-8 shadow-2xl"
      >
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-token flex items-center justify-between gap-4 bg-surface-2">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-xl bg-accent-soft border border-accent-soft flex items-center justify-center text-accent shrink-0">
              <Server className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <h3 className="text-base sm:text-lg font-bold text-main truncate">
                {lang === 'ar' ? 'إعداد الخادم:' : 'Configure Server:'}{' '}
                <bdi dir="ltr" className="ltr-num text-accent">
                  {plan.name}
                </bdi>
              </h3>
              <p className="text-xs text-muted ltr-num truncate">
                {plan.cpu} · {plan.ram} · {plan.storage} · {plan.bandwidth}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={closeServerConfigurator}
            aria-label={lang === 'ar' ? 'إغلاق' : 'Close'}
            className="min-h-[40px] min-w-[40px] inline-flex items-center justify-center rounded-lg bg-surface border border-token text-muted hover-text-main"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-5 sm:p-6 space-y-6 max-h-[72vh] overflow-y-auto">
          {/* 1. Billing Cycle */}
          <div>
            <div className="text-xs font-bold text-accent mb-2.5 flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5" />
              <span>{lang === 'ar' ? '1. دورة الفوترة' : '1. Billing Cycle'}</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setBillingCycle('monthly')}
                className={`p-3.5 rounded-xl border text-start transition-colors flex items-center justify-between ${
                  billingCycle === 'monthly'
                    ? 'bg-accent-soft border-accent text-main'
                    : 'bg-surface border-token text-muted hover-surface-2'
                }`}
              >
                <div>
                  <div className="text-sm font-bold text-main">
                    {lang === 'ar' ? 'دفع شهري' : 'Monthly Billing'}
                  </div>
                  <div className="text-[11px] text-muted">
                    {lang === 'ar' ? 'مرونة شهر بشهر بدون عقد' : 'Month-to-month flexibility'}
                  </div>
                </div>
                <span className="text-sm font-bold text-main ltr-num">
                  {formatPrice(plan.monthlyPriceEGP)}/{lang === 'ar' ? 'شهر' : 'mo'}
                </span>
              </button>

              <button
                type="button"
                onClick={() => setBillingCycle('yearly')}
                className={`p-3.5 rounded-xl border text-start transition-colors flex items-center justify-between ${
                  billingCycle === 'yearly'
                    ? 'bg-accent-soft border-accent text-main'
                    : 'bg-surface border-token text-muted hover-surface-2'
                }`}
              >
                <div>
                  <div className="text-sm font-bold text-main flex items-center gap-2">
                    <span>{lang === 'ar' ? 'دفع سنوي' : 'Annual Billing'}</span>
                    <span className="text-[11px] font-bold text-accent ltr-num">-17%</span>
                  </div>
                  <div className="text-[11px] text-muted">
                    {lang === 'ar' ? 'وفر شهرين مجاناً + إعداد مجاني' : '2 months free + $0 setup'}
                  </div>
                </div>
                <span className="text-sm font-bold text-accent ltr-num">
                  {formatPrice(Math.round(plan.yearlyPriceEGP / 12))}/{lang === 'ar' ? 'شهر' : 'mo'}
                </span>
              </button>
            </div>
          </div>

          {/* 2. Datacenter Region */}
          <div>
            <div className="text-xs font-bold text-accent mb-2.5 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" />
              <span>{lang === 'ar' ? '2. مركز البيانات (Region)' : '2. Datacenter Region'}</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {REGIONS.map((r) => {
                const active = regionId === r.id;
                return (
                  <button
                    key={r.id}
                    type="button"
                    onClick={() => setRegionId(r.id)}
                    className={`p-3 rounded-xl border text-start transition-colors ${
                      active
                        ? 'bg-accent-soft border-accent'
                        : 'bg-surface border-token hover-surface-2'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="text-xs font-bold text-main">
                        {lang === 'ar' ? r.ar : r.en}
                      </span>
                      <span className="text-[11px] font-bold text-accent ltr-num">{r.code}</span>
                    </div>
                    <p className="text-[11px] text-muted">
                      {lang === 'ar' ? r.noteAr : r.noteEn}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 3. Operating System Image */}
          <div>
            <div className="text-xs font-bold text-accent mb-2.5 flex items-center gap-1.5">
              <HardDrive className="w-3.5 h-3.5" />
              <span>{lang === 'ar' ? '3. نظام التشغيل والصورة الأساسية' : '3. Operating System Image'}</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {osList.map((os) => {
                const active = osId === os.id;
                return (
                  <button
                    key={os.id}
                    type="button"
                    onClick={() => setOsId(os.id)}
                    className={`min-h-[44px] px-3.5 py-2.5 rounded-xl border text-start transition-colors flex items-center justify-between gap-2 ${
                      active
                        ? 'bg-accent-soft border-accent text-main font-bold'
                        : 'bg-surface border-token text-main hover-surface-2'
                    }`}
                  >
                    <span className="text-xs ltr-num">{os.label}</span>
                    {active && <Check className="w-4 h-4 text-accent shrink-0" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* 4. Optional Infrastructure Add-ons */}
          <div>
            <div className="text-xs font-bold text-accent mb-2.5 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{lang === 'ar' ? '4. إضافات اختيارية (تُحسب تلقائياً)' : '4. Optional Add-ons'}</span>
            </div>
            <div className="space-y-2">
              {ADDONS.map((addon) => {
                const checked = selectedAddons.includes(addon.id);
                return (
                  <button
                    key={addon.id}
                    type="button"
                    onClick={() => toggleAddon(addon.id)}
                    aria-pressed={checked}
                    className={`w-full p-3.5 rounded-xl border text-start transition-colors flex items-center justify-between gap-3 ${
                      checked
                        ? 'bg-accent-soft border-accent'
                        : 'bg-surface border-token hover-surface-2'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <span
                        className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 mt-0.5 ${
                          checked
                            ? 'bg-accent border-accent text-accent-contrast'
                            : 'border-token bg-page'
                        }`}
                      >
                        {checked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </span>
                      <div>
                        <div className="text-xs sm:text-sm font-bold text-main">
                          {lang === 'ar' ? addon.labelAr : addon.labelEn}
                        </div>
                        <p className="text-[11px] text-muted mt-0.5">
                          {lang === 'ar' ? addon.descAr : addon.descEn}
                        </p>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-accent whitespace-nowrap ltr-num shrink-0">
                      +{formatPrice(addon.monthlyEGP)}/{lang === 'ar' ? 'شهر' : 'mo'}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Footer Live Summary & Add to Cart */}
        <div className="p-5 sm:p-6 border-t border-token bg-surface-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="text-xs text-muted">
              {billingCycle === 'yearly'
                ? lang === 'ar'
                  ? 'الإجمالي السنوي (يشمل خصم -17%):'
                  : 'Annual Total (includes -17% discount):'
                : lang === 'ar'
                ? 'الإجمالي الشهري:'
                : 'Monthly Total:'}
            </div>
            <div className="flex items-baseline gap-2 mt-0.5">
              <span className="text-2xl font-bold text-main ltr-num">
                {formatPrice(totalEGP)}
              </span>
              {billingCycle === 'yearly' && (
                <span className="text-xs text-accent font-semibold ltr-num">
                  ({formatPrice(effectiveMonthlyEGP)} / {lang === 'ar' ? 'شهرياً' : 'mo'})
                </span>
              )}
            </div>
          </div>

          <button
            type="button"
            onClick={handleConfirmAdd}
            data-testid="configurator-add-to-cart"
            className="min-h-[46px] px-6 py-3 rounded-xl btn-primary font-bold text-sm inline-flex items-center justify-center gap-2 whitespace-nowrap"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>{lang === 'ar' ? 'إضافة الخادم للسلة' : 'Add Configured Server to Cart'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
