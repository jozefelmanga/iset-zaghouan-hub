"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  FileText,
  Building2,
  Bus,
  HelpCircle,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const bottomLinks = [
  { href: "/",           label: "الرئيسية", icon: Home     },
  { href: "/inscription",label: "الترسيم",  icon: FileText  },
  { href: "/housing",    label: "المبيت",   icon: Building2 },
  { href: "/transport",  label: "النقل",    icon: Bus       },
  { href: "/faq",        label: "أكثر",     icon: HelpCircle},
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav
      className="md:hidden"
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        height: "68px",
        background: "rgba(11,31,58,0.96)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderTop: "1px solid rgba(255,255,255,0.07)",
        boxShadow: "0 -4px 24px rgba(11,31,58,0.18)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          height: "100%",
          padding: "0 8px",
        }}
      >
        {bottomLinks.map((link) => {
          const Icon = link.icon;
          const active =
            pathname === link.href ||
            (link.href !== "/" && pathname.startsWith(link.href + "/"));

          return (
            <Link
              key={link.href}
              href={link.href}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "3px",
                padding: "8px 12px",
                borderRadius: "12px",
                textDecoration: "none",
                position: "relative",
                flex: "1 1 0",
                maxWidth: "72px",
              }}
            >
              {/* Active indicator dot */}
              <AnimatePresence>
                {active && (
                  <motion.div
                    layoutId="bottom-nav-indicator"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    style={{
                      position: "absolute",
                      top: "6px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: "4px",
                      height: "4px",
                      borderRadius: "50%",
                      background: "#12B8C8",
                    }}
                  />
                )}
              </AnimatePresence>

              {/* Icon */}
              <motion.div
                animate={{
                  color: active ? "#12B8C8" : "rgba(255,255,255,0.45)",
                  scale: active ? 1.1 : 1,
                }}
                transition={{ duration: 0.2 }}
                style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
              >
                <Icon size={22} strokeWidth={active ? 2.5 : 2} />
              </motion.div>

              {/* Label */}
              <motion.span
                animate={{
                  color: active ? "#12B8C8" : "rgba(255,255,255,0.4)",
                  fontWeight: active ? 600 : 400,
                }}
                style={{ fontSize: "10px", fontFamily: "var(--font-sans)" }}
              >
                {link.label}
              </motion.span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
