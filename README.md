# ISET Zaghouan Hub

Student onboarding guide for new students at **ISET Zaghouan** (Tunisia). A mobile-first Next.js app with Tunisian Arabic content covering enrollment, housing, transport, scholarships, internships, clubs, and campus life.

## Stack

- **Next.js 16** (App Router, static export)
- **React 19** + **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion** + **Lucide React**

## Scripts

```bash
npm run dev      # Start dev server
npm run build    # Static production build → dist/
npm run start    # Serve production build
npm run test     # Run Vitest (data validation + component tests)
npm run lint     # ESLint
```

## Project structure

```
src/
  app/           # Route pages (Server Components)
  components/    # UI, layout, domain sections
    stages/      # Internship timeline, calculator, company search
  constants/     # Navigation, SEO (single source of truth)
  data/          # Content arrays — no hardcoded copy in pages
  lib/           # theme, motion, icons, utils
  types/         # Shared TypeScript types
public/
  documents/stages/   # Official xlsx (companies), logos, report assets
scripts/
  generate-stage-companies.mjs   # xlsx → stage-companies.json (runs on prebuild)
  generate-stage-logos.mjs
  generate-llms.ts
```

## Key Features & Routes

The platform is divided into four main pillars to cover every aspect of a student's journey:

### 🎓 Academics
- **`/inscription` & `/inscription/foyer`**: Step-by-step guides for university and dorm enrollment, including required paperwork and timelines.
- **`/library`**: Access to academic resources, references, and past exams.
- **`/departments`**: Detailed overviews of the IT (TI), Economics & Management (SEG), and Process Engineering (GPR) departments.
- **`/masters`**: Information on available Master's degree programs at the institute.

### 🌟 Student Life
- **`/housing` & `/resto`**: Comprehensive details on dormitories (Foyer) and the university restaurant, including meal times and procedures.
- **`/bourse`**: Information on full scholarships and integration grants.
- **`/transport`**: Practical commuting guides, louage/bus station locations, and pricing from surrounding cities.
- **`/clubs`**: Showcases active student organizations (SecuriNets, Enactus, Robotique, IEEE, etc.), their activities, achievements, and integration events.

### 💼 Career & Internships (`/stages`)
- **`/stages`**: 3-year internship progress tracker, admin steps, deadlines, report templates, and grade calculators.
- **`/stages/companies`**: Searchable company directory (~267 entries generated from official data).
- **`/stages/pfe`**: Dedicated Projet de Fin d'Études (PFE) guide.
*(Content lives in `src/data/internships.ts`. Company data is generated via `node scripts/generate-stage-companies.mjs`)*

### 🗺️ Campus & City
- **`/explore`**: A guide to discovering Zaghouan, featuring study spots, cafes, a photo gallery, and local mountain guide contacts.
- **`/faq`**: Answers to the most frequently asked questions by new students.
- **`/bonus`**: Special tips for newcomers and acknowledgments to contributors.
- **`/about`**: Information about the platform's mission and development.

To refresh company data after updating the xlsx:

```bash
node scripts/generate-stage-companies.mjs
```

## Deployment

The app uses `output: 'export'` — deploy the `dist/` folder to any static host (Vercel, Netlify, GitHub Pages, etc.).

Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SITE_URL` to your production domain (canonical URLs, sitemap, Open Graph).

Optional: set `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` to enable privacy-friendly analytics.

**LLM discovery:** `/llms.txt` and `/llms-full.txt` (auto-generated via `npm run generate-llms` from SEO constants).

See `design/design.md` for the full product spec.
