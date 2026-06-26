"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
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
  GraduationCap,
} from "lucide-react";

const sidebarLinks = [
  { href: "/", label: "الرئيسية", icon: Home },
  { href: "/inscription", label: "الترسيم الجامعي", icon: FileText },
  { href: "/housing", label: "المبيت الجامعي", icon: Building2 },
  { href: "/bourse", label: "البورص", icon: Banknote },
  { href: "/resto", label: "الريستو", icon: UtensilsCrossed },
  { href: "/transport", label: "النقل", icon: Bus },
  { href: "/stages", label: "الستاجات", icon: Briefcase },
  { href: "/library", label: "المكتبة", icon: BookOpen },
  { href: "/clubs", label: "النوادي", icon: Users },
  { href: "/masters", label: "الماستر", icon: Award },
  { href: "/explore", label: "اكتشف زغوان", icon: MapPin },
  { href: "/faq", label: "الأسئلة الشائعة", icon: HelpCircle },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden md:flex flex-col w-64 h-screen sticky top-0 border-l border-border bg-surface">
      <div className="p-4 flex items-center gap-2 text-primary font-bold text-lg">
        <GraduationCap className="w-6 h-6" />
        <span>ISET Zaghouan</span>
      </div>

      <nav className="flex-1 px-3 py-2 space-y-1 overflow-y-auto">
        {sidebarLinks.map((link) => {
          const Icon = link.icon;
          const active = pathname === link.href || pathname.startsWith(link.href + "/");
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
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

      <div className="p-4 border-t border-border text-xs text-text-muted text-center">
        Made with ❤️ for ISET Zaghouan students
      </div>
    </aside>
  );
}
