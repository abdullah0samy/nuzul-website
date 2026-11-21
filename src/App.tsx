import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, useParams, Link } from 'react-router-dom';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
// Home Page Sections
import { HeroNetworkCanvas } from './components/hero/HeroNetworkCanvas';
import { HeroSection } from './components/hero/HeroSection';
import { HomeServicePillars } from './components/home/HomeServicePillars';
import { HomeArchitectureDiagram } from './components/home/HomeArchitectureDiagram';
import { HomeFeaturedCaseStudy } from './components/home/HomeFeaturedCaseStudy';
import { HomeHowWeWork } from './components/home/HomeHowWeWork';
import { HomeHostingTeaser } from './components/home/HomeHostingTeaser';
import { HomeTestimonials } from './components/home/HomeTestimonials';
import { HomeFAQ } from './components/home/HomeFAQ';
import { HomeFinalCTA } from './components/home/HomeFinalCTA';

// Inner Pages Sections
import { ServicesSection } from './components/services/ServicesSection';
import { ServiceDetailView } from './components/services/ServiceDetailView';
import { PackagesSection } from './components/packages/PackagesSection';
import { ImplementationRoadmap } from './components/roadmap/ImplementationRoadmap';
import { LiveDemosSection } from './components/demos/LiveDemosSection';
import { PricingSection } from './components/pricing/PricingSection';
import { ComparePlansSection } from './components/pricing/ComparePlansSection';
import { PricingTermsSection } from './components/pricing/PricingTermsSection';
import { DomainSearchWidget } from './components/domain/DomainSearchWidget';
import { TechStackSection } from './components/tech/TechStackSection';
import { ProjectsSection } from './components/projects/ProjectsSection';
import { BlogSection } from './components/blog/BlogSection';
import { ContactConsultationSection } from './components/contact/ContactConsultationSection';
import { TeamSection } from './components/team/TeamSection';

// Data
import {
  SERVICES,
  PROJECTS,
  ARTICLES,
  INFRASTRUCTURE_LOCATIONS,
} from './data/nuzulData';

// Modals & Single Floating Contact Channel
import { CartDrawer } from './components/modals/CartDrawer';
import { ServerConfiguratorModal } from './components/modals/ServerConfiguratorModal';
import { PaymentModal } from './components/modals/PaymentModal';
import { FloatingWhatsApp } from './components/support/FloatingWhatsApp';
import { GlobalSearchCommandPalette } from './components/search/GlobalSearchCommandPalette';
import { ArchitectureDiagram } from './components/common/ArchitectureDiagram';
import { ImageSlot } from './components/common/ImageSlot';
import { ErrorBoundary, RouteErrorBoundary } from './components/common/ErrorBoundary';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Calendar,
  Clock,
  Server,
  Compass,
  ShieldCheck,
} from 'lucide-react';

const ScrollToTop: React.FC = () => {
  const { pathname, search } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname, search]);
  return null;
};

const PageMeta: React.FC<{ titleAr: string; titleEn: string }> = ({ titleAr, titleEn }) => {
  const { lang } = useApp();
  const { pathname } = useLocation();

  useEffect(() => {
    document.title =
      lang === 'ar'
        ? `${titleAr} | نزول تك`
        : `${titleEn} | Nuzul Tech`;

    const cleanPath = pathname === '/' ? '/' : pathname.replace(/\/+$/, '');
    const arHref = `https://nuzultech.com${cleanPath}`;
    const enHref = `https://nuzultech.com${cleanPath}?lang=en`;

    const upsertLink = (rel: string, hreflang: string | null, href: string) => {
      const selector = hreflang
        ? `link[rel="${rel}"][hreflang="${hreflang}"]`
        : `link[rel="${rel}"]:not([hreflang])`;
      let el = document.head.querySelector(selector) as HTMLLinkElement | null;
      if (!el) {
        el = document.createElement('link');
        el.rel = rel;
        if (hreflang) el.hreflang = hreflang;
        document.head.appendChild(el);
      }
      el.href = href;
    };

    upsertLink('canonical', null, lang === 'en' ? enHref : arHref);
    upsertLink('alternate', 'ar', arHref);
    upsertLink('alternate', 'en', enHref);
    upsertLink('alternate', 'x-default', arHref);
  }, [lang, titleAr, titleEn, pathname]);

  return null;
};

/* DEDICATED 404 PAGE (*) */
const NotFoundPage: React.FC = () => {
  const { lang } = useApp();
  const ArrowIcon = lang === 'ar' ? ArrowLeft : ArrowRight;

  const recoveryLinks = [
    { to: '/', labelAr: 'الصفحة الرئيسية', labelEn: 'Home Page' },
    { to: '/about', labelAr: 'عن نزول تك', labelEn: 'About Us' },
    { to: '/services', labelAr: 'الخدمات الهندسية', labelEn: 'Engineering Services' },
    { to: '/hosting', labelAr: 'الاستضافة والخوادم', labelEn: 'Hosting & Servers' },
    { to: '/pricing', labelAr: 'خطط الأسعار', labelEn: 'Pricing Plans' },
    { to: '/case-studies', labelAr: 'دراسات الحالة', labelEn: 'Case Studies' },
    { to: '/blog', labelAr: 'المدونة التقنية', labelEn: 'Technical Blog' },
    { to: '/contact', labelAr: 'تواصل معنا', labelEn: 'Contact Us' },
  ];

  return (
    <>
      <PageMeta
        titleAr="الصفحة غير موجودة (404)"
        titleEn="Page Not Found (404)"
      />
      <section data-testid="not-found-page" className="section-spacing bg-page-band">
        <div className="container-nuzul max-w-3xl">
          <div className="clean-card p-8 md:p-12 text-center space-y-6">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-surface-2 border border-token text-accent mx-auto">
              <Compass className="w-7 h-7" />
            </div>

            <div className="text-sm font-bold text-accent">
              <bdi dir="ltr" className="ltr-num">404</bdi>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-main">
              {lang === 'ar'
                ? 'عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها'
                : 'Sorry, the page you are looking for does not exist or has moved'}
            </h1>

            <p className="text-muted text-base leading-relaxed max-w-xl mx-auto">
              {lang === 'ar'
                ? 'يمكنك العودة إلى الصفحة الرئيسية أو الانتقال مباشرة إلى أحد الأقسام الرئيسية لموقع نزول تك عبر الروابط التالية:'
                : 'You can return to the home page or jump directly to any of Nuzul Tech’s core sections below:'}
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <Link to="/" className="btn-primary px-6 py-3 text-sm">
                <span>{lang === 'ar' ? 'العودة إلى الصفحة الرئيسية' : 'Back to Home Page'}</span>
                <ArrowIcon className="w-4 h-4" />
              </Link>
              <Link to="/contact" className="btn-secondary px-6 py-3 text-sm">
                {lang === 'ar' ? 'تواصل مع الفريق الهندسي' : 'Contact Engineering Team'}
              </Link>
            </div>

            <div className="pt-8 border-t border-token">
              <h2 className="text-xs font-bold text-muted mb-4">
                {lang === 'ar' ? 'روابط الوصول السريع:' : 'Quick Recovery Links:'}
              </h2>
              <div className="flex flex-wrap items-center justify-center gap-2.5">
                {recoveryLinks.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="px-3.5 py-2 rounded-lg bg-page border border-token text-xs font-semibold text-main hover-text-accent hover-surface-2 transition-colors"
                  >
                    {lang === 'ar' ? item.labelAr : item.labelEn}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

/* 1. HOME PAGE (Strict 8-section order) */
const HomePage: React.FC = () => (
  <>
    <PageMeta
      titleAr="البنية التحتية السحابية والأمن السيبراني للشركات في مصر"
      titleEn="Enterprise IT Infrastructure, Cloud & Cybersecurity in Egypt"
    />
    <RouteErrorBoundary sectionName="HomeHero" variant="section">
      <HeroSection />
    </RouteErrorBoundary>
    <HomeServicePillars />
    <RouteErrorBoundary sectionName="HomeArchitectureDiagram" variant="section">
      <HomeArchitectureDiagram />
    </RouteErrorBoundary>
    <HomeFeaturedCaseStudy />
    <HomeHowWeWork />
    <RouteErrorBoundary sectionName="HomeHostingTeaser" variant="section">
      <HomeHostingTeaser />
    </RouteErrorBoundary>
    <HomeTestimonials />
    <HomeFAQ />
    <HomeFinalCTA />
  </>
);

/* 2. ABOUT PAGE (/about) */
const AboutPage: React.FC = () => {
  const { lang } = useApp();

  const governancePillars = [
    {
      id: 'ownership',
      titleAr: 'ملكية كاملة للعميل دون قيود احتكار',
      titleEn: 'Full Client Ownership & Zero Vendor Lock-In',
      bodyAr:
        'يستلم العميل كامل الصلاحيات الإدارية (Root / Admin)، الأكواد البرمجية، وقواعد البيانات مع وثيقة تشغيل هندسية مفصلة (Runbook) لاستقلالية الإدارة.',
      bodyEn:
        'Clients receive complete Root/Admin credentials, source repositories, and database schemas alongside a formal operational Runbook.',
    },
    {
      id: 'sla',
      titleAr: 'عقود مستوى خدمة SLA بمستويات استجابة محددة',
      titleEn: 'Formal SLAs with Defined Escalation Tiers',
      bodyAr:
        'نحدد مستويات الأولوية للحوادث (P1–P4)، أوقات الاستجابة الأولية، ونوافذ الصيانة المجدولة مسبقاً ضمن العقود السنوية للشركات.',
      bodyEn:
        'Every corporate contract specifies P1–P4 incident severities, acknowledgment windows, and pre-notified maintenance schedules.',
    },
    {
      id: 'invoicing',
      titleAr: 'شفافية مالية وتعاقدية بالجنيه المصري',
      titleEn: 'Transparent Local EGP Commercial Contracting',
      bodyAr:
        'تسعير محدد بالعملة المحلية للاستضافة وعقود الإدارة، مع فواتير ضريبية رسمية لقطاعات الأعمال.',
      bodyEn:
        'Clear EGP contracting for managed hosting and infrastructure projects with formal corporate invoicing.',
    },
  ];

  const slaMatrix = [
    {
      tier: 'P1',
      nameAr: 'انقطاع حرج بالنظام الرئيسي',
      nameEn: 'Critical System Outage',
      ackAr: 'تصعيد عاجل وفق عقد الطوارئ المتفق عليه',
      ackEn: 'Priority emergency escalation per SLA',
    },
    {
      tier: 'P2',
      nameAr: 'تأثر أداء خدمة أو قاعدة بيانات',
      nameEn: 'High Service Degradation',
      ackAr: 'استجابة ذات أولوية خلال ساعات التغطية',
      ackEn: 'Priority triage during active coverage',
    },
    {
      tier: 'P3',
      nameAr: 'طلب تعديل إعدادات أو صلاحيات',
      nameEn: 'Standard Configuration Request',
      ackAr: 'خلال نفس يوم العمل الرسمي',
      ackEn: 'Same business day turnaround',
    },
    {
      tier: 'P4',
      nameAr: 'مراجعة وقائية أو استفسار استشاري',
      nameEn: 'Advisory & Preventive Review',
      ackAr: 'مجدول ضمن خطة الصيانة الدورية',
      ackEn: 'Scheduled within maintenance cycle',
    },
  ];

  return (
    <>
      <PageMeta
        titleAr="عن نزول تك — المنهجية الهندسية وعقود SLA"
        titleEn="About Nuzul Tech — Engineering Methodology & SLA"
      />
      <section className="bg-surface-band border-b border-token py-14">
        <div className="container-nuzul">
          <div className="text-accent text-xs font-semibold mb-2">
            {lang === 'ar'
              ? 'القاهرة، مصر · هندسة البنية التحتية'
              : 'Cairo, Egypt · IT Infrastructure Engineering'}
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-main mb-4">
            {lang === 'ar'
              ? 'نزول تك: فريق هندسي مسؤول عن شبكتك وخوادمك'
              : 'Nuzul Tech: One Accountable Infrastructure Team'}
          </h1>
          <p className="text-muted text-base md:text-lg max-w-3xl leading-relaxed">
            {lang === 'ar'
              ? 'نعمل مع الشركات، المستشفيات، مكاتب المحاسبة، وشركات النقل لتجهيز الشبكات وإدارة السيرفرات السحابية وتطوير برامج العمل بتوثيق كامل وصلاحيات باسم العميل.'
              : 'We work with businesses, hospitals, accounting firms, and logistics fleets to build structured networks, run cloud servers, and deliver business software with full client ownership.'}
          </p>
        </div>
      </section>

      <section className="section-spacing bg-page-band border-b border-token">
        <div className="container-nuzul space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {governancePillars.map((item) => (
              <div key={item.id} className="clean-card p-6 sm:p-7 space-y-3">
                <ShieldCheck className="w-5 h-5 text-accent shrink-0" />
                <h2 className="text-lg font-bold text-main">
                  {lang === 'ar' ? item.titleAr : item.titleEn}
                </h2>
                <p className="text-sm text-muted leading-relaxed">
                  {lang === 'ar' ? item.bodyAr : item.bodyEn}
                </p>
              </div>
            ))}
          </div>

          <div className="clean-card p-6 sm:p-8 space-y-6">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-main mb-2">
                {lang === 'ar'
                  ? 'تصنيف أولويات البلاغات في عقود مستوى الخدمة (SLA)'
                  : 'Incident Severity Classification in SLA Contracts'}
              </h2>
              <p className="text-sm text-muted leading-relaxed">
                {lang === 'ar'
                  ? 'نحدد مع كل عميل مستوى التغطية (8×5 أو 24/7) ومسار التصعيد الهندسي حسب أهمية كل خدمة تشغيلية.'
                  : 'Each enterprise agreement defines coverage hours (8x5 or 24/7) and direct escalation paths mapped to system criticality.'}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {slaMatrix.map((row) => (
                <div key={row.tier} className="p-4 rounded-xl bg-page border border-token space-y-2">
                  <span dir="ltr" className="ltr-num inline-block text-xs font-bold text-accent">
                    {row.tier}
                  </span>
                  <div className="text-sm font-bold text-main">
                    {lang === 'ar' ? row.nameAr : row.nameEn}
                  </div>
                  <div className="text-xs text-muted leading-relaxed">
                    {lang === 'ar' ? row.ackAr : row.ackEn}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <TeamSection />
    </>
  );
};

/* 3. SERVICES PAGE (/services) */
const ServicesPage: React.FC = () => {
  const { lang } = useApp();
  return (
    <>
      <PageMeta
        titleAr="الخدمات"
        titleEn="Services"
      />
      <section className="bg-surface-band border-b border-token py-14">
        <div className="container-nuzul">
          <h1 className="text-3xl md:text-5xl font-bold text-main mb-4">
            {lang === 'ar' ? 'الخدمات' : 'Services'}
          </h1>
          <p className="text-muted text-base md:text-lg max-w-2xl leading-relaxed">
            {lang === 'ar'
              ? 'نصمم وننفذ الشبكات وغرف الخوادم، ونشغّل الخوادم السحابية، ونؤمّن الأنظمة، ونطوّر أنظمة الأعمال (ERP وتطبيقات الويب والموبايل). الدعم والصيانة بعقود SLA.'
              : 'We design and deploy networks and server rooms, operate cloud servers, harden systems, and develop business software (ERP, web, and mobile apps) with SLA support.'}
          </p>
        </div>
      </section>
      <RouteErrorBoundary sectionName="ServicesCatalog" variant="section">
        <ServicesSection />
      </RouteErrorBoundary>
      <PackagesSection />
      <ImplementationRoadmap />
      <RouteErrorBoundary sectionName="LiveDemos" variant="section">
        <LiveDemosSection />
      </RouteErrorBoundary>
    </>
  );
};

/* 4. SERVICE DETAIL PAGE (/services/:slug) */
const ServiceDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const service = SERVICES.find(
    (s) => s.id === slug || s.id === `service-${slug}`
  );

  if (!service) {
    return <NotFoundPage />;
  }

  return (
    <>
      <PageMeta titleAr={service.title} titleEn={service.titleEn} />
      <ServiceDetailView service={service} />
    </>
  );
};

/* 5. PRICING PAGE (/pricing) */
const PricingPage: React.FC = () => {
  const { lang } = useApp();
  return (
    <>
      <PageMeta
        titleAr="خطط الأسعار والباقات المؤسسية"
        titleEn="Pricing & Enterprise Packages"
      />
      <section className="bg-surface-band border-b border-token py-14">
        <div className="container-nuzul">
          <p className="text-xs font-semibold text-accent mb-2">
            {lang === 'ar' ? 'تسعير واضح بدون مفاجآت' : 'Clear, Predictable Pricing'}
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-main mb-4">
            {lang === 'ar'
              ? 'أسعار السيرفرات وباقات التجهيز'
              : 'Server Pricing & Office Packages'}
          </h1>
          <p className="text-muted text-base md:text-lg max-w-2xl leading-relaxed">
            {lang === 'ar'
              ? 'مواصفات هاردوير محددة للخوادم السحابية، وباقات واضحة لتجهيز شبكات المقرات والفروع بفاتورة محلية.'
              : 'Transparent hardware specs for cloud servers and turnkey office infrastructure packages.'}
          </p>
        </div>
      </section>
      <RouteErrorBoundary sectionName="PricingPlans" variant="section">
        <PricingSection />
      </RouteErrorBoundary>
      <RouteErrorBoundary sectionName="ComparePlans" variant="section">
        <ComparePlansSection />
      </RouteErrorBoundary>
      <PackagesSection />
      <PricingTermsSection />
    </>
  );
};

/* 6. HOSTING PAGE (/hosting) */
const HostingPage: React.FC = () => {
  const { lang } = useApp();

  const infraCapabilities = [
    {
      id: 'cap-nvme',
      titleAr: 'تخزين NVMe ومعالجات خوادم مخصصة',
      titleEn: 'NVMe Arrays & Server-Grade Compute',
      bodyAr:
        'تعتمد الخوادم الافتراضية على مصفوفات تخزين NVMe (مع RAID-10 في خطط الشركات) لتسريع عمليات القراءة والكتابة لقواعد البيانات وأنظمة ERP.',
      bodyEn:
        'Virtual machines run on NVMe storage (with RAID-10 on Enterprise tiers) to sustain high IOPS for transactional databases and ERP workloads.',
    },
    {
      id: 'cap-kvm',
      titleAr: 'عزل على مستوى النواة (KVM) وحماية الشبكة',
      titleEn: 'Kernel-Level KVM Isolation & Network Filtering',
      bodyAr:
        'يتم عزل كل خادم افتراضي عبر تقنية KVM لمنع تداخل الموارد، مع تصفية حركة المرور ضد هجمات حجب الخدمة (DDoS) وتطبيق سياسات Firewall.',
      bodyEn:
        'Each VPS is isolated via KVM virtualization to prevent resource contention, backed by network-layer DDoS filtering and firewall policy enforcement.',
    },
    {
      id: 'cap-backups',
      titleAr: 'نسخ احتياطي مجدول ودعم هندسي',
      titleEn: 'Scheduled Backups & Systems Engineering Support',
      bodyAr:
        'جدولة نسخ احتياطي آلي (أسبوعي أو يومي حسب الخطة) مع إمكانية استعادة اللقطات السريعة (Snapshots) والتواصل المباشر مع مهندسي النظم.',
      bodyEn:
        'Automated weekly or daily backup retention with on-demand Snapshots and direct escalation to Linux/Windows systems engineers.',
    },
  ];

  return (
    <>
      <PageMeta
        titleAr="الاستضافة السحابية والخوادم المخصصة"
        titleEn="Cloud Hosting & Dedicated Servers"
      />
      <section className="bg-surface-band border-b border-token py-16">
        <div className="container-nuzul">
          <p className="text-sm font-semibold text-accent mb-2">
            {lang === 'ar'
              ? 'البنية السحابية واستضافة الأعمال'
              : 'Cloud Infrastructure & Business Hosting'}
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-main mb-4">
            {lang === 'ar'
              ? 'استضافة سحابية وخوادم افتراضية (Cloud VPS) للشركات'
              : 'Enterprise Cloud Hosting & KVM Virtual Servers'}
          </h1>
          <p className="text-muted text-base md:text-lg max-w-2xl leading-relaxed">
            {lang === 'ar'
              ? 'خوادم لينكس وويندوز بمعالجات AMD EPYC وIntel Xeon وأقراص NVMe، مع عزل موارد كامل على مستوى النواة (KVM) ودعم فني هندسي.'
              : 'Linux and Windows servers powered by AMD EPYC and Intel Xeon processors with NVMe storage, kernel-level KVM isolation, and engineering support.'}
          </p>
        </div>
      </section>

      <RouteErrorBoundary sectionName="HostingPricing" variant="section">
        <PricingSection />
      </RouteErrorBoundary>
      <RouteErrorBoundary sectionName="HostingComparePlans" variant="section">
        <ComparePlansSection />
      </RouteErrorBoundary>

      {/* Datacenter Regions & Domain Registration Inquiry */}
      <section id="datacenter-architecture" className="section-spacing bg-page-band border-t border-token">
        <div className="container-nuzul">
          <RouteErrorBoundary sectionName="DomainSearch" variant="section">
            <DomainSearchWidget />
          </RouteErrorBoundary>

          <div className="max-w-3xl mb-10">
            <div className="inline-flex items-center gap-2 text-accent text-xs font-semibold mb-2">
              <Server className="w-4 h-4" />
              <span>
                {lang === 'ar'
                  ? 'مواقع التشغيل والاستضافة'
                  : 'Deployment Regions'}
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-main mb-3">
              {lang === 'ar'
                ? 'مناطق مراكز البيانات المتاحة لنشر الخوادم'
                : 'Available Datacenter Regions for Server Provisioning'}
            </h2>
            <p className="text-muted text-sm md:text-base leading-relaxed">
              {lang === 'ar'
                ? 'اختر موقع النشر الأقرب لعملائك ومقرات عملك لتقليل زمن الاستجابة الشبكي (Latency) والامتثال لمتطلبات توطين البيانات.'
                : 'Select the deployment region closest to your users and branch offices to optimize network latency and data residency.'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
            {INFRASTRUCTURE_LOCATIONS.map((loc) => (
              <div
                key={loc.id}
                data-testid={`datacenter-card-${loc.id}`}
                className="clean-card p-6 flex flex-col justify-between space-y-3"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-semibold text-accent">
                      {lang === 'ar' ? loc.country : loc.countryEn}
                    </span>
                    <span
                      dir="ltr"
                      className="ltr-num text-xs font-bold text-muted px-2.5 py-0.5 rounded bg-surface-2 border border-token"
                    >
                      {loc.regionCode}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-main mb-2">
                    {lang === 'ar' ? loc.city : loc.cityEn}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted leading-relaxed">
                    {lang === 'ar' ? loc.role : loc.roleEn}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* 3 Technical Infrastructure & Security Capability Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {infraCapabilities.map((cap) => (
              <div
                key={cap.id}
                data-testid={`infra-capability-${cap.id}`}
                className="clean-card p-6"
              >
                <h3 className="text-base font-bold text-main mb-2.5">
                  {lang === 'ar' ? cap.titleAr : cap.titleEn}
                </h3>
                <p className="text-xs sm:text-sm text-muted leading-relaxed">
                  {lang === 'ar' ? cap.bodyAr : cap.bodyEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TechStackSection />
      <PricingTermsSection />
    </>
  );
};

/* 7. CASE STUDIES PAGE (/case-studies) */
const CaseStudiesPage: React.FC = () => {
  const { lang } = useApp();
  return (
    <>
      <PageMeta
        titleAr="دراسات الحالة وسجل المشاريع"
        titleEn="Case Studies & Engineering Portfolio"
      />
      <section className="bg-surface-band border-b border-token py-16">
        <div className="container-nuzul">
          <p className="text-sm font-semibold text-accent mb-2">
            {lang === 'ar' ? 'سجل المشاريع والحلول المنفذة' : 'Documented Engineering Engagements'}
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-main mb-4">
            {lang === 'ar'
              ? 'دراسات حالة لمشاريع البنية التحتية والسحابة'
              : 'Infrastructure & Cloud Case Studies'}
          </h1>
          <p className="text-muted text-base md:text-lg max-w-2xl leading-relaxed">
            {lang === 'ar'
              ? 'استعرض كيف ساعدنا الشركات والمراكز الطبية والمؤسسات على رفع كفاءة أنظمتها وتقليل الأعطال وتأمين بياناتها.'
              : 'Explore how we helped enterprises, medical centers, and institutions improve uptime, modernize infrastructure, and secure critical workloads.'}
          </p>
        </div>
      </section>
      <ProjectsSection />
    </>
  );
};

/* 8. CASE STUDY DETAIL PAGE (/case-studies/:slug) */
const CaseStudyDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { lang } = useApp();

  const project = PROJECTS.find(
    (p) => p.id === slug || p.id === `case-${slug}`
  );

  if (!project) {
    return <NotFoundPage />;
  }

  const deliverables =
    lang === 'ar'
      ? project.deliverablesAr || []
      : project.deliverablesEn || [];

  return (
    <>
      <PageMeta titleAr={project.title} titleEn={project.titleEn} />
      <section data-testid="case-study-detail-page" className="section-spacing bg-page-band">
        <div className="container-nuzul">
          <div className="mb-8">
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-2 min-h-[44px] text-sm font-semibold text-accent hover:underline"
            >
              {lang === 'ar' ? 'العودة إلى جميع دراسات الحالة' : 'Back to all case studies'}
            </Link>
          </div>

          <article className="clean-card overflow-hidden">
            <div className="bg-surface-2 border-b border-token">
              <ArchitectureDiagram caseId={project.id} variant="detail" />
            </div>

            <div className="p-6 sm:p-8 md:p-12">
              <div className="flex flex-wrap items-center gap-2.5 text-xs text-muted mb-4">
                <span className="font-semibold text-accent whitespace-nowrap">
                  {lang === 'ar' ? project.category : project.categoryEn}
                </span>
                <span aria-hidden="true">·</span>
                <span>
                  {lang === 'ar' ? project.client : project.clientEn}
                </span>
                <span aria-hidden="true">·</span>
                <span className="inline-flex items-center gap-1 font-medium">
                  <Clock className="w-3.5 h-3.5 text-accent" aria-hidden="true" />
                  <span>{lang === 'ar' ? project.timelineAr : project.timelineEn}</span>
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-main mb-8">
                {lang === 'ar' ? project.title : project.titleEn}
              </h1>

              {/* Block 1: Context */}
              <div
                data-testid="case-study-context"
                className="p-6 rounded-xl bg-page border border-token mb-6"
              >
                <h2 className="text-lg font-bold text-main mb-2">
                  {lang === 'ar' ? 'سياق المشروع وبيئة العميل' : 'Project Context & Environment'}
                </h2>
                <p className="text-muted text-base leading-relaxed">
                  {lang === 'ar' ? project.contextAr : project.contextEn}
                </p>
              </div>

              {/* Block 2 & 3: Constraint & What We Delivered */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div
                  data-testid="case-study-constraint"
                  className="p-6 rounded-xl bg-page border border-token"
                >
                  <h2 className="text-lg font-bold text-main mb-3">
                    {lang === 'ar' ? 'التحدي التشغيلي' : 'The Operational Challenge'}
                  </h2>
                  <p className="text-muted text-base leading-relaxed">
                    {lang === 'ar' ? project.challenge : project.challengeEn}
                  </p>
                </div>
                <div
                  data-testid="case-study-delivered"
                  className="p-6 rounded-xl bg-page border border-token"
                >
                  <h2 className="text-lg font-bold text-main mb-3">
                    {lang === 'ar' ? 'الحل الهندسي المنفذ' : 'Engineering Solution'}
                  </h2>
                  <p className="text-muted text-base leading-relaxed">
                    {lang === 'ar' ? project.solution : project.solutionEn}
                  </p>
                </div>
              </div>

              {/* Documented Deliverables Scope */}
              {deliverables.length > 0 && (
                <div className="p-6 rounded-xl bg-page border border-token mb-8">
                  <h2 className="text-lg font-bold text-main mb-4">
                    {lang === 'ar' ? 'المخرجات والنطاق الهندسي المنفذ' : 'Delivered Engineering Scope'}
                  </h2>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm text-muted">
                        <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-1" />
                        <span>{item.replace(/^\d+\.\s*/, '')}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Block 4: Qualitative Outcome */}
              <div
                data-testid="case-study-outcome"
                className="p-6 rounded-xl bg-surface-2 border border-token mb-10"
              >
                <h2 className="text-lg font-bold text-main mb-2">
                  {lang === 'ar'
                    ? 'الأثر التشغيلي'
                    : 'Operational Outcome'}
                </h2>
                <p className="text-main text-base leading-relaxed">
                  {lang === 'ar'
                    ? project.qualitativeOutcomeAr
                    : project.qualitativeOutcomeEn}
                </p>
              </div>

              {/* Field Hardware & Rack Photography */}
              <div className="mb-10">
                <ImageSlot
                  testId={`case-study-image-slot-${project.id}`}
                  photoVariant="rack"
                  aspectRatio="video"
                  descriptionAr={`تجهيز كبائن الشبكات والخوادم — ${project.title}`}
                  descriptionEn={`Server rack and network switch commissioning — ${project.titleEn}`}
                  captionAr={`تنظيم كابلات الشبكة ومفاتيح التبديل — ${project.category}`}
                  captionEn={`Structured switching and rack cabling — ${project.categoryEn}`}
                />
              </div>

              {/* Tech Stack */}
              <div className="pt-6 border-t border-token flex flex-wrap items-center justify-between gap-6">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs text-muted">
                  {project.technologies.map((tech, i) => (
                    <React.Fragment key={i}>
                      {i > 0 && <span aria-hidden="true">·</span>}
                      <bdi dir="ltr" className="ltr-num font-semibold text-main whitespace-nowrap">
                        {tech}
                      </bdi>
                    </React.Fragment>
                  ))}
                </div>
                <Link to="/contact" className="btn-primary px-6 py-3 min-h-[44px] text-sm whitespace-nowrap">
                  {lang === 'ar' ? 'اطلب استشارة لمشروع مماثل' : 'Discuss a Similar Project'}
                </Link>
              </div>
            </div>
          </article>
        </div>
      </section>
    </>
  );
};

/* 9. BLOG PAGE (/blog) */
const BlogPage: React.FC = () => {
  const { lang } = useApp();
  return (
    <>
      <PageMeta
        titleAr="المدونة التقنية والمقالات الهندسية"
        titleEn="Technical Blog & Engineering Insights"
      />
      <section className="bg-surface-band border-b border-token py-16">
        <div className="container-nuzul">
          <p className="text-sm font-semibold text-accent mb-2">
            {lang === 'ar' ? 'مركز المعرفة الهندسية' : 'Engineering Knowledge Base'}
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-main mb-4">
            {lang === 'ar'
              ? 'مقالات وأدلة تقنية لصناع القرار'
              : 'Technical Guides for IT Leaders'}
          </h1>
          <p className="text-muted text-base md:text-lg max-w-2xl leading-relaxed">
            {lang === 'ar'
              ? 'تحليلات عملية حول البنية التحتية، والأمن السيبراني، وإدارة الخوادم السحابية بقلم مهندسي نزول تك.'
              : 'Practical technical articles on infrastructure, cybersecurity, and cloud operations written by Nuzul Tech engineers.'}
          </p>
        </div>
      </section>
      <BlogSection />
    </>
  );
};

/* 10. BLOG DETAIL PAGE (/blog/:slug) */
const BlogDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { lang } = useApp();
  const ArrowIcon = lang === 'ar' ? ArrowLeft : ArrowRight;

  const resolvedSlug =
    slug === 'cairo-cure-case-study'
      ? 'oncology-center-pacs-email-governance'
      : slug;

  const article = ARTICLES.find(
    (a) => a.id === resolvedSlug || a.slug === resolvedSlug || a.id === `post-${resolvedSlug}`
  );

  if (!article) {
    return <NotFoundPage />;
  }

  const relatedArticles = ARTICLES.filter(
    (a) => a.id !== article.id && a.categorySlug === article.categorySlug
  ).slice(0, 3);

  return (
    <>
      <PageMeta titleAr={article.title} titleEn={article.titleEn} />
      <section data-testid="blog-detail-page" className="section-spacing bg-page-band">
        <div className="container-nuzul">
          <div className="mb-8">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 min-h-[44px] text-sm font-semibold text-accent hover:underline"
            >
              {lang === 'ar' ? 'العودة إلى المدونة' : 'Back to Blog'}
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Sticky Table of Contents (TOC) */}
            <aside
              data-testid="blog-toc"
              aria-label={lang === 'ar' ? 'جدول محتويات المقال' : 'Table of Contents'}
              className="lg:col-span-4 lg:sticky lg:top-24 clean-card p-6 space-y-4"
            >
              <div className={`text-xs font-bold text-accent ${lang === 'en' ? 'uppercase' : ''}`}>
                {lang === 'ar' ? 'محتويات الدليل التقني' : 'Table of Contents'}
              </div>
              <nav>
                <ol className="space-y-2.5 text-xs sm:text-sm">
                  {article.sections.map((sec) => (
                    <li key={sec.id}>
                      <a
                        href={`#${sec.id}`}
                        className="block p-2.5 rounded-lg bg-page border border-token text-main font-semibold hover-text-accent hover-surface-2 transition-colors"
                      >
                        {lang === 'ar' ? sec.headingAr : sec.headingEn}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>

              <div className="pt-4 border-t border-token space-y-2 text-xs text-muted">
                <div className="font-bold text-main">
                  {lang === 'ar' ? article.author : article.authorEn}
                </div>
                <div>{lang === 'ar' ? article.authorRole : article.authorRoleEn}</div>
                <div className="pt-2">
                  <Link
                    to="/contact"
                    className="btn-primary w-full py-2.5 text-xs whitespace-nowrap"
                  >
                    {lang === 'ar' ? 'استشر مهندسينا' : 'Consult Our Engineers'}
                  </Link>
                </div>
              </div>
            </aside>

            {/* Main Article Body */}
            <article className="lg:col-span-8 clean-card overflow-hidden">
              <div className="p-6 sm:p-8 md:p-12">
                <div className="flex flex-wrap items-center gap-2.5 text-xs text-muted mb-4">
                  <span className="text-accent font-semibold whitespace-nowrap">
                    {lang === 'ar' ? article.category : article.categoryEn}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
                    <Calendar className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                    <bdi dir="ltr" className="ltr-num">{article.date}</bdi>
                  </span>
                  <span aria-hidden="true">·</span>
                  <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
                    <Clock className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                    <span>{lang === 'ar' ? article.readTime : article.readTimeEn}</span>
                  </span>
                </div>

                <h1 className="text-2xl md:text-4xl font-bold text-main mb-6 leading-snug">
                  {lang === 'ar' ? article.title : article.titleEn}
                </h1>

                <p className="text-muted text-base md:text-lg leading-relaxed mb-8 pb-6 border-b border-token max-w-[65ch]">
                  {lang === 'ar' ? article.excerpt : article.excerptEn}
                </p>

                <div className="space-y-8 text-main text-base leading-relaxed max-w-[65ch]">
                  {article.sections.map((sec) => (
                    <section key={sec.id} id={sec.id} className="scroll-mt-28 space-y-3">
                      <h2 className="text-xl sm:text-2xl font-bold text-main">
                        {lang === 'ar' ? sec.headingAr : sec.headingEn}
                      </h2>
                      <p className="text-muted text-base leading-relaxed">
                        {lang === 'ar' ? sec.bodyAr : sec.bodyEn}
                      </p>
                    </section>
                  ))}
                </div>
              </div>
            </article>
          </div>

          {/* Related Articles Section */}
          {relatedArticles.length > 0 && (
            <div
              data-testid="blog-related-articles"
              className="mt-12 pt-10 border-t border-token"
            >
              <h2 className="text-xl sm:text-2xl font-bold text-main mb-6">
                {lang === 'ar'
                  ? 'مقالات وأدلة تقنية ذات صلة'
                  : 'Related Technical Guides'}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedArticles.map((rel) => (
                  <article
                    key={rel.id}
                    className="clean-card p-6 flex flex-col justify-between space-y-4"
                  >
                    <div>
                      <span className="inline-block px-2.5 py-1 rounded bg-surface-2 text-accent text-xs font-semibold border border-token mb-3">
                        {lang === 'ar' ? rel.category : rel.categoryEn}
                      </span>
                      <h3 className="text-base font-bold text-main mb-2 leading-snug">
                        <Link
                          to={`/blog/${rel.id}`}
                          className="hover-text-accent transition-colors"
                        >
                          {lang === 'ar' ? rel.title : rel.titleEn}
                        </Link>
                      </h3>
                      <p className="text-xs text-muted leading-relaxed line-clamp-3">
                        {lang === 'ar' ? rel.excerpt : rel.excerptEn}
                      </p>
                    </div>
                    <div className="pt-3 border-t border-token flex items-center justify-between text-xs">
                      <span className="text-muted ltr-num">{rel.date}</span>
                      <Link
                        to={`/blog/${rel.id}`}
                        className="inline-flex items-center gap-1 min-h-[44px] font-bold text-accent hover:underline"
                      >
                        <span>{lang === 'ar' ? 'اقرأ الدليل' : 'Read Guide'}</span>
                        <ArrowIcon className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

/* 11. CONTACT PAGE (/contact) */
const ContactPage: React.FC = () => {
  return (
    <>
      <PageMeta
        titleAr="تواصل معنا واحجز استشارة هندسية"
        titleEn="Contact Us & Book an Engineering Consultation"
      />
      <RouteErrorBoundary sectionName="ContactConsultation" variant="section">
        <ContactConsultationSection />
      </RouteErrorBoundary>
      <TeamSection />
    </>
  );
};

export function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <ScrollToTop />
        {/* Global Living Network Topology visible behind frosted glass UI across all pages */}
        <HeroNetworkCanvas mode="global" />
        <div className="relative z-10 min-h-screen flex flex-col bg-transparent text-main selection:bg-accent-soft selection:text-accent">
          <RouteErrorBoundary sectionName="Navbar" variant="section">
            <Navbar />
          </RouteErrorBoundary>

          <main id="main-content" tabIndex={-1} className="relative z-10 flex-grow focus:outline-none">
            <RouteErrorBoundary sectionName="MainRouter" variant="page">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/services/:slug" element={<ServiceDetailPage />} />
                <Route path="/pricing" element={<PricingPage />} />
                <Route path="/hosting" element={<HostingPage />} />
                <Route path="/case-studies" element={<CaseStudiesPage />} />
                <Route path="/case-studies/:slug" element={<CaseStudyDetailPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/blog/:slug" element={<BlogDetailPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </RouteErrorBoundary>
          </main>

          <RouteErrorBoundary sectionName="Footer" variant="section">
            <Footer />
          </RouteErrorBoundary>

          {/* Modals & Single Floating Contact Channel (WhatsApp Only) */}
          <ErrorBoundary sectionName="GlobalSearch" variant="silent">
            <GlobalSearchCommandPalette />
          </ErrorBoundary>
          <ErrorBoundary sectionName="CartDrawer" variant="silent">
            <CartDrawer />
          </ErrorBoundary>
          <ErrorBoundary sectionName="ServerConfiguratorModal" variant="silent">
            <ServerConfiguratorModal />
          </ErrorBoundary>
          <ErrorBoundary sectionName="PaymentModal" variant="silent">
            <PaymentModal />
          </ErrorBoundary>
          <ErrorBoundary sectionName="FloatingWhatsApp" variant="silent">
            <FloatingWhatsApp />
          </ErrorBoundary>
        </div>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
