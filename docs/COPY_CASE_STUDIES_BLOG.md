# Nuzul Tech — `/case-studies`, `/case-studies/[slug]`, `/blog`, & `/blog/[slug]` Copy Deck (Phase 7)

Every entry in this document obeys `docs/VOICE.md`, `docs/CLAIMS.md`, and Section 3.4 / Section 3.7 of `NUZUL_REBUILD_MASTER_BRIEF.md`.
- **Client Naming Policy:** Client names lacking signed public release documentation in `docs/CLAIMS.md` (rows 13–24) are anonymized to sector, facility type, and city (e.g., *"مستشفى تخصصي خاص — القاهرة"* / *"Private Specialized Hospital — Cairo"*).
- **Zero Unverified Metrics:** All unverified percentage claims (`99.98%`, `+60%`, `75%`, `80%`, `95%`, `50%`, `25%`, `40%`, `100%`) are removed from case study outcomes and replaced with verified engineering scope and qualitative operational outcomes.
- **Zero Banned Words:** Checked against the Master Brief banned-phrase list.

---

## 1. `/case-studies` & `/case-studies/[slug]` — Engineering Case Studies (Section 3.4)

### 1.1 Structure of Every Case Study (`Section 3.4`)
Each case study follows the 4-part engineering breakdown plus architectural diagram and field photo slot:
1. **Context (`سياق المشروع وبيئة العميل`):** Sector, organization profile, and operational environment prior to engagement.
2. **Constraint (`القيود والتحدي التشغيلي`):** Specific technical bottleneck, security exposure, or infrastructure constraint.
3. **What We Delivered (`النطاق الهندسي المنفذ`):**
   - **Scope (`نطاق الأعمال المنفذة`):** Concrete engineering deliverables and verified unit counts (e.g., `180+ 4K IP cameras`, `30 concurrent auditors`, `150+ corporate mailboxes`).
   - **Stack Category (`المكدس التقني`):** Verified technologies (`Fortinet NGFW`, `VLAN 802.1Q`, `KVM Virtualization`, `NVMe Storage`, `SPF/DKIM/DMARC`, `Active Directory`, `VoIP PBX`).
   - **Timeline (`الجدول الزمني للتنفيذ`):** Staged delivery window.
4. **Qualitative Outcome (`الأثر التشغيلي الموثق`):** Factual, qualitative operational improvement without invented or unverified percentages.

### 1.2 Anonymized Case Study Registry (12 Projects)

| ID | Pillar (`cat`) | Anonymized Client (AR / EN) | Title (AR / EN) | Documented Scope & Qualitative Outcome |
|---|---|---|---|---|
| `case-1` | `security` | مستشفى تخصصي خاص — القاهرة / Private Specialized Hospital — Cairo | تأمين الشبكة الطبية ومنظومة المراقبة البصرية 4K / Hospital Network Isolation & 4K IP Surveillance | 180+ 4K IP cameras, RAID-6 NVR (90-day retention), Fiber/Cat6A backbone, Fortinet NGFW VLAN isolation, 200+ DMARC mailboxes. |
| `case-2` | `cloud` | مكتب استشارات مالية ومحاسبية — القاهرة / Financial & Audit Consultancy — Cairo | الاستضافة السحابية الخاصة وحوكمة البريد المالي / Private Cloud Hosting & Financial Email Governance | KVM NVMe cloud server for 30 concurrent auditors, 150+ SPF/DKIM/DMARC mailboxes, daily encrypted off-site backups. |
| `case-3` | `cloud` | مركز طبي تخصصي للأورام — القاهرة / Specialized Oncology Center — Cairo | فصل أرشيف الأشعة الطبية (PACS) والسحابة الهجينة / Medical PACS Archiving & Hybrid Cloud Storage | Local NVMe DICOM PACS storage decoupled from 120 corporate mailboxes, with encrypted off-site cloud backup replication. |
| `case-4` | `infrastructure` | مستشفى جراحي وتخصصي — القاهرة / Surgical & Specialized Hospital — Cairo | العناقيد الافتراضية المزدوجة ونظام علاقات المرضى / High-Availability Virtualization & Patient Relations System | KVM/VMware HA virtualization cluster, Fiber/Cat6A cabling, Fortinet NGFW, hospital portal, internal ticketing, and PR system. |
| `case-5` | `software` | مستشفى عام وتخصصي — الجيزة / General & Specialized Hospital — Giza | منظومة تخطيط موارد المستشفيات والسجلات الطبية (EMR) / Hospital ERP & Electronic Medical Records Suite | Unified outpatient scheduling, Electronic Medical Records (EMR), insurance billing, central pharmacy inventory, and shift rosters. |
| `case-6` | `cloud` | مؤسسة محاسبة واستشارات ضريبية — مصر / Tax & Accounting Consultancy Firm — Egypt | تأمين البريد الرسمي واستضافة الأنظمة الضريبية سحابياً / Corporate Email Hardening & Cloud Tax Systems | Migrated 500+ mailboxes with SPF/DKIM/DMARC, provisioned dedicated Cloud VPS for 25 concurrent tax auditors with daily backups. |
| `case-7` | `security` | مجموعة مراكز وعيادات طبية — مصر / Healthcare Clinics Group — Egypt | هجرة وتأمين البريد الطبي والأرشفة السحابية / Medical Email Migration & Encrypted Archiving | Staged IMAP migration of 250+ clinical mailboxes to private mail servers with 2048-bit DKIM, DMARC reject policy, and archiving. |
| `case-8` | `security` | شركة خدمات لوجستية وشحن دولي — مصر / Freight & Logistics Enterprise — Egypt | حماية النطاق التجاري ومكافحة انتحال الفواتير / Domain Brand Protection & Anti-Phishing Hardening | Enforced DMARC reject policy, DNSSEC, and TLS 1.3 mail encryption across 120 commercial logistics mailboxes. |
| `case-9` | `software` | شركة نقل بري وإدارة أساطيل — مصر / Overland Transport & Fleet Operator — Egypt | منصة تتبع الأسطول وحساسات القياس عن بُعد (IoT) / IoT Fleet Telemetry & Dispatch Platform | GPS and fuel-sensor MQTT telemetry, mobile driver dispatch app, and central route monitoring dashboard. |
| `case-10` | `infrastructure` | مؤسسة عمل أهلي وتنموي — القاهرة / Non-Profit Development Foundation — Cairo | تأسيس الشبكات المنظمة والدومين المركزي والسنترال الرقمي / Turnkey Cabling, Active Directory & VoIP PBX | Cat6A structured cabling, Active Directory & DHCP domain controller, HD CCTV grid, VoIP PBX, central ACL file server, and Wi-Fi mesh. |
| `case-11` | `software` | منصة سحابية لإدارة علاقات العملاء — مصر / Multi-Tenant Cloud CRM Platform — Egypt | الفحص الهندسي واختبارات القبول البرمجية (QA & UAT) / Software QA, Load Testing & Vendor Handover Audit | End-to-end functional QA, iOS/Android testing, WebRTC VoIP concurrency simulation, API/DB load testing, and formal handover report. |
| `case-12` | `software` | عيادة جراحة عظام ومفاصل تخصصية — القاهرة / Specialized Orthopedic Surgery Clinic — Cairo | نظام إدارة العيادات وتنظيم طوابير المراجعين (Q-System) / Clinic EMR & Integrated Patient Queue System | Orthopedic EMR, radiological scan archiving, barcode e-prescriptions, and digital waiting-room queue displays. |

---

## 2. `/blog` & `/blog/[slug]` — Engineering Knowledge Base

### 2.1 Listing Filters (`/blog`)
Reuses the Phase 6 URL-synchronized filter architecture (`?cat=all|cloud|security|infrastructure|software`, `?q=`, `?sort=newest|title`, `?page=`) with:
- Sticky filter sidebar on desktop (`[data-testid="blog-filter-sidebar"]`)
- Collapsible bottom sheet on mobile (`[data-testid="blog-mobile-filter-trigger"]` → `[data-testid="blog-mobile-filter-sheet"]`)
- Live result counter (`[data-testid="blog-result-count"]`)
- Active filter chips + Clear All (`[data-testid="blog-active-filter-chips"]`, `[data-testid="blog-clear-filters-btn"]`)

### 2.2 Article Detail Template (`/blog/[slug]`)
Each technical guide includes:
- Category badge, publication date (`<bdi dir="ltr" class="ltr-num">`), reading time, and engineering team attribution.
- Auto-generated **Table of Contents (TOC)** (`[data-testid="blog-toc"]`) linking to structured article sections (`#section-1`, `#section-2`, `#section-3`).
- Comfortable reading measure (`60–70ch`) with bilingual technical explanations.
- **Related Articles** block (`[data-testid="blog-related-articles"]`) displaying 3 related engineering guides in the same or adjacent pillar.
