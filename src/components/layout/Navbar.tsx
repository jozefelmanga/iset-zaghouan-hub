"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  GraduationCap,
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

const navLinks = [
  { href: "/", label: "الرئيسية", icon: Home },
  { href: "/inscription", label: "الترسيم", icon: FileText },
  { href: "/housing", label: "المبيت", icon: Building2 },
  { href: "/bourse", label: "البورص", icon: Banknote },
  { href: "/resto", label: "الريستو", icon: UtensilsCrossed },
  { href: "/transport", label: "النقل", icon: Bus },
  { href: "/stages", label: "الستاجات", icon: Briefcase },
  { href: "/library", label: "المكتبة", icon: BookOpen },
  { href: "/clubs", label: "النوادي", icon: Users },
  { href: "/masters", label: "الماستر", icon: Award },
  { href: "/explore", label: "اكتشف زغوان", icon: MapPin },
  { href: "/faq", label: "الأسئلة", icon: HelpCircle },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-surface border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-primary font-bold text-lg">
          <GraduationCap className="w-6 h-6" />
          <span className="hidden sm:inline">ISET Zaghouan</span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.slice(0, 6).map((link) => {
            const Icon = link.icon;
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm transition-colors ${
                  active
                    ? "bg-primary/10 text-primary font-medium"
                    : "text-text-muted hover:text-text hover:bg-border/50"
                }`}
              >
                <Icon className="w-4 h-4" />
                {link.label}
              </Link>
            );
          })}
        </nav>

        <button
          className="md:hidden p-2 rounded-lg hover:bg-border/50"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden border-t border-border overflow-hidden bg-surface"
          >
            <div className="px-4 py-3 grid grid-cols-2 gap-2">
              {navLinks.map((link) => {
                const Icon = link.icon;
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                      active
                        ? "bg-primary/10 text-primary font-medium"
                        : "text-text-muted hover:text-text hover:bg-border/50"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
