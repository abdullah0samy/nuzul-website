import React from 'react';
import { useApp } from '../../context/AppContext';
import { ScrollReveal, StaggerGroup, StaggerItem } from '../common/MotionPrimitives';

export const HomeTestimonials: React.FC = () => {
  const { lang } = useApp();

  const testimonials = [
    {
      id: 'quote-1',
      quoteAr:
        'النظام نظّم حركة المرضى في العيادة وربط الملف الطبي مباشرة بغرفة الكشف والأشعة، ووفّر علينا وقتاً كبيراً في المتابعة اليومية.',
      quoteEn:
        'The clinic and queue system organized patient flow and linked medical records directly with exam rooms without complicating staff workflows.',
      roleAr: 'استشاري جراحة العظام والمفاصل',
      roleEn: 'Consultant Orthopedic Surgeon',
      orgAr: 'عيادة تخصصية · القاهرة',
      orgEn: 'Specialized Medical Clinic · Cairo',
    },
    {
      id: 'quote-2',
      quoteAr:
        'استعنا بفريق نزول تك لمراجعة واختبار نظام الـ CRM قبل استلامه من شركة التطوير، وفعلاً كشفوا ملاحظات فنية مهمة اتعدّلت قبل التشغيل.',
      quoteEn:
        'Nuzul Tech audited and acceptance-tested our CRM platform before vendor sign-off, catching real defects before launch.',
      roleAr: 'المؤسس والمدير التنفيذي',
      roleEn: 'Founder & CEO',
      orgAr: 'شركة برمجيات سحابية · مصر',
      orgEn: 'B2B Cloud CRM Platform · Egypt',
    },
    {
      id: 'quote-3',
      quoteAr:
        'أعادوا تقسيم الشبكة الداخلية للمستشفى وفصلوا الأجهزة الطبية عن باقي الشبكة وركّبوا الكاميرات الجديدة خارج أوقات العمل بدون تعطيل العيادات.',
      quoteEn:
        'They rebuilt our hospital network, isolated medical devices on dedicated VLANs, and deployed the new CCTV system off-hours without disrupting clinics.',
      roleAr: 'المدير العام',
      roleEn: 'General Director',
      orgAr: 'مستشفى تخصصي خاص · القاهرة',
      orgEn: 'Private Specialized Hospital · Cairo',
    },
  ];

  return (
    <section
      data-testid="home-testimonials"
      className="section-spacing-home bg-surface-band border-t border-token"
    >
      <div className="container-nuzul">
        <ScrollReveal className="max-w-2xl mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-main">
            {lang === 'ar' ? 'آراء عملائنا' : 'What Clients Say'}
          </h2>
          <p className="text-muted mt-2.5 text-base leading-relaxed">
            {lang === 'ar'
              ? 'تجارب مديري التشغيل والـ IT في شركات وعيادات نفّذنا لها مشاريع شبكات وأنظمة.'
              : 'Feedback from operations and IT leads on network and software projects we delivered.'}
          </p>
        </ScrollReveal>

        <StaggerGroup className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item) => (
            <StaggerItem
              key={item.id}
              className="clean-card p-6 sm:p-7 flex flex-col justify-between gap-6"
            >
              <blockquote className="text-main text-sm sm:text-base leading-relaxed">
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
