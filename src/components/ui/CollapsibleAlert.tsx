"use client";

import { ReactNode, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Info, AlertTriangle, CheckCircle2, AlertCircle, ChevronDown } from "@/lib/icons";
import { useIsMobile } from "@/hooks/useIsMobile";

type AlertVariant = "info" | "warning" | "success" | "danger";

interface CollapsibleAlertProps {
  title: string;
  children: ReactNode;
  variant?: AlertVariant;
}

const variants: Record<AlertVariant, { border: string; icon: string; bg: string; iconEl: typeof Info }> = {
  info:    { border: "var(--color-secondary)", icon: "var(--color-secondary)", bg: "rgba(18,184,200,0.05)",  iconEl: Info           },
  warning: { border: "var(--color-accent)",    icon: "#B45309",                bg: "rgba(246,180,27,0.06)", iconEl: AlertTriangle  },
  success: { border: "#22C55E",                icon: "#16A34A",                bg: "rgba(34,197,94,0.06)",  iconEl: CheckCircle2   },
  danger:  { border: "#EF4444",                icon: "#DC2626",                bg: "rgba(239,68,68,0.06)",  iconEl: AlertCircle    },
};

function AlertBody({ title, children, variant = "info" }: CollapsibleAlertProps) {
  const v = variants[variant];
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

export function CollapsibleAlert({ title, children, variant = "info" }: CollapsibleAlertProps) {
  const isMobile = useIsMobile();
  const [open, setOpen] = useState(false);
  const v = variants[variant];
  const IconEl = v.iconEl;

  if (!isMobile) {
    return (
      <AlertBody title={title} variant={variant}>
        {children}
      </AlertBody>
    );
  }

  return (
    <div
      style={{
        background: v.bg,
        borderRadius: "14px",
        borderRight: `3px solid ${v.border}`,
        overflow: "hidden",
      }}
    >
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        style={{
          width: "100%",
          padding: "16px 20px",
          display: "flex",
          gap: "12px",
          alignItems: "center",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          textAlign: "right",
          fontFamily: "var(--font-sans)",
        }}
      >
        <IconEl size={18} style={{ color: v.icon, flexShrink: 0 }} strokeWidth={2} />
        <span style={{ flex: 1, fontWeight: 600, fontSize: "14px", color: "var(--color-text)", lineHeight: 1.4 }}>
          {title}
        </span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.22 }}
          style={{
            width: "28px",
            height: "28px",
            borderRadius: "50%",
            background: open ? "rgba(18,184,200,0.10)" : "var(--color-surface)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            color: open ? "var(--color-secondary)" : "var(--color-text-muted)",
          }}
        >
          <ChevronDown size={16} strokeWidth={2.5} />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22 }}
            style={{ overflow: "hidden" }}
          >
            <div
              style={{
                padding: "0 20px 16px 50px",
                fontSize: "13px",
                color: "var(--color-text-secondary)",
                lineHeight: 1.6,
                borderTop: "1px solid rgba(0,0,0,0.05)",
              }}
            >
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
