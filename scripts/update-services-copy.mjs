import fs from 'node:fs';
import path from 'node:path';

const filePath = path.resolve('src/data/nuzulData.ts');
let content = fs.readFileSync(filePath, 'utf-8');

// 1. Updated NUZUL_SERVICES array
const updatedServicesCode = `export const NUZUL_SERVICES: ServiceItem[] = [
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
      'دمج عدة خوادم فيزيائية على Cluster واحد (KVM أو VMware)، لتقليل عدد الأجهزة وتسهيل الصيانة. [VERIFY Q1]',
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
      'مراقبة مستمرة للأجهزة والسيرفرات وسعات التخزين ومسجلات NVR، مع تنبيهات فورية عند الأعطال.',
    description_en:
      'Continuous monitoring of servers, network switches, storage volumes, and NVR feeds with automated threshold alerts.',
    icon: 'Activity',
    useCaseStory_ar:
      'ربط أجهزة الشبكة والخوادم بمنظومة مراقبة ترسل تنبيهاً فورياً لفريق الصيانة عند توقف أي جهاز.',
    useCaseStory_en:
      'Implemented continuous infrastructure probers generating automated alerts upon host or port failures.',
    features_ar: [
      'متابعة حية لاستهلاك المعالج والذاكرة وسعات التخزين في الخوادم',
      'فحص اتصال أجهزة الشبكة ومسجلات كاميرات المراقبة NVR',
      'إرسال تنبيهات فورية عبر البريد ورسائل الهاتف عند حدوث خلل',
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
      'تطبيق نظام ERP مخصص لإدارة المخازن والمبيعات وإصدار الفواتير الإلكترونية المعتمدة ضريبياً.',
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
      'إرسال إشعارات وتنبيهات فورية للمستخدمين بحالة الطلبات',
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
      'تصميم مسارات عمل واضحة تمنع تشتت الموظفين وتقلل أخطاء الإدخال',
      'نماذج أولية تفاعلية لتجربة النظام واختباره قبل البدء في البرمجة',
      'واجهات متناسقة تدعم اللغتين العربية والإنجليزية والوضعين الفاتح والداكن',
    ],
    features_en: [
      'Streamlined operational workflows reducing data entry fatigue and errors',
      'Interactive wireframes and prototypes tested prior to development',
      'Bilingual RTL/LTR design system supporting light and dark modes',
    ],
  },
];`;

// 2. Updated NUZUL_PACKAGES array
const updatedPackagesCode = `export const NUZUL_PACKAGES: EnterprisePackage[] = [
  {
    id: 'starter',
    name_en: 'Starter',
    name_ar: 'البداية',
    subtitle_en: 'Clinic · Office · Small Business',
    subtitle_ar: 'عيادة · مكتب · شركة صغيرة',
    badge_en: 'Fixed Pricing',
    badge_ar: 'سعر محدد',
    price_setup_egp: 'رسوم التأسيس: 15,000 – 25,000 ج.م',
    price_monthly_egp: 'الدعم الشهري: 1,000 – 2,000 ج.م [VERIFY Q3]',
    price_setup_usd: 'Setup fee: 15,000 – 25,000 EGP',
    price_monthly_usd: 'Monthly support: 1,000 – 2,000 EGP [VERIFY Q3]',
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
      '10 صناديق بريد الشركة مع توثيق كامل',
      'ضبط جدار الحماية وعزل المنافذ',
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
      'ضبط جدار الحماية وعزل المنافذ غير المستخدمة',
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
      'Periodic maintenance and SLA agreement [VERIFY]',
    ],
    summary_ar: [
      'ربط الفروع عبر Site-to-Site VPN مشفر',
      'بريد الشركة حتى 100 صندوق مع حماية كاملة',
      'غرفة خوادم مصغرة أو كابينة Rack مركزية',
      'عقد صيانة ودعم دوري [VERIFY]',
    ],
    details_en: [
      'Encrypted Site-to-Site VPN connecting regional branches',
      'Corporate email for up to 100 mailboxes with DMARC',
      'Compact server room or centralized rack fitting',
      'Periodic maintenance and SLA support agreement [VERIFY]',
    ],
    details_ar: [
      'ربط الفروع عبر Site-to-Site VPN مشفر',
      'بريد الشركة حتى 100 صندوق مع حماية كاملة',
      'غرفة خوادم مصغرة أو كابينة Rack مركزية',
      'عقد صيانة ودعم دوري [VERIFY]',
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
    price_setup_egp: 'حسب المعاينة [VERIFY Q2]',
    price_monthly_egp: 'مقايسة تفصيلية مكتوبة بعد المعاينة',
    price_setup_usd: 'Scoped via site survey [VERIFY Q2]',
    price_monthly_usd: 'Detailed itemized bill of materials post-survey',
    highlighted: false,
    summary_en: [
      'Turnkey server room fit-out & redundant power',
      'Site-to-Site VPN with dual-ISP failover',
      'Dedicated engineer or 24/7 SLA [VERIFY Q6]',
      'As-Built runbook & handover certification',
    ],
    summary_ar: [
      'تصميم وتنفيذ غرفة خوادم وتجهيزات الطاقة',
      'Site-to-Site VPN بين كافة المقرات مع خطوط مزدوجة',
      'مهندس مقيم أو عقد تشغيل 24/7 [VERIFY Q6]',
      'توثيق هندسي شامل ومحضر استلام فني',
    ],
    details_en: [
      'Turnkey server room fit-out and redundant power sizing',
      'Site-to-Site VPN across all offices with dual-ISP failover',
      'Dedicated resident engineer or tailored 24/7 SLA retainer [VERIFY Q6]',
      'Complete As-Built infrastructure runbook and handover certification',
    ],
    details_ar: [
      'تصميم وتنفيذ غرفة خوادم وتجهيزات الطاقة الاحتياطية',
      'Site-to-Site VPN بين كافة المقرات والفروع مع خطوط إنترنت مزدوجة',
      'مهندس مقيم أو عقد تشغيل (SLA) مخصص 24/7 [VERIFY Q6]',
      'توثيق هندسي شامل للبنية التحتية ومحضر استلام فني',
    ],
  },
];`;

// 3. Updated mapCategoryAr and BUNDLED_PACKAGES
const updatedCategoryAndBundled = `function mapCategoryAr(key: string, id?: number): string {
  if (key === 'network_infra') return 'الشبكات والبنية التحتية';
  if (key === 'infra_cloud' || key === 'servers' || key === 'private_cloud') return 'السحابة والاستضافة';
  if (key === 'security_obs' || key === 'observability') return 'الأمن السيبراني';
  if (key === 'software') return 'البرمجيات وأنظمة الإدارة';
  if (id && [1, 2, 3].includes(id)) return 'الشبكات والبنية التحتية';
  return 'الشبكات والبنية التحتية';
}

export const SERVICES: NormalizedServiceItem[] = NUZUL_SERVICES.map((s) => ({
  id: \`service-\${s.id}\`,
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
});`;

// 4. Updated LIVE_DEMOS and IMPLEMENTATION_STEPS
const updatedDemosAndRoadmap = `export const LIVE_DEMOS = [
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
      { label: 'الربط الضريبي', labelEn: 'Tax Integration', value: 'ETA SDK v1.0 [VERIFY Q8]', trend: 'ETA Ready' },
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
    description: 'مراجعة البنية الحالية، وتحديد نقاط الاختناق والمخاطر الأمنية. [VERIFY Q5]',
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
    description: 'إعداد الخوادم والشبكة، ونقل البيانات خارج أوقات الذروة. [VERIFY Q5]',
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
    description: 'فحص الثغرات (Vulnerability Scan)، وتفعيل Firewall، وإعداد Backup منفصل عن الشبكة. [VERIFY Q5]',
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
    description: 'مراقبة الأداء [VERIFY Q6: 24/7]، والرد على البلاغات حسب مستويات الخدمة في العقد. [VERIFY Q6]',
    descriptionEn: 'Continuous performance telemetry and SLA-governed incident resolution.',
    deliverable: 'اتفاقية مستوى الخدمة (SLA Contract)',
    deliverableEn: 'Active SLA Agreement',
  },
];`;

// Replace NUZUL_SERVICES block
const servicesStart = content.indexOf('export const NUZUL_SERVICES: ServiceItem[] = [');
const servicesEnd = content.indexOf('export const NUZUL_PACKAGES: EnterprisePackage[] = [');
if (servicesStart === -1 || servicesEnd === -1) {
  throw new Error('Could not locate NUZUL_SERVICES block in file');
}
content = content.slice(0, servicesStart) + updatedServicesCode + '\n\n' + content.slice(servicesEnd);

// Replace NUZUL_PACKAGES block
const pkgStart = content.indexOf('export const NUZUL_PACKAGES: EnterprisePackage[] = [');
const pkgEnd = content.indexOf('export const NUZUL_HOSTING_PLANS: HostingPlan[] = [');
if (pkgStart === -1 || pkgEnd === -1) {
  throw new Error('Could not locate NUZUL_PACKAGES block in file');
}
content = content.slice(0, pkgStart) + updatedPackagesCode + '\n\n' + content.slice(pkgEnd);

// Replace mapCategoryAr and BUNDLED_PACKAGES
const catStart = content.indexOf('function mapCategoryAr(');
const catEnd = content.indexOf('export type HostingCategory =');
if (catStart === -1 || catEnd === -1) {
  throw new Error('Could not locate mapCategoryAr / BUNDLED_PACKAGES block in file');
}
content = content.slice(0, catStart) + updatedCategoryAndBundled + '\n\n' + content.slice(catEnd);

// Replace LIVE_DEMOS and IMPLEMENTATION_STEPS
const demosStart = content.indexOf('export const LIVE_DEMOS = [');
const demosEnd = content.indexOf('export const STATS = [');
if (demosStart === -1 || demosEnd === -1) {
  throw new Error('Could not locate LIVE_DEMOS / IMPLEMENTATION_STEPS block in file');
}
content = content.slice(0, demosStart) + updatedDemosAndRoadmap + '\n\n' + content.slice(demosEnd);

fs.writeFileSync(filePath, content, 'utf-8');
console.log('Successfully updated src/data/nuzulData.ts with pristine /services copy deck!');
