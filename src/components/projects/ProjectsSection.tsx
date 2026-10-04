import React, { useState } from 'react';
import {
  Shield,
  Building2,
  Activity,
  Mail,
  Truck,
  Lock,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  ArrowLeft,
  X,
  FileText,
  Sparkles,
  ExternalLink,
  Cpu,
  Layers,
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { NUZUL_CASE_STUDIES, NUZUL_CONTACT } from '../../data/nuzulData';
import { CaseStudy } from '../../types';

export const ProjectsSection: React.FC = () => {
  const { locale, theme } = useApp();
  const isAr = locale === 'ar';
  const isDark = theme === 'dark';

  const [activeFilter, setActiveFilter] = useState<'all' | 'healthcare' | 'mail' | 'infrastructure'>('all');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);

  const iconMap: Record<string, React.ElementType> = {
    Shield,
    Building2,
    Activity,
    Mail,
    Truck,
    Lock,
  };

  const filteredProjects = NUZUL_CASE_STUDIES.filter((p) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'healthcare')
      return (
        p.category_en.toLowerCase().includes('health') ||
        p.category_en.toLowerCase().includes('hospital')
      );
    if (activeFilter === 'mail')
      return (
        p.category_en.toLowerCase().includes('mail') ||
        p.category_en.toLowerCase().includes('email')
      );
    if (activeFilter === 'infrastructure')
      return (
        p.category_en.toLowerCase().includes('infrastructure') ||
        p.category_en.toLowerCase().includes('network') ||
        p.category_en.toLowerCase().includes('security') ||
        p.category_en.toLowerCase().includes('cctv') ||
        p.category_en.toLowerCase().includes('accounting') ||
        p.category_en.toLowerCase().includes('finance') ||
        p.category_en.toLowerCase().includes('tax') ||
        p.category_en.toLowerCase().includes('logistics') ||
        p.category_en.toLowerCase().includes('turnkey')
      );
    return true;
  });

  return (
    <section
      id="projects"
      className={`relative overflow-hidden scroll-mt-24 px-5 py-20 sm:py-24 sm:px-6 lg:px-8 border-t transition-colors ${
        isDark ? 'bg-[#090e17] border-white/10 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'
      }`}
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="eyebrow-mono justify-center text-emerald-600 dark:text-emerald-400">
            <Shield className="h-4 w-4" />
            <span>{isAr ? 'تجارب واقعية ونتائج حقيقية' : 'PROVEN CASE STUDIES & FEASIBILITY'}</span>
          </div>

          <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">
            {isAr
              ? 'قصص نجاح ودراسات جدوى حقيقية لمؤسسات ومستشفيات مصرية'
              : 'Grounded Case Studies & Real Outcomes Across Egypt'}
          </h2>

          <p
            className={`mt-3 text-base leading-relaxed ${
              isDark ? 'text-slate-300' : 'text-slate-600'
            }`}
          >
            {isAr
              ? 'دراسات حالة هندسية موثقة: ماذا كانت المشكلة، وكيف تدخل فريق نُزول تِك بالحل البرمجي والسحابي، وما هو الأثر المالي والتشغيلي المباشر على أعمال كل عميل.'
              : 'Documented architectural interventions: diagnosing the root bottleneck, engineering sovereign cloud & local systems, and delivering quantifiable ROI for Egyptian enterprises.'}
          </p>

          {/* Filter Tabs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {[
              { id: 'all', labelAr: `جميع دراسات الحالة (${NUZUL_CASE_STUDIES.length})`, labelEn: `All Case Studies (${NUZUL_CASE_STUDIES.length})` },
              { id: 'healthcare', labelAr: 'المستشفيات والأنظمة الصحية', labelEn: 'Hospitals & Healthcare' },
              { id: 'mail', labelAr: 'هجرة البريد وحوكمة الأرشيف', labelEn: 'Email & Archiving Governance' },
              { id: 'infrastructure', labelAr: 'الشبكات والأمن والسيرفرات والمالية', labelEn: 'Networks, Security, Servers & Finance' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveFilter(tab.id as any)}
                className={`rounded-full px-5 py-2 text-xs font-bold transition-all cursor-pointer ${
                  activeFilter === tab.id
                    ? 'bg-emerald-500 text-white shadow-md ring-2 ring-emerald-400/40'
                    : isDark
                    ? 'bg-[#0d1524] text-slate-300 hover:bg-white/10 hover:text-white border border-white/10'
                    : 'bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200 shadow-sm'
                }`}
              >
                {isAr ? tab.labelAr : tab.labelEn}
              </button>
            ))}
          </div>
        </div>

        {/* Clean, Tidy Outer Project Cards Grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project: CaseStudy) => {
            const title = isAr ? project.title_ar : project.title_en;
            const category = isAr ? project.category_ar : project.category_en;
            const client = isAr ? project.client_ar : project.client_en;
            const description = isAr ? project.description_ar : project.description_en;
            const result = isAr ? project.result_ar : project.result_en;

            return (
              <article
                key={project.id}
                className={`group relative flex flex-col justify-between rounded-3xl border p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 ${
                  isDark
                    ? 'border-slate-800 bg-[#0d1524] hover:border-emerald-500/50 shadow-lg'
                    : 'border-slate-200 bg-white hover:border-emerald-500/60 shadow-sm hover:shadow-md'
                }`}
              >
                <div>
                  {/* Category & Client Header */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="inline-flex rounded-lg bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 font-mono text-[10px] font-bold text-emerald-600 dark:text-emerald-400">
                      {category}
                    </span>
                    <span className="text-[11px] font-medium text-slate-400 truncate max-w-[60%] text-end">
                      {client}
                    </span>
                  </div>

                  {/* Clean Title */}
                  <h3 className="text-base sm:text-lg font-bold leading-snug group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {title}
                  </h3>

                  {/* Concise Description: What Service Was Delivered */}
                  <div className="mt-3.5 space-y-2">
                    <div className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                      <Layers className="h-3 w-3" />
                      <span>{isAr ? 'الخدمة المنفذة:' : 'Delivered Scope:'}</span>
                    </div>
                    <p
                      className={`text-xs leading-relaxed line-clamp-3 ${
                        isDark ? 'text-slate-300' : 'text-slate-600'
                      }`}
                    >
                      {description}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-slate-200 dark:border-white/10 space-y-3.5">
                  {/* How Client Benefited (Outcome Banner) */}
                  <div
                    className={`rounded-2xl p-3 text-xs border ${
                      isDark
                        ? 'bg-emerald-950/20 border-emerald-500/20 text-emerald-300'
                        : 'bg-emerald-50/80 border-emerald-200 text-emerald-950'
                    }`}
                  >
                    <div className="text-[10px] font-mono font-bold text-emerald-600 dark:text-emerald-400 mb-1 flex items-center gap-1">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                      <span>{isAr ? 'كيف استفاد العميل من نُزول تِك:' : 'Client Value & Direct ROI:'}</span>
                    </div>
                    <p className="text-xs font-medium leading-relaxed">
                      {result}
                    </p>
                  </div>

                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.slice(0, 3).map((t, i) => (
                      <span
                        key={i}
                        className={`rounded-md border px-2 py-0.5 font-mono text-[10px] ${
                          isDark
                            ? 'bg-white/5 border-white/5 text-slate-400'
                            : 'bg-slate-100 border-slate-200 text-slate-600'
                        }`}
                      >
                        {t}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="rounded-md border border-slate-200 dark:border-white/10 px-1.5 py-0.5 font-mono text-[10px] text-slate-400">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>

                  {/* View Details Button (Opens rich modal) */}
                  <button
                    type="button"
                    onClick={() => setSelectedCaseStudy(project)}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white py-2.5 text-xs font-bold transition-all cursor-pointer shadow-sm hover:shadow"
                  >
                    <FileText className="h-3.5 w-3.5" />
                    <span>{isAr ? 'عرض دراسة الجدوى والحل الكامل' : 'View Feasibility & Case Study'}</span>
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Strategic Case Study Deep-Dive Modal */}
      {selectedCaseStudy && (
        <div className="fixed inset-0 z-[130] flex items-center justify-center bg-black/80 p-4 backdrop-blur-md">
          <div
            className={`relative max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-3xl border p-6 sm:p-8 shadow-2xl transition-colors ${
              isDark
                ? 'border-emerald-500/40 bg-[#0a111c] text-white'
                : 'border-slate-200 bg-white text-slate-900'
            }`}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedCaseStudy(null)}
              className={`absolute top-5 right-5 rtl:right-auto rtl:left-5 p-2 rounded-full transition-colors cursor-pointer ${
                isDark
                  ? 'bg-white/10 text-slate-300 hover:bg-white/20 hover:text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
              }`}
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Header info */}
            <div className="flex items-center gap-2 flex-wrap mb-2">
              <span className="rounded-lg bg-emerald-500/15 border border-emerald-500/40 px-2.5 py-1 font-mono text-[10px] font-bold text-emerald-600 dark:text-emerald-400">
                {isAr ? selectedCaseStudy.category_ar : selectedCaseStudy.category_en}
              </span>
              <span className="font-mono text-xs text-slate-400">
                {isAr ? selectedCaseStudy.client_ar : selectedCaseStudy.client_en}
              </span>
            </div>

            <h3 className="text-xl font-bold leading-snug sm:text-2xl">
              {isAr ? selectedCaseStudy.title_ar : selectedCaseStudy.title_en}
            </h3>

            {/* 1. Executive Summary in Emerald container */}
            {selectedCaseStudy.executiveSummary_ar && (
              <div
                className={`mt-6 rounded-2xl border p-5 ${
                  isDark
                    ? 'border-emerald-500/30 bg-emerald-950/20 text-slate-200'
                    : 'border-emerald-200 bg-emerald-50/70 text-slate-800'
                }`}
              >
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-2">
                  <Sparkles className="h-4 w-4" />
                  <span>{isAr ? 'الملخص التنفيذي ودراسة الجدوى' : 'EXECUTIVE SUMMARY & FEASIBILITY'}</span>
                </div>
                <p className="text-xs leading-relaxed">
                  {isAr ? selectedCaseStudy.executiveSummary_ar : selectedCaseStudy.executiveSummary_en}
                </p>
              </div>
            )}

            {/* 2. Key Challenges & Risks in Amber container */}
            {selectedCaseStudy.challenges_ar && (
              <div className="mt-6">
                <h4 className="flex items-center gap-2 text-xs font-mono font-bold text-amber-500 uppercase tracking-wider mb-3">
                  <AlertTriangle className="h-4 w-4 text-amber-500" />
                  <span>{isAr ? 'تشخيص الوضع الراهن والتحديات' : 'THE CHALLENGES & RISKS'}</span>
                </h4>
                <div className="space-y-2">
                  {(isAr ? selectedCaseStudy.challenges_ar : selectedCaseStudy.challenges_en || []).map((c, i) => (
                    <div
                      key={i}
                      className={`flex items-start gap-2 rounded-xl border p-3 text-xs ${
                        isDark
                          ? 'bg-amber-950/20 border-amber-500/20 text-slate-200'
                          : 'bg-amber-50/80 border-amber-200 text-slate-800'
                      }`}
                    >
                      <span className="font-mono text-amber-500 font-bold">•</span>
                      <span>{c}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 3. Engineered Solution with Checkmarks */}
            {selectedCaseStudy.solution_ar && (
              <div className="mt-6">
                <h4 className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-3">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  <span>{isAr ? 'الحل الهندسي والتدخل التقني المنفذ' : 'THE ENGINEERING SOLUTION'}</span>
                </h4>
                <div className="space-y-2">
                  {(isAr ? selectedCaseStudy.solution_ar : selectedCaseStudy.solution_en || []).map((s, i) => (
                    <div
                      key={i}
                      className={`flex items-start gap-2 rounded-xl border p-3 text-xs ${
                        isDark
                          ? 'bg-[#0d1524] border-white/10 text-slate-200'
                          : 'bg-slate-50 border-slate-200 text-slate-800'
                      }`}
                    >
                      <span className="font-mono text-emerald-500 font-bold">✓</span>
                      <span>{s}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 4. IT as a Service Callout (Strictly Highlighted) */}
            <div
              className={`mt-6 rounded-2xl border p-4 ${
                isDark
                  ? 'bg-gradient-to-r from-emerald-950/30 to-cyan-950/30 border-emerald-500/30 text-slate-200'
                  : 'bg-emerald-50 border-emerald-300 text-slate-900 shadow-sm'
              }`}
            >
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-600 dark:text-emerald-400 font-bold mb-1.5">
                <Cpu className="h-4 w-4" />
                <span>{isAr ? 'قطاع تقني كامل كخدمة (IT as a Service):' : 'Full IT as a Service (ITaaS):'}</span>
              </div>
              <p className="text-xs leading-relaxed font-medium">
                {isAr
                  ? 'حصل المركز على إدارة استباقية، ومراقبة للبنية التحتية، ودعم فني متخصص، مما أزال الحاجة تماماً لتوظيف مهندس IT مقيم بمرتب شهري مرتفع.'
                  : 'Proactive infrastructure monitoring, enterprise patch management, and dedicated SLA response, completely eliminating the recurring payroll and overhead of an on-site IT engineer.'}
              </p>
            </div>

            {/* 5. Deliverables if available */}
            {selectedCaseStudy.deliverables_ar && (
              <div className="mt-6">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider mb-3">
                  {isAr ? 'مخرجات ومنظومة المشروع الأساسية' : 'Executed System Deliverables'}
                </h4>
                <div className="space-y-2">
                  {(isAr ? selectedCaseStudy.deliverables_ar : selectedCaseStudy.deliverables_en || []).map((d, i) => (
                    <div
                      key={i}
                      className={`flex items-start gap-2 rounded-xl border p-3 text-xs ${
                        isDark
                          ? 'bg-white/5 border-white/5 text-slate-300'
                          : 'bg-slate-50 border-slate-200 text-slate-700'
                      }`}
                    >
                      <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 6. Measurable Direct Result */}
            <div
              className={`mt-6 rounded-2xl border p-4 ${
                isDark ? 'bg-black/40 border-emerald-500/30' : 'bg-slate-100 border-slate-300'
              }`}
            >
              <div className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-bold mb-1">
                {isAr ? 'الأثر والنتيجة المباشرة (ROI):' : 'Direct Operational Impact (ROI):'}
              </div>
              <div className="text-sm font-bold">
                {isAr ? selectedCaseStudy.result_ar : selectedCaseStudy.result_en}
              </div>
            </div>

            {/* Modal Actions */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3 border-t border-slate-200 dark:border-white/10 pt-5">
              <a
                href={NUZUL_CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary flex-1 py-3 text-xs font-bold inline-flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <span>{isAr ? 'طلب استشارة ودراسة جدوى مماثلة لمؤسستك' : 'Request Similar Feasibility Study'}</span>
              </a>

              <button
                type="button"
                onClick={() => setSelectedCaseStudy(null)}
                className="btn btn-secondary py-3 px-6 text-xs font-bold cursor-pointer"
              >
                <span>{isAr ? 'إغلاق' : 'Close'}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
