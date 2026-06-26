"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface SectionHeaderProps {
  icon: LucideIcon;
  title: string;
  subtitle?: string;
  children?: ReactNode;
}

export function SectionHeader({ icon: Icon, title, subtitle, children }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-6"
    >
      <div className="flex items-center gap-2 text-primary mb-1">
        <Icon className="w-5 h-5" />
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
      {subtitle && <p className="text-text-muted text-sm">{subtitle}</p>}
      {children}
    </motion.div>
  );
}

interface CardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export function Card({ children, className = "", onClick }: CardProps) {
  return (
    <div onClick={onClick} className={`bg-surface rounded-xl border border-border shadow-sm p-5 ${className}`}>
      {children}
    </div>
  );
}

interface ActionCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  color?: string;
}

export function ActionCard({ icon: Icon, title, description, href, color = "primary" }: ActionCardProps) {
  const colorClasses: Record<string, string> = {
    primary: "bg-primary/10 text-primary",
    secondary: "bg-secondary/10 text-secondary",
    accent: "bg-accent/10 text-accent",
    success: "bg-success/10 text-success",
    danger: "bg-danger/10 text-danger",
  };

  return (
    <a
      href={href}
      className="group block bg-surface rounded-xl border border-border shadow-sm p-5 hover:shadow-md hover:scale-[1.02] transition-all duration-200"
    >
      <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 ${colorClasses[color] || colorClasses.primary}`}>
        <Icon className="w-5 h-5" />
      </div>
      <h3 className="font-semibold text-text mb-1 group-hover:text-primary transition-colors">{title}</h3>
      <p className="text-sm text-text-muted">{description}</p>
    </a>
  );
}

interface StepItemProps {
  number: number;
  title: string;
  description: string;
  isLast?: boolean;
}

export function StepItem({ number, title, description, isLast }: StepItemProps) {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col items-center">
        <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shrink-0">
          {number}
        </div>
        {!isLast && <div className="w-0.5 flex-1 bg-border my-2" />}
      </div>
      <div className="pb-6">
        <h3 className="font-semibold text-text mb-1">{title}</h3>
        <p className="text-sm text-text-muted">{description}</p>
      </div>
    </div>
  );
}

interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "success" | "warning" | "danger" | "accent";
}

export function Badge({ children, variant = "default" }: BadgeProps) {
  const variants = {
    default: "bg-primary/10 text-primary",
    success: "bg-success/10 text-success",
    warning: "bg-warning/10 text-warning",
    danger: "bg-danger/10 text-danger",
    accent: "bg-accent/10 text-accent",
  };
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${variants[variant]}`}>
      {children}
    </span>
  );
}

interface AlertProps {
  title: string;
  children: ReactNode;
  variant?: "info" | "warning" | "success";
}

export function Alert({ title, children, variant = "info" }: AlertProps) {
  const variants = {
    info: "bg-primary/5 border-primary/20 text-primary",
    warning: "bg-warning/5 border-warning/20 text-warning",
    success: "bg-success/5 border-success/20 text-success",
  };
  return (
    <div className={`rounded-xl border p-4 ${variants[variant]}`}>
      <h4 className="font-semibold text-sm mb-1">{title}</h4>
      <div className="text-sm opacity-90">{children}</div>
    </div>
  );
}
