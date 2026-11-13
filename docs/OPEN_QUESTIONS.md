# Open Questions for the Owner (`OPEN_QUESTIONS.md`)

**Last Updated:** `2026-11-04`  
**Phase:** Phase 2 — Benchmark Research, Claims Register, Voice Guide  
**Purpose:** Lists every factual, contractual, and legal question that requires owner confirmation before final copy is published in Phases 4, 6, 7, and 8. For any item where proof/permission is not available, we will automatically apply the neutral/anonymized replacement documented in `docs/CLAIMS.md`.

---

## 1. Service Level Agreements (SLA), Support Tiers & Uptime Remedies
1. **Monthly Uptime Targets (`99.9%` vs. `99.95%` vs. `99.99%`):**
   - Currently `HOSTING_PLANS` (`src/data/nuzulData.ts:2230, 2253, 2276, 2299`) lists `99.90%` (`shared-cpanel`), `99.95%` (`wp-managed`), and `99.99%` (`linux-vps`, `windows-rdp`).
   - **Question:** What is the exact contractual Monthly Uptime Percentage for each plan, how is downtime measured (e.g., consecutive 5-minute intervals of host/network loss excluding scheduled maintenance), and what is the service credit remedy (e.g., 10%–30% monthly credit)?
2. **Support Severity Levels (`P1–P4`) & Response Times (`< 15 min`):**
   - Currently the site mentions `< 15 دقيقة` emergency response (`nuzulData.ts:663, 1733, 2595`).
   - **Question:** May we define formal support severity levels (`P1` Critical outage: `< 15 min` acknowledgment on Enterprise SLA / `< 1 hr` on Business; `P2` Major degradation: `< 2 hrs`; `P3` Minor issue: `< 8 business hrs`; `P4` General inquiry: `< 24 hrs`)?
3. **Backup Retention, `RPO` & `RTO` Targets:**
   - **Question:** What is the standard backup retention window included in each hosting plan (e.g., 7 daily snapshots on Shared/WordPress, 14–30 days on VPS), and should `RPO` / `RTO` targets (`< 15 min` failover) be marked as requiring an optional **Hot Standby / DR** add-on?

---

## 2. Datacenter Locations, Certifications & Network Capacities
4. **Datacenter Locations & Certifications (`Cairo`, `Frankfurt`, `Riyadh` — `Tier-III` / `ISO 27001`):**
   - Currently `INFRASTRUCTURE_LOCATIONS` (`nuzulData.ts:2472-2506`) and `Blog 9` (`nuzulData.ts:1847`) cite `Cairo (Tier-III, 4 ms)`, `Frankfurt (ISO 27001, 28 ms)`, and `Riyadh (Tier-III, 22 ms)`.
   - **Question:** Which datacenter locations are actively available for customer deployment today, and do we have permission to cite the upstream colocation facility certifications (`Tier-III`, `ISO 27001`), or should we phrase this as `"مستضافة في مراكز بيانات بمعايير توافرية عالية في القاهرة وأوروبا"`?
5. **DDoS Scrubbing Capacity (`1.2 Tbps`):**
   - Removed from live pages in Phase 1 (`docs/CLAIMS.md #32`).
   - **Question:** Does your upstream datacenter provider document a specific DDoS scrubbing capacity that we can cite with attribution, or should we keep the neutral capability description (`"حماية تلقائية ضد هجمات L3/L4/L7 DDoS"`)?
6. **Engineering Team Certifications (`CCNP`, `Fortinet NSE`):**
   - Currently `TEAM_MEMBERS` (`nuzulData.ts:2615`) lists `CCNP`, `Fortinet NSE`, `Linux KVM`.
   - **Question:** Are `Cisco CCNP` and `Fortinet NSE` actively held by current Nuzul Tech engineers?

---

## 3. Named Clients, Case Study Metrics & Written Permissions (12 Case Studies)
7. **Written Permission to Name the 12 Case Study Clients (`nuzulData.ts:774-1543`):**
   - Please confirm which of the following 12 clients have granted permission to display their organization name publicly, and which should be anonymized to sector descriptors (e.g., `"مستشفى تخصصي خاص — القاهرة"`):
     1. `مستشفى تراست التخصصي — القاهرة` (`Trust Specialized Hospital`)
     2. `مكتب محمد إبراهيم للاستشارات والخدمات المالية — القاهرة` (`Mohamed Ibrahiem Office for Finance`)
     3. `مركز Cairo Cure التخصصي للأورام — القاهرة` (`Cairo Cure Oncology Center`)
     4. `مستشفى ABCH — القاهرة` (`ABCH Hospital`) — *Also: was `KVM` or `VMware` deployed here?*
     5. `مستشفى لبنان` (`Lebanon Hospital`) — *Also: was `HL7/FHIR` deployed in production?*
     6. `مكتب عامر للمحاسبة والاستشارات الضريبية — مصر` (`Amer Tax Consultancy`)
     7. `مجموعة الصفوة الطبية — مصر` (`Al-Safwa Healthcare Group`)
     8. `شركة الجمهورية للخدمات اللوجستية والتجارة — مصر` (`El-Gomhouria Logistics`)
     9. `شركة إيفرست للنقل واللوجستيات — مصر` (`Everest Transport`)
     10. `مؤسسة مشكاة نور الخيرية — مصر` (`Meshkat Nour Charity Foundation`)
     11. `منصة أومنيكس تراك (omnixtrack.com)` (`OmnixTrack CRM`)
     12. `عيادة د. خالد فاروق عبيدو لجراحة العظام والمفاصل` (`Dr. Khaled Farouk Obeido Clinic`) — *Also: is `ClinicCore™` a registered trademark?*
8. **Case Study Quantified Result Metrics:**
   - For the percentage metrics in those case studies (`75%` cost reduction at Cairo Cure, `70%` faster audit reporting, `80%` faster tax turnaround, `50%` shorter clinic wait times, `25%` fuel reduction / `40%` dispatch productivity at Everest Transport), which metrics have documented before/after measurements (and measurement dates) we can cite, and which should be reworded to concrete architectural outcomes?

---

## 4. Named Testimonials (12 Attribution Records in `NUZUL_TESTIMONIALS`)
9. **Written Permission for Attributed Quotes (`nuzulData.ts:1545-1678`):**
   - Per Section 3.4 (*"Testimonials: real person, role, organization, permission. Otherwise remove the section"*), please confirm which of the 12 named individuals in `NUZUL_TESTIMONIALS` (`د. خالد فاروق عبيدو`, `أ. محمد ضيف`, `د. خالد عبد الرحمن`, `م. أحمد علي`, `أ.د. هشام الغزالي`, `أ. محمد إبراهيم`, `د. نور الهدى الجمال`, `أ. محمد سلامة`, `أ. عامر محمد`, `د. ماجد الشريف`, `أ. إيهاب عثمان`, `أ. محمد جمال`) have approved publishing their quote on the website.

---

## 5. Pricing, Bundled Packages, Contact Channels & Legal Wording
10. **Bundled Packages Hardware Scope (`NUZUL_PACKAGES` on `/pricing`):**
    - In `Starter` (`15,000–25,000 EGP`), `Business` (`30,000–60,000 EGP`), and `Professional` (`70,000–120,000 EGP`), does the one-time setup fee include the physical hardware (routers, switches, IP cameras, NVR, cabling), or is the setup fee for engineering implementation while hardware is billed per site survey (BoM)?
11. **Canonical Contact & Payment Details:**
    - Should `/contact` and `HomeFinalCTA` use `NUZUL_CONTACT` (`+20 114 0565057` / `+20 101 1678830` and `info@nuzultech.com`) everywhere, removing the `+20 100 000 0000` and `sales@nuzultech.com` placeholders?
    - Should `instapayPhone: 01004727460` / `abdullah0samy@instapay` remain in `PaymentModal.tsx` or be replaced with invoice-upon-request for B2B orders?
12. **Legal & Compliance Wording (`[VERIFY with legal]`):**
    - Please confirm the approved legal wording for:
      - Egyptian Tax Authority (`ETA`) e-invoicing integration (`متوافق مع متطلبات الربط الفني لمنظومة الفاتورة الإلكترونية المصرية`).
      - Website Privacy Policy notice on contact forms (`/contact` and `HomeFinalCTA`).
13. **Real Office / Engineering Team Photograph (`/contact`):**
    - Will you supply a real photograph of the Nuzul Tech Cairo office/engineering team for the reserved slot on `/contact` (`[IMAGE SLOT]`), or should we keep the clearly marked placeholder slot until photography is ready?
14. **Architecture Diagram Facts for `case-11` (`OmnixTrack CRM QA & Handover Audit`):**
    - Currently `case-11` (`src/data/nuzulData.ts:1396-1467`) describes a Software QA, Load Testing, and Vendor Handover Audit (`QA & Test Matrix`, `Mobile iOS/Android QA`, `WebRTC Call Testing`, `API & DB Stress Testing`), which does not specify the underlying cloud/server deployment topology (e.g., load balancer, database engine, WebRTC media server, or CI/CD runner architecture). Per Section 3.9, we currently render a **Typographic Cover Card** (`[data-testid="typographic-cover-card-case-11"]`) instead of inventing diagram nodes.
    - **Question:** Would you like `case-11` to keep the Typographic Cover Card, or can you confirm the exact QA test pipeline / target hosting architecture nodes tested during the OmnixTrack audit so we can draw a verified diagram?

---

## 6. Copy Style Reference Open Questions (Section 8 of NUZUL_COPY_STYLE_REFERENCE.md)
15. **Q1 — VDI vs Server Virtualization:** Is the "VDI" service really VDI (virtual desktops for users), or server virtualization? If VDI is also offered, should it be a separate service card? (Currently keeping wording and marking `[VERIFY Q1]`).
16. **Q2 — Enterprise Package Pricing:** On the Enterprise package, is the starting price 120,000 EGP or "حسب المعاينة"? (Per Section 5, "من X" and "حسب المعاينة" must never appear together; currently displaying "حسب المعاينة" and marking `[VERIFY Q2]`).
17. **Q3 — Starter Package Monthly Support:** On the Starter package, what does "1,000 – 2,000 ج.م / شهر" cover, and is it an optional or mandatory monthly support fee? (`[VERIFY Q3]`).
18. **Q4 — VAT Treatment:** Do the listed package and hosting prices include VAT (14% ضريبة القيمة المضافة) or exclude it? (`[VERIFY Q4]`).
19. **Q5 — Implementation Phase Durations & Firewall Activation Timing:** Are the phase durations (2 - 3 / 3 - 7 / 1 - 2 days) confirmed? Does Firewall activation happen in phase 02 (staging) or phase 03 (testing/hardening)? (`[VERIFY Q5]`).
20. **Q6 — 24/7 Monitoring & Resident Engineer SLA:** Do you provide 24/7 monitoring and a resident-engineer option across all corporate tiers? Which formal SLA response and resolution times exist for each tier? (`[VERIFY Q6]`).
21. **Q7 — Geographic Reach & Payment Channels:** Do you actively serve clients in the Gulf ("مصر والخليج" in footer and hero)? Which corporate bank names and international transfer methods are active? (`[VERIFY Q7]`).
22. **Q8 — Egyptian Tax Authority SDK Version:** Is "ETA SDK v1.0" the exact SDK / API specification integrated with for e-invoicing? (`[VERIFY Q8]`).
23. **Q9 — Hidden Text & Full Specs:** What is behind the expandable sections ("إظهار المزيد") on each package and on the remaining 14 services? (Audited and documented in `docs/COPY_AUDIT.md` and `docs/COPY_SERVICES.md`).
24. **Q10 — Sectors Strip Geographic Reach ("في مصر والخليج"):** Removed from Home hero sectors strip per Purpose Test / Section 3.11. Is Nuzul Tech actively contracted with clients in the GCC / Gulf, and may we cite specific GCC project countries or should we restrict public claims to Egypt? (`[VERIFY Q10]`).
25. **Q11 — Manufacturing & Supply Chain Sector ("المصانع وسلاسل الإمداد"):** Removed from Home hero sectors strip per Purpose Test / Section 3.11. Does Nuzul Tech have an active or completed manufacturing/logistics reference client with permission to cite, or should the strip remain focused on Healthcare, Finance, and Commercial Services? (`[VERIFY Q11]`).


