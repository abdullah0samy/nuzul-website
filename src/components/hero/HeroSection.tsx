import React from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../../context/AppContext';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { HeroNetworkCanvas } from './HeroNetworkCanvas';

export const HeroSection: React.FC = () => {
  const { lang } = useApp();
  const ArrowIcon = lang === 'ar' ? ArrowLeft : ArrowRight;

  // Sectors backed strictly by existing case studies (case-1..case-12 in nuzulData.ts).
  // Unverified claims ('في مصر والخليج', 'المصانع وسلاسل الإمداد') removed and logged in docs/OPEN_QUESTIONS.md.
  const coreSectors = [
    {
      id: 'healthcare',
      ar: 'الرعاية الصحية والمستشفيات',
      en: 'Healthcare & Hospitals',
    },
    {
      id: 'finance',
      ar: 'الاستشارات المالية والمحاسبية',
      en: 'Financial & Audit Firms',
    },
    {
      id: 'logistics',
      ar: 'الخدمات اللوجستية والنقل',
      en: 'Logistics & Fleet Operations',
    },
  ];

  return (
    <section
      data-testid="home-hero-section"
      className="relative overflow-hidden bg-hero-band text-hero pt-10 pb-10 sm:pt-16 sm:pb-16 border-b border-hero"
    >
      {/* Living Network Canvas strictly inside Hero with bottom-fade mask & low opacity */}
      <HeroNetworkCanvas mode="hero" />

      <div className="container-nuzul relative z-10">
        <div className="max-w-3xl space-y-5 sm:space-y-6">
          {/* Headline (Option 1 active — zero absolutes) */}
          <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-hero leading-tight">
            <span>
              {lang === 'ar'
                ? 'شبكات مؤسسية، خوادم KVM سحابية، وأنظمة ERP في مصر'
                : 'Enterprise Networks, KVM Cloud Servers & ERP Systems in Egypt'}
            </span>
            <span
              data-testid="hero-blinking-caret"
              aria-hidden="true"
              className="hero-caret"
            />
          </h1>

          {/* One factual supporting sentence */}
          <p className="text-base sm:text-lg text-hero-muted leading-relaxed max-w-2xl">
            {lang === 'ar'
              ? 'نصمم شبكات المقرات، ونشغّل خوادم KVM بأقراص NVMe، ونؤمّن بيانات شركتك بعقود SLA مع فريق هندسي واحد.'
              : 'We design office networks, operate KVM servers on NVMe storage, and secure business data under formal SLAs with one accountable team.'}
          </p>

          {/* Primary CTA & Secondary text/outline link — identical width and height on mobile */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <Link
              to="/contact"
              data-testid="hero-primary-cta"
              className="btn-primary w-full sm:w-auto h-12 border border-transparent rounded-lg px-7 text-sm sm:text-base hover-lift inline-flex items-center justify-center gap-2"
            >
              <span>{lang === 'ar' ? 'اطلب عرض سعر' : 'Request a Quote'}</span>
              <ArrowIcon className="w-4 h-4 shrink-0" />
            </Link>

            <Link
              to="/pricing"
              data-testid="hero-secondary-cta"
              className="w-full sm:w-auto h-12 px-7 text-sm sm:text-base font-semibold text-hero hover:text-hero-accent border border-hero rounded-lg inline-flex items-center justify-center underline-offset-4 hover:underline transition-colors"
            >
              <span>{lang === 'ar' ? 'خطط الأسعار' : 'Pricing Plans'}</span>
            </Link>
          </div>
        </div>

        {/* Verified Sectors Strip (Healthcare, Finance, Logistics — backed by case studies) */}
        <div
          data-testid="hero-sector-strip"
          className="mt-10 sm:mt-12 pt-5 border-t border-hero flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-4"
        >
          <span className="text-xs font-semibold text-hero-muted shrink-0">
            {lang === 'ar' ? 'قطاعات نخدمها:' : 'Sectors served:'}
          </span>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5">
            {coreSectors.map((sector, idx) => (
              <React.Fragment key={sector.id}>
                <span className="text-xs font-medium text-hero-muted whitespace-nowrap">
                  {lang === 'ar' ? sector.ar : sector.en}
                </span>
                {idx < coreSectors.length - 1 && (
                  <span className="text-hero-muted opacity-40 hidden sm:inline" aria-hidden="true">
                    ·
                  </span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
