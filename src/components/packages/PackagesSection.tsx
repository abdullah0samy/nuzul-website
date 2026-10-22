import React, { useState } from 'react';
import { Check, Sparkles, ChevronDown, ChevronUp, PhoneCall, ShieldCheck, ArrowRight, ArrowLeft } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { NUZUL_PACKAGES, NUZUL_CONTACT } from '../../data/nuzulData';
import { EnterprisePackage } from '../../types';
import { RevealOnScroll, StaggerContainer, StaggerItem } from '../common/RevealOnScroll';

export const PackagesSection: React.FC = () => {
  const { locale, currency, theme } = useApp();
  const isAr = locale === 'ar';
  const isDark = theme === 'dark';

  const [expandedId, setExpandedId] = useState<string | null>('business');

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section
      id="packages"
      className={`relative overflow-hidden scroll-mt-24 px-5 py-20 sm:py-24 sm:px-6 lg:px-8 border-t transition-colors ${
        isDark ? 'bg-[#070c14] border-white/10 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'
      }`}
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header with Reveal */}
        <RevealOnScroll direction="up" threshold={0.2}>
          <div className="mx-auto max-w-3xl text-center">
            <div className="eyebrow-mono justify-center text-emerald-600 dark:text-emerald-400">
              <ShieldCheck className="h-4 w-4" />
              <span>{isAr ? 'خطط وباقات التأسيس' : 'ENTERPRISE PACKAGES'}</span>
            </div>
            <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">
              {isAr ? 'باقات تأسيس تقنية متكاملة لكل مرحلة نمو' : 'Transparent Turnkey Packages for Every Stage'}
            </h2>
            <p
              className={`mt-3 text-base leading-relaxed ${
                isDark ? 'text-slate-300' : 'text-slate-600'
              }`}
            >
              {isAr
                ? 'سواء كنت عيادة جديدة، شركة في مرحلة التوسع، أو مؤسسة كبرى — لدينا الباقة التقنية المصممة لك مع الدعم والصيانة.'
                : 'From new clinics and startups to enterprise multi-branch operations — choose the exact plan that fits your growth.'}
            </p>
          </div>
        </RevealOnScroll>

        {/* 4 Packages Grid with Staggered Scroll Reveal */}
        <StaggerContainer staggerDelay={0.12} className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {NUZUL_PACKAGES.map((pkg: EnterprisePackage) => {
            const name = isAr ? pkg.name_ar : pkg.name_en;
            const subtitle = isAr ? pkg.subtitle_ar : pkg.subtitle_en;
            const badge = isAr ? pkg.badge_ar : pkg.badge_en;
            const summary = isAr ? pkg.summary_ar : pkg.summary_en;
            const details = isAr ? pkg.details_ar : pkg.details_en;
            const isExpanded = expandedId === pkg.id;

            const setupPrice = currency === 'USD' ? pkg.price_setup_usd : pkg.price_setup_egp;
            const monthlyPrice = currency === 'USD' ? pkg.price_monthly_usd : pkg.price_monthly_egp;

            return (
              <StaggerItem key={pkg.id} className="h-full">
                <article
                  className={`relative flex flex-col justify-between h-full rounded-2xl border p-6 transition-all duration-300 backdrop-blur-xl ${
                    pkg.highlighted
                      ? isDark
                        ? 'border-emerald-400/60 bg-gradient-to-b from-emerald-950/30 to-[#0d1524] shadow-[0_20px_45px_-10px_rgba(16,185,129,0.25)] ring-1 ring-emerald-400/40'
                        : 'border-emerald-500 bg-white shadow-xl ring-2 ring-emerald-400/30'
                      : isDark
                      ? 'border-white/10 bg-[#0d1524] hover:border-emerald-500/30 shadow-xl'
                      : 'border-slate-200 bg-white hover:border-emerald-300 shadow-md'
                  }`}
                >
                <div>
                  {/* Top Badge */}
                  {badge && (
                    <div className="mb-3">
                      <span className="inline-flex items-center gap-1 rounded-full border border-emerald-400/40 bg-emerald-400/10 px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-300">
                        <Sparkles className="h-3 w-3" />
                        {badge}
                      </span>
                    </div>
                  )}

                  <h3 className="text-xl font-bold leading-snug">{name}</h3>
                  <p className="mt-1 text-xs text-slate-400">{subtitle}</p>

                  {/* Pricing Box */}
                  <div
                    className={`mt-4 rounded-2xl border p-3.5 space-y-1.5 ${
                      isDark ? 'bg-white/5 border-white/5' : 'bg-slate-50 border-slate-200'
                    }`}
                  >
                    <div>
                      <span className="text-[10px] uppercase font-mono text-slate-400 block">
                        {isAr ? 'رسوم التأسيس والتجهيز:' : 'Setup & Installation:'}
                      </span>
                      <span className="figures text-base font-black text-emerald-600 dark:text-emerald-400">{setupPrice}</span>
                    </div>

                    <div className="border-t border-current/10 pt-1.5">
                      <span className="text-[10px] uppercase font-mono text-slate-400 block">
                        {isAr ? 'الدعم والإدارة الشهرية:' : 'Monthly Maintenance:'}
                      </span>
                      <span className="figures text-sm font-bold text-cyan-600 dark:text-cyan-400">{monthlyPrice}</span>
                    </div>
                  </div>

                  {/* High-Level Summary List */}
                  <ul
                    className={`mt-5 space-y-2 text-xs font-medium ${
                      isDark ? 'text-slate-300' : 'text-slate-700'
                    }`}
                  >
                    {summary.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <Check className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Expandable Technical Details */}
                  {isExpanded && (
                    <div className="mt-4 pt-4 border-t border-current/10 space-y-2.5">
                      <div className="text-[11px] font-mono font-bold text-slate-400 uppercase">
                        {isAr ? 'المواصفات الهندسية التفصيلية:' : 'Detailed Technical Specs:'}
                      </div>

                      <ul className="space-y-1.5 text-[11px] text-slate-400">
                        {details.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-1.5">
                            <span className="text-emerald-500 font-bold">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Accordion Toggle */}
                  <button
                    type="button"
                    onClick={() => toggleExpand(pkg.id)}
                    className="mt-4 flex w-full items-center justify-center gap-1 py-1.5 text-[11px] font-bold text-slate-400 hover:text-emerald-500 transition-colors cursor-pointer"
                  >
                    <span>
                      {isExpanded
                        ? isAr
                          ? 'إخفاء التفاصيل'
                          : 'Hide Technical Specs'
                        : isAr
                        ? 'عرض التفاصيل الكاملة'
                        : 'View Full Specs'}
                    </span>
                    {isExpanded ? <ChevronUp className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />}
                  </button>
                </div>

                {/* Actions */}
                <div className="mt-6 pt-4 border-t border-current/10 space-y-2">
                  <a
                    href="#contact"
                    className={`btn w-full py-2.5 text-xs font-bold uppercase tracking-wider cursor-pointer ${
                      pkg.highlighted ? 'btn-primary shadow-lg shadow-emerald-500/20' : 'btn-secondary'
                    }`}
                  >
                    <span>{isAr ? 'طلب الباقة' : 'Choose Package'}</span>
                  </a>

                  <a
                    href={NUZUL_CONTACT.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-1.5 text-[11px] text-slate-400 hover:text-emerald-500 transition-colors py-1 cursor-pointer"
                  >
                    <PhoneCall className="h-3 w-3 text-emerald-500" />
                    <span>{isAr ? 'استفسار عبر واتساب' : 'Inquire via WhatsApp'}</span>
                  </a>
                </div>
              </article>
            </StaggerItem>
          );
        })}
      </StaggerContainer>
    </div>
  </section>
  );
};
