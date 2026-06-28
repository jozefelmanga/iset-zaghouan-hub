export const libraryInfo = {
  name: "المكتبة الجامعية",
  location: "في وسط الفاك",
  access: "تدخللها من غير تسجيل، لا فلوس ولا أوراق",
  features: [
    "تنجم تمشي في أي وقت وتقعد تريفز",
    "دياياسات و اكزامانات متاع الأعوام اللي فاتو",
    "تصور اللي حاجتك بيه الكل",
    "تهز كتب",
  ],
  tips: [
    "عليك كان تهز بطاقة التعريف",
    "الكل يعاونك على المراجعة",
  ],
};

export { departments } from "./departments";
export { clubs } from "./clubs";
export { exploreZaghouan, explorePreviewSpots } from "./explore";
export { faqItems, emergencyContacts } from "./faq";

/* ======================================================
   HOME PAGE DATA
   ====================================================== */

export const quickActions = [
  { id: "inscription", icon: "file-text",       title: "الترسيم الجامعي",  description: "خطوات التسجيل و الأوراق المطلوبة", href: "/inscription", category: "academic", featured: true  },
  { id: "housing",     icon: "building",        title: "المبيت الجامعي",    description: "فواي البنات و الأولاد",             href: "/housing",    category: "life"     },
  { id: "bourse",      icon: "banknote",        title: "البورص",             description: "منحة الإدماج و البورص الكاملة",   href: "/bourse",     category: "life"     },
  { id: "transport",   icon: "bus",             title: "النقل",              description: "لواجات، كيران، و المواصلات",       href: "/transport",  category: "life"     },
  { id: "stages",      icon: "briefcase",       title: "الستاجات",           description: "دليل الستاجات و نماذج التقارير",         href: "/stages",     category: "career"   },
  { id: "library",     icon: "book-open",       title: "المكتبة",            description: "مراجع و اكزامانات",                href: "/library",    category: "academic" },
];

export const campusServices = [
  { id: "resto",   icon: "utensils",  label: "الريستو",   href: "/resto",    color: "#F97316", bg: "rgba(249,115,22,0.10)"  },
  { id: "library", icon: "book-open", label: "المكتبة",   href: "/library",  color: "#3B82F6", bg: "rgba(59,130,246,0.10)"  },
  { id: "clubs",   icon: "users",     label: "النوادي",   href: "/clubs",    color: "#12B8C8", bg: "rgba(18,184,200,0.10)"  },
  { id: "masters", icon: "award",     label: "الماستر",   href: "/masters",  color: "#8B5CF6", bg: "rgba(139,92,246,0.10)"  },
];

export const studentJourney = [
  { id: 1, title: "التسجيل المبدئي",  description: "خلّص واجب التسجيل وجهّز الأوراق",        active: true  },
  { id: 2, title: "الترسيم الرسمي",   description: "خلّص الترسيم أونلاين و حضّرلو يومو",     active: false },
  { id: 3, title: "المبيت والخدمات",  description: "ترسّم في المبيت والريستو والنقل",          active: false },
  { id: 4, title: "بداية الدراسة",   description: "اكتشف المكتبة والنوادي والأنشطة",         active: false },
];

export const homeFaqPreview = [
  "كيفاش نعمل الترسيم الجامعي؟",
  "كيفاش نترسيم في المبيت؟",
  "شنية أوراق البورص؟",
  "كيفاش نروح لتونس من زغوان؟",
];

export const announcements = [
  {
    time: "سبتمبر 2024",
    title: "بداية السنة الجامعية",
    description: "انطلاق الدروس للجداد والقدامى.",
    type: "info",
  },
  {
    time: "أكتوبر 2024",
    title: "آخر أجل للبورص",
    description: "تذكير باش تقدّم أوراق منحة الإدماج.",
    type: "warning",
  },
];
