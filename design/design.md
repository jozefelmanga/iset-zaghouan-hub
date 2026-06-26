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
| /explore | Explore Zaghouan | Study spots, cafés, attractions |
| /faq | FAQ | Common questions |

## Color Palette
- Primary: #0F766E (teal-700)
- Secondary: #14B8A6 (teal-500)
- Accent: #F59E0B (amber-500)
- Background: #F8FAFC (slate-50)
- Surface: #FFFFFF
- Text: #0F172A (slate-900)
- TextMuted: #64748B (slate-500)
- Border: #E2E8F0 (slate-200)
- Success: #22C55E
- Warning: #F59E0B
- Danger: #EF4444

## Typography
- Headings: Inter (bold), with Arabic fallback on system fonts
- Body: Inter (regular)
- Scale: text-xs to text-5xl, responsive

## Layout Rules
- Mobile-first: bottom nav on mobile, collapsible sidebar on desktop
- Max content width: 1280px centered
- Section padding: py-8 to py-16
- Card radius: rounded-xl (12px)
- Spacing: gap-4 to gap-6

## Shared Components
- Navbar: sticky top, logo + links, mobile hamburger
- Sidebar: desktop collapsible, icons + labels
- BottomNav: mobile-only, 5 icons
- Footer: links, social, credits
- Card: rounded-xl, shadow-sm, hover:shadow-md
- SectionHeader: icon + title + subtitle
- Stepper: horizontal steps with progress
- Tabs: shadcn/ui style
- Badge: status indicators
- Alert: dismissible banners

## Interaction Language
- Hover: scale-[1.02], shadow elevation, color transitions 200ms
- Focus: ring-2 ring-primary
- Active: scale-[0.98]
- Page transitions: fade + slight translateY
- Scroll: smooth scroll-behavior

## Dependencies
- next
- react, react-dom
- typescript
- tailwindcss
- framer-motion
- lucide-react
- next-intl
- leaflet, react-leaflet
- @types/leaflet

## Asset Manifest
- No custom images needed initially. Use Lucide icons throughout.
- Map tiles from OpenStreetMap via Leaflet.
- Future: hero illustration, campus photos, residence photos.

## i18n
- Default: Arabic (Tunisian dialect content preserved)
- Secondary: French
- Tertiary: English
- Use next-intl with JSON message files.
- Direction: RTL for Arabic, LTR for French/English.

## Responsive
- Mobile: < 640px, single column, bottom nav
- Tablet: 640px-1024px, 2 columns, sidebar
- Desktop: > 1024px, 3 columns, expanded sidebar

## Performance
- Server Components where possible
- Lazy load maps and heavy sections
- Static generation for content pages
- ISR for announcement banners
