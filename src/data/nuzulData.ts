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
  whatsappBaseUrl: 'https://wa.me/201140565057',
  whatsappUrl:
    'https://wa.me/201140565057?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%20%D9%86%D9%8F%D8%B2%D9%88%D9%84%20%D8%AA%D9%90%D9%83%D8%8C%20%D8%A3%D8%B1%D8%BA%D8%A8%20%D9%81%D9%8A%20%D8%A7%D8%B3%D8%AA%D8%B4%D8%A7%D8%B1%D8%A9%20%D8%AA%D9%82%D9%86%D9%8A%D8%A9%20%D9%84%D8%A3%D8%B9%D9%85%D8%A7%D9%84%D9%8A',
  whatsappUrl2:
    'https://wa.me/201011678830?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%20%D9%86%D9%8F%D8%B2%D9%88%D9%84%20%D8%AA%D9%90%D9%83%D8%8C%20%D8%A3%D8%B1%D8%BA%D8%A8%20%D9%81%D9%8A%20%D8%A7%D8%B3%D8%AA%D8%B4%D8%A7%D8%B1%D8%A9%20%D8%AA%D9%82%D9%86%D9%8A%D8%A9%20%D9%84%D8%A3%D8%B9%D9%85%D8%A7%D9%84%D9%8A',
  email: 'info@nuzultech.com',
  website: 'https://www.nuzultech.com/',
  linkedin: 'https://www.linkedin.com/company/nuzultech/',
  locationAr: 'القاهرة، مصر — المقر الرئيسي',
  locationEn: 'Cairo, Egypt — HQ',
};

export const NUZUL_SERVICES: ServiceItem[] = [
  // 1. Infrastructure & Networks (الشبكات والبنية التحتية)
  {
    id: 1,
    category_key: 'network_infra',
    category_ar: 'الشبكات والبنية التحتية',
    category_en: 'Infrastructure & Networks',
    title_ar: 'Structured Cabling والدومين المركزي',
    title_en: 'Structured Cabling & Domain Services',
    description_ar:
      'تمديد كابلات Cat6A والألياف الضوئية، وتجميع Rack، وإعداد خادم Active Directory وخادم الملفات وبصمة الدخول.',
    description_en:
      'Certified Cat6A and fiber cabling, rack termination, Active Directory domain setup, file servers, and biometric access control.',
    icon: 'Layers',
    useCaseStory_ar:
      'تأسيس شبكة مهيكلة مع خادم Active Directory وخادم ملفات ونظام بصمة للتحكم في الدخول والحضور.',
    useCaseStory_en:
      'Built turnkey structured cabling, Active Directory domain controllers, file servers, and biometric access terminals.',
    features_ar: [
      'تمديد واختبار كابلات Cat6A والألياف الضوئية وتجميع Rack',
      'إعداد خادم Active Directory وخادم الملفات بصلاحيات محددة',
      'تركيب وبرمجة أجهزة البصمة والتحكم بالدخول',
    ],
    features_en: [
      'Certified Cat6A cabling, fiber uplinks, and rack termination',
      'Active Directory domain controller and RBAC file server setup',
      'Biometric access control and attendance hardware integration',
    ],
  },
  {
    id: 2,
    category_key: 'network_infra',
    category_ar: 'الشبكات والبنية التحتية',
    category_en: 'Infrastructure & Networks',
    title_ar: 'تأمين الشبكات وFirewall',
    title_en: 'Network Security & Firewalls',
    description_ar:
      'تركيب وبرمجة Firewall (Fortinet) وتقسيم الشبكة عبر VLANs لفصل أنظمة المحاسبة والمعدات الطبية وكاميرات المراقبة.',
    description_en:
      'Fortinet hardware firewall installation, policy configuration, and VLAN segmentation isolating accounting, medical systems, and CCTV.',
    icon: 'ShieldCheck',
    useCaseStory_ar:
      'عزل شبكات الأنظمة المحاسبية والطبية عن شبكة الضيوف عبر جدار ناري وتقسيم VLANs.',
    useCaseStory_en:
      'Segmented clinical and financial networks from public guest Wi-Fi using Fortinet firewalls and 802.1Q VLANs.',
    features_ar: [
      'تركيب وبرمجة Firewall (Fortinet) وتطبيق سياسات الأمان',
      'تقسيم الشبكة عبر VLANs لعزل الخوادم والأنظمة المالية',
      'عزل شبكة كاميرات المراقبة IP ومسجلات NVR في شبكة فرعية منفصلة',
    ],
    features_en: [
      'Fortinet hardware firewall installation and security policy configuration',
      '802.1Q VLAN segmentation isolating servers and financial databases',
      'Dedicated subnet isolation for IP CCTV surveillance and NVR storage',
    ],
  },
  {
    id: 3,
    category_key: 'network_infra',
    category_ar: 'الشبكات والبنية التحتية',
    category_en: 'Infrastructure & Networks',
    title_ar: 'سنترال VoIP والاتصالات الموحدة',
    title_en: 'VoIP IP-PBX Telephony',
    description_ar:
      'ربط اتصالات الفروع عبر سنترال VoIP IP-PBX، مع شجرة رد آلي (IVR) وتسجيل المكالمات.',
    description_en:
      'Multi-branch VoIP IP-PBX telephone systems with automated IVR routing, extension mapping, and call recording.',
    icon: 'PhoneCall',
    useCaseStory_ar:
      'ربط مقرات الشركة وفروعها بسنترال VoIP مع تحويلات داخلية وتسجيل للمكالمات.',
    useCaseStory_en:
      'Interconnected corporate branches using unified VoIP IP-PBX extensions and recorded customer support queues.',
    features_ar: [
      'شجرة رد آلي (IVR) وتوجيه المكالمات بين الفروع',
      'تسجيل المكالمات ومتابعة أداء التحويلات',
      'إعداد التليفونات الشبكية المكتبية وتطبيقات الهاتف الذكي',
    ],
    features_en: [
      'Multi-tier IVR automated attendant and branch routing',
      'Call recording archives and queue performance telemetry',
      'IP desk phones and encrypted mobile softphone extensions',
    ],
  },

  // 2. Cloud & Servers (السحابة والاستضافة)
  {
    id: 4,
    category_key: 'infra_cloud',
    category_ar: 'السحابة والاستضافة',
    category_en: 'Cloud & Servers',
    title_ar: 'Private Cloud داخل المقر',
    title_en: 'On-Premise Private Cloud',
    description_ar:
      'إعداد Private Cloud على خوادم داخل مقر المنشأة. البيانات تبقى داخل شبكتك، والوصول إليها بسرعة الشبكة المحلية.',
    description_en:
      'Private cloud deployment on dedicated local servers. Data remains inside your perimeter with LAN access speeds.',
    icon: 'Cloud',
    useCaseStory_ar:
      'تجهيز سحابة خاصة معزولة على خوادم محلية لإبقاء قواعد البيانات الحساسة داخل المقر.',
    useCaseStory_en:
      'Deployed an on-premise private cloud keeping proprietary databases inside the company perimeter.',
    features_ar: [
      'تشغيل البيانات على خوادم داخل المقر بسرعة الشبكة المحلية',
      'تجهيز بيئة عالية التوافر (High Availability) للحد من التوقف',
      'التحكم الكامل في صلاحيات الوصول وسجلات الاستخدام',
    ],
    features_en: [
      'On-premise deployment delivering low-latency LAN throughput',
      'High-Availability failover cluster configurations',
      'Granular access controls and localized data residency',
    ],
  },
  {
    id: 5,
    category_key: 'infra_cloud',
    category_ar: 'السحابة والاستضافة',
    category_en: 'Cloud & Servers',
    title_ar: 'Server Virtualization',
    title_en: 'Server Virtualization',
    description_ar:
      'دمج عدة خوادم فيزيائية على Cluster واحد (KVM أو VMware)، لتقليل عدد الأجهزة وتسهيل الصيانة.',
    description_en:
      'Consolidate physical servers onto a unified KVM or VMware cluster to reduce hardware footprint and simplify maintenance.',
    icon: 'Layers',
    useCaseStory_ar:
      'دمج خوادم متعددة في بيئة افتراضية موحدة مع نقل الأحمال تلقائياً عند صيانة العتاد.',
    useCaseStory_en:
      'Consolidated fragmented physical hardware onto a high-density virtualization cluster with automatic failover.',
    features_ar: [
      'نقل الأحمال تلقائياً عند صيانة أي خادم فيزيائي',
      'تقليل استهلاك الكهرباء والمساحة داخل غرفة الخوادم',
      'إدارة مركزية لموارد المعالجات والذاكرة والتخزين',
    ],
    features_en: [
      'Automated live workload migration during hardware maintenance',
      'Reduced server rack space and power consumption',
      'Centralized resource management across compute nodes',
    ],
  },
  {
    id: 6,
    category_key: 'infra_cloud',
    category_ar: 'السحابة والاستضافة',
    category_en: 'Cloud & Servers',
    title_ar: 'Containers والتوسع التلقائي',
    title_en: 'Containers & Elastic Scaling',
    description_ar:
      'تشغيل التطبيقات داخل Containers معزولة، مع توسع تلقائي وقت الضغط وتحديثات أسهل.',
    description_en:
      'Package applications in isolated containers with automatic scaling under peak demand and simplified rollouts.',
    icon: 'Cpu',
    useCaseStory_ar:
      'تحديث منصة أعمال للعمل عبر Containers معزولة، مما سهل إطلاق التحديثات واستيعاب الضغط.',
    useCaseStory_en:
      'Packaged core business applications into isolated containers with automated rollout pipelines.',
    features_ar: [
      'تشغيل الخدمات داخل بيئات Containers معزولة ومستقلة',
      'توسع تلقائي للموارد أثناء أوقات الذروة التشغيلية',
      'تحديثات مرحلية دون توقف الخدمة عن المستخدمين',
    ],
    features_en: [
      'Workload isolation across independent application containers',
      'Elastic horizontal scaling triggered by load thresholds',
      'Rolling zero-downtime updates and automated rollback',
    ],
  },
  {
    id: 7,
    category_key: 'infra_cloud',
    category_ar: 'السحابة والاستضافة',
    category_en: 'Cloud & Servers',
    title_ar: 'إدارة الخوادم السحابية',
    title_en: 'Managed Cloud Servers',
    description_ar:
      'إدارة وصيانة الخوادم السحابية بعقود SLA، تشمل التحديثات الأمنية، النسخ الاحتياطي، ومتابعة الأداء.',
    description_en:
      'Proactive cloud server administration under formal SLAs, covering security patches, backups, and uptime telemetry.',
    icon: 'Server',
    useCaseStory_ar:
      'إدارة خوادم سحابية لشركة تعليمية لضمان استقرار الخدمة وتحديث البرمجيات أثناء مواسم الاختبارات.',
    useCaseStory_en:
      'Administered multi-tier cloud servers maintaining uptime during seasonal examination peak loads.',
    features_ar: [
      'تثبيت التحديثات الأمنية الدورية لنظام التشغيل والبرمجيات',
      'نسخ احتياطي يومي مجدول مع حفظ النسخ في موقع منفصل',
      'متابعة حالة الخوادم والتدخل السريع عند الأعطال بعقد SLA',
    ],
    features_en: [
      'Scheduled OS kernel and package security patch management',
      'Automated daily backup pipelines retained off-site',
      'Uptime telemetry monitoring with contractually defined SLA response',
    ],
  },
  {
    id: 8,
    category_key: 'infra_cloud',
    category_ar: 'السحابة والاستضافة',
    category_en: 'Cloud & Servers',
    title_ar: 'خوادم Cloud VPS',
    title_en: 'Cloud VPS (KVM)',
    description_ar:
      'خوادم افتراضية بعزل KVM وأقراص NVMe، مع صلاحيات Root SSH وتسعير بالجنيه المصري.',
    description_en:
      'Virtual servers with dedicated KVM isolation, NVMe storage, full Root SSH access, and predictable EGP billing.',
    icon: 'Terminal',
    useCaseStory_ar:
      'توفير خوادم Cloud VPS لشركات ومكاتب محاسبة لتشغيل قواعد البيانات مع صلاحيات Root كاملة.',
    useCaseStory_en:
      'Provisioned dedicated KVM Cloud VPS instances hosting production databases with full Root SSH control.',
    features_ar: [
      'صلاحيات Root SSH كاملة للتحكم في إعدادات الخادم',
      'أقراص تخزين NVMe سريعة لمعالجة قواعد البيانات',
      'تسعير ثابت ومحدد بالجنيه المصري دون تقلبات في الفواتير',
    ],
    features_en: [
      'Full Root SSH access with dedicated computing resources',
      'High-IOPS NVMe storage arrays for relational databases',
      'Fixed, predictable EGP billing with zero foreign exchange fees',
    ],
  },
  {
    id: 9,
    category_key: 'infra_cloud',
    category_ar: 'السحابة والاستضافة',
    category_en: 'Cloud & Servers',
    title_ar: 'أسطح المكتب السحابية (Remote Desktop)',
    title_en: 'Cloud Workspaces & RDP',
    description_ar:
      'إتاحة وصول مشفر لفرق العمل والمراجعين إلى برامج المحاسبة وقواعد البيانات المركزية عبر RDP.',
    description_en:
      'Encrypted remote desktop access enabling distributed auditors and staff to run accounting and ERP suites centrally.',
    icon: 'Monitor',
    useCaseStory_ar:
      'تمكين فريق المحاسبة والمراجعة من العمل على برنامج الحسابات من مقرات العملاء عبر اتصال RDP مشفر.',
    useCaseStory_en:
      'Enabled 30 field auditors to access central ERP accounting databases via encrypted RDP sessions.',
    features_ar: [
      'اتصال مشفر عبر بروتوكول RDP من أجهزة الكمبيوتر والأجهزة اللوحية',
      'إبقاء ملفات المحاسبة وقواعد البيانات داخل الخادم المركزي',
      'إدارة صلاحيات كل مستخدم وتحديد التطبيقات المتاحة له',
    ],
    features_en: [
      'Encrypted RDP access from desktop and laptop endpoints',
      'Central database containment preventing unauthorized local exports',
      'User permission management and single-application application publishing',
    ],
  },
  {
    id: 10,
    category_key: 'infra_cloud',
    category_ar: 'السحابة والاستضافة',
    category_en: 'Cloud & Servers',
    title_ar: 'الخوادم المخصصة (Bare-Metal)',
    title_en: 'Dedicated Bare-Metal Servers',
    description_ar:
      'خوادم فيزيائية مستقلة لمستأجر واحد، لتشغيل قواعد البيانات الكبيرة والأرشيف الطبي دون مشاركة عتاد.',
    description_en:
      'Single-tenant physical servers with dedicated CPU and storage throughput for large databases and radiological archives.',
    icon: 'HardDrive',
    useCaseStory_ar:
      'تخصيص خادم فيزيائي مستقل لتشغيل أرشيف الأشعة الطبية وقواعد البيانات دون منافسة على الموارد.',
    useCaseStory_en:
      'Dedicated single-tenant physical hardware deployed for radiological PACS storage and core transactional databases.',
    features_ar: [
      'عتاد فيزيائي كامل مخصص لشركتك فقط دون أي مشاركة',
      'أقراص NVMe سريعة مع إعداد مصفوفة RAID لحماية البيانات',
      'حماية ضد هجمات حجب الخدمة (DDoS) واتصال شبكي مباشر',
    ],
    features_en: [
      'Single-tenant bare-metal physical hardware with dedicated compute cores',
      'Hardware RAID NVMe configurations preventing disk failure loss',
      'DDoS network filtering with unmetered port connectivity',
    ],
  },
  {
    id: 11,
    category_key: 'infra_cloud',
    category_ar: 'السحابة والاستضافة',
    category_en: 'Cloud & Servers',
    title_ar: 'استضافة المواقع المدارة',
    title_en: 'Managed Web Hosting',
    description_ar:
      'استضافة مواقع للشركات بلوحة cPanel وخوادم LiteSpeed، مع شهادة SSL مجانية ونسخ احتياطي يومي.',
    description_en:
      'Corporate cPanel hosting on LiteSpeed servers with automated SSL certificates and scheduled daily backups.',
    icon: 'Globe2',
    useCaseStory_ar:
      'استضافة الموقع الرسمي للشركة مع بريد الأعمال وتوفير نسخ احتياطي يومي لحماية الملفات.',
    useCaseStory_en:
      'Hosted corporate portals and web applications with daily automated recovery snapshots and AutoSSL.',
    features_ar: [
      'لوحة تحكم cPanel لإدارة الملفات وقواعد البيانات والبريد',
      'خوادم LiteSpeed سريعة مع شهادة SSL مجانية بتجديد تلقائي',
      'نسخ احتياطي يومي آلي محفوظ خارج الخادم لاستعادة سريعة',
    ],
    features_en: [
      'Industry-standard cPanel control panel for files, databases, and mail',
      'High-speed LiteSpeed web servers with auto-renewing SSL',
      'Daily automated off-site backups with one-click restore',
    ],
  },
  {
    id: 12,
    category_key: 'infra_cloud',
    category_ar: 'السحابة والاستضافة',
    category_en: 'Cloud & Servers',
    title_ar: 'حجز وإدارة الدومين',
    title_en: 'Domain Registration & DNS',
    description_ar:
      'تسجيل النطاقات المصرية (.eg و.com.eg) والدولية، مع إدارة سجلات DNS وقفل النقل للحماية.',
    description_en:
      'Register .eg, .com.eg, and international domains with managed DNS records, DNSSEC, and registrar transfer locks.',
    icon: 'AtSign',
    useCaseStory_ar:
      'حجز النطاق الرسمي المصري للشركة وضبط سجلات DNS وحمايته من النقل غير المصرح.',
    useCaseStory_en:
      'Secured official Egyptian .eg domains paired with managed DNS zones and transfer locks.',
    features_ar: [
      'تسجيل وتجديد النطاقات المصرية (.eg و.com.eg) والنطاقات العالمية',
      'إدارة وتحديث سجلات DNS (A, CNAME, MX, TXT)',
      'تفعيل قفل النقل وحماية ملكية النطاق',
    ],
    features_en: [
      'Official Egyptian .eg, .com.eg, and international TLD registrations',
      'DNS zone record administration (A, CNAME, MX, TXT)',
      'Registrar transfer locks protecting domain ownership',
    ],
  },
  {
    id: 13,
    category_key: 'infra_cloud',
    category_ar: 'السحابة والاستضافة',
    category_en: 'Cloud & Servers',
    title_ar: 'أتمتة إعداد الخوادم (IaC)',
    title_en: 'Infrastructure Automation',
    description_ar:
      'تجهيز الخوادم وتحديث التطبيقات عبر قوالب برمجية مؤتمتة لتقليل الأخطاء اليدوية وتوحيد بيئات التشغيل.',
    description_en:
      'Automated server provisioning and scripted deployments reducing manual configuration errors across environments.',
    icon: 'Terminal',
    useCaseStory_ar:
      'أتمتة تجهيز الخوادم السحابية لقسم التطوير لتسريع نشر التحديثات وتفادي أخطاء الإعداد اليدوي.',
    useCaseStory_en:
      'Automated server staging workflows with scripted deployment pipelines eliminating configuration drift.',
    features_ar: [
      'تجهيز الخوادم عبر سكربتات برمجية قابلة لإعادة الاستخدام',
      'توحيد الإعدادات بين بيئة الاختبار وبيئة التشغيل الفعلية',
      'مسار محدد لنشر التحديثات مع إمكانية التراجع عند المشاكل',
    ],
    features_en: [
      'Scripted infrastructure provisioning via automated recipes',
      'Environment parity between testing and production clusters',
      'Version-controlled deployment pipelines with rapid rollback',
    ],
  },

  // 3. Cybersecurity & Ops (الأمن السيبراني والمراقبة)
  {
    id: 14,
    category_key: 'security_obs',
    category_ar: 'الأمن السيبراني',
    category_en: 'Cybersecurity',
    title_ar: 'مراقبة أداء الخوادم والشبكة',
    title_en: 'Infrastructure Monitoring & Telemetry',
    description_ar:
      'مراقبة مستمرة للأجهزة والسيرفرات وسعات التخزين ومسجلات NVR، مع تنبيهات تلقائية عند الأعطال.',
    description_en:
      'Continuous monitoring of servers, network switches, storage volumes, and NVR feeds with automated threshold alerts.',
    icon: 'Activity',
    useCaseStory_ar:
      'ربط أجهزة الشبكة والخوادم بنظام مراقبة يرسل تنبيهاً تلقائياً لفريق الصيانة عند توقف أي جهاز.',
    useCaseStory_en:
      'Implemented continuous infrastructure probers generating automated alerts upon host or port failures.',
    features_ar: [
      'متابعة حية لاستهلاك المعالج والذاكرة وسعات التخزين في الخوادم',
      'فحص اتصال أجهزة الشبكة ومسجلات كاميرات المراقبة NVR',
      'إرسال تنبيهات تلقائية عبر البريد ورسائل الهاتف عند حدوث خلل',
    ],
    features_en: [
      'Continuous CPU, RAM, and disk utilization telemetry',
      'ICMP and SNMP reachability probes for switches and NVR recorders',
      'Automated notification dispatch via email and SMS on service disruption',
    ],
  },
  {
    id: 15,
    category_key: 'security_obs',
    category_ar: 'الأمن السيبراني',
    category_en: 'Cybersecurity',
    title_ar: 'مراقبة سجلات الأمان (SIEM)',
    title_en: 'Security Log Monitoring (SIEM)',
    description_ar:
      'تجميع وتحليل سجلات أحداث الأمان من الخوادم وFirewall، لرصد محاولات الدخول المشبوهة والتعامل معها.',
    description_en:
      'Centralized security log ingestion from servers and firewalls to detect unauthorized access attempts and security anomalies.',
    icon: 'ShieldCheck',
    useCaseStory_ar:
      'تجميع سجلات الأمان من الجدار الناري والخوادم لرصد محاولات تخمين كلمات المرور وحظرها.',
    useCaseStory_en:
      'Ingested firewall and operating system audit logs into a central console with automated IP ban policies.',
    features_ar: [
      'تجميع سجلات الدخول والأحداث الأمنية من الخوادم وأجهزة الشبكة',
      'رصد محاولات الدخول المتكررة المشبوهة وحظرها تلقائياً',
      'تقارير دورية بالأحداث الأمنية لمراجعة مستوى الأمان',
    ],
    features_en: [
      'Centralized security event and authentication log aggregation',
      'Automated detection and blocking of repeated brute-force attempts',
      'Periodic security audit reports summarizing threat activity',
    ],
  },
  {
    id: 16,
    category_key: 'security_obs',
    category_ar: 'الأمن السيبراني',
    category_en: 'Cybersecurity',
    title_ar: 'النسخ الاحتياطي واستمرارية الأعمال',
    title_en: 'Disaster Recovery & 3-2-1 Backup',
    description_ar:
      'تطبيق خطة نسخ احتياطي منفصل عن الشبكة (3-2-1 Backup)، لحماية قواعد البيانات والملفات من برمجيات الفدية وتلف العتاد.',
    description_en:
      'Immutable off-site backup pipelines protecting databases and file archives against hardware failure and ransomware.',
    icon: 'Database',
    useCaseStory_ar:
      'إعداد نسخ احتياطي يومي مشفر لقواعد بيانات الحسابات مع حفظ نسخة منفصلة خارج مقر الشركة.',
    useCaseStory_en:
      'Deployed automated daily database backups retained in an immutable off-site location with recovery drills.',
    features_ar: [
      'تطبيق قاعدة 3-2-1: ثلاث نسخ على وسيطين، ونسخة خارج المقر',
      'حماية النسخ الاحتياطية من التعديل أو الحذف (خزنة معزولة ضد الفدية)',
      'اختبار دوري لاسترجاع قواعد البيانات للتأكد من سلامة الملفات',
    ],
    features_en: [
      '3-2-1 backup architecture: 3 copies, 2 media types, 1 off-site location',
      'Immutable storage policies protecting backups against ransomware encryption',
      'Scheduled database restore drills verifying data consistency',
    ],
  },
  {
    id: 17,
    category_key: 'security_obs',
    category_ar: 'الأمن السيبراني',
    category_en: 'Cybersecurity',
    title_ar: 'بريد الشركة وحماية الدومين',
    title_en: 'Corporate Email & DMARC Governance',
    description_ar:
      'تشغيل ونقل بريد الشركة مع توثيق سجلات SPF وDKIM وDMARC لمنع انتحال النطاق وتقليل وصول الرسائل إلى Spam.',
    description_en:
      'Enterprise mailbox setup and migration with SPF, 2048-bit DKIM, and DMARC enforcement to block invoice spoofing.',
    icon: 'Mail',
    useCaseStory_ar:
      'نقل بريد الشركة وتوثيق سجلات SPF وDKIM لحماية فواتير الشركة من الانتحال وضمان وصول المراسلات للعملاء.',
    useCaseStory_en:
      'Configured hardened business mailboxes with strict DMARC enforcement preventing domain spoofing.',
    features_ar: [
      'إعداد ونقل صناديق البريد باسم نطاق شركتك',
      'توثيق سجلات SPF وDKIM (2048-bit) وDMARC لحماية النطاق',
      'التوافق مع برامج Outlook وتطبيقات الهواتف الذكية وحماية من الرسائل المزعجة',
    ],
    features_en: [
      'Domain-branded corporate mailbox setup and migration',
      'SPF, 2048-bit DKIM, and DMARC enforcement to block email spoofing',
      'Outlook and mobile IMAP/SMTP integration with spam filtering',
    ],
  },

  // 4. Software & ERP (البرمجيات وأنظمة الإدارة)
  {
    id: 18,
    category_key: 'software',
    category_ar: 'البرمجيات وأنظمة الإدارة',
    category_en: 'Software & ERP',
    title_ar: 'أنظمة ERP والربط الضريبي',
    title_en: 'Enterprise ERP & Tax Integration',
    description_ar:
      'نظام للحسابات والمخازن والمشتريات والمبيعات، مربوط مباشرة بمنظومة الفاتورة الإلكترونية المصرية.',
    description_en:
      'Unified accounting, inventory, and sales system integrated directly with the Egyptian Tax Authority e-invoicing platform.',
    icon: 'Layers',
    useCaseStory_ar:
      'تطبيق نظام ERP مخصص لإدارة المخازن والمبيعات وإصدار الفواتير الإلكترونية وربطها بالضرائب.',
    useCaseStory_en:
      'Deployed an ERP system managing warehouse stocks and issuing ETA-compliant electronic tax invoices.',
    features_ar: [
      'ربط مباشر مع منظومة الفاتورة والإيصال الإلكتروني المصرية',
      'إدارة الحسابات العامة والمخازن والمشتريات والمبيعات في نظام واحد',
      'تحديد صلاحيات دقيقة لكل مستخدم مع سجل تدقيق لجميع العمليات',
    ],
    features_en: [
      'Direct integration with the Egyptian Tax Authority e-invoicing platform',
      'Unified ledger for general accounting, stock management, and sales orders',
      'Role-based access permissions (RBAC) with complete operational audit trail',
    ],
  },
  {
    id: 19,
    category_key: 'software',
    category_ar: 'البرمجيات وأنظمة الإدارة',
    category_en: 'Software & ERP',
    title_ar: 'اختبار وقبول الأنظمة (QA / UAT)',
    title_en: 'QA & User Acceptance Testing',
    description_ar:
      'تدقيق تقني مستقل واختبارات قبول للأنظمة وتطبيقات الموبايل، قبل توقيع محضر الاستلام من المطوّر.',
    description_en:
      'Independent functional, load, and security testing for software and mobile apps before vendor sign-off.',
    icon: 'CheckCircle2',
    useCaseStory_ar:
      'إجراء فحص فني مستقل لتطبيق موبايل ونظام إدارة قبل الاستلام النهائي من الشركة المطورة.',
    useCaseStory_en:
      'Conducted independent functional and load verification testing for a customer CRM before vendor handover.',
    features_ar: [
      'اختبار وظائف النظام تحت ضغط عدد مستخدمين متزامن',
      'فحص تطبيقات الويب والموبايل للتأكد من خلوها من الأخطاء التشغيلية',
      'تقديم تقرير فني واضح يحدد المشاكل البرمجية المطلوب تعديلها',
    ],
    features_en: [
      'Functional and multi-user concurrency stress testing',
      'End-to-end testing across web and mobile applications',
      'Itemized technical test defect reports prior to final acceptance sign-off',
    ],
  },
  {
    id: 20,
    category_key: 'software',
    category_ar: 'البرمجيات وأنظمة الإدارة',
    category_en: 'Software & ERP',
    title_ar: 'المواقع والبوابات',
    title_en: 'Corporate Web Portals',
    description_ar:
      'تصميم وتطوير مواقع وبوابات للشركات، مع نموذج لطلب عرض السعر وربط بقنوات التواصل.',
    description_en:
      'Responsive websites and corporate portals with RFQ intake forms and business communication channels.',
    icon: 'Code',
    useCaseStory_ar:
      'بناء موقع رسمي لشركة استثمارية مع استمارة لاستقبال طلبات عروض الأسعار وتوجيهها للمبيعات.',
    useCaseStory_en:
      'Engineered a corporate portal capturing customer quote inquiries and routing them to sales.',
    features_ar: [
      'تصميم متوافق مع أجهزة الكمبيوتر والهواتف الذكية',
      'إعداد الموقع وفق متطلبات الفهرسة في محركات البحث (SEO)',
      'لوحة تحكم تمكن فريقك من تعديل المحتوى وإضافة الأخبار والخدمات',
    ],
    features_en: [
      'Responsive layout across mobile, tablet, and desktop screens',
      'Search engine optimization (SEO) standards and fast page loading',
      'Content management control panel for updating pages and news',
    ],
  },
  {
    id: 21,
    category_key: 'software',
    category_ar: 'البرمجيات وأنظمة الإدارة',
    category_en: 'Software & ERP',
    title_ar: 'تطبيقات iOS وAndroid',
    title_en: 'iOS & Android Mobile Applications',
    description_ar:
      'تطبيقات موبايل مخصصة لإدارة المهام والحجوزات، متصلة مباشرة بقاعدة بيانات الشركة.',
    description_en:
      'Custom mobile apps for task tracking, reservations, and authenticated database integration.',
    icon: 'Smartphone',
    useCaseStory_ar:
      'تطوير تطبيق للمرضى لحجز المواعيد واستلام نتائج التحاليل مباشرة على الهاتف.',
    useCaseStory_en:
      'Engineered a clinic mobile application enabling appointments and viewing medical results.',
    features_ar: [
      'تطوير يعمل على هواتف آيفون (iOS) وأندرويد (Android)',
      'إرسال إشعارات وتنبيهات تلقائية للمستخدمين بحالة الطلبات',
      'ربط آمن ومشفر مع قاعدة بيانات الشركة المركزية',
    ],
    features_en: [
      'Native performance across iOS and Android mobile platforms',
      'Push notification integration for operational updates and alerts',
      'Secure encrypted connection with central company databases',
    ],
  },
  {
    id: 22,
    category_key: 'software',
    category_ar: 'البرمجيات وأنظمة الإدارة',
    category_en: 'Software & ERP',
    title_ar: 'المتاجر الإلكترونية',
    title_en: 'E-Commerce Storefronts',
    description_ar:
      'متجر إلكتروني مربوط ببوابات الدفع وشركات الشحن، مع تحديث أرصدة المخزون تلقائياً.',
    description_en:
      'Online store platforms integrated with Egyptian payment gateways, couriers, and automated stock sync.',
    icon: 'ShoppingBag',
    useCaseStory_ar:
      'إنشاء متجر إلكتروني مربوط بالدفع بالبطاقات وبوالص الشحن الآلية مع تحديث المخزن.',
    useCaseStory_en:
      'Developed an e-commerce storefront connected with local payment gateways and courier dispatch.',
    features_ar: [
      'الربط مع بوابات الدفع الإلكتروني بالبطاقات والمحافظ الذكية',
      'ربط آلي مع شركات الشحن لإصدار بوالص الشحن وتتبع الطرود',
      'تحديث كميات المنتجات تلقائياً في المخازن عند إتمام الطلب',
    ],
    features_en: [
      'Integration with debit/credit card and mobile wallet gateways',
      'Courier shipping API connection for automatic waybills and tracking',
      'Automatic inventory decrement upon completed customer checkout',
    ],
  },
  {
    id: 23,
    category_key: 'software',
    category_ar: 'البرمجيات وأنظمة الإدارة',
    category_en: 'Software & ERP',
    title_ar: 'تصميم واجهات الأنظمة (UX / UI)',
    title_en: 'UI/UX Interface Design',
    description_ar:
      'تصميم شاشات وسير عمل لأنظمة التشغيل الداخلية، لتقليل أخطاء إدخال البيانات.',
    description_en:
      'User flow and screen design for internal business systems to reduce data entry errors and friction.',
    icon: 'Layout',
    useCaseStory_ar:
      'إعادة تصميم شاشات الاستقبال والحجز لمركز طبي لتسهيل إدخال بيانات المرضى وتقليل وقت الانتظار.',
    useCaseStory_en:
      'Redesigned reception workflows to speed up patient intake and prevent entry errors.',
    features_ar: [
      'تصميم مسارات عمل منظمة تقلل تشتت الموظفين وأخطاء الإدخال',
      'نماذج أولية تفاعلية لتجربة النظام واختباره قبل البدء في البرمجة',
      'واجهات متناسقة تدعم اللغتين العربية والإنجليزية والوضعين الفاتح والداكن',
    ],
    features_en: [
      'Streamlined operational workflows reducing data entry fatigue and errors',
      'Interactive wireframes and prototypes tested prior to development',
      'Bilingual RTL/LTR design system supporting light and dark modes',
    ],
  },
];

export const NUZUL_PACKAGES: EnterprisePackage[] = [
  {
    id: 'starter',
    name_en: 'Starter',
    name_ar: 'البداية',
    subtitle_en: 'Clinic · Office · Small Business',
    subtitle_ar: 'عيادة · مكتب · شركة صغيرة',
    badge_en: 'Fixed Pricing',
    badge_ar: 'سعر محدد',
    price_setup_egp: 'رسوم التأسيس: 15,000 – 25,000 ج.م',
    price_monthly_egp: 'الدعم الشهري: 1,000 – 2,000 ج.م',
    price_setup_usd: 'Setup fee: 15,000 – 25,000 EGP',
    price_monthly_usd: 'Monthly support: 1,000 – 2,000 EGP',
    highlighted: false,
    summary_en: [
      'Structured cabling for up to 15 drops',
      'Domain registration & DNS configuration',
      '10 corporate mailboxes (SPF/DKIM/DMARC)',
      'Firewall hardening & port closure',
    ],
    summary_ar: [
      'Structured Cabling حتى 15 نقطة شبكة',
      'تسجيل الدومين وإعداد سجلات DNS',
      '10 صناديق بريد الشركة بتوثيق SPF وDKIM وDMARC',
      'ضبط Firewall وعزل المنافذ',
    ],
    details_en: [
      'Structured cabling for up to 15 network drops',
      'Corporate domain registration and DNS record configuration',
      '10 corporate mailboxes with SPF, DKIM, and DMARC enforcement',
      'Firewall configuration closing unused ports',
    ],
    details_ar: [
      'Structured Cabling حتى 15 نقطة شبكة',
      'تسجيل الدومين وإعداد سجلات DNS',
      'إعداد 10 صناديق بريد الشركة مع توثيق SPF وDKIM وDMARC',
      'ضبط Firewall وعزل المنافذ غير المستخدمة',
    ],
  },
  {
    id: 'business',
    name_en: 'Growth',
    name_ar: 'النمو',
    subtitle_en: 'Up to 50 users · Up to 3 Access Points',
    subtitle_ar: 'حتى 50 مستخدماً · حتى 3 Access Points',
    badge_en: 'Most Popular',
    badge_ar: 'الأكثر طلباً',
    price_setup_egp: 'رسوم التأسيس: من 45,000 ج.م',
    price_monthly_egp: 'تشمل عقد صيانة ودعم (SLA) لمدة 3 أشهر',
    price_setup_usd: 'Setup fee: from 45,000 EGP',
    price_monthly_usd: 'Includes 3-month SLA support retainer',
    highlighted: true,
    summary_en: [
      'Structured cabling & rack termination',
      'Hardware firewall & VLAN segmentation',
      'Up to 3 enterprise Wi-Fi APs',
      '3-month SLA support retainer',
    ],
    summary_ar: [
      'Structured Cabling وتركيب كابينة Rack',
      'تركيب Firewall وإعداد VLANs',
      'تركيب حتى 3 نقاط وصول لاسلكية (Access Points)',
      'عقد صيانة ودعم (SLA) لمدة 3 أشهر',
    ],
    details_en: [
      'Structured cabling and rack termination',
      'Hardware firewall installation and VLAN segmentation',
      'Up to 3 enterprise Wi-Fi Access Points',
      '3-month post-handover SLA support retainer',
    ],
    details_ar: [
      'Structured Cabling وتركيب كابينة Rack',
      'تركيب Firewall وإعداد VLANs لفصل شبكات العمل والمحاسبة',
      'تركيب حتى 3 نقاط وصول لاسلكية (Access Points)',
      'عقد صيانة ودعم (SLA) لمدة 3 أشهر بعد التسليم',
    ],
  },
  {
    id: 'professional',
    name_en: 'Multi-Branch',
    name_ar: 'الفروع المتعددة',
    subtitle_en: 'Up to 100 users · Secure multi-branch interconnection',
    subtitle_ar: 'حتى 100 مستخدم · ربط آمن بين الفروع',
    badge_en: 'Site Survey',
    badge_ar: 'معاينة ميدانية',
    price_setup_egp: 'رسوم التأسيس: من 75,000 ج.م',
    price_monthly_egp: 'تسعير دقيق وفق المعاينة الميدانية',
    price_setup_usd: 'Setup fee: from 75,000 EGP',
    price_monthly_usd: 'Itemized quote based on site survey',
    highlighted: false,
    summary_en: [
      'Site-to-Site VPN across branches',
      'Corporate email for up to 100 mailboxes',
      'Compact server room or central rack',
      'Periodic maintenance and SLA agreement',
    ],
    summary_ar: [
      'ربط الفروع عبر Site-to-Site VPN مشفر',
      'بريد الشركة حتى 100 صندوق بتوثيق DMARC',
      'غرفة خوادم مصغرة أو كابينة Rack مركزية',
      'عقد صيانة ودعم دوري وفق SLA',
    ],
    details_en: [
      'Encrypted Site-to-Site VPN connecting regional branches',
      'Corporate email for up to 100 mailboxes with DMARC',
      'Compact server room or centralized rack fitting',
      'Periodic maintenance and SLA support agreement',
    ],
    details_ar: [
      'ربط الفروع عبر Site-to-Site VPN مشفر',
      'بريد الشركة حتى 100 صندوق بتوثيق DMARC',
      'غرفة خوادم مصغرة أو كابينة Rack مركزية',
      'عقد صيانة ودعم دوري وفق SLA',
    ],
  },
  {
    id: 'enterprise',
    name_en: 'Enterprise',
    name_ar: 'المؤسسات',
    subtitle_en: '100+ users · Full building & multi-branch coverage',
    subtitle_ar: 'أكثر من 100 مستخدم · تغطية المباني والفروع',
    badge_en: 'Custom Scope',
    badge_ar: 'حسب المعاينة',
    price_setup_egp: 'حسب المعاينة الميدانية',
    price_monthly_egp: 'مقايسة تفصيلية مكتوبة بعد المعاينة',
    price_setup_usd: 'Scoped via site survey',
    price_monthly_usd: 'Detailed itemized bill of materials post-survey',
    highlighted: false,
    summary_en: [
      'Turnkey server room fit-out & redundant power',
      'Site-to-Site VPN with dual-ISP failover',
      'Dedicated engineer or SLA operations retainer',
      'As-Built runbook & handover documentation',
    ],
    summary_ar: [
      'تصميم وتنفيذ غرفة خوادم وتجهيزات الطاقة',
      'Site-to-Site VPN بين المقرات مع خطوط إنترنت مزدوجة',
      'مهندس مقيم أو عقد تشغيل SLA مخصص',
      'توثيق هندسي للبنية التحتية ومحضر استلام فني',
    ],
    details_en: [
      'Turnkey server room fit-out and redundant power sizing',
      'Site-to-Site VPN across all offices with dual-ISP failover',
      'Dedicated resident engineer or tailored SLA operations retainer',
      'Complete As-Built infrastructure runbook and handover documentation',
    ],
    details_ar: [
      'تصميم وتنفيذ غرفة خوادم وتجهيزات الطاقة الاحتياطية',
      'Site-to-Site VPN بين المقرات والفروع مع خطوط إنترنت مزدوجة',
      'مهندس مقيم أو عقد تشغيل (SLA) مخصص',
      'توثيق هندسي للبنية التحتية ومحضر استلام فني',
    ],
  },
];

export const NUZUL_HOSTING_PLANS: HostingPlan[] = [
  {
    id: 'vps-10',
    key: 'vps',
    nameAr: 'Cloud VPS 10',
    nameEn: 'Cloud VPS 10',
    basePriceEGP: 320,
    basePriceUSD: 6.45,
    specsAr: [
      '4 أنوية معالج (AMD EPYC / Xeon vCPU)',
      '8 GB ذاكرة عشوائية DDR4 ECC',
      '75 GB تخزين NVMe فائق السرعة',
      '1 لقطة احتياطية (Snapshot) + 32 TB نقل بيانات',
    ],
    specsEn: [
      '4 vCPU Cores (AMD EPYC / Xeon)',
      '8 GB DDR4 ECC RAM',
      '75 GB NVMe SSD Storage',
      '1 Snapshot · 32 TB Traffic (1 Gbit/s)',
    ],
  },
  {
    id: 'vps-20',
    key: 'vps',
    nameAr: 'Cloud VPS 20',
    nameEn: 'Cloud VPS 20',
    basePriceEGP: 570,
    basePriceUSD: 11.5,
    specsAr: [
      '6 أنوية معالج (AMD EPYC / Xeon vCPU)',
      '16 GB ذاكرة عشوائية DDR4 ECC',
      '100 GB تخزين NVMe بمصفوفة RAID-10',
      '2 Snapshot · 32 TB نقل بيانات (1 Gbit/s)',
    ],
    specsEn: [
      '6 vCPU Cores (AMD EPYC / Xeon)',
      '16 GB DDR4 ECC RAM',
      '100 GB NVMe SSD (RAID-10)',
      '2 Snapshots · 32 TB Traffic (1 Gbit/s)',
    ],
    popular: true,
  },
  {
    id: 'vps-30',
    key: 'vps',
    nameAr: 'Cloud VPS 30',
    nameEn: 'Cloud VPS 30',
    basePriceEGP: 940,
    basePriceUSD: 19.0,
    specsAr: [
      '8 أنوية معالج (AMD EPYC / Xeon vCPU)',
      '24 GB ذاكرة عشوائية DDR4 ECC',
      '200 GB تخزين NVMe بمصفوفة RAID-10',
      '3 Snapshots · 32 TB نقل بيانات (1 Gbit/s)',
    ],
    specsEn: [
      '8 vCPU Cores (AMD EPYC / Xeon)',
      '24 GB DDR4 ECC RAM',
      '200 GB NVMe SSD (RAID-10)',
      '3 Snapshots · 32 TB Traffic (1 Gbit/s)',
    ],
  },
  {
    id: 'vps-40',
    key: 'vps',
    nameAr: 'Cloud VPS 40',
    nameEn: 'Cloud VPS 40',
    basePriceEGP: 1580,
    basePriceUSD: 31.9,
    specsAr: [
      '12 نواة معالج (AMD EPYC / Xeon vCPU)',
      '48 GB ذاكرة عشوائية DDR4 ECC',
      '250 GB تخزين NVMe بمصفوفة RAID-10',
      '4 Snapshots · 32 TB نقل بيانات (1 Gbit/s)',
    ],
    specsEn: [
      '12 vCPU Cores (AMD EPYC / Xeon)',
      '48 GB DDR4 ECC RAM',
      '250 GB NVMe SSD (RAID-10)',
      '4 Snapshots · 32 TB Traffic (1 Gbit/s)',
    ],
  },
];

export const NUZUL_CASE_STUDIES: CaseStudy[] = [
  {
    id: 1,
    badge: 'HOSPITAL SECURITY & NETWORKS',
    title_ar: 'تأمين الشبكة الطبية ومنظومة المراقبة البصرية 4K لمستشفى تخصصي',
    title_en: 'Medical Network Isolation & 4K IP Surveillance for Specialized Hospital',
    category_ar: 'الأمن السيبراني',
    category_en: 'Cybersecurity',
    client_ar: 'مستشفى تخصصي خاص — القاهرة',
    client_en: 'Private Specialized Hospital — Cairo',
    executiveSummary_ar:
      'تأسيس البنية الأمنية والشبكية لمستشفى تخصصي بالقاهرة: شبكة كاميرات مراقبة 4K تتجاوز 180 كاميرا، جدار حماية Fortinet NGFW لعزل الأجهزة الطبية وغرف العمليات عن شبكة الزوار، تمديدات فايبر وكابلات Cat6A، وتأمين البريد الطبي بتوثيق SPF/DKIM/DMARC مع دعم هندسي 24/7.',
    executiveSummary_en:
      'Sovereign IT security and network segmentation for a specialized Cairo hospital: 180+ 4K IP surveillance grid, Fortinet NGFW isolation between clinical wards and guest Wi-Fi, fiber/Cat6A cabling, and hardened corporate mail.',
    description_ar:
      'شبكة مراقبة 4K تتجاوز 180 كاميرا مع جدار حماية Fortinet NGFW وعزل VLAN وتمديدات فايبر Cat6A وتأمين البريد الرسمي.',
    description_en:
      'Integrated hospital security: 180+ 4K IP cameras, Fortinet NGFW VLAN isolation, fiber cabling, and hardened mail.',
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
      'نقاط عمياء أمنية داخل أروقة الطوارئ والصيدلية المركزية دون توثيق مرئي عالي الدقة.',
      'بنية كابلات قديمة سببت بطئاً في نقل صور الأشعة إلى غرف العمليات والعيادات.',
      'تداخل الأجهزة الطبية مع شبكة الاستخدام العام وغياب الحماية المتقدمة للبريد الرسمي.',
    ],
    challenges_en: [
      'Monitoring blind spots in emergency corridors and central pharmacy lacking audited video trails.',
      'Legacy network cabling introducing packet loss during heavy radiological file transfers.',
      'Clinical terminals sharing network broadcast domains with general facility access.',
    ],
    solution_ar: [
      'عزل حركة بيانات غرف العمليات والأشعة عبر VLANs وجهاز Firewall من Fortinet (NGFW) مع نفق VPN للأطباء.',
      'تأسيس تمديدات فايبر وكابلات Cat6A وتركيب 180+ كاميرا 4K متصلة بمصفوفات NVR RAID-6 لأرشفة 90 يوماً.',
      'هجرة وتوثيق 200+ صندوق بريد طبي بسجلات SPF وDKIM وDMARC تحت إدارة ومراقبة دورية وفق SLA.',
    ],
    solution_en: [
      'Implemented strict VLAN segmentation and Fortinet NGFW policies isolating surgical and imaging networks.',
      'Deployed fiber backbone, Cat6A cabling, and 180+ 4K cameras backed by redundant RAID-6 NVR storage.',
      'Migrated and hardened 200+ corporate mailboxes under SPF/DKIM/DMARC with continuous SLA operations.',
    ],
    deliverables_ar: [
      'شبكة كاميرات مراقبة رقمية 4K (180+ كاميرا) وخوادم تسجيل NVR RAID-6',
      'بنية تحتية للشبكات وكابلات الفايبر المنظمة Cat6A',
      'جهاز Firewall من Fortinet NGFW مع عزل شبكي VLAN ونفق VPN',
      'بريد طبي رسمي مشفر بتوثيق SPF/DKIM/DMARC',
      'تشغيل ومراقبة دورية ضمن خدمة IT as a Service وفق SLA',
    ],
    deliverables_en: [
      '180+ 4K IP Surveillance Grid & Redundant NVR RAID-6 Cluster',
      'Structured Fiber & Cat6A Network Cabling',
      'Fortinet NGFW Security Perimeter & Zero-Trust VLAN Segmentation',
      'Hardened Corporate Email System with SPF/DKIM/DMARC',
      'Managed Operations under IT as a Service SLA',
    ],
    result_ar:
      'عزل حركة بيانات غرف العمليات والأشعة عبر VLANs وجهاز Firewall من Fortinet، وتغطية بصرية مسجّلة بأرشفة 90 يوماً.',
    result_en:
      'VLAN and Fortinet NGFW isolation for clinical networks backed by 90-day 4K NVR retention.',
    icon: 'Shield',
  },
  {
    id: 2,
    badge: 'FINANCIAL CONSULTING CLIENT',
    title_ar: 'الاستضافة السحابية الخاصة وإدارة البريد المالي لمكتب استشارات',
    title_en: 'Private Cloud Hosting & Email Management for Financial Consultancy',
    category_ar: 'السحابة والاستضافة',
    category_en: 'Cloud & Servers',
    client_ar: 'مكتب استشارات مالية ومحاسبية — القاهرة',
    client_en: 'Financial & Audit Consultancy — Cairo',
    executiveSummary_ar:
      'نقل بيئة العمل المحاسبية والرقابية إلى خوادم سحابية معزولة بأقراص NVMe لتأمين وصول 30 مراجعاً مالياً بالتوازي، مع توثيق 150+ صندوق بريد مالي وخط نسخ احتياطي يومي مشفر.',
    executiveSummary_en:
      'Migrated mission-critical financial audit workflows to an NVMe KVM private cloud supporting 30 concurrent auditors, 150+ hardened corporate mailboxes, and automated daily off-site backups.',
    description_ar:
      'خوادم سحابية خاصة لتشغيل أنظمة المراجعة والـ ERP لـ 30 مراجعاً متزامناً مع تأمين 150+ بريد رسمي ونسخ يومي معزول.',
    description_en:
      'Dedicated cloud infrastructure hosting financial ERP suites for 30 auditors with 150+ hardened mailboxes.',
    tech: [
      'Enterprise Financial Cloud',
      'High-Availability Cloud VPS',
      'Corporate Financial Mail',
      'SPF / DKIM / DMARC',
      'Immutable Cloud Backup',
      'IT as a Service (ITaaS)',
    ],
    challenges_ar: [
      'بطء تشغيل البرامج المحاسبية على الأجهزة الفردية وصعوبة وصول المراجعين لقواعد البيانات من مقرات العملاء.',
      'تأخر وصول المراسلات والتقارير المالية لغياب سجلات التوثيق الرقمي للبريد الرسمي.',
      'مخاطر تلف أو فقدان الملفات المحاسبية المخزنة على أقراص محلية غير منسوخة.',
    ],
    challenges_en: [
      'Local PC bottlenecks preventing auditors from safely accessing shared financial ledgers off-site.',
      'Unauthenticated outbound audit reports flagged by external mail filters.',
      'Data loss exposure across unbacked workstation hard drives.',
    ],
    solution_ar: [
      'تخصيص خوادم سحابية بأقراص NVMe تدعم الوصول المشفر المتزامن لـ 30 مستشاراً ومراجعاً مالياً.',
      'هجرة وتأمين 150+ صندوق بريد مالي بتوثيق SPF وDKIM وDMARC وتطبيق نسخ احتياطي يومي معزول.',
    ],
    solution_en: [
      'Provisioned high-IOPS NVMe KVM instances supporting encrypted multi-session access for 30 concurrent auditors.',
      'Hardened 150+ mailboxes under SPF/DKIM/DMARC and enacted automated daily encrypted cloud snapshots.',
    ],
    deliverables_ar: [
      'خوادم سحابية بأقراص NVMe لتشغيل المنظومات المالية والـ ERP',
      'هجرة وتأمين 150+ صندوق بريد مالي رسمي',
      'منظومة نسخ احتياطي يومي مشفر معزول خارج المقر',
      'إدارة ومراقبة دورية ضمن عقد IT as a Service',
    ],
    deliverables_en: [
      'High-IOPS Enterprise Cloud Hosting for Financial ERP Suites',
      '150+ Corporate Financial Mailboxes Hardened via DMARC',
      'Automated Daily Encrypted Off-Site Backup Pipeline',
      '24/7 Managed Infrastructure Operations (ITaaS)',
    ],
    result_ar:
      'تشغيل مركزي مستقر لـ 30 مراجعاً متزامناً عبر خادم سحابي معزول وتوثيق أكثر من 150 صندوق بريد رسمي مع نسخ احتياطي يومي.',
    result_en:
      'Stable concurrent ERP access for 30 auditors on an isolated NVMe server paired with 150+ hardened mailboxes.',
    icon: 'Lock',
  },
  {
    id: 3,
    badge: 'STRATEGIC CASE STUDY',
    title_ar: 'فصل أرشيف الأشعة الطبية (PACS) والسحابة الهجينة لمركز أورام',
    title_en: 'Medical PACS Archiving & Hybrid Cloud Storage for Oncology Center',
    category_ar: 'السحابة والاستضافة',
    category_en: 'Cloud & Servers',
    client_ar: 'مركز طبي تخصصي للأورام — القاهرة',
    client_en: 'Specialized Oncology Center — Cairo',
    executiveSummary_ar:
      'إعادة هندسة البنية الرقمية لمركز أورام تخصصي عبر فصل ملفات الأشعة الضخمة (DICOM PACS) عن البريد الإلكتروني وتشغيل خادم تخزين محلي سريع مع نسخ احتياطي هجين مشفر.',
    executiveSummary_en:
      'Decoupled heavy diagnostic DICOM PACS archives from corporate mail onto dedicated local NVMe storage backed by AES-256 encrypted hybrid cloud replication.',
    description_ar:
      'حل هجين لفصل الأرشيف الطبي PACS عن البريد الإلكتروني وهجرة 120 صندوق بريد مع نسخ احتياطي مشفر.',
    description_en:
      'Hybrid architecture separating DICOM PACS storage from 120 migrated clinical mailboxes with encrypted replication.',
    tech: [
      'Hybrid Cloud',
      'DICOM PACS Archive',
      'Private Mail Server',
      'SPF / DKIM / DMARC',
      'AES-256 Storage',
      'KVM Virtualization',
      'IT as a Service',
    ],
    challenges_ar: [
      'تضخم مساحات صناديق البريد الإلكتروني نتيجة تداول ملفات الأشعة التشخيصية عبر الرسائل.',
      'بطء أجهزة العيادات أثناء البحث في المراسلات وارتفاع فواتير التخزين السحابي الخارجي.',
      'الحاجة إلى حفظ آمن ومستقر لسجلات المرضى وفق معايير النسخ المعزول.',
    ],
    challenges_en: [
      'Severe mailbox bloat from exchanging multi-megabyte DICOM scan attachments over corporate email.',
      'Clinical workstation lag during inbox indexing alongside mounting external storage costs.',
      'Strict requirement for tamper-resistant clinical data backup and recovery.',
    ],
    solution_ar: [
      'فصل الأرشيف الطبي PACS عن البريد وتأسيس خادم تخزين محلي بأقراص NVMe داخل شبكة المركز.',
      'هجرة 120 صندوق بريد طبي إلى خادم خاص وتطبيق خط نسخ احتياطي هجين مشفر بتقنية AES-256.',
    ],
    solution_en: [
      'Decoupled DICOM PACS storage onto high-speed local NVMe arrays accessible over clinical LAN.',
      'Migrated 120 physician mailboxes onto hardened servers with encrypted AES-256 hybrid cloud backups.',
    ],
    deliverables_ar: [
      'خادم تخزين محلي عالي السرعة لأرشيف الأشعة (DICOM PACS)',
      'هجرة وتأمين 120 صندوق بريد طبي رسمي',
      'منظومة نسخ احتياطي هجين مشفر AES-256',
      'إدارة ومراقبة دورية ضمن IT as a Service',
    ],
    deliverables_en: [
      'Local High-Speed NVMe DICOM PACS Archiving Node',
      '120 Migrated & Hardened Clinical Email Accounts',
      'Encrypted AES-256 Hybrid Cloud Backup Pipeline',
      'Continuous Monitoring & Managed Support (ITaaS)',
    ],
    result_ar:
      'فصل أرشيف الأشعة الطبية على خادم تخزين محلي مع نسخ احتياطي سحابي مشفر وهجرة 120 صندوق بريد دون فقدان سجلات.',
    result_en:
      'Decoupled medical imaging onto local NVMe storage with encrypted cloud replication and 120 stabilized mailboxes.',
    icon: 'Shield',
  },
  {
    id: 4,
    badge: 'HOSPITAL INFRASTRUCTURE & PR',
    title_ar: 'خوادم Virtualization عالية التوافر ونظام علاقات المرضى لمستشفى جراحي',
    title_en: 'High-Availability Virtualization & Patient Relations System for Hospital',
    category_ar: 'الشبكات والبنية التحتية',
    category_en: 'Infrastructure & Networks',
    client_ar: 'مستشفى جراحي وتخصصي — القاهرة',
    client_en: 'Surgical & Specialized Hospital — Cairo',
    executiveSummary_ar:
      'تحديث البنية البرمجية والفيزيائية لمستشفى جراحي: Cluster عالي التوافر (HA Cluster)، شبكة فايبر وكابلات Cat6A، أجهزة Firewall من Fortinet NGFW، بوابة مرضى، نظام علاقات المرضى (PR System)، ونظام تذاكر وموافقات طبية.',
    executiveSummary_en:
      'Turnkey hospital modernization: High-Availability virtualization cluster, fiber/Cat6A backbone, Fortinet NGFW, Patient Relations (PR) suite, engineering ticketing, and insurance approvals engine.',
    description_ar:
      'دمج الخوادم في Cluster عالي التوافر وتطوير بوابة المرضى ونظام علاقات المرضى (PR) والتذاكر والموافقات الطبية.',
    description_en:
      'Server consolidation onto HA virtualization clusters paired with hospital portal, PR system, and approvals workflows.',
    tech: [
      'Patient Relations (PR) System',
      'KVM / VMware HA Cluster',
      'Hospital Web Portal',
      'Medical Approvals Workflow',
      'IT Ticketing System',
      'Fiber & Cat6A Cabling',
      'Fortinet NGFW',
    ],
    challenges_ar: [
      'تعدد الخوادم الفيزيائية المنفصلة وغياب Cluster موحد يدعم الاستمرارية عند صيانة أي جهاز.',
      'تشتت شكاوى واستفسارات المراجعين بين الأقسام وبطء دورة الموافقات الطبية الورقية.',
      'تمديدات شبكية قديمة سببت تقطع الاتصال داخل المعامل والعيادات.',
    ],
    challenges_en: [
      'Fragmented single physical servers lacking automated failover protection.',
      'Manual paper tracking for patient feedback, insurance approvals, and ward maintenance tickets.',
      'Aging cabling causing intermittent connectivity in diagnostic units.',
    ],
    solution_ar: [
      'بناء بيئة Virtualization عالية التوافر (HA Cluster) مع شبكات فايبر وكابلات Cat6A وجهاز Firewall من Fortinet.',
      'إطلاق بوابة المستشفى، ونظام علاقات المرضى (PR System)، ونظام التذاكر الداخلية، ومنصة الموافقات التأمينية.',
    ],
    solution_en: [
      'Consolidated physical workloads onto an HA virtualization cluster behind fiber uplinks and Fortinet NGFW.',
      'Built unified hospital web portal, Patient Relations suite, service desk ticketing, and approvals workflows.',
    ],
    deliverables_ar: [
      'بوابة المستشفى الرسمية وبوابة حجز المرضى',
      'نظام إدارة علاقات المرضى (Patient Relations / PR System)',
      'نظام التذاكر والدعم الفني لصيانة الأجهزة الطبية والهندسية',
      'نظام الموافقات الطبية والتأمينية السريعة',
      'بيئة Virtualization عالية التوافر (HA Cluster)',
      'شبكات الألياف الضوئية وأجهزة Firewall من Fortinet NGFW',
    ],
    deliverables_en: [
      'Hospital Website & Patient Booking Portal',
      'Dedicated Patient Relations (PR) Tracking Suite',
      'Clinical & Engineering Maintenance Ticketing System',
      'Insurance Approvals Workflow Engine',
      'High-Availability Virtualization Cluster',
      'Structured Fiber Network & Fortinet NGFW Security',
    ],
    result_ar:
      'دمج الخوادم في بيئة Virtualization عالية التوافر، وتحديث شبكة الألياف الضوئية وأجهزة Firewall، وتشغيل بوابة المرضى والموافقات.',
    result_en:
      'Unified hospital servers onto HA virtualization clusters alongside modernized fiber cabling and integrated patient workflows.',
    icon: 'Building2',
  },
  {
    id: 5,
    badge: 'COMPREHENSIVE ERP',
    title_ar: 'منظومة تخطيط موارد المستشفيات والسجلات الطبية الإلكترونية (EMR)',
    title_en: 'Clinical & Operational Hospital ERP & EMR Suite',
    category_ar: 'البرمجيات وأنظمة الإدارة',
    category_en: 'Software & ERP',
    client_ar: 'مستشفى عام وتخصصي — الجيزة',
    client_en: 'General & Specialized Hospital — Giza',
    executiveSummary_ar:
      'منظومة ERP وسجلات طبية موحدة (EMR) لربط حجز العيادات وغرف العمليات، الملفات الطبية الرقمية، الفوترة التأمينية، إدارة الصيدلية المركزية، وجداول نوبتجيات الطاقم الطبي.',
    executiveSummary_en:
      'Enterprise hospital ERP and EMR platform uniting clinic scheduling, Electronic Medical Records, insurance billing, central pharmacy dispensing, and shift management.',
    description_ar:
      'منظومة ERP وسجلات طبية موحدة تشمل الجدولة، الصيدلية المركزية، الفوترة التأمينية، وجداول الموارد البشرية.',
    description_en:
      'Hospital ERP and EMR suite handling appointment scheduling, billing clearing, and pharmacy inventory control.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Docker', 'Hospital EMR', 'HL7/FHIR'],
    challenges_ar: [
      'بطء تسجيل المراجعين وازدحام الاستقبال بسبب تشتت العمل بين عدة برامج منفصلة.',
      'صعوبة مطابقة أرصدة الأدوية والمستلزمات الجراحية عبر الصيدلية والمخازن المركزية.',
    ],
    challenges_en: [
      'Outpatient desk delays caused by disconnected billing, reception, and pharmacy programs.',
      'Manual reconciliation difficulties tracking medication batches across wards and central stock.',
    ],
    solution_ar: [
      'بناء قاعدة بيانات موحدة بـ PostgreSQL وRedis تشغل وحدات الجدولة، السجلات الطبية (EMR)، الصيدلية، والفوترة.',
    ],
    solution_en: [
      'Engineered a unified PostgreSQL & Redis backend orchestrating EMR records, clinic queues, pharmacy, and billing.',
    ],
    deliverables_ar: [
      'نظام جدولة العيادات وحجوزات غرف العمليات',
      'السجلات الطبية الإلكترونية الموحدة (EMR)',
      'نظام الفوترة الآلية ومطابقة التأمين الطبي',
      'إدارة الصيدلية المركزية ومخزون المستلزمات الطبية',
      'إدارة الموارد البشرية وجداول نوبتجيات الأطباء والتمريض',
    ],
    deliverables_en: [
      'Outpatient Clinic & Surgical Scheduling Module',
      'Unified Electronic Medical Records (EMR)',
      'Automated Billing & Insurance Claims Clearing',
      'Central Pharmacy Inventory & Expiry Governance',
      'Clinical Workforce & Shift Rotation Module',
    ],
    result_ar:
      'ربط دورة العمل الطبية بالكامل من الاستقبال إلى الصيدلية والفوترة في قاعدة بيانات مركزية موحدة.',
    result_en:
      'Unified clinical operations from patient check-in through pharmacy dispensing and billing inside one database.',
    icon: 'Activity',
  },
  {
    id: 6,
    badge: 'TAX & ACCOUNTING CLIENT',
    title_ar: 'تأمين البريد الرسمي واستضافة الأنظمة الضريبية سحابياً لمؤسسة محاسبة',
    title_en: 'Corporate Email Hardening & Cloud Tax Systems for Accounting Firm',
    category_ar: 'السحابة والاستضافة',
    category_en: 'Cloud & Servers',
    client_ar: 'مؤسسة محاسبة واستشارات ضريبية — مصر',
    client_en: 'Tax & Accounting Consultancy Firm — Egypt',
    executiveSummary_ar:
      'هجرة وتأمين أكثر من 500 صندوق بريد رسمي لمؤسسة محاسبة وضرائب بسجلات SPF/DKIM/DMARC، مع استضافة برامج المحاسبة والضرائب لـ 25 مراجعاً على خادم سحابي مخصص بنسخ يومي معزول.',
    executiveSummary_en:
      'Migrated and secured 500+ mailboxes with strict SPF/DKIM/DMARC records while hosting central accounting workloads for 25 auditors on an isolated cloud VPS.',
    description_ar:
      'هجرة وتأمين 500+ بريد رسمي بتوثيق DMARC، وتشغيل أنظمة الضرائب والمحاسبة سحابياً لـ 25 مراجعاً مع نسخ احتياطي يومي.',
    description_en:
      'Hardened 500+ enterprise mailboxes and cloud-hosted accounting applications for 25 concurrent tax auditors.',
    tech: ['500+ Mail Migration', 'SPF / DKIM / DMARC', 'Cloud VPS Hosting', 'Automated Daily Backups', 'IT as a Service (ITaaS)'],
    challenges_ar: [
      'وصول المراسلات الرسمية والإخطارات الضريبية إلى مجلد السبام لدى الأطراف الخارجية.',
      'بطء تبادل الملفات المالية على شبكة المكتب المحلية خلال مواسم تقديم الإقرارات الضريبية.',
    ],
    challenges_en: [
      'Critical tax notifications flagged as spam due to missing cryptographic email authentication.',
      'File-sharing slowdowns on local desktop hardware during peak tax compliance deadlines.',
    ],
    solution_ar: [
      'نقل 500+ صندوق بريد إلى خادم خاص وتطبيق SPF وDKIM وDMARC مع تشغيل خادم سحابي مخصص للمراجعين ونسخ يومي.',
    ],
    solution_en: [
      'Executed staged migration of 500+ mailboxes with DMARC enforcement and deployed an isolated VPS with daily off-site snapshots.',
    ],
    deliverables_ar: [
      'هجرة وتوثيق 500+ صندوق بريد رسمي',
      'استضافة سحابية لأنظمة المحاسبة والضرائب لـ 25 مراجعاً',
      'نسخ احتياطي يومي مشفر لملفات وسجلات العملاء',
      'إدارة ومراقبة تقنية مستمرة 24/7',
    ],
    deliverables_en: [
      '500+ Corporate Mailboxes Migrated & DMARC-Hardened',
      'Cloud Hosting for Tax & Audit Software',
      'Automated Daily Encrypted Off-Site Backups',
      'Managed 24/7 Infrastructure Support',
    ],
    result_ar:
      'هجرة وتأمين أكثر من 500 صندوق بريد رسمي وتشغيل البرامج الضريبية مركزياً على خادم سحابي معزول بنسخ احتياطي يومي.',
    result_en:
      'Authenticated 500+ corporate email accounts and centralized tax software execution with encrypted daily recovery points.',
    icon: 'Mail',
  },
  {
    id: 7,
    badge: 'MAIL MIGRATION CLIENT',
    title_ar: 'هجرة وتأمين البريد الطبي والأرشفة السحابية لمجموعة عيادات',
    title_en: 'Medical Email Migration & Encrypted Archiving for Clinics Group',
    category_ar: 'الأمن السيبراني',
    category_en: 'Cybersecurity',
    client_ar: 'مجموعة مراكز وعيادات طبية — مصر',
    client_en: 'Healthcare Clinics Group — Egypt',
    executiveSummary_ar:
      'نقل متدرج لأكثر من 250 صندوق بريد للأطباء والإدارة إلى خوادم بريد خاصة مع تفعيل توثيق 2048-bit DKIM وسياسة DMARC وأرشفة سحابية مشفرة.',
    executiveSummary_en:
      'Staged IMAP cutover of 250+ physician and staff mailboxes to sovereign private mail clusters with 2048-bit DKIM, DMARC reject policy, and encrypted cloud archiving.',
    description_ar:
      'هجرة 250+ صندوق بريد طبي مع توثيق DKIM 2048-bit وحماية DMARC وأرشفة مشفرة للمراسلات.',
    description_en:
      'Private cloud mail migration of 250+ medical mailboxes with cryptographic DKIM signing and archiving.',
    tech: ['Private Mail Server', 'DMARC Enforcement', 'DKIM 2048-bit', 'SPF Records', 'Encrypted Archiving', 'IT as a Service'],
    challenges_ar: [
      'توقفات متكررة في خادم البريد السابق وتعرض النطاق لمحاولات انتحال عناوين إدارية.',
      'ضيق سعات التخزين لدى 250 صندوق بريد طبي وعدم وجود أرشفة مركزية منظمة.',
    ],
    challenges_en: [
      'Legacy mail service interruptions alongside domain spoofing threats.',
      'Inbox quota bottlenecks across 250 accounts lacking structured legal mail journaling.',
    ],
    solution_ar: [
      'مزامنة مرحلية عبر IMAP/TLS لـ 250 صندوق بريد وتطبيق سجلات SPF وDKIM وDMARC مع أرشفة مشفرة.',
    ],
    solution_en: [
      'Executed staged IMAP sync into private mail infrastructure enforcing SPF, 2048-bit DKIM, DMARC reject, and encrypted journaling.',
    ],
    deliverables_ar: [
      'مزامنة ونقل 250+ صندوق بريد طبي دون فقدان رسائل',
      'ضبط سجلات SPF وDKIM 2048-bit وDMARC',
      'أرشفة سحابية مشفرة للمراسلات الطبية والإدارية',
    ],
    deliverables_en: [
      'Staged Migration of 250+ Clinical Mailboxes',
      'SPF, 2048-bit DKIM & DMARC Hardening',
      'Encrypted Cloud Mail Journaling & Retention',
    ],
    result_ar:
      'نقل متدرج لـ 250 صندوق بريد إلى خوادم خاصة مع سياسة DMARC الصارمة وأرشفة سحابية مشفرة.',
    result_en:
      'Staged cutover of 250 clinical mailboxes under strict anti-spoofing authentication and encrypted archiving.',
    icon: 'Mail',
  },
  {
    id: 8,
    badge: 'MAIL MIGRATION CLIENT',
    title_ar: 'حماية النطاق التجاري ومكافحة انتحال الفواتير لشركة شحن دولي',
    title_en: 'Domain Brand Protection & Anti-Phishing Hardening for Freight Firm',
    category_ar: 'الأمن السيبراني',
    category_en: 'Cybersecurity',
    client_ar: 'شركة خدمات لوجستية وشحن دولي — مصر',
    client_en: 'Freight & Logistics Enterprise — Egypt',
    executiveSummary_ar:
      'حماية النطاق التجاري لشركة شحن دولي من انتحال الفواتير عبر سياسة DMARC Reject وتوقيع DNSSEC وهجرة 120 صندوق بريد ببروتوكول TLS 1.3.',
    executiveSummary_en:
      'Protected commercial domain reputation against spoofed freight billing via DMARC reject, DNSSEC signing, and TLS 1.3 mail hardening across 120 logistics inboxes.',
    description_ar:
      'حماية النطاق بـ DNSSEC وDMARC Reject وتأمين 120 صندوق بريد تجاري ضد روابط التصيد.',
    description_en:
      'DNSSEC and DMARC brand protection paired with anti-phishing filters for 120 freight mailboxes.',
    tech: ['Anti-Phishing Shield', 'DMARC Quarantine/Reject', 'Cloud Mail Archiving', 'DNSSEC', 'IMAP/SMTP TLS 1.3'],
    challenges_ar: [
      'محاولات إرسال فواتير شحن مزورة لعملاء دوليين باستخدام اسم نطاق الشركة.',
      'وصول مرفقات وروابط تصيد خبيثة إلى محطات موظفي التخليص الجمركي.',
    ],
    challenges_en: [
      'Unauthorized third-party senders spoofing the freight domain to target international buyers.',
      'Phishing links targeting customs clearance teams via uninspected attachments.',
    ],
    solution_ar: [
      'تفعيل سياسة DMARC Reject وتوقيع DNSSEC ونقل 120 صندوق بريد خلف بوابة فحص التهديدات الواردة.',
    ],
    solution_en: [
      'Enforced DMARC p=reject and DNSSEC domain authentication, routing 120 mailboxes through TLS 1.3 threat inspection.',
    ],
    deliverables_ar: [
      'تأمين النطاق بسياسات DNSSEC وDMARC Reject',
      'نقل وتأمين 120 صندوق بريد تجاري عبر TLS 1.3',
      'أرشفة مشفرة لمراسلات الشحن ومراقبة أمنية مستمرة',
    ],
    deliverables_en: [
      'DNSSEC & DMARC Reject Domain Protection',
      '120 TLS 1.3 Hardened Commercial Mailboxes',
      'Audited Mail Archiving & Inbound Filtering',
    ],
    result_ar:
      'حظر محاولات انتحال النطاق وإرسال الفواتير المزيفة مع استقرار منظومة المراسلات اللوجستية.',
    result_en:
      'Blocked unauthorized domain spoofing worldwide while securing trade communication channels.',
    icon: 'Shield',
  },
  {
    id: 9,
    badge: 'FLEET IOT & TELEMETRY',
    title_ar: 'منصة تتبع الأسطول وحساسات القياس عن بُعد (IoT) لشركة نقل بري',
    title_en: 'IoT Fleet Telemetry & Dispatch Platform for Transport Operator',
    category_ar: 'البرمجيات وأنظمة الإدارة',
    category_en: 'Software & ERP',
    client_ar: 'شركة نقل بري وإدارة أساطيل — مصر',
    client_en: 'Overland Transport & Fleet Operator — Egypt',
    executiveSummary_ar:
      'منظومة تتبع لحركة الشاحنات بين المحافظات عبر وحدات GPS وحساسات وقود مربوطة ببروتوكول MQTT، مع تطبيق جوال للسائقين ولوحة عمليات مركزية.',
    executiveSummary_en:
      'IoT telemetry platform streaming truck GPS coordinates and fuel sensor readings via MQTT to an operations console and driver mobile app.',
    description_ar:
      'ربط وحدات GPS وحساسات الوقود عبر MQTT مع تطبيق للسائقين ولوحة تشغيل مركزية لتتبع الرحلات.',
    description_en:
      'MQTT GPS and fuel sensor telemetry integrated with a driver dispatch app and operations console.',
    tech: ['React Native', 'Node.js', 'PostgreSQL', 'MQTT IoT', 'Live Telemetry Dashboard', 'Mapbox', 'IT as a Service'],
    challenges_ar: [
      'غياب الرؤية المباشرة لمسارات الشاحنات بين المحافظات ومراقبة معدلات استهلاك الوقود.',
      'الاعتماد على التنسيق الهاتفي اليدوي في جدولة تحركات السائقين والشحنات.',
    ],
    challenges_en: [
      'Limited real-time visibility across highway freight movement and fuel usage discrepancies.',
      'Manual telephone dispatching delaying trip coordination across regional hubs.',
    ],
    solution_ar: [
      'نشر وسيط استقبال MQTT لبث بيانات الـ GPS والوقود إلى قواعد PostgreSQL ولوحة تشغيل وتطبيق سائقين.',
    ],
    solution_en: [
      'Built an MQTT telemetry ingestion pipeline feeding PostgreSQL analytics, a dispatch console, and React Native driver app.',
    ],
    deliverables_ar: [
      'بنية استقبال القياسات الحية لأجهزة GPS وحساسات الوقود (MQTT)',
      'تطبيق الجوال للسائقين لإدارة أوامر التشغيل',
      'لوحة العمليات المركزية وتقارير الرحلات والوقود',
      'تشغيل ومراقبة البنية السحابية للمنصة',
    ],
    deliverables_en: [
      'GPS & Fuel Sensor MQTT Telemetry Ingestion Grid',
      'React Native Driver Dispatch Mobile Application',
      'Central Operations Map & Fuel Reporting Console',
      'Ongoing Managed Cloud Operations',
    ],
    result_ar:
      'توحيد مراقبة حركة الشاحنات والوقود لحظياً عبر لوحة عمليات مركزية وتطبيق جوال مخصص للسائقين.',
    result_en:
      'Centralized live vehicle location and fuel telemetry inside a unified dispatch dashboard.',
    icon: 'Truck',
  },
  {
    id: 10,
    badge: 'CHARITY FOUNDATION IT',
    title_ar: 'تأسيس الشبكات المنظمة والدومين المركزي والسنترال الرقمي لمؤسسة أهلية',
    title_en: 'Turnkey Cabling, Active Directory & VoIP PBX for Non-Profit Foundation',
    category_ar: 'الشبكات والبنية التحتية',
    category_en: 'Infrastructure & Networks',
    client_ar: 'مؤسسة عمل أهلي وتنموي — القاهرة',
    client_en: 'Non-Profit Development Foundation — Cairo',
    executiveSummary_ar:
      'تأسيس البنية التحتية لمقر مؤسسة تنموية: تمديدات Cat6A منظمة، خادم دومين مركزي (Active Directory & DHCP)، خادم ملفات بصلاحيات دقيقة، سنترال VoIP، شبكة كاميرات مراقبة CCTV، ونسخ احتياطي يومي مع تغطية واي فاي مؤسسية.',
    executiveSummary_en:
      'Turnkey infrastructure for a Cairo non-profit foundation: Cat6A structured cabling, Active Directory & DHCP, RBAC File Server, VoIP PBX telephony, HD IP CCTV surveillance, Wi-Fi AP mesh, and automated off-site backups.',
    description_ar:
      'شبكات Cat6A منظمة، دومين مركزي AD، خادم ملفات، سنترال VoIP، كاميرات CCTV، ونسخ احتياطي يومي مشفر.',
    description_en:
      'Cat6A cabling, Active Directory domain controller, file server, VoIP PBX, CCTV surveillance, and automated daily backup.',
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
      'تشتت ملفات وأبحاث المستفيدين على أجهزة فردية دون دومين مركزي أو صلاحيات موحدة.',
      'صعوبة التواصل الهاتفي بين الإدارات وغياب النسخ الاحتياطي الآلي للسجلات.',
    ],
    challenges_en: [
      'Beneficiary and administrative records dispersed across unmanaged individual computers.',
      'Lack of unified internal voice extensions and automated daily off-site backups.',
    ],
    solution_ar: [
      'تمديد شبكة Cat6A وراكات إدارة، ونشر خادم Active Directory وخادم ملفات بصلاحيات الأقسام وسنترال VoIP.',
    ],
    solution_en: [
      'Installed Cat6A cabling, Active Directory & DHCP governance, RBAC File Server, VoIP extensions, CCTV, and daily backups.',
    ],
    deliverables_ar: [
      'بنية شبكات منظمة Cat6A وخادم الدومين Active Directory & DHCP',
      'منظومة كاميرات المراقبة الشبكية CCTV وجهاز التسجيل المركزي',
      'سنترال تليفوني رقمي داخلي (VoIP PBX)',
      'خادم ملفات مركزي (File Server) بمصفوفة صلاحيات الأقسام',
      'منظومة نسخ احتياطي يومي آلي مشفر وشبكة Wi-Fi مؤسسية',
    ],
    deliverables_en: [
      'Cat6A Structured Cabling & Active Directory Domain Controller',
      'HD IP CCTV Surveillance Grid & Central NVR',
      'VoIP IP-PBX Internal Telephony Extensions',
      'Centralized Role-Based File Server',
      'Automated Daily Off-Site Backup & Enterprise Wi-Fi Mesh',
    ],
    result_ar:
      'توحيد صلاحيات المستخدمين ومشاركة الملفات المركزية بأمان عبر Active Directory مع ربط هاتفي ونسخ يومي منتظم.',
    result_en:
      'Centralized domain access governance, secure departmental file sharing, unified VoIP extensions, and scheduled backups.',
    icon: 'Building2',
  },
  {
    id: 11,
    badge: 'ENTERPRISE CRM & QA',
    title_ar: 'الفحص الهندسي واختبارات القبول البرمجية (QA & UAT) لمنصة CRM سحابية',
    title_en: 'Software QA, Load Testing & Vendor Handover Audit for Cloud CRM',
    category_ar: 'البرمجيات وأنظمة الإدارة',
    category_en: 'Software & ERP',
    client_ar: 'منصة سحابية لإدارة علاقات العملاء — مصر',
    client_en: 'Multi-Tenant Cloud CRM Platform — Egypt',
    executiveSummary_ar:
      'إجراء اختبارات الجودة والقبول الهندسي (QA & UAT) لمنصة CRM سحابية موجهة للمصانع والصيدليات وشركات الشحن قبل الاستلام من المطورين: اختبار بوابة الويب، تطبيقات الجوال، نظام الاتصالات WebRTC، واختبارات التحمل والأمان.',
    executiveSummary_en:
      'Independent QA, load concurrency, and security acceptance audit prior to software vendor sign-off across a multi-tenant web CRM, native mobile builds, and embedded WebRTC calling.',
    description_ar:
      'اختبار منصة الويب وتطبيقات الجوال ونظام الاتصالات السحابية واعتماد محضر الاستلام البرمجي.',
    description_en:
      'End-to-end QA, concurrency load testing, and security audit across web CRM, mobile apps, and WebRTC telephony.',
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
      'الحاجة إلى التحقق المستقل من ثبات النظام وتطبيقات الجوال ونظام المكالمات قبل توقيع استلام الكود.',
      'ضرورة كشف اختناقات قواعد البيانات وثغرات الصلاحيات بين حسابات الشركات المشتركة.',
    ],
    challenges_en: [
      'Requirement for neutral engineering validation before signing final software vendor handover.',
      'Need to detect API concurrency bottlenecks and multi-tenant authorization leaks prior to launch.',
    ],
    solution_ar: [
      'تنفيذ مصفوفة اختبارات وظيفية (E2E) ومحاكاة ضغط مكالمات WebRTC وتدقيق صلاحيات قواعد البيانات.',
    ],
    solution_en: [
      'Executed E2E functional matrices, iOS/Android compatibility checks, WebRTC call load tests, and RBAC security audits.',
    ],
    deliverables_ar: [
      'مصفوفة اختبارات الجودة والقبول الوظيفي (QA & UAT Matrix)',
      'تقرير اختبار منصة الويب وتطبيقات iOS وAndroid',
      'فحص جودة الصوت والاستقرار لنظام المكالمات المدمج WebRTC',
      'اختبارات الضغط والتحمل على قواعد البيانات والـ API',
      'تقرير الاعتماد الفني النهائي قبل الاستلام من شركة التطوير',
    ],
    deliverables_en: [
      'Comprehensive End-to-End QA Test Matrix',
      'Certified Web Portal & Mobile Builds Review',
      'Embedded WebRTC Call Engine Stability Report',
      'API & Database Stress Concurrency Audit',
      'Formal Vendor Handover Sign-Off Dossier',
    ],
    result_ar:
      'توثيق الملاحظات الحرجة ومعالجتها قبل الإطلاق التجاري وإصدار شهادة القبول الهندسي لاستلام المنظومة.',
    result_en:
      'Documented and remediated critical defects prior to production launch, backing formal engineering sign-off.',
    icon: 'CheckCircle2',
  },
  {
    id: 12,
    badge: 'CLINIC EMR & Q-SYSTEM',
    title_ar: 'نظام إدارة العيادات وتنظيم طوابير المراجعين (Q-System) لعيادة تخصصية',
    title_en: 'Clinic EMR & Integrated Patient Queue System for Specialized Clinic',
    category_ar: 'البرمجيات وأنظمة الإدارة',
    category_en: 'Software & ERP',
    client_ar: 'عيادة جراحة عظام ومفاصل تخصصية — القاهرة',
    client_en: 'Specialized Orthopedic Surgery Clinic — Cairo',
    executiveSummary_ar:
      'تشغيل منظومة عيادات مترابطة تجمع السجلات الطبية الرقمية (EMR) وملفات الأشعة، الطباعة السريعة للروشتات بباركود، ونظام تنظيم الانتظار وشاشات النداء الرقمي (Q-System) المتزامن مع غرفة الفحص.',
    executiveSummary_en:
      'Turnkey orthopedic clinic EMR paired with an automated Patient Queue Management System (Q-System), waiting lounge calling displays, and barcode e-prescriptions.',
    description_ar:
      'برنامج إدارة عيادة وسجلات طبية (EMR) مدمج مع نظام انتظار المرضى وشاشات النداء الآلي (Q-System).',
    description_en:
      'Orthopedic EMR suite integrated with numbered queue tickets and digital waiting lounge calling screens.',
    tech: [
      'ClinicCore EMR',
      'Integrated Q-System',
      'Smart Calling Displays',
      'Digital E-Prescriptions',
      'Orthopedic Scan Archiving',
      'Local & Cloud Sync',
      'Automated Patient SMS',
      'IT as a Service',
    ],
    challenges_ar: [
      'تكدس صالة الانتظار وعدم وضوح ترتيب دخول المراجعين للاستقبال والعيادة.',
      'استغراق وقت طويل في البحث اليدوي عن صور الأشعة والتقارير الجراحية السابقة.',
    ],
    challenges_en: [
      'Waiting lounge crowding and disputes over appointment order without live queue displays.',
      'Slow manual lookup of historical orthopedic scans and surgical notes.',
    ],
    solution_ar: [
      'تثبيت وحدة تذاكر رقمية وشاشات عرض بصالة الانتظار مربوطة مباشرة بملف المريض الإلكتروني على شاشة الطبيب.',
    ],
    solution_en: [
      'Deployed thermal queue ticketing and calling displays synchronized with unified EMR patient profiles and e-prescription templates.',
    ],
    deliverables_ar: [
      'منظومة السجلات الطبية الإلكترونية للعيادة (EMR)',
      'نظام طوابير وانتظار المرضى الذكي المدمج (Q-System)',
      'شاشات العرض والنداء الآلي بصالة الانتظار',
      'منظومة الروشتات الإلكترونية بالباركود والتقارير المالية اليومية',
    ],
    deliverables_en: [
      'Clinic Electronic Medical Records (EMR) Suite',
      'Integrated Patient Queue Engine (Q-System)',
      'Waiting Room Calling Screens & Audio Integration',
      'Barcode E-Prescription & Financial Reconciliation Module',
    ],
    result_ar:
      'تنظيم دخول المراجعين عبر شاشات النداء الآلي وتسريع استعراض السجلات الطبية وملفات الأشعة أثناء الكشف.',
    result_en:
      'Structured waiting room patient flow paired with rapid clinical retrieval of historical scans and records.',
    icon: 'Activity',
  },
];

export const NUZUL_TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name_en: 'Clinic Operations Lead',
    name_ar: 'إدارة التشغيل الطبي',
    role_en: 'Consultant Orthopedic Surgery Practice',
    role_ar: 'عيادة جراحة عظام تخصصية',
    company_en: 'Healthcare Sector — Cairo',
    company_ar: 'قطاع الرعاية الصحية — القاهرة',
    text_en:
      'Integrating the clinic EMR with the waiting-lounge Q-System organized patient flow from reception to examination, while accessing prior scans and issuing printed prescriptions became clear and structured.',
    text_ar:
      'ربط منظومة العيادات ونظام تنظيم الطوابير (Q-System) نظم حركة دخول المرضى من الاستقبال إلى غرفة الفحص عبر شاشات العرض بوضوح، وأصبح استعراض ملفات الأشعة السابقة وإصدار الوصفات المطبوعة أكثر دقة وسلاسة.',
  },
  {
    id: 'test-2',
    name_en: 'Platform Product Director',
    name_ar: 'إدارة المنتج والعمليات',
    role_en: 'Multi-Tenant Cloud CRM Platform',
    role_ar: 'منصة سحابية لإدارة علاقات العملاء',
    company_en: 'Enterprise Software — Egypt',
    company_ar: 'قطاع البرمجيات المؤسسية — مصر',
    text_en:
      'Nuzul Tech executed structured QA and UAT testing across our web portal, mobile builds, and embedded WebRTC calling system prior to vendor sign-off, giving our launch team clear engineering confidence.',
    text_ar:
      'نُفذت اختبارات القبول والفحص الهندسي لمنصة الويب وتطبيقات الجوال ونظام الاتصالات المدمج بمنهجية منظمة قبل الاستلام الرسمي من الشركة المطورة، مما أسهم في معالجة الملاحظات الحرجة قبل الإطلاق.',
  },
  {
    id: 'test-3',
    name_en: 'Hospital Technical Management',
    name_ar: 'الإدارة الهندسية والفنية',
    role_en: 'Private Specialized Hospital',
    role_ar: 'مستشفى تخصصي خاص',
    company_en: 'Medical Infrastructure — Cairo',
    company_ar: 'القطاع الطبي — القاهرة',
    text_en:
      'Nuzul Tech deployed our hospital surveillance grid, Fortinet perimeter firewall, structured fiber cabling, and authenticated medical mail under ongoing SLA engineering coverage.',
    text_ar:
      'أسست نزول تك شبكة المراقبة البصرية عالية الدقة وجهاز Firewall من Fortinet وتمديدات الفايبر وتوثيق البريد الطبي الرسمي مع متابعة هندسية وفق SLA.',
  },
  {
    id: 'test-4',
    name_en: 'Head of IT & Clinical Operations',
    name_ar: 'إدارة تكنولوجيا المعلومات',
    role_en: 'Surgical & Specialized Hospital',
    role_ar: 'مستشفى جراحي وتخصصي',
    company_en: 'Healthcare Infrastructure — Cairo',
    company_ar: 'القطاع الطبي — القاهرة',
    text_en:
      'Consolidating our physical servers into a High-Availability virtualization cluster alongside the Patient Relations and approvals workflows improved daily ward stability and cross-department coordination.',
    text_ar:
      'دمج الخوادم الفيزيائية داخل Cluster عالي التوافر مع إطلاق بوابة المرضى ونظام علاقات المرضى والموافقات الطبية عزز استقرار التشغيل اليومي وتنسيق العمل بين الأقسام.',
  },
  {
    id: 'test-5',
    name_en: 'Clinical Administration Board',
    name_ar: 'إدارة المركز الطبي',
    role_en: 'Specialized Oncology Center',
    role_ar: 'مركز طبي تخصصي للأورام',
    company_en: 'Medical Imaging & Infrastructure — Cairo',
    company_ar: 'الرعاية الصحية التخصصية — القاهرة',
    text_en:
      'Decoupling heavy DICOM PACS imaging files from corporate email onto local NVMe storage with hybrid cloud backup relieved mailbox congestion and stabilized physician workstations immediately.',
    text_ar:
      'فصل أرشيف الأشعة الطبية عن صناديق البريد الإلكتروني وتأسيس بيئة تخزين محلية بنسخ سحابي هجين أنهى مشكلة تضخم المراسلات وأعاد الاستقرار لأجهزة العيادات.',
  },
  {
    id: 'test-6',
    name_en: 'Managing Audit Partner',
    name_ar: 'الإدارة التنفيذية للمكتب',
    role_en: 'Financial & Tax Audit Consultancy',
    role_ar: 'مكتب استشارات مالية ومراجعة',
    company_en: 'Financial Services — Cairo',
    company_ar: 'القطاع المالي والاستشاري — القاهرة',
    text_en:
      'Hosting our accounting databases on Nuzul Tech private cloud enabled 30 field auditors to collaborate concurrently with encrypted access, authenticated email, and automated daily snapshots.',
    text_ar:
      'استضافة قواعد البيانات المحاسبية على خوادم نزول تك السحابية أتاح لـ 30 مستشاراً ومراجعاً العمل المتزامن من مقرات العملاء مع توثيق البريد ونسخ احتياطي يومي مشفر.',
  },
  {
    id: 'test-7',
    name_en: 'Operations & Logistics Director',
    name_ar: 'إدارة العمليات اللوجستية',
    role_en: 'Freight Forwarding & Overland Transport',
    role_ar: 'قطاع النقل والخدمات اللوجستية',
    company_en: 'Logistics & Fleet — Egypt',
    company_ar: 'النقل واللوجستيات — مصر',
    text_en:
      'Enforcing strict DMARC policies protected our trade domain against invoice spoofing, while our fleet telemetry dashboard centralized GPS and fuel monitoring across regional routes.',
    text_ar:
      'تفعيل سياسات DMARC الصارمة حمى النطاق التجاري من محاولات انتحال فواتير الشحن، كما وفرت لوحة التتبع الحية رؤية مركزية لمسارات المركبات وحساسات الوقود.',
  },
  {
    id: 'test-8',
    name_en: 'Foundation Executive Office',
    name_ar: 'الإدارة التنفيذية للمؤسسة',
    role_en: 'Non-Profit Development Foundation',
    role_ar: 'مؤسسة عمل أهلي وتنموي',
    company_en: 'Non-Profit Infrastructure — Cairo',
    company_ar: 'المؤسسات الأهلية — القاهرة',
    text_en:
      'Implementing structured Cat6A cabling, central Active Directory domain governance, VoIP desk phones, CCTV surveillance, and automated backups standardized security across all departments.',
    text_ar:
      'تنفيذ الشبكة المنظمة وخادم الدومين المركزي Active Directory وسنترال VoIP وخادم الملفات والنسخ الاحتياطي الآلي وحّد صلاحيات الأمان وسهّل عمل جميع الإدارات الميدانية.',
  },
];

export const NUZUL_BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    slug: 'oncology-center-pacs-email-governance',
    title_en: 'Architecture Guide: Decoupling Medical PACS Storage from Corporate Email',
    title_ar: 'دليل معماري: فصل أرشيف الأشعة الطبية (PACS) عن البريد الإلكتروني وإدارة السحابة الهجينة',
    date: '10 يناير 2026',
    category_en: 'Healthcare IT Systems',
    category_ar: 'النظم الطبية',
    excerpt_en:
      'Why exchanging diagnostic DICOM images over standard mailboxes stalls clinical PCs, and how hybrid NVMe local storage resolves the bottleneck.',
    excerpt_ar:
      'تحليل هندسي يوضح مخاطر استخدام البريد الإلكتروني لأرشفة ملفات الأشعة الضخمة وكيف يعالج التخزين المحلي الهجين هذه الأزمة.',
    content_en:
      'When clinics and diagnostic centers send large DICOM imaging studies as email attachments, physician mailboxes balloon to tens of gigabytes, local Outlook profiles freeze, and recurring external cloud storage fees climb steeply.\n\nDecoupling PACS radiological storage onto a local high-IOPS NVMe node keeps image retrieval inside the clinic LAN while restricting mailboxes strictly to structured correspondence under SPF, DKIM, and DMARC.\n\nPairing the local storage cluster with scheduled encrypted off-site backups gives clinical management verifiable disaster recovery without vendor lock-in or rising foreign-currency storage bills.',
    content_ar:
      'عند تداول ملفات الأشعة التشخيصية (DICOM) كمرفقات عبر البريد الإلكتروني، تتضخم مساحات صناديق البريد وتتجمد تطبيقات المراسلة على أجهزة الأطباء والاستقبال، كما ترتفع تكاليف التخزين السحابي الخارجي.\n\nتعتمد المعمارية الهندسية السليمة على فصل أرشيف الأشعة PACS في خادم تخزين محلي سريع بأقراص NVMe داخل شبكة المركز، مع تخصيص خوادم البريد للمراسلات النصية والرسمية ببروتوكولات SPF وDKIM وDMARC.\n\nتُستكمل البنية عبر ربط الخادم المحلي بخط نسخ احتياطي هجين مشفر خارج الموقع لحماية ملفات المرضى ضد أعطال العتاد أو برمجيات الفدية دون تضخم التكاليف الدورية.',
  },
  {
    id: 2,
    slug: 'cloud-vps-business-infrastructure-egypt',
    title_en: 'Enterprise Guide: Centralizing Accounting & ERP Databases on Managed Cloud VPS',
    title_ar: 'الدليل الهندسي: تشغيل قواعد البيانات والأنظمة المحاسبية عبر خوادم Cloud VPS المدارة',
    date: '5 فبراير 2026',
    category_en: 'Cloud Servers & Infrastructure',
    category_ar: 'السيرفرات والبنية السحابية',
    excerpt_en:
      'Structuring multi-user access to core databases with isolated KVM virtualization starting from 499 EGP/mo and 1,000 EGP/mo Cloud Desktop plans.',
    excerpt_ar:
      'معايير الانتقال من الأجهزة المكتبية المبعثرة إلى خوادم Cloud VPS معزولة بتقنية KVM مع تسعير ثابت بالجنيه المصري.',
    content_en:
      'Hosting accounting ledgers and operational ERP databases on unmanaged desktop PCs creates file conflicts, local hardware single points of failure, and weak access governance across remote offices.\n\nMigrating workloads onto KVM-isolated Cloud VPS or encrypted Cloud Desktop instances centralizes database execution inside monitored datacenter infrastructure with NVMe throughput and scheduled snapshots.\n\nPredictable EGP monthly billing and formal engineering SLAs allow growing enterprises to expand team seats across governorates cleanly.',
    content_ar:
      'يؤدي تشغيل قواعد البيانات المحاسبية وأنظمة العمل على أجهزة مكتبية متفرقة إلى تعارض النسخ المحلية وتعرض السجلات للتلف عند تعطل أي قرص صلب.\n\nتوفر خوادم Cloud VPS المعزولة بتقنية KVM وخوادم سطح المكتب السحابية بيئة مركزية عالية الاستقرار بأقراص NVMe، حيث تتصل فرق العمل والمراجعون عبر قنوات مشفرة من مختلف المقرات.\n\nيتكامل ذلك مع جدولة نسخ احتياطي يومي آلي وتسعير واضح بالجنيه المصري بموجب عقود تشغيل وصيانة محددة.',
  },
  {
    id: 3,
    slug: 'it-as-a-service-egypt-enterprise',
    title_en: 'IT as a Service (ITaaS): Structured Infrastructure Governance for Growing Enterprises',
    title_ar: 'نموذج القطاع التقني كخدمة (IT as a Service): إدارة البنية التحتية بعقود SLA',
    date: '20 يناير 2026',
    category_en: 'Enterprise IT Strategy',
    category_ar: 'استراتيجيات الـ IT للمؤسسات',
    excerpt_en:
      'How multi-discipline engineering teams cover networking, firewall hardening, virtualization, and backup verification under a single SLA.',
    excerpt_ar:
      'كيف يجمع التعاقد على إدارة البنية التحتية كخدمة خبرات الشبكات والسحابة والأمن السيبراني ضمن اتفاقية مستوى خدمة (SLA).',
    content_en:
      'Managing modern enterprise environments demands specialized knowledge spanning Layer-2/Layer-3 networking, next-generation firewalls, Linux/Windows server administration, and tested disaster recovery pipelines.\n\nUnder the IT as a Service (ITaaS) model, organizations partner with an accountable multidisciplinary engineering team operating under explicit P1–P4 SLA response tiers and scheduled preventive audits.\n\nAll credentials, network diagrams, and Runbooks remain owned by the client with complete operational transparency.',
    content_ar:
      'تتطلب إدارة البنية التحتية للمؤسسات الحديثة تكامل تخصصات متعددة تشمل هندسة الشبكات، وأجهزة Firewall (NGFW)، وإدارة الخوادم السحابية والمحلية، واختبارات استعادة النسخ الاحتياطي.\n\nيتيح نموذج IT as a Service للشركات والمراكز الطبية الاعتماد على فريق هندسي متعدد التخصصات يعمل وفق اتفاقية مستوى خدمة (SLA) تحدد أولويات البلاغات (P1–P4) ونوافذ الصيانة الوقائية.\n\nيحتفظ العميل بكامل الصلاحيات الإدارية والوثائق الهندسية (Runbooks) مع متابعة دورية مستمرة للبنية التشغيلية.',
  },
  {
    id: 4,
    slug: 'enterprise-erp-digital-transformation',
    title_en: 'Modern Enterprise ERP Architecture: Unifying Operations and Tax E-Invoicing',
    title_ar: 'هندسة أنظمة ERP المؤسسية: توحيد المخازن والحسابات والفاتورة الإلكترونية المصرية',
    date: '15 يناير 2026',
    category_en: 'Enterprise IT Systems',
    category_ar: 'حلول واستشارات تقنية المعلومات',
    excerpt_en:
      'Architectural considerations for connecting procurement, inventory ledgers, and Egyptian ETA e-invoicing inside a single relational core.',
    excerpt_ar:
      'المعايير التقنية لربط المشتريات والمخازن والحسابات بمنظومة الفاتورة والإيصال الإلكتروني لمصلحة الضرائب.',
    content_en:
      'Disconnected spreadsheets across purchasing, warehouse stock, and finance teams introduce reconciliation errors and delay statutory reporting.\n\nA unified ERP relational architecture ensures records are captured once at origin, updating inventory balances, general ledger entries, and Egyptian ETA e-invoicing payloads consistently.\n\nRole-based permissions and immutable audit trails protect financial integrity across branches.',
    content_ar:
      'يسبب الاعتماد على الجداول الإلكترونية المنفصلة بين المشتريات والمخازن والإدارة المالية أخطاء في المطابقة الدورية وتأخيراً في إصدار التقارير الضريبية.\n\nتعتمد أنظمة ERP الحديثة على قاعدة بيانات علائقية موحدة لتسجيل الحركة التشغيلية مرة واحدة بحيث تنعكس تلقائياً في المخزن ودفاتر الأستاذ وإرسالات الفاتورة الإلكترونية.\n\nتُضبط المنظومة بصلاحيات وظيفية دقيقة (RBAC) وسجلات تدقيق تمنع التعديل غير المصرح على القيود المالية.',
  },
  {
    id: 5,
    slug: 'corporate-email-dmarc-phishing-egypt',
    title_en: 'Corporate Email Security: Preventing Invoice Spoofing with SPF, DKIM, and DMARC',
    title_ar: 'أمن البريد الإلكتروني للشركات: حماية النطاق من التزييف عبر SPF وDKIM وDMARC',
    date: '28 ديسمبر 2025',
    category_en: 'Cybersecurity & Email',
    category_ar: 'أمن البريد والنطاقات',
    excerpt_en:
      'Technical deployment steps for 2048-bit DKIM signing and DMARC p=reject enforcement to safeguard corporate financial correspondence.',
    excerpt_ar:
      'خطوات ضبط سجلات المصادقة البريدية لحماية الفواتير التجارية وتحسين وصول المراسلات الرسمية لصناديق الوارد.',
    content_en:
      'Business email compromise and invoice spoofing exploit domains that lack strict cryptographic authentication records.\n\nDeploying aligned SPF rules, rotating 2048-bit DKIM keys, and progressively tightening DMARC policies to p=reject instructs global mail providers to block forged messages claiming to originate from your domain.\n\nCombined with TLS 1.3 transport encryption and inbound attachment scanning, enterprise correspondence remains auditable and reliable.',
    content_ar:
      'تعتمد هجمات انتحال الهوية البريدية وتزوير الفواتير التجارية على غياب قيود التحقق التشفيرية في إعدادات النطاق.\n\nيفرض ضبط سجلات SPF وتوقيع DKIM بمفاتيح 2048-bit وسياسة DMARC الصارمة (p=reject) رفض أي رسالة صادرة من خوادم غير مخولة بانتحال اسم الشركة، كما يحسن سمعة النطاق أمام مزودي البريد العالميين.\n\nويعزز تشفير النقل TLS 1.3 وفحص المرفقات الواردة سلامة المراسلات الإدارية والمالية.',
  },
  {
    id: 6,
    slug: 'network-firewalls-vlan-security',
    title_en: 'Next-Gen Firewalls & VLAN Segmentation: Isolating Critical Enterprise Workloads',
    title_ar: 'أمن الشبكات وأجهزة Firewall: تقسيم الشبكات وعزل الأنظمة الحساسة عبر VLANs',
    date: '10 ديسمبر 2025',
    category_en: 'Infrastructure & Firewalls',
    category_ar: 'الشبكات وFirewall',
    excerpt_en:
      'Designing segmented network boundaries between accounting databases, clinical hardware, IP CCTV grids, and guest Wi-Fi.',
    excerpt_ar:
      'تصميم الحدود الشبكية لفصل خوادم المحاسبة والأجهزة الطبية وكاميرات المراقبة عن شبكات الزوار اللاسلكية.',
    content_en:
      'Operating workstations, servers, IP cameras, and visitor smartphones inside a single flat broadcast domain exposes critical systems to lateral movement.\n\nEnterprise network architecture isolates traffic across dedicated VLANs controlled by hardware NGFW access policies (ACLs) and encrypted site-to-site VPN tunnels between branches.\n\nContinuous telemetry ensures rogue endpoints or unauthorized port scans are logged immediately.',
    content_ar:
      'يُعرّض دمج محطات العمل والخوادم وكاميرات المراقبة وشبكة الواي فاي للضيوف في نطاق شبكي واحد الأنظمة الحرجة لمخاطر الحركة الجانبية والاختراق الداخلي.\n\nتعتمد الهندسة الآمنة على تقسيم الشبكة إلى مقاطع VLAN معزولة تحكمها قوائم وصول (ACLs) عبر جهاز Firewall فيزيائي NGFW مع أنفاق VPN مشفرة بين الفروع.\n\nوتساعد المراقبة المستمرة في تسجيل محاولات الوصول غير المصرح وعزلها مبكراً.',
  },
  {
    id: 7,
    slug: 'voip-telephony-branch-interconnection',
    title_en: 'Unified VoIP IP-PBX Architecture: Interconnecting Branches Under Structured IVR Routing',
    title_ar: 'أنظمة السنترال الشبكي VoIP: ربط اتصالات الفروع وتوجيه المكالمات عبر IVR',
    date: '25 نوفمبر 2025',
    category_en: 'VoIP & Telecommunications',
    category_ar: 'أنظمة السنترال والـ VOIP',
    excerpt_en:
      'How distributed branches standardize internal extensions, recorded support queues, and automated IVR routing using IP telephony.',
    excerpt_ar:
      'معمارية ربط المقرات والفروع بسنترال IP-PBX موحد مع تسجيل المكالمات وتحليل طوابير خدمة العملاء.',
    content_en:
      'Isolated PSTN lines across regional branches inflate call routing delays and lack centralized recording or call analytics.\n\nAn IP-PBX telephony architecture assigns unified internal extension plans over encrypted SIP trunks, providing customizable IVR greetings, queue monitoring, and compliant call recording.\n\nIsolating voice traffic onto a prioritized QoS voice VLAN preserves call clarity during peak network utilization.',
    content_ar:
      'يؤدي اعتماد كل فرع على خطوط هاتفية تقليدية منفصلة إلى صعوبة تحويل المكالمات بين الإدارات وغياب سجل التحليلات والتسجيل المركزي.\n\nتتيح أنظمة IP-PBX توحيد خطط التحويلات الداخلية عبر الفروع من خلال قنوات SIP مشفرة، مع شجرة رد آلي (IVR) وتسجيل مركزي للمكالمات.\n\nكما يساعد تخصيص VLAN منفصلة للصوت بأولوية مرور (QoS) على الحفاظ على نقاء المكالمات أثناء أوقات الضغط الشبكي.',
  },
  {
    id: 8,
    slug: 'immutable-cloud-backup-ransomware-protection',
    title_en: 'The 3-2-1 Immutable Backup Architecture: Defeating Ransomware Encryption Attempts',
    title_ar: 'معمارية النسخ الاحتياطي المعزول 3-2-1: حماية قواعد البيانات من برمجيات الفدية',
    date: '12 نوفمبر 2025',
    category_en: 'Backup & Disaster Recovery',
    category_ar: 'النسخ الاحتياطي والطوارئ',
    excerpt_en:
      'Why connected USB drives and open NAS shares fail during malware incidents, and how immutable off-site snapshots preserve recovery points.',
    excerpt_ar:
      'أسباب فشل أقراص النسخ المتصلة محلياً أمام الفدية، وضوابط تطبيق النسخ المعزول خارج الموقع.',
    content_en:
      'Modern ransomware traverses mapped network shares and attached storage volumes to encrypt local backups before demanding ransom.\n\nThe 3-2-1 immutable standard maintains three copies of critical data across two storage media types, with an off-site encrypted repository locked against modification or deletion during its retention policy.\n\nRegular restoration drills verify recovery integrity before an operational incident ever occurs.',
    content_ar:
      'تمتد برمجيات الفدية عبر الشبكة المحلية لتشفير المجلدات المشتركة وأقراص التخزين المتصلة قبل تعطيل قواعد البيانات الأساسية.\n\nتطبق معمارية 3-2-1 المعزولة حفظ ثلاث نسخ من البيانات على وسيطين مختلفين مع إبقاء نسخة سحابية مشفرة خارج المقر محمية بسياسة منع التعديل والحذف طوال مدة الاستبقاء.\n\nوتُختبر عملية الاستعادة دورياً للتأكد من سلامة النسخ وجاهزيتها عند الطوارئ.',
  },
  {
    id: 9,
    slug: 'bare-metal-dedicated-servers-vs-vps',
    title_en: 'Dedicated Bare-Metal vs KVM Cloud VPS: Choosing Compute Architecture by Workload',
    title_ar: 'الخوادم المخصصة Dedicated مقابل الـ Cloud VPS: معايير اختيار العتاد لبيئات العمل',
    date: '3 نوفمبر 2025',
    category_en: 'Servers & Bare-Metal',
    category_ar: 'السيرفرات الكاملة',
    excerpt_en:
      'Comparing elastic KVM virtual servers against single-tenant physical hardware for transactional ERPs and heavy imaging archives.',
    excerpt_ar:
      'مقارنة هندسية بين الخوادم السحابية الافتراضية والعتاد الفيزيائي المخصص لمتطلبات قواعد البيانات الثقيلة.',
    content_en:
      'Cloud VPS instances isolated via KVM provide agile provisioning and vertical scaling suited for web platforms, CRM engines, and medium ERP databases.\n\nDedicated Bare-Metal servers reserve entire physical sockets, hardware RAID controllers, and uncontended NVMe lanes for high-throughput radiological PACS archives or large multi-tenant databases.\n\nAligning workload IOPS and memory footprint prevents overprovisioning while guarding peak responsiveness.',
    content_ar:
      'توفر خوادم Cloud VPS المعزولة بتقنية KVM مرونة عالية وسرعة في توسيع المعالج والذاكرة لتشغيل المنصات والأنظمة المتوسطة.\n\nفي المقابل، تخصص الخوادم الفيزيائية المستقلة (Bare-Metal Dedicated) كامل العتاد ومصفوفات RAID ومسارات NVMe لعميل واحد، ما يناسب قواعد البيانات الضخمة وأرشيفات التصوير الطبي.\n\nيستند الاختيار السليم إلى قياس حجم القراءة والكتابة (IOPS) وساعات الذروة الفعلية.',
  },
  {
    id: 10,
    slug: 'siem-platform-security-operations-egypt',
    title_en: 'SIEM Security Telemetry: Correlating Firewall and Server Logs Against Intrusions',
    title_ar: 'منصة مراقبة الأحداث الأمنية SIEM: تجميع سجلات الشبكة والخوادم لرصد المخاطر',
    date: '21 أكتوبر 2025',
    category_en: 'Cybersecurity & SIEM',
    category_ar: 'الأمن السيبراني والـ SIEM',
    excerpt_en:
      'Centralized syslog ingestion, authentication anomaly rules, and incident response workflows for enterprise infrastructure.',
    excerpt_ar:
      'آليات ربط سجلات الجدران النارية والسيرفرات لاكتشاف محاولات التصعيد والاختراق وتوثيق الاستجابة.',
    content_en:
      'Siloed logs stored locally on firewalls and servers leave security gaps unnoticed and risk tampering after unauthorized access.\n\nA Security Information and Event Management (SIEM) collector ships normalized syslog events in real time to tamper-evident storage, correlating brute-force logins, privilege escalations, and abnormal outbound connections.\n\nActionable alert thresholds direct systems engineers straight to affected endpoints.',
    content_ar:
      'تبقّي السجلات المبعثرة داخل كل خادم أو جدار ناري الحوادث الأمنية غير مرئية وقد تتعرض للحذف عند أي وصول غير مصرح.\n\nتقوم منصة SIEM بجمع السجلات المعيارية لحظياً في مستودع مركزي مؤمن لربط محاولات التخمين، وتغييرات الصلاحيات، وحركة الاتصال غير المعتادة.\n\nوتدعم لوحة الرصد فرق التشغيل في التحقق الفوري وتوثيق الامتثال الأمني.',
  },
  {
    id: 11,
    slug: 'ecommerce-development-egyptian-gateways',
    title_en: 'E-Commerce Systems Engineering: Integrating Local Payment Rails and Live Inventory',
    title_ar: 'هندسة منصات التجارة الإلكترونية: تكامل بوابات الدفع وأتمتة المخازن والشحن',
    date: '15 أكتوبر 2025',
    category_en: 'Software & E-Commerce',
    category_ar: 'المتاجر الإلكترونية',
    excerpt_en:
      'Building reliable storefront checkouts synchronized with warehouse stock counters and courier tracking webhooks.',
    excerpt_ar:
      'تصميم منظومات بيع رقمية تربط الدفع الإلكتروني وحركة المخزون وإصدار بوالص الشحن في مسار موحد.',
    content_en:
      'E-commerce reliability depends on transactional consistency between catalog inventory locks, payment gateway webhooks, and courier dispatch APIs.\n\nDecoupling checkout state machines from heavy catalog queries prevents cart race conditions during seasonal sales while automating shipping waybill generation.\n\nServer-side webhook signature verification guards every completed order record.',
    content_ar:
      'ترتكز موثوقية المتاجر الإلكترونية على التزامن الدقيق بين حجز الكميات بالمخزن وإشعارات بوابات الدفع وواجهات شركات الشحن.\n\nيمنع فصل مسار إتمام الدفع والتحقق من توقيع الإشعارات (Webhooks) أخطاء السحب المزدوج أو بيع أصناف غير متوفرة أثناء العروض الموسمية.\n\nكما تُؤتمت عملية إصدار بوالص الشحن وتتبع حالة الطلب حتى التسليم.',
  },
  {
    id: 12,
    slug: 'egyptian-domain-registration-dns-security',
    title_en: 'Digital Identity & DNS Security: Securing Official Egyptian Domains (.eg & .com.eg)',
    title_ar: 'الهوية الرقمية وإدارة النطاقات: تسجيل وحماية النطاقات المصرية الرسمية .eg و.com.eg',
    date: '1 أكتوبر 2025',
    category_en: 'Domains & DNS Infrastructure',
    category_ar: 'النطاقات والـ DNS',
    excerpt_en:
      'Documentation, DNSSEC cryptographic signing, and registrar transfer locks for corporate .eg domains.',
    excerpt_ar:
      'ضوابط تسجيل النطاقات الرسمية المصرية وتأمين سجلات الـ DNS وتفعيل قفل النقل لحماية العلامة التجارية.',
    content_en:
      'Registering official national TLDs (.eg, .com.eg) reinforces institutional authenticity across Egyptian regulatory, banking, and commercial channels.\n\nEnabling DNSSEC validation protects DNS resolution against cache poisoning, while registrar transfer locks and role-controlled DNS access prevent accidental record alterations.\n\nCombined domain and mail record governance avoids sudden service blackouts.',
    content_ar:
      'يعزز حجز النطاقات المصرية الرسمية (.eg و.com.eg) الموثوقية القانونية والتجارية للمؤسسة في تعاملاتها المحلية.\n\nويحمي تفعيل التوقيع التشفيري DNSSEC استعلامات التوجيه من التلاعب، بينما يمنع قفل النقل وضبط صلاحيات لوحة التحكم تغيير السجلات دون مراجعة.\n\nكما يساعد توحيد إدارة النطاقات مع سجلات البريد على استقرار الخدمات الرقمية.',
  },
  {
    id: 13,
    slug: 'enterprise-mobile-app-development-egypt',
    title_en: 'Enterprise Mobile Engineering: Reliable Sync and Role-Based Field Workflows',
    title_ar: 'تطوير تطبيقات الجوال للمؤسسات: المزامنة الآمنة وسلاسة المهام الميدانية',
    date: '20 سبتمبر 2025',
    category_en: 'Mobile App Development',
    category_ar: 'تطبيقات الجوال',
    excerpt_en:
      'Designing offline-resilient iOS and Android field apps for medical clinics, delivery drivers, and warehouse teams.',
    excerpt_ar:
      'مبادئ تطوير تطبيقات iOS وأندرويد للفرق الميدانية والعيادات مع دعم العمل تحت تقلب اتصال الشبكة.',
    content_en:
      'Enterprise mobile apps serving field drivers, warehouse supervisors, or clinic patients must operate reliably even over variable cellular connectivity.\n\nLocal encrypted state caching paired with idempotent background API synchronization ensures tasks queue safely and settle without duplication.\n\nStrict token refresh policies and biometric sign-in harden endpoint security.',
    content_ar:
      'تواجه تطبيقات الجوال الميدانية للعيادات أو فرق النقل والتخزين تغيرات مستمرة في جودة اتصال الشبكة الخلوية.\n\nيتيح التخزين المحلي المؤقت الممزوج بالمزامنة الآمنة عبر واجهات API إتمام التسجيل أو تأكيد التسليم دون تكرار القيود عند عودة الاتصال.\n\nوتكتمل المنظومة بتشفير الجلسات والتحقق البيومتري لحماية بيانات المستخدمين.',
  },
  {
    id: 14,
    slug: 'modern-corporate-web-development-seo',
    title_en: 'Corporate Web Engineering: Semantic Structure, Speed, and Bilingual Search Readiness',
    title_ar: 'تطوير المواقع المؤسسية: الأداء الهندسي والبنية الدلالية ثنائية اللغة',
    date: '10 سبتمبر 2025',
    category_en: 'Web Development & Design',
    category_ar: 'تصميم وتطوير المواقع',
    excerpt_en:
      'How clean semantic HTML, RTL/LTR layout parity, and optimized asset delivery elevate enterprise technical portals.',
    excerpt_ar:
      'أهمية الهيكلة الدلالية وتوازن العرض باللغتين العربية والإنجليزية في مواقع الشركات والمنصات التعريفية.',
    content_en:
      'Corporate web portals represent technical competence: sluggish bundles, broken RTL alignment, and missing semantic headings undermine user trust immediately.\n\nEngineering clean typographic hierarchies, accessible keyboard landmarks, and structured JSON-LD metadata equips search engines and decision-makers to evaluate capabilities clearly.\n\nLean asset budgets preserve responsiveness on mobile networks across regions.',
    content_ar:
      'تعكس البوابة الرقمية للمؤسسة جودة عملها الهندسي؛ فالأداء البطيء أو تداخل الاتجاهين العربي والإنجليزي يضعف وضوح الرسالة.\n\nيركز التطوير المنضبط على البنية الدلالية الصحيحة للعناوين، دعم لوحة المفاتيح وقارئات الشاشة، وإعداد البيانات المهيكلة لمحركات البحث.\n\nكما يساعد ضبط حجم الموارد في سرعة التصفح على شبكات المحمول والشاشات المختلفة.',
  },
  {
    id: 15,
    slug: 'ui-ux-design-clinical-intake-conversion',
    title_en: 'UI/UX Systems Engineering: Reducing Friction in High-Volume Clinical & ERP Forms',
    title_ar: 'هندسة تجربة المستخدم (UI/UX): تقليل تعقيد نماذج الإدخال في العيادات والأنظمة الإدارية',
    date: '1 سبتمبر 2025',
    category_en: 'UI/UX Design Systems',
    category_ar: 'تصميم واجهة وتجربة المستخدم',
    excerpt_en:
      'Practical token architecture and ergonomic form patterns for bilingual RTL/LTR enterprise software interfaces.',
    excerpt_ar:
      'تطبيق أنظمة التصميم المعيارية وتبسيط مسارات العمل اليومية لرفع دقة الإدخال لدى الموظفين.',
    content_en:
      'Enterprise interfaces succeed when front-desk staff and operators complete high-frequency workflows with minimal cognitive load.\n\nEstablishing token-driven component libraries with WCAG-compliant contrast across Light and Dark modes, clear inline validation, and bilingual RTL/LTR spacing discipline removes repetitive friction.\n\nUsability testing validates real operator speed prior to deployment.',
    content_ar:
      'تقاس جودة واجهات الأنظمة الإدارية والطبية بقدرة الموظف على إنجاز المهام المتكررة بأقل عدد من الخطوات والأخطاء.\n\nيسهم بناء مكتبة مكونات قائمة على متغيرات لونية موحدة في الوضعين النهاري والداكن وتباين قرائي مناسب مع رسائل تحقق دقيقة في رفع دقة البيانات.\n\nوتساعد اختبارات القابلية للاستخدام على ملاءمة الواجهة لسير العمل الفعلي.',
  },
  {
    id: 16,
    slug: 'erp-crm-systems-egypt-eta-compliance',
    title_en: 'ERP & CRM Tax Integration: Engineering Compliant Egyptian ETA E-Invoicing Flows',
    title_ar: 'تكامل أنظمة ERP وCRM: مواءمة الفوترة الداخلية مع منظومة الضرائب الإلكترونية المصرية',
    date: '20 أغسطس 2025',
    category_en: 'Enterprise ERP & CRM',
    category_ar: 'أنظمة ERP وCRM',
    excerpt_en:
      'Structuring item coding, digital token signing, and asynchronous ETA submission queues inside enterprise accounting platforms.',
    excerpt_ar:
      'آليات ترميز الأصناف والتوقيع الرقمي وإدارة طوابير إرسال الفواتير داخل أنظمة تخطيط الموارد.',
    content_en:
      'Compliant Egyptian Tax Authority (ETA) integration requires accurate GS1/EGS item mapping, cryptographic hardware token signing, and resilient retry queues for temporary network disruptions.\n\nEmbedding submission status tracking directly into invoice ledgers lets accounting teams monitor UUID validation immediately without switching portals.\n\nConsolidated audit logs retain accepted payloads cleanly for statutory review.',
    content_ar:
      'يتطلب التكامل المستقر مع منظومة مصلحة الضرائب المصرية مطابقة دقيقة لأكواد الأصناف (GS1/EGS) والتوقيع عبر التوكن الرقمي وإدارة طوابير إعادة الإرسال عند انقطاع الإنترنت.\n\nيتيح دمج حالة التحقق (UUID) مباشرة داخل شاشة الفواتير لفرق المحاسبة متابعة حالة القبول مباشرة من مكان واحد.\n\nمع حفظ أرشيف رقمي منظم للفواتير المقبولة لتسهيل المراجعة الدورية.',
  },
  {
    id: 17,
    slug: 'non-profit-it-infrastructure-active-directory',
    title_en: 'Foundation IT Infrastructure: Active Directory, File Security & VoIP Standardization',
    title_ar: 'البنية الرقمية للمؤسسات الأهلية: الدومين المركزي وخادم الملفات والسنترال',
    date: '15 فبراير 2026',
    category_en: 'Infrastructure & Active Directory',
    category_ar: 'البنية التحتية والشبكات',
    excerpt_en:
      'Structuring beneficiary privacy, departmental file permissions, and unified VoIP extensions across multi-department administrative offices.',
    excerpt_ar:
      'ضبط صلاحيات الملفات عبر Active Directory وتأمين بيانات المستفيدين والمتبرعين بنسخ احتياطي يومي معزول.',
    content_en:
      'Non-profit foundations steward confidential beneficiary case files and donor records that must never reside unmanaged on individual employee desktops.\n\nDeploying Active Directory Domain Services (AD DS) with automated DHCP, role-restricted File Server shares, and encrypted daily off-site snapshots brings audit-grade structure to administrative hubs.\n\nStructured cabling and enterprise Wi-Fi VLANs separate staff workstations reliably from visitor devices.',
    content_ar:
      'تدير مؤسسات العمل الأهلي ملفات حساسة لبيانات المستفيدين وسجلات المتبرعين تتطلب ضوابط وصول مركزية تمنع تبعثرها على أجهزة فردية.\n\nيُحكم نشر خادم Active Directory وDHCP وخادم ملفات بصلاحيات الأقسام والنسخ الاحتياطي المشفر أمن المقر الإداري.\n\nكما تفصل الشبكة المنظمة والـ Wi-Fi المؤسسي محطات عمل الباحثين عن شبكة الزوار بوضوح.',
  },
  {
    id: 18,
    slug: 'software-qa-acceptance-testing-crm',
    title_en: 'Software Vendor Handover Playbook: Independent QA & Load Audits Before Sign-Off',
    title_ar: 'دليل استلام المشاريع البرمجية: أهمية الفحص المستقل واختبارات الضغط قبل التوقيع',
    date: '28 يناير 2026',
    category_en: 'Software QA & Testing',
    category_ar: 'فحص واختبار البرمجيات',
    excerpt_en:
      'An engineering checklist covering API stress concurrency, WebRTC media checks, mobile parity, and RBAC privilege audits prior to rollout.',
    excerpt_ar:
      'قائمة فحص هندسية تشمل اختبارات الوظائف، كفاءة الاتصالات، ضغط قواعد البيانات، وتدقيق صلاحيات النظام.',
    content_en:
      'Signing software handover agreements based solely on happy-path visual demos leaves enterprises exposed to concurrency crashes, mobile notification failures, and broken authorization boundaries.\n\nAn independent QA & UAT acceptance phase exercises edge cases across web portals, iOS/Android clients, WebRTC voice quality, and database load simulations.\n\nEach finding is documented with reproduction telemetry so vendors resolve root causes prior to commercial deployment.',
    content_ar:
      'يُعرّض استلام الأنظمة البرمجية بالاعتماد على العروض التجريبية البسيطة المؤسسة لأعطال الأداء تحت الضغط الفعلي أو ثغرات الصلاحيات بعد الإطلاق.\n\nتغطي مرحلة الفحص والقبول الهندسي المستقل اختبار مسارات الويب، وتطبيقات الجوال، واستقرار نظام المكالمات المدمج، ومحاكاة التحمل العالي لقاعدة البيانات.\n\nوتوثق النتائج بتقرير فني واضح لضمان استيفاء الاشتراطات قبل التوقيع النهائي.',
  },
  {
    id: 19,
    slug: 'smart-clinic-q-system-patient-turnover',
    title_en: 'Smart Clinic Operations: Synchronizing EMR Records with Automated Queue Displays (Q-System)',
    title_ar: 'العيادات التخصصية الحديثة: تكامل السجل الطبي الإلكتروني ونظام تنظيم الانتظار (Q-System)',
    date: '18 يناير 2026',
    category_en: 'Healthcare IT & Q-System',
    category_ar: 'الأنظمة الصحية وإدارة العيادات',
    excerpt_en:
      'How digital ticket dispensers, waiting lounge calling screens, and fast DICOM lookup streamline busy surgical outpatient clinics.',
    excerpt_ar:
      'آلية ربط شاشات النداء الرقمي بصالة الانتظار مباشرة مع ملف المريض ووحدة الطبيب لتنظيم حركة الكشف.',
    content_en:
      'High-volume outpatient clinics face simultaneous front-desk check-in peaks and repeated requests for radiological history retrieval.\n\nConnecting reception thermal ticket dispensers and waiting room Q-System screens straight to the consultation room EMR terminal synchronizes caller order automatically.\n\nPre-configured dosage templates and barcode-printed prescriptions reduce administrative overhead per visit.',
    content_ar:
      'تشهد العيادات التخصصية كثافة متزامنة في أوقات الاستقبال والانتظار، ما يتطلب نظام ترتيب واضح للمراجعين مع سرعة استرجاع التاريخ المرضي.\n\nيربط نظام Q-System المدمج طابعة التذاكر وشاشات النداء بصالة الانتظار مباشرة بشاشة الطبيب والسجل الطبي الإلكتروني.\n\nكما تساعد قوالب الوصفات الطبية والطباعة بباركود على توحيد المخرجات وتسريع إجراءات المتابعة.',
  },
  {
    id: 20,
    slug: 'hospital-virtualization-patient-relations-abch',
    title_en: 'Hospital HA Virtualization & Patient Relations Systems: Resilient Clinical Infrastructure',
    title_ar: 'البنية الافتراضية عالية التوافر وسيستم علاقات المرضى (PR System) في المستشفيات',
    date: '8 يناير 2026',
    category_en: 'Enterprise Virtualization & Systems',
    category_ar: 'حلول واستشارات تقنية المعلومات',
    excerpt_en:
      'Combining failover hypervisor clusters with internal ticketing, insurance approvals workflows, and structured patient relations tracking.',
    excerpt_ar:
      'معمارية الدمج بين خوادم Virtualization (HA Cluster) وأنظمة متابعة شكاوى المرضى والموافقات التأمينية.',
    content_en:
      'Modern surgical facilities rely on both resilient compute infrastructure and coordinated patient workflows spanning approvals, feedback tracking, and engineering maintenance tickets.\n\nMigrating fragmented single servers onto a High-Availability KVM/VMware virtualization cluster behind fiber uplinks eliminates single-host downtime during maintenance.\n\nCo-deploying unified web portals and Patient Relations tracking aligns clinical operations cleanly.',
    content_ar:
      'يعتمد استقرار التشغيل في المستشفيات الجراحية على تكامل البنية التحتية عالية التوافر مع الأنظمة الإدارية الداعمة للمريض.\n\nيقضي دمج الخوادم المتفرقة داخل بيئة Virtualization عالية التوافر (HA Cluster) خلف أجهزة Firewall من Fortinet وشبكات الفايبر على توقف الأنظمة أثناء صيانة العتاد.\n\nوتتكامل البنية مع منصات علاقات المرضى والتذاكر الهندسية والموافقات التأمينية لتنظيم سير الخدمة.',
  },
  {
    id: 21,
    slug: 'tax-accounting-disaster-recovery-egypt',
    title_en: 'Disaster Recovery Architecture for Accounting & Tax Firms: Protecting Fiscal Ledgers',
    title_ar: 'استمرارية الأعمال لمكاتب المحاسبة والضرائب: حماية الدفاتر وقواعد البيانات المالية',
    date: '2 يناير 2026',
    category_en: 'Financial IT & Disaster Recovery',
    category_ar: 'الأنظمة المالية والنسخ الاحتياطي',
    excerpt_en:
      'Encrypted hourly snapshots, isolated off-site standby servers, and access governance protecting financial firms during tax deadlines.',
    excerpt_ar:
      'ضوابط النسخ الاحتياطي التراكمي وخوادم الاستضافة المعزولة لحماية السجلات أثناء مواسم الإقرارات.',
    content_en:
      'Fiscal closing cycles and tax submission deadlines tolerate zero ledger corruption or ransomware disruption.\n\nSeparating central financial databases onto managed cloud instances protected by encrypted hourly snapshots, off-site immutable storage, and strict RDP access lists eliminates workstation single points of failure.\n\nVerified standby recovery procedures safeguard auditor continuity across client engagements.',
    content_ar:
      'تستدعي مواسم إقفال الميزانيات وتقديم الإقرارات الضريبية أعلى درجات الاستقرار وحماية قواعد البيانات المحاسبية من التلف أو برمجيات الفدية.\n\nتؤمّن استضافة الأنظمة على خوادم سحابية معزولة مع نسخ احتياطي مشفر وسياسات Firewall للوصول البعيد سلامة الدفاتر والسجلات.\n\nمع إجراء اختبارات استعادة مجدولة لاستمرارية عمل المراجعين من مختلف المواقع.',
  },
  {
    id: 22,
    slug: 'hybrid-cloud-data-sovereignty-egypt',
    title_en: 'Hybrid Cloud & Local Data Residency: Balancing On-Premise Speed and Cloud Backup',
    title_ar: 'السحابة الهجينة وتوطين البيانات: الموازنة بين سرعة الشبكة المحلية والنسخ السحابي',
    date: '22 ديسمبر 2025',
    category_en: 'Cloud Infrastructure & Sovereignty',
    category_ar: 'السيرفرات والبنية السحابية',
    excerpt_en:
      'Architecture guidelines combining local LAN storage performance for PACS/ERP with Cairo datacenter off-site replication and EGP billing.',
    excerpt_ar:
      'دليل عملي لتكامل الخوادم المحلية داخل المقر مع مراكز البيانات المحلية في مصر بتكلفة مستقرة.',
    content_en:
      'Purely overseas hyperscale deployments often expose local enterprises to high WAN latency on large file workloads and unpredictable foreign-currency billing.\n\nA hybrid architecture keeps bandwidth-intensive imaging archives and ERP databases executing locally at gigabit LAN speeds while replicating encrypted recovery snapshots to Cairo or European datacenter nodes.\n\nPredictable EGP contracts establish clear operational budgeting.',
    content_ar:
      'قد يواجه الاعتماد الحصري على سحابات أجنبية بطئاً في تداول الملفات الضخمة عبر الإنترنت وتذبذباً في الفواتير الدورية بالعملات الأجنبية.\n\nتجمع المعمارية الهجينة بين تنفيذ العمليات الثقيلة كالأشعة الطبية وقواعد بيانات الـ ERP محلياً عبر الشبكة الداخلية، والنسخ الاحتياطي السحابي المشفر في مراكز بيانات بالقاهرة أو أوروبا.\n\nمع التعاقد الواضح بالجنيه المصري وفق بنود صيانة محددة.',
  },
];

export interface NormalizedServiceItem {
  id: string;
  title: string;
  titleEn: string;
  category: string;
  shortDesc: string;
  shortDescEn: string;
  features: string[];
  featuresEn: string[];
}

export type { NormalizedServiceItem as ServiceItem };

export const SERVICE_CATEGORIES = [
  { id: 'all', nameAr: 'جميع الخدمات', nameEn: 'All Services' },
  { id: 'الشبكات والبنية التحتية', nameAr: 'الشبكات والبنية التحتية', nameEn: 'Infrastructure & Networks' },
  { id: 'السحابة والاستضافة', nameAr: 'السحابة والاستضافة', nameEn: 'Cloud & Servers' },
  { id: 'الأمن السيبراني', nameAr: 'الأمن السيبراني', nameEn: 'Cybersecurity' },
  { id: 'البرمجيات وأنظمة الإدارة', nameAr: 'البرمجيات وأنظمة الإدارة', nameEn: 'Software & ERP' },
];

function mapCategoryAr(key: string, id?: number): string {
  if (key === 'network_infra') return 'الشبكات والبنية التحتية';
  if (key === 'infra_cloud' || key === 'servers' || key === 'private_cloud') return 'السحابة والاستضافة';
  if (key === 'security_obs' || key === 'observability') return 'الأمن السيبراني';
  if (key === 'software') return 'البرمجيات وأنظمة الإدارة';
  if (id && [1, 2, 3].includes(id)) return 'الشبكات والبنية التحتية';
  return 'الشبكات والبنية التحتية';
}

export const SERVICES: NormalizedServiceItem[] = NUZUL_SERVICES.map((s) => ({
  id: `service-${s.id}`,
  title: s.title_ar,
  titleEn: s.title_en,
  category: mapCategoryAr(s.category_key, s.id),
  shortDesc: s.description_ar,
  shortDescEn: s.description_en,
  features: s.features_ar,
  featuresEn: s.features_en,
}));

export interface BundledPackage {
  id: string;
  title: string;
  titleEn: string;
  subtitle: string;
  subtitleEn: string;
  pricingModel: 'fixed' | 'quote';
  priceEGP: number | null;
  billingType: 'monthly' | 'one-time' | 'custom';
  billingLabelAr: string;
  billingLabelEn: string;
  badgeAr: string | null;
  badgeEn: string | null;
  targetAudience: string;
  targetAudienceEn: string;
  features: string[];
  featuresEn: string[];
  popular?: boolean;
}

export const BUNDLED_PACKAGES: BundledPackage[] = NUZUL_PACKAGES.map((pkg, idx) => {
  const fixedPrices: (number | null)[] = [20000, 45000, 75000, null];
  const billingTypes: ('one-time' | 'monthly' | 'custom')[] = [
    'one-time',
    'one-time',
    'custom',
    'custom',
  ];
  const priceEGP = fixedPrices[idx] ?? null;
  return {
    id: pkg.id,
    title: pkg.name_ar,
    titleEn: pkg.name_en,
    subtitle: pkg.subtitle_ar,
    subtitleEn: pkg.subtitle_en,
    pricingModel: priceEGP !== null ? 'fixed' : 'quote',
    priceEGP,
    billingType: billingTypes[idx] || 'custom',
    billingLabelAr: pkg.price_setup_egp,
    billingLabelEn: pkg.price_setup_usd,
    badgeAr: pkg.badge_ar ?? null,
    badgeEn: pkg.badge_en ?? null,
    targetAudience: pkg.subtitle_ar,
    targetAudienceEn: pkg.subtitle_en,
    features: pkg.details_ar,
    featuresEn: pkg.details_en,
    popular: pkg.highlighted,
  };
});

export type HostingCategory = 'vps' | 'web' | 'windows';

export interface NormalizedHostingPlan {
  id: string;
  category: HostingCategory;
  key: 'shared' | 'wordpress' | 'vps' | 'windows';
  name: string;
  nameAr: string;
  nameEn: string;
  basePriceEGP: number;
  basePriceUSD: number;
  monthlyPriceEGP: number;
  yearlyPriceEGP: number;
  targetAudience: string;
  targetAudienceEn: string;
  cpu: string;
  ram: string;
  storage: string;
  bandwidth: string;
  portSpeed: string;
  snapshots: string;
  ddos: string;
  panel: string;
  uptime: string;
  features: string[];
  featuresEn: string[];
  specsAr: string[];
  specsEn: string[];
  popular?: boolean;
}

export type { NormalizedHostingPlan as HostingPlan };

export const HOSTING_PLANS: NormalizedHostingPlan[] = [
  {
    id: 'vps-10',
    category: 'vps',
    key: 'vps',
    name: 'Cloud VPS 10',
    nameAr: 'Cloud VPS 10',
    nameEn: 'Cloud VPS 10',
    basePriceEGP: 320,
    basePriceUSD: 6.45,
    monthlyPriceEGP: 320,
    yearlyPriceEGP: 3200,
    targetAudience: 'مشاريع الويب، بيئات الاختبار، وواجهات API',
    targetAudienceEn: 'Web apps, staging environments & lightweight APIs',
    cpu: '4 vCPU Cores',
    ram: '8 GB DDR4 ECC',
    storage: '75 GB NVMe',
    bandwidth: '32 TB Out / Unlim. In',
    portSpeed: '1 Gbit/s',
    snapshots: '1 Snapshot',
    ddos: 'Always-On L3/L4',
    panel: 'Full Root SSH + KVM',
    uptime: '99.95% SLA',
    features: [
      'معالجات AMD EPYC / Intel Xeon بأداء ثابت',
      'ذاكرة DDR4 ECC مع عزل KVM كامل للموارد',
      'عنوان IPv4 مخصص + شبكة فرعية IPv6 /64',
      'استلام فوري خلال دقائق في القاهرة أو فرانكفورت',
    ],
    featuresEn: [
      'AMD EPYC / Intel Xeon compute nodes',
      'DDR4 ECC RAM with dedicated KVM isolation',
      '1 Dedicated IPv4 + /64 IPv6 subnet included',
      'Deploy in Cairo or Frankfurt within minutes',
    ],
    specsAr: NUZUL_HOSTING_PLANS[0].specsAr,
    specsEn: NUZUL_HOSTING_PLANS[0].specsEn,
    popular: false,
  },
  {
    id: 'vps-20',
    category: 'vps',
    key: 'vps',
    name: 'Cloud VPS 20',
    nameAr: 'Cloud VPS 20',
    nameEn: 'Cloud VPS 20',
    basePriceEGP: 570,
    basePriceUSD: 11.5,
    monthlyPriceEGP: 570,
    yearlyPriceEGP: 5700,
    targetAudience: 'المتاجر الإلكترونية، قواعد البيانات، وأنظمة ERP',
    targetAudienceEn: 'Production stores, PostgreSQL/MySQL & business ERPs',
    cpu: '6 vCPU Cores',
    ram: '16 GB DDR4 ECC',
    storage: '100 GB NVMe',
    bandwidth: '32 TB Out / Unlim. In',
    portSpeed: '1 Gbit/s',
    snapshots: '2 Snapshots',
    ddos: 'Always-On L3/L4',
    panel: 'Full Root SSH + KVM',
    uptime: '99.95% SLA',
    features: [
      'مصفوفة تخزين NVMe RAID-10 لقواعد البيانات',
      'دعم حاويات Docker وPostgreSQL وRedis',
      'لقطتان احتياطيتان (Snapshots) للاسترجاع الفوري',
      'منفذ 1 Gbit/s وحماية تلقائية ضد DDoS',
    ],
    featuresEn: [
      'NVMe RAID-10 storage optimized for databases',
      'Ideal for Docker stacks, PostgreSQL & Redis',
      '2 Included snapshots for instant rollback',
      '1 Gbit/s uplink with automatic DDoS scrubbing',
    ],
    specsAr: NUZUL_HOSTING_PLANS[1].specsAr,
    specsEn: NUZUL_HOSTING_PLANS[1].specsEn,
    popular: true,
  },
  {
    id: 'vps-30',
    category: 'vps',
    key: 'vps',
    name: 'Cloud VPS 30',
    nameAr: 'Cloud VPS 30',
    nameEn: 'Cloud VPS 30',
    basePriceEGP: 940,
    basePriceUSD: 19.0,
    monthlyPriceEGP: 940,
    yearlyPriceEGP: 9400,
    targetAudience: 'منصات الأعمال عالية التزامن وخدمات SaaS',
    targetAudienceEn: 'High-concurrency SaaS apps & multi-tenant backends',
    cpu: '8 vCPU Cores',
    ram: '24 GB DDR4 ECC',
    storage: '200 GB NVMe',
    bandwidth: '32 TB Out / Unlim. In',
    portSpeed: '1 Gbit/s',
    snapshots: '3 Snapshots',
    ddos: 'Always-On L3/L4',
    panel: 'Full Root SSH + KVM',
    uptime: '99.99% SLA',
    features: [
      'أداء عالٍ لتشغيل عدة حاويات وقواعد بيانات معاً',
      'شبكة داخلية خاصة VLAN للربط بين الخوادم',
      '3 لقطات احتياطية + دعم تقني مهندس نظم',
      'ضمان توافر شهري 99.99% للعتاد والشبكة',
    ],
    featuresEn: [
      'Sized for multi-service Docker & database clusters',
      'Private VPC / VLAN networking between instances',
      '3 Included snapshots + systems engineer support',
      '99.99% host & network availability SLA',
    ],
    specsAr: NUZUL_HOSTING_PLANS[2].specsAr,
    specsEn: NUZUL_HOSTING_PLANS[2].specsEn,
    popular: false,
  },
  {
    id: 'vps-40',
    category: 'vps',
    key: 'vps',
    name: 'Cloud VPS 40',
    nameAr: 'Cloud VPS 40',
    nameEn: 'Cloud VPS 40',
    basePriceEGP: 1580,
    basePriceUSD: 31.9,
    monthlyPriceEGP: 1580,
    yearlyPriceEGP: 15800,
    targetAudience: 'أحمال التحليلات، ERP متعدد الفروع، وبيئات Clusters',
    targetAudienceEn: 'Heavy analytics, multi-branch ERP & CI/CD runners',
    cpu: '12 vCPU Cores',
    ram: '48 GB DDR4 ECC',
    storage: '250 GB NVMe',
    bandwidth: '32 TB Out / Unlim. In',
    portSpeed: '1 Gbit/s',
    snapshots: '4 Snapshots',
    ddos: 'Always-On L3/L4',
    panel: 'Full Root SSH + KVM',
    uptime: '99.99% SLA',
    features: [
      'سعة ذاكرة 48 GB ECC للأحمال الكثيفة والتخزين المؤقت',
      'أقراص NVMe عالية الإدخال والإخراج IOPS',
      '4 لقطات احتياطية + أولوية استجابة P1',
      'ترقية حية للموارد دون تغيير عنوان IP',
    ],
    featuresEn: [
      '48 GB ECC RAM for heavy caching & ERP workloads',
      'High-IOPS enterprise NVMe array',
      '4 Included snapshots + P1 priority support',
      'Live resource scaling without IP changes',
    ],
    specsAr: NUZUL_HOSTING_PLANS[3].specsAr,
    specsEn: NUZUL_HOSTING_PLANS[3].specsEn,
    popular: false,
  },
];

export const WEB_HOSTING_PLANS: NormalizedHostingPlan[] = [
  {
    id: 'web-starter',
    category: 'web',
    key: 'shared',
    name: 'Web Starter',
    nameAr: 'استضافة الأعمال الأساسية',
    nameEn: 'Web Starter',
    basePriceEGP: 195,
    basePriceUSD: 3.95,
    monthlyPriceEGP: 195,
    yearlyPriceEGP: 1950,
    targetAudience: 'المواقع التعريفية للشركات والمدونات الرسمية',
    targetAudienceEn: 'Corporate websites and portfolio portals',
    cpu: '2 vCPU LVE',
    ram: '2 GB DDR4',
    storage: '25 GB NVMe',
    bandwidth: '1 TB / Month',
    portSpeed: '1 Gbit/s',
    snapshots: '7 Daily Backups',
    ddos: 'L3/L7 WAF',
    panel: 'cPanel + AutoSSL',
    uptime: '99.90% SLA',
    features: [
      'لوحة تحكم cPanel مع 5 حسابات بريد رسمي',
      'شهادات SSL مجانية تُجدد تلقائياً',
      'نسخ احتياطي يومي آلي مع حفظ 7 أيام',
      'توافق كامل مع PHP 8.x وNode.js',
    ],
    featuresEn: [
      'cPanel control panel with 5 corporate mailboxes',
      'Automated Let’s Encrypt SSL certificates',
      'Daily automated backups (7-day retention)',
      'PHP 8.x & Node.js runtime support',
    ],
    specsAr: ['2 vCPU LVE', '2 GB RAM', '25 GB NVMe', 'cPanel + AutoSSL'],
    specsEn: ['2 vCPU LVE', '2 GB RAM', '25 GB NVMe', 'cPanel + AutoSSL'],
    popular: false,
  },
  {
    id: 'wp-pro',
    category: 'web',
    key: 'wordpress',
    name: 'WordPress Pro',
    nameAr: 'استضافة ووردبريس المدارة',
    nameEn: 'WordPress Pro',
    basePriceEGP: 345,
    basePriceUSD: 6.95,
    monthlyPriceEGP: 345,
    yearlyPriceEGP: 3450,
    targetAudience: 'المتاجر الإلكترونية ومواقع الشركات المتنامية',
    targetAudienceEn: 'WooCommerce stores & high-traffic company sites',
    cpu: '2 vCPU Dedicated',
    ram: '4 GB DDR4',
    storage: '50 GB NVMe',
    bandwidth: '2 TB / Month',
    portSpeed: '1 Gbit/s',
    snapshots: '14 Daily Backups',
    ddos: 'L3/L7 WAF + LiteSpeed',
    panel: 'cPanel + Staging',
    uptime: '99.95% SLA',
    features: [
      'خادم LiteSpeed Enterprise مع ذاكرة LSCache وRedis',
      'بيئة اختبار Staging بنقرة واحدة قبل النشر',
      'تحديثات أمنية دورية لنواة وإضافات ووردبريس',
      'نسخ احتياطي يومي خارج الموقع (14 يوماً)',
    ],
    featuresEn: [
      'LiteSpeed Enterprise with LSCache & Redis object cache',
      'One-click isolated staging environment',
      'Managed WordPress core & plugin security updates',
      '14-day off-site automated backup retention',
    ],
    specsAr: ['2 vCPU', '4 GB RAM', '50 GB NVMe', 'LiteSpeed + Staging'],
    specsEn: ['2 vCPU', '4 GB RAM', '50 GB NVMe', 'LiteSpeed + Staging'],
    popular: true,
  },
  {
    id: 'web-commerce',
    category: 'web',
    key: 'wordpress',
    name: 'Commerce Cloud',
    nameAr: 'سحابة التجارة والتطبيقات',
    nameEn: 'Commerce Cloud',
    basePriceEGP: 645,
    basePriceUSD: 13.0,
    monthlyPriceEGP: 645,
    yearlyPriceEGP: 6450,
    targetAudience: 'متاجر WooCommerce الكبيرة وتطبيقات Laravel',
    targetAudienceEn: 'High-order e-commerce stores & Laravel backends',
    cpu: '4 vCPU Dedicated',
    ram: '8 GB DDR4',
    storage: '80 GB NVMe',
    bandwidth: '4 TB / Month',
    portSpeed: '1 Gbit/s',
    snapshots: '30 Daily Backups',
    ddos: 'L3/L7 WAF + ModSec',
    panel: 'cPanel / Direct SSH',
    uptime: '99.95% SLA',
    features: [
      'موارد معالجة معزولة لتحمل مواسم الخصومات والذروة',
      'قاعدة بيانات MySQL/MariaDB محسّنة على NVMe',
      '25 حساب بريد إلكتروني رسمي بتوثيق DMARC',
      'فحص يومي للبرمجيات الخبيثة وحماية Brute-Force',
    ],
    featuresEn: [
      'Isolated compute capacity for peak sales traffic',
      'Tuned MariaDB / MySQL performance on NVMe',
      '25 Corporate email accounts with DMARC setup',
      'Daily malware scanning & WAF rule enforcement',
    ],
    specsAr: ['4 vCPU', '8 GB RAM', '80 GB NVMe', 'Redis + 30 Backups'],
    specsEn: ['4 vCPU', '8 GB RAM', '80 GB NVMe', 'Redis + 30 Backups'],
    popular: false,
  },
  {
    id: 'web-agency',
    category: 'web',
    key: 'shared',
    name: 'Agency Reseller',
    nameAr: 'سحابة الوكالات وتعدد المواقع',
    nameEn: 'Agency Multi-Site',
    basePriceEGP: 1240,
    basePriceUSD: 25.0,
    monthlyPriceEGP: 1240,
    yearlyPriceEGP: 12400,
    targetAudience: 'استضافة حتى 25 موقعاً معزولاً لعملاء الوكالات',
    targetAudienceEn: 'Up to 25 isolated client websites under one console',
    cpu: '6 vCPU Dedicated',
    ram: '16 GB DDR4',
    storage: '150 GB NVMe',
    bandwidth: '8 TB / Month',
    portSpeed: '1 Gbit/s',
    snapshots: '30 Daily Backups',
    ddos: 'L3/L7 WAF + Imunify',
    panel: 'WHM / Isolated cPanel',
    uptime: '99.99% SLA',
    features: [
      'حسابات cPanel منفصلة ومعزولة لكل مشروع عميل',
      'لوحة WHM لإدارة الحصص والتراخيص والنطاقات',
      'نقل مجاني للمواقع القائمة دون توقف للخدمة',
      'دعم فني أولوية على مدار الساعة 24/7',
    ],
    featuresEn: [
      'Isolated cPanel accounts per client project',
      'WHM administration console with resource limits',
      'Complimentary zero-downtime site migrations',
      '24/7 priority engineering ticket support',
    ],
    specsAr: ['6 vCPU', '16 GB RAM', '150 GB NVMe', 'WHM 25 Accounts'],
    specsEn: ['6 vCPU', '16 GB RAM', '150 GB NVMe', 'WHM 25 Accounts'],
    popular: false,
  },
];

export const WINDOWS_HOSTING_PLANS: NormalizedHostingPlan[] = [
  {
    id: 'win-cloud-10',
    category: 'windows',
    key: 'windows',
    name: 'Win Cloud 10',
    nameAr: 'Win Cloud 10 (RDP)',
    nameEn: 'Win Cloud 10 (RDP)',
    basePriceEGP: 740,
    basePriceUSD: 14.95,
    monthlyPriceEGP: 740,
    yearlyPriceEGP: 7400,
    targetAudience: 'سطح مكتب بعيد آمن وتشغيل البرامج المحاسبية الفردية',
    targetAudienceEn: 'Secure remote desktop & single-team accounting tools',
    cpu: '4 vCPU Cores',
    ram: '8 GB DDR4 ECC',
    storage: '75 GB NVMe',
    bandwidth: '32 TB Out / Unlim. In',
    portSpeed: '1 Gbit/s',
    snapshots: '1 Snapshot',
    ddos: 'Firewall + RDP Guard',
    panel: 'Admin RDP + KVM',
    uptime: '99.95% SLA',
    features: [
      'يتضمن ترخيص Windows Server 2022 القياسي',
      'اتصال سطح مكتب بعيد مشفر مع حماية ضد التخمين',
      'جاهز لتشغيل أنظمة ERP وبرامج المحاسبة المحلية',
      'أقراص NVMe سريعة لاستجابة قواعد البيانات',
    ],
    featuresEn: [
      'Includes licensed Windows Server 2022 Standard',
      'Encrypted RDP access with brute-force protection',
      'Ready for accounting suites & desktop ERPs',
      'Fast NVMe storage for responsive SQL queries',
    ],
    specsAr: ['4 vCPU', '8 GB ECC', '75 GB NVMe', 'Windows Server 2022'],
    specsEn: ['4 vCPU', '8 GB ECC', '75 GB NVMe', 'Windows Server 2022'],
    popular: false,
  },
  {
    id: 'win-erp-20',
    category: 'windows',
    key: 'windows',
    name: 'Win ERP Standard',
    nameAr: 'Win ERP Standard',
    nameEn: 'Win ERP Standard',
    basePriceEGP: 1190,
    basePriceUSD: 24.0,
    monthlyPriceEGP: 1190,
    yearlyPriceEGP: 11900,
    targetAudience: 'قواعد بيانات SQL Server وفرق المحاسبة عن بُعد',
    targetAudienceEn: 'SQL Server workloads & multi-user remote accounting teams',
    cpu: '6 vCPU Cores',
    ram: '16 GB DDR4 ECC',
    storage: '120 GB NVMe',
    bandwidth: '32 TB Out / Unlim. In',
    portSpeed: '1 Gbit/s',
    snapshots: '2 Snapshots',
    ddos: 'VPN + RDP Firewall',
    panel: 'Admin RDP + KVM',
    uptime: '99.95% SLA',
    features: [
      'ذاكرة 16 GB ECC مناسبة لقواعد بيانات MS SQL Server',
      'نفق VPN خاص لربط الفروع بالخادم السحابي بأمان',
      'لقطتان احتياطيتان + نسخ احتياطي آلي خارج الموقع',
      'مراقبة مستمرة للأقراص والذاكرة على مدار الساعة',
    ],
    featuresEn: [
      '16 GB ECC RAM sized for MS SQL Server instances',
      'Optional WireGuard/IPsec VPN tunnel for branches',
      '2 Included snapshots + automated off-site backup',
      '24/7 disk, RAM & service health monitoring',
    ],
    specsAr: ['6 vCPU', '16 GB ECC', '120 GB NVMe', 'SQL & Branch VPN'],
    specsEn: ['6 vCPU', '16 GB ECC', '120 GB NVMe', 'SQL & Branch VPN'],
    popular: true,
  },
  {
    id: 'win-pro-30',
    category: 'windows',
    key: 'windows',
    name: 'Win Accounting Pro',
    nameAr: 'Win Accounting Pro',
    nameEn: 'Win Accounting Pro',
    basePriceEGP: 1890,
    basePriceUSD: 38.2,
    monthlyPriceEGP: 1890,
    yearlyPriceEGP: 18900,
    targetAudience: 'شركات التوزيع والمكاتب التي تضم 10–20 مستخدم RDP',
    targetAudienceEn: 'Distribution firms & teams running 10–20 concurrent RDP users',
    cpu: '8 vCPU Cores',
    ram: '24 GB DDR4 ECC',
    storage: '200 GB NVMe',
    bandwidth: '32 TB Out / Unlim. In',
    portSpeed: '1 Gbit/s',
    snapshots: '3 Snapshots',
    ddos: 'NGFW + Off-Site DR',
    panel: 'Multi-Session RDP',
    uptime: '99.99% SLA',
    features: [
      'معالج 8 أنوية وذاكرة 24 GB لتعدد جلسات المستخدمين',
      'عزل جلسات المحاسبة والمبيعات بصلاحيات Active Directory',
      'ربط جاهز مع منظومة الفاتورة الإلكترونية المصرية',
      'ضمان توافر شهري 99.99% ودعم مهندس نظم',
    ],
    featuresEn: [
      '8 vCPU & 24 GB RAM for concurrent terminal sessions',
      'Active Directory session & permission isolation',
      'Pre-tuned for Egyptian ETA e-invoicing agents',
      '99.99% availability SLA & systems engineer access',
    ],
    specsAr: ['8 vCPU', '24 GB ECC', '200 GB NVMe', 'Multi-User RDS'],
    specsEn: ['8 vCPU', '24 GB ECC', '200 GB NVMe', 'Multi-User RDS'],
    popular: false,
  },
  {
    id: 'win-cluster-40',
    category: 'windows',
    key: 'windows',
    name: 'Win Dedicated Host',
    nameAr: 'Win Dedicated Host',
    nameEn: 'Win Dedicated Host',
    basePriceEGP: 3150,
    basePriceUSD: 63.65,
    monthlyPriceEGP: 3150,
    yearlyPriceEGP: 31500,
    targetAudience: 'بيئات .NET وSQL الثقيلة وخوادم الفروع المركزية',
    targetAudienceEn: 'Enterprise .NET / SQL stacks & centralized branch servers',
    cpu: '12 vCPU Cores',
    ram: '48 GB DDR4 ECC',
    storage: '300 GB NVMe',
    bandwidth: '32 TB Out / Unlim. In',
    portSpeed: '1 Gbit/s',
    snapshots: '4 Snapshots',
    ddos: 'Hardware NGFW + DR',
    panel: 'Dedicated KVM + AD',
    uptime: '99.99% SLA',
    features: [
      '48 GB ECC RAM و300 GB NVMe بدون مشاركة أحمال',
      'دعم Active Directory وDomain Controller الكامل',
      '4 لقطات احتياطية + نسخ يومي معزول Immutable',
      'اتفاقية SLA بأولوية P1 على مدار الساعة',
    ],
    featuresEn: [
      '48 GB ECC RAM & 300 GB NVMe isolated capacity',
      'Full Active Directory & Domain Controller support',
      '4 Included snapshots + daily immutable backup',
      '24/7 P1 emergency escalation SLA',
    ],
    specsAr: ['12 vCPU', '48 GB ECC', '300 GB NVMe', 'AD + Dedicated SLA'],
    specsEn: ['12 vCPU', '48 GB ECC', '300 GB NVMe', 'AD + Dedicated SLA'],
    popular: false,
  },
];

export const ALL_HOSTING_PLANS: NormalizedHostingPlan[] = [
  ...HOSTING_PLANS,
  ...WEB_HOSTING_PLANS,
  ...WINDOWS_HOSTING_PLANS,
];

export interface NormalizedProject {
  id: string;
  title: string;
  titleEn: string;
  categorySlug: 'infrastructure' | 'cloud' | 'security' | 'software';
  category: string;
  categoryEn: string;
  client: string;
  clientEn: string;
  contextAr: string;
  contextEn: string;
  challenge: string;
  challengeEn: string;
  solution: string;
  solutionEn: string;
  timelineAr: string;
  timelineEn: string;
  qualitativeOutcomeAr: string;
  qualitativeOutcomeEn: string;
  deliverablesAr: string[];
  deliverablesEn: string[];
  impactMetric: string;
  impactMetricEn: string;
  metrics: { label: string; labelEn: string; value: string }[];
  technologies: string[];
  image: string;
}

function classifyProjectCategorySlug(catEn: string): 'infrastructure' | 'cloud' | 'security' | 'software' {
  const lower = catEn.toLowerCase();
  if (lower.includes('cloud')) return 'cloud';
  if (lower.includes('cybersecurity')) return 'security';
  if (lower.includes('software')) return 'software';
  return 'infrastructure';
}

const CASE_TIMELINES: Record<number, { ar: string; en: string }> = {
  1: { ar: '3 أسابيع (تنفيذ مرحلي خارج ساعات الذروة)', en: '3 Weeks (phased off-peak deployment)' },
  2: { ar: '10 أيام عمل', en: '10 Business Days' },
  3: { ar: 'أسبوعان', en: '2 Weeks' },
  4: { ar: '4 أسابيع', en: '4 Weeks' },
  5: { ar: '6 أسابيع', en: '6 Weeks' },
  6: { ar: '12 يوم عمل', en: '12 Business Days' },
  7: { ar: '7 أيام عمل', en: '7 Business Days' },
  8: { ar: '5 أيام عمل', en: '5 Business Days' },
  9: { ar: '5 أسابيع', en: '5 Weeks' },
  10: { ar: '3 أسابيع', en: '3 Weeks' },
  11: { ar: 'أسبوعان', en: '2 Weeks' },
  12: { ar: '10 أيام عمل', en: '10 Business Days' },
};

export const PROJECTS: NormalizedProject[] = NUZUL_CASE_STUDIES.map((cs) => {
  const slug = classifyProjectCategorySlug(cs.category_en);
  const timeline = CASE_TIMELINES[cs.id] || { ar: 'أسبوعان', en: '2 Weeks' };
  return {
    id: `case-${cs.id}`,
    title: cs.title_ar,
    titleEn: cs.title_en,
    categorySlug: slug,
    category: cs.category_ar,
    categoryEn: cs.category_en,
    client: cs.client_ar,
    clientEn: cs.client_en,
    contextAr: cs.executiveSummary_ar || cs.description_ar,
    contextEn: cs.executiveSummary_en || cs.description_en,
    challenge: cs.challenges_ar?.[0] || cs.description_ar,
    challengeEn: cs.challenges_en?.[0] || cs.description_en,
    solution: cs.solution_ar?.[0] || cs.description_ar,
    solutionEn: cs.solution_en?.[0] || cs.description_en,
    timelineAr: timeline.ar,
    timelineEn: timeline.en,
    qualitativeOutcomeAr: cs.result_ar,
    qualitativeOutcomeEn: cs.result_en,
    deliverablesAr: cs.deliverables_ar || [],
    deliverablesEn: cs.deliverables_en || [],
    impactMetric: cs.result_ar,
    impactMetricEn: cs.result_en,
    metrics: [],
    technologies: cs.tech,
    image: '',
  };
});

export interface NormalizedTestimonial {
  id: string;
  name: string;
  nameEn: string;
  role: string;
  roleEn: string;
  company: string;
  companyEn: string;
  content: string;
  contentEn: string;
}

export const TESTIMONIALS: NormalizedTestimonial[] = NUZUL_TESTIMONIALS.map((t) => ({
  id: t.id,
  name: t.name_ar,
  nameEn: t.name_en,
  role: t.role_ar,
  roleEn: t.role_en,
  company: t.company_ar,
  companyEn: t.company_en,
  content: t.text_ar,
  contentEn: t.text_en,
}));

export interface ArticleSection {
  id: string;
  headingAr: string;
  headingEn: string;
  bodyAr: string;
  bodyEn: string;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  titleEn: string;
  categorySlug: 'infrastructure' | 'cloud' | 'security' | 'software';
  category: string;
  categoryEn: string;
  date: string;
  readTime: string;
  readTimeEn: string;
  author: string;
  authorEn: string;
  authorRole: string;
  authorRoleEn: string;
  excerpt: string;
  excerptEn: string;
  content: string[];
  contentEn: string[];
  sections: ArticleSection[];
  image: string;
}

function classifyBlogCategorySlug(catEn: string): 'infrastructure' | 'cloud' | 'security' | 'software' {
  const lower = catEn.toLowerCase();
  if (lower.includes('cloud') || lower.includes('server') || lower.includes('domain')) return 'cloud';
  if (lower.includes('security') || lower.includes('backup') || lower.includes('firewall') || lower.includes('siem') || lower.includes('disaster')) return 'security';
  if (lower.includes('software') || lower.includes('erp') || lower.includes('mobile') || lower.includes('web') || lower.includes('ui/ux') || lower.includes('qa') || lower.includes('q-system')) return 'software';
  return 'infrastructure';
}

export const ARTICLES: Article[] = NUZUL_BLOG_POSTS.map((post) => {
  const catSlug = classifyBlogCategorySlug(post.category_en);
  const parasAr = post.content_ar.split('\n\n').filter(Boolean);
  const parasEn = post.content_en.split('\n\n').filter(Boolean);

  const sections: ArticleSection[] = [
    {
      id: 'section-problem',
      headingAr: '1. السياق التشغيلي والتحديات التقنية',
      headingEn: '1. Operational Context & Technical Challenges',
      bodyAr: parasAr[0] || post.excerpt_ar,
      bodyEn: parasEn[0] || post.excerpt_en,
    },
    {
      id: 'section-architecture',
      headingAr: '2. المعمارية الهندسية وضوابط التنفيذ',
      headingEn: '2. Target Architecture & Implementation Controls',
      bodyAr: parasAr[1] || parasAr[0] || post.excerpt_ar,
      bodyEn: parasEn[1] || parasEn[0] || post.excerpt_en,
    },
    {
      id: 'section-governance',
      headingAr: '3. التوصيات التشغيلية واستمرارية الأعمال',
      headingEn: '3. Operational Governance & Continuity Checklist',
      bodyAr:
        parasAr[2] ||
        'يوصي الفريق الهندسي في نزول تك بتوثيق الإعدادات، وجدولة اختبارات دورية للنسخ الاحتياطي، وربط الأنظمة الحرجة بعقود مستوى خدمة (SLA) للمراقبة المستمرة.',
      bodyEn:
        parasEn[2] ||
        'Nuzul Tech engineers recommend documenting As-Built configurations, scheduling regular backup restoration drills, and operating production workloads under formal SLA monitoring.',
    },
  ];

  return {
    id: post.slug || `post-${post.id}`,
    slug: post.slug,
    title: post.title_ar,
    titleEn: post.title_en,
    categorySlug: catSlug,
    category: post.category_ar,
    categoryEn: post.category_en,
    date: post.date,
    readTime: '5 دقائق قراءة',
    readTimeEn: '5 min read',
    author: 'الفريق الهندسي — نزول تك',
    authorEn: 'Nuzul Tech Engineering Team',
    authorRole: 'مهندسو البنية التحتية والسحابة',
    authorRoleEn: 'Cloud & Infrastructure Architects',
    excerpt: post.excerpt_ar,
    excerptEn: post.excerpt_en,
    content: parasAr,
    contentEn: parasEn,
    sections,
    image: '',
  };
});

export const CLIENT_SECTORS = [
  { id: 'sec-1', nameAr: 'القطاع الطبي والمراكز التخصصية', nameEn: 'Healthcare & Medical Centers' },
  { id: 'sec-2', nameAr: 'مكاتب المحاسبة والاستشارات المالية', nameEn: 'Accounting & Financial Firms' },
  { id: 'sec-3', nameAr: 'النقل والخدمات اللوجستية', nameEn: 'Logistics & Freight Transport' },
  { id: 'sec-4', nameAr: 'الجمعيات والمؤسسات الأهلية', nameEn: 'Non-Profit & Foundations' },
  { id: 'sec-5', nameAr: 'منصات التجارة الإلكترونية والتجزئة', nameEn: 'E-Commerce & Retail Chains' },
  { id: 'sec-6', nameAr: 'المؤسسات التعليمية والتدريبية', nameEn: 'Education & Training Academies' },
];

export const FAQS = [
  {
    question: 'هل تقدمون عقود مستوى خدمة (SLA) رسمية وفواتير ضريبية للشركات؟',
    questionEn: 'Do you provide formal SLA contracts and official tax invoices for enterprises?',
    answer:
      'نعم، تشمل تعاقدات الشركات اتفاقية مستوى خدمة (SLA) تحدد مستويات الأولوية وأوقات الاستجابة، مع إصدار فواتير إلكترونية رسمية في مصر.',
    answerEn:
      'Yes, corporate engagements include a formal Service Level Agreement (SLA) defining priority tiers and acknowledgment windows, alongside official Egyptian electronic tax invoices.',
  },
  {
    question: 'كيف تتم عملية نقل الخوادم أو الأنظمة الحالية دون تعطيل العمل؟',
    questionEn: 'How do you migrate existing servers or systems without business disruption?',
    answer:
      'نقوم بإعداد البيئة الموازية بالكامل ومزامنة البيانات مسبقاً، ثم ننفذ التحويل النهائي خارج ساعات الذروة مع وجود خطة تراجع مختبرة.',
    answerEn:
      'We stage a parallel environment and synchronize data in advance, executing final cutover during off-peak hours alongside a verified rollback plan.',
  },
  {
    question: 'ما وسائل الدفع المتاحة للشركات داخل مصر وخارجها؟',
    questionEn: 'What payment methods are supported in Egypt and internationally?',
    answer:
      'نوفر التحويل البنكي المباشر لحسابات الشركات، والتحويل عبر InstaPay، ومحافظ الهاتف (Vodafone Cash)، وفوري، بالإضافة إلى البطاقات البنكية بموجب عرض سعر وفاتورة رسمية.',
    answerEn:
      'We support corporate bank wire transfers, InstaPay transfers, Vodafone Cash, Fawry, and bank cards arranged via official quotation and invoice.',
  },
  {
    question: 'هل تشمل خطط الاستضافة السحابية نسخاً احتياطياً خارج الموقع؟',
    questionEn: 'Do cloud hosting plans include off-site backups?',
    answer:
      'نعم، تتضمن جميع خطط الاستضافة نسخاً احتياطياً آلياً مشفراً يُحفظ في موقع ثانوي مستقل لاستعادة البيانات عند الطوارئ.',
    answerEn:
      'Yes, all hosting plans include automated encrypted backups stored off-site for verified disaster recovery.',
  },
];

export const INFRASTRUCTURE_LOCATIONS = [
  {
    id: 'dc-cairo',
    city: 'القاهرة',
    cityEn: 'Cairo',
    country: 'مصر',
    countryEn: 'Egypt',
    regionCode: 'EG-CAI',
    role: 'موقع محلي لتطبيقات الشركات والجهات التي تتطلب استضافة البيانات داخل جمهورية مصر العربية وتقليل زمن الاستجابة للمستخدمين المحليين.',
    roleEn: 'Local deployment option for Egyptian enterprises requiring in-country data residency and low domestic latency.',
  },
  {
    id: 'dc-frankfurt',
    city: 'فرانكفورت',
    cityEn: 'Frankfurt',
    country: 'ألمانيا',
    countryEn: 'Germany',
    regionCode: 'EU-FRA',
    role: 'عقدة ربط أوروبية رئيسية للأنظمة الإقليمية والتطبيقات التي تخدم الشرق الأوسط وأوروبا.',
    roleEn: 'Central European peering hub suited for regional workloads serving EMEA.',
  },
  {
    id: 'dc-riyadh',
    city: 'الرياض',
    cityEn: 'Riyadh',
    country: 'المملكة العربية السعودية',
    countryEn: 'Saudi Arabia',
    regionCode: 'SA-RUH',
    role: 'موقع إقليمي لخدمة فروع الشركات والعملاء داخل سوق الخليج العربي.',
    roleEn: 'Regional deployment option for companies serving clients and branches across the GCC.',
  },
  {
    id: 'dc-amsterdam',
    city: 'أمستردام',
    cityEn: 'Amsterdam',
    country: 'هولندا',
    countryEn: 'Netherlands',
    regionCode: 'EU-AMS',
    role: 'موقع أوروبي بديل للنسخ الاحتياطي الجغرافي البعيد (Offsite DR) وتوزيع الأحمال الدولية.',
    roleEn: 'Secondary European region for geo-redundant offsite disaster recovery (DR) and international traffic.',
  },
];

export const DOMAIN_TLDS = [
  { tld: '.com', priceEGP: 750 },
  { tld: '.net', priceEGP: 850 },
  { tld: '.org', priceEGP: 800 },
  { tld: '.io', priceEGP: 2650 },
  { tld: '.com.eg', priceEGP: 1250 },
  { tld: '.eg', priceEGP: 2200 },
];

export const LIVE_DEMOS = [
  {
    id: 'demo-erp',
    title: 'عرض توضيحي لنظام ERP',
    titleEn: 'ERP System Demo',
    category: 'الحسابات والمخازن',
    categoryEn: 'Finance & Inventory',
    description: 'واجهات النظام ووحداته، والربط مع منظومة الفاتورة الإلكترونية.',
    descriptionEn: 'System screens, core modules, and ETA e-invoicing integration.',
    modules: ['الحسابات العامة', 'المخازن', 'الفاتورة الإلكترونية', 'الموارد البشرية'],
    modulesEn: ['General Ledger', 'Inventory', 'E-Invoicing', 'HR & Payroll'],
    kpis: [
      { label: 'الربط الضريبي', labelEn: 'Tax Integration', value: 'ETA E-Invoicing SDK', trend: 'ETA Ready' },
      { label: 'تتبع الأصناف', labelEn: 'Inventory Tracking', value: 'FIFO / Batch', trend: 'Multi-Branch' },
      { label: 'الصلاحيات', labelEn: 'Access Control', value: 'RBAC + Audit Log', trend: 'Role-Based' },
    ],
    previewImage: '',
  },
];

export const IMPLEMENTATION_STEPS = [
  {
    step: '01',
    title: 'الفحص وتحديد المتطلبات',
    titleEn: 'Discovery & Requirements',
    duration: '2 - 3 أيام',
    durationEn: '2 - 3 Days',
    description: 'مراجعة البنية الحالية، وتحديد نقاط الاختناق والمخاطر الأمنية.',
    descriptionEn: 'Reviewing existing infrastructure, identifying bottlenecks, and mapping security risks.',
    deliverable: 'وثيقة التصميم الهندسي (Architecture Blueprint)',
    deliverableEn: 'Architecture Blueprint',
  },
  {
    step: '02',
    title: 'الإعداد ونقل البيانات',
    titleEn: 'Staging & Data Migration',
    duration: '3 - 7 أيام',
    durationEn: '3 - 7 Days',
    description: 'إعداد الخوادم والشبكة، ونقل البيانات خارج أوقات الذروة.',
    descriptionEn: 'Configuring servers and networks, and migrating data during off-peak hours.',
    deliverable: 'بيئة تشغيل مختبرة (Validated Setup)',
    deliverableEn: 'Validated Production Setup',
  },
  {
    step: '03',
    title: 'الاختبار والتأمين',
    titleEn: 'Testing & Hardening',
    duration: '1 - 2 يوم',
    durationEn: '1 - 2 Days',
    description: 'فحص الثغرات (Vulnerability Scan)، وتفعيل Firewall، وإعداد Backup منفصل عن الشبكة.',
    descriptionEn: 'Vulnerability scanning, firewall rule enforcement, and immutable backup configuration.',
    deliverable: 'تقرير الفحص والاعتماد (Security Report)',
    deliverableEn: 'Security Sign-off Report',
  },
  {
    step: '04',
    title: 'المراقبة والدعم',
    titleEn: 'Monitoring & Support',
    duration: 'مستمر',
    durationEn: 'Ongoing',
    description: 'مراقبة الأداء الدورية، والرد على البلاغات حسب مستويات الخدمة في العقد.',
    descriptionEn: 'Continuous performance telemetry and SLA-governed incident resolution.',
    deliverable: 'اتفاقية مستوى الخدمة (SLA Contract)',
    deliverableEn: 'Active SLA Agreement',
  },
];

export const STATS = [
  {
    id: 'stat-1',
    value: 'SLA',
    suffix: '',
    label: 'التزام بعقود مستوى الخدمة',
    labelEn: 'Formal SLA Governance',
    description: 'مراقبة مستمرة للخوادم والشبكات ونوافذ استجابة محددة بالعقد',
    descriptionEn: 'Continuous monitoring paired with contractual escalation tiers',
  },
  {
    id: 'stat-2',
    value: '24/7',
    suffix: '',
    label: 'فريق عمليات هندسية مستمر',
    labelEn: 'Round-the-Clock Engineering Desk',
    description: 'تواصل مباشر مع مهندسي النظم والشبكات لحوادث الأولوية القصوى',
    descriptionEn: 'Direct escalation to systems and network engineers for P1 incidents',
  },
];

export const TEAM_MEMBERS = [
  {
    id: 'team-1',
    name: 'فريق هندسة الشبكات والسحابة',
    nameEn: 'Cloud & Network Engineering Team',
    role: 'قطاع البنية التحتية ومراكز البيانات',
    roleEn: 'Infrastructure & Datacenter Division',
    experience: 'فرق هندسية متخصصة',
    experienceEn: 'Specialized Engineering Divisions',
    bio: 'مهندسون متخصصون في تصميم الشبكات المهيكلة، إدارة الخوادم السحابية (KVM)، وتأمين البيانات.',
    bioEn: 'Engineers specialized in structured network architecture, KVM cloud servers, and data security.',
    certifications: ['Linux KVM & Virtualization', 'VLAN & NGFW Architecture', '3-2-1 Backup Pipelines'],
    image: '',
  },
];

export const TECH_STACK = [
  {
    category: 'أنظمة التشغيل المدعومة',
    categoryEn: 'Operating Systems',
    items: [
      { name: 'Ubuntu LTS / Debian', badge: 'Linux', badgeEn: 'Linux' },
      { name: 'AlmaLinux / Rocky Linux', badge: 'RHEL', badgeEn: 'RHEL' },
      { name: 'Windows Server', badge: 'RDP / AD', badgeEn: 'RDP / AD' },
    ],
  },
  {
    category: 'لغات وأطر البرمجة',
    categoryEn: 'Languages & Frameworks',
    items: [
      { name: 'Node.js & TypeScript', badge: 'Runtime', badgeEn: 'Runtime' },
      { name: 'PHP / Laravel', badge: 'Web Stack', badgeEn: 'Web Stack' },
      { name: 'Python & .NET Core', badge: 'Enterprise', badgeEn: 'Enterprise' },
    ],
  },
  {
    category: 'قواعد البيانات والحاويات',
    categoryEn: 'Databases & Containers',
    items: [
      { name: 'PostgreSQL & MySQL', badge: 'SQL', badgeEn: 'SQL' },
      { name: 'Redis Cache', badge: 'In-Memory', badgeEn: 'In-Memory' },
      { name: 'Docker Containers', badge: 'OCI', badgeEn: 'OCI' },
    ],
  },
  {
    category: 'العزل والشبكات والحماية',
    categoryEn: 'Virtualization & Security',
    items: [
      { name: 'KVM Hypervisor', badge: 'عزل النواة', badgeEn: 'Kernel Isolation' },
      { name: 'Fortinet / NGFW', badge: 'جدار ناري', badgeEn: 'Firewall' },
      { name: 'LiteSpeed & CloudLinux', badge: 'استضافة ويب', badgeEn: 'Web Hosting' },
    ],
  },
];
