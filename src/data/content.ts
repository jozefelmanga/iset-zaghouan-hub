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
    "كل يعاونك على المراجعة",
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
  { id: "inscription", title: "الترسيم الجامعي",  description: "خطوات التسجيل و الأوراق المطلوبة", href: "/inscription", category: "academic", featured: true  },
  { id: "housing",     title: "المبيت الجامعي",    description: "فواي البنات و الأولاد",             href: "/housing",    category: "life"     },
  { id: "bourse",      title: "البورص",             description: "منحة الإدماج و البورص الكاملة",   href: "/bourse",     category: "life"     },
  { id: "transport",   title: "النقل",              description: "لواجات، كيران، و المواصلات",       href: "/transport",  category: "life"     },
  { id: "stages",      title: "الستاجات",           description: "دليل الستاجات و Didosoft",         href: "/stages",     category: "career"   },
  { id: "library",     title: "المكتبة",            description: "مراجع و اكزامانات",                href: "/library",    category: "academic" },
];

export const campusServices = [
  { id: "resto",   label: "الريستو",   href: "/resto",    color: "#F97316", bg: "rgba(249,115,22,0.10)"  },
  { id: "library", label: "المكتبة",   href: "/library",  color: "#3B82F6", bg: "rgba(59,130,246,0.10)"  },
  { id: "clubs",   label: "النوادي",   href: "/clubs",    color: "#12B8C8", bg: "rgba(18,184,200,0.10)"  },
  { id: "masters", label: "الماستر",   href: "/masters",  color: "#8B5CF6", bg: "rgba(139,92,246,0.10)"  },
];

export const studentJourney = [
  { id: 1, title: "التسجيل المبدئي",  description: "ادفع واجب التسجيل وجهز الوثائق",        active: true  },
  { id: 2, title: "الترسيم الرسمي",   description: "تخلص الترسيم أونلاين و حضرلو يومو",     active: false },
  { id: 3, title: "المبيت والخدمات",  description: "سجل في المبيت والريستو والنقل",          active: false },
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
    description: "انطلاق الدروس بالنسبة للطلبة الجدد والقدامى.",
    type: "info",
  },
  {
    time: "أكتوبر 2024",
    title: "آخر أجل للبورص",
    description: "تذكير بتقديم أوراق منحة الإدماج.",
    type: "warning",
  },
];
