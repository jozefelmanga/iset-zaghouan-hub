"use client";

import { motion } from "framer-motion";
import { Users, Globe, Shield, Calendar, Image as ImageIcon, Facebook, Instagram, Linkedin, ExternalLink } from "lucide-react";
import { PageHeader, Card, Alert } from "@/components/ui/shared";
import { PhotoGallery } from "@/components/ui/Lightbox";

const images = [
  // Most recent events
  "/images/SecuriNets ISET Zaghouan/441071033_849605910531258_8993167707782432578_n.webp",
  "/images/SecuriNets ISET Zaghouan/437521945_834428192049030_3695829590512408431_n.webp",
  "/images/SecuriNets ISET Zaghouan/432267068_807582028066980_6785664168943555115_n.webp",
  "/images/SecuriNets ISET Zaghouan/432256475_807580918067091_4635179164230998822_n.webp",
  "/images/SecuriNets ISET Zaghouan/432260492_807580244733825_3046981252408012495_n.webp",
  "/images/SecuriNets ISET Zaghouan/432228120_807580778067105_1639265937168775195_n.webp",
  "/images/SecuriNets ISET Zaghouan/432214445_807580068067176_5301764264651567123_n.webp",
  "/images/SecuriNets ISET Zaghouan/424628009_782265043932012_7027532546870227355_n.webp",
  "/images/SecuriNets ISET Zaghouan/417369437_772731631552020_4160951096701340662_n.webp",
  "/images/SecuriNets ISET Zaghouan/414542896_768392331985950_3110878637361875773_n.webp",
  // Older sessions
  "/images/SecuriNets ISET Zaghouan/409495600_750185443806639_2405482469459673984_n.webp",
  "/images/SecuriNets ISET Zaghouan/401586524_746133030878547_3803472748462088747_n.webp",
  "/images/SecuriNets ISET Zaghouan/393163761_746133134211870_2032123782391286652_n.webp",
  "/images/SecuriNets ISET Zaghouan/331726727_705513661360896_1885203088791651240_n.webp",
  "/images/SecuriNets ISET Zaghouan/318330240_517785723713280_4975689056961619346_n.webp",
  "/images/SecuriNets ISET Zaghouan/315469869_503878761770643_8193283586596288796_n.webp",
  "/images/SecuriNets ISET Zaghouan/312483262_485631963595323_2330322814186718250_n.webp",
  "/images/SecuriNets ISET Zaghouan/311782107_485631633595356_7091234103297781908_n.webp",
  "/images/SecuriNets ISET Zaghouan/311382146_485631433595376_8742838079895826476_n.webp",
];

const events = ["Workshops", "Hackathons", "CTFs (Capture The Flag)", "Trainings", "Journée d'intégration"];

export default function SecurinetsPage() {
  return (
    <>
      {/* Cover Image */}
      <div style={{ position: "relative", height: "240px", width: "100%", overflow: "hidden" }}>
        <img 
          src="/images/SecuriNets ISET Zaghouan/414471318_762084249283425_5669816558873673442_n.webp" 
          alt="SecuriNets Cover"
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 93%" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(11,31,58,0.2), rgba(11,31,58,0.85))" }} />
        
        {/* Overlay Logo and Text */}
        <div style={{ position: "absolute", bottom: "24px", right: "32px", left: "32px", display: "flex", alignItems: "center", gap: "20px", flexWrap: "wrap" }}>
          <img 
            src="/images/SecuriNets ISET Zaghouan/307089995_5896662463700630_57012804199137690_n.webp" 
            alt="SecuriNets Logo"
            style={{ width: "80px", height: "80px", borderRadius: "16px", border: "2px solid #fff", objectFit: "cover", background: "#000" }}
          />
          <div>
            <h1 style={{ fontSize: "28px", fontWeight: 800, color: "#fff", marginBottom: "4px" }}>SecuriNets ISET Zaghouan</h1>
            <p style={{ fontSize: "14px", color: "#F6B41B", fontWeight: 600 }}>Defending today, securing tomorrow. 🛡️🚀</p>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: "860px", margin: "0 auto", padding: "clamp(24px, 5vw, 40px) clamp(16px, 5vw, 32px)", width: "100%", boxSizing: "border-box" }}>
        
        {/* About Card */}
        <div style={{ marginBottom: "32px" }}>
          <Card elevation="raised" padding="28px">
            <h2 style={{ fontSize: "18px", fontWeight: 700, color: "var(--color-text)", marginBottom: "12px", display: "flex", alignItems: "center", gap: "8px" }}>
              <Shield size={20} style={{ color: "#F6B41B" }} />
              شكون أحنا؟ (Who Are We?)
            </h2>
            <p style={{ fontSize: "15px", color: "var(--color-text-secondary)", lineHeight: 1.7, marginBottom: "16px" }}>
              تأسست جمعية <strong>SecuriNets</strong> الوطنية في سنة 2003، وهي أكبر جمعية ومجتمع في تونس مخصص بالكامل لمجال الأمن السيبراني. 
              افتتح الفرع الخاص بالمعهد العالي للعلوم التطبيقية والتكنولوجيا بزغوان في سنة 2016 من قبل مجموعة طلاب شغوفين بالـ <code style={{ color: "#3B82F6", fontWeight: 600 }}>Cybersecurity</code>.
            </p>
            <Alert title="ملاحظة هامة" variant="info">
              فريق SecuriNets ما يقتصرش فقط على طلبة الإعلامية (IT)، بالعكس التكوينات متاعنا مفتوحة للطلبة الكل من كافة التخصصات والسنوات للمشاركة والتعلم.
            </Alert>
          </Card>
        </div>

        {/* Info Grid (Socials & Events) */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))", gap: "24px", marginBottom: "32px" }}>
          
          {/* Social media */}
          <Card elevation="raised" padding="24px">
            <h3 style={{ fontSize: "16px", fontWeight: 700, color: "var(--color-text)", marginBottom: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
              <Globe size={18} style={{ color: "var(--color-secondary)" }} />
              مواقع التواصل الاجتماعي
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {[
                { label: "Facebook", icon: Facebook, link: "https://www.facebook.com/SecuriNets.ZG", color: "#1877F2" },
                { label: "Instagram", icon: Instagram, link: "https://www.instagram.com/securinets_iset_zaghouan/", color: "#E4405F" },
                { label: "LinkedIn", icon: Linkedin, link: "https://www.linkedin.com/company/securinets-iset-zaghouan/", color: "#0A66C2" },
                { label: "Website", icon: ExternalLink, link: "https://securinets.tn/", color: "var(--color-secondary)" },
              ].map((soc) => {
                const Icon = soc.icon;
                return (
                  <a 
                    key={soc.label} 
                    href={soc.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      textDecoration: "none",
                      fontSize: "14px",
                      color: "var(--color-text-secondary)",
                      padding: "8px 12px",
                      borderRadius: "10px",
                      background: "rgba(11,31,58,0.03)",
                      border: "1px solid var(--color-border)",
                      fontWeight: 500,
                      transition: "all var(--transition-fast)"
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
                    <Icon size={16} />
                    <span>{soc.label}</span>
                  </a>
                );
              })}
            </div>
          </Card>

          {/* Events */}
          <Card elevation="raised" padding="24px">
            <h3 style={{ fontSize: "16px", fontWeight: 700, color: "var(--color-text)", marginBottom: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
              <Calendar size={18} style={{ color: "var(--color-secondary)" }} />
              أنشطة وفعاليات النادي
            </h3>
            <p style={{ fontSize: "13.5px", color: "var(--color-text-secondary)", lineHeight: 1.5, marginBottom: "14px" }}>
              نقوم كل سنة بتنظيم وتسيير العديد من التظاهرات والمنافسات الرائعة:
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {events.map((ev) => (
                <span 
                  key={ev} 
                  style={{
                    padding: "6px 14px",
                    borderRadius: "999px",
                    background: "rgba(246,180,27,0.08)",
                    border: "1px solid rgba(246,180,27,0.18)",
                    color: "#B45309",
                    fontSize: "12.5px",
                    fontWeight: 600
                  }}
                >
                  {ev}
                </span>
              ))}
            </div>
          </Card>

        </div>

        {/* Gallery */}
        <div style={{ marginBottom: "20px" }}>
          <h2 style={{ fontSize: "18px", fontWeight: 700, color: "var(--color-text)", marginBottom: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
            <ImageIcon size={20} style={{ color: "var(--color-secondary)" }} />
            معرض الصور والذكريات
          </h2>
          
          <PhotoGallery images={images} />
        </div>

      </div>
    </>
  );
}
