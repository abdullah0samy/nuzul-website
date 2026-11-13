import React, { useState } from 'react';
import { IMPLEMENTATION_STEPS } from '../../data/nuzulData';
import { useApp } from '../../context/AppContext';
import { CheckCircle2, Clock, FileCheck, Layers, ChevronDown } from 'lucide-react';

export const ImplementationRoadmap: React.FC = () => {
  const { lang } = useApp();
  const [expandedSteps, setExpandedSteps] = useState<Record<string, boolean>>({});

  const toggleStep = (step: string) => {
    setExpandedSteps((prev) => ({ ...prev, [step]: !prev[step] }));
  };

  return (
    <section className="section-spacing relative overflow-hidden bg-page-band border-t border-token">
      <div className="container-nuzul relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-main mb-4">
            {lang === 'ar'
              ? 'مراحل تنفيذ المشروع'
              : 'Project Implementation Stages'}
          </h2>
          <p className="text-muted text-base leading-relaxed">
            {lang === 'ar'
              ? 'ننفذ على مراحل، خارج ساعات الذروة عند الحاجة، ونسلّم توثيق البنية التحتية مع المشروع.'
              : 'We implement in phases, off-peak when needed, and deliver infrastructure documentation upon completion.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {IMPLEMENTATION_STEPS.map((item) => {
            const isExpanded = Boolean(expandedSteps[item.step]);
            return (
              <div
                key={item.step}
                className="clean-card clean-card-hover p-6 relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-5">
                    <div className="w-11 h-11 rounded-xl bg-accent-soft border border-accent-soft flex items-center justify-center text-accent font-bold text-base ltr-num">
                      {item.step}
                    </div>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-surface-2 border border-token text-xs text-muted">
                      <Clock className="w-3.5 h-3.5 text-accent" />
                      {lang === 'ar' ? item.duration : item.durationEn}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-main mb-2.5">
                    {lang === 'ar' ? item.title : item.titleEn}
                  </h3>

                  <p
                    className={`text-muted text-xs sm:text-sm leading-relaxed mb-4 ${
                      isExpanded ? '' : 'line-clamp-2'
                    }`}
                  >
                    {lang === 'ar' ? item.description : item.descriptionEn}
                  </p>

                  {isExpanded && (
                    <div className="pt-3 mb-4 border-t border-token">
                      <div className="flex items-center gap-1.5 text-[11px] font-bold text-accent mb-1">
                        <FileCheck className="w-3.5 h-3.5" />
                        <span>{lang === 'ar' ? 'المخرج الهندسي:' : 'Key Deliverable:'}</span>
                      </div>
                      <div className="text-xs text-main font-medium flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                        <span>{lang === 'ar' ? item.deliverable : item.deliverableEn}</span>
                      </div>
                    </div>
                  )}
                </div>

                <div className="pt-3 border-t border-token">
                  <button
                    type="button"
                    onClick={() => toggleStep(item.step)}
                    data-testid={`roadmap-expand-${item.step}`}
                    aria-expanded={isExpanded}
                    className="inline-flex items-center gap-1.5 min-h-[44px] text-xs font-semibold text-accent hover:underline"
                  >
                    <span>
                      {isExpanded
                        ? lang === 'ar'
                          ? 'إخفاء التفاصيل'
                          : 'Show less'
                        : lang === 'ar'
                        ? 'إظهار المزيد'
                        : 'Show more'}
                    </span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform ${
                        isExpanded ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
