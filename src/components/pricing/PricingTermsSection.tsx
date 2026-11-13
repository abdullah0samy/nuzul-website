import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../../context/AppContext';
import {
  FileText,
  Receipt,
  ArrowUpRight,
  ShieldCheck,
  ArrowLeft,
  ArrowRight,
  ChevronDown,
} from 'lucide-react';

export const PricingTermsSection: React.FC = () => {
  const { lang } = useApp();
  const ArrowIcon = lang === 'ar' ? ArrowLeft : ArrowRight;
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>({});

  const toggleExpand = (id: string) => {
    setExpandedIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const cards = [
    {
      id: 'not-included',
      icon: FileText,
      titleAr: 'ما لا تشمله الباقات القياسية',
      titleEn: 'What Is Not Included',
      bodyAr:
        'الأسعار المعلنة لا تشمل ضريبة القيمة المضافة المصرية (14% VAT)، وتراخيص البرمجيات التجارية الاختيارية (مثل تراخيص Windows Server أو cPanel أو SQL Server المخصصة)، وأعمال الحفر المدني الخارجي في باقات الشبكات الميدانية.',
      bodyEn:
        'Listed prices exclude 14% Egyptian VAT, optional commercial third-party software licenses (such as Windows Server, cPanel, or SQL Server), and external civil trenching works for physical network packages.',
    },
    {
      id: 'billing-terms',
      icon: Receipt,
      titleAr: 'شروط الفوترة والدفع',
      titleEn: 'Billing & Invoicing Terms',
      bodyAr:
        'تُصدر الفواتير الضريبية الرسمية بالجنيه المصري (EGP) عبر التحويل البنكي لحسابات الشركات أو وسائل الدفع الإلكتروني المعتمدة. خطط الاستضافة السحابية تُفوتر شهرياً أو سنوياً مقدماً، وباقات التأسيس الميداني تُسدد على دفعات مرتبطة بمحاضر الاستلام الفعلي.',
      bodyEn:
        'Official tax invoices are issued in Egyptian Pounds (EGP) payable via corporate bank transfer or electronic payment gateways. Cloud plans bill monthly or annually in advance; on-premise projects bill against milestone handover certificates.',
    },
    {
      id: 'upgrade-path',
      icon: ArrowUpRight,
      titleAr: 'مسار الترقية والتوسع',
      titleEn: 'Upgrade Path',
      bodyAr:
        'يمكن ترقية موارد الخادم السحابي (أنوية المعالج vCPU، الذاكرة ECC RAM، ومساحة التخزين NVMe) إلى خطة أعلى في أي وقت مع احتساب فرق المدة المتبقية تلقائياً دون تغيير عناوين IPv4 المخصصة.',
      bodyEn:
        'Cloud VPS compute (vCPU, ECC RAM) and NVMe storage can be upgraded to a higher tier at any time with prorated billing and zero change to assigned IPv4 addresses.',
    },
    {
      id: 'sla-scope',
      icon: ShieldCheck,
      titleAr: 'تعريف التوافر الشهري واتفاقية SLA',
      titleEn: 'Monthly Availability & SLA Scope',
      bodyAr:
        'يُحتسب التوافر الشهري المستهدف (99.90% أي ما يعادل ≤ 43.8 دقيقة توقف شهرياً، و99.99% أي ≤ 4.4 دقيقة شهرياً) كنسبة زمن تشغيل الشبكة والطاقة والعتاد المضيف خلال الشهر الميلادي، باستثناء نوافذ الصيانة المجدولة المخطر بها قبل 48 ساعة. تُرفق جداول رصيد التعويض التعاقدي في العقود الرسمية للشركات.',
      bodyEn:
        'Target monthly availability (99.90% ≈ ≤ 43.8 min/month; 99.99% ≈ ≤ 4.4 min/month) measures host hardware, power, and network uptime per calendar month, excluding scheduled maintenance announced 48 hours in advance. Formal service-credit schedules are provided in commercial contracts.',
      hasSlaLink: true,
    },
  ];

  return (
    <section
      id="pricing-terms"
      data-testid="pricing-terms-section"
      className="section-spacing bg-page-band border-t border-token"
    >
      <div className="container-nuzul">
        <div className="max-w-3xl mb-10">
          <p className="text-sm font-semibold text-accent mb-2">
            {lang === 'ar'
              ? 'شفافية التعاقد ومستوى الخدمة'
              : 'Contract Transparency & Service Scope'}
          </p>
          <h2 className="text-2xl md:text-4xl font-bold text-main mb-3">
            {lang === 'ar'
              ? 'شروط التسعير، الفوترة، واتفاقية مستوى الخدمة (SLA)'
              : 'Pricing Terms, Billing & SLA Scope'}
          </h2>
          <p className="text-muted text-sm md:text-base leading-relaxed">
            {lang === 'ar'
              ? 'توضيح مباشر لما تشمله الأسعار المعلنة، آلية الفوترة والترقية، وكيفية احتساب نسب التوافر الشهري.'
              : 'Direct summary of what listed prices include, billing procedures, and monthly availability measurement.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {cards.map((card) => {
            const Icon = card.icon;
            const isExpanded = Boolean(expandedIds[card.id]);
            return (
              <div
                key={card.id}
                data-testid={`pricing-term-card-${card.id}`}
                className="clean-card clean-card-hover p-6 sm:p-7 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2.5 mb-2.5">
                    <Icon className="w-4 h-4 text-accent shrink-0" aria-hidden="true" />
                    <h3 className="text-lg font-bold text-main">
                      {lang === 'ar' ? card.titleAr : card.titleEn}
                    </h3>
                  </div>
                  <p
                    className={`text-sm text-muted leading-relaxed ${
                      isExpanded ? '' : 'line-clamp-2'
                    }`}
                  >
                    {lang === 'ar' ? card.bodyAr : card.bodyEn}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-token flex flex-wrap items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => toggleExpand(card.id)}
                    data-testid={`term-expand-${card.id}`}
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

                  {card.hasSlaLink && (
                    <Link
                      to="/contact"
                      data-testid="request-sla-link"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-main hover-text-accent min-h-[44px]"
                    >
                      <span>
                        {lang === 'ar' ? 'اطلب مسودة SLA' : 'Request SLA draft'}
                      </span>
                      <ArrowIcon className="w-3.5 h-3.5 shrink-0" />
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
