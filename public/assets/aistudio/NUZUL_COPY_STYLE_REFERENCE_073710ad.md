# Nuzul Tech: Copy Style Reference (Arabic first)

> Companion to `NUZUL_REBUILD_MASTER_BRIEF.md`. Sections 1-3 of that brief (protocol, truth rules, global standards) still apply to everything below.
> This file is the quality benchmark for **all site copy**. The model rewrite in Section 6 shows the level expected on every page.

---

## 1. How to use this file

**Task type:** content only. Do not change layout, styling or components.

**You MAY:** reword, reorder, shorten, merge duplicates, fix terminology, fix labels, fix the order of lists and steps.

**You may NOT:** add numbers, features, tools, clients, certifications, durations, locations or claims that are not already on the current site or in this file. If a sentence carries a fact, keep the fact.

**When unsure:** keep the current wording, mark it `[VERIFY: what is needed]` in the report, and add the question to `docs/OPEN_QUESTIONS.md`. Never guess.

**Where the copy lives:** in the data files (e.g. `src/data/*`). Edit the data, not scattered strings. Keep Arabic and English in sync.

---

## 2. Diagnosis: what makes the current copy read as AI-written

| # | Pattern | Example on the current site | Why it is wrong | Fix |
|---|---|---|---|---|
| 1 | Literal translation of a technical term | "عناقيد افتراضية موحدة" | "عناقيد" is a word-for-word translation of Cluster. IT people in Egypt do not say it. | Write **Cluster** in Latin |
| 2 | Technical mislabel | Card titled "المحاكاة الافتراضية للأنظمة (VDI)" whose text describes merging physical servers | VDI means virtual desktops for users. The text describes **server virtualization**. | Rename, or split into two services. Owner confirms (Section 8, Q1) |
| 3 | Wrong label over the content | "مؤشرات التشغيل المستهدفة" above ETA SDK, FIFO / Batch, RBAC + Audit | These are technical specifications, not performance targets | "المواصفات التقنية" |
| 4 | Empty adjectives that imply proof | "خدمات هندسية موثقة", "عقود مستوى خدمة واضحة", "المعتمدة", "الرسمي", "المفعّلة" | Add no information. "موثقة" and "المعتمدة" suggest a document or certificate nobody can see. | Delete, or state the concrete thing |
| 5 | "منظومة" used for everything | "المنظومات الإدارية", "منظومات ERP", "المنظومات البرمجية" | Reads as translated corporate Arabic. IT teams say "نظام". | "نظام / أنظمة". Keep "منظومة الفاتورة الإلكترونية" (the official name of the tax system) |
| 6 | "هندسي / هندسية" ten or more times on one page | "خدمات هندسية", "الدعم الهندسي", "المعاينة الهندسية", "الحوكمة الهندسية", "مهندسينا" | Filler. It says nothing about what is delivered. | Name the actual thing. Use it at most once per page, and only when it means engineering |
| 7 | Benefit chains instead of description | "تعزز موثوقية المؤسسة وتنظم طلبات…", "لتسهيل الصيانة ورفع كفاءة الموارد" | Sells instead of describing. Stacked verbs (تعزز، ترفع، تسرّع، تمكّن) carry no measurable claim. | One fact, then one measurable effect, or no effect at all |
| 8 | Same thing, several names | "جدار ناري" / "جدران الحماية" / "جدار حماية"; "شبكة مهيكلة" / "شبكة هيكلية"; "نقاط اتصال لاسلكية"; "نُزول تِك" vs "نزول تك" | Inconsistent terminology looks careless to technical readers | One term per concept (Section 3) |
| 9 | Bilingual duplicates | "جدار ناري (Firewall)", "تقسيم الشبكة (VLANs)", "(Rack Setup)" | The same term twice | Latin term once |
| 10 | Text repeated on screen | "45,000 ج.م (تبدأ من 45,000 ج.م)"; the same capacity line twice in each package card; "عقود مستوى خدمة SLA" | Duplicate lines | Show each fact once, with a label |
| 11 | Contradictory price | "120,000 ج.م (تسعير مخصص حسب المعاينة الهندسية)" | A fixed price and custom pricing at the same time | "من 120,000 ج.م" or "حسب المعاينة", not both (Q2) |
| 12 | Unlabeled money | "15,000 ج.م" next to "1,000 – 2,000 ج.م / شهر" | The reader cannot tell one-time from monthly | Label: "رسوم التأسيس (مرة واحدة)" and "الدعم الشهري" |
| 13 | Wrong order | The first nine services are mostly software; cybersecurity is not among them. In the steps, "تفعيل جدران الحماية" sits in the testing phase. | The company's core work is not first, and the process order is off | Order by category: Network → Cloud → Security → Software. Order steps by the real sequence (Q5) |
| 14 | Interface text noise | "إظهار المزيد" + "التفاصيل" + "اطلب" on every card; two stacked titles for the packages section | Three actions per card, repeated 23 times | One action per card; one title per section |
| 15 | Unnecessary absolutes | "توثيق كامل", "اختبارات قبول شاملة", "يضمن" | Absolute words that nobody can prove | Remove or define |
| 16 | Unverified reach | "وسائل الدفع … في مصر والخليج" | A Gulf claim in a payments line | Verify or remove (Q7) |

---

## 3. Glossary: one term per concept

| Concept | Use | Do not use |
|---|---|---|
| Cluster | Cluster | عناقيد |
| Firewall | Firewall | جدار ناري، جدار حماية، جدران الحماية |
| Wi-Fi access point | Access Point | نقاط اتصال لاسلكية |
| Cabling | Structured Cabling (title) / تمديد كابلات الشبكة (prose) | شبكة هيكلية، شبكة داخلية مهيكلة |
| Cabinet | Rack | خزائن، تجميع خزائن |
| Room at the client site | غرفة خوادم (Server Room) | "مراكز بيانات محلية" (unless it is a real data center) |
| Hypervisor environment | Virtualization / Server Virtualization | المحاكاة الافتراضية |
| Containers | Containers | حاويات برمجية |
| Private cloud | Private Cloud | السحابة الخاصة والسيادة الرقمية |
| Service agreement | اتفاقية مستوى الخدمة (SLA) at first use, then SLA | عقد مستوى خدمة SLA |
| ERP | نظام ERP | منظومة ERP، المنظومات الإدارية |
| Testing | اختبار وقبول (QA / UAT) | فحص واعتماد جودة |
| Backup | نسخ احتياطي in prose, Backup in labels | نسخ احتياطي معزول → "نسخ احتياطي منفصل عن الشبكة" if that is what it means |
| Domain | الدومين | النطاق الرسمي، حجز النطاق |
| Company e-mail | بريد الشركة | بريد إلكتروني رسمي للشركات |
| Counting seats | مستخدم | موظف (in package limits) |
| Company name | نزول تك | نُزول تِك (no diacritics anywhere) |

Rules: write each Latin term once, never with an Arabic duplicate in parentheses. Technical terms stay in Latin script inside Arabic sentences (VPN, VLAN, DNS, SLA, RBAC). Do not name internal open-source tooling (monitoring, scanning or firewall software). Name technology categories and paid brands only (KVM and VMware as hypervisor types, Fortinet, CloudLinux, Cloudflare are acceptable).

---

## 4. Banned and limited words

**Banned** (unless the thing is real and shown): عناقيد، السيادة الرقمية، حوكمة، متكامل، موثقة / موثق، المعتمدة، المفعّلة، اللحظي، استباقي، شاملة / شامل، رائد، مبتكر، متطور، يضمن / ضمان، "كل ما تحتاجه"، "تحت سقف واحد"، "نحن نؤمن".

**Limited:** "هندسي / هندسية" (once per page, only when it means engineering), "منظومة" (only for "منظومة الفاتورة الإلكترونية"), "الرسمي" (only for something with an official register), "كامل / كاملة" (never as emphasis).

**Verbs to avoid as the main verb of a description:** تعزز، ترفع كفاءة، تسرّع، تمكّن، تتيح. Use verbs that name the work: تصميم، تركيب، إعداد، ربط، نقل، اختبار، مراقبة.

---

## 5. Structure rules

**Service card:** `Title (noun, Latin term kept)` + `one line: what it is and what it connects to (max 18 words)`. Optional: `يشمل:` plus 2-3 fragments. No benefit claim unless measured and sourced.

**Section titles:** say what the section is ("مراحل تنفيذ المشروع"), not a promise. One title per section: never an H2 and an H3 that say the same thing.

**Lists:** order by the real sequence or by importance, the same way in every card. Fragments, not sentences.

**Prices:** show each price once, with a label that says what it pays for and how often ("رسوم التأسيس (مرة واحدة)", "الدعم الشهري"). State clearly whether prices include VAT (Q4). "من X" and "حسب المعاينة" never appear together.

**Buttons:** one verb family across the site: "اطلب عرض سعر"، "احجز عرضاً تجريبياً"، "تواصل معنا"، "التفاصيل". Remove "إظهار المزيد" where the text is short enough to show in full.

**Numbers:** Western digits, with the unit next to the number ("3 أشهر"، "حتى 50 مستخدماً").

**Durations, SLA hours, "24/7":** published only if the owner confirms them (Section 8).

---

## 6. Model rewrite: the /services page (benchmark)

Everything not marked `[VERIFY]` is traceable to the current text. Keep this level of precision on every page.

### 6.1 Page header

| Element | Current | New |
|---|---|---|
| H1 | دليل الخدمات الهندسية / حلول واستشارات تقنية المعلومات للشركات | الخدمات |
| Intro | نقدم خدمات هندسية موثقة تشمل الشبكات، مراكز البيانات، الخوادم السحابية، الأمن السيبراني، وتطوير الأنظمة المؤسسية بعقود مستوى خدمة واضحة. | نصمم وننفذ الشبكات وغرف الخوادم، ونشغّل الخوادم السحابية، ونؤمّن الأنظمة، ونطوّر أنظمة الأعمال (ERP وتطبيقات الويب والموبايل). الدعم والصيانة بعقود SLA. |
| Counter | عرض 9 من أصل 23 خدمة هندسية | 9 من 23 خدمة |
| Button | عرض المزيد من الخدمات (14 متبقية) | عرض باقي الخدمات (14) |

Default order of the grid: **Network and infrastructure → Cloud and hosting → Cybersecurity → Software.** Today the first nine cards are almost all software.

### 6.2 Service cards (card action: التفاصيل only)

| # | Current title and text | New title and text | Note |
|---|---|---|---|
| 1 | السحابة الخاصة والسيادة الرقمية: تأسيس سحابة خاصة داخل مقر المنشأة تمنحكم السيطرة المباشرة على البيانات الحساسة مع سرعة الشبكة المحلية. | **Private Cloud داخل المقر**: إعداد Private Cloud على خوادم داخل مقر المنشأة. البيانات تبقى داخل شبكتك، والوصول إليها بسرعة الشبكة المحلية. | |
| 2 | المحاكاة الافتراضية للأنظمة (VDI): دمج الخوادم الفيزيائية المتفرقة داخل عناقيد افتراضية موحدة (KVM / VMware) لتسهيل الصيانة ورفع كفاءة الموارد. | **Server Virtualization**: دمج عدة خوادم فيزيائية على Cluster واحد (KVM أو VMware)، لتقليل عدد الأجهزة وتسهيل الصيانة. | `[VERIFY Q1]` The text describes server virtualization, not VDI. If VDI is also offered, make it a separate card for virtual desktops. |
| 3 | أتمتة التوسع السحابي والحاويات: تجهيز المنظومات داخل حاويات برمجية معزولة لتسهيل التحديث الدوري والتوسع المرن أثناء مواسم ذروة الأعمال. | **Containers والتوسع التلقائي**: تشغيل التطبيقات داخل Containers معزولة، مع توسع تلقائي وقت الضغط وتحديثات أسهل. | |
| 4 | البوابات والمنصات الرقمية: بناء بوابات رقمية سريعة الاستجابة تعزز موثوقية المؤسسة وتنظم طلبات عروض الأسعار وقنوات تواصل العملاء. | **المواقع والبوابات**: تصميم وتطوير مواقع وبوابات للشركات، مع نموذج لطلب عرض السعر وربط بقنوات التواصل. | |
| 5 | تطبيقات الهواتف الذكية: تطبيقات هاتفية مخصصة لأنظمة iOS وAndroid تتيح إدارة المهام والحجوزات والربط اللحظي مع قواعد البيانات المركزية. | **تطبيقات iOS وAndroid**: تطبيقات موبايل مخصصة لإدارة المهام والحجوزات، متصلة مباشرة بقاعدة بيانات الشركة. | |
| 6 | منصات التجارة والمبيعات الرقمية: منصات تجارة إلكترونية تدمج بوابات الدفع المعتمدة وشركات الشحن المحلي ومزامنة أرصدة المخازن آلياً. | **المتاجر الإلكترونية**: متجر إلكتروني مربوط ببوابات الدفع وشركات الشحن، مع تحديث أرصدة المخزون تلقائياً. | |
| 7 | هندسة تجربة المستخدم والواجهات: تصميم مسارات عمل وواجهات تشغيلية واضحة تقلل أخطاء إدخال البيانات وتسرّع إنجاز المهام اليومية للفرق. | **تصميم واجهات الأنظمة (UX / UI)**: تصميم شاشات وسير عمل لأنظمة التشغيل الداخلية، لتقليل أخطاء إدخال البيانات. | |
| 8 | المنظومات الإدارية والمالية (ERP): تطوير ونشر أنظمة المحاسبة والمخازن والمبيعات مع الربط الآلي بمنظومة الفاتورة الإلكترونية المصرية وفق معايير الضرائب. | **أنظمة ERP**: نظام للحسابات والمخازن والمبيعات، مربوط بمنظومة الفاتورة الإلكترونية المصرية. | |
| 9 | فحص واعتماد جودة المنظومات (QA): تدقيق تقني مستقل واختبارات قبول شاملة للمنظومات البرمجية وتطبيقات الجوال قبل توقيع محاضر الاستلام من المطورين. | **اختبار وقبول الأنظمة (QA / UAT)**: تدقيق تقني مستقل واختبارات قبول للأنظمة وتطبيقات الموبايل، قبل توقيع محضر الاستلام من المطوّر. | |

### 6.3 Packages

| Element | Current | New |
|---|---|---|
| Section title | باقات تأسيس الشركات والمقرات + باقات تأسيس وتشغيل البنية التحتية للشركات | **باقات تجهيز المقرات والفروع** (one title only) |
| Sub-line | باقات هندسية لتجهيز المقرات والفروع بالشبكات، الحماية، الخوادم، والدعم الدوري. | الشبكة والحماية والخوادم لمكتبك أو فروعك، مع عقد دعم بعد التسليم. |
| CTA | اطلب هذه الباقة | اطلب عرض سعر |

Card layout: `الاسم` → `مناسبة لـ` → `رسوم التأسيس (مرة واحدة)` → `الدعم` (when priced) → `تشمل` (ordered: network → security → servers → e-mail → support). Each fact appears **once**.

| Plan | مناسبة لـ | السعر | تشمل |
|---|---|---|---|
| **البداية** | عيادة · مكتب · شركة صغيرة | رسوم التأسيس: 15,000 – 25,000 ج.م. الدعم الشهري: 1,000 – 2,000 ج.م `[VERIFY Q3]` | Structured Cabling حتى 15 نقطة شبكة · تسجيل الدومين وإعداد DNS · `[add the items hidden behind "إظهار المزيد"]` |
| **النمو** | حتى 50 مستخدماً · حتى 3 Access Points | رسوم التأسيس: من 45,000 ج.م | Structured Cabling وتركيب Rack · تركيب Firewall وإعداد VLANs لفصل الشبكات · عقد صيانة ودعم (SLA) لمدة 3 أشهر |
| **الفروع المتعددة** | حتى 100 مستخدم · ربط آمن بين الفروع | رسوم التأسيس: من 75,000 ج.م | Site-to-Site VPN بين الفروع · بريد الشركة حتى 100 صندوق · عقد صيانة ودعم دوري `[VERIFY: period]` |
| **المؤسسات** | أكثر من 100 مستخدم · تغطية المباني والفروع | حسب المعاينة `[VERIFY Q2: the current "120,000" is it a starting price?]` | تصميم وتنفيذ غرفة خوادم · Site-to-Site VPN بين الفروع · مهندس مقيم أو عقد تشغيل (SLA) مخصص 24/7 `[VERIFY Q6]` |

Under the cards: "الأسعار `[تشمل / لا تشمل]` ضريبة القيمة المضافة." `[VERIFY Q4]`

### 6.4 Delivery steps

| Element | Current | New |
|---|---|---|
| Title | منهجية التنفيذ والحوكمة الهندسية / مراحل تنفيذ المشاريع وتوثيق البنية التحتية | **مراحل تنفيذ المشروع** (one title) |
| Sub-line | إطار عمل هندسي مرحلي يضمن التنفيذ المجدول خارج ساعات الذروة مع توثيق كامل عند التسليم. | ننفذ على مراحل، خارج ساعات الذروة عند الحاجة، ونسلّم توثيق البنية التحتية مع المشروع. |
| 01 · 2 - 3 أيام | التدقيق الفني وتحديد المتطلبات: دراسة البنية الحالية وتحديد نقاط الاختناق والمخاطر الأمنية. | **الفحص وتحديد المتطلبات**: مراجعة البنية الحالية، وتحديد نقاط الاختناق والمخاطر الأمنية. |
| 02 · 3 - 7 أيام | التجهيز والهجرة الآمنة: إعداد الخوادم والشبكات ونقل البيانات خارج أوقات الذروة. | **الإعداد ونقل البيانات**: إعداد الخوادم والشبكة، ونقل البيانات خارج أوقات الذروة. |
| 03 · 1 - 2 يوم | الاختبار والتأمين السيبراني: فحص الثغرات وتفعيل جدران الحماية والنسخ الاحتياطي المعزول. | **الاختبار والتأمين**: فحص الثغرات (Vulnerability Scan)، وتفعيل Firewall، وإعداد Backup منفصل عن الشبكة. `[VERIFY Q5: Firewall setup normally belongs to step 02]` |
| 04 · مستمر | المراقبة والدعم المستمر: مراقبة استباقية للأداء على مدار الساعة واستجابة موثقة للبلاغات. | **المراقبة والدعم**: مراقبة الأداء `[VERIFY Q6: 24/7]`، والرد على البلاغات حسب مستويات الخدمة في العقد `[VERIFY]`. |

Durations (2 - 3 أيام, 3 - 7 أيام, 1 - 2 يوم) stay only if the owner confirms them (Q5).

### 6.5 ERP preview

| Element | Current | New |
|---|---|---|
| Section title | معاينة الأنظمة والمنصات البرمجية / شاهد جودة أنظمتنا البرمجية قبل التعاقد | **عرض توضيحي لنظام ERP** |
| Sub-line | استعرض واجهات الاستخدام الفعلية والوحدات التشغيلية لأنظمة تخطيط موارد المؤسسات (ERP) والربط الضريبي المباشر. | واجهات النظام ووحداته، والربط مع منظومة الفاتورة الإلكترونية. |
| Card text | إدارة المبيعات والمشتريات والمخازن مع الربط المباشر بمنظومة الفاتورة الإلكترونية المصرية. | المبيعات والمشتريات والمخازن، مع الربط المباشر بمنظومة الفاتورة الإلكترونية المصرية. |
| Label 1 | الوحدات البرمجية المفعّلة في النظام | **وحدات النظام**: الحسابات العامة · المخازن · الفاتورة الإلكترونية · الموارد البشرية |
| Label 2 | مؤشرات التشغيل المستهدفة | **المواصفات التقنية**: الربط الضريبي: ETA SDK v1.0 `[VERIFY Q8]` · تتبع الأصناف: FIFO / Batch · الصلاحيات: RBAC + Audit Log |
| CTA | اطلب جلسة عرض حي مع مهندسينا | احجز عرضاً تجريبياً |

### 6.6 Footer

| Element | Current | New |
|---|---|---|
| Company blurb | نُزول تِك شركة مصرية متخصصة في حلول واستشارات تقنية المعلومات للشركات. نتولى تصميم وتنفيذ الشبكات المهيكلة، استضافة الخوادم السحابية، تأمين الأنظمة السيبرانية، وتطوير منظومات ERP بعقود مستوى خدمة SLA موثقة. | نزول تك شركة مصرية لتقنية المعلومات. نصمم وننفذ الشبكات وغرف الخوادم، ونشغّل الخوادم السحابية، ونؤمّن الأنظمة، ونطوّر أنظمة ERP. الدعم والصيانة بعقود SLA. |
| Column titles | روابط سريعة / قطاعات الحلول / بيانات التواصل | **الموقع / الخدمات / التواصل** ("قطاعات الحلول" lists service categories, not industries) |
| Payments | وسائل الدفع المعتمدة للشركات والأفراد في مصر والخليج | **طرق الدفع** `[VERIFY Q7: remove "والخليج" unless real]` |

---

## 7. English copy rules

- Plain vendor English, short sentences, concrete nouns: "Private Cloud on servers inside your premises", not "empowering your digital sovereignty".
- Banned: leverage, seamless, robust, cutting-edge, state-of-the-art, end-to-end (unless literally true), holistic, empower, unlock, world-class, mission-critical (unless defined), best-in-class.
- Same glossary: Cluster, Firewall, Access Point, Structured Cabling, Rack, Server Virtualization, Private Cloud, SLA.
- Same structure: title = noun, one line of description, no benefit chains, one price per label.
- The English version states the same facts as the Arabic. Do not add facts in English.

---

## 8. Open questions for the owner (copy keeps current wording until answered)

1. Is the "VDI" service really VDI (virtual desktops), or server virtualization? Is VDI offered separately?
2. Enterprise package: is "120,000 ج.م" a starting price, or is it "حسب المعاينة"? Show one only.
3. Starter package: what does "1,000 – 2,000 ج.م / شهر" cover, and is it the support fee?
4. Do the prices include VAT?
5. Are the phase durations (2 - 3 / 3 - 7 / 1 - 2 days) real? Does Firewall activation happen in phase 02 or 03?
6. Do you provide 24/7 monitoring and a resident-engineer option? Which SLA levels exist (response and resolution times)?
7. Do you serve clients in the Gulf? (Footer says "مصر والخليج".) Which payment methods and bank names are active?
8. Is "ETA SDK v1.0" the version you actually integrate with?
9. What is behind "إظهار المزيد" on each package, and on the remaining 14 services? Send the full text so it can be rewritten with the same rules.
