export type ExternalVideoResource = {
  type: "video";
  embedUrl: string;
  title: string;
  description: string;
  credit?: string;
};

export type ExternalLinkResource = {
  type: "link";
  title: string;
  subtitle: string;
  description: string;
  href: string;
  icon: "book-open" | "briefcase";
  color: string;
  bg: string;
};

export type ExternalResource = ExternalVideoResource | ExternalLinkResource;

export const externalResourcesMeta = {
  label: "مصادر مفيدة",
  title: "روابط تهمك كطالب",
  subtitle: "منصات وفيديوهات تعاونك في مسيرتك الجامعية وبعد التخرج",
};

export const externalResources: ExternalResource[] = [
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
  {
    type: "link",
    title: "AceIT Platform",
    subtitle: "Student Resources",
    description: "منصة شاملة فيها مصادر دراسية وملخصات لطلاب الإجازة باش تسهّل عليهم مسيرتهم.",
    href: "https://aceittn.vercel.app",
    icon: "book-open",
    color: "#3B82F6",
    bg: "rgba(59,130,246,0.1)",
  },
  {
    type: "link",
    title: "After Graduation Guide",
    subtitle: "Career & Masters",
    description: "دليل كامل يوجّهك بعد التخرج نحو الحياة المهنية، الستاجات، ولا إكمال الدراسة في الماستر.",
    href: "https://after-graduation.vercel.app/",
    icon: "briefcase",
    color: "#8B5CF6",
    bg: "rgba(139,92,246,0.1)",
  },
];
