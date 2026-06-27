"use client";

import {
  Leaf,
  Calendar,
  ImageIcon,
  Facebook,
  Instagram,
  CheckCircle2,
} from "@/lib/icons";
import { Card } from "@/components/ui/shared";
import { FullBleed } from "@/components/ui/layout";
import { PhotoGallery, ZoomableImage } from "@/components/ui/Lightbox";

const images = [
  "/images/ODD ISET Zaghouan/350306791_925828658697098_9197756279969916445_n.webp",
  "/images/ODD ISET Zaghouan/350293813_749121313622988_3809318612730053054_n.webp",
  "/images/ODD ISET Zaghouan/392754869_233489176402683_3455751320427372646_n.webp",
  "/images/ODD ISET Zaghouan/394916367_236022696149331_6079329406660094194_n.webp",
  "/images/ODD ISET Zaghouan/348589545_1982785475388772_8391954664252422189_n.webp",
  "/images/ODD ISET Zaghouan/347274168_267849215803965_4596877492457641231_n.webp",
  "/images/ODD ISET Zaghouan/417358306_285664144518519_2626316028894447508_n.webp",
  "/images/ODD ISET Zaghouan/417397529_304964815921785_7417475765246092307_n.webp",
  "/images/ODD ISET Zaghouan/417405437_311776801907253_5913979126499703070_n.webp",
  "/images/ODD ISET Zaghouan/417451240_309063102178623_3384047685171254951_n.webp",
  "/images/ODD ISET Zaghouan/417471309_307577122327221_874085090714397838_n.webp",
  "/images/ODD ISET Zaghouan/417694625_311775718574028_2487564937585846172_n.webp",
  "/images/ODD ISET Zaghouan/420201430_311776648573935_2481957090480266952_n.webp",
  "/images/ODD ISET Zaghouan/422341490_293559757062291_4692355459360954645_n.webp",
];

const objectives = [
  "التوعية بأهداف التنمية المستدامة (SDGs) للأمم المتحدة.",
  "التثقيف والتوعية بقضايا البيئة والتنمية المستدامة في الفاك.",
  "جمع الطلبة الشغوفين بنفس القيم باش يحمو الطبيعة والبيئة.",
  "تشجيع المبادرات والعمل المحلي باش يكون تأثير إيجابي ملموس.",
  "زيارات ميدانية للشركات الصناعية باش يربطو القراية بالواقع المهني.",
];

const events = ["Ateliers", "Journée Carrière", "Formations", "Sorties d'études", "Journée d'intégration"];

export function OddPageContent() {
  return (
    <>
      <FullBleed style={{ height: "240px", marginBottom: "32px" }}>
        <ZoomableImage
          fill
          src="/images/ODD ISET Zaghouan/OIP_(1).webp"
          alt="ODD Cover"
          objectPosition="center 43.7%"
        />
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "linear-gradient(to bottom, rgba(11,31,58,0.25), rgba(11,31,58,0.85))" }} />
        <div style={{ position: "absolute", bottom: "24px", right: "32px", left: "32px", display: "flex", alignItems: "center", gap: "20px", flexWrap: "wrap", pointerEvents: "none" }}>
          <ZoomableImage
            src="/images/ODD ISET Zaghouan/346084632_2212215942302379_3257380520080764734_n.webp"
            alt="ODD Logo"
            hideHint
            style={{ width: "80px", height: "80px", borderRadius: "16px", border: "2px solid #fff", background: "#fff", pointerEvents: "auto" }}
          />
        </div>
      </FullBleed>

      <div style={{ marginBottom: "32px" }}>
        <Card elevation="raised" padding="28px">
          <h2 style={{ fontSize: "18px", fontWeight: 700, color: "var(--color-text)", marginBottom: "12px", display: "flex", alignItems: "center", gap: "8px" }}>
            <Leaf size={20} style={{ color: "#22C55E" }} />
            ما هو نادي ODD؟ (What is ODD?)
          </h2>
          <p style={{ fontSize: "15px", color: "var(--color-text-secondary)", lineHeight: 1.7, marginBottom: "16px" }}>
            نقدّمولكم نادي <strong>ODD ISET Zaghouan</strong> — نادي جديد في الفاك بس مليان شغف وحيوية.
            نعملو برامج تدريبية، ورشات وأحداث ما تنساش، وطلعات استكشافية باش يربطو حياتكم الجامعية بالواقع المهني والتنموي.
          </p>
        </Card>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))", gap: "24px", marginBottom: "32px" }}>
        <Card elevation="raised" padding="24px">
          <h3 style={{ fontSize: "16px", fontWeight: 700, color: "var(--color-text)", marginBottom: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
            <CheckCircle2 size={18} style={{ color: "#22C55E" }} />
            الأهداف الرئيسية
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {objectives.map((obj, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                <span style={{ color: "#22C55E", fontSize: "14px", fontWeight: "bold" }}>✓</span>
                <span style={{ fontSize: "13px", color: "var(--color-text-secondary)", lineHeight: 1.5 }}>{obj}</span>
              </div>
            ))}
          </div>
        </Card>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <Card elevation="raised" padding="20px">
            <h3 style={{ fontSize: "15px", fontWeight: 700, color: "var(--color-text)", marginBottom: "12px" }}>روابط النادي</h3>
            <div style={{ display: "flex", gap: "10px" }}>
              <a
                href="https://www.facebook.com/profile.php?id=100092248076251"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
                  textDecoration: "none", fontSize: "13px", color: "#1877F2", padding: "10px",
                  borderRadius: "10px", background: "rgba(24,119,242,0.06)", border: "1px solid rgba(24,119,242,0.18)",
                  fontWeight: 600,
                }}
              >
                <Facebook size={16} />
                <span>Facebook</span>
              </a>
              <a
                href="https://www.instagram.com/club_odd"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
                  textDecoration: "none", fontSize: "13px", color: "#E4405F", padding: "10px",
                  borderRadius: "10px", background: "rgba(228,64,95,0.06)", border: "1px solid rgba(228,64,95,0.18)",
                  fontWeight: 600,
                }}
              >
                <Instagram size={16} />
                <span>Instagram</span>
              </a>
            </div>
          </Card>

          <Card elevation="raised" padding="20px">
            <h3 style={{ fontSize: "15px", fontWeight: 700, color: "var(--color-text)", marginBottom: "12px", display: "flex", alignItems: "center", gap: "8px" }}>
              <Calendar size={16} style={{ color: "var(--color-secondary)" }} />
              الأنشطة والورشات
            </h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
              {events.map((ev) => (
                <span
                  key={ev}
                  style={{
                    padding: "5px 12px",
                    borderRadius: "999px",
                    background: "rgba(34,197,94,0.08)",
                    border: "1px solid rgba(34,197,94,0.18)",
                    color: "#16A34A",
                    fontSize: "12px",
                    fontWeight: 600,
                  }}
                >
                  {ev}
                </span>
              ))}
            </div>
          </Card>
        </div>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <h2 style={{ fontSize: "18px", fontWeight: 700, color: "var(--color-text)", marginBottom: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
          <ImageIcon size={20} style={{ color: "var(--color-secondary)" }} />
          معرض الصور والذكريات
        </h2>
        <PhotoGallery images={images} />
      </div>
    </>
  );
}
