import React from 'react';
import { useApp } from '../../context/AppContext';
import { ScrollReveal, StaggerGroup, StaggerItem } from '../common/MotionPrimitives';

export const HomeHowWeWork: React.FC = () => {
  const { lang } = useApp();

  const steps = [
    {
      num: '01',
      titleAr: 'فحص الموقع وتحديد المتطلبات',
      titleEn: 'Site Audit & Technical Sizing',
      descAr:
        'نراجع الشبكة والخوادم القائمة، نحصر الأحمال والثغرات، ونقدم نطاق عمل ومواصفات مكتوبة قبل التعاقد.',
      descEn:
        'We inspect existing switches, racks, and servers, size real workloads, and issue a written technical scope.',
    },
    {
      num: '02',
      titleAr: 'التجهيز والترحيل خارج الذروة',
      titleEn: 'Off-Peak Cutover & Rollout',
      descAr:
        'ننفذ التمديدات أو نرحّل الخوادم وقواعد البيانات في أوقات التوقف المجدولة مع خطة تراجع Rollback مختبرة.',
      descEn:
        'Cabling, firewall swap, or server migration happens in scheduled off-peak windows with a tested rollback plan.',
    },
    {
      num: '03',
      titleAr: 'تسليم التوثيق والتشغيل وفق SLA',
      titleEn: 'Runbook Handover & SLA Support',
      descAr:
        'يتسلم العميل كلمات المرور ومخططات الشبكة كاملةً، مع مراقبة 24/7 وتحديثات أمان مجدولة.',
      descEn:
        'Full credentials and As-Built diagrams stay in your hands, backed by 24/7 monitoring and contract SLAs.',
    },
  ];

  return (
    <section
      data-testid="home-how-we-work"
      className="section-spacing-home bg-page-band"
    >
      <div className="container-nuzul">
        <ScrollReveal className="max-w-2xl mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-main">
            {lang === 'ar'
              ? 'مراحل التنفيذ والترحيل المنضبط'
              : 'Disciplined Delivery & Migration Workflow'}
          </h2>
          <p className="text-muted mt-3 text-base leading-relaxed">
            {lang === 'ar'
              ? 'مسار عمل مجدول خارج أوقات الذروة من الفحص الميداني حتى التسليم وفق SLA.'
              : 'Scheduled off-peak execution from initial site survey to documented SLA handover.'}
          </p>
        </ScrollReveal>

        {/* Horizontal 3-Step Engineering Pipeline Track (Distinct from Card Grid) */}
        <StaggerGroup className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <StaggerItem
              key={step.num}
              className="border-t-2 border-accent pt-5 flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-bold text-accent block mb-2">
                  {lang === 'ar' ? (
                    <>
                      الخطوة <bdi dir="ltr" className="ltr-num">{step.num}</bdi>
                    </>
                  ) : (
                    <bdi dir="ltr" className="ltr-num">STEP {step.num}</bdi>
                  )}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-main mb-2.5">
                  {lang === 'ar' ? step.titleAr : step.titleEn}
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  {lang === 'ar' ? step.descAr : step.descEn}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
};
