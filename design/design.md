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
| /stages | Internships | 3-year timeline, Didosoft guide |
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
- vitest (dev — data validation tests)

## Asset Manifest
- Lucide icons throughout
- Campus/club photos in `public/images/`
- YouTube embeds for explore and external resources

## i18n (planned — Phase 5)
- Default: Arabic (Tunisian dialect content preserved)
- Secondary: French UI shell (navbar, footer, page titles)
- `next-intl` with JSON message files — not yet implemented

## Responsive
- Mobile: < 640px, single column, bottom nav
- Tablet: 640px–1024px, 2 columns, sidebar
- Desktop: > 1024px, expanded sidebar

## Performance (implemented)
- Server Components on all route pages
- Static export (`output: 'export'`, `distDir: 'dist'`)
- Client islands only for interactivity (tabs, calculators, galleries, motion)
