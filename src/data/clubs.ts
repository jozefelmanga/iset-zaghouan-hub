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
  skills: ["Time management", "Public speaking", "Communication", "Teamwork"],
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
    id: "odd",
    name: "ODD ISET Zaghouan",
    slogan: "Shaping minds, building a sustainable world. 🌱💡",
    description: "نادي التنمية المستدامة والبيئة، ينظّم تكوينات، ورشات، وزيارات ميدانية للشركات الصناعية باش يربط القراية بالواقع المهني.",
    color: "#22C55E",
    href: "/clubs/odd",
    logo: "/images/ODD ISET Zaghouan/346084632_2212215942302379_3257380520080764734_n.webp",
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
    name: "IEEE ISET Zaghouan SB",
    slogan: "Advancing technology for humanity. ⚡🔬",
    description: "مجتمع طلابي يحمل روح IEEE — أكبر منظمة تقنية في العالم. ورشات، مشاريع، وأحداث باش تعزّز التعلّم والابتكار والتعاون.",
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
];

/** @deprecated use clubMeta */
export const clubs = [{ name: "نوادي جامعية", ...clubMeta }];
