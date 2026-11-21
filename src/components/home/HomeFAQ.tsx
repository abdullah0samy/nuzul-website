import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { ChevronDown } from 'lucide-react';
import { ScrollReveal } from '../common/MotionPrimitives';

export const HomeFAQ: React.FC = () => {
  const { lang } = useApp();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const homeFaqs = [
    {
      questionAr: 'هل بتوفروا عقود صيانة SLA وفواتير ضريبية في مصر؟',
      questionEn: 'Do you provide formal SLA contracts and tax invoices in Egypt?',
      answerAr:
        'أيوه. أي تعاقد شركات بيكون معاه ملحق SLA واضح بيحدد أوقات الاستجابة حسب أولوية المشكلة (P1–P4) وساعات الدعم، ومعاه فواتير ضريبية رسمية بالجنيه المصري.',
      answerEn:
        'Yes. Corporate agreements include an SLA annex defining P1–P4 response windows and coverage hours, with official EGP tax invoices.',
    },
    {
      questionAr: 'إزاي بتنقلوا السيرفرات أو تحدثوا الشبكة من غير ما الشغل يقف؟',
      questionEn: 'How do you migrate servers or upgrade networks without downtime?',
      answerAr:
        'بنجهّز السيرفر أو الشبكة الجديدة بالتوازي ونعمل مزامنة للبيانات الأول، وبعدها نعمل التحويل النهائي (Cutover) بعد مواعيد الشغل أو في الإجازة الأسبوعية مع خطة Rollback جاهزة.',
      answerEn:
        'We provision the new setup in parallel, pre-sync data, and perform the final cutover off-hours or on weekends with an immediate rollback plan.',
    },
    {
      questionAr: 'مين بيمتلك الكود وبيانات السيرفرات بعد التسليم؟',
      questionEn: 'Who owns the code, data, and server root access after handover?',
      answerAr:
        'شركتك بالكامل. بنسلّمك صلاحيات Root وAdmin، ومخطط الشبكة (As-Built)، وكل الأكواد وقواعد البيانات باسم شركتك بدون أي قيود.',
      answerEn:
        'You do. We hand over full Root/Admin credentials, As-Built network diagrams, source code, and databases under your company name with zero lock-in.',
    },
    {
      questionAr: 'إزاي بتحموا البيانات من أعطال الهاردوير أو الفدية (Ransomware)؟',
      questionEn: 'How are servers backed up against hardware failure or ransomware?',
      answerAr:
        'بنطبّق قاعدة 3-2-1 Backup مع نسخة خارجية معزولة غير قابلة للتعديل (Immutable)، وبنضبط مواعيد الـ Backup والاسترجاع حسب حجم الداتا وطبيعة شغلك.',
      answerEn:
        'We configure 3-2-1 backups with off-site immutable copies, tailoring backup frequency and recovery targets to your dataset size.',
    },
  ];

  return (
    <section
      data-testid="home-faq"
      className="section-spacing-home bg-page-band"
    >
      <div className="container-nuzul">
        <div className="glass-panel p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <ScrollReveal className="lg:col-span-5">
              <h2 className="text-2xl sm:text-3xl font-bold text-main">
                {lang === 'ar' ? 'أسئلة شائعة قبل التعاقد' : 'Common Questions'}
              </h2>
              <p className="text-muted mt-2.5 text-sm sm:text-base leading-relaxed">
                {lang === 'ar'
                  ? 'إجابات مباشرة عن عقود الـ SLA، ملكية الـ Root Access، الفواتير، والـ Backup.'
                  : 'Straight answers on SLAs, credential ownership, invoicing, and backup policy.'}
              </p>
            </ScrollReveal>

            <ScrollReveal className="lg:col-span-7 divide-y divide-[var(--border)]" delay={0.06}>
              {homeFaqs.map((faq, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div key={idx} className="py-4 first:pt-0 last:pb-0">
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? null : idx)}
                      className="w-full flex items-center justify-between gap-4 text-start min-h-[44px] focus:outline-none"
                      aria-expanded={isOpen}
                    >
                      <span className="text-base font-bold text-main">
                        {lang === 'ar' ? faq.questionAr : faq.questionEn}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-muted shrink-0 transition-transform duration-200 ${
                          isOpen ? 'rotate-180 text-accent' : ''
                        }`}
                        aria-hidden="true"
                      />
                    </button>

                    {isOpen && (
                      <div className="mt-2.5 text-muted text-sm sm:text-base leading-relaxed pe-6">
                        {lang === 'ar' ? faq.answerAr : faq.answerEn}
                      </div>
                    )}
                  </div>
                );
              })}
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};
