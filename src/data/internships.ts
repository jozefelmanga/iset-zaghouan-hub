export const internships = [
  {
    year: 1,
    name: "Stage d'initiation",
    duration: "28 يوم",
    timing: "بين السمستر 1 و السمستر 2",
    weight: 2.5,
    requirements: ["les rapports", "présentations", "soutenance"],
    docs: ["journal", "rapport"],
  },
  {
    year: 2,
    name: "Stage de perfectionnement",
    duration: "28 يوم",
    timing: "بين السمستر 1 و السمستر 2",
    weight: 2.5,
    requirements: ["les rapports", "présentations", "soutenance"],
    docs: ["journal", "rapport"],
  },
  {
    year: 3,
    name: "Stage PFE (Projet de Fin d'Études)",
    duration: "كامل السداسي الثاني",
    timing: "السنة الثالثة، السداسي الثاني",
    weight: 10,
    requirements: ["rapport PFE", "présentation", "soutenance"],
    docs: ["rapport PFE", "présentation"],
    note: "المعدل يتحسب: (PFE×10 + perfectionnement×2.5 + initiation×2.5) / 15",
  },
];

export const internshipDocs = [
  "compte على didosoft (من أول العام)",
  "journal: مفكرة يومية بالمهام (بالفرنسية أو الإنجليزية)",
  "rapport: كتاب بالتفاصيل (بالفرنسية أو الإنجليزية)",
  "présentation قدام les jurys",
  "soutenance",
];

export const internshipTips = [
  "تنجموا تعملوا أكثر من stage صيفي، أما تصرحوا بواحد برك",
  "الستاج الصيفي مافماش rapport ولا journal ولا soutenance",
  "النتيجة تلقاها على didosoft",
  "علموا chef de département باللغة المختارة (فرنسية/إنجليزية)",
];

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

export const stagePresentationLogos = [
  {
    name: "ISET Zaghouan",
    label: "شعار المعهد",
    src: "/images/stage/Logo_ISET_ZAGHOUAN.webp",
    downloadSrc: "/images/stage/Logo_ISET_ZAGHOUAN.png",
    downloadName: "Logo_ISET_ZAGHOUAN.png",
  },
  {
    name: "SEG",
    label: "شعار قسم العلوم الاقتصادية والتصرف",
    src: "/images/stage/Logo_DSEG.webp",
    downloadSrc: "/images/stage/Logo_DSEG.png",
    downloadName: "Logo_DSEG.png",
  },
  {
    name: "TI",
    label: "شعار قسم تقنية المعلومات",
    src: "/images/stage/Logo_DTI.webp",
    downloadSrc: "/images/stage/Logo_DTI.png",
    downloadName: "Logo_DTI.png",
  },
];
