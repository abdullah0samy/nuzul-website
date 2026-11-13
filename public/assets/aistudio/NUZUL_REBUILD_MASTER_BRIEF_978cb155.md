# Nuzul Tech Website Rebuild: Master Brief

> **Read this whole file at the start of every session and at the start of every phase.**
> This file is the single source of truth. If your memory of an earlier message conflicts with this file, this file wins.

---

## 0. Project in one paragraph

Rebuild the Arabic (RTL) / English website of **Nuzul Tech (نزول تك)**, an Egyptian IT infrastructure, cloud hosting, cybersecurity and software company, so it works as **both** a short, high-converting landing page (Home) **and** a full multi-page website. It must look and read like a credible enterprise vendor, modeled on the structure and terminology of real companies in the same field. It must **not** look or read like AI-generated marketing.

Keep the existing tech stack. Keep the existing content unless a rule below says to remove, move or rewrite it. Nothing is deleted without an entry in `CONTENT_MAP.md`.

---

## 1. Operating protocol (applies to every phase)

### 1.1 Work in phases, one at a time
- The phases are listed in Section 4. Work on **one phase only**, never in parallel, never ahead.
- Do not start a phase until the owner writes exactly: `APPROVED PHASE <n>`. Other phrases ("looks good", "ok", "continue") do **not** count as approval.
- Do not touch files outside the current phase scope. If you must, list the file and the reason in the report, and keep the change minimal.

### 1.2 Keep state in files, not in memory
Create and maintain these files in `/docs/`. They are how you avoid forgetting things:

| File | Purpose | When to update |
|---|---|---|
| `docs/PROGRESS.md` | Phase tracker (template in Section 6) | After every step, before you reply |
| `docs/DECISIONS.md` | Every design/technical decision with date and reason | When a decision is made |
| `docs/OPEN_QUESTIONS.md` | Questions only the owner can answer | When you hit something unverifiable |
| `docs/CLAIMS.md` | Register of every factual claim on the site (Phase 2) | Whenever copy changes |
| `docs/CONTENT_MAP.md` | Old section → new location (Phase 3) | Whenever content moves |
| `/audit/phase-<n>/` | Screenshots, command outputs, test reports | Every verification |

At the start of every session and every phase: read this file, `PROGRESS.md`, `DECISIONS.md`, and `OPEN_QUESTIONS.md`, then print a 5-line summary of the current state before doing anything.

### 1.3 Git checkpoints
- Work on a branch `rebuild/phase-<n>`.
- Commit often with clear messages. After the owner approves, merge and tag `phase-<n>-approved`.
- If a later phase breaks an earlier one, **revert the change**, do not patch around it.
- Never rewrite, reformat or "clean up" files of approved phases unless the current phase scope says so.

### 1.4 Evidence rules (no evidence, no "Done")
- A status of **Done** is allowed only with evidence you produced **in this session**: file path + line numbers, command output pasted verbatim, a screenshot path, or a test report path.
- Run build, lint and typecheck at the end of every step and paste the real output, errors included.
- If you cannot run something (no browser, no terminal, no network), write **Can't verify**, say exactly why, and give the owner a manual checklist. Never claim you ran something you did not.
- Never write "should work", "likely fixed", or "this should resolve it" in a report.
- Do not leave `TODO`, `lorem ipsum`, placeholder numbers, commented-out dead code, or `console.log` debugging in delivered code.

### 1.5 The loop inside each phase
1. Re-read this file and the phase section.
2. Implement only the phase scope.
3. Verify against the **Definition of Done** (every line).
4. Write the report (format in 1.6).
5. If any line is not **Done**: fix it, re-verify, re-report. Repeat until all lines are Done or you are genuinely blocked (then say exactly why and what you need).
6. Re-run the checks of **all previous phases** to prove nothing regressed. Report the result.
7. Update `PROGRESS.md`.
8. **STOP** and wait for `APPROVED PHASE <n>`.

### 1.6 Report format (use exactly this, every time)

```
## Phase <n>: <name>: report <date>
### Definition of Done
| # | Item | Status (Done / Partial / Not done / Can't verify) | Evidence |
### Regression check (earlier phases)
| Phase | Check | Result | Evidence |
### Files changed
### Known issues
### Things I did NOT do
### Questions for the owner
### Next step: waiting for "APPROVED PHASE <n>"
```

### 1.7 Owner commands you must obey
- `SYNC`: re-read all state files, then report current phase, what is Done, what is open, and what the last 3 decisions were. Change nothing.
- `REOPEN PHASE <n>`: that phase is no longer approved; fix the issue the owner describes, then run the loop in 1.5 again.
- `FIX LOOP: <description>`: the owner found something that does not match your report. Do not explain or apologize. First reproduce it and show evidence, find the root cause, fix, re-verify, then re-run the Definition of Done of the current and all previous phases.
- `STOP`: stop all work immediately and wait.

---

## 2. Truth rules (non-negotiable, all phases)

1. **Never invent facts.** No numbers, uptime percentages, certifications, client names, locations, partnerships, awards, testimonials, capacities, team members, or dates. Every factual claim must come from (a) the existing site, (b) information the owner provides, or (c) a cited public source.
2. If a claim cannot be verified, **do not publish it**. Record it in `CLAIMS.md` and `OPEN_QUESTIONS.md`, and keep it out of live pages.
3. Never copy text, images, logos or code from other companies. Study structure and terminology, then write original copy.
4. If you cannot browse the web, say so explicitly and ask the owner for reference material. Do not imitate competitors from memory.
5. No fake status or uptime widgets. A status page link is allowed only if a real one exists.
6. Do not name internal open-source tooling in public copy (e.g. replace "Proxmox VE" with "Dedicated KVM virtualization"). Paid or branded products that justify the price may be named (Fortinet, CloudLinux, LiteSpeed, Cloudflare).
7. Compliance wording: say "aligned with" unless an audit certificate exists. Mention Egyptian laws or regulators only where they apply, and flag `[VERIFY with legal]`.

---

## 3. Global standards (apply in every phase that touches the area)

### 3.1 Theme system (light + dark, one source of truth)
- Semantic CSS variables, each defined for light and for dark: `--bg`, `--surface`, `--surface-2`, `--border`, `--text`, `--text-muted`, `--accent`, `--accent-contrast`, `--success`, `--warning`, `--danger`, `--focus`.
- Default is the user's system preference. Header toggle: Light / Dark / System, persisted in `localStorage`, applied by a tiny inline script **before first paint** (no flash). Set `color-scheme`.
- **Zero hard-coded colors in components.** Prove it with a grep for hex/rgb/hsl and for framework color utilities outside the token file.
- Palette: brand color derived from the teal/cyan of the logo. Navy only for hero, footer and inverse sections. Green only for success states and the WhatsApp button. One accent, used for primary actions and key links only.
- Contrast: body text ≥ 4.5:1; large text and UI components ≥ 3:1, in **both** themes, including tables, placeholders, disabled states, badges, and text over images or gradients.
- Logo has light and dark variants. Images and charts adapt to the theme.

### 3.2 Typography and Arabic/RTL rules
- One Arabic-first font family (IBM Plex Sans Arabic, Tajawal, or Readex Pro), 2-3 weights. Body 16-18px, line-height ~1.8.
- No italic Arabic. No monospace for Arabic text. No letter-spacing on Arabic.
- One numeral system: Western digits for prices, specs and dates.
- Use CSS logical properties (`margin-inline-start`, etc.).
- Mixed-direction values (e.g. `2 GB DDR4 RAM`) must render in correct order: wrap LTR values in `<bdi dir="ltr">` or use `unicode-bidi: isolate`.

### 3.3 Voice and copy rules (Arabic first, English second)
- Tone: a senior engineer explaining to a decision-maker. Modern Standard Arabic, plain and business-like, with Egyptian market context. Not colloquial, not poetic, not salesy.
- Keep standard technical terms in Latin script inside Arabic sentences (SLA, VPN, NGFW, VLAN, RPO, RTO, SIEM, NVMe, KVM, RAM, CPU). Write each term **once**. No bilingual duplicates in parentheses.
- Specific beats adjective: name the thing, the number, the unit, the scope and the owner. One idea per sentence. Short sentences. Active voice.
- Every promise needs a definition. An uptime figure must state the measurement period, what counts as downtime, exclusions, and the remedy (service credit). Reference: 99.9% ≈ 43.8 min/month; 99.99% ≈ 4.4 min/month.
- Support terms use severity levels (P1-P4) with response and target-resolution times and hours per level, **only if real**.
- Spec cells are `[number] [unit] [type]` only. No marketing adjectives (High-Speed, Low-Latency, Redundant, Advanced).
- Preferred vocabulary **where true**: RPO/RTO, 3-2-1 backup, immutable backups, restore test, DR drill, change management, patch management, L1/L2/L3 support, NOC, vulnerability assessment, penetration test, NGFW, network segmentation (VLAN), 802.1X, IPsec VPN, HA cluster, hypervisor, monitoring and alerting, runbook, handover documentation.
- **Banned**: "حلول متكاملة", "نصنع الفرق", "رحلتك", "كل ما يحتاجه عملك تحت سقف واحد", "بيئات تشغيل متطورة", "قمة تنفيذ", "صفر ثانية توقف", "أفضل", "رائد", "مبتكر", "ثورة", "نحن نؤمن", "100%" without a definition, exclamation marks, rhetorical questions in headings, and strings of three adjectives.
- Format examples (numbers are placeholders from existing specs; verify them):
  - "خوادم سحابية عالية الأداء وبيئات تشغيل متطورة" → "Cloud VPS على KVM بموارد مخصصة"
  - "GB DDR4 ECC Dedicated 4" → "4 GB DDR4 ECC"
  - "Tbps L3/L4/L7 Shield 1.2" → "حماية DDoS على مستوى الشبكة (L3/L4/L7)", with capacity only if verified and cited.

### 3.4 Page anatomy
- **Service page**: what it is (2 lines) → who it is for → scope: included / not included → how delivery works (durations only if real) → deliverables → SLA and support terms → technology and specs → what drives the price → related case study → FAQ (real objections) → CTA.
- **Plans/pricing page**: plan summary → grouped spec table with sticky header → what is not included → billing terms → upgrade path → SLA link.
- **Case study**: Context → Constraint → What we delivered (scope, stack category, timeline) → Result with measured metrics and measurement date, or a qualitative outcome if no data exists → client quote only with written permission. If a client must stay anonymous, anonymize sector and size; never invent a name.
- **Testimonials**: real person, role, organization, permission. Otherwise remove the section.

### 3.5 Visual style
- No glow, no gradient borders, no glassmorphism, no icon-in-rounded-square on every card.
- Do not repeat "small label + big heading + subtitle + cards" in every section. Vary layouts: split text/image, full-bleed band, big-number row, timeline, table, accordion.
- One icon set (Lucide or Phosphor), one stroke width, used sparingly.
- No stock or AI-generated people. Use real photos, real screenshots, or clearly marked image slots (`[IMAGE SLOT: description]`) for the owner to fill.
- Spacing: 8px grid, max width 1200px, 96-120px section padding on desktop, 12-16px radius, 1px low-contrast borders, minimal shadows.

### 3.6 Motion rules
- Reference feel: dark cinematic hero with a living network/particle animation, product "stages" (dashboard mockup on a soft gradient-mesh background), alternating dark/light sections, one message per screen. Take **principles only**; never copy any brand's assets, copy or code.
- Animate only `transform` and `opacity`.
- Canvas: cap `devicePixelRatio` at 2, pause with `IntersectionObserver` when off-screen, pause when the tab is hidden, clean up on unmount.
- Respect `prefers-reduced-motion`: show a static gradient/poster instead.
- Mobile / low-end: reduce node count by ~60% or fall back to the static version.
- The hero must not block LCP: headline and CTAs render immediately; canvas initializes after first paint.
- Any background video: muted, loop, < 2 MB, with a poster.
- Motion library: Motion (framer-motion) for React; GSAP ScrollTrigger only if a pinned sequence is truly needed.

### 3.7 Search and filtering rules
- **One** global search (header icon + `Cmd/Ctrl+K` command palette). No per-section search boxes or "quick search" chips.
- Arabic-aware matching: normalize before indexing and querying: unify alef forms (ا أ إ آ), ya/alef maqsura (ي ى), ta marbuta/ha (ة ه); strip tashkeel and tatweel; convert Arabic-Indic digits to Western. Support English technical terms (VoIP, ERP, VPS, SIEM) and a small synonym map (سيرفر/خادم, كاميرات/مراقبة, سنترال/VoIP).
- Listing pages have real filters synced to URL query params (shareable, back button works), a result count, active-filter chips with "clear all", sort, skeleton loading, and an empty state with suggestions and a contact CTA.

### 3.8 Technical baseline
- Mobile-first, fully responsive, RTL-correct.
- Real routes, no hash routing (`/#ar`). AR default with EN toggle, `hreflang` ar/en.
- SEO: semantic HTML, one H1 per page, meta titles/descriptions, Open Graph, structured data (Organization, Service).
- Performance: WebP/AVIF images, lazy loading, font subsetting with `font-display: swap`.
- Accessibility: visible focus states, full keyboard navigation, alt text, aria labels.

---

## 4. Phases

> Status legend: ⬜ not started · 🟦 in progress · 🟨 waiting for owner approval · ✅ approved

### Phase 0: Audit of the current state
**Scope:** read-only. Do not fix anything.
**Do:**
- For every requirement in this file's phases and in the original redesign brief, build a table: `# | Requirement | Status | Evidence`.
- Run build, lint, typecheck; paste real output.
- Load every route; screenshot at 375 / 768 / 1440 px in RTL; save to `/audit/phase-0/`; list console errors.
- End with: everything not Done sorted by priority, plus any suggested change to the phase order.

**Definition of Done**
- [ ] Table covers every requirement, each with a status and evidence or "Can't verify" with the reason
- [ ] Real build/lint/typecheck output pasted
- [ ] Screenshots of every route at 3 widths exist in `/audit/phase-0/`
- [ ] `docs/PROGRESS.md`, `DECISIONS.md`, `OPEN_QUESTIONS.md` created
- [ ] No code was changed

*(If the owner has already received this audit, record it in `PROGRESS.md` and wait for approval.)*

---

### Phase 1: Visible defects + theme system
**Scope:** design tokens, theme toggle, the plans comparison table defects, removal of internal tool names, Arabic typography fixes. **No copy rewriting yet.**

**Fix these visible defects (prove each in light AND dark):**
- a. Table body text is nearly invisible in light mode (light grey on white); dark-theme colors leak into light theme.
- b. RTL/LTR bug: values render as `GB DDR4 RAM 2` instead of `2 GB DDR4 RAM`.
- c. Monospace teal group headers with English in parentheses, e.g. `(COMPUTE & HARDWARE)`: replace with normal Arabic headings, no duplicated bilingual labels.
- d. Marketing adjectives inside spec cells (High-Speed, Low-Latency, Redundant).
- e. Plan header (name + price + CTA) must stay sticky while scrolling the comparison table; only the recommended plan gets a filled CTA.
- f. "Proxmox VE" and any other internal tooling names in public pages.
- g. Identical "Tbps 1.2" DDoS figures on different plans: remove from live pages and log in `CLAIMS.md` as unverified.
- h. Monospace and italic Arabic anywhere on the site.

**Definition of Done**
- [ ] Token file defines every token in Section 3.1 for light and dark (list them in the report)
- [ ] No-flash theme script + Light/Dark/System toggle, persisted (demonstrate with a reload in each mode)
- [ ] Grep proof: zero hard-coded colors and zero framework color utilities outside the token file (paste command and output)
- [ ] axe or Lighthouse accessibility run on every route in both themes: 0 contrast violations (paste summary per route)
- [ ] Table text contrast measured and ≥ 4.5:1 in both themes (list measured ratios)
- [ ] Before/after list of at least 8 spec cells proving RTL/LTR order is correct
- [ ] Group headers: no monospace, no parenthetical English
- [ ] Sticky plan header works while scrolling; only the recommended plan has a filled CTA
- [ ] Grep proof: "Proxmox" absent from the repo and from rendered pages
- [ ] "Tbps" figures absent from live pages and present in `CLAIMS.md` as pending
- [ ] Logo light/dark variants in place
- [ ] Screenshot matrix (all routes × light/dark × 375/768/1440) in `/audit/phase-1/`
- [ ] Build, lint, typecheck pass (real output)
- [ ] Regression check vs Phase 0 baseline: nothing that worked before is broken

---

### Phase 2: Benchmark research, claims register, voice guide
**Scope:** documents only. **No code changes.**

**Deliverables**
1. `docs/BENCHMARK.md`. Browse real sites and study structure, terminology, page anatomy and tone, **not wording**. For each site: URL, date accessed, page type, section order, how specs are phrased, how SLAs are defined, what is excluded from scope, how pricing is explained, how case studies are structured, which technical terms appear. Minimum 12 sites across these groups:
   - Cloud/VPS/hosting plans and SLA pages: Hetzner, OVHcloud, DigitalOcean, Akamai (Linode), Vultr, Cloudflare plans comparison
   - Managed IT / infrastructure services: Rackspace Technology; regional providers such as e& enterprise, Vodafone Business, Orange Business, TE Data / WE Business
   - Security solution pages: Fortinet, Palo Alto Networks, Cloudflare
   - Case studies: AWS customer stories, Rackspace, Cloudflare
   - Healthcare IT industry pages: Microsoft Cloud for Healthcare, Oracle Health
   End with **Patterns to adopt** and **Patterns to avoid**.
2. `docs/CLAIMS.md`. Scan every page; one row per claim: `page | exact claim | type (number / certification / client / location / capability / testimonial) | status (Verified from source / Needs owner proof / Remove) | evidence required`. Typical suspects: uptime figures and 90-day uptime bars, "Tier III/IV" facility claims, datacenter locations and peering names, "Legal 100%", "zero downtime", any "100%", testimonial ratings, response-time promises, "AES-256", client counts, Tbps capacities.
3. `docs/VOICE.md`. Voice guide built from Section 3.3, plus: a glossary of preferred technical terms (AR sentence usage + Latin term), 10 before/after rewrite examples from the **real current copy**, and the full banned list.

**Definition of Done**
- [ ] `BENCHMARK.md` has ≥ 12 real sites, each with URL, access date and all listed fields; or the AI states it cannot browse and requests reference material (then the phase is Blocked, not Done)
- [ ] No text copied from any benchmark site
- [ ] `CLAIMS.md` covers every page of the current site; every claim has a status
- [ ] `VOICE.md` contains rules, glossary, ≥ 10 before/after examples, banned list
- [ ] `OPEN_QUESTIONS.md` lists everything the owner must confirm (SLA, certifications, locations, clients, permissions)
- [ ] Zero code changes (prove with `git diff --stat` against the phase start)

---

### Phase 3: Information architecture, content map, header and footer
**Scope:** routes, navigation, header, footer, content map. Split in two sub-steps with a mid-gate.

**3A (stop for owner approval before 3B):** write `docs/CONTENT_MAP.md`, a table of **every** current section → new location (Home teaser / own page / drawer / merged duplicate / removed). Propose the route list:
`/`, `/services`, `/services/[slug]`, `/pricing`, `/hosting`, `/case-studies`, `/case-studies/[slug]`, `/blog`, `/blog/[slug]`, `/contact`.

Known problems to resolve in the map:
- 23 service cards on one page → 4 pillars (Infrastructure & Networks, Cloud & Servers, Cybersecurity, Software & ERP), each linking to its own page
- Payment logos appear twice → footer only
- Hosting prices appear in 3 places → one page + a single teaser on Home
- Case studies appear as cards, in testimonials and in the footer list → cards only on `/case-studies`, one featured on Home
- Datacenter clusters, domain check tool, roadmap detail, comparison table → own pages
- WhatsApp button + chat widget → keep one floating channel

**3B (after `APPROVED 3A`):** implement real routes (no hash routing), header, footer, 404 page, `sitemap.xml`, `robots.txt`, `hreflang`.
- Header: logo, ≤ 5 links, one primary CTA, search icon (placeholder until Phase 5), theme toggle, language toggle. Remove counters like "(22)" and "(23)".
- Footer: ≤ 4 short columns; payment logos once.

**Definition of Done**
- [ ] `CONTENT_MAP.md` covers every current section, no row without a destination
- [ ] All routes exist and render in both themes and both languages
- [ ] Script output listing `old section → new URL → text snippet found at the new URL` proves nothing was lost
- [ ] Header and footer match the rules above (screenshots at 3 widths)
- [ ] Keyboard navigation test of the header and footer (document the steps and result)
- [ ] 404 page, sitemap, robots, hreflang present (paste outputs)
- [ ] Build, lint, typecheck pass; regression check passes

---

### Phase 4: Home page, hero and motion system
**Scope:** `/` only, plus the reusable motion primitives. Three sub-steps.

**4A: copy deck (stop for approval).** Home sections, in order: (1) Hero: one headline, one supporting sentence, two pill CTAs, client logo strip (**only logos with permission**) → (2) four service pillars → (3) one featured case study with real result figures → (4) how we work in 3 steps (durations only if real) → (5) hosting teaser "starts from …" linking to `/pricing` (price from the current site) → (6) up to 3 testimonials **only with permission**, else omit → (7) FAQ → (8) final CTA with a short form.

**4B: hero and motion** per Section 3.6: Canvas 2D network animation (~120 nodes, thin lines between near nodes, slow drift, subtle mouse parallax, teal accents), headline with blinking gradient caret, a "product stage" showing a monitoring dashboard mockup with **dummy data only, no client data** on a slow gradient-mesh background, 2-3 callouts that appear on scroll, scroll-reveal (fade + 16px translate), staggered children, number counters that animate once, soft hover lift.

**4C: remaining sections** with alternating dark/light backgrounds and varied layouts.

**Definition of Done**
- [ ] Copy deck approved; every fact sourced; banned-words grep clean
- [ ] Home is about 6 desktop screens (report the total scroll height in viewport heights)
- [ ] Each section: one message, one headline, ≤ 2-line subtitle, ≤ 3-4 visible items
- [ ] No identical card grid twice in a row
- [ ] Reduced-motion mode shows a static version (screenshot)
- [ ] Canvas pauses off-screen and when the tab is hidden (show the code lines and a test)
- [ ] Lighthouse mobile Performance ≥ 90, no layout shift from animation (paste numbers)
- [ ] Both themes × 3 widths verified with screenshots
- [ ] Regression check passes

---

### Phase 5: Plans, pricing and hosting page
**Scope:** `/pricing` and `/hosting` only. Two sub-steps.

**5A: copy deck (stop for approval).** A table per page, Arabic then English: `section | final copy | source of each fact`. Use only verified claims (Phase 2). Follow Sections 3.3 and 3.4.

**5B: implement** the approved copy and design:
- Grouped spec table; collapsible groups; sticky plan header; cells are `[number] [unit] [type]`
- Compare up to 3 plans with a sticky compare bar and a "show differences only" toggle
- Mobile: swipeable plan cards instead of a wide table
- "What is not included", billing terms, upgrade path, SLA link (**only if a real SLA exists**)
- Datacenter section reduced to verified facts, no uptime bars

**Definition of Done**
- [ ] Every fact in the copy deck has a source recorded
- [ ] No claim that is not "Verified" in `CLAIMS.md`
- [ ] Banned-words grep returns zero matches on this page (paste output)
- [ ] Table verified in light/dark × 375/768/1440 with screenshots
- [ ] Compare feature works: demonstrate selecting 1, 2, 3 plans and attempting a 4th
- [ ] Keyboard-only test passes
- [ ] Lighthouse mobile run on both pages (paste numbers); axe 0 critical/serious
- [ ] Regression check passes

---

### Phase 6: Services and search/filtering
**Scope:** `/services`, `/services/[slug]`, global search, listing filters. Solve each sub-step separately and verify before the next.

- **6A Global search:** command palette (`Cmd/Ctrl+K` + header icon), results grouped by type (Services, Plans, Case studies, Articles), keyboard navigable, recent searches, empty state with contact CTA. Remove in-section search boxes and quick-search chips.
- **6B Arabic-aware matching:** normalization and synonyms per Section 3.7. MiniSearch or Fuse.js client-side unless the data is large. Unit tests with **≥ 15 Arabic query cases**.
- **6C Listing filters** on `/services` (reused later by `/case-studies` and `/blog`): sticky filter bar (sidebar on the right in RTL, bottom sheet on mobile), category filters with counts, sort, result count, active-filter chips with "clear all", URL query params (e.g. `/services?cat=cloud&q=سيرفر`), skeleton loading, empty state, pagination or "load more".
- **6D Service page template** per Section 3.4 and the 4-pillar structure. Copy deck first (stop for approval), then implement.
- **6E Plan finder:** build **only if the owner says yes**.

**Definition of Done (per sub-step, report each separately)**
- [ ] 6A: demo steps, screenshots, keyboard-only test notes
- [ ] 6B: test output with ≥ 15 passing Arabic cases (paste)
- [ ] 6C: URL examples that reproduce filtered states; back button and shared link verified
- [ ] 6D: approved copy deck, every fact sourced, banned-words grep clean, both themes, 3 widths
- [ ] axe 0 critical/serious on all new pages; Lighthouse mobile numbers pasted
- [ ] Regression check passes

---

### Phase 7: Case studies and blog
**Scope:** `/case-studies`, `/case-studies/[slug]`, `/blog`, `/blog/[slug]`.

- Case study template per Section 3.4. Results show measured metrics with a measurement date, or qualitative outcomes. Anonymize where permission is missing.
- Remove the testimonials section unless real, permitted quotes exist.
- Blog: listing with the Phase 6 filters; article template with table of contents, reading time, date, related articles. Do not rewrite article bodies without owner approval; fix formatting only.
- Copy deck first (stop for approval), then implement.

**Definition of Done**
- [ ] Every case study has a source for every metric, or the metric is removed
- [ ] No client named without recorded permission in `CLAIMS.md`
- [ ] Filters work and sync to URL
- [ ] Banned-words grep clean on all new copy
- [ ] Both themes × 3 widths; axe and Lighthouse numbers pasted
- [ ] Regression check passes

---

### Phase 8: Contact and forms
**Scope:** `/contact` and every form on the site.

- Fields, inline validation, clear labels, success and error states, accessible
- Spam protection (honeypot and/or a CAPTCHA alternative such as Cloudflare Turnstile)
- WhatsApp as a secondary option; a response-time promise only if real
- A privacy notice (flag `[VERIFY with legal]`)

**Definition of Done**
- [ ] A real test submission reaches the intended inbox or endpoint (show the evidence)
- [ ] Validation errors demonstrated for each field; success state screenshot
- [ ] Keyboard-only test passes; both themes; 3 widths
- [ ] Regression check passes

---

### Phase 9: Final QA and cleanup
**Scope:** whole site. Fix only what the checks reveal.

**Definition of Done**
- [ ] Lighthouse mobile on every route: Performance ≥ 90, Accessibility ≥ 95, SEO ≥ 95 (table of numbers)
- [ ] axe: 0 critical/serious on every route in both themes
- [ ] Broken link check: 0 broken links (paste output)
- [ ] Console: 0 errors on every route
- [ ] Banned-words grep across the whole repo and rendered pages: 0 matches
- [ ] `CLAIMS.md`: every published claim is "Verified"; no unverified claim live
- [ ] Hard-coded color grep clean; "Proxmox" absent
- [ ] Unused code, assets and dependencies removed
- [ ] `README.md` explains how to run, build and deploy
- [ ] Final regression check of all phases 1-8

---

## 5. Message to send at the start (copy this to the AI)

```
Read NUZUL_REBUILD_MASTER_BRIEF.md in full. Create docs/PROGRESS.md, docs/DECISIONS.md and docs/OPEN_QUESTIONS.md from the templates in Section 6. Then tell me in 5 lines how you understood the protocol (Section 1) and which phase is current. Do not change any site code yet.
```

---

## 6. `docs/PROGRESS.md` template

```markdown
# Progress tracker (updated after every step)

Last updated: <date/time>
Current phase: <n>: <name>
Branch: rebuild/phase-<n>

| Phase | Name | Status | Approved by owner | Git tag | Evidence folder | Open issues |
|---|---|---|---|---|---|---|
| 0 | Audit | ⬜ | | | /audit/phase-0/ | |
| 1 | Defects + theme system | ⬜ | | | /audit/phase-1/ | |
| 2 | Benchmark, claims, voice | ⬜ | | | docs/ | |
| 3 | IA, content map, header/footer | ⬜ | | | /audit/phase-3/ | |
| 4 | Home + hero + motion | ⬜ | | | /audit/phase-4/ | |
| 5 | Plans, pricing, hosting | ⬜ | | | /audit/phase-5/ | |
| 6 | Services + search/filtering | ⬜ | | | /audit/phase-6/ | |
| 7 | Case studies + blog | ⬜ | | | /audit/phase-7/ | |
| 8 | Contact + forms | ⬜ | | | /audit/phase-8/ | |
| 9 | Final QA + cleanup | ⬜ | | | /audit/phase-9/ | |

## Current phase checklist
(copy the Definition of Done of the current phase here and tick items only with evidence)

## Last 3 decisions
1.
2.
3.

## Blocked / waiting on owner
-
```

---

## 7. Owner's quick checklist before typing `APPROVED PHASE <n>` (for the human, not the AI)

1. Open the site in Chrome DevTools device mode at 375 px and scroll the whole page.
2. Switch Light / Dark / System; reload in each; look for text you cannot read.
3. Open the Console: any errors?
4. Click every header and footer link.
5. Tab through the page with the keyboard only.
6. Read the new copy out loud: does anything sound like an advertisement? Does every number have a source?
7. Compare the AI's report to what you see. If they differ, send `FIX LOOP: <what you see>`.
