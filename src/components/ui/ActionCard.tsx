"use client";

import { motion } from "framer-motion";
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
      className="group block"
      style={{
        background: "var(--color-surface)",
        borderRadius: "var(--radius-card)",
        border: `1px solid ${colors.border}`,
        padding: featured ? "32px" : "24px",
        boxShadow: "var(--shadow-card)",
        textDecoration: "none",
        display: "block",
      }}
    >
      {/* Icon circle */}
      <div
        className="icon-circle mb-4"
        style={{
          width: featured ? "56px" : "48px",
          height: featured ? "56px" : "48px",
          background: colors.bg,
          color: colors.color, // Maps to the main color property in categoryConfig
          transition: "transform var(--transition-base)",
        }}
      >
        <Icon size={featured ? 24 : 22} strokeWidth={2} />
      </div>

      <h3
        className="font-semibold mb-1.5 group-hover:transition-colors"
        style={{
          color: "var(--color-text)",
          fontSize: featured ? "18px" : "15px",
        }}
      >
        {title}
      </h3>
      <p style={{ color: "var(--color-text-secondary)", fontSize: "13px", lineHeight: 1.6 }}>
        {description}
      </p>

      <div
        className="flex items-center gap-1 mt-4 opacity-0 group-hover:opacity-100 transition-opacity"
        style={{ color: colors.color, fontSize: "13px", fontWeight: 500 }}
      >
        <span>عرض التفاصيل</span>
        <ArrowLeft size={14} />
      </div>
    </motion.a>
  );
}
