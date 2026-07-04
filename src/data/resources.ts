export type ExternalVideoResource = {
  type: "video";
  embedUrl: string;
  title: string;
  description: string;
  credit?: string;
};

export type ExternalLinkResource = {
  type: "link";
  featured?: boolean;
  title: string;
  subtitle: string;
  description: string;
  href: string;
  icon: "book-open" | "briefcase";
  color: string;
  bg: string;
  preview: {
    gradient: string;
    highlights: string[];
  };
};

export type ExternalResource = ExternalVideoResource | ExternalLinkResource;

export const externalResourcesMeta = {
  label: "مصادر مفيدة",
  title: "روابط تهمك كطالب",
  subtitle: "منصات أساسية وفيديوهات تعاونك في مسيرتك الجامعية وبعد التخرج",
};

export const externalResources: ExternalResource[] = [
  {
    type: "link",
    featured: true,
    title: "AceIT Platform",
    subtitle: "Student Resources",
    description: "منصة شاملة فيها مصادر دراسية وملخصات لطلاب الإجازة باش تسهّل عليهم مسيرتهم.",
    href: "https://aceittn.vercel.app",
    icon: "book-open",
    color: "#3B82F6",
    bg: "rgba(59,130,246,0.1)",
    preview: {
      gradient: "linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #60a5fa 100%)",
      highlights: ["ملخصات", "امتحانات", "مراجع", "نصائح"],
    },
  },
  {
    type: "link",
    featured: true,
    title: "After Graduation Guide",
    subtitle: "Career & Masters",
    description: "دليل كامل يوجّهك بعد التخرج — من الماستر والمناظرة الخصوصية للمهندسين إلى التكوين المزدوج.",
    href: "https://after-graduation.vercel.app/",
    icon: "briefcase",
    color: "#8B5CF6",
    bg: "rgba(139,92,246,0.1)",
    preview: {
      gradient: "linear-gradient(135deg, #4c1d95 0%, #7c3aed 50%, #a78bfa 100%)",
      highlights: ["ماستر", "المناظرة الخصوصية للمهندسين", " التكوين المزدوج"],
    },
  },
  {
    type: "video",
    embedUrl: "https://www.youtube.com/embed/WKIVD4q5kws",
    title: "اكتشف ISET Zaghouan",
    description: "فيديو مهم باش تعرف أجواء المعهد وكل ما تحتاج تعرفو.",
    credit: "إعداد الطالب: أسامة الغيزاوي",
  },
  {
    type: "video",
    embedUrl: "https://www.youtube.com/embed/hs-jfqcg6Bw",
    title: "تجربة طلبة ISET Zaghouan",
    description: "نصايح مهمة للجداد اللي نجحوا في الباك وتجربة طلبة إيسات زغوان في المعهد.",
  },
];

export const afterGraduationGuide = externalResources.find(
  (resource): resource is ExternalLinkResource =>
    resource.type === "link" && resource.title === "After Graduation Guide"
)!;
