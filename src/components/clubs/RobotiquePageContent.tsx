"use client";

import type { LucideIcon } from "@/lib/icons";
import {
  Bot,
  Code,
  Cpu,
  Calendar,
  ImageIcon,
  Facebook,
  Instagram,
  Trophy,
  Zap,
  Wrench,
  Globe,
  Lightbulb,
} from "@/lib/icons";
import { Card } from "@/components/ui/shared";
import { ClubHeroBanner } from "@/components/clubs/ClubHeroBanner";
import { PageWrapper } from "@/components/ui/layout";
import { PhotoGallery } from "@/components/ui/Lightbox";

const ROBOTIQUE_COLOR = "#2563EB";
const ROBOTIQUE_BASE = "/images/clubs/robotique";



const techStack: { name: string; icon: LucideIcon; color: string; bg: string }[] = [
  { name: "Arduino",            icon: Cpu,  color: "#00979D", bg: "rgba(0,151,157,0.10)"  },
  { name: "C / C++",            icon: Code, color: "#00599C", bg: "rgba(0,89,156,0.10)"   },
  { name: "Python",             icon: Code, color: "#3776AB", bg: "rgba(55,118,171,0.10)" },
  { name: "Électronique",       icon: Zap,  color: "#F59E0B", bg: "rgba(245,158,11,0.10)" },
  { name: "Systèmes embarqués", icon: Cpu,  color: "#8B5CF6", bg: "rgba(139,92,246,0.10)" },
  { name: "Robotique",          icon: Bot,  color: "#2563EB", bg: "rgba(37,99,235,0.10)"  },
];

const workshops: { icon: LucideIcon; title: string; desc: string; color: string }[] = [
  {
    icon: Code,
    title: "ورشات البرمجة",
    desc: "من الأساسيات للتطبيق العملي على Arduino و C/C++ و Python.",
    color: "#3B82F6",
  },
  {
    icon: Zap,
    title: "ورشات الإلكترونيك",
    desc: "تصميم الدارات، اللحام، واختبار المكونات الإلكترونية.",
    color: "#F59E0B",
  },
  {
    icon: Bot,
    title: "مشاريع روبوتية",
    desc: "تصميم، برمجة، وبناء روبوتات كاملة من الصفر للنهاية.",
    color: ROBOTIQUE_COLOR,
  },
  {
    icon: Cpu,
    title: "أنظمة مدمجة",
    desc: "ميكروكونترولرات باش تربط البرمجة بالواقع.",
    color: "#8B5CF6",
  },
  {
    icon: Lightbulb,
    title: "تكوينات ومعرفة",
    desc: "sessions تقنية وتبادل خبرات بين الأعضاء.",
    color: "#12B8C8",
  },
  {
    icon: Globe,
    title: "تعاون وشراكات",
    desc: "collaboration مع نوادي، جمعيات، وشركات.",
    color: "#0EA5E9",
  },
];

interface Props {
  galleryImages: string[];
}

export function RobotiquePageContent({ galleryImages }: Props) {
  return (
    <>
      <ClubHeroBanner
        bannerSrc={`${ROBOTIQUE_BASE}/robotics (18).webp`}
        bannerAlt="Club Robotique ISET Zaghouan Cover"
        logoSrc={`${ROBOTIQUE_BASE}/logo.webp`}
        logoAlt="Club Robotique ISET Zaghouan Logo"
        title="Club Robotique ISET Zaghouan"
        subtitle="Innovate. Create. Inspire. 🤖"
        logoObjectFit="contain"
      />

      <PageWrapper narrow className="pt-0! flex flex-col gap-8">
        <Card elevation="raised" padding="28px">
          <h2 style={{ fontSize: "18px", fontWeight: 700, color: "var(--color-text)", marginBottom: "12px", display: "flex", alignItems: "center", gap: "8px" }}>
            <Bot size={20} style={{ color: ROBOTIQUE_COLOR }} />
            شكون أحنا؟ (Who Are We?)
          </h2>
          <p style={{ fontSize: "15px", color: "var(--color-text-secondary)", lineHeight: 1.7, marginBottom: "12px" }}>
            <strong>Club Robotique ISET Zaghouan</strong> مجتمع شغوف بالروبوتيك، الإلكترونيك والبرمجة —
            نحوّلو الأفكار لمشاريع حقيقية ونكوّنو المبتكرين متاع الغدوة.
          </p>
          <p style={{ fontSize: "15px", color: "var(--color-text-secondary)", lineHeight: 1.7, marginBottom: "20px" }}>
            ورشات hands-on، مشاريع جماعية، وتحديات تقنية — الإبداع يلتقي بالتكنولوجيا باش تطوّر مهاراتك.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "12px", justifyContent: "space-between" }}>
            <span
              style={{
                display: "inline-block",
                padding: "6px 14px",
                borderRadius: "999px",
                background: "rgba(37,99,235,0.08)",
                border: "1px solid rgba(37,99,235,0.18)",
                color: ROBOTIQUE_COLOR,
                fontSize: "12.5px",
                fontWeight: 600,
              }}
            >
              Innovate. Create. Inspire. 🤖
            </span>
            <div style={{ display: "flex", gap: "10px" }}>
              <a
                href="https://www.facebook.com/share/18pKS4UBcJ/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex", alignItems: "center", gap: "8px",
                  textDecoration: "none", fontSize: "13px", color: "#1877F2", padding: "8px 14px",
                  borderRadius: "10px", background: "rgba(24,119,242,0.06)", border: "1px solid rgba(24,119,242,0.18)",
                  fontWeight: 600,
                }}
              >
                <Facebook size={16} />
                <span>Facebook</span>
              </a>
              <a
                href="https://www.instagram.com/club_robotique_isetzagh?igsh=MWJoa2JoZWt5aGdmcg=="
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex", alignItems: "center", gap: "8px",
                  textDecoration: "none", fontSize: "13px", color: "#E4405F", padding: "8px 14px",
                  borderRadius: "10px", background: "rgba(228,64,95,0.06)", border: "1px solid rgba(228,64,95,0.18)",
                  fontWeight: 600,
                }}
              >
                <Instagram size={16} />
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </Card>

      <div style={{ marginBottom: "32px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
          <Wrench size={18} style={{ color: ROBOTIQUE_COLOR }} />
          <h3 style={{ fontWeight: 700, fontSize: "17px", color: "var(--color-text)", margin: 0 }}>
            التكنولوجيات اللي نستعملوها
          </h3>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))", gap: "12px" }}>
          {techStack.map((tech) => {
            const Icon = tech.icon;
            return (
              <div
                key={tech.name}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "10px",
                  padding: "18px 12px",
                  borderRadius: "14px",
                  background: tech.bg,
                  border: `1px solid ${tech.color}22`,
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "12px",
                    background: "#fff",
                    border: `1px solid ${tech.color}33`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: tech.color,
                  }}
                >
                  <Icon size={22} strokeWidth={2} />
                </div>
                <span style={{ fontSize: "13px", fontWeight: 700, color: tech.color, lineHeight: 1.3 }}>
                  {tech.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <Card elevation="raised" padding="24px" style={{ marginBottom: "32px" }}>
        <h3 style={{ fontSize: "16px", fontWeight: 700, color: "var(--color-text)", marginBottom: "20px", display: "flex", alignItems: "center", gap: "8px" }}>
          <Calendar size={18} style={{ color: ROBOTIQUE_COLOR }} />
          أنشطة وفعاليات النادي
        </h3>

        <div
          style={{
            padding: "18px 20px",
            borderRadius: "14px",
            background: "linear-gradient(135deg, rgba(37,99,235,0.08), rgba(139,92,246,0.06))",
            border: "1px solid rgba(37,99,235,0.18)",
            marginBottom: "20px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
            <Trophy size={18} style={{ color: ROBOTIQUE_COLOR }} />
            <h4 style={{ fontSize: "15px", fontWeight: 700, color: "var(--color-text)", margin: 0 }}>
              Hackathon Robotique 24H
            </h4>
          </div>
          <p style={{ fontSize: "13.5px", color: "var(--color-text-secondary)", lineHeight: 1.6, margin: 0 }}>
            تحدي تقني وطني: الفرق عندها <strong>24 ساعة</strong> باش تصمّم، تبرمج وتبني روبوت تلقائي عن بُعد
            يكمّل المهمات المطلوبة — وكذلك مشاركة في competitions و hackathons أخرى على المستوى الوطني.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "12px" }}>
          {workshops.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "12px",
                  padding: "12px 14px",
                  borderRadius: "12px",
                  background: "rgba(11,31,58,0.03)",
                  border: "1px solid var(--color-border)",
                }}
              >
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "10px",
                    background: `${item.color}14`,
                    color: item.color,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Icon size={18} />
                </div>
                <div>
                  <h4 style={{ fontSize: "13.5px", fontWeight: 700, color: "var(--color-text)", marginBottom: "4px" }}>
                    {item.title}
                  </h4>
                  <p style={{ fontSize: "12px", color: "var(--color-text-secondary)", lineHeight: 1.5, margin: 0 }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Card>

      <div style={{ marginBottom: "20px" }}>
        <h2 style={{ fontSize: "18px", fontWeight: 700, color: "var(--color-text)", marginBottom: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
          <ImageIcon size={20} style={{ color: "var(--color-secondary)" }} />
          معرض الصور والذكريات
        </h2>
        <PhotoGallery images={galleryImages} initialVisibleCount={12} altPrefix="Robotique" />
      </div>
      </PageWrapper>
    </>
  );
}
