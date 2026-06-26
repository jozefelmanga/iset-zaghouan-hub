"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { GraduationCap, Search, Menu } from "lucide-react";
import { motion } from "framer-motion";
import { CommandPalette } from "@/components/ui/CommandPalette";

export function Navbar({ setDrawerOpen }: { setDrawerOpen: (v: boolean) => void }) {
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
            padding: "0 clamp(16px, 4vw, 32px)",
            height: "100%",
            display: "flex",
            alignItems: "center",
            gap: "clamp(12px, 3vw, 24px)",
          }}
        >
          {/* Hamburger — mobile only */}
          <motion.button
            className="mobile-only"
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
            }}
          >
            <Menu size={20} strokeWidth={2} />
          </motion.button>

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
              className="desktop-only"
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

          {/* Logo */}
          <Link
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              textDecoration: "none",
              flexShrink: 0,
              marginRight: "auto",
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
        </div>
      </header>

    </>
  );
}
