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
} from "lucide-react";

const bottomLinks = [
  { href: "/", label: "الرئيسية", icon: Home },
  { href: "/inscription", label: "الترسيم", icon: FileText },
  { href: "/housing", label: "المبيت", icon: Building2 },
  { href: "/transport", label: "النقل", icon: Bus },
  { href: "/faq", label: "المزيد", icon: HelpCircle },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="md:hidden fixed bottom-0 inset-x-0 z-50 bg-surface border-t border-border shadow-[0_-2px_10px_rgba(0,0,0,0.05)]">
      <div className="flex items-center justify-around h-16">
        {bottomLinks.map((link) => {
          const Icon = link.icon;
          const active = pathname === link.href || pathname.startsWith(link.href + "/");
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`flex flex-col items-center gap-0.5 px-2 py-1 rounded-lg text-xs transition-colors ${
                active ? "text-primary" : "text-text-muted"
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="text-[10px]">{link.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
