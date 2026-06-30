import { ReactNode } from "react";
import { categoryConfig } from "@/lib/theme";
import { pageHeaderIcons } from "@/lib/iconMaps";
import { cn } from "@/lib/utils";
import type { Category } from "@/types";

interface StaticPageHeaderProps {
  icon: string;
  label?: string;
  title: string;
  subtitle?: string;
  badge?: ReactNode;
  category?: Category;
  className?: string;
}

/** Server Component page header — no Framer Motion, icon passed as string key. */
export function StaticPageHeader({ icon, label, title, subtitle, badge, category = "primary", className }: StaticPageHeaderProps) {
  const Icon = pageHeaderIcons[icon];
  const colors = categoryConfig[category] || categoryConfig.primary;

  return (
    <div className={cn("mb-8", className)}>
      <div className="flex items-start gap-4">
        <div
          className="icon-circle"
          style={{
            width: "56px",
            height: "56px",
            background: colors.bg,
            color: colors.color,
            flexShrink: 0,
          }}
        >
          {Icon && <Icon size={24} strokeWidth={2} />}
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
    </div>
  );
}
