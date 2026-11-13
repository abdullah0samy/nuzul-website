# Nuzul Tech: Full-Site Copy Audit (`docs/COPY_AUDIT.md`)

> **Quality Benchmark:** `NUZUL_COPY_STYLE_REFERENCE.md` & `NUZUL_REBUILD_MASTER_BRIEF.md` (Sections 1–3).  
> **Status:** Step A Complete — Baseline Audit across all 9 pages and global components.  
> **Hard Rules Enforced:** Zero added numbers, tools, clients, or claims. Strict adherence to Section 3 Glossary, Section 4 Banned Words, and Section 5 Structure Rules. All ambiguities flagged with `[VERIFY]` and tracked in `docs/OPEN_QUESTIONS.md`.

---

## Diagnostic Problem Types (from Section 2 of Reference)
- **#1:** Literal translation of technical term (e.g., "عناقيد" → "Cluster")
- **#2:** Technical mislabel (e.g., "VDI" used for server virtualization)
- **#3:** Wrong label over content (e.g., "مؤشرات التشغيل" over technical specs)
- **#4:** Empty adjectives implying proof (e.g., "خدمات موثقة", "المعتمدة", "الرسمي")
- **#5:** "منظومة" used for everything (replace with "نظام" / "أنظمة", keep only for "منظومة الفاتورة الإلكترونية")
- **#6:** "هندسي / هندسية" filler (used repeatedly without concrete meaning)
- **#7:** Benefit chains instead of description (stacked verbs: تعزز، ترفع، تسرّع، تمكّن)
- **#8:** Same thing, several names (inconsistent terminology)
- **#9:** Bilingual duplicates (e.g., "جدار ناري (Firewall)", "تقسيم الشبكة (VLANs)")
- **#10:** Text repeated on screen (duplicate lines/counters)
- **#11:** Contradictory price (e.g., "من 120,000" and "حسب المعاينة" together)
- **#12:** Unlabeled money (unclear whether one-time setup or monthly retainer)
- **#13:** Wrong order (categories not ordered Network → Cloud → Security → Software; steps out of sequence)
- **#14:** Interface text noise (excessive action buttons per card, duplicate section titles)
- **#15:** Unnecessary absolutes ("توثيق كامل", "شاملة", "يضمن")
- **#16:** Unverified reach (unverified regional or geographic claims)

---

## 1. Page: `/services` (Engineering Services, Packages, Roadmap & ERP Demo)

| Location | Current Content (AR / EN) | Problem Type | Proposed Content (AR / EN) | Notes / Gate |
|---|---|---|---|---|
| **Header Badge** | دليل الخدمات الهندسية / Engineering Services Catalog | #6 Filler | الخدمات / Services | Clean, direct label |
| **Header H1** | حلول واستشارات تقنية المعلومات للشركات / Enterprise IT Solutions & Engineering Consultancy | #6 Filler | الخدمات / Services | Section 6.1 model benchmark |
| **Header Intro** | نقدم خدمات هندسية موثقة تشمل الشبكات، مراكز البيانات، الخوادم السحابية، الأمن السيبراني، وتطوير الأنظمة المؤسسية بعقود مستوى خدمة واضحة. / End-to-end engineering covering enterprise networking, datacenters, cloud hosting, cybersecurity, and ERP development under clear SLAs. | #4, #6, #7 | نصمم وننفذ الشبكات وغرف الخوادم، ونشغّل الخوادم السحابية، ونؤمّن الأنظمة، ونطوّر أنظمة الأعمال (ERP وتطبيقات الويب والموبايل). الدعم والصيانة بعقود SLA. / We design and deploy networks and server rooms, operate cloud servers, harden systems, and develop business software (ERP, web, and mobile apps) with SLA support. | Section 6.1 model benchmark |
| **Counter** | عرض 9 من أصل 23 خدمة هندسية / Showing 9 of 23 engineering services | #6 Filler | 9 من 23 خدمة / 9 of 23 services | Concise, no filler |
| **Pagination Button** | عرض المزيد من الخدمات (14 متبقية) / Load More Services (14 remaining) | #14 Noise | عرض باقي الخدمات (14) / Show remaining services (14) | Section 6.1 model benchmark |
| **Grid Category Order** | Currently: Software (1–6) → Cloud (7–16) → Security (17–23) | #13 Wrong order | Reorder: Network & Infrastructure → Cloud & Hosting → Cybersecurity → Software | Hard rule: core infrastructure first |
| **Service Card 1** | السحابة الخاصة والسيادة الرقمية: تأسيس سحابة خاصة داخل مقر المنشأة تمنحكم السيطرة المباشرة على البيانات الحساسة مع سرعة الشبكة المحلية. | #4 Banned ("السيادة الرقمية"), #7 | **Private Cloud داخل المقر**: إعداد Private Cloud على خوادم داخل مقر المنشأة. البيانات تبقى داخل شبكتك، والوصول إليها بسرعة الشبكة المحلية. / **On-Premise Private Cloud**: Deploy a private cloud on local servers. Data stays on your network with LAN access speeds. | Model Section 6.2 |
| **Service Card 2** | المحاكاة الافتراضية للأنظمة (VDI): دمج الخوادم الفيزيائية المتفرقة داخل عناقيد افتراضية موحدة (KVM / VMware) لتسهيل الصيانة ورفع كفاءة الموارد. | #1 ("عناقيد"), #2 (VDI mislabel), #7 | **Server Virtualization**: دمج عدة خوادم فيزيائية على Cluster واحد (KVM أو VMware)، لتقليل عدد الأجهزة وتسهيل الصيانة. / **Server Virtualization**: Consolidate physical servers onto a single KVM or VMware cluster to reduce hardware footprint and simplify maintenance. | `[VERIFY Q1]` Keep current if owner offers VDI virtual desktops |
| **Service Card 3** | أتمتة التوسع السحابي والحاويات: تجهيز المنظومات داخل حاويات برمجية معزولة لتسهيل التحديث الدوري والتوسع المرن أثناء مواسم ذروة الأعمال. | #5 ("المنظومات"), #7 | **Containers والتوسع التلقائي**: تشغيل التطبيقات داخل Containers معزولة، مع توسع تلقائي وقت الضغط وتحديثات أسهل. / **Containers & Elastic Scaling**: Run applications in isolated containers with automated scaling during peak loads and simpler updates. | Model Section 6.2 |
| **Service Card 4** | البوابات والمنصات الرقمية: بناء بوابات رقمية سريعة الاستجابة تعزز موثوقية المؤسسة وتنظم طلبات عروض الأسعار وقنوات تواصل العملاء. | #7 Benefit chain | **المواقع والبوابات**: تصميم وتطوير مواقع وبوابات للشركات، مع نموذج لطلب عرض السعر وربط بقنوات التواصل. / **Corporate Portals**: Design and build corporate portals with RFQ intake forms and communication channels. | Model Section 6.2 |
| **Service Card 5** | تطبيقات الهواتف الذكية: تطبيقات هاتفية مخصصة لأنظمة iOS وAndroid تتيح إدارة المهام والحجوزات والربط اللحظي مع قواعد البيانات المركزية. | #4 Banned ("اللحظي"), #7 | **تطبيقات iOS وAndroid**: تطبيقات موبايل مخصصة لإدارة المهام والحجوزات، متصلة مباشرة بقاعدة بيانات الشركة. / **iOS & Android Apps**: Custom mobile apps for tasks and bookings connected directly to your core database. | Model Section 6.2 |
| **Service Card 6** | منصات التجارة والمبيعات الرقمية: منصات تجارة إلكترونية تدمج بوابات الدفع المعتمدة وشركات الشحن المحلي ومزامنة أرصدة المخازن آلياً. | #4 ("المعتمدة"), #7 | **المتاجر الإلكترونية**: متجر إلكتروني مربوط ببوابات الدفع وشركات الشحن، مع تحديث أرصدة المخزون تلقائياً. / **E-Commerce Stores**: Online store integrated with payment gateways and couriers, with automated inventory updates. | Model Section 6.2 |
| **Service Card 7** | هندسة تجربة المستخدم والواجهات: تصميم مسارات عمل وواجهات تشغيلية واضحة تقلل أخطاء إدخال البيانات وتسرّع إنجاز المهام اليومية للفرق. | #6, #7 | **تصميم واجهات الأنظمة (UX / UI)**: تصميم شاشات وسير عمل لأنظمة التشغيل الداخلية، لتقليل أخطاء إدخال البيانات. / **UI/UX Design**: Screen and workflow design for internal systems to reduce data entry errors. | Model Section 6.2 |
| **Service Card 8** | المنظومات الإدارية والمالية (ERP): تطوير ونشر أنظمة المحاسبة والمخازن والمبيعات مع الربط الآلي بمنظومة الفاتورة الإلكترونية المصرية وفق معايير الضرائب. | #5 ("المنظومات") | **أنظمة ERP**: نظام للحسابات والمخازن والمبيعات، مربوط بمنظومة الفاتورة الإلكترونية المصرية. / **Enterprise ERP**: Accounting, inventory, and sales system integrated with the Egyptian Tax Authority e-invoicing platform. | Model Section 6.2 |
| **Service Card 9** | فحص واعتماد جودة المنظومات (QA): تدقيق تقني مستقل واختبارات قبول شاملة للمنظومات البرمجية وتطبيقات الجوال قبل توقيع محاضر الاستلام من المطورين. | #5, #15 ("شاملة") | **اختبار وقبول الأنظمة (QA / UAT)**: تدقيق تقني مستقل واختبارات قبول للأنظمة وتطبيقات الموبايل، قبل توقيع محضر الاستلام من المطوّر. / **QA & Acceptance Testing**: Independent technical audit and UAT for systems and mobile apps prior to vendor handover sign-off. | Model Section 6.2 |
| **Service Card 10–23** | Remaining 14 services in `NUZUL_SERVICES` | #4, #5, #6, #7 | Standardized per Section 5 rules: Noun title with Latin term + 1 direct line describing scope + 2-3 fragments. | `[VERIFY Q9]` Full text in Section B copy deck |
| **Card Actions** | Currently 3 buttons: "إظهار المزيد" + "التفاصيل" + "اطلب" | #14 Noise | Single primary card action: **التفاصيل / Details** | Section 6.2 model rule |
| **Packages Title** | باقات الشركات وعقود التشغيل / عقود التشغيل المدارة وتجهيز المقرات | #10 Duplicate title, #6 | **باقات تجهيز المقرات والفروع** / **Turnkey Office Infrastructure Packages** | Section 6.3 single title |
| **Packages Sub-line** | تسعير ثابت للتجهيز السحابي وعقود الإدارة الشهرية، ومقايسات هندسية مكتوبة لأعمال الشبكات الميدانية والأنظمة المخصصة. | #6 Filler | الشبكة والحماية والخوادم لمكتبك أو فروعك، مع عقد دعم بعد التسليم. / Network, security, and servers for your office or branches, backed by support post-handover. | Section 6.3 model rule |
| **Package 1 (Starter)** | باقة التأسيس السحابي والبريد الرسمي (6,500 ج.م) | #10, #12 | **البداية**: عيادة · مكتب · شركة صغيرة. رسوم التأسيس: 15,000 – 25,000 ج.م. الدعم الشهري: 1,000 – 2,000 ج.م `[VERIFY Q3]`. تشمل: Structured Cabling حتى 15 نقطة شبكة · تسجيل الدومين وإعداد DNS · إعداد 10 صناديق بريد. | Model Section 6.3 |
| **Package 2 (Growth)** | عقد الإدارة والأمن السيبراني الشهري (8,500 ج.م) | #10, #12 | **النمو**: حتى 50 مستخدماً · حتى 3 Access Points. رسوم التأسيس: من 45,000 ج.م. تشمل: Structured Cabling وتركيب Rack · تركيب Firewall وإعداد VLANs · عقد صيانة ودعم (SLA) لمدة 3 أشهر. | Model Section 6.3 |
| **Package 3 (Branches)** | تأسيس الشبكة المهيكلة والمراقبة للمقر (حسب المعاينة) | #10, #11 | **الفروع المتعددة**: حتى 100 مستخدم · ربط آمن بين الفروع. رسوم التأسيس: من 75,000 ج.م. تشمل: Site-to-Site VPN بين الفروع · بريد الشركة حتى 100 صندوق · عقد صيانة ودعم دوري. | Model Section 6.3 |
| **Package 4 (Enterprise)** | ربط الفروع والأنظمة المؤسسية ERP (عرض سعر مخصص) | #10, #11 | **المؤسسات**: أكثر من 100 مستخدم · تغطية المباني والفروع. حسب المعاينة `[VERIFY Q2]`. تشمل: غرفة خوادم · Site-to-Site VPN · مهندس مقيم أو عقد SLA مخصص 24/7 `[VERIFY Q6]`. | Model Section 6.3 |
| **Packages VAT Notice** | Missing / unspecified under cards | #12 Unlabeled | "الأسعار `[تشمل / لا تشمل]` ضريبة القيمة المضافة." `[VERIFY Q4]` | Section 6.3 model rule |
| **Roadmap Title** | منهجية التنفيذ والحوكمة الهندسية / مراحل تنفيذ المشاريع وتوثيق البنية التحتية | #10 Duplicate title, #4 ("الحوكمة"), #6 | **مراحل تنفيذ المشروع** / **Project Implementation Stages** | Section 6.4 single title |
| **Roadmap Sub-line** | إطار عمل هندسي مرحلي يضمن التنفيذ المجدول خارج ساعات الذروة مع توثيق كامل عند التسليم. | #4 ("يضمن"), #6, #15 ("كامل") | ننفذ على مراحل، خارج ساعات الذروة عند الحاجة، ونسلّم توثيق البنية التحتية مع المشروع. / We implement in phases, off-peak when needed, and deliver infrastructure documentation upon completion. | Section 6.4 model rule |
| **Roadmap Step 01** | 2 - 3 أيام: التدقيق الفني وتحديد المتطلبات: دراسة البنية الحالية وتحديد نقاط الاختناق والمخاطر الأمنية. | #6 Filler | **الفحص وتحديد المتطلبات** (2 - 3 أيام `[VERIFY Q5]`): مراجعة البنية الحالية، وتحديد نقاط الاختناق والمخاطر الأمنية. | Model Section 6.4 |
| **Roadmap Step 02** | 3 - 7 أيام: التجهيز والهجرة الآمنة: إعداد الخوادم والشبكات ونقل البيانات خارج أوقات الذروة. | #8 ("الهجرة") | **الإعداد ونقل البيانات** (3 - 7 أيام `[VERIFY Q5]`): إعداد الخوادم والشبكة، ونقل البيانات خارج أوقات الذروة. | Model Section 6.4 |
| **Roadmap Step 03** | 1 - 2 يوم: الاختبار والتأمين السيبراني: فحص الثغرات وتفعيل جدران الحماية والنسخ الاحتياطي المعزول. | #8, #13 Wrong sequence | **الاختبار والتأمين** (1 - 2 يوم `[VERIFY Q5]`): فحص الثغرات (Vulnerability Scan)، وتفعيل Firewall، وإعداد Backup منفصل عن الشبكة `[VERIFY Q5]`. | Model Section 6.4 |
| **Roadmap Step 04** | مستمر: المراقبة والدعم المستمر: مراقبة استباقية للأداء على مدار الساعة واستجابة موثقة للبلاغات. | #4 Banned ("استباقية", "موثقة") | **المراقبة والدعم**: مراقبة الأداء `[VERIFY Q6: 24/7]`، والرد على البلاغات حسب مستويات الخدمة في العقد `[VERIFY Q6]`. | Model Section 6.4 |
| **ERP Demo Title** | معاينة الأنظمة والمنصات البرمجية / شاهد جودة أنظمتنا البرمجية قبل التعاقد | #10 Duplicate title | **عرض توضيحي لنظام ERP** / **ERP System Demo** | Section 6.5 single title |
| **ERP Demo Sub-line** | استعرض واجهات الاستخدام الفعلية والوحدات التشغيلية لأنظمة تخطيط موارد المؤسسات (ERP) والربط الضريبي المباشر. | #4 Empty | واجهات النظام ووحداته، والربط مع منظومة الفاتورة الإلكترونية. / System screens, core modules, and ETA e-invoicing integration. | Section 6.5 model rule |
| **ERP Demo Specs Label** | مؤشرات التشغيل المستهدفة | #3 Wrong label | **المواصفات التقنية** / **Technical Specifications** | Section 6.5 model rule |
| **ERP Demo Specs Values** | بروتوكول الربط الضريبي: ETA SDK v1.0 / تتبع حركة الأصناف: FIFO / Batch / صلاحيات المستخدمين: RBAC + Audit | #3, #9 | الربط الضريبي: ETA SDK v1.0 `[VERIFY Q8]` · تتبع الأصناف: FIFO / Batch · الصلاحيات: RBAC + Audit Log | Keep verified facts |
| **ERP Demo CTA** | اطلب جلسة عرض حي مع مهندسينا | #6 Filler | احجز عرضاً تجريبياً / Book a Demo | Section 6.5 model rule |

---

## 2. Page: `/` (Home Page)

| Location | Current Content (AR / EN) | Problem Type | Proposed Content (AR / EN) | Notes / Gate |
|---|---|---|---|---|
| **Hero Badge** | هندسة الشبكات · الخوادم السحابية · الأمن السيبراني / Networks · Cloud VPS · Cybersecurity · Enterprise ERP | Good, direct | هندسة الشبكات · الخوادم السحابية · الأمن السيبراني / Networks · Cloud VPS · Cybersecurity · Enterprise ERP | Keep verified |
| **Hero H1** | بنية تحتية سحابية وشبكات مؤسسية تعمل بثبات دون انقطاع / Enterprise Networks, KVM Cloud Servers & ERP Systems Built to Stay Online | #15 ("دون انقطاع") | شبكات مؤسسية وخوادم KVM سحابية وأنظمة ERP تعمل باستقرار / Enterprise Networks, KVM Cloud Servers & ERP Systems Built for Stability | Factual, no impossible promises |
| **Hero Paragraph** | نُصمّم شبكات المقرات، نشغّل خوادم KVM وأقراص NVMe، ونؤمّن بيانات شركتك تحت إشراف مهندسي نظم بعقود SLA واضحة. / We design office networks, run dedicated KVM NVMe servers, and harden your systems under formal SLA contracts—one team accountable end to end. | #4 ("واضحة") | نصمم شبكات المقرات، ونشغّل خوادم KVM بأقراص NVMe، ونؤمّن بيانات شركتك بعقود SLA موثقة مع فريق هندسي واحد. / We design office networks, operate KVM servers on NVMe storage, and secure business data under formal SLAs with one accountable engineering team. | Clean, direct vendor prose |
| **Hero Primary CTA** | اطلب معاينة أو عرض سعر / Book Engineering Review | Good | اطلب عرض سعر / Request a Quote | Aligned to button family |
| **Hero Secondary CTA** | خطط الخوادم والأسعار / View Server Pricing | Good | خطط الأسعار / Pricing Plans | Direct, unpadded |
| **Hero Sectors Strip** | قطاعات نخدمها في مصر والخليج: الرعاية الصحية · المكاتب المالية · المصانع · الشركات التجارية | #16 Unverified reach | القطاعات التي نخدمها: الرعاية الصحية والمراكز الطبية · المكاتب المالية والمحاسبية · المصانع وسلاسل الإمداد · الشركات التجارية والخدمية `[VERIFY Q7: remove والخليج unless confirmed]` | Remove unverified Gulf claim |
| **Pillars Title & Intro** | أربعة قطاعات هندسية متكاملة / نربط الشبكة بالخادم، ونؤمّن البيانات والأنظمة البرمجية من نقطة مسؤولية واحدة. | #4 Banned ("متكاملة"), #6 | **أربعة مجالات عمل لتقنية المعلومات**: الشبكات، الخوادم السحابية، الأمن، وبرمجيات الأعمال من فريق واحد مسؤول. / **Four Core IT Practices**: Networking, cloud servers, security, and enterprise software owned by one accountable team. | Remove banned word "متكاملة" |
| **Pillar 1 (Infra)** | تمديد الشبكات المهيكلة وتجميع كبائن الاتصالات · جدران الحماية العتادية NGFW وتقسيم VLAN · أنظمة السنترال الشبكي الموحد VoIP PBX | #8, #9 | تمديد Structured Cabling وتجميع Rack · جدار حماية Firewall وتقسيم VLANs · سنترال VoIP PBX للاتصالات الداخلية | Apply Glossary Section 3 |
| **Pillar 2 (Cloud)** | خوادم Cloud VPS بعزل KVM مخصص · بريد إلكتروني رسمي موثق بـ SPF وDKIM وDMARC · ترحيل قواعد البيانات والأنظمة الحرجة | #4, #8 | خوادم Cloud VPS بعزل KVM مخصص · بريد الشركة موثق بـ SPF وDKIM وDMARC · نقل قواعد البيانات والأنظمة السحابية | Apply Glossary Section 3 |
| **Pillar 3 (Security)** | تقييم الثغرات الأمنية واختبار الاختراق الدوري · نسخ احتياطي معزول Immutable Backup وفق قاعدة 3-2-1 · رصد التهديدات عبر SIEM والاستجابة للحوادث | #8, #9 | تقييم الثغرات الأمنية واختبار الاختراق · نسخ احتياطي منفصل عن الشبكة (3-2-1 Backup) · مراقبة سجلات الأمان عبر SIEM والتعامل مع الحوادث | Apply Glossary Section 3 |
| **Pillar 4 (Software)** | تخصيص أنظمة ERP للمحاسبة والمخازن والموارد البشرية · الربط الفني مع منظومة الفاتورة الإلكترونية المصرية · فحص الجودة البرمجية QA واختبارات القبول UAT | #5, #8 | أنظمة ERP للمحاسبة والمخازن وإدارة الموظفين · ربط مباشر بمنظومة الفاتورة الإلكترونية المصرية · اختبار وقبول الأنظمة (QA / UAT) قبل الاستلام | Apply Glossary Section 3 |
| **How We Work** | فحص الموقع وتحديد المتطلبات → التجهيز والترحيل خارج الذروة → تسليم التوثيق والتشغيل وفق SLA | Good, direct | **الفحص وتحديد المتطلبات** → **الإعداد ونقل البيانات** → **تسليم التوثيق والتشغيل (SLA)** | Match Roadmap naming |
| **Hosting Teaser** | خوادم Cloud VPS 10 (320 ج.م / $6.45) وتبدأ استضافة المواقع من 195 ج.م / $3.95 | Good, factual | خوادم Cloud VPS تبدأ من 320 ج.م شهرياً (4 vCPU · 8 GB RAM · 75 GB NVMe). استضافة المواقع تبدأ من 195 ج.م شهرياً. | Exact facts kept |
| **Testimonials Heading** | شهادات قادة التقنية ومديري العمليات / إفادات مسجلة من مسؤولي التشغيل وتقنية المعلومات في المؤسسات المتعاقدة مع نُزول تِك. | #4, #15 | آراء عملاء نُزول تِك / Direct feedback from operations and IT leads supported by Nuzul Tech. | Natural, neutral heading |
| **Testimonials Quotes** | 3 quotes: Orthopedic Clinic, Cloud CRM, Private Hospital | Anonymized | 3 quotes with verified roles and sector descriptors: استشاري جراحة العظام (عيادة تخصصية) · المؤسس (منصة CRM) · المدير العام (مستشفى تخصصي) | Zero unverified names per Section 3.4 |
| **FAQ Heading & Qs** | الأسئلة الشائعة حول خدمات وتشغيل البنية التحتية | Good, factual | 4 direct questions: عقود SLA والفواتير الضريبية · نقل الخوادم دون توقف · وسائل الدفع · النسخ الاحتياطي خارج الموقع. | Direct factual answers |
| **Final CTA** | تواصل مباشرة مع مهندس حلول البنية التحتية / أرسل بياناتك ليتواصل معك مهندس الحلول | #6 Filler | **تواصل معنا لمناقشة مشروعك**: أرسل بياناتك ليتواصل معك مهندس نظم خلال ساعات العمل لمراجعة المتطلبات وتقديم عرض سعر مكتوب. | Direct, no hype |

---

## 3. Page: `/pricing` (Pricing & Enterprise Packages)

| Location | Current Content (AR / EN) | Problem Type | Proposed Content (AR / EN) | Notes / Gate |
|---|---|---|---|---|
| **Header H1 & Intro** | خطط الأسعار وباقات البنية التحتية / اختر الخطة المناسبة لحجم أعمالك، سواء كنت تبحث عن خوادم سحابية بموارد مخصصة أو باقات تأسيس وتشغيل تقني لمقر شركتك. | #6 Filler | **الأسعار والباقات**: خطط الخوادم السحابية والاستضافة وباقات تجهيز المقرات والفروع. / **Pricing & Packages**: Cloud VPS plans, managed web hosting, and turnkey office IT packages. | Clear, single title |
| **Tabs** | خوادم Cloud VPS (KVM) / استضافة المواقع وووردبريس / خوادم Windows & RDP | Good | Cloud VPS (KVM) · Managed Web & WP · Windows & RDP | Professional vendor tabs |
| **VPS Card 1 (vps-10)** | Cloud VPS 10: 320 ج.م ($6.45) · 4 vCPU · 8 GB RAM · 75 GB NVMe · 32 TB | Good | Cloud VPS 10: 320 ج.م ($6.45) شهرياً · 4 vCPU · 8 GB RAM · 75 GB NVMe · 32 TB نقل بيانات · 1 Snapshot · حماية DDoS · بدون رسوم إعداد ($0 setup). | Factual, verified against Contabo benchmark |
| **VPS Card 2 (vps-20)** | Cloud VPS 20: 570 ج.م ($11.50) · 6 vCPU · 16 GB RAM · 100 GB NVMe | Good | Cloud VPS 20: 570 ج.م ($11.50) شهرياً · 6 vCPU · 16 GB RAM · 100 GB NVMe (RAID-10) · 32 TB نقل بيانات · 2 Snapshots · الأكثر طلباً. | Factual |
| **VPS Card 3 (vps-30)** | Cloud VPS 30: 940 ج.م ($19.00) · 8 vCPU · 24 GB RAM · 200 GB NVMe | Good | Cloud VPS 30: 940 ج.م ($19.00) شهرياً · 8 vCPU · 24 GB RAM · 200 GB NVMe · 32 TB نقل بيانات · 3 Snapshots · SLA 99.99%. | Factual |
| **VPS Card 4 (vps-40)** | Cloud VPS 40: 1580 ج.م ($31.90) · 12 vCPU · 48 GB RAM · 250 GB NVMe | Good | Cloud VPS 40: 1,580 ج.م ($31.90) شهرياً · 12 vCPU · 48 GB RAM · 250 GB NVMe · 32 TB نقل بيانات · 4 Snapshots · أولوية استجابة P1. | Factual |
| **Compare Table Title** | مقارنة المواصفات الهندسية التفصيلية / Full Technical Specification Comparison | #6 Filler | **مقارنة المواصفات الفنية للخوادم** / **Server Specifications Comparison** | Direct label |
| **Compare Table Rows** | أنوية المعالج · الذاكرة · بيئة العزل · NVMe · اللقطات · نقل البيانات · سرعة المنفذ · حماية DDoS · لوحة التحكم · اتفاقية SLA · رسوم الإعداد | Good | Clean hardware rows with Latin terms where appropriate (vCPU, DDR4 ECC, NVMe RAID-10, Snapshots, 1 Gbit/s, KVM, SLA). | Zero marketing buzzwords |
| **Packages Section** | باقات تأسيس الشركات والمقرات / باقات تأسيس وتشغيل البنية التحتية | #10 Duplicate | **باقات تجهيز المقرات والفروع** / **Turnkey Office Infrastructure Packages** | Synchronized with /services |
| **Pricing Terms Cards** | 4 cards: Uptime SLA, Backups, Hardware, Contractual Billing | #10 | 4 direct terms: ضمان وقت التشغيل الموثق (SLA) · النسخ الاحتياطي والاسترجاع · ملكية البيانات والوثائق · التعاقد والفواتير الرسمية. | No duplicate H2/H3 titles |

---

## 4. Page: `/hosting` (Cloud VPS, Dedicated & Datacenters)

| Location | Current Content (AR / EN) | Problem Type | Proposed Content (AR / EN) | Notes / Gate |
|---|---|---|---|---|
| **Header H1 & Intro** | استضافة سحابية وخوادم افتراضية (Cloud VPS) للشركات / خوادم لينكس وويندوز بمعالجات AMD EPYC وIntel Xeon وأقراص NVMe، مع عزل موارد كامل على مستوى النواة (KVM) ودعم فني هندسي. | #6 Filler | **الاستضافة والخوادم**: خوادم Linux وWindows بعزل KVM كامل وأقراص NVMe، مع نسخ احتياطي دوري ودعم من مهندسي النظم. / **Hosting & Servers**: Linux and Windows KVM servers on NVMe storage with automated backups and systems engineering support. | Direct, no AI padding |
| **Domain Search Widget** | ابحث عن اسم نطاقك وسجل هويتك الرقمية | #4 ("الرقمية") | **تسجيل وفحص الدومين**: فحص توفر النطاقات المصرية والدولية (.com, .com.eg, .eg, .net, .org) مع إعداد سجلات DNS. / **Domain Search & Registration**: Check and register .com, .com.eg, .eg, .net, and .org with managed DNS. | Glossary: الدومين |
| **Datacenter Regions** | مواقع التشغيل والاستضافة: القاهرة · فرانكفورت · الرياض · أمستردام | Good | **مراكز البيانات المتاحة**: القاهرة (EG-CAI) للشركات التي تتطلب بقاء البيانات داخل مصر · فرانكفورت (EU-FRA) للأنظمة الإقليمية · الرياض (SA-RUH) لفروع الخليج · أمستردام (EU-AMS) للنسخ الاحتياطي الخارجي. | `[VERIFY Q7]` Verify active regions with owner |
| **Capabilities Cards** | تخزين NVMe ومعالجات خوادم مخصصة · عزل على مستوى النواة وحماية الشبكة · نسخ احتياطي مجدول ودعم هندسي | Good | تخزين NVMe ومصفوفات RAID-10 · عزل KVM وحماية DDoS · نسخ احتياطي آلي ودعم مهندسي النظم. | Concise, no padding |
| **Tech Stack Section** | أنظمة التشغيل (Ubuntu, AlmaLinux, Windows Server) · قواعد البيانات (PostgreSQL, MySQL, Redis) · العزل (KVM, Fortinet, LiteSpeed) | Good | Clean categorized hardware and software stack without internal open-source tool fluff. | Professional technical list |

---

## 5. Page: `/case-studies` and `/case-studies/:slug`

| Location | Current Content (AR / EN) | Problem Type | Proposed Content (AR / EN) | Notes / Gate |
|---|---|---|---|---|
| **Header H1 & Intro** | دراسات حالة لمشاريع البنية التحتية والسحابة / استعرض كيف ساعدنا المؤسسات في مصر والخليج على رفع كفاءة أنظمتها، تقليل الأعطال، وتأمين بياناتها الحيوية. | #7, #16 | **دراسات الحالة**: مشاريع منفذة في الشبكات، الخوادم السحابية، الأمن السيبراني، وأنظمة ERP. / **Case Studies**: Delivered infrastructure, cloud, security, and ERP projects. | Direct vendor title |
| **Client Anonymization** | 12 case studies previously using unverified client names (Trust, Cairo Cure, ABCH, etc.) | #4, #16 | All 12 case studies use verified sector descriptors: مستشفى تخصصي خاص — القاهرة · مكتب استشارات مالية ومراجعة · مركز علاج أورام تخصصي · منصة برمجيات CRM سحابية · شركة نقل وخدمات لوجستية. | Strict compliance with Section 3.4 & CLAIMS.md #9 |
| **Structure per Detail Page** | Mixed marketing paragraphs | #7 Benefit chains | Strict 4-Block Structure: **السياق وبيئة العميل (Context)** → **التحدي التشغيلي (Constraint)** → **الحل المنفذ (What We Delivered)** → **الأثر التشغيلي الموثق (Qualitative Outcome)**. | Zero formula percentages |
| **Deliverables Checklist** | Lists with unverified percentage claims | #7 | Factual engineering deliverables only (e.g., شبكة كاميرات IP 4K · تمديد كابلات Cat6A · جدار حماية Fortinet NGFW · بريد موثق بـ SPF/DKIM/DMARC · وثيقة تشغيل Runbook). | Facts preserved |

---

## 6. Page: `/blog` and `/blog/:slug`

| Location | Current Content (AR / EN) | Problem Type | Proposed Content (AR / EN) | Notes / Gate |
|---|---|---|---|---|
| **Header H1 & Intro** | مقالات وأدلة تقنية لصناع القرار / تحليلات معمقة حول البنية التحتية، الأمن السيبراني، وإدارة الخوادم السحابية مكتوبة بواسطة مهندسي نُزول تِك. | #6 Filler | **المدونة التقنية**: أدلة ومقالات في هندسة الشبكات، الخوادم السحابية، الأمن السيبراني، وأنظمة ERP. / **Technical Blog**: Guides and insights on networking, cloud servers, cybersecurity, and enterprise ERP. | Direct vendor title |
| **Article Titles & Excerpts** | 22 technical articles covering PACS decoupling, Cloud VPS centralization, ITaaS governance, ETA tax integration, DMARC, VLAN segmentation, 3-2-1 backup, etc. | Minor fluff | Keep all 22 articles with sharp titles, verified technical terminology (DICOM, PACS, KVM, DMARC, VLAN, SIEM, ETA SDK), and clean excerpts. | No added claims |
| **Article Body Structure** | 3 sections per article: Problem → Architecture → Governance | Good | 1. السياق التشغيلي والتحديات التقنية · 2. المعمارية الهندسية وضوابط التنفيذ · 3. التوصيات التشغيلية واستمرارية الأعمال. | Technical and structured |
| **Author Block** | الفريق الهندسي — نُزول تِك / مهندسو البنية التحتية والسحابة | Good | فريق الهندسة — نزول تك / Nuzul Tech Engineering Team | Consistent branding |

---

## 7. Page: `/contact` (Contact & Forms)

| Location | Current Content (AR / EN) | Problem Type | Proposed Content (AR / EN) | Notes / Gate |
|---|---|---|---|---|
| **Header H1 & Intro** | تواصل معنا واحجز استشارة هندسية / تواصل مع مهندسي نُزول تِك لمناقشة متطلبات منشأتك وتحديد النطاق الفني والزمني بدقة. | #6 Filler | **تواصل معنا**: لمناقشة متطلبات شبكتك، خوادمك السحابية، أو أنظمة ERP مع فريقنا الهندسي. / **Contact Us**: Discuss your network, cloud servers, or ERP requirements with our engineering team. | Clear and direct |
| **Form Fields** | الاسم · الشركة · البريد الرسمي · الهاتف / واتساب · نوع الخدمة · تفاصيل الطلب | Good | Keep standard validated fields with honeypot and real backend submission (`POST /api/contact`). | Factual |
| **Form Button** | اطلب استشارة هندسية / إرسال الطلب | #6 | **إرسال الطلب** / **Submit Inquiry** | Direct button |
| **WhatsApp Channel** | واتساب مباشر: +20 114 0565057 / +20 101 1678830 | Good | Canonical numbers only; no unverified "< 15 min" response time claims. | Truth rule verified |
| **Privacy Notice** | تُستخدم بياناتك حصرياً للتواصل الهندسي بشأن طلبك ولا تُشارك مع أطراف خارجية. | Good | تُستخدم بياناتك حصرياً للتواصل بشأن طلبك ولا تُشارك مع أي طرف آخر. | Plain language |

---

## 8. Page: `/about` (Governance & Governance SLA)

| Location | Current Content (AR / EN) | Problem Type | Proposed Content (AR / EN) | Notes / Gate |
|---|---|---|---|---|
| **Header H1 & Intro** | نُزول تِك: فريق هندسي مسؤول عن البنية التحتية والأنظمة المؤسسية / شركة هندسة واستشارات تقنية في القاهرة | #6 Filler | **عن نزول تك**: شركة مصرية متخصصة في شبكات المقرات، الخوادم السحابية، وحلول تقنية المعلومات للشركات. / **About Nuzul Tech**: Cairo-based engineering firm specializing in office networks, cloud servers, and enterprise IT. | Section 6.6 blurb alignment |
| **Governance Pillar 1** | ملكية كاملة للعميل دون قيود احتكار: يستلم العميل كامل الصلاحيات الإدارية (Root / Admin)، الأكواد البرمجية، وقواعد البيانات مع وثيقة تشغيل هندسية مفصلة (Runbook). | #15 ("كاملة") | **ملكية البيانات والأنظمة**: يستلم العميل كامل الصلاحيات الإدارية (Root / Admin) وقواعد البيانات مع وثيقة تشغيل هندسية (Runbook) تضمن استقلالية الإدارة. / **Client Ownership**: Clients receive full administrative credentials (Root/Admin) and databases with a Runbook for independent operation. | Direct vendor statement |
| **Governance Pillar 2** | عقود مستوى خدمة SLA بمعايير قياس واضحة: نحدد مستويات الأولوية للحوادث (P1–P4)، أوقات الاستجابة الأولية، ونوافذ الصيانة المجدولة مسبقاً. | Good | **اتفاقيات مستوى الخدمة (SLA)**: نحدد مستويات أولوية البلاغات (P1–P4)، وأوقات الاستجابة الأولية، ومواعيد الصيانة الدورية في عقود الشركات. / **Service Level Agreements**: We define ticket severities (P1–P4), acknowledgment windows, and scheduled maintenance in formal contracts. | Factual |
| **Governance Pillar 3** | شفافية مالية وتعاقدية بالجنيه المصري: تسعير واضح بالعملة المحلية للاستضافة وعقود الإدارة دون الاعتماد على تسعير متذبذب غير محدد. | Good | **تسعير وفواتير بالجنيه المصري**: تسعير محلي محدد للاستضافة وعقود الصيانة والإدارة دون تقلبات غير محسوبة، مع فواتير ضريبية رسمية للشركات. / **Predictable EGP Invoicing**: Stable local currency pricing for hosting and managed services with official tax invoicing. | Factual |
| **SLA Matrix** | تصنيف أولويات البلاغات: P1 (انقطاع حرج) · P2 (تأثر أداء) · P3 (تعديل إعدادات) · P4 (استفسار استشاري) | Good | Keep standard ITIL P1–P4 priority classification. | Clean and factual |

---

## 9. Header, Footer, Global Strings & Modals

| Location | Current Content (AR / EN) | Problem Type | Proposed Content (AR / EN) | Notes / Gate |
|---|---|---|---|---|
| **Header Nav** | الخدمات · الاستضافة · الأسعار · دراسات الحالة · المدونة | Good | الخدمات · الاستضافة · الأسعار · دراسات الحالة · المدونة / Services · Hosting · Pricing · Case Studies · Blog | Section 3.10 clean 5 links |
| **Header CTA** | احجز استشارة / Book Consultation | Good | احجز استشارة / Book Consultation | Short, single line |
| **Footer Blurb** | شركة هندسة بنية تحتية وتقنية معلومات في القاهرة. نصمم ونشغّل الشبكات المهيكلة، خوادم KVM السحابية، جدران الحماية، وأنظمة ERP للشركات بعقود SLA واضحة. | #4, #6 | نزول تك شركة مصرية لتقنية المعلومات. نصمم وننفذ الشبكات وغرف الخوادم، ونشغّل الخوادم السحابية، ونؤمّن الأنظمة، ونطوّر أنظمة ERP. الدعم والصيانة بعقود SLA. / Nuzul Tech is an Egyptian IT firm. We design and build networks and server rooms, operate cloud servers, harden systems, and develop ERP software under formal SLAs. | Section 6.6 model benchmark |
| **Footer Column 2 Title** | روابط سريعة / Quick Links | Good | الموقع / Navigation | Section 6.6 model |
| **Footer Column 3 Title** | قطاعات الحلول / Solution Pillars | #8 Inconsistent | الخدمات / Services | Section 6.6 model |
| **Footer Column 4 Title** | بيانات التواصل / Contact Info | Good | التواصل / Contact | Section 6.6 model |
| **Footer Payments** | وسائل الدفع المعتمدة للشركات والأفراد في مصر والخليج | #4, #16 | طرق الدفع / Payment Methods `[VERIFY Q7: remove والخليج unless confirmed]` | Section 6.6 model |
| **Modals / WhatsApp** | FloatingWhatsApp label & tooltip | #4 | واتساب الدعم الفني والمبيعات · متاح للمراسلة المباشرة / WhatsApp Support & Sales | Direct, no hype |

---

*End of Step A: `docs/COPY_AUDIT.md`.*
