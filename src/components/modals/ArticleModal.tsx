import React from 'react';
import { X, Calendar, Tag, ShieldCheck, BookOpen } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const ArticleModal: React.FC = () => {
  const { activeArticle, setActiveArticle, locale, theme } = useApp();
  const isAr = locale === 'ar';
  const isDark = theme === 'dark';

  if (!activeArticle) return null;

  const title = isAr ? activeArticle.title_ar : activeArticle.title_en;
  const category = isAr ? activeArticle.category_ar : activeArticle.category_en;
  const content = isAr ? activeArticle.content_ar : activeArticle.content_en;

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center bg-black/80 p-4 backdrop-blur-md">
      <div
        className={`relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl border p-6 sm:p-8 shadow-2xl transition-colors ${
          isDark
            ? 'border-emerald-500/40 bg-[#0d1524] text-white'
            : 'border-slate-200 bg-white text-slate-900'
        }`}
      >
        {/* Close Button */}
        <button
          onClick={() => setActiveArticle(null)}
          className={`absolute top-6 right-6 rtl:right-auto rtl:left-6 rounded-full p-2 transition-colors cursor-pointer ${
            isDark ? 'bg-white/10 text-slate-300 hover:bg-white/20 hover:text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
          }`}
          aria-label="Close Article"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Category & Date */}
        <div className="flex items-center gap-3 mb-4">
          <span className="rounded-lg bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 px-3 py-1 font-mono text-xs font-bold">
            {category}
          </span>
          <span className="text-xs font-mono text-slate-400">
            {activeArticle.date}
          </span>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-black leading-snug sm:text-3xl">
          {title}
        </h2>

        {/* Formatted Content */}
        <div
          className={`mt-6 space-y-4 text-sm leading-relaxed border-t pt-6 whitespace-pre-line ${
            isDark ? 'text-slate-300 border-white/10' : 'text-slate-700 border-slate-200'
          }`}
        >
          {content}
        </div>

        {/* Footer */}
        <div className="mt-8 pt-6 border-t border-current/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <ShieldCheck className="h-4 w-4 text-emerald-500" />
            <span>{isAr ? 'نُزول تِك للأعمال — Nuzul Tech Knowledge Base' : 'Nuzul Tech Enterprise Knowledge Base'}</span>
          </div>

          <button
            onClick={() => setActiveArticle(null)}
            className="btn btn-primary py-2 px-6 text-xs font-bold w-full sm:w-auto cursor-pointer"
          >
            {isAr ? 'إغلاق المقال' : 'Close Guide'}
          </button>
        </div>
      </div>
    </div>
  );
};
