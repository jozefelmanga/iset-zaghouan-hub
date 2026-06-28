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
export { exploreZaghouan } from "./explore";
export { faqItems, emergencyContacts } from "./faq";

/* ======================================================
   HOME PAGE DATA
   ====================================================== */

export const quickActions = [
  { id: "library",     icon: "book-open",       title: "المكتبة",            description: "مراجع و اكزامانات",                href: "/library",     category: "academic", featured: true },
  { id: "departments", icon: "graduation-cap",  title: "الأقسام العلمية",   description: "أقسام TI، SEG، و GPR بالمعهد",     href: "/departments", category: "academic" },
  { id: "clubs",       icon: "users",           title: "النوادي",            description: "أنشطة و نوادي الطلبة",             href: "/clubs",       category: "life"     },
  { id: "resto",       icon: "utensils",        title: "الريستو",            description: "أوقات الوجبات و القائمة",           href: "/resto",       category: "life"     },
  { id: "masters",     icon: "award",           title: "الماستر",            description: "برامج الماستر المتوفرة",             href: "/masters",     category: "academic" },
  { id: "faq",         icon: "help-circle",     title: "الأسئلة الشائعة",    description: "إجابات لأكثر الأسئلة اللي تتكرّر",  href: "/faq",         category: "campus"   },
];

export const studentJourney = [
  { id: 1, title: "التسجيل المبدئي",  description: "خلّص واجب التسجيل وجهّز الأوراق",        href: "/inscription", icon: "file-text" },
  { id: 2, title: "الترسيم الرسمي",   description: "خلّص الترسيم أونلاين و حضّرلو يومو",     href: "/inscription", icon: "check-circle" },
  { id: 3, title: "الترسيم في المبيت", description: "تسجيل المبيت، الأوراق، و يوم الترسيم",          href: "/inscription/foyer", icon: "building" },
  { id: 4, title: "بداية الدراسة",   description: "اكتشف المكتبة والنوادي والأنشطة",         href: "/clubs",       icon: "sparkles" },
];
