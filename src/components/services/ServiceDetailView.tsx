import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  NormalizedServiceItem,
  PROJECTS,
  NUZUL_SERVICES,
} from '../../data/nuzulData';
import { useApp } from '../../context/AppContext';
import { ArchitectureDiagram } from '../common/ArchitectureDiagram';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Users,
  FileCheck,
  ShieldCheck,
  Cpu,
  Sliders,
  HelpCircle,
  ChevronDown,
  FolderGit2,
} from 'lucide-react';

interface ServiceDetailViewProps {
  service: NormalizedServiceItem;
}

export const ServiceDetailView: React.FC<ServiceDetailViewProps> = ({ service }) => {
  const { lang } = useApp();
  const ArrowIcon = lang === 'ar' ? ArrowLeft : ArrowRight;
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  const rawIdNum = Number(service.id.replace('service-', ''));
  const rawService = NUZUL_SERVICES.find((s) => s.id === rawIdNum);

  const isCloud = service.category === 'السحابة والاستضافة';
  const isSecurity = service.category === 'الأمن السيبراني';
  const isSoftware = service.category === 'البرمجيات وأنظمة الإدارة';

  const categoryLabelEn = isCloud
    ? 'Cloud & Servers'
    : isSecurity
    ? 'Cybersecurity'
    : isSoftware
    ? 'Software & ERP'
    : 'Infrastructure & Networks';

  // Block 2: Who It Is For
  const whoItIsFor = isCloud
    ? {
        ar: [
          'الشركات ومكاتب المحاسبة التي تشغّل أنظمة ERP وقواعد بيانات مركزية وتحتاج إلى أداء مستقر لعشرات المستخدمين المتزامنين.',
          'فرق التطوير والمنصات الرقمية التي تتطلب خوادم معزولة على مستوى النواة (KVM) وأقراص NVMe بتسعير محلي واضح بالجنيه المصري.',
          'المؤسسات الراغبة في التخلص من أعطال الخوادم المكتبية المحلية وتأمين وصول مشفر لفرق العمل عن بُعد.',
        ],
        en: [
          'Enterprises and accounting firms running centralized ERP and SQL databases requiring stable multi-user performance.',
          'Engineering teams and digital platforms needing kernel-isolated KVM servers and NVMe storage with predictable EGP billing.',
          'Organizations looking to replace fragile office desktop servers with encrypted remote access and scheduled off-site backups.',
        ],
      }
    : isSecurity
    ? {
        ar: [
          'المستشفيات والمؤسسات المالية التي تتطلب عزل شبكاتها الحساسة عن شبكة الزوار عبر أجهزة Firewall (NGFW) وتقسيم VLANs.',
          'الشركات التي تسعى لحماية مراسلاتها وفواتيرها الرسمية من الانتحال والتصيد عبر توثيق البريد (SPF / DKIM / DMARC).',
          'الجهات التي تحتاج إلى خطة نسخ احتياطي معزول (3-2-1 Immutable Backup) لاستعادة البيانات عند الكوارث.',
        ],
        en: [
          'Hospitals and financial firms requiring strict network isolation via hardware NGFW firewalls and 802.1Q VLAN segmentation.',
          'Companies protecting official domain communications and invoices from spoofing via SPF, DKIM, and DMARC enforcement.',
          'Organizations mandating 3-2-1 immutable off-site backups for rapid disaster recovery against ransomware.',
        ],
      }
    : isSoftware
    ? {
        ar: [
          'الشركات التجارية والعيادات التي تبحث عن أتمتة الحسابات والمخازن والربط المباشر مع منظومة الفاتورة الإلكترونية المصرية (ETA).',
          'المؤسسات التي تستعد لاستلام مشروع برمجي من شركة تطوير خارجية وتحتاج إلى فحص واعتماد هندسي مستقل (QA & Load Testing).',
          'قطاعات الأعمال التي تحتاج إلى بوابات ويب أو تطبيقات جوال مربوطة مباشرة بقواعد البيانات المركزية.',
        ],
        en: [
          'Commercial enterprises and clinics automating inventory, billing, and Egyptian Tax Authority (ETA) e-invoicing.',
          'Organizations preparing to accept software from an external vendor and requiring independent QA and load testing.',
          'Businesses needing responsive web portals or mobile apps integrated directly with core ERP databases.',
        ],
      }
    : {
        ar: [
          'المقرات الإدارية والمستشفيات التي تؤسس بنية كابلات شبكية منظمة (Cat6A / Fiber) وغرف خوادم قياسية.',
          'المؤسسات التي تحتاج إلى إدارة مركزية لحسابات الموظفين عبر خادم دومين (Active Directory) وخادم ملفات بصلاحيات دقيقة.',
          'الشركات متعددة الفروع التي ترغب في توحيد الاتصالات الداخلية عبر سنترال رقمي (VoIP PBX) وشبكات مراقبة CCTV معزولة.',
        ],
        en: [
          'Corporate headquarters and hospitals deploying structured Cat6A/Fiber cabling and standardized server racks.',
          'Organizations needing centralized endpoint management via Active Directory domain controllers and role-based file servers.',
          'Multi-branch companies unifying internal communications via IP-PBX VoIP telephony and isolated IP CCTV surveillance grids.',
        ],
      };

  // Block 3: Scope Included vs Not Included
  const includedScopeAr = [
    ...(service.features || []),
    'المعاينة الفنية المبدئية وتوثيق المخطط الهندسي (As-Built Documentation).',
    'إعداد بيئة التشغيل والاختبار الوظيفي والأمني قبل الإطلاق الفعلي.',
    'تسليم كافة بيانات الدخول والصلاحيات الإدارية الكاملة للعميل.',
  ];
  const includedScopeEn = [
    ...(service.featuresEn || []),
    'Initial technical discovery and As-Built architecture documentation.',
    'Staging configuration, functional verification, and security hardening prior to go-live.',
    'Full handover of administrative credentials and configuration documentation.',
  ];

  const excludedScopeAr = [
    'رسوم تراخيص البرمجيات التجارية المملوكة لأطراف ثالثة (مثل تراخيص Windows Server أو اشتراكات FortiGuard السنوية) ما لم تُدرج صراحة في عرض السعر.',
    'الأعمال المدنية والإنشائية وتكسير الحوائط أو تأسيس شبكات الكهرباء الرئيسية والمولدات.',
    'إدارة الأنظمة المستمرة 24/7 بعد انتهاء فترة ضمان التسليم ما لم يتم التعاقد على عقد صيانة ودعم دوري (SLA / ITaaS).',
  ];
  const excludedScopeEn = [
    'Third-party commercial software license fees (e.g., Microsoft Windows Server CALs or annual FortiGuard subscriptions) unless explicitly itemized in the quotation.',
    'Civil construction, masonry trenching, or primary electrical generator and UPS wiring.',
    'Ongoing 24/7 managed administration beyond the handover warranty window unless covered by an active SLA / ITaaS agreement.',
  ];

  // Block 4: How Delivery Works
  const deliverySteps = [
    {
      step: '01',
      titleAr: 'التدقيق الفني وحصر المتطلبات',
      titleEn: 'Technical Discovery & Sizing',
      durationAr: '1 – 2 يوم عمل',
      durationEn: '1 – 2 Business Days',
      descAr:
        'فحص البيئة الحالية، حصر أعداد المستخدمين والأحمال، وتحديد المواصفات الفنية الدقيقة دون مبالغة في التكاليف.',
      descEn:
        'Auditing current systems, sizing user concurrency and workloads, and defining exact technical specifications.',
    },
    {
      step: '02',
      titleAr: 'التجهيز في بيئة موازية',
      titleEn: 'Staging & Pre-Configuration',
      durationAr: '2 – 5 أيام عمل',
      durationEn: '2 – 5 Business Days',
      descAr:
        'إعداد الخوادم أو الشبكات أو الأنظمة وتطبيق سياسات الحماية والنسخ الاحتياطي في بيئة اختبار معزولة.',
      descEn:
        'Provisioning servers, network policies, or software modules and validating backups in an isolated staging setup.',
    },
    {
      step: '03',
      titleAr: 'النقل والتحويل الآمن',
      titleEn: 'Scheduled Cutover & QA',
      durationAr: '1 – 2 يوم عمل',
      durationEn: '1 – 2 Business Days',
      descAr:
        'تنفيذ التحويل النهائي خارج أوقات الذروة التشغيلية مع وجود خطة تراجع مختبرة والتحقق من استقرار الأداء.',
      descEn:
        'Executing production cutover during off-peak hours with a verified rollback plan and end-to-end validation.',
    },
    {
      step: '04',
      titleAr: 'التوثيق والتسليم النهائي',
      titleEn: 'Documentation & Handover',
      durationAr: 'يوم عمل واحد',
      durationEn: '1 Business Day',
      descAr:
        'تسليم وثيقة الإعدادات الكاملة، بيانات الإدارة، وتدريب الفريق المسؤول مع بدء سريان ضمان التشغيل.',
      descEn:
        'Delivering full configuration runbooks, admin credentials, and team onboarding alongside active SLA coverage.',
    },
  ];

  // Block 5: Deliverables
  const deliverablesList = [
    {
      ar: 'وثيقة المعمارية والإعدادات المنفذة (As-Built Topology & Configuration Runbook).',
      en: 'As-Built Network/System Topology & Configuration Runbook.',
    },
    {
      ar: 'تقرير الفحص والاعتماد الفني بعد الاختبار (QA & Security Verification Report).',
      en: 'Post-deployment QA & Security Verification Checklist.',
    },
    {
      ar: 'ملف مشفر ببيانات الدخول والصلاحيات الإدارية (Admin Credentials Vault).',
      en: 'Encrypted Administrative Credentials & Access Matrix Handover.',
    },
    {
      ar: 'دليل إجراءات النسخ الاحتياطي واستعادة التشغيل (Backup & Disaster Recovery Playbook).',
      en: 'Scheduled Backup Verification & Disaster Recovery Playbook.',
    },
  ];

  // Block 6: SLA & Support Terms
  const slaTerms = [
    {
      labelAr: 'توافر البنية السحابية',
      labelEn: 'Cloud Uptime Target',
      valueAr: 'حتى 99.99% للخوادم الافتراضية والمخصصة وفق خطة التعاقد',
      valueEn: 'Up to 99.99% for Cloud VPS & Dedicated tiers per contracted plan',
    },
    {
      labelAr: 'قنوات الدعم والتصعيد',
      labelEn: 'Support & Escalation Channels',
      valueAr: 'نظام تذاكر هندسي مسجّل + قناة طوارئ مباشرة للحالات الحرجة',
      valueEn: 'Tracked engineering ticket desk + direct emergency escalation line',
    },
    {
      labelAr: 'فترة الضمان بعد التسليم',
      labelEn: 'Post-Handover Warranty',
      valueAr: 'متابعة استقرار مجانية بعد الإطلاق مع إمكانية التعاقد على إدارة سنوية (ITaaS)',
      valueEn: 'Post-launch stabilization coverage with optional annual ITaaS management',
    },
  ];

  // Block 7: Technology & Specs
  const techSpecs = isCloud
    ? ['KVM Kernel Virtualization', 'NVMe Enterprise Storage', 'Linux (Ubuntu / AlmaLinux)', 'Windows Server RDP', 'Automated Snapshots', 'IPv4 / IPv6 Routing']
    : isSecurity
    ? ['Fortinet / Sophos NGFW', '802.1Q VLAN Segmentation', 'SPF / DKIM 2048-bit / DMARC', '3-2-1 Immutable Backups', 'IPsec / WireGuard VPN', 'SIEM Log Correlation']
    : isSoftware
    ? ['React & TypeScript', 'Node.js / PostgreSQL', 'Egyptian ETA E-Invoicing SDK', 'Role-Based Access (RBAC)', 'REST API & Webhooks', 'Automated Load Testing']
    : ['Cat6A / Fiber Optic Cabling', 'Active Directory & DHCP/DNS', 'Managed Gigabit PoE Switches', 'IP CCTV & NVR Storage', 'VoIP IP-PBX & SIP Trunking', 'Enterprise Wi-Fi Mesh'];

  // Block 8: What Drives the Price
  const priceDrivers = [
    {
      ar: 'عدد المستخدمين المتزامنين أو نقاط الشبكة والأجهزة المراد ربطها.',
      en: 'Number of concurrent users, physical network drops, or endpoints.',
    },
    {
      ar: 'حجم قواعد البيانات وسعات التخزين (NVMe) ودورية النسخ الاحتياطي المطلوبة.',
      en: 'Database volume, NVMe storage capacity, and backup retention frequency.',
    },
    {
      ar: 'مستوى الاعتمادية المطلوب (خادم مفرد مقابل بيئة مزدوجة عالية التوافرية HA).',
      en: 'Resilience architecture (single instance vs. High-Availability failover cluster).',
    },
    {
      ar: 'نطاق عقد مستوى الخدمة والدعم الفني بعد التسليم (ساعات العمل الرسمية مقابل تغطية 24/7).',
      en: 'SLA support coverage window (standard business hours vs. 24/7 engineering coverage).',
    },
  ];

  // Block 9: Related Case Study
  const relatedCaseId = isCloud
    ? 'case-2'
    : isSecurity
    ? 'case-1'
    : isSoftware
    ? 'case-11'
    : 'case-10';
  const relatedCase = PROJECTS.find((p) => p.id === relatedCaseId) || PROJECTS[0];

  // Block 10: FAQs (Real objections)
  const serviceFaqs = [
    {
      qAr: 'هل يتطلب تنفيذ هذه الخدمة إيقاف العمل أو تعطيل الموظفين؟',
      qEn: 'Does deploying this service require operational downtime for our staff?',
      aAr: 'لا؛ نقوم ببناء وتجهيز البيئة الجديدة واختبارها بشكل موازٍ أثناء ساعات العمل العادية، ويتم التحويل النهائي خارج أوقات الذروة مع وجود خطة تراجع جاهزة.',
      aEn: 'No. We build, configure, and validate the new environment in parallel during normal hours, executing final cutover outside peak business hours with a tested rollback plan.',
    },
    {
      qAr: 'من يمتلك بيانات الدخول والكود المصدري أو إعدادات الخوادم بعد التسليم؟',
      qEn: 'Who owns the administrative credentials, data, and configurations after handover?',
      aAr: 'يمتلك العميل كامل السيادة على بياناته وأسماء النطاقات وصلاحيات الجذر (Root / Domain Admin)، ونسلّم وثيقة إعدادات مفصلة لاستقلال التشغيل دون احتكار.',
      aEn: 'You retain full ownership of your data, domain names, and root/domain administrator credentials. We deliver complete As-Built documentation so you are never locked in.',
    },
    {
      qAr: 'هل يتم إصدار فاتورة ضريبية رسمية وعقد مستوى خدمة (SLA)؟',
      qEn: 'Do you provide an official Egyptian tax invoice and a formal SLA contract?',
      aAr: 'نعم، تشمل التعاقدات المؤسسية عقداً رسمياً يوضح النطاق والجدول الزمني ومستوى الخدمة (SLA)، مع إصدار فاتورة ضريبية إلكترونية رسمية.',
      aEn: 'Yes. All corporate engagements include a formal contract specifying scope, timeline, and SLA response commitments, accompanied by an official Egyptian electronic tax invoice.',
    },
  ];

  return (
    <section data-testid="service-detail-view" className="section-spacing bg-page-band">
      <div className="container-nuzul">
        {/* Breadcrumb / Back Navigation */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 min-h-[44px] text-sm font-semibold text-accent hover:underline"
          >
            {lang === 'ar' ? 'العودة إلى جميع الخدمات' : 'Back to all services'}
          </Link>
          <span
            dir="ltr"
            className="ltr-num text-xs font-semibold text-muted px-3 py-1 rounded-md bg-surface-2 border border-token"
          >
            {service.id}
          </span>
        </div>

        {/* Top Hero / Block 1: What It Is + Engineering Proposal Summary */}
        <div className="clean-card p-6 sm:p-8 md:p-10 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 space-y-5">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="px-3 py-1 rounded-md bg-accent-tint text-accent text-xs font-bold border border-token whitespace-nowrap">
                  {lang === 'ar' ? service.category : categoryLabelEn}
                </span>
                <span className="px-3 py-1 rounded-md bg-surface-2 text-muted text-xs font-medium border border-token whitespace-nowrap">
                  {lang === 'ar' ? 'توصيف هندسي قياسي' : 'Standard Engineering Specification'}
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-main leading-tight">
                {lang === 'ar' ? service.title : service.titleEn}
              </h1>

              {/* 2-line concise definition */}
              <p
                data-testid="service-what-it-is"
                className="text-muted text-base md:text-lg leading-relaxed max-w-3xl"
              >
                {lang === 'ar' ? service.shortDesc : service.shortDescEn}
              </p>

              {/* Verified field application note from rawService if available */}
              {rawService && (
                <div className="p-4 rounded-xl bg-surface-2 border border-token text-xs sm:text-sm text-muted leading-relaxed">
                  <strong className="text-main font-bold block mb-1">
                    {lang === 'ar' ? 'تطبيق عملي من واقع المشاريع:' : 'Practical Field Application:'}
                  </strong>
                  {lang === 'ar' ? rawService.useCaseStory_ar : rawService.useCaseStory_en}
                </div>
              )}
            </div>

            {/* Technical Scope & Quotation Summary Card */}
            <div className="lg:col-span-4">
              <div className="p-6 rounded-xl bg-surface-2 border border-token space-y-5">
                <div>
                  <div className="text-xs font-semibold text-muted mb-1">
                    {lang === 'ar' ? 'آلية التسعير والتنفيذ' : 'Quotation & Execution Model'}
                  </div>
                  <div className="text-xl font-bold text-main">
                    {lang === 'ar'
                      ? 'مقايسة هندسية حسب النطاق'
                      : 'Scoped Engineering Proposal'}
                  </div>
                  <div className="text-xs text-muted mt-1.5 leading-relaxed">
                    {lang === 'ar'
                      ? 'يُحدد العرض المالي والجدول الزمني كتابةً بعد المعاينة الفنية وحصر عدد المستخدمين والأصول.'
                      : 'Fixed pricing and timeline are documented in writing after technical audit and workload sizing.'}
                  </div>
                </div>

                <div className="pt-2 space-y-2.5">
                  <Link
                    to={`/contact?service=${service.id}`}
                    data-testid="service-primary-cta"
                    className="btn-primary w-full py-3.5 text-sm whitespace-nowrap"
                  >
                    <span>
                      {lang === 'ar' ? 'اطلب عرض سعر فني مفصل' : 'Request Technical Proposal'}
                    </span>
                    <ArrowIcon className="w-4 h-4" />
                  </Link>
                  <Link
                    to="/pricing"
                    className="btn-secondary w-full py-3 text-xs sm:text-sm whitespace-nowrap"
                  >
                    {lang === 'ar' ? 'قارن الباقات والخطط' : 'Compare Bundled Plans'}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Block 2: Who It Is For */}
        <div
          data-testid="service-who-it-is-for"
          className="clean-card p-6 sm:p-8 mb-8"
        >
          <div className="flex items-center gap-2.5 text-accent text-xs font-bold mb-2">
            <Users className="w-4 h-4" />
            <span>{lang === 'ar' ? 'الفئات المستفيدة' : 'Target Organizations'}</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-main mb-5">
            {lang === 'ar' ? 'الجهات والمنشآت المستفيدة من هذه الخدمة' : 'Target Organizations for This Service'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {(lang === 'ar' ? whoItIsFor.ar : whoItIsFor.en).map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-surface-2 border border-token flex items-start gap-3"
              >
                <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-1" />
                <p className="text-xs sm:text-sm text-main leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Block 3: Scope — Included / Not Included */}
        <div
          data-testid="service-scope-matrix"
          className="clean-card p-6 sm:p-8 mb-8"
        >
          <h2 className="text-xl sm:text-2xl font-bold text-main mb-2">
            {lang === 'ar'
              ? 'نطاق التنفيذ والمخرجات الهندسية'
              : 'Engineering Scope & Deliverables'}
          </h2>
          <p className="text-xs sm:text-sm text-muted mb-6">
            {lang === 'ar'
              ? 'توصيف واضح لما يشمله التعاقد القياسي وما يتم تسعيره بشكل منفصل لضمان شفافية التكلفة.'
              : 'Clear boundary between standard included engineering work and separately quoted items.'}
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Included */}
            <div className="p-5 sm:p-6 rounded-xl bg-page border border-token">
              <div className="flex items-center gap-2 text-sm font-bold text-main mb-4 pb-3 border-b border-token">
                <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                <span>
                  {lang === 'ar'
                    ? 'ما يشمله النطاق القياسي (Included)'
                    : 'Included in Standard Scope'}
                </span>
              </div>
              <ul className="space-y-3">
                {(lang === 'ar' ? includedScopeAr : includedScopeEn).map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-main">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Not Included */}
            <div className="p-5 sm:p-6 rounded-xl bg-page border border-token">
              <div className="flex items-center gap-2 text-sm font-bold text-main mb-4 pb-3 border-b border-token">
                <XCircle className="w-4 h-4 text-muted shrink-0" />
                <span>
                  {lang === 'ar'
                    ? 'ما لا يشمله النطاق الافتراضي (Not Included)'
                    : 'Not Included by Default (Quoted Separately)'}
                </span>
              </div>
              <ul className="space-y-3">
                {(lang === 'ar' ? excludedScopeAr : excludedScopeEn).map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-muted">
                    <XCircle className="w-4 h-4 text-muted shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Block 4: How Delivery Works */}
        <div
          data-testid="service-how-delivery-works"
          className="clean-card p-6 sm:p-8 mb-8"
        >
          <h2 className="text-xl sm:text-2xl font-bold text-main mb-6">
            {lang === 'ar'
              ? 'آلية التنفيذ والتسليم الهندسي (4 مراحل)'
              : 'How Delivery Works (4 Engineering Stages)'}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {deliverySteps.map((stepItem) => (
              <div
                key={stepItem.step}
                className="p-5 rounded-xl bg-surface-2 border border-token flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="w-9 h-9 rounded-lg bg-accent-tint text-accent font-bold text-sm flex items-center justify-center ltr-num">
                      {stepItem.step}
                    </span>
                    <span className="text-[11px] font-semibold text-muted px-2.5 py-1 rounded bg-surface border border-token">
                      {lang === 'ar' ? stepItem.durationAr : stepItem.durationEn}
                    </span>
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-main mb-2">
                    {lang === 'ar' ? stepItem.titleAr : stepItem.titleEn}
                  </h3>
                  <p className="text-xs text-muted leading-relaxed">
                    {lang === 'ar' ? stepItem.descAr : stepItem.descEn}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Block 5 & Block 6: Deliverables + SLA & Support Terms */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Block 5: Deliverables */}
          <div
            data-testid="service-deliverables"
            className="clean-card p-6 sm:p-8"
          >
            <div className="flex items-center gap-2 text-accent text-xs font-bold mb-2">
              <FileCheck className="w-4 h-4" />
              <span>{lang === 'ar' ? 'وثائق ومحاضر التسليم' : 'Handover Artifacts'}</span>
            </div>
            <h2 className="text-xl font-bold text-main mb-5">
              {lang === 'ar'
                ? 'المخرجات الهندسية التي يتسلمها العميل'
                : 'Engineering Deliverables You Receive'}
            </h2>
            <ul className="space-y-3.5">
              {deliverablesList.map((item, idx) => (
                <li
                  key={idx}
                  className="p-3.5 rounded-xl bg-surface-2 border border-token flex items-start gap-3 text-xs sm:text-sm text-main"
                >
                  <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <span>{lang === 'ar' ? item.ar : item.en}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Block 6: SLA and Support Terms */}
          <div
            data-testid="service-sla-terms"
            className="clean-card p-6 sm:p-8"
          >
            <div className="flex items-center gap-2 text-accent text-xs font-bold mb-2">
              <ShieldCheck className="w-4 h-4" />
              <span>{lang === 'ar' ? 'اتفاقية مستوى الخدمة' : 'Service Level Agreement'}</span>
            </div>
            <h2 className="text-xl font-bold text-main mb-5">
              {lang === 'ar'
                ? 'شروط مستوى الخدمة والدعم الفني (SLA)'
                : 'SLA & Post-Deployment Support Terms'}
            </h2>
            <div className="space-y-3.5">
              {slaTerms.map((term, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-surface-2 border border-token"
                >
                  <div className="text-xs font-bold text-accent mb-1">
                    {lang === 'ar' ? term.labelAr : term.labelEn}
                  </div>
                  <div className="text-xs sm:text-sm text-main leading-relaxed">
                    {lang === 'ar' ? term.valueAr : term.valueEn}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Block 7 & Block 8: Technology and Specs + What Drives the Price */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Block 7: Technology & Specs */}
          <div
            data-testid="service-tech-specs"
            className="clean-card p-6 sm:p-8"
          >
            <div className="flex items-center gap-2 text-accent text-xs font-bold mb-2">
              <Cpu className="w-4 h-4" />
              <span>{lang === 'ar' ? 'المكدس التقني' : 'Verified Stack'}</span>
            </div>
            <h2 className="text-xl font-bold text-main mb-5">
              {lang === 'ar'
                ? 'التقنيات والمواصفات القياسية'
                : 'Technology & Technical Specifications'}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {techSpecs.map((spec, idx) => (
                <div
                  key={idx}
                  dir="ltr"
                  className="ltr-num p-3 rounded-xl bg-surface-2 border border-token text-xs font-bold text-main flex items-center gap-2"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0" />
                  <span>{spec}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Block 8: What Drives the Price */}
          <div
            data-testid="service-price-drivers"
            className="clean-card p-6 sm:p-8"
          >
            <div className="flex items-center gap-2 text-accent text-xs font-bold mb-2">
              <Sliders className="w-4 h-4" />
              <span>{lang === 'ar' ? 'محددات التسعير' : 'Pricing Factors'}</span>
            </div>
            <h2 className="text-xl font-bold text-main mb-5">
              {lang === 'ar'
                ? 'العوامل المحددة للتكلفة النهائية'
                : 'Factors Determining Final Cost'}
            </h2>
            <ul className="space-y-3">
              {priceDrivers.map((driver, idx) => (
                <li
                  key={idx}
                  className="p-3 rounded-xl bg-surface-2 border border-token flex items-start gap-2.5 text-xs sm:text-sm text-muted"
                >
                  <span className="text-accent font-bold ltr-num">{idx + 1}.</span>
                  <span className="text-main leading-relaxed">
                    {lang === 'ar' ? driver.ar : driver.en}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Block 9: Related Case Study */}
        {relatedCase && (
          <div
            data-testid="service-related-case-study"
            className="clean-card overflow-hidden mb-8"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-5 bg-surface-2 border-b lg:border-b-0 lg:border-e border-token flex items-center justify-center p-4">
                <div className="w-full">
                  <ArchitectureDiagram caseId={relatedCase.id} variant="card" />
                </div>
              </div>
              <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 text-accent text-xs font-bold mb-2">
                    <FolderGit2 className="w-4 h-4" />
                    <span>
                      {lang === 'ar'
                        ? 'دراسة حالة مرتبطة من سجل مشاريعنا'
                        : 'Related Case Study from Our Portfolio'}
                    </span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-main mb-3">
                    {lang === 'ar' ? relatedCase.title : relatedCase.titleEn}
                  </h2>
                  <p className="text-xs sm:text-sm text-muted leading-relaxed mb-4">
                    <strong className="text-main">
                      {lang === 'ar' ? 'التحدي: ' : 'Challenge: '}
                    </strong>
                    {lang === 'ar' ? relatedCase.challenge : relatedCase.challengeEn}
                  </p>
                  <p className="text-xs sm:text-sm text-muted leading-relaxed mb-6">
                    <strong className="text-main">
                      {lang === 'ar' ? 'الحل المنفذ: ' : 'Delivered Solution: '}
                    </strong>
                    {lang === 'ar' ? relatedCase.solution : relatedCase.solutionEn}
                  </p>
                </div>

                <div className="pt-4 border-t border-token flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    {relatedCase.technologies.slice(0, 3).map((tech, idx) => (
                      <span
                        key={idx}
                        dir="ltr"
                        className="ltr-num px-2.5 py-1 rounded bg-page border border-token text-[11px] font-medium text-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Link
                    to={`/case-studies/${relatedCase.id}`}
                    className="inline-flex items-center gap-2 min-h-[44px] text-xs sm:text-sm font-bold text-accent hover:underline whitespace-nowrap"
                  >
                    <span>
                      {lang === 'ar'
                        ? 'استعرض دراسة الحالة الكاملة'
                        : 'Read Full Case Study'}
                    </span>
                    <ArrowIcon className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Block 10: FAQ (Real Objections) */}
        <div
          data-testid="service-faq"
          className="clean-card p-6 sm:p-8 mb-8"
        >
          <div className="flex items-center gap-2 text-accent text-xs font-bold mb-2">
            <HelpCircle className="w-4 h-4" />
            <span>{lang === 'ar' ? 'إجابات هندسية وتجارية' : 'Technical & Commercial FAQ'}</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-main mb-6">
            {lang === 'ar'
              ? 'الأسئلة الشائعة حول تنفيذ الخدمة'
              : 'Frequently Asked Questions'}
          </h2>
          <div className="space-y-3">
            {serviceFaqs.map((faq, idx) => {
              const isOpen = openFaqIdx === idx;
              return (
                <div
                  key={idx}
                  className="rounded-xl bg-surface-2 border border-token overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIdx(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                    className="w-full min-h-[48px] px-5 py-4 text-start flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-main hover-surface-2 transition-colors"
                  >
                    <span>{lang === 'ar' ? faq.qAr : faq.qEn}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-muted shrink-0 transition-transform ${
                        isOpen ? 'rotate-180 text-accent' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-4 pt-1 text-xs sm:text-sm text-muted leading-relaxed border-t border-token">
                      {lang === 'ar' ? faq.aAr : faq.aEn}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Block 11: Final Service CTA */}
        <div
          data-testid="service-bottom-cta"
          className="clean-card p-6 sm:p-10 border border-token flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        >
          <div className="max-w-2xl">
            <h2 className="text-xl sm:text-2xl font-bold text-main mb-2">
              {lang === 'ar'
                ? 'اطلب معاينة فنية أو عرض سعر مخصص لمنشأتك'
                : 'Request a Technical Assessment or Custom Proposal'}
            </h2>
            <p className="text-xs sm:text-sm text-muted leading-relaxed">
              {lang === 'ar'
                ? 'تواصل مباشرة مع مهندسي نزول تك لمناقشة متطلباتك وتحديد النطاق الزمني والمالي بدقة.'
                : 'Speak directly with Nuzul Tech engineers to scope your environment, timeline, and budget.'}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              to={`/contact?service=${service.id}`}
              className="btn-primary px-6 py-3.5 text-sm whitespace-nowrap"
            >
              <span>{lang === 'ar' ? 'احجز استشارة هندسية' : 'Book Engineering Consultation'}</span>
              <ArrowIcon className="w-4 h-4" />
            </Link>
            <Link
              to="/services"
              className="btn-secondary px-5 py-3.5 text-sm whitespace-nowrap"
            >
              {lang === 'ar' ? 'تصفح بقية الخدمات' : 'Browse All Services'}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
