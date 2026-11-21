import React from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../../context/AppContext';
import { Mail, Phone, MapPin } from 'lucide-react';
import { NuzulLogo } from '../common/NuzulLogo';
import { PaymentBadges } from '../common/PaymentBadges';
import { NUZUL_CONTACT } from '../../data/nuzulData';

export const Footer: React.FC = () => {
  const { lang } = useApp();

  return (
    <footer className="relative z-10 bg-navy text-on-navy border-t border-navy">
      <div className="container-nuzul py-16">
        {/* Strictly 4 Short Columns */}
        <div
          data-testid="footer-columns-grid"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-navy"
        >
          {/* Column 1: Brand & Positioning */}
          <div className="lg:col-span-4 space-y-4">
            <Link
              to="/"
              data-testid="footer-logo-link"
              className="inline-block rounded-lg"
              aria-label={lang === 'ar' ? 'نزول تك - الصفحة الرئيسية' : 'Nuzul Tech - Home'}
            >
              <NuzulLogo size={32} variant="dark" />
            </Link>
            <p className="text-on-navy-muted text-sm leading-relaxed max-w-sm">
              {lang === 'ar'
                ? 'فريق هندسي في القاهرة لتجهيز شبكات الشركات، تشغيل خوادم KVM، تأمين البيانات، وتطوير أنظمة ERP بعقود صيانة واضحة.'
                : 'Cairo-based infrastructure team building office networks, KVM cloud servers, security systems, and ERP software under clear SLAs.'}
            </p>
          </div>

          {/* Column 2: Primary Pages */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-sm font-bold text-on-navy">
              {lang === 'ar' ? 'الموقع' : 'Site'}
            </h3>
            <ul className="space-y-2.5 text-sm text-on-navy-muted">
              <li>
                <Link to="/about" className="hover-text-on-navy transition-colors">
                  {lang === 'ar' ? 'عن نزول تك' : 'About Nuzul Tech'}
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover-text-on-navy transition-colors">
                  {lang === 'ar' ? 'الخدمات' : 'Services'}
                </Link>
              </li>
              <li>
                <Link to="/hosting" className="hover-text-on-navy transition-colors">
                  {lang === 'ar' ? 'الاستضافة والخوادم' : 'Hosting & Servers'}
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="hover-text-on-navy transition-colors">
                  {lang === 'ar' ? 'الأسعار والباقات' : 'Pricing & Packages'}
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="hover-text-on-navy transition-colors">
                  {lang === 'ar' ? 'دراسات الحالة' : 'Case Studies'}
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover-text-on-navy transition-colors">
                  {lang === 'ar' ? 'المدونة التقنية' : 'Technical Blog'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Solution Pillars */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-sm font-bold text-on-navy">
              {lang === 'ar' ? 'الخدمات' : 'Services'}
            </h3>
            <ul className="space-y-2.5 text-sm text-on-navy-muted">
              <li>
                <Link to="/services?cat=infrastructure" className="hover-text-on-navy transition-colors">
                  {lang === 'ar' ? 'الشبكات والبنية التحتية' : 'Networks & Infrastructure'}
                </Link>
              </li>
              <li>
                <Link to="/services?cat=cloud" className="hover-text-on-navy transition-colors">
                  {lang === 'ar' ? 'السحابة والاستضافة' : 'Cloud & Hosting'}
                </Link>
              </li>
              <li>
                <Link to="/services?cat=security" className="hover-text-on-navy transition-colors">
                  {lang === 'ar' ? 'الأمن السيبراني' : 'Cybersecurity'}
                </Link>
              </li>
              <li>
                <Link to="/services?cat=software" className="hover-text-on-navy transition-colors">
                  {lang === 'ar' ? 'البرمجيات وأنظمة ERP' : 'Software & ERP'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Direct Contact */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-sm font-bold text-on-navy">
              {lang === 'ar' ? 'التواصل' : 'Contact'}
            </h3>
            <ul className="space-y-3 text-sm text-on-navy-muted">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-navy-accent shrink-0 mt-1" />
                <span>{lang === 'ar' ? NUZUL_CONTACT.locationAr : NUZUL_CONTACT.locationEn}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-navy-accent shrink-0" />
                <a
                  href={`tel:${NUZUL_CONTACT.rawPhone1}`}
                  dir="ltr"
                  className="ltr-num hover-text-on-navy transition-colors"
                >
                  {NUZUL_CONTACT.phone1}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-navy-accent shrink-0" />
                <a
                  href={`mailto:${NUZUL_CONTACT.email}`}
                  dir="ltr"
                  className="ltr-num hover-text-on-navy transition-colors"
                >
                  {NUZUL_CONTACT.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Payment Badges Row (Footer Only — Rendered Once Across Site) */}
        <div
          data-testid="footer-payment-badges"
          className="py-8 border-b border-navy flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
        >
          <span className="text-xs text-on-navy-muted font-medium">
            {lang === 'ar' ? 'طرق الدفع:' : 'Payment methods:'}
          </span>
          <PaymentBadges variant="footer" />
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-on-navy-muted">
          <p>
            © <span className="ltr-num">{new Date().getFullYear()}</span>{' '}
            {lang === 'ar'
              ? 'نزول تك لتقنية المعلومات. جميع الحقوق محفوظة.'
              : 'Nuzul Tech IT Solutions. All rights reserved.'}
          </p>
          <div className="flex items-center gap-6">
            <Link to="/pricing" className="hover-text-on-navy transition-colors">
              {lang === 'ar' ? 'خطط الأسعار' : 'Pricing Plans'}
            </Link>
            <Link to="/contact" className="hover-text-on-navy transition-colors">
              {lang === 'ar' ? 'تواصل معنا' : 'Contact Us'}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
