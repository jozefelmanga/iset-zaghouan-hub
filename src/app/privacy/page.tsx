import { pageMetadata } from "@/constants/seo";
import { StaticPageHeader } from "@/components/ui/StaticPageHeader";
import { PageWrapper } from "@/components/ui/layout";
import { Card } from "@/components/ui/shared";

export const metadata = pageMetadata("/privacy");

const LAST_UPDATED = "نوفمبر 2026";

const tools = [
  {
    name: "Google Analytics 4",
    owner: "Google",
    what: "الصفحات اللي تحلّها، قدّاش تقعد فيها، نوع الجهاز و المتصفح، البلاد و المدينة التقريبية، و منين جيت (Google، فيسبوك...).",
    why: "باش نعرفو شنية الصفحات المفيدة و شنية اللي لازمها تتحسّن.",
    link: "https://policies.google.com/privacy",
  },
  {
    name: "Microsoft Clarity",
    owner: "Microsoft",
    what: "كيفاش تستعمل الصفحة: الكليكات، السكرول، و تسجيلات مجهولة الهوية للجلسة. حسب إعداداتها الافتراضية، Clarity تخبّي النص اللي تكتبو في الخانات.",
    why: "باش نلقاو الحاجات اللي تلخبط الطلبة في التصميم و نصلحوها.",
    link: "https://privacy.microsoft.com/privacystatement",
  },
  {
    name: "Vercel",
    owner: "Vercel Inc.",
    what: "الاستضافة متاع الموقع. كيما أي سيرفر، يسجّل معلومات تقنية كيف عنوان IP و وقت الزيارة.",
    why: "باش الموقع يخدم و يكون محمي.",
    link: "https://vercel.com/legal/privacy-policy",
  },
] as const;

const notDone = [
  "ما فماش حسابات و لا تسجيل دخول في الموقع.",
  "ما نطلبو منك حتى معلومة شخصية (اسم، تليفون، إيميل) في الموقع.",
  "ما نبيعو و ما نعطيو حتى معلومة لحتى حد.",
  "ما فماش إشهار يتبّعك.",
];

const sectionTitle = { fontSize: "18px", fontWeight: 700, color: "var(--color-text)", marginBottom: "12px" } as const;
const body = { fontSize: "15px", color: "var(--color-text-secondary)", lineHeight: 1.8 } as const;

export default function PrivacyPage() {
  return (
    <PageWrapper seoPath="/privacy" className="max-w-[760px]">
      <StaticPageHeader
        icon="shield"
        label="عن المنصة"
        title="سياسة الخصوصية"
        subtitle="شنية المعلومات اللي يجمعها الموقع، علاش، و كيفاش تنجم توقفها."
        category="campus"
        lastUpdated={LAST_UPDATED}
      />

      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <Card elevation="raised" padding="24px">
          <h2 style={sectionTitle}>باختصار</h2>
          <p style={body}>
            Guide ISET Zaghouan موقع مجاني و مستقل. باش نحسّنوه، نستعملو أدوات إحصائيات تجمع معلومات على كيفاش الزوار
            يستعملو الموقع، من غير ما نعرفو شكونك.
          </p>
        </Card>

        <Card elevation="raised" padding="24px">
          <h2 style={sectionTitle}>شنية اللي ما نعملوهش</h2>
          <ul style={{ ...body, paddingInlineStart: "20px", listStyle: "disc", display: "flex", flexDirection: "column", gap: "6px" }}>
            {notDone.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Card>

        <section>
          <h2 style={{ ...sectionTitle, marginBottom: "14px" }}>الأدوات اللي نستعملوها</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            {tools.map((tool) => (
              <Card key={tool.name} elevation="flat" padding="20px">
                <h3 style={{ fontSize: "16px", fontWeight: 700, color: "var(--color-text)", marginBottom: "8px" }}>
                  <span dir="ltr">{tool.name}</span>
                  <span style={{ fontSize: "13px", fontWeight: 500, color: "var(--color-text-muted)" }}> — {tool.owner}</span>
                </h3>
                <p style={{ ...body, fontSize: "14px" }}>
                  <strong>شنية يجمع: </strong>
                  {tool.what}
                </p>
                <p style={{ ...body, fontSize: "14px" }}>
                  <strong>علاش: </strong>
                  {tool.why}
                </p>
                <a
                  href={tool.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: "13px", fontWeight: 600, color: "var(--color-secondary-text)" }}
                >
                  سياسة الخصوصية متاع {tool.owner}
                </a>
              </Card>
            ))}
          </div>
        </section>

        <Card elevation="raised" padding="24px">
          <h2 style={sectionTitle}>حاجات أخرى</h2>
          <ul style={{ ...body, paddingInlineStart: "20px", listStyle: "disc", display: "flex", flexDirection: "column", gap: "8px" }}>
            <li>
              <strong>فيديوات YouTube:</strong> الصورة الصغيرة تتحمّل من YouTube، و الفيديو ما يتحمّلش كان كي تنزل على
              زر التشغيل. ساعتها تطبّق سياسة Google.
            </li>
            <li>
              <strong>Checklist الترسيم:</strong> العلامات اللي تحطها في صفحة الترسيم تتسجّل في المتصفح متاعك برك
              (localStorage)، و ما تتبعث لحتى سيرفر.
            </li>
            <li>
              <strong>فورم الآراء:</strong> هو Google Form، يعني المعلومات اللي تكتبها فيه تمشي لـ Google و يشوفها فريق
              الموقع.
            </li>
          </ul>
        </Card>

        <Card elevation="raised" padding="24px">
          <h2 style={sectionTitle}>كيفاش توقف الإحصائيات</h2>
          <p style={body}>
            تنجم تمنع الأدوات هاذي من المتصفح: فعّل خاصية منع التتبّع (Tracking Prevention في Edge و Safari، Enhanced Tracking
            Protection في Firefox)، استعمل bloqueur de pub، و لا ركّب{" "}
            <a
              href="https://tools.google.com/dlpage/gaoptout"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--color-secondary-text)", fontWeight: 600 }}
            >
              إضافة Google Analytics Opt-out
            </a>
            . الموقع يخدم عادي من غيرهم.
          </p>
        </Card>

        <Card elevation="raised" padding="24px">
          <h2 style={sectionTitle}>سؤال؟</h2>
          <p style={body}>
            إذا عندك سؤال على الخصوصية و لا تحب نفسخو معلومة تخصّك، ابعثلنا عبر{" "}
            <a
              href="https://forms.gle/4Aj6svouhdPu9TBA7"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--color-secondary-text)", fontWeight: 600 }}
            >
              فورم الآراء
            </a>
            . آخر تحديث: {LAST_UPDATED}.
          </p>
        </Card>
      </div>
    </PageWrapper>
  );
}
