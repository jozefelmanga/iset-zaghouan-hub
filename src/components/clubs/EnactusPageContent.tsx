"use client";

import {
  Globe,
  Briefcase,
  Calendar,
  ImageIcon,
  Facebook,
  Instagram,
  Youtube,
  Award,
  Trophy,
  Play,
} from "@/lib/icons";
import { Card } from "@/components/ui/shared";
import { FullBleed } from "@/components/ui/layout";
import { PhotoGallery, ZoomableImage } from "@/components/ui/Lightbox";

const images = [
  "/images/Enactus ISET Zaghouan/1703081864007.webp",
  "/images/Enactus ISET Zaghouan/received_339612968478048_(1).webp",
  "/images/Enactus ISET Zaghouan/FB_IMG_1709626634622.webp",
  "/images/Enactus ISET Zaghouan/enactusisetzaghouan_335658515_615813247031283_4854653150784438139_n.webp",
  "/images/Enactus ISET Zaghouan/334748585_592761119562857_4998579694977752212_n.webp",
  "/images/Enactus ISET Zaghouan/453331840_823412293222657_5334781583359156765_n.webp",
  "/images/Enactus ISET Zaghouan/453510491_823407753223111_6568305378444872917_n.webp",
  "/images/Enactus ISET Zaghouan/453348330_823411613222725_3685005343889981378_n.webp",
];

const achievements = [
  "Best Project Photo of the year 📸",
  "Best Faculty Advisor Award (للأستاذة منيرة مباركي) 👩‍🏫",
  "Best Administration Award (جائزة أفضل إدارة) 🏢",
  "Finalist Award and 3rd place overall 🏆 (المركز الثالث وطنياً)",
];

const projects = [
  {
    name: "Rosa Canina 🏵️",
    desc: "مشروع ريادي بيئي يعتمد على استخراج وتثمين الورد البري باش يخلق مواطن شغل وفرص تنمية.",
    youtube: "https://youtu.be/7Wq51MVgjnQ?si=_YtxCkxd5_0JPg9N",
  },
  {
    name: "Nopaleer 🌵",
    desc: "تثمين ثروة الصبار واستخراج مشتقاتها الطبيعية والطبية لغايات تجارية وتنموية وصديقة للبيئة.",
    youtube: "https://youtu.be/vtY5X0BE0qg?si=5V7c5UZ-bqePr0yE",
  },
];

const events = ["يوم التراث 🏺", "Randotek GDG 🗺️", "Lightquest 🔦", "طلعة لجبل زغوان ⛰️", "Journée d'intégration 🤝"];

export function EnactusPageContent() {
  return (
    <>
      <FullBleed style={{ height: "240px", marginBottom: "32px" }}>
        <ZoomableImage
          fill
          src="/images/Enactus ISET Zaghouan/453488211_823412283222658_7480948437040389927_n.webp"
          alt="Enactus Cover"
          objectPosition="center 35%"
        />
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "linear-gradient(to bottom, rgba(11,31,58,0.25), rgba(11,31,58,0.85))" }} />
        <div style={{ position: "absolute", bottom: "24px", right: "32px", left: "32px", display: "flex", alignItems: "center", gap: "20px", flexWrap: "wrap", pointerEvents: "none" }}>
          <ZoomableImage
            src="https://th.bing.com/th/id/R.8a3ad5957f7a61393d26e56812ef3134?rik=trk7N6Nmyzry8g&pid=ImgRaw&r=0"
            alt="Enactus Logo"
            hideHint
            objectFit="contain"
            style={{ width: "80px", height: "80px", borderRadius: "16px", border: "2px solid #fff", background: "#fff", padding: "4px", pointerEvents: "auto" }}
          />
        </div>
      </FullBleed>

      <div style={{ marginBottom: "32px" }}>
        <Card elevation="raised" padding="28px">
          <h2 style={{ fontSize: "18px", fontWeight: 700, color: "var(--color-text)", marginBottom: "12px", display: "flex", alignItems: "center", gap: "8px" }}>
            <Briefcase size={20} style={{ color: "#F6B41B" }} />
            ما هي شبكة Enactus؟
          </h2>
          <p style={{ fontSize: "15px", color: "var(--color-text-secondary)", lineHeight: 1.7, marginBottom: "16px" }}>
            <strong>Enactus</strong> (Entrepreneurial Action Us) منظمة دولية موجودة في 36 دولة في العالم، وفي تونس فيها 85 جامعة ومعهد.
            الهدف متاعها يعاون الطلبة يعيشو تجربة ريادة الأعمال كاملة — يبتكرو وينفّذو مشاريع تنموية واجتماعية تخدم المجتمع تحت أهداف التنمية المستدامة.
          </p>
          <p style={{ fontSize: "15px", color: "var(--color-text-secondary)", lineHeight: 1.7, marginBottom: "16px" }}>
            تأسس فرع <strong>Enactus ISET Zaghouan</strong> في ديسمبر 2020 على يد الأستاذة <strong>نور عويني</strong>. بالرغم من الصعوبات، الفريق نجح ينظّم برشا تكوينات وأحداث تنموية وريادية في الفاك وشارك بتميز على المستوى الوطني.
          </p>
        </Card>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))", gap: "24px", marginBottom: "32px" }}>
        <Card elevation="raised" padding="24px">
          <h3 style={{ fontSize: "16px", fontWeight: 700, color: "var(--color-text)", marginBottom: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
            <Trophy size={18} style={{ color: "#F6B41B" }} />
            أبرز مشاريع النادي الريادية
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {projects.map((proj, idx) => (
              <div key={idx} style={{ padding: "12px 14px", borderRadius: "10px", background: "rgba(11,31,58,0.03)", border: "1px solid var(--color-border)" }}>
                <h4 style={{ fontWeight: 700, fontSize: "14px", color: "var(--color-text)", marginBottom: "4px" }}>{proj.name}</h4>
                <p style={{ fontSize: "12.5px", color: "var(--color-text-secondary)", lineHeight: 1.5, marginBottom: "10px" }}>{proj.desc}</p>
                <a
                  href={proj.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    fontSize: "12.5px",
                    color: "#EF4444",
                    fontWeight: 600,
                    textDecoration: "none",
                  }}
                >
                  <Play size={12} fill="#EF4444" />
                  <span>شاهد فيديو المشروع على يوتيوب</span>
                </a>
              </div>
            ))}
          </div>
        </Card>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <Card elevation="raised" padding="20px">
            <h3 style={{ fontSize: "15px", fontWeight: 700, color: "var(--color-text)", marginBottom: "12px", display: "flex", alignItems: "center", gap: "8px" }}>
              <Award size={16} style={{ color: "#22C55E" }} />
              نجاحات وجوائز 2024
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {achievements.map((ach, idx) => (
                <div key={idx} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ color: "#22C55E" }}>✔</span>
                  <span style={{ fontSize: "13px", color: "var(--color-text-secondary)", fontWeight: 500 }}>{ach}</span>
                </div>
              ))}
            </div>
          </Card>

          <Card elevation="raised" padding="20px">
            <h3 style={{ fontSize: "15px", fontWeight: 700, color: "var(--color-text)", marginBottom: "12px", display: "flex", alignItems: "center", gap: "8px" }}>
              <Globe size={16} style={{ color: "var(--color-secondary)" }} />
              روابط التواصل الاجتماعي
            </h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {[
                { label: "Facebook", icon: Facebook, link: "https://facebook.com/EnactusISETZaghouan", color: "#1877F2" },
                { label: "Instagram", icon: Instagram, link: "https://instagram.com/enactusisetzaghouan", color: "#E4405F" },
                { label: "YouTube", icon: Youtube, link: "https://youtube.com/@enactusisetzaghouan9584", color: "#FF0000" },
              ].map((soc) => (
                <a
                  key={soc.label}
                  href={soc.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    padding: "6px 12px",
                    borderRadius: "8px",
                    background: "rgba(11,31,58,0.03)",
                    border: "1px solid var(--color-border)",
                    color: "var(--color-text-secondary)",
                    fontSize: "12.5px",
                    fontWeight: 500,
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    transition: "all var(--transition-fast)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = soc.color;
                    (e.currentTarget as HTMLAnchorElement).style.color = soc.color;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--color-border)";
                    (e.currentTarget as HTMLAnchorElement).style.color = "var(--color-text-secondary)";
                  }}
                >
                  <soc.icon size={14} />
                  <span>{soc.label}</span>
                </a>
              ))}
            </div>
          </Card>

          <Card elevation="raised" padding="20px">
            <h3 style={{ fontSize: "15px", fontWeight: 700, color: "var(--color-text)", marginBottom: "12px", display: "flex", alignItems: "center", gap: "8px" }}>
              <Calendar size={16} style={{ color: "var(--color-secondary)" }} />
              أنشطة وتظاهرات
            </h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
              {events.map((ev) => (
                <span
                  key={ev}
                  style={{
                    padding: "5px 12px",
                    borderRadius: "999px",
                    background: "rgba(246,180,27,0.08)",
                    border: "1px solid rgba(246,180,27,0.18)",
                    color: "#B45309",
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
