import React from 'react';
import { Sparkles, Quote, Star } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { NUZUL_TESTIMONIALS } from '../../data/nuzulData';

export const TestimonialsSection: React.FC = () => {
  const { locale, theme } = useApp();
  const isAr = locale === 'ar';
  const isDark = theme === 'dark';

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
            <span>{isAr ? 'آراء العملاء' : 'CLIENT TESTIMONIALS'}</span>
          </div>

          <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">
            {isAr ? 'ماذا يقول عملاؤنا في مصر؟' : 'What Enterprise Clients Say'}
          </h2>

          <p
            className={`mt-3 text-base leading-relaxed ${
              isDark ? 'text-slate-300' : 'text-slate-600'
            }`}
          >
            {isAr
              ? 'تجارب حقيقية من مديري مستشفيات، مكاتب محاسبة ضريبية، وشركات كبرى اعتمدوا على نُزول تِك في تأسيس بنيتهم التحتية.'
              : 'Unfiltered outcomes from hospital directors, tax consultants, and enterprise IT leads who partner with Nuzul Tech.'}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {NUZUL_TESTIMONIALS.map((t, idx) => {
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
      </div>
    </section>
  );
};
