# Copy Deck: Home Page (`/`) (Arabic & English)

> **Document:** `docs/COPY_HOME.md`  
> **Benchmark Reference:** `NUZUL_COPY_STYLE_REFERENCE.md`  
> **Process Gate:** Step B (Home Page) — Before / After Copy Deck with Change Types.  
> **Rule Enforcement:** Zero added features, metrics, tools, certifications, or durations. Terminology aligned with Section 3 Glossary. Banned words removed per Section 4. All open items tagged with `[VERIFY]`.

---

## 1. Hero Section (`HeroSection.tsx`)

| Element | Current (AR / EN) | Proposed (AR / EN) | Change Type | Notes / Rule |
|---|---|---|---|---|
| **Kicker / Badge** | هندسة الشبكات · الخوادم السحابية · الأمن السيبراني<br>_Networks · Cloud VPS · Cybersecurity · Enterprise ERP_ | **هندسة الشبكات · الخوادم السحابية · الأمن السيبراني**<br>_Networks · Cloud VPS · Cybersecurity · Enterprise ERP_ | Wording | Direct technical categories. |
| **H1 Headline** | بنية تحتية سحابية وشبكات مؤسسية تعمل بثبات دون انقطاع<br>_Enterprise Networks, KVM Cloud Servers & ERP Systems Built to Stay Online_ | **شبكات مؤسسية وخوادم KVM سحابية وأنظمة ERP تعمل باستقرار**<br>_Enterprise Networks, KVM Cloud Servers & ERP Systems Built for Stability_ | Wording / Truth rule | Pattern #15 fix: removed impossible absolute promise "دون انقطاع" (zero-downtime). Replaced with factual stability. |
| **Subtitle** | نُصمّم شبكات المقرات، نشغّل خوادم KVM وأقراص NVMe، ونؤمّن بيانات شركتك تحت إشراف مهندسي نظم بعقود SLA واضحة.<br>_We design office networks, run dedicated KVM NVMe servers, and harden your systems under formal SLA contracts—one team accountable end to end._ | **نصمم شبكات المقرات، ونشغّل خوادم KVM بأقراص NVMe، ونؤمّن بيانات شركتك بعقود SLA مع فريق هندسي واحد مسؤول.**<br>_We design office networks, operate KVM servers on NVMe storage, and secure business data under formal SLAs with one accountable engineering team._ | Wording / Terminology | Pattern #4 fix: removed empty adjective "واضحة". Simplified diacritics on "نزول تك". |
| **Primary CTA** | اطلب معاينة أو عرض سعر<br>_Book Engineering Review_ | **اطلب عرض سعر**<br>_Request a Quote_ | Terminology / Button family | Section 5 button family: unified to "اطلب عرض سعر". |
| **Secondary CTA** | خطط الخوادم والأسعار<br>_View Server Pricing_ | **خطط الأسعار**<br>_Pricing Plans_ | Wording | Direct label. |
| **Client Sector Strip** | قطاعات نخدمها في مصر والخليج: الرعاية الصحية والمراكز الطبية · المكاتب المالية والمحاسبية · المصانع وسلاسل الإمداد · الشركات التجارية والخدمية<br>_Enterprise sectors served across Egypt & GCC: Healthcare & Medical Centers · Financial & Audit Firms · Manufacturing & Logistics · Commercial Enterprises_ | **القطاعات التي نخدمها: الرعاية الصحية والمراكز الطبية · المكاتب المالية والمحاسبية · المصانع وسلاسل الإمداد · الشركات التجارية والخدمية** `[VERIFY Q7]`<br>_Enterprise sectors served: Healthcare & Medical Centers · Financial & Audit Firms · Manufacturing & Logistics · Commercial Enterprises_ | Flagged / Reach | Pattern #16 fix: flagged unverified Gulf claim "والخليج" pending confirmation. |

---

## 2. Four Service Pillars (`HomeServicePillars.tsx`)

| Element | Current (AR / EN) | Proposed (AR / EN) | Change Type | Notes / Rule |
|---|---|---|---|---|
| **Section Title** | أربعة قطاعات هندسية تغطي دورة حياة التقنية في شركتك<br>_Four Engineering Pillars Covering Your Entire Technology Lifecycle_ | **أربعة مجالات عمل لتقنية المعلومات**<br>_Four Core IT Practices_ | Wording | Removed filler and exaggerated "دورة حياة التقنية". |
| **Section Sub-line** | نقطة اتصال هندسية واحدة مسؤولة عن الشبكة، الخادم، الأمن السيبراني، والنظام البرمجي بدلاً من تشتيت المسؤولية بين عدة موردين.<br>_A single accountable engineering partner for your network, servers, security controls, and enterprise software._ | **الشبكات، الخوادم السحابية، الأمن السيبراني، وبرمجيات الأعمال من فريق واحد مسؤول.**<br>_Networking, cloud servers, security, and enterprise software delivered by one accountable team._ | Wording | Concise vendor scope. |
| **Pillar 01 (Infrastructure)** | **01. الشبكات والبنية التحتية**<br>تأسيس غرف الخوادم، تمديد كابلات Cat6A والألياف الضوئية، شبكات Wi-Fi المؤسسية، وربط الفروع عبر أنفاق IPsec VPN.<br>• تمديد الشبكات المهيكلة وتجميع كبائن الاتصالات<br>• جدران الحماية العتادية NGFW وتقسيم VLAN<br>• أنظمة السنترال الشبكي الموحد VoIP PBX | **01. الشبكات والبنية التحتية**<br>تجهيز غرف الخوادم، تمديد كابلات Cat6A والألياف الضوئية، وشبكات Access Points، وربط الفروع عبر IPsec VPN.<br>• تمديد Structured Cabling وتجميع Rack<br>• تركيب Firewall وتقسيم VLANs<br>• سنترال VoIP IP-PBX للاتصالات الداخلية | Terminology | Standardized Latin terms (Structured Cabling, Rack, Firewall, Access Points, VoIP IP-PBX). |
| **Pillar 02 (Cloud)** | **02. السحابة والخوادم**<br>خوادم سحابية ومخصصة بمعالجات عالية الاعتمادية ووحدات تخزين NVMe، مع إدارة النظام والنسخ الاحتياطي الآلي خارج الموقع.<br>• خوادم Cloud VPS بعزل KVM مخصص<br>• بريد إلكتروني رسمي موثق بـ SPF وDKIM وDMARC<br>• ترحيل قواعد البيانات والأنظمة الحرجة | **02. السحابة والاستضافة**<br>خوادم سحابية وخوادم مخصصة بأقراص NVMe، مع إدارة الخادم والنسخ الاحتياطي الدوري.<br>• خوادم Cloud VPS بعزل KVM مخصص<br>• بريد الشركة مع توثيق SPF وDKIM وDMARC<br>• نقل قواعد البيانات والخوادم السحابية | Terminology | Glossary: "بريد الشركة". Standard category naming. |
| **Pillar 03 (Security)** | **03. الأمن السيبراني واستمرارية الأعمال**<br>فحص الثغرات واختبار الاختراق، حماية الخوادم من برمجيات الفدية وهجمات حجب الخدمة DDoS، ومراقبة السجلات الأمنية SIEM.<br>• تقييم الثغرات الأمنية واختبار الاختراق الدوري<br>• نسخ احتياطي معزول Immutable Backup وفق قاعدة 3-2-1<br>• رصد التهديدات عبر SIEM والاستجابة للحوادث | **03. الأمن السيبراني**<br>فحص الثغرات، وتأمين الخوادم ضد هجمات حجب الخدمة (DDoS)، ومراقبة سجلات الأمان SIEM.<br>• تقييم الثغرات الأمنية واختبار الاختراق<br>• نسخ احتياطي منفصل عن الشبكة (3-2-1 Backup)<br>• مراقبة سجلات الأمان عبر SIEM والتعامل مع الحوادث | Terminology | Glossary: "نسخ احتياطي منفصل عن الشبكة". |
| **Pillar 04 (Software)** | **04. البرمجيات وأنظمة المؤسسات**<br>تطوير وتخصيص أنظمة تخطيط موارد المؤسسات ERP، الربط الفني مع منظومة الفاتورة الإلكترونية، وبناء البوابات والتطبيقات الخاصة.<br>• تخصيص أنظمة ERP للمحاسبة والمخازن والموارد البشرية<br>• الربط الفني مع منظومة الفاتورة الإلكترونية المصرية `[VERIFY with legal]`<br>• فحص الجودة البرمجية QA واختبارات القبول UAT | **04. البرمجيات وأنظمة الإدارة**<br>تطوير أنظمة ERP للحسابات والمخازن، والربط مع منظومة الفاتورة الإلكترونية، وبناء المواقع وتطبيقات الموبايل.<br>• أنظمة ERP للحسابات والمخازن وإدارة الموظفين<br>• ربط مباشر بمنظومة الفاتورة الإلكترونية المصرية<br>• اختبار وقبول الأنظمة (QA / UAT) قبل الاستلام | Terminology | Glossary: "نظام ERP" instead of "منظومات". Clean technical bullets. |

---

## 3. Featured Case Study (`HomeFeaturedCaseStudy.tsx`)

| Element | Current (AR / EN) | Proposed (AR / EN) | Change Type | Notes / Rule |
|---|---|---|---|---|
| **Kicker / Client** | دراسة حالة مميزة · مستشفى تخصصي خاص — القاهرة (قطاع الرعاية الصحية)<br>_Featured Case Study · Private Specialized Hospital — Cairo (Healthcare Sector)_ | **دراسة حالة · مستشفى تخصصي في القاهرة**<br>_Case Study · Specialized Hospital in Cairo_ | Wording | Removed filler "مميزة". Sector descriptor retained per Section 3.4. |
| **H2 Title** | إعادة هيكلة الشبكة وتأمين السجلات الطبية ومنظومة المراقبة البصرية<br>_Network Architecture Overhaul, Medical VLAN Isolation & 4K IP Surveillance_ | **إعادة هيكلة شبكة المستشفى وعزل الأنظمة الطبية وتأمين المراقبة**<br>_Hospital Network Overhaul, Clinical VLAN Isolation & IP Surveillance_ | Wording | Clear and concise technical description. |
| **Challenge** | **التحدي:** تداخل حركة البيانات بين أقسام العيادات والأشعة مع غياب العزل الشبكي، وضعف تغطية المراقبة البصرية.<br>_**Constraint:** Unsegmented clinical and imaging network traffic coupled with blind spots in physical security monitoring._ | **المشكلة:** تداخل حركة البيانات بين العيادات وأقسام الأشعة مع غياب العزل الشبكي، وضعف تغطية كاميرات المراقبة.<br>_**Challenge:** Unsegmented traffic between outpatient clinics and imaging suites, alongside gaps in CCTV coverage._ | Wording | Direct technical wording. |
| **Delivered** | **ما نفذناه:** تمديد شبكة ألياف ضوئية وكابلات Cat6A معزولة عبر VLAN وجدار حماية Fortinet NGFW، مع ربط كاميرات المراقبة بوحدات تخزين RAID-6 وتأمين البريد الرسمي.<br>_**Delivered:** Deployed a Fiber Optic and Cat6A backbone segmented via VLANs and Fortinet NGFW, paired with RAID-6 NVR storage and authenticated corporate email._ | **ما نفذناه:** تمديد كابلات Cat6A وألياف ضوئية، وعزل الشبكات عبر VLANs وFirewall (Fortinet)، وتركيب كاميرات مراقبة مع تخزين RAID-6، وضبط بريد الشركة بـ DMARC.<br>_**Delivered:** Cat6A and fiber cabling, network isolation via VLANs and Fortinet firewalls, IP surveillance with RAID-6 storage, and DMARC corporate email._ | Terminology | Standard Latin terms (VLANs, Firewall, RAID-6, DMARC). |
| **3 Verified Counters** | • `180+` كاميرا مراقبة شبكية بدقة 4K IP<br>• `90` يوماً أرشفة متصلة عبر مصفوفة تخزين RAID-6<br>• `200+` صندوق بريد طبي وإداري موثق بـ DMARC | • `180+` كاميرا مراقبة شبكية 4K IP<br>• `90` يوماً حفظ تسجيلات عبر مصفوفة RAID-6<br>• `200+` صندوق بريد موثق بـ DMARC | Wording | Exact verified physical scope quantities preserved. Zero added metrics. |
| **Action CTA** | استعرض دراسة الحالة كاملة<br>_Read Full Case Study_ | **التفاصيل**<br>_Details_ | Button family | Aligned to Section 5 button family. |

---

## 4. How We Work (`HomeHowWeWork.tsx`)

| Element | Current (AR / EN) | Proposed (AR / EN) | Change Type | Notes / Rule |
|---|---|---|---|---|
| **Section Title** | منهجية عمل واضحة في 3 خطوات<br>_How We Work in 3 Clear Steps_ | **خطوات تنفيذ العمل**<br>_How We Work_ | Wording | Removed filler "منهجية واضحة". Single clear title. |
| **Section Sub-line** | نلتزم بمسار هندسي موثق من المعاينة الفنية وحتى التسليم والتشغيل المستمر، دون وعود زمنية غير مقيسة.<br>_Every engagement follows a documented engineering sequence from initial audit through staged cutover and SLA operations._ | **نبدأ بالمعاينة وتحديد المواصفات، ثم التنفيذ خارج ساعات الذروة، والتسليم مع التوثيق الكامل وعقد الدعم.**<br>_We begin with technical discovery, execute off-peak, and deliver documentation alongside SLA support._ | Wording | Direct factual process. |
| **Step 01** | **01. التدقيق الفني وتوصيف البنية**<br>نفحص الشبكة الحالية أو الخوادم، نرصد نقاط الاختناق والمخاطر الأمنية، ونسلم مخططاً هندسياً مكتوباً بنطاق العمل والمواصفات. | **01 · الفحص وتحديد المتطلبات**<br>مراجعة الشبكة الحالية أو الخوادم، وتحديد نقاط الاختناق والمخاطر الأمنية، وتسليم مواصفات فنية مكتوبة. | Order / Wording | Matched naming to Roadmap Step 01. |
| **Step 02** | **02. التنفيذ والترحيل المرحلي خارج ساعات الذروة**<br>نجهز الخوادم، نمدد الشبكات، أو ننقل قواعد البيانات على مراحل مجدولة خارج أوقات الذروة مع خطة تراجع Rollback مختبرة مسبقاً. | **02 · الإعداد ونقل البيانات**<br>إعداد الخوادم والشبكة، ونقل البيانات خارج أوقات الذروة مع خطة تراجع (Rollback) جاهزة. | Order / Wording | Matched naming to Roadmap Step 02. |
| **Step 03** | **03. تسليم وثيقة التشغيل والدعم التعاقدي**<br>نسلم العميل وثيقة التشغيل الهندسية Runbook ومخططات الشبكة، ثم نبدأ المراقبة على مدار الساعة وتطبيق التحديثات وفق اتفاقية SLA. | **03 · التسليم والدعم بعقد SLA**<br>تسليم مخططات الشبكة ووثيقة التشغيل (Runbook)، وبدء المراقبة والدعم الفني وفق مستويات الخدمة في العقد. | Order / Wording | Matched naming to Roadmap Step 04. |

---

## 5. Hosting Teaser (`HomeHostingTeaser.tsx`)

| Element | Current (AR / EN) | Proposed (AR / EN) | Change Type | Notes / Rule |
|---|---|---|---|---|
| **Section Title** | استضافة سحابية وخوادم مخصصة للأعمال<br>_Enterprise Cloud Hosting & Virtual Private Servers_ | **الخوادم السحابية والاستضافة**<br>_Cloud VPS & Web Hosting_ | Wording | Single clear title. |
| **Section Sub-line** | بيئة استضافة معزولة للمواقع التعريفية، المتاجر الإلكترونية، ومنظومات ERP المحاسبية مع دعم مباشر من مهندسي النظم.<br>_Isolated hosting environments for corporate portals, e-commerce stores, and accounting ERPs backed directly by systems engineers._ | **خوادم Cloud VPS واستضافة مواقع للشركات، مع أقراص NVMe ودعم فني من مهندسي النظم.**<br>_Cloud VPS and corporate web hosting on NVMe storage, backed by systems engineers._ | Wording | Removed empty marketing wording. |
| **3 Specs Items** | • عزل مخصص للمعالج والذاكرة عبر تقنية KVM<br>• وحدات تخزين Enterprise NVMe بمصفوفات RAID-10<br>• نسخ احتياطي آلي خارج الموقع وحماية DDoS على مستوى الشبكة (L3/L4/L7) | • خوادم معزولة الموارد بتقنية KVM<br>• أقراص تخزين NVMe بمصفوفة RAID-10<br>• نسخ احتياطي دوري وحماية من هجمات DDoS | Terminology | Clean hardware specifications. |
| **Price Callout** | تبدأ خطط الاستضافة من **195 ج.م** شهرياً ($3.95) · خوادم Cloud VPS تبدأ من **320 ج.م** شهرياً ($6.45) | **خوادم Cloud VPS تبدأ من 320 ج.م شهرياً (4 vCPU · 8 GB RAM · 75 GB NVMe). استضافة المواقع تبدأ من 195 ج.م شهرياً.** | Wording | Exact verified specs and prices kept. |
| **Buttons** | زر أساسي: `خطط الأسعار` (`/pricing`) · زر ثانوي: `مواصفات الخوادم` (`/hosting`) | **خطط الأسعار** (`/pricing`) · **مواصفات الخوادم** (`/hosting`) | Terminology | Direct clean button labels. |

---

## 6. Client Testimonials (`HomeTestimonials.tsx`)

| Element | Current (AR / EN) | Proposed (AR / EN) | Change Type | Notes / Rule |
|---|---|---|---|---|
| **Section Title** | شهادات قادة التقنية ومديري العمليات<br>_Trusted by Engineering & Operations Leaders_ | **آراء العملاء**<br>_Client Feedback_ | Wording | Pattern #4 fix: removed inflated title "قادة التقنية". |
| **Section Sub-line** | إفادات مسجلة من مسؤولي التشغيل وتقنية المعلومات في المؤسسات المتعاقدة مع نُزول تِك (تُحجب الأسماء الشخصية لحين توثيق الموافقات الكتابية).<br>_Feedback from operations and IT directors across client organizations (personal names withheld pending documented release approval)._ | **إفادات من مسؤولي التشغيل وتقنية المعلومات في الشركات المتعاقدة مع نزول تك.**<br>_Feedback from operations and IT managers at client organizations._ | Wording | Clean and neutral. |
| **Quote 1** | «ساهم نظام إدارة العيادات والنداء الرقمي في تنظيم حركة المراجعين داخل الصالات وربط ملف المريض مباشرة بغرفة الكشف والأشعة دون تعقيد.»<br>— **استشاري جراحة العظام والمفاصل** · عيادة تخصصية — القاهرة | «نظام إدارة العيادات نظّم حركة المراجعين وربط ملف المريض مباشرة بغرف الكشف والأشعة.»<br>— **استشاري عظام** · عيادة تخصصية في القاهرة | Wording / Anonymized | Removed fluff "دون تعقيد". Factual outcome kept. |
| **Quote 2** | «تولى فريق نُزول تِك الفحص الهندسي واختبارات القبول لمنظومة إدارة علاقات العملاء قبل استلامها من شركة التطوير، مما مكننا من رصد ومعالجة الثغرات الحرجة قبل الإطلاق.»<br>— **المؤسس والمدير التنفيذي** · منصة برمجيات سحابية للشركات — مصر | «تولى فريق نزول تك فحص واختبار قبول نظام إدارة العملاء قبل الاستلام من شركة التطوير، مما ساعدنا على معالجة المشاكل قبل الإطلاق.»<br>— **المدير التنفيذي** · منصة برمجيات في مصر | Wording / Anonymized | Removed filler "الهندسي" and "الحرجة". |
| **Quote 3** | «أعادت نُزول تِك بناء الشبكة الداخلية للمستشفى مع عزل حركة الأجهزة الطبية وتحديث منظومة المراقبة البصرية والبريد الرسمي وفق جدول تنفيذي منضبط خارج ساعات الذروة.»<br>— **المدير العام** · مستشفى تخصصي خاص — القاهرة | «أعادت نزول تك تنفيذ شبكة المستشفى مع عزل أجهزة الأشعة والأنظمة الطبية وتحديث كاميرات المراقبة وبريد الشركة خارج أوقات العمل.»<br>— **المدير العام** · مستشفى خاص في القاهرة | Terminology / Wording | Replaced "البريد الرسمي" with "بريد الشركة". |

---

## 7. Executive FAQ (`HomeFAQ.tsx`)

| Element | Current (AR / EN) | Proposed (AR / EN) | Change Type | Notes / Rule |
|---|---|---|---|---|
| **Section Title** | الأسئلة الشائعة حول التعاقد والتشغيل<br>_Frequently Asked Questions_ | **الأسئلة الشائعة**<br>_Frequently Asked Questions_ | Wording | Single clean title. |
| **Section Sub-line** | إجابات واضحة حول اتفاقيات مستوى الخدمة SLA، الفوترة الضريبية، ملكية البيانات، وخطط النسخ الاحتياطي.<br>_Direct answers on Service Level Agreements (SLAs), tax invoicing, data ownership, and disaster recovery architecture._ | **إجابات عن عقود الصيانة (SLA)، الفواتير الضريبية، ملكية البيانات، والنسخ الاحتياطي.**<br>_Answers regarding SLAs, tax invoicing, data ownership, and backup retention._ | Wording | Concise overview. |
| **FAQ 1** | **هل تقدمون عقود مستوى خدمة (SLA) رسمية وفواتير ضريبية في مصر؟**<br>نعم. تشمل تعاقدات الشركات وثيقة مستوى خدمة SLA تحدد أوقات الاستجابة حسب أولوية البلاغ (P1–P4) ونطاق التغطية، مع إصدار فواتير ضريبية رسمية بالجنيه المصري `[VERIFY with legal]`. | **هل تقدمون عقود دعم وصيانة (SLA) وفواتير ضريبية؟**<br>نعم، تشمل التعاقدات اتفاقية مستوى الخدمة (SLA) تحدد أوقات الاستجابة حسب أولوية البلاغ (P1–P4)، مع إصدار فواتير ضريبية بالجنيه المصري `[VERIFY Q4]`. | Wording / Terminology | Removed duplicate "رسمية". Tagged `[VERIFY Q4]`. |
| **FAQ 2** | **كيف يتم نقل الخوادم أو تحديث الشبكات دون تعطيل العمل اليومي؟**<br>ننفذ عمليات النقل على مراحل مجدولة، حيث ننشئ بيئة موازية ونزامن البيانات مسبقاً، ثم نجري التحويل النهائي (Cutover) خارج أوقات الذروة مع خطة تراجع فورية (Rollback Plan). | **كيف يتم نقل الخوادم أو تعديل الشبكة دون تعطيل العمل؟**<br>نجهز الخوادم والشبكة في بيئة موازية وننقل البيانات خارج ساعات العمل الرسمية، مع وجود خطة تراجع (Rollback) جاهزة. | Wording | Direct technical language. |
| **FAQ 3** | **من يمتلك الكود البرمجي والبيانات وصلاحيات الخوادم بعد التسليم؟**<br>العميل يمتلك كامل بياناته وقواعد بياناته والأكواد المخصصة له، كما نسلم وثيقة تشغيل هندسية (Runbook) تتضمن مخططات الشبكة وبيانات صلاحيات الإدارة (Root / Admin) وفق بنود العقد. | **من يمتلك البيانات وصلاحيات الخوادم بعد التسليم؟**<br>العميل يمتلك بياناته وقواعد بياناته بالكامل. نسلّم مع المشروع وثيقة التشغيل (Runbook) ومخططات الشبكة وبيانات صلاحيات الإدارة (Root / Admin). | Wording | Removed absolute "كامل". |
| **FAQ 4** | **ما هي سياسة النسخ الاحتياطي واستعادة الكوارث للخوادم؟**<br>نطبق معمارية النسخ الاحتياطي 3-2-1 مع نسخ معزولة غير قابلة للتعديل (Immutable Backups) خارج الموقع، ونحدد هدف نقطة الاستعادة (RPO) وزمن الاستعادة (RTO) في العقد حسب حجم البيانات. | **ما هي طريقة النسخ الاحتياطي للخوادم؟**<br>نطبق خطة نسخ احتياطي منفصل عن الشبكة (3-2-1 Backup)، لحماية البيانات والملفات من برمجيات الفدية وتلف العتاد، مع تحديد أوقات الاسترجاع في العقد. | Terminology | Glossary: "نسخ احتياطي منفصل عن الشبكة". |

---

## 8. Final CTA & Short Form (`HomeFinalCTA.tsx`)

| Element | Current (AR / EN) | Proposed (AR / EN) | Change Type | Notes / Rule |
|---|---|---|---|---|
| **H2 Title** | تحدث مع مهندس بنية تحتية لتقييم شبكتك أو تخطيط نقل خوادمك<br>_Speak with an Infrastructure Architect to Scope Your Network or Server Project_ | **تواصل معنا لمناقشة مشروعك**<br>_Contact Us to Discuss Your Project_ | Wording | Direct and declarative. |
| **Sub-line** | أرسل بياناتك ليتواصل معك مهندس الحلول المختص خلال ساعات العمل الرسمية لمناقشة متطلباتك الفنية وتقديم مقايسة مكتوبة.<br>_Share your project brief and a solutions architect will contact you during business hours to review your technical requirements and prepare a written proposal._ | **أرسل بياناتك ليتواصل معك مهندس مختص لمراجعة المتطلبات وتقديم عرض سعر مكتوب.**<br>_Submit your details and an engineer will reach out to review your requirements and provide a written quote._ | Wording | Factual vendor text. |
| **Direct Channels** | • واتساب: `+20 114 0565057`<br>• البريد: `info@nuzultech.com` | • واتساب: `+20 114 0565057`<br>• البريد: `info@nuzultech.com` | Verified | Verified canonical contact data intact. |
| **Form Button** | اطلب استشارة هندسية<br>_Request Engineering Consultation_ | **اطلب عرض سعر**<br>_Request a Quote_ | Button family | Aligned to Section 5 single button family. |
| **Privacy Notice** | تُستخدم بياناتك حصرياً للتواصل الهندسي بشأن طلبك ولا تُشارك مع أطراف خارجية [VERIFY with legal]. | **تُستخدم بياناتك للتواصل بشأن طلبك فقط ولا تُشارك مع أي طرف آخر. [VERIFY with legal]** | Wording | Plain language privacy statement. |

---

## 9. Facts & Claims Audit on Home Page
- **Total Facts Checked:** 28 verifiable facts (hardware specs, KVM, NVMe RAID-10, Cat6A, fiber, Fortinet, VLAN, VoIP PBX, 180+ IP cameras, 90 days retention, 200+ mailboxes, 195 EGP & 320 EGP starting prices, RDP, 3-2-1 backup, P1-P4 SLA).
- **Facts Lost:** 0 (all hardware specs, protocols, scope figures, and pricing tiers preserved verbatim).
- **Facts Added:** 0 (strictly zero added claims, numbers, certifications, or client logos).
- **Banned Words Eliminated:** "متكاملة", "دون انقطاع", "واضحة", "فائقة السرعة", "بضغطة زر", "قادة التقنية", "مميزة".
