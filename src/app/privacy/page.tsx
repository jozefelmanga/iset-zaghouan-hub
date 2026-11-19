import { pageMetadata } from "@/constants/seo";
import { StaticPageHeader } from "@/components/ui/StaticPageHeader";
import { PageWrapper } from "@/components/ui/layout";
import { Card } from "@/components/ui/shared";

export const metadata = pageMetadata("/privacy");

const LAST_UPDATED = "نوفمبر 2026";

const body = { fontSize: "15px", color: "var(--color-text-secondary)", lineHeight: 1.8 } as const;

export default function PrivacyPage() {
  return (
    <PageWrapper seoPath="/privacy" className="max-w-[760px]">
      <StaticPageHeader
        icon="shield"
        label="عن المنصة"
        title="سياسة الخصوصية"
        subtitle="باختصار، شنية المعلومات اللي يجمعها الموقع."
        category="campus"
        lastUpdated={LAST_UPDATED}
      />

      <Card elevation="raised" padding="24px">
        <ul style={{ ...body, paddingInlineStart: "20px", listStyle: "disc", display: "flex", flexDirection: "column", gap: "10px" }}>
          <li>
            الموقع ما فيهش حسابات، و ما يطلبش منك حتى معلومة شخصية (اسم، تليفون، إيميل).
          </li>
          <li>
            نستعملو <span dir="ltr">Google Analytics</span> و <span dir="ltr">Microsoft Clarity</span> باش نعرفو شنية الصفحات
            المفيدة و كيفاش نحسّنو الموقع. يجمعو معلومات عامة كيف الصفحات اللي تحلّها و نوع الجهاز، من غير ما نعرفو شكونك.
          </li>
          <li>ما نبيعو و ما نعطيو حتى معلومة لحتى حد.</li>
          <li>
            إذا ما تحبش الإحصائيات، تنجم تمنعها بـ bloqueur de pub و لا خاصية منع التتبّع في المتصفح، و الموقع يخدم عادي.
          </li>
          <li>
            عندك سؤال؟ ابعثلنا عبر{" "}
            <a
              href="https://forms.gle/4Aj6svouhdPu9TBA7"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--color-secondary-text)", fontWeight: 600 }}
            >
              فورم الآراء
            </a>
            .
          </li>
        </ul>
      </Card>
    </PageWrapper>
  );
}
