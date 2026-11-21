import React from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../../context/AppContext';
import { Check, ArrowLeft, ArrowRight } from 'lucide-react';
import { ScrollReveal } from '../common/MotionPrimitives';

export const HomeHostingTeaser: React.FC = () => {
  const { lang, formatPrice } = useApp();
  const ArrowIcon = lang === 'ar' ? ArrowLeft : ArrowRight;

  const highlights =
    lang === 'ar'
      ? [
          'موارد KVM مخصصة: من 4 إلى 12 vCPU و8 إلى 48 GB RAM',
          'تخزين NVMe على مصفوفة RAID-10 مع 32 TB ترافيك شهري',
          'لقطات استرجاع Snapshots وحماية DDoS بدون مصاريف إعداد',
        ]
      : [
          'Dedicated KVM isolation: 4 to 12 vCPU & 8 to 48 GB ECC RAM',
          'RAID-10 NVMe storage with 32 TB monthly outbound traffic',
          'Snapshots, L3/L4 DDoS filtering & zero setup fees',
        ];

  return (
    <section
      data-testid="home-hosting-teaser"
      className="section-spacing-home bg-page-band"
    >
      <div className="container-nuzul">
        <ScrollReveal className="glass-panel p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-main">
                {lang === 'ar'
                  ? 'خوادم Cloud VPS بمواصفات حقيقية وفاتورة محلية'
                  : 'Cloud VPS with Clear Specs & Local Billing'}
              </h2>
              <p className="text-muted text-sm sm:text-base leading-relaxed max-w-2xl">
                {lang === 'ar'
                  ? 'سيرفرات Linux وWindows جاهزة لتشغيل المتاجر، قواعد البيانات، وأنظمة ERP في القاهرة أو فرانكفورت، بفاتورة واضحة بالجنيه أو الدولار.'
                  : 'Linux KVM and licensed Windows RDP servers sized for production stores, SQL databases, and ERP in Cairo or Frankfurt.'}
              </p>

              <ul className="space-y-2.5 pt-2">
                {highlights.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2.5 text-sm text-main">
                    <Check className="w-4 h-4 text-accent shrink-0" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-4 lg:border-s lg:border-token lg:ps-8 flex flex-col justify-center space-y-4">
              <div>
                <span className="text-xs font-semibold text-muted block mb-1">
                  <bdi dir="ltr" className="ltr-num">
                    Cloud VPS 10 · 4 vCPU · 8 GB · 75 GB NVMe
                  </bdi>
                </span>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-3xl sm:text-4xl font-bold text-main">
                    <bdi dir="ltr" className="ltr-num">
                      {formatPrice(320)}
                    </bdi>
                  </span>
                  <span className="text-sm text-muted">
                    / {lang === 'ar' ? 'شهرياً' : 'mo'}
                  </span>
                </div>
                <p className="text-xs text-muted mt-1">
                  {lang === 'ar' ? (
                    <>
                      واستضافة المواقع تبدأ من{' '}
                      <bdi dir="ltr" className="ltr-num font-semibold text-main">
                        {formatPrice(195)}
                      </bdi>
                      /شهر
                    </>
                  ) : (
                    <>
                      Managed Web hosting starts at{' '}
                      <bdi dir="ltr" className="ltr-num font-semibold text-main">
                        {formatPrice(195)}
                      </bdi>
                      /mo
                    </>
                  )}
                </p>
              </div>

              <div className="flex flex-col gap-2.5">
                <Link
                  to="/pricing"
                  className="btn-primary w-full py-3 text-sm hover-lift"
                >
                  <span>{lang === 'ar' ? 'عرض كل الخطط والأسعار' : 'View All Plans'}</span>
                  <ArrowIcon className="w-4 h-4 shrink-0" aria-hidden="true" />
                </Link>
                <Link
                  to="/hosting"
                  className="btn-hero-secondary w-full py-3 text-sm hover-lift"
                >
                  {lang === 'ar' ? 'مقارنة مواصفات السيرفرات' : 'Compare Server Specs'}
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
