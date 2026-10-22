import React from 'react';
import { PhoneCall, ShieldCheck, ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { NUZUL_CONTACT } from '../../data/nuzulData';
import { PaymentBadges } from '../common/PaymentBadges';
import { RevealOnScroll } from '../common/RevealOnScroll';

export const CtaStepsSection: React.FC = () => {
  const { locale, setIsClientAreaOpen, theme } = useApp();
  const isAr = locale === 'ar';
  const isDark = theme === 'dark';

  const steps = [
    {
      num: '01',
      titleAr: 'المعاينة ودراسة المتطلبات الهندسية',
      titleEn: 'Site Survey & Architecture Audit',
      descAr: 'فريقنا الهندسي يزور المقر أو يدرس احتياجات مؤسستك لتحديد متطلبات الشبكة والسيرفرات بدقة.',
      descEn: 'Our engineers assess your facility or audit your system requirements to design the optimal setup.',
    },
    {
      num: '02',
      titleAr: 'التوريد، التركيب، والتهيئة السحابية',
      titleEn: 'Turnkey Hardware & Cloud Deployment',
      descAr: 'تنفيذ كامل لشبكة الكابلات، تركيب السيرفرات، ضبط الـ Firewalls، ورفع الأنظمة السحابية والبريد.',
      descEn: 'Structured cabling, server installation, firewall configuration, and cloud software provisioning.',
    },
    {
      num: '03',
      titleAr: 'التشغيل والدعم الهندسي المستمر 24/7',
      titleEn: 'Go-Live & 24/7 Engineering Support',
      descAr: 'تسليم موثق بالكامل مع تدريب فريقك، ومراقبة لحظية واستجابة فورية لأي طلب طوال فترة العقد.',
      descEn: 'Full handover, team onboarding, and continuous 24/7 SLA monitoring by dedicated Cairo engineers.',
    },
  ];

  return (
    <section
      className={`relative scroll-mt-24 px-5 py-24 sm:px-6 lg:px-8 border-t transition-colors ${
        isDark
          ? 'bg-gradient-to-b from-[#0a111c] to-[#070c14] border-white/10 text-white'
          : 'bg-gradient-to-b from-white to-slate-50 border-slate-200 text-slate-900'
      }`}
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
          {/* Left Text & Call to Action */}
          <RevealOnScroll direction={isAr ? 'right' : 'left'} threshold={0.2}>
            <div className="max-w-xl text-start">
              <div className="eyebrow-mono text-emerald-600 dark:text-emerald-400">
                <ShieldCheck className="h-4 w-4" />
                <span>{isAr ? 'ابدأ مع نُزول تِك' : 'GET STARTED WITH NUZUL TECH'}</span>
              </div>

              <h2 className="mt-4 text-3xl font-black tracking-tight leading-tight sm:text-4xl">
                {isAr
                  ? 'هنبنيلك بنيتك التحتية صح من أول مرة'
                  : "Let's Build Your Infrastructure the Right Way"}
              </h2>

              <p
                className={`mt-4 text-base leading-relaxed ${
                  isDark ? 'text-slate-300' : 'text-slate-600'
                }`}
              >
                {isAr
                  ? 'من إعداد الشبكات والكاميرات وتجهيز المقرات وحتى السيرفرات السحابية والبرمجيات المخصصة — نتولى كل شيء باحترافية وتوثيق هندسي كامل.'
                  : 'From network design and structured cabling to cloud VPS and bespoke hospital software — we handle your entire IT foundation.'}
              </p>

              {/* CTAs */}
              <div className="mt-8 flex flex-col gap-3.5 sm:flex-row">
                <a
                  href={NUZUL_CONTACT.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-md flex items-center justify-center gap-2 group cursor-pointer shadow-lg shadow-emerald-500/20"
                >
                  <PhoneCall className="h-4 w-4" />
                  <span>{isAr ? 'تواصل عبر واتساب' : 'Chat via WhatsApp'}</span>
                  {isAr ? <ArrowLeft className="h-4 w-4" /> : <ArrowRight className="h-4 w-4" />}
                </a>

                <a
                  href="#contact"
                  className="btn btn-secondary btn-md cursor-pointer"
                >
                  <span>{isAr ? 'احجز استشارة بالمقر' : 'Book Consultation'}</span>
                </a>
              </div>

              {/* Clickable Payment Badges */}
              <div className="mt-8 pt-6 border-t border-current/10">
                <div className="text-[11px] font-mono text-slate-400 mb-2 uppercase">
                  {isAr ? 'الدفع اللحظي عبر إنستاباي وفودافون كاش:' : 'Direct Instant Payments:'}
                </div>
                <PaymentBadges />
              </div>
            </div>
          </RevealOnScroll>

          {/* Right 3 Steps Panel */}
          <RevealOnScroll direction={isAr ? 'left' : 'right'} threshold={0.2}>
            <div
              className={`rounded-3xl border p-6 shadow-2xl backdrop-blur-xl sm:p-7 transition-colors ${
                isDark ? 'border-white/10 bg-[#0d1524]' : 'border-slate-200 bg-white shadow-xl'
              }`}
            >
              <div className="eyebrow-mono text-emerald-600 dark:text-emerald-400">
                <span>{isAr ? '٣ خطوات رئيسية' : '3 SIMPLE STEPS'}</span>
              </div>
              <h3 className="mt-2 text-2xl font-black">
                {isAr ? 'من التخطيط حتى التشغيل الكامل' : 'From Planning to Full Deployment'}
              </h3>

              <div className="mt-6 space-y-3.5">
                {steps.map((step) => {
                  const title = isAr ? step.titleAr : step.titleEn;
                  const desc = isAr ? step.descAr : step.descEn;

                  return (
                    <div
                      key={step.num}
                      className={`flex items-start gap-4 rounded-2xl border p-4 transition-colors ${
                        isDark
                          ? 'border-white/[0.05] bg-[#070c14]/80 hover:border-emerald-500/30'
                          : 'border-slate-200 bg-slate-50 hover:border-emerald-500'
                      }`}
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-emerald-500/30 bg-emerald-500/10 font-mono text-sm font-black text-emerald-600 dark:text-emerald-400">
                        {step.num}
                      </div>
                      <div>
                        <div className="text-sm font-bold">{title}</div>
                        <p
                          className={`mt-1 text-xs leading-relaxed ${
                            isDark ? 'text-slate-300' : 'text-slate-600'
                          }`}
                        >
                          {desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-2 pt-4 border-t border-current/10 text-xs">
                <span className="text-slate-400 font-mono">
                  {isAr ? 'عقود رسمية وفواتير ضريبية إلكترونية' : 'Official Enterprise ETA Invoicing'}
                </span>
                <span className="text-emerald-600 dark:text-emerald-400 font-bold font-mono">
                  {isAr ? 'ضمان شامل على الأعمال' : 'Comprehensive Warranty'}
                </span>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};
