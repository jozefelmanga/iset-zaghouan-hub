"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import type { LucideIcon } from "@/lib/icons";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "accent" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  className?: string;
  icon?: LucideIcon;
}

export function Button({ children, variant = "primary", size = "md", href, onClick, className = "", icon: Icon }: ButtonProps) {
  const styles: Record<string, React.CSSProperties> = {
    primary:   { background: "var(--color-primary)",  color: "#fff",                    border: "none" },
    secondary: { background: "var(--color-surface)",  color: "var(--color-text)",       border: "1px solid var(--color-border)" },
    accent:    { background: "var(--color-accent)",   color: "var(--color-primary)",    border: "none" },
    ghost:     { background: "transparent",           color: "var(--color-text-secondary)", border: "none" },
  };

  const sizes: Record<string, React.CSSProperties> = {
    sm: { padding: "8px 16px",  fontSize: "13px" },
    md: { padding: "11px 22px", fontSize: "14px" },
    lg: { padding: "14px 28px", fontSize: "15px" },
  };

  const commonStyle: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    borderRadius: "var(--radius-button)",
    fontWeight: 600,
    cursor: "pointer",
    textDecoration: "none",
    transition: "transform var(--transition-base), box-shadow var(--transition-base), opacity var(--transition-fast)",
    ...styles[variant],
    ...sizes[size],
  };

  const hoverProps = {
    whileHover: { y: -2, boxShadow: "0 8px 24px rgba(15,23,42,0.15)" },
    whileTap: { scale: 0.98 },
  };

  if (href) {
    return (
      <motion.a href={href} style={commonStyle} className={className} {...hoverProps}>
        {Icon && <Icon size={16} strokeWidth={2} />}
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button onClick={onClick} style={commonStyle} className={className} {...hoverProps}>
      {Icon && <Icon size={16} strokeWidth={2} />}
      {children}
    </motion.button>
  );
}
