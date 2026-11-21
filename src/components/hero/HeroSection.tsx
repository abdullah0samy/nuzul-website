import React from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../../context/AppContext';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const { lang } = useApp();
  const ArrowIcon = lang === 'ar' ? ArrowLeft : ArrowRight;

  const coreSectors = [
    {
      id: 'healthcare',
      ar: 'المستشفيات والمراكز الطبية',
      en: 'Hospitals & Clinics',
    },
    {
      id: 'finance',
      ar: 'مكاتب المحاسبة والاستشارات',
      en: 'Accounting & Advisory Firms',
    },
    {
      id: 'logistics',
      ar: 'شركات النقل واللوجستيات',
      en: 'Logistics & Fleet',
    },
  ];

  const keySpecs = [
    {
      labelAr: 'تأسيس الشبكات',
      labelEn: 'Office Networking',
      value: 'Cat6A · Fiber · Fortinet',
    },
    {
      labelAr: 'سيرفرات Cloud VPS',
      labelEn: 'Cloud Compute',
      value: 'KVM · NVMe RAID-10',
    },
    {
      labelAr: 'الـ Backup والحماية',
      labelEn: 'Disaster Recovery',
      value: '3-2-1 Immutable Backup',
    },
    {
      labelAr: 'الداتا سنتر',
      labelEn: 'Data Centers',
      value: lang === 'ar' ? 'القاهرة · فرانكفورت · الرياض' : 'Cairo · Frankfurt · Riyadh',
    },
  ];

  return (
    <section
      data-testid="home-hero-section"
      className="relative overflow-hidden bg-hero-band text-hero pt-10 pb-12 sm:pt-16 sm:pb-20 border-b border-hero"
    >
      <div className="container-nuzul relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Primary Glass Content Column */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-9 lg:p-10 space-y-5">
            <h1
              className={`text-3xl sm:text-4xl lg:text-[2.65rem] font-bold text-hero ${
                lang === 'ar' ? 'leading-[1.38]' : 'leading-[1.15]'
              }`}
            >
              {lang === 'ar'
                ? 'تأسيس شبكات، سيرفرات Cloud VPS، وأنظمة ERP للشركات'
                : 'Office Networks, KVM Cloud VPS & ERP for Growing Businesses'}
            </h1>

            <p className="text-base sm:text-lg text-hero-muted leading-relaxed max-w-2xl">
              {lang === 'ar'
                ? 'بنجهّز السيرفر رووم والشبكات الداخلية، بنشغّل سيرفراتك على هاردات NVMe، ونتولى التأمين والـ Backup والصيانة بعقد SLA واضح وفريق واحد مسؤول.'
                : 'We build office networks and server rooms, run NVMe KVM servers, and handle security, backups, and SLA support under one accountable team.'}
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Link
                to="/contact"
                data-testid="hero-primary-cta"
                className="btn-primary w-full sm:w-auto h-12 px-7 text-sm sm:text-base hover-lift inline-flex items-center justify-center gap-2"
              >
                <span>{lang === 'ar' ? 'اطلب معاينة أو عرض سعر' : 'Request a Quote'}</span>
                <ArrowIcon className="w-4 h-4 shrink-0" aria-hidden="true" />
              </Link>

              <Link
                to="/pricing"
                data-testid="hero-secondary-cta"
                className="btn-hero-secondary w-full sm:w-auto h-12 px-7 text-sm sm:text-base hover-lift"
              >
                <span>{lang === 'ar' ? 'أسعار السيرفرات' : 'Server Pricing'}</span>
              </Link>
            </div>

            {/* Grounded Sector Attribution (Unboxed Typographic Metadata) */}
            <div
              data-testid="hero-sector-strip"
              className="pt-5 mt-2 border-t border-hero flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs text-hero-muted"
            >
              <span className="font-semibold text-main shrink-0">
                {lang === 'ar' ? 'نخدم:' : 'Serving:'}
              </span>
              {coreSectors.map((sector, idx) => (
                <React.Fragment key={sector.id}>
                  <span className="whitespace-nowrap">
                    {lang === 'ar' ? sector.ar : sector.en}
                  </span>
                  {idx < coreSectors.length - 1 && (
                    <span className="opacity-45" aria-hidden="true">
                      ·
                    </span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Right/End Column: Clean Glass Technical Spec Matrix (Zero fake charts) */}
          <div className="lg:col-span-5 glass-panel p-6 sm:p-7 space-y-5">
            <div className="flex items-center justify-between gap-3 pb-3.5 border-b border-token">
              <h2 className="text-sm font-bold text-main">
                {lang === 'ar' ? 'التخصصات الأساسية' : 'Core Infrastructure Stack'}
              </h2>
              <span dir="ltr" className="ltr-num text-xs font-semibold text-accent">
                Cairo · Egypt
              </span>
            </div>

            <dl className="divide-y divide-[var(--border)]">
              {keySpecs.map((spec, idx) => (
                <div
                  key={idx}
                  className="py-3.5 first:pt-0 last:pb-0 flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4"
                >
                  <dt className="text-xs font-medium text-muted">
                    {lang === 'ar' ? spec.labelAr : spec.labelEn}
                  </dt>
                  <dd className="text-xs sm:text-sm font-semibold text-main">
                    <bdi dir={spec.value.match(/^[A-Za-z0-9]/) ? 'ltr' : undefined} className={spec.value.match(/^[A-Za-z0-9]/) ? 'ltr-num' : ''}>
                      {spec.value}
                    </bdi>
                  </dd>
                </div>
              ))}
            </dl>

            <div className="pt-3 border-t border-token flex items-center justify-between gap-3 text-xs">
              <span className="text-muted">
                {lang === 'ar'
                  ? 'تسليم كامل للـ Root Access ومخطط الشبكة'
                  : 'Full root credentials & network handover'}
              </span>
              <Link
                to="/services"
                className="font-semibold text-accent hover:underline whitespace-nowrap shrink-0"
              >
                {lang === 'ar' ? 'كل الخدمات' : 'All Services'}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
