"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Sidebar } from "@/components/layout/Sidebar";
import { BottomNav } from "@/components/layout/BottomNav";
import { CommandPalette } from "@/components/ui/CommandPalette";
import { motion } from "framer-motion";
import { pageTransition } from "@/lib/motion";

export function AppLayout({ children }: { children: React.ReactNode }) {
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <div style={{ display: "flex", minHeight: "100dvh", background: "var(--color-background)" }}>
      {/* Sidebar (desktop sticky & mobile drawer) */}
      <Sidebar drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />

      {/* Main column */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0 }}>
        {/* Navbar */}
        <Navbar setDrawerOpen={setDrawerOpen} />

        {/* Page content — animated on route change */}
        <motion.main
          key={pathname}
          initial={pageTransition.initial}
          animate={pageTransition.animate}
          transition={pageTransition.transition}
          className={isHome ? "pb-0" : "pb-20 md:pb-0"}
          style={{ flex: 1, display: "flex", flexDirection: "column" }}
        >
          {children}
        </motion.main>

        {/* Mobile BottomNav */}
        <BottomNav />

        {/* Global Command Palette */}
        <CommandPalette open={paletteOpen} onClose={() => setPaletteOpen(false)} />
      </div>
    </div>
  );
}
