import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

/** Single source of truth for per-route SEO — keyed by pathname. */
export const PAGE_SEO = {
  "/": {
    // The root layout's title template doesn't apply to the root page, so add the site name here.
    title: "الرئيسية — دليل الطالب | ISET Zaghouan Hub",
    description:
      "دليل الطالب الشامل في ISET Zaghouan: كل ما تحتاجه حول الترسيم الجامعي، المبيت، النقل، البورص، الستاجات، والنوادي لتسهيل مسارك الدراسي.",
  },
  "/inscription": {
    title: "الترسيم الجامعي",
    description: "دليل الترسيم الجامعي في ISET Zaghouan (inscription ISET Zaghouan): الخطوات، موقع الترسيم عبر E-dinar، الأوراق المطلوبة، ومواعيد الترسيم.",
  },
  "/housing": {
    title: "المبيت الجامعي",
    description: "دليل السكن والمبيت الجامعي في زغوان (مبيت المكرن): معلومات فواي البنات والأولاد، الوثائق المطلوبة، الصور، ونصائح عملية للعيش في الفواي.",
  },
  "/inscription/foyer": {
    title: "أوراق الترسيم في المبيت الجامعي 2026-2027",
    description: "أوراق الترسيم في المبيت الجامعي و شروط الانتفاع بالسكن لطلبة ISET Zaghouan: قائمة الوثائق كاملة، التسجيل في موقع OOUN، الخلاص بـ E-dinar و يوم الدخول للفواي.",
  },
  "/bourse": {
    title: "أوراق البورص و منحة الإدماج 2026-2027",
    description: "قائمة أوراق البورص و منحة الإدماج (500 د) كاملة، شروط المنحة الجامعية، مراحل التقديم للديوان، و مبالغ و مواعيد الدفعات لطلبة ISET Zaghouan.",
  },
  "/transport": {
    title: "توقيت الحافلات تونس زغوان و النقل",
    description: "توقيت الحافلات (الكار) زغوان تونس، زغوان نابل و زغوان سوسة مكتوب كامل، جداول SRTGN، اللواجات، الأبونمان و أسهل الطرق للوصول لـ ISET Zaghouan.",
  },
  "/resto": {
    title: "الريستو الجامعي",
    description: "دليل الريستو والمطعم الجامعي في ISET Zaghouan: أوقات وجبات الغداء والعشاء، سعر التذاكر، قائمة المأكولات، ونصائح عملية للطلبة الجدد.",
  },
  "/stages": {
    title: "الستاجات",
    description:
      "دليل ستاجات ISET Zaghouan (stage ISET Zaghouan): مسار تفاعلي، إجراءات إدارية، مواعيد، شعارات، نماذج SEG، حاسبة المعدل، و نصايح التربص.",
  },
  "/stages/pfe": {
    title: "PFE: شنوة مشروع التخرج و كيفاش تحضّرو",
    description: "شنوة معنى PFE (Projet de Fin d'Études) و دليل مشروع التخرج في ISET Zaghouan: اختيار الموضوع، التقرير، العرض التقديمي، الـ Soutenance و نماذج للتحميل.",
  },
  "/stages/companies": {
    title: "شركات الستاج: دليل الشركات للتربص",
    description: "دليل شركات التربصات لطلبة ISET Zaghouan: قاعدة بيانات موثوقة بالشركات والمؤسسات مع أرقام الهاتف والعناوين لمساعدتك في إيجاد ستاجك بسهولة.",
  },
  "/library": {
    title: "المكتبة",
    description: "دليل المكتبة الجامعية في ISET Zaghouan: أوقات الفتح، كيفية الإعارة، بنك الامتحانات والفروض السابقة (DS & Examens)، والمراجع المتوفرة للمراجعة.",
  },
  "/clubs": {
    title: "النوادي الطلابية",
    description: "دليل النوادي والأنشطة الطلابية في ISET Zaghouan: اكتشف نوادي SecuriNets و Robotique و Enactus و IEEE و SOS، وطوّر مهاراتك وانضم للمجتمع الطلابي.",
  },
  "/clubs/securinets": {
    title: "نادي SecuriNets",
    description: "نادي SecuriNets في ISET Zaghouan: نادي الأمن السيبراني واختبار الاختراق، ورشات العمل، المشاركة في مسابقات CTF، وكيفية الانضمام للفريق.",
  },
  "/clubs/robotique": {
    title: "Club Robotique ISET Zaghouan",
    description: "نادي الروبوتيك بـ ISET Zaghouan: ورشات تطبيقية في Arduino والإلكترونيك والبرمجة، مشاريع روبوتية مبتكرة، والمشاركة في التحديات والهاكاثونات.",
  },
  "/clubs/enactus": {
    title: "نادي Enactus",
    description: "نادي Enactus في ISET Zaghouan: ريادة الأعمال والمشاريع الاجتماعية، تنمية مهارات القيادة والعمل الجماعي، والمنافسة في المسابقة الوطنية السنوية.",
  },
  "/clubs/ieee": {
    title: "IEEE ISET Zaghouan Student Branch",
    description: "فرع IEEE الطلابي في ISET Zaghouan: ورشات، تكوينات، hard & soft skills، TSYP، IEEE Tunisia Section، و شبكة أكبر منظمة تقنية في العالم.",
  },
  "/clubs/sos-ambassadeurs": {
    title: "نادي سفراء قرى الأطفال SOS",
    description: "نادي سفراء قرى الأطفال SOS بـ ISET Zaghouan: مبادرات إنسانية وثقافية، عمل تطوعي ومجتمعي، وتتويج كأفضل نادٍ صاعد على المستوى الوطني.",
  },
  "/clubs/procegenius": {
    title: "Club ProceGenius",
    description: "نادي ProceGenius في ISET Zaghouan: النادي العلمي لطلبة هندسة العمليات لتبادل الخبرات، ورشات تكوينية متخصصة، ومشاريع تطبيقية في الصناعة الكيميائية والغذائية.",
  },
  "/departments": {
    title: "الأقسام العلمية",
    description: "الأقسام العلمية في ISET Zaghouan: تعرّف على اختصاصات تكنولوجيا المعلومات (TI)، العلوم الاقتصادية والتصرف (SEG)، وهندسة العمليات (GPR) والمسارات الدراسية.",
  },
  "/departments/ti": {
    title: "قسم تكنولوجيا المعلومات (TI)",
    description: "قسم تكنولوجيا المعلومات (TI) بـ ISET Zaghouan: مسارات DSI و RSI، البرمجة، الشبكات، البرامج التعليمية والمصادر المجانية للطلبة.",
  },
  "/departments/seg": {
    title: "قسم الاقتصاد و التصرف (SEG)",
    description: "قسم العلوم الاقتصادية والتصرف (SEG) بـ ISET Zaghouan: دراسة المحاسبة، المالية، وإدارة الأعمال، خطط المواد، والآفاق المهنية للخريجين.",
  },
  "/departments/gpr": {
    title: "قسم هندسة العمليات (GPR)",
    description: "قسم هندسة العمليات (GPR) بـ ISET Zaghouan: تخصصات الأساليب الكيميائية والغذائية، التجارب المخبرية، وفرص العمل في القطاع الصناعي ومراقبة الجودة.",
  },
  "/masters": {
    title: "برامج الماستر",
    description: "برامج الماستر المهني في ISET Zaghouan: ماستيرات ISID و E2I و MOPIL و GTVDI، شروط القبول وملفات الترشح والآفاق الأكاديمية والمهنية.",
  },
  "/explore": {
    title: "اكتشف زغوان",
    description: "دليل مدينة زغوان للطلبة: أحسن المقاهي للدراسة، أماكن السكن والترفيه، المواقع الطبيعية والسياحية، وكل الخدمات القريبة من معهد ISET.",
  },
  "/faq": {
    title: "الأسئلة الشائعة",
    description: "الأسئلة الشائعة وإجاباتها لطلبة ISET Zaghouan: كل الاستفسارات حول الترسيم، المبيت، الستاجات، الامتحانات، والحياة الجامعية في مكان واحد.",
  },
  "/bonus": {
    title: "نصائح و إهداء",
    description: "نصائح عملية وتجارب حقيقية للنجاح في ISET Zaghouan للطلبة الجدد، مع شكر وتقدير لكل المساهمين والنوادي التي ساعدت في بناء هذا الدليل.",
  },
  "/privacy": {
    title: "سياسة الخصوصية",
    description: "سياسة الخصوصية متاع ISET Zaghouan Hub: شنية المعلومات اللي تجمعها أدوات الإحصائيات (Google Analytics و Microsoft Clarity)، علاش، و كيفاش توقفها.",
  },
  "/about": {
    title: "عن المنصة",
    description: "عن دليل ISET Zaghouan Hub: منصة طلابية مستقلة ومجانية، طُوّرت من قبل الطلبة لمساعدة زملائهم وتوفير كل المعلومات والمراجع الجامعية الموثوقة.",
  },
} as const satisfies Record<string, { title: string; description: string }>;

export type PagePath = keyof typeof PAGE_SEO;

export function pageMetadata(path: PagePath): Metadata {
  const { title, description } = PAGE_SEO[path];
  return createPageMetadata({ title, description, path });
}

/** All indexable routes for sitemap generation. */
export const SITEMAP_PATHS = Object.keys(PAGE_SEO) as PagePath[];
