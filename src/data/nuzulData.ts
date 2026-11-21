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
    title_ar: 'كابلات الشبكات (Structured Cabling) والدومين المركزي',
    title_en: 'Structured Cabling & Domain Services',
    description_ar:
      'تمديد كابلات Cat6A وفايبر، وتجميع وتنظيم الراك (Rack)، وإعداد سيرفر Active Directory وسيرفر ملفات (File Server) وأجهزة البصمة.',
    description_en:
      'Certified Cat6A and fiber cabling, rack termination, Active Directory domain setup, file servers, and biometric access control.',
    icon: 'Layers',
    useCaseStory_ar:
      'تأسيس شبكة كاملة مع سيرفر Active Directory وFile Server وأجهزة بصمة للحضور والتحكم في الدخول.',
    useCaseStory_en:
      'Built turnkey structured cabling, Active Directory domain controllers, file servers, and biometric access terminals.',
    features_ar: [
      'تمديد واختبار كابلات Cat6A والفايبر وتجميع وتنظيم الـ Rack',
      'إعداد سيرفر Active Directory وFile Server بصلاحيات محددة لكل قسم',
      'تركيب وبرمجة أجهزة البصمة والتحكم في الدخول (Access Control)',
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
    title_ar: 'تأمين الشبكات وفايروول Fortinet',
    title_en: 'Network Security & Firewalls',
    description_ar:
      'تركيب وبرمجة Firewall (Fortinet) وتقسيم الشبكة عبر VLANs لفصل سيستم المحاسبة والأجهزة الطبية وكاميرات الـ CCTV عن شبكة الموبايل والضيوف.',
    description_en:
      'Fortinet hardware firewall installation, policy configuration, and VLAN segmentation isolating accounting, medical systems, and CCTV.',
    icon: 'ShieldCheck',
    useCaseStory_ar:
      'فصل شبكات الحسابات والأجهزة الطبية تماماً عن شبكة الضيوف عبر فايروول Fortinet وتقسيم VLANs.',
    useCaseStory_en:
      'Segmented clinical and financial networks from public guest Wi-Fi using Fortinet firewalls and 802.1Q VLANs.',
    features_ar: [
      'تركيب وبرمجة Firewall (Fortinet) وتطبيق قواعد الحماية والترافيك',
      'تقسيم الشبكة عبر VLANs لعزل السيرفرات وقواعد البيانات المالية',
      'فصل شبكة كاميرات الـ IP وأجهزة الـ NVR في شبكة مستقلة وآمنة',
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
    title_ar: 'سنترال VoIP وربط تليفونات الفروع',
    title_en: 'VoIP IP-PBX Telephony',
    description_ar:
      'ربط تليفونات الفروع كلها على سنترال VoIP IP-PBX واحد، مع رسالة رد آلي (IVR) وتسجيل تلقائي للمكالمات.',
    description_en:
      'Multi-branch VoIP IP-PBX telephone systems with automated IVR routing, extension mapping, and call recording.',
    icon: 'PhoneCall',
    useCaseStory_ar:
      'ربط المقر الرئيسي والفروع بسنترال VoIP موحد مع تحويلات داخلية وتسجيل لمكالمات خدمة العملاء.',
    useCaseStory_en:
      'Interconnected corporate branches using unified VoIP IP-PBX extensions and recorded customer support queues.',
    features_ar: [
      'رسالة رد آلي (IVR) وتوجيه المكالمات بين الإدارات والفروع',
      'تسجيل تلقائي للمكالمات وتقارير لمتابعة أداء التحويلات',
      'تركيب تليفونات IP مكتبية وربط الموظفين على تطبيق الموبايل',
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
    title_ar: 'Private Cloud داخل مقر الشركة',
    title_en: 'On-Premise Private Cloud',
    description_ar:
      'بناء Private Cloud على سيرفرات داخل شركتك؛ بياناتك بتفضل جوه شبكتك وبسرعة الـ LAN المحلية من غير اعتماد كامل على الإنترنت الخارجي.',
    description_en:
      'Private cloud deployment on dedicated local servers. Data remains inside your perimeter with LAN access speeds.',
    icon: 'Cloud',
    useCaseStory_ar:
      'تجهيز Private Cloud معزولة على سيرفرات محلية عشان قواعد البيانات الحساسة تفضل داخل المقر.',
    useCaseStory_en:
      'Deployed an on-premise private cloud keeping proprietary databases inside the company perimeter.',
    features_ar: [
      'تشغيل البيانات على سيرفرات داخل المقر بسرعة الشبكة المحلية (LAN)',
      'تجهيز بيئة High Availability (HA) عشان الشغل ما يقفش لو جهاز احتاج صيانة',
      'تحكم كامل في صلاحيات المستخدمين وسجلات الدخول',
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
    title_ar: 'دمج السيرفرات (Server Virtualization)',
    title_en: 'Server Virtualization',
    description_ar:
      'دمج السيرفرات المتفرقة على Cluster واحد (KVM أو VMware) لتقليل عدد الأجهزة وتوفير الكهرباء وتسهيل الصيانة والـ Backup.',
    description_en:
      'Consolidate physical servers onto a unified KVM or VMware cluster to reduce hardware footprint and simplify maintenance.',
    icon: 'Layers',
    useCaseStory_ar:
      'دمج عدة سيرفرات قديمة في Cluster افتراضي موحد مع نقل تلقائي للأحمال وقت صيانة الهاردوير.',
    useCaseStory_en:
      'Consolidated fragmented physical hardware onto a high-density virtualization cluster with automatic failover.',
    features_ar: [
      'نقل تلقائي للأنظمة (Failover) وقت صيانة أي سيرفر فيزيائي',
      'توفير استهلاك الكهرباء والمساحة داخل السيرفر رووم',
      'إدارة مركزية للـ CPU والرامات والمساحات التخزينية',
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
    title_ar: 'Docker Containers والتوسع التلقائي',
    title_en: 'Containers & Elastic Scaling',
    description_ar:
      'تشغيل التطبيقات جوه Docker Containers معزولة، مع توسع مرن وقت الضغط وتحديثات سريعة من غير ما الخدمة تقف.',
    description_en:
      'Package applications in isolated containers with automatic scaling under peak demand and simplified rollouts.',
    icon: 'Cpu',
    useCaseStory_ar:
      'نقل منصة أعمال للعمل عبر Docker Containers معزولة، وده سهّل رفع التحديثات واستيعاب ضغط المستخدمين.',
    useCaseStory_en:
      'Packaged core business applications into isolated containers with automated rollout pipelines.',
    features_ar: [
      'تشغيل كل خدمة جوه Container معزول ومستقل',
      'توسع مرن للموارد وقت الذروة وزيادة الزيارات',
      'رفع التحديثات بدون توقف (Zero-Downtime) مع إمكانية الرجوع السريع',
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
    title_ar: 'إدارة السيرفرات السحابية (Managed Cloud)',
    title_en: 'Managed Cloud Servers',
    description_ar:
      'إدارة وصيانة سيرفراتك بعقد SLA، شامل التحديثات الأمنية، الـ Backup اليومي، ومراقبة الأداء والتدخل السريع عند أي عطل.',
    description_en:
      'Proactive cloud server administration under formal SLAs, covering security patches, backups, and uptime telemetry.',
    icon: 'Server',
    useCaseStory_ar:
      'إدارة سيرفرات منصة تعليمية لضمان استقرار التشغيل وتحديث السيرفرات في مواسم الامتحانات والضغط العالي.',
    useCaseStory_en:
      'Administered multi-tier cloud servers maintaining uptime during seasonal examination peak loads.',
    features_ar: [
      'تحديثات أمنية دورية لأنظمة التشغيل والـ Packages',
      'Backup يومي أوتوماتيك محفوظ في سيرفر منفصل خارج الموقع',
      'مراقبة حالة السيرفرات وتدخل فوري عند الأعطال حسب عقد الـ SLA',
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
    title_ar: 'سيرفرات Cloud VPS (عزل KVM)',
    title_en: 'Cloud VPS (KVM)',
    description_ar:
      'سيرفرات Cloud VPS معزولة عبر KVM وهاردات NVMe سريعة، مع صلاحيات Root SSH كاملة وتسعير ثابت بالجنيه المصري.',
    description_en:
      'Virtual servers with dedicated KVM isolation, NVMe storage, full Root SSH access, and predictable EGP billing.',
    icon: 'Terminal',
    useCaseStory_ar:
      'تجهيز سيرفرات Cloud VPS لشركات ومكاتب محاسبة لتشغيل قواعد البيانات مع صلاحيات Root كاملة.',
    useCaseStory_en:
      'Provisioned dedicated KVM Cloud VPS instances hosting production databases with full Root SSH control.',
    features_ar: [
      'صلاحيات Root SSH كاملة للتحكم الكامل في السيرفر',
      'هاردات NVMe سريعة لتشغيل قواعد البيانات والـ ERP بدون بطء',
      'تسعير ثابت وواضح بالجنيه المصري بدون مفاجآت في الفواتير',
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
    title_ar: 'سيرفرات Remote Desktop (RDP) للمحاسبة والفرق',
    title_en: 'Cloud Workspaces & RDP',
    description_ar:
      'دخول مشفر وآمن للموظفين والمراجعين على برامج المحاسبة والـ ERP المركزية من أي مكان عبر Remote Desktop (RDP).',
    description_en:
      'Encrypted remote desktop access enabling distributed auditors and staff to run accounting and ERP suites centrally.',
    icon: 'Monitor',
    useCaseStory_ar:
      'تمكين فريق المراجعة والمحاسبة من الشغل على برنامج الحسابات من مقرات العملاء عبر RDP مشفر.',
    useCaseStory_en:
      'Enabled 30 field auditors to access central ERP accounting databases via encrypted RDP sessions.',
    features_ar: [
      'دخول مشفر عبر RDP من اللابتوب والكمبيوتر من أي فرع أو مقر عميل',
      'ملفات الحسابات وقواعد البيانات بتفضل محفوظة داخل السيرفر المركزي',
      'تحكم كامل في صلاحيات كل مستخدم والبرامج المسموح له يفتحها',
    ],
    features_en: [
      'Encrypted RDP access from desktop and laptop endpoints',
      'Central database containment preventing unauthorized local exports',
      'User permission management and single-application publishing',
    ],
  },
  {
    id: 10,
    category_key: 'infra_cloud',
    category_ar: 'السحابة والاستضافة',
    category_en: 'Cloud & Servers',
    title_ar: 'سيرفرات مخصصة (Dedicated Bare-Metal)',
    title_en: 'Dedicated Bare-Metal Servers',
    description_ar:
      'سيرفر فيزيائي كامل مخصص لشركتك لوحدها، مثالي لقواعد البيانات الضخمة وأرشيف الأشعة الطبية من غير أي مشاركة في الهاردوير.',
    description_en:
      'Single-tenant physical servers with dedicated CPU and storage throughput for large databases and radiological archives.',
    icon: 'HardDrive',
    useCaseStory_ar:
      'تخصيص سيرفر فيزيائي مستقل لتشغيل أرشيف الأشعة الطبية وقواعد البيانات بأعلى سرعة وبدون مشاركة موارد.',
    useCaseStory_en:
      'Dedicated single-tenant physical hardware deployed for radiological PACS storage and core transactional databases.',
    features_ar: [
      'هاردوير فيزيائي كامل مخصص لشركتك فقط بدون أي مشاركة',
      'هاردات NVMe بمصفوفة RAID لحماية البيانات من تلف أي هارد',
      'حماية ضد هجمات الـ DDoS واتصال شبكي سريع ومستقر',
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
    title_ar: 'استضافة المواقع المدارة (cPanel & LiteSpeed)',
    title_en: 'Managed Web Hosting',
    description_ar:
      'استضافة مواقع الشركات والمتاجر بلوحة cPanel وسيرفرات LiteSpeed، مع شهادة SSL مجانية وBackup يومي أوتوماتيك.',
    description_en:
      'Corporate cPanel hosting on LiteSpeed servers with automated SSL certificates and scheduled daily backups.',
    icon: 'Globe2',
    useCaseStory_ar:
      'استضافة الموقع الرسمي للشركة وإيميلات الأعمال مع Backup يومي جاهز للاسترجاع في أي وقت.',
    useCaseStory_en:
      'Hosted corporate portals and web applications with daily automated recovery snapshots and AutoSSL.',
    features_ar: [
      'لوحة تحكم cPanel سهلة لإدارة الملفات وقواعد البيانات والإيميلات',
      'سيرفرات LiteSpeed سريعة مع شهادة SSL بتتجدد أوتوماتيك',
      'Backup يومي محفوظ خارج السيرفر لاسترجاع الموقع في دقائق',
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
    title_ar: 'حجز وإدارة الدومين والـ DNS',
    title_en: 'Domain Registration & DNS',
    description_ar:
      'حجز وتجديد الدومينات المصرية (.eg و.com.eg) والدولية (.com / .net)، مع ضبط سجلات الـ DNS وقفل النقل للحماية.',
    description_en:
      'Register .eg, .com.eg, and international domains with managed DNS records, DNSSEC, and registrar transfer locks.',
    icon: 'AtSign',
    useCaseStory_ar:
      'حجز الدومين المصري الرسمي للشركة وضبط كل سجلات الـ DNS وحمايته بقفل النقل.',
    useCaseStory_en:
      'Secured official Egyptian .eg domains paired with managed DNS zones and transfer locks.',
    features_ar: [
      'حجز وتجديد الدومينات المصرية (.eg و.com.eg) والدومينات العالمية',
      'ضبط وإدارة سجلات الـ DNS (A, CNAME, MX, TXT) بدقة',
      'تفعيل قفل النقل (Transfer Lock) وحماية ملكية الدومين باسم شركتك',
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
    title_ar: 'أتمتة تجهيز السيرفرات (IaC & CI/CD)',
    title_en: 'Infrastructure Automation',
    description_ar:
      'تجهيز السيرفرات ورفع التحديثات بسكربتات أوتوماتيك عشان نقلل الأخطاء اليدوية ونوحد إعدادات بيئة الاختبار والتشغيل.',
    description_en:
      'Automated server provisioning and scripted deployments reducing manual configuration errors across environments.',
    icon: 'Terminal',
    useCaseStory_ar:
      'أتمتة تجهيز سيرفرات التطوير والاختبار لتسريع رفع التحديثات ومنع تضارب الإعدادات.',
    useCaseStory_en:
      'Automated server staging workflows with scripted deployment pipelines eliminating configuration drift.',
    features_ar: [
      'تجهيز السيرفرات عبر سكربتات جاهزة وقابلة لإعادة الاستخدام',
      'توحيد الإعدادات بين بيئة الـ Staging والـ Production',
      'مسار آمن لرفع التحديثات مع إمكانية Rollback فوري عند أي مشكلة',
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
    title_ar: 'مراقبة السيرفرات والشبكة (Monitoring)',
    title_en: 'Infrastructure Monitoring & Telemetry',
    description_ar:
      'مراقبة 24/7 للسيرفرات والسويتشات ومساحات الهاردات وأجهزة الـ NVR، مع تنبيهات فورية أول ما يحصل أي خلل.',
    description_en:
      'Continuous monitoring of servers, network switches, storage volumes, and NVR feeds with automated threshold alerts.',
    icon: 'Activity',
    useCaseStory_ar:
      'ربط السيرفرات والسويتشات بنظام مراقبة يبعث تنبيه فوري لفريق الصيانة قبل ما أي عطل يوقف الشغل.',
    useCaseStory_en:
      'Implemented continuous infrastructure probers generating automated alerts upon host or port failures.',
    features_ar: [
      'متابعة لحظية للـ CPU والرامات ومساحات الهاردات على كل سيرفر',
      'فحص مستمر لحالة السويتشات وأجهزة تسجيل الكاميرات (NVR)',
      'تنبيهات تلقائية بالإيميل ورسائل الموبايل عند أي انقطاع أو ضغط غير طبيعي',
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
    title_ar: 'مراقبة السجلات الأمنية (SIEM)',
    title_en: 'Security Log Monitoring (SIEM)',
    description_ar:
      'تجميع وتحليل سجلات الأمان (Logs) من السيرفرات والـ Firewall لرصد أي محاولة دخول مشبوهة وحظرها تلقائياً.',
    description_en:
      'Centralized security log ingestion from servers and firewalls to detect unauthorized access attempts and security anomalies.',
    icon: 'ShieldCheck',
    useCaseStory_ar:
      'ربط Logs الفايروول والسيرفرات على منصة واحدة لرصد محاولات تخمين الباسورد وحظر الـ IPs المشبوهة.',
    useCaseStory_en:
      'Ingested firewall and operating system audit logs into a central console with automated IP ban policies.',
    features_ar: [
      'تجميع سجلات الدخول والأحداث الأمنية من كل السيرفرات وأجهزة الشبكة',
      'كشف محاولات الـ Brute-Force وحظر العناوين المشبوهة أوتوماتيك',
      'تقارير دورية واضحة لمتابعة الوضع الأمني للشبكة',
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
    title_ar: 'النسخ الاحتياطي المعزول (3-2-1 Backup)',
    title_en: 'Disaster Recovery & 3-2-1 Backup',
    description_ar:
      'خطة Backup معزول (3-2-1 Immutable Backup) تحمي قواعد البيانات والملفات من فيروسات الفدية وتلف الهاردات، مع اختبار استرجاع دوري.',
    description_en:
      'Immutable off-site backup pipelines protecting databases and file archives against hardware failure and ransomware.',
    icon: 'Database',
    useCaseStory_ar:
      'تجهيز Backup يومي مشفر لقواعد بيانات الحسابات مع حفظ نسخة معزولة تماماً خارج مقر الشركة.',
    useCaseStory_en:
      'Deployed automated daily database backups retained in an immutable off-site location with recovery drills.',
    features_ar: [
      'تطبيق قاعدة 3-2-1: 3 نسخ على وسيطين مختلفين، منهم نسخة خارج المقر',
      'نسخ Immutable محمية من الحذف أو التشفير ضد هجمات الفدية (Ransomware)',
      'اختبار استرجاع دوري للتأكد إن النسخ شغالة وجاهزة وقت الطوارئ',
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
    title_ar: 'إيميلات الشركة وحماية الدومين (DMARC)',
    title_en: 'Corporate Email & DMARC Governance',
    description_ar:
      'تجهيز ونقل إيميلات الشركة باسم الدومين الرسمي مع ضبط SPF وDKIM وDMARC لمنع انتحال الفواتير وتقليل وصول الرسائل للـ Spam.',
    description_en:
      'Enterprise mailbox setup and migration with SPF, 2048-bit DKIM, and DMARC enforcement to block invoice spoofing.',
    icon: 'Mail',
    useCaseStory_ar:
      'نقل إيميلات الشركة وتوثيق SPF وDKIM وDMARC لحماية الفواتير التجارية وضمان وصول الرسائل في الـ Inbox.',
    useCaseStory_en:
      'Configured hardened business mailboxes with strict DMARC enforcement preventing domain spoofing.',
    features_ar: [
      'تجهيز ونقل حسابات الإيميل باسم دومين شركتك بدون فقدان رسائل',
      'ضبط سجلات SPF وDKIM (2048-bit) وDMARC لحماية الدومين من التزوير',
      'ربط كامل مع Outlook والموبايل وفلترة ذكية ضد الـ Spam والتصيد',
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
    title_ar: 'أنظمة ERP والربط مع الفاتورة الإلكترونية',
    title_en: 'Enterprise ERP & Tax Integration',
    description_ar:
      'سيستم متكامل للحسابات والمخازن والمشتريات والمبيعات، مربوط مباشرة مع الفاتورة والإيصال الإلكتروني لمصلحة الضرائب (ETA).',
    description_en:
      'Unified accounting, inventory, and sales system integrated directly with the Egyptian Tax Authority e-invoicing platform.',
    icon: 'Layers',
    useCaseStory_ar:
      'تطبيق سيستم ERP لإدارة المخازن والمبيعات وإصدار الفواتير الإلكترونية وربطها مباشرة بالضرائب.',
    useCaseStory_en:
      'Deployed an ERP system managing warehouse stocks and issuing ETA-compliant electronic tax invoices.',
    features_ar: [
      'ربط مباشر مع الفاتورة والإيصال الإلكتروني لمصلحة الضرائب (ETA)',
      'إدارة الحسابات العامة والمخازن والمشتريات والمبيعات من مكان واحد',
      'صلاحيات دقيقة لكل موظف (RBAC) مع سجل مراقبة لكل حركة (Audit Log)',
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
    title_ar: 'فحص واختبار البرمجيات قبل الاستلام (QA / UAT)',
    title_en: 'QA & User Acceptance Testing',
    description_ar:
      'فحص فني مستقل واختبار تحميل (Load Testing) للسيستم أو تطبيق الموبايل قبل ما توقع محضر الاستلام من شركة البرمجة.',
    description_en:
      'Independent functional, load, and security testing for software and mobile apps before vendor sign-off.',
    icon: 'CheckCircle2',
    useCaseStory_ar:
      'فحص فني مستقل لتطبيق موبايل وسيستم CRM قبل الاستلام النهائي من المطور وتوثيق كل الأخطاء قبل الإطلاق.',
    useCaseStory_en:
      'Conducted independent functional and load verification testing for a customer CRM before vendor handover.',
    features_ar: [
      'اختبار أداء السيستم تحت ضغط عدد كبير من المستخدمين في نفس الوقت',
      'فحص شامل لتطبيقات الويب وiOS وAndroid لكشف الأخطاء التشغيلية',
      'تقرير فني واضح بالملاحظات والمشاكل المطلوب تعديلها قبل الاستلام',
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
    title_ar: 'مواقع الشركات والبوابات الرقمية',
    title_en: 'Corporate Web Portals',
    description_ar:
      'تصميم وتطوير مواقع سريعة ومنظمة للشركات، مع نماذج لطلبات عروض الأسعار وربط مباشر بقنوات التواصل والـ CRM.',
    description_en:
      'Responsive websites and corporate portals with RFQ intake forms and business communication channels.',
    icon: 'Code',
    useCaseStory_ar:
      'بناء موقع رسمي لشركة مع نموذج لطلبات عروض الأسعار وتوجيهها مباشرة لفريق المبيعات.',
    useCaseStory_en:
      'Engineered a corporate portal capturing customer quote inquiries and routing them to sales.',
    features_ar: [
      'تصميم متجاوب وسريع على الموبايل والكمبيوتر',
      'تهيئة كاملة لمحركات البحث (SEO) وسرعة تحميل عالية',
      'لوحة تحكم سهلة تخلي فريقك يعدّل المحتوى ويضيف خدمات أو أخبار بنفسه',
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
    title_ar: 'تطبيقات الموبايل (iOS & Android)',
    title_en: 'iOS & Android Mobile Applications',
    description_ar:
      'تطوير تطبيقات موبايل مخصصة لإدارة المهام والحجوزات ومتابعة الفرق الميدانية، مربوطة مباشرة بقاعدة بيانات الشركة.',
    description_en:
      'Custom mobile apps for task tracking, reservations, and authenticated database integration.',
    icon: 'Smartphone',
    useCaseStory_ar:
      'تطوير تطبيق للعيادات يخلّي المرضى يحجزوا المواعيد ويستلموا نتائج التحاليل على الموبايل مباشرة.',
    useCaseStory_en:
      'Engineered a clinic mobile application enabling appointments and viewing medical results.',
    features_ar: [
      'أداء سلس على أجهزة آيفون (iOS) وأندرويد (Android)',
      'إشعارات فورية (Push Notifications) بحالة الطلبات والمواعيد',
      'ربط مشفر وآمن مباشرة مع قاعدة بيانات الشركة والـ API',
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
    title_ar: 'المتاجر الإلكترونية (E-Commerce)',
    title_en: 'E-Commerce Storefronts',
    description_ar:
      'متجر إلكتروني مربوط ببوابات الدفع في مصر وشركات الشحن، مع خصم وتحديث أوتوماتيك لكميات المخزن مع كل طلب.',
    description_en:
      'Online store platforms integrated with Egyptian payment gateways, couriers, and automated stock sync.',
    icon: 'ShoppingBag',
    useCaseStory_ar:
      'تطوير متجر إلكتروني مربوط بالدفع بالبطاقات وإصدار بوالص الشحن أوتوماتيك مع تحديث رصيد المخزن.',
    useCaseStory_en:
      'Developed an e-commerce storefront connected with local payment gateways and courier dispatch.',
    features_ar: [
      'ربط مباشر مع بوابات الدفع بالبطاقات والمحافظ الإلكترونية',
      'ربط أوتوماتيك مع شركات الشحن لإصدار البوالص وتتبع الطلبات',
      'تحديث لحظي لرصيد المنتجات في المخزن مع كل أوردر',
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
    title_ar: 'تصميم واجهات الأنظمة (UI / UX)',
    title_en: 'UI/UX Interface Design',
    description_ar:
      'تصميم شاشات ومسارات عمل واضحة للأنظمة الإدارية والطبية عشان تقلل أخطاء الإدخال وتسرّع شغل الموظفين.',
    description_en:
      'User flow and screen design for internal business systems to reduce data entry errors and friction.',
    icon: 'Layout',
    useCaseStory_ar:
      'إعادة تصميم شاشات الاستقبال والحجز لمركز طبي لتسهيل إدخال بيانات المرضى وتقليل زحمة الانتظار.',
    useCaseStory_en:
      'Redesigned reception workflows to speed up patient intake and prevent entry errors.',
    features_ar: [
      'تصميم شاشات عملية تقلل خطوات الشغل وأخطاء إدخال البيانات',
      'نماذج تفاعلية (Prototypes) تتجرّب مع فريقك قبل ما نبدأ برمجة',
      'تصميم متكامل يدعم العربي والإنجليزي والوضعين الفاتح والداكن',
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
    name_ar: 'باقة البداية',
    subtitle_en: 'Clinic · Office · Small Business',
    subtitle_ar: 'عيادة · مكتب · شركة صغيرة',
    badge_en: 'Fixed Pricing',
    badge_ar: 'سعر واضح',
    price_setup_egp: 'تكلفة التأسيس: 15,000 – 25,000 ج.م',
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
      'شبكة Structured Cabling حتى 15 نقطة',
      'حجز الدومين وضبط سجلات الـ DNS',
      '10 إيميلات رسمية باسم الشركة بتوثيق SPF/DKIM/DMARC',
      'ضبط Firewall وقفل المنافذ غير المستخدمة',
    ],
    details_en: [
      'Structured cabling for up to 15 network drops',
      'Corporate domain registration and DNS record configuration',
      '10 corporate mailboxes with SPF, DKIM, and DMARC enforcement',
      'Firewall configuration closing unused ports',
    ],
    details_ar: [
      'شبكة Structured Cabling حتى 15 نقطة',
      'حجز الدومين وضبط سجلات الـ DNS',
      'تجهيز 10 إيميلات رسمية باسم الشركة بتوثيق SPF وDKIM وDMARC',
      'ضبط Firewall وقفل المنافذ غير المستخدمة',
    ],
  },
  {
    id: 'business',
    name_en: 'Growth',
    name_ar: 'باقة النمو',
    subtitle_en: 'Up to 50 users · Up to 3 Access Points',
    subtitle_ar: 'حتى 50 مستخدم · حتى 3 أجهزة Wi-Fi AP',
    badge_en: 'Most Popular',
    badge_ar: 'الأكثر طلباً',
    price_setup_egp: 'تكلفة التأسيس: من 45,000 ج.م',
    price_monthly_egp: 'شاملة عقد صيانة ودعم SLA لمدة 3 شهور',
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
      'شبكة Structured Cabling وتجميع وتنظيم Rack',
      'تركيب Firewall وتقسيم الشبكة عبر VLANs',
      'تركيب حتى 3 أجهزة Wi-Fi احترافية (Access Points)',
      'عقد صيانة ودعم فني (SLA) لمدة 3 شهور',
    ],
    details_en: [
      'Structured cabling and rack termination',
      'Hardware firewall installation and VLAN segmentation',
      'Up to 3 enterprise Wi-Fi Access Points',
      '3-month post-handover SLA support retainer',
    ],
    details_ar: [
      'شبكة Structured Cabling وتجميع وتنظيم Rack',
      'تركيب Firewall وتقسيم VLANs لفصل شبكة الشغل والحسابات',
      'تركيب حتى 3 أجهزة Wi-Fi احترافية (Access Points)',
      'عقد صيانة ودعم فني (SLA) لمدة 3 شهور بعد التسليم',
    ],
  },
  {
    id: 'professional',
    name_en: 'Multi-Branch',
    name_ar: 'باقة الفروع المتعددة',
    subtitle_en: 'Up to 100 users · Secure multi-branch interconnection',
    subtitle_ar: 'حتى 100 مستخدم · ربط آمن بين الفروع',
    badge_en: 'Site Survey',
    badge_ar: 'معاينة ميدانية',
    price_setup_egp: 'تكلفة التأسيس: من 75,000 ج.م',
    price_monthly_egp: 'تسعير دقيق بعد معاينة المقر',
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
      'إيميلات رسمية حتى 100 حساب بتوثيق DMARC',
      'تجهيز سيرفر رووم مصغرة أو Rack مركزي منظم',
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
      'إيميلات رسمية حتى 100 حساب بتوثيق DMARC',
      'تجهيز سيرفر رووم مصغرة أو Rack مركزي منظم',
      'عقد صيانة ودعم دوري وفق SLA',
    ],
  },
  {
    id: 'enterprise',
    name_en: 'Enterprise',
    name_ar: 'باقة الشركات الكبرى',
    subtitle_en: '100+ users · Full building & multi-branch coverage',
    subtitle_ar: 'أكتر من 100 مستخدم · تغطية مباني وفروع متعددة',
    badge_en: 'Custom Scope',
    badge_ar: 'حسب المعاينة',
    price_setup_egp: 'حسب المعاينة الميدانية',
    price_monthly_egp: 'عرض سعر فني مفصّل مكتوب بعد المعاينة',
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
      'تصميم وتجهيز سيرفر رووم (Server Room) وخطوط طاقة احتياطية',
      'Site-to-Site VPN بين المقرات مع خطين إنترنت للـ Failover',
      'مهندس مقيم أو عقد تشغيل ودعم SLA مخصص',
      'ملف توثيق كامل للشبكة (As-Built) ومحضر استلام فني',
    ],
    details_en: [
      'Turnkey server room fit-out and redundant power sizing',
      'Site-to-Site VPN across all offices with dual-ISP failover',
      'Dedicated resident engineer or tailored SLA operations retainer',
      'Complete As-Built infrastructure runbook and handover documentation',
    ],
    details_ar: [
      'تصميم وتجهيز سيرفر رووم (Server Room) وخطوط طاقة احتياطية',
      'Site-to-Site VPN بين المقرات والفروع مع خطين إنترنت للـ Failover',
      'مهندس مقيم أو عقد تشغيل ودعم (SLA) مخصص',
      'ملف توثيق كامل للشبكة (As-Built) ومحضر استلام فني',
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
      '4 vCPU Cores (معالجات AMD EPYC / Xeon)',
      '8 GB رامات DDR4 ECC',
      '75 GB هارد NVMe فائق السرعة',
      '1 Snapshot + ترافيك شهري 32 TB',
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
      '6 vCPU Cores (معالجات AMD EPYC / Xeon)',
      '16 GB رامات DDR4 ECC',
      '100 GB هارد NVMe (RAID-10)',
      '2 Snapshots · ترافيك شهري 32 TB (1 Gbit/s)',
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
      '8 vCPU Cores (معالجات AMD EPYC / Xeon)',
      '24 GB رامات DDR4 ECC',
      '200 GB هارد NVMe (RAID-10)',
      '3 Snapshots · ترافيك شهري 32 TB (1 Gbit/s)',
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
      '12 vCPU Cores (معالجات AMD EPYC / Xeon)',
      '48 GB رامات DDR4 ECC',
      '250 GB هارد NVMe (RAID-10)',
      '4 Snapshots · ترافيك شهري 32 TB (1 Gbit/s)',
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
    title_ar: 'عزل الشبكة الطبية وتركيب 180+ كاميرا 4K لمستشفى تخصصي',
    title_en: 'Medical Network Isolation & 4K IP Surveillance for Specialized Hospital',
    category_ar: 'الأمن السيبراني',
    category_en: 'Cybersecurity',
    client_ar: 'مستشفى تخصصي خاص — القاهرة',
    client_en: 'Private Specialized Hospital — Cairo',
    executiveSummary_ar:
      'تأسيس الشبكة والأمان لمستشفى تخصصي بالقاهرة: تركيب أكتر من 180 كاميرا مراقبة 4K، وFirewall Fortinet NGFW لعزل الأجهزة الطبية وغرف العمليات عن شبكة الضيوف، وتمديد فايبر وكابلات Cat6A، مع تأمين إيميلات المستشفى بـ SPF/DKIM/DMARC ودعم 24/7.',
    executiveSummary_en:
      'Sovereign IT security and network segmentation for a specialized Cairo hospital: 180+ 4K IP surveillance grid, Fortinet NGFW isolation between clinical wards and guest Wi-Fi, fiber/Cat6A cabling, and hardened corporate mail.',
    description_ar:
      'شبكة مراقبة 4K بأكتر من 180 كاميرا مع Firewall Fortinet وعزل VLAN وتمديدات فايبر Cat6A وتأمين الإيميلات الرسمية.',
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
      'وجود مناطق غير متغطية بالكاميرات داخل الطوارئ والصيدلية المركزية بدون تسجيل عالي الدقة.',
      'كابلات شبكة قديمة كانت بتسبب بطء في نقل صور الأشعة لغرف العمليات والعيادات.',
      'تداخل الأجهزة الطبية مع شبكة الموبايل والضيوف وغياب حماية حقيقية لإيميلات المستشفى.',
    ],
    challenges_en: [
      'Monitoring blind spots in emergency corridors and central pharmacy lacking audited video trails.',
      'Legacy network cabling introducing packet loss during heavy radiological file transfers.',
      'Clinical terminals sharing network broadcast domains with general facility access.',
    ],
    solution_ar: [
      'عزل ترافيك غرف العمليات والأشعة عبر VLANs وفايروول Fortinet (NGFW) مع VPN مشفر للأطباء.',
      'تمديد فايبر وكابلات Cat6A وتركيب 180+ كاميرا 4K مربوطة بأجهزة NVR RAID-6 لتسجيل 90 يوم.',
      'نقل وتوثيق 200+ إيميل طبي بسجلات SPF وDKIM وDMARC مع إدارة ومراقبة دورية بعقد SLA.',
    ],
    solution_en: [
      'Implemented strict VLAN segmentation and Fortinet NGFW policies isolating surgical and imaging networks.',
      'Deployed fiber backbone, Cat6A cabling, and 180+ 4K cameras backed by redundant RAID-6 NVR storage.',
      'Migrated and hardened 200+ corporate mailboxes under SPF/DKIM/DMARC with continuous SLA operations.',
    ],
    deliverables_ar: [
      'شبكة كاميرات مراقبة 4K (180+ كاميرا) وأجهزة تسجيل NVR RAID-6',
      'شبكة كابلات فايبر وCat6A منظمة ومختبرة',
      'فايروول Fortinet NGFW مع تقسيم VLANs وVPN مشفر',
      'إيميلات طبية رسمية موثّقة بسجلات SPF/DKIM/DMARC',
      'تشغيل ومتابعة دورية ضمن خدمة IT as a Service بعقد SLA',
    ],
    deliverables_en: [
      '180+ 4K IP Surveillance Grid & Redundant NVR RAID-6 Cluster',
      'Structured Fiber & Cat6A Network Cabling',
      'Fortinet NGFW Security Perimeter & Zero-Trust VLAN Segmentation',
      'Hardened Corporate Email System with SPF/DKIM/DMARC',
      'Managed Operations under IT as a Service SLA',
    ],
    result_ar:
      'فصل تام لشبكة العمليات والأشعة عبر VLANs وفايروول Fortinet، مع تغطية كاميرات 4K مسجّلة لمدة 90 يوم.',
    result_en:
      'VLAN and Fortinet NGFW isolation for clinical networks backed by 90-day 4K NVR retention.',
    icon: 'Shield',
  },
  {
    id: 2,
    badge: 'FINANCIAL CONSULTING CLIENT',
    title_ar: 'سيرفرات Cloud VPS خاصة وتأمين إيميلات مكتب استشارات مالية',
    title_en: 'Private Cloud Hosting & Email Management for Financial Consultancy',
    category_ar: 'السحابة والاستضافة',
    category_en: 'Cloud & Servers',
    client_ar: 'مكتب استشارات مالية ومحاسبية — القاهرة',
    client_en: 'Financial & Audit Consultancy — Cairo',
    executiveSummary_ar:
      'نقل برامج المحاسبة والمراجعة على سيرفرات Cloud VPS معزولة بهاردات NVMe لتشغيل 30 مراجع مالي في نفس الوقت عبر دخول مشفر، مع تأمين 150+ إيميل رسمي وBackup يومي معزول.',
    executiveSummary_en:
      'Migrated mission-critical financial audit workflows to an NVMe KVM private cloud supporting 30 concurrent auditors, 150+ hardened corporate mailboxes, and automated daily off-site backups.',
    description_ar:
      'سيرفرات Cloud VPS لتشغيل برامج المراجعة والـ ERP لـ 30 مراجع متزامن مع تأمين 150+ إيميل رسمي وBackup يومي.',
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
      'بطء برامج المحاسبة على الأجهزة العادية وصعوبة دخول المراجعين لقواعد البيانات من مقرات العملاء.',
      'دخول الإيميلات والتقارير المالية في الـ Spam بسبب غياب سجلات التوثيق الرسمية للدومين.',
      'خطورة حفظ ملفات العملاء على هاردات مكتبية عادية بدون Backup أوتوماتيك.',
    ],
    challenges_en: [
      'Local PC bottlenecks preventing auditors from safely accessing shared financial ledgers off-site.',
      'Unauthenticated outbound audit reports flagged by external mail filters.',
      'Data loss exposure across unbacked workstation hard drives.',
    ],
    solution_ar: [
      'تجهيز سيرفرات Cloud VPS بهاردات NVMe تدعم دخول 30 مستشار ومراجع مالي في نفس الوقت بشكل مشفر.',
      'نقل وتأمين 150+ إيميل رسمي بضبط SPF وDKIM وDMARC مع Backup يومي مشفر خارج المقر.',
    ],
    solution_en: [
      'Provisioned high-IOPS NVMe KVM instances supporting encrypted multi-session access for 30 concurrent auditors.',
      'Hardened 150+ mailboxes under SPF/DKIM/DMARC and enacted automated daily encrypted cloud snapshots.',
    ],
    deliverables_ar: [
      'سيرفرات Cloud VPS بهاردات NVMe لتشغيل البرامج المالية والـ ERP',
      'نقل وتأمين 150+ إيميل رسمي بضبط DMARC',
      'Backup يومي مشفر ومعزول خارج المقر',
      'إدارة ومتابعة مستمرة ضمن عقد IT as a Service',
    ],
    deliverables_en: [
      'High-IOPS Enterprise Cloud Hosting for Financial ERP Suites',
      '150+ Corporate Financial Mailboxes Hardened via DMARC',
      'Automated Daily Encrypted Off-Site Backup Pipeline',
      '24/7 Managed Infrastructure Operations (ITaaS)',
    ],
    result_ar:
      'شغل مركزي مستقر لـ 30 مراجع في نفس الوقت على سيرفر Cloud VPS معزول، وتوثيق 150+ إيميل رسمي مع Backup يومي.',
    result_en:
      'Stable concurrent ERP access for 30 auditors on an isolated NVMe server paired with 150+ hardened mailboxes.',
    icon: 'Lock',
  },
  {
    id: 3,
    badge: 'STRATEGIC CASE STUDY',
    title_ar: 'فصل أرشيف الأشعة الطبية (PACS) وتجهيز Hybrid Cloud لمركز أورام',
    title_en: 'Medical PACS Archiving & Hybrid Cloud Storage for Oncology Center',
    category_ar: 'السحابة والاستضافة',
    category_en: 'Cloud & Servers',
    client_ar: 'مركز طبي تخصصي للأورام — القاهرة',
    client_en: 'Specialized Oncology Center — Cairo',
    executiveSummary_ar:
      'إعادة تنظيم البنية التحتية لمركز أورام بفصل ملفات الأشعة الضخمة (DICOM PACS) عن الإيميلات، وتجهيز سيرفر تخزين محلي سريع بهاردات NVMe مع Backup سحابي مشفر (Hybrid Cloud).',
    executiveSummary_en:
      'Decoupled heavy diagnostic DICOM PACS archives from corporate mail onto dedicated local NVMe storage backed by AES-256 encrypted hybrid cloud replication.',
    description_ar:
      'فصل أرشيف الأشعة PACS على سيرفر محلي سريع، ونقل 120 إيميل طبي مع Backup سحابي مشفر.',
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
      'امتلاء مساحات الإيميلات بسرعة بسبب إرسال ملفات الأشعة الضخمة كمرفقات في الرسايل.',
      'بطء أجهزة العيادات أثناء فتح الـ Outlook وارتفاع تكلفة مساحات التخزين السحابية الخارجية.',
      'الاحتياج لحفظ آمن ومستقر لملفات المرضى بنسخ احتياطي معزول ضد أي تلف.',
    ],
    challenges_en: [
      'Severe mailbox bloat from exchanging multi-megabyte DICOM scan attachments over corporate email.',
      'Clinical workstation lag during inbox indexing alongside mounting external storage costs.',
      'Strict requirement for tamper-resistant clinical data backup and recovery.',
    ],
    solution_ar: [
      'فصل أرشيف الأشعة PACS عن الإيميل وتجهيز سيرفر تخزين محلي بهاردات NVMe جوه شبكة المركز.',
      'نقل 120 إيميل طبي على سيرفر خاص وتفعيل Backup سحابي هجين مشفر بتقنية AES-256.',
    ],
    solution_en: [
      'Decoupled DICOM PACS storage onto high-speed local NVMe arrays accessible over clinical LAN.',
      'Migrated 120 physician mailboxes onto hardened servers with encrypted AES-256 hybrid cloud backups.',
    ],
    deliverables_ar: [
      'سيرفر تخزين محلي سريع بهاردات NVMe لأرشيف الأشعة (DICOM PACS)',
      'نقل وتأمين 120 إيميل طبي رسمي',
      'Backup سحابي هجين مشفر AES-256',
      'إدارة ومتابعة دورية ضمن IT as a Service',
    ],
    deliverables_en: [
      'Local High-Speed NVMe DICOM PACS Archiving Node',
      '120 Migrated & Hardened Clinical Email Accounts',
      'Encrypted AES-256 Hybrid Cloud Backup Pipeline',
      'Continuous Monitoring & Managed Support (ITaaS)',
    ],
    result_ar:
      'فصل أرشيف الأشعة على سيرفر محلي سريع مع Backup سحابي مشفر ونقل 120 إيميل بدون فقدان أي رسالة.',
    result_en:
      'Decoupled medical imaging onto local NVMe storage with encrypted cloud replication and 120 stabilized mailboxes.',
    icon: 'Shield',
  },
  {
    id: 4,
    badge: 'HOSPITAL INFRASTRUCTURE & PR',
    title_ar: 'دمج سيرفرات (HA Cluster) وسيستم علاقات المرضى لمستشفى جراحي',
    title_en: 'High-Availability Virtualization & Patient Relations System for Hospital',
    category_ar: 'الشبكات والبنية التحتية',
    category_en: 'Infrastructure & Networks',
    client_ar: 'مستشفى جراحي وتخصصي — القاهرة',
    client_en: 'Surgical & Specialized Hospital — Cairo',
    executiveSummary_ar:
      'تحديث شامل للبنية التحتية والأنظمة في مستشفى جراحي: دمج السيرفرات في HA Cluster، تمديد فايبر وكابلات Cat6A، فايروول Fortinet NGFW، مع تطوير موقع وبوابة المرضى وسيستم علاقات المرضى (PR) والموافقات الطبية.',
    executiveSummary_en:
      'Turnkey hospital modernization: High-Availability virtualization cluster, fiber/Cat6A backbone, Fortinet NGFW, Patient Relations (PR) suite, engineering ticketing, and insurance approvals engine.',
    description_ar:
      'دمج السيرفرات في HA Cluster وتطوير بوابة المرضى وسيستم علاقات المرضى (PR) والتذاكر والموافقات الطبية.',
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
      'سيرفرات فيزيائية متفرقة بدون Cluster موحد، فأي صيانة في جهاز واحد كانت بتوقف الخدمة.',
      'متابعة شكاوى المرضى والموافقات التأمينية وتذاكر الصيانة بشكل ورقي متشتت بين الأقسام.',
      'كابلات شبكة قديمة كانت بتسبب تقطيع متكرر في المعامل والعيادات.',
    ],
    challenges_en: [
      'Fragmented single physical servers lacking automated failover protection.',
      'Manual paper tracking for patient feedback, insurance approvals, and ward maintenance tickets.',
      'Aging cabling causing intermittent connectivity in diagnostic units.',
    ],
    solution_ar: [
      'بناء HA Virtualization Cluster مع شبكة فايبر وكابلات Cat6A وفايروول Fortinet NGFW.',
      'إطلاق بوابة المستشفى، وسيستم علاقات المرضى (PR System)، وسيستم تذاكر الصيانة والموافقات التأمينية.',
    ],
    solution_en: [
      'Consolidated physical workloads onto an HA virtualization cluster behind fiber uplinks and Fortinet NGFW.',
      'Built unified hospital web portal, Patient Relations suite, service desk ticketing, and approvals workflows.',
    ],
    deliverables_ar: [
      'موقع المستشفى الرسمي وبوابة حجز المرضى',
      'سيستم إدارة علاقات المرضى (Patient Relations / PR)',
      'سيستم تذاكر الصيانة للأجهزة الطبية والهندسية',
      'سيستم الموافقات الطبية والتأمينية',
      'بيئة Virtualization عالية الاستقرار (HA Cluster)',
      'شبكة فايبر وكابلات Cat6A وفايروول Fortinet NGFW',
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
      'توحيد السيرفرات في HA Cluster، وتحديث شبكة الفايبر والـ Firewall، وتشغيل بوابة المرضى والموافقات بشكل مركزي.',
    result_en:
      'Unified hospital servers onto HA virtualization clusters alongside modernized fiber cabling and integrated patient workflows.',
    icon: 'Building2',
  },
  {
    id: 5,
    badge: 'COMPREHENSIVE ERP',
    title_ar: 'سيستم ERP وسجلات طبية إلكترونية (EMR) لمستشفى عام وتخصصي',
    title_en: 'Clinical & Operational Hospital ERP & EMR Suite',
    category_ar: 'البرمجيات وأنظمة الإدارة',
    category_en: 'Software & ERP',
    client_ar: 'مستشفى عام وتخصصي — الجيزة',
    client_en: 'General & Specialized Hospital — Giza',
    executiveSummary_ar:
      'تطوير سيستم ERP وسجلات طبية (EMR) موحد لربط حجز العيادات والعمليات، وملفات المرضى الرقمية، ومطالبات التأمين، والصيدلية المركزية، وجداول نوبتجيات الأطباء والتمريض.',
    executiveSummary_en:
      'Enterprise hospital ERP and EMR platform uniting clinic scheduling, Electronic Medical Records, insurance billing, central pharmacy dispensing, and shift management.',
    description_ar:
      'سيستم ERP وسجلات طبية موحدة تشمل الحجز، الصيدلية المركزية، فواتير التأمين، وجداول الـ HR.',
    description_en:
      'Hospital ERP and EMR suite handling appointment scheduling, billing clearing, and pharmacy inventory control.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Docker', 'Hospital EMR', 'HL7/FHIR'],
    challenges_ar: [
      'بطء تسجيل المرضى وزحمة الاستقبال بسبب الشغل على أكتر من برنامج منفصلين عن بعض.',
      'صعوبة مطابقة أرصدة الأدوية والمستلزمات الجراحية بين الصيدلية والمخزن الرئيسي.',
    ],
    challenges_en: [
      'Outpatient desk delays caused by disconnected billing, reception, and pharmacy programs.',
      'Manual reconciliation difficulties tracking medication batches across wards and central stock.',
    ],
    solution_ar: [
      'بناء قاعدة بيانات موحدة بـ PostgreSQL وRedis بتربط الحجوزات، السجلات الطبية (EMR)، الصيدلية، وحسابات التأمين.',
    ],
    solution_en: [
      'Engineered a unified PostgreSQL & Redis backend orchestrating EMR records, clinic queues, pharmacy, and billing.',
    ],
    deliverables_ar: [
      'نظام حجز العيادات وجدولة غرف العمليات',
      'السجلات الطبية الإلكترونية الموحدة (EMR)',
      'نظام فواتير المرضى ومطابقة التأمين الطبي',
      'إدارة الصيدلية المركزية ومخزون المستلزمات الطبية',
      'إدارة الـ HR وجداول نوبتجيات الأطباء والتمريض',
    ],
    deliverables_en: [
      'Outpatient Clinic & Surgical Scheduling Module',
      'Unified Electronic Medical Records (EMR)',
      'Automated Billing & Insurance Claims Clearing',
      'Central Pharmacy Inventory & Expiry Governance',
      'Clinical Workforce & Shift Rotation Module',
    ],
    result_ar:
      'ربط دورة الشغل بالكامل من الاستقبال للصيدلية والفواتير والتأمين على قاعدة بيانات واحدة.',
    result_en:
      'Unified clinical operations from patient check-in through pharmacy dispensing and billing inside one database.',
    icon: 'Activity',
  },
  {
    id: 6,
    badge: 'TAX & ACCOUNTING CLIENT',
    title_ar: 'تأمين 500+ إيميل رسمي واستضافة برامج الضرائب لمؤسسة محاسبة',
    title_en: 'Corporate Email Hardening & Cloud Tax Systems for Accounting Firm',
    category_ar: 'السحابة والاستضافة',
    category_en: 'Cloud & Servers',
    client_ar: 'مؤسسة محاسبة واستشارات ضريبية — مصر',
    client_en: 'Tax & Accounting Consultancy Firm — Egypt',
    executiveSummary_ar:
      'نقل وتأمين أكتر من 500 إيميل رسمي لمؤسسة محاسبة وضرائب بضبط SPF/DKIM/DMARC، مع تشغيل برامج المحاسبة والضرائب لـ 25 مراجع على سيرفر Cloud VPS مخصص بـ Backup يومي معزول.',
    executiveSummary_en:
      'Migrated and secured 500+ mailboxes with strict SPF/DKIM/DMARC records while hosting central accounting workloads for 25 auditors on an isolated cloud VPS.',
    description_ar:
      'نقل وتأمين 500+ إيميل رسمي بتوثيق DMARC، وتشغيل برامج الضرائب والمحاسبة على Cloud VPS لـ 25 مراجع بـ Backup يومي.',
    description_en:
      'Hardened 500+ enterprise mailboxes and cloud-hosted accounting applications for 25 concurrent tax auditors.',
    tech: ['500+ Mail Migration', 'SPF / DKIM / DMARC', 'Cloud VPS Hosting', 'Automated Daily Backups', 'IT as a Service (ITaaS)'],
    challenges_ar: [
      'وصول الإيميلات والإخطارات الضريبية الرسمية في الـ Spam عند العملاء والجهات الخارجية.',
      'بطء تبادل الملفات المالية على شبكة المكتب وقت ضغط موسم الإقرارات الضريبية.',
    ],
    challenges_en: [
      'Critical tax notifications flagged as spam due to missing cryptographic email authentication.',
      'File-sharing slowdowns on local desktop hardware during peak tax compliance deadlines.',
    ],
    solution_ar: [
      'نقل 500+ إيميل على سيرفر خاص وتطبيق SPF وDKIM وDMARC مع تجهيز سيرفر Cloud VPS للمراجعين وBackup يومي.',
    ],
    solution_en: [
      'Executed staged migration of 500+ mailboxes with DMARC enforcement and deployed an isolated VPS with daily off-site snapshots.',
    ],
    deliverables_ar: [
      'نقل وتوثيق 500+ إيميل رسمي باسم الدومين',
      'سيرفر Cloud VPS لتشغيل برامج المحاسبة والضرائب لـ 25 مراجع',
      'Backup يومي مشفر لملفات وسجلات العملاء',
      'إدارة ودعم فني مستمر 24/7',
    ],
    deliverables_en: [
      '500+ Corporate Mailboxes Migrated & DMARC-Hardened',
      'Cloud Hosting for Tax & Audit Software',
      'Automated Daily Encrypted Off-Site Backups',
      'Managed 24/7 Infrastructure Support',
    ],
    result_ar:
      'توثيق أكتر من 500 إيميل رسمي وتشغيل البرامج الضريبية مركزياً على سيرفر Cloud VPS معزول بـ Backup يومي.',
    result_en:
      'Authenticated 500+ corporate email accounts and centralized tax software execution with encrypted daily recovery points.',
    icon: 'Mail',
  },
  {
    id: 7,
    badge: 'MAIL MIGRATION CLIENT',
    title_ar: 'نقل وتأمين 250+ إيميل طبي مع أرشفة سحابية لمجموعة عيادات',
    title_en: 'Medical Email Migration & Encrypted Archiving for Clinics Group',
    category_ar: 'الأمن السيبراني',
    category_en: 'Cybersecurity',
    client_ar: 'مجموعة مراكز وعيادات طبية — مصر',
    client_en: 'Healthcare Clinics Group — Egypt',
    executiveSummary_ar:
      'نقل مرحلي لأكتر من 250 إيميل للأطباء والإدارة على سيرفرات بريد خاصة مع تفعيل توثيق 2048-bit DKIM وسياسة DMARC وأرشفة سحابية مشفرة بدون توقف.',
    executiveSummary_en:
      'Staged IMAP cutover of 250+ physician and staff mailboxes to sovereign private mail clusters with 2048-bit DKIM, DMARC reject policy, and encrypted cloud archiving.',
    description_ar:
      'نقل 250+ إيميل طبي مع توثيق DKIM 2048-bit وحماية DMARC وأرشفة مشفرة للإيميلات.',
    description_en:
      'Private cloud mail migration of 250+ medical mailboxes with cryptographic DKIM signing and archiving.',
    tech: ['Private Mail Server', 'DMARC Enforcement', 'DKIM 2048-bit', 'SPF Records', 'Encrypted Archiving', 'IT as a Service'],
    challenges_ar: [
      'انقطاعات متكررة في سيرفر الإيميل القديم ومحاولات انتحال لإيميلات الإدارة.',
      'ضيق المساحة على 250 حساب إيميل طبي وعدم وجود أرشفة مركزية منظمة.',
    ],
    challenges_en: [
      'Legacy mail service interruptions alongside domain spoofing threats.',
      'Inbox quota bottlenecks across 250 accounts lacking structured legal mail journaling.',
    ],
    solution_ar: [
      'مزامنة مرحلية عبر IMAP/TLS لـ 250 حساب إيميل وتطبيق SPF وDKIM وDMARC مع أرشفة سحابية مشفرة.',
    ],
    solution_en: [
      'Executed staged IMAP sync into private mail infrastructure enforcing SPF, 2048-bit DKIM, DMARC reject, and encrypted journaling.',
    ],
    deliverables_ar: [
      'مزامنة ونقل 250+ إيميل طبي بدون فقدان أي رسالة',
      'ضبط سجلات SPF وDKIM 2048-bit وDMARC',
      'أرشفة سحابية مشفرة لإيميلات الأطباء والإدارة',
    ],
    deliverables_en: [
      'Staged Migration of 250+ Clinical Mailboxes',
      'SPF, 2048-bit DKIM & DMARC Hardening',
      'Encrypted Cloud Mail Journaling & Retention',
    ],
    result_ar:
      'نقل آمن لـ 250 إيميل طبي على سيرفرات خاصة مع سياسة DMARC صارمة وأرشفة سحابية مشفرة.',
    result_en:
      'Staged cutover of 250 clinical mailboxes under strict anti-spoofing authentication and encrypted archiving.',
    icon: 'Mail',
  },
  {
    id: 8,
    badge: 'MAIL MIGRATION CLIENT',
    title_ar: 'حماية الدومين التجاري ومنع تزوير الفواتير لشركة شحن دولي',
    title_en: 'Domain Brand Protection & Anti-Phishing Hardening for Freight Firm',
    category_ar: 'الأمن السيبراني',
    category_en: 'Cybersecurity',
    client_ar: 'شركة خدمات لوجستية وشحن دولي — مصر',
    client_en: 'Freight & Logistics Enterprise — Egypt',
    executiveSummary_ar:
      'حماية دومين شركة شحن دولي من انتحال الفواتير بتطبيق سياسة DMARC Reject وتوقيع DNSSEC ونقل 120 إيميل تجاري ببروتوكول TLS 1.3.',
    executiveSummary_en:
      'Protected commercial domain reputation against spoofed freight billing via DMARC reject, DNSSEC signing, and TLS 1.3 mail hardening across 120 logistics inboxes.',
    description_ar:
      'حماية الدومين بـ DNSSEC وDMARC Reject وتأمين 120 إيميل تجاري ضد رسايل التصيد.',
    description_en:
      'DNSSEC and DMARC brand protection paired with anti-phishing filters for 120 freight mailboxes.',
    tech: ['Anti-Phishing Shield', 'DMARC Quarantine/Reject', 'Cloud Mail Archiving', 'DNSSEC', 'IMAP/SMTP TLS 1.3'],
    challenges_ar: [
      'محاولات إرسال فواتير شحن مزوّرة لعملاء برّه مصر باسم دومين الشركة.',
      'وصول مرفقات وروابط تصيد خبيثة على إيميلات موظفي التخليص الجمركي.',
    ],
    challenges_en: [
      'Unauthorized third-party senders spoofing the freight domain to target international buyers.',
      'Phishing links targeting customs clearance teams via uninspected attachments.',
    ],
    solution_ar: [
      'تفعيل سياسة DMARC Reject وتوقيع DNSSEC ونقل 120 إيميل خلف فلتر فحص التهديدات الواردة.',
    ],
    solution_en: [
      'Enforced DMARC p=reject and DNSSEC domain authentication, routing 120 mailboxes through TLS 1.3 threat inspection.',
    ],
    deliverables_ar: [
      'حماية الدومين بسياسات DNSSEC وDMARC Reject',
      'نقل وتأمين 120 إيميل تجاري عبر TLS 1.3',
      'أرشفة مشفرة لإيميلات الشحن وفلترة مستمرة ضد التصيد',
    ],
    deliverables_en: [
      'DNSSEC & DMARC Reject Domain Protection',
      '120 TLS 1.3 Hardened Commercial Mailboxes',
      'Audited Mail Archiving & Inbound Filtering',
    ],
    result_ar:
      'منع محاولات انتحال الدومين وتزوير فواتير الشحن واستقرار كامل في إيميلات العملاء الدوليين.',
    result_en:
      'Blocked unauthorized domain spoofing worldwide while securing trade communication channels.',
    icon: 'Shield',
  },
  {
    id: 9,
    badge: 'FLEET IOT & TELEMETRY',
    title_ar: 'منصة تتبع أسطول النقل وحساسات الوقود (IoT) لشركة نقل بري',
    title_en: 'IoT Fleet Telemetry & Dispatch Platform for Transport Operator',
    category_ar: 'البرمجيات وأنظمة الإدارة',
    category_en: 'Software & ERP',
    client_ar: 'شركة نقل بري وإدارة أساطيل — مصر',
    client_en: 'Overland Transport & Fleet Operator — Egypt',
    executiveSummary_ar:
      'سيستم تتبع لحظي لحركة الشاحنات بين المحافظات عبر أجهزة GPS وحساسات وقود مربوطة ببروتوكول MQTT، مع تطبيق موبايل للسائقين ولوحة عمليات مركزية.',
    executiveSummary_en:
      'IoT telemetry platform streaming truck GPS coordinates and fuel sensor readings via MQTT to an operations console and driver mobile app.',
    description_ar:
      'ربط أجهزة GPS وحساسات الوقود عبر MQTT مع تطبيق للسائقين ولوحة تشغيل لمتابعة الرحلات لحظياً.',
    description_en:
      'MQTT GPS and fuel sensor telemetry integrated with a driver dispatch app and operations console.',
    tech: ['React Native', 'Node.js', 'PostgreSQL', 'MQTT IoT', 'Live Telemetry Dashboard', 'Mapbox', 'IT as a Service'],
    challenges_ar: [
      'غياب رؤية لحظية لمسارات الشاحنات بين المحافظات ومعدلات استهلاك الوقود.',
      'الاعتماد على المكالمات التليفونية اليدوية في تنسيق تحركات السائقين والشحنات.',
    ],
    challenges_en: [
      'Limited real-time visibility across highway freight movement and fuel usage discrepancies.',
      'Manual telephone dispatching delaying trip coordination across regional hubs.',
    ],
    solution_ar: [
      'بناء سيرفر استقبال MQTT لبث بيانات الـ GPS والوقود على قاعدة PostgreSQL ولوحة عمليات وتطبيق سائقين.',
    ],
    solution_en: [
      'Built an MQTT telemetry ingestion pipeline feeding PostgreSQL analytics, a dispatch console, and React Native driver app.',
    ],
    deliverables_ar: [
      'بنية استقبال البيانات الحية لأجهزة الـ GPS وحساسات الوقود (MQTT)',
      'تطبيق موبايل للسائقين لإدارة أوامر التشغيل',
      'لوحة عمليات مركزية وتقارير الرحلات والوقود',
      'تشغيل ومراقبة السيرفرات السحابية للمنصة',
    ],
    deliverables_en: [
      'GPS & Fuel Sensor MQTT Telemetry Ingestion Grid',
      'React Native Driver Dispatch Mobile Application',
      'Central Operations Map & Fuel Reporting Console',
      'Ongoing Managed Cloud Operations',
    ],
    result_ar:
      'متابعة لحظية لحركة الشاحنات واستهلاك الوقود من لوحة عمليات واحدة وتطبيق موبايل للسائقين.',
    result_en:
      'Centralized live vehicle location and fuel telemetry inside a unified dispatch dashboard.',
    icon: 'Truck',
  },
  {
    id: 10,
    badge: 'CHARITY FOUNDATION IT',
    title_ar: 'تجهيز شبكة Cat6A وActive Directory وسنترال VoIP لمؤسسة أهلية',
    title_en: 'Turnkey Cabling, Active Directory & VoIP PBX for Non-Profit Foundation',
    category_ar: 'الشبكات والبنية التحتية',
    category_en: 'Infrastructure & Networks',
    client_ar: 'مؤسسة عمل أهلي وتنموي — القاهرة',
    client_en: 'Non-Profit Development Foundation — Cairo',
    executiveSummary_ar:
      'تجهيز كامل لمقر مؤسسة تنموية: كابلات Cat6A منظمة، سيرفر Active Directory وDHCP، سيرفر ملفات بصلاحيات الأقسام، سنترال VoIP، كاميرات CCTV، وتغطية Wi-Fi احترافية مع Backup يومي.',
    executiveSummary_en:
      'Turnkey infrastructure for a Cairo non-profit foundation: Cat6A structured cabling, Active Directory & DHCP, RBAC File Server, VoIP PBX telephony, HD IP CCTV surveillance, Wi-Fi AP mesh, and automated off-site backups.',
    description_ar:
      'شبكة Cat6A، سيرفر Active Directory، وFile Server، وسنترال VoIP، وكاميرات CCTV، وBackup يومي مشفر.',
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
      'ملفات وأبحاث المستفيدين كانت متوزعة على أجهزة الموظفين بدون دومين مركزي أو صلاحيات واضحة.',
      'صعوبة التواصل التليفوني بين الإدارات وعدم وجود Backup أوتوماتيك للسجلات.',
    ],
    challenges_en: [
      'Beneficiary and administrative records dispersed across unmanaged individual computers.',
      'Lack of unified internal voice extensions and automated daily off-site backups.',
    ],
    solution_ar: [
      'تمديد شبكة Cat6A وتنظيم الراكات، وتشغيل سيرفر Active Directory وFile Server بصلاحيات الأقسام وسنترال VoIP.',
    ],
    solution_en: [
      'Installed Cat6A cabling, Active Directory & DHCP governance, RBAC File Server, VoIP extensions, CCTV, and daily backups.',
    ],
    deliverables_ar: [
      'شبكة Cat6A منظمة وسيرفر Active Directory & DHCP',
      'شبكة كاميرات مراقبة CCTV وجهاز تسجيل NVR مركزي',
      'سنترال تليفوني رقمي داخلي (VoIP PBX)',
      'سيرفر ملفات مركزي (File Server) بصلاحيات محددة لكل قسم',
      'Backup يومي مشفر وتغطية Wi-Fi احترافية في المقر',
    ],
    deliverables_en: [
      'Cat6A Structured Cabling & Active Directory Domain Controller',
      'HD IP CCTV Surveillance Grid & Central NVR',
      'VoIP IP-PBX Internal Telephony Extensions',
      'Centralized Role-Based File Server',
      'Automated Daily Off-Site Backup & Enterprise Wi-Fi Mesh',
    ],
    result_ar:
      'توحيد صلاحيات الموظفين ومشاركة الملفات بأمان عبر Active Directory مع سنترال داخلي وBackup يومي.',
    result_en:
      'Centralized domain access governance, secure departmental file sharing, unified VoIP extensions, and scheduled backups.',
    icon: 'Building2',
  },
  {
    id: 11,
    badge: 'ENTERPRISE CRM & QA',
    title_ar: 'فحص واختبار تحميل مستقل (QA & UAT) لمنصة CRM سحابية قبل الاستلام',
    title_en: 'Software QA, Load Testing & Vendor Handover Audit for Cloud CRM',
    category_ar: 'البرمجيات وأنظمة الإدارة',
    category_en: 'Software & ERP',
    client_ar: 'منصة سحابية لإدارة علاقات العملاء — مصر',
    client_en: 'Multi-Tenant Cloud CRM Platform — Egypt',
    executiveSummary_ar:
      'فحص جودة واختبارات قبول (QA & UAT) لمنصة CRM سحابية للمصانع والصيدليات وشركات الشحن قبل الاستلام من شركة التطوير: اختبار الويب، وتطبيقات الموبايل، ونظام المكالمات WebRTC، واختبارات التحمل والأمان.',
    executiveSummary_en:
      'Independent QA, load concurrency, and security acceptance audit prior to software vendor sign-off across a multi-tenant web CRM, native mobile builds, and embedded WebRTC calling.',
    description_ar:
      'اختبار منصة الويب وتطبيقات الموبايل ونظام المكالمات WebRTC وتجهيز تقرير الاستلام الفني.',
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
      'الحاجة لطرف فني محايد يفحص استقرار السيستم وتطبيقات الموبايل والمكالمات قبل توقيع محضر الاستلام.',
      'ضرورة كشف أي اختناق في قاعدة البيانات أو ثغرات في عزل صلاحيات الشركات المشتركة على المنصة.',
    ],
    challenges_en: [
      'Requirement for neutral engineering validation before signing final software vendor handover.',
      'Need to detect API concurrency bottlenecks and multi-tenant authorization leaks prior to launch.',
    ],
    solution_ar: [
      'تنفيذ اختبارات وظيفية شاملة (E2E) ومحاكاة ضغط مكالمات WebRTC ومراجعة صلاحيات قواعد البيانات والـ API.',
    ],
    solution_en: [
      'Executed E2E functional matrices, iOS/Android compatibility checks, WebRTC call load tests, and RBAC security audits.',
    ],
    deliverables_ar: [
      'مصفوفة اختبارات الجودة والقبول الوظيفي (QA & UAT)',
      'تقرير فحص منصة الويب وتطبيقات iOS وAndroid',
      'تقرير استقرار وجودة الصوت لنظام المكالمات المدمج WebRTC',
      'اختبارات الضغط والتحمل على قواعد البيانات والـ API',
      'تقرير الاعتماد النهائي قبل الاستلام من شركة التطوير',
    ],
    deliverables_en: [
      'Comprehensive End-to-End QA Test Matrix',
      'Certified Web Portal & Mobile Builds Review',
      'Embedded WebRTC Call Engine Stability Report',
      'API & Database Stress Concurrency Audit',
      'Formal Vendor Handover Sign-Off Dossier',
    ],
    result_ar:
      'رصد ومعالجة الأخطاء الحرجة قبل الإطلاق التجاري وإصدار تقرير الاعتماد الفني للاستلام.',
    result_en:
      'Documented and remediated critical defects prior to production launch, backing formal engineering sign-off.',
    icon: 'CheckCircle2',
  },
  {
    id: 12,
    badge: 'CLINIC EMR & Q-SYSTEM',
    title_ar: 'سيستم إدارة عيادة ونظام انتظار المرضى (Q-System) لعيادة عظام تخصصية',
    title_en: 'Clinic EMR & Integrated Patient Queue System for Specialized Clinic',
    category_ar: 'البرمجيات وأنظمة الإدارة',
    category_en: 'Software & ERP',
    client_ar: 'عيادة جراحة عظام ومفاصل تخصصية — القاهرة',
    client_en: 'Specialized Orthopedic Surgery Clinic — Cairo',
    executiveSummary_ar:
      'تجهيز سيستم عيادة متكامل يجمع ملفات المرضى الرقمية (EMR) وصور الأشعة، وطباعة الروشتات بالباركود، مع نظام تنظيم الانتظار وشاشات النداء الآلي (Q-System) المربوطة مباشرة بغرفة الكشف.',
    executiveSummary_en:
      'Turnkey orthopedic clinic EMR paired with an automated Patient Queue Management System (Q-System), waiting lounge calling displays, and barcode e-prescriptions.',
    description_ar:
      'سيستم إدارة عيادة وسجلات طبية (EMR) مربوط بنظام انتظار المرضى وشاشات النداء الآلي (Q-System).',
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
      'زحمة في صالة الانتظار وعدم وضوح ترتيب دخول المرضى للاستقبال وغرفة الكشف.',
      'وقت طويل ضايع في البحث اليدوي عن صور الأشعة وتقارير العمليات القديمة.',
    ],
    challenges_en: [
      'Waiting lounge crowding and disputes over appointment order without live queue displays.',
      'Slow manual lookup of historical orthopedic scans and surgical notes.',
    ],
    solution_ar: [
      'تركيب طابعة أرقام وشاشات عرض بصالة الانتظار مربوطة مباشرة بملف المريض الإلكتروني على شاشة الدكتور.',
    ],
    solution_en: [
      'Deployed thermal queue ticketing and calling displays synchronized with unified EMR patient profiles and e-prescription templates.',
    ],
    deliverables_ar: [
      'سيستم السجلات الطبية الإلكترونية للعيادة (EMR)',
      'نظام تنظيم الطوابير والانتظار (Q-System)',
      'شاشات العرض والنداء الآلي في صالة الانتظار',
      'طباعة الروشتات الإلكترونية بالباركود والتقارير المالية اليومية',
    ],
    deliverables_en: [
      'Clinic Electronic Medical Records (EMR) Suite',
      'Integrated Patient Queue Engine (Q-System)',
      'Waiting Room Calling Screens & Audio Integration',
      'Barcode E-Prescription & Financial Reconciliation Module',
    ],
    result_ar:
      'تنظيم دخول المرضى عبر شاشات النداء الآلي وسرعة استرجاع السجل الطبي وصور الأشعة أثناء الكشف.',
    result_en:
      'Structured waiting room patient flow paired with rapid clinical retrieval of historical scans and records.',
    icon: 'Activity',
  },
];

export const NUZUL_TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name_en: 'Clinic Operations Lead',
    name_ar: 'مدير تشغيل العيادة',
    role_en: 'Consultant Orthopedic Surgery Practice',
    role_ar: 'عيادة جراحة عظام تخصصية',
    company_en: 'Healthcare Sector — Cairo',
    company_ar: 'قطاع طبي — القاهرة',
    text_en:
      'Connecting the clinic EMR directly with the waiting-lounge Q-System organized patient flow from reception to the doctor room, and pulling up old scans or printing prescriptions became fast and clear.',
    text_ar:
      'ربط سيستم العيادات (EMR) مع نظام الدور والشاشات (Q-System) ظبط دخول المرضى من الاستقبال لأوضة الكشف، وبقى فتح الأشعات القديمة وطباعة الروشتة أسرع وأوضح بكتير.',
  },
  {
    id: 'test-2',
    name_en: 'Platform Product Director',
    name_ar: 'مدير المنتج والتشغيل',
    role_en: 'Multi-Tenant Cloud CRM Platform',
    role_ar: 'منصة Cloud CRM للشركات',
    company_en: 'Enterprise Software — Egypt',
    company_ar: 'شركة برمجيات — مصر',
    text_en:
      'Nuzul Tech ran structured QA and UAT testing across our web portal, mobile apps, and built-in WebRTC calling before we signed off with the vendor, catching the critical bugs ahead of launch.',
    text_ar:
      'فريق نزول تك عمل فحص QA واختبارات UAT كاملة لمنصة الويب وتطبيقات الموبايل وسيستم المكالمات (WebRTC) قبل ما نستلم المشروع من شركة البرمجة، وده خلانا نعالج المشاكل الحرجة قبل الإطلاق.',
  },
  {
    id: 'test-3',
    name_en: 'Hospital Technical Management',
    name_ar: 'الإدارة الهندسية والفنية',
    role_en: 'Private Specialized Hospital',
    role_ar: 'مستشفى تخصصي خاص',
    company_en: 'Medical Infrastructure — Cairo',
    company_ar: 'قطاع طبي — القاهرة',
    text_en:
      'Nuzul Tech deployed our hospital CCTV grid, Fortinet perimeter firewall, fiber cabling, and authenticated medical email under ongoing SLA support.',
    text_ar:
      'نزول تك أسسوا شبكة كاميرات المراقبة وركبوا فايروول Fortinet وتمديدات الفايبر وظبطوا الإيميلات الرسمية للمستشفى مع متابعة مستمرة بعقد SLA.',
  },
  {
    id: 'test-4',
    name_en: 'Head of IT & Clinical Operations',
    name_ar: 'مدير الـ IT والتشغيل',
    role_en: 'Surgical & Specialized Hospital',
    role_ar: 'مستشفى جراحي وتخصصي',
    company_en: 'Healthcare Infrastructure — Cairo',
    company_ar: 'قطاع طبي — القاهرة',
    text_en:
      'Consolidating our physical servers into a High-Availability virtualization cluster alongside the Patient Relations and approvals workflows stabilized daily operations across all departments.',
    text_ar:
      'تجميع السيرفرات القديمة في HA Virtualization Cluster واحد مع تشغيل بوابة المرضى وسيستم علاقات المرضى (PR) والموافقات الطبية فرَق جداً في استقرار الشغل اليومي والتنسيق بين الأقسام.',
  },
  {
    id: 'test-5',
    name_en: 'Clinical Administration Board',
    name_ar: 'إدارة المركز الطبي',
    role_en: 'Specialized Oncology Center',
    role_ar: 'مركز تخصصي للأورام',
    company_en: 'Medical Imaging & Infrastructure — Cairo',
    company_ar: 'قطاع طبي تخصصي — القاهرة',
    text_en:
      'Moving heavy DICOM PACS imaging files off corporate email onto local NVMe storage with hybrid cloud backup cleared up mailbox congestion and stabilized clinic workstations right away.',
    text_ar:
      'فصل ملفات الأشعة الطبية (DICOM PACS) عن الإيميلات ونقلها على سيرفر تخزين محلي بهاردات NVMe مع Cloud Backup أنهى مشكلة بطء الإيميل وتهنيج أجهزة العيادات من أول يوم.',
  },
  {
    id: 'test-6',
    name_en: 'Managing Audit Partner',
    name_ar: 'الشريك التنفيذي للمكتب',
    role_en: 'Financial & Tax Audit Consultancy',
    role_ar: 'مكتب مراجعة واستشارات مالية',
    company_en: 'Financial Services — Cairo',
    company_ar: 'قطاع مالي واستشاري — القاهرة',
    text_en:
      'Hosting our accounting databases on Nuzul Tech private cloud let 30 field auditors work simultaneously from client sites with encrypted access, authenticated email, and automated daily snapshots.',
    text_ar:
      'نقل قواعد بيانات المحاسبة على سيرفرات Cloud من نزول تك خلّى 30 مراجع ومستشار يشتغلوا مع بعض من مقرات العملاء بأمان، مع إيميلات موثّقة وDaily Snapshots تلقائية.',
  },
  {
    id: 'test-7',
    name_en: 'Operations & Logistics Director',
    name_ar: 'مدير العمليات اللوجستية',
    role_en: 'Freight Forwarding & Overland Transport',
    role_ar: 'شركة شحن ونقل بري',
    company_en: 'Logistics & Fleet — Egypt',
    company_ar: 'شحن ولوجستيات — مصر',
    text_en:
      'Enforcing strict DMARC policies protected our trade domain against invoice spoofing, while our fleet dashboard gave us centralized GPS and fuel tracking across regional routes.',
    text_ar:
      'تفعيل سياسات DMARC حمى الدومين التجاري بتاعنا من محاولات تزوير فواتير الشحن، ولوحة التتبع الحية خلتنا نتابع خطوط سير العربيات وحساسات البنزين من شاشة واحدة.',
  },
  {
    id: 'test-8',
    name_en: 'Foundation Executive Office',
    name_ar: 'الإدارة التنفيذية للمؤسسة',
    role_en: 'Non-Profit Development Foundation',
    role_ar: 'مؤسسة أهلية وتنموية',
    company_en: 'Non-Profit Infrastructure — Cairo',
    company_ar: 'مؤسسات أهلية — القاهرة',
    text_en:
      'Rolling out structured Cat6A cabling, central Active Directory domain control, VoIP desk phones, CCTV, and automated backups standardized access and security across every department.',
    text_ar:
      'تأسيس شبكة Cat6A وسيرفر Active Directory وسنترال VoIP مع File Server وBackup يومي آلي وحّد الصلاحيات والأمان وسهّل شغل كل الإدارات الميدانية.',
  },
];

export const NUZUL_BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    slug: 'oncology-center-pacs-email-governance',
    title_en: 'How to Separate Medical PACS Storage from Corporate Email Using Hybrid NVMe',
    title_ar: 'إزاي تفصل أرشيف الأشعة (PACS) عن الإيميلات وتظبط Hybrid Cloud Backup للمراكز الطبية',
    date: '10 يناير 2026',
    category_en: 'Healthcare IT Systems',
    category_ar: 'أنظمة طبية',
    excerpt_en:
      'Why sending heavy DICOM imaging studies over standard mailboxes stalls clinic PCs, and how local NVMe storage with off-site backup fixes it.',
    excerpt_ar:
      'ليه بعت ملفات الأشعة الكبيرة (DICOM) على الإيميل بيوقف أجهزة الأطباء ويكلفك مساحة زيادة، وإزاي التخزين المحلي الهجين بيحل المشكلة.',
    content_en:
      'When clinics and diagnostic centers send large DICOM imaging studies as email attachments, physician mailboxes balloon to tens of gigabytes, Outlook freezes, and monthly cloud storage bills climb fast.\n\nThe practical fix is separating PACS radiological storage onto a local high-IOPS NVMe server inside the clinic LAN, while keeping email strictly for official correspondence protected by SPF, DKIM, and DMARC.\n\nPairing that local storage server with scheduled encrypted off-site backups gives clinical management reliable disaster recovery without vendor lock-in or rising foreign-currency storage bills.',
    content_ar:
      'لما العيادات ومراكز الأشعة بتبعت ملفات الـ DICOM الكبيرة كمرفقات على الإيميل، مساحات الإيميل بتتملي بسرعة، وبرنامج Outlook بيهنج على أجهزة الأطباء والاستقبال، وتكلفة المساحات السحابية بتزيد كل شهر.\n\nالحل العملي هو فصل أرشيف الأشعة (PACS) على سيرفر تخزين محلي بهاردات NVMe سريعة جوه شبكة المركز، وتسيب الإيميلات للمراسلات الرسمية بس مع تأمينها بسجلات SPF وDKIM وDMARC.\n\nوبتربط السيرفر المحلي بـ Hybrid Cloud Backup مشفر خارج المقر عشان تحمي ملفات المرضى من أعطال الهاردوير أو فيروسات الفدية (Ransomware) من غير تكاليف دولارية متزايدة.',
  },
  {
    id: 2,
    slug: 'cloud-vps-business-infrastructure-egypt',
    title_en: 'Moving Accounting & ERP Databases to Managed Cloud VPS in Egypt',
    title_ar: 'إزاي تشغّل قواعد البيانات وبرامج المحاسبة والـ ERP على سيرفرات Cloud VPS',
    date: '5 فبراير 2026',
    category_en: 'Cloud Servers & Infrastructure',
    category_ar: 'سيرفرات وCloud',
    excerpt_en:
      'Replacing scattered desktop PCs with isolated KVM Cloud VPS plans starting from 499 EGP/mo and 1,000 EGP/mo Cloud Desktop setups.',
    excerpt_ar:
      'الفرق بين تشغيل برامج الحسابات على أجهزة مكتب عادية وبين نقلها على سيرفرات Cloud VPS معزولة بتقنية KVM وتسعير ثابت بالجنيه المصري.',
    content_en:
      'Running accounting ledgers and ERP databases on unmanaged desktop PCs leads to file conflicts, hardware single points of failure, and weak access control across remote offices.\n\nMoving those workloads onto KVM-isolated Cloud VPS or encrypted Cloud Desktop servers centralizes everything inside monitored datacenter infrastructure with NVMe speed and scheduled snapshots.\n\nPredictable EGP monthly billing and clear engineering SLAs make it straightforward to add branches or remote users cleanly.',
    content_ar:
      'تشغيل قواعد بيانات المحاسبة وبرامج الـ ERP على أجهزة كمبيوتر عادية في المكتب بيعمل تعارض في النسخ، ولو هارد واحد باظ البيانات كلها بتتأثر، غير صعوبة دخول الفروع أو المراجعين من بره.\n\nسيرفرات Cloud VPS المعزولة بتقنية KVM وسيرفرات الـ Cloud Desktop بتجمع شغلك في مكان واحد مستقر على هاردات NVMe سريعة، وكل فريق العمل بيتصل عليها بقنوات مشفرة من أي فرع أو من عند العميل.\n\nده غير الـ Daily Snapshots الأوتوماتيك والدفع الواضح بالجنيه المصري مع عقد تشغيل ودعم فني (SLA) محدد.',
  },
  {
    id: 3,
    slug: 'it-as-a-service-egypt-enterprise',
    title_en: 'IT as a Service (ITaaS): Running Company Infrastructure Under One SLA',
    title_ar: 'نظام إدارة الـ IT كخدمة (IT as a Service): إزاي تدير البنية التحتية بعقد SLA واحد',
    date: '20 يناير 2026',
    category_en: 'Enterprise IT Strategy',
    category_ar: 'إدارة الـ IT للشركات',
    excerpt_en:
      'How one multi-discipline engineering team handles networking, firewalls, virtualization, and backup drills under a single SLA.',
    excerpt_ar:
      'إزاي تتعاقد مع فريق تقني واحد يغطي الشبكات والـ Firewall والسيرفرات والـ Backup بمستويات استجابة واضحة (SLA).',
    content_en:
      'Running modern company infrastructure takes skills across Layer-2/Layer-3 networking, next-generation firewalls, Linux/Windows server administration, and tested disaster recovery pipelines.\n\nWith IT as a Service (ITaaS), you work with a dedicated multidisciplinary engineering team operating under clear P1–P4 SLA response tiers and scheduled preventive maintenance.\n\nYou keep full ownership of all passwords, network diagrams, and Runbooks with complete transparency.',
    content_ar:
      'إدارة البنية التحتية لأي شركة أو مركز طبي النهاردة محتاجة أكتر من تخصص: شبكات (Switching/Routing)، فايروول (NGFW)، إدارة سيرفرات Linux وWindows، ومتابعة اختبارات استرجاع الـ Backup.\n\nنموذج IT as a Service بيخليك تعتمد على فريق مهندسين متكامل شغال بعقد SLA واضح بيحدد أولويات البلاغات (P1–P4) ومواعيد الصيانة الدورية.\n\nوكل الباسوردات وصلاحيات الـ Admin وملفات التوثيق (Runbooks) بتفضل ملك شركتك بالكامل بشفافية تامة.',
  },
  {
    id: 4,
    slug: 'enterprise-erp-digital-transformation',
    title_en: 'Connecting Inventory, Accounting & Egyptian ETA E-Invoicing in One ERP',
    title_ar: 'ربط المخازن والحسابات والفاتورة الإلكترونية المصرية في سيستم ERP واحد',
    date: '15 يناير 2026',
    category_en: 'Enterprise IT Systems',
    category_ar: 'أنظمة شركات وحلول IT',
    excerpt_en:
      'Practical architecture tips for linking purchasing, warehouse stock, general ledger, and Egyptian ETA e-invoicing inside one database.',
    excerpt_ar:
      'إزاي توحّد المشتريات والمخازن والحسابات وتربطها مباشرة مع الفاتورة والإيصال الإلكتروني لمصلحة الضرائب.',
    content_en:
      'Separate spreadsheets for purchasing, warehouse stock, and finance always lead to reconciliation mismatches and slow statutory reporting.\n\nA unified ERP relational database captures every transaction once at the source, updating stock balances, general ledger entries, and Egyptian ETA e-invoicing payloads automatically.\n\nRole-based permissions (RBAC) and immutable audit logs protect your financial records across every branch.',
    content_ar:
      'الاعتماد على شيتات Excel منفصلة بين المشتريات والمخازن والحسابات بيعمل فروقات في الجرد وبيأخر تقفيل الحسابات والتقارير الضريبية.\n\nسيستم الـ ERP الموحّد بيخلي الحركة تتسجل مرة واحدة بس، فتسمّع أوتوماتيك في رصيد المخزن وقيود الحسابات وتتبعت للفاتورة الإلكترونية من غير تكرار إدخال.\n\nمع صلاحيات واضحة لكل موظف (RBAC) وسجل متابعة (Audit Log) يمنع أي تعديل غير مصرح على القيود المالية.',
  },
  {
    id: 5,
    slug: 'corporate-email-dmarc-phishing-egypt',
    title_en: 'Corporate Email Security: Stopping Invoice Spoofing with SPF, DKIM & DMARC',
    title_ar: 'حماية إيميلات الشركات من الانتحال وتزوير الفواتير عبر SPF وDKIM وDMARC',
    date: '28 ديسمبر 2025',
    category_en: 'Cybersecurity & Email',
    category_ar: 'أمن الإيميلات والدومين',
    excerpt_en:
      'How to configure 2048-bit DKIM signing and DMARC p=reject to protect financial emails and improve inbox delivery.',
    excerpt_ar:
      'خطوات عملية لضبط سجلات توثيق الإيميل عشان تحمي فواتير شركتك من الانتحال وتضمن وصول رسايلك للـ Inbox مش الـ Spam.',
    content_en:
      'Business email compromise and fake-invoice scams target domains that lack strict cryptographic authentication records.\n\nSetting up aligned SPF rules, rotating 2048-bit DKIM keys, and moving DMARC to p=reject tells global mail providers to reject forged emails pretending to come from your domain.\n\nPaired with TLS 1.3 encryption and inbound attachment scanning, your corporate email stays reliable and verifiable.',
    content_ar:
      'هجمات انتحال الإيميل وتزوير فواتير الموردين بتستغل إن الدومين مش متأمن بسجلات تحقق (DNS Auth Records) مظبوطة.\n\nلما بتظبط سجل SPF مع توقيع DKIM بمفاتيح 2048-bit وتفعّل سياسة DMARC على p=reject، أي سيرفر بريد عالمي هيرفض فوراً أي رسالة مزورة بتحاول تنتحل اسم شركتك، وسمعة الدومين بتتحسن جداً.\n\nومع تشفير النقل TLS 1.3 وفحص المرفقات، مراسلاتك الإدارية والمالية بتوصل بأمان ومن غير ما تقع في الـ Spam.',
  },
  {
    id: 6,
    slug: 'network-firewalls-vlan-security',
    title_en: 'Next-Gen Firewalls & VLAN Segmentation: Separating Critical Company Networks',
    title_ar: 'تقسيم الشبكة (VLANs) والـ Firewall: إزاي تعزل السيرفرات والأجهزة الحساسة',
    date: '10 ديسمبر 2025',
    category_en: 'Infrastructure & Firewalls',
    category_ar: 'الشبكات والـ Firewall',
    excerpt_en:
      'Separating accounting servers, medical equipment, IP cameras, and guest Wi-Fi into isolated network zones.',
    excerpt_ar:
      'ليه ما ينفعش سيرفر الحسابات وكاميرات المراقبة وواي فاي الضيوف يكونوا على شبكة واحدة، وإزاي تفصلهم صح بـ VLANs.',
    content_en:
      'Putting workstations, servers, IP cameras, and visitor smartphones on one flat network makes it easy for malware or an attacker to move laterally into critical systems.\n\nProper network design splits traffic into dedicated VLANs controlled by hardware NGFW access rules (ACLs) and encrypted site-to-site VPN tunnels between branches.\n\nContinuous monitoring logs unauthorized devices or port scans as soon as they happen.',
    content_ar:
      'لو أجهزة الموظفين والسيرفرات وكاميرات المراقبة وواي فاي الزوار كلهم في شبكة واحدة مفتوحة، أي موبايل مصاب أو اختراق بسيط يقدر يوصل لسيرفر البيانات بسهولة.\n\nالشغل الصح إننا نقسّم الشبكة لـ VLANs معزولة، وكل حركة مرور بينها بتعدّي على قواعد وصول (ACLs) جوه فايروول هاردوير (NGFW) مع ربط الفروع بـ VPN مشفر.\n\nومع المراقبة المستمرة، أي جهاز غريب أو محاولة فحص منافذ (Port Scan) بتتسجل وتتعزل فوراً.',
  },
  {
    id: 7,
    slug: 'voip-telephony-branch-interconnection',
    title_en: 'Unified VoIP IP-PBX: Connecting Branches with IVR & Call Recording',
    title_ar: 'سنترال VoIP للشركات: ربط تليفونات الفروع والرد الآلي (IVR) وتسجيل المكالمات',
    date: '25 نوفمبر 2025',
    category_en: 'VoIP & Telecommunications',
    category_ar: 'سنترال VoIP واتصالات',
    excerpt_en:
      'Standardizing internal extensions, recorded support queues, and IVR routing across multiple company branches.',
    excerpt_ar:
      'إزاي تربط مقرات وفروع شركتك بسنترال IP-PBX واحد مع تحويلات داخلية مجانية وتسجيل كامل للمكالمات.',
    content_en:
      'Separate landline setups at each branch make transferring calls painful and leave you with no call recording or queue analytics.\n\nAn IP-PBX VoIP setup gives every branch a unified extension plan over encrypted SIP trunks, complete with IVR menus, support queue tracking, and centralized call recording.\n\nGiving voice traffic its own QoS-prioritized Voice VLAN keeps call quality crisp even when the office network is busy.',
    content_ar:
      'لما كل فرع يبقى شغال بخطوط أرضية منفصلة، تحويل المكالمات بين الإدارات بيبقى صعب، وما فيش تسجيل مركزي أو تقارير لخدمة العملاء.\n\nسيستم الـ IP-PBX بيوحّد التحويلات الداخلية لكل الفروع عبر خطوط SIP مشفرة، مع رسالة رد آلي (IVR) وتسجيل مركزي لكل المكالمات.\n\nوتخصيص Voice VLAN منفصلة بأولوية مرور (QoS) بيحافظ على نقاء الصوت حتى وقت ضغط الإنترنت في الشركة.',
  },
  {
    id: 8,
    slug: 'immutable-cloud-backup-ransomware-protection',
    title_en: 'The 3-2-1 Immutable Backup Rule: Protecting Databases from Ransomware',
    title_ar: 'قاعدة النسخ الاحتياطي 3-2-1 المعزول (Immutable): إزاي تحمي بياناتك من فيروسات الفدية',
    date: '12 نوفمبر 2025',
    category_en: 'Backup & Disaster Recovery',
    category_ar: 'Backup وطوارئ',
    excerpt_en:
      'Why plugged-in USB drives and open NAS shares get encrypted during attacks, and how immutable off-site snapshots save your data.',
    excerpt_ar:
      'ليه الهارد الخارجي أو الـ NAS المفتوح على الشبكة بيتشفّروا مع باقي الأجهزة في هجمات الفدية، وإزاي النسخ المعزول بيحميك.',
    content_en:
      'Modern ransomware scans mapped network shares and attached drives to encrypt local backups before locking your main databases.\n\nThe 3-2-1 immutable standard keeps three copies of critical data across two media types, including an encrypted off-site copy locked against edits or deletion for its retention window.\n\nScheduled restore drills make sure your backups actually boot when you need them.',
    content_ar:
      'فيروسات الفدية (Ransomware) دلوقتي بتدور أول حاجة على الفولدرات المشتركة (Shared Folders) والهاردات المتوصلة بالشبكة عشان تشفّر الـ Backup قبل ما تضرب السيرفر الأساسي.\n\nقاعدة 3-2-1 المعزولة بتحفظ 3 نسخ من بياناتك على وسيطين مختلفين، منهم نسخة Cloud مشفرة خارج الشركة ومقفولة بسياسة Immutable تمنع أي تعديل أو مسح طول مدة الحفظ.\n\nوبنعمل اختبارات استرجاع (Restore Drills) بانتظام عشان نبقى متأكدين إن النسخة شغالة فعلاً وقت الطوارئ.',
  },
  {
    id: 9,
    slug: 'bare-metal-dedicated-servers-vs-vps',
    title_en: 'Dedicated Bare-Metal vs KVM Cloud VPS: Picking the Right Server for Your Load',
    title_ar: 'الفرق بين الـ Dedicated Server والـ Cloud VPS: تختار أنهي لشركتك؟',
    date: '3 نوفمبر 2025',
    category_en: 'Servers & Bare-Metal',
    category_ar: 'سيرفرات كاملة',
    excerpt_en:
      'Comparing flexible KVM Cloud VPS plans against single-tenant Dedicated servers for heavy ERPs and imaging archives.',
    excerpt_ar:
      'مقارنة عملية بين سيرفرات Cloud VPS وبين السيرفرات المخصصة الكاملة (Bare-Metal) حسب حجم قواعد البيانات والشغل.',
    content_en:
      'KVM Cloud VPS instances offer fast setup and easy vertical scaling—great for web platforms, CRMs, and mid-size ERP databases.\n\nDedicated Bare-Metal servers give a single client the entire physical machine, hardware RAID controllers, and unshared NVMe lanes—built for high-IOPS PACS archives or large multi-tenant databases.\n\nMatching your choice to actual IOPS and peak memory usage keeps performance high without paying for unused hardware.',
    content_ar:
      'سيرفرات Cloud VPS المعزولة بتقنية KVM بتديك مرونة وسرعة في الترقية لو احتجت رام أو بروسيسور زيادة، وممتازة للمتاجر وأنظمة الـ CRM وقواعد بيانات الـ ERP المتوسطة.\n\nأما السيرفرات المخصصة (Bare-Metal Dedicated) فبتحجزلك السيرفر بالكامل بكل موارده ومصفوفات RAID ومسارات الـ NVMe لعميل واحد، ودي الأنسب لقواعد البيانات التقيلة جداً أو أرشيفات الأشعة الطبية الضخمة.\n\nالاختيار الصح بيتحدد بناءً على حجم القراءة والكتابة (IOPS) وعدد المستخدمين في أوقات الذروة.',
  },
  {
    id: 10,
    slug: 'siem-platform-security-operations-egypt',
    title_en: 'SIEM Log Monitoring: Connecting Firewall & Server Logs to Catch Intrusions',
    title_ar: 'مراقبة الأحداث الأمنية (SIEM): إزاي تجمع Logs الفايروول والسيرفرات وترصد أي اختراق',
    date: '21 أكتوبر 2025',
    category_en: 'Cybersecurity & SIEM',
    category_ar: 'حماية وSIEM',
    excerpt_en:
      'Centralized syslog collection, login anomaly alerts, and incident response tracking for company infrastructure.',
    excerpt_ar:
      'إزاي تربط سجلات الفايروول والسيرفرات في مكان واحد عشان تكتشف محاولات التخمين أو الدخول غير المصرح بدري.',
    content_en:
      'When logs sit scattered inside individual firewalls and servers, security incidents go unnoticed—and attackers can wipe local logs after getting in.\n\nA SIEM collector streams normalized syslog events in real time to tamper-evident storage, correlating brute-force logins, privilege changes, and unusual outbound traffic.\n\nClear alert rules point engineers straight to the affected machine.',
    content_ar:
      'لما الـ Logs بتفضل متفرقة جوه كل سيرفر وفايروول لوحده، محاولات الاختراق ممكن تعدّي من غير ما حد ياخد باله، وأي مهاجم ممكن يمسح السجلات المحلية بعد ما يدخل.\n\nمنصة الـ SIEM بتجمع كل الـ Logs لحظياً في مكان مركزي مؤمّن، وتربط بين محاولات التخمين (Brute-Force)، وتغيير الصلاحيات، وأي اتصال خارجي غير طبيعي.\n\nوبكده فريق التشغيل بيوصله تنبيه واضح بالجهاز المتأثر عشان يتدخل فوراً ويوثّق الحادثة.',
  },
  {
    id: 11,
    slug: 'ecommerce-development-egyptian-gateways',
    title_en: 'E-Commerce Engineering: Syncing Payment Gateways, Stock & Shipping APIs',
    title_ar: 'تطوير المتاجر الإلكترونية: ربط بوابات الدفع في مصر والمخزن وشركات الشحن',
    date: '15 أكتوبر 2025',
    category_en: 'Software & E-Commerce',
    category_ar: 'متاجر إلكترونية',
    excerpt_en:
      'Building checkout flows synced reliably with warehouse stock counts and courier tracking webhooks.',
    excerpt_ar:
      'إزاي تبني متجر إلكتروني يربط الدفع الأونلاين برصيد المخزن وبوالص الشحن من غير أخطاء سحب مزدوج أو نفاد مخزون.',
    content_en:
      'A reliable online store depends on keeping inventory locks, payment gateway webhooks, and courier dispatch APIs strictly in sync.\n\nSeparating checkout state from heavy catalog queries prevents double-charging or overselling during seasonal sales while automating shipping waybills.\n\nServer-side webhook signature checks protect every completed order.',
    content_ar:
      'نجاح أي متجر إلكتروني بيعتمد على التزامن المضبوط بين حجز القطعة من المخزن، وتأكيد بوابة الدفع (Webhook)، وإصدار بوليصة الشحن.\n\nفصل مسار الـ Checkout والتحقق من توقيع إشعارات بوابة الدفع على السيرفر بيمنع أخطاء السحب المزدوج أو بيع منتجات خلصت من المخزن وقت العروض.\n\nومع ربط API شركات الشحن، البوليصة بتطلع أوتوماتيك والعميل بيتابع طلبه لحد ما يوصله.',
  },
  {
    id: 12,
    slug: 'egyptian-domain-registration-dns-security',
    title_en: 'Registering & Securing Egyptian Corporate Domains (.eg & .com.eg)',
    title_ar: 'حجز وتأمين الدومين المصري الرسمي (.eg و.com.eg) وحماية سجلات الـ DNS',
    date: '1 أكتوبر 2025',
    category_en: 'Domains & DNS Infrastructure',
    category_ar: 'دومينات وDNS',
    excerpt_en:
      'Paperwork requirements, DNSSEC signing, and registrar transfer locks for official .eg corporate domains.',
    excerpt_ar:
      'إجراءات حجز الدومين المصري الرسمي للشركات، وتفعيل DNSSEC وقفل النقل عشان تحمي اسم شركتك وسجلاتك.',
    content_en:
      'Registering official national domains (.eg, .com.eg) reinforces institutional credibility across Egyptian regulatory, banking, and commercial channels.\n\nTurning on DNSSEC protects lookups from tampering, while registrar transfer locks and role-based DNS access prevent accidental record changes.\n\nManaging your domain and mail DNS records together prevents unexpected downtime.',
    content_ar:
      'حجز الدومين المصري الرسمي (.eg أو .com.eg) بيدّي شركتك موثوقية أعلى في التعاملات المحلية والبنكية والحكومية.\n\nوتفعيل DNSSEC بيحمي توجيه الدومين من التلاعب، بينما قفل النقل (Transfer Lock) وتحديد صلاحيات لوحة الـ DNS بيمنع أي تعديل بالخطأ يوقّع الموقع أو الإيميل.\n\nولما إدارة الدومين وسجلات الإيميل تبقى في إيد فريق واحد، خدماتك بتفضل شغالة باستقرار.',
  },
  {
    id: 13,
    slug: 'enterprise-mobile-app-development-egypt',
    title_en: 'Enterprise Mobile Apps: Offline Sync & Role-Based Field Workflows',
    title_ar: 'تطوير تطبيقات الموبايل للشركات: الشغل الأوفلاين والمزامنة للفرق الميدانية',
    date: '20 سبتمبر 2025',
    category_en: 'Mobile App Development',
    category_ar: 'تطبيقات موبايل',
    excerpt_en:
      'Building reliable iOS and Android apps for clinic patients, delivery drivers, and warehouse teams on unstable mobile data.',
    excerpt_ar:
      'إزاي تصمّم تطبيقات iOS وAndroid للمندوبين والعيادات والمخازن تشتغل بثبات حتى لو شبكة الموبايل ضعيفة.',
    content_en:
      'Field apps used by drivers, warehouse supervisors, or clinic staff have to keep working even when cellular signal drops.\n\nEncrypted local caching combined with safe background API sync ensures entries queue up cleanly and settle without duplicates once signal returns.\n\nShort-lived tokens and biometric sign-in keep company data protected on mobile devices.',
    content_ar:
      'تطبيقات الشغل الميداني للمندوبين والعيادات والمخازن بتتعامل طول اليوم مع شبكات موبايل بتضعف وتفصل.\n\nالتخزين المحلي المؤقت المشفر (Offline Caching) مع مزامنة API ذكية بيضمن إن الموظف يسجل الحركات أو تأكيدات التسليم وتترفع للسيرفر أول ما النت يرجع من غير ما تتكرر.\n\nمع تشفير الجلسات والدخول بالبصمة عشان بيانات الشركة تفضل في أمان.',
  },
  {
    id: 14,
    slug: 'modern-corporate-web-development-seo',
    title_en: 'Corporate Web Development: Speed, Clean Semantics & Bilingual RTL/LTR',
    title_ar: 'تطوير مواقع الشركات: سرعة التحميل، الـ SEO، وتوازن العربي والإنجليزي (RTL/LTR)',
    date: '10 سبتمبر 2025',
    category_en: 'Web Development & Design',
    category_ar: 'تصميم وتطوير مواقع',
    excerpt_en:
      'Why clean semantic markup, proper Arabic/English layout parity, and lean bundles matter for enterprise portals.',
    excerpt_ar:
      'ليه سرعة الموقع وتنسيق العربي والإنجليزي الصح والبنية التقنية النظيفة بيفرقوا في ثقة العميل وظهورك في Google.',
    content_en:
      'A company website is often the first proof of technical quality—slow pages, broken RTL alignment, or messy headings erode trust immediately.\n\nClean semantic HTML, proper keyboard navigation, and structured JSON-LD metadata help both search engines and buyers evaluate your capabilities quickly.\n\nKeeping page bundles lean ensures smooth loading on mobile networks.',
    content_ar:
      'موقع شركتك هو أول واجهة العميل بيشوفها؛ لو بطيء أو الكلام العربي والإنجليزي داخل في بعضه، ده بيضعف الانطباع عن شغلك من أول ثانية.\n\nالتطوير الصح بيركّز على كود نظيف (Semantic HTML)، وترتيب واضح للعناوين، وتجهيز الـ SEO والبيانات المهيكلة (JSON-LD) عشان تظهر صح في محركات البحث.\n\nمع ضغط الملفات والصور عشان الموقع يفتح بسرعة على باقات الموبايل.',
  },
  {
    id: 15,
    slug: 'ui-ux-design-clinical-intake-conversion',
    title_en: 'UI/UX for Clinics & ERP Dashboards: Making Daily Forms Faster to Use',
    title_ar: 'تصميم UI/UX للعيادات وأنظمة الـ ERP: إزاي تقلل أخطاء ووقت إدخال البيانات',
    date: '1 سبتمبر 2025',
    category_en: 'UI/UX Design Systems',
    category_ar: 'تصميم UI/UX',
    excerpt_en:
      'Design systems, contrast standards, and ergonomic form flows for high-volume Arabic/English enterprise apps.',
    excerpt_ar:
      'قواعد عملية لتبسيط شاشات الموظفين وتوحيد الألوان والتنسيق عشان تقلل الأخطاء اليومية وتسرّع الشغل.',
    content_en:
      'Internal medical and ERP software succeeds when front-desk staff can finish repetitive tasks in fewer clicks and with fewer input mistakes.\n\nUsing a consistent component system with strong Light/Dark contrast, clear inline validation, and clean RTL/LTR spacing removes daily friction.\n\nTesting screens with actual operators before launch catches bottlenecks early.',
    content_ar:
      'قوة أي سيستم طبي أو إداري بتتقاس بسهولة إن الموظف يخلّص شغله المتكرر بأقل عدد كليكات ومن غير أخطاء إدخال.\n\nبناء Design System موحّد بألوان مريحة في الوضع النهاري والليلي، ورسائل تنبيه واضحة جوه الحقول، وتنسيق مظبوط للعربي والإنجليزي بيرفع دقة البيانات وسرعة الشغل.\n\nواختبار الواجهة مع الموظفين الفعليين قبل الإطلاق بيوفّر تعديلات كتير بعدين.',
  },
  {
    id: 16,
    slug: 'erp-crm-systems-egypt-eta-compliance',
    title_en: 'ERP & Egyptian ETA E-Invoicing: Coding Items, Token Signing & Retry Queues',
    title_ar: 'ربط الـ ERP وCRM مع الفاتورة الإلكترونية المصرية: التكويد والتوقيع وإدارة الإرسال',
    date: '20 أغسطس 2025',
    category_en: 'Enterprise ERP & CRM',
    category_ar: 'أنظمة ERP وCRM',
    excerpt_en:
      'Handling GS1/EGS item codes, hardware token signing, and resilient ETA submission queues inside your accounting system.',
    excerpt_ar:
      'إزاي تظبط أكواد الأصناف (GS1/EGS) والتوقيع بالـ Token الرقمي وطوابير إعادة الإرسال جوه برنامج الحسابات.',
    content_en:
      'Reliable Egyptian Tax Authority (ETA) integration requires accurate GS1/EGS item mapping, hardware token signing, and retry queues that handle temporary connection drops.\n\nShowing the ETA validation status (UUID) right inside your invoice ledger lets accountants track submissions from one screen without jumping between portals.\n\nKeeping an organized archive of accepted payloads makes tax audits straightforward.',
    content_ar:
      'الربط المستقر مع نظام الفاتورة الإلكترونية لمصلحة الضرائب المصرية محتاج تطابق دقيق لأكواد الأصناف (GS1/EGS)، وتوقيع بالـ Token الرقمي، وطابور إعادة إرسال أوتوماتيك لو النت فصل لحظياً.\n\nلما حالة القبول (UUID) بتظهر مباشرة جوه شاشة الفواتير، المحاسب بيتابع كل حاجة من مكان واحد من غير ما ينقل بين أكتر من بوابة.\n\nمع حفظ أرشيف منظم لكل الفواتير المقبولة عشان يبقى جاهز لأي فحص ضريبي.',
  },
  {
    id: 17,
    slug: 'non-profit-it-infrastructure-active-directory',
    title_en: 'IT Infrastructure for Foundations: Active Directory, File Server & VoIP',
    title_ar: 'تأسيس البنية التحتية للمؤسسات الأهلية: Active Directory وFile Server وسنترال VoIP',
    date: '15 فبراير 2026',
    category_en: 'Infrastructure & Active Directory',
    category_ar: 'شبكات وبنية تحتية',
    excerpt_en:
      'Protecting beneficiary privacy and donor files with Active Directory permissions, centralized storage, and daily off-site backups.',
    excerpt_ar:
      'إزاي تحمي بيانات المستفيدين والمتبرعين بصلاحيات Active Directory مركزية وFile Server مع Backup يومي معزول.',
    content_en:
      'Non-profit foundations handle sensitive beneficiary case files and donor records that should never sit scattered across individual desktops.\n\nDeploying Active Directory Domain Services (AD DS) with automated DHCP, permission-controlled File Server shares, and encrypted daily off-site snapshots brings order and security to administrative offices.\n\nStructured cabling and segmented business Wi-Fi cleanly separate staff devices from guests.',
    content_ar:
      'الجمعيات والمؤسسات الأهلية بتتعامل مع ملفات حساسة للمستفيدين والمتبرعين، وما ينفعش تفضل متوزعة على أجهزة الموظفين الشخصية.\n\nتركيب سيرفر Active Directory مع DHCP وFile Server بصلاحيات لكل إدارة وBackup يومي مشفر بيظبط أمان المقر بالكامل.\n\nومع شبكة كابلات منظمة وWi-Fi معزول، أجهزة الباحثين بتفضل مفصولة تماماً عن شبكة الزوار.',
  },
  {
    id: 18,
    slug: 'software-qa-acceptance-testing-crm',
    title_en: 'Software Handover Checklist: Running Independent QA & Load Tests Before Sign-Off',
    title_ar: 'قبل ما تستلم مشروع برمجة: ليه فحص QA واختبار الضغط المستقل مهم قبل التوقيع؟',
    date: '28 يناير 2026',
    category_en: 'Software QA & Testing',
    category_ar: 'فحص واختبار برمجيات',
    excerpt_en:
      'An engineering checklist covering API stress tests, WebRTC call quality, mobile parity, and permission audits before vendor handover.',
    excerpt_ar:
      'قائمة فحص عملية تغطي اختبار الويب والموبايل والمكالمات المدمجة وضغط قاعدة البيانات وتدقيق الصلاحيات قبل الاستلام.',
    content_en:
      'Signing off on a software project after a quick happy-path demo often hides concurrency crashes, broken mobile notifications, and permission leaks.\n\nAn independent QA & UAT review tests real edge cases across web portals, iOS/Android apps, WebRTC voice calls, and database load spikes.\n\nEvery bug is logged with exact reproduction steps so the vendor fixes root causes before final payment and launch.',
    content_ar:
      'استلام أي سيستم أو تطبيق بناءً على Demo سريع بيخلي أعطال الضغط الحقيقي وثغرات الصلاحيات تظهر بعد الإطلاق والفلوس تكون اتدفعت.\n\nمرحلة الفحص والقبول المستقل (QA & UAT) بتختبر الويب وتطبيقات الموبايل وجودة المكالمات المدمجة (WebRTC) وبتعمل Load Testing على قاعدة البيانات.\n\nوكل ملاحظة بتتسجل في تقرير فني بخطوات إعادة المشكلة عشان الشركة المطوّرة تصلّحها قبل الاستلام النهائي.',
  },
  {
    id: 19,
    slug: 'smart-clinic-q-system-patient-turnover',
    title_en: 'Smart Clinic Operations: Linking EMR Records with Waiting-Room Q-System',
    title_ar: 'تنظيم العيادات التخصصية: ربط ملف المريض (EMR) بشاشات الدور (Q-System)',
    date: '18 يناير 2026',
    category_en: 'Healthcare IT & Q-System',
    category_ar: 'أنظمة طبية وإدارة عيادات',
    excerpt_en:
      'How reception ticket printers, waiting-lounge displays, and fast DICOM lookup streamline busy outpatient clinics.',
    excerpt_ar:
      'إزاي ربط طابعة التذاكر وشاشات النداء في صالة الانتظار بشاشة الدكتور بيسرّع الكشف وينظّم حركة المرضى.',
    content_en:
      'Busy outpatient clinics deal with crowded reception desks and frequent lookups of previous scans and prescriptions.\n\nConnecting reception ticket printers and waiting-room Q-System screens straight to the doctor EMR terminal automates patient calling and order.\n\nReady-made dosage templates and barcode-printed prescriptions save minutes on every visit.',
    content_ar:
      'العيادات التخصصية بتشهد زحمة متزامنة في الاستقبال وصالة الانتظار مع احتياج سريع لفتح أشعات وتاريخ المريض.\n\nربط طابعة تذاكر الاستقبال وشاشات الـ Q-System مباشرة مع شاشة الدكتور والـ EMR بيظبط النداء والترتيب أوتوماتيك من غير تدخل يدوي.\n\nومع قوالب الجرعات الجاهزة وطباعة الروشتة بباركود، الكشف والمتابعة بيبقوا أسرع وأدق.',
  },
  {
    id: 20,
    slug: 'hospital-virtualization-patient-relations-abch',
    title_en: 'Hospital HA Virtualization & Patient Relations (PR) Systems Explained',
    title_ar: 'دمج سيرفرات المستشفى في HA Virtualization Cluster وتشغيل سيستم علاقات المرضى (PR)',
    date: '8 يناير 2026',
    category_en: 'Enterprise Virtualization & Systems',
    category_ar: 'أنظمة شركات وحلول IT',
    excerpt_en:
      'Combining failover virtualization clusters with internal maintenance tickets, insurance approvals, and patient relations tracking.',
    excerpt_ar:
      'إزاي تجمع سيرفرات المستشفى في Cluster عالي الاستقرار مع سيستم لمتابعة شكاوى المرضى والموافقات التأمينية.',
    content_en:
      'Surgical hospitals depend on both resilient server infrastructure and smooth patient workflows spanning approvals, feedback tracking, and maintenance tickets.\n\nConsolidating separate physical servers onto a High-Availability KVM/VMware cluster behind Fortinet firewalls and fiber uplinks eliminates single-host downtime during maintenance.\n\nPairing that foundation with Patient Relations and approvals portals keeps clinical and admin teams aligned.',
    content_ar:
      'استقرار الشغل في المستشفيات الجراحية محتاج سيرفرات ما تقفش، وفي نفس الوقت سيستم إداري ينظّم طلبات المرضى والموافقات.\n\nتجميع السيرفرات المتفرقة جوه HA Virtualization Cluster خلف فايروول Fortinet وخطوط فايبر بيمنع توقف الأنظمة وقت صيانة أي سيرفر.\n\nوبنكمّل البنية دي بسيستم علاقات المرضى (PR System) وتذاكر الصيانة والموافقات التأمينية عشان الخدمة تفضل منظمة بين كل الأقسام.',
  },
  {
    id: 21,
    slug: 'tax-accounting-disaster-recovery-egypt',
    title_en: 'Disaster Recovery for Accounting & Tax Firms: Protecting Financial Databases',
    title_ar: 'حماية قواعد بيانات مكاتب المحاسبة والضرائب وقت مواسم الإقرارات والميزانيات',
    date: '2 يناير 2026',
    category_en: 'Financial IT & Disaster Recovery',
    category_ar: 'أنظمة مالية وBackup',
    excerpt_en:
      'Encrypted snapshots, isolated cloud servers, and strict RDP access rules keeping financial ledgers safe during tax season.',
    excerpt_ar:
      'إزاي تأمّن الدفاتر وقواعد البيانات المحاسبية بـ Snapshots مشفرة وسياسات Firewall للـ RDP عشان شغلك ما يقفش وقت الإقرارات.',
    content_en:
      'Year-end closings and tax deadlines leave zero margin for corrupted databases or ransomware lockouts.\n\nHosting core accounting databases on isolated cloud servers protected by encrypted snapshots, immutable off-site backups, and strict RDP firewall rules removes workstation single points of failure.\n\nScheduled restore tests ensure auditors can keep working smoothly from any client site.',
    content_ar:
      'مواسم تقفيل الميزانيات وتقديم الإقرارات الضريبية ما بتستحملش أي عطل في قاعدة البيانات أو هجمة فيروس فدية.\n\nاستضافة برامج المحاسبة على سيرفرات Cloud معزولة مع Snapshots مشفرة وBackup خارج المقر وسياسات Firewall محكمة للـ RDP بتحمي الدفاتر بالكامل.\n\nومع اختبارات الاسترجاع المجدولة، المراجعين يفضلوا شغالين باستقرار من أي مقر عميل.',
  },
  {
    id: 22,
    slug: 'hybrid-cloud-data-sovereignty-egypt',
    title_en: 'Hybrid Cloud & Local Hosting in Egypt: Combining LAN Speed with Cloud Backup',
    title_ar: 'الـ Hybrid Cloud واستضافة البيانات في مصر: إزاي تجمع بين سرعة الشبكة المحلية والـ Cloud Backup',
    date: '22 ديسمبر 2025',
    category_en: 'Cloud Infrastructure & Sovereignty',
    category_ar: 'سيرفرات وCloud',
    excerpt_en:
      'Pairing local on-premise speed for PACS and ERP with Cairo or European datacenter off-site backups and predictable EGP billing.',
    excerpt_ar:
      'دليل عملي لدمج السيرفرات المحلية جوه شركتك مع النسخ السحابي في القاهرة أو أوروبا بتكلفة ثابتة بالجنيه المصري.',
    content_en:
      'Relying exclusively on overseas clouds can introduce slow WAN transfers for heavy files and unpredictable foreign-currency invoices.\n\nA hybrid setup keeps heavy PACS imaging archives and ERP databases running fast on your local gigabit LAN while syncing encrypted backup snapshots to Cairo or European datacenter nodes.\n\nClear EGP contracts keep your monthly IT budget predictable.',
    content_ar:
      'الاعتماد الكامل على سحابات أجنبية ممكن يعمل بطء في نقل الملفات الكبيرة عبر الإنترنت، غير تقلبات الفواتير بالعملة الأجنبية.\n\nالحل الهجين (Hybrid Cloud) بيخلي الشغل التقيل زي الأشعة الطبية وقواعد بيانات الـ ERP يشتغل بسرعة الـ LAN جوه مقر شركتك، ومعاه نسخ احتياطي مشفر (Offsite Backup) في مراكز بيانات بالقاهرة أو أوروبا.\n\nوكل ده بعقد واضح بالجنيه المصري وتكلفة ثابتة تقدر تحسبها من الأول.',
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
  { id: 'all', nameAr: 'كل الخدمات', nameEn: 'All Services' },
  { id: 'الشبكات والبنية التحتية', nameAr: 'الشبكات والـ Infrastructure', nameEn: 'Infrastructure & Networks' },
  { id: 'السحابة والاستضافة', nameAr: 'السيرفرات والـ Cloud', nameEn: 'Cloud & Servers' },
  { id: 'الأمن السيبراني', nameAr: 'الحماية والـ Security', nameEn: 'Cybersecurity' },
  { id: 'البرمجيات وأنظمة الإدارة', nameAr: 'البرمجيات وأنظمة الـ ERP', nameEn: 'Software & ERP' },
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
    targetAudience: 'مشاريع الويب، بيئات الـ Staging، والـ APIs',
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
      'بروسيسور AMD EPYC / Intel Xeon بأداء ثابت',
      'رام DDR4 ECC مع عزل KVM كامل للموارد',
      'عنوان IPv4 مخصص + IPv6 /64 Subnet',
      'تسليم سريع خلال دقائق في القاهرة أو فرانكفورت',
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
      'هاردات NVMe RAID-10 سريعة لقواعد البيانات',
      'جاهز لـ Docker وPostgreSQL وRedis',
      '2 Snapshots جاهزين للاسترجاع السريع',
      'بورت 1 Gbit/s مع حماية DDoS تلقائية',
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
    targetAudience: 'تطبيقات الـ SaaS والأنظمة اللي عليها ضغط مستخدمين عالي',
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
      'قدرة عالية لتشغيل أكتر من Docker Stack وقاعدة بيانات مع بعض',
      'شبكة داخلية خاصة (Private VLAN) للربط بين السيرفرات',
      '3 Snapshots + دعم مباشر من مهندس نظم',
      'استقرار تشغيل 99.99% Uptime SLA للسيرفر والشبكة',
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
    targetAudience: 'الـ ERP متعدد الفروع، التحليلات التقيلة، والـ Clusters',
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
      'رام 48 GB ECC للأحمال التقيلة والـ Caching',
      'هاردات NVMe بسرعة قراءة وكتابة IOPS عالية',
      '4 Snapshots + أولوية دعم فني P1',
      'ترقية حية للموارد من غير ما الـ IP يتغير',
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
    nameAr: 'Web Starter — استضافة مواقع',
    nameEn: 'Web Starter',
    basePriceEGP: 195,
    basePriceUSD: 3.95,
    monthlyPriceEGP: 195,
    yearlyPriceEGP: 1950,
    targetAudience: 'مواقع الشركات التعريفية والمدونات الرسمية',
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
      'لوحة تحكم cPanel مع 5 إيميلات رسمية باسم شركتك',
      'شهادات SSL مجانية بتتجدد أوتوماتيك',
      'Backup يومي آلي مع حفظ لآخر 7 أيام',
      'دعم كامل لـ PHP 8.x وNode.js',
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
    nameAr: 'WordPress Pro — استضافة مُدارة',
    nameEn: 'WordPress Pro',
    basePriceEGP: 345,
    basePriceUSD: 6.95,
    monthlyPriceEGP: 345,
    yearlyPriceEGP: 3450,
    targetAudience: 'متاجر WooCommerce ومواقع الشركات اللي عليها زيارات عالية',
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
      'سيرفر LiteSpeed Enterprise مع LSCache وRedis',
      'بيئة Staging تجريبية بكليك واحد قبل ما تنشر التعديلات',
      'تحديثات أمان دورية لـ WordPress والـ Plugins',
      'Backup يومي خارج السيرفر (حفظ 14 يوم)',
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
    nameAr: 'Commerce Cloud — للمتاجر الكبيرة',
    nameEn: 'Commerce Cloud',
    basePriceEGP: 645,
    basePriceUSD: 13.0,
    monthlyPriceEGP: 645,
    yearlyPriceEGP: 6450,
    targetAudience: 'متاجر WooCommerce الكبيرة ومشاريع Laravel',
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
      'موارد معزولة تتحمل ضغط مواسم العروض والخصومات',
      'قاعدة بيانات MySQL/MariaDB مظبوطة على هاردات NVMe',
      '25 إيميل رسمي مع تظبيط SPF وDKIM وDMARC',
      'فحص يومي ضد الـ Malware وحماية Brute-Force',
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
    nameAr: 'Agency Cloud — للوكالات وتعدد المواقع',
    nameEn: 'Agency Multi-Site',
    basePriceEGP: 1240,
    basePriceUSD: 25.0,
    monthlyPriceEGP: 1240,
    yearlyPriceEGP: 12400,
    targetAudience: 'استضافة لحد 25 موقع معزول لعملاء الـ Agencies',
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
      'حساب cPanel مستقل ومعزول لكل مشروع عميل',
      'لوحة WHM لإدارة المساحات والتراخيص والدومينات',
      'نقل مجاني لمواقعك الحالية من غير ما تقع',
      'دعم فني أولوية 24/7',
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
    targetAudience: 'Remote Desktop آمن وتشغيل برامج المحاسبة لفريق صغير',
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
      'شامل ترخيص Windows Server 2022 Standard',
      'دخول RDP مشفر مع حماية ضد محاولات التخمين',
      'جاهز لتشغيل أنظمة ERP وبرامج المحاسبة المحلية',
      'هاردات NVMe سريعة لاستجابة قواعد البيانات',
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
    targetAudience: 'قواعد بيانات MS SQL Server وفرق المحاسبة عن بُعد',
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
      'رام 16 GB ECC مناسبة لقواعد بيانات MS SQL Server',
      'ربط VPN خاص بين فروع شركتك والسيرفر بأمان',
      '2 Snapshots + Backup آلي خارج السيرفر',
      'مراقبة 24/7 للهاردات والرام واستقرار الخدمة',
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
    targetAudience: 'شركات التوزيع والمكاتب اللي عندها 10–20 مستخدم RDP',
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
      '8 vCPU ورام 24 GB لتشغيل جلسات مستخدمين متعددة مع بعض',
      'فصل جلسات المحاسبة والمبيعات بصلاحيات Active Directory',
      'جاهز للربط مع الفاتورة الإلكترونية المصرية (ETA)',
      'استقرار تشغيل 99.99% Uptime SLA ودعم مهندس نظم',
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
    targetAudience: 'تطبيقات .NET وSQL التقيلة وسيرفرات الفروع المركزية',
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
      '48 GB ECC RAM و300 GB NVMe معزولة بالكامل',
      'دعم كامل لـ Active Directory وDomain Controller',
      '4 Snapshots + Backup يومي معزول (Immutable)',
      'عقد SLA بأولوية طوارئ P1 على مدار الساعة',
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
      headingAr: '1. المشكلة اللي بتقابل الشركات على أرض الواقع',
      headingEn: '1. The Operational Problem',
      bodyAr: parasAr[0] || post.excerpt_ar,
      bodyEn: parasEn[0] || post.excerpt_en,
    },
    {
      id: 'section-architecture',
      headingAr: '2. الحل العملي وطريقة التنفيذ',
      headingEn: '2. Practical Setup & Architecture',
      bodyAr: parasAr[1] || parasAr[0] || post.excerpt_ar,
      bodyEn: parasEn[1] || parasEn[0] || post.excerpt_en,
    },
    {
      id: 'section-governance',
      headingAr: '3. خطوات التأمين والمتابعة بعد التشغيل',
      headingEn: '3. Post-Launch Hardening & Maintenance',
      bodyAr:
        parasAr[2] ||
        'فريق نزول تك دايماً بيوثّق كل الإعدادات (As-Built)، ويعمل اختبارات استرجاع للـ Backup بشكل دوري، مع متابعة الأنظمة بعقد SLA واضح.',
      bodyEn:
        parasEn[2] ||
        'Nuzul Tech engineers always deliver As-Built documentation, run scheduled backup restore drills, and monitor production systems under a clear SLA.',
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
    author: 'فريق المهندسين — نزول تك',
    authorEn: 'Nuzul Tech Engineering Team',
    authorRole: 'فريق الشبكات والسيرفرات والـ Cloud',
    authorRoleEn: 'Cloud & Infrastructure Engineers',
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
    question: 'هل فيه عقود SLA رسمية وفواتير ضريبية للشركات؟',
    questionEn: 'Do you provide formal SLA contracts and official tax invoices for companies?',
    answer:
      'أيوه، كل تعاقدات الشركات بتكون بعقد SLA رسمي يحدد أولويات البلاغات وأوقات الاستجابة، مع فواتير ضريبية إلكترونية رسمية في مصر.',
    answerEn:
      'Yes, corporate engagements include a formal Service Level Agreement (SLA) defining priority tiers and response windows, alongside official Egyptian electronic tax invoices.',
  },
  {
    question: 'إزاي بتنقلوا السيرفرات أو الأنظمة الحالية من غير ما الشغل يقف؟',
    questionEn: 'How do you migrate existing servers or systems without business disruption?',
    answer:
      'بنجهّز السيرفر الجديد بالكامل ونعمل مزامنة للبيانات مسبقاً، والتحويل النهائي (Cutover) بيتم خارج أوقات الشغل مع خطة رجوع جاهزة لو حصل أي طارئ.',
    answerEn:
      'We stage the new environment in parallel and sync data ahead of time, then run final cutover outside working hours with a tested rollback plan.',
  },
  {
    question: 'إيه طرق الدفع المتاحة داخل مصر وبره؟',
    questionEn: 'What payment methods are supported in Egypt and internationally?',
    answer:
      'بنقبل التحويل البنكي للشركات، InstaPay، محافظ الموبايل (Vodafone Cash)، فوري، والكروت البنكية بعرض سعر وفاتورة رسمية.',
    answerEn:
      'We support corporate bank wire transfers, InstaPay transfers, Vodafone Cash, Fawry, and bank cards arranged via official quotation and invoice.',
  },
  {
    question: 'هل باقات السيرفرات والاستضافة فيها Backup خارج السيرفر؟',
    questionEn: 'Do cloud hosting plans include off-site backups?',
    answer:
      'أيوه، كل باقات السيرفرات والاستضافة فيها Backup يومي أو أسبوعي مشفر ومحفوظ في موقع تاني مستقل عشان تقدر تسترجع بياناتك في أي وقت.',
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
    role: 'استضافة داخل مصر للشركات والجهات اللي محتاجة بياناتها تفضل محلياً مع أقل Ping وأسرع استجابة للمستخدمين في مصر.',
    roleEn: 'Local deployment option for Egyptian enterprises requiring in-country data residency and low domestic latency.',
  },
  {
    id: 'dc-frankfurt',
    city: 'فرانكفورت',
    cityEn: 'Frankfurt',
    country: 'ألمانيا',
    countryEn: 'Germany',
    regionCode: 'EU-FRA',
    role: 'مركز بيانات أوروبي رئيسي ممتاز للمواقع والأنظمة اللي بتخدم مستخدمين في الشرق الأوسط وأوروبا.',
    roleEn: 'Central European peering hub suited for regional workloads serving EMEA.',
  },
  {
    id: 'dc-riyadh',
    city: 'الرياض',
    cityEn: 'Riyadh',
    country: 'المملكة العربية السعودية',
    countryEn: 'Saudi Arabia',
    regionCode: 'SA-RUH',
    role: 'استضافة إقليمية سريعة لفروع الشركات والعملاء في السعودية والخليج.',
    roleEn: 'Regional deployment option for companies serving clients and branches across the GCC.',
  },
  {
    id: 'dc-amsterdam',
    city: 'أمستردام',
    cityEn: 'Amsterdam',
    country: 'هولندا',
    countryEn: 'Netherlands',
    regionCode: 'EU-AMS',
    role: 'موقع أوروبي بديل مخصص للنسخ الاحتياطي الجغرافي (Offsite DR) وتوزيع الضغط الدولي.',
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
    title: 'عرض عملي لسيستم ERP',
    titleEn: 'ERP System Demo',
    category: 'الحسابات والمخازن',
    categoryEn: 'Finance & Inventory',
    description: 'شاشات السيستم والـ Modules الأساسية، والربط المباشر مع الفاتورة الإلكترونية المصرية (ETA).',
    descriptionEn: 'System screens, core modules, and ETA e-invoicing integration.',
    modules: ['الحسابات العامة', 'المخازن', 'الفاتورة الإلكترونية', 'الموارد البشرية (HR)'],
    modulesEn: ['General Ledger', 'Inventory', 'E-Invoicing', 'HR & Payroll'],
    kpis: [
      { label: 'الربط الضريبي', labelEn: 'Tax Integration', value: 'ETA E-Invoicing SDK', trend: 'ETA Ready' },
      { label: 'تتبع المخزون', labelEn: 'Inventory Tracking', value: 'FIFO / Batch', trend: 'Multi-Branch' },
      { label: 'الصلاحيات', labelEn: 'Access Control', value: 'RBAC + Audit Log', trend: 'Role-Based' },
    ],
    previewImage: '',
  },
];

export const IMPLEMENTATION_STEPS = [
  {
    step: '01',
    title: 'المعاينة وفهم المتطلبات',
    titleEn: 'Discovery & Requirements',
    duration: '2 - 3 أيام',
    durationEn: '2 - 3 Days',
    description: 'بنراجع البنية الحالية عندك، ونحدد مشاكل البطء أو الثغرات اللي محتاجة تتحل.',
    descriptionEn: 'Reviewing existing infrastructure, identifying bottlenecks, and mapping security risks.',
    deliverable: 'خطة التنفيذ والتصميم (Architecture Blueprint)',
    deliverableEn: 'Architecture Blueprint',
  },
  {
    step: '02',
    title: 'التجهيز ونقل البيانات',
    titleEn: 'Staging & Data Migration',
    duration: '3 - 7 أيام',
    durationEn: '3 - 7 Days',
    description: 'تجهيز السيرفرات والشبكة، ونقل البيانات خارج ساعات الشغل عشان ما يحصلش تعطيل.',
    descriptionEn: 'Configuring servers and networks, and migrating data during off-peak hours.',
    deliverable: 'بيئة تشغيل جاهزة ومختبرة (Validated Setup)',
    deliverableEn: 'Validated Production Setup',
  },
  {
    step: '03',
    title: 'الاختبار والتأمين (Hardening)',
    titleEn: 'Testing & Hardening',
    duration: '1 - 2 يوم',
    durationEn: '1 - 2 Days',
    description: 'فحص الثغرات (Vulnerability Scan)، وتظبيط الـ Firewall، وتفعيل Backup معزول.',
    descriptionEn: 'Vulnerability scanning, firewall rule enforcement, and immutable backup configuration.',
    deliverable: 'تقرير الفحص والتسليم (Security Sign-off)',
    deliverableEn: 'Security Sign-off Report',
  },
  {
    step: '04',
    title: 'المراقبة والدعم المستمر',
    titleEn: 'Monitoring & Support',
    duration: 'مستمر',
    durationEn: 'Ongoing',
    description: 'مراقبة 24/7 للأداء، واستجابة للبلاغات حسب أولويات عقد الـ SLA.',
    descriptionEn: 'Continuous performance telemetry and SLA-governed incident resolution.',
    deliverable: 'عقد الدعم والمتابعة (Active SLA)',
    deliverableEn: 'Active SLA Agreement',
  },
];

export const STATS = [
  {
    id: 'stat-1',
    value: 'SLA',
    suffix: '',
    label: 'التزام بعقود مستوى خدمة واضحة',
    labelEn: 'Formal SLA Contracts',
    description: 'مراقبة 24/7 للسيرفرات والشبكات وأوقات استجابة محددة في العقد',
    descriptionEn: 'Continuous monitoring paired with contractual escalation tiers',
  },
  {
    id: 'stat-2',
    value: '24/7',
    suffix: '',
    label: 'فريق دعم فني شغال على مدار الساعة',
    labelEn: 'Round-the-Clock Engineering Desk',
    description: 'تواصل مباشر مع مهندسي الشبكات والنظم لبلاغات الطوارئ (P1)',
    descriptionEn: 'Direct escalation to systems and network engineers for P1 incidents',
  },
];

export const TEAM_MEMBERS = [
  {
    id: 'team-1',
    name: 'فريق الشبكات والسيرفرات والـ Cloud',
    nameEn: 'Cloud & Network Engineering Team',
    role: 'قسم البنية التحتية ومراكز البيانات',
    roleEn: 'Infrastructure & Datacenter Division',
    experience: 'فرق مهندسين متخصصين',
    experienceEn: 'Specialized Engineering Divisions',
    bio: 'مهندسين متخصصين في تأسيس الشبكات، إدارة سيرفرات Cloud VPS (KVM)، وتأمين البيانات والـ Backup.',
    bioEn: 'Engineers specialized in structured network architecture, KVM cloud servers, and data security.',
    certifications: ['Linux KVM & Virtualization', 'VLAN & NGFW Architecture', '3-2-1 Backup Pipelines'],
    image: '',
  },
];

export const TECH_STACK = [
  {
    category: 'أنظمة التشغيل (OS)',
    categoryEn: 'Operating Systems',
    items: [
      { name: 'Ubuntu LTS / Debian', badge: 'Linux', badgeEn: 'Linux' },
      { name: 'AlmaLinux / Rocky Linux', badge: 'RHEL', badgeEn: 'RHEL' },
      { name: 'Windows Server', badge: 'RDP / AD', badgeEn: 'RDP / AD' },
    ],
  },
  {
    category: 'لغات التطوير والـ Frameworks',
    categoryEn: 'Languages & Frameworks',
    items: [
      { name: 'Node.js & TypeScript', badge: 'Runtime', badgeEn: 'Runtime' },
      { name: 'PHP / Laravel', badge: 'Web Stack', badgeEn: 'Web Stack' },
      { name: 'Python & .NET Core', badge: 'Enterprise', badgeEn: 'Enterprise' },
    ],
  },
  {
    category: 'قواعد البيانات والـ Containers',
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
      { name: 'KVM Hypervisor', badge: 'KVM Isolation', badgeEn: 'Kernel Isolation' },
      { name: 'Fortinet / NGFW', badge: 'Firewall', badgeEn: 'Firewall' },
      { name: 'LiteSpeed & CloudLinux', badge: 'Web Hosting', badgeEn: 'Web Hosting' },
    ],
  },
];
