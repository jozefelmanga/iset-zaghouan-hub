"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { sectionReveal } from "@/lib/motion";
import { LucideIcon } from "@/lib/icons";

interface SectionHeaderProps {
  label?: string;
  title: string;
  subtitle?: string;
  icon?: LucideIcon;
  children?: ReactNode;
  center?: boolean;
}

export function SectionHeader({ label, title, subtitle, icon: Icon, children, center }: SectionHeaderProps) {
  return (
    <motion.div
      {...sectionReveal}
      className={`mb-10 ${center ? "text-center" : ""}`}
    >
      {label && (
        <span className="section-label">{label}</span>
      )}
      <div className={`flex items-center gap-3 ${center ? "justify-center" : ""}`}>
        {Icon && (
          <div className="icon-circle" style={{ background: "rgba(18,184,200,0.1)", color: "var(--color-secondary)" }}>
            <Icon size={22} strokeWidth={2} />
          </div>
        )}
        <h2 className="text-2xl sm:text-3xl font-bold" style={{ color: "var(--color-text)" }}>{title}</h2>
      </div>
      {subtitle && (
        <p className="mt-2 text-base" style={{ color: "var(--color-text-secondary)", maxWidth: "520px", ...(center ? { margin: "8px auto 0" } : {}) }}>
          {subtitle}
        </p>
      )}
      {children}
    </motion.div>
  );
}
