# ISET Zaghouan Student Hub - Design Spec

## Product Concept
An interactive onboarding platform for new students at ISET Zaghouan (Tunisia). Converts a long Tunisian-Arabic guide into structured, searchable, mobile-first experiences.

## Target User
New ISET Zaghouan students (ages 18-22), primarily Tunisian Arabic speakers, also comfortable with French. Need quick answers about enrollment, housing, transport, scholarships, internships, and campus life.

## Page List
| Route | Purpose | Key Feature |
|---|---|---|
| / | Home / Dashboard | Hero, quick actions, announcements |
| /inscription | Enrollment Guide | Interactive stepper with progress |
| /housing | Student Housing | Tabs for Foyer (girls) vs Louled (boys) |
| /bourse | Scholarships | Eligibility calculator |
| /resto | Restaurant | Hours, menus, tips |
| /transport | Transportation | Schedules, fares, contacts |
| /stages | Internships (main) | 3-year progress tracker, per-stage details, FAQ, admin steps, deadline calendar, report logos, SEG examples (Google Drive), grade calculator |
| /stages/companies | Company directory | Search/filter by name, city, address; sourced from official xlsx |
| /stages/pfe | PFE guide | Projet de Fin d'Études: planning, rapport, présentation, soutenance |
| /library | Library | Info, resources |
| /clubs | Clubs | Directory, benefits |
| /masters | Masters | Departments |
| /explore | Explore Zaghouan | Study spots, cafés, mountain guide, gallery |
| /faq | FAQ | Common questions |
| /departments | Departments | TI, SEG, GPR listing |
| /bonus | Tips & credits | Extra student tips |

## Color Palette (implemented in `src/lib/theme.ts`)
- Primary: #0B1F3A
- Secondary: #12B8C8
- Accent: #F6B41B
- Background: #F7F9FC
- Surface: #FFFFFF
- Text: #10213A
- TextMuted: #8895A7
- Border: #E8EDF4
- Success: #22C55E
- Warning: #F6B41B
- Danger: #EF4444

## Typography
- Headings: Inter (bold), with Arabic fallback on system fonts
- Body: Inter (regular)
- Scale: text-xs to text-5xl, responsive
- Direction: RTL (Arabic content)

## Layout Rules
- Mobile-first: bottom nav on mobile, collapsible sidebar on desktop
- Max content width: 1280px centered
- Section padding: py-8 to py-16
- Card radius: 20px (`--radius-card`)
- Spacing: gap-4 to gap-6

## Internships module (`/stages`)

### Routes
- **`/stages`** — hub page with year selector, interactive timeline details, general FAQ, administrative steps, combined deadline calendar (all 3 stages), downloadable presentation logos, SEG example reports link, job-search tips, vocabulary, grade calculator, ISET contact info, common mistakes, quick links
- **`/stages/companies`** — standalone searchable directory; data from `public/documents/stages/sociétés_final.xlsx`, built to `src/data/stage-companies.json` via `scripts/generate-stage-companies.mjs`
- **`/stages/pfe`** — focused PFE checklist and guidance

### Navigation
Sidebar **CAREER** group: الستاجات → دليل الشركات → دليل PFE. Same links in the command palette (`allNavLinks`).

### Data files
| File | Role |
|---|---|
| `src/data/internships.ts` | Stage metadata, FAQ, admin steps, vocabulary, mistakes, resources |
| `src/data/stage-companies.json` | Generated company list (do not edit by hand) |
| `src/data/stage-companies.ts` | Typed export + count |
| `public/documents/stages/sociétés_final.xlsx` | Source of truth for companies |

### Components (`src/components/stages/`)
- `StagesPageContent` — main `/stages` client UI
- `InternshipTimeline` — year details, workload grid, per-year FAQ
- `InternshipGradeCalculator` — live average: (PFE×10 + perfectionnement×2.5 + initiation×2.5) ÷ 15
- `InternshipCompanySearch` — search, city filters, pagination
- `DownloadButton` — asset downloads with count
- `stages.module.css` — mobile-first responsive grids and card padding

### Responsive (stages)
- Breakpoint aligned with site: **768px**
- Mobile: stacked year pills, 2-column deadline grid, single-column vocab/logos/links, full-width CTAs
- Desktop: horizontal timeline card, 6-column deadline calendar

## Shared Components
- Sidebar: desktop collapsible, icons + labels
- BottomNav: mobile-only, 5 icons
- Footer: links, social, credits
- Card, SectionHeader, StaticPageHeader
- CommandPalette: global search
- MotionReveal: thin Framer Motion wrapper for SC pages

## Interaction Language
- Hover: scale, shadow elevation, color transitions 250ms
- Focus: ring-2 ring-primary
- Active: scale-[0.98]
- Page transitions: fade + slight translateY
- Scroll: smooth scroll-behavior

## Dependencies (current)
- next, react, react-dom, typescript
- tailwindcss v4, framer-motion, lucide-react
- xlsx (dev — parse company xlsx on prebuild)
- vitest (dev — data validation tests)

## Asset Manifest
- Lucide icons throughout
- Campus/club photos in `public/images/`
- Stage logos and company xlsx in `public/documents/stages/`
- YouTube embeds for explore and external resources

## Responsive
- Mobile: < 768px, single column, bottom nav, reduced card padding on stages
- Tablet: 768px–1024px, 2 columns where applicable, sidebar
- Desktop: > 1024px, expanded sidebar

## Performance (implemented)
- Server Components on all route pages
- Static export (`output: 'export'`, `distDir: 'dist'`)
- Client islands only for interactivity (tabs, calculators, galleries, motion)
