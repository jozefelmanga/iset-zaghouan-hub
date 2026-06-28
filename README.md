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

## Internships (`/stages`)

Three related routes under **CAREER** in the sidebar:

| Route | Purpose |
|---|---|
| `/stages` | Main guide: 3-year progress tracker, stage details, FAQ, admin steps, deadlines, logos, SEG report examples, grade calculator |
| `/stages/companies` | Searchable company directory (~267 entries from `sociétés_final.xlsx`) |
| `/stages/pfe` | Dedicated Projet de Fin d'Études guide |

**Content** lives in `src/data/internships.ts`. **Company data** is generated at build time from `public/documents/stages/sociétés_final.xlsx` into `src/data/stage-companies.json`.

**Key components:** `StagesPageContent`, `InternshipTimeline`, `InternshipGradeCalculator`, `InternshipCompanySearch` — responsive layout via `stages.module.css`.

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
