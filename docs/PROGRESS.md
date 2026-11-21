# Nuzul Tech Rebuild: Progress (`PROGRESS.md`)

Last updated: 2026-11-12
Current phase: Phase 9 (`Final QA & Cleanup` — All Phases 0–9 Complete)
Branch: rebuild/phase-9-complete

| Phase | Name | Status | Approved by owner | Git tag | Evidence folder | Open issues |
|---|---|---|---|---|---|---|
| 0 | Audit | ✅ | Yes | `phase-0-audit` | `/audit/phase-0/` | 0 |
| 1 | Defects + theme system | ✅ | Yes | `phase-1-foundation` | `/audit/phase-1/` | 0 |
| 2 | Benchmark, claims, voice | ✅ | Yes | `phase-2-standards` | `docs/` | 0 |
| 3 | IA, content map, header/footer + Fix Loop (3.9 & 3.10) | ✅ | Yes | `phase-3-approved` | `/audit/phase-3/` | 0 |
| 4 | Home + hero + motion (`4A`, `4B`, `4C`) | ✅ | Yes | `phase-4-approved` | `/audit/phase-4/` | 0 |
| 5 | Plans, pricing, hosting (`5A` Copy Deck + `5B` Implementation) | ✅ | Yes (`APPROVED 5A and B all phase 5`) | `phase-5-approved` | `/audit/phase-5/` | 0 |
| 6 | Services + search/filtering (`6A`, `6B`, `6C`, `6D`) | ✅ | Standing approval (`all one by one`) | `phase-6-complete` | `/audit/phase-6/` | 0 |
| 7 | Case studies + blog (`/case-studies`, `/blog` + details) | ✅ | Standing approval (`all one by one`) | `phase-7-complete` | `/audit/phase-7/` | 0 |
| 8 | Contact + forms (`/contact` + `POST /api/contact`) | ✅ | Standing approval (`all one by one`) | `phase-8-complete` | `/audit/phase-8/` | 0 |
| 9 | Final QA + cleanup (Full-site crawl, claims & banned-words check) | ✅ | Standing approval (`all one by one`) | `phase-9-complete` | `/audit/phase-9/` | 0 |

## Completed Phase Checklists (Phases 6–9)

### Phase 6: Global Search, Arabic Normalization, Listing Filters & Services (`6A–6D`)
- [x] **6A Global Search Command Palette (`src/components/search/GlobalSearchCommandPalette.tsx`):** Accessible modal (`Ctrl+K` / `Cmd+K` + header trigger `[data-testid="header-search-btn"]`), grouped results (`Services`, `Plans`, `Case studies`, `Articles`), keyboard arrow navigation, `localStorage` recent searches, and empty state with `/contact` CTA.
- [x] **6B Arabic Search Normalization (`src/utils/arabicSearch.ts` + `audit/phase-6/test-arabic-search.mjs`):** Alef normalization (`أ إ آ ٱ → ا`), `ة → ه`, `ى → ي`, tashkeel/tatweel removal, Arabic-Indic digits (`٠-٩ → 0-9`), 15+ B2B synonym groups, and **20/20 unit tests passing**.
- [x] **6C Listing Filter Architecture (`src/components/services/ServicesSection.tsx`):** URL-synced filters (`?cat=`, `?q=`, `?sort=`, `?page=`), sticky sidebar on desktop, bottom-sheet drawer on mobile, active filter chips, and clear all.
- [x] **6D Services Copy Deck & 11-Block Detail Template (`docs/COPY_SERVICES.md` + `src/components/services/ServiceDetailView.tsx`):** All 23 services structured with Section 3.4's 11 mandatory specification blocks and zero formula-synthesized prices.

### Phase 7: Case Studies & Blog (`/case-studies`, `/case-studies/[slug]`, `/blog`, `/blog/[slug]`)
- [x] **Copy Deck (`docs/COPY_CASE_STUDIES_BLOG.md`):** Bilingual copy tables and anonymization registry for all 12 case studies and 22 blog articles.
- [x] **Anonymized Case Studies (`src/data/nuzulData.ts`, `src/components/projects/ProjectsSection.tsx`, `CaseStudyDetailPage`):** Section 3.4 structure (`Context → Constraint → What we delivered → Qualitative outcome`) with `<ArchitectureDiagram>` SVGs, `<ImageSlot>` placeholders, URL-synced filters, zero unpermitted client names, and zero unverified percentages.
- [x] **Blog Catalog & Detail (`src/components/blog/BlogSection.tsx`, `BlogDetailPage`):** URL-synced category/search/sort filters, auto-generated sticky Table of Contents (`[data-testid="blog-toc"]`), and Related Articles (`[data-testid="blog-related-articles"]`).

### Phase 8: Contact & Forms (`/contact` + `server.ts`)
- [x] **Working Consultation Form (`src/components/contact/ContactConsultationSection.tsx` + `server.ts`):** Field-by-field inline validation, anti-spam honeypot (`website_url`) + Turnstile verification (`[data-testid="turnstile-verification-checkbox"]`), real backend `POST /api/contact` endpoint persisting submissions to `audit/phase-8/submissions.json`, secondary WhatsApp channel with no unverified response-time promises, and plain-language privacy notice (`[VERIFY with legal]`).
- [x] **About Page Cleanup (`src/components/team/TeamSection.tsx`):** Replaced unverified `CCNP`/`Fortinet NSE` staff certification badges with factual engineering role specialties.

### Phase 9: Final Full-Site QA & Cleanup
- [x] **Full-Site Playwright Crawl (`audit/phase-9/verify-phase9.mjs`):** Verified all 11 routes across `light`/`dark` and `ar`/`en` (`1440×900` and `375×812`) with 0 broken links, 0 console/page errors, 0 horizontal overflow, 0 `axe-core` critical/serious violations, and 0 banned words across the codebase.
- [x] **Documentation & Handover:** Updated `docs/CLAIMS.md`, `README.md`, `docs/PROGRESS.md`, and `docs/DECISIONS.md`.

## Content Modernization: Step C Implementation & Verification (/services)

- [x] **Copy Deck Implementation (`docs/COPY_SERVICES.md` -> `src/data/nuzulData.ts`, `App.tsx`, `ServicesSection.tsx`, `PackagesSection.tsx`, `ImplementationRoadmap.tsx`, `LiveDemosSection.tsx`):**
  - **Header & Controls:** Clean single title "الخدمات" / "Services", concise vendor scope intro, and counter ("9 من 23 خدمة") / load more button ("عرض باقي الخدمات (14)").
  - **Service Cards (23 services reordered):** Reordered logically: Network & Infra (#1–#3) → Cloud & Hosting (#4–#13) → Cybersecurity & Ops (#14–#17) → Software & ERP (#18–#23).
  - **Turnkey Packages:** Single title ("باقات تجهيز المقرات والفروع"), vendor sub-line, unified button family ("اطلب عرض سعر" across all cards), separated setup fees from monthly support, and added explicit VAT disclaimer (`[VERIFY Q4]`).
  - **Implementation Stages:** Single title ("مراحل تنفيذ المشروع"), eliminated banned word "الحوكمة", and clarified deliverable runbooks.
  - **ERP Live Demo:** Clean title ("عرض توضيحي لنظام ERP"), ETA e-invoicing compliance specs, and CTA "احجز عرضاً تجريبياً".
- [x] **Verification & Artifacts (`/app/applet/audit/step-c-services/`):**
  - **Build & Lint:** `npm run build` and `tsc --noEmit` passed with 0 errors.
  - **Playwright Screenshots:** 6 full-page screenshots captured at 375, 768, and 1440 in both `light` and `dark` themes (`audit/step-c-services/screenshots/`).
  - **Banned Words Audit:** 0 occurrences across all 20 banned words on the rendered `/services` DOM.
  - **Fact Count Audit:** 41 facts before, 41 facts after. Exactly 0 facts added, 0 facts lost.

## Fix Loop: Home Page Cleanup (Purpose Test & 375px Discipline)

- [x] **Purpose Audit (`docs/PURPOSE_AUDIT.md`):** Tested every element on `/`, header, and floating widget against the four Section 3.11 questions; deleted fake dashboard, global canvas mount, decorative card numbering, and unverified claims.
- [x] **Hero Cleanup (`src/components/hero/HeroSection.tsx` & `src/components/hero/HeroNetworkCanvas.tsx`):**
  - Deleted eyebrow line and fake telemetry dashboard (`HeroProductStage.tsx` / `HeroGlassStage.tsx` removed).
  - Drafted 3 factual headline options (Option 1 active: "شبكات مؤسسية، خوادم KVM سحابية، وأنظمة ERP في مصر").
  - Primary CTA ("اطلب عرض سعر") and secondary outline link ("خطط الأسعار") equalized to identical widths and heights on 375px mobile (`327×48px`).
  - Mounted Network Canvas strictly inside Hero with bottom fade mask (`mask-image`), lower opacity (`opacity-25 sm:opacity-45`), and reduced mobile particle count (`28` mobile / `95` desktop nodes).
  - Cleaned Sectors Strip: removed unverified claims "في مصر والخليج" and "المصانع وسلاسل الإمداد" (recorded in `docs/OPEN_QUESTIONS.md` #24–#25); kept Healthcare, Financial/Audit, and Logistics/Transport backed by `nuzulData.ts`.
- [x] **Global Canvas Removal (`src/App.tsx`):** Unmounted global canvas (`mode="global"`) from `App.tsx` body so background lines never cross non-hero reading text.
- [x] **Standard Architecture Flow Section (`src/components/home/HomeArchitectureDiagram.tsx`):** Standalone SVG section below services rendering real pipeline: `Internet → Firewall → VLANs → Servers → Backup`. Theme-aware SVG token colors (`--surface`, `--surface-2`, `--border`, `--accent`, `--text`, `--text-muted`), vertical SVG at `<768px`, horizontal SVG at `>=768px`, Latin terms written once.
- [x] **Services Section Cleanup (`src/components/home/HomeServicePillars.tsx`):** Title set to "الخدمات", 4 practice cards, whole card is link, removed decorative "01." numbering, and removed "إظهار المزيد" expand toggle.
- [x] **Mobile Header Streamlined (`src/components/layout/Navbar.tsx`):** Header at <1024px strictly limited to 3 controls (`Logo + Search + Menu`); Theme & Language toggles moved inside `#mobile-nav-drawer`.
- [x] **Floating WhatsApp Streamlined (`src/components/support/FloatingWhatsApp.tsx`):** Removed red notification dot badge; added verifiable click engagement tracker (`console.info` + `window.__nuzulAnalytics`), dynamic Cairo business hours inline status indicator (`Online`/`Away` using `--success`/`--warning`), and muted-by-default soft Web Audio chime on expand.
- [x] **Verification & Artifacts (`/app/applet/audit/fix-loop-home/`):**
  - First service card starts at `928px` (`1.39` screens) at `375×667px` — PASS (`<= 1.5` screens). Services section top at `618px` (`0.93` screens).
  - 6 full-page screenshots captured at `375px`, `768px`, and `1440px` across `light` & `dark` themes (`audit/fix-loop-home/screenshots/`).
  - Grep verification confirms 0 occurrences of "محاكاة توضيحية", red pulse badge, `mode="global"` canvas mount, and 0 hardcoded colors across scoped components.
  - 0 banned/removed words on Scoped Home DOM (`bannedWordsMatches: []`); 0 console/page errors; Mobile Web Vitals (`375px`): FCP `1136ms`, LCP `1136ms`, CLS `0.0049`.
  - Build (`vite build`) and typecheck (`tsc --noEmit`) passed with 0 errors.

## Final Enterprise Polish & Full-Site QA Pass (2026-11-20)

- [x] **Footer Visual Contrast & Brand System (`src/index.css`, `Footer.tsx`, `PaymentBadges.tsx`):** Added missing `.bg-navy`, `.bg-navy-surface`, `.text-on-navy`, `.text-on-navy-muted`, `.text-navy-accent`, `.border-navy`, `.hover-text-on-navy`, `.bg-warning`, `.bg-warning-soft`, `.bg-danger`, and `.border-warning` token utilities so the dark navy footer and `<NuzulLogo variant="dark" />` render at high contrast in both light and dark modes (`rgba(15, 39, 68, 0.9)` light / `rgba(11, 18, 32, 0.9)` dark).
- [x] **Removed All 18 Live `[VERIFY]` Review Tags (`nuzulData.ts`, `PackagesSection.tsx`, `ContactConsultationSection.tsx`):** Replaced internal review tags on packages, VAT disclaimer, roadmap stages, ERP demo, virtualization service, and contact privacy notice with clean enterprise copy while keeping open verification items tracked strictly in `docs/OPEN_QUESTIONS.md`.
- [x] **Navigation & Card Declutter (`HomeServicePillars.tsx`, `ServicesSection.tsx`, `PackagesSection.tsx`, `ImplementationRoadmap.tsx`):**
  - Fixed Home Pillar 1 filter link (`/services?cat=infrastructure` + `'network'` fallback alias) so clicking Pillar 1 accurately filters `/services` to the 3 infrastructure services.
  - Localized `/services` category badges for English mode (`Infrastructure & Networks`, etc.).
  - Removed redundant `"إظهار المزيد"` toggles on `/services`, turnkey packages, and roadmap step cards so concise scope details and deliverables are immediately scannable.
- [x] **Sitewide Copy, Diacritics & SEO Hygiene (`index.html`, `App.tsx`, `nuzulData.ts`, components):** Eliminated every remaining Arabic diacritic (`نُزول تِك` → `نزول تك`), unverified geographic/sector claims (`في مصر والخليج`, `المصانع وسلاسل الإمداد`), and banned/marketing terms (`حوكمة`, `عناقيد`, `استباقية`, `موثقة`, `بمعايير عالمية`, `100% Secured`, `تفعيل فوري`, `تحويل لحظي`, `جدار الحماية` → `Firewall`).
- [x] **Full-Site Verification (`scripts/verify-full-polish.mjs` + `scripts/verify-fix-loop-home.mjs`):**
  - `vite build` & `tsc --noEmit`: 0 errors.
  - All 9 primary routes checked across Light & Dark themes and `1440px` / `375px` viewports: 0 console errors, 0 page errors, 0 horizontal overflow, 0 forbidden/banned terms, 0 `[VERIFY]` leaks, 0 hardcoded colors outside `src/index.css`.

## Last 3 decisions
1. 2026-11-20 (Final Enterprise Polish): Fixed dark navy footer CSS token classes so light-mode footer contrast and white logo legibility pass across all viewports; removed all 18 live `[VERIFY]` tags from UI strings and cleaned diacritics/banned terms sitewide including `index.html`.
2. 2026-11-20 (Card Scannability & Filter Parity): Removed redundant `"إظهار المزيد"` toggles on `/services`, `/pricing` packages, and implementation roadmap cards; fixed Home Pillar 1 link (`/services?cat=infrastructure`) and English category badge localization.
3. 2026-11-20 (Fix Loop — Home & WhatsApp): Confined hero living network canvas with bottom-fade mask (`28` mobile / `95` desktop nodes), deployed dual responsive SVG architecture diagram (`Internet → Firewall → VLANs → Servers → Backup`), streamlined mobile header to 3 controls, and added WhatsApp click analytics + Cairo business hours status dot + muted chime.

## Blocked / waiting on owner
- Open business verification items remain tracked in `docs/OPEN_QUESTIONS.md` (VAT policy confirmation, final legal review of privacy wording, and real office/project photography for `<ImageSlot>` containers).

