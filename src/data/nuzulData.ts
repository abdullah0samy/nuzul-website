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
  // --- Category: Software & Web Development (تطوير البرمجيات والتطبيقات) ---
  {
    id: 1,
    category_key: 'software',
    category_ar: 'تطوير البرمجيات والويب',
    category_en: 'Software & Web',
    title_ar: 'تصميم وتطوير المواقع',
    title_en: 'Website Design & Development',
    description_ar:
      'نقدم خدمات تصميم مواقع احترافية وتطوير مواقع الشركات، لنمنحك موقعًا يجمع بين الشكل الجذاب والأداء السلس، ليعكس هوية عملك ويعزز تواجدك الرقمي.',
    description_en:
      'We provide professional website design and corporate portal engineering, combining stunning visual appeal with seamless performance to reflect your business identity and amplify your digital presence.',
    icon: 'Code',
    useCaseStory_ar:
      'بناء وتطوير بوابة إلكترونية تفاعلية لشركة استثمارية مع لوحة تحكم ذكية، مما أدى إلى زيادة تواصل العملاء وطلبات عروض الأسعار بنسبة 140%.',
    useCaseStory_en:
      'Engineered an enterprise corporate portal with an intuitive CMS, resulting in a 140% surge in inbound qualified RFQs and instant client trust.',
    features_ar: ['تصاميم مخصصة للهواتف والشاشات', 'سرعة تحميل فائقة وتوافق SEO كامل', 'لوحة تحكم إدارية سهلة الاستخدام'],
    features_en: ['Responsive mobile-first layouts', 'Ultra-fast loading with full SEO indexing', 'Easy-to-use admin dashboard'],
  },
  {
    id: 2,
    category_key: 'software',
    category_ar: 'تطوير البرمجيات والويب',
    category_en: 'Software & Web',
    title_ar: 'تطبيقات الجوال',
    title_en: 'Mobile Applications',
    description_ar:
      'تساعدك على الوصول لعملائك في أي وقت وأي مكان، وتمنح أعمالك حضورًا أقوى عبر الأجهزة الذكية وبرمجة وتطوير تطبيقات الموبايل.',
    description_en:
      'Helping you reach your clients anytime and anywhere, granting your business an authoritative presence across smart devices through bespoke mobile app development.',
    icon: 'Smartphone',
    useCaseStory_ar:
      'برمجة تطبيق جوال متقدم لشبكة معامل تحاليل طبية يوفر حجز الزيارات المنزلية، عرض النتائج لحظياً، والدفع الفوري عبر إنستاباي.',
    useCaseStory_en:
      'Developed a clinical diagnostic mobile app for home visit bookings, real-time lab report viewing, and integrated instant InstaPay payments.',
    features_ar: ['تطبيقات iOS وAndroid أصلية وهجينة', 'إشعارات لحظية Push Notifications', 'ربط فوري بقواعد البيانات والـ API'],
    features_en: ['Native & cross-platform iOS & Android', 'Real-time push notifications', 'Seamless API & database synchronization'],
  },
  {
    id: 3,
    category_key: 'software',
    category_ar: 'تطوير البرمجيات والويب',
    category_en: 'Software & Web',
    title_ar: 'تصميم المتاجر الإلكترونية',
    title_en: 'E-Commerce Store Development',
    description_ar:
      'نقدم خدمات تصميم متجر إلكتروني وتطوير متاجر إلكترونية وحلول التجارة الإلكترونية الكاملة، لنمنحك منصة احترافية لعرض منتجاتك مع تجربة مستخدم سلسة وخصائص متكاملة تساعدك على البيع بأعلى كفاءة وجذب عملائك.',
    description_en:
      'End-to-end e-commerce development and digital retail solutions, giving you an elite platform to showcase products with smooth user journeys and comprehensive features to drive conversions.',
    icon: 'ShoppingBag',
    useCaseStory_ar:
      'إنشاء متجر إلكتروني لموزع تجزئة في مصر مربوط مع بوابات الدفع (إنستاباي، فودافون كاش، وفيزا) وإدارة المخازن والشحن تلقائياً.',
    useCaseStory_en:
      'Architected a high-throughput retail store integrated with local Egyptian payment gateways (InstaPay, Vodafone Cash, Visa) and live inventory sync.',
    features_ar: ['بوابات دفع مصرية ودولية متعددة', 'إدارة المخزون وتتبع الشحنات', 'حماية عالية للمعاملات والبيانات'],
    features_en: ['Multiple Egyptian & global payment gateways', 'Live inventory & shipment tracking', 'PCI-compliant transactional security'],
  },
  {
    id: 4,
    category_key: 'software',
    category_ar: 'تطوير البرمجيات والويب',
    category_en: 'Software & Web',
    title_ar: 'تصميم واجهه وتجربه المستخدم',
    title_en: 'UI/UX Design',
    description_ar:
      'نُصمّم واجهات مستخدم وتجربة مستخدم سهلة الاستخدام تُوازن بين احتياجات المستخدمين وأهداف العمل.',
    description_en:
      'We craft intuitive, human-centered UI/UX experiences that seamlessly balance end-user convenience with your core business conversion goals.',
    icon: 'Layout',
    useCaseStory_ar:
      'إعادة هندسة تجربة المستخدم لنظام حجز واستقبال في مركز طبي قللت زمن انتظار المريض بنسبة 50% وضاعفت سرعة إدخال البيانات.',
    useCaseStory_en:
      'Revamped the clinic intake UX flow, reducing patient check-in wait times by 50% and eliminating manual friction for receptionists.',
    features_ar: ['أبحاث المستخدمين والمخططات الهيكلية Wireframes', 'نماذج تفاعلية عالية الدقة Prototypes', 'أنظمة تصميم موحدة Design Systems'],
    features_en: ['User research & wireframing', 'High-fidelity interactive prototypes', 'Comprehensive enterprise design systems'],
  },
  {
    id: 5,
    category_key: 'software',
    category_ar: 'تطوير البرمجيات والويب',
    category_en: 'Software & Web',
    title_ar: 'خدمات ERP وCRM',
    title_en: 'Enterprise ERP & CRM Systems',
    description_ar:
      'تساعدك على إدارة موارد شركتك وعلاقات عملائك بكفاءة أعلى، من خلال حلول تقنية للشركات وتطوير الأنظمة المتكاملة التي تعزز الإنتاجية وتدعم نمو أعمالك.',
    description_en:
      'Empowering you to manage corporate resources and client relationships with peak efficiency through integrated enterprise systems that drive productivity and scalability.',
    icon: 'Layers',
    useCaseStory_ar:
      'تطوير نظام ERP مخصص لإدارة المستشفيات والشركات يربط السجلات الطبية، الفواتير، الصيدليات، والمخازن مع الفاتورة الإلكترونية المصرية.',
    useCaseStory_en:
      'Deployed a custom enterprise ERP uniting medical records, automated billing, pharmacy inventory, and Egyptian ETA e-invoicing.',
    features_ar: ['ربط الفاتورة والإيصال الإلكتروني المصري', 'إدارة المخازن والمبيعات والمشتريات', 'صلاحيات وصول دقيقة ومطابقة للمعايير'],
    features_en: ['Egyptian ETA e-invoicing compliance', 'Inventory, sales, and procurement workflows', 'Granular RBAC access permissions'],
  },

  // --- Category: Servers & Cloud Hosting (السيرفرات والاستضافة السحابية) ---
  {
    id: 6,
    category_key: 'servers',
    category_ar: 'السيرفرات والاستضافة السحابية',
    category_en: 'Servers & Cloud Hosting',
    title_ar: 'سيرفرات VPS مداره',
    title_en: 'Fully Managed VPS Hosting',
    description_ar:
      'حل استضافة VPS مُدار بالكامل يوفّر أداءً قويًا بدون أي تعقيد تقني. يتولى فريقنا إعداد الخادم، التحديثات، تعزيز الأمان، والنسخ الاحتياطي، لضمان بقاء موقعك سريعًا وآمنًا ومستقرًا مع دعم فني متاح على مدار الساعة 24/7.',
    description_en:
      'Fully managed VPS offering robust performance without technical headaches. Our engineering team handles server setup, kernel updates, security hardening, backups, and 24/7 dedicated support.',
    icon: 'Server',
    useCaseStory_ar:
      'إدارة بنية سيرفر سحابي لمنصة تعليمية وتدريبية تضم أكثر من 20,000 طالب متزامن مع استقرار تام وصفر توقف أثناء الامتحانات.',
    useCaseStory_en:
      'Full-stack managed VPS operation for an education platform serving 20,000+ simultaneous students with zero downtime during peak exam traffic.',
    features_ar: ['إدارة كاملة وتحديثات أمنية دورية', 'نسخ احتياطي يومي مجدول ومعزول', 'دعم فني هندسي مباشر بالقاهرة 24/7'],
    features_en: ['Complete sysadmin management & patching', 'Automated daily off-site cloud backups', 'Direct Cairo human engineering SLA 24/7'],
  },
  {
    id: 7,
    category_key: 'servers',
    category_ar: 'السيرفرات والاستضافة السحابية',
    category_en: 'Servers & Cloud Hosting',
    title_ar: 'سيرفرات VPS غير المُدارة',
    title_en: 'Unmanaged Cloud VPS',
    description_ar:
      'تمنحك الحرية الكاملة للتحكم في إعدادات السيرفر وإدارته بنفسك بما يتناسب مع احتياجاتك.',
    description_en:
      'Gives developers and sysadmins complete freedom to configure, maintain, and optimize their server architecture with root privileges.',
    icon: 'Terminal',
    useCaseStory_ar:
      'توفير خوادم سحابية KVM عالية التردد لفريق برمجيات لاختبار بيئات Docker وKubernetes وتطبيقات الذكاء الاصطناعي بمرونة مطلقة.',
    useCaseStory_en:
      'Delivered high-frequency KVM cloud nodes for software engineering teams orchestrating Docker microservices with unrestricted root access.',
    features_ar: ['صلاحية Root كاملة بنسبة 100%', 'معالجات KVM وترددات عالية', 'شبكة 1 Gbps مع ترافيك غير محدود'],
    features_en: ['100% full root access', 'High-frequency dedicated KVM cores', '1 Gbps unmetered uplink connection'],
  },
  {
    id: 8,
    category_key: 'servers',
    category_ar: 'السيرفرات والاستضافة السحابية',
    category_en: 'Servers & Cloud Hosting',
    title_ar: 'سيرفرات ويندوز',
    title_en: 'Windows VPS (Remote Desktop RDP)',
    description_ar:
      'تمنحك بيئة تشغيل مألوفة وسهلة الاستخدام، مع مرونة وأداء موثوق لتشغيل تطبيقاتك وخدماتك بكفاءة وأمان.',
    description_en:
      'Familiar, high-reliability Windows Server environments with ultra-fast Remote Desktop (RDP) access, perfect for enterprise accounting and desktop applications.',
    icon: 'Monitor',
    useCaseStory_ar:
      'تشغيل برامج الحسابات والمخازن المركزية لشركة تجارية ومكتب محاسبة ضريبية (amer-acc) لـ 25 محاسباً عن بعد عبر Windows RDP بدون أي تأخير.',
    useCaseStory_en:
      'Powering remote accounting and tax compliance software for 25 simultaneous financial auditors across Egypt over secure RDP.',
    features_ar: ['تبدأ من 1000 ج.م/شهرياً فقط', 'نظام Windows Server أصلي ومرخص', 'اتصال RDP مشفر فائق السرعة'],
    features_en: ['Starts at 1,000 EGP/mo ($20/mo)', 'Genuine licensed Windows Server OS', 'Ultra low-latency encrypted Remote Desktop'],
  },
  {
    id: 9,
    category_key: 'servers',
    category_ar: 'السيرفرات والاستضافة السحابية',
    category_en: 'Servers & Cloud Hosting',
    title_ar: 'السيرفرات الكاملة',
    title_en: 'Dedicated Bare-Metal Servers',
    description_ar:
      'تمنحك موارد مخصصة 100% وتحكم كامل في الإعدادات والأداء لتلبية احتياجات مشاريعك الكبيرة.',
    description_en:
      '100% dedicated hardware resources and uncompromising bare-metal horsepower to power mission-critical hospital systems and heavy database workloads.',
    icon: 'HardDrive',
    useCaseStory_ar:
      'تخصيص خوادم Dedicated لمستشفى كبرى لاستضافة أنظمة الأشعة الطبية (PACS) وأرشيف ملفات المرضى الضخمة بدون أي مشاركة موارد.',
    useCaseStory_en:
      'Provisioned enterprise bare-metal hardware clusters powering medical PACS radiological imaging servers without resource contention.',
    features_ar: ['عتاد فيزيائي مخصص بالكامل بدون مشاركة', 'أقراص Enterprise NVMe Gen4 بمصفوفة RAID', 'حماية متقدمة ضد هجمات حجب الخدمة DDoS'],
    features_en: ['Single-tenant hardware with no virtualization overhead', 'Hardware RAID Enterprise NVMe storage', 'Advanced multi-terabit DDoS mitigation'],
  },
  {
    id: 10,
    category_key: 'servers',
    category_ar: 'السيرفرات والاستضافة السحابية',
    category_en: 'Servers & Cloud Hosting',
    title_ar: 'خدمة الإيملات الرسمية للشركات',
    title_en: 'Corporate Business Email Hosting',
    description_ar:
      'أنشئ عناوين بريد إلكتروني احترافية باستخدام نطاق شركتك لتعزيز المصداقية وتبسيط التواصل مع العملاء وفريقك.',
    description_en:
      'Establish branded corporate email addresses on your custom domain, elevating your organization’s authority and streamlining client communication.',
    icon: 'Mail',
    useCaseStory_ar:
      'هجرة وحماية 250 حساب بريد رسمي لمجموعة طبية مع ربط معايير SPF/DKIM/DMARC لمنع انتحال الشخصية وضمان وصول الرسائل للإنبوكس.',
    useCaseStory_en:
      'Migrated and hardened 250 business mailboxes with zero downtime, enforcing SPF, DKIM, and DMARC protocols to defeat spoofing and guarantee inbox delivery.',
    features_ar: ['توثيق SPF وDKIM وDMARC ضد التزوير', 'تصفية قوية للسبام والبرمجيات الخبيثة', 'وصول سهل عبر الموبايل وبرامج Outlook'],
    features_en: ['Strict SPF, DKIM, and DMARC email authentication', 'Multi-layer AI anti-spam & phishing protection', 'Webmail, Outlook, and mobile client sync'],
  },
  {
    id: 11,
    category_key: 'servers',
    category_ar: 'السيرفرات والاستضافة السحابية',
    category_en: 'Servers & Cloud Hosting',
    title_ar: 'الاستضافة المشتركة',
    title_en: 'Business Shared Web Hosting',
    description_ar:
      'هي الحل الأمثل للمواقع الصغيرة والمتوسطة، بتكلفة اقتصادية وموارد مشتركة تضمن تشغيل موقعك بسهولة.',
    description_en:
      'The ideal cost-effective foundation for small and medium business websites, delivering reliable shared resources and effortless uptime.',
    icon: 'Globe2',
    useCaseStory_ar:
      'استضافة المواقع التعريفية لأكثر من 150 شركة ومكتب استشاري مصري مع شهادات أمان SSL مجانية وبريد رسمي بتكلفة اقتصادية.',
    useCaseStory_en:
      'Delivered rock-solid web hosting for 150+ Egyptian businesses with free automated SSL certificates and lightning NVMe storage.',
    features_ar: ['لوحة تحكم cPanel مدمجة وسهلة', 'شهادات أمان SSL مجانية مدى الحياة', 'نسخ احتياطي أسبوعي آلي'],
    features_en: ['Intuitive cPanel control panel', 'Free automated lifetime SSL encryption', 'Automated weekly off-site backups'],
  },
  {
    id: 12,
    category_key: 'servers',
    category_ar: 'السيرفرات والاستضافة السحابية',
    category_en: 'Servers & Cloud Hosting',
    title_ar: 'اسم النطاق',
    title_en: 'Domain Registration & DNS',
    description_ar:
      'تمنحك هوية فريدة على الإنترنت، وتساعدك على حجز اسم مميز لموقعك بسهولة وأمان.',
    description_en:
      'Securing your unique online brand identity with seamless domain registration, DNS management, and Egyptian TLD support (.eg, .com.eg).',
    icon: 'AtSign',
    useCaseStory_ar:
      'حجز وتسجيل النطاقات المصرية الرسمية (.eg) والمشركات التجارية مع إدارة سجلات DNS وربطها بالسيرفرات في ثوانٍ معدودة.',
    useCaseStory_en:
      'Registered official Egyptian .eg national domains with automated WHOIS privacy and rapid DNS propagation to local VPS nodes.',
    features_ar: ['دعم النطاقات المصرية .eg و.com.eg', 'إدارة DNS سحابية مجانية وسريعة', 'حماية الخصوصية ومنع سرقة النطاق'],
    features_en: ['Official Egyptian national .eg TLD registration', 'Free enterprise cloud DNS zone management', 'WHOIS privacy protection & domain lock'],
  },

  // --- Category: Infrastructure, Networks & Cybersecurity (الشبكات والأمن السيبراني والبنية التحتية) ---
  {
    id: 13,
    category_key: 'infrastructure',
    category_ar: 'الشبكات والأمن السيبراني',
    category_en: 'Infrastructure & Security',
    title_ar: 'أنظمة السنترال والاتصالات VOIP systems',
    title_en: 'Enterprise VoIP Telephony Systems',
    description_ar:
      'أنظمة سنترال سحابية ورقمية متطورة (VoIP PBX) تتيح الرد الآلي الذكي (IVR)، تسجيل المكالمات، وربط الفروع المختلفة بهاتف داخلي موحد.',
    description_en:
      'Advanced cloud & on-premise VoIP PBX telephony systems featuring multi-tier IVR auto-attendants, call recording, and branch interconnections.',
    icon: 'PhoneCall',
    useCaseStory_ar:
      'ربط 5 مقرات إدارية ومستشفيين بنظام VoIP موحد وفر 100% من فواتير الاتصالات الداخلية مع تسجيل جميع مكالمات خدمة العملاء.',
    useCaseStory_en:
      'Interconnected 5 branch facilities and 2 hospital campuses via unified VoIP PBX, slashing internal telecom costs to zero.',
    features_ar: ['شجرة رد آلي IVR تفاعلية ومخصصة', 'تسجيل مكالمات وتقارير أداء الكول سنتر', 'تطبيق هاتفي للموظفين للعمل عن بعد'],
    features_en: ['Custom multi-language IVR call flow', 'Automatic call recording & supervisor audit metrics', 'Softphone mobile client for remote staff'],
  },
  {
    id: 14,
    category_key: 'infrastructure',
    category_ar: 'الشبكات والأمن السيبراني',
    category_en: 'Infrastructure & Security',
    title_ar: 'أمن الشبكات وجدران الحماية Network security and firewall',
    title_en: 'Network Security & Next-Gen Firewalls',
    description_ar:
      'تأمين شامل للبنية التحتية عبر جدران نارية متطورة (Fortinet / Sophos) وعزل الشبكات الحساسة (VLANs) ومنع الاختراقات السيبرانية.',
    description_en:
      'Multi-layered perimeter defense deploying next-generation firewalls (Fortinet / Sophos), VLAN isolation, and active Intrusion Prevention Systems (IPS).',
    icon: 'ShieldCheck',
    useCaseStory_ar:
      'تأمين شبكة مستشفى متكاملة وعزل أجهزة الأشعة وغرف العمليات عن شبكة الواي فاي العامة للزوار مع ربط VPN مشفر بين الفروع.',
    useCaseStory_en:
      'Hardened a hospital enterprise network by completely isolating PACS and surgery OT nodes from public Wi-Fi via Fortinet NGFW.',
    features_ar: ['جدران حماية فيزيائية Hardware Firewalls', 'عزل شبكي متطور VLANs وسياسات أمان مشددة', 'أنفاق VPN مشفرة للربط بين الفروع عن بعد'],
    features_en: ['Enterprise hardware firewalls (Sophos / FortiGate)', 'Zero-trust VLAN segmentation for critical devices', 'High-throughput IPsec / WireGuard VPN tunnels'],
  },
  {
    id: 15,
    category_key: 'infrastructure',
    category_ar: 'الشبكات والأمن السيبراني',
    category_en: 'Infrastructure & Security',
    title_ar: 'منصة مراقبة الأحداث الأمنية SIEM solution platform',
    title_en: 'SIEM Security Operations Platform',
    description_ar:
      'منصة مركزية لإدارة ومراقبة الأحداث الأمنية وتحليل السجلات لحظياً لاكتشاف التهديدات الرقمية ومحاولات التسلل والتصدي الفوري لها.',
    description_en:
      'Centralized Security Information & Event Management (SIEM) platform delivering real-time telemetry, threat detection, and audit compliance.',
    icon: 'Activity',
    useCaseStory_ar:
      'نشر منصة SIEM لمؤسسة مالية وصحية لرصد السجلات الأمنية لـ 80 خادم وجهاز شبكي لحظياً والتنبيه الفوري لأي محاولة دخول غير مصرح بها.',
    useCaseStory_en:
      'Implemented centralized SIEM log auditing across 80 corporate servers and network switches with automated SOC threat alerts.',
    features_ar: ['مراقبة وتحليل فوري للسجلات الأمنية Logs', 'تنبيهات فورية عند اكتشاف سلوك مشبوه', 'تقارير مطابقة للمعايير القياسية للشركات'],
    features_en: ['Real-time log ingestion and correlation', 'Automated anomaly detection & instant SMS/Telegram alerts', 'Regulatory compliance audit reporting'],
  },
  {
    id: 16,
    category_key: 'infrastructure',
    category_ar: 'الشبكات والأمن السيبراني',
    category_en: 'Infrastructure & Security',
    title_ar: 'حلول النسخ الاحتياطي الذكية backup solution',
    title_en: 'Enterprise Hybrid Backup Solutions',
    description_ar:
      'حلول نسخ احتياطي هجين مشفر تجمع بين التخزين المحلي السريع والنسخ السحابي المعزول (Immutable Backups) لحماية البيانات من الفدية.',
    description_en:
      'Hybrid disaster recovery solutions combining high-speed on-premise staging with immutable cloud backups to defeat ransomware and data loss.',
    useCaseStory_ar:
      'إنقاذ قاعدة بيانات طبية كاملة لمركز أورام واستعادتها في أقل من 10 دقائق بعد تلف مفاجئ في الأقراص بفضل نظام النسخ الاحتياطي الهجين.',
    useCaseStory_en:
      'Restored a complete hospital oncology clinical database in under 10 minutes following hardware corruption using immutable hybrid snapshots.',
    icon: 'Database',
    features_ar: ['نسخ احتياطي غير قابل للتعديل ضد فيروسات الفدية', 'استعادة سريعة خلال دقائق معدودة RTO < 15 Min', 'تشفير عسكري AES-256 للبيانات المخزنة والمنقولة'],
    features_en: ['Ransomware-proof immutable snapshot architecture', 'Sub-15 minute disaster recovery recovery point (RPO/RTO)', 'Military-grade AES-256 data encryption at rest and in transit'],
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
      'أتمتة واتساب للأعمال وروبوت ذكي',
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
      'روبوت تفاعلي معتمد عبر WhatsApp API',
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
      'AI-Powered Predictive System Telemetry',
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
    nameAr: 'ويندوز VPS (Remote Desktop)',
    nameEn: 'Windows VPS (RDP)',
    basePriceEGP: 1000,
    basePriceUSD: 20.00,
    specsAr: [
      'تبدأ من 1000 ج.م/شهرياً فقط',
      'وصول مباشر Remote Desktop فائق السرعة',
      'نظام تشغيل Windows Server مرخص',
      'تشغيل متواصل للتطبيقات وأنظمة المحاسبة والضرائب',
      'دعم فني من مهندسين مصريين 24/7',
    ],
    specsEn: [
      'Starts from 1,000 EGP/mo ($20/mo)',
      'Lightning-Fast Remote Desktop (RDP)',
      'Licensed Windows Server OS',
      '24/7 Uptime for ERP & Accounting Apps',
      'Local Engineering Support 24/7',
    ],
    popular: true,
  },
];

export const NUZUL_CASE_STUDIES: CaseStudy[] = [
  // 1. Trust Hospital - Enterprise Security, CCTV Grid, Networks & Hardened Email
  {
    id: 1,
    badge: 'HOSPITAL SECURITY & NETWORKS',
    title_ar: 'التجهيز الأمني والسيادي المتكامل لمستشفى تراست: السكيورتي، كاميرات المراقبة، والشبكات المنظمة والبريد',
    title_en: 'Turnkey Sovereign Security & Infrastructure — Trust Hospital: CCTV Camera Grid, Fortinet NGFW, Cat6A Networks & Medical Email',
    category_ar: 'أمن المستشفيات والشبكات والكاميرات',
    category_en: 'Hospital Security, CCTV & Networks',
    client_ar: 'مستشفى تراست التخصصي (Trust Hospital) — القاهرة',
    client_en: 'Trust Specialized Hospital — Cairo',
    executiveSummary_ar:
      'أنجزت نُزول تِك مشروع التأسيس السيادي والأمني المتكامل لمستشفى تراست (Trust Hospital) لربط 4 مبانٍ وأقسام الطوارئ والعمليات والرعاية المركزة. تضمن المشروع: 1) شبكة كاميرات مراقبة رقمية IP فائقة الدقة (4K) بأكثر من 180 كاميرا مع تغطية كاملة لكافة الممرات والأقسام الحرجة، 2) جدران حماية متقدمة Fortinet NGFW لعزل شبكات الأجهزة الطبية الحساسة وغرف العمليات عن شبكة الزوار، 3) بنية تحتية فيزيائية متكاملة من كابلات الفايبر والشبكات المنظمة Cat6A مع سويتشات PoE مدارة من Cisco، 4) خوادم بريد رسمي مشفرة للأطباء والإدارة بتوثيق ثلاثي (SPF/DKIM/DMARC) لضمان سرية المراسلات الطبية ونتائج التحاليل، مع قطاع تقني كامل كخدمة (IT as a Service) ومراقبة مستمرة 24/7.',
    executiveSummary_en:
      'Nuzul Tech executed an end-to-end sovereign IT security and infrastructure master plan for Trust Hospital, interconnecting 4 medical pavilions, emergency wards, and surgical suites. The scope encompassed: 1) An enterprise 4K IP surveillance camera grid (>180 cameras) with redundant NVR storage securing patient wards, pharmacies, and blood banks, 2) Next-Gen Fortinet firewalls establishing zero-trust VLAN segmentation between life-critical medical equipment, PACS, and visitor Wi-Fi, 3) Turnkey physical infrastructure: fiber backbone, Cat6A structured cabling, server racks, and Cisco managed PoE switches, 4) Sovereign encrypted medical email system with SPF/DKIM/DMARC compliance guaranteeing confidentiality of physician consults and lab dispatches, backed by 24/7 IT as a Service (ITaaS).',
    description_ar:
      'تجهيز أمني وسيادي متكامل لمستشفى تراست: شبكة كاميرات مراقبة 4K (180+ كاميرا)، جدار ناري Fortinet NGFW وعزل شبكي VLAN، شبكات فايبر وكابلات Cat6A، وهجرة وتأمين البريد الطبي الرسمي مع قطاع تقني كخدمة (IT as a Service).',
    description_en:
      'Turnkey sovereign security and IT infrastructure for Trust Hospital: 180+ 4K IP camera surveillance grid, Fortinet NGFW zero-trust VLAN isolation, fiber & Cat6A structured cabling, and hardened enterprise medical email.',
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
      'نقاط عمياء أمنية ومخاطر حوادث داخل أروقة الطوارئ والصيدلية المركزية دون توثيق فيديو عالي الدقة',
      'شبكة كابلات مهترئة وبطء في نقل بيانات الأشعة الحيوية إلى غرف العمليات والعيادات',
      'هجمات تصيد وسقوط البريد الإلكتروني القديم مما أخر استلام الموافقات الطبية العاجلة',
      'اختلاط الأجهزة الطبية بشبكة الإنترنت العامة مما هدد أمن وسرية ملفات المرضى',
    ],
    challenges_en: [
      'Security blind spots in emergency corridors and central pharmacy lacking high-definition video audit trails',
      'Aging cabling causing packet loss and sluggish radiological DICOM image transfer to surgical suites',
      'Frequent legacy email crashes and phishing attempts delaying emergency medical insurance approvals',
      'Medical equipment exposed on the general hospital network creating critical patient data vulnerability',
    ],
    solution_ar: [
      'تركيب شبكة مراقبة IP تضم 180+ كاميرا 4K مع رؤية ليلية وخوادم NVR مصفوفة RAID 6 بتسجيل 90 يوماً',
      'تأسيس بنية فايبر ضوئية داخلية وكابلات Cat6A مع عزل VLAN صارم يفصل غرف العمليات والعناية المركزة',
      'تركيب جدار ناري متقدم Fortinet مع فحص مروري لمنع الاختراقات وتأمين نفق VPN مشفر للأطباء',
      'هجرة وتأمين 200+ حساب بريد رسمي للمستشفى مع توثيق SPF/DKIM/DMARC وضمان تسليم 100%',
      'قطاع تقني كامل كخدمة (IT as a Service): مراقبة مستمرة للشبكة والأمان على مدار الساعة 24/7 دون الحاجة لتوظيف فريق داخلي مكلف',
    ],
    solution_en: [
      'Deployed 180+ 4K IP night-vision cameras with redundant central RAID 6 NVRs retaining 90 days of secure footage',
      'Engineered an internal fiber optic backbone and Cat6A cabling with zero-trust VLAN segmentation for ICUs and surgical suites',
      'Deployed Fortinet Next-Gen Firewalls with active intrusion prevention and dedicated encrypted VPN tunnels for medical staff',
      'Migrated and hardened 200+ hospital mailboxes with SPF, DKIM, and DMARC enforcement ensuring 100% deliverability',
      'Full IT as a Service (ITaaS): 24/7 proactive security monitoring and engineering dispatch eliminating internal IT hiring overhead',
    ],
    deliverables_ar: [
      '1. منظومة كاميرات المراقبة الرقمية 4K (180+ كاميرا) وخوادم التسجيل المركزي NVR',
      '2. البنية التحتية الفيزيائية للشبكات وكابلات الفايبر المنظمة Cat6A',
      '3. جدران الحماية المتقدمة Fortinet NGFW والعزل الشبكي VLAN',
      '4. منظومة البريد الطبي الرسمي المشفر بتوثيق SPF/DKIM/DMARC',
      '5. قطاع تقني كامل كخدمة (IT as a Service) ودعم فني هندسي 24/7',
    ],
    deliverables_en: [
      '1. 180+ 4K IP Surveillance Camera Grid & Central Redundant NVR Array',
      '2. Turnkey Structured Fiber & Cat6A Cabling Infrastructure',
      '3. Fortinet NGFW Security Perimeter & Zero-Trust VLAN Segmentation',
      '4. Sovereign Hardened Medical Email System with SPF/DKIM/DMARC',
      '5. 24/7 IT as a Service (ITaaS) Managed Operations',
    ],
    result_ar: 'جاهزية تشغيلية للشبكة 99.99%، تغطية أمنية مرئية 100% للأقسام الحيوية، وتأمين وحماية كاملة لكافة المراسلات والسجلات الطبية',
    result_en: '99.99% network uptime, 100% video surveillance coverage, and zero patient data breaches',
    icon: 'Shield',
  },

  // 2. Mohamed Ibrahiem Office for Finance - Enterprise Financial Cloud, Mail Governance & Disaster Recovery
  {
    id: 2,
    badge: 'FINANCIAL CONSULTING CLIENT',
    title_ar: 'استضافة المنظومات المالية السحابية وحوكمة البريد والنسخ الاحتياطي — مكتب محمد إبراهيم للاستشارات والخدمات المالية',
    title_en: 'Enterprise Financial Cloud, Sovereign Mail Governance & Disaster Recovery — Mohamed Ibrahiem Office for Finance',
    category_ar: 'المنظومات المالية السحابية وحوكمة الأعمال',
    category_en: 'Enterprise Financial Cloud & Business Governance',
    client_ar: 'مكتب محمد إبراهيم للاستشارات والخدمات المالية (Mohamed Ibrahiem Office for Finance) — القاهرة',
    client_en: 'Mohamed Ibrahiem Office for Financial Consultancy & Corporate Advisory — Cairo',
    executiveSummary_ar:
      'قدمت نُزول تِك حلاً سحابياً سيادياً متكاملاً لمكتب محمد إبراهيم للاستشارات والخدمات المالية لنقل بيئة عمله المالية، المحاسبية، والرقابية بالكامل إلى خوادم خاصة مشفرة فائقة الأداء. شمل المشروع: 1) نشر خوادم Windows Server سحابية مخصصة للأنظمة المالية وإدارة الأعمال (ERP) تتيح الوصول الآمن عبر بروتوكولات RDP المشفرة لـ 30 مراجعاً ومستشاراً مالياً يعملون بالتوازي من مقرات الشركات والعملاء، 2) هندسة وتأمين منظومة البريد المالي الرسمي للمكتب بتوثيق SPF و DKIM و DMARC لحماية التقارير المالية ومخرجات التدقيق الاستشاري من محاولات التزييف، 3) تطبيق منظومة نسخ احتياطي سحابي معزول (Immutable Disaster Recovery) مع لقطات يومية مشفرة تحمي السجلات والدفاتر المالية ضد الفقدان أو الهجمات السيبرانية، 4) قطاع تقني كامل كخدمة (IT as a Service) وفّر جاهزية تشغيلية مطلقة بنسبة 100% خلال ذروة مواسم إقفال الميزانيات والتقارير المالية السنوية.',
    executiveSummary_en:
      'Nuzul Tech orchestrated a complete sovereign cloud modernization for Mohamed Ibrahiem Office for Finance, migrating mission-critical corporate financial and auditing workflows into a dedicated high-security private cloud: 1) Provisioned high-speed Windows Server VPS instances with ultra-low latency Remote Desktop (RDP) access, enabling 30 concurrent financial consultants and auditors across Egypt and the GCC to execute corporate ERP operations and financial reporting simultaneously, 2) Hardened corporate financial email infrastructure on a dedicated domain with strict SPF, DKIM, and DMARC enforcement, protecting sensitive audit reports and corporate financial statements, 3) Implemented automated immutable off-site daily backups protecting financial ledgers against ransomware and hardware failures, 4) Comprehensive IT as a Service (ITaaS) ensuring zero downtime during fiscal audits.',
    description_ar:
      'بنية سحابية مخصصة لخوادم الأنظمة المالية وإدارة الأعمال (ERP) لـ 30 مستشاراً ومراجعاً مالياً، مع حوكمة وتأمين 150+ بريد مالي رسمي، ومنظومة نسخ احتياطي يومي معزول، وقطاع تقني كامل كخدمة (IT as a Service).',
    description_en:
      'Dedicated enterprise cloud ERP infrastructure for 30 concurrent financial auditors, migration & hardening of 150+ corporate financial mailboxes, automated daily immutable backups, and full IT as a Service.',
    tech: [
      'Enterprise Financial Cloud',
      'Windows VPS (RDP)',
      'Corporate Financial Mail',
      'SPF / DKIM / DMARC',
      'Immutable Cloud Backup',
      'IT as a Service (ITaaS)',
    ],
    challenges_ar: [
      'تباطؤ برامج الأنظمة المالية على الأجهزة المكتبية وصعوبة وصول المراجعين والخبراء إليها أثناء العمل الميداني لدى الشركات والعملاء',
      'سقوط التقارير المالية ومسودات التدقيق المرسلة للشركات في مجلد السبام نتيجة غياب التوثيق الرقمي المعتمد',
      'مخاطر حقيقية لفقدان أو تلف السجلات والدفاتر المالية التاريخية في حال تعطل أحد الأجهزة المحلية أو الإصابة ببرمجيات الفدية',
      'انشغال إدارة المكتب بالأعطال التقنية في أوقات ذروة المراجعات السنوية والميزانيات العمومية',
    ],
    challenges_en: [
      'Sluggish ERP performance on local desktop PCs and inability to access financial databases during off-site corporate audits',
      'Outbound financial reports and audit statements landing in recipient spam folders due to unauthenticated mail configuration',
      'Acute ransomware vulnerability and data loss risks on unbacked local office hard drives',
      'Financial partners bogged down with IT troubleshooting during peak annual fiscal closing',
    ],
    solution_ar: [
      'تخصيص خوادم Windows Server سحابية فائقة السرعة بأقراص NVMe مخصصة للمكتب لتشغيل المنظومات المالية وإدارة الأعمال (ERP)',
      'تفعيل وصول مشفر لـ 30 مستشاراً ومراجعاً يعملون في نفس الوقت على قواعد البيانات المالية المركزية بسرعة فائقة وصفر تأخير',
      'هجرة وتأمين 150+ بريد مالي رسمي مع حماية متقدمة ضد الاحتيال وضمان وصول 100% لصندوق الوارد',
      'نظام نسخ احتياطي يومي آلي مشفر ينقل لقطات البيانات إلى سحابة نُزول تِك المعزولة مع إمكانية الاستعادة الفورية في ثوانٍ',
      'قطاع تقني كامل كخدمة (IT as a Service): صيانة وقائية ومراقبة استباقية 24/7 دون الحاجة لتوظيف فريق تقني داخلي',
    ],
    solution_en: [
      'Deployed a high-frequency enterprise Windows Server VPS hosting central SQL corporate accounting & audit databases',
      'Configured secure multi-session low-latency RDP access for 30 simultaneous financial consultants with seamless mobility',
      'Migrated and hardened 150+ financial mailboxes with strict SPF, DKIM, and DMARC enforcement guaranteeing 100% inbox placement',
      'Automated daily encrypted immutable snapshots sent to Nuzul Tech off-site cloud storage for rapid disaster recovery',
      'Delivered full IT as a Service (ITaaS) with 24/7 proactive monitoring and zero client IT management hassle',
    ],
    deliverables_ar: [
      '1. خوادم Windows Server RDP سحابية عالية الأداء لتشغيل المنظومات المالية والـ ERP',
      '2. هجرة وتأمين 150+ بريد مالي رسمي بمعدل تسليم 100%',
      '3. خط أنابيب نسخ احتياطي يومي مشفر تلقائي لجميع السجلات والدفاتر المالية',
      '4. قطاع تقني كامل كخدمة (IT as a Service) وإدارة استباقية 24/7',
    ],
    deliverables_en: [
      '1. High-Performance Enterprise Windows VPS RDP Hosting for Corporate Financial ERP',
      '2. 150+ Enterprise Financial Mailboxes Hardened with 100% Deliverability',
      '3. Automated Daily Encrypted Off-Site Backup Pipeline',
      '4. Comprehensive 24/7 IT as a Service (ITaaS) Management',
    ],
    result_ar: 'تسريع إنجاز أعمال المراجعة والتقارير المالية بنسبة 70%، استقرار بنية العمل بنسبة 100% خلال موسم إقفال الميزانيات، وحماية تامة لكافة السجلات المالية',
    result_en: '70% faster financial reporting turnaround, 100% operational stability during fiscal closing, and zero data loss',
    icon: 'Lock',
  },

  // 3. Cairo Cure Oncology Center - Detailed Strategic Case Study
  {
    id: 3,
    badge: 'STRATEGIC CASE STUDY',
    title_ar: 'دراسة حالة استراتيجية: هندسة وحوكمة البنية التحتية للبريد الإلكتروني والأرشيف الطبي لمركز Cairo Cure',
    title_en: 'Strategic Case Study: Email Infrastructure & Medical PACS Archiving Governance for Cairo Cure Center',
    category_ar: 'حوكمة البريد والأرشيف الطبي',
    category_en: 'Email Governance & Medical PACS',
    client_ar: 'مركز Cairo Cure التخصصي للأورام — القاهرة',
    client_en: 'Cairo Cure Oncology Center — Cairo',
    executiveSummary_ar:
      'واجه مركز Cairo Cure (المركز التخصصي للأورام) تحدياً حرجاً هدد استمرارية أعماله وأمان بيانات مرضاه؛ حيث تم الاعتماد بشكل خاطئ على البريد الإلكتروني كبديل لنظام الأرشفة الطبية (PACS/EMR). أدى ذلك إلى تضخم هائل في المساحات السحابية، وبطء شديد في الأنظمة، وتكاليف استضافة تصاعدية غير مبررة. تدخلت Nuzul Tech لتقديم استشارة هندسية وحل مبتكر يدمج بين السحابة عالية الأداء والأرشفة المحلية الذكية (Hybrid Managed Solution). النتيجة؟ حماية كاملة للسجلات الطبية، استقرار فوري لأداء الأجهزة، وتخفيض التكاليف التشغيلية السنوية بنسبة تتجاوز 75% مقارنة بالحلول العالمية السحابية.',
    executiveSummary_en:
      'Cairo Cure Oncology Center faced a critical operational bottleneck when corporate email was mistakenly utilized as a repository for high-resolution DICOM radiological studies (PACS). This led to massive cloud bloat, sluggish workstations, and runaway cloud storage costs. Nuzul Tech stepped in with a hybrid architecture decoupling email from medical archiving: deploying on-premise encrypted PACS/NAS storage synced with encrypted cloud backups while migrating corporate mailboxes to an optimized private cloud. Result: 100% data integrity, instantaneous workstation performance, and a >75% reduction in recurring annual IT overhead.',
    description_ar:
      'حل هندسي واستشاري متكامل دمج بين السيرفرات السحابية والأرشفة الطبية المحلية الذكية. قطاع تقني كامل كخدمة (IT as a Service): حصل المركز على إدارة استباقية، ومراقبة للبنية التحتية، ودعم فني متخصص، مما أزال الحاجة تماماً لتوظيف مهندس IT مقيم بمرتب شهري مرتفع.',
    description_en:
      'Complete engineering intervention decoupling PACS medical storage from corporate email via a hybrid cloud model, cutting costs by over 75% and stabilizing clinic workstations.',
    tech: ['Hybrid Cloud', 'DICOM PACS Archive', 'Private Mail Server', 'SPF / DKIM / DMARC', 'AES-256 Storage', 'Proxmox', 'IT as a Service'],
    result_ar: 'تخفيض التكاليف التشغيلية السنوية بنسبة تتجاوز 75% وحماية تامة لبيانات المرضى واستقرار فوري للأجهزة',
    result_en: '>75% operational cost reduction and zero patient data loss',
    icon: 'Shield',
    challenges_ar: [
      'تضخم صناديق البريد (أكثر من 50 جيجابايت لكل طبيب) بسبب تبادل صور الأشعة والتحاليل بالبريد',
      'بطء شديد وتجمد مستمر في أجهزة الأطباء وموظفي الاستقبال أثناء البحث في الإيميلات',
      'تكاليف استضافة سحابية شهرية متصاعدة بشكل غير مبرر للشركات العالمية',
      'مخاطر حقيقية لفقدان أو تسريب السجلات الطبية الحساسة لمرضى الأورام',
    ],
    challenges_en: [
      'Massive mailbox bloat (>50GB per physician) caused by emailing heavy DICOM scans',
      'Severe latency and freezing on clinical PCs during daily outpatient operations',
      'Skyrocketing international cloud storage bills with zero operational ROI',
      'Elevated compliance risks of accidental patient record deletion or data breach',
    ],
    solution_ar: [
      'فصل الأرشيف الطبي PACS عن منظومة البريد وتأسيس خادم تخزين محلي فائق السرعة',
      'هجرة 120 صندوق بريدي إداري وطبي إلى خوادم خاصة آمنة مع توثيق SPF/DKIM/DMARC',
      'تطبيق خطة نسخ احتياطي هجين مشفر (Immutable Backups) تضمن استعادة أي ملف في ثوانٍ',
      'قطاع تقني كامل كخدمة (IT as a Service): حصل المركز على إدارة استباقية، ومراقبة للبنية التحتية، ودعم فني متخصص، مما أزال الحاجة تماماً لتوظيف مهندس IT مقيم بمرتب شهري مرتفع.',
    ],
    solution_en: [
      'Decoupled medical PACS archives from email onto dedicated on-premise NVMe storage',
      'Migrated 120 corporate mailboxes to hardened private cloud servers with SPF/DKIM/DMARC',
      'Enacted an immutable hybrid backup pipeline guaranteeing sub-second retrieval',
      'Full IT as a Service (ITaaS): Proactive monitoring, enterprise maintenance, and 24/7 SLA eliminating the need for an expensive on-site internal IT hire.',
    ],
  },

  // 4. ABCH Hospital Projects
  {
    id: 4,
    badge: 'HOSPITAL INFRASTRUCTURE',
    title_ar: 'مشاريع مستشفى ABCH: البنية التحتية، البوابة، والتذاكر والموافقات الطبية',
    title_en: 'ABCH Hospital Turnkey IT: Web Portal, Ticketing, Approvals & Full Physical Infrastructure',
    category_ar: 'تجهيز المستشفيات والأنظمة',
    category_en: 'Hospital Turnkey IT & Networks',
    client_ar: 'مستشفى ABCH — القاهرة',
    client_en: 'ABCH Hospital — Cairo',
    executiveSummary_ar:
      'أنجزت نُزول تِك تنفيذاً هندسياً متكاملاً لمنظومة مستشفى ABCH عبر 4 مشاريع محورية دمجت العتاد الفيزيائي بالبرمجيات السحابية: 1) البوابة الإلكترونية، 2) نظام التذاكر الداخلي، 3) نظام الموافقات الطبية والتأمينية، 4) البنية التحتية الفيزيائية للشبكات والسيرفرات.',
    executiveSummary_en:
      'Nuzul Tech executed an end-to-end IT modernization master plan for ABCH Hospital comprising 4 pivotal systems: 1) Official patient & physician web portal, 2) Internal maintenance & medical ticketing, 3) Automated medical insurance approvals, and 4) Complete physical infrastructure deployment.',
    description_ar:
      'تنفيذ شامل لمشاريع مستشفى ABCH الأربعة: 1) بوابة المستشفى الإلكترونية الرسمية، 2) نظام التذاكر والدعم الفني الداخلي، 3) نظام الموافقات الطبية والتأمينية، 4) البنية التحتية الفيزيائية الكاملة.',
    description_en:
      'Complete turnkey execution of 4 primary systems for ABCH Hospital: 1) Official ABCH web portal, 2) Internal engineering ticketing system, 3) Medical & insurance approvals workflow, 4) ALL physical IT infrastructure.',
    tech: ['Hospital Web Portal', 'Medical Approvals Workflow', 'IT Ticketing System', 'Fiber & Cat6A Cabling', 'Fortinet NGFW', 'Cisco'],
    challenges_ar: [
      'تشتت العمليات بين ملفات ورقية وبطء في مراجعة الموافقات الطبية لشركات التأمين',
      'شبكة كابلات قديمة غير منظمة كانت تسبب انقطاعات متكررة في غرف الأشعة والتحاليل',
      'غياب نظام مركزي لمتابعة تذاكر الصيانة الدورية للأجهزة الطبية والهندسية',
    ],
    challenges_en: [
      'Paperwork bottlenecks delaying crucial patient insurance approvals',
      'Aging unorganized legacy cabling causing random packet loss in diagnostic labs',
      'Absence of centralized tracking for hospital biomedical & IT maintenance tickets',
    ],
    solution_ar: [
      'بناء بوابة مستشفى ABCH الرسمية وربطها بنظام حجز مواعيد الأطباء والاستعلام',
      'تطوير نظام تذاكر ودعم فني داخلي يوزع البلاغات آلياً على المهندسين والتمريض',
      'برمجة نظام الموافقات الطبية والتأمينية لتأكيد التغطية لحظياً خلال دقائق',
      'تأسيس البنية التحتية الفيزيائية الكاملة: كابلات الفايبر والشبكات المنظمة، السويتشات المدارة، غرفة السيرفرات، وجدران الحماية Fortinet',
    ],
    solution_en: [
      'Engineered the official ABCH responsive portal with dynamic doctor scheduling',
      'Deployed an internal ticketing system automating service desk requests',
      'Automated medical & insurance approvals pipeline cutting verification delays',
      'Turnkey physical infrastructure: fiber backbone, Cat6A cabling, server racks, and Fortinet NGFW',
    ],
    deliverables_ar: [
      '1. بوابة مستشفى ABCH الرسمية (ABCH Website Portal)',
      '2. نظام التذاكر الداخلي (Ticketing System)',
      '3. نظام الموافقات الطبية (Medical Approvals System)',
      '4. البنية التحتية الفيزيائية الكاملة (ALL Physical IT Infrastructure)',
    ],
    deliverables_en: [
      '1. ABCH Official Website Portal',
      '2. Engineering Ticketing System',
      '3. Medical Approvals System',
      '4. ALL Physical IT Infrastructure',
    ],
    result_ar: 'ربط المستشفى بالكامل في بنية موحدة بنسبة تشغيل 99.98% وتسريع الموافقات 4 أضعاف',
    result_en: '99.98% physical uptime and 4x faster medical approval processing',
    icon: 'Building2',
  },

  // 5. Lebanon Hospital ERP
  {
    id: 5,
    badge: 'COMPREHENSIVE ERP',
    title_ar: 'نظام إدارة المستشفيات الشامل — مستشفى لبنان',
    title_en: 'Comprehensive Hospital ERP System — Lebanon Hospital',
    category_ar: 'أنظمة إدارة المستشفيات',
    category_en: 'Hospital ERP Suite',
    client_ar: 'مستشفى لبنان',
    client_en: 'Lebanon Hospital',
    executiveSummary_ar:
      'نظام ERP متكامل لإدارة مستشفى لبنان صُمم لتوحيد كافة العمليات السريرية والمالية والإدارية في منصة رقمية واحدة فائقة السرعة، مدعومة بالسجلات الطبية الإلكترونية (EMR)، إدارة غرف العمليات، الصيدليات، والموارد البشرية الطبية.',
    executiveSummary_en:
      'Unified enterprise hospital ERP suite engineered for Lebanon Hospital, bringing outpatient scheduling, inpatient admission, Electronic Medical Records (EMR), automated insurance billing, and pharmacy dispensing into a zero-latency digital core.',
    description_ar:
      'نظام ERP متكامل لإدارة مستشفى لبنان يشمل الجدولة الذكية للمواعيد، السجلات الطبية الإلكترونية (EMR)، الفواتير الآلية، إدارة مخازن وصيدليات المستشفى، والموارد البشرية الطبية.',
    description_en:
      'Comprehensive hospital ERP system with smart appointment scheduling, Electronic Medical Records (EMR), automated billing, pharmacy inventory, and medical HR.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Docker', 'Hospital EMR', 'HL7/FHIR'],
    challenges_ar: [
      'تأخر تسجيل المرضى وازدحام صالات الاستقبال نتيجة الاعتماد على برامج منفصلة غير مترابطة',
      'صعوبة تتبع صرف الأدوية والمستلزمات الطبية في المخازن والصيدليات بدقة',
      'فقدان الوقت في مراجعة الملفات التاريخية للمرضى قبل إجراء العمليات الجراحية',
    ],
    challenges_en: [
      'Outpatient congestion caused by fragmented disconnected software silos',
      'Inaccurate medication dispensing tracking across wards and central pharmacy',
      'Time loss locating physical historical health records prior to surgical procedures',
    ],
    solution_ar: [
      'نظام الجدولة الذكية للمواعيد وحجوزات العيادات الخارجية وغرف العمليات',
      'السجلات الطبية الإلكترونية الموحدة (EMR) لحفظ التاريخ المرضي والأشعة والتحاليل رقمياً',
      'نظام الفواتير الآلية والربط المالي الشامل مع شركات التأمين الصحي',
      'إدارة الصيدلية المركزية ومراقبة تواريخ الصلاحية وحد الطلب للمستلزمات تلقائياً',
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
    result_ar: 'تحول رقمي كامل للمستشفى والقضاء على 95% من السجلات الورقية وتسريع دورة خدمة المريض',
    result_en: '100% digital hospital transformation with 95% paperwork eliminated',
    icon: 'Activity',
  },

  // 6. amer-acc - Tax & Accounting Consultancy Client Case Study
  {
    id: 6,
    badge: 'TAX & ACCOUNTING CLIENT',
    title_ar: 'هجرة وتأمين 500+ بريد رسمي — محاسب ضريبي (amer-acc)',
    title_en: 'Migration & Hardening of 500+ Corporate Mailboxes — Amer Accounting & Tax Consultant (amer-acc)',
    category_ar: 'هجرة وتأمين البريد واستضافة الضرائب',
    category_en: 'Mail Migration, Security & Tax Cloud',
    client_ar: 'مكتب عامر للمحاسبة والاستشارات الضريبية (amer-acc) — محاسب ضريبي',
    client_en: 'Amer Tax & Accounting Consultancy (amer-acc) — Egypt',
    executiveSummary_ar:
      'استفاد مكتب عامر للمحاسبة والاستشارات الضريبية (amer-acc) من نقل وتأمين أكثر من 500 بريد رسمي إداري ومحاسبي إلى خوادم خاصة مشفرة بتوثيق SPF/DKIM/DMARC لمنع انتحال الشخصية والسبام. كما تم تشغيل برامج الفحص والضرائب والمحاسبة على سيرفرات ويندوز RDP سريعة لـ 25 مراجعاً، مع نسخ احتياطي يومي مشفر وقطاع تقني كامل كخدمة (IT as a Service)، مما وفر بيئة عمل مستقرة تماماً خلال ذروة مواسم الإقرارات السنوية دون توقف دقيقة واحدة.',
    executiveSummary_en:
      'Amer Tax & Accounting Consultancy (amer-acc) benefited from migrating and hardening 500+ official corporate mailboxes with SPF/DKIM/DMARC authentication, preventing spoofing and delivery blacklisting. In parallel, Nuzul Tech provisioned high-performance Windows RDP servers for 25 simultaneous tax auditors with automated encrypted daily backups and full IT as a Service (ITaaS), delivering zero downtime throughout peak tax filing deadlines.',
    description_ar:
      'هجرة وتأمين 500+ بريد رسمي للمحاسب الضريبي مع حماية SPF/DKIM/DMARC، واستضافة برامج المحاسبة على سيرفرات Windows VPS RDP (تبدأ من 1000 ج.م/شهرياً)، مع قطاع تقني كامل كخدمة (IT as a Service).',
    description_en:
      'Migration & security hardening of 500+ official mailboxes with SPF/DKIM/DMARC, plus Windows VPS RDP hosting for 25 tax auditors with automated daily backups and full IT as a Service.',
    tech: ['500+ Mail Migration', 'SPF / DKIM / DMARC', 'Windows VPS (RDP)', 'Automated Daily Backups', 'IT as a Service (ITaaS)'],
    challenges_ar: [
      'تكرار سقوط خوادم البريد القديمة ووصول إيميلات المصلحة والعملاء لمجلد السبام',
      'بطء الأجهزة المحلية وتأخر تبادل الملفات المالية الضخمة بين المحاسبين خلال موسم الفحص الضريبي',
      'مخاطر فقدان البيانات المالية الحساسة لعملاء المكتب في حال تعطل أحد الأجهزة المحلية',
      'الحاجة لدخول المحاسبين من المكاتب ومن مقرات العملاء بأمان كامل دون تأخير',
    ],
    challenges_en: [
      'Frequent legacy mail server outages and critical tax invoices landing in spam folders',
      'Local PC bottlenecks and slow financial file sharing during peak tax filing season',
      'Elevated risk of data corruption or loss on unbacked local office hard drives',
      'Need for secure remote access for auditors working from client sites or home',
    ],
    solution_ar: [
      'هجرة 500+ صندوق بريد رسمي بسلاسة وصفر توقف إلى سيرفرات بريد خاصة عالية الموثوقية',
      'ضبط سجلات التوثيق العالمية SPF و DKIM و DMARC لضمان وصول الرسائل فوراً لصندوق الوارد',
      'تخصيص سيرفر Windows VPS (Remote Desktop) عالي المواصفات (1000 ج.م/شهرياً) لتشغيل برامج المحاسبة والضرائب',
      'تفعيل وصول مشفر لـ 25 محاسباً يعملون في نفس الوقت على قواعد البيانات المالية بسرعة فائقة',
      'نظام نسخ احتياطي يومي آلي مشفر ينقل لقطات البيانات إلى سحابة نُزول تِك المعزولة',
      'قطاع تقني كامل كخدمة (IT as a Service): إدارة استباقية وتحديثات أمان مستمرة دون حاجة لتوظيف فني IT داخلي',
    ],
    solution_en: [
      'Zero-downtime migration of 500+ corporate mailboxes to sovereign private cloud mail servers',
      'Configured hardened SPF, DKIM, and DMARC cryptographic records ensuring 100% inbox deliverability',
      'Deployed a dedicated Windows Server VPS (from 1,000 EGP/mo) hosting tax computation software',
      'Provisioned multi-session low-latency RDP access for 25 simultaneous auditors',
      'Automated daily encrypted off-site cloud snapshots of all financial databases',
      'Full IT as a Service (ITaaS) proactive monitoring and maintenance',
    ],
    deliverables_ar: [
      '1. هجرة وتأمين 500+ بريد رسمي بمعدل تسليم 100%',
      '2. استضافة برامج المحاسبة والضرائب على سيرفرات Windows VPS RDP',
      '3. نظام نسخ احتياطي يومي مشفر تلقائي لبيانات العملاء',
      '4. قطاع تقني كامل كخدمة (IT as a Service) ودعم فني متخصص 24/7',
    ],
    deliverables_en: [
      '1. 500+ corporate mailboxes migrated and hardened with 100% inbox rate',
      '2. High-performance Windows VPS RDP hosting for tax ERP software',
      '3. Automated daily encrypted off-site cloud backup pipeline',
      '4. Full IT as a Service (ITaaS) with dedicated 24/7 technical support',
    ],
    result_ar: 'وصول الإيميلات بنسبة 100%، إنجاز الإقرارات الضريبية أسرع بنسبة 80%، واستقرار تام على مدار الساعة دون الحاجة لمهندس IT مقيم',
    result_en: '100% email deliverability, 80% faster tax turnaround, and zero IT hiring overhead',
    icon: 'Mail',
  },

  // 7. Al-Safwa Healthcare Group - Mail Services & Migration Case Study
  {
    id: 7,
    badge: 'MAIL MIGRATION CLIENT',
    title_ar: 'هجرة وتأمين 250+ بريد رسمي — مجموعة الصفوة الطبية',
    title_en: '250+ Enterprise Mailboxes Zero-Downtime Migration — Al-Safwa Healthcare Group',
    category_ar: 'هجرة البريد والأمان',
    category_en: 'Email Migration & Security',
    client_ar: 'مجموعة الصفوة الطبية — مصر',
    client_en: 'Al-Safwa Healthcare Group — Egypt',
    executiveSummary_ar:
      'هجرة أكثر من 250 صندوق بريد رسمي للأطباء والإداريين من خوادم استضافة قديمة غير مستقرة إلى خوادم سحابية خاصة مع أرشفة مشفرة، وتفعيل SPF/DKIM/DMARC بصفر توقف عن العمل.',
    executiveSummary_en:
      'Seamless zero-downtime migration of 250+ medical and administrative email accounts from legacy shared hosting to dedicated private mail servers with SPF/DKIM/DMARC hygiene and cloud archiving.',
    description_ar:
      'هجرة وتأمين 250 صندوق بريد رسمي للأطباء والإداريين مع تفعيل حماية SPF/DKIM/DMARC بصفر توقف عن العمل وأرشفة مشفرة.',
    description_en:
      'Zero-downtime migration of 250+ business mailboxes to hardened private cloud servers with SPF/DKIM/DMARC hygiene.',
    tech: ['Private Mail Server', 'DMARC Enforcement', 'DKIM 2048-bit', 'SPF Records', 'Encrypted Archiving', 'IT as a Service'],
    challenges_ar: [
      'انقطاعات متكررة في البريد القديم وسقوط الرسائل المهمة في مجلد السبام (Junk)',
      'تعرض النطاق لمحاولات احتيال وتزييف لعناوين البريد الخاصة بالإدارة',
      'صعوبة إدارة المساحات الضخمة لمراسلات 250 طبيباً وموظفاً',
    ],
    challenges_en: [
      'Frequent email downtime and critical medical correspondence landing in spam',
      'Vulnerability to domain spoofing and phishing attempts',
      'Storage capacity crunches across 250 physician and administrator inboxes',
    ],
    solution_ar: [
      'هجرة حية وسلسة (Zero Downtime) لكافة الرسائل والمجلدات إلى سيرفر بريد سحابي مخصص',
      'تطبيق أعلى معايير التوثيق العالمي SPF وDKIM 2048-bit وسياسة DMARC Reject',
      'أرشفة سحابية قانونية مشفرة لجميع المراسلات لضمان عدم ضياع أي وثيقة أو استشارة طبية',
      'قطاع تقني كامل كخدمة (IT as a Service): متابعة سجلات البريد وحل مشاكل الموظفين في دقائق',
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
    title_ar: 'حماية النطاق وهجرة البريد المؤسسي — شركة الجمهورية للخدمات اللوجستية',
    title_en: 'Domain Brand Protection & 120 Mailboxes Hardening — El-Gomhouria Logistics',
    category_ar: 'حماية النطاقات والبريد',
    category_en: 'Domain Security & Email',
    client_ar: 'شركة الجمهورية للخدمات اللوجستية والتجارة — مصر',
    client_en: 'El-Gomhouria Logistics & Trade — Egypt',
    executiveSummary_ar:
      'حماية نطاق الشركة من محاولات التزييف وانتحال الشخصية (Anti-Spoofing)، وهجرة 120 صندوق بريد لوجستي مع أرشفة سحابية قانونية للرسائل التجارية ومراقبة أمنية على مدار الساعة.',
    executiveSummary_en:
      'Enterprise domain reputation hardening preventing financial invoice spoofing, paired with the migration of 120 commercial mailboxes into an audited, secure corporate mail environment.',
    description_ar:
      'حماية نطاق الشركة ومكافحة هجمات التصيد والسبام وتوثيق SPF/DKIM/DMARC مع أرشفة سحابية لـ 120 صندوق بريدي.',
    description_en:
      'Enterprise domain brand protection and migration of 120 mailboxes with strict anti-phishing filters and legal archiving.',
    tech: ['Anti-Phishing Shield', 'DMARC Quarantine/Reject', 'Cloud Mail Archiving', 'DNSSEC', 'IMAP/SMTP TLS 1.3'],
    challenges_ar: [
      'محاولات إرسال فواتير شحن مزيفة لعملاء الشركة بانتحال اسم النطاق التجاري',
      'تكرار استقبال روابط خبيثة تسببت في بطء أجهزة موظفي التخليص الجمركي والشحن',
    ],
    challenges_en: [
      'Fraudulent freight invoices sent to overseas clients using spoofed sender domains',
      'Incoming phishing malware targeting customs clearance staff workstations',
    ],
    solution_ar: [
      'تفعيل معايير DMARC بسياسة الرفض الفوري (p=reject) لمنع أي طرف من إرسال إيميل باسم الشركة',
      'هجرة حسابات البريد إلى سيرفرات مشفرة تدعم بروتوكول TLS 1.3 مع جدار حماية ضد السبام',
      'تفعيل قطاع تقني كخدمة (IT as a Service) للمراقبة اللحظية والاستجابة لأي تهديد سيبراني',
    ],
    solution_en: [
      'Activated DMARC policy (p=reject) blocking unauthorized spoofed emails globally',
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
    title_ar: 'نظام تتبع الأسطول والمراقبة اللحظية — شركة ايفرست للنقل',
    title_en: 'Real-Time Fleet IoT & Telemetry Platform — Everest Transport',
    category_ar: 'اللوجستيات وتتبع الأساطيل',
    category_en: 'Fleet Logistics & IoT',
    client_ar: 'شركة ايفرست للنقل — مصر',
    client_en: 'Everest Transport — Egypt',
    executiveSummary_ar:
      'نظام متكامل لتتبع أسطول الشاحنات لحظياً عبر محافظات مصر، جدولة الرحلات، تحسين مسارات استهلاك الوقود، وربط حساسات الـ IoT مع لوحات تحكم سحابية مباشرة للإدارة.',
    executiveSummary_en:
      'Comprehensive IoT fleet telemetry platform orchestrating real-time GPS tracking, sensor fuel monitoring, and dynamic route optimization across Egyptian highways with cloud analytics.',
    description_ar:
      'نظام متكامل لتتبع أسطول الشاحنات لحظياً، جدولة الرحلات، تحسين مسارات الوقود، وتقارير أداء ومراقبة حية للسائقين عبر محافظات مصر.',
    description_en:
      'Real-time vehicle GPS tracking, dynamic route optimization, scheduled driver dispatching, fuel sensors, and live telemetry dashboards across Egypt.',
    tech: ['React Native', 'Node.js', 'PostgreSQL', 'MQTT IoT', 'Grafana', 'Mapbox', 'IT as a Service'],
    challenges_ar: [
      'صعوبة تتبع حركة مئات الشاحنات بين المحافظات وسرقة الوقود على الطرق السريعة',
      'تأخر تسليم الشحنات نتيجة عدم وجود مسارات محددة وجدولة ديناميكية ذكية',
    ],
    challenges_en: [
      'Lack of real-time visibility into inter-governorate freight trucks and fuel shrinkage',
      'Delivery delays due to unoptimized manual dispatching workflows',
    ],
    solution_ar: [
      'تركيب أجهزة تتبع GPS وحساسات وقود ذكية مربوطة ببروتوكول MQTT لحظي',
      'بناء تطبيق جوال للسائقين ولوحة تحكم سحابية لغرفة العمليات المركزية',
      'تقارير تحليلية آلية لمعدلات استهلاك الوقود وساعات عمل السائقين مع تنبيهات الحوادث',
    ],
    solution_en: [
      'Installed industrial GPS trackers and fuel sensors streaming telemetry via MQTT',
      'Built a dedicated mobile driver app and centralized operations control dashboard',
      'Automated fuel consumption analytics, speed violations, and scheduled dispatching',
    ],
    result_ar: 'تقليل تكاليف الوقود بنسبة ٢٥٪ وزيادة إنتاجية الرحلات بنسبة ٤٠٪',
    result_en: '25% fuel cost reduction & 40% dispatch productivity gain',
    icon: 'Truck',
  },
];

export const NUZUL_TESTIMONIALS: Testimonial[] = [
  {
    name_en: 'Dr. Ahmed Hossam',
    name_ar: 'د. أحمد حسام',
    role_en: 'Clinic Director – Cairo',
    role_ar: 'مدير مجمع عيادات — القاهرة',
    text_en:
      'The clinic system and server infrastructure they built changed how we operate daily. The system is rock-solid, ultra-fast, and their technical support answers in minutes.',
    text_ar:
      'نظام إدارة العيادات والسيرفرات اللي نفذوها نقل شغلنا لمستوى تاني خالص. السيستم مستقر جداً وسريع، وفريق الدعم الهندسي بيرد ويحل أي طلب في دقايق.',
    rating: 5,
  },
  {
    name_en: 'Eng. Sara Khalil',
    name_ar: 'م. سارة خليل',
    role_en: 'IT Manager – Private Hospital',
    role_ar: 'مديرة تكنولوجيا المعلومات — مستشفى خاص',
    text_en:
      'They redesigned our entire hospital network from scratch. Zero downtime during the entire migration, seamless documentation, and unmatched engineering discipline.',
    text_ar:
      'أعادوا تصميم شبكة المستشفى والسيرفرات بالكامل من الصفر. مفيش ثانية واحدة توقف أثناء النقل، فريق محترف بأعلى درجات الالتزام والتوثيق التقني.',
    rating: 5,
  },
  {
    name_en: 'Mr. Amer Mohamed',
    name_ar: 'أ. عامر محمد',
    role_en: 'Managing Partner – Amer Tax & Accounting (amer-acc)',
    role_ar: 'الشريك الإداري — مكتب عامر للمحاسبة الضريبية (amer-acc)',
    text_en:
      'Hosting our tax software on Nuzul Tech Windows VPS allowed our 25 accountants to work smoothly from anywhere during tax audit peak season. Zero lag and rock-solid backups.',
    text_ar:
      'استضافة برامج الضرائب والمحاسبة على سيرفر ويندوز VPS من نُزول تِك خلّى 25 محاسباً يشتغلوا مع بعض في نفس الوقت في موسم الإقرارات بكل سلاسة وبدون أي بطء.',
    rating: 5,
  },
  {
    name_en: 'Mr. Khaled Mansour',
    name_ar: 'أ. خالد منصور',
    role_en: 'CEO – Retail Chain Egypt',
    role_ar: 'الرئيس التنفيذي — سلسلة متاجر تجزئة',
    text_en:
      'The cloud migration and WhatsApp automation project was completely flawless. Our systems are now much faster, our data is secure, and we saved heavily on operational costs.',
    text_ar:
      'مشروع هجرة السحابة وأتمتة الواتساب كان مثاليًا. أنظمتنا بقت أسرع وأكثر أماناً، وبوت الواتساب وفر علينا مجهود ضخم في خدمة العملاء والمتابعة.',
    rating: 5,
  },
  {
    name_en: 'Dr. Noha Adel',
    name_ar: 'د. نهى عادل',
    role_en: 'Medical Director – Alexandria',
    role_ar: 'مديرة طبية — الإسكندرية',
    text_en:
      'The medical archiving overhaul and email governance they architected saved our clinical staff dozens of hours every week and slashed our cloud bills by >75%.',
    text_ar:
      'مشروع فصل الأرشيف الطبي وحوكمة الإيميلات وفر على الأطباء وقت طويل جداً وخفض مصاريف الاستضافة السحابية الشهرية بنسبة تجاوزت 75%.',
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

  // 2. Windows VPS & Accounting (amer-acc)
  {
    id: 2,
    slug: 'windows-vps-accounting-egypt',
    title_en: 'Windows VPS (RDP) for Tax & Accounting: Starts 1,000 EGP/mo (amer-acc Blueprint)',
    title_ar: 'سيرفرات ويندوز VPS للمحاسبين والضرائب: تبدأ من 1000 ج.م/شهرياً وكيف توفر على الشركات؟',
    date: '5 فبراير 2026',
    category_en: 'Cloud Servers & Windows RDP',
    category_ar: 'السيرفرات وويندوز RDP',
    excerpt_en:
      'How tax advisors like amer-acc run multi-user accounting software smoothly over 1,000 EGP/mo Windows RDP.',
    excerpt_ar:
      'كيف تستفيد مكاتب المحاسبة والشركات مثل amer-acc من تشغيل برامج المحاسبة والضرائب لعدة محاسبين في نفس الوقت عبر سيرفر ويندوز RDP يبدأ من 1000 ج.م/شهرياً.',
    content_en:
      'Running accounting software on individual office laptops causes sync conflicts, sluggish data entry, and severe risk of data loss.\n\nWith a high-frequency Windows VPS (Remote Desktop RDP starting from 1,000 EGP/mo), accounting teams and tax advisors like amer-acc centralize their SQL databases in a fast, licensed environment. 20+ auditors can work concurrently from anywhere with zero latency and automated daily snapshots.',
    content_ar:
      'تشغيل البرامج المحاسبية على أجهزة الموظفين في المكتب يسبب مشاكل تعارض الملفات، بطء الفحص الضريبي، وخطر تلف الهارد ديسك.\n\nمع سيرفرات ويندوز VPS (تبدأ من 1000 ج.م/شهرياً)، تقدر مكاتب المحاسبة الضريبية زي amer-acc تجمع قواعد البيانات المحاسبية في بيئة سحابية مرخصة وفائقة السرعة. يقدر 20 محاسباً أو أكثر يشتغلوا في نفس اللحظة عبر Remote Desktop من أي مكان مع نسخ احتياطي يومي مشفر.',
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
];
