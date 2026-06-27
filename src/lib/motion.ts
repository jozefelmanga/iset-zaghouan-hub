/**
 * Motion Presets — Reusable Framer Motion variant definitions.
 *
 * Rules:
 *  - Every animated component should import its variants from here.
 *  - Do NOT define new animation objects inline inside components.
 *  - Add new presets here when a pattern repeats more than twice.
 */

import type { Variants, Transition } from "framer-motion";

/* ============================================================
   SHARED TRANSITIONS
   ============================================================ */
export const transitions = {
  ease: { duration: 0.4, ease: "easeOut" } satisfies Transition,
  spring: { type: "spring", damping: 28, stiffness: 300 } satisfies Transition,
  fast:  { duration: 0.2, ease: "easeOut" } satisfies Transition,
  slow:  { duration: 0.6, ease: [0.16, 1, 0.3, 1] } satisfies Transition,
} as const;

/* ============================================================
   FADE VARIANTS
   ============================================================ */
export const fadeIn: Variants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4 } },
  exit:    { opacity: 0, transition: { duration: 0.2 } },
};

export const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0,  transition: { duration: 0.55, ease: "easeOut" } },
  exit:    { opacity: 0, y: 12, transition: { duration: 0.25 } },
};

export const fadeDown: Variants = {
  hidden:  { opacity: 0, y: -16 },
  visible: { opacity: 1, y: 0,   transition: { duration: 0.4, ease: "easeOut" } },
  exit:    { opacity: 0, y: -8,  transition: { duration: 0.2 } },
};

/* ============================================================
   SCALE VARIANTS
   ============================================================ */
export const scaleIn: Variants = {
  hidden:  { opacity: 0, scale: 0.94 },
  visible: { opacity: 1, scale: 1,    transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } },
  exit:    { opacity: 0, scale: 0.96, transition: { duration: 0.2 } },
};

export const scaleInCenter: Variants = {
  hidden:  { opacity: 0, scale: 0.6 },
  visible: { opacity: 1, scale: 1,   transition: { type: "spring", damping: 20, stiffness: 300 } },
  exit:    { opacity: 0, scale: 0.8, transition: { duration: 0.15 } },
};

/* ============================================================
   SLIDE VARIANTS
   ============================================================ */
export const slideLeft: Variants = {
  hidden:  { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0,   transition: { duration: 0.4, ease: "easeOut" } },
  exit:    { opacity: 0, x: -12, transition: { duration: 0.2 } },
};

export const slideRight: Variants = {
  hidden:  { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0,  transition: { duration: 0.4, ease: "easeOut" } },
  exit:    { opacity: 0, x: 12, transition: { duration: 0.2 } },
};

export const slideUp: Variants = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0,  transition: { duration: 0.4, ease: "easeOut" } },
  exit:    { opacity: 0, y: 12, transition: { duration: 0.2 } },
};

/* ============================================================
   STAGGER CONTAINER — wrap a list of staggerItem children
   ============================================================ */
export const staggerContainer: Variants = {
  hidden:  { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.05,
    },
  },
};

export const staggerItem: Variants = {
  hidden:  { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

/* ============================================================
   PAGE TRANSITION — legacy preset (removed from layout; kept for reference)
   ============================================================ */
export const pageTransition = {
  initial:   { opacity: 0, y: 12 },
  animate:   { opacity: 1, y: 0  },
  transition: { duration: 0.4, ease: "easeOut" },
} as const;

/* ============================================================
   DRAWER / MODAL ENTER
   ============================================================ */
export const drawerFromRight: Variants = {
  hidden:  { x: 320, opacity: 0 },
  visible: { x: 0,   opacity: 1, transition: { type: "spring", damping: 28, stiffness: 300 } },
  exit:    { x: 320, opacity: 0, transition: { duration: 0.25, ease: "easeIn" } },
};

export const backdrop: Variants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.25 } },
  exit:    { opacity: 0, transition: { duration: 0.2 } },
};

/* ============================================================
   HOVER PRESETS — for whileHover / whileTap props
   ============================================================ */
export const hoverLift = {
  whileHover: { y: -6, scale: 1.02 },
  whileTap:   { scale: 0.98 },
  transition: { duration: 0.25, ease: "easeOut" },
} as const;

export const hoverScale = {
  whileHover: { scale: 1.04 },
  whileTap:   { scale: 0.97 },
  transition: { duration: 0.2 },
} as const;

export const hoverSubtle = {
  whileHover: { y: -2 },
  whileTap:   { scale: 0.98 },
  transition: { duration: 0.2, ease: "easeOut" },
} as const;

export const tapOnly = {
  whileTap: { scale: 0.95 },
} as const;

/* ============================================================
   SECTION WRAPPER PRESET — scroll-triggered reveal
   ============================================================ */
export const sectionReveal = {
  initial:   { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport:  { once: true, margin: "-60px" },
  transition: { duration: 0.55, ease: "easeOut" },
} as const;

/* ============================================================
   ITEM REVEAL — for single items inside sections
   ============================================================ */
export function itemReveal(delay = 0) {
  return {
    initial:     { opacity: 0, y: 16 },
    whileInView: { opacity: 1, y: 0  },
    viewport:    { once: true },
    transition:  { delay, duration: 0.4, ease: "easeOut" },
  } as const;
}

/* ============================================================
   ENTER ANIMATION — for components that animate on mount
   ============================================================ */
export function enterAnimation(delay = 0) {
  return {
    initial:    { opacity: 0, y: 20 },
    animate:    { opacity: 1, y: 0  },
    transition: { delay, duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  } as const;
}
