import type { FAQItem, Contact } from "@/types";
import { instituteOfficial } from "./official";

const formatPhone = (phone: string) => phone.replace("+216 ", "");

export const faqItems: FAQItem[] = [
  {
    question: "كيفاش نعمل الترسيم الجامعي؟",
    answer:
      "الترسيم فيه مرحلتين: مرحلة عن بعد (تخلص بكارت E-dinar في www.inscription.tn) و مرحلة تسليم الأوراق للفاك.",
  },
  {
    question: "كيفاش نترسيم في المبيت؟",
    answer:
      "تحل موقع OOUN، تعمل compte و demande، تستنى الجواب، تخلص الفواي و تحضّر الأوراق (شهادة ترسيم + بطاقة تعريف + صور).",
  },
  {
    question: "شنية أوراق البورص؟",
    answer:
      "بطاقة التعريف، شهادة الترسيم، بطاقة الخدمات الجامعية، وثائق الدخل، شهادة الإقامة، و صور شمسية.",
  },
  {
    question: "كيفاش نروح لتونس من زغوان؟",
    answer:
      "تاخذ لواج من باب عليوة (5.350 د) أو كار كونفور (4 د) أو كار عادية (3.400 د). كيران الرجوع: 10h/12h/15h/16h/17:30.",
  },
  {
    question: "وقتاش يحل الريستو؟",
    answer: "الغداء: 11:30-14:00، العشاء: 17:00-19:00. السبت مفماش عشاء.",
  },
  {
    question: "شنية أهمية الستاجات؟",
    answer:
      "الستاجات تخدم في معدل السداسي الثاني من السنة الثالثة. PFE (10) + perfectionnement (2.5) + initiation (2.5) مقسوم على 15.",
  },
  {
    question: "كيفاش نتصرف في المبيت؟",
    answer:
      "خبي نسخ من المفتاح، اشري كادنا للكازيي، ما تسلف من حد وما تسلف حد، رد بالك على دبشك، و جيب معطر جو.",
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
