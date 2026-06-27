/**
 * Design Token Registry — Single source of truth for all visual constants.
 *
 * Rules:
 *  - Every value here must mirror a CSS variable in globals.css (@theme block).
 *  - No component should hardcode these values directly; import from here instead.
 *  - When adding a new token, add it in BOTH this file AND globals.css.
 */

/* ============================================================
   COLORS
   ============================================================ */
export const colors = {
  // Core palette
  primary:    "#0B1F3A",
  secondary:  "#12B8C8",
  accent:     "#F6B41B",
  background: "#F7F9FC",
  surface:    "#FFFFFF",
  border:     "#E8EDF4",

  // Text
  text:          "#10213A",
  textSecondary: "#5F708A",
  textMuted:     "#8895A7",
  textWhite:     "#FFFFFF",

  // Semantic
  success: "#22C55E",
  warning: "#F6B41B",
  danger:  "#EF4444",
  info:    "#12B8C8",

  // Category (action cards, badges, nav groups)
  academic: "#3B82F6",
  career:   "#8B5CF6",
  life:     "#12B8C8",
  campus:   "#F97316",
} as const;

/* ============================================================
   CATEGORY CONFIG
   Centralises the per-category color triplets used across
   ActionCard, PageHeader, Sidebar groups, and CommandPalette.
   ============================================================ */
export const categoryConfig = {
  academic: {
    color:  colors.academic,
    bg:     "rgba(59,130,246,0.08)",
    border: "rgba(59,130,246,0.15)",
  },
  career: {
    color:  colors.career,
    bg:     "rgba(139,92,246,0.08)",
    border: "rgba(139,92,246,0.15)",
  },
  life: {
    color:  colors.life,
    bg:     "rgba(18,184,200,0.08)",
    border: "rgba(18,184,200,0.15)",
  },
  campus: {
    color:  colors.campus,
    bg:     "rgba(249,115,22,0.08)",
    border: "rgba(249,115,22,0.15)",
  },
  primary: {
    color:  colors.primary,
    bg:     "rgba(11,31,58,0.06)",
    border: "rgba(11,31,58,0.12)",
  },
} as const;

export type CategoryKey = keyof typeof categoryConfig;

/* ============================================================
   SPACING
   ============================================================ */
export const spacing = {
  xs:   "4px",
  sm:   "8px",
  md:   "16px",
  lg:   "24px",
  xl:   "32px",
  "2xl": "48px",
  "3xl": "64px",
  "4xl": "96px",
} as const;

/* ============================================================
   BORDER RADIUS
   ============================================================ */
export const radius = {
  card:   "20px",
  button: "14px",
  search: "18px",
  input:  "14px",
  image:  "24px",
  pill:   "999px",
  sm:     "8px",
  md:     "12px",
} as const;

/* ============================================================
   SHADOWS
   ============================================================ */
export const shadows = {
  soft:  "0 10px 30px rgba(15, 23, 42, 0.06)",
  hover: "0 18px 50px rgba(15, 23, 42, 0.10)",
  card:  "0 2px 8px rgba(15, 23, 42, 0.04), 0 10px 30px rgba(15, 23, 42, 0.06)",
  nav:   "0 4px 24px rgba(11, 31, 58, 0.18)",
  fab:   "0 8px 32px rgba(11, 31, 58, 0.22)",
} as const;

/* ============================================================
   TRANSITIONS
   ============================================================ */
export const transitions = {
  fast: "150ms ease",
  base: "250ms ease",
  slow: "400ms ease",
} as const;

/* ============================================================
   CONTAINER WIDTHS
   ============================================================ */
export const containers = {
  wide:    "1400px",
  content: "1280px",
  narrow:  "860px",
  text:    "640px",
} as const;

/* ============================================================
   Z-INDEX SCALE
   ============================================================ */
export const zIndex = {
  base:        0,
  card:       10,
  sticky:     40,
  nav:        50,
  overlay:   100,
  drawer:    200,
  modal:     300,
  toast:     400,
  tooltip:   500,
} as const;

/* ============================================================
   ANIMATION DURATIONS (in ms — for JS usage alongside CSS)
   ============================================================ */
export const durations = {
  fast:   150,
  base:   250,
  slow:   400,
  page:   400,
  enter:  550,
  spring: 600,
} as const;

/* ============================================================
   BREAKPOINTS (px values for use in JS where CSS isn't enough)
   ============================================================ */
export const breakpoints = {
  mobile: 640,
  tablet: 768,
  laptop: 1024,
  desktop: 1280,
} as const;
