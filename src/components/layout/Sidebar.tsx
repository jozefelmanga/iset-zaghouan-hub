"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { GraduationCap, X } from "@/lib/icons";
import { motion, AnimatePresence } from "framer-motion";
import { navGroups, homeLink } from "@/constants/navigation";
import { isNavActive } from "@/lib/utils";
import { drawerFromRight, backdrop } from "@/lib/motion";

export function Sidebar({ drawerOpen, setDrawerOpen }: { drawerOpen?: boolean, setDrawerOpen?: (v: boolean) => void }) {
  const pathname = usePathname();
  const navHrefs = [homeLink.href, ...navGroups.flatMap((group) => group.links.map((link) => link.href))];

  // Close drawer on route change (mobile nav)
  useEffect(() => {
    setDrawerOpen?.(false);
  }, [pathname, setDrawerOpen]);

  // Close drawer if viewport widens past md breakpoint
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setDrawerOpen?.(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [setDrawerOpen]);

  const sidebarContent = (
    <>
      {/* Logo area */}
      <div
        style={{
          height: "80px",
          display: "flex",
          alignItems: "center",
          padding: "0 20px",
          gap: "12px",
          borderBottom: "1px solid var(--color-border)",
          flexShrink: 0,
        }}
      >
        <div
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "12px",
            background: "linear-gradient(135deg, rgba(11,31,58,0.08), rgba(18,184,200,0.12))",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "var(--color-primary)",
          }}
        >
          <GraduationCap size={20} strokeWidth={2} />
        </div>
        <div>
          <p style={{ fontWeight: 700, fontSize: "13px", color: "var(--color-text)", lineHeight: 1.2 }}>
            ISET Zaghouan
          </p>
          <p style={{ fontSize: "11px", color: "var(--color-text-muted)", lineHeight: 1.2 }}>
            دليل الطالب
          </p>
        </div>
        {/* Close Button for Mobile */}
        <button
          className="mobile-only"
          onClick={() => setDrawerOpen?.(false)}
          style={{
            width: "32px",
            height: "32px",
            borderRadius: "8px",
            background: "rgba(11,31,58,0.05)",
            border: "none",
            cursor: "pointer",
            marginRight: "auto",
            alignItems: "center",
            justifyContent: "center",
            color: "var(--color-text-muted)",
          }}
        >
          <X size={18} strokeWidth={2} />
        </button>
      </div>

      {/* Home link */}
      <div style={{ padding: "12px 12px 0" }}>
        <Link
          href={homeLink.href}
          onClick={() => setDrawerOpen?.(false)}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            padding: "10px 12px",
            borderRadius: "12px",
            background: isNavActive(homeLink.href, pathname, navHrefs) ? "rgba(18,184,200,0.08)" : "transparent",
            textDecoration: "none",
            transition: "background var(--transition-fast)",
            borderRight: isNavActive(homeLink.href, pathname, navHrefs) ? "3px solid var(--color-secondary)" : "3px solid transparent",
            marginBottom: "4px",
          }}
        >
          <div
            style={{
              width: "34px",
              height: "34px",
              borderRadius: "50%",
              background: isNavActive(homeLink.href, pathname, navHrefs) ? "rgba(18,184,200,0.12)" : "rgba(11,31,58,0.05)",
              color: isNavActive(homeLink.href, pathname, navHrefs) ? "var(--color-secondary)" : "var(--color-text-secondary)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              transition: "all var(--transition-fast)",
            }}
          >
            <homeLink.icon size={16} strokeWidth={2} />
          </div>
          <span
            style={{
              fontSize: "14px",
              fontWeight: isNavActive(homeLink.href, pathname, navHrefs) ? 600 : 400,
              color: isNavActive(homeLink.href, pathname, navHrefs) ? "var(--color-secondary)" : "var(--color-text)",
            }}
          >
            {homeLink.label}
          </span>
        </Link>
      </div>

      {/* Grouped navigation */}
      <nav style={{ flex: 1, overflowY: "auto", padding: "8px 12px" }}>
        {navGroups.map((group, gi) => (
          <div key={gi} style={{ marginBottom: "20px" }}>
            {/* Group label */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "4px 10px 8px",
              }}
            >
              <div
                style={{
                  height: "1px",
                  width: "12px",
                  background: group.color,
                  borderRadius: "1px",
                  opacity: 0.6,
                }}
              />
              <p
                style={{
                  fontSize: "10px",
                  fontWeight: 700,
                  letterSpacing: "0.10em",
                  textTransform: "uppercase",
                  color: group.color,
                  opacity: 0.8,
                }}
              >
                {group.label}
              </p>
            </div>

            {/* Links */}
            {group.links.map((link) => {
              const Icon = link.icon;
              const active = isNavActive(link.href, pathname, navHrefs);

              return (
                <motion.div
                  key={link.href}
                  whileHover={{ x: 2 }}
                  transition={{ duration: 0.15 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setDrawerOpen?.(false)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      padding: "9px 12px",
                      borderRadius: "12px",
                      marginBottom: "2px",
                      background: active ? `${group.color}12` : "transparent",
                      textDecoration: "none",
                      transition: "background var(--transition-fast)",
                      borderRight: active ? `3px solid ${group.color}` : "3px solid transparent",
                    }}
                    onMouseEnter={(e) => {
                      if (!active) {
                        (e.currentTarget as HTMLAnchorElement).style.background = "rgba(11,31,58,0.04)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!active) {
                        (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                      }
                    }}
                  >
                    <div
                      style={{
                        width: "32px",
                        height: "32px",
                        borderRadius: "50%",
                        background: active ? `${group.color}18` : "rgba(11,31,58,0.05)",
                        color: active ? group.color : "var(--color-text-secondary)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        transition: "all var(--transition-fast)",
                      }}
                    >
                      <Icon size={15} strokeWidth={2} />
                    </div>
                    <span
                      style={{
                        fontSize: "13px",
                        fontWeight: active ? 600 : 400,
                        color: active ? group.color : "var(--color-text)",
                        transition: "color var(--transition-fast)",
                      }}
                    >
                      {link.label}
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        ))}
      </nav>

      {/* Footer */}
      <div
        style={{
          padding: "16px 20px",
          borderTop: "1px solid var(--color-border)",
          flexShrink: 0,
        }}
      >
        <p style={{ fontSize: "11px", color: "var(--color-text-muted)", textAlign: "center", lineHeight: 1.6 }}>
          Made with ❤️ for
          <br />
          ISET Zaghouan students
        </p>
      </div>
    </>
  );

  return (
    <>
      {/* Desktop Fixed Sidebar */}
      <aside
        className="desktop-only"
        style={{
          width: "264px",
          height: "100dvh",
          position: "sticky",
          top: 0,
          background: "var(--color-surface)",
          borderLeft: "1px solid var(--color-border)",
          flexShrink: 0,
          overflow: "hidden",
          zIndex: 40,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {sidebarContent}
      </aside>

      {/* Mobile Drawer Sidebar */}
      <AnimatePresence>
        {drawerOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              variants={backdrop}
              initial="hidden"
              animate="visible"
              exit="hidden"
              onClick={() => setDrawerOpen?.(false)}
              style={{
                position: "fixed",
                inset: 0,
                background: "rgba(11,31,58,0.6)",
                zIndex: 200,
              }}
            />

            {/* Drawer */}
            <motion.aside
              variants={drawerFromRight}
              initial="hidden"
              animate="visible"
              exit="hidden"
              style={{
                position: "fixed",
                top: 0,
                right: 0,
                bottom: 0,
                width: "280px",
                background: "var(--color-surface)",
                boxShadow: "-8px 0 40px rgba(11,31,58,0.15)",
                zIndex: 201,
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
              }}
            >
              {sidebarContent}
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
