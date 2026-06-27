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

export const departments = [
  { name: "TI", fullName: "Technologies de l'Information", masters: ["ISID : Ingénierie des Systèmes d'Informations Décisionnels"] },
  { name: "SEG", fullName: "Sciences Économiques et de Gestion", masters: ["E2I : Entrepreneurship et Ingénierie de l'Innovation", "MOPIL : Modernisation de la Production et Ingénierie de la Chaîne Logistique"] },
  { name: "GPR", fullName: "Génie des Procédés et de l'Environnement", masters: ["GTVDI : Gestion Traitement et Valorisation des Déchets Industriels"] },
];

export const clubs = [
  {
    name: "نوادي جامعية",
    benefits: [
      "تكتشف روحكم أكثر",
      "تنحو الحشمة",
      "تولو أكثر sociable",
      "تتعلّم Hard skills و Soft skills",
      "تعرف عباد من أعمار و اختصاصات مختلفة",
      "تربط بين الجو والتفرهيد",
      "تقوي السيرة الذاتية بالشهادات والخبرات",
    ],
    skills: ["Time management", "Public speaking", "Communication", "Teamwork"],
  },
];

export const exploreZaghouan = {
  description:
    "بلاد مليانة بتاريخها و منازلها القديمة الي سكانها مواضبين علي ترميمها، انهجها المزيانة و النظيفة، جبلها كي تطلعلو المنظر من فوق اينسيك الدنيا و ما فيها",
  studySpots: ["Fabrica", "Grech", "Royal lounge", "Para", "The Rock", "Paradise"],
  cafes: [
    "Café Rahba",
    "Café Temple",
    "La Vallée",
    "La Grotte",
    "Friday's",
    "Paradise",
    "Royal lounge",
    "Dar Zaghouan",
    "Sidi Madien",
    "L'Ardoiz",
    "Damas",
    "Zguni-gaw (rond-point fechka)",
  ],
};

export const faqItems = [
  {
    question: "كيفاش نعمل الترسيم الجامعي؟",
    answer:
      "الترسيم فيه مرحلتين: مرحلة عن بعد (تخلص بكارت E-dinar في www.inscription.tn) و مرحلة تسليم الأوراق للفاك.",
  },
  {
    question: "كيفاش نترسيم في المبيت؟",
    answer:
      "تحل موقع OOUN، تعمل compte و demande، تستنى الاجابة، تخلص الفواي و تحضر الأوراق (شهادة ترسيم + بطاقة تعريف + صور).",
  },
  {
    question: "شنية أوراق البورص؟",
    answer:
      "بطاقة التعريف، شهادة الترسيم، بطاقة الخدمات الجامعية، وثائق الدخل، شهادة الإقامة، و صور شمسية.",
  },
  {
    question: "كيفاش نروح لتونس من زغوان؟",
    answer:
      "تاخو لواج من باب عليوة (5.350 د) أو كار كونفور (4 د) أو كار عادية (3.400 د). كيران الرجوع: 10h/12h/15h/16h/17:30.",
  },
  {
    question: "وقتاش يحل الريستو؟",
    answer: "الغداة: 11:30-14:00، العشاء: 17:00-19:00. السبت مفماش عشاء.",
  },
  {
    question: "شنية أهمية الستاجات؟",
    answer:
      "الستاجات تخدم في معدل السداسي الثاني من السنة الثالثة. PFE (10) + perfectionnement (2.5) + initiation (2.5) مقسوم على 15.",
  },
  {
    question: "كيفاش نتصرف في المبيت؟",
    answer:
      "خبي نسخ من المفتاح، اشري كادنا للكازيي، ما تسلف من حد وما تسلف حد، رد بالك على دبشك، و جيب معطر جو.",
  },
];

export const emergencyContacts = [
  { name: "المبيت بنات (عم عزيز)", phone: "-", note: "عساس الفردوس" },
  { name: "لواجيست قيس", phone: "98202339", note: "نقل تونس-زغوان" },
  { name: "Restaurant Ohana", phone: "20110358 / 98681904", note: "livraison للفوايي" },
  { name: "النقل المحلي", phone: "900", note: "يوصل للايزات" },
];

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
