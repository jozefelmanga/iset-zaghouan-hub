import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

/** Single source of truth for per-route SEO — keyed by pathname. */
export const PAGE_SEO = {
  "/": {
    title: "الرئيسية — دليل الطالب",
    description:
      "دليل شامل للطلبة الجدد في ISET Zaghouan: الترسيم، المبيت، النقل، البورص، الستاجات، النوادي، واكتشاف زغوان.",
  },
  "/inscription": {
    title: "الترسيم الجامعي",
    description: "خطوات التسجيل في ISET Zaghouan، الأوراق المطلوبة، ومواعيد الترسيم للطلبة الجدد.",
  },
  "/housing": {
    title: "المبيت الجامعي",
    description: "معلومات فواي البنات و الأولاد في ISET Zaghouan: الشروط، الصور، ونصائح للسكن الجامعي.",
  },
  "/bourse": {
    title: "البورص و المنحة",
    description: "دليل البورص الكاملة و منحة الإدماج في ISET Zaghouan: الشروط، الوثائق، و حاسبة الأهلية.",
  },
  "/transport": {
    title: "النقل و المواصلات",
    description: "لواجات النقل، أسعار الكيران، و معلومات المواصلات من و إلى ISET Zaghouan.",
  },
  "/resto": {
    title: "الريستو الجامعي",
    description: "أوقات الوجبات، قائمة الريستو، و نصائح للطلبة في ISET Zaghouan.",
  },
  "/stages": {
    title: "الستاجات",
    description: "دليل الستاجات على 3 سنوات، وثائق Didosoft، و نصائح للتربص في ISET Zaghouan.",
  },
  "/library": {
    title: "المكتبة",
    description: "معلومات المكتبة الجامعية، المراجع، و موارد الدراسة في ISET Zaghouan.",
  },
  "/clubs": {
    title: "النوادي الطلابية",
    description: "دليل النوادي و الأنشطة الطلابية في ISET Zaghouan: SecuriNets، ODD، Enactus، و أكثر.",
  },
  "/clubs/securinets": {
    title: "نادي SecuriNets",
    description: "جمعية الأمن السيبراني SecuriNets في ISET Zaghouan: الأنشطة، الفوائد، و كيفية الانضمام.",
  },
  "/clubs/odd": {
    title: "نادي ODD",
    description: "نادي التنمية المستدامة ODD في ISET Zaghouan: المشاريع البيئية و الأنشطة الطلابية.",
  },
  "/clubs/enactus": {
    title: "نادي Enactus",
    description: "نادي Enactus في ISET Zaghouan: ريادة الأعمال، المشاريع الاجتماعية، و الفرص للطلبة.",
  },
  "/departments": {
    title: "الأقسام العلمية",
    description: "نظرة عامة على أقسام TI، SEG، و GPR في ISET Zaghouan.",
  },
  "/departments/ti": {
    title: "قسم تكنولوجيا المعلومات (TI)",
    description: "تخصصات DSI و RSI، المواد، و المراجع لقسم TI في ISET Zaghouan.",
  },
  "/departments/seg": {
    title: "قسم الاقتصاد و التصرف (SEG)",
    description: "تخصصات المحاسبة، المالية، و إدارة الأعمال في قسم SEG بـ ISET Zaghouan.",
  },
  "/departments/gpr": {
    title: "قسم هندسة العمليات (GPR)",
    description: "تخصصات الأساليب الكيميائية و الأفاق المهنية في قسم GPR بـ ISET Zaghouan.",
  },
  "/masters": {
    title: "برامج الماستر",
    description: "برامج الماستر المتوفرة و شروط الولوج في ISET Zaghouan.",
  },
  "/explore": {
    title: "اكتشف زغوان",
    description: "أحسن البلايص للدراسة، المقاهي، و الأنشطة في مدينة زغوان للطلبة.",
  },
  "/faq": {
    title: "الأسئلة الشائعة",
    description: "إجابات لأكثر الأسئلة اللي يسألوها الطلبة الجداد في ISET Zaghouan.",
  },
  "/bonus": {
    title: "نصائح و إهداء",
    description: "نصائح عملية للطلبة الجدد و شكر المساهمين في دليل ISET Zaghouan.",
  },
} as const satisfies Record<string, { title: string; description: string }>;

export type PagePath = keyof typeof PAGE_SEO;

export function pageMetadata(path: PagePath): Metadata {
  const { title, description } = PAGE_SEO[path];
  return createPageMetadata({ title, description, path });
}

/** All indexable routes for sitemap generation. */
export const SITEMAP_PATHS = Object.keys(PAGE_SEO) as PagePath[];
