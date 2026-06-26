"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Sidebar } from "@/components/layout/Sidebar";
import { BottomNav } from "@/components/layout/BottomNav";
import { CommandPalette } from "@/components/ui/CommandPalette";
import { motion } from "framer-motion";

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

        {/* Page content */}
        <motion.main
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
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
