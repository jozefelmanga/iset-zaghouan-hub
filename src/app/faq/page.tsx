import { pageMetadata } from "@/constants/seo";
import { MessageCircle } from "@/lib/icons";
import { StaticPageHeader } from "@/components/ui/StaticPageHeader";
import { Alert } from "@/components/ui/Alert";
import { Accordion } from "@/components/ui/Accordion";
import { PageWrapper } from "@/components/ui/layout";
import { EmergencyContacts } from "@/components/faq/EmergencyContacts";
import { FaqJsonLd } from "@/components/faq/FaqJsonLd";
import { faqItems, emergencyContacts } from "@/data/faq";

export const metadata = pageMetadata("/faq");

export default function FAQPage() {
  return (
    <PageWrapper className="max-w-[760px]">
      <FaqJsonLd items={faqItems} />
      <StaticPageHeader
        icon="help-circle"
        label="مساعدة"
        title="الأسئلة الشائعة"
        subtitle="أكثر الأسئلة اللي يسألوها الطلبة الجداد"
        category="campus"
      />

      <Accordion items={faqItems} />

      <EmergencyContacts contacts={emergencyContacts} />

      <Alert title="عندك سؤال؟" variant="info">
        <div style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
          <MessageCircle size={14} style={{ flexShrink: 0, marginTop: "2px" }} />
          <p>اسأل الطلبة الكبار ولا ممثلين الطلبة. هم يعاونوك و يفضوا مشكلتك.</p>
        </div>
      </Alert>
    </PageWrapper>
  );
}
