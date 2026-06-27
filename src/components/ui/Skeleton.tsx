/**
 * Skeleton Components — Loading placeholder UI that replaces spinners.
 *
 * All skeletons use the .shimmer CSS utility class from globals.css.
 * They are composable: combine primitives to match any layout.
 *
 * Components:
 *   SkeletonBox      — generic rectangle placeholder
 *   SkeletonText     — a line of text width
 *   SkeletonCard     — standard card-shaped placeholder
 *   CardSkeleton     — full action/info card skeleton
 *   PageSkeleton     — full-page loading state
 *   GridSkeleton     — auto-fill grid of card skeletons
 *   ListSkeleton     — vertical list of row skeletons
 *   HeroSkeleton     — hero banner placeholder
 */

import { cn } from "@/lib/utils";

/* ============================================================
   BOX — base primitive, everything else builds on this
   ============================================================ */
interface SkeletonBoxProps {
  width?: string;
  height?: string;
  rounded?: string;
  className?: string;
}

export function SkeletonBox({
  width = "100%",
  height = "16px",
  rounded = "8px",
  className,
}: SkeletonBoxProps) {
  return (
    <div
      className={cn("shimmer", className)}
      style={{ width, height, borderRadius: rounded }}
      aria-hidden="true"
    />
  );
}

/* ============================================================
   TEXT LINE — simulates a paragraph text row
   ============================================================ */
export function SkeletonText({ width = "100%", className }: { width?: string; className?: string }) {
  return (
    <SkeletonBox width={width} height="14px" rounded="6px" className={className} />
  );
}

/* ============================================================
   CARD SKELETON — placeholder for a raised content card
   ============================================================ */
export function CardSkeleton({ className }: { className?: string }) {
  return (
    <div
      className={cn("card-raised", className)}
      style={{ padding: "24px" }}
      aria-hidden="true"
    >
      {/* Icon circle */}
      <SkeletonBox width="48px" height="48px" rounded="50%" className="mb-4" />
      {/* Title */}
      <SkeletonText width="60%" className="mb-2" />
      {/* Description lines */}
      <SkeletonText width="90%" className="mb-1" />
      <SkeletonText width="75%" />
    </div>
  );
}

/* ============================================================
   GRID SKELETON — auto-fill grid of card skeletons
   ============================================================ */
export function GridSkeleton({
  count = 6,
  minColWidth = "260px",
}: {
  count?: number;
  minColWidth?: string;
}) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(auto-fill, minmax(${minColWidth}, 1fr))`,
        gap: "20px",
      }}
      aria-label="تحميل..."
      role="status"
    >
      {Array.from({ length: count }).map((_, i) => (
        <CardSkeleton key={i} />
      ))}
    </div>
  );
}

/* ============================================================
   LIST SKELETON — vertical rows (for FAQ, timeline, etc.)
   ============================================================ */
export function ListSkeleton({ count = 5 }: { count?: number }) {
  return (
    <div className="flex flex-col gap-3" role="status" aria-label="تحميل...">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="card-flat"
          style={{ padding: "16px 20px", display: "flex", alignItems: "center", gap: "14px" }}
          aria-hidden="true"
        >
          <SkeletonBox width="36px" height="36px" rounded="50%" />
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "6px" }}>
            <SkeletonText width="50%" />
            <SkeletonText width="75%" />
          </div>
        </div>
      ))}
    </div>
  );
}

/* ============================================================
   HERO SKELETON — placeholder for the hero banner
   ============================================================ */
export function HeroSkeleton() {
  return (
    <div
      className="shimmer"
      style={{ minHeight: "65vh", borderRadius: 0 }}
      role="status"
      aria-label="تحميل الصفحة..."
    />
  );
}

/* ============================================================
   PAGE SKELETON — full-page loading state
   ============================================================ */
export function PageSkeleton() {
  return (
    <div style={{ maxWidth: "860px", margin: "0 auto", padding: "40px 24px" }} aria-label="تحميل...">
      {/* Page header */}
      <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "32px" }}>
        <SkeletonBox width="56px" height="56px" rounded="50%" />
        <div style={{ flex: 1 }}>
          <SkeletonBox width="120px" height="11px" rounded="4px" className="mb-2" />
          <SkeletonBox width="220px" height="28px" rounded="8px" className="mb-2" />
          <SkeletonText width="340px" />
        </div>
      </div>
      {/* Content cards */}
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="card-raised" style={{ padding: "24px" }} aria-hidden="true">
            <SkeletonText width="40%" className="mb-3" />
            <SkeletonText width="90%" className="mb-1" />
            <SkeletonText width="80%" className="mb-1" />
            <SkeletonText width="60%" />
          </div>
        ))}
      </div>
    </div>
  );
}
