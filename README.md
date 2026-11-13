# Nuzul Tech (نُزول تِك) — Enterprise B2B IT, Cloud & Software Platform

Production web application for **Nuzul Tech (نُزول تِك)** (`https://www.nuzultech.com/`), a Cairo-headquartered B2B engineering company delivering managed infrastructure, NVMe cloud & dedicated hosting, hospital/enterprise IT operations, cybersecurity, and custom software across Egypt and the GCC.

---

## 1. Architecture & Core Capabilities

- **Bilingual RTL/LTR Engineering Architecture:**
  - Arabic-first (`dir="rtl"`, `lang="ar"`, Cairo + IBM Plex Sans Arabic typography) and English (`dir="ltr"`, `lang="en"`, Plus Jakarta Sans + Inter + JetBrains Mono) with zero physical directional CSS properties (`left`/`right`) in layout components.
  - Strict dual-theme semantic token system (`src/styles/tokens.css`) supporting **Light**, **Dark**, and **System (`prefers-color-scheme`)** modes with zero theme flash before first paint (`index.html` head script).
- **11 Canonical Routes (`src/App.tsx`):**
  1. `/` — Home (Restrained B2B Engineering Hero, Verifiable Proof Strip, 4 Core Pillars, Featured Anonymized Case Study, Process Timeline, Consultation CTA)
  2. `/services` — B2B Service Catalog with URL-synchronized filtering (`?cat=`, `?q=`, `?sort=`, `?page=`), sticky desktop sidebar, and mobile bottom-sheet drawer
  3. `/services/[slug]` — 11-Block Section 3.4 Engineering Specification Template (What it is, Who it's for, In-Scope vs Out-of-Scope Matrix, 4-Step Delivery Model, Deliverables, SLA & Support Terms, Tech Specs, Price Drivers, Related Case Study, FAQ, Consultation CTA)
  4. `/hosting` — NVMe Cloud VPS, Dedicated Servers, and Managed Workloads with Interactive Resource Configurator
  5. `/pricing` — Transparent EGP / USD / SAR Pricing Matrices, Guided Plan Finder (3-question wizard), Comparison Table, Included-in-Every-Plan Grid, and Billing FAQ
  6. `/case-studies` — 12 Anonymized Sector Case Studies with URL-synced filtering and SVG `<ArchitectureDiagram>` topologies
  7. `/case-studies/[slug]` — Section 3.4 Case Study Detail (`Context → Constraint → What we delivered → Qualitative outcome → Architecture Diagram → Tech Stack`)
  8. `/blog` — Engineering Articles & Technical Guides with URL-synced category/search/sort filters
  9. `/blog/[slug]` — Long-Form Engineering Article with Sticky Table of Contents (`H2` anchor navigation) and Related Articles
  10. `/about` — Company Engineering Standards, Delivery Methodology, and Leadership Specialties
  11. `/contact` — B2B Technical Consultation Form (`POST /api/contact`) with field-by-field inline validation, anti-spam honeypot + Turnstile verification, secondary WhatsApp channel, and Cairo HQ coordinates
- **Global Search Command Palette (`Ctrl+K` / `Cmd+K`):**
  - Instant search across Services, Hosting/Pricing Plans, Case Studies, and Engineering Articles (`src/components/search/GlobalSearchCommandPalette.tsx`).
  - Full Arabic search normalization (`src/utils/arabicSearch.ts`): normalizes Alef variants (`أ إ آ ٱ → ا`), Ta Marbuta (`ة → ه`), Alef Maqsura (`ى → ي`), strips diacritics (Tashkeel) and Tatweel, converts Arabic-Indic digits (`٠-٩ → 0-9`), and expands 15+ bilingual B2B synonym groups.

---

## 2. Local Development & Build Instructions

### Prerequisites
- **Node.js** `>= 20.x`
- **npm** `>= 10.x`

### Install Dependencies
```bash
npm install
```

### Start Full-Stack Development Server (Port 3000)
Runs the Express + Vite middleware server (`server.ts`) on `http://localhost:3000`, serving both the React SPA and the `POST /api/contact` backend endpoint:
```bash
npm run dev
```

### Production Build & TypeScript Lint Check
```bash
npm run build
npm run lint
```

### Start Production Server
```bash
npm start
```

---

## 3. Automated Verification & Audit Suites

Every phase of the Nuzul Tech rebuild is backed by automated Playwright + `axe-core` verification scripts located under `/audit/`:

| Phase | Verification Command | Output Artifact |
| :--- | :--- | :--- |
| **Phase 1 (Site Audit)** | `node audit/phase-1/crawl-audit.mjs` | `audit/phase-1/summary.json`, `docs/CLAIMS.md`, `docs/BENCHMARKS.md` |
| **Phase 3 (Design System & Responsive)** | `node audit/phase-3/verify-phase3.mjs` | `audit/phase-3/responsive-audit.json`, `docs/ASSETS.md` |
| **Phase 4 (Home & Hero)** | `node audit/phase-4/verify-phase4.mjs` | `audit/phase-4/phase4-verification.json` |
| **Phase 5 (Pricing & Hosting)** | `node audit/phase-5/verify-phase5b.mjs` | `audit/phase-5/phase5b-verification.json` |
| **Phase 6 (Arabic Search & Services)** | `node audit/phase-6/test-arabic-search.mjs && node audit/phase-6/verify-phase6.mjs` | `audit/phase-6/phase6-verification.json` |
| **Phase 7 (Case Studies & Blog)** | `node audit/phase-7/verify-phase7.mjs` | `audit/phase-7/phase7-verification.json` |
| **Phase 8 (Contact & API Form)** | `node audit/phase-8/verify-phase8.mjs` | `audit/phase-8/phase8-verification.json`, `audit/phase-8/submissions.json` |
| **Phase 9 (Final Full-Site QA)** | `node audit/phase-9/verify-phase9.mjs` | `audit/phase-9/phase9-verification.json` |

---

## 4. Key Governance & Documentation Files (`/docs`)

- `NUZUL_REBUILD_MASTER_BRIEF.md` — Master engineering specification and phase gate rules
- `docs/DECISIONS.md` — Architectural and product decision log
- `docs/PROGRESS.md` — Phase-by-phase verification status and evidence tracker
- `docs/CLAIMS.md` — Complete audit of every factual claim, metric, and client reference (`Verified` vs `Removed from live site (Pending owner proof)`)
- `docs/ASSETS.md` — Complete inventory of visual assets and theme-aware `<ArchitectureDiagram>` SVGs
- `docs/TOKENS.md` — Design token reference (`src/styles/tokens.css`)
- `docs/VOICE.md` — Bilingual copywriting constitution and banned-word registry
- `docs/SITEMAP.md` — Route architecture and navigation hierarchy
- `docs/COPY_HOME.md`, `docs/COPY_PRICING_HOSTING.md`, `docs/COPY_SERVICES.md`, `docs/COPY_CASE_STUDIES_BLOG.md` — Approved bilingual copy decks
