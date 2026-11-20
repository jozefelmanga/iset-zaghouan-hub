import type { FAQItem, Contact } from "@/types";
import { instituteOfficial } from "./official";
import { scholarshipDocumentsSummary, scholarshipDeadlineDays } from "./scholarships";
import { transportRoutes, plainTimes, zaghouanToTunisTimes } from "./transport";
import { enrollmentDocsSummary } from "./enrollment";
import { restaurantInfo } from "./restaurant";

const { lunch, dinner } = restaurantInfo;

const fare = (id: string) => transportRoutes.find((r) => r.id === id)?.fare?.toFixed(3);

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
      `${scholarshipDocumentsSummary} الملف يتبعث للديوان في أجل ${scholarshipDeadlineDays} يوم من تاريخ الترسيم. القائمة الكاملة في دليل البورص.`,
    links: [{ href: "/bourse", label: "دليل البورص و المنحة" }],
  },
  {
    question: "كيفاش نروح لتونس من زغوان؟",
    answer:
      `تاخذ لواج من باب عليوة (${fare("louage")} د) أو كار كونفور (${fare("bus_confort")} د) أو كار عادية (${fare("bus_normal")} د). كيران الرجوع من زغوان: ${plainTimes(zaghouanToTunisTimes).join(" / ")}. نهار الأحد و العطل فما كيران أقل، شوف الجدول الكامل.`,
    links: [{ href: "/transport", label: "دليل النقل و المواصلات" }],
  },
  {
    question: "وقتاش يحل الريستو؟",
    answer: `الغداء: ${lunch.open}-${lunch.close}، العشاء: ${dinner.open}-${dinner.close}. السبت مفماش عشاء.`,
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
    answer: `تحضّر: ${enrollmentDocsSummary}.`,
  },
  {
    question: "وقتاش نرسّم في المعهد؟",
    answer: "المواعيد تختلف حسب المستوى (سنة أولى ولا ثانية ولا ثالثة). ديما تبع إعلانات إدارة ISET Zaghouan على الصفحة الرسمية لمعرفة نهار الترسيم المخصص ليك.",
  },
  {
    question: "عندي بورص، شنوة نعمل بعد الترسيم؟",
    answer: `تبعث ملف البورص للديوان في أجل ${scholarshipDeadlineDays} يوم من تاريخ الترسيم. إذا فات الأجل تنجم تخسر المنحة.`,
    links: [{ href: "/bourse", label: "أوراق البورص و الخطوات" }],
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
