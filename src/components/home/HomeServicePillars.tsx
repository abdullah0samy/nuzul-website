import React from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../../context/AppContext';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';
import { ScrollReveal, StaggerGroup, StaggerItem } from '../common/MotionPrimitives';

export const HomeServicePillars: React.FC = () => {
  const { lang } = useApp();
  const ArrowIcon = lang === 'ar' ? ArrowLeft : ArrowRight;

  const pillars = [
    {
      id: 'infrastructure',
      titleAr: 'الشبكات وغرف الخوادم',
      titleEn: 'Networks & Server Rooms',
      descAr:
        'تمديد كابلات Cat6A وفايبر، تجميع الراكات، توزيع Access Points، وربط الفروع عبر IPsec VPN.',
      descEn:
        'Cat6A and fiber cabling, rack buildouts, office Wi-Fi coverage, and site-to-site IPsec VPN.',
      itemsAr: [
        'تجهيز غرف الخوادم وتنظيم الكابلات (Rack & Patch Panels)',
        'تركيب أجهزة Fortinet Firewall وتقسيم VLANs',
        'سنترال داخلي VoIP PBX لربط المكاتب والفروع',
      ],
      itemsEn: [
        'Structured cabling, racks & patch panel termination',
        'Fortinet firewall setup & 802.1Q VLAN isolation',
        'Multi-branch VoIP PBX office telephony',
      ],
      href: '/services?cat=infrastructure',
    },
    {
      id: 'cloud',
      titleAr: 'السيرفرات والاستضافة',
      titleEn: 'Cloud Servers & Hosting',
      descAr:
        'خوادم Cloud VPS بعزل KVM وأقراص NVMe، بريد شركات رسمي، ونقل قواعد البيانات بدون توقف.',
      descEn:
        'Dedicated KVM Cloud VPS on NVMe arrays, authenticated business email, and planned database migrations.',
      itemsAr: [
        'خوادم Cloud VPS بصلاحيات Root وفاتورة بالجنيه أو الدولار',
        'بريد رسمي للشركة مضبوط بـ SPF وDKIM وDMARC',
        'نسخ احتياطي يومي ومجدول خارج السيرفر الأساسي',
      ],
      itemsEn: [
        'KVM Cloud VPS with full root access & EGP/USD billing',
        'Corporate email secured with SPF, DKIM & DMARC',
        'Automated off-server daily backups & snapshots',
      ],
      href: '/services?cat=cloud',
    },
    {
      id: 'security',
      titleAr: 'الأمن السيبراني والنسخ الاحتياطي',
      titleEn: 'Security & Backups',
      descAr:
        'فحص الثغرات، حماية الخوادم ضد DDoS، وبناء نسخ احتياطي معزول 3-2-1 يحمي بياناتك من الفدية.',
      descEn:
        'Vulnerability checks, server DDoS filtering, and isolated 3-2-1 backups to protect against ransomware.',
      itemsAr: [
        'مراجعة إعدادات الشبكة وفحص الثغرات واختبار الاختراق',
        'نسخ احتياطي منفصل غير قابل للتعديل (Immutable 3-2-1)',
        'متابعة سجلات الأمان والتنبيه الفوري عند أي محاولة اختراق',
      ],
      itemsEn: [
        'Network audits, vulnerability scans & penetration testing',
        'Immutable off-site 3-2-1 backup architecture',
        'SIEM log monitoring & incident alerting',
      ],
      href: '/services?cat=security',
    },
    {
      id: 'software',
      titleAr: 'أنظمة ERP والبرمجيات',
      titleEn: 'ERP & Business Software',
      descAr:
        'أنظمة حسابات ومخازن مربوطة بالفاتورة الإلكترونية المصرية، ومواقع وتطبيقات عملية لإدارة شغلك.',
      descEn:
        'Accounting and inventory ERP linked with Egyptian ETA e-invoicing, plus custom web and mobile apps.',
      itemsAr: [
        'إدارة الحسابات والمخازن والمبيعات وشؤون الموظفين',
        'ربط مباشر بمنظومة الفاتورة الإلكترونية (مصلحة الضرائب)',
        'فحص واختبار البرمجيات قبل الاستلام (QA / UAT)',
      ],
      itemsEn: [
        'General ledger, inventory, sales & payroll modules',
        'Direct Egyptian Tax Authority (ETA) e-invoicing link',
        'Independent software QA & acceptance testing (UAT)',
      ],
      href: '/services?cat=software',
    },
  ];

  return (
    <section
      data-testid="home-pillars-section"
      className="section-spacing-home bg-page-band"
    >
      <div className="container-nuzul">
        <ScrollReveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-main">
              {lang === 'ar' ? 'ماذا ننفّذ لك؟' : 'What We Build & Manage'}
            </h2>
            <p className="text-muted mt-2.5 text-base leading-relaxed">
              {lang === 'ar'
                ? 'أربع خدمات أساسية تغطي البنية التحتية لشركتك من كابل الشبكة وحتى السيرفر والبرنامج.'
                : 'Four practical practices covering your infrastructure from office cabling to servers and business software.'}
            </p>
          </div>

          <Link
            to="/services"
            data-testid="home-all-services-link"
            className="inline-flex items-center gap-2 min-h-[44px] text-sm font-semibold text-accent hover:underline shrink-0 whitespace-nowrap"
          >
            <span>{lang === 'ar' ? 'تصفح كل الخدمات' : 'View all services'}</span>
            <ArrowIcon className="w-4 h-4 shrink-0" aria-hidden="true" />
          </Link>
        </ScrollReveal>

        <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillars.map((pillar) => {
            const items = lang === 'ar' ? pillar.itemsAr : pillar.itemsEn;
            return (
              <StaggerItem
                key={pillar.id}
                testId={`home-pillar-${pillar.id}`}
                className="h-full"
              >
                <Link
                  to={pillar.href}
                  data-testid={`pillar-card-link-${pillar.id}`}
                  className="clean-card clean-card-hover p-6 sm:p-7 flex flex-col justify-between h-full group rounded-2xl block"
                  aria-label={`${lang === 'ar' ? pillar.titleAr : pillar.titleEn} — ${lang === 'ar' ? 'التفاصيل' : 'Details'}`}
                >
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-main mb-2 group-hover:text-accent transition-colors">
                      {lang === 'ar' ? pillar.titleAr : pillar.titleEn}
                    </h3>

                    <p className="text-muted text-sm leading-relaxed mb-5">
                      {lang === 'ar' ? pillar.descAr : pillar.descEn}
                    </p>

                    <ul className="space-y-2 mb-6 border-t border-token pt-4">
                      {items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-main">
                          <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" aria-hidden="true" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-3 border-t border-token flex items-center justify-between text-xs font-semibold text-accent">
                    <span>{lang === 'ar' ? 'عرض التفاصيل' : 'Explore service'}</span>
                    <ArrowIcon className="w-4 h-4 shrink-0 transform transition-transform rtl:group-hover:-translate-x-1 ltr:group-hover:translate-x-1" />
                  </div>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
};
