import React, { useState } from 'react';
import { Sparkles, Quote, Star, ChevronDown, ChevronUp } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { NUZUL_TESTIMONIALS } from '../../data/nuzulData';

export const TestimonialsSection: React.FC = () => {
  const { locale, theme } = useApp();
  const isAr = locale === 'ar';
  const isDark = theme === 'dark';

  const [showAllTestimonials, setShowAllTestimonials] = useState(false);

  const INITIAL_TESTIMONIALS_COUNT = 6;
  const displayedTestimonials = showAllTestimonials
    ? NUZUL_TESTIMONIALS
    : NUZUL_TESTIMONIALS.slice(0, INITIAL_TESTIMONIALS_COUNT);

  return (
    <section
      id="testimonials"
      className={`relative scroll-mt-24 px-5 py-24 sm:px-6 lg:px-8 border-t transition-colors ${
        isDark ? 'bg-[#0a111c] border-white/10 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'
      }`}
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="eyebrow-mono justify-center text-emerald-600 dark:text-emerald-400">
            <Sparkles className="h-4 w-4" />
            <span>{isAr ? 'قصص نجاح عملائنا وتجاربهم الموثقة' : 'CLIENT SUCCESS STORIES & REVIEWS'}</span>
          </div>

          <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">
            {isAr ? 'ماذا يقول عملاؤنا وقادة المؤسسات في مصر؟' : 'What Enterprise Leaders Say About Nuzul Tech'}
          </h2>

          <p
            className={`mt-3 text-base leading-relaxed ${
              isDark ? 'text-slate-300' : 'text-slate-600'
            }`}
          >
            {isAr
              ? 'تجارب وقصص نجاح حقيقية من قيادات مستشفيات تراست وABCH وكايرو كيور، وعيادة د. خالد عبيدو، ومؤسسة مشكاة نور الخيرية، ومنصة OmnixTrack CRM، والشركات التي اعتمدت على البنية التحتية والأنظمة الافتراضية والحوسبة السحابية لنُزول تِك.'
              : 'Direct outcomes from executive leaders at Trust Hospital, ABCH, Cairo Cure, Dr. Khaled Obeido Clinic, Meshkat Nour Foundation, OmnixTrack CRM, and enterprise partners across Egypt.'}
          </p>
        </div>

        {/* Testimonials Grid (3 Columns for 12 clients) */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {displayedTestimonials.map((t, idx) => {
            const name = isAr ? t.name_ar : t.name_en;
            const role = isAr ? t.role_ar : t.role_en;
            const text = isAr ? t.text_ar : t.text_en;

            return (
              <article
                key={idx}
                className={`relative flex flex-col justify-between rounded-3xl border-2 p-6 transition-all duration-300 hover:-translate-y-1 ${
                  isDark
                    ? 'border-white/10 bg-[#0d1524] hover:border-emerald-500/40 shadow-xl'
                    : 'border-slate-200 bg-white hover:border-emerald-500 shadow-md'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-amber-500 text-xs gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3.5 w-3.5 fill-amber-500" />
                      ))}
                    </div>
                    <Quote className="h-5 w-5 text-emerald-500/40" />
                  </div>

                  <p
                    className={`text-xs leading-relaxed italic mb-6 ${
                      isDark ? 'text-slate-200' : 'text-slate-700'
                    }`}
                  >
                    "{text}"
                  </p>
                </div>

                <div className="pt-4 border-t border-current/10">
                  <div className="font-bold text-sm">{name}</div>
                  <div className="text-[11px] text-emerald-600 dark:text-emerald-400 mt-0.5 font-medium">{role}</div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Show More / Show Less Toggle Button */}
        {NUZUL_TESTIMONIALS.length > INITIAL_TESTIMONIALS_COUNT && (
          <div className="mt-12 flex flex-col items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => setShowAllTestimonials(!showAllTestimonials)}
              className="inline-flex items-center gap-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-600/25 transition-all duration-300 hover:scale-105 cursor-pointer ring-2 ring-emerald-400/40"
            >
              {showAllTestimonials ? (
                <>
                  <span>{isAr ? 'عرض آراء أقل' : 'Show Fewer Reviews'}</span>
                  <ChevronUp className="h-4 w-4" />
                </>
              ) : (
                <>
                  <span>
                    {isAr
                      ? `عرض باقي آراء العملاء (${NUZUL_TESTIMONIALS.length - INITIAL_TESTIMONIALS_COUNT} آراء إضافية)`
                      : `View All ${NUZUL_TESTIMONIALS.length} Client Testimonials`}
                  </span>
                  <ChevronDown className="h-4 w-4" />
                </>
              )}
            </button>
            <span className="text-xs font-mono text-slate-400">
              {isAr
                ? `يتم عرض ${displayedTestimonials.length} من أصل ${NUZUL_TESTIMONIALS.length} تقييماً موثقاً`
                : `Showing ${displayedTestimonials.length} of ${NUZUL_TESTIMONIALS.length} verified client reviews`}
            </span>
          </div>
        )}
      </div>
    </section>
  );
};
