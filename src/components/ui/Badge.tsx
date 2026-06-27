"use client";

import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "success" | "warning" | "danger" | "accent" | "info";
}

export function Badge({ children, variant = "default" }: BadgeProps) {
  const variants: Record<string, { bg: string; color: string }> = {
    default: { bg: "rgba(11,31,58,0.08)",   color: "var(--color-primary)"   },
    success: { bg: "rgba(34,197,94,0.10)",  color: "#16A34A"                },
    warning: { bg: "rgba(246,180,27,0.12)", color: "#B45309"                },
    danger:  { bg: "rgba(239,68,68,0.10)",  color: "#DC2626"                },
    accent:  { bg: "rgba(246,180,27,0.12)", color: "#B45309"                },
    info:    { bg: "rgba(18,184,200,0.10)", color: "var(--color-secondary)" },
  };
  const v = variants[variant] || variants.default;
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        padding: "3px 10px",
        borderRadius: "999px",
        fontSize: "11px",
        fontWeight: 600,
        letterSpacing: "0.02em",
        background: v.bg,
        color: v.color,
      }}
    >
      {children}
    </span>
  );
}
