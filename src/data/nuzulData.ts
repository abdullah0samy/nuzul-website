import {
  ServiceItem,
  EnterprisePackage,
  HostingPlan,
  CaseStudy,
  Testimonial,
  BlogPost,
} from '../types';

export const NUZUL_CONTACT = {
  phone: '+20 114 0565057 / +20 101 1678830',
  phone1: '+20 114 0565057',
  phone2: '+20 101 1678830',
  rawPhone: '+201140565057',
  rawPhone1: '+201140565057',
  rawPhone2: '+201011678830',
  whatsappUrl: 'https://wa.me/201140565057?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%20%D9%86%D9%8F%D8%B2%D9%88%D9%84%20%D8%AA%D9%90%D9%83%D8%8C%20%D8%A3%D8%B1%D8%BA%D8%A8%20%D9%81%D9%8A%20%D8%A7%D8%B3%D8%AA%D8%B4%D8%A7%D8%B1%D8%A9%20%D8%AA%D9%82%D9%86%D9%8A%D8%A9%20%D9%84%D8%A3%D8%B9%D9%85%D8%A7%D9%84%D9%8A',
  whatsappUrl2: 'https://wa.me/201011678830?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%20%D9%86%D9%8F%D8%B2%D9%88%D9%84%20%D8%AA%D9%90%D9%83%D8%8C%20%D8%A3%D8%B1%D8%BA%D8%A8%20%D9%81%D9%8A%20%D8%A7%D8%B3%D8%AA%D8%B4%D8%A7%D8%B1%D8%A9%20%D8%AA%D9%82%D9%86%D9%8A%D8%A9%20%D9%84%D8%A3%D8%B9%D9%85%D8%A7%D9%84%D9%8A',
  email: 'info@nuzultech.com',
  website: 'https://www.nuzultech.com/',
  linkedin: 'https://www.linkedin.com/company/nuzultech/',
  locationAr: 'القاهرة، مصر — المقر الرئيسي',
  locationEn: 'Cairo, Egypt — HQ',
  instapayPhone: '01004727460',
  instapayAddress: 'abdullah0samy@instapay',
  instapayUrl: 'https://ipn.eg/S/abdullah0samy/instapay/7WJvws',
  vodafoneCash: '01004727460',
};

export const NUZUL_SERVICES: ServiceItem[] = [
  // ==========================================
  // 1. Software & Digital Solutions (البرمجيات والحلول الرقمية)
  // ==========================================
  {
    id: 1,
    category_key: 'software',
    category_ar: 'البرمجيات والحلول الرقمية',
    category_en: 'Software & Digital Solutions',
    title_ar: 'البوابات والمنصات الرقمية',
    title_en: 'Enterprise Web Portals',
    description_ar:
      'بناء بوابات رقمية تفاعلية فائقة السرعة تعزز موثوقية علامتك التجارية وتضاعف طلبات عروض الأسعار وتواصل العملاء.',
    description_en:
      'High-performance corporate portals engineered to project market authority, engage decision-makers, and drive business inquiries.',
    icon: 'Code',
    useCaseStory_ar:
      'تطوير بوابة إلكترونية تفاعلية لشركة استثمارية ساهمت في مضاعفة طلبات عروض الأسعار بنسبة 140%.',
    useCaseStory_en:
      'Engineered an enterprise corporate portal that resulted in a 140% surge in qualified client RFQs.',
    features_ar: ['تصاميم تفاعلية وسريعة للشاشات والموبايل', 'تهيئة كاملة لمحركات البحث لزيادة الوصول', 'لوحة تحكم إدارية سهلة لفرق العمل'],
    features_en: ['Responsive mobile-first design', 'Full SEO architecture', 'Intuitive content management dashboard'],
  },
  {
    id: 2,
    category_key: 'software',
    category_ar: 'البرمجيات والحلول الرقمية',
    category_en: 'Software & Digital Solutions',
    title_ar: 'تطبيقات الهواتف الذكية',
    title_en: 'Mobile Applications',
    description_ar:
      'تطبيقات جوال مخصصة تضع خدماتك بين يدي عملائك على مدار الساعة مع دفع فوري يرفع معدلات المبيعات والولاء.',
    description_en:
      'Bespoke mobile apps delivering intuitive customer journeys, automated notifications, and frictionless in-app checkout.',
    icon: 'Smartphone',
    useCaseStory_ar:
      'تطبيق جوال لمعامل تحاليل طبية لحجز الزيارات المنزلية وعرض النتائج لحظياً مع الدفع الفوري.',
    useCaseStory_en:
      'Developed a clinical mobile app for instant lab report delivery, home visit bookings, and instant checkout.',
    features_ar: ['تطبيقات متكاملة لأنظمة iOS وAndroid', 'إشعارات وتنبيهات فورية تزيد التفاعل', 'ربط مباشر وفوري مع قواعد البيانات المركزية'],
    features_en: ['Native & cross-platform iOS & Android', 'Real-time push notifications', 'Seamless database integration'],
  },
  {
    id: 3,
    category_key: 'software',
    category_ar: 'البرمجيات والحلول الرقمية',
    category_en: 'Software & Digital Solutions',
    title_ar: 'منصات التجارة والمبيعات الرقمية',
    title_en: 'E-Commerce & Digital Commerce',
    description_ar:
      'منصات بيع رقمية متكاملة تدمج بوابات الدفع والشحن المحلي وأتمتة المخازن لرفع حجم المبيعات والأرباح.',
    description_en:
      'Scalable digital storefronts integrated with local payment options, live couriers, and automated inventory sync to maximize sales.',
    icon: 'ShoppingBag',
    useCaseStory_ar:
      'إنشاء متجر تجزئة متكامل في مصر مربوط مع بوابات الدفع الإلكتروني وإدارة المخازن والشحن آلياً.',
    useCaseStory_en:
      'Architected a high-converting online store with local Egyptian payment integrations and automated shipping.',
    features_ar: ['بوابات دفع إلكتروني متعددة وآمنة', 'إدارة المخزون وتتبع الشحنات آلياً', 'تجربة شراء سريعة ترفع نسب إتمام الطلبات'],
    features_en: ['Multiple payment gateways', 'Live inventory & shipment tracking', 'High-converting frictionless checkout'],
  },
  {
    id: 4,
    category_key: 'software',
    category_ar: 'البرمجيات والحلول الرقمية',
    category_en: 'Software & Digital Solutions',
    title_ar: 'هندسة تجربة المستخدم والواجهات',
    title_en: 'UI/UX Product Design',
    description_ar:
      'تصميم مسارات عمل وواجهات رقمية سهلة الاستخدام تختصر أوقات إدخال البيانات بنسبة 50% وتضاعف معدلات الإنجاز.',
    description_en:
      'Intuitive user experience engineering eliminating interface friction, halving staff onboarding time, and accelerating task completion.',
    icon: 'Layout',
    useCaseStory_ar:
      'إعادة تصميم تجربة المستخدم لنظام حجز طبي، مما خفض زمن انتظار المراجعين بنسبة 50% وسرّع إدخال البيانات.',
    useCaseStory_en:
      'Redesigned clinic check-in workflows, slashing patient wait times by 50% and simplifying receptionist tasks.',
    features_ar: ['مسارات عمل سلسة تمنع أخطاء الموظفين', 'نماذج تفاعلية عالية الدقة وسهلة الاستخدام', 'هوية بصرية موحدة تعكس احترافية المؤسسة'],
    features_en: ['Frictionless workflow architecture', 'Interactive high-fidelity prototypes', 'Consistent brand design system'],
  },
  {
    id: 5,
    category_key: 'software',
    category_ar: 'البرمجيات والحلول الرقمية',
    category_en: 'Software & Digital Solutions',
    title_ar: 'المنظومات الإدارية والمالية (ERP)',
    title_en: 'Enterprise ERP & Management',
    description_ar:
      'أتمتة شاملة للمبيعات والمخازن والحسابات مع الربط التلقائي بالفاتورة الإلكترونية لخفض التكاليف وضمان الامتثال.',
    description_en:
      'Centralized operations suite managing billing, inventory, and supply chain with seamless Egyptian ETA e-invoicing compliance.',
    icon: 'Layers',
    useCaseStory_ar:
      'تطبيق نظام ERP مخصص لربط السجلات الطبية، الفواتير، والمخازن مع منظومة الفاتورة الإلكترونية آلياً.',
    useCaseStory_en:
      'Deployed an integrated ERP suite uniting operations, billing, and ETA e-invoicing for healthcare enterprises.',
    features_ar: ['ربط آلي مع الفاتورة والإيصال الإلكتروني', 'إدارة شاملة للمخازن والمشتريات والمبيعات', 'صلاحيات وصول دقيقة ومحمية'],
    features_en: ['Egyptian ETA e-invoicing integration', 'End-to-end supply chain & sales management', 'Role-based access control'],
  },
  {
    id: 6,
    category_key: 'software',
    category_ar: 'البرمجيات والحلول الرقمية',
    category_en: 'Software & Digital Solutions',
    title_ar: 'فحص واعتماد جودة المنظومات (QA)',
    title_en: 'Software QA & Acceptance Testing',
    description_ar:
      'تدقيق مستقل وشامل للمنظومات وتطبيقات الموبايل قبل الاستلام من المطورين لحماية استثمارك وتفادي الخسائر.',
    description_en:
      'Independent functional, performance, and security testing validating software systems prior to vendor acceptance and rollout.',
    icon: 'CheckCircle2',
    useCaseStory_ar:
      'فحص واختبار شامل واستلام منصة وتطبيقات OmnixTrack CRM للشركات والصيدليات والمصانع وشركات الشحن، والتأكد من كفاءة الويب والموبايل والمكالمات.',
    useCaseStory_en:
      'Executed turnkey QA acceptance testing for OmnixTrack CRM web system, mobile apps, and WebRTC call center infrastructure with zero critical bugs.',
    features_ar: ['اختبارات الوظائف والأداء وقوة التحمل تحت الضغط', 'فحص شامل لتطبيقات الويب والموبايل والاتصالات', 'تقارير فنية تفصيلية لاعتماد الاستلام البرمجي الرسمي'],
    features_en: ['Functional, UI/UX & load stress testing', 'Web, mobile app, and VoIP call system QA', 'Detailed engineering acceptance reports'],
  },

  // ==========================================
  // 2. Infrastructure & Cloud (البنية التحتية والسحابية)
  // ==========================================
  {
    id: 7,
    category_key: 'infra_cloud',
    category_ar: 'البنية التحتية والسحابية',
    category_en: 'Infrastructure & Cloud',
    title_ar: 'السحابة الخاصة والسيادة الرقمية',
    title_en: 'Private Cloud & Data Sovereignty',
    description_ar:
      'سحابة خاصة داخل منشأتك تمنحك السيطرة الكاملة على بياناتك مع سرعة فائقة وتوفير 60% من تكاليف الاستضافة الدولية.',
    description_en:
      'Dedicated on-premise private clouds delivering complete data residency, instant LAN speeds, and immunity from FX currency spikes.',
    icon: 'Cloud',
    useCaseStory_ar:
      'تأسيس بنية سحابة خاصة معزولة لمستشفى ومجمع مراكز طبية لربط السجلات الطبية وقواعد البيانات المركزية بدون أي مشاركة موارد.',
    useCaseStory_en:
      'Engineered an isolated on-premise private cloud cluster uniting medical records and hospital databases with single-tenant sovereignty.',
    features_ar: ['سيادة كاملة على البيانات داخل مقر المنشأة', 'جاهزية واستمرارية عمل مزدوجة بدون انقطاع', 'أداء فائق بدون الاعتماد على سرعة الإنترنت الخارجي'],
    features_en: ['100% on-premise sovereign data residency', 'High-Availability cluster redundancy', 'Zero external dependency with local speed'],
  },
  {
    id: 8,
    category_key: 'infra_cloud',
    category_ar: 'البنية التحتية والسحابية',
    category_en: 'Infrastructure & Cloud',
    title_ar: 'المحاكاة الافتراضية للأنظمة (VDI)',
    title_en: 'Enterprise Virtualization & VDI',
    description_ar:
      'دمج الخوادم المتفرقة في بيئة مركزية موحدة تخفض تكاليف شراء العتاد والطاقة بنسبة 50% مع استمرارية فورية للأعمال.',
    description_en:
      'Consolidating disparate physical hardware into unified virtualization clusters, cutting equipment and electricity costs by 50%.',
    icon: 'Layers',
    useCaseStory_ar:
      'دمج 18 خادماً فيزيائياً لمستشفى في بيئة افتراضية متكاملة فائقة الأداء مع تحويل تلقائي فوري عند تعطل أي عتاد.',
    useCaseStory_en:
      'Consolidated 18 physical hospital servers into a resilient virtualization cluster with automated instant hardware failover.',
    features_ar: ['استمرارية عمل فورية وتلقائية عند تعطل أي جهاز', 'إدارة مركزية لأسطح المكتب الافتراضية للموظفين', 'تخفيض تكاليف الصيانة وقطع الغيار بنسبة 50%'],
    features_en: ['Instant hardware failover protection', 'Centralized Virtual Desktop (VDI) management', '50% reduction in hardware footprint and power'],
  },
  {
    id: 9,
    category_key: 'infra_cloud',
    category_ar: 'البنية التحتية والسحابية',
    category_en: 'Infrastructure & Cloud',
    title_ar: 'أتمتة التوسع السحابي والحاويات',
    title_en: 'Containers & Elastic Scaling',
    description_ar:
      'تشغيل المنظومات بمرونة تتيح التوسع التلقائي في مواسم الذروة دون زيادة تكاليف السيرفرات أو توقف الخدمة.',
    description_en:
      'Packaging systems for automated elastic scaling during traffic spikes, ensuring uninterrupted uptime and optimal compute cost.',
    icon: 'Cpu',
    useCaseStory_ar:
      'تحويل منصة رعاية صحية وتذاكر إلى خدمات سحابية معزولة لضمان سرعة الاستجابة تحت ضغط آلاف المعاملات اليومية.',
    useCaseStory_en:
      'Architected microservices and container scaling for high-volume clinical ticketing with sub-second response times.',
    features_ar: ['تحديث وتوسيع المنظومة بصفر توقف عن العمل', 'توسع تلقائي للموارد أثناء فترات ذروة الإقبال', 'عزل أمني تام واستغلال أمثل لموارد السيرفر'],
    features_en: ['Zero-downtime rolling updates', 'Automated elastic resource scaling', 'Peak resource efficiency and workload isolation'],
  },
  {
    id: 10,
    category_key: 'infra_cloud',
    category_ar: 'البنية التحتية والسحابية',
    category_en: 'Infrastructure & Cloud',
    title_ar: 'الخوادم السحابية المدارة',
    title_en: 'Managed Cloud Servers',
    description_ar:
      'بنية سحابية موثوقة بإدارة استباقية تضمن استمرارية أعمالك بنسبة 99.9% دون الحاجة لتحمل رواتب فريق IT داخلي.',
    description_en:
      'High-performance cloud compute with 24/7 proactive maintenance, backups, and SLAs eliminating in-house IT payroll overhead.',
    icon: 'Server',
    useCaseStory_ar:
      'إدارة بنية سحابية لمنصة تعليمية تخدم أكثر من 20,000 طالب متزامن مع استقرار كامل خلال أوقات الامتحانات.',
    useCaseStory_en:
      'Managed cloud infrastructure for an ed-tech platform supporting 20,000+ concurrent users with 100% uptime.',
    features_ar: ['إدارة ومتابعة وتحديثات وقائية مستمرة', 'نسخ احتياطي يومي مجدول ومعزول عن الأعطال', 'دعم فني واستجابة هندسية على مدار الساعة 24/7'],
    features_en: ['Proactive sysadmin maintenance', 'Automated daily isolated backups', '24/7 priority engineering support'],
  },
  {
    id: 11,
    category_key: 'infra_cloud',
    category_ar: 'البنية التحتية والسحابية',
    category_en: 'Infrastructure & Cloud',
    title_ar: 'السيرفرات السحابية المرنة (VPS)',
    title_en: 'High-Performance Cloud VPS',
    description_ar:
      'خوادم سحابية مخصصة وفائقة السرعة تمنح أعمالك الاستقلالية والمرونة التامة للتوسع الفوري بأسعار محلية مستقرة.',
    description_en:
      'Scalable cloud instances with isolated compute cores and high-speed NVMe storage designed for heavy database workloads.',
    icon: 'Terminal',
    useCaseStory_ar:
      'توفير خوادم عالية الأداء لفرق العمل لتشغيل بيئات العمل والتطبيقات المركزية بكفاءة واستقرار تام.',
    useCaseStory_en:
      'Provisioned high-frequency instances for engineering teams running mission-critical workloads with maximum agility.',
    features_ar: ['صلاحيات تحكم كاملة ومستقلة', 'أقراص تخزين فائقة السرعة مع اتصال شبكي عالي', 'مرونة الترقية والتوسع اللحظي حسب نمو النشاط'],
    features_en: ['Full sovereign control', 'High-frequency NVMe storage and fast uplink', 'Instant resource scalability'],
  },
  {
    id: 12,
    category_key: 'infra_cloud',
    category_ar: 'البنية التحتية والسحابية',
    category_en: 'Infrastructure & Cloud',
    title_ar: 'مساحات العمل السحابية الموحدة',
    title_en: 'Cloud Remote Workspaces',
    description_ar:
      'تمكين فرق العمل والمستشارين من الوصول الآمن للأنظمة المركزية من أي مكان مع سرعة عمل فائقة وحماية مطلقة للبيانات.',
    description_en:
      'Centralized, secure workspaces allowing distributed teams and auditors to collaborate on core systems with zero data leakage.',
    icon: 'Monitor',
    useCaseStory_ar:
      'توفير بيئة عمل مركزية سريعة ومحمية لـ 25 موظفاً واستشارياً للعمل عن بُعد بين فروع المؤسسة بدون أي انقطاع.',
    useCaseStory_en:
      'Enabled seamless low-latency remote desktop workspaces for 25 team members across multiple offices with zero downtime.',
    features_ar: ['وصول مشفر فائق السرعة من أي جهاز ومكان', 'حماية تامة للملفات المحاسبية والبرامج من التسريب', 'دعم فني مباشر وسرعة استجابة على مدار الساعة'],
    features_en: ['Encrypted fast access from any device', 'Centralized data asset protection', '24/7 dedicated support SLA'],
  },
  {
    id: 13,
    category_key: 'infra_cloud',
    category_ar: 'البنية التحتية والسحابية',
    category_en: 'Infrastructure & Cloud',
    title_ar: 'الخوادم المخصصة المستقلة',
    title_en: 'Dedicated Bare-Metal Servers',
    description_ar:
      'طاقة معالجة فيزيائية مستقلة بالكامل لقواعد البيانات الكبرى وأرشيف المستشفيات بأعلى أداء واستقرار تشغيلي.',
    description_en:
      'Single-tenant physical hardware delivering dedicated compute and maximum throughput for hospital archives and massive enterprise databases.',
    icon: 'HardDrive',
    useCaseStory_ar:
      'تخصيص خوادم مخصصة لمستشفى لاستضافة أرشيف الأشعة الطبية وقواعد البيانات الضخمة باستقرار تام.',
    useCaseStory_en:
      'Deployed dedicated bare-metal clusters powering hospital medical archiving with zero resource contention.',
    features_ar: ['عتاد فيزيائي مخصص بالكامل بدون مشاركة موارد', 'أقراص تخزين سريعة ومحمية بمصفوفات الأمان', 'حماية متقدمة ضد انقطاعات الخدمة وهجمات الشبكة'],
    features_en: ['100% single-tenant hardware', 'Hardware RAID NVMe storage', 'Advanced enterprise DDoS mitigation'],
  },
  {
    id: 14,
    category_key: 'infra_cloud',
    category_ar: 'البنية التحتية والسحابية',
    category_en: 'Infrastructure & Cloud',
    title_ar: 'الاستضافة السحابية للمواقع',
    title_en: 'Enterprise Cloud Web Hosting',
    description_ar:
      'استضافة آمنة وسريعة لموقع شركتك مع حماية مستمرة تضمن ظهوره الدائم أمام عملائك بنسبة جاهزية 99.9%.',
    description_en:
      'Reliable, high-speed hosting with complimentary SSL and automated maintenance ensuring your business portal is always accessible.',
    icon: 'Globe2',
    useCaseStory_ar:
      'استضافة المواقع الرسمية لعشرات المكاتب والشركات مع حماية مستمرة ونسخ احتياطي أسبوعي آلي.',
    useCaseStory_en:
      'Hosting corporate web portals with free SSL, automated backups, and 99.9% uptime reliability.',
    features_ar: ['لوحة تحكم إدارية سهلة لرفع الملفات', 'شهادات أمان رقمية مجانية ودائمة', 'نسخ احتياطي دوري لحماية بيانات الموقع'],
    features_en: ['Intuitive management dashboard', 'Free automated SSL certificates', 'Regular automated backups'],
  },
  {
    id: 15,
    category_key: 'infra_cloud',
    category_ar: 'البنية التحتية والسحابية',
    category_en: 'Infrastructure & Cloud',
    title_ar: 'تسجيل وحوكمة النطاقات',
    title_en: 'Domain Registration & DNS',
    description_ar:
      'حجز النطاقات الرسمية المصرية والعالمية وحماية الهوية الرقمية لعلامتك التجارية من الانتحال وسرقة العملاء.',
    description_en:
      'Securing corporate domain identity with regional .eg and global TLD registration, high-speed DNS, and ownership protection.',
    icon: 'AtSign',
    useCaseStory_ar:
      'تسجيل النطاقات المصرية الرسمية وإدارة سجلات DNS السحابية للشركات وربطها بالخوادم فوراً.',
    useCaseStory_en:
      'Registered official Egyptian .eg domains with fast cloud DNS management and WHOIS privacy.',
    features_ar: ['دعم كامل للنطاقات المصرية الرسمية .eg و.com.eg', 'إدارة سريعة ومحمية لخوادم توجيه النطاق', 'حماية الخصوصية وقفل ملكية النطاق ضد النقل غير المصرح'],
    features_en: ['Support for .eg & global TLDs', 'High-speed cloud DNS zone management', 'WHOIS privacy & domain lock'],
  },
  {
    id: 16,
    category_key: 'infra_cloud',
    category_ar: 'البنية التحتية والسحابية',
    category_en: 'Infrastructure & Cloud',
    title_ar: 'أتمتة النشر والتحديثات السحابية',
    title_en: 'Infrastructure Automation & Deployment',
    description_ar:
      'نشر وتحديث الأنظمة آلياً في دقائق معدودة بدلاً من أيام لتسريع إطلاق خدماتك وتفادي أخطاء التشغيل اليدوية.',
    description_en:
      'Automated server orchestration and rapid environment provisioning, turning days of manual deployment into repeatable minutes.',
    icon: 'Terminal',
    useCaseStory_ar:
      'أتمتة نشر بيئات العمل لشركة تجارة إلكترونية، مما قلل وقت تجهيز السيرفرات من 3 أيام إلى 15 دقيقة فقط.',
    useCaseStory_en:
      'Automated staging and production provisioning, reducing server setup lead times from 3 days to 15 minutes.',
    features_ar: ['تجهيز ونشر الخوادم بضغطة زر واحدة', 'توثيق البنية التحتية لمنع الأخطاء البشرية', 'تحديثات آمنة ومختبرة للمنظومات والخدمات'],
    features_en: ['1-click automated server deployment', 'Repeatable, documented infrastructure', 'Reliable continuous deployment workflows'],
  },

  // ==========================================
  // 3. Security & Observability (الأمن والمراقبة)
  // ==========================================
  {
    id: 17,
    category_key: 'security_obs',
    category_ar: 'الأمن والمراقبة',
    category_en: 'Security & Observability',
    title_ar: 'الرصد الاستباقي ومنع الأعطال',
    title_en: 'Proactive System Observability',
    description_ar:
      'مراقبة رقمية استباقية 24/7 تكتشف بطء الأنظمة وتصلح الاختناقات قبل أن تؤثر على سير العمل أو يشعر بها عملاؤك.',
    description_en:
      'Continuous 24/7 telemetry monitoring system performance, catching bottlenecks before they impact operations or patient care.',
    icon: 'Activity',
    useCaseStory_ar:
      'تطبيق منظومة مراقبة لـ 60 خادماً وجهاز شبكي نبهت الفريق الهندسي لارتفاع مفاجئ في حركة المرور وتم التعامل معه دون أي انقطاع.',
    useCaseStory_en:
      'Deployed full-stack observability across 60 server nodes and network switches with automated incident alerts.',
    features_ar: ['لوحات تحكم بيانية حية لأداء المنشأة', 'تنبيهات فورية استباقية عبر الواتساب والإيميل', 'تتبع استباقي للضغط وحركة المرور لمنع التوقف', 'مراقبة حية مستمرة للسيرفرات وشبكات المراقبة والكاميرات'],
    features_en: ['Real-time performance analytics dashboards', 'Instant automated WhatsApp & email alerts', 'Proactive bandwidth & load management', 'Continuous live monitoring for servers, networks & CCTV infrastructure'],
  },
  {
    id: 18,
    category_key: 'security_obs',
    category_ar: 'الأمن والمراقبة',
    category_en: 'Security & Observability',
    title_ar: 'الحماية السيبرانية ومركز العمليات',
    title_en: 'Cybersecurity & Threat Defense',
    description_ar:
      'حماية استباقية متقدمة تكشف محاولات الاختراق والأنشطة غير المصرح بها فوراً لحماية أصول وسمعة منشأتك.',
    description_en:
      'Enterprise threat intelligence correlating activity logs across all systems to identify and neutralize cyber threats instantly.',
    icon: 'ShieldCheck',
    useCaseStory_ar:
      'رصد السجلات الأمنية لـ 80 خادم وجهاز شبكي لحظياً والتنبيه الفوري عند رصد أي سلوك مشبوه.',
    useCaseStory_en:
      'Implemented real-time security event correlation across 80 corporate servers with instant anomaly alerts.',
    features_ar: ['تحليل فوري للحركات والأنشطة الرقمية', 'تنبيه وتدخل فوري عند أي نشاط غير مصرح', 'تقارير دورية للمطابقة والامتثال الأمني'],
    features_en: ['Real-time event analysis', 'Instant unauthorized access prevention', 'Regulatory compliance audit reports'],
  },
  {
    id: 19,
    category_key: 'security_obs',
    category_ar: 'الأمن والمراقبة',
    category_en: 'Security & Observability',
    title_ar: 'تأمين الشبكات وجدران الحماية',
    title_en: 'Network Security & Firewalls',
    description_ar:
      'تأمين شبكات المؤسسة وعزل الأنظمة المالية والطبية الحساسة عن الشبكات العامة لمنع الاختراقات وتأمين الربط بين الفروع.',
    description_en:
      'Turnkey physical network design, hardware firewalls, and secure segmentation isolating financial and clinical assets from public Wi-Fi.',
    icon: 'ShieldCheck',
    useCaseStory_ar:
      'تأمين شبكة مستشفى وعزل أجهزة العمليات والأشعة عن شبكة الزوار مع ربط مشفر وآمن بين الفروع.',
    useCaseStory_en:
      'Hardened enterprise hospital networks by isolating medical devices and surgery suites behind physical firewalls.',
    features_ar: ['جدران حماية متطورة لمنع التسلل والتهديدات', 'عزل شبكي كامل للأنظمة الحساسة والحسابات', 'أنفاق مشفرة وآمنة للربط المباشر بين الفروع والمقرات', 'تأمين شبكات كاميرات المراقبة IP وعزل مسجلات NVR'],
    features_en: ['Enterprise hardware firewalls', 'Isolated internal network segments', 'Encrypted branch-to-branch connections', 'IP CCTV surveillance networking & NVR security'],
  },
  {
    id: 20,
    category_key: 'security_obs',
    category_ar: 'الأمن والمراقبة',
    category_en: 'Security & Observability',
    title_ar: 'الاتصالات وأنظمة السنترال الموحد',
    title_en: 'Unified Telephony & VoIP',
    description_ar:
      'توحيد اتصالات المقرات والفروع بتكلفة صفرية للمكالمات الداخلية مع شجرة رد آلي احترافية ترفع كفاءة خدمة العملاء.',
    description_en:
      'Unified enterprise IP telephony slashing cross-branch phone bills to zero while providing IVR call routing and staff mobile softphones.',
    icon: 'PhoneCall',
    useCaseStory_ar:
      'ربط 5 مقرات إدارية ومستشفيين بنظام VoIP موحد وفر تكاليف الاتصالات الداخلية مع توفير تسجيل المكالمات.',
    useCaseStory_en:
      'Interconnected multi-site facilities with unified VoIP telephony, eliminating internal call costs.',
    features_ar: ['شجرة رد آلي تفاعلية (IVR) لتوجيه المتصلين باحترافية', 'تسجيل المكالمات وتقارير أداء خدمة العملاء', 'تطبيق هاتف للموظفين للتواصل من أي مكان'],
    features_en: ['Smart IVR auto-attendants', 'Call recording & customer service metrics', 'Mobile softphone app for remote staff'],
  },
  {
    id: 21,
    category_key: 'security_obs',
    category_ar: 'الأمن والمراقبة',
    category_en: 'Security & Observability',
    title_ar: 'استمرارية الأعمال والنسخ المعزول',
    title_en: 'Disaster Recovery & Immutable Backup',
    description_ar:
      'حماية منيعة ضد برمجيات الفدية تضمن استعادة كافة قواعد البيانات والأنظمة في دقائق معدودة وصفر خسائر تشغيلية.',
    description_en:
      'Ransomware-proof immutable hybrid backups guaranteeing sub-15 minute disaster recovery and uninterrupted business operations.',
    icon: 'Database',
    useCaseStory_ar:
      'تطبيق خطة نسخ احتياطي معزول لمجموعة محاسبة واستشارات ضريبية ضمن استعادة قواعد بيانات الفواتير والـ ERP في 10 دقائق.',
    useCaseStory_en:
      'Deployed immutable hybrid backup pipeline for a tax consultancy, restoring mission-critical ERP databases in under 10 minutes.',
    features_ar: ['نسخ احتياطي معزول لا يمكن تعديله أو تشفيره بالفدية', 'استعادة فورية للأنظمة خلال دقائق عند الطوارئ', 'حماية مشفرة لكافة السجلات وقواعد البيانات الحساسة'],
    features_en: ['Ransomware-immune off-site snapshot vault', 'Instant system recovery under 15 minutes', 'End-to-end encrypted database protection'],
  },
  {
    id: 22,
    category_key: 'security_obs',
    category_ar: 'الأمن والمراقبة',
    category_en: 'Security & Observability',
    title_ar: 'البريد الرسمي الموثق للشركات',
    title_en: 'Corporate Business Email & DMARC',
    description_ar:
      'بريد رسمي باسم شركتك محمي ضد التزييف والاحتيال المالي، يضمن وصول فواتيرك ومراسلاتك لصندوق الوارد مباشرة.',
    description_en:
      'Authenticated business email on your domain protecting company invoices from fraud and guaranteeing 100% inbox deliverability.',
    icon: 'Mail',
    useCaseStory_ar:
      'هجرة وحماية 250 حساب بريد رسمي لمجموعة طبية مع منع انتحال الشخصية وضمان وصول 100% من الرسائل لصندوق الوارد.',
    useCaseStory_en:
      'Hardened 250 corporate mailboxes with strict DMARC enforcement, eliminating spoofing and ensuring 100% inbox delivery.',
    features_ar: ['توثيق وحماية مشددة ضد تزوير الفواتير والبريد', 'تصفية قوية للرسائل المزعجة وروابط الاحتيال', 'توافق كامل مع الهواتف الذكية وبرامج المراسلات'],
    features_en: ['Strict SPF, DKIM & DMARC authentication', 'Anti-spam & phishing protection', 'Seamless Outlook & mobile sync'],
  },
  {
    id: 23,
    category_key: 'security_obs',
    category_ar: 'الأمن والمراقبة',
    category_en: 'Security & Observability',
    title_ar: 'البنية التحتية والشبكات المنظمة',
    title_en: 'Structured Cabling & Directory',
    description_ar:
      'تأسيس الشبكات المنظمة وكابلات الفايبر وحوكمة خوادم الدومين المركزي لتوحيد صلاحيات الموظفين وحماية أصول المنشأة.',
    description_en:
      'Turnkey enterprise structured cabling, fiber backbone, and central domain directory controlling endpoint access and file security.',
    icon: 'Layers',
    useCaseStory_ar:
      'تجهيز بنية شبكية ودومين مركزي لمؤسسة مشكاة نور الخيرية لربط أكثر من 70 جهاز كمبيوتر وخادم ملفات وصلاحيات موحدة.',
    useCaseStory_en:
      'Engineered turnkey structured cabling and central Active Directory domain controller for Meshkat Nour Foundation across 70+ client endpoints.',
    features_ar: ['كابلات شبكات وفايبر منظمة ومعتمدة للمباني', 'حوكمة أذونات مركزية لمستخدمي المنشأة', 'حماية وتأمين خوادم الملفات المشتركة من الفقدان'],
    features_en: ['Certified Cat6A & fiber infrastructure', 'Centralized user authorization & policy governance', 'Protected shared file server architecture'],
  },
];

export const NUZUL_PACKAGES: EnterprisePackage[] = [
  {
    id: 'starter',
    name_en: 'Starter',
    name_ar: 'البداية',
    subtitle_en: 'Small clinic, office, or startup',
    subtitle_ar: 'عيادة / مكتب / شركة صغيرة',
    badge_en: null,
    badge_ar: null,
    price_setup_egp: '15,000 – 25,000 ج.م',
    price_monthly_egp: '1,000 – 2,000 ج.م / شهر',
    price_setup_usd: '$350 – $500',
    price_monthly_usd: '$25 – $45 / mo',
    highlighted: false,
    summary_en: [
      'Complete Business Setup',
      'Secure Network Infrastructure',
      'Professional Online Presence',
      'Business Email & Cloud Hosting',
      'Ongoing Support Included',
    ],
    summary_ar: [
      'تأسيس أعمال متكامل',
      'بنية تحتية آمنة للشبكة',
      'تواجد احترافي أونلاين',
      'إيميل بيزنس واستضافة سحابية',
      'دعم فني مستمر عند الحاجة',
    ],
    details_en: [
      'Landing Page (custom responsive design)',
      'Domain registration + DNS Setup',
      'Business Email – 5 Accounts',
      'Cloud Server (Linux NVMe)',
      'Automated Weekly Backups',
      'Network Setup (Router + Gigabit Switch)',
      'CCTV – 2 to 4 high-res cameras',
      'VoIP – 1 to 2 lines setup',
      'Complete On-site Deployment in Egypt',
      'On-call Technical Support',
    ],
    details_ar: [
      'صفحة هبوط احترافية متوافقة مع الهواتف',
      'حجز النطاق وتهيئة خوادم DNS',
      'إيميل بيزنس رسمي (٥ حسابات)',
      'سيرفر سحابي لينكس فائق السرعة',
      'نسخ احتياطي أسبوعي آلي',
      'إعداد الشبكة (راوتر وسويتش جيجابت)',
      'كاميرات مراقبة (٢ إلى ٤ كاميرات)',
      'تليفون شبكي VoIP (خط إلى خطين)',
      'تركيب وتشغيل كامل بالمقر في مصر',
      'دعم فني متاح وسريع الاستجابة',
    ],
  },
  {
    id: 'business',
    name_en: 'Business',
    name_ar: 'الأعمال',
    subtitle_en: 'Growing company ready to scale',
    subtitle_ar: 'شركة تنمو وتحتاج للتوسع',
    badge_en: 'Most Popular',
    badge_ar: 'الأكثر طلباً',
    price_setup_egp: '30,000 – 60,000 ج.م',
    price_monthly_egp: '2,500 – 5,000 ج.م / شهر',
    price_setup_usd: '$650 – $1,250',
    price_monthly_usd: '$55 – $110 / mo',
    highlighted: true,
    summary_en: [
      'Everything in Starter',
      'Dynamic Web Platform / Custom Portal',
      'WhatsApp Business Automation',
      'Advanced Network & CCTV Surveillance',
      'Monthly Maintenance Visit Included',
    ],
    summary_ar: [
      'كل مميزات باقة البداية',
      'موقع ديناميكي أو منصة مخصصة',
      'أتمتة رسائل واتساب للأعمال والردود الفورية',
      'شبكة وكاميرات مراقبة متطورة',
      'زيارات صيانة شهرية للمقر',
    ],
    details_en: [
      'Dynamic Website / Full CMS Portal',
      'Business Email – 10 to 20 Accounts',
      'Higher Compute Cloud Server & Monitoring',
      'Real-time automated backups & alerting',
      'Full Network Infrastructure with VLANs',
      'CCTV – 4 to 8 IP cameras with NVR',
      'VoIP PBX Telephony System',
      'WhatsApp Business Automated Notifications',
      'Integrated CRM / Client Management',
      'Monthly Preventative Maintenance Visit',
    ],
    details_ar: [
      'موقع ديناميكي متكامل ولوحة تحكم',
      'إيميل بيزنس رسمي (١٠ إلى ٢٠ حساب)',
      'سيرفر سحابي مخصص عالي المعالجة',
      'نسخ احتياطي لحظي وتنبيهات فورية',
      'بنية شبكية متقدمة مع عزل VLANs',
      'كاميرات مراقبة IP (٤ إلى ٨ كاميرات)',
      'سنترال رقمي VoIP متكامل',
      'إشعارات وتأكيدات واتساب الآلية',
      'نظام CRM مبسط لإدارة العملاء',
      'زيارة صيانة وقائية شهرية للمقر',
    ],
  },
  {
    id: 'professional',
    name_en: 'Professional',
    name_ar: 'الاحترافية',
    subtitle_en: 'Established companies & mid-size clinics',
    subtitle_ar: 'الشركات القائمة والعيادات والمستشفيات المتوسطة',
    badge_en: 'Recommended',
    badge_ar: 'يُنصح بها',
    price_setup_egp: '70,000 – 120,000 ج.م',
    price_monthly_egp: '6,000 – 10,000 ج.م / شهر',
    price_setup_usd: '$1,500 – $2,500',
    price_monthly_usd: '$130 – $220 / mo',
    highlighted: false,
    summary_en: [
      'Everything in Business',
      'Advanced Enterprise System / Custom ERP',
      'High-Availability Cloud Architecture',
      'Multi-site VPN Network Interconnection',
      'Priority 24/7 Dedicated Support',
    ],
    summary_ar: [
      'كل مميزات باقة الأعمال',
      'نظام مؤسسي متقدم (ERP مخصص)',
      'بنية سحابية موزعة عالية التوافر',
      'ربط شبكي مشفر بين عدة فروع (VPN)',
      'دعم فني هندسي ذو أولوية 24/7',
    ],
    details_en: [
      'Custom Enterprise Web App (React / Node / PostgreSQL)',
      'Unlimited Corporate Email Accounts',
      'Load-balanced High Availability Cloud VPS',
      'Off-site Automated Disaster Recovery Backups',
      'Multi-site Secure Site-to-Site VPN',
      'CCTV – 16+ IP Cameras with Biometric Access Control',
      'Call Center PBX with Call Recording',
      'Full Meta-approved WhatsApp API Automation',
      'Tailored ERP, Billing, & Inventory Workflows',
      'Dedicated Account Engineer & Priority SLA',
    ],
    details_ar: [
      'تطبيق مؤسسي مخصص (React / Node / Postgres)',
      'حسابات بريد إلكتروني غير محدودة',
      'سيرفرات سحابية متعددة مع توزيع الأحمال',
      'نسخ احتياطي خارجي مع خطة طوارئ',
      'ربط آمن لجميع الفروع بشبكة VPN موحدة',
      '١٦+ كاميرا مراقبة وأنظمة بصمة ذكية',
      'كول سنتر رقمي مع تسجيل المكالمات',
      'نظام ردود تفاعلية معتمد عبر WhatsApp API',
      'أنظمة ERP وإدارة مخازن وفواتير مخصصة',
      'مهندس دعم مخصص مع اتفاقية مستوى خدمة SLA',
    ],
  },
  {
    id: 'enterprise',
    name_en: 'Enterprise',
    name_ar: 'المؤسسات الكبرى',
    subtitle_en: 'Large hospitals, factories, & corporate HQs',
    subtitle_ar: 'المستشفيات الكبرى، المصانع، والمقرات الإدارية',
    badge_en: null,
    badge_ar: null,
    price_setup_egp: 'تسعير مخصص حسب المشروع',
    price_monthly_egp: 'عقد صيانة ودعم مخصص (SLA)',
    price_setup_usd: 'Custom Quote',
    price_monthly_usd: 'Custom SLA Contract',
    highlighted: false,
    summary_en: [
      'Fully Custom Architecture & Redundancy',
      'Hybrid On-Premise + Private Cloud',
      'Dedicated Full-Time Engineers on Standby',
      'Enterprise Cybersecurity Auditing',
      'Tailored Enterprise SLA & 15-min Response',
    ],
    summary_ar: [
      'بنية تحتية مخصصة ومزدوجة الحماية',
      'بنية هجينة تجمع السيرفرات المحلية والسحابية',
      'مهندسون مخصصون على مدار الساعة',
      'فحص واختبار أمان سيبراني متقدم',
      'اتفاقية تشغيل صارمة مع استجابة خلال ١٥ دقيقة',
    ],
    details_en: [
      'Complete Turnkey IT Master Plan',
      'High-throughput Fiber & Redundant Internet Failover',
      'Hospital/Industrial Grade ERP Software Suite',
      'Dedicated Server Farm with Proxmox / VMware Clusters',
      'Automated Proactive System Monitoring & Alerts',
      'Full Security Operations Center (SOC) Hardening',
      'Direct WhatsApp and Dedicated Hotline Channel',
      'Custom Feature Engineering on Demand',
    ],
    details_ar: [
      'مخطط IT شامل ومتكامل للمؤسسة',
      'ربط ألياف ضوئية مع خطوط إنترنت احتياطية فورية',
      'حزمة برمجيات صحية أو صناعية متخصصة',
      'مزرعة خوادم مخصصة بتقنيات VMware / Proxmox',
      'مراقبة لحظية وتحليلات تنبؤية للأعطال',
      'تأمين سيبراني متوافق مع أعلى المعايير الدولية',
      'قناة تواصل وخط ساخن مباشر مع كبار المهندسين',
      'تطوير وتحديث مستمر للميزات والأنظمة البرمجية',
    ],
  },
];

export const NUZUL_HOSTING_PLANS: HostingPlan[] = [
  {
    id: 'shared-cpanel',
    key: 'shared',
    nameAr: 'الاستضافة المشتركة للمواقع',
    nameEn: 'Business Shared Hosting',
    basePriceEGP: 199,
    basePriceUSD: 3.99,
    specsAr: [
      'أقراص NVMe Gen4 فائقة السرعة',
      'شهادة SSL مجانية مدى الحياة',
      'نسخ احتياطي يومي مجدول',
      'لوحة تحكم cPanel مدمجة وسهلة',
    ],
    specsEn: [
      'Enterprise NVMe Gen4 Disks',
      'Free Lifetime SSL Certificate',
      'Automated Daily Cloud Backups',
      'Intuitive cPanel Dashboard',
    ],
  },
  {
    id: 'wp-managed',
    key: 'wordpress',
    nameAr: 'استضافة ووردبريس المدارة',
    nameEn: 'Managed WordPress Hosting',
    basePriceEGP: 249,
    basePriceUSD: 4.99,
    specsAr: [
      'محرك LiteSpeed Cache لتسريع فوري',
      'تحديثات ووردبريس وحماية متقدمة',
      'بيئة تجارب Staging بضغطة زر',
      'تأمين مخصص ضد هجمات DDoS والبرمجيات الخبيثة',
    ],
    specsEn: [
      'LiteSpeed Web Server & LSCache',
      'Automated WordPress Security Hardening',
      'One-Click Staging Environment',
      'DDoS & Malware Real-time Shield',
    ],
    popular: true,
  },
  {
    id: 'linux-vps',
    key: 'vps',
    nameAr: 'خادم Cloud VPS (لينكس)',
    nameEn: 'Linux Cloud VPS (KVM)',
    basePriceEGP: 499,
    basePriceUSD: 9.99,
    specsAr: [
      'صلاحية Root كاملة بنسبة 100%',
      'موارد معالج وذاكرة مخصصة KVM',
      'اتصال شبكي 1 Gbps مع ترافيك مفتوح',
      'إمكانية الاختيار بين خوادم القاهرة أو فرانكفورت',
    ],
    specsEn: [
      '100% Full Root Access',
      'Dedicated KVM Cores & RAM',
      '1 Gbps Unmetered Uplink Port',
      'Deploy in Cairo or EU Datacenters',
    ],
  },
  {
    id: 'windows-rdp',
    key: 'windows',
    nameAr: 'خوادم سطح المكتب والعمل عن بُعد (Cloud Desktop)',
    nameEn: 'Cloud Desktop VPS (Remote Access)',
    basePriceEGP: 1000,
    basePriceUSD: 20.00,
    specsAr: [
      'تبدأ من 1000 ج.م/شهرياً فقط',
      'وصول مشفر Remote Desktop فائق السرعة',
      'أقراص NVMe فائقة الأداء والسرعة',
      'مساحات عمل سحابية مرنة للموظفين والفرق',
      'دعم فني هندسي مخصص على مدار الساعة 24/7',
    ],
    specsEn: [
      'Starts from 1,000 EGP/mo ($20/mo)',
      'Ultra-Fast Encrypted Remote Desktop',
      'High-Speed Enterprise NVMe Disks',
      'Centralized Cloud Workspaces for Teams',
      'Dedicated Engineering Support 24/7',
    ],
  },
];

export const NUZUL_CASE_STUDIES: CaseStudy[] = [
  // 1. Trust Hospital - Enterprise Security, CCTV Grid, Networks & Hardened Email
  {
    id: 1,
    badge: 'HOSPITAL SECURITY & NETWORKS',
    title_ar: 'البنية الأمنية والشبكات — مستشفى تراست',
    title_en: 'Turnkey Hospital Security & Networks — Trust Hospital',
    category_ar: 'أمن المستشفيات والشبكات',
    category_en: 'Hospital Security & Networks',
    client_ar: 'مستشفى تراست التخصصي — القاهرة',
    client_en: 'Trust Specialized Hospital — Cairo',
    executiveSummary_ar:
      'مشروع تأسيس أمني وشبكي متكامل لمستشفى تراست: شبكة كاميرات مراقبة رقمية 4K (180+ كاميرا)، جدار حماية Fortinet NGFW لعزل الأجهزة الطبية الحساسة وغرف العمليات عن شبكة الزوار، تمديدات فايبر وكابلات Cat6A، وتأمين البريد الطبي الرسمي بتوثيق ثلاثي (SPF/DKIM/DMARC) مع دعم تقني مستمر 24/7.',
    executiveSummary_en:
      'Turnkey sovereign IT security and infrastructure for Trust Hospital: enterprise 4K CCTV grid (>180 cameras), Fortinet NGFW zero-trust segmentation for medical devices, fiber & Cat6A structured cabling, and hardened medical email with 24/7 ITaaS.',
    description_ar:
      'تجهيز أمني متكامل يشمل شبكة مراقبة 4K (180+ كاميرا)، جدار حماية Fortinet، كابلات فايبر Cat6A، وتأمين البريد الطبي الرسمي.',
    description_en:
      'Integrated security deployment: 180+ 4K IP cameras, Fortinet firewall, fiber cabling, and hardened medical email.',
    tech: [
      '180+ 4K IP CCTV Grid',
      'Fortinet NGFW',
      'VLAN Segmentation',
      'Fiber Optic Backbone',
      'Cat6A Cabling',
      'Hardened Medical Email',
      'IT as a Service (ITaaS)',
    ],
    challenges_ar: [
      'نقاط عمياء أمنية داخل أروقة الطوارئ والصيدلية المركزية دون توثيق فيديو عالي الدقة',
      'شبكة كابلات قديمة تسببت في بطء نقل بيانات الأشعة الحيوية إلى غرف العمليات والعيادات',
      'تكرار سقوط البريد الإلكتروني القديم وتأخر وصول الموافقات الطبية العاجلة',
      'اختلاط الأجهزة الطبية بشبكة الإنترنت العامة مما هدد سرية ملفات المرضى',
    ],
    challenges_en: [
      'Security blind spots in emergency corridors and central pharmacy lacking high-definition video audit trails',
      'Aging cabling causing packet loss and sluggish radiological DICOM image transfer to surgical suites',
      'Frequent legacy email crashes and phishing attempts delaying emergency medical insurance approvals',
      'Medical equipment exposed on the general hospital network creating critical patient data vulnerability',
    ],
    solution_ar: [
      'تركيب شبكة مراقبة IP تضم 180+ كاميرا 4K مع خوادم NVR بمصفوفة RAID 6 لتسجيل 90 يوماً',
      'تأسيس بنية فايبر ضوئية وكابلات Cat6A مع عزل VLAN صارم لغرف العمليات والعناية المركزة',
      'تركيب جدار ناري متقدم Fortinet لحظر محاولات الاختراق وتأمين نفق VPN مشفر للأطباء',
      'هجرة وتأمين 200+ حساب بريد رسمي للمستشفى بتوثيق SPF/DKIM/DMARC لضمان وصول 100%',
      'قطاع تقني كخدمة (IT as a Service): مراقبة مستمرة للشبكة والأمان على مدار الساعة 24/7',
    ],
    solution_en: [
      'Deployed 180+ 4K IP night-vision cameras with redundant central RAID 6 NVRs retaining 90 days of secure footage',
      'Engineered an internal fiber optic backbone and Cat6A cabling with zero-trust VLAN segmentation for ICUs and surgical suites',
      'Deployed Fortinet Next-Gen Firewalls with active intrusion prevention and dedicated encrypted VPN tunnels for medical staff',
      'Migrated and hardened 200+ hospital mailboxes with SPF, DKIM, and DMARC enforcement ensuring 100% deliverability',
      'Full IT as a Service (ITaaS): 24/7 proactive security monitoring and engineering dispatch eliminating internal IT hiring overhead',
    ],
    deliverables_ar: [
      '1. شبكة كاميرات مراقبة رقمية 4K (180+ كاميرا) وخوادم تسجيل مركزي NVR',
      '2. بنية تحتية للشبكات وكابلات الفايبر المنظمة Cat6A',
      '3. جدار ناري Fortinet NGFW مع عزل شبكي VLAN',
      '4. بريد طبي رسمي مشفر بتوثيق SPF/DKIM/DMARC',
      '5. قطاع تقني كخدمة (IT as a Service) ودعم فني هندسي 24/7',
    ],
    deliverables_en: [
      '1. 180+ 4K IP Surveillance Camera Grid & Central Redundant NVR Array',
      '2. Turnkey Structured Fiber & Cat6A Cabling Infrastructure',
      '3. Fortinet NGFW Security Perimeter & Zero-Trust VLAN Segmentation',
      '4. Sovereign Hardened Medical Email System with SPF/DKIM/DMARC',
      '5. 24/7 IT as a Service (ITaaS) Managed Operations',
    ],
    result_ar: 'جاهزية تشغيلية للشبكة 99.99%، تغطية أمنية مرئية 100%، وحماية تامة للسجلات والمراسلات الطبية',
    result_en: '99.99% network uptime, 100% video surveillance coverage, and zero patient data breaches',
    icon: 'Shield',
  },

  // 2. Mohamed Ibrahiem Office for Finance - Enterprise Financial Cloud, Mail Governance & Disaster Recovery
  {
    id: 2,
    badge: 'FINANCIAL CONSULTING CLIENT',
    title_ar: 'الاستضافة السحابية والأنظمة المالية — مكتب محمد إبراهيم',
    title_en: 'Cloud Hosting & Financial Systems — Mohamed Ibrahiem Office',
    category_ar: 'الاستضافة السحابية وحوكمة الأعمال',
    category_en: 'Financial Cloud & Business Governance',
    client_ar: 'مكتب محمد إبراهيم للاستشارات والخدمات المالية — القاهرة',
    client_en: 'Mohamed Ibrahiem Office for Financial Consultancy — Cairo',
    executiveSummary_ar:
      'نقل بيئة العمل المحاسبية والرقابية للمكتب إلى خوادم سحابية خاصة عالية الأداء، مع تأمين وصول 30 مستشاراً ومراجعاً مالياً للأنظمة المركزية، وتوثيق 150+ بريد رسمي ضد التزوير، مع خطة نسخ احتياطي يومي معزول لضمان استمرارية الأعمال.',
    executiveSummary_en:
      'Migrated mission-critical financial workflows into a dedicated private cloud: high-speed multi-user access for 30 concurrent auditors, hardened corporate mail with SPF/DKIM/DMARC, and immutable automated backups.',
    description_ar:
      'بنية سحابية مخصصة لتشغيل الأنظمة المالية والـ ERP لـ 30 مراجعاً، مع تأمين 150+ بريد رسمي، ونسخ احتياطي يومي معزول.',
    description_en:
      'Dedicated cloud infrastructure hosting financial systems for 30 auditors, 150+ hardened mailboxes, and automated daily backups.',
    tech: [
      'Enterprise Financial Cloud',
      'High-Availability Cloud VPS',
      'Corporate Financial Mail',
      'SPF / DKIM / DMARC',
      'Immutable Cloud Backup',
      'IT as a Service (ITaaS)',
    ],
    challenges_ar: [
      'تباطؤ الأنظمة المالية على الأجهزة المكتبية وصعوبة وصول المراجعين لقواعد البيانات أثناء التواجد لدى العملاء',
      'سقوط التقارير المالية ومسودات التدقيق في مجلد السبام لغياب التوثيق الرقمي المعتمد',
      'مخاطر فقدان السجلات المالية التاريخية في حال تعطل أحد الأجهزة المحلية أو الإصابة ببرمجيات خبيثة',
      'انشغال إدارة المكتب بمشاكل التقنية في أوقات ذروة المراجعات وإقفال الميزانيات السنوية',
    ],
    challenges_en: [
      'Sluggish ERP performance on local desktop PCs and inability to access financial databases during off-site corporate audits',
      'Outbound financial reports and audit statements landing in recipient spam folders due to unauthenticated mail configuration',
      'Acute ransomware vulnerability and data loss risks on unbacked local office hard drives',
      'Financial partners bogged down with IT troubleshooting during peak annual fiscal closing',
    ],
    solution_ar: [
      'تخصيص خوادم سحابية فائقة السرعة بأقراص NVMe لتشغيل قواعد البيانات والأنظمة المالية المركزية',
      'تفعيل وصول مشفر لـ 30 مستشاراً ومراجعاً للعمل على الأنظمة في نفس الوقت بسرعة عالية واستقرار كامل',
      'هجرة وتأمين 150+ بريد مالي رسمي مع حماية متقدمة ضد الاحتيال وضمان وصول 100% لصندوق الوارد',
      'نظام نسخ احتياطي يومي آلي مشفر ينقل لقطات البيانات إلى سحابة نُزول تِك المعزولة مع استعادة فورية',
      'قطاع تقني كخدمة (IT as a Service): صيانة وقائية ومراقبة استباقية 24/7 دون الحاجة لتوظيف فريق تقني داخلي',
    ],
    solution_en: [
      'Deployed a high-frequency enterprise VPS hosting central SQL corporate accounting & audit databases',
      'Configured secure multi-session low-latency access for 30 simultaneous financial consultants with seamless mobility',
      'Migrated and hardened 150+ financial mailboxes with strict SPF, DKIM, and DMARC enforcement guaranteeing 100% inbox placement',
      'Automated daily encrypted immutable snapshots sent to Nuzul Tech off-site cloud storage for rapid disaster recovery',
      'Delivered full IT as a Service (ITaaS) with 24/7 proactive monitoring and zero client IT management hassle',
    ],
    deliverables_ar: [
      '1. خوادم سحابية عالية الأداء لتشغيل المنظومات المالية والـ ERP',
      '2. هجرة وتأمين 150+ بريد مالي رسمي بمعدل تسليم 100%',
      '3. خط أنابيب نسخ احتياطي يومي مشفر لجميع السجلات والدفاتر المالية',
      '4. قطاع تقني كخدمة (IT as a Service) وإدارة استباقية 24/7',
    ],
    deliverables_en: [
      '1. High-Performance Enterprise Cloud Hosting for Corporate Financial ERP',
      '2. 150+ Enterprise Financial Mailboxes Hardened with 100% Deliverability',
      '3. Automated Daily Encrypted Off-Site Backup Pipeline',
      '4. Comprehensive 24/7 IT as a Service (ITaaS) Management',
    ],
    result_ar: 'تسريع إنجاز أعمال المراجعة بنسبة 70%، استقرار بنية العمل 100% خلال موسم إقفال الميزانيات، وحماية تامة للسجلات',
    result_en: '70% faster financial reporting turnaround, 100% operational stability during fiscal closing, and zero data loss',
    icon: 'Lock',
  },

  // 3. Cairo Cure Oncology Center - Detailed Strategic Case Study
  {
    id: 3,
    badge: 'STRATEGIC CASE STUDY',
    title_ar: 'الأرشفة الطبية وحوكمة البريد — مركز كايرو كيور',
    title_en: 'Medical PACS Archiving & Email Governance — Cairo Cure',
    category_ar: 'حوكمة البريد والأرشيف الطبي',
    category_en: 'Email Governance & Medical PACS',
    client_ar: 'مركز Cairo Cure التخصصي للأورام — القاهرة',
    client_en: 'Cairo Cure Oncology Center — Cairo',
    executiveSummary_ar:
      'إعادة هندسة البنية الرقمية لمركز Cairo Cure للأورام: فصل ملفات الأشعة الطبية الضخمة (PACS) عن البريد الإلكتروني، وتأسيس خوادم أرشفة محلية وسحابية هجينة خفضت التكاليف السنوية بنسبة 75% مع استقرار فوري لكافة أجهزة العيادات.',
    executiveSummary_en:
      'Decoupled heavy PACS radiological archives from corporate email onto hybrid NVMe storage, slashing annual cloud IT overhead by >75% while stabilizing clinical workstations.',
    description_ar:
      'حل هجين لفصل الأرشيف الطبي PACS عن البريد، وهجرة 120 صندوق بريد، مع نسخ احتياطي مشفر وقطاع تقني كخدمة (ITaaS).',
    description_en:
      'Hybrid cloud solution decoupling medical PACS storage from email, migrating 120 mailboxes, and cutting costs by 75%.',
    tech: ['Hybrid Cloud', 'DICOM PACS Archive', 'Private Mail Server', 'SPF / DKIM / DMARC', 'AES-256 Storage', 'Proxmox', 'IT as a Service'],
    result_ar: 'تخفيض التكاليف التشغيلية بنسبة 75% وحماية تامة لبيانات المرضى واستقرار فوري للأجهزة',
    result_en: '>75% operational cost reduction and zero patient data loss',
    icon: 'Shield',
    challenges_ar: [
      'تضخم مساحات البريد الإلكتروني نتيجة تبادل صور الأشعة والتحاليل بالبريد',
      'بطء وتجمد أجهزة الأطباء وموظفي الاستقبال أثناء البحث في المراسلات',
      'تكاليف استضافة شهرية متصاعدة بشكل كبير على السحابات الدولية',
      'مخاطر فقدان أو تلف السجلات الطبية الحساسة لمرضى الأورام',
    ],
    challenges_en: [
      'Massive mailbox bloat (>50GB per physician) caused by emailing heavy DICOM scans',
      'Severe latency and freezing on clinical PCs during daily outpatient operations',
      'Skyrocketing international cloud storage bills with zero operational ROI',
      'Elevated compliance risks of accidental patient record deletion or data breach',
    ],
    solution_ar: [
      'فصل الأرشيف الطبي PACS عن البريد وتأسيس خادم تخزين محلي فائق السرعة',
      'هجرة 120 صندوق بريد إلى خوادم خاصة آمنة مع توثيق SPF/DKIM/DMARC',
      'تطبيق خطة نسخ احتياطي هجين مشفر تضمن استعادة أي ملف في دقائق',
      'قطاع تقني كخدمة (IT as a Service): إدارة استباقية ومراقبة دورية دون الحاجة لتوظيف مهندس مقيم',
    ],
    solution_en: [
      'Decoupled medical PACS archives from email onto dedicated on-premise NVMe storage',
      'Migrated 120 corporate mailboxes to hardened private cloud servers with SPF/DKIM/DMARC',
      'Enacted an immutable hybrid backup pipeline guaranteeing sub-second retrieval',
      'Full IT as a Service (ITaaS): Proactive monitoring and maintenance without internal IT hire overhead.',
    ],
  },

  // 4. ABCH Hospital Projects
  {
    id: 4,
    badge: 'HOSPITAL INFRASTRUCTURE & PR',
    title_ar: 'البنية التحتية والأنظمة الطبية وعلاقات المرضى — مستشفى ABCH',
    title_en: 'Hospital Infrastructure, Virtualization & Patient Relations — ABCH Hospital',
    category_ar: 'تجهيز المستشفيات والأنظمة وعلاقات المرضى',
    category_en: 'Hospital Turnkey IT, Networks & PR System',
    client_ar: 'مستشفى ABCH — القاهرة',
    client_en: 'ABCH Hospital — Cairo',
    executiveSummary_ar:
      'تنفيذ وتطوير بنية تحتية برمجية وفيزيائية متكاملة لمستشفى ABCH: تشمل بوابة المستشفى والمرضى الإلكترونية، سيستم إدارة علاقات ورعاية المرضى (Patient Relations / PR System)، نظام التذاكر والدعم الفني الداخلي، نظام الموافقات الطبية والتأمينية، وبناء بيئة افتراضية مزدوجة الحماية (Virtualization Clusters) مع شبكات الفايبر وجدران الحماية Fortinet.',
    executiveSummary_en:
      'Executed full IT modernization and patient relationship engineering for ABCH Hospital: responsive portal, dedicated Patient Relations (PR System), internal engineering ticketing, automated insurance approvals, High-Availability Virtualization Clusters (Proxmox/VMware), and complete physical fiber cabling.',
    description_ar:
      'تطوير بوابة المستشفى، سيستم إدارة علاقات المرضى (PR System)، نظام التذاكر الداخلي، نظام الموافقات الطبية، وتجهيز بيئات الأنظمة الافتراضية (Virtualization) وكابلات الفايبر وجدران الحماية بالكامل.',
    description_en:
      'Turnkey delivery of hospital portal, Patient Relations (PR) management system, internal ticketing, medical approvals workflow, enterprise virtualization clusters, and complete structured network cabling.',
    tech: [
      'Patient Relations (PR) System',
      'Virtualization (Proxmox/VMware)',
      'High-Availability Clusters',
      'Hospital Web Portal',
      'Medical Approvals Workflow',
      'IT Ticketing System',
      'Fiber & Cat6A Cabling',
      'Fortinet NGFW',
    ],
    challenges_ar: [
      'تشتت العمليات الورقية وبطء مراجعة الموافقات الطبية مع شركات التأمين',
      'صعوبة متابعة شكاوى واستفسارات وتجربة المرضى والمراجعين وغياب نظام موحد لعلاقات المرضى (PR)',
      'شبكة كابلات قديمة كانت تسبب انقطاعات في غرف الأشعة والتحاليل',
      'تعدد السيرفرات الفيزيائية المنفصلة وغياب بيئة افتراضية تضمن استمرارية العمل عند تعطل أي عتاد',
      'غياب نظام مركزي لمتابعة تذاكر صيانة الأجهزة الطبية والهندسية',
    ],
    challenges_en: [
      'Paperwork bottlenecks delaying crucial patient insurance approvals',
      'Fragmented patient feedback and lack of a centralized Patient Relations (PR) tracking system',
      'Aging unorganized legacy cabling causing random packet loss in diagnostic labs',
      'Multiple fragmented physical servers lacking a resilient High-Availability virtualization hypervisor',
      'Absence of centralized tracking for hospital biomedical & IT maintenance tickets',
    ],
    solution_ar: [
      'بناء بوابة مستشفى ABCH الرسمية وبوابة المرضى لحجز المواعيد والاستعلام الفوري',
      'تطوير سيستم مخصص لإدارة علاقات ورعاية المرضى (Patient Relations / PR System) لتسجيل الملاحظات وحل الشكاوى وتتبع رضا المراجعين',
      'تطوير نظام تذاكر ودعم فني داخلي يوزع البلاغات آلياً على المهندسين والتمريض',
      'برمجة نظام الموافقات الطبية والتأمينية لتأكيد التغطية لحظياً خلال دقائق',
      'بناء عنقود افتراضي متقدم (Virtualization HA Cluster) لدمج وتأمين السيرفرات الطبية وقواعد البيانات مع استعادة تلقائية فورية',
      'تأسيس البنية التحتية الفيزيائية الكاملة: كابلات الفايبر، السويتشات المدارة، وجدران الحماية Fortinet',
    ],
    solution_en: [
      'Engineered the official ABCH responsive portal with dynamic doctor scheduling and patient access',
      'Developed a bespoke Patient Relations (PR System) tracking patient satisfaction, inquiries, and resolution SLAs',
      'Deployed an internal ticketing system automating service desk requests across clinical wards',
      'Automated medical & insurance approvals pipeline cutting verification delays from hours to minutes',
      'Deployed High-Availability Virtualization Clusters (Proxmox/VMware) delivering instant hardware failover',
      'Turnkey physical infrastructure: fiber backbone, Cat6A cabling, server racks, and Fortinet NGFW',
    ],
    deliverables_ar: [
      '1. بوابة مستشفى ABCH الرسمية وبوابة المرضى',
      '2. سيستم إدارة علاقات ورعاية المرضى (Patient Relations & PR System)',
      '3. نظام التذاكر والدعم الداخلي لصيانة الأجهزة',
      '4. نظام الموافقات الطبية والتأمينية السريعة',
      '5. بيئة الأنظمة الافتراضية المزدوجة (Virtualization HA Clusters)',
      '6. البنية التحتية الفيزيائية وشبكات الفايبر وجدران الحماية',
    ],
    deliverables_en: [
      '1. ABCH Official Website & Patient Portal',
      '2. Dedicated Patient Relations (PR Management) System',
      '3. Clinical & Engineering Ticketing System',
      '4. Automated Insurance Approvals Engine',
      '5. High-Availability Virtualization Clusters (Proxmox/VMware)',
      '6. Turnkey Physical Infrastructure, Fiber & NGFW Security',
    ],
    result_ar: 'ربط المستشفى بالكامل في بنية افتراضية وفيزيائية موحدة بنسبة تشغيل 99.98%، تحسين رضا المرضى وتتبع شكاواهم لحظياً، وتسريع الموافقات 4 أضعاف',
    result_en: '99.98% physical & virtual uptime, real-time patient relations tracking, and 4x faster medical approval processing',
    icon: 'Building2',
  },

  // 5. Lebanon Hospital ERP
  {
    id: 5,
    badge: 'COMPREHENSIVE ERP',
    title_ar: 'نظام إدارة المستشفيات (HIS) — مستشفى لبنان',
    title_en: 'Hospital Management System (HIS) — Lebanon Hospital',
    category_ar: 'أنظمة إدارة المستشفيات',
    category_en: 'Hospital ERP Suite',
    client_ar: 'مستشفى لبنان',
    client_en: 'Lebanon Hospital',
    executiveSummary_ar:
      'نظام ERP متكامل لإدارة مستشفى لبنان يربط حجز المواعيد، السجلات الطبية الإلكترونية (EMR)، الفواتير الآلية، إدارة الصيدلية المركزية والمخازن، وجداول نوبتجيات الأطباء والتمريض.',
    executiveSummary_en:
      'Unified enterprise hospital ERP suite engineered for Lebanon Hospital, uniting outpatient scheduling, EMR, insurance billing, and pharmacy dispensing into a zero-latency digital core.',
    description_ar:
      'نظام ERP متكامل يشمل الجدولة الذكية، السجلات الطبية (EMR)، الفواتير الآلية، إدارة الصيدلية المركزية، والموارد البشرية الطبية.',
    description_en:
      'Comprehensive hospital ERP system with smart appointment scheduling, EMR, automated billing, and pharmacy inventory.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Docker', 'Hospital EMR', 'HL7/FHIR'],
    challenges_ar: [
      'تأخر تسجيل المرضى وازدحام صالات الاستقبال نتيجة الاعتماد على برامج منفصلة',
      'صعوبة تتبع صرف الأدوية والمستلزمات في المخازن والصيدليات بدقة',
      'فقدان الوقت في مراجعة الملفات الورقية التاريخية للمرضى قبل العمليات',
    ],
    challenges_en: [
      'Outpatient congestion caused by fragmented disconnected software silos',
      'Inaccurate medication dispensing tracking across wards and central pharmacy',
      'Time loss locating physical historical health records prior to surgical procedures',
    ],
    solution_ar: [
      'نظام الجدولة الذكية للمواعيد وحجوزات العيادات وغرف العمليات',
      'السجلات الطبية الإلكترونية الموحدة (EMR) لحفظ التاريخ المرضي والأشعة رقمياً',
      'نظام الفواتير الآلية والربط المالي الشامل مع شركات التأمين الصحي',
      'إدارة الصيدلية المركزية ومراقبة تواريخ الصلاحية وحد الطلب للمستلزمات',
      'إدارة الموارد البشرية الطبية وجداول نوبتجيات الأطباء والتمريض بدقة',
    ],
    solution_en: [
      'Smart appointment scheduling for clinics and surgical suites',
      'Unified Electronic Medical Records (EMR) accessible in sub-seconds',
      'Automated medical billing and insurance co-pay clearing',
      'Central pharmacy dispensing with automated reorder alerts',
      'Medical HR and physician shift rotation management',
    ],
    deliverables_ar: [
      'الجدولة الذكية للمواعيد وحجوزات العيادات الخارجية',
      'السجلات الطبية الإلكترونية الموحدة (EMR)',
      'الفواتير الآلية والربط المالي مع التأمين الطبي',
      'إدارة الصيدلية المركزية وصرف الأدوية ومخزون المستلزمات',
      'شؤون العاملين والموارد البشرية الطبية وتوزيع النوبتجيات',
    ],
    deliverables_en: [
      'Smart appointment scheduling',
      'Unified Electronic Medical Records (EMR)',
      'Automated medical billing & insurance clearing',
      'Central pharmacy dispensing & inventory',
      'Medical HR & shift rotations',
    ],
    result_ar: 'تحول رقمي كامل للمستشفى والقضاء على 95% من السجلات الورقية وتسريع خدمة المريض',
    result_en: '100% digital hospital transformation with 95% paperwork eliminated',
    icon: 'Activity',
  },

  // 6. amer-acc - Tax & Accounting Consultancy Client Case Study
  {
    id: 6,
    badge: 'TAX & ACCOUNTING CLIENT',
    title_ar: 'تأمين البريد والأنظمة المحاسبية — مكتب عامر للضرائب',
    title_en: 'Corporate Email & Tax Systems — Amer Tax Consultancy',
    category_ar: 'تأمين البريد واستضافة الضرائب',
    category_en: 'Mail Security & Tax Cloud',
    client_ar: 'مكتب عامر للمحاسبة والاستشارات الضريبية — مصر',
    client_en: 'Amer Tax & Accounting Consultancy — Egypt',
    executiveSummary_ar:
      'هجرة وتأمين أكثر من 500 بريد رسمي لمكتب عامر للمحاسبة مع توثيق SPF/DKIM/DMARC لمنع انتحال الشخصية والسبام، وتوفير بيئة سحابية سريعة لـ 25 محاسباً مع نسخ احتياطي يومي مشفر.',
    executiveSummary_en:
      'Migrated and secured 500+ corporate mailboxes with SPF/DKIM/DMARC, deployed high-performance cloud hosting for 25 tax auditors with automated daily backups and zero tax-season downtime.',
    description_ar:
      'هجرة وتأمين 500+ بريد رسمي بمعدل تسليم 100%، واستضافة برامج المحاسبة والضرائب سحابياً لـ 25 مراجعاً مع نسخ يومي معزول.',
    description_en:
      'Migration & security hardening of 500+ mailboxes with SPF/DKIM/DMARC, plus cloud hosting for 25 tax auditors with automated backups.',
    tech: ['500+ Mail Migration', 'SPF / DKIM / DMARC', 'Cloud VPS Hosting', 'Automated Daily Backups', 'IT as a Service (ITaaS)'],
    challenges_ar: [
      'تكرار سقوط خوادم البريد القديمة ووصول إيميلات المصلحة والعملاء لمجلد السبام',
      'بطء الأجهزة المحلية وتأخر تبادل الملفات المالية الضخمة خلال موسم الفحص الضريبي',
      'مخاطر فقدان البيانات المالية الحساسة لعملاء المكتب في حال تعطل أحد الأجهزة',
      'الحاجة لدخول المحاسبين من المكاتب ومقرات العملاء بأمان كامل دون تأخير',
    ],
    challenges_en: [
      'Frequent legacy mail server outages and critical tax invoices landing in spam folders',
      'Local PC bottlenecks and slow financial file sharing during peak tax filing season',
      'Elevated risk of data corruption or loss on unbacked local office hard drives',
      'Need for secure remote access for auditors working from client sites or home',
    ],
    solution_ar: [
      'هجرة 500+ صندوق بريد رسمي بسلاسة وصفر توقف إلى سيرفرات بريد خاصة عالية الموثوقية',
      'ضبط سجلات التوثيق SPF و DKIM و DMARC لضمان وصول الرسائل لصندوق الوارد',
      'تخصيص خادم سحابي عالي المواصفات لتشغيل برامج المحاسبة والضرائب لـ 25 محاسباً في نفس الوقت',
      'نظام نسخ احتياطي يومي آلي مشفر ينقل لقطات البيانات إلى سحابة نُزول تِك المعزولة',
      'قطاع تقني كخدمة (IT as a Service): إدارة استباقية وتحديثات أمان مستمرة دون حاجة لتوظيف فني IT',
    ],
    solution_en: [
      'Zero-downtime migration of 500+ corporate mailboxes to sovereign private cloud mail servers',
      'Configured hardened SPF, DKIM, and DMARC cryptographic records ensuring 100% inbox deliverability',
      'Deployed a dedicated cloud server hosting tax computation software for 25 concurrent auditors',
      'Automated daily encrypted off-site cloud snapshots of all financial databases',
      'Full IT as a Service (ITaaS) proactive monitoring and maintenance',
    ],
    deliverables_ar: [
      '1. هجرة وتأمين 500+ بريد رسمي بمعدل تسليم 100%',
      '2. استضافة برامج المحاسبة والضرائب سحابياً',
      '3. نظام نسخ احتياطي يومي مشفر تلقائي لبيانات العملاء',
      '4. قطاع تقني كخدمة (IT as a Service) ودعم فني متخصص 24/7',
    ],
    deliverables_en: [
      '1. 500+ corporate mailboxes migrated and hardened with 100% inbox rate',
      '2. High-performance cloud hosting for tax software',
      '3. Automated daily encrypted off-site cloud backup pipeline',
      '4. Full IT as a Service (ITaaS) with dedicated 24/7 technical support',
    ],
    result_ar: 'وصول الإيميلات بنسبة 100%، إنجاز الإقرارات الضريبية أسرع بنسبة 80%، واستقرار تام على مدار الساعة',
    result_en: '100% email deliverability, 80% faster tax turnaround, and zero IT hiring overhead',
    icon: 'Mail',
  },

  // 7. Al-Safwa Healthcare Group - Mail Services & Migration Case Study
  {
    id: 7,
    badge: 'MAIL MIGRATION CLIENT',
    title_ar: 'هجرة وتأمين البريد الطبي — مجموعة الصفوة',
    title_en: 'Medical Email Migration & Security — Al-Safwa Group',
    category_ar: 'هجرة وتأمين البريد',
    category_en: 'Email Migration & Security',
    client_ar: 'مجموعة الصفوة الطبية — مصر',
    client_en: 'Al-Safwa Healthcare Group — Egypt',
    executiveSummary_ar:
      'هجرة أكثر من 250 صندوق بريد رسمي للأطباء والإداريين إلى خوادم سحابية خاصة مع تفعيل توثيق SPF/DKIM/DMARC وأرشفة مشفرة بصفر توقف عن العمل.',
    executiveSummary_en:
      'Zero-downtime migration of 250+ medical email accounts to private cloud servers with SPF/DKIM/DMARC enforcement and encrypted archiving.',
    description_ar:
      'هجرة وتأمين 250 صندوق بريد للأطباء والإدارة مع تفعيل حماية SPF/DKIM/DMARC وأرشفة سحابية قانونية.',
    description_en:
      'Zero-downtime migration of 250+ mailboxes to private cloud servers with SPF/DKIM/DMARC hygiene.',
    tech: ['Private Mail Server', 'DMARC Enforcement', 'DKIM 2048-bit', 'SPF Records', 'Encrypted Archiving', 'IT as a Service'],
    challenges_ar: [
      'انقطاعات متكررة في البريد القديم وسقوط الرسائل المهمة في مجلد السبام',
      'تعرض النطاق لمحاولات احتيال وتزييف لعناوين البريد الخاصة بالإدارة',
      'صعوبة إدارة المساحات الضخمة لمراسلات 250 طبيباً وموظفاً',
    ],
    challenges_en: [
      'Frequent email downtime and critical medical correspondence landing in spam',
      'Vulnerability to domain spoofing and phishing attempts',
      'Storage capacity crunches across 250 physician and administrator inboxes',
    ],
    solution_ar: [
      'هجرة سلسة (Zero Downtime) لكافة الرسائل إلى سيرفر بريد سحابي مخصص',
      'تطبيق أعلى معايير التوثيق SPF وDKIM وسياسة DMARC المشددة',
      'أرشفة سحابية مشفرة لجميع المراسلات لضمان عدم ضياع أي وثيقة أو استشارة طبية',
      'قطاع تقني كخدمة (IT as a Service): متابعة سجلات البريد وحل طلبات الموظفين فوراً',
    ],
    solution_en: [
      'Zero-downtime IMAP synchronization cutover to a dedicated private mail server',
      'Enforced strict 2048-bit DKIM, SPF alignment, and DMARC reject policies',
      'Configured automated legal cloud archiving for all clinic mailboxes',
      'Full IT as a Service with direct engineer dispatch for staff onboarding',
    ],
    result_ar: 'صفر انقطاع في البريد، إنهاء السبام بنسبة 99%، ووصول فوري لصناديق الوارد',
    result_en: 'Zero downtime cutover, 99% spam elimination, and 100% inbox delivery rate',
    icon: 'Mail',
  },

  // 8. El-Gomhouria Logistics & Trade - Domain Protection & Anti-Phishing Case Study
  {
    id: 8,
    badge: 'MAIL MIGRATION CLIENT',
    title_ar: 'حماية النطاق والمراسلات — شركة الجمهورية اللوجستية',
    title_en: 'Domain Security & Email Hardening — El-Gomhouria Logistics',
    category_ar: 'حماية النطاقات والبريد',
    category_en: 'Domain Security & Email',
    client_ar: 'شركة الجمهورية للخدمات اللوجستية والتجارة — مصر',
    client_en: 'El-Gomhouria Logistics & Trade — Egypt',
    executiveSummary_ar:
      'حماية نطاق الشركة من محاولات التزييف وانتحال الشخصية، وهجرة 120 صندوق بريد لوجستي مع أرشفة سحابية مشفرة للرسائل التجارية ومراقبة أمنية مستمرة.',
    executiveSummary_en:
      'Domain reputation hardening preventing invoice spoofing, paired with migration of 120 commercial mailboxes into an audited secure mail environment.',
    description_ar:
      'حماية نطاق الشركة ومكافحة هجمات التصيد وتوثيق SPF/DKIM/DMARC مع أرشفة سحابية لـ 120 صندوق بريد.',
    description_en:
      'Domain brand protection and migration of 120 mailboxes with strict anti-phishing filters and legal archiving.',
    tech: ['Anti-Phishing Shield', 'DMARC Quarantine/Reject', 'Cloud Mail Archiving', 'DNSSEC', 'IMAP/SMTP TLS 1.3'],
    challenges_ar: [
      'محاولات إرسال فواتير شحن مزيفة لعملاء الشركة بانتحال اسم النطاق التجاري',
      'تكرار استقبال روابط خبيثة هددت أجهزة موظفي التخليص الجمركي والشحن',
    ],
    challenges_en: [
      'Fraudulent freight invoices sent to overseas clients using spoofed sender domains',
      'Incoming phishing malware targeting customs clearance staff workstations',
    ],
    solution_ar: [
      'تفعيل معايير DMARC بسياسة الرفض الفوري لمنع أي طرف من إرسال إيميل باسم الشركة',
      'هجرة حسابات البريد إلى سيرفرات مشفرة تدعم بروتوكول TLS 1.3 مع جدار حماية للسبام',
      'تفعيل قطاع تقني كخدمة (IT as a Service) للمراقبة اللحظية والاستجابة للتهديدات',
    ],
    solution_en: [
      'Activated DMARC policy blocking unauthorized spoofed emails globally',
      'Migrated commercial mailboxes to TLS 1.3 servers with enterprise spam filtering',
      'Deployed IT as a Service 24/7 telemetry monitoring inbound email anomalies',
    ],
    result_ar: 'حماية تامة من فواتير الاحتيال واستقرار كامل للمراسلات التجارية الدولية',
    result_en: 'Zero spoofed invoices and 100% stable global freight communication',
    icon: 'Shield',
  },

  // 9. Everest Transport Fleet Management
  {
    id: 9,
    badge: 'FLEET IOT & TELEMETRY',
    title_ar: 'تتبع الأسطول الذكي (IoT) — شركة إيفرست للنقل',
    title_en: 'IoT Fleet Telemetry Platform — Everest Transport',
    category_ar: 'اللوجستيات وتتبع الأساطيل',
    category_en: 'Fleet Logistics & IoT',
    client_ar: 'شركة ايفرست للنقل واللوجستيات — مصر',
    client_en: 'Everest Transport & Logistics — Egypt',
    executiveSummary_ar:
      'منظومة رقمية متكاملة لتتبع أسطول الشاحنات لحظياً عبر محافظات مصر، جدولة الرحلات، تحسين مسارات استهلاك الوقود، وربط حساسات الـ IoT مع لوحات تحكم سحابية مباشرة للإدارة.',
    executiveSummary_en:
      'IoT fleet telemetry platform orchestrating real-time GPS tracking, sensor fuel monitoring, and dynamic route optimization across Egyptian highways with cloud analytics.',
    description_ar:
      'نظام متكامل لتتبع الشاحنات لحظياً، جدولة الرحلات، تحسين استهلاك الوقود، ومراقبة حية للسائقين عبر المحافظات.',
    description_en:
      'Real-time vehicle GPS tracking, dynamic route optimization, scheduled driver dispatching, and fuel sensors.',
    tech: ['React Native', 'Node.js', 'PostgreSQL', 'MQTT IoT', 'Grafana', 'Mapbox', 'IT as a Service'],
    challenges_ar: [
      'صعوبة تتبع حركة مئات الشاحنات بين المحافظات وسرقة الوقود على الطرق السريعة',
      'تأخر تسليم الشحنات نتيجة عدم وجود مسارات محددة وجدولة ذكية',
    ],
    challenges_en: [
      'Lack of real-time visibility into inter-governorate freight trucks and fuel shrinkage',
      'Delivery delays due to unoptimized manual dispatching workflows',
    ],
    solution_ar: [
      'تركيب أجهزة تتبع GPS وحساسات وقود ذكية مربوطة ببروتوكول MQTT لحظي',
      'بناء تطبيق جوال للسائقين ولوحة تحكم سحابية لغرفة العمليات المركزية',
      'تقارير تحليلية لمعدلات استهلاك الوقود وساعات عمل السائقين مع تنبيهات الحوادث',
    ],
    solution_en: [
      'Installed industrial GPS trackers and fuel sensors streaming telemetry via MQTT',
      'Built a dedicated mobile driver app and centralized operations control dashboard',
      'Automated fuel consumption analytics, speed violations, and scheduled dispatching',
    ],
    deliverables_ar: [
      '1. أجهزة تتبع GPS وحساسات الوقود لأسطول الشاحنات',
      '2. تطبيق الموبايل للسائقين ولوحة العمليات المركزية',
      '3. لوحات تحكم بيانية لاستهلاك الوقود والرحلات',
      '4. قطاع تقني كخدمة (ITaaS) ودعم تشغيلي مستمر',
    ],
    deliverables_en: [
      '1. Fleet IoT GPS & Fuel Sensor Telemetry Grid',
      '2. Mobile Driver Application & Dispatch Console',
      '3. Real-Time Operations & Fuel Analytics Dashboard',
      '4. Ongoing IT as a Service (ITaaS) Operations Support',
    ],
    result_ar: 'تقليل تكاليف الوقود بنسبة ٢٥٪ وزيادة إنتاجية الرحلات بنسبة ٤٠٪',
    result_en: '25% fuel cost reduction & 40% dispatch productivity gain',
    icon: 'Truck',
  },

  // 10. Meshkat Nour Charity Foundation - Turnkey IT & Network Infrastructure
  {
    id: 10,
    badge: 'CHARITY FOUNDATION IT',
    title_ar: 'البنية التحتية والشبكات والدومين — مؤسسة مشكاة نور الخيرية',
    title_en: 'Turnkey IT Infrastructure & Active Directory — Meshkat Nour Foundation',
    category_ar: 'البنية التحتية والشبكات المؤسسية',
    category_en: 'Turnkey Enterprise IT & Networks',
    client_ar: 'المؤسسة الخيرية مشكاة نور — مصر',
    client_en: 'Meshkat Nour Charity Foundation — Egypt',
    executiveSummary_ar:
      'مشروع تأسيس البنية التحتية الرقمية والشبكية المتكاملة للمقر الرئيسي لمؤسسة مشكاة نور الخيرية: تمديد كابلات الشبكات المنظمة وسيرفر الدومين المركزي (Active Directory & DHCP)، تركيب شبكة كاميرات مراقبة CCTV ذكية، سنترال تليفوني رقمي داخلي (VoIP)، خادم ملفات مركزي (File Server) بحوكمة دقيقة للصلاحيات، منظومة نسخ احتياطي تلقائي، وشبكة واي فاي مؤسسية تغطي كافة المقرات.',
    executiveSummary_en:
      'Turnkey enterprise IT infrastructure for Meshkat Nour Charity Foundation: structured network cabling, centralized Active Directory (AD) & DHCP, high-definition CCTV security grid, enterprise VoIP telephony PBX, central secure File Server with role-based access, automated daily backups, and robust multi-AP Wi-Fi mesh.',
    description_ar:
      'تجهيز البنية التحتية الكاملة: شبكات منظمة، سيرفر الدومين (AD & DHCP)، كاميرات المراقبة، سنترال VoIP داخلي، خادم ملفات مركزي، ونسخ احتياطي مع شبكة واي فاي مؤسسية.',
    description_en:
      'Complete turnkey infrastructure: structured cabling, Active Directory & DHCP domain, CCTV surveillance, VoIP PBX, central file server, automated backups, and enterprise Wi-Fi.',
    tech: [
      'Active Directory & DHCP',
      'Structured Cat6A Cabling',
      'HD CCTV Surveillance Grid',
      'VoIP Telephony PBX',
      'Central Secure File Server',
      'Automated Daily Backup',
      'Enterprise Wi-Fi Mesh (APs)',
      'IT as a Service (ITaaS)',
    ],
    challenges_ar: [
      'تشتت ملفات وأبحاث الحالات الإنسانية والمستفيدين على أجهزة متعددة بدون حوكمة أو صلاحيات موحدة',
      'عدم وجود دومين مركزي للتحكم في حسابات الموظفين ومستويات الأمان على البيانات الحساسة للمتبرعين',
      'صعوبة التواصل الهاتفي السريع بين الإدارات الميدانية والمكتبية وغياب شجرة تحويل المكالمات',
      'انعدام النسخ الاحتياطي التلقائي مما عرض السجلات والوثائق الرسمية لخطر الفقدان عند تعطل أي جهاز',
      'ضعف تغطية الإنترنت والواي فاي في قاعات التدريب واللجان الاجتماعية',
    ],
    challenges_en: [
      'Fragmented social research files and beneficiary data scattered across unmanaged individual PCs',
      'Absence of centralized domain management (Active Directory) to enforce user security policies and donor privacy',
      'Communication friction between field teams and administrative offices without unified telephony',
      'Acute data loss vulnerability without automated scheduled off-site file backups',
      'Dead Wi-Fi zones impeding daily operations in training halls and social committees',
    ],
    solution_ar: [
      'تمديد كابلات شبكات منظمة Cat6A وتركيب راكات وسويتشات جيجابت احترافية',
      'تجهيز خادم دومين مركزي (Active Directory & DHCP) مع هيكل تنظيمي وسياسات أمان صارمة',
      'تركيب شبكة كاميرات مراقبة IP عالية الدقة لتأمين المقر الإداري ومستودعات المساعدات العينية',
      'نشر سنترال رقمي VoIP وهواتف شبكية داخلية تسهل الاتصال الفوري والتحويل بين جميع المكاتب',
      'تأسيس خادم ملفات مركزي (File Server) بمصفوفة أذونات مشددة حسب الأقسام والمسميات الوظيفية',
      'تفعيل خط أنابيب نسخ احتياطي يومي آلي مشفر ينقل لقطات البيانات لسحابة نُزول تِك المعزولة',
      'تغطية المقر بالكامل بشبكة أكسس بوينت واي فاي مؤسسية ذكية تفصل شبكة الموظفين عن الزوار',
      'قطاع تقني كخدمة (IT as a Service): متابعة دورية ودعم فني هندسي مستمر على مدار الساعة',
    ],
    solution_en: [
      'Turnkey Cat6A structured cabling, server rack management, and managed Gigabit switches',
      'Configured enterprise Active Directory Domain Services (AD DS) and DHCP failover',
      'Deployed high-resolution night-vision IP CCTV grid covering administrative suites and aid storage',
      'Installed VoIP PBX telephony system with customized IVR and extensions across all desks',
      'Provisioned centralized high-speed File Server with fine-grained department ACL permissions',
      'Automated daily encrypted immutable backup pipeline to Nuzul Tech secure cloud repository',
      'Deployed enterprise dual-band Wi-Fi access points with isolated VLANs for staff and guests',
      'Full IT as a Service (ITaaS) with dedicated proactive engineering dispatch and SLA',
    ],
    deliverables_ar: [
      '1. بنية تحتية لكابلات الشبكات المنظمة وسيرفر الدومين (Active Directory & DHCP)',
      '2. منظومة كاميرات المراقبة التلفزيونية CCTV عالية الدقة والتسجيل المركزي',
      '3. نظام السنترال والاتصالات التليفونية الرقمية (VoIP Telephony)',
      '4. خادم الملفات المركزي (File Server) وحوكمة الصلاحيات',
      '5. منظومة النسخ الاحتياطي التلقائي اليومي المعزول',
      '6. شبكة الواي فاي المؤسسية وأجهزة الـ Access Points المدارة',
      '7. قطاع تقني كخدمة (IT as a Service) ودعم فني هندسي 24/7',
    ],
    deliverables_en: [
      '1. Turnkey Structured Cabling, Server Rack & Active Directory (AD/DHCP) Infrastructure',
      '2. HD IP CCTV Video Surveillance System & Central NVR Recording',
      '3. Unified VoIP PBX Telephony System & Digital Desktop Extensions',
      '4. Centralized Enterprise File Server with Secure Departmental Access Matrix',
      '5. Automated Daily Encrypted Off-Site Backup Pipeline',
      '6. Enterprise Wi-Fi Mesh Network with Managed Access Points',
      '7. Dedicated 24/7 IT as a Service (ITaaS) Proactive Management',
    ],
    result_ar: 'تحول رقمي مؤسسي بنسبة جاهزية 100%، مشاركة الملفات والأبحاث في ثوانٍ معدودة، وحماية تامة لبيانات المتبرعين والمستفيدين',
    result_en: '100% infrastructure stability, instantaneous file collaboration, and zero security vulnerabilities',
    icon: 'Building2',
  },

  // 11. OmnixTrack CRM - Software QA Acceptance & Telephony Validation
  {
    id: 11,
    badge: 'ENTERPRISE CRM & QA',
    title_ar: 'فحص واختبار واعتماد المنظومة — منصة أومنيكس تراك (OmnixTrack CRM)',
    title_en: 'Software QA & Acceptance Testing — OmnixTrack CRM',
    category_ar: 'اختبار واعتماد البرمجيات والـ CRM',
    category_en: 'Software QA & Enterprise CRM',
    client_ar: 'منصة أومنيكس تراك (omnixtrack.com) — للشركات والمصانع والشحن',
    client_en: 'OmnixTrack CRM Platform (omnixtrack.com) — Egypt',
    executiveSummary_ar:
      'مشروع فحص واختبار جودة واعتماد استلام برمجي (QA & UAT Acceptance Testing) لمنظومة أومنيكس تراك (OmnixTrack CRM) الموجهة لإدارة علاقات العملاء في المصانع والشركات والعيادات والصيدليات وشركات الشحن: فحص واختبار المنصة السحابية والويب، تطبيقات الهواتف الذكية (iOS و Android)، نظام الاتصالات والمكالمات السحابية المدمج، واختبارات الضغط العالي والأمان لضمان مطابقة المعايير القياسية للاستلام البرمجي.',
    executiveSummary_en:
      'Turnkey software QA, security validation, and vendor handover sign-off for OmnixTrack CRM (omnixtrack.com) serving manufacturing plants, logistics fleets, clinics, and retail pharmacies: auditing web ERP portal, native mobile apps, embedded WebRTC cloud call center, and stress concurrency under peak workloads.',
    description_ar:
      'فحص واختبار شامل للموقع، المنصة السحابية، تطبيقات الموبايل، ونظام المكالمات واعتماد استلام المشروع البرمجي بمطابقة تامة للمعايير القياسية.',
    description_en:
      'Comprehensive QA testing for web portal, mobile apps, and cloud VoIP call system, ensuring certified vendor handover.',
    tech: [
      'QA Acceptance Testing',
      'Web CRM Portal Testing',
      'Mobile iOS & Android QA',
      'Cloud VoIP & Call Testing',
      'Load & Concurrency Testing',
      'Security & Privilege Audit',
      'API & DB Stress Testing',
      'Vendor Handover Sign-off',
    ],
    challenges_ar: [
      'الحاجة للتحقق من استقرار النظام عند استقبال مئات مكالمات العملاء المتزامنة وتتبع شحنات البضائع',
      'صعوبة استلام كود المشروع وتطبيقات الموبايل من شركة البرمجيات المطورة دون تدقيق تقني متخصص ومستقل',
      'مخاطر وجود ثغرات برمجية أو بطء في قواعد البيانات يهدد تجربة أصحاب المصانع والصيدليات والعيادات',
      'ضرورة اختبار دقة التكامل بين تطبيق الجوال ونظام المكالمات السحابي ولوحة الإدارة المركزية',
    ],
    challenges_en: [
      'Need to verify multi-tenant CRM stability under high concurrent delivery dispatches and customer call volume',
      'Vendor handover risks without an independent technical audit of source code and application architecture',
      'Potential memory leaks, slow database queries, or data sync flaws across clinics and retail pharmacies',
      'Requirement for rigorous end-to-end testing between mobile apps, WebRTC call engine, and central web ERP',
    ],
    solution_ar: [
      'إجراء اختبارات وظيفية شاملة (End-to-End Functional Testing) لكافة مسارات النظام وموديولات الـ CRM',
      'اختبار تطبيقات الهواتف الذكية (iOS و Android) على مختلف الأجهزة والشاشات وفحص استجابة الإشعارات',
      'محاكاة ضغط مكالمات هاتفية مكثفة واختبار نقاء الصوت والتحويل الآلي لنظام المكالمات السحابي المدمج',
      'تنفيذ اختبارات ضغط وحِمل عالي (Stress & Load Testing) على قواعد البيانات ومنافذ الـ API',
      'فحص أمني دقيق للتأكد من تشفير البيانات وحماية خصوصية العملاء وحسابات الشركات والمصانع',
      'إصدار تقرير فني شامل بالملاحظات ونقاط التحسين تم على إثره اعتماد واستلام المشروع بنجاح تام',
    ],
    solution_en: [
      'Conducted comprehensive End-to-End functional test suites across all OmnixTrack CRM modules',
      'Performed deep compatibility, UI/UX, and push-notification testing across various iOS & Android devices',
      'Simulated heavy call traffic to validate WebRTC audio fidelity and automatic call routing resiliency',
      'Executed high-concurrency stress & load testing on REST APIs and relational database query execution',
      'Audited application security posture, data encryption at rest/transit, and role-based privilege isolation',
      'Delivered an exhaustive acceptance audit report certifying flawless technical handover',
    ],
    deliverables_ar: [
      '1. خطة فحص واختبار جودة برمجية متكاملة (QA & Test Matrix)',
      '2. اختبار واعتماد منصة الويب وتطبيقات الموبايل (iOS و Android)',
      '3. فحص كفاءة نظام المكالمات والاتصالات السحابية المدمج',
      '4. اختبارات ضغط الأداء والأمان ومطابقة المعايير القياسية',
      '5. تقرير الاعتماد الفني النهائي واستلام المشروع من المطورين',
    ],
    deliverables_en: [
      '1. Comprehensive QA Test Automation & Matrix Suite',
      '2. Certified Web Platform & Cross-Platform Mobile Applications',
      '3. Validated Embedded Cloud VoIP & Telephony System',
      '4. Performance Stress, Load & Security Audit Sign-off',
      '5. Formal Engineering Handover Certification & Acceptance Report',
    ],
    result_ar: 'اعتماد واستلام المنظومة البرمجية بجاهزية 100%، وتوفير أكثر من 60% من وقت وتكاليف الإصلاحات، وإطلاق تجاري سلس يخدم مئات الشركات والمصانع والصيدليات',
    result_en: '100% certified software handover, >60% post-launch bug triage savings, and seamless production rollout for hundreds of enterprise users',
    icon: 'CheckCircle2',
  },

  // 12. Dr. Khaled Farouk Obeido Clinic - Turnkey EMR & Integrated Q-System
  {
    id: 12,
    badge: 'ORTHOPEDIC CLINIC & Q-SYSTEM',
    title_ar: 'نظام إدارة العيادات ونظام الانتظار الذكي (Q-System) — عيادة د. خالد عبيدو',
    title_en: 'Clinic Management & Patient Q-System — Dr. Khaled Obeido Clinic',
    category_ar: 'أنظمة العيادات وإدارة الانتظار (Q-System)',
    category_en: 'Clinic EMR & Patient Queue System',
    client_ar: 'عيادة د. خالد فاروق عبيدو لجراحة العظام والمفاصل — مصر',
    client_en: 'Dr. Khaled Farouk Obeido Orthopedic Clinic — Egypt',
    executiveSummary_ar:
      'تنفيذ وتطوير منظومة رقمية متكاملة لعيادة د. خالد فاروق عبيدو لجراحة العظام والمفاصل: تشمل برنامج إدارة العيادة الشامل (EMR)، السجلات الطبية الرقمية للأشعة والعمليات، الفواتير والروشتات الإلكترونية، مع نظام شاشات النداء الرقمي وإدارة طوابير وانتظار المرضى (Q-System) المدمج لحظياً مع الاستقبال وغرفة الكشف.',
    executiveSummary_en:
      'Turnkey clinic management & smart Queue System (Q-System) for Dr. Khaled Farouk Obeido Orthopedic Surgery Clinic: integrating outpatient EMR records, orthopedic DICOM scan archiving, digital e-prescriptions, and real-time waiting room calling screens.',
    description_ar:
      'نظام إدارة عيادة متكامل يشمل السجلات الطبية (EMR)، الروشتات الإلكترونية، ونظام انتظار وتنظيم دور المرضى (Q-System) مع شاشات النداء الآلي.',
    description_en:
      'Integrated clinic management system featuring patient EMR, digital prescriptions, and automated Queue Management (Q-System) with smart calling displays.',
    tech: [
      'ClinicCore™ EMR',
      'Integrated Q-System',
      'Smart Calling Displays',
      'Digital E-Prescriptions',
      'Orthopedic Scan Archiving',
      'Local & Cloud Sync',
      'Automated Patient SMS',
      'IT as a Service',
    ],
    challenges_ar: [
      'تكدس وازدحام صالة الانتظار والجدل حول أسبقية الدخول وغياب الترتيب المنظم للمراجعين',
      'صعوبة استرجاع التاريخ المرضي وصور أشعة الرنين السابقة لمرضى العظام والمفاصل يدوياً',
      'استغراق وقت طويل في كتابة الروشتات الورقية وحساب مدفوعات الكشف والجبائر والعلاج الطبيعي',
      'تأخر التنسيق بين مكتب الاستقبال وغرفة الطبيب أثناء فترات الذروة',
    ],
    challenges_en: [
      'Waiting room crowding and disputes over appointment turns without a visible queue system',
      'Time-consuming manual retrieval of previous orthopedic X-rays, MRI scans, and surgical history',
      'Inefficient handwritten prescriptions and manual financial tracking of cast & therapy fees',
      'Friction and delayed communication between reception staff and physician consultation room',
    ],
    solution_ar: [
      'تطبيق نظام Q-System ذكي يمنح المريض تذكرة رقمية فور الوصول مع عرض الدور على شاشات العرض بصالة الانتظار',
      'نداء صوتي وآلي متزامن بضغطة زر واحدة من شاشة الطبيب لاستدعاء المريض التالي',
      'ملف طبي إلكتروني موحد لكل مريض يوثق التشخيص، صور الأشعة، والعمليات السابقة مع سرعة بحث بالاسم أو الهاتف',
      'إصدار روشتات مطبوعة ومحمية بباركود مع قوالب جاهزة لأدوية العظام والمفاصل وجرعاتها',
      'نظام تقارير مالية يومية وشهرية دقيقة لحساب الإيرادات والمصروفات وصافي الأرباح',
    ],
    solution_en: [
      'Deployed a smart Q-System issuing numbered thermal tickets and rendering live queue status on waiting lounge screens',
      'Instant 1-click audio-visual patient calling directly from the doctor consultation terminal',
      'Unified orthopedic EMR profiles with instant retrieval of surgical notes and radiological scans',
      'Standardized barcode-enabled printed e-prescriptions with pre-configured orthopedic dosage templates',
      'Automated financial reconciliation auditing daily clinic revenue, consultation, and procedure fees',
    ],
    deliverables_ar: [
      '1. نظام إدارة العيادة الطبية والسجلات الإلكترونية (EMR)',
      '2. نظام طوابير وانتظار المرضى الذكي المدمج (Q-System)',
      '3. شاشات العرض الذكية بصالة الانتظار ووحدة النداء الآلي',
      '4. منظومة الروشتات الإلكترونية والطباعة السريعة',
      '5. التقارير المالية والإحصائية وحسابات العيادة',
      '6. تدريب طاقم الاستقبال والتمريض والدعم الفني المستمر',
    ],
    deliverables_en: [
      '1. ClinicCore™ Electronic Medical Records (EMR) Suite',
      '2. Integrated Smart Queue Management Engine (Q-System)',
      '3. Waiting Area Digital Signage & Automated Audio Caller',
      '4. Fast Barcode E-Prescription & Template Module',
      '5. Daily Clinic Revenue & Procedure Analytics Dashboard',
      '6. Turnkey Staff Onboarding & Dedicated Technical Support',
    ],
    result_ar: 'القضاء التام على عشوائية الانتظار، تخفيض زمن انتظار المرضى بنسبة 50%، وتوفير وصول فوري للسجلات الطبية وفحوصات الأشعة السابقة',
    result_en: 'Zero waiting room disputes, 50% reduction in patient turnover time, and instantaneous access to patient orthopedic histories',
    icon: 'Activity',
  },
];

export const NUZUL_TESTIMONIALS: Testimonial[] = [
  {
    name_en: 'Dr. Khaled Farouk Obeido',
    name_ar: 'د. خالد فاروق عبيدو',
    role_en: 'Consultant Orthopedic Surgeon – Dr. Khaled Obeido Clinic',
    role_ar: 'استشاري جراحة العظام والمفاصل — عيادة د. خالد عبيدو',
    text_en:
      'The clinic management system and integrated Q-System implemented by Nuzul Tech completely eliminated waiting room crowding and accelerated patient flow. Accessing previous X-rays and issuing printed prescriptions takes seconds now.',
    text_ar:
      'نظام العيادات والـ Q-System اللي طوروه نُزول تِك لعيادتنا قضى تماماً على زحمة الانتظار ونظّم دخول المرضى بدقة وسلاسة عبر شاشات العرض. متابعة ملفات المرضى وفحوصات الأشعة وطباعة الروشتة بياخد ثواني معدودة، شغل احترافي ومحترم جداً.',
    rating: 5,
  },
  {
    name_en: 'Mr. Mohamed Deif',
    name_ar: 'أ. محمد ضيف',
    role_en: 'Founder & CEO – OmnixTrack CRM Platform (omnixtrack.com)',
    role_ar: 'المؤسس والمدير التنفيذي — منصة OmnixTrack CRM',
    text_en:
      'Nuzul Tech delivered exceptional QA and acceptance testing for our OmnixTrack CRM web system, mobile apps, and embedded VoIP call engine. Their load testing and security audits ensured a flawless commercial rollout.',
    text_ar:
      'استعنا بفريق نُزول تِك في فحص واختبار واستلام مشروع OmnixTrack CRM من شركة البرمجيات. قاموا بفحص دقيق ومبهر للسيستم ويب وتطبيقات الموبايل ونظام المكالمات واختبارات الضغط والأمان. تقاريرهم الهندسية ضمنت لنا استلام سيستم احترافي خالٍ من أي عيوب قبل الإطلاق الرسمي.',
    rating: 5,
  },
  {
    name_en: 'Dr. Khaled Abdelrahman',
    name_ar: 'د. خالد عبد الرحمن',
    role_en: 'General Director – Trust Specialized Hospital',
    role_ar: 'المدير العام — مستشفى تراست التخصصي (القاهرة)',
    text_en:
      'Nuzul Tech executed our complete hospital infrastructure: 180+ 4K IP cameras, Fortinet perimeter security, and medical mail. Their engineering team provides proactive 24/7 SLA.',
    text_ar:
      'نُزول تِك أسست البنية التحتية لمستشفى تراست بالكامل: شبكة 180+ كاميرا 4K، جدران حماية Fortinet، وكابلات الفايبر وتأمين البريد الطبي. فريق هندسي متواجد معنا على مدار الساعة باستجابة فورية.',
    rating: 5,
  },
  {
    name_en: 'Eng. Ahmed Ali',
    name_ar: 'م. أحمد علي',
    role_en: 'Head of IT & Operations – ABCH Hospital',
    role_ar: 'مدير تكنولوجيا المعلومات والتشغيل — مستشفى ABCH (القاهرة)',
    text_en:
      'The High-Availability virtualization clusters, patient portal, and internal ticketing deployed by Nuzul Tech boosted our operational uptime to 99.98% and accelerated approvals.',
    text_ar:
      'بيئة الأنظمة الافتراضية المزدوجة (Virtualization HA Clusters) وبوابة المرضى ونظام الموافقات الطبية اللي نفذوها لمستشفى ABCH رفعت جاهزية التشغيل لـ 99.98% وسرعت شغلنا 4 أضعاف.',
    rating: 5,
  },
  {
    name_en: 'Prof. Dr. Hesham El-Ghazaly',
    name_ar: 'أ.د. هشام الغزالي',
    role_en: 'Board & Clinical Administration – Cairo Cure Oncology',
    role_ar: 'إدارة مركز Cairo Cure التخصصي للأورام (القاهرة)',
    text_en:
      'Decoupling radiological PACS archives from email and migrating to a hybrid cloud model slashed our annual IT overhead by >75% and stabilized physician clinic workstations completely.',
    text_ar:
      'فصل أرشيف الأشعة الطبية عن البريد وتأسيس السحابة الهجينة لمركز Cairo Cure خفض تكاليف الاستضافة بنسبة تتجاوز 75% واستقرت أجهزة الأطباء والعيادات من أول دقيقة.',
    rating: 5,
  },
  {
    name_en: 'Mr. Mohamed Ibrahiem',
    name_ar: 'أ. محمد إبراهيم',
    role_en: 'Founder & Managing Director – Mohamed Ibrahiem Office for Finance',
    role_ar: 'المؤسس والشريك الرئيسي — مكتب محمد إبراهيم للاستشارات والخدمات المالية',
    text_en:
      'Migrating our audit workflows and ERP databases to Nuzul Tech high-availability cloud allowed 30 consultants to work concurrently across Egypt and GCC with zero latency.',
    text_ar:
      'نقل منظومتنا المحاسبية وقواعد البيانات إلى خوادم نُزول تِك السحابية أمّن دخول 30 مستشاراً ومراجعاً بالتوازي من مقرات الشركات والعملاء بسرعة فائقة واستقرار 100% في موسم إقفال الميزانيات.',
    rating: 5,
  },
  {
    name_en: 'Dr. Nour El-Hoda El-Gammal',
    name_ar: 'د. نور الهدى الجمال',
    role_en: 'Chairwoman of the Board of Trustees – Meshkat Nour Charity Foundation',
    role_ar: 'رئيس مجلس الأمناء — مؤسسة مشكاة نور الخيرية',
    text_en:
      'Nuzul Tech engineered our foundation’s complete infrastructure: structured network cabling, central Active Directory, CCTV surveillance, VoIP PBX, and secure file servers with automated backups and Wi-Fi mesh.',
    text_ar:
      'نُزول تِك أسست البنية التحتية لمؤسسة مشكاة نور الخيرية باحترافية استثنائية: شبكات وكابلات، دومين مركزي AD، كاميرات مراقبة، سنترال داخلي، وخادم ملفات مع حوكمة كاملة للنسخ الاحتياطي والواي فاي.',
    rating: 5,
  },
  {
    name_en: 'Mr. Mohamed Salama',
    name_ar: 'أ. محمد سلامة',
    role_en: 'Executive Director – Lebanon Hospital',
    role_ar: 'المدير التنفيذي — مستشفى لبنان',
    text_en:
      'The comprehensive Hospital ERP and EMR system eliminated 95% of our manual paperwork and unified outpatient, pharmacy, and surgical operations smoothly.',
    text_ar:
      'منظومة الـ ERP والسجلات الطبية الإلكترونية الموحدة (EMR) لمستشفى لبنان قضت على 95% من المعاملات الورقية وربطت الاستقبال بالصيدلية وغرف العمليات بدقة لا متناهية.',
    rating: 5,
  },
  {
    name_en: 'Mr. Amer Mohamed',
    name_ar: 'أ. عامر محمد',
    role_en: 'Managing Partner – Amer Tax & Accounting (amer-acc)',
    role_ar: 'الشريك الإداري — مكتب عامر للمحاسبة والاستشارات الضريبية (amer-acc)',
    text_en:
      'Hardening 500+ corporate mailboxes with SPF/DKIM/DMARC and moving databases to high-speed cloud instances achieved 100% email inbox delivery and zero tax audit downtime.',
    text_ar:
      'هجرة وتأمين 500+ إيميل رسمي مع توثيق DMARC ونقل قواعد البيانات للسحابة ضمن وصول إيميلاتنا بنسبة 100% لصندوق الوارد وسرّع مراجعة الإقرارات الضريبية 80%.',
    rating: 5,
  },
  {
    name_en: 'Dr. Maged El-Sherif',
    name_ar: 'د. ماجد الشريف',
    role_en: 'Chairman – Al-Safwa Healthcare Group',
    role_ar: 'رئيس مجلس الإدارة — مجموعة الصفوة الطبية',
    text_en:
      'Zero-downtime migration of 250+ physician mailboxes with legal cloud archiving eliminated 99% of spam and secured all medical dispatches.',
    text_ar:
      'نقل وتأمين أكثر من 250 حساب بريد طبي رسمي لأطباء المجموعة بصفر ثانية توقف عن العمل، مع حماية تامة ضد التزييف والسبام.',
    rating: 5,
  },
  {
    name_en: 'Mr. Ehab Othman',
    name_ar: 'أ. إيهاب عثمان',
    role_en: 'Operations Director – El-Gomhouria Logistics & Trade',
    role_ar: 'مدير العمليات والتجارة — شركة الجمهورية للخدمات اللوجستية',
    text_en:
      'DMARC domain enforcement protected our commercial shipping brand against invoice spoofing and stabilized our international trade communications.',
    text_ar:
      'حماية نطاق الشركة وتفعيل معايير DMARC المشددة حمت فواتيرنا التجارية الدولية من محاولات التزييف ووفرت استقراراً تاماً للمراسلات اللوجستية.',
    rating: 5,
  },
  {
    name_en: 'Mr. Mohamed Gamal',
    name_ar: 'أ. محمد جمال',
    role_en: 'Founder & Managing Director – Everest Transport & Logistics',
    role_ar: 'مدير إدارة والمؤسس — شركة إيفرست للنقل واللوجستيات',
    text_en:
      'Real-time IoT fleet telemetry and automated mobile dispatch reduced our fuel consumption by 25% and boosted nationwide trips productivity by 40%.',
    text_ar:
      'نظام تتبع الأسطول الذكي (IoT) والربط مع تطبيق السائقين قلل استهلاك الوقود بنسبة 25% ورفع إنتاجية ومراقبة الرحلات بين المحافظات بنسبة 40%.',
    rating: 5,
  },
];

export const NUZUL_BLOG_POSTS: BlogPost[] = [
  // 1. Healthcare PACS & Cairo Cure
  {
    id: 1,
    slug: 'cairo-cure-case-study',
    title_en: 'Strategic Case Study: Email & Medical PACS Architecture at Cairo Cure',
    title_ar: 'دراسة حالة استراتيجية: هندسة وحوكمة البنية التحتية للبريد والأرشيف الطبي لمركز Cairo Cure',
    date: '10 يناير 2026',
    category_en: 'Healthcare IT & Governance',
    category_ar: 'حوكمة النظم الطبية',
    excerpt_en:
      'How decoupling DICOM PACS archives from corporate email cut annual operational costs by >75% and stabilized physician workstations.',
    excerpt_ar:
      'كيف نجحت نُزول تِك في فصل الأرشيف الطبي عن البريد وتخفيض التكاليف التشغيلية بنسبة تتجاوز 75% وتفعيل قطاع تقني كخدمة (IT as a Service).',
    content_en:
      'Executive Summary:\nCairo Cure Oncology Center faced a severe operational bottleneck. Email mailboxes had expanded to over 50GB per doctor due to sending heavy radiological PACS scans. Systems were sluggish and international cloud invoices were rising unsustainably.\n\nNuzul Tech intervened with a hybrid engineered architecture:\n1. Dedicated local high-speed PACS storage for instantaneous DICOM viewing.\n2. Cloud encrypted immutable backups ensuring complete HIPAA/medical compliance.\n3. Corporate email hardening with SPF/DKIM/DMARC protocols.\n4. IT as a Service (ITaaS): Proactive monitoring and support eliminating the need for an expensive full-time internal IT salary.\n\nResult: Full patient data security, immediate workstation responsiveness, and over 75% reduction in yearly cloud fees.',
    content_ar:
      'الملخص التنفيذي:\nواجه مركز Cairo Cure التخصصي للأورام أزمة كبرى نتيجة استخدام البريد الإلكتروني كأرشيف لصور الأشعة الطبية الضخمة. أدى ذلك لتضخم الصناديق وبطء شديد في أجهزة العيادات وتكاليف باهظة.\n\nتدخلت نُزول تِك بابتكار حل هجين ذكي:\n١. إنشاء أرشيف طبي محلي فائق السرعة للوصول لصور الأشعة في ثوانٍ معدودة داخل المستشفى.\n٢. نسخ سحابي مشفر معزول ضد برمجيات الفدية لحماية ملفات المرضى التاريخية.\n٣. هجرة حسابات البريد لخوادم آمنة مع تفعيل بروتوكولات الحماية العالمية.\n٤. قطاع تقني كامل كخدمة (IT as a Service): حصل المركز على إدارة استباقية ومراقبة للبنية التحتية، مما أزال الحاجة تماماً لتوظيف مهندس IT مقيم بمرتب شهري مرتفع.\n\nالنتيجة: استقرار فوري لعمل الأطباء، صفر فقدان للبيانات، وتخفيض التكاليف السنوية بنسبة تتجاوز 75%.',
  },

  // 2. Cloud VPS & Hosted Business Infrastructure
  {
    id: 2,
    slug: 'cloud-vps-business-infrastructure-egypt',
    title_en: 'Cloud VPS & Managed Workspaces: Starts 1,000 EGP/mo (Infrastructure Blueprint)',
    title_ar: 'الخوادم السحابية المدارة واستضافة الأعمال: تبدأ من 1000 ج.م/شهرياً وكيف توفر على الشركات؟',
    date: '5 فبراير 2026',
    category_en: 'Cloud Servers & Infrastructure',
    category_ar: 'السيرفرات والبنية السحابية',
    excerpt_en:
      'How companies scale operations smoothly with high-frequency NVMe Cloud VPS starting from 1,000 EGP/mo.',
    excerpt_ar:
      'كيف تستفيد الشركات والمؤسسات من استضافة أنظمتها وقواعد بياناتها على خوادم سحابية فائقة السرعة تبدأ من 1000 ج.م/شهرياً.',
    content_en:
      'Running business software on unmanaged individual office computers causes sync delays, workflow fragmentation, and high data loss risk.\n\nWith Nuzul Tech High-Performance Cloud VPS (starting from 1,000 EGP/mo), enterprise teams centralize their core databases and applications in a high-speed, secure environment. 20+ team members can collaborate concurrently from anywhere with zero latency and automated daily snapshots.',
    content_ar:
      'تشغيل البرامج المركزية على أجهزة الموظفين في المكتب يسبب مشاكل تعارض الملفات، بطء نقل البيانات، وخطر تلف الأجهزة المحلية.\n\nمع خوادم نُزول تِك السحابية المدارة (تبدأ من 1000 ج.م/شهرياً)، تقدر الشركات والمؤسسات تجمع قواعد بياناتها وأنظمتها في بيئة سحابية فائقة السرعة. يتيح ذلك لعشرات الموظفين العمل في نفس الوقت من أي مكان مع نسخ احتياطي يومي مشفر واستقرار بنسبة 99.9%.',
  },

  // 3. IT as a Service (ITaaS)
  {
    id: 3,
    slug: 'it-as-a-service-egypt-enterprise',
    title_en: 'IT as a Service (ITaaS): Cut Costs by 60% Without Hiring Expensive In-House Staff',
    title_ar: 'قطاع تقني كامل كخدمة (IT as a Service): خفض تكاليفك 60% وتخلّص من مرتبات مهندسي الـ IT المقيمين',
    date: '20 يناير 2026',
    category_en: 'Enterprise IT Strategy',
    category_ar: 'استراتيجيات الـ IT للمؤسسات',
    excerpt_en:
      'Why modern Egyptian hospitals and corporations are outsourcing infrastructure monitoring and support to Nuzul Tech ITaaS model.',
    excerpt_ar:
      'لماذا تتجه المستشفيات والشركات في مصر للاعتماد على إدارة البنية التحتية كخدمة متكاملة (IT as a Service) بدلاً من تعيين مهندسين مقيمين بتكاليف مرتفعة.',
    content_en:
      'Hiring an in-house IT team in Egypt costs significant recurring payroll, insurance, and management overhead, yet internal teams often lack cross-discipline expertise in firewalls, cloud virtualization, and disaster recovery.\n\nNuzul Tech IT as a Service provides enterprise clients with continuous telemetry, preventative maintenance visits, and emergency SLA response times under 15 minutes at a fraction of full-time employee overhead.',
    content_ar:
      'تعيين مهندس IT مقيم بمرتب شهري مرتفع داخل الشركة أو المستشفى يمثل عبئاً مالياً وإدارياً كبيراً، وغالباً ما ينقصه التخصص الشامل في أمن الشبكات والنسخ السحابي وإدارة السيرفرات المتقدمة.\n\nمع خدمة (IT as a Service) من نُزول تِك، بتحصل مؤسستك على فريق هندسي كامل: مهندس شبكات سيسكو، مسؤول أنظمة سحابية، وخبير أمن سيبراني مع مراقبة لحظية 24/7 وزيارات صيانة واستجابة فورية لأي طارئ بأقل من 40% من تكلفة التوظيف التقليدي.',
  },

  // 4. Healthcare ERP & Clinic Systems
  {
    id: 4,
    slug: 'hospital-erp-his-digital-health',
    title_en: 'Modern Hospital ERP & Clinic Systems: From Paper Records to Zero-Downtime EMR',
    title_ar: 'الأنظمة الصحية وإدارة المستشفيات: الانتقال من السجلات الورقية إلى EMR فائق السرعة',
    date: '15 يناير 2026',
    category_en: 'Healthcare IT Systems',
    category_ar: 'الأنظمة الصحية والمستشفيات',
    excerpt_en:
      'A comprehensive breakdown of hospital information systems (HIS) and clinic SaaS platforms like Nuzul Hospital OS and ClinicCore.',
    excerpt_ar:
      'دليل كامل لتشغيل أنظمة المستشفيات الشاملة (HIS) ومنصات العيادات السحابية والمحلية (ClinicCore) لتحسين تجربة المرضى وأتمتة الفواتير.',
    content_en:
      'Modern healthcare facilities require unified data architectures: patients should be registered once, and their diagnostic history, radiological scans, prescriptions, and billing should synchronize across outpatient clinics, inpatient wards, pharmacy, and laboratory in real time.\n\nNuzul Tech builds and deploys both on-premise dedicated hospital ERPs (like the ABCH and Lebanon Hospital platforms) and modular clinic SaaS solutions.',
    content_ar:
      'المستشفيات والعيادات الحديثة في مصر بتحتاج نظام معلومات صحي متكامل (HIS): المريض بيسجل بياناته مرة واحدة، وكل تحاليله، أشعته، وتاريخه الطبي بيكون متاح للطبيب في العيادة والاستشاري في العمليات والصيدلي لصرف العلاج في لحظات.\n\nنُزول تِك بتقدم حلولاً متطورة تشمل السيرفرات المحلية للمستشفيات مع منصات سحابية وهجينة مثل Nuzul ClinicCore للعيادات التخصصية.',
  },

  // 5. Corporate Email & DMARC
  {
    id: 5,
    slug: 'corporate-email-dmarc-phishing-egypt',
    title_en: 'Corporate Email Governance: Defeating Spoofing & Phishing with SPF, DKIM, and DMARC',
    title_ar: 'حوكمة البريد الإلكتروني للشركات: منع تزييف الإيميلات والاحتيال المالي بتوثيق DMARC',
    date: '28 ديسمبر 2025',
    category_en: 'Cybersecurity & Email',
    category_ar: 'أمن البريد والنطاقات',
    excerpt_en:
      'How enterprise clients like Al-Safwa and El-Gomhouria prevent invoice fraud and guarantee 100% inbox deliverability.',
    excerpt_ar:
      'كيف تضمن الشركات والمجموعات الطبية حماية نطاقها من إرسال فواتير مزيفة وتفادي وصول مراسلاتها إلى صندوق الرسائل غير المرغوب فيها (Spam).',
    content_en:
      'Phishing attacks against Egyptian commercial importers, exporters, and clinics frequently exploit unauthenticated domains. Fraudsters spoof executive email addresses to redirect bank wire transfers.\n\nConfiguring strict SPF alignment, 2048-bit DKIM cryptographic keys, and a DMARC p=reject policy ensures no unauthorized server can ever forge an email using your corporate domain.',
    content_ar:
      'هجمات الاحتيال الإلكتروني ضد الشركات المصرية بتعتمد بشكل أساسي على انتحال اسم النطاق وإرسال فواتير ورسائل بنكية مزيفة للعملاء.\n\nتطبيق سياسات SPF وDKIM وتفعيل بروتوكول DMARC الصارم (Reject) بيمنع أي طرف في العالم من إرسال رسالة باسم شركتك، وبيضمن وصول كل إيميلاتك لصناديق الوارد (Inbox) بدون ما تدخل فولدر الـ Spam.',
  },

  // 6. Network Firewalls & VLANs
  {
    id: 6,
    slug: 'network-firewalls-vlan-security',
    title_en: 'Next-Gen Firewalls & VLAN Segmentation: Securing Corporate Networks Against Intrusions',
    title_ar: 'أمن الشبكات وجدران الحماية المتقدمة: كيفية عزل الأنظمة الحساسة عبر الـ VLANs في الشركات',
    date: '10 ديسمبر 2025',
    category_en: 'Infrastructure & Firewalls',
    category_ar: 'الشبكات والجدران النارية',
    excerpt_en:
      'Deploying Fortinet and Sophos hardware firewalls to isolate accounting servers and medical equipment from public Wi-Fi.',
    excerpt_ar:
      'دليل مهندسي نُزول تِك في تركيب جدران الحماية الفيزيائية وعزل شبكات الأجهزة الطبية والمحاسبة عن شبكة الضيوف العامة.',
    content_en:
      'Connecting all corporate PCs, printers, guest smartphones, and database servers to a flat network is a major security vulnerability.\n\nBy deploying enterprise hardware firewalls (FortiGate or Sophos) and segmenting traffic via VLANs, sensitive payroll, ERP, and medical imaging servers remain isolated behind encrypted boundaries with strict access control lists (ACLs).',
    content_ar:
      'توصيل جميع أجهزة الموظفين والطابعات والزوار مع سيرفرات الحسابات وقواعد البيانات في شبكة واحدة مفتوحة بيعتبر ثغرة أمنية خطيرة.\n\nمهندسو نُزول تِك بيقوموا بتركيب جدران نارية متطورة وعزل الشبكة عبر تقنية VLANs، بحيث تكون أجهزة المحاسبة وغرف العمليات معزولة تماماً في شبكة خاصة مشفرة لا يمكن لأي شخص متصل بالواي فاي العام الوصول إليها.',
  },

  // 7. VoIP Telephony & PBX
  {
    id: 7,
    slug: 'voip-telephony-branch-interconnection',
    title_en: 'VoIP Telephony Systems: Interconnecting Branches & Slashing Telecom Invoices to Zero',
    title_ar: 'أنظمة السنترال والاتصالات VOIP: ربط الفروع وتوفير 100% من فواتير المكالمات الداخلية',
    date: '25 نوفمبر 2025',
    category_en: 'VoIP & Telecommunications',
    category_ar: 'أنظمة السنترال والـ VOIP',
    excerpt_en:
      'How multi-branch companies and hospitals utilize cloud IP-PBX for custom IVR, call recording, and seamless internal extensions.',
    excerpt_ar:
      'كيف تستفيد الشركات متعددة الفروع والمستشفيات من سنترال VoIP الرقمي لتسجيل المكالمات وتوجيه المتصلين آلياً عبر الـ IVR.',
    content_en:
      'Traditional landlines incur high cross-branch billing and lack call recording, analytics, and mobile extensions for remote supervisors.\n\nModern enterprise VoIP telephony from Nuzul Tech enables unified internal dial plans across headquarters, warehouses, and hospital branches — reducing internal calling costs to zero while providing professional IVR auto-attendants.',
    content_ar:
      'الخطوط الأرضية والسنترالات القديمة بتكلف الشركات مبالغ طائلة في المكالمات بين الفروع، بالإضافة لغياب تسجيل المكالمات وتحليلات الكول سنتر.\n\nأنظمة سنترال VoIP الحديثة من نُزول تِك بتتيح ربط كل فروع الشركة ومصانعها برقم هاتف داخلي موحد، مع شجرة رد آلي (IVR)، تسجيل لكافة المكالمات، وإمكانية الرد من تطبيق الهاتف المحمول أثناء التنقل.',
  },

  // 8. Immutable 3-2-1 Cloud Backups
  {
    id: 8,
    slug: 'immutable-cloud-backup-ransomware-protection',
    title_en: 'The 3-2-1 Immutable Backup Architecture: Defeating Ransomware for Egyptian Enterprises',
    title_ar: 'استراتيجية النسخ الاحتياطي الهجين المعزول 3-2-1: كيف تحمي بيانات شركتك من فيروسات الفدية؟',
    date: '12 نوفمبر 2025',
    category_en: 'Backup & Disaster Recovery',
    category_ar: 'النسخ الاحتياطي والطوارئ',
    excerpt_en:
      'Why conventional local backups fail during malware attacks, and how air-gapped immutable cloud snapshots restore operations in minutes.',
    excerpt_ar:
      'لماذا تفشل الهاردات الخارجية العادية في حماية الشركات من هجمات الفدية، وكيف تضمن تكنولوجيا النسخ المعزول استعادة الأنظمة في دقائق.',
    content_en:
      'Modern ransomware scripts scan the local network and actively corrupt connected USB drives, NAS shares, and unencrypted local folders.\n\nNuzul Tech implements the 3-2-1 immutable backup standard: 3 copies of data across 2 media types, with at least 1 off-site immutable snapshot that cannot be overwritten, encrypted, or deleted by any local intruder for a set retention window.',
    content_ar:
      'برمجيات الفدية الخبيثة اليوم بتقوم بمسح الشبكة وتشفير كل الفولدرات المشتركة والهاردات الخارجية المتصلة بالأجهزة.\n\nالحل الوحيد المضمون هو نظام النسخ الهجين المعزول (Immutable Backups) الذي توفره نُزول تِك: نسخ مشفر يتم نقله تلقائياً إلى خوادم سحابية معزولة لا يمكن لأي فيروس أو مستخدم تعديلها أو حذفها، مما يضمن استعادة كل برامجك وقواعد بياناتك خلال أقل من 15 دقيقة.',
  },

  // 9. Bare-Metal Dedicated Servers vs Cloud VPS
  {
    id: 9,
    slug: 'bare-metal-dedicated-servers-vs-vps',
    title_en: 'Dedicated Bare-Metal vs Cloud VPS: Hardware Performance for High-Throughput Workloads',
    title_ar: 'السيرفرات الكاملة Dedicated مقابل الـ VPS: متى تحتاج شركتك عتاداً فيزيائياً مخصصاً؟',
    date: '3 نوفمبر 2025',
    category_en: 'Servers & Bare-Metal',
    category_ar: 'السيرفرات الكاملة',
    excerpt_en:
      'A deep dive into zero virtualization overhead, NVMe RAID arrays, and dedicated bandwidth for hospital PACS and heavy databases.',
    excerpt_ar:
      'مقارنة تقنية عملية توضح متى يكون السيرفر الفيزيائي الكامل Dedicated هو الخيار الأمثل لقواعد بيانات المستشفيات والشركات الكبرى.',
    content_en:
      'While Cloud VPS is exceptionally agile and cost-effective, mission-critical workloads like radiological imaging clusters and multi-million row ERP databases demand 100% non-shared CPU cycles and raw NVMe throughput.\n\nNuzul Tech Bare-Metal Dedicated Servers offer hardware RAID controllers, dedicated 1Gbps / 10Gbps unmetered uplink pipes, and isolated physical security within our Cairo Tier-III data centers.',
    content_ar:
      'رغم أن سيرفرات VPS السحابية بتوفر مرونة ممتازة، إلا أن أعباء العمل الحساسة مثل أرشفة الأشعة الطبية وقواعد بيانات الـ ERP الضخمة بتحتاج معالجات فيزيائية مخصصة 100% بدون أي مشاركة موارد أو تأخير.\n\nسيرفرات نُزول تِك الكاملة (Dedicated Servers) بتوفر عتاداً مستقلاً تماماً، مصفوفات RAID فائقة السرعة، واتصالاً شبكياً مخصصاً داخل مراكز بياناتنا بالقاهرة مع دعم هندسي على مدار الساعة.',
  },

  // 10. SIEM Security & SOC Telemetry
  {
    id: 10,
    slug: 'siem-platform-security-operations-egypt',
    title_en: 'SIEM Security Operations Platform: Real-Time Threat Correlation & SOC Telemetry',
    title_ar: 'منصة مراقبة الأحداث الأمنية SIEM: كيف تحمي شبكتك وسيرفراتك برصد لحظي للهجمات؟',
    date: '21 أكتوبر 2025',
    category_en: 'Cybersecurity & SIEM',
    category_ar: 'الأمن السيبراني والـ SIEM',
    excerpt_en:
      'Centralized event log correlation, anomaly detection, and automated incident alerting for financial and clinical infrastructures.',
    excerpt_ar:
      'كيف تعمل منصة SIEM من نُزول تِك على تجميع السجلات الأمنية من كافة السيرفرات والشبكات ورصد محاولات الاختراق والتنبيه الفوري لها.',
    content_en:
      'Without centralized logging, an unauthorized intrusion can remain undetected for months. A modern Security Information & Event Management (SIEM) pipeline ingests syslog telemetry from firewalls, servers, databases, and switches.\n\nNuzul Tech deploys scalable SIEM platforms that correlate anomalous authentication attempts, privilege escalation, and lateral movement, alerting on-call engineers via instant alerts before damage occurs.',
    content_ar:
      'بدون منصة مركزية لمراقبة السجلات الأمنية، قد يظل الاختراق غير مكتشف لعدة أشهر. منصة SIEM تقوم بربط سجلات الخوادم، جدران الحماية، والسويتشات لحظياً.\n\nتوفر نُزول تِك منصات SIEM تراقب السلوك المشبوه ومحاولات تسجيل الدخول غير المصرح بها وترسل تنبيهات فورية لمهندسينا للتدخل السريع وحماية بيانات المنشأة.',
  },

  // 11. E-Commerce Architecture & Egyptian Gateways
  {
    id: 11,
    slug: 'ecommerce-development-egyptian-gateways',
    title_en: 'High-Conversion E-Commerce Stores: InstaPay, Vodafone Cash, and Real-Time Inventory',
    title_ar: 'تصميم المتاجر الإلكترونية في مصر: دمج إنستاباي وفودافون كاش مع أتمتة الشحن والمخازن',
    date: '15 أكتوبر 2025',
    category_en: 'Software & E-Commerce',
    category_ar: 'المتاجر الإلكترونية',
    excerpt_en:
      'Architecting resilient online retail platforms integrated with local Egyptian payment methods and automated delivery fulfillment.',
    excerpt_ar:
      'كيف تبني منصة تجارة إلكترونية سريعة ومربوطة ببوابات الدفع المصرية مع إدارة المخزون وتتبع الشحنات أوتوماتيكياً.',
    content_en:
      'Egyptian online consumers expect immediate local payment frictionless checkout (InstaPay, mobile wallets like Vodafone Cash, and credit cards). Slow checkout flows lead to high cart abandonment.\n\nNuzul Tech develops bespoke e-commerce engines with sub-second page loads, automated inventory synchronization, and direct courier API integrations for hassle-free automated order fulfillment.',
    content_ar:
      'المشتري المصري اليوم بيفضل الدفع الفوري عبر إنستاباي أو محافظ الهاتف كاش والفيزا. أي بطء في صفحة الدفع بيؤدي لضياع المبيعات.\n\nنُزول تِك بتصمم وتطور متاجر إلكترونية احترافية مدمجة مع كافة بوابات الدفع المصرية، إدارة المخزون، وربط آلي مع شركات الشحن لطباعة البوالص وتتبع الأوردرات تلقائياً.',
  },

  // 12. Egyptian Domain Names (.eg & .com.eg)
  {
    id: 12,
    slug: 'egyptian-domain-registration-dns-security',
    title_en: 'Securing Your Digital Identity: Official Egyptian Domains (.eg & .com.eg) & DNSSEC',
    title_ar: 'اسم النطاق والهوية الرقمية: تسجيل وحماية النطاقات المصرية الرسمية .eg و.com.eg',
    date: '1 أكتوبر 2025',
    category_en: 'Domains & DNS Infrastructure',
    category_ar: 'النطاقات والـ DNS',
    excerpt_en:
      'Why reserving your national .eg domain establishes corporate credibility and prevents trademark squatting in Egypt.',
    excerpt_ar:
      'أهمية حجز وتسجيل النطاق المصري الرسمي (.eg) للمؤسسات والشركات، وتأمين سجلات الـ DNS ضد التزييف وسرقة النطاق.',
    content_en:
      'Your domain name is the cornerstone of your corporate identity and brand authority. Registering official Egyptian TLDs (.eg, .com.eg) protects your trademark legally within Egypt while giving your website higher regional search trust.\n\nNuzul Tech handles legal paperwork, DNS zone propagation on Anycast networks, and automated WHOIS privacy lock.',
    content_ar:
      'اسم النطاق هو حجر الأساس لهوية شركتك ومصداقيتها أمام العملاء. حجز النطاق المصري الرسمي (.eg و.com.eg) بيحمي علامتك التجارية قانونياً في مصر ويمنح موقعك ثقة أعلى لدى محركات البحث.\n\nنُزول تِك بتتولى كافة إجراءات التسجيل الرسمية، وإدارة سجلات الـ DNS السحابية فائقة السرعة مع حماية كاملة من سرقة النطاق.',
  },

  // 13. Mobile Apps for Healthcare & Enterprise
  {
    id: 13,
    slug: 'enterprise-mobile-app-development-egypt',
    title_en: 'Enterprise Mobile Apps: Offline-First Architecture & Real-Time Cloud Sync',
    title_ar: 'تطبيقات الجوال للمؤسسات: كيف تخدم عملاءك وتزيد مبيعاتك عبر تطبيقات iOS وأندرويد؟',
    date: '20 سبتمبر 2025',
    category_en: 'Mobile App Development',
    category_ar: 'تطبيقات الجوال',
    excerpt_en:
      'Building performant React Native and Flutter enterprise mobile apps with push notifications and instant in-app payment.',
    excerpt_ar:
      'دليل برمجة وتطوير تطبيقات الموبايل للعيادات، الشركات، وسلاسل التوريد مع دعم العمل دون إنترنت والإشعارات الفورية.',
    content_en:
      'Mobile apps place your services directly in your customer’s hands 24/7. Whether it is an outpatient booking app for a clinical network or an inventory scanning utility for warehouse staff, responsive mobile design is paramount.\n\nNuzul Tech develops cross-platform mobile apps featuring real-time push notifications, offline biometric authentication, and frictionless payment checkouts.',
    content_ar:
      'تطبيق الموبايل بيخلي خدمات شركتك متاحة لعميلك في أي وقت وبضغطة زر. سواء كان تطبيق لحجز مواعيد الأطباء والاطلاع على التحاليل، أو تطبيق لإدارة المبيعات والمخازن للمناديب.\n\nنُزول تِك بتقدم برمجة متطورة لتطبيقات iOS وAndroid بتصميم جذاب، إشعارات لحظية، وإمكانية الدفع المباشر عبر إنستاباي والبطاقات البنكية.',
  },

  // 14. Modern Web Development & Corporate Portals
  {
    id: 14,
    slug: 'modern-corporate-web-development-seo',
    title_en: 'Corporate Website Development: Crafting High-Speed Portals That Reflect Your Authority',
    title_ar: 'تصميم وتطوير مواقع الشركات: كيف تصنع منصة رقمية تعكس مكانة أعمالك وتعزز مبيعاتك؟',
    date: '10 سبتمبر 2025',
    category_en: 'Web Development & Design',
    category_ar: 'تصميم وتطوير المواقع',
    excerpt_en:
      'Why modern business websites must combine breathtaking visual polish with sub-second Core Web Vitals and solid SEO.',
    excerpt_ar:
      'كيف تجمع بين التصميم الجذاب وتجربة التصفح فائقة السرعة مع تصدر نتائج البحث في جوجل لشركتك.',
    content_en:
      'A generic slow website harms brand credibility and repels high-value clients. Enterprise web engineering demands lightning performance, clean typography, and search engine optimization.\n\nNuzul Tech builds custom web applications with Next.js and React that deliver 100/100 Core Web Vitals and tell your story with clarity.',
    content_ar:
      'موقع الشركة هو واجهتك الأولى أمام المستثمرين والعملاء الكبار. الموقع البطيء أو غير المتناسق بيقلل من مصداقية العمل.\n\nنُزول تِك بتقدم خدمات تطوير مواقع احترافية للشركات والمؤسسات، بتصميم يعكس هوية عملك بدقة، وسرعة تحميل فائقة وتوافق تام مع محركات البحث SEO ومختلف مقاسات الشاشات.',
  },

  // 15. UI/UX Design Engineering
  {
    id: 15,
    slug: 'ui-ux-design-clinical-intake-conversion',
    title_en: 'UI/UX Design Engineering: Balancing User Experience with Business Conversion Goals',
    title_ar: 'تصميم واجهة وتجربة المستخدم (UI/UX): كيف تضاعف سهولة الاستخدام وتزيد تحويلات العملاء؟',
    date: '1 سبتمبر 2025',
    category_en: 'UI/UX Design Systems',
    category_ar: 'تصميم واجهة وتجربة المستخدم',
    excerpt_en:
      'How user research and intuitive design systems halved clinic check-in times and increased user satisfaction.',
    excerpt_ar:
      'دراسة تطبيقية لكيفية مساهمة إعادة تصميم مسار المستخدم في تقليل زمن انتظار المرضى بنسبة 50% وتحسين إنتاجية الموظفين.',
    content_en:
      'Great UI/UX is not just about pretty graphics; it is about eliminating friction from user workflows. When staff or clients can accomplish their tasks in half the clicks, operational efficiency surges.\n\nNuzul Tech crafts enterprise design systems, interactive prototypes, and ergonomic user journeys tailored to Arab and international workflows.',
    content_ar:
      'تصميم واجهات المستخدم وتجربة المستخدم (UI/UX) الناجح هو اللي بيشيل أي تعقيد من طريق العميل أو الموظف. لما يقدر المستخدم ينجز مهمته بنصف عدد الضغطات، الإنتاجية بتتضاعف.\n\nفريق التصميم في نُزول تِك بيبتكر أنظمة تصميم تفاعلية مبنية على دراسة سلوك المستخدم وتوازن بين الراحة التامة وأهداف عملك التجارية.',
  },

  // 16. ERP & CRM Systems in Egypt
  {
    id: 16,
    slug: 'erp-crm-systems-egypt-eta-compliance',
    title_en: 'Enterprise ERP & CRM: Integrating Resources, Sales, and Egyptian ETA E-Invoicing',
    title_ar: 'خدمات ERP وCRM للشركات: الربط المحاسبي الكامل مع الفاتورة والإيصال الإلكتروني المصري',
    date: '20 أغسطس 2025',
    category_en: 'Enterprise ERP & CRM',
    category_ar: 'أنظمة ERP وCRM',
    excerpt_en:
      'Automating corporate resource planning, customer relationships, inventory sync, and official Egyptian tax compliance.',
    excerpt_ar:
      'كيف تدير موارد شركتك وعلاقات عملائك بكفاءة أعلى مع ربط الفاتورة والإيصال الإلكتروني لمنظومة الضرائب المصرية.',
    content_en:
      'Scattered spreadsheets and manual invoicing lead to costly operational errors and tax compliance audits. An integrated ERP/CRM core centralizes inventory, procurement, payroll, and customer touchpoints.\n\nNuzul Tech develops bespoke ERP engines that comply fully with Egyptian Tax Authority (ETA) e-invoicing and e-receipt mandates, ensuring seamless audits and scalable growth.',
    content_ar:
      'الاعتماد على شيتات الإكسيل المنفصلة بيؤدي لأخطاء محاسبية ومخاطر أثناء الفحص الضريبي. نظام ERP وCRM الموحد بيجمع المخازن، المشتريات، المبيعات، وشؤون العاملين في مكان واحد.\n\nنُزول تِك بتطور أنظمة متكاملة متوافقة كلياً مع متطلبات منظومة الفاتورة والإيصال الإلكتروني لمصلحة الضرائب المصرية لتسريع وتيرة العمل ودعم نمو أرباحك.',
  },

  // 17. Meshkat Nour Foundation Case: Central AD & Turnkey IT
  {
    id: 17,
    slug: 'meshkat-nour-charity-it-infrastructure-active-directory',
    title_en: 'Turnkey IT for Non-Profits: Active Directory, VoIP PBX & Central Storage at Meshkat Nour',
    title_ar: 'البنية الرقمية لمؤسسات العمل الأهلي: إدارة الدومين المركزي والسنترال وخادم الملفات بمؤسسة مشكاة نور',
    date: '15 فبراير 2026',
    category_en: 'Infrastructure & Active Directory',
    category_ar: 'البنية التحتية والشبكات',
    excerpt_en:
      'How structured cabling, central AD DS, VoIP telephony, and automated backups secured sensitive donor and beneficiary records.',
    excerpt_ar:
      'توثيق تفصيلي لكيفية تأمين وحوكمة بيانات أبحاث المستفيدين والمتبرعين وتوحيد الاتصالات الداخلية عبر سنترال VoIP وخادم ملفات مركزي.',
    content_en:
      'Charity organizations and humanitarian foundations manage sensitive donor lists, relief distribution records, and social research documents across multiple departments.\n\nAt Meshkat Nour Charity Foundation, Nuzul Tech deployed turnkey structured cabling, centralized Active Directory & DHCP governance, enterprise HD CCTV surveillance, VoIP desktop extensions, and an immutable daily backup pipeline — resulting in zero data loss and instant cross-department file sharing.',
    content_ar:
      'المؤسسات الخيرية والمنظمات الأهلية بتتعامل مع بيانات فائقة الحساسية للمتبرعين، أبحاث الحالات الاجتماعية، ومستودعات المساعدات العينية.\n\nفي مقر مؤسسة مشكاة نور الخيرية، قام مهندسو نُزول تِك بتأسيس شبكات كابلات منظمة، خادم دومين مركزي (Active Directory & DHCP)، سنترال رقمي VoIP، شبكة كاميرات مراقبة عالية الدقة، وخادم ملفات مركزي بحوكمة أذونات دقيقة مع نسخ احتياطي يومي معزول، مما وفّر استقراراً كاملاً بنسبة 100% وحماية تامة لبيانات المتبرعين.',
  },

  // 18. OmnixTrack CRM: Software QA & Acceptance Testing
  {
    id: 18,
    slug: 'software-qa-acceptance-testing-omnixtrack-crm',
    title_en: 'Software Vendor Handover & QA Testing: The OmnixTrack CRM Acceptance Playbook',
    title_ar: 'فحص واختبار واستلام البرمجيات (QA): كيف تضمن استلام مشروع برمجي ناجح كما في OmnixTrack CRM؟',
    date: '28 يناير 2026',
    category_en: 'Software QA & Testing',
    category_ar: 'فحص واختبار البرمجيات',
    excerpt_en:
      'Why independent third-party QA and load testing prior to software vendor acceptance saves 60% in post-launch costs.',
    excerpt_ar:
      'دليل هندسي يوضح أهمية الفحص التقني واختبارات الضغط والمكالمات قبل توقيع محضر استلام أي مشروع برمجي من الشركات المطورة.',
    content_en:
      'Accepting a software deliverable without independent technical validation creates immense operational risks: hidden database bottlenecks, memory leaks, unencrypted API endpoints, and VoIP call dropouts under concurrency.\n\nFor the OmnixTrack CRM platform, Nuzul Tech conducted end-to-end QA verification across web apps, iOS/Android builds, WebRTC cloud telephony, and stress load simulations — delivering an audited certification report that guaranteed zero commercial launch disruptions.',
    content_ar:
      'استلام أي نظام برمجي أو تطبيق موبايل من شركة التطوير دون فحص وتدقيق تقني متخصص بيعرض العمل لخسائر مالية ضخمة وأخطاء متكررة بعد الإطلاق.\n\nفي مشروع منصة أومنيكس تراك (OmnixTrack CRM)، أجرى فريق نُزول تِك فحصاً هندسياً شاملاً لمنصة الويب وتطبيقات الموبايل ونظام المكالمات السحابية المدمجة مع اختبارات حِمل وضغط عالي (Stress Testing)، مما وفّر على الشركة أكثر من 60% من تكاليف معالجة الأخطاء اللاحقة وضمن انطلاقة تجارية ناجحة لمئات المصانع والشركات.',
  },

  // 19. Dr. Khaled Obeido Clinic: Q-System & Modern EMR
  {
    id: 19,
    slug: 'smart-clinic-q-system-patient-turnover-obeido',
    title_en: 'Smart Clinic Q-System: Halving Patient Waiting Time at Dr. Khaled Obeido Orthopedic Clinic',
    title_ar: 'تنظيم طوابير المرضى (Q-System) والعيادات الذكية: كيف قضت عيادة د. خالد عبيدو على زحام الانتظار؟',
    date: '18 يناير 2026',
    category_en: 'Healthcare IT & Q-System',
    category_ar: 'الأنظمة الصحية وإدارة العيادات',
    excerpt_en:
      'Deploying integrated patient queue management (Q-System) with smart digital displays and orthopedic EMR records.',
    excerpt_ar:
      'كيف ساهم دمج نظام الانتظار الذكي (Q-System) مع برنامج إدارة العيادة في تخفيض زمن الانتظار 50% وسرعة الوصول للأشعة السابقة.',
    content_en:
      'Waiting room congestion and unorganized queuing create friction and degrade patient satisfaction. In busy surgical and orthopedic practices, physicians also require sub-second access to previous radiological scans and automated prescription templates.\n\nNuzul Tech deployed an integrated ClinicCore™ and Q-System solution for Dr. Khaled Farouk Obeido Clinic, combining automated ticket dispensers, waiting room calling displays, and single-click patient records access.',
    content_ar:
      'زحام صالات الانتظار والجدل حول أسبقية الدخول بيخلق بيئة مرهقة للمرضى وفريق الاستقبال. وفي عيادات العظام والمفاصل، بيحتاج الطبيب للوصول الفوري لصور أشعة الرنين السابقة وطباعة الروشتة في ثوانٍ.\n\nنُزول تِك طبقت منظومة ClinicCore مدمجة مع نظام الانتظار الذكي (Q-System) لعيادة د. خالد فاروق عبيدو: تذاكر رقمية فورية، شاشات نداء آلي بصالة الانتظار، وملف طبي موحد يسترجع صور الأشعة والعمليات السابقة بضغطة زر واحدة.',
  },

  // 20. ABCH Hospital: Virtualization & Patient Relations (PR)
  {
    id: 20,
    slug: 'hospital-virtualization-patient-relations-abch',
    title_en: 'Hospital High-Availability Virtualization & Patient Relations (PR System) at ABCH',
    title_ar: 'الأنظمة الافتراضية عالية التوافرية وسيستم علاقات المرضى (PR System) بمستشفى ABCH',
    date: '8 يناير 2026',
    category_en: 'Hospital Infrastructure & PR',
    category_ar: 'تجهيز المستشفيات وعلاقات المرضى',
    excerpt_en:
      'Consolidating hospital servers into redundant Proxmox/VMware clusters and tracking patient satisfaction with a dedicated PR portal.',
    excerpt_ar:
      'كيف نجحت مستشفى ABCH في دمج 18 سيرفر في عنقود افتراضي موحد ورفع جاهزية التشغيل لـ 99.98% مع إدارة شكاوى ورعاية المرضى لحظياً.',
    content_en:
      'Hospitals cannot tolerate physical server crashes or disconnected patient feedback loops. Combining enterprise hypervisor virtualization with dedicated Patient Relations (PR) software creates a resilient operational backbone.\n\nAt ABCH Hospital, Nuzul Tech consolidated physical server silos into High-Availability Proxmox/VMware clusters with zero-loss automated failover, while engineering a custom Patient Relations (PR) management platform to monitor patient care inquiries and insurance approvals in real time.',
    content_ar:
      'المستشفيات الحديثة لا تحتمل توقف السيرفرات أو ضياع شكاوى وملاحظات المرضى. دمج بيئات الأنظمة الافتراضية المزدوجة (Virtualization HA) مع سيستم مخصص لإدارة علاقات ورعاية المرضى (PR System) بيشكل النواة الرقمية القوية لأي منشأة طبية.\n\nفي مستشفى ABCH بالقاهرة، قام مهندسو نُزول تِك بدمج الخوادم الفيزيائية في عنقود افتراضي متقدم يضمن استمرارية العمل عند أي عطل للأجهزة، مع بناء نظام PR System متطور لتتبع رضا المرضى وملاحظاتهم وتنسيق الموافقات التأمينية لحظياً.',
  },

  // 21. Tax & Accounting Disaster Recovery
  {
    id: 21,
    slug: 'tax-accounting-disaster-recovery-egypt',
    title_en: 'Disaster Recovery for Accounting & Tax Consultancies: Zero-Loss Playbook for Egyptian Firms',
    title_ar: 'استمرارية الأعمال والتعافي من الكوارث لمكاتب المحاسبة والضرائب: خطة حماية الدفاتر والسجلات المالية',
    date: '2 يناير 2026',
    category_en: 'Financial IT & Disaster Recovery',
    category_ar: 'الأنظمة المالية والنسخ الاحتياطي',
    excerpt_en:
      'How accounting firms like Mohamed Ibrahiem and Amer Tax protect audit files, tax filings, and ERP databases against hardware failure and ransomware.',
    excerpt_ar:
      'دليل هندسي يوضح كيف تحمي مكاتب المحاسبة والاستشارات الضريبية ملفات التدقيق وقواعد بيانات الـ ERP من الأعطال وفيروسات الفدية أثناء موسم الفحص الضريبي.',
    content_en:
      'During fiscal year closing and peak tax audit periods in Egypt, losing access to accounting ledgers or ERP databases spells financial and legal disaster.\n\nNuzul Tech implements dedicated disaster recovery pipelines for financial firms: automated hourly differential snapshots, off-site encrypted replica standby instances, and rapid 10-minute failover capabilities that guarantee zero data loss and uninterrupted auditor workflow.',
    content_ar:
      'خلال موسم إقفال الحسابات السنوية ومواعيد تقديم الإقرارات الضريبية في مصر، أي توقف لقواعد بيانات الـ ERP أو فقدان لملفات المراجعة يمثل كارثة مالية وقانونية للمكتب وعملائه.\n\nنُزول تِك تنفذ خطط استمرارية أعمال متخصصة لمكاتب المحاسبة والضرائب: نسخ تراكمي مشفر كل ساعة، سيرفرات احتياطية جاهزة للإقلاع الفوري في دقائق (Hot Standby)، وتأمين كامل ضد هجمات الفدية والأعطال الفيزيائية للأجهزة.',
  },

  // 22. Hybrid Cloud & Data Sovereignty
  {
    id: 22,
    slug: 'hybrid-cloud-data-sovereignty-egypt',
    title_en: 'Hybrid Cloud & Local Data Sovereignty: Why Egyptian Enterprises Choose On-Premises & Local Cloud',
    title_ar: 'السحابة الهجينة وتوطين البيانات في مصر: لماذا تفضل المؤسسات والعيادات البنية السحابية المحلية؟',
    date: '22 ديسمبر 2025',
    category_en: 'Cloud Infrastructure & Sovereignty',
    category_ar: 'السيرفرات والبنية السحابية',
    excerpt_en:
      'Balancing high-speed local LAN access with encrypted off-site cloud replication for hospitals, factories, and clinics in Egypt.',
    excerpt_ar:
      'كيف توازن المؤسسات والعيادات بين سرعة الشبكة المحلية الفائقة وسحابة نُزول تِك لتوفير 70% من التكاليف بالجنيه المصري دون تقلبات العملة.',
    content_en:
      'Relying entirely on overseas hyperscalers subjects Egyptian businesses to volatile foreign currency pricing, international cable latency, and compliance hurdles regarding sensitive local customer data.\n\nNuzul Tech Hybrid Cloud bridges the gap: ultra-fast local on-premise execution for medical PACS and factory ERPs, combined with sovereign automated off-site cloud backups and management billed transparently in Egyptian Pounds.',
    content_ar:
      'الاعتماد الكامل على السحابات الدولية يضع الشركات المصرية تحت ضغط تقلبات العملة وفواتير الدولار المتصاعدة، بالإضافة للتأخير الزمني (Latency) ومخاطر حوكمة البيانات.\n\nالسحابة الهجينة من نُزول تِك توفر أفضل ما في العالمين: سرعة فائقة للأنظمة الحيوية كالأشعة الطبية وخطوط الإنتاج على الشبكة المحلية، مع مزامنة سحابية مؤمنة في مراكز بياناتنا بالقاهرة بتكلفة ثابتة واقتصادية بالجنيه المصري وبدون أي مفاجآت.',
  },
];
