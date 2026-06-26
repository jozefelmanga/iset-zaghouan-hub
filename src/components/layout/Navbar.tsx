"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  GraduationCap,
  Search,
  Menu,
  X,
  Home,
  FileText,
  Building2,
  Banknote,
  UtensilsCrossed,
  Bus,
  Briefcase,
  BookOpen,
  Users,
  Award,
  MapPin,
  HelpCircle,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { CommandPalette } from "@/components/ui/CommandPalette";

const navLinks = [
  { href: "/",          label: "الرئيسية",      icon: Home          },
  { href: "/inscription", label: "الترسيم",      icon: FileText      },
  { href: "/housing",   label: "المبيت",          icon: Building2     },
  { href: "/bourse",    label: "البورص",          icon: Banknote      },
  { href: "/transport", label: "النقل",           icon: Bus           },
  { href: "/stages",    label: "الستاجات",        icon: Briefcase     },
];

const allNavLinks = [
  { href: "/",           label: "الرئيسية",        icon: Home,            group: "رئيسي"      },
  { href: "/inscription",label: "الترسيم",          icon: FileText,        group: "الأكاديمي"  },
  { href: "/library",    label: "المكتبة",          icon: BookOpen,        group: "الأكاديمي"  },
  { href: "/masters",    label: "الماستر",          icon: Award,           group: "الأكاديمي"  },
  { href: "/housing",    label: "المبيت",           icon: Building2,       group: "الحياة الجامعية" },
  { href: "/bourse",     label: "البورص",           icon: Banknote,        group: "الحياة الجامعية" },
  { href: "/transport",  label: "النقل",            icon: Bus,             group: "الحياة الجامعية" },
  { href: "/resto",      label: "الريستو",          icon: UtensilsCrossed, group: "الحياة الجامعية" },
  { href: "/clubs",      label: "النوادي",          icon: Users,           group: "الحياة الجامعية" },
  { href: "/stages",     label: "الستاجات",         icon: Briefcase,       group: "مهني"        },
  { href: "/explore",    label: "اكتشف زغوان",      icon: MapPin,          group: "أخرى"        },
  { href: "/faq",        label: "الأسئلة الشائعة",  icon: HelpCircle,      group: "أخرى"        },
];

const groupColors: Record<string, string> = {
  "رئيسي":          "#12B8C8",
  "الأكاديمي":      "#3B82F6",
  "الحياة الجامعية":"#12B8C8",
  "مهني":           "#8B5CF6",
  "أخرى":           "#F97316",
};

export function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Ctrl+K global listener
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setPaletteOpen((prev) => !prev);
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  // Group drawer links
  const groups = allNavLinks.reduce<Record<string, typeof allNavLinks>>((acc, link) => {
    if (!acc[link.group]) acc[link.group] = [];
    acc[link.group].push(link);
    return acc;
  }, {});

  return (
    <>
      <CommandPalette open={paletteOpen} onClose={() => setPaletteOpen(false)} />

      <header
        className="sticky top-0 z-50 transition-all duration-300"
        style={{
          height: "80px",
          background: scrolled
            ? "rgba(11,31,58,0.95)"
            : "rgba(11,31,58,0.85)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          boxShadow: scrolled ? "0 4px 32px rgba(11,31,58,0.24)" : "none",
        }}
      >
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "0 32px",
            height: "100%",
            display: "flex",
            alignItems: "center",
            gap: "24px",
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              textDecoration: "none",
              flexShrink: 0,
            }}
          >
            <div
              style={{
                width: "38px",
                height: "38px",
                borderRadius: "10px",
                background: "rgba(18,184,200,0.15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#12B8C8",
              }}
            >
              <GraduationCap size={20} strokeWidth={2} />
            </div>
            <span
              className="hidden sm:block"
              style={{
                fontWeight: 700,
                fontSize: "15px",
                color: "#fff",
                letterSpacing: "-0.02em",
              }}
            >
              ISET Zaghouan
            </span>
          </Link>

          {/* Search — centerpiece */}
          <button
            onClick={() => setPaletteOpen(true)}
            style={{
              flex: 1,
              maxWidth: "360px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              height: "42px",
              padding: "0 16px",
              borderRadius: "var(--radius-search)",
              background: "rgba(255,255,255,0.07)",
              border: "1px solid rgba(255,255,255,0.10)",
              cursor: "pointer",
              color: "rgba(255,255,255,0.55)",
              fontSize: "13px",
              fontFamily: "var(--font-sans)",
              transition: "all var(--transition-base)",
            }}
            onMouseEnter={(e) => {
              const btn = e.currentTarget as HTMLButtonElement;
              btn.style.background = "rgba(255,255,255,0.11)";
              btn.style.borderColor = "rgba(18,184,200,0.35)";
              btn.style.color = "rgba(255,255,255,0.75)";
            }}
            onMouseLeave={(e) => {
              const btn = e.currentTarget as HTMLButtonElement;
              btn.style.background = "rgba(255,255,255,0.07)";
              btn.style.borderColor = "rgba(255,255,255,0.10)";
              btn.style.color = "rgba(255,255,255,0.55)";
            }}
          >
            <Search size={16} strokeWidth={2} style={{ flexShrink: 0 }} />
            <span style={{ flex: 1, textAlign: "right" }}>بحث في الدليل...</span>
            <kbd
              style={{
                fontSize: "10px",
                padding: "2px 7px",
                borderRadius: "5px",
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.12)",
                color: "rgba(255,255,255,0.4)",
                fontFamily: "var(--font-sans)",
                flexShrink: 0,
              }}
            >
              Ctrl K
            </kbd>
          </button>



          {/* Hamburger */}
          <motion.button
            className="md:hidden"
            onClick={() => setDrawerOpen(true)}
            whileTap={{ scale: 0.9 }}
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "10px",
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.10)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "rgba(255,255,255,0.8)",
              cursor: "pointer",
              flexShrink: 0,
              marginRight: "auto",
            }}
          >
            <Menu size={20} strokeWidth={2} />
          </motion.button>
        </div>
      </header>

      {/* Mobile Drawer (RTL: slides in from right side / left in visual) */}
      <AnimatePresence>
        {drawerOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setDrawerOpen(false)}
              style={{
                position: "fixed",
                inset: 0,
                background: "rgba(11,31,58,0.5)",
                backdropFilter: "blur(4px)",
                zIndex: 200,
              }}
            />

            {/* Drawer — right side in LTR, left side visually (RTL layout) */}
            <motion.div
              initial={{ x: -320, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -320, opacity: 0 }}
              transition={{ type: "spring", damping: 28, stiffness: 300 }}
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                bottom: 0,
                width: "320px",
                background: "var(--color-surface)",
                boxShadow: "8px 0 40px rgba(11,31,58,0.2)",
                zIndex: 201,
                borderRadius: "0 24px 24px 0",
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
              }}
            >
              {/* Drawer Header */}
              <div
                style={{
                  padding: "20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  borderBottom: "1px solid var(--color-border)",
                  background: "var(--color-primary)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "10px",
                      background: "rgba(18,184,200,0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#12B8C8",
                    }}
                  >
                    <GraduationCap size={18} strokeWidth={2} />
                  </div>
                  <span style={{ fontWeight: 700, fontSize: "14px", color: "#fff" }}>
                    ISET Zaghouan
                  </span>
                </div>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setDrawerOpen(false)}
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "8px",
                    background: "rgba(255,255,255,0.08)",
                    border: "none",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "rgba(255,255,255,0.7)",
                  }}
                >
                  <X size={18} strokeWidth={2} />
                </motion.button>
              </div>

              {/* Nav groups */}
              <div style={{ flex: 1, overflowY: "auto", padding: "16px" }}>
                {Object.entries(groups).map(([group, links]) => (
                  <div key={group} style={{ marginBottom: "20px" }}>
                    <p
                      style={{
                        fontSize: "10px",
                        fontWeight: 700,
                        letterSpacing: "0.10em",
                        textTransform: "uppercase",
                        color: groupColors[group] || "var(--color-text-muted)",
                        marginBottom: "8px",
                        padding: "0 8px",
                      }}
                    >
                      {group}
                    </p>
                    {links.map((link) => {
                      const Icon = link.icon;
                      const active = pathname === link.href;
                      return (
                        <Link
                          key={link.href}
                          href={link.href}
                          onClick={() => setDrawerOpen(false)}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "12px",
                            padding: "11px 12px",
                            borderRadius: "12px",
                            marginBottom: "2px",
                            background: active ? "rgba(18,184,200,0.08)" : "transparent",
                            textDecoration: "none",
                            transition: "background var(--transition-fast)",
                            borderRight: active ? "3px solid #12B8C8" : "3px solid transparent",
                          }}
                        >
                          <div
                            style={{
                              width: "32px",
                              height: "32px",
                              borderRadius: "50%",
                              background: active
                                ? "rgba(18,184,200,0.12)"
                                : "rgba(11,31,58,0.05)",
                              color: active ? "#12B8C8" : "var(--color-text-secondary)",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              flexShrink: 0,
                            }}
                          >
                            <Icon size={15} strokeWidth={2} />
                          </div>
                          <span
                            style={{
                              fontSize: "14px",
                              fontWeight: active ? 600 : 400,
                              color: active ? "#12B8C8" : "var(--color-text)",
                            }}
                          >
                            {link.label}
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                ))}
              </div>

              {/* Drawer footer */}
              <div
                style={{
                  padding: "16px 20px",
                  borderTop: "1px solid var(--color-border)",
                  textAlign: "center",
                }}
              >
                <p style={{ fontSize: "11px", color: "var(--color-text-muted)" }}>
                  Made with ❤️ for ISET Zaghouan students
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
