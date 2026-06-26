"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Sidebar } from "@/components/layout/Sidebar";
import { BottomNav } from "@/components/layout/BottomNav";
import { FloatingActionButton } from "@/components/ui/FloatingActionButton";
import { CommandPalette } from "@/components/ui/CommandPalette";
import { motion } from "framer-motion";

export function AppLayout({ children }: { children: React.ReactNode }) {
  const [paletteOpen, setPaletteOpen] = useState(false);

  return (
    <div style={{ display: "flex", minHeight: "100dvh", background: "var(--color-background)" }}>
      {/* Sidebar (desktop only) */}
      <Sidebar />

      {/* Main column */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0 }}>
        {/* Navbar */}
        <Navbar />

        {/* Page content */}
        <motion.main
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          style={{ flex: 1, paddingBottom: "80px" }}
        >
          {children}
        </motion.main>

        {/* Mobile BottomNav */}
        <BottomNav />

        {/* Mobile FAB */}
        <FloatingActionButton onSearchOpen={() => setPaletteOpen(true)} />

        {/* Global Command Palette (accessible from FAB) */}
        <CommandPalette open={paletteOpen} onClose={() => setPaletteOpen(false)} />
      </div>
    </div>
  );
}
