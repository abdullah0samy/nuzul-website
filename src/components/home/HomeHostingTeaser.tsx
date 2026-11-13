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
          'خوادم KVM بعزل كامل: 4 إلى 12 نواة vCPU و8 إلى 48 GB ذاكرة ECC',
          'أقراص NVMe بمصفوفة RAID-10 مع 32 TB نقل بيانات شهرياً',
          'لقطات استرجاع Snapshots وحماية L3/L4 DDoS وإعداد مجاني',
        ]
      : [
          'Dedicated KVM isolation: 4 to 12 vCPU cores & 8 to 48 GB ECC RAM',
          'Enterprise RAID-10 NVMe arrays with 32 TB monthly outbound traffic',
          'Included recovery Snapshots, L3/L4 DDoS scrubbing & $0 setup fee',
        ];

  return (
    <section
      data-testid="home-hosting-teaser"
      className="section-spacing-home bg-hero-band text-hero border-y border-hero"
    >
      <div className="container-nuzul">
        <ScrollReveal className="rounded-2xl bg-hero-surface p-6 sm:p-10 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-hero">
                {lang === 'ar'
                  ? 'خوادم Cloud VPS واستضافة مدارة بمعايير عالمية'
                  : 'Predictable Cloud VPS & Managed Hosting'}
              </h2>
              <p className="text-hero-muted text-base leading-relaxed max-w-2xl">
                {lang === 'ar'
                  ? 'خوادم Linux وWindows جاهزة لتشغيل المتاجر، قواعد البيانات، وأنظمة ERP في القاهرة أو فرانكفورت بفاتورة محلية.'
                  : 'Linux KVM and licensed Windows RDP instances sized for production apps, SQL databases, and ERP suites in Cairo or Frankfurt.'}
              </p>

              <ul className="space-y-2.5 pt-2">
                {highlights.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2.5 text-sm text-hero">
                    <Check className="w-4 h-4 text-hero-accent shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-4 lg:border-s lg:border-hero lg:ps-8 flex flex-col justify-center space-y-4">
              <div>
                <span className="text-xs font-semibold text-hero-muted block mb-1">
                  {lang === 'ar'
                    ? 'Cloud VPS 10 (4 vCPU · 8 GB · 75 GB NVMe)'
                    : 'Cloud VPS 10 (4 vCPU · 8 GB · 75 GB NVMe)'}
                </span>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-3xl sm:text-4xl font-bold text-hero">
                    <bdi dir="ltr" className="ltr-num">
                      {formatPrice(320)}
                    </bdi>
                  </span>
                  <span className="text-sm text-hero-muted">
                    / {lang === 'ar' ? 'شهرياً' : 'mo'}
                  </span>
                </div>
                <p className="text-xs text-hero-muted mt-1">
                  {lang === 'ar' ? (
                    <>
                      وتبدأ استضافة المواقع من{' '}
                      <bdi dir="ltr" className="ltr-num font-semibold text-hero">
                        {formatPrice(195)}
                      </bdi>
                      /شهرياً
                    </>
                  ) : (
                    <>
                      Managed Web hosting starts from{' '}
                      <bdi dir="ltr" className="ltr-num font-semibold text-hero">
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
                  <span>{lang === 'ar' ? 'استعرض خطط الأسعار' : 'View Pricing Plans'}</span>
                  <ArrowIcon className="w-4 h-4 shrink-0" />
                </Link>
                <Link
                  to="/hosting"
                  className="btn-hero-secondary rounded-lg w-full py-3 text-sm hover-lift"
                >
                  {lang === 'ar' ? 'مقارنة مواصفات الخوادم' : 'Compare Server Specs'}
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
