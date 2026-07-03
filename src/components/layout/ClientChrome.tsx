"use client";

import { useState, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Sidebar } from "@/components/layout/Sidebar";
import { BottomNav } from "@/components/layout/BottomNav";

interface ClientChromeProps {
  children: ReactNode;
  footer: ReactNode;
}

/** Client island — nav, drawer state, bottom bar. Page content stays server-rendered via children. */
export function ClientChrome({ children, footer }: ClientChromeProps) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <div style={{ display: "flex", minHeight: "100dvh", background: "var(--color-background)" }}>
      <a href="#main-content" className="skip-link">
        الانتقال إلى المحتوى الرئيسي
      </a>

      <Sidebar drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />

      <div style={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0 }}>
        <Navbar setDrawerOpen={setDrawerOpen} />

        <main
          id="main-content"
          tabIndex={-1}
          className={isHome ? "pb-0" : "pb-20 md:pb-0"}
          style={{ flex: 1, display: "flex", flexDirection: "column" }}
        >
          {children}
        </main>

        {footer}
        <BottomNav />
      </div>
    </div>
  );
}
