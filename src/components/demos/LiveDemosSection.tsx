import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LIVE_DEMOS } from '../../data/nuzulData';
import { useApp } from '../../context/AppContext';
import {
  LayoutDashboard,
  Activity,
  ShoppingBag,
  CheckCircle2,
  ArrowLeft,
  ArrowRight,
  Terminal,
} from 'lucide-react';

export const LiveDemosSection: React.FC = () => {
  const { lang } = useApp();
  const [activeTabId, setActiveTabId] = useState<string>(LIVE_DEMOS[0].id);
  const ArrowIcon = lang === 'ar' ? ArrowLeft : ArrowRight;

  const activeDemo = LIVE_DEMOS.find((d) => d.id === activeTabId) || LIVE_DEMOS[0];

  const getTabIcon = (id: string) => {
    switch (id) {
      case 'demo-erp':
        return LayoutDashboard;
      case 'demo-his':
        return Activity;
      default:
        return ShoppingBag;
    }
  };

  return (
    <section id="demos" className="section-spacing bg-surface-band border-t border-token">
      <div className="container-nuzul">
        <div className="max-w-3xl mb-10">
          <h2 className="text-2xl md:text-4xl font-bold text-main mb-3">
            {lang === 'ar' ? 'عرض توضيحي لنظام ERP' : 'ERP System Demo'}
          </h2>
          <p className="text-muted text-base leading-relaxed">
            {lang === 'ar'
              ? 'شاشات النظام ووحداته الأساسية، مع الربط المباشر مع الفاتورة الإلكترونية المصرية (ETA).'
              : 'System screens, core modules, and direct ETA e-invoicing integration.'}
          </p>
        </div>

        {LIVE_DEMOS.length > 1 && (
          <div className="flex flex-wrap items-center gap-3 mb-8">
            {LIVE_DEMOS.map((demo) => {
              const Icon = getTabIcon(demo.id);
              const isActive = demo.id === activeTabId;
              return (
                <button
                  key={demo.id}
                  type="button"
                  onClick={() => setActiveTabId(demo.id)}
                  className={`flex items-center gap-2.5 px-5 py-3 rounded-xl text-sm font-bold transition-colors border ${
                    isActive
                      ? 'bg-accent text-accent-contrast border-accent'
                      : 'bg-page text-muted border-token hover-surface-2 hover-text-main'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{lang === 'ar' ? demo.title : demo.titleEn}</span>
                </button>
              );
            })}
          </div>
        )}

        <div className="clean-card overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
              <div>
                <span className="inline-block text-xs font-semibold text-accent mb-2">
                  {lang === 'ar' ? activeDemo.category : activeDemo.categoryEn}
                </span>
                <h3 className="text-2xl font-bold text-main mb-3 leading-snug">
                  {lang === 'ar' ? activeDemo.title : activeDemo.titleEn}
                </h3>
                <p className="text-muted text-sm leading-relaxed mb-6">
                  {lang === 'ar' ? activeDemo.description : activeDemo.descriptionEn}
                </p>

                <div className="mb-8">
                  <div className="text-xs font-bold text-muted mb-3">
                    {lang === 'ar' ? 'وحدات النظام:' : 'System Modules:'}
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {(lang === 'ar' ? activeDemo.modules : activeDemo.modulesEn).map((mod, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2.5 p-3 rounded-xl bg-surface border border-token text-xs text-main font-medium"
                      >
                        <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                        <span>{mod}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-token flex flex-wrap items-center gap-4">
                <Link
                  to="/contact?service=software"
                  className="btn-primary px-6 py-3 text-sm"
                >
                  <span>
                    {lang === 'ar' ? 'اطلب Demo مباشر' : 'Book a Live Demo'}
                  </span>
                  <ArrowIcon className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 bg-surface-2 border-t lg:border-t-0 lg:border-s border-token p-6 sm:p-8 flex flex-col justify-center">
              <div className="text-xs font-bold text-muted mb-4">
                {lang === 'ar' ? 'المواصفات الفنية:' : 'Technical Specifications:'}
              </div>
              <dl className="divide-y divide-[var(--border)]">
                {activeDemo.kpis.map((kpi, idx) => (
                  <div key={idx} className="py-4 first:pt-0 last:pb-0 flex items-center justify-between gap-4">
                    <dt className="text-sm font-medium text-main">
                      {lang === 'ar' ? kpi.label : kpi.labelEn}
                    </dt>
                    <dd>
                      <bdi dir="ltr" className="ltr-num text-sm sm:text-base font-bold text-accent">
                        {kpi.value}
                      </bdi>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
