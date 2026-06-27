"use client";

import { ReactNode } from "react";
import { Info, AlertTriangle, CheckCircle2, AlertCircle } from "@/lib/icons";

interface AlertProps {
  title: string;
  children: ReactNode;
  variant?: "info" | "warning" | "success" | "danger";
}

export function Alert({ title, children, variant = "info" }: AlertProps) {
  const variants: Record<string, { border: string; icon: string; bg: string; iconEl: typeof Info }> = {
    info:    { border: "var(--color-secondary)", icon: "var(--color-secondary)", bg: "rgba(18,184,200,0.05)",  iconEl: Info           },
    warning: { border: "var(--color-accent)",    icon: "#B45309",                bg: "rgba(246,180,27,0.06)", iconEl: AlertTriangle  },
    success: { border: "#22C55E",                icon: "#16A34A",                bg: "rgba(34,197,94,0.06)",  iconEl: CheckCircle2   },
    danger:  { border: "#EF4444",                icon: "#DC2626",                bg: "rgba(239,68,68,0.06)",  iconEl: AlertCircle    },
  };
  const v = variants[variant] || variants.info;
  const IconEl = v.iconEl;

  return (
    <div
      style={{
        background: v.bg,
        borderRadius: "14px",
        borderRight: `3px solid ${v.border}`,
        padding: "16px 20px",
        display: "flex",
        gap: "12px",
        alignItems: "flex-start",
      }}
    >
      <IconEl size={18} style={{ color: v.icon, flexShrink: 0, marginTop: "1px" }} strokeWidth={2} />
      <div>
        <p style={{ fontWeight: 600, fontSize: "14px", color: "var(--color-text)", marginBottom: "2px" }}>{title}</p>
        <div style={{ fontSize: "13px", color: "var(--color-text-secondary)", lineHeight: 1.6 }}>{children}</div>
      </div>
    </div>
  );
}
