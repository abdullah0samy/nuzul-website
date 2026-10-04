import React from 'react';
import { Check, Sparkles, ArrowRight, ArrowLeft, Server, ShieldCheck } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { NUZUL_HOSTING_PLANS } from '../../data/nuzulData';
import { HostingPlan } from '../../types';

export const PricingSection: React.FC = () => {
  const { locale, formatPrice, addToCart, setActivePaymentModal, theme } = useApp();
  const isAr = locale === 'ar';
  const isDark = theme === 'dark';

  return (
    <section
      id="pricing"
      className={`relative overflow-hidden scroll-mt-24 px-4 py-20 sm:py-24 sm:px-6 lg:px-8 border-t transition-colors ${
        isDark ? 'bg-[#070c14] border-white/10 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'
      }`}
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-14">
          <div className="eyebrow-mono justify-center text-emerald-600 dark:text-emerald-400">
            <Server className="h-4 w-4" />
            <span>{isAr ? 'السيرفرات السحابية والاستضافة' : 'CLOUD VPS & HOSTING'}</span>
          </div>

          <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">
            {isAr ? 'خوادم سحابية فائقة السرعة وسيرفرات ويندوز RDP' : 'High-Performance Cloud VPS & Windows RDP'}
          </h2>

          <p
            className={`mt-3 text-base leading-relaxed ${
              isDark ? 'text-slate-300' : 'text-slate-600'
            }`}
          >
            {isAr
              ? 'سيرفرات ويندوز Remote Desktop تبدأ من 1000 ج.م/شهرياً لتشغيل برامج المحاسبة والضرائب، واستضافة مشتركة وسيرفرات VPS بأقراص NVMe مع الدفع الفوري عبر إنستاباي وفودافون كاش.'
              : 'Licensed Windows VPS (RDP) starting at 1,000 EGP/mo ($20/mo) for remote accounting ERPs, NVMe KVM cloud servers, and instant checkout via InstaPay & Vodafone Cash.'}
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {NUZUL_HOSTING_PLANS.map((plan: HostingPlan) => {
            const planName = isAr ? plan.nameAr : plan.nameEn;
            const specs = isAr ? plan.specsAr : plan.specsEn;

            return (
              <article
                key={plan.id}
                className={`relative flex flex-col justify-between rounded-3xl border-2 p-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 ${
                  plan.popular
                    ? isDark
                      ? 'border-emerald-400/60 bg-gradient-to-b from-emerald-950/25 to-[#0d1524] shadow-[0_15px_40px_-10px_rgba(16,185,129,0.25)] ring-1 ring-emerald-400/40'
                      : 'border-emerald-500 bg-white shadow-xl ring-2 ring-emerald-400/30'
                    : isDark
                    ? 'border-white/10 bg-[#0d1524] hover:border-emerald-500/40 shadow-xl'
                    : 'border-slate-200 bg-white hover:border-emerald-500 shadow-md'
                }`}
              >
                <div>
                  {/* Popularity badge */}
                  {plan.popular && (
                    <div className="mb-4">
                      <span className="inline-flex items-center gap-1 rounded-full border border-emerald-400/40 bg-emerald-400/10 px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-300">
                        <Sparkles className="h-3 w-3" />
                        {isAr ? 'الأكثر طلباً' : 'Most Popular'}
                      </span>
                    </div>
                  )}

                  <h3 className="text-lg font-bold">{planName}</h3>
                  <div className="mt-2 text-xs text-slate-400">{isAr ? 'تبدأ من' : 'Starting at'}</div>

                  {/* Formatted dynamic price */}
                  <div className="figures mt-1 text-3xl font-black text-emerald-600 dark:text-emerald-400">
                    {formatPrice(plan.basePriceEGP)}
                    <span className="text-xs font-normal text-slate-400">/{isAr ? 'شهرياً' : 'mo'}</span>
                  </div>

                  {/* Specs list */}
                  <ul
                    className={`mt-6 space-y-2.5 text-xs ${
                      isDark ? 'text-slate-300' : 'text-slate-700'
                    }`}
                  >
                    {specs.map((spec, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check className="h-3.5 w-3.5 shrink-0 text-emerald-500" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Actions */}
                <div className="mt-8 pt-4 border-t border-current/10 space-y-2">
                  <button
                    type="button"
                    onClick={() => addToCart(plan, 12, 'cairo')}
                    className={`btn w-full py-2.5 text-xs font-bold uppercase tracking-wider cursor-pointer ${
                      plan.popular ? 'btn-primary shadow-lg shadow-emerald-500/20' : 'btn-secondary'
                    }`}
                  >
                    <span>{isAr ? 'حجز وتفعيل الخادم' : 'Deploy Server'}</span>
                  </button>

                  <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
                    <span>{isAr ? 'الدفع متاح عبر:' : 'Instant Pay:'}</span>
                    <button
                      type="button"
                      onClick={() => setActivePaymentModal('instapay')}
                      className="text-purple-600 dark:text-purple-400 font-mono hover:underline cursor-pointer font-semibold"
                    >
                      InstaPay
                    </button>
                    <span>·</span>
                    <button
                      type="button"
                      onClick={() => setActivePaymentModal('vodafone')}
                      className="text-red-600 dark:text-red-400 font-mono hover:underline cursor-pointer font-semibold"
                    >
                      Vodafone
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
