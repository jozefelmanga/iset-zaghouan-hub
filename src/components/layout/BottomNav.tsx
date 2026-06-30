"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { bottomNavLinks } from "@/constants/navigation";
import { isNavActive } from "@/lib/utils";
import { cn } from "@/lib/utils";

export function BottomNav() {
  const pathname = usePathname();
  const navHrefs = bottomNavLinks.map((link) => link.href);

  return (
    <nav className="mobile-only bottom-nav-chrome" aria-label="التنقل السفلي">
      <div className="bottom-nav-inner">
        {bottomNavLinks.map((link) => {
          const Icon = link.icon;
          const active = isNavActive(link.href, pathname, navHrefs);

          return (
            <Link
              key={link.href}
              href={link.href}
              className="bottom-nav-link"
              aria-current={active ? "page" : undefined}
            >
              <span className={cn("bottom-nav-dot", active && "bottom-nav-dot--active")} aria-hidden="true" />
              <span className={cn("bottom-nav-icon", active && "bottom-nav-icon--active")} aria-hidden="true">
                <Icon size={22} strokeWidth={active ? 2.5 : 2} />
              </span>
              <span className={cn("bottom-nav-label", active && "bottom-nav-label--active")}>
                {link.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
