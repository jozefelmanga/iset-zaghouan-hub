# Audit of guideisetzg.tn

Date: 20 November 2026 · Commit audited: `07d1e19` (main) · Live site checked the same day.

Nothing in the repo was changed. This file is the only thing written.

---

## 1. Executive summary

The site is in good technical shape. Security headers are strong, the static export is simple and robust, CI builds on every push, production deps have 0 known vulnerabilities, automated a11y and contrast are clean, and offline support works. The weak spots are **content consistency**, **findability** and **performance on real phones**.

The same facts (bourse papers, enrollment papers, bus times) are written in 2–3 places, and those copies already disagree with each other. One of the wrong copies sits in hidden structured data that Google can show in search results. Every content fix is a hand edit in TypeScript by one person, and there is no yearly update routine.

**Biggest risks**
1. **Contradicting information on paper lists.** The FAQ's bourse list asks for a card students don't have yet and leaves out key papers. The enrollment FAQ says "4 photos" while the page doesn't mention photos.
2. **Slow first visit on the pages students use most.** Lighthouse mobile on the live site scores 41–70. LCP is 7.4 s on the homepage and 11.4 s on /housing, the most visited content page.
3. **No working correction channel and a single maintainer.** The feedback Google Form requires a Google sign-in. All 153 commits come from one person.

**Biggest opportunities**
1. **Bourse search traffic.** "اوراق البورص" and its variants get 600+ impressions in Search Console with 0 clicks (average position about 9). /bourse has 3,683 impressions at 0.71% CTR.
2. **Search box.** Teaching it a dozen everyday words (كار, سكن, مطعم, تربص, horaire, e-dinar) and Arabic spelling variants is a big findability win for very little work.
3. **Images.** Resizing about 15 oversized photos and dropping one near-invisible 426 KB background would cut first-visit data on /housing and /explore by 1.5–3 MB.

---

## 2. Top 10 priorities

| # | ID | What | Why it's ranked here |
|---|---|---|---|
| 1 | C-1 | Fix the FAQ's bourse paper list | A wrong paper list costs students a trip to the office. /faq gets 513 views |
| 2 | C-2 | Fix or remove the hidden enrollment FAQ ("4 photos") in JSON-LD | Invisible on the page, contradicts it, and can appear in Google |
| 3 | I-1 | Tell students on /inscription that the bourse file is due **15 days after registration**, with a link | A missed deadline means losing the grant. /inscription gets 1,318 views and has no mention of bourse |
| 4 | P-1 | Resize the /housing and /explore photos (300–500 KB each, up to 1,920 px wide) | The second most visited page has an 11.4 s LCP and 2.5 MB of data |
| 5 | G-1 | Make the feedback form work without a Google sign-in | It's the only way to report wrong information, and it's broken for most phone visitors |
| 6 | C-3 | Put the bus times in one place (FAQ, route cards and timetable disagree) | Students plan trips from the FAQ and the route card |
| 7 | I-2 | Search synonyms and Arabic normalisation | 22 of 50 realistic queries return nothing |
| 8 | S-1 | Rewrite the /bourse title and description for "اوراق البورص" | It's the site's largest unclaimed search demand |
| 9 | G-2 | A yearly September update checklist, plus "last updated" on every time-sensitive page | /bourse, /resto, /transport routes and /stages have no date. SEO titles hard-code "2026-2027" |
| 10 | T-1 | An "unofficial guide" line on every page, not just /about | /about gets 1,358 search impressions from people looking for the institute itself |

---

## 3. Findings by area

Severity: Critical / High / Medium / Low · Effort: S (<1 h), M (<1 day), L (more) · Conf.: confidence

### 3.1 Content accuracy and freshness

| ID | Finding | Evidence | Impact on users | Sev. | Effort | Conf. | Suggested direction |
|---|---|---|---|---|---|---|---|
| C-1 | The FAQ's bourse paper list disagrees with /bourse | `src/data/faq.ts:25` lists "بطاقة الخدمات الجامعية … شهادة الإقامة، و صور شمسية". `src/data/scholarships.ts:30-42` (sourced from faccna.tn) has no photos and no residence certificate, and adds the CNSS/CNRPS certificates, the parents' income declaration, the signed commitment and siblings' birth certificates. `src/data/bonus.ts:16` says the services card is handed out *at foyer registration*, so a new student can't have it yet | A student follows the FAQ, brings the wrong papers, and misses the CNSS/CNRPS certificates that take days to get | Critical | S | High | Make the FAQ answer a short summary that links to /bourse. Better: build it from `scholarshipDocuments` so there is only one list |
| C-2 | The hidden enrollment FAQ in structured data contradicts the page | `src/data/faq.ts:66` "4 صور شمسية … نسخة من شهادة البكالوريا" is used only in `FaqJsonLd` (`src/app/inscription/page.tsx:22`). Visible copies on the page: 0 (`grep` on `dist/inscription.html` outside `<script>`). The visible list (`src/data/enrollment.ts:58-66`) says 3 certified copies and no photos | Google can show "4 photos" as the answer in search results. Hidden FAQ markup also breaks Google's structured-data rules | High | S | High | Either show these Q&As on the page, written from `enrollmentDocs`, or remove the JSON-LD |
| C-3 | Bus return times differ in three places | The FAQ (`faq.ts:31`) and route card (`transport.ts:64`) list "10:00 / 12:00 / 15:00 / 16:00 / 17:30". The SRTGN timetable in the same file (`transport.ts:139`) also has 05:00, 05:45, 06:45, 08:00 and 14:00, and marks 10:00, 15:00 and 17:30 "*" (no service on Sundays or holidays). Neither the FAQ nor the card mentions Sundays | A student waits on Sunday for the 17:30 that doesn't run, or doesn't know the 14:00 exists | High | S | High | Build the FAQ and card from `busTimetables` (or just link to it) and add the Sunday note |
| C-4 | Time-sensitive pages have no "last updated" date | Only /housing, /inscription, /inscription/foyer and /stages/pfe show one (all "جويلية 2026"), plus /privacy. /bourse (amounts, thresholds), /resto (hours, ticket prices), the /transport route cards (fares), /stages (deadlines) and /faq have none. Only the timetable block has "checked نوفمبر 2026" | Students and parents can't tell whether 1320 DT or 5.350 DT is this year's figure | Medium | S | High | Show a date on every page with figures. Keep the dates in one data file so the September review updates them all |
| C-5 | SEO titles hard-code the academic year | `src/constants/seo.ts:21` "…المبيت الجامعي 2026-2027", `:25` "…البورص و منحة الإدماج 2026-2027" | From about July 2027, search results will show last year's label, which looks stale and lowers clicks | Low | S | High | Add the year to the September checklist, or compute it from one constant |
| C-6 | Figures with no source that will go out of date | Louage 5.350 DT and buses 4.000 / 3.400 DT (`transport.ts:25,38,49`), abonnement "45 DT للسماستر" (`transport.ts:15`), E-dinar card "15 دينار" (`enrollment.ts:12`), resto "5 تيكيات ب 1000 مي" (`restaurant.ts:8`), housing deposit 20 DT (`housing.ts:8,63`) | Fares and fees change, and nothing on the page shows the date or source | Medium | M | Medium | Note a source and check date next to each figure in the data file, so the yearly review knows what to check: SRTGN, the regional transport office, La Poste, the OOUN |
| C-7 | Bourse amounts are plausible, but not confirmed for 2026‑27 | 1320 DT across 4 instalments and the 500 DT insertion grant match press reports. The 2026‑27 budget (21.58 M DT for 43,004 insertion grants) works out to about 500 DT each. No official 2026‑27 notice was found for the 1320 figure or the 6,339.840 DT threshold | Probably correct. If the ministry raises the grant, the site will quietly be wrong | Medium | S | Medium | Check against the OOUN or tawjih.tn page each autumn and link that source on /bourse |
| C-8 | The external "score calculator" is out of date | The TI and SEG pages (`TIPageContent.tsx:261`, `SEGPageContent.tsx:222`) link to `makaabi.github.io/scoreapp/1ere`. It returns HTTP 404, but the app still loads. Its birth-year choices are "2003 / 2002 / 2001 / >2000" | Students born 2005–2008 can't pick their year, so their age-based score is wrong | Medium | S | Medium | Add a warning, ask the author to update it, or remove the link |
| C-9 | The heading says "SRTN", everywhere else says "SRTGN" | `src/app/transport/page.tsx:34` "(SRTN)" vs `transport.ts:5,111` "SRTGN" | Small confusion when students search for the company | Low | S | High | Use SRTGN everywhere |
| C-10 | Place names are spelled three ways | "مقرن" (`official.ts:8`), "المكرن" (`seo.ts:18`), "للمقرن" (`transport.ts:104`) | Hurts search matching. Looks careless to parents | Low | S | High | Pick one spelling (the official address uses مقرن) |
| C-11 | Search descriptions promise things the pages don't have | /library description: "أوقات الفتح، كيفية الإعارة" (`seo.ts:51`). The page has no opening hours and no lending rules (no match in `src/app/library` or `src/components/library`) | A student comes from Google looking for the hours and leaves without them | Low | S | High | Add the hours, or change the description |

### 3.2 Information architecture and findability

| ID | Finding | Evidence | Impact | Sev. | Effort | Conf. | Suggested direction |
|---|---|---|---|---|---|---|---|
| I-1 | /inscription doesn't mention the bourse deadline | The bourse file is due "في أجل ما يفوتش 15 يوم من تاريخ الترسيم" (`scholarships.ts:47`). `src/app/inscription/page.tsx` and `InscriptionContent.tsx` contain 0 mentions of بورص and no internal links. /bourse, /transport, /resto, /library and /inscription have no links to related pages inside the content (only /housing ↔ /inscription/foyer and /faq do) | The step most likely to be missed (the 15-day window) isn't on the page every new student reads. 1,318 views vs 326 for /bourse | High | S | High | Add a "next step: send your bourse file within 15 days" card on /inscription, plus a few "related" links on each core page |
| I-2 | Search misses everyday words and spelling variants | Running the palette's own `matchesNavLink` on 50 queries, 22 return nothing: «كار», «سكن», «مطعم», «تربص», «بورصة», «منحه» (ه instead of ة), «اوراق المبيت», «مستر», «توجيه», «tawjih», «sakan», «tasjil», «horaire», «timetable», «emploi du temps», «inscriptin», «e-dinar», «edinar», «contact», «telephone», «internat», «dortoir». «نادي» doesn't find /clubs itself. Search matches page titles only, not content (`src/lib/nav-search.ts:28-38`) | A student types the word they actually use (كار for bus) and gets nothing | Medium | S–M | High | Add Arabic normalisation (أ/إ/آ→ا, ة→ه, ى→ي) and derja/French synonyms to `nav-search-keywords.ts`. Later, index FAQ answers and section headings |
| I-3 | The bottom-nav "أكثر" (More) button opens the FAQ | `src/constants/navigation.ts:127` `{ href: "/faq", label: "أكثر", icon: HelpCircle }` | Students expect a menu (bourse, resto, stages). They land on the FAQ, and bourse isn't reachable from the bottom bar | Medium | S | High | Make "أكثر" open the drawer, or rename it to الأسئلة |
| I-4 | Housing information is split between two menu groups | /inscription/foyer (papers) is under ACADEMICS, /housing (life) under STUDENT LIFE (`navigation.ts:63,73`). The two pages link to each other, which helps | "What papers do I need for housing": tap /housing, then the cross-link card at the top, then the list. That's 3 taps, so OK, but the drawer layout is confusing | Low | S | High | Put both in one group, or rename to "أوراق المبيت" so the label matches what students search for |

### 3.3 Mobile UX and interaction

| ID | Finding | Evidence | Impact | Sev. | Effort | Conf. | Suggested direction |
|---|---|---|---|---|---|---|---|
| U-1 | The enrollment checklist can blank the page when storage is blocked | `InscriptionContent.tsx:32` `localStorage.setItem(...)` is outside a try/catch (the read on line 18 is guarded). There is no `error.tsx` or `global-error.tsx` in `src/app` | With site data blocked (iOS "Block all cookies", some WebViews), the effect throws and React can unmount /inscription, leaving a blank page | Medium | S | Medium | Wrap the write in try/catch the way the theme and install code already do, and add a minimal `global-error.tsx` |
| U-2 | Inline links and phone numbers are small to tap | At 360 px on /transport, "98202339" (louagiste tel: link) is 19 px tall, "افتح الجدول" 21 px and "شوف المواعيد المحيّنة" 18 px. The footer feedback link is 114×19 px | Missed taps on mid-range phones, especially for the phone number students actually call | Low | S | High | Give tel: links and key text links at least 32–44 px of tap height |
| U-3 | The checklist has no reset and never expires | `inscription-checklist` in localStorage, keyed by step number, with no reset control | Returning students and shared phones keep last year's ticks | Low | S | High | Add a reset button, and save the year with the ticks |

Layout at 360 px and 390 px: no horizontal scroll on the pages tested (`scrollWidth` = viewport). Safe-area padding on the bottom nav is correct (`globals.css:855-856`). Fine.

### 3.4 Language, RTL and copy

| ID | Finding | Evidence | Impact | Sev. | Effort | Conf. | Suggested direction |
|---|---|---|---|---|---|---|---|
| L-1 | Formal Arabic and derja are mixed on the same topic | The enrollment FAQ: "يرجى…"-style formal answers (`faq.ts:62-72`) next to derja steps ("تمشي للبوسطة تهز معاك…", `enrollment.ts:12`). /about is fully formal ("يرجى دائماً مراجعة إدارة…", `about/page.tsx:76`) | Mostly fine; the tone just shifts between sections | Low | S | High | Pick derja for student-facing text and keep formal Arabic only for legal or official notes |
| L-2 | The same institute has three names | "الايزات", "الفاك", "ISET", "المعهد" across the data files (for example `housing.ts:4,92`) | Natural for derja, but "الفاك" can confuse a first-year student about which building is meant | Low | S | Medium | Mention once in the FAQ that "الفاك = ISET" and keep "الايزات" in instructions |

Mixed-direction text: 396 `dir="ltr"` spans in the built HTML; the phone numbers, the timetable and URLs I checked render in the right order. Fine.

### 3.5 Accessibility (beyond automated checks)

| ID | Finding | Evidence | Impact | Sev. | Effort | Conf. | Suggested direction |
|---|---|---|---|---|---|---|---|
| A-1 | French and English words are never marked as such | The built HTML has 31 `lang="ar"` (one per page) and **0** `lang="fr"` / `lang="en"`, despite 396 `dir="ltr"` spans | TalkBack and VoiceOver read "Projet de Fin d'Études", "E-dinar", "soutenance" with the Arabic voice, which is close to unintelligible | Medium | M | High | Add `lang="fr"` / `lang="en"` where `dir="ltr"` is already set: one shared `<Fr>` / `<En>` component would cover most of them |
| A-2 | Logo alt text implies an official site | First image on the homepage: `alt="ISET Zaghouan Logo"` (`logo.webp`). The same file has `alt="Guide ISET Zaghouan"` in the footer | Screen-reader users hear "ISET Zaghouan Logo", which suggests the institute's own site | Low | S | High | Use "Guide ISET Zaghouan" everywhere |

Already good: there is a skip link, the landmarks are correct, `:focus-visible` is styled (`globals.css:209`), reduced motion is handled, zoom isn't disabled, and every `<img>` has an alt.

### 3.6 Performance on real conditions

Lighthouse 12 mobile (simulated slow 4G with 4× slower CPU) on the **live** site:

| Page | Perf | FCP | LCP | TBT | CLS | Transfer |
|---|---|---|---|---|---|---|
| / | 41 | 3.7 s | 7.4 s | 1,560 ms | 0 | 1,152 KB |
| /housing | 44 | 3.1 s | **11.4 s** | 1,270 ms | 0 | 2,576 KB |
| /bourse | 51 | 3.3 s | 5.2 s | 1,110 ms | 0 | 974 KB |
| /clubs | 53 | 3.1 s | 4.9 s | 1,090 ms | 0 | 722 KB |
| /explore | 56 | 1.2 s | 4.3 s | 2,480 ms | 0.036 | **3,808 KB** |
| /stages | 60 | 1.1 s | 2.7 s | 2,780 ms | **0.16** | 637 KB |
| /transport | 65 | 1.8 s | 3.0 s | 2,200 ms | 0 | 556 KB |
| /stages/companies | 70 | 1.5 s | 1.9 s | 2,550 ms | 0.009 | 601 KB |

These are single runs on a Windows laptop. Take TBT as a trend, not an exact number.

| ID | Finding | Evidence | Impact | Sev. | Effort | Conf. | Suggested direction |
|---|---|---|---|---|---|---|---|
| P-1 | Oversized photos on the busiest pages | /housing: `foyer-girls-localisation.webp` 377 KB (1422×1106), four girls'-foyer photos at 173–314 KB. /explore: five photos at 307–498 KB. `next.config.ts:16` has `images.unoptimized: true`, so there's no `srcset`: a 390 px phone downloads the full 1,400–1,900 px file | 2.5–3.8 MB per page on mobile data, and an 11 s LCP on /housing | High | M | High | Re-export at 800–1000 px wide (about 60–120 KB each) and add `srcset` with two sizes. The repo already has `optimize-images.mjs` |
| P-2 | A 426 KB homepage background that is almost invisible | `MotivationalCTASection.tsx:9` uses `/images/footer.webp` (1920×1118, 426 KB) under a navy overlay at 82–95% opacity. It's the largest single file on `/` | 37% of homepage weight for a texture you can barely see | Medium | S | High | Use a 600 px, heavily compressed version (about 30 KB) or a plain gradient |
| P-3 | Google Analytics costs more than the site's own JS | gtag.js is 179 KB and takes about 0.8–1.1 s of main-thread time on every page (Lighthouse "third-party summary"). Clarity adds 28 KB and about 0.2–0.4 s | About a second of lag on mid-range Android | Medium | M | High | Keep GA, but load it `lazyOnload` like Clarity, or switch to a lighter tool. Since GA is barely used for events (see 3.14), the trade-off is worth reconsidering |
| P-4 | Large HTML and hydration payload | `dist/index.html` 227 KB, `stages/companies.html` 389 KB (uncompressed). Lighthouse attributes 1.7–2.3 s of script time to the page document itself | Slow first render and hydration on low-end CPUs | Medium | M | Medium | Find which client islands put large props into the RSC payload (the company list, galleries) and paginate or lazy-load them |
| P-5 | Layout shift on /stages | CLS 0.16 (above the 0.1 "good" limit) | The page jumps while a student starts reading | Low | S | Medium | Reserve height for the part that loads late (probably the timeline or year selector) |
| P-6 | 8 font files load on the homepage | The network log shows 8 `.woff2` requests (76.8 KB in total) | Small but avoidable | Low | S | Medium | Cut down the Tajawal weights and subsets in `src/lib/fonts.ts` |
| P-7 | The Lighthouse budget in the repo never runs | `.github/workflows/lighthouse.yml` runs only on `pull_request`, and every commit goes straight to `main` (`gh run list -w lighthouse.yml` shows no runs). `lighthouserc.json` requires perf ≥ 0.85; the live site scores 0.41–0.70 | Performance regressions go unnoticed | Medium | S | High | Run it on push to main (as a warning), or add it to the "before you call a change done" list in `CLAUDE.md` |

### 3.7 Offline and PWA

| ID | Finding | Evidence | Impact | Sev. | Effort | Conf. | Suggested direction |
|---|---|---|---|---|---|---|---|
| O-1 | Saved pages don't say they're old | When offline, `handlePage` serves the cached copy (`sw.js:150-157`) with no notice. There is no online/offline indicator in `src` (no `navigator.onLine` or `offline` event handler) | A student offline in the louage sees a timetable or fare saved months ago as if it were current | Medium | M | High | When the page comes from cache, show a small "نسخة محفوظة: [date]" bar. The SW can add a header, or the page can check `navigator.onLine` |
| O-2 | The build-file cache grows forever | `/_next/static` uses `cacheFirst(request, ASSETS)` (`sw.js:60`), and `trimCache` runs only on `images-` (`sw.js:199`). Every deploy creates new hashed files | A frequent visitor builds up old JS and CSS from every deploy: tens of MB on low-storage phones | Medium | S | High | When a page is saved, delete ASSETS entries that no saved page references, or cap the cache and evict the oldest |
| O-3 | A 4 s timeout sends slow connections to a cached or offline page | `NETWORK_TIMEOUT_MS = 4000` (`sw.js:27`). If the response headers take more than 4 s, the visitor gets the cached copy, or `/offline` for a page never visited | On weak 3G, a student who is online sees "you're offline" for a new page | Low | S | Medium | For pages with no cached copy, wait for the network instead of timing out |
| O-4 | The offline-page icon is the first image the image cache evicts | `OFFLINE_ICON` is cached first at install (`sw.js:35`). `trimCache` deletes keys in insertion order once there are more than 80 images | After browsing about 80 images, the offline page shows a broken icon | Low | S | High | Keep it in the PAGES cache, or inline it in `offline.html` |

The manifest is correct (192, 512 and maskable icons, `lang` / `dir`). The update flow is network-first with `skipWaiting` and `clients.claim`, so a returning visitor gets new content on the next online visit.

### 3.8 SEO and discoverability

| ID | Finding | Evidence | Impact | Sev. | Effort | Conf. | Suggested direction |
|---|---|---|---|---|---|---|---|
| S-1 | Bourse searches show up but nobody clicks | Search Console (1 Jan – 19 Nov 2026, `analytics/…Queries.csv`): "اوراق البورص" 337 impressions / 0 clicks / position 9.0, "أوراق البورص" 151 / 0, "بورص" 117 / 0, "البورص" 308 / 2. /bourse: 3,683 impressions, CTR 0.71% | The site's biggest untapped demand. The 19 Nov SEO commit (`b6cb066`) targets this, but it's too soon to judge | High | S | High | Start the title with the query ("أوراق البورص 2026: القائمة كاملة"), and have the description promise the list and the deadline. Check again in Search Console in 4–6 weeks |
| S-2 | Foyer paper searches rank about 9th | "اوراق الترسيم في المبيت الجامعي" 126 impressions / 0 clicks / position 9.4. "اوراق المبيت" 71 / 0. /inscription/foyer CTR 1.58% | Missed traffic at the moment students need it most (August–September) | Medium | S | High | Same approach as S-1 |
| S-3 | Some share titles have no site name | `og:title` for /housing is just "المبيت الجامعي". Every page uses the same `og-image.jpg` | WhatsApp and Messenger previews don't say where the link goes | Low | S | High | Add "· Guide ISET Zaghouan" to `og:title` |

Already fine: robots, the sitemap (28 URLs, no fake `lastmod`), a real 404 status, canonical-style `og:url`, `ar_TN` locale.

### 3.9 Security

| ID | Finding | Evidence | Impact | Sev. | Effort | Conf. | Suggested direction |
|---|---|---|---|---|---|---|---|
| X-1 | CSP allows `'unsafe-eval'` and unused hosts | Live header: `script-src 'self' 'unsafe-inline' 'unsafe-eval' … static.cloudflareinsights.com … plausible.io`. Plausible isn't configured (`.env.local` has no `NEXT_PUBLIC_PLAUSIBLE_DOMAIN`) and Cloudflare isn't used | Weakens XSS protection for no gain. There's no user input, so the real-world risk is low | Low | S | High | Remove `'unsafe-eval'`, Plausible and Cloudflare from `vercel.json`, then confirm GA and Clarity still send data |
| X-2 | Leftover config | `public/_headers` (Netlify format) is ignored on Vercel and copies the CSP from `vercel.json`. `.env.local` holds Sentry variables but Sentry isn't installed (it isn't in `package.json`, and there is no `sentry` string in `dist`) | The two CSPs will drift apart, and someone may assume error monitoring exists | Low | S | High | Delete `_headers` and the unused env entries, or actually set up Sentry |

Fine: HSTS with preload, `frame-ancestors 'none'` plus XFO DENY, nosniff, referrer and permissions policies, every `target=_blank` has `noopener`, `npm audit --omit=dev` finds 0 vulnerabilities, no secrets in the repo or in `dist`, `.env.local` is git-ignored, and the SW ignores cross-origin requests.

### 3.10 Privacy and legal

| ID | Finding | Evidence | Impact | Sev. | Effort | Conf. | Suggested direction |
|---|---|---|---|---|---|---|---|
| R-1 | The privacy page claims "Do Not Track" blocks analytics | `privacy/page.tsx:35`: "تنجم تمنعها بـ bloqueur de pub و لا خاصية منع التتبّع في المتصفح". GA4 and Clarity ignore the DNT / "do not track" setting | A false promise to students who rely on it | Medium | S | High | Mention only ad blockers, or actually check DNT / GPC before loading the scripts |
| R-2 | Session recording and cookies aren't mentioned | Cookies set on the first visit, with no interaction: `_ga`, `_ga_32DVTR50N7`, `_clck`, `_clsk`. Clarity records taps and scrolls as session replays. The privacy page says only "معلومات عامة كيف الصفحات… نوع الجهاز" | The policy says less than the site does. Many visitors are under 20 | Medium | S | High | Add one line each: "Clarity records anonymous replays of how pages are used" and "both use cookies". Keep it short, in line with the site's style |
| R-3 | Private individuals' names and phone numbers are published | Louagiste "قيس 98202339" (`transport.ts:32`, `faq.ts:85`). Guard "العساس عم عزيز" (`housing.ts:66`). 112 of 267 entries in the company list have mobile-style numbers and 16 have personal Gmail/Yahoo/Hotmail addresses (taken from the institute's xlsx) | These people may not know their number is on a public, indexed site | Low | S | Medium | Confirm consent for the louagiste and guard. Keep the company list, which comes from an official source |

### 3.11 Trust and credibility

| ID | Finding | Evidence | Impact | Sev. | Effort | Conf. | Suggested direction |
|---|---|---|---|---|---|---|---|
| T-1 | The "unofficial" note appears only on /about | The Arabic disclaimer appears only at `about/page.tsx:76`. The footer says "Independent Platform" in English (`Footer.tsx:91`). No "غير رسمي" anywhere else in `src`. Search queries like "www isetzg rnu tn" and "iset zaghouan" land here, and /about gets 1,358 impressions | Parents may take the guide for the institute's site and treat derja tips as official decisions | Medium | S | High | Put one short Arabic line in the footer and the homepage hero: "دليل طلابي مستقل، موش الموقع الرسمي — isetzg.rnu.tn" |
| T-2 | The sponsor banner isn't labelled as an ad | `Zan9aStickersSection.tsx` sits in the homepage flow with no "إشهار" or "شريك" label. It also has hard-coded claims ("★ 4.7", "+1000 زبون", "أكثر من 2000 ستيكر") marked "Keep in sync" | It blurs the line with editorial content, and the numbers will go stale | Low | S | High | Add a small "إشهار" or "يدعم الموقع" tag. If the sponsor is linked to the maintainer, say so on /about |

### 3.12 Code quality and maintainability

| ID | Finding | Evidence | Impact | Sev. | Effort | Conf. | Suggested direction |
|---|---|---|---|---|---|---|---|
| M-1 | The same facts are written by hand in several places | Bourse papers (`faq.ts:25` vs `scholarships.ts:30`), bus times (`faq.ts:31`, `transport.ts:64`, `transport.ts:139`), enrollment papers (`faq.ts:66` vs `enrollment.ts:58`). Phone numbers are already shared correctly (`faq.ts` imports `official.ts`) | This is what caused C-1 to C-3. Each yearly update has to find every copy | High | M | High | Build FAQ answers from the data arrays, and add a vitest check that the FAQ doesn't repeat figures that differ from the source arrays |
| M-2 | Content lives in TypeScript and JSX | The club and department pages hold their text inline (for example `EnactusPageContent.tsx:78`). Inline `style={{…}}` objects are everywhere (for example `TIPageContent.tsx:253`) | A classmate who can't code can't update a timetable or a fee | Medium | L | High | Move the frequently changing facts (fees, times, dates, contacts) into one `src/data/facts.ts` or a JSON/CSV the way `stage-companies` already works, and document how to edit it |
| M-3 | Raw brand hex used as text colour | `Zan9aStickersSection.tsx`: `text-[#EA580C]`. This goes against the `textTint()` rule in `CLAUDE.md` | The contrast check passes today, but it's inconsistent | Low | S | High | Use `textTint("#EA580C")` |

### 3.13 Reliability and operations

| ID | Finding | Evidence | Impact | Sev. | Effort | Conf. | Suggested direction |
|---|---|---|---|---|---|---|---|
| G-1 | The feedback form requires a Google sign-in | `https://forms.gle/4Aj6svouhdPu9TBA7` returns HTTP 401 to curl, and in the browser it redirects to `accounts.google.com` "Google Forms: Sign-in". It's linked from the footer, /about and /privacy | Visitors in Facebook or Instagram in-app browsers usually aren't signed in to Google, so the only correction channel fails for most of the audience. GA shows 5 `form_start` / 1 `form_submit` all year | High | S | High | In Form settings, turn off "Restrict to users…" and "Limit to 1 response". Also add a Messenger or Instagram link as a second option |
| G-2 | No monitoring and no routine checks | There's no uptime check and no scheduled link check. `check-contrast` and `check-offline` aren't in CI (`.github/workflows/ci.yml` runs test, lint, build and check-bundle) | Nobody would notice a broken external link or a failed deploy | Medium | S | High | Set up a free uptime monitor, and a monthly scheduled workflow running a link check over `src` |
| G-3 | Broken or fragile external links | `https://aftergraduation.tn` (`resources.ts:55`) times out over HTTPS without `www` (curl `000`), while `https://www.aftergraduation.tn` returns 200. The scoreapp deep link returns 404 (C-8). The SRTGN link is `http://` only (`transport.ts:5`) | Students hit errors on some links | Low | S | High | Use the `www` URL. Keep a list of external links to re-check |

The other 47 of 51 external links returned 2xx or 3xx. Content is backed up through git and GitHub, which is enough for a static site.

### 3.14 Analytics and measurement

| ID | Finding | Evidence | Impact | Sev. | Effort | Conf. | Suggested direction |
|---|---|---|---|---|---|---|---|
| N-1 | Only automatic events are tracked | GA events (`analytics/google analytics/Events_Event_name.csv`): page_view, scroll, click, file_download, form_*. There are no custom events in `src` (no `gtag(` or `sendGAEvent`) | You can't answer: what do students search for and not find? Do they call the louagiste? Do they install the app? Do they use the grade calculator? Does the Zan9a banner get clicks? | Medium | M | High | Add about 5 events: `search` (with a no-results flag), `tel_click`, `install_prompt` / `installed`, `calculator_used`, `sponsor_click` |
| N-2 | Clarity session recording may be more than needed | 1,971 users a year, and the questions above can be answered with events. Clarity adds about 0.3 s of CPU per page (P-3) | Privacy and performance cost for little extra insight | Low | S | Medium | Keep it for a few weeks after a redesign, then switch recording off |

### 3.15 Content governance and growth

| ID | Finding | Evidence | Impact | Sev. | Effort | Conf. | Suggested direction |
|---|---|---|---|---|---|---|---|
| G-4 | One maintainer, no handover plan | `git log --format=%an`: 153 commits, all from one author. The /about page names the maintainer as a "former student" | When the maintainer stops, the content rots within a year | High | M | High | Write `CONTRIBUTING.md` in Arabic (how to suggest a fix, how to edit `src/data`), recruit 1–2 current students or a club (Securinets or IEEE) as co-maintainers, and give them GitHub access |
| G-5 | No yearly update checklist | Only the README says to "re-check every September" for the timetable. Nothing covers bourse amounts, foyer papers, resto prices, the hard-coded year in titles, or stage deadlines | Facts stay frozen at July 2026 | High | S | High | Add `docs/SEPTEMBER-CHECKLIST.md`: each fact, its file, its official source, and the date last checked |

---

## 4. Quick wins (< 1 hour each)

1. Fix the FAQ's bourse answer: summarise and link to /bourse (C-1).
2. Remove or show the hidden `inscriptionFaqItems` JSON-LD (C-2).
3. Point the FAQ and route-card bus times at the timetable and add the Sunday note (C-3).
4. Turn off sign-in on the Google Form (G-1).
5. Add a "send your bourse file within 15 days" card with a link on /inscription (I-1).
6. Replace `footer.webp` with a small or gradient version (P-2).
7. Add about 30 derja and French synonyms plus the ة/ه and أ/ا normalisation to search (I-2).
8. Rename the bottom-nav "أكثر" or make it open the drawer (I-3).
9. Correct the privacy page: drop the DNT claim, add a line on Clarity recording and cookies (R-1, R-2).
10. Put a one-line Arabic "unofficial" note in the footer (T-1).
11. Use the `www.` URL for aftergraduation, change "SRTN" to "SRTGN", and pick one spelling for مقرن (G-3, C-9, C-10).
12. Wrap the checklist `setItem` in try/catch (U-1).
13. Remove `'unsafe-eval'` and the unused hosts from the CSP (X-1).

## 5. What's already good (keep it)

- **Security headers**: strict CSP structure, HSTS preload, `frame-ancestors 'none'`. External links use `noopener`.
- **Static export**: no server, no database, nothing to hack or keep running. The build is deterministic: the prebuild scripts left `git status` clean.
- **The bus timetable is real text** with a source link and a "checked" date (`transport.ts:107-118`). Use the same pattern for every other fact.
- **Offline support**: network-first pages, one cache key per page whatever the UTM parameters, never failing on install, and an offline page that lists the saved pages.
- **Cookie-free theme and install logic**, with try/catch around storage (except U-1). No pop-ups.
- **Company directory generated from the official xlsx** by a script, not edited by hand.
- **Accessibility basics**: skip link, landmarks, styled focus, alt on every image, reduced motion, 0 contrast failures, Lighthouse a11y 100 on every page tested.
- **Bottom nav respects iPhone safe areas.**
- **CI on every push** (test, lint, build, bundle budget).
- **The sitemap has no fake `lastmod`.** This is deliberate (`sitemap.ts:7-8`); don't "fix" it.

## 6. Open questions

| Question | What's needed |
|---|---|
| Are 1320 DT, the 4 instalments, 500 DT and the 6,339.840 DT threshold correct for 2026‑27? | The OOUN (ديوان الخدمات الجامعية للشمال) 2026‑27 notice, or the tawjih.tn page |
| Are louage 5.350 DT, buses 4.000 / 3.400 DT and abonnement 45 DT per semester current? | SRTGN or the regional transport office in Zaghouan, or a current student |
| Is E-dinar Jeune still 15 DT? | La Poste Tunisienne price list |
| Resto hours, ticket price (200 millimes), Saturday snack ticket (500 millimes), boys' 18:00 bus | Ask the resto, or a current student |
| Foyer curfew 19:30 and the 20 DT deposit | Foyer administration |
| Have the louagiste and the guard agreed to have their names and numbers published? | Ask them |
| Is the sponsor linked to the maintainer? (This affects the disclosure wording in T-2.) | The owner |
| Is the Google Form restricted on purpose (for example, to block spam)? | Form settings |
| Real-device behaviour in the Facebook and Instagram in-app browsers on iOS (install hint, storage, SW) | A physical iPhone and an Android phone. Not tested |
| TalkBack and VoiceOver walkthrough | A real device. Only the markup was checked here |
| Photo and video licensing (Facebook-style file names in `/images/zaghouan pictures/` and `/images/foyer/girls/`, such as `453060157_1672551733518874_…`) | Whoever took or posted the photos. The file names suggest Facebook downloads |
| Do the 19 Nov SEO changes lift /bourse CTR? | Search Console, 4–6 weeks from now |

## 7. Method

- **Source**: read `CLAUDE.md`, `design/design.md`, every file in `src/data`, `src/constants` and `src/lib/nav-search.ts`, `public/sw.js`, the manifest, `vercel.json`, the CI workflows, the analytics component and the privacy and about pages. Used `grep` across `src` for years, amounts, phone numbers, `localStorage`, `lang` / `dir` and disclaimers.
- **Build**: ran `npm run build` (exit 0, 33 static routes; `git status` unchanged afterwards) and inspected `dist/` (HTML sizes, links inside `<main>`, `lang` attributes, secrets scan).
- **Search test**: ran the palette's own `matchesNavLink` on 50 realistic queries through `tsx`. A temporary script was copied into `src/`, run once and deleted.
- **Live site**: `curl -I` for headers, the sitemap, a 404 probe and OG tags. curl link check of all 51 external URLs found in `src` (Android Chrome user agent, following redirects), with failures re-checked in the in-app browser.
- **Lighthouse 12** (repo `node_modules`), mobile preset (simulated slow 4G, 4× slower CPU), one run each on `/`, `/housing`, `/bourse`, `/clubs`, `/explore`, `/stages`, `/stages/companies` and `/transport` against https://guideisetzg.tn.
- **In-app browser** at 390×844 and 360×780: overflow, tap sizes, cookies set on first load, third-party requests, network and console.
- **Data**: `npm audit` (prod and full). GA and Search Console CSV exports in `analytics/` (1 Jan – 19 Nov 2026). Web search for the bourse amounts.
- **Not covered**: real Android, iPhone and Facebook in-app browser devices; screen-reader walkthroughs; 430 px width and 200% zoom (only 360 and 390 px were tested); full checks of the grade calculator, lightbox, carousel and theme toggle; re-running tsc, eslint, vitest, `check-contrast` and `check-offline` (stated as passing); multiple Lighthouse runs and a field CrUX comparison.
