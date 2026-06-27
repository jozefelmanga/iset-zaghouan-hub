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
npm run test     # Run Vitest data validation tests
npm run lint     # ESLint
```

## Project structure

```
src/
  app/           # Route pages (Server Components)
  components/    # UI, layout, domain sections
  constants/     # Navigation (single source of truth)
  data/          # Content arrays — no hardcoded copy in pages
  lib/           # theme, motion, icons, utils
```

## Deployment

The app uses `output: 'export'` — deploy the `dist/` folder to any static host (Vercel, Netlify, GitHub Pages, etc.).

## Planned

- **Phase 5** — French UI shell (`next-intl`)
- **Phase 7** — Vitest data validation (in progress)

See `design/design.md` for the full product spec.
