import React from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../../context/AppContext';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';
import { ScrollReveal, StaggerGroup, StaggerItem } from '../common/MotionPrimitives';

export const HomeServicePillars: React.FC = () => {
  const { lang } = useApp();
  const ArrowIcon = lang === 'ar' ? ArrowLeft : ArrowRight;

  // 4 Core Practices strictly adhering to NUZUL_COPY_STYLE_REFERENCE.md Glossary & Section 5 Structure
  // No numbering ('01.'), no 'إظهار المزيد', whole card is link, each Latin term written once per card.
  const pillars = [
    {
      id: 'infrastructure',
      titleAr: 'الشبكات والبنية التحتية',
      titleEn: 'Networks & Infrastructure',
      descAr:
        'تجهيز غرف الخوادم، وتمديد كابلات Cat6A والألياف، وشبكات Access Points، وربط الفروع عبر IPsec VPN.',
      descEn:
        'Server rooms, Cat6A and fiber cabling, enterprise Access Points, and multi-branch IPsec VPN.',
      itemsAr: [
        'Structured Cabling وتركيب Rack',
        'تركيب Firewall وتقسيم VLANs',
        'سنترال VoIP PBX للاتصالات',
      ],
      itemsEn: [
        'Structured Cabling & Rack setup',
        'Firewall configuration & VLAN segmentation',
        'VoIP PBX office telephony',
      ],
      href: '/services?cat=network',
    },
    {
      id: 'cloud',
      titleAr: 'الخوادم السحابية والاستضافة',
      titleEn: 'Cloud Servers & Hosting',
      descAr:
        'تشغيل خوادم مخصصة وسحابية بأقراص NVMe، مع إدارة النظام ونقل قواعد البيانات.',
      descEn:
        'Dedicated and cloud servers on NVMe storage, with system administration and database migration.',
      itemsAr: [
        'خوادم Cloud VPS بعزل KVM',
        'بريد الشركة بتوثيق SPF وDKIM وDMARC',
        'نسخ احتياطي دوري خارج الموقع',
      ],
      itemsEn: [
        'KVM Cloud VPS instances',
        'Company email with SPF, DKIM & DMARC',
        'Scheduled off-site backups',
      ],
      href: '/services?cat=cloud',
    },
    {
      id: 'security',
      titleAr: 'الأمن السيبراني',
      titleEn: 'Cybersecurity',
      descAr:
        'فحص الثغرات، وتأمين الخوادم ضد هجمات DDoS، ومراقبة سجلات الأمان SIEM.',
      descEn:
        'Vulnerability audits, server DDoS mitigation, and SIEM security log monitoring.',
      itemsAr: [
        'تقييم الثغرات واختبار الاختراق',
        'نسخ احتياطي منفصل عن الشبكة (3-2-1)',
        'رصد التهديدات والتعامل مع الحوادث',
      ],
      itemsEn: [
        'Vulnerability scanning & penetration testing',
        'Off-site 3-2-1 backup protection',
        'Threat monitoring & incident response',
      ],
      href: '/services?cat=security',
    },
    {
      id: 'software',
      titleAr: 'البرمجيات وأنظمة ERP',
      titleEn: 'Software & ERP',
      descAr:
        'تطوير أنظمة ERP للحسابات والمخازن، والربط بنظام الفاتورة الإلكترونية، وبناء المواقع وتطبيقات الموبايل.',
      descEn:
        'ERP systems for accounting and inventory, e-invoicing integration, and web/mobile applications.',
      itemsAr: [
        'نظام الحسابات والمخازن والمبيعات',
        'ربط مباشر بنظام الفاتورة الإلكترونية المصرية',
        'اختبار وقبول الأنظمة (QA / UAT)',
      ],
      itemsEn: [
        'Accounting, inventory & sales modules',
        'Egyptian Tax Authority e-invoicing integration',
        'Independent software testing (QA / UAT)',
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
            {/* Title strictly 'الخدمات' / 'Services' */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-main">
              {lang === 'ar' ? 'الخدمات' : 'Services'}
            </h2>
            <p className="text-muted mt-3 text-base leading-relaxed">
              {lang === 'ar'
                ? 'نصمم وننفذ الشبكات وغرف الخوادم، ونشغل الخوادم السحابية، ونؤمن الأنظمة، ونطور برامج الأعمال بعقود SLA.'
                : 'Networks and server rooms, cloud servers, cybersecurity, and business software under formal SLA contracts.'}
            </p>
          </div>

          <Link
            to="/services"
            data-testid="home-all-services-link"
            className="inline-flex items-center gap-2 min-h-[44px] text-sm font-semibold text-accent hover:underline shrink-0 whitespace-nowrap"
          >
            <span>{lang === 'ar' ? 'عرض جميع الخدمات' : 'View all services'}</span>
            <ArrowIcon className="w-4 h-4 shrink-0" />
          </Link>
        </ScrollReveal>

        {/* 4 Clean Cards: Whole card is a single link, NO numbering, NO 'إظهار المزيد' */}
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
                  className="clean-card clean-card-hover p-6 sm:p-7 flex flex-col justify-between h-full group focus:outline-none focus:ring-2 focus:ring-[var(--focus)] rounded-2xl block"
                  aria-label={`${lang === 'ar' ? pillar.titleAr : pillar.titleEn} — ${lang === 'ar' ? 'التفاصيل' : 'Details'}`}
                >
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-main mb-2.5 group-hover:text-accent transition-colors">
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
                    <span>{lang === 'ar' ? 'التفاصيل' : 'Details'}</span>
                    <ArrowIcon className="w-4 h-4 shrink-0 transform group-hover:translate-x-[-4px] transition-transform rtl:group-hover:translate-x-[-4px] ltr:group-hover:translate-x-[4px]" />
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
