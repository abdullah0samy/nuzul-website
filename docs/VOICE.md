# Nuzul Tech Rebuild: Brand Voice, Editorial Standards & Copy Guide (`VOICE.md`)

**Last Updated:** `2026-11-04`  
**Phase:** Phase 2 — Benchmark Research, Claims Register, Voice Guide  
**Reference:** `NUZUL_REBUILD_MASTER_BRIEF.md` (Section 2, Section 3.2, Section 3.3, Section 3.4)

---

## 1. Core Brand Voice & Persona

### Who Is Speaking, and to Whom?
- **Speaker:** A Senior Infrastructure, Cloud & Cybersecurity Architect at **Nuzul Tech (نُزول تِك)** in Cairo.
- **Audience:** CTOs, IT Directors, Hospital/Clinic Directors, Financial & Audit Partners, Factory Operations Managers, and Founders in Egypt and the GCC.
- **Language Register:** Modern Standard Arabic (الفصحى الحديثة الواضحة) that is plain, direct, technical, and business-like, grounded in the Egyptian enterprise context (e.g., EGP billing, Egyptian Tax Authority `ETA` e-invoicing, multi-branch connectivity across governorates).
  - **Not colloquial (غير عامية):** Avoid conversational Egyptian slang in body copy (`"بتحتاج"`, `"بيخلي"`, `"بيوفر"`, `"شغل احترافي ومحترم جداً"`, `"فولدر"`, `"شيتات الإكسيل"` currently found in `nuzulData.ts:1554, 1735, 1754, 1773, 1982`).
  - **Not poetic or salesy (غير إنشائية ولا دعائية):** Avoid inflated metaphors, empty superlatives, and AI-style marketing filler (`"بيئات تشغيل متطورة"`, `"حماية مطلقة"`, `"سرعة لا مثيل لها"`, `"نحن نؤمن"`).

---

## 2. Structural & Syntactic Rules (Mandatory Across All Pages)

1. **Specific Beats Adjective:**
   - Name the exact component, number, unit, scope, and operational responsibility.
   - *Wrong:* `"خوادم سحابية فائقة السرعة ببيئات تشغيل متطورة"`
   - *Right:* `"خوادم Cloud VPS بعزل KVM مخصص ووحدات تخزين NVMe"`
2. **Sentence Length & Voice:**
   - One idea per sentence. Short sentences (12–22 words in Arabic).
   - Use active, accountable verbs (`"نصمم"`, `"ننفذ"`, `"نعزل"`, `"نراقب"`, `"نوثق"`) instead of abstract nominal chains.
3. **Latin Technical Terms Inside Arabic Sentences (Write Once — No Parenthetical Duplicates):**
   - Keep standard industry acronyms in Latin script inside Arabic sentences: `SLA`, `VPN`, `NGFW`, `VLAN`, `RPO`, `RTO`, `SIEM`, `NVMe`, `KVM`, `RAM`, `vCPU`, `ERP`, `EMR`, `PACS`, `DICOM`, `VoIP`, `SPF`, `DKIM`, `DMARC`, `TLS 1.3`, `DNSSEC`, `RAID-10`, `Active Directory`.
   - Write each term **once**. Never duplicate the same label in Arabic and English inside parentheses (e.g., never write `"الأمن والمراقبة (SECURITY & OBSERVABILITY)"` or `"شجرة رد آلي تفاعلية (IVR) (Interactive Voice Response)"`).
4. **Mixed-Direction (`RTL` + `LTR`) & Numerals:**
   - Use **Western digits (`0-9`)** for all prices, hardware specifications, percentages, latencies, and dates (`199 ج.م`, `24/7`, `99.9%`, `15 دقيقة`).
   - Wrap every mixed-direction technical value (`2 GB DDR4 RAM`, `4 vCPU Dedicated`, `60 GB NVMe`, `+20 114 0565057`) in `<bdi dir="ltr" className="ltr-num">` (`direction: ltr; unicode-bidi: isolate`).
5. **Hardware & Plan Spec Cells:**
   - Format spec cells strictly as `[number] [unit] [type]`:
     - `2 vCPU Dedicated`
     - `4 GB DDR4 ECC`
     - `60 GB NVMe`
     - `1 Gbps Port`
     - `3 TB / Month`
   - Zero marketing adjectives (`High-Speed`, `High-Clock`, `High-IOPS`, `Low-Latency`, `Redundant`, `Pure`, `Advanced`) inside table cells. Put beginner-friendly explanations inside `?` popover tooltips.
6. **Every Promise Requires a Definition:**
   - **Uptime SLA:** Must state the measurement period (calendar month), what counts as downtime (unplanned host or network loss exceeding 5 consecutive minutes), exclusions (scheduled maintenance, client OS misconfiguration), and the remedy (service credit percentage).
     - Reference math: `99.9%` ≈ max `43.8 minutes` downtime/month; `99.95%` ≈ max `21.9 minutes`/month; `99.99%` ≈ max `4.38 minutes`/month.
   - **Support Response Times:** Must be tied to severity levels (`P1` Critical complete outage, `P2` Major degradation, `P3` Minor issue, `P4` General inquiry/change request) and contract tier.
   - **Backup & Disaster Recovery:** State the backup architecture (`3-2-1`, `Immutable Backups`) and define `RPO` (Recovery Point Objective — maximum age of data restored) and `RTO` (Recovery Time Objective — target time to restore service) based on dataset size and standby tier.

---

## 3. Global Terminology & Positioning Policies

### 3.1 Removal of `"المستشفيات"` from General Company Positioning
- **Rule:** Nuzul Tech is a general B2B **IT Solutions & Engineering Consultancy (`حلول واستشارات تقنية المعلومات`)** serving enterprises, financial firms, logistics fleets, factories, retail chains, non-profits, and healthcare institutions.
- **Action:** Wherever `"المستشفيات"` was used as a top-level category or general company tagline, it must remain replaced with **`"حلول واستشارات تقنية المعلومات"`**. Legitimate healthcare case studies (`Trust Hospital`, `ABCH Hospital`, `Cairo Cure`, `Lebanon Hospital`, `Dr. Khaled Obeido Clinic`) retain their factual clinical context inside `/case-studies` once approved by the owner.

### 3.2 Internal Open-Source Tooling vs. Commercial Enterprise Brands
Per Section 2 Rule 6 of the Master Brief:
- **Never name internal open-source infrastructure tools as public product names:**

| Internal Open-Source Tool (Do Not Use in Public Copy) | Approved Public Capability Description (AR) | Approved Public Capability Description (EN) |
| :--- | :--- | :--- |
| `Proxmox VE` | `محاكاة افتراضية بعزل KVM مخصص` | `Dedicated KVM Virtualization` |
| `Grafana` / `Prometheus` / `Zabbix` | `لوحات مراقبة حية وتنبيهات استباقية على مدار الساعة` | `24/7 Infrastructure Monitoring & Alerting` |
| `TrueNAS` / `OpenZFS` / `Ceph` | `وحدات تخزين مؤسسية بمصفوفات RAID ولقطات غير قابلة للتعديل` | `Enterprise RAID Storage & Immutable Snapshots` |
| `pfSense` / `OPNsense` | `جدار حماية شبكي وعزل VLAN` | `Network Firewall & VLAN Segmentation` |
| `FreePBX` / `Asterisk` | `نظام سنترال شبكي موحد IP-PBX / VoIP` | `Unified IP-PBX & VoIP Telephony` |

- **Commercial / Branded Enterprise Products (Allowed Where True):**
  - `Fortinet` / `FortiGate NGFW`, `Cisco`, `VMware`, `CloudLinux`, `LiteSpeed`, `cPanel`, `Cloudflare`, `Microsoft Active Directory`, `Windows Server`, `Ubuntu`.

---

## 4. Glossary of Preferred Technical Terms (Arabic Usage + Latin Term)

Write the Arabic phrase naturally and include the standard Latin technical term **once** where helpful for technical clarity:

| # | Preferred Technical Concept | Natural Arabic Sentence Usage | Standard Latin Term |
| :--- | :--- | :--- | :--- |
| **1** | Service Level Agreement | نلتزم بوقت استجابة ونسبة توافر محددة في اتفاقية مستوى الخدمة `SLA`. | `SLA` |
| **2** | Recovery Point Objective | يحدد هدف نقطة الاستعادة `RPO` أقصى فترة زمنية للبيانات عند الاسترجاع. | `RPO` |
| **3** | Recovery Time Objective | يحدد هدف زمن الاستعادة `RTO` المدة المستهدفة لإعادة تشغيل النظام بعد العطل. | `RTO` |
| **4** | 3-2-1 Backup Rule | نطبق قاعدة النسخ الاحتياطي `3-2-1`: ثلاث نسخ على وسيطين مختلفين ونسخة خارج الموقع. | `3-2-1 Backup` |
| **5** | Immutable Backups | تُحفظ النسخ الاحتياطية بصيغة غير قابلة للتعديل أو الحذف `Immutable Backups` للحماية من الفدية. | `Immutable Backups` |
| **6** | Restore Test & DR Drill | نجري اختبارات استعادة دورية `Restore Tests` للتحقق من سلامة النسخ الاحتياطية. | `Restore Test / DR Drill` |
| **7** | Change Management | تخضع تحديثات الشبكة والخوادم لإجراءات إدارة التغيير `Change Management` خارج ساعات الذروة. | `Change Management` |
| **8** | Patch Management | نطبق التحديثات الأمنية لنظام التشغيل والخدمات وفق جدول إدارة التحديثات `Patch Management`. | `Patch Management` |
| **9** | Tiered Engineering Support | يتولى فريق الدعم الهندسي `L1/L2/L3` معالجة البلاغات حسب درجة الأولوية. | `L1/L2/L3 Support` |
| **10** | Network Operations Center | يراقب مركز عمليات الشبكة `NOC` حالة الخوادم والروابط على مدار الساعة. | `NOC` |
| **11** | Vulnerability Assessment | نفحص الأنظمة دورياً لاكتشاف الثغرات الأمنية `Vulnerability Assessment` قبل استغلالها. | `Vulnerability Assessment` |
| **12** | Penetration Testing | ننفذ اختبارات اختراق `Penetration Testing` لتقييم أمان تطبيقات الويب والشبكة الداخلية. | `Penetration Test` |
| **13** | Next-Generation Firewall | نركب جدران حماية من الجيل التالي `NGFW` لفحص حركة المرور ومنع التسلل. | `NGFW` |
| **14** | Network Segmentation | نعزل أقسام المحاسبة والخوادم الحساسة عن شبكة الزوار عبر تقسيم الشبكة `VLAN`. | `VLAN` |
| **15** | Network Access Control | نضبط صلاحيات اتصال الأجهزة بالشبكة السلكية واللاسلكية عبر معيار `802.1X`. | `802.1X` |
| **16** | Site-to-Site Encrypted Tunnel | نربط المقر الرئيسي بالفروع عبر أنفاق اتصال مشفرة `IPsec VPN`. | `IPsec VPN` |
| **17** | High-Availability Cluster | نشغل الخوادم الحرجة ضمن عنقود عالي التوافر `HA Cluster` للتحويل التلقائي عند تعطل العتاد. | `HA Cluster` |
| **18** | Kernel-based Virtual Machine | تعمل الخوادم السحابية بتقنية العزل المخصص للنواة `KVM` لضمان عدم تداخل الموارد. | `KVM` |
| **19** | Non-Volatile Memory Express | نستخدم وحدات تخزين `NVMe` لتسريع قراءة وكتابة قواعد البيانات. | `NVMe` |
| **20** | Error-Correcting Code RAM | تعمل خوادم الأعمال بذاكرة `DDR4 ECC` لمنع تلف البيانات بالذاكرة العشوائية. | `DDR4 ECC` |
| **21** | Security Information & Event Management | تجمع منصة `SIEM` سجلات الخوادم وجدران الحماية لرصد محاولات الدخول غير المصرح بها. | `SIEM` |
| **22** | Web Application Firewall | يحمي جدار حماية التطبيقات `WAF` المواقع والواجهات البرمجية من هجمات الحقن والاستغلال. | `WAF` |
| **23** | DDoS Mitigation | تعمل الحماية الشبكية `L3/L4/L7 DDoS Mitigation` على تصفية الهجمات الحجمية قبل وصولها للخادم. | `L3/L4/L7 DDoS` |
| **24** | Email Authentication Trio | نوثق نطاق البريد الإلكتروني عبر سجلات `SPF` وتوقيع `DKIM` وسياسة `DMARC`. | `SPF / DKIM / DMARC` |
| **25** | Domain Name System Security | نفعل امتدادات أمان النطاق `DNSSEC` لحماية سجلات التوجيه من التلاعب. | `DNSSEC` |
| **26** | Centralized Directory Governance | ندير حسابات الموظفين وصلاحيات الوصول للملفات مركزياً عبر `Active Directory`. | `Active Directory` |
| **27** | Structured Cabling | نمدد كابلات الشبكة المعتمدة `Cat6A` وكابلات الألياف الضوئية `Fiber Optic` مع ترقيم النقاط. | `Cat6A / Fiber Optic` |
| **28** | Voice over IP & PBX | نوحد اتصالات الفروع والرد الآلي `IVR` عبر نظام سنترال شبكي `VoIP PBX`. | `VoIP PBX / IVR` |
| **29** | Picture Archiving & Communication | نفصل أرشيف صور الأشعة الطبية `PACS / DICOM` على وحدات تخزين محلية سريعة. | `PACS / DICOM` |
| **30** | Electronic Medical Records | يوفر نظام السجلات الطبية الإلكترونية `EMR` وصولاً منظماً للتاريخ المرضي والروشتات. | `EMR` |
| **31** | Enterprise Resource Planning | يربط نظام `ERP` دورة المشتريات والمخازن والمبيعات والحسابات العامة في قاعدة بيانات واحدة. | `ERP` |
| **32** | User Acceptance Testing | نتحقق من مطابقة النظام البرمجي للمتطلبات عبر اختبارات القبول `QA & UAT` قبل الاستلام. | `QA / UAT` |
| **33** | Runbook & Handover Documentation | نسلم العميل وثيقة التشغيل الهندسية `Runbook` ومخططات الشبكة وكلمات المرور الموثقة. | `Runbook / Handover Docs` |

---

## 5. Full Banned Phrases & Anti-Slop Register

Every phrase below is **strictly forbidden** across all headings, body paragraphs, cards, tables, and meta tags:

| # | Banned Phrase / Pattern | Current Repo Occurrences (`file:line`) | Why It Is Banned | Approved Engineering Replacement |
| :--- | :--- | :--- | :--- | :--- |
| **1** | `"حلول متكاملة"` / `"حلولاً متكاملة"` / `"منظومة متكاملة"` | `Footer.tsx:23`, `PackagesSection.tsx:30`, `App.tsx:94`, `nuzulData.ts:69, 80, 184, 503` | Section 3.3 banned cliché; vague filler that says nothing about actual scope. | Name the exact deliverables (`"هندسة الشبكات، الخوادم السحابية، الأمن السيبراني، وأنظمة ERP"`). |
| **2** | `"بيئات تشغيل متطورة"` / `"جدران حماية متطورة"` / `"شبكة وكاميرات مراقبة متطورة"` | `nuzulData.ts:400, 558, 1754, 1792, 1925, 2058` | Section 3.3 banned phrase (`"بيئات تشغيل متطورة"`). | State the technology (`"جدران حماية عتادية NGFW"`, `"كاميرات مراقبة IP بدقة 4K"`, `"عنقود محاكاة افتراضية KVM"`). |
| **3** | `"صفر ثانية توقف"` / `"صفر توقف عن العمل"` / `"صفر خسائر تشغيلية"` | `nuzulData.ts:206, 430, 1137, 1178, 1208, 1653` | Section 3.3 banned phrase (`"صفر ثانية توقف"`). No physical system can guarantee zero downtime without conditions. | `"نقل تدريجي للبيانات خارج ساعات الذروة دون إيقاف العمل اليومي"` or `"تحديثات متدرجة (Rolling Updates)"`. |
| **4** | `"100%"` without a strict technical definition (`"وصول 100% لصندوق الوارد"`, `"حماية 100%"`, `"جاهزية 100%"`) | `nuzulData.ts:169, 224, 283, 451, 454, 738, 744, 818, 842, 888, 901, 911, 1101, 1120, 1151, 1162, 1209, 1251, 1389, 1464, 1609, 1642, 1767, 1800, 1848, 2001` | Section 3.3 banned pattern (`"100%" without a definition`). | State the exact technical mechanism (`"صلاحية وصول Root كاملة"`, `"توثيق SPF/DKIM/DMARC لمنع انتحال النطاق"`, `"عزل أحادي المستأجر Single-Tenant"`). |
| **5** | `"فائقة السرعة"` / `"فائق الأداء"` / `"فائقة الأداء"` | `nuzulData.ts:42, 160, 169, 184, 236, 244, 255, 263, 525, 697, 759, 760, 886, 951, 1609, 1697, 1712, 1716, 1849, 1906, 1940, 1944, 2092, 2096` | Repetitive marketing superlative (appears 24+ times in `nuzulData.ts`). | State the actual storage/network spec (`"وحدات تخزين NVMe"`, `"اتصال شبكي 1 Gbps"`, `"عبر الشبكة المحلية LAN"`). |
| **6** | `"حماية مطلقة"` / `"حماية منيعة"` / `"حماية تامة"` / `"استقرار تام"` | `nuzulData.ts:241, 255, 263, 279, 430, 842, 911, 935, 1162, 1250, 1389, 1653, 1664, 2001` | Unverifiable security absolutes. | State the security layer (`"نسخ احتياطي معزول غير قابل للتعديل"`, `"تشفير اتصال عبر TLS 1.3 وIPsec VPN"`). |
| **7** | `"نصنع الفرق"` / `"رحلتك"` / `"كل ما يحتاجه عملك تحت سقف واحد"` / `"قمة تنفيذ"` | Section 3.3 banned list | Generic AI/agency clichés. | Omit completely; state what Nuzul Tech engineers build and operate. |
| **8** | `"أفضل"` / `"رائد"` / `"مبتكر"` / `"ثورة"` / `"نحن نؤمن"` / `"أفضل ما في العالمين"` | `nuzulData.ts:1697, 1963, 2096` (`"ابتكار حل"`, `"بيبتكر"`, `"أفضل ما في العالمين"`) | Section 3.3 banned list. | Use factual engineering verbs (`"تصميم بنية هجينة تجمع بين التخزين المحلي والنسخ السحابي"`). |
| **9** | `"بضغطة زر"` / `"بضغطة زر واحدة"` / `"في ثوانٍ معدودة"` | `nuzulData.ts:339, 719, 1389, 1511, 1554, 1697, 1925, 2039` | Consumer-app cliché inappropriate for enterprise infrastructure. | `"عبر قوالب نشر مؤتمتة"`, `"بيئة اختبار Staging معزولة"`, `"استدعاء مباشر من شاشة الطبيب"`. |
| **10** | Colloquial Egyptian verb prefixes (`"بتحتاج"`, `"بيخلي"`, `"بيوفر"`, `"بتقدم"`, `"بيقوموا"`, `"شيتات الإكسيل"`) | `nuzulData.ts:1554, 1735, 1754, 1773, 1792, 1811, 1830, 1849, 1887, 1906, 1925, 1944, 1963, 1982, 2001, 2020, 2039, 2058` | Violates Section 3.3 rule (`"Modern Standard Arabic, plain and business-like... Not colloquial"`). | Convert all colloquial blog/testimonial phrasing to clean, direct Modern Standard Arabic. |
| **11** | Rhetorical questions in headings (`"كيف تحمي بيانات شركتك من فيروسات الفدية؟"`, `"متى تحتاج شركتك عتاداً فيزيائياً مخصصاً؟"`) | `nuzulData.ts:1705, 1819, 1838, 1857, 1914, 1933, 1952, 2009, 2028, 2085`, `HomeFinalCTA.tsx:36` | Section 3.3 explicitly bans **rhetorical questions in headings**. | Use declarative engineering headings (`"بنية النسخ الاحتياطي المعزول 3-2-1 للحماية من برمجيات الفدية"`, `"معايير الاختيار بين الخوادم الفيزيائية المخصصة وخوادم Cloud VPS"`). |
| **12** | Strings of three adjectives & exclamation marks (`!`) | Across legacy descriptions | Section 3.3 banned pattern. | Maximum one precise qualifier per noun; zero exclamation marks. |

---

## 6. Twelve Real Before / After Copy Rewrites from the Current Repository

Every "Before" example below is quoted **verbatim** from the current repository with its exact `file:line` location, followed by the diagnosis and the approved "After" rewrite for Phases 4, 6, 7, and 8.

---

### Example 1: Footer Company Summary (`src/components/layout/Footer.tsx:23`)
- **Before (Verbatim):**
  > `نُزول تِك (Nuzul Tech) هي الشريك التقني للمؤسسات والشركات في مصر. نقدم حلولاً متكاملة تبدأ من تأسيس الشبكات وتجهيز المقرات وصولاً إلى السيرفرات السحابية والأنظمة البرمجية المخصصة.`
- **Violations:** Uses banned phrase `"حلولاً متكاملة"` and generic filler.
- **After (Approved AR):**
  > `نُزول تِك شركة مصرية متخصصة في حلول واستشارات تقنية المعلومات للشركات. نتولى تصميم وتنفيذ الشبكات المهيكلة، استضافة الخوادم السحابية، تأمين الأنظمة السيبرانية، وتطوير منظومات ERP بعقود مستوى خدمة SLA موثقة.`
- **After (Approved EN):**
  > `Nuzul Tech is an Egyptian IT infrastructure and engineering consultancy. We design, deploy, and operate structured networks, dedicated KVM cloud servers, cybersecurity controls, and custom ERP systems under formal SLAs.`

---

### Example 2: Home Final CTA Heading (`src/components/home/HomeFinalCTA.tsx:36`)
- **Before (Verbatim):**
  > `هل تخطط لتحديث البنية التحتية أو نقل خوادم شركتك؟`
- **Violations:** Uses a rhetorical question in a major section heading (banned by Section 3.3).
- **After (Approved AR):**
  > `تحدث مع مهندس بنية تحتية لتقييم شبكتك أو تخطيط نقل خوادمك`
- **After (Approved EN):**
  > `Speak with an Infrastructure Architect to Scope Your Network or Server Migration`

---

### Example 3: Packages Section Heading (`src/components/packages/PackagesSection.tsx:30`)
- **Before (Verbatim):**
  > `حلول متكاملة للشركات بأسعار واضحة ومحددة`
- **Violations:** Uses banned phrase `"حلول متكاملة"`.
- **After (Approved AR):**
  > `باقات تأسيس وتشغيل البنية التحتية للشركات`
- **After (Approved EN):**
  > `Turnkey Infrastructure Build & Managed Operations Packages`

---

### Example 4: Service #7 — Private Cloud (`src/data/nuzulData.ts:160-169`)
- **Before (Verbatim):**
  > `سحابة خاصة داخل منشأتك تمنحك السيطرة الكاملة على بياناتك مع سرعة فائقة وتوفير 60% من تكاليف الاستضافة الدولية.`
  > Features: `['سيادة كاملة على البيانات داخل مقر المنشأة', 'جاهزية واستمرارية عمل مزدوجة بدون انقطاع', 'أداء فائق بدون الاعتماد على سرعة الإنترنت الخارجي']`
- **Violations:** Unverified `60%` figure in generic description, repetitive `"سرعة فائقة"` / `"أداء فائق"`, and `"بدون انقطاع"`.
- **After (Approved AR):**
  > `تأسيس سحابة خاصة داخل مقر منشأتك أو في مركز بيانات محلي بعزل كامل للموارد، مما يضمن بقاء قواعد البيانات الحساسة داخل مصر وتشغيل الأنظمة عبر الشبكة المحلية LAN بتكلفة ثابتة بالجنيه المصري.`
  > Features: `['حفظ البيانات وتشغيلها داخل مقر المنشأة (On-Premises)', 'عنقود خوادم عالي التوافر (HA Cluster) للتحويل التلقائي عند تعطل العتاد', 'وصول مباشر عبر الشبكة المحلية LAN دون الاعتماد على الإنترنت الخارجي']`

---

### Example 5: Service #11 — Cloud VPS (`src/data/nuzulData.ts:236-244`)
- **Before (Verbatim):**
  > `خوادم سحابية مخصصة وفائقة السرعة تمنح أعمالك الاستقلالية والمرونة التامة للتوسع الفوري بأسعار محلية مستقرة.`
  > Features: `['صلاحيات تحكم كاملة ومستقلة', 'أقراص تخزين فائقة السرعة مع اتصال شبكي عالي', 'مرونة الترقية والتوسع اللحظي حسب نمو النشاط']`
- **Violations:** Uses `"فائقة السرعة"` twice and omits the actual technical isolation (`KVM`), storage (`NVMe`), and access (`Root SSH`) terms.
- **After (Approved AR):**
  > `خوادم Cloud VPS معزولة بتقنية KVM ومزودة بوحدات تخزين NVMe وذاكرة DDR4 ECC، مخصصة لتشغيل قواعد البيانات وتطبيقات الأعمال بفوترة شهرية أو سنوية بالجنيه المصري.`
  > Features: `['صلاحية وصول Root كاملة عبر SSH وإدارة مستقلة لنظام التشغيل', 'وحدات تخزين NVMe بمصفوفات RAID-10 ومنفذ اتصال 1 Gbps', 'ترقية موارد المعالج vCPU والذاكرة RAM دون إعادة تهيئة الخادم']`

---

### Example 6: Service #21 — Disaster Recovery & Immutable Backup (`src/data/nuzulData.ts:430-439`)
- **Before (Verbatim):**
  > `حماية منيعة ضد برمجيات الفدية تضمن استعادة كافة قواعد البيانات والأنظمة في دقائق معدودة وصفر خسائر تشغيلية.`
- **Violations:** Uses `"حماية منيعة"`, `"صفر خسائر تشغيلية"`, and promises `"في دقائق معدودة"` without defining `RPO` and `RTO`.
- **After (Approved AR):**
  > `منظومة نسخ احتياطي وفق قاعدة 3-2-1 تحفظ نسخاً مشفرة وغير قابلة للتعديل (Immutable Backups) خارج الموقع، مع تحديد هدف نقطة الاستعادة RPO وزمن الاستعادة RTO في العقد وإجراء اختبارات استرجاع دورية.`

---

### Example 7: Service #22 — Corporate Business Email & DMARC (`src/data/nuzulData.ts:449-456`)
- **Before (Verbatim):**
  > `بريد رسمي باسم شركتك محمي ضد التزييف والاحتيال المالي، يضمن وصول فواتيرك ومراسلاتك لصندوق الوارد مباشرة.`
  > Use Case: `هجرة وحماية 250 حساب بريد رسمي لمجموعة طبية مع منع انتحال الشخصية وضمان وصول 100% من الرسائل لصندوق الوارد.`
- **Violations:** Promises `"ضمان وصول 100% من الرسائل لصندوق الوارد"` (banned `"100%"` without definition; recipient mail servers govern final inbox placement).
- **After (Approved AR):**
  > `إعداد وتأمين البريد الرسمي على نطاق شركتك مع ضبط سجلات SPF وتوقيع DKIM الرقمي وسياسة DMARC لمنع انتحال النطاق وتقليل ارتداد المراسلات الرسمية.`
  > Use Case: `نقل وتأمين 250 صندوق بريد عبر مزامنة IMAP تدريجية مع تفعيل سياسة DMARC Reject لمنع إرسال رسائل منتحلة باسم النطاق.`

---

### Example 8: Hosting Plan #3 — Linux Cloud VPS (`src/data/nuzulData.ts:738-741`)
- **Before (Verbatim):**
  > `['صلاحية Root كاملة بنسبة 100%', 'موارد معالج وذاكرة مخصصة KVM', 'اتصال شبكي 1 Gbps مع ترافيك مفتوح', 'إمكانية الاختيار بين خوادم القاهرة أو فرانكفورت']`
- **Violations:** Uses `"بنسبة 100%"` on a boolean capability (`Root Access`) and `"ترافيك مفتوح"` without stating the monthly bandwidth quota (`3 TB / Month`).
- **After (Approved AR):**
  > `['صلاحية وصول Root كاملة عبر SSH', 'موارد مخصصة بعزل KVM: 2 vCPU و 4 GB DDR4 ECC', 'منفذ اتصال 1 Gbps بسعة نقل 3 TB شهرياً', 'نسخ احتياطي آلي خارج الموقع وحماية L3/L4/L7 DDoS']`

---

### Example 9: Case Study #1 — Trust Hospital Result (`src/data/nuzulData.ts:842-843`)
- **Before (Verbatim):**
  > `جاهزية تشغيلية للشبكة 99.99%، تغطية أمنية مرئية 100%، وحماية تامة للسجلات والمراسلات الطبية`
- **Violations:** Uses unverified `"100%"` and `"حماية تامة"`.
- **After (Approved AR):**
  > `تغطية المداخل وأروقة الطوارئ والصيدلية المركزية بـ 180 كاميرا IP بدقة 4K مع تسجيل مركزي RAID-6 لمدة 90 يوماً، وعزل شبكة الأجهزة الطبية عبر VLAN وجدار حماية Fortinet NGFW.`

---

### Example 10: Blog #3 — IT as a Service (`src/data/nuzulData.ts:1724, 1735`)
- **Before (Verbatim):**
  > Heading: `قطاع تقني كامل كخدمة (IT as a Service): خفض تكاليفك 60% وتخلّص من مرتبات مهندسي الـ IT المقيمين`
  > Body: `مع خدمة (IT as a Service) من نُزول تِك، بتحصل مؤسستك على فريق هندسي كامل: مهندس شبكات سيسكو، مسؤول أنظمة سحابية، وخبير أمن سيبراني مع مراقبة لحظية 24/7 وزيارات صيانة واستجابة فورية لأي طارئ بأقل من 40% من تكلفة التوظيف التقليدي.`
- **Violations:** Colloquial `"بتحصل"`, aggressive/unverified `"خفض تكاليفك 60% وتخلّص من مرتبات..."`, and undefined `"استجابة فورية"`.
- **After (Approved AR):**
  > Heading: `إدارة البنية التحتية كخدمة (IT as a Service): نموذج التشغيل الهندسي للشركات المتوسطة والكبرى`
  > Body: `يتيح نموذج الإدارة التقنية المستمرة (ITaaS) للشركات الاعتماد على فريق هندسي يضم متخصصين في الشبكات، إدارة الخوادم السحابية، والأمن السيبراني بعقد شهري ثابت بالجنيه المصري، يشمل المراقبة على مدار الساعة (24/7 NOC)، زيارات الصيانة الوقائية المجدولة، وأوقات استجابة محددة حسب درجة الأولوية (P1–P4).`

---

### Example 11: Blog #6 — Network Firewalls & VLANs (`src/data/nuzulData.ts:1792`)
- **Before (Verbatim):**
  > `توصيل جميع أجهزة الموظفين والطابعات والزوار مع سيرفرات الحسابات وقواعد البيانات في شبكة واحدة مفتوحة بيعتبر ثغرة أمنية خطيرة. مهندسو نُزول تِك بيقوموا بتركيب جدران نارية متطورة وعزل الشبكة عبر تقنية VLANs...`
- **Violations:** Colloquial `"بيعتبر"` and `"بيقوموا"`, plus banned `"متطورة"`.
- **After (Approved AR):**
  > `يمثل ربط أجهزة الموظفين والطابعات وشبكة Wi-Fi الزوار مع خوادم المحاسبة وقواعد البيانات على شبكة مسطحة واحدة (Flat Network) مخاطرة أمنية عالية تسمح بانتشار البرمجيات الخبيثة. يعمل مهندسو نُزول تِك على تركيب جدران حماية عتادية NGFW وتقسيم الشبكة عبر VLANs مع قوائم تحكم في الوصول ACL لعزل الخوادم الحساسة.`

---

### Example 12: Blog #8 — Immutable 3-2-1 Backups (`src/data/nuzulData.ts:1819, 1830`)
- **Before (Verbatim):**
  > Heading: `استراتيجية النسخ الاحتياطي الهجين المعزول 3-2-1: كيف تحمي بيانات شركتك من فيروسات الفدية؟`
  > Body: `برمجيات الفدية الخبيثة اليوم بتقوم بمسح الشبكة وتشفير كل الفولدرات المشتركة والهاردات الخارجية المتصلة بالأجهزة. الحل الوحيد المضمون هو نظام النسخ الهجين المعزول (Immutable Backups) الذي توفره نُزول تِك... مما يضمن استعادة كل برامجك وقواعد بياناتك خلال أقل من 15 دقيقة.`
- **Violations:** Rhetorical question in heading, colloquial `"بتقوم"`, `"الفولدرات"`, `"الهاردات"`, and blanket `"خلال أقل من 15 دقيقة"` without RPO/RTO conditions.
- **After (Approved AR):**
  > Heading: `بنية النسخ الاحتياطي المعزول 3-2-1 لحماية قواعد البيانات من برمجيات الفدية`
  > Body: `تستهدف برمجيات الفدية المجلدات المشتركة على الشبكة المحلية ووسائط التخزين المتصلة مباشرة بالخوادم. تطبق نُزول تِك معيار النسخ الاحتياطي 3-2-1 عبر حفظ لقطات مشفرة وغير قابلة للتعديل أو الحذف (Immutable Snapshots) في مستودع سحابي معزول خارج الموقع، مع تحديد زمن الاستعادة المستهدف (RTO) ونقطة الاستعادة (RPO) وفق حجم قواعد البيانات.`
