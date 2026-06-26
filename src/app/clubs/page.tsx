"use client";

import { motion } from "framer-motion";
import {
  Users, Heart, Star, Globe, Briefcase, MessageCircle, Clock, CheckCircle2, ArrowLeft,
} from "lucide-react";
import { AppLayout } from "@/components/layout/AppLayout";
import { PageHeader, Card, Alert } from "@/components/ui/shared";
import { clubs } from "@/data/content";
import Link from "next/link";

const benefitCards = [
  { icon: Globe,         title: "توسيع دائرة المعرفة",   desc: "تعرف عباد من أعمار و اختصاصات مختلفة", color: "#3B82F6", bg: "rgba(59,130,246,0.10)"  },
  { icon: Briefcase,     title: "تقوية السيرة الذاتية",   desc: "شهادات و خبرات باش تتحصل عليها",       color: "#8B5CF6", bg: "rgba(139,92,246,0.10)"  },
  { icon: MessageCircle, title: "تطوير التواصل",          desc: "تتعلم كيفاه تتواصل و تتفاهم",          color: "#12B8C8", bg: "rgba(18,184,200,0.10)"  },
  { icon: Clock,         title: "إدارة الوقت",            desc: "تنظم وقتك بين القراية و الأنشطة",      color: "#F97316", bg: "rgba(249,115,22,0.10)"  },
];

export default function ClubsPage() {
  return (
    <AppLayout>
      <div style={{ maxWidth: "860px", margin: "0 auto", padding: "clamp(24px, 5vw, 40px) clamp(16px, 5vw, 32px)", width: "100%", boxSizing: "border-box" }}>
        <PageHeader
          icon={Users}
          label="الحياة الجامعية"
          title="النوادي و الجمعيات"
          subtitle="الحياة الجامعية مهاش قراية بركا — اكتشف روحك و طور مهاراتك"
          category="life"
        />

        {/* Why join */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          style={{ marginBottom: "32px" }}
        >
          <Card elevation="feature" padding="28px">
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "18px" }}>
              <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "rgba(239,68,68,0.10)", color: "#EF4444", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Heart size={20} strokeWidth={2} />
              </div>
              <h3 style={{ fontWeight: 700, fontSize: "17px", color: "var(--color-text)" }}>ليش تنضم لنادي؟</h3>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "10px" }}>
              {clubs[0].benefits.map((b, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                  <CheckCircle2 size={16} style={{ color: "#22C55E", flexShrink: 0, marginTop: "2px" }} strokeWidth={2.5} />
                  <span style={{ fontSize: "13px", color: "var(--color-text)", lineHeight: 1.5 }}>{b}</span>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Soft skills */}
        <div style={{ marginBottom: "32px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "18px" }}>
            <div style={{ width: "34px", height: "34px", borderRadius: "50%", background: "rgba(246,180,27,0.10)", color: "var(--color-accent)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Star size={16} strokeWidth={2} />
            </div>
            <span style={{ fontWeight: 700, fontSize: "17px", color: "var(--color-text)" }}>Soft Skills اللي تكتسبها</span>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {clubs[0].skills.map((s) => (
              <motion.span
                key={s}
                whileHover={{ y: -2, scale: 1.04 }}
                style={{
                  padding: "7px 16px",
                  borderRadius: "999px",
                  fontSize: "13px",
                  fontWeight: 600,
                  background: "rgba(246,180,27,0.10)",
                  color: "#B45309",
                  border: "1px solid rgba(246,180,27,0.25)",
                  cursor: "default",
                }}
              >
                {s}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Benefit cards */}
        <div style={{ marginBottom: "32px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "18px" }}>
            <span style={{ fontWeight: 700, fontSize: "17px", color: "var(--color-text)" }}>الفوائد</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "16px" }}>
            {benefitCards.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <Card elevation="raised" padding="22px">
                  <div style={{ width: "44px", height: "44px", borderRadius: "50%", background: item.bg, color: item.color, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "14px" }}>
                    <item.icon size={20} strokeWidth={2} />
                  </div>
                  <h4 style={{ fontWeight: 600, fontSize: "14px", color: "var(--color-text)", marginBottom: "6px" }}>{item.title}</h4>
                  <p style={{ fontSize: "12px", color: "var(--color-text-muted)", lineHeight: 1.6 }}>{item.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Active clubs list */}
        <div style={{ marginBottom: "32px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "18px" }}>
            <span style={{ fontWeight: 700, fontSize: "17px", color: "var(--color-text)" }}>النوادي والجمعيات النشطة بالمعهد</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {[
              {
                name: "SecuriNets ISET Zaghouan",
                slogan: "Defending today, securing tomorrow. 🛡️🚀",
                description: "أكبر مجتمع وتجمع طلابي للأمن السيبراني في تونس. انطلق من سنة 2016 بالفاك ومفتوح لجميع الطلبة لتطوير مهارات الحماية واختبار الاختراق.",
                color: "#F6B41B",
                href: "/clubs/securinets",
                logo: "/images/SecuriNets ISET Zaghouan/307089995_5896662463700630_57012804199137690_n.webp",
              },
              {
                name: "ODD ISET Zaghouan",
                slogan: "Shaping minds, building a sustainable world. 🌱💡",
                description: "نادي التنمية المستدامة والبيئة، ينظم تكوينات، ورشات، وزيارات ميدانية للشركات الصناعية لربط الدراسة بالواقع المهني.",
                color: "#22C55E",
                href: "/clubs/odd",
                logo: "/images/ODD ISET Zaghouan/346084632_2212215942302379_3257380520080764734_n.webp",
              },
              {
                name: "Enactus ISET Zaghouan",
                slogan: "We empower, innovate, and create positive change. 💯🌍",
                description: "من أكثر النوادي نشاطاً في المعهد لتأسيس المشاريع الاجتماعية والريادية ومساعدة الفئات الهشة، والمشاركة بالمسابقة الوطنية السنوية.",
                color: "#12B8C8",
                href: "/clubs/enactus",
                logo: "https://th.bing.com/th/id/R.8a3ad5957f7a61393d26e56812ef3134?rik=trk7N6Nmyzry8g&pid=ImgRaw&r=0",
              },
            ].map((club, idx) => (
              <motion.div
                key={club.name}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card elevation="raised" padding="22px">
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", alignItems: "center" }}>
                    <img 
                      src={club.logo} 
                      alt={club.name} 
                      style={{ width: "52px", height: "52px", borderRadius: "12px", objectFit: "cover", border: "1px solid var(--color-border)", flexShrink: 0 }}
                    />
                    <div style={{ flex: 1, minWidth: "260px" }}>
                      <h4 style={{ fontWeight: 700, fontSize: "15px", color: "var(--color-text)", marginBottom: "2px" }}>{club.name}</h4>
                      <p style={{ fontSize: "12px", color: club.color, fontWeight: 600, marginBottom: "6px" }}>{club.slogan}</p>
                      <p style={{ fontSize: "13px", color: "var(--color-text-secondary)", lineHeight: 1.5 }}>{club.description}</p>
                    </div>
                    <Link href={club.href} style={{ textDecoration: "none" }}>
                      <motion.div
                        whileHover={{ x: -4 }}
                        style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "13px", fontWeight: 600, color: "var(--color-secondary)", cursor: "pointer" }}
                      >
                        <span>التفاصيل والصور</span>
                        <ArrowLeft size={14} />
                      </motion.div>
                    </Link>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        <Alert title="نصيحة ذهبية" variant="success">
          الحياة الجامعية مهاش قراية بركا. النوادي تربط بين الجو والتفرهيد وتخليك تكتسب خبرة في برشا ميادين مختلفة.
        </Alert>
      </div>
    </AppLayout>
  );
}
