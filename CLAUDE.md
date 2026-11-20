# Notes for AI assistants

Student guide for ISET Zaghouan (Next.js static export → `dist/`, live at
https://guideisetzg.tn). Most visitors are on phones: always check 390px width.

## Before you call a change done

```
npx tsc --noEmit
npx eslint src            # 8 `<img>` warnings are expected
npx vitest run
npm run build
npm run check-bundle      # homepage JS budget (scripts/bundle-baseline.json)
npm run check-contrast    # WCAG AA text contrast, every route, light + dark
```

`check-contrast` needs a fresh `npm run build`; add `-- light --detail` (or
`dark`) to list each failing element. It is at 0 failures in both themes —
keep it there.

## Gotchas

- **Don't run `npm run build` while `npm run dev` is running.** The build
  wipes `dist/`, which holds the dev server's cache, and dev crashes.
- **Mixed line endings** (some files CRLF, some LF). Keep each file's own
  endings; don't reformat whole files.
- **Never push** without asking the owner first.
- Don't bump `VERSION` in `public/sw.js` casually: it wipes visitors'
  offline caches.

## Colours and dark mode

- Dark mode follows the system (`@media (prefers-color-scheme: dark)` in
  `src/app/globals.css`) unless the visitor picks light/dark with the navbar
  button (`src/components/layout/ThemeToggle.tsx`: auto → light → dark, saved
  in `localStorage("theme")`, applied as `<html data-theme>` by a head script
  before paint). The dark tokens exist twice in `globals.css` (media block and
  `[data-theme="dark"]`): change both. Use the CSS variables, not hard-coded
  light colours.
- `--color-primary` turns light in dark mode (it's mostly heading text). For
  solid navy fills use `--color-primary-bg` or `--color-navy`.
- Brand colour as text/icon (e.g. `#12B8C8`) → `textTint("#12B8C8")` from
  `src/lib/utils.ts`. It darkens just enough in light mode and lightens in dark
  mode so contrast passes. Don't write raw brand hex as text colour.
- jsdom drops `color-mix()` values, so tests must not assert text colour on
  tinted elements.
- `.card-flat` / `.card-raised` / `.card-feature` are unlayered CSS and beat
  Tailwind utilities: override their padding/background/radius with `style`,
  not classes.

## Animation and JS size

- Decorative fades are CSS: `.motion-reveal`, `.section-reveal` (stagger with
  inline `animation-delay`) and `.card-lift` for hover. Don't bring back
  framer-motion `initial` / `whileInView` just for fades.
- framer-motion stays only where it does real work: collapsibles, tabs,
  carousel, drawers, lightbox.
- Components without state stay Server Components (no `"use client"`). They
  are listed in `src/test/server-components.test.ts`; add new ones there.
- Reduced motion is handled globally in `globals.css` and by `MotionConfig`
  in `MotionProvider.tsx`.
