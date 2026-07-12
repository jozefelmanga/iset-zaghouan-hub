import type { FAQItem, Contact } from "@/types";
import { instituteOfficial } from "./official";

const formatPhone = (phone: string) => phone.replace("+216 ", "");

export const faqItems: FAQItem[] = [
  {
    question: "كيفاش نعمل الترسيم الجامعي؟",
    answer:
      "الترسيم فيه مرحلتين: مرحلة عن بعد (تخلص بكارت E-dinar في www.inscription.tn) و مرحلة تسليم الأوراق للفاك.",
    links: [{ href: "/inscription", label: "دليل الترسيم الجامعي" }],
  },
  {
    question: "كيفاش نترسيم في المبيت؟",
    answer:
      "تحل موقع OOUN، تعمل compte و demande، تستنى الجواب، تخلص الفواي و تحضّر الأوراق (شهادة ترسيم + بطاقة تعريف + صور).",
    links: [
      { href: "/inscription/foyer", label: "خطوات الترسيم في المبيت" },
      { href: "/housing", label: "فواي البنات و الأولاد" },
    ],
  },
  {
    question: "شنية أوراق البورص؟",
    answer:
      "بطاقة التعريف، شهادة الترسيم، بطاقة الخدمات الجامعية، وثائق الدخل، شهادة الإقامة، و صور شمسية.",
    links: [{ href: "/bourse", label: "دليل البورص و المنحة" }],
  },
  {
    question: "كيفاش نروح لتونس من زغوان؟",
    answer:
      "تاخذ لواج من باب عليوة (5.350 د) أو كار كونفور (4 د) أو كار عادية (3.400 د). كيران الرجوع: 10h/12h/15h/16h/17:30.",
    links: [{ href: "/transport", label: "دليل النقل و المواصلات" }],
  },
  {
    question: "وقتاش يحل الريستو؟",
    answer: "الغداء: 11:30-14:00، العشاء: 17:00-19:00. السبت مفماش عشاء.",
    links: [{ href: "/resto", label: "أوقات الريستو و القائمة" }],
  },
  {
    question: "شنية أهمية الستاجات؟",
    answer:
      "الستاجات تخدم في معدل السداسي الثاني من السنة الثالثة. PFE (10) + perfectionnement (2.5) + initiation (2.5) مقسوم على 15.",
    links: [
      { href: "/stages", label: "دليل الستاجات" },
      { href: "/stages/pfe", label: "دليل PFE" },
    ],
  },
  {
    question: "كيفاش نتصرف في المبيت؟",
    answer:
      "خبي نسخ من المفتاح، اشري كادنا للكازيي، ما تسلف من حد وما تسلف حد، رد بالك على دبشك، و جيب معطر جو.",
    links: [
      { href: "/housing", label: "دليل المبيت الجامعي" },
      { href: "/bonus", label: "نصائح للجداد" },
    ],
  },
];

export const inscriptionFaqItems: FAQItem[] = [
  {
    question: "كيفاش نرسّم في ISET Zaghouan؟",
    answer: "الترسيم يكون عبر مرحلتين: مرحلة عن بعد تخلص فيها المعاليم ببطاقة E-dinar في موقع inscription.tn، ومرحلة حضورية تسلم فيها الأوراق لإدارة المعهد.",
  },
  {
    question: "شنية الأوراق المطلوبة للترسيم الجامعي؟",
    answer: "لازمك تحضر بطاقة التعريف الوطنية، 4 صور شمسية، الدفتر الصحي، نسخة من شهادة البكالوريا، وتوصيل الخلاص متع الترسيم عن بعد.",
  },
  {
    question: "وقتاش نرسّم في المعهد؟",
    answer: "المواعيد تختلف حسب المستوى (سنة أولى ولا ثانية ولا ثالثة). ديما تبع إعلانات إدارة ISET Zaghouan على الصفحة الرسمية لمعرفة نهار الترسيم المخصص ليك.",
  },
];

export const emergencyContacts: Contact[] = [
  {
    name: "إدارة ISET Zaghouan",
    phone: instituteOfficial.profile.phones.map(formatPhone).join(" / "),
    note: "الهاتف الرسمي للمعهد",
  },
  {
    name: "فاكس ISET Zaghouan",
    phone: formatPhone(instituteOfficial.profile.fax),
    note: "للمراسلات الإدارية",
  },
  { name: "لواجيست قيس", phone: "98202339", note: "نقل تونس-زغوان" },
  { name: "Restaurant Ohana", phone: "20110358 / 98681904", note: "livraison للفوايي" },
];
