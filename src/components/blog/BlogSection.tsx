import React, { useState } from 'react';
import { Newspaper, ArrowRight, ArrowLeft, Calendar, Tag, BookOpen, Search, ShieldCheck } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { NUZUL_BLOG_POSTS } from '../../data/nuzulData';
import { BlogPost } from '../../types';

export const BlogSection: React.FC = () => {
  const { locale, setActiveArticle, theme } = useApp();
  const isAr = locale === 'ar';
  const isDark = theme === 'dark';

  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', labelAr: 'جميع المقالات والأدلة (١٦)', labelEn: 'All Guides (16)' },
    { id: 'cloud', labelAr: 'السيرفرات والـ VPS', labelEn: 'Cloud & Servers' },
    { id: 'health', labelAr: 'الأنظمة الصحية والمستشفيات', labelEn: 'Healthcare & PACS' },
    { id: 'security', labelAr: 'الأمن السيبراني والشبكات', labelEn: 'Security & Firewalls' },
    { id: 'software', labelAr: 'البرمجيات وتطبيقات الموبايل', labelEn: 'Software & Mobile' },
  ];

  const filteredPosts = NUZUL_BLOG_POSTS.filter((post) => {
    // Category match
    let matchCat = true;
    if (activeCategory === 'cloud') {
      matchCat =
        post.category_en.toLowerCase().includes('server') ||
        post.category_en.toLowerCase().includes('vps') ||
        post.category_en.toLowerCase().includes('domain');
    } else if (activeCategory === 'health') {
      matchCat =
        post.category_en.toLowerCase().includes('health') ||
        post.category_en.toLowerCase().includes('hospital') ||
        post.category_en.toLowerCase().includes('clinic');
    } else if (activeCategory === 'security') {
      matchCat =
        post.category_en.toLowerCase().includes('security') ||
        post.category_en.toLowerCase().includes('firewall') ||
        post.category_en.toLowerCase().includes('backup') ||
        post.category_en.toLowerCase().includes('voip') ||
        post.category_en.toLowerCase().includes('email') ||
        post.category_en.toLowerCase().includes('siem');
    } else if (activeCategory === 'software') {
      matchCat =
        post.category_en.toLowerCase().includes('software') ||
        post.category_en.toLowerCase().includes('mobile') ||
        post.category_en.toLowerCase().includes('web') ||
        post.category_en.toLowerCase().includes('ui/ux') ||
        post.category_en.toLowerCase().includes('erp');
    }

    // Search query match
    if (!matchCat) return false;
    if (!searchQuery.trim()) return true;

    const q = searchQuery.toLowerCase();
    const title = (isAr ? post.title_ar : post.title_en).toLowerCase();
    const excerpt = (isAr ? post.excerpt_ar : post.excerpt_en).toLowerCase();
    return title.includes(q) || excerpt.includes(q);
  });

  return (
    <section
      id="blog"
      className={`relative overflow-hidden scroll-mt-24 px-5 py-20 sm:py-24 sm:px-6 lg:px-8 border-t transition-colors ${
        isDark
          ? 'bg-[#070c14] border-white/10 text-white'
          : 'bg-slate-50 border-slate-200 text-slate-900'
      }`}
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-12">
          <div className="eyebrow-mono justify-center text-emerald-600 dark:text-emerald-400">
            <Newspaper className="h-4 w-4" />
            <span>{isAr ? 'المدونة والهندسة التقنية' : 'ENTERPRISE IT & CLOUD KNOWLEDGE BASE'}</span>
          </div>

          <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">
            {isAr
              ? 'أحدث مقالات وتجارب البنية التحتية والسيرفرات في مصر'
              : 'Recent Enterprise IT & Cloud Engineering Guides'}
          </h2>

          <p
            className={`mt-4 text-base leading-relaxed ${
              isDark ? 'text-slate-300' : 'text-slate-600'
            }`}
          >
            {isAr
              ? 'أدلة هندسية متخصصة ومحدثة لكل خدمة من خدماتنا: من سيرفرات ويندوز VPS بـ 1000 ج.م، وفصل أرشيف المستشفيات عن البريد، إلى جدران الحماية وسنترال VoIP والنسخ المعزول ضد الفدية.'
              : 'Field-tested architectural playbooks across all 16 enterprise domains: Windows VPS clusters, DICOM PACS medical decoupling, DMARC phishing immunity, and 3-2-1 hybrid cloud recovery.'}
          </p>

          {/* Search Bar & Category Filter */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <div className="relative w-full max-w-md">
              <Search className="absolute left-3.5 rtl:left-auto rtl:right-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={isAr ? 'ابحث في مقالات وأدلة الخدمات...' : 'Search IT & cloud guides...'}
                className={`w-full rounded-2xl border py-2.5 px-10 text-xs focus:border-emerald-500 focus:outline-none transition-colors ${
                  isDark
                    ? 'bg-[#0d1524] border-white/10 text-white placeholder-slate-500'
                    : 'bg-white border-slate-200 text-slate-900 placeholder-slate-400 shadow-sm'
                }`}
              />
            </div>
          </div>

          {/* Category Tabs */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`rounded-full px-4 py-2 text-xs font-bold transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-emerald-500 text-white shadow-md shadow-emerald-500/20'
                    : isDark
                    ? 'bg-[#0d1524] text-slate-300 hover:bg-white/10 hover:text-white border border-white/10'
                    : 'bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200 shadow-sm'
                }`}
              >
                {isAr ? cat.labelAr : cat.labelEn}
              </button>
            ))}
          </div>
        </div>

        {/* Guides Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredPosts.map((post: BlogPost) => {
            const title = isAr ? post.title_ar : post.title_en;
            const category = isAr ? post.category_ar : post.category_en;
            const excerpt = isAr ? post.excerpt_ar : post.excerpt_en;

            return (
              <article
                key={post.id}
                onClick={() => setActiveArticle(post)}
                className={`group cursor-pointer overflow-hidden rounded-3xl border-2 p-6 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between ${
                  isDark
                    ? 'border-white/10 bg-[#0d1524] hover:border-emerald-500/60 hover:shadow-2xl hover:shadow-emerald-500/10'
                    : 'border-slate-200 bg-white hover:border-emerald-500 hover:shadow-xl'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="inline-flex rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 px-2.5 py-1 font-mono text-[10px] font-bold">
                      {category}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">
                      {post.date}
                    </span>
                  </div>

                  <h3 className="text-base font-bold leading-snug group-hover:text-emerald-500 transition-colors min-h-[3.25rem]">
                    {title}
                  </h3>

                  <p
                    className={`mt-3 text-xs leading-relaxed line-clamp-3 ${
                      isDark ? 'text-slate-400' : 'text-slate-600'
                    }`}
                  >
                    {excerpt}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-current/10 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform">
                    <span>{isAr ? 'اقرأ الدليل بالكامل' : 'Read Full Guide'}</span>
                    {isAr ? <ArrowLeft className="h-3.5 w-3.5" /> : <ArrowRight className="h-3.5 w-3.5" />}
                  </span>
                  <BookOpen className="h-4 w-4 text-slate-400 group-hover:text-emerald-500 transition-colors" />
                </div>
              </article>
            );
          })}
        </div>

        {filteredPosts.length === 0 && (
          <div className="mt-12 rounded-3xl border border-dashed border-slate-300 dark:border-white/10 p-12 text-center">
            <Newspaper className="h-8 w-8 mx-auto text-slate-400 mb-3" />
            <h4 className="text-base font-bold">
              {isAr ? 'لم يتم العثور على مقالات مطابقة' : 'No Guides Found'}
            </h4>
            <p className="text-xs text-slate-400 mt-1">
              {isAr ? 'جرب البحث بكلمات أخرى أو اختر فئة مختلفة' : 'Try searching with different terms'}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
