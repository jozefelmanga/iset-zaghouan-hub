"use client";

import { useState, useEffect, useCallback } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { GraduationCap, Search, Menu } from "@/lib/icons";
import { motion } from "framer-motion";

const CommandPalette = dynamic(
  () =>
    import("@/components/ui/CommandPalette").then((mod) => ({
      default: mod.CommandPalette,
    })),
  { ssr: false }
);

export function Navbar({ setDrawerOpen }: { setDrawerOpen: (v: boolean) => void }) {
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [paletteMounted, setPaletteMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const openPalette = useCallback(() => {
    setPaletteMounted(true);
    setPaletteOpen(true);
  }, []);

  const closePalette = useCallback(() => {
    setPaletteOpen(false);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setPaletteMounted(true);
        setPaletteOpen((prev) => !prev);
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  return (
    <>
      {paletteMounted && (
        <CommandPalette open={paletteOpen} onClose={closePalette} />
      )}

      <header
        className={`sticky top-0 z-50 nav-chrome transition-all duration-300 ${scrolled ? "nav-chrome-scrolled" : ""}`}
        style={{ height: "80px" }}
        aria-label="التنقل الرئيسي"
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
          <motion.button
            className="mobile-only"
            type="button"
            aria-label="فتح القائمة"
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
            <Menu size={20} strokeWidth={2} aria-hidden="true" />
          </motion.button>

          <button
            type="button"
            aria-label="بحث في الدليل"
            onClick={openPalette}
            className="search-btn"
            style={{
              flex: 1,
              maxWidth: "360px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              height: "42px",
              padding: "0 16px",
              borderRadius: "var(--radius-search)",
              cursor: "pointer",
              fontSize: "13px",
              fontFamily: "var(--font-sans)",
              transition: "all var(--transition-base)",
            }}
          >
            <Search size={16} strokeWidth={2} style={{ flexShrink: 0 }} aria-hidden="true" />
            <span style={{ flex: 1, textAlign: "right" }}>بحث في الدليل...</span>
            <kbd
              className="desktop-only"
              style={{
                fontSize: "10px",
                padding: "2px 7px",
                borderRadius: "5px",
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.12)",
                color: "rgba(255,255,255,0.92)",
                fontFamily: "var(--font-sans)",
                flexShrink: 0,
              }}
            >
              Ctrl K
            </kbd>
          </button>

          <Link
            href="/"
            aria-label="الصفحة الرئيسية - ISET Zaghouan"
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
