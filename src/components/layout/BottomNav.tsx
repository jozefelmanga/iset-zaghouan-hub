"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { bottomNavLinks } from "@/constants/navigation";
import { isNavActive } from "@/lib/utils";
import { cn } from "@/lib/utils";
import { Menu } from "@/lib/icons";

/** `onOpenMenu` opens the side drawer, where every page (bourse, resto, stages, FAQ…) is listed. */
export function BottomNav({ onOpenMenu }: { onOpenMenu: () => void }) {
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
              prefetch={false}
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
        <button type="button" onClick={onOpenMenu} className="bottom-nav-link cursor-pointer border-0 bg-transparent" aria-label="كل الصفحات">
          <span className="bottom-nav-dot" aria-hidden="true" />
          <span className="bottom-nav-icon" aria-hidden="true">
            <Menu size={22} strokeWidth={2} />
          </span>
          <span className="bottom-nav-label">أكثر</span>
        </button>
      </div>
    </nav>
  );
}
