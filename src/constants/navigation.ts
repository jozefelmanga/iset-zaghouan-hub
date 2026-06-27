/**
 * Navigation Constants — Single source of truth for all nav links.
 *
 * Used by: Sidebar, BottomNav, CommandPalette, and any future nav components.
 * Importing from here means changing a nav label or href is a one-line edit.
 */

import type { LucideIcon } from "@/lib/icons";
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
  Heart,
} from "@/lib/icons";

/* ============================================================
   TYPE DEFINITIONS
   ============================================================ */
export interface NavLink {
  href: string;
  label: string;
  icon: LucideIcon;
  description?: string;
  category?: "academic" | "life" | "career" | "campus";
}

export interface NavGroup {
  label: string;
  color: string;
  links: NavLink[];
}

/* ============================================================
   HOME LINK
   ============================================================ */
export const homeLink: NavLink = {
  href: "/",
  label: "الرئيسية",
  icon: Home,
  description: "الصفحة الرئيسية",
};

/* ============================================================
   GROUPED SIDEBAR NAVIGATION
   ============================================================ */
export const navGroups: NavGroup[] = [
  {
    label: "ACADEMICS",
    color: "#3B82F6",
    links: [
      { href: "/inscription",        label: "الترسيم الجامعي",   icon: FileText,       description: "خطوات التسجيل و الأوراق المطلوبة", category: "academic" },
      { href: "/inscription/foyer",  label: "الترسيم في المبيت", icon: Building2,      description: "تسجيل المبيت، الأوراق، و يوم الترسيم", category: "academic" },
      { href: "/library",            label: "المكتبة",            icon: BookOpen,       description: "مراجع و اكزامانات",                 category: "academic" },
      { href: "/departments",   label: "الأقسام العلمية",   icon: GraduationCap,  description: "أقسام TI، SEG، و GPR بالمعهد",     category: "academic" },
      { href: "/masters",       label: "الماستر",            icon: Award,          description: "برامج الماستر المتوفرة",             category: "academic" },
    ],
  },
  {
    label: "STUDENT LIFE",
    color: "#12B8C8",
    links: [
      { href: "/housing",   label: "المبيت الجامعي",  icon: Building2,      description: "فواي البنات و الأولاد",             category: "life" },
      { href: "/bourse",    label: "البورص",           icon: Banknote,       description: "منحة الإدماج و البورص الكاملة",     category: "life" },
      { href: "/transport", label: "النقل",            icon: Bus,            description: "لواجات، كيران، و المواصلات",         category: "life" },
      { href: "/resto",     label: "الريستو",          icon: UtensilsCrossed, description: "أوقات الوجبات و القائمة",           category: "life" },
      { href: "/clubs",     label: "النوادي",          icon: Users,          description: "أنشطة و نوادي الطلبة",               category: "life" },
    ],
  },
  {
    label: "CAREER",
    color: "#8B5CF6",
    links: [
      { href: "/stages", label: "الستاجات", icon: Briefcase, description: "دليل الستاجات و Didosoft", category: "career" },
    ],
  },
  {
    label: "OTHER",
    color: "#F97316",
    links: [
      { href: "/explore", label: "اكتشف زغوان",     icon: MapPin,     description: "أحسن البلايص في المدينة",             category: "campus" },
      { href: "/faq",     label: "الأسئلة الشائعة", icon: HelpCircle, description: "إجابات لأكثر الأسئلة اللي تتكرّر",         category: "campus" },
      { href: "/bonus",   label: "نصائح وإهداء",     icon: Heart,      description: "نصايح للجداد وشكر المساهمين",   category: "campus" },
    ],
  },
];

/* ============================================================
   FLAT LIST — all pages (used by CommandPalette and search)
   ============================================================ */
export const allNavLinks: NavLink[] = [
  homeLink,
  ...navGroups.flatMap((g) => g.links),
  // Sub-pages (for CommandPalette deep search)
  { href: "/clubs/securinets", label: "نادي SecuriNets",                 icon: Users,        description: "جمعية الأمن السيبراني في ISETZG", category: "life"     },
  { href: "/clubs/odd",        label: "نادي ODD",                        icon: Users,        description: "نادي التنمية المستدامة والبيئة",   category: "life"     },
  { href: "/clubs/enactus",    label: "نادي Enactus",                    icon: Users,        description: "ريادة الأعمال والمشاريع الطلابية", category: "life"     },
  { href: "/departments/ti",   label: "قسم تكنولوجيا المعلومات (TI)",   icon: GraduationCap, description: "تخصصات DSI و RSI ومراجعها",       category: "academic" },
  { href: "/departments/seg",  label: "قسم الاقتصاد والتصرف (SEG)",     icon: GraduationCap, description: "المحاسبة والمالية وإدارة الأعمال", category: "academic" },
  { href: "/departments/gpr",  label: "قسم هندسة العمليات (GPR)",       icon: GraduationCap, description: "الأساليب الكيميائية والأفاق",      category: "academic" },
];

/* ============================================================
   BOTTOM NAV — 5 primary mobile links
   ============================================================ */
export const bottomNavLinks: NavLink[] = [
  homeLink,
  { href: "/inscription", label: "الترسيم", icon: FileText,   category: "academic" },
  { href: "/housing",     label: "المبيت",   icon: Building2,  category: "life"     },
  { href: "/transport",   label: "النقل",    icon: Bus,        category: "life"     },
  { href: "/faq",         label: "أكثر",     icon: HelpCircle, category: "campus"   },
];

/* ============================================================
   FOOTER — quick links (short labels)
   ============================================================ */
export interface FooterLink {
  href: string;
  label: string;
}

export const footerLinks: FooterLink[] = [
  { href: "/inscription", label: "الترسيم"  },
  { href: "/housing",     label: "المبيت"   },
  { href: "/bourse",      label: "البورص"   },
  { href: "/transport",   label: "النقل"    },
  { href: "/stages",      label: "الستاجات" },
  { href: "/library",     label: "المكتبة"  },
  { href: "/clubs",       label: "النوادي"  },
  { href: "/faq",         label: "الأسئلة"  },
];
