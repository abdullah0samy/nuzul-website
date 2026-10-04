import React from 'react';
import { Mail, Phone, MapPin, ShieldCheck, Activity, PhoneCall, ExternalLink, Linkedin, Globe } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { NUZUL_CONTACT } from '../../data/nuzulData';
import { PaymentBadges } from '../common/PaymentBadges';
import { NuzulLogo } from '../common/NuzulLogo';

export const Footer: React.FC = () => {
  const { locale, setActivePaymentModal, theme } = useApp();
  const isAr = locale === 'ar';
  const isDark = theme === 'dark';

  const footerColumns = [
    {
      titleAr: 'تطوير البرمجيات والويب',
      titleEn: 'Software & Web',
      links: [
        { labelAr: 'تصميم وتطوير المواقع', labelEn: 'Website Design & Development', href: '#services' },
        { labelAr: 'تطبيقات الجوال', labelEn: 'Mobile Applications', href: '#services' },
        { labelAr: 'تصميم المتاجر الإلكترونية', labelEn: 'E-Commerce Stores', href: '#services' },
        { labelAr: 'تصميم واجهة وتجربة المستخدم', labelEn: 'UI/UX Design', href: '#services' },
        { labelAr: 'خدمات ERP وCRM للمؤسسات', labelEn: 'Enterprise ERP & CRM Systems', href: '#services' },
        { labelAr: 'ديمو نظام المستشفيات (HIS Demo)', labelEn: 'Hospital HIS Live Demo', href: '#live-demos' },
        { labelAr: 'ديمو منصة العيادات (Clinic Demo)', labelEn: 'ClinicCore™ SaaS Demo', href: '#live-demos' },
      ],
    },
    {
      titleAr: 'السيرفرات والاستضافة السحابية',
      titleEn: 'Servers & Cloud Hosting',
      links: [
        { labelAr: 'سيرفرات Windows RDP (تبدأ 1000 ج.م)', labelEn: 'Windows VPS (from 1,000 EGP)', href: '#pricing' },
        { labelAr: 'سيرفرات VPS مُدارة بالكامل', labelEn: 'Fully Managed VPS', href: '#pricing' },
        { labelAr: 'سيرفرات VPS غير مُدارة (Root)', labelEn: 'Unmanaged Cloud VPS', href: '#pricing' },
        { labelAr: 'السيرفرات الكاملة (Bare-Metal)', labelEn: 'Dedicated Bare-Metal Servers', href: '#pricing' },
        { labelAr: 'خدمة الإيملات الرسمية للشركات', labelEn: 'Corporate Business Email', href: '#services' },
        { labelAr: 'الاستضافة المشتركة للمواقع', labelEn: 'Business Shared Hosting', href: '#pricing' },
        { labelAr: 'فحص وتسجيل النطاقات (.eg)', labelEn: 'Domain Registration (.eg)', href: '#domain-search' },
      ],
    },
    {
      titleAr: 'الشبكات والاتصالات والأمن',
      titleEn: 'Networking, VoIP & Security',
      links: [
        { labelAr: 'أنظمة السنترال VOIP والاتصالات', labelEn: 'Enterprise VoIP Telephony', href: '#services' },
        { labelAr: 'أمن الشبكات وجدران الحماية Firewall', labelEn: 'Network Security & Firewalls', href: '#services' },
        { labelAr: 'منصة مراقبة الأحداث الأمنية SIEM', labelEn: 'SIEM Solution Platform', href: '#services' },
        { labelAr: 'حلول النسخ الاحتياطي الذكية Backup', labelEn: 'Enterprise Backup Solutions', href: '#services' },
        { labelAr: 'باقات تأسيس المؤسسات', labelEn: 'Turnkey Enterprise Packages', href: '#packages' },
        { labelAr: 'طلب استشارة هندسية وعرض سعر', labelEn: 'Request Consultation', href: '#contact' },
      ],
    },
    {
      titleAr: 'دراسات الجدوى والحالة',
      titleEn: 'Strategic Case Studies',
      links: [
        { labelAr: 'دراسة حالة مركز Cairo Cure للأورام', labelEn: 'Cairo Cure Oncology Case Study', href: '#projects' },
        { labelAr: 'مشاريع مستشفى ABCH الأربعة', labelEn: 'ABCH Hospital Turnkey IT', href: '#projects' },
        { labelAr: 'مستشفى تراست التخصصي (Trust Hospital)', labelEn: 'Trust Hospital Security & CCTV', href: '#projects' },
        { labelAr: 'مكتب محمد إبراهيم للخدمات المالية', labelEn: 'Mohamed Ibrahiem Office for Finance', href: '#projects' },
        { labelAr: 'نظام مستشفى لبنان الشامل ERP', labelEn: 'Lebanon Hospital Comprehensive ERP', href: '#projects' },
        { labelAr: 'مكتب عامر للمحاسبة الضريبية (amer-acc)', labelEn: 'Amer Tax & Accounting (amer-acc)', href: '#projects' },
        { labelAr: 'هجرة بريد مجموعة الصفوة الطبية', labelEn: 'Al-Safwa 250+ Mail Migration', href: '#projects' },
        { labelAr: 'حماية نطاق شركة الجمهورية للوجستيات', labelEn: 'El-Gomhouria Domain & Mail Security', href: '#projects' },
        { labelAr: 'نظام أسطول شركة ايفرست للنقل', labelEn: 'Everest Transport Fleet IoT', href: '#projects' },
      ],
    },
  ];

  return (
    <footer
      id="footer"
      className={`relative border-t px-5 pt-20 pb-12 transition-colors ${
        isDark
          ? 'bg-[#070c14] border-white/10 text-slate-300'
          : 'bg-slate-100 border-slate-200 text-slate-700'
      }`}
    >
      <div className="mx-auto max-w-7xl">
        {/* Main Grid */}
        <div className="grid gap-12 border-b border-current/10 pb-14 lg:grid-cols-[1.25fr_2.75fr]">
          {/* Brand info */}
          <div className="max-w-md">
            <a href={`#${locale}`} className="inline-flex items-center gap-3">
              <NuzulLogo size="lg" />
            </a>

            <div className="mt-3 text-xs font-mono uppercase tracking-[0.16em] text-emerald-600 dark:text-emerald-400 font-bold">
              {isAr ? 'بنيتك التحتية، ضيفنا' : 'Enterprise Infrastructure in Trusted Hands'}
            </div>

            <p
              className={`mt-4 text-xs leading-relaxed ${
                isDark ? 'text-slate-400' : 'text-slate-600'
              }`}
            >
              {isAr
                ? 'نُزول تِك (Nuzul Tech) هي الشريك التقني المتكامل للمؤسسات والمستشفيات والشركات في مصر. نقدم حلولاً معتمدة من الكابلات المنظمة وتجهيز المقرات وحتى السيرفرات السحابية والأنظمة البرمجية المتطورة.'
                : 'Nuzul Tech is your full-stack enterprise technology partner in Egypt. From turnkey structured networking and firewalls to cloud VPS hosting and hospital ERP systems.'}
            </p>

            {/* Direct Contact info */}
            <div className="mt-6 space-y-2.5 text-xs">
              <div className="flex flex-col gap-1.5 font-mono">
                <a
                  href={`tel:${NUZUL_CONTACT.rawPhone1}`}
                  className="flex items-center gap-2.5 hover:text-emerald-500 transition-colors"
                  dir="ltr"
                >
                  <Phone className="h-4 w-4 shrink-0 text-emerald-500" />
                  <span>{NUZUL_CONTACT.phone1}</span>
                </a>
                <a
                  href={`tel:${NUZUL_CONTACT.rawPhone2}`}
                  className="flex items-center gap-2.5 hover:text-emerald-500 transition-colors"
                  dir="ltr"
                >
                  <Phone className="h-4 w-4 shrink-0 text-emerald-500" />
                  <span>{NUZUL_CONTACT.phone2}</span>
                </a>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={NUZUL_CONTACT.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-emerald-500 transition-colors font-medium"
                >
                  <PhoneCall className="h-4 w-4 shrink-0 text-emerald-500" />
                  <span>{isAr ? 'واتساب ١' : 'WhatsApp 1'}</span>
                </a>
                <span className="text-slate-500">·</span>
                <a
                  href={NUZUL_CONTACT.whatsappUrl2}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-emerald-500 transition-colors font-medium"
                >
                  <PhoneCall className="h-4 w-4 shrink-0 text-emerald-500" />
                  <span>{isAr ? 'واتساب ٢' : 'WhatsApp 2'}</span>
                </a>
              </div>

              {/* Prominent LinkedIn Connection in Footer */}
              <a
                href={NUZUL_CONTACT.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-[#0a66c2]/15 border border-[#0a66c2]/40 px-3 py-1.5 text-xs font-bold text-[#0a66c2] hover:bg-[#0a66c2] hover:text-white transition-all shadow-sm cursor-pointer"
              >
                <Linkedin className="h-4 w-4 shrink-0" />
                <span>LinkedIn / Nuzul Tech Official Company</span>
              </a>

              <a
                href={`mailto:${NUZUL_CONTACT.email}`}
                className="flex items-center gap-2.5 hover:text-emerald-500 transition-colors"
              >
                <Mail className="h-4 w-4 shrink-0 text-emerald-500" />
                <span>{NUZUL_CONTACT.email}</span>
              </a>

              <div className="flex items-start gap-2.5 text-slate-400">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                <span>{isAr ? NUZUL_CONTACT.locationAr : NUZUL_CONTACT.locationEn}</span>
              </div>
            </div>

            {/* Interactive Payment Methods Section */}
            <div className="mt-6 pt-5 border-t border-current/10">
              <div className="text-[11px] font-mono uppercase text-slate-400 mb-2">
                {isAr ? 'طرق الدفع الفورية (اضغط للتفاصيل والدفع):' : 'Instant Payment Methods (Click to Pay):'}
              </div>
              <PaymentBadges />
            </div>
          </div>

          {/* Links 4 columns */}
          <div className="grid gap-8 grid-cols-2 md:grid-cols-4">
            {footerColumns.map((col, idx) => (
              <div key={idx} className="space-y-3">
                <h4 className="text-xs font-bold font-mono uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                  {isAr ? col.titleAr : col.titleEn}
                </h4>
                <ul className="space-y-2 text-xs">
                  {col.links.map((link, lIdx) => (
                    <li key={lIdx}>
                      <a
                        href={link.href}
                        className="text-slate-400 hover:text-emerald-500 transition-colors block leading-relaxed"
                      >
                        {isAr ? link.labelAr : link.labelEn}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 text-xs text-slate-400 sm:flex-row">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} Nuzul Tech.</span>
            <span>{isAr ? 'جميع الحقوق محفوظة.' : 'All rights reserved.'}</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-mono text-[11px]">
              <span className="status-dot" />
              <span>{isAr ? 'جميع الأنظمة تعمل بكفاءة 99.98%' : 'All Systems Operational 99.98%'}</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
