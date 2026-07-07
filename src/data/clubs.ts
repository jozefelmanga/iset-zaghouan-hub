export const clubMeta = {
  benefits: [
    "تكتشف روحكم أكثر",
    "تنحو الحشمة",
    "تولّو أكثر sociable",
    "تتعلّم Hard skills و Soft skills",
    "تعرف عباد من أعمار و اختصاصات مختلفة",
    "تربط بين الجو والتفرهيد",
    "تقوي السيرة الذاتية بالشهادات والخبرات",
  ],
  skills: ["تنظيم الوقت", "التحدث قدّام الناس", "التواصل", "العمل الجماعي"],
};

export const clubBenefitCards = [
  { id: "globe",         title: "توسيع دائرة المعرفة", desc: "تعرف عباد من أعمار و اختصاصات مختلفة", color: "#3B82F6", bg: "rgba(59,130,246,0.10)"  },
  { id: "briefcase",     title: "تقوية السيرة الذاتية", desc: "شهادات و خبرات باش تتحصل عليها",       color: "#8B5CF6", bg: "rgba(139,92,246,0.10)"  },
  { id: "message-circle", title: "تطوير التواصل",        desc: "تتعلّم كيفاش تتواصل و تتفاهم",          color: "#12B8C8", bg: "rgba(18,184,200,0.10)"  },
  { id: "clock",         title: "إدارة الوقت",            desc: "تنظم وقتك بين القراية و الأنشطة",      color: "#F97316", bg: "rgba(249,115,22,0.10)"  },
];

export const clubDirectory = [
  {
    id: "securinets",
    name: "SecuriNets ISET Zaghouan",
    slogan: "Defending today, securing tomorrow. 🛡️🚀",
    description: "أكبر مجتمع وتجمع طلابي للأمن السيبراني في تونس. انطلق من 2016 في الفاك ومفتوح لكل الطلبة باش تطوّرو مهارات الحماية واختبار الاختراق.",
    color: "#F6B41B",
    href: "/clubs/securinets",
    logo: "/images/SecuriNets ISET Zaghouan/307089995_5896662463700630_57012804199137690_n.webp",
  },
  {
    id: "robotique",
    name: "Club Robotique ISET Zaghouan",
    slogan: "Innovate. Create. Inspire. 🤖",
    description: "مجتمع شغوف بالروبوتيك والإلكترونيك والبرمجة: ورشات، مشاريع تطبيقية، وأنشطة تقنية وتحديات وطنية.",
    color: "#2563EB",
    href: "/clubs/robotique",
    logo: "/images/Club Robotique/logo.webp",
  },
  {
    id: "enactus",
    name: "Enactus ISET Zaghouan",
    slogan: "We empower, innovate, and create positive change. 💯🌍",
    description: "من أكثر النوادي نشاطاً في المعهد — يأسّس مشاريع اجتماعية وريادية ويعاون الفئات الهشة، ويشارك في المسابقة الوطنية كل عام.",
    color: "#12B8C8",
    href: "/clubs/enactus",
    logo: "https://th.bing.com/th/id/R.8a3ad5957f7a61393d26e56812ef3134?rik=trk7N6Nmyzry8g&pid=ImgRaw&r=0",
  },
  {
    id: "ieee",
    name: "IEEE ISET Zaghouan Student Branch",
    slogan: "Advancing technology for humanity. ⚡🔬",
    description: "فرع IEEE الطلابي في ISET Zaghouan — ورشات، تكوينات، hard & soft skills، TSYP، و شبكة IEEE العالمية. مفتوح لكل الأقسام.",
    color: "#00629B",
    href: "/clubs/ieee",
    logo: "/images/IEEE/Logo-IEEE.webp",
  },
  {
    id: "sos-ambassadeurs",
    name: "Club Ambassadeurs SOS Village",
    slogan: "Raise the voice and make the choice. 💚🤝",
    description: "نادي تطوعي تحت إشراف جمعية قرى الأطفال SOS تونس — تضامن، مبادرات إنسانية وثقافية، وجائزة أفضل نادٍ صاعد وطنياً 2026.",
    color: "#E30613",
    href: "/clubs/sos-ambassadeurs",
    logo: "/images/Club ambassadeurs sos village/logo-SOS.webp",
  },
  {
    id: "procegenius",
    name: "Club ProceGenius",
    slogan: "Innovation et Excellence en Génie des Procédés.",
    description: "نادي علمي يجمع الشغوفين بهندسة العمليات لتطوير المهارات، تبادل المعرفة، وتعزيز الابتكار من خلال دورات تدريبية ومشاريع تطبيقية.",
    color: "#22C55E",
    href: "/clubs/procegenius",
    logo: "/images/procegenius club/logo.webp",
  },
];

/** @deprecated use clubMeta */
export const clubs = [{ name: "نوادي جامعية", ...clubMeta }];
