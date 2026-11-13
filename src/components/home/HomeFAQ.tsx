import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { ChevronDown } from 'lucide-react';
import { ScrollReveal } from '../common/MotionPrimitives';

export const HomeFAQ: React.FC = () => {
  const { lang } = useApp();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // Strictly 4 executive FAQ items per Phase 4 Definition of Done (<= 3-4 visible items)
  const homeFaqs = [
    {
      questionAr: 'هل تقدمون عقود مستوى خدمة (SLA) رسمية وفواتير ضريبية في مصر؟',
      questionEn: 'Do you provide formal SLA contracts and official tax invoices in Egypt?',
      answerAr:
        'نعم. تشمل تعاقدات الشركات وثيقة مستوى خدمة SLA تحدد أوقات الاستجابة حسب أولوية البلاغ (P1–P4) ونطاق التغطية، مع إصدار فواتير ضريبية رسمية بالجنيه المصري.',
      answerEn:
        'Yes. Enterprise contracts include a documented SLA annex defining P1–P4 response targets and coverage scope, alongside official EGP tax invoices.',
    },
    {
      questionAr: 'كيف يتم نقل الخوادم أو تحديث الشبكات دون تعطيل العمل اليومي؟',
      questionEn: 'How do you migrate servers or upgrade networks without disrupting daily work?',
      answerAr:
        'ننفذ عمليات النقل على مراحل مجدولة، حيث ننشئ بيئة موازية ونزامن البيانات مسبقاً، ثم نجري التحويل النهائي (Cutover) خارج أوقات الذروة مع خطة تراجع (Rollback Plan) جاهزة.',
      answerEn:
        'We execute migrations in scheduled phases: provisioning a parallel environment, pre-syncing data, and performing final cutover during off-peak windows with an immediate rollback plan.',
    },
    {
      questionAr: 'من يمتلك الكود البرمجي والبيانات وصلاحيات الخوادم بعد التسليم؟',
      questionEn: 'Who owns the source code, data, and server root credentials upon delivery?',
      answerAr:
        'العميل يمتلك كامل بياناته وقواعد بياناته والأكواد المخصصة له، كما نسلم وثيقة تشغيل هندسية (Runbook) تتضمن مخططات الشبكة وبيانات صلاحيات الإدارة (Root / Admin) وفق بنود العقد.',
      answerEn:
        'The client retains full ownership of their data, databases, and custom code. We hand over an operational Runbook containing network diagrams and administrative credentials per contract terms.',
    },
    {
      questionAr: 'ما هي سياسة النسخ الاحتياطي واستعادة الكوارث للخوادم؟',
      questionEn: 'What is your backup and disaster recovery architecture for servers?',
      answerAr:
        'نطبق خطة النسخ الاحتياطي 3-2-1 مع نسخ احتياطي منفصل عن الشبكة (Immutable Backups) خارج الموقع، ونحدد هدف نقطة الاستعادة (RPO) وزمن الاستعادة (RTO) في العقد حسب حجم البيانات.',
      answerEn:
        'We implement a 3-2-1 backup architecture with off-site immutable backups, defining target RPO and RTO metrics in your contract based on dataset volume.',
    },
  ];

  return (
    <section
      data-testid="home-faq"
      className="section-spacing-home bg-surface-band border-t border-token"
    >
      <div className="container-nuzul">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          <ScrollReveal className="lg:col-span-5">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-main">
              {lang === 'ar'
                ? 'الأسئلة الشائعة حول التعاقد والتشغيل'
                : 'Frequently Asked Questions'}
            </h2>
            <p className="text-muted mt-3 text-base leading-relaxed">
              {lang === 'ar'
                ? 'إجابات عن اتفاقيات مستوى الخدمة SLA، الفوترة الضريبية، ملكية البيانات، وخطط النسخ الاحتياطي.'
                : 'Direct answers on Service Level Agreements (SLAs), tax invoicing, data ownership, and backup architecture.'}
            </p>
          </ScrollReveal>

          <ScrollReveal className="lg:col-span-7 divide-y border-t border-b border-token" delay={0.06}>
            {homeFaqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={idx} className="py-4 border-token">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between gap-4 text-start min-h-[44px] focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base sm:text-lg font-bold text-main">
                      {lang === 'ar' ? faq.questionAr : faq.questionEn}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-muted shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-accent' : ''
                      }`}
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
    </section>
  );
};
