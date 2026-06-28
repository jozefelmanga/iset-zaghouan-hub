import type { Internship } from "@/types";

export const internshipMistakes = [
  "ما تنساش التواقيع (entreprise + encadrant + département)",
  "ما تنسخش تقارير قديمة — النسخ يسبب مشاكل أكاديمية",
  "خزّن نسخ احتياطية من rapport و présentation",
  "علّم chef de département باللغة المختارة (فرنسية/إنجليزية)",
  "ما تتأخرش في تسليم الأوراق قبل soutenance",
  "رد بالك على deadlines الإدارية — تأخر = مشاكل إدارية",
  "soutenance خاصة — ما تجيبش صحابك ولا أهلك للقاعة",
];

export const internshipRelatedResources = [
  { label: "الإجراءات الإدارية", href: "#admin", icon: "file" as const },
  { label: "Livret / Journal", href: "#journal", icon: "book" as const },
  { label: "دليل الشركات", href: "/stages/companies", icon: "file" as const },
  { label: "المصطلحات والوثائق", href: "#vocabulary", icon: "file" as const },
  { label: "نماذج التقارير", href: "#examples", icon: "book" as const },
  { label: "الشعارات", href: "#kit", icon: "download" as const },
  { label: "حاسبة المعدل", href: "#calculator", icon: "calculator" as const },
  { label: "الصفحة الرسمية — ISET", href: "https://isetzg.rnu.tn/fra/pages/332/D%C3%A9roulement-de-stages", icon: "globe" as const, external: true },
];

export const internships: Internship[] = [
  {
    year: 1,
    name: "Stage d'initiation",
    emoji: "🏢",
    duration: "28 يوم",
    durationDays: 28,
    timing: "جانفي — بداية فيفري (~شهر)",
    weight: 2.5,
    difficulty: "easy",
    requirements: ["les rapports", "présentations", "soutenance"],
    docs: ["journal", "rapport"],
    objectives: [
      "اكتشاف بيئة العمل المهنية",
      "فهم تنظيم المؤسسة و أدوارها",
      "تطبيق معارف أساسية من الدراسة",
    ],
    deliverables: ["journal يومي", "rapport (~25-35 صفحة)", "présentation (~10 دقائق)", "soutenance (~15 دقيقة)"],
    deadlines: [
      { label: "بداية الستاج", month: "جانفي", monthIndex: 0 },
      { label: "تسليم rapport", month: "فيفري", monthIndex: 1 },
      { label: "soutenance", month: "مارس", monthIndex: 2 },
    ],
    faq: [
      {
        question: "نجم نعمل الستاج مع صاحبي؟",
        answer: "يعتمد على الشركة. بعض الشركات تقبل طلبتين، أما rapport و soutenance يكونوا فرديين.",
      },
      {
        question: "نجم نبدّل الشركة؟",
        answer: "إذا لقيت مشكلة مبكرة، تواصل مع encadrant و chef de département قبل ما تكمّل الوقت.",
      },
    ],
    workload: {
      reportPages: "~30 صفحة",
      presentationMinutes: "10 دقائق",
      journalEntries: "28 إدخال",
      defenseMinutes: "15 دقيقة",
    },
  },
  {
    year: 2,
    name: "Stage de perfectionnement",
    emoji: "📁",
    duration: "28 يوم",
    durationDays: 28,
    timing: "جانفي — بداية فيفري (~شهر)",
    weight: 2.5,
    difficulty: "medium",
    requirements: ["les rapports", "présentations", "soutenance"],
    docs: ["journal", "rapport"],
    objectives: [
      "تعميق المهارات المكتسبة في السنة الأولى",
      "المشاركة في مهام أكثر تعقيداً",
      "تحليل عملي لمشكلة مهنية",
    ],
    deliverables: ["journal يومي", "rapport (~35-45 صفحة)", "présentation (~12 دقيقة)", "soutenance (~15 دقيقة)"],
    deadlines: [
      { label: "بداية الستاج", month: "جانفي", monthIndex: 0 },
      { label: "تسليم rapport", month: "فيفري", monthIndex: 1 },
      { label: "soutenance", month: "مارس", monthIndex: 2 },
    ],
    faq: [
      {
        question: "شنية الفرق عن initiation؟",
        answer: "المستوى المطلوب أعلى: rapport أطول، تحليل أعمق، و مسؤوليات أكبر في الشركة.",
      },
      {
        question: "لازم نكون في نفس الشركة؟",
        answer: "لا، تنجم تبدّل entreprise. المهم تختار مكان يسمحلك تطوّر مهاراتك.",
      },
      {
        question: "كيفاش نختار الموضوع؟",
        answer: "تواصل مع encadrant في الشركة و encadrant في المعهد باش يكون الموضوع متوافق مع تخصصك.",
      },
    ],
    workload: {
      reportPages: "~40 صفحة",
      presentationMinutes: "12 دقيقة",
      journalEntries: "28 إدخال",
      defenseMinutes: "15 دقيقة",
    },
  },
  {
    year: 3,
    name: "Stage PFE (Projet de Fin d'Études)",
    emoji: "🎓",
    duration: "كامل السداسي الثاني",
    timing: "السنة الثالثة، السداسي الثاني",
    weight: 10,
    difficulty: "hard",
    requirements: ["rapport PFE", "présentation", "soutenance"],
    docs: ["rapport PFE", "présentation"],
    objectives: [
      "إنجاز مشروع مهني متكامل",
      "تطبيق كل المعارف المكتسبة",
      "الاستعداد للدخول في سوق الشغل",
    ],
    deliverables: ["rapport PFE (~90-100 صفحة)", "présentation (~20 دقيقة)", "soutenance (~60 دقيقة)", "démonstration (إن وجدت)"],
    deadlines: [
      { label: "بداية PFE", month: "فيفري", monthIndex: 1 },
      { label: "تسليم rapport", month: "ماي", monthIndex: 4 },
      { label: "soutenance", month: "جوان", monthIndex: 5 },
    ],
    faq: [
      {
        question: "PFE = كامل السداسي الثاني؟",
        answer: "إي، PFE يستغرق السداسي الثاني كامل. هو أهم stage و يدخل بـ 10/15 في المعدل.",
      },
      {
        question: "نجم نعمل PFE في شركة جديدة؟",
        answer: "إي، و يُفضّل شركة تسمحلك بمشروع حقيقي مع encadrant متاح.",
      },
      {
        question: "شنية معايير التقييم؟",
        answer: "rapport + présentation + soutenance + جودة المشروع. شوف الدليل الكامل في صفحة PFE.",
      },
    ],
    workload: {
      reportPages: "~90+ صفحة",
      presentationMinutes: "20 دقيقة",
      defenseMinutes: "60 دقيقة",
    },
    hasDedicatedPage: true,
  },
];

export const internshipVocabulary = [
  { term: "Fiche de réponse", definition: "ورقة من مصالح التربصات — الشركة تعمرها باش تقبلك في الستاج." },
  { term: "Lettre d'affectation", definition: "وثيقة رسمية من ISET تقبل فيها الستاج في الشركة." },
  { term: "Journal de stage", definition: "مفكرة يومية — اكتب شنوّة عملت كل يوم طول الشهر (فرنسية أو إنجليزية)." },
  { term: "Rapport de stage", definition: "كتاب أكاديمي منظم يوثّق خدمتك. لازم mise en forme حسب قواعد المعهد." },
  { term: "Attestation de stage", definition: "شهادة من الشركة تثبت إنك كملت الستاج — تسلّمها لمصالح التربصات." },
  { term: "Soutenance", definition: "عرض قدام jury باش يعطيوك note. خاصة — ما تجيبش صحابك ولا أهلك." },
];

export const internshipGeneralFaq = [
  {
    question: "شنية معنى stage؟",
    answer:
      "فترة تجرب فيها الخدمة في مجالك، تبني علاقات، و تاخذ فكرة على سوق الشغل. الستاج في وسط العام إجباري — ما تتخرّجش بدون ما تكمل الستاجات الكل.",
  },
  {
    question: "على شنية note؟",
    answer: "كل stage عليه note /20. استعمل حاسبة المعدل في الأسفل باش تحسب معدلك الإجمالي.",
  },
  {
    question: "وقتاش فترة الستاج؟",
    answer: "جانفي — بداية فيفري (~شهر) للسنة 1 و 2. PFE = كامل السداسي الثاني من السنة الثالثة.",
  },
  {
    question: "شنية الفرق بين stage في وسط العام و stage d'été؟",
    answer: "stage في وسط العام obligatoire (rapport + journal + soutenance). stage d'été اختياري — ما فماش تقييم أكاديمي.",
  },
  {
    question: "نجم نأجّل الستاج؟",
    answer: "إي، للصيف و soutenance في العام الجاي. علّم مصالح التربصات. إذا عاودت عام، الستاج اللي validé ما تعاودوش.",
  },
  {
    question: "نجم نعمل stage برّا تونس؟",
    answer: "إي، أما الأوراق تختلف — تواصل مع مصالح التربصات قبل ما تبدا.",
  },
];

export const internshipAdminSteps = [
  { step: 1, title: "Fiche de réponse", description: "خذ fiche de réponse من مصالح التربصات (masla7at al tarabossat)." },
  { step: 2, title: "تعبئة الشركة", description: "عطيها للشركة باش يعمّروها و يقبلوك في الستاج." },
  { step: 3, title: "إرجاع للفاك", description: "رجّعها للمعهد و استنى فترة المعالجة." },
  { step: 4, title: "Lettre d'affectation", description: "خذ lettre d'affectation من مصالح التربصات — وثيقة رسمية تقبل فيها ISET الستاج." },
  { step: 5, title: "نسخة للشركة", description: "عطي الأصل أو نسخة للشركة." },
  { step: 6, title: "بعد الستاج", description: "سلّم لمصالح التربصات: attestation de stage + journal + rapport de stage." },
  { step: 7, title: "Soutenance", description: "استنى إعلان مواعيد soutenances من الإدارة." },
];

export const internshipJobPlatforms = [
  { name: "Hi Interns", href: "https://hi-interns.com/en" },
  { name: "Indeed Tunisie", href: "https://tn.indeed.com/" },
  { name: "Tanitjobs", href: "https://www.tanitjobs.com/" },
];

export const internshipJobSearchTips = [
  "Networking — تواصل مع محترفين في مجالك",
  "منصات التوظيف — Indeed، Tanitjobs، Hi Interns",
  "موارد الجامعة — مصالح التربصات و الأساتذة",
  "مواقع الشركات — candidature مباشرة",
];

export const internshipContacts = {
  title: "مصالح التربصات — ISET Zaghouan",
  phones: ["+216 72 660 700", "+216 72 660 400"],
  fax: "+216 72 660 300",
  note: "إذا عندك مشكلة مع الشركة، تواصل مع ISET — يعاونوك تحل أي مشكلة.",
};

export const internshipOfficialUrl = "https://isetzg.rnu.tn/fra/pages/332/D%C3%A9roulement-de-stages";

export const dsegExampleReports = {
  title: "نماذج تقارير الستاج — قسم SEG",
  description:
    "تقارير وعروض لطلبة حصلوا على نتائج ممتازة. استعملوهم باش تفهمو البنية، الأسلوب، والمستوى المطلوب.",
  href: "https://drive.google.com/drive/folders/1nFOzlwNQ5I2X3F12BoUNORZ-64Wulcxu?usp=drive_link",
  departmentNote: "المحتوى مخصّص لطلبة قسم العلوم الاقتصادية والتصرف (SEG) برك.",
  disclaimer:
    "هذه النماذج للتعلم والاستئناس فقط. ما تنسخوش المحتوى بلا ما تفهمو وتكيّفوه حسب ستاجكم وشركتكم — النسخ الأعمى يسبب مشاكل أكاديمية.",
  folders: ["Stage d'initiation", "Stage de perfectionnement", "PFE"],
};

export const stageJournalDocuments = {
  title: "Livret de stage (Journal)",
  description:
    "الlivret الرسمي (journal de stage) باش تدوّن فيه يومياتك طول الستاج. خاص بالسنة الأولى والثانية — initiation و perfectionnement.",
  documents: [
    {
      name: "Livret de stage — ISET Zaghouan",
      label: "النموذج الرسمي",
      description: "الlivret المعتمد من المعهد — حمّلو، اطبعوه، وعبّيوه يوم بيوم طول الستاج.",
      downloadSrc: "/documents/stages/LIVRET_DE STAGE ISET ZAGHOUAN.pdf",
      downloadName: "LIVRET_DE STAGE ISET ZAGHOUAN.pdf",
    },
    {
      name: "دليل تعبئة Journal",
      label: "شرح خطوة بخطوة",
      description: "دليل يشرحلك كيفاش تملّى كل صفحة في الlivret — أمثلة ونصائح عملية.",
      downloadSrc: "/documents/stages/Pryzanti Journal Guide_compressed.pdf",
      downloadName: "Pryzanti Journal Guide.pdf",
    },
  ],
};

export const stagePresentationLogos = [
  {
    name: "ISET Zaghouan",
    label: "شعار المعهد",
    src: "/images/stage/Logo_ISET_ZAGHOUAN.webp",
    downloadSrc: "/images/stage/Logo_ISET_ZAGHOUAN.png",
    downloadName: "Logo_ISET_ZAGHOUAN.png",
    downloadCount: 312,
  },
  {
    name: "SEG",
    label: "شعار قسم العلوم الاقتصادية والتصرف",
    src: "/images/stage/Logo_DSEG.webp",
    downloadSrc: "/images/stage/Logo_DSEG.png",
    downloadName: "Logo_DSEG.png",
    downloadCount: 248,
  },
  {
    name: "TI",
    label: "شعار قسم تقنية المعلومات",
    src: "/images/stage/Logo_DTI.webp",
    downloadSrc: "/images/stage/Logo_DTI.png",
    downloadName: "Logo_DTI.png",
    downloadCount: 189,
  },
];

export const pfeGuide = {
  title: "دليل PFE الكامل",
  subtitle: "Projet de Fin d'Études — السداسي الثاني من السنة الثالثة",
  sections: [
    {
      title: "اختيار الموضوع",
      content: "تواصل مع encadrant في الشركة و encadrant في المعهد. الموضوع لازم يكون متوافق مع تخصصك و يسمحلك بمشروع حقيقي.",
    },
    {
      title: "التخطيط الزمني",
      content: "PFE يستغرق السداسي الثاني كامل. قسّم الوقت: شهر للبحث و التحليل، شهرين للتنفيذ، شهر للrapport و présentation.",
    },
    {
      title: "Rapport PFE",
      content: "90-100 صفحة تقريباً. البنية: introduction، état de l'art، méthodologie، réalisation، résultats، conclusion.",
    },
    {
      title: "Soutenance",
      content: "20 دقيقة présentation + ~40 دقيقة أسئلة (~60 دقيقة المجموع). حضّر démonstration إذا كان المشروع تقني.",
    },
    {
      title: "التقييم",
      content: "PFE = 10/15 في معدل الستاجات. rapport (40%) + présentation (30%) + soutenance (30%) تقريباً.",
    },
  ],
  checklist: [
    "اختيار entreprise و encadrant",
    "validation الموضوع مع chef de département",
    "cahier des charges موقّع",
    "rapport PFE مكتمل",
    "présentation جاهزة",
    "répétition soutenance",
  ],
};

export const difficultyLabels: Record<Internship["difficulty"], { label: string; color: string; dot: string }> = {
  easy: { label: "سهل", color: "#22C55E", dot: "🟢" },
  medium: { label: "متوسط", color: "#EAB308", dot: "🟡" },
  hard: { label: "صعب", color: "#EF4444", dot: "🔴" },
};
