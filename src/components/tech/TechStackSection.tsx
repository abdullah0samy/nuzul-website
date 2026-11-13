import React from 'react';
import { TECH_STACK } from '../../data/nuzulData';
import { useApp } from '../../context/AppContext';
import { Cpu, CheckCircle2 } from 'lucide-react';

export const TechStackSection: React.FC = () => {
  const { lang } = useApp();

  return (
    <section className="py-16 relative overflow-hidden bg-surface-band border-y border-token">
      <div className="container-nuzul relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-accent text-xs font-semibold mb-2">
              <Cpu className="w-4 h-4" />
              <span>
                {lang === 'ar'
                  ? 'توافق الأنظمة والبرمجيات'
                  : 'OS & Stack Compatibility'}
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-main">
              {lang === 'ar'
                ? 'توزيعات أنظمة التشغيل وقواعد البيانات المدعومة'
                : 'Supported Operating Systems, Runtimes & Databases'}
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-muted max-w-md leading-relaxed">
            {lang === 'ar'
              ? 'بيئات تشغيل مهيأة لدعم أطر العمل البرمجية، قواعد البيانات، وحاويات التطبيقات القياسية.'
              : 'Server environments configured to run standard enterprise frameworks, relational databases, and container workloads.'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {TECH_STACK.map((group, idx) => (
            <div
              key={idx}
              className="clean-card clean-card-hover p-5"
            >
              <h3 className="text-xs font-bold text-accent mb-4 pb-3 border-b border-token">
                {lang === 'ar' ? group.category : group.categoryEn}
              </h3>
              <ul className="space-y-3">
                {group.items.map((item, i) => (
                  <li key={i} className="flex items-center justify-between gap-2">
                    <span className="text-sm font-bold text-main flex items-center gap-2 ltr-num">
                      <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0" />
                      <bdi dir="ltr">{item.name}</bdi>
                    </span>
                    <span className="text-[11px] px-2 py-0.5 rounded bg-surface text-muted border border-token whitespace-nowrap">
                      <bdi dir="ltr">{lang === 'ar' ? item.badge : item.badgeEn}</bdi>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
