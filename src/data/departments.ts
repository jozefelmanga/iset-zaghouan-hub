export const departmentList = [
  {
    code: "TI",
    name: "Technologies de l'Information",
    arabicName: "تكنولوجيا المعلومات والاتصال",
    description: "قسم الإعلامية وهو من أكثر الأقسام طلباً، يركز على تكوين الكفاءات في البرمجة، هندسة البرمجيات، والشبكات السيبرانية.",
    icon: "code",
    color: "#3B82F6",
    bg: "rgba(59,130,246,0.06)",
    border: "rgba(59,130,246,0.15)",
    href: "/departments/ti",
    specialties: ["DSI (تطوير نظم المعلومات)", "RSI (الشبكات ونظم المعلومات)"],
  },
  {
    code: "SEG",
    name: "Sciences Économiques et de Gestion",
    arabicName: "العلوم الاقتصادية والتصرف",
    description: "يهتم القسم بالمالية والمحاسبة وإدارة الأعمال، لتخريج إطارات مسيرة للشركات والمصانع ومراقبة الجودة.",
    icon: "coins",
    color: "#8B5CF6",
    bg: "rgba(139,92,246,0.06)",
    border: "rgba(139,92,246,0.15)",
    href: "/departments/seg",
    specialties: ["محاسبة ومالية", "إدارة الأعمال (مراقبة الجودة / التسيير الصناعي)"],
  },
  {
    code: "GPR",
    name: "Génie des Procédés",
    arabicName: "هندسة العمليات والبيئة",
    description: "قسم هندسة العمليات يهدف لتخريج فنيين سامين في المراقبة والتحاليل المخبرية للمنتجات الكيميائية والغذائية.",
    icon: "flask",
    color: "#12B8C8",
    bg: "rgba(18,184,200,0.06)",
    border: "rgba(18,184,200,0.15)",
    href: "/departments/gpr",
    specialties: ["أساليب كيميائية (Chimie)", "أساليب غذائية (Agroalimentaire)"],
  },
];

export const masterPrograms = [
  {
    id: "isid",
    name: "ISID : Ingénierie des Systèmes d'Informations Décisionnels",
    dept: "TI",
    deptFullName: "Technologies de l'Information",
    image: "/images/masters/ti_master.webp",
    description: "ماستر مهني في تكنولوجيا الإعلامية مخصص لنظم المعلومات واتخاذ القرار (Business Intelligence).",
    color: "#3B82F6",
    bg: "rgba(59,130,246,0.08)",
    border: "rgba(59,130,246,0.2)",
  },
  {
    id: "e2i",
    name: "E2I : Entrepreneurship et Ingénierie de l'Innovation",
    dept: "SEG",
    deptFullName: "Sciences Économiques et de Gestion",
    image: "/images/masters/seg_master_1.webp",
    description: "ماستر مهني في العلوم الاقتصادية والتصرف مخصص لريادة الأعمال وهندسة الابتكار.",
    color: "#8B5CF6",
    bg: "rgba(139,92,246,0.08)",
    border: "rgba(139,92,246,0.2)",
  },
  {
    id: "mopil",
    name: "MOPIL : Modernisation de la Production et Ingénierie de la Chaîne Logistique",
    dept: "SEG",
    deptFullName: "Sciences Économiques et de Gestion",
    image: "/images/masters/seg_master_2.webp",
    description: "ماستر مهني في العلوم الاقتصادية والتصرف مخصص لتحديث الإنتاج وهندسة سلسلة اللوجستيك.",
    color: "#8B5CF6",
    bg: "rgba(139,92,246,0.08)",
    border: "rgba(139,92,246,0.2)",
  },
  {
    id: "gtvdi",
    name: "GTVDI : Gestion Traitement et Valorisation des Déchets Industriels",
    dept: "GPR",
    deptFullName: "Génie des Procédés et de l'Environnement",
    image: "/images/masters/gpr_master.webp",
    description: "ماستر مهني في هندسة الأساليب مخصص للتصرف في النفايات الصناعية ومعالجتها وتثمينها.",
    color: "#22C55E",
    bg: "rgba(34,197,94,0.08)",
    border: "rgba(34,197,94,0.2)",
  },
];

export const masterFilterTabs = [
  { id: "all", label: "الكل" },
  { id: "TI", label: "إعلامية (TI)" },
  { id: "SEG", label: "اقتصاد وتصرف (SEG)" },
  { id: "GPR", label: "هندسة الأساليب (GPR)" },
];

/** Summary used by home / cross-links */
export const departments = [
  { name: "TI", fullName: "Technologies de l'Information", masters: ["ISID : Ingénierie des Systèmes d'Informations Décisionnels"] },
  { name: "SEG", fullName: "Sciences Économiques et de Gestion", masters: ["E2I : Entrepreneurship et Ingénierie de l'Innovation", "MOPIL : Modernisation de la Production et Ingénierie de la Chaîne Logistique"] },
  { name: "GPR", fullName: "Génie des Procédés et de l'Environnement", masters: ["GTVDI : Gestion Traitement et Valorisation des Déchets Industriels"] },
];
