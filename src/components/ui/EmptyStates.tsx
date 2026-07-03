"use client";

/**
 * Empty State Components — Configurable placeholder UI for:
 *   EmptyState   — generic empty list/content state
 *   NoResults    — search with no matches
 *   ComingSoon   — page or feature under construction
 *   ErrorState   — error boundary fallback UI
 *
 * All accept an optional `action` slot for a CTA button.
 */

import { motion } from "framer-motion";
import { enterAnimation } from "@/lib/motion";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

/* ============================================================
   BASE EMPTY STATE
   ============================================================ */
interface EmptyStateProps {
  emoji?: string;
  title: string;
  description?: string;
  action?: ReactNode;
  className?: string;
}

export function EmptyState({
  emoji = "📂",
  title,
  description,
  action,
  className,
}: EmptyStateProps) {
  return (
    <motion.div
      {...enterAnimation(0)}
      className={cn("flex flex-col items-center justify-center text-center py-16 px-6", className)}
    >
      <div className="text-5xl mb-4" aria-hidden="true">{emoji}</div>
      <h3
        className="font-semibold text-lg mb-2"
        style={{ color: "var(--color-text)" }}
      >
        {title}
      </h3>
      {description && (
        <p
          className="text-sm leading-relaxed max-w-xs"
          style={{ color: "var(--color-text-muted)" }}
        >
          {description}
        </p>
      )}
      {action && <div className="mt-6">{action}</div>}
    </motion.div>
  );
}

/* ============================================================
   NO RESULTS — for search / filter contexts
   ============================================================ */
interface NoResultsProps {
  query?: string;
  action?: ReactNode;
  className?: string;
}

export function NoResults({ query, action, className }: NoResultsProps) {
  return (
    <EmptyState
      emoji="🔍"
      title={query ? `ما لقيناش نتائج لـ "${query}"` : "ما لقيناش نتائج"}
      description="جرب كلمة بحث أخرى أو تصفح الأقسام يدوياً."
      action={action}
      className={className}
    />
  );
}

/* ============================================================
   COMING SOON — for pages/features under construction
   ============================================================ */
interface ComingSoonProps {
  title?: string;
  description?: string;
  action?: ReactNode;
  className?: string;
}

export function ComingSoon({
  title = "قريباً",
  description = "هذه الصفحة تحت الإنشاء. ارجع بعد شوية!",
  action,
  className,
}: ComingSoonProps) {
  return (
    <motion.div
      {...enterAnimation(0)}
      className={cn(
        "flex flex-col items-center justify-center text-center",
        "min-h-[50vh] px-6",
        className
      )}
    >
      {/* Animated icon */}
      <motion.div
        className="text-6xl mb-6"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      >
        🚧
      </motion.div>

      {/* Badge */}
      <span
        className="section-label mb-4"
        style={{ color: "var(--color-accent)" }}
      >
        تحت الإنشاء
      </span>

      <h2
        className="font-bold text-2xl mb-3"
        style={{ color: "var(--color-text)" }}
      >
        {title}
      </h2>

      <p
        className="text-sm leading-relaxed max-w-sm"
        style={{ color: "var(--color-text-secondary)" }}
      >
        {description}
      </p>

      {action && <div className="mt-8">{action}</div>}

      {/* Decorative dots */}
      <div className="flex gap-2 mt-8" aria-hidden="true">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-2 h-2 rounded-full"
            style={{ background: "var(--color-border)" }}
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
          />
        ))}
      </div>
    </motion.div>
  );
}

/* ============================================================
   ERROR STATE — for error boundary / fetch failure
   ============================================================ */
interface ErrorStateProps {
  title?: string;
  description?: string;
  action?: ReactNode;
  className?: string;
}

export function ErrorState({
  title = "صرا شي خطأ",
  description = "في مشكل في تحميل الصفحة. حاول مرة أخرى.",
  action,
  className,
}: ErrorStateProps) {
  return (
    <EmptyState
      emoji="⚠️"
      title={title}
      description={description}
      action={action}
      className={className}
    />
  );
}
