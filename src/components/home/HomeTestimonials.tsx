import React from 'react';
import { useApp } from '../../context/AppContext';
import { ScrollReveal, StaggerGroup, StaggerItem } from '../common/MotionPrimitives';

export const HomeTestimonials: React.FC = () => {
  const { lang } = useApp();

  // Maximum 3 testimonials (cleaned of colloquialisms & unverified percentages; personal names anonymized pending written release per CLAIMS.md #9, #50-52)
  const testimonials = [
    {
      id: 'quote-1',
      quoteAr:
        'ساهم نظام إدارة العيادات والنداء الرقمي في تنظيم حركة المراجعين داخل الصالات وربط ملف المريض مباشرة بغرفة الكشف والأشعة دون تعقيد.',
      quoteEn:
        'The clinic management and digital queue system organized patient flow in our waiting lounges and linked patient records directly to examination rooms.',
      roleAr: 'استشاري جراحة العظام والمفاصل',
      roleEn: 'Consultant Orthopedic Surgeon',
      orgAr: 'عيادة تخصصية — القاهرة',
      orgEn: 'Specialized Medical Clinic — Cairo',
    },
    {
      id: 'quote-2',
      quoteAr:
        'تولى فريق نزول تك فحص واختبار قبول نظام إدارة علاقات العملاء قبل استلامه من شركة التطوير، مما ساعد على رصد ومعالجة الأخطاء قبل الإطلاق.',
      quoteEn:
        'Nuzul Tech conducted the QA audit and user acceptance testing for our CRM platform prior to vendor handover, resolving defects before launch.',
      roleAr: 'المؤسس والمدير التنفيذي',
      roleEn: 'Founder & Chief Executive Officer',
      orgAr: 'منصة برمجيات سحابية للشركات — مصر',
      orgEn: 'B2B Cloud CRM Platform — Egypt',
    },
    {
      id: 'quote-3',
      quoteAr:
        'أعادت نزول تك تنفيذ الشبكة الداخلية للمستشفى مع عزل حركة الأجهزة الطبية وتحديث كاميرات المراقبة وبريد الشركة وفق جدول تنفيذ خارج ساعات الذروة.',
      quoteEn:
        'Nuzul Tech rebuilt our internal hospital network, isolating medical device traffic and upgrading our surveillance and company mail infrastructure during off-peak hours.',
      roleAr: 'المدير العام',
      roleEn: 'General Director',
      orgAr: 'مستشفى تخصصي خاص — القاهرة',
      orgEn: 'Private Specialized Hospital — Cairo',
    },
  ];

  return (
    <section
      data-testid="home-testimonials"
      className="section-spacing-home bg-page-band"
    >
      <div className="container-nuzul">
        <ScrollReveal className="max-w-2xl mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-main">
            {lang === 'ar'
              ? 'آراء العملاء'
              : 'Client Feedback'}
          </h2>
          <p className="text-muted mt-3 text-base leading-relaxed">
            {lang === 'ar'
              ? 'إفادات من مسؤولي التشغيل وتقنية المعلومات في المؤسسات المتعاقدة مع نزول تك.'
              : 'Direct feedback from operations and IT directors across organizations supported by Nuzul Tech.'}
          </p>
        </ScrollReveal>

        {/* 3 Editorial Pull-Quote Columns (No Italic, No 5-Star Rows, Not a Boxed Card Grid) */}
        <StaggerGroup className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <StaggerItem
              key={item.id}
              className="border-s-2 border-accent ps-6 py-2 flex flex-col justify-between"
            >
              <blockquote className="text-main text-base leading-relaxed mb-6">
                «{lang === 'ar' ? item.quoteAr : item.quoteEn}»
              </blockquote>

              <figcaption className="border-t border-token pt-4">
                <div className="font-bold text-main text-sm">
                  {lang === 'ar' ? item.roleAr : item.roleEn}
                </div>
                <div className="text-xs text-muted mt-0.5">
                  {lang === 'ar' ? item.orgAr : item.orgEn}
                </div>
              </figcaption>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
};
