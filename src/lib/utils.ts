/**
 * Utility Helpers — General-purpose functions used across the project.
 *
 * Rules:
 *  - Keep functions pure (no side effects) unless absolutely necessary.
 *  - Do NOT import from components here — this is a leaf module.
 *  - Add a JSDoc comment for every exported function.
 */

/* ============================================================
   CLASS MERGING
   ============================================================ */

/**
 * Merge class name strings, filtering out falsy values.
 * Lightweight alternative to clsx/cn for this project's scale.
 *
 * @example cn("card-raised", isActive && "active", className)
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}

/* ============================================================
   STRING HELPERS
   ============================================================ */

/**
 * Truncate a string to `maxLen` characters, appending "..." if cut.
 */
export function truncate(str: string, maxLen: number): string {
  if (str.length <= maxLen) return str;
  return str.slice(0, maxLen - 3) + "...";
}

/**
 * Capitalize the first letter of a string.
 */
export function capitalize(str: string): string {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/* ============================================================
   URL / NAVIGATION HELPERS
   ============================================================ */

/**
 * Check if a given pathname is active for a nav link href.
 * Handles exact match for "/" and prefix match for sub-paths.
 */
export function isNavActive(href: string, pathname: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

/**
 * Build an absolute URL from a path, safely handling leading slashes.
 */
export function buildPath(...segments: string[]): string {
  return (
    "/" +
    segments
      .map((s) => s.replace(/^\/|\/$/g, ""))
      .filter(Boolean)
      .join("/")
  );
}

/* ============================================================
   FORMATTING HELPERS
   ============================================================ */

/**
 * Format a number with locale-appropriate thousands separators.
 * @example formatNumber(1234) → "1,234"
 */
export function formatNumber(n: number): string {
  return n.toLocaleString();
}

/**
 * Pad a number to a fixed width with leading zeros.
 * @example padNumber(3, 2) → "03"
 */
export function padNumber(n: number, width = 2): string {
  return String(n).padStart(width, "0");
}

/* ============================================================
   ARRAY HELPERS
   ============================================================ */

/**
 * Chunk an array into groups of `size`.
 * @example chunk([1,2,3,4,5], 2) → [[1,2],[3,4],[5]]
 */
export function chunk<T>(arr: T[], size: number): T[][] {
  const result: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

/**
 * Return a new array with unique values (by reference equality).
 */
export function unique<T>(arr: T[]): T[] {
  return [...new Set(arr)];
}

/* ============================================================
   STYLE HELPERS
   ============================================================ */

/**
 * Convert a hex color string to an rgba string with the given opacity.
 * @example hexToRgba("#12B8C8", 0.1) → "rgba(18, 184, 200, 0.1)"
 */
export function hexToRgba(hex: string, alpha: number): string {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) return hex;
  const r = parseInt(result[1], 16);
  const g = parseInt(result[2], 16);
  const b = parseInt(result[3], 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

/**
 * Clamp a number between min and max.
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

/* ============================================================
   ENVIRONMENT HELPERS
   ============================================================ */

/** Returns true if running in a browser context. */
export const isBrowser = typeof window !== "undefined";
