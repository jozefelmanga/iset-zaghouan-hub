"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search, X, Clock, TrendingUp, FileText, Building2, Banknote,
  Bus, Briefcase, BookOpen, Users, Award, MapPin, HelpCircle,
  UtensilsCrossed, ArrowLeft, GraduationCap, Heart,
} from "lucide-react";

const allPages = [
  { href: "/inscription", label: "الترسيم الجامعي",    description: "خطوات التسجيل و الأوراق المطلوبة", icon: FileText,        category: "academic" },
  { href: "/housing",     label: "المبيت الجامعي",      description: "فواي البنات و الأولاد",             icon: Building2,       category: "life"     },
  { href: "/bourse",      label: "البورص",               description: "منحة الإدماج و البورص الكاملة",   icon: Banknote,        category: "life"     },
  { href: "/transport",   label: "النقل",                description: "لواجات، كيران، و المواصلات",       icon: Bus,             category: "life"     },
  { href: "/stages",      label: "الستاجات",             description: "دليل الستاجات و Didosoft",         icon: Briefcase,       category: "career"   },
  { href: "/library",     label: "المكتبة",              description: "مراجع و اكزامانات",                icon: BookOpen,        category: "academic" },
  { href: "/clubs",       label: "النوادي والجمعيات",    description: "أنشطة و نوادي الطلبة",            icon: Users,           category: "life"     },
  { href: "/clubs/securinets", label: "نادي SecuriNets",  description: "جمعية الأمن السيبراني في ISETZG", icon: Users,           category: "life"     },
  { href: "/clubs/odd",        label: "نادي ODD",         description: "نادي التنمية المستدامة والبيئة",   icon: Users,           category: "life"     },
  { href: "/clubs/enactus",    label: "نادي Enactus",     description: "ريادة الأعمال والمشاريع الطلابية",  icon: Users,           category: "life"     },
  { href: "/departments", label: "الأقسام العلمية",     description: "أقسام TI، SEG، و GPR بالمعهد",     icon: GraduationCap,   category: "academic" },
  { href: "/departments/ti",   label: "قسم تكنولوجيا المعلومات (TI)", description: "تخصصات DSI و RSI ومراجعها", icon: GraduationCap, category: "academic" },
  { href: "/departments/seg",  label: "قسم الاقتصاد والتصرف (SEG)",  description: "المحاسبة والمالية وإدارة الأعمال", icon: GraduationCap, category: "academic" },
  { href: "/departments/gpr",  label: "قسم هندسة العمليات (GPR)",     description: "الأساليب الكيميائية والغذائية وأفاقها", icon: GraduationCap, category: "academic" },
  { href: "/masters",     label: "الماستر",              description: "برامج الماستر المتوفرة",           icon: Award,           category: "academic" },
  { href: "/explore",     label: "اكتشف زغوان",          description: "أحسن البلايص في المدينة",          icon: MapPin,          category: "campus"   },
  { href: "/faq",         label: "الأسئلة الشائعة",      description: "إجابات لأكثر الأسئلة تكراراً",     icon: HelpCircle,      category: "campus"   },
  { href: "/resto",       label: "الريستو",              description: "أوقات الوجبات و القائمة",          icon: UtensilsCrossed, category: "campus"   },
  { href: "/bonus",       label: "نصائح وإهداء",          description: "نصائح للطلبة الجدد وشكر المساهمين", icon: Heart,           category: "life"     },
];

const popularTags = ["الترسيم", "البورص", "المبيت", "الستاجات", "النقل"];

const categoryColors: Record<string, string> = {
  academic: "#3B82F6",
  career:   "#8B5CF6",
  life:     "#12B8C8",
  campus:   "#F97316",
};

interface CommandPaletteProps {
  open: boolean;
  onClose: () => void;
}

export function CommandPalette({ open, onClose }: CommandPaletteProps) {
  const [query, setQuery] = useState("");
  const [recentSearches] = useState(["الترسيم", "المبيت الجامعي"]);
  const inputRef = useRef<HTMLInputElement>(null);

  const filtered = query.trim()
    ? allPages.filter(
        (p) =>
          p.label.includes(query) ||
          p.description.includes(query) ||
          p.category.includes(query)
      )
    : [];

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setQuery("");
    }
  }, [open]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        if (open) onClose();
      }
      if (e.key === "Escape" && open) onClose();
    },
    [open, onClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(11,31,58,0.5)",
              backdropFilter: "blur(4px)",
              zIndex: 200,
            }}
          />

          {/* Palette */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -20 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: "fixed",
              top: "20%",
              left: "50%",
              transform: "translateX(-50%)",
              width: "min(580px, calc(100vw - 32px))",
              background: "var(--color-surface)",
              borderRadius: "20px",
              boxShadow: "0 24px 80px rgba(11,31,58,0.25), 0 0 0 1px rgba(232,237,244,0.8)",
              zIndex: 201,
              overflow: "hidden",
            }}
          >
            {/* Search Input */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "18px 20px",
                borderBottom: "1px solid var(--color-border)",
              }}
            >
              <Search size={20} style={{ color: "var(--color-text-muted)", flexShrink: 0 }} strokeWidth={2} />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="ابحث عن مقررات، وثائق، خدمات..."
                style={{
                  flex: 1,
                  border: "none",
                  outline: "none",
                  background: "transparent",
                  fontSize: "16px",
                  color: "var(--color-text)",
                  fontFamily: "var(--font-sans)",
                }}
              />
              <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
                <kbd
                  style={{
                    fontSize: "10px",
                    fontWeight: 500,
                    background: "var(--color-background)",
                    border: "1px solid var(--color-border)",
                    borderRadius: "6px",
                    padding: "2px 6px",
                    color: "var(--color-text-muted)",
                    fontFamily: "var(--font-sans)",
                  }}
                >
                  ESC
                </kbd>
                {query && (
                  <button
                    onClick={() => setQuery("")}
                    style={{
                      width: "24px",
                      height: "24px",
                      borderRadius: "50%",
                      background: "var(--color-border)",
                      border: "none",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <X size={12} style={{ color: "var(--color-text-muted)" }} />
                  </button>
                )}
              </div>
            </div>

            {/* Results / Default state */}
            <div style={{ maxHeight: "360px", overflowY: "auto", padding: "12px" }}>
              {query.trim() === "" ? (
                <>
                  {/* Recent */}
                  <div style={{ marginBottom: "16px" }}>
                    <p
                      style={{
                        fontSize: "11px",
                        fontWeight: 600,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        color: "var(--color-text-muted)",
                        padding: "4px 8px 8px",
                      }}
                    >
                      <Clock size={12} style={{ display: "inline", marginLeft: "4px" }} />
                      بحث حديث
                    </p>
                    {recentSearches.map((s) => (
                      <button
                        key={s}
                        onClick={() => setQuery(s)}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                          width: "100%",
                          padding: "10px 12px",
                          borderRadius: "10px",
                          border: "none",
                          background: "transparent",
                          cursor: "pointer",
                          color: "var(--color-text-secondary)",
                          fontSize: "14px",
                          fontFamily: "var(--font-sans)",
                          textAlign: "right",
                          transition: "background var(--transition-fast)",
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLButtonElement).style.background = "var(--color-background)";
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLButtonElement).style.background = "transparent";
                        }}
                      >
                        <Clock size={14} style={{ color: "var(--color-text-muted)", flexShrink: 0 }} />
                        {s}
                      </button>
                    ))}
                  </div>

                  {/* Popular */}
                  <div>
                    <p
                      style={{
                        fontSize: "11px",
                        fontWeight: 600,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        color: "var(--color-text-muted)",
                        padding: "4px 8px 8px",
                      }}
                    >
                      <TrendingUp size={12} style={{ display: "inline", marginLeft: "4px" }} />
                      الأكثر بحثاً
                    </p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", padding: "0 8px" }}>
                      {popularTags.map((tag) => (
                        <button
                          key={tag}
                          onClick={() => setQuery(tag)}
                          style={{
                            padding: "6px 14px",
                            borderRadius: "999px",
                            border: "1px solid var(--color-border)",
                            background: "var(--color-background)",
                            color: "var(--color-text-secondary)",
                            fontSize: "13px",
                            fontWeight: 500,
                            cursor: "pointer",
                            fontFamily: "var(--font-sans)",
                            transition: "all var(--transition-fast)",
                          }}
                          onMouseEnter={(e) => {
                            const btn = e.currentTarget as HTMLButtonElement;
                            btn.style.background = "rgba(18,184,200,0.08)";
                            btn.style.color = "var(--color-secondary)";
                            btn.style.borderColor = "rgba(18,184,200,0.3)";
                          }}
                          onMouseLeave={(e) => {
                            const btn = e.currentTarget as HTMLButtonElement;
                            btn.style.background = "var(--color-background)";
                            btn.style.color = "var(--color-text-secondary)";
                            btn.style.borderColor = "var(--color-border)";
                          }}
                        >
                          {tag}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* All pages */}
                  <div style={{ marginTop: "16px" }}>
                    <p
                      style={{
                        fontSize: "11px",
                        fontWeight: 600,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        color: "var(--color-text-muted)",
                        padding: "4px 8px 8px",
                      }}
                    >
                      كل الصفحات
                    </p>
                    {allPages.map((page) => {
                      const Icon = page.icon;
                      const color = categoryColors[page.category] || "#0B1F3A";
                      return (
                        <a
                          key={page.href}
                          href={page.href}
                          onClick={onClose}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "12px",
                            padding: "10px 12px",
                            borderRadius: "10px",
                            textDecoration: "none",
                            transition: "background var(--transition-fast)",
                          }}
                          onMouseEnter={(e) => {
                            (e.currentTarget as HTMLAnchorElement).style.background = "var(--color-background)";
                          }}
                          onMouseLeave={(e) => {
                            (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                          }}
                        >
                          <div
                            style={{
                              width: "34px",
                              height: "34px",
                              borderRadius: "50%",
                              background: `${color}18`,
                              color,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              flexShrink: 0,
                            }}
                          >
                            <Icon size={16} strokeWidth={2} />
                          </div>
                          <div style={{ flex: 1 }}>
                            <p style={{ fontSize: "14px", fontWeight: 500, color: "var(--color-text)", marginBottom: "1px" }}>
                              {page.label}
                            </p>
                            <p style={{ fontSize: "12px", color: "var(--color-text-muted)" }}>{page.description}</p>
                          </div>
                          <ArrowLeft size={14} style={{ color: "var(--color-text-muted)" }} />
                        </a>
                      );
                    })}
                  </div>
                </>
              ) : filtered.length > 0 ? (
                filtered.map((page) => {
                  const Icon = page.icon;
                  const color = categoryColors[page.category] || "#0B1F3A";
                  return (
                    <a
                      key={page.href}
                      href={page.href}
                      onClick={onClose}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        padding: "10px 12px",
                        borderRadius: "10px",
                        textDecoration: "none",
                        transition: "background var(--transition-fast)",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.background = "var(--color-background)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                      }}
                    >
                      <div
                        style={{
                          width: "36px",
                          height: "36px",
                          borderRadius: "50%",
                          background: `${color}18`,
                          color,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        <Icon size={18} strokeWidth={2} />
                      </div>
                      <div style={{ flex: 1 }}>
                        <p style={{ fontSize: "15px", fontWeight: 600, color: "var(--color-text)", marginBottom: "2px" }}>
                          {page.label}
                        </p>
                        <p style={{ fontSize: "13px", color: "var(--color-text-muted)" }}>{page.description}</p>
                      </div>
                      <ArrowLeft size={14} style={{ color: "var(--color-text-muted)" }} />
                    </a>
                  );
                })
              ) : (
                <div className="flex flex-col items-center justify-center py-12">
                  <div style={{ fontSize: "32px", marginBottom: "8px" }}>🔍</div>
                  <p style={{ color: "var(--color-text-muted)", fontSize: "14px" }}>
                    لا توجد نتائج لـ &ldquo;{query}&rdquo;
                  </p>
                </div>
              )}
            </div>

            {/* Footer */}
            <div
              style={{
                padding: "12px 20px",
                borderTop: "1px solid var(--color-border)",
                display: "flex",
                gap: "16px",
                alignItems: "center",
              }}
            >
              {[
                { key: "↵", label: "فتح" },
                { key: "↑↓", label: "تنقل" },
                { key: "ESC", label: "إغلاق" },
              ].map(({ key, label }) => (
                <div key={key} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <kbd
                    style={{
                      fontSize: "11px",
                      background: "var(--color-background)",
                      border: "1px solid var(--color-border)",
                      borderRadius: "6px",
                      padding: "2px 7px",
                      color: "var(--color-text-muted)",
                      fontFamily: "var(--font-sans)",
                    }}
                  >
                    {key}
                  </kbd>
                  <span style={{ fontSize: "12px", color: "var(--color-text-muted)" }}>{label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
