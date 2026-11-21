import React from 'react';
import { Link } from 'react-router-dom';
import { BUNDLED_PACKAGES, BundledPackage } from '../../data/nuzulData';
import { useApp } from '../../context/AppContext';
import { Check, ArrowLeft, ArrowRight } from 'lucide-react';

export const PackagesSection: React.FC = () => {
  const { lang, formatPrice, addToCart } = useApp();
  const ArrowIcon = lang === 'ar' ? ArrowLeft : ArrowRight;

  const handleSelectPackage = (pkg: BundledPackage) => {
    if (pkg.priceEGP === null) return;
    addToCart({
      id: pkg.id,
      name: lang === 'ar' ? pkg.title : pkg.titleEn,
      type: 'package',
      price: pkg.priceEGP,
      billingCycle: pkg.billingType === 'monthly' ? 'monthly' : 'one-time',
      details: lang === 'ar' ? pkg.subtitle : pkg.subtitleEn,
    });
  };

  return (
    <section id="packages" className="section-spacing bg-surface-band border-t border-token">
      <div className="container-nuzul">
        <div className="max-w-3xl mb-10">
          <h2 className="text-2xl md:text-4xl font-bold text-main mb-3">
            {lang === 'ar'
              ? 'باقات تجهيز المقرات والفروع'
              : 'Turnkey Office Infrastructure Packages'}
          </h2>
          <p className="text-muted text-sm md:text-base leading-relaxed">
            {lang === 'ar'
              ? 'الشبكة، الفايروول، والسيرفرات لمكتبك أو فروعك، ومعاها عقد دعم SLA بعد التسليم.'
              : 'Network, firewall, and servers for your office or branches, backed by SLA support post-handover.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {BUNDLED_PACKAGES.map((pkg) => {
            const features = lang === 'ar' ? pkg.features : pkg.featuresEn;
            const badgeLabel = lang === 'ar' ? pkg.badgeAr : pkg.badgeEn;

            return (
              <div
                key={pkg.id}
                className={`clean-card clean-card-hover p-6 sm:p-7 flex flex-col justify-between ${
                  pkg.popular ? 'border-accent ring-1 ring-[var(--accent)]' : ''
                }`}
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-semibold text-muted">
                      {pkg.pricingModel === 'fixed'
                        ? pkg.billingType === 'monthly'
                          ? lang === 'ar'
                            ? 'تعاقد شهري SLA'
                            : 'Monthly SLA Retainer'
                          : lang === 'ar'
                          ? 'تأسيس لمرة واحدة'
                          : 'One-Time Setup'
                        : lang === 'ar'
                        ? 'عرض سعر حسب المعاينة'
                        : 'Scoped Proposal'}
                    </span>
                    {badgeLabel && (
                      <span className="text-xs font-semibold text-accent">
                        {badgeLabel}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-main mb-1.5">
                    {lang === 'ar' ? pkg.title : pkg.titleEn}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed mb-4">
                    {lang === 'ar' ? pkg.subtitle : pkg.subtitleEn}
                  </p>

                  {/* Pricing or Scoped Quote Header */}
                  <div className="py-4 border-y border-token mb-5">
                    {pkg.pricingModel === 'fixed' && pkg.priceEGP !== null ? (
                      <>
                        <div className="flex items-baseline gap-2">
                          <span className="text-3xl font-bold text-main">
                            <bdi dir="ltr" className="ltr-num">
                              {formatPrice(pkg.priceEGP)}
                            </bdi>
                          </span>
                          <span className="text-xs text-muted">
                            {pkg.billingType === 'monthly'
                              ? lang === 'ar'
                                ? '/ شهرياً'
                                : '/ month'
                              : lang === 'ar'
                              ? 'دفعة التأسيس'
                              : 'one-time'}
                          </span>
                        </div>
                        <p className="text-xs text-muted mt-1">
                          {lang === 'ar' ? pkg.billingLabelAr : pkg.billingLabelEn}
                        </p>
                      </>
                    ) : (
                      <>
                        <div className="text-xl sm:text-2xl font-bold text-main">
                          {pkg.id === 'professional'
                            ? lang === 'ar'
                              ? 'تسعير بعد معاينة المقر'
                              : 'Custom Quote via Site Survey'
                            : lang === 'ar'
                            ? 'عرض سعر فني مخصص'
                            : 'Custom Technical Proposal'}
                        </div>
                        <p className="text-xs text-muted mt-1">
                          {lang === 'ar' ? pkg.billingLabelAr : pkg.billingLabelEn}
                        </p>
                      </>
                    )}
                  </div>

                  <ul className="space-y-2.5 mb-6">
                    {features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm text-main">
                        <Check className="w-4 h-4 text-accent shrink-0 mt-1" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {pkg.pricingModel === 'fixed' && pkg.priceEGP !== null ? (
                  <button
                    type="button"
                    onClick={() => handleSelectPackage(pkg)}
                    className={`w-full min-h-[44px] py-3 px-6 text-sm rounded-lg font-semibold whitespace-nowrap inline-flex items-center justify-center gap-2 transition-colors ${
                      pkg.popular ? 'btn-primary' : 'btn-secondary'
                    }`}
                  >
                    <span>{lang === 'ar' ? 'اطلب عرض سعر' : 'Request a Quote'}</span>
                    <ArrowIcon className="w-4 h-4" />
                  </button>
                ) : (
                  <Link
                    to={`/contact?package=${pkg.id}`}
                    className="btn-secondary w-full min-h-[44px] py-3 px-6 text-sm rounded-lg font-semibold whitespace-nowrap inline-flex items-center justify-center gap-2 transition-colors"
                  >
                    <span>{lang === 'ar' ? 'اطلب عرض سعر' : 'Request a Quote'}</span>
                    <ArrowIcon className="w-4 h-4" />
                  </Link>
                )}
              </div>
            );
          })}
        </div>

        {/* VAT & Quotation Note */}
        <p className="text-xs text-muted text-center mt-6">
          {lang === 'ar'
            ? 'الأسعار لا تشمل ضريبة القيمة المضافة ما لم يُذكر خلاف ذلك في عرض السعر الرسمي.'
            : 'Prices exclude VAT unless stated otherwise in the written quotation.'}
        </p>
      </div>
    </section>
  );
};
