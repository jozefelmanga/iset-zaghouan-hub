/**
 * Layout Primitives — Composable wrapper components that enforce consistent
 * spacing, widths, and responsive behaviour across every page.
 *
 * These are SERVER COMPONENT-safe (no "use client" needed).
 *
 * Components:
 *   Container   — max-width + horizontal padding
 *   PageWrapper — full-page vertical layout (padding-top, padding-bottom)
 *   Section     — scroll-triggered animated section block
 *   Stack       — vertical flex column with consistent gap
 *   Grid        — responsive CSS grid
 *   Divider     — horizontal rule with optional label
 */

import type { ReactNode, CSSProperties } from "react";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import type { PagePath } from "@/constants/seo";
import { cn } from "@/lib/utils";

/* ============================================================
   CONTAINER
   Enforces max-width and horizontal gutter padding.
   Use `size` to pick the appropriate content width.
   ============================================================ */
interface ContainerProps {
  children: ReactNode;
  size?: "wide" | "content" | "narrow" | "text";
  className?: string;
  style?: CSSProperties;
}

const containerWidths: Record<NonNullable<ContainerProps["size"]>, string> = {
  wide:    "max-w-[1400px]",
  content: "max-w-[1280px]",
  narrow:  "max-w-[860px]",
  text:    "max-w-[640px]",
};

export function Container({ children, size = "content", className, style }: ContainerProps) {
  return (
    <div
      className={cn(
        containerWidths[size],
        "mx-auto w-full px-4 md:px-8",
        className
      )}
      style={style}
    >
      {children}
    </div>
  );
}

/* ============================================================
   PAGE WRAPPER
   Standard vertical padding for inner page content.
   Wrap the entire page body (below the PageHeader) in this.
   ============================================================ */
interface PageWrapperProps {
  children: ReactNode;
  className?: string;
  narrow?: boolean;
  /** When set, emits BreadcrumbList JSON-LD for this route. */
  seoPath?: PagePath;
}

export function PageWrapper({ children, className, narrow = false, seoPath }: PageWrapperProps) {
  return (
    <>
      {seoPath ? <BreadcrumbJsonLd path={seoPath} /> : null}
      <div
        className={cn(
          narrow ? "max-w-[860px]" : "max-w-[1280px]",
          "mx-auto w-full px-4 md:px-8",
          "py-6 md:py-10",
          className
        )}
      >
        {children}
      </div>
    </>
  );
}

/* ============================================================
   FULL BLEED
   Breaks out of a padded container to span the full viewport.
   Uses margin-inline so it works in both LTR and RTL layouts.
   ============================================================ */
interface FullBleedProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export function FullBleed({ children, className, style }: FullBleedProps) {
  return (
    <div
      className={cn("full-bleed relative overflow-hidden", className)}
      style={style}
    >
      {children}
    </div>
  );
}

/* ============================================================
   STACK
   Vertical flex column with a consistent gap between children.
   ============================================================ */
interface StackProps {
  children: ReactNode;
  gap?: "xs" | "sm" | "md" | "lg" | "xl";
  className?: string;
  style?: CSSProperties;
}

const stackGaps: Record<NonNullable<StackProps["gap"]>, string> = {
  xs: "gap-1",
  sm: "gap-2",
  md: "gap-4",
  lg: "gap-6",
  xl: "gap-8",
};

export function Stack({ children, gap = "md", className, style }: StackProps) {
  return (
    <div
      className={cn("flex flex-col", stackGaps[gap], className)}
      style={style}
    >
      {children}
    </div>
  );
}

/* ============================================================
   GRID
   Responsive CSS grid with auto-fill columns.
   ============================================================ */
interface GridProps {
  children: ReactNode;
  cols?: 1 | 2 | 3 | 4;
  gap?: "sm" | "md" | "lg";
  className?: string;
  style?: CSSProperties;
  minColWidth?: string;
}

const gridGaps: Record<NonNullable<GridProps["gap"]>, string> = {
  sm: "gap-3",
  md: "gap-5",
  lg: "gap-6",
};

export function Grid({ children, gap = "md", className, style, minColWidth = "280px" }: GridProps) {
  return (
    <div
      className={cn("w-full", gridGaps[gap], className)}
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(auto-fill, minmax(${minColWidth}, 1fr))`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

/* ============================================================
   DIVIDER
   A horizontal rule, optionally with a centered label.
   ============================================================ */
interface DividerProps {
  label?: string;
  className?: string;
}

export function Divider({ label, className }: DividerProps) {
  if (!label) {
    return (
      <hr
        className={cn("border-t w-full", className)}
        style={{ borderColor: "var(--color-border)" }}
      />
    );
  }

  return (
    <div className={cn("flex items-center gap-4", className)}>
      <div className="flex-1 border-t" style={{ borderColor: "var(--color-border)" }} />
      <span
        className="text-xs font-semibold tracking-widest uppercase"
        style={{ color: "var(--color-text-muted)" }}
      >
        {label}
      </span>
      <div className="flex-1 border-t" style={{ borderColor: "var(--color-border)" }} />
    </div>
  );
}
