import React from 'react';
import { useApp } from '../../context/AppContext';
import { ScrollReveal, StaggerGroup, StaggerItem } from '../common/MotionPrimitives';

export const HomeHowWeWork: React.FC = () => {
  const { lang } = useApp();

  const steps = [
    {
      num: '01',
      titleAr: 'المعاينة وتحديد الاحتياج الفعلي',
      titleEn: 'Site Audit & Technical Sizing',
      descAr:
        'نفحص الشبكة أو السيرفرات الحالية، نحدد الاحتياج الحقيقي بدون مبالغة في العتاد، ونسلّمك عرض سعر ومواصفات مكتوبة.',
      descEn:
        'We inspect existing switches, racks, and servers, size actual workloads without overselling hardware, and issue a written scope.',
    },
    {
      num: '02',
      titleAr: 'التنفيذ والترحيل خارج ساعات العمل',
      titleEn: 'Off-Peak Rollout & Cutover',
      descAr:
        'ننفّذ التمديدات أو نركّب الفايروول أو ننقل قواعد البيانات في عطلة نهاية الأسبوع أو خارج الذروة مع خطة رجوع فورية.',
      descEn:
        'Cabling, firewall swap, or server migration runs during off-peak windows with a tested rollback plan.',
    },
    {
      num: '03',
      titleAr: 'تسليم الصلاحيات وعقد الصيانة',
      titleEn: 'Full Handover & SLA Support',
      descAr:
        'تستلم كل كلمات المرور ومخططات الشبكة باسم شركتك بالكامل، مع متابعة مستمرة وتحديثات أمان بعقد SLA.',
      descEn:
        'Every password and network diagram stays under your ownership, backed by ongoing monitoring and clear SLA terms.',
    },
  ];

  return (
    <section
      data-testid="home-how-we-work"
      className="section-spacing-home bg-surface-band border-y border-token"
    >
      <div className="container-nuzul">
        <ScrollReveal className="max-w-2xl mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-main">
            {lang === 'ar' ? 'كيف ننفّذ مشروعك؟' : 'How We Deliver Projects'}
          </h2>
          <p className="text-muted mt-2.5 text-base leading-relaxed">
            {lang === 'ar'
              ? 'من أول معاينة فنية حتى استلامك كل الصلاحيات ومخططات الشبكة.'
              : 'From initial site audit to complete credential handover—clear milestones, zero surprises.'}
          </p>
        </ScrollReveal>

        <StaggerGroup className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step) => (
            <StaggerItem
              key={step.num}
              className="clean-card p-6 sm:p-7 flex flex-col justify-between"
            >
              <div>
                <span dir="ltr" className="ltr-num text-xs font-bold text-accent block mb-3">
                  {step.num}
                </span>
                <h3 className="text-lg font-bold text-main mb-2.5">
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
