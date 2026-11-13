# Nuzul Tech: Home Page Purpose Audit (`PURPOSE_AUDIT.md`)

> **Protocol Reference:** `NUZUL_REBUILD_MASTER_BRIEF.md` Section 3.11 (Purpose test and anti-clutter rules).  
> **Rule:** Every element must answer one of four questions:
> 1. **What do you do?**
> 2. **Who is it for?**
> 3. **Why should I trust you?**
> 4. **What do I do next?**
> 
> *If an element answers none of these four, or violates anti-clutter rules (fake charts, redundant controls, unverified claims), it is deleted. Deleting is allowed and encouraged. Deleted elements are not replaced with new decoration.*

---

## 1. Header & Navigation (Desktop & Mobile)

| # | Element | Location | Question it answers | Decision | Rationale & Remediation |
|---|---|---|---|---|---|
| 1.1 | Brand Logo (`NuzulLogo`) | Header Start | What / Who | **Keep** | Identifies vendor identity and links to top. Fits 64px sticky bar. |
| 1.2 | Desktop Nav Links (5 links) | Header Nav (≥1024px) | What | **Keep** | Standard 5 IA routes (`/services`, `/hosting`, `/pricing`, `/case-studies`, `/blog`). |
| 1.3 | Global Search Button | Header Actions | What / Next step | **Keep** | Triggers accessible command palette (`Ctrl+K`). Single global search per Section 3.7. |
| 1.4 | Theme Switcher (Desktop) | Header Actions | User preference | **Keep** | Single icon button opening 3-choice dropdown (Light / Dark / System). |
| 1.5 | Language Switcher (Desktop) | Header Actions | User preference | **Keep** | Compact AR/EN toggle. |
| 1.6 | Desktop Primary CTA ("احجز استشارة") | Header Actions | What do I do next? | **Keep** | Single clear header CTA linking to `/contact`. |
| 1.7 | **Mobile Header Bar (4 controls)** | Top bar (<1024px) | None (Violates Section 3.10/3.11) | **Replace** | **Defect #4:** Search + Theme + Lang + Hamburger = 4 controls crowding 375px header. **Fix:** Top bar strictly has 3 controls: `Logo + Search + Menu`. Theme and Lang toggles moved inside drawer. |
| 1.8 | Mobile Navigation Drawer | Menu Drawer (<1024px) | What / Next step / Prefs | **Keep & Consolidate** | Contains 5 links, primary CTA ("احجز استشارة"), close button, and relocated Theme & Lang toggles. |

---

## 2. Hero Section (`/`)

| # | Element | Location | Question it answers | Decision | Rationale & Remediation |
|---|---|---|---|---|---|
| 2.1 | **Eyebrow Category Line** | Above H1 | None (Redundant fluff) | **Remove** | "هندسة الشبكات · الخوادم السحابية · الأمن السيبراني" repeats the H1 and services title. Adds vertical bulk. Deleted. |
| 2.2 | **H1 Headline** | Hero Main | What do you do? | **Keep & Reword** | Current headline uses absolute "تعمل بثبات دون انقطاع" ("without interruption"). Reword to concrete facts. 3 options drafted for owner selection. |
| 2.3 | Supporting Subtext | Hero Main | What / Why trust | **Keep & Shorten** | One factual sentence: office networks, KVM NVMe servers, cybersecurity, SLA support. Zero absolutes. |
| 2.4 | **Hero CTA Buttons** | Hero Actions | What do I do next? | **Keep & Align** | **Defect #5:** Primary and secondary buttons had mismatched widths. **Fix:** Primary "اطلب عرض سعر" + Secondary text/outline link "خطط الأسعار", identical height and full-width on mobile (`w-full sm:w-auto`). |
| 2.5 | **Fake Infrastructure Telemetry Stage** | Hero Stage | None (Violates 3.11) | **Remove** | **Defect #1:** Synthetic dashboard with fake curve, no axes, "محاكاة توضيحية" / "DEMO" badge, 3 nested cards, and Fortinet/KVM/Backup duplicated twice. Deleted in full. |
| 2.6 | **Living Network Canvas (Global Mount)** | App Body | None (Violates 3.6/3.11) | **Replace** | **Defect #2:** Mounted globally across all pages in `App.tsx`; lines crossed text. **Fix:** Removed from `App.tsx`. Mounted ONLY inside Hero with bottom fade mask, lower opacity, and reduced node count on mobile. |
| 2.7 | **Sectors Strip ("في مصر والخليج")** | Hero Footer Strip | Who is it for? | **Replace** | "في مصر والخليج" is an unverified geographic claim (Q7/CLAIMS #5). "المصانع وسلاسل الإمداد" unverified (CLAIMS #5). **Fix:** Strip retained for Healthcare, Finance, Commercial; Gulf and Manufacturing claims removed to `docs/OPEN_QUESTIONS.md`. |

---

## 3. Services Section (`HomeServicePillars.tsx`)

| # | Element | Location | Question it answers | Decision | Rationale & Remediation |
|---|---|---|---|---|---|
| 3.1 | **Section Title** | Services Header | What do you do? | **Replace** | Was "أربعة قطاعات هندسية متكاملة" (uses banned word "متكاملة"). **Fix:** Changed to clean standard title "الخدمات" / "Services". |
| 3.2 | Catalog Link ("عرض جميع الخدمات") | Services Header | What do I do next? | **Keep** | Direct link to `/services` catalog. |
| 3.3 | **Card Numbering ("01.", "02.")** | Service Cards | None (Violates 3.11) | **Remove** | **Defect #6:** Decorative numbering glued to title with bidi bug. The four core practices are not an execution sequence. Numbering deleted. |
| 3.4 | **Dual Actions ("إظهار المزيد" + "استكشف القطاع")** | Service Cards | None (Violates 3.11) | **Replace** | **Defect #6:** Two competing actions for a 2-line description. **Fix:** Removed "إظهار المزيد" expand toggle. The whole card is an accessible link with a single clean target. |
| 3.5 | Deliverable Bullet Points | Service Cards | What do you do? | **Keep (Visible)** | 3 concrete deliverables shown cleanly per card (e.g., Structured Cabling, NGFW & VLAN, KVM NVMe, 3-2-1 Backups). |

---

## 4. Architecture Diagram (`HomeArchitectureDiagram.tsx`) — NEW REPLACEMENT

| # | Element | Location | Question it answers | Decision | Rationale & Remediation |
|---|---|---|---|---|---|
| 4.1 | **Standard Operating Architecture (SVG)** | Below Services | What do you do? / Why trust | **Add (Replaces fake dashboard)** | Direct requirement C / Phase 6B: Standalone section showing real topology: `Internet → Firewall (Fortinet NGFW) → VLANs (802.1Q) → Servers (KVM NVMe VPS) → Backup (3-2-1 Off-site Vault)`. Theme-aware SVG token colors, responsive vertical flow on 375px mobile. Latin terms written once. |

---

## 5. Featured Case Study (`HomeFeaturedCaseStudy.tsx`)

| # | Element | Location | Question it answers | Decision | Rationale & Remediation |
|---|---|---|---|---|---|
| 5.1 | Case Study Header & Sector Tag | Case Section | Who is it for? | **Keep** | Anonymized healthcare sector descriptor (`مستشفى تخصصي خاص — القاهرة`). |
| 5.2 | Delivered Scope Counters (3) | Case Section | Why trust / What | **Keep** | 180+ IP Cameras, 90 Days RAID-6 retention, 200+ DMARC mailboxes. Documented figures from Phase 4/7. |
| 5.3 | Technical SVG Diagram | Case Section | Why trust | **Keep** | Real network VLAN topology SVG. Zero AI stock photos. |
| 5.4 | Case Study CTAs | Case Section | What do I do next? | **Keep** | "اقرأ دراسة الحالة كاملة" (`/case-studies/case-01`) + "تصفح جميع المشاريع السابقة". |

---

## 6. How We Work (`HomeHowWeWork.tsx`)

| # | Element | Location | Question it answers | Decision | Rationale & Remediation |
|---|---|---|---|---|---|
| 6.1 | Section Title | Process Header | What do you do? | **Reword** | Current title "كيف ننفذ المشاريع بدون توقف للعمل" uses absolute "بدون توقف". **Fix:** Reword to "منهجية التنفيذ والترحيل المنضبط" / "Disciplined Delivery & Migration Workflow". |
| 6.2 | 3-Step Execution Pipeline | Process Steps | What / Why trust | **Keep** | Real sequence: 01 Site Audit → 02 Off-Peak Cutover & Rollout → 03 Runbook Handover & SLA. Horizontal desktop track, vertical mobile track. |

---

## 7. Hosting Teaser (`HomeHostingTeaser.tsx`)

| # | Element | Location | Question it answers | Decision | Rationale & Remediation |
|---|---|---|---|---|---|
| 7.1 | VPS Highlights & Specs | Hosting Card | What / Specs | **Keep** | KVM isolation, 4–12 vCPU, NVMe RAID-10, 32 TB traffic, Snapshot recovery. |
| 7.2 | Transparent Pricing Tag | Hosting Card | What do I do next? | **Keep** | Starting 320 EGP/mo for VPS 10, web hosting from 195 EGP/mo. Clear links to `/pricing` and `/hosting`. |

---

## 8. Testimonials (`HomeTestimonials.tsx`)

| # | Element | Location | Question it answers | Decision | Rationale & Remediation |
|---|---|---|---|---|---|
| 8.1 | Executive Pull-Quotes (3) | Testimonials | Why trust you? | **Keep** | Clean editorial quotes from clinic surgeon, B2B software founder, hospital general director. No 5-star badges, no AI avatars. |

---

## 9. FAQ (`HomeFAQ.tsx`)

| # | Element | Location | Question it answers | Decision | Rationale & Remediation |
|---|---|---|---|---|---|
| 9.1 | 4 Strategic FAQs | FAQ Accordion | Why trust you? | **Keep** | Covers SLA & Egyptian tax invoices, zero-downtime cutover strategy, data & root ownership runbook, and 3-2-1 backup architecture. |

---

## 10. Consultation Form (`HomeFinalCTA.tsx`)

| # | Element | Location | Question it answers | Decision | Rationale & Remediation |
|---|---|---|---|---|---|
| 10.1 | Direct Contact Coordinates | CTA Start | What do I do next? | **Keep** | WhatsApp phone and `info@nuzultech.com`. |
| 10.2 | Engineering Consultation Form | CTA Card | What do I do next? | **Keep** | Direct B2B form wired to `/api/contact` with Turnstile confirmation and reference ID generation. |

---

## 11. Floating WhatsApp Widget (`FloatingWhatsApp.tsx`)

| # | Element | Location | Question it answers | Decision | Rationale & Remediation |
|---|---|---|---|---|---|
| 11.1 | **Red Notification Dot** | Floating FAB | None (Violates 3.11) | **Remove** | **Defect #3:** Pulsing red notification dot implied unread messages / fake urgency. Removed completely. |
| 11.2 | FAB Button Target | Bottom-end FAB | What do I do next? | **Keep** | Single WhatsApp contact channel. Accessible label, min 44×44px, no overlap with content. |
| 11.3 | **Engagement Analytics Tracker** | FAB Click | Observability | **Add** | Simple engagement click tracker logging interaction to console. |
| 11.4 | **Cairo Business Hours Status Indicator** | FAB Tooltip | Why trust / When | **Add** | Dynamic status pill in tooltip showing 'Online' (Sunday–Thursday 09:00–18:00 Cairo time) or 'Away' (leave a message). Zero red badge. |
| 11.5 | **Soft Notification Chime** | Inactivity Expand | Accessibility | **Add** | Optional muted-by-default soft Web Audio chime on inactivity auto-expand. |

---

## Summary of Purpose Deletions & Streamlining

1. **Deleted:** Fake "Infrastructure Telemetry Stage" dashboard, SVG curve chart without axes, "محاكاة توضيحية" / "DEMO" badge, 3 nested demo cards, duplicate specs.
2. **Deleted:** Global network canvas across non-hero pages in `App.tsx`.
3. **Deleted:** Eyebrow category line above Hero H1.
4. **Deleted:** Red pulsing notification dot on WhatsApp FAB.
5. **Deleted:** Numbering (`01.`, `02.`) on Service cards and dual "إظهار المزيد" expand toggle.
6. **Deleted:** Unverified claims ("في مصر والخليج", "المصانع وسلاسل الإمداد") from Sectors strip.
7. **Consolidated:** Mobile header controls reduced from 4 to 3 (`Logo + Search + Menu`); Theme & Language toggles moved into mobile drawer.
8. **Added:** Standalone SVG Standard Architecture Flow section (`Internet → Firewall → VLANs → Servers → Backup`) below services.
