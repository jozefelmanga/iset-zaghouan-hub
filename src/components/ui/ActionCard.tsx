"use client";

import { m as motion } from "framer-motion";
import { ArrowLeft } from "@/lib/icons";
import { hoverLift } from "@/lib/motion";
import { categoryConfig } from "@/lib/theme";
import type { Category } from "@/types";
import type { LucideIcon } from "@/lib/icons";

interface ActionCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  category?: Category;
  featured?: boolean;
}

export function ActionCard({ icon: Icon, title, description, href, category = "primary", featured }: ActionCardProps) {
  const colors = categoryConfig[category] || categoryConfig.primary;

  return (
    <motion.a
      href={href}
      {...hoverLift}
      className={`group flex h-full flex-col no-underline ${
        featured ? "p-3.5 sm:p-8" : "p-3.5 sm:p-6"
      }`}
      style={{
        background: "var(--color-surface)",
        borderRadius: "var(--radius-card)",
        border: `1px solid ${colors.border}`,
        boxShadow: "var(--shadow-card)",
      }}
    >
      <div
        className={`icon-circle mb-2 sm:mb-4 ${
          featured ? "h-9 w-9 sm:h-14 sm:w-14" : "h-9 w-9 sm:h-12 sm:w-12"
        }`}
        style={{
          background: colors.bg,
          color: colors.color,
          transition: "transform var(--transition-base)",
        }}
      >
        <Icon size={featured ? 20 : 18} strokeWidth={2} className="sm:hidden" />
        <Icon size={featured ? 24 : 22} strokeWidth={2} className="hidden sm:block" />
      </div>

      <h3
        className={`font-semibold leading-snug group-hover:transition-colors sm:mb-1.5 ${
          featured ? "text-[13px] sm:text-lg" : "text-[13px] sm:text-[15px]"
        }`}
        style={{ color: "var(--color-text)" }}
      >
        {title}
      </h3>
      <p className="mt-0.5 hidden text-[13px] leading-relaxed sm:block" style={{ color: "var(--color-text-secondary)" }}>
        {description}
      </p>

      <div
        className="mt-auto hidden items-center gap-1 pt-4 opacity-0 transition-opacity group-hover:opacity-100 sm:flex"
        style={{ color: colors.color, fontSize: "13px", fontWeight: 500 }}
      >
        <span>عرض التفاصيل</span>
        <ArrowLeft size={14} />
      </div>
    </motion.a>
  );
}
