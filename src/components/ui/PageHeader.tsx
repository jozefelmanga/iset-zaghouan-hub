"use client";

import { ReactNode } from "react";
import { m as motion } from "framer-motion";
import { categoryConfig } from "@/lib/theme";
import { enterAnimation } from "@/lib/motion";
import type { Category } from "@/types";
import type { LucideIcon } from "@/lib/icons";

interface PageHeaderProps {
  icon: LucideIcon;
  label?: string;
  title: string;
  subtitle?: string;
  badge?: ReactNode;
  category?: Category;
}

export function PageHeader({ icon: Icon, label, title, subtitle, badge, category = "primary" }: PageHeaderProps) {
  const colors = categoryConfig[category] || categoryConfig.primary;

  return (
    <motion.div
      {...enterAnimation(0)}
      className="mb-8"
    >
      <div className="flex items-start gap-4">
        <div
          className="icon-circle"
          style={{
            width: "56px",
            height: "56px",
            background: colors.bg,
            color: colors.color, // Map to categoryConfig.color
            flexShrink: 0,
          }}
        >
          <Icon size={24} strokeWidth={2} />
        </div>
        <div className="flex-1">
          {label && <span className="section-label">{label}</span>}
          <h1 style={{ fontSize: "clamp(22px, 4vw, 32px)", fontWeight: 800, color: "var(--color-text)", lineHeight: 1.2, marginBottom: "6px" }}>
            {title}
          </h1>
          {subtitle && (
            <p style={{ color: "var(--color-text-secondary)", fontSize: "15px", lineHeight: 1.6 }}>{subtitle}</p>
          )}
          {badge && <div className="mt-2">{badge}</div>}
        </div>
      </div>
    </motion.div>
  );
}
