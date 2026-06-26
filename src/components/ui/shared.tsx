"use client";

import { ReactNode, useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { LucideIcon, ArrowLeft, AlertCircle, CheckCircle2, Info, AlertTriangle } from "lucide-react";

/* ============================================================
   SECTION HEADER
   ============================================================ */
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
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
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

/* ============================================================
   CARD — THREE ELEVATIONS
   ============================================================ */
interface CardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  elevation?: "flat" | "raised" | "feature";
  padding?: string;
  style?: React.CSSProperties;
}

export function Card({ children, className = "", onClick, elevation = "raised", padding, style }: CardProps) {
  const elevationClass = {
    flat: "card-flat",
    raised: "card-raised",
    feature: "card-feature",
  }[elevation];

  return (
    <div
      onClick={onClick}
      className={`${elevationClass} ${className}`}
      style={{ ...style, ...(padding ? { padding } : {}) }}
    >
      {children}
    </div>
  );
}

/* ============================================================
   ACTION CARD (category-colored, circular icon)
   ============================================================ */
interface ActionCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  category?: "academic" | "life" | "career" | "campus" | "primary";
  featured?: boolean;
}

const categoryColors: Record<string, { bg: string; icon: string; border: string }> = {
  academic: { bg: "rgba(59,130,246,0.08)",  icon: "#3B82F6", border: "rgba(59,130,246,0.15)"  },
  career:   { bg: "rgba(139,92,246,0.08)",  icon: "#8B5CF6", border: "rgba(139,92,246,0.15)"  },
  life:     { bg: "rgba(18,184,200,0.08)",  icon: "#12B8C8", border: "rgba(18,184,200,0.15)"  },
  campus:   { bg: "rgba(249,115,22,0.08)",  icon: "#F97316", border: "rgba(249,115,22,0.15)"  },
  primary:  { bg: "rgba(11,31,58,0.06)",    icon: "#0B1F3A", border: "rgba(11,31,58,0.12)"    },
};

export function ActionCard({ icon: Icon, title, description, href, category = "primary", featured }: ActionCardProps) {
  const colors = categoryColors[category] || categoryColors.primary;

  return (
    <motion.a
      href={href}
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
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
          color: colors.icon,
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
        style={{ color: colors.icon, fontSize: "13px", fontWeight: 500 }}
      >
        <span>عرض التفاصيل</span>
        <ArrowLeft size={14} />
      </div>
    </motion.a>
  );
}

/* ============================================================
   STEP ITEM (vertical timeline)
   ============================================================ */
interface StepItemProps {
  number: number;
  title: string;
  description: string;
  isLast?: boolean;
  active?: boolean;
}

export function StepItem({ number, title, description, isLast, active }: StepItemProps) {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col items-center">
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold shrink-0 transition-all"
          style={{
            background: active ? "var(--color-secondary)" : "rgba(18,184,200,0.12)",
            color: active ? "#fff" : "var(--color-secondary)",
            boxShadow: active ? "0 0 0 4px rgba(18,184,200,0.15)" : "none",
          }}
        >
          {number}
        </div>
        {!isLast && (
          <div
            className="w-px flex-1 my-2"
            style={{ background: "var(--color-border)", minHeight: "24px" }}
          />
        )}
      </div>
      <div className="pb-6 flex-1">
        <h3 className="font-semibold mb-1" style={{ color: "var(--color-text)", fontSize: "15px" }}>
          {title}
        </h3>
        <p style={{ color: "var(--color-text-secondary)", fontSize: "13px", lineHeight: 1.6 }}>
          {description}
        </p>
      </div>
    </div>
  );
}

/* ============================================================
   BADGE
   ============================================================ */
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

/* ============================================================
   ALERT (premium card with left border)
   ============================================================ */
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

/* ============================================================
   ANIMATED STAT COUNTER
   ============================================================ */
interface StatCounterProps {
  value: string;
  label: string;
  suffix?: string;
  delay?: number;
}

export function StatCounter({ value, label, suffix = "", delay = 0 }: StatCounterProps) {
  const [displayed, setDisplayed] = useState("0");
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const numericValue = parseInt(value.replace(/\D/g, ""), 10) || 0;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          setTimeout(() => {
            const duration = 1600;
            const start = Date.now();
            const tick = () => {
              const elapsed = Date.now() - start;
              const progress = Math.min(elapsed / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              const current = Math.round(numericValue * eased);
              setDisplayed(current.toLocaleString());
              if (progress < 1) requestAnimationFrame(tick);
              else setDisplayed(value);
            };
            requestAnimationFrame(tick);
          }, delay);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [numericValue, value, delay, hasAnimated]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay / 1000 }}
      className="text-center"
    >
      <div
        className="text-4xl sm:text-5xl font-bold mb-2"
        style={{ color: "var(--color-secondary)", fontFeatureSettings: '"tnum"' }}
      >
        {displayed}{suffix}
      </div>
      <p style={{ color: "var(--color-text-secondary)", fontSize: "14px", fontWeight: 500 }}>{label}</p>
    </motion.div>
  );
}

/* ============================================================
   EMPTY STATE
   ============================================================ */
interface EmptyStateProps {
  emoji?: string;
  title: string;
  description?: string;
  action?: ReactNode;
}

export function EmptyState({ emoji = "📂", title, description, action }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center text-center py-16 px-6">
      <div className="text-5xl mb-4">{emoji}</div>
      <h3 style={{ color: "var(--color-text)", fontWeight: 600, fontSize: "18px", marginBottom: "8px" }}>{title}</h3>
      {description && (
        <p style={{ color: "var(--color-text-muted)", fontSize: "14px", maxWidth: "300px", lineHeight: 1.6 }}>
          {description}
        </p>
      )}
      {action && <div className="mt-6">{action}</div>}
    </div>
  );
}

/* ============================================================
   PAGE HEADER (for sub-pages)
   ============================================================ */
interface PageHeaderProps {
  icon: LucideIcon;
  label?: string;
  title: string;
  subtitle?: string;
  badge?: ReactNode;
  category?: "academic" | "life" | "career" | "campus" | "primary";
}

export function PageHeader({ icon: Icon, label, title, subtitle, badge, category = "primary" }: PageHeaderProps) {
  const colors = categoryColors[category] || categoryColors.primary;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-8"
    >
      <div className="flex items-start gap-4">
        <div
          className="icon-circle"
          style={{
            width: "56px",
            height: "56px",
            background: colors.bg,
            color: colors.icon,
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

/* ============================================================
   TIMELINE ITEM (for announcements)
   ============================================================ */
interface TimelineItemProps {
  time: string;
  title: string;
  description: string;
  type?: "info" | "warning" | "success";
  isLast?: boolean;
}

export function TimelineItem({ time, title, description, type = "info", isLast }: TimelineItemProps) {
  const colors: Record<string, string> = {
    info:    "var(--color-secondary)",
    warning: "var(--color-accent)",
    success: "#22C55E",
  };
  const color = colors[type];

  return (
    <div className="flex gap-4">
      <div className="flex flex-col items-center flex-shrink-0">
        <div
          className="w-3 h-3 rounded-full mt-1.5"
          style={{ background: color, boxShadow: `0 0 0 3px ${color}22`, flexShrink: 0 }}
        />
        {!isLast && (
          <div className="w-px flex-1 my-1" style={{ background: "var(--color-border)", minHeight: "32px" }} />
        )}
      </div>
      <div className="pb-6 flex-1">
        <p style={{ fontSize: "11px", color: "var(--color-text-muted)", fontWeight: 500, marginBottom: "3px" }}>{time}</p>
        <h4 style={{ fontWeight: 600, fontSize: "14px", color: "var(--color-text)", marginBottom: "3px" }}>{title}</h4>
        <p style={{ fontSize: "13px", color: "var(--color-text-secondary)", lineHeight: 1.6 }}>{description}</p>
      </div>
    </div>
  );
}

/* ============================================================
   BUTTON
   ============================================================ */
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

/* ============================================================
   IMAGE GALLERY
   ============================================================ */
interface ImageGalleryProps {
  images: string[];
  title?: string;
}

export function ImageGallery({ images, title = "الصور" }: ImageGalleryProps) {
  if (!images || images.length === 0) return null;
  return (
    <div style={{ marginTop: "40px", marginBottom: "40px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
        <span style={{ fontWeight: 700, fontSize: "18px", color: "var(--color-text)" }}>{title}</span>
      </div>
      <div style={{ 
        display: "grid", 
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", 
        gap: "16px" 
      }}>
        {images.map((src, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            style={{ 
              position: "relative", 
              paddingBottom: "65%", 
              borderRadius: "16px", 
              overflow: "hidden",
              boxShadow: "var(--shadow-card)",
              border: "1px solid var(--color-border)"
            }}
          >
            <img 
              src={src} 
              alt={`Gallery image ${i + 1}`} 
              style={{ 
                position: "absolute", 
                inset: 0, 
                width: "100%", 
                height: "100%", 
                objectFit: "cover",
                transition: "transform var(--transition-slow)"
              }} 
              onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.05)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
