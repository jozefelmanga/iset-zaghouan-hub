"use client";

import { motion } from "framer-motion";
import {
  MapPin, Coffee, BookOpen, Camera, Mountain, Store, Dumbbell, Image as ImageIcon,
} from "lucide-react";
import { PageHeader, Card } from "@/components/ui/shared";
import { exploreZaghouan } from "@/data/content";
import { PhotoGallery } from "@/components/ui/Lightbox";

const zaghouanGallery = [
  "/images/zaghouan pictures/453730591_805747531643921_4118774256866494939_n.webp",
  "/images/zaghouan pictures/453568999_1185356795949166_6630547390594190983_n.webp",
  "/images/zaghouan pictures/454681866_784735663572185_7956960260060586381_n.webp",
  "/images/zaghouan pictures/453145358_348623164855185_7361114377050721382_n.webp",
  "/images/zaghouan pictures/452023137_866971058273632_455606045138596090_n.webp",
  "/images/zaghouan pictures/365467076_236031999397519_8262401085420359372_n.webp",
  "/images/zaghouan pictures/365901471_236031852730867_2404359774636430532_n.webp",
  "/images/zaghouan pictures/365961746_236031816064204_2394669725362136427_n.webp",
  "/images/zaghouan pictures/366194675_236031719397547_1547174476691147302_n.webp",
  "/images/zaghouan pictures/434294841_784140536584726_5417399075771833382_n.webp",
  "/images/zaghouan pictures/434324611_1105646767428234_6403357612390732803_n.webp",
  "/images/zaghouan pictures/366090575_236032072730845_8169774398348362655_n.webp",
  "/images/zaghouan pictures/366197543_236032032730849_8238539213188969374_n.webp",
  "/images/zaghouan pictures/453302004_469025909381774_798090974396607937_n.webp",
  "/images/zaghouan pictures/453412384_1038462501304186_2673665503092548481_n.webp",
  "/images/zaghouan pictures/453636869_464247633181306_4989154495166475258_n.webp",
  "/images/zaghouan pictures/365467016_236031572730895_1926914396677270967_n.webp",
  "/images/zaghouan pictures/363422706_236030396064346_5926913068721297280_n.webp",
  "/images/zaghouan pictures/366101980_236031066064279_1811388203938074133_n.webp",
  "/images/zaghouan pictures/452504714_515293787820589_1003316722924494718_n.webp",
  "/images/zaghouan pictures/452987119_955723209900080_7916401197404668731_n.webp",
  "/images/zaghouan pictures/453400390_863821435661424_3674692474846451253_n.webp",
  "/images/zaghouan pictures/453614509_4537749893116963_8306362954046689771_n.webp",
  "/images/zaghouan pictures/453759916_1583714922292500_1656554287888337707_n.webp",
  "/images/zaghouan pictures/453812665_809809638017504_7041292825766608438_n.webp",
  "/images/zaghouan pictures/453910680_4537749859783633_4355390446148271378_n.webp",
];

const spotIcons = [BookOpen, Coffee, Mountain, Camera, Store, Dumbbell];
const cafeColors = [
  "#F97316", "#12B8C8", "#8B5CF6", "#3B82F6", "#22C55E",
  "#F59E0B", "#EF4444", "#06B6D4", "#84CC16", "#EC4899",
  "#6366F1", "#14B8A6",
];

export default function ExplorePage() {
  return (
    <>
      <div style={{ maxWidth: "960px", margin: "0 auto", padding: "clamp(24px, 5vw, 40px) clamp(16px, 5vw, 32px)", width: "100%", boxSizing: "border-box" }}>
        <PageHeader
          icon={MapPin}
          label="اكتشاف"
          title="اكتشف زغوان"
          subtitle="بلاد مليانة بتاريخها و جبلها و انهجها المزيانة"
          category="campus"
        />

        {/* Description hero */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          style={{ marginBottom: "36px" }}
        >
          <div
            style={{
              position: "relative",
              borderRadius: "24px",
              padding: "32px",
              overflow: "hidden",
              background: "linear-gradient(135deg, #0B1F3A, #0D2B4E)",
            }}
          >
            {/* Mountain SVG decoration */}
            <svg
              viewBox="0 0 800 160"
              preserveAspectRatio="none"
              style={{ position: "absolute", bottom: 0, left: 0, right: 0, width: "100%", height: "80px", opacity: 0.15 }}
            >
              <path d="M0,160 L0,90 L80,40 L160,80 L240,25 L320,60 L400,10 L480,55 L560,35 L640,70 L720,30 L800,65 L800,160 Z" fill="white" />
            </svg>

            {/* Glowing dots */}
            {[
              { top: "20%", left: "15%", size: 3, delay: "0s" },
              { top: "40%", left: "65%", size: 2, delay: "0.5s" },
              { top: "15%", left: "80%", size: 2, delay: "0.8s" },
              { top: "60%", left: "40%", size: 1, delay: "0.3s" },
            ].map((dot, i) => (
              <div
                key={i}
                className="animate-twinkle"
                style={{
                  position: "absolute",
                  top: dot.top,
                  left: dot.left,
                  width: `${dot.size * 2}px`,
                  height: `${dot.size * 2}px`,
                  borderRadius: "50%",
                  background: "#fff",
                  animationDelay: dot.delay,
                }}
              />
            ))}

            <div style={{ position: "relative", zIndex: 1 }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
                <Mountain size={20} style={{ color: "#12B8C8" }} strokeWidth={2} />
                <span style={{ fontSize: "12px", fontWeight: 600, color: "#12B8C8", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                  جبل زغوان
                </span>
              </div>
              <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.8)", lineHeight: 1.8, maxWidth: "600px" }}>
                {exploreZaghouan.description}
              </p>
              <div style={{ marginTop: "16px", display: "flex", alignItems: "center", gap: "12px" }}>
                <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)" }}>الإحداثيات:</span>
                <code style={{ fontSize: "12px", color: "#12B8C8", background: "rgba(18,184,200,0.10)", padding: "4px 10px", borderRadius: "6px" }}>
                  36.4029° N, 10.1423° E
                </code>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Study spots */}
        <div style={{ marginBottom: "36px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
            <div style={{ width: "34px", height: "34px", borderRadius: "50%", background: "rgba(59,130,246,0.10)", color: "#3B82F6", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <BookOpen size={16} strokeWidth={2} />
            </div>
            <span style={{ fontWeight: 700, fontSize: "17px", color: "var(--color-text)" }}>بلايص القراية</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: "12px" }}>
            {exploreZaghouan.studySpots.map((spot, i) => {
              const Icon = spotIcons[i % spotIcons.length];
              return (
                <motion.div
                  key={spot}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.06 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  style={{
                    padding: "20px 16px",
                    background: "var(--color-surface)",
                    borderRadius: "16px",
                    border: "1px solid var(--color-border)",
                    boxShadow: "var(--shadow-card)",
                    textAlign: "center",
                    cursor: "default",
                  }}
                >
                  <div style={{
                    width: "40px", height: "40px", borderRadius: "50%",
                    background: "rgba(59,130,246,0.10)", color: "#3B82F6",
                    display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 10px",
                  }}>
                    <Icon size={18} strokeWidth={2} />
                  </div>
                  <span style={{ fontSize: "13px", fontWeight: 600, color: "var(--color-text)" }}>{spot}</span>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Cafés */}
        <div style={{ marginBottom: "36px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
            <div style={{ width: "34px", height: "34px", borderRadius: "50%", background: "rgba(249,115,22,0.10)", color: "#F97316", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Coffee size={16} strokeWidth={2} />
            </div>
            <span style={{ fontWeight: 700, fontSize: "17px", color: "var(--color-text)" }}>كافيهات و تفرهيد</span>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {exploreZaghouan.cafes.map((cafe, i) => {
              const color = cafeColors[i % cafeColors.length];
              return (
                <motion.span
                  key={cafe}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.04 }}
                  whileHover={{ y: -2, scale: 1.04 }}
                  style={{
                    padding: "8px 16px",
                    borderRadius: "999px",
                    fontSize: "13px",
                    fontWeight: 500,
                    background: `${color}12`,
                    color,
                    border: `1px solid ${color}30`,
                    cursor: "default",
                  }}
                >
                  ☕ {cafe}
                </motion.span>
              );
            })}
          </div>
        </div>

        {/* Nearby services */}
        <div style={{ marginBottom: "36px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
            <div style={{ width: "34px", height: "34px", borderRadius: "50%", background: "rgba(246,180,27,0.10)", color: "var(--color-accent)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Store size={16} strokeWidth={2} />
            </div>
            <span style={{ fontWeight: 700, fontSize: "17px", color: "var(--color-text)" }}>خدمات قريبة</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: "12px" }}>
            {[
              { icon: Store,    label: "كرفور اكبراس", color: "#F6B41B", bg: "rgba(246,180,27,0.10)" },
              { icon: Camera,   label: "Publinet",       color: "#3B82F6", bg: "rgba(59,130,246,0.10)" },
              { icon: BookOpen, label: "مكتبة",         color: "#12B8C8", bg: "rgba(18,184,200,0.10)" },
              { icon: Dumbbell, label: "قاعة رياضة",   color: "#22C55E", bg: "rgba(34,197,94,0.10)"  },
            ].map(({ icon: Icon, label, color, bg }) => (
              <div
                key={label}
                style={{
                  padding: "18px 14px",
                  background: "var(--color-surface)",
                  borderRadius: "16px",
                  border: "1px solid var(--color-border)",
                  boxShadow: "var(--shadow-card)",
                  textAlign: "center",
                }}
              >
                <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: bg, color, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 10px" }}>
                  <Icon size={16} strokeWidth={2} />
                </div>
                <span style={{ fontSize: "13px", fontWeight: 500, color: "var(--color-text)" }}>{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Map placeholder */}
        <Card elevation="flat" padding="0">
          <div
            style={{
              aspectRatio: "16/7",
              borderRadius: "20px",
              background: "linear-gradient(135deg, #0B1F3A 0%, #1a3a5c 100%)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <svg viewBox="0 0 800 160" preserveAspectRatio="none" style={{ position: "absolute", bottom: 0, left: 0, right: 0, width: "100%", height: "60px", opacity: 0.2 }}>
              <path d="M0,160 L0,100 L100,50 L200,80 L300,20 L400,55 L500,30 L600,65 L700,20 L800,50 L800,160 Z" fill="white" />
            </svg>
            <div className="animate-mountain" style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
              <Mountain size={40} style={{ color: "rgba(18,184,200,0.5)", margin: "0 auto 12px" }} strokeWidth={1.5} />
              <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "14px", fontWeight: 500, marginBottom: "4px" }}>
                خريطة زغوان (OpenStreetMap)
              </p>
              <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "12px" }}>36.4029° N, 10.1423° E</p>
            </div>
          </div>
        </Card>

        {/* Zaghouan Photo Gallery */}
        <div style={{ marginTop: "40px", marginBottom: "12px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
            <div style={{ width: "34px", height: "34px", borderRadius: "50%", background: "rgba(18,184,200,0.10)", color: "var(--color-secondary)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <ImageIcon size={16} strokeWidth={2} />
            </div>
            <span style={{ fontWeight: 700, fontSize: "17px", color: "var(--color-text)" }}>صور من زغوان 📸</span>
          </div>
          <PhotoGallery images={zaghouanGallery} />
        </div>
      </div>
    </>
  );
}
