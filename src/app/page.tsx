"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  FileText,
  Building2,
  Banknote,
  Bus,
  Briefcase,
  BookOpen,
  Users,
  Award,
  MapPin,
  HelpCircle,
  UtensilsCrossed,
  CheckCircle2,
  Sparkles,
  ArrowLeft,
  Star,
  Bell,
  Calendar,
  ChevronLeft,
} from "lucide-react";
import {
  ActionCard,
  Badge,
  Button,
  Card,
} from "@/components/ui/shared";

/* ======================================================
   DATA
   ====================================================== */
const quickActions = [
  { icon: FileText,  title: "الترسيم الجامعي",  description: "خطوات التسجيل و الأوراق المطلوبة", href: "/inscription", category: "academic" as const, featured: true  },
  { icon: Building2, title: "المبيت الجامعي",    description: "فواي البنات و الأولاد",             href: "/housing",    category: "life"     as const },
  { icon: Banknote,  title: "البورص",             description: "منحة الإدماج و البورص الكاملة",   href: "/bourse",     category: "life"     as const },
  { icon: Bus,       title: "النقل",              description: "لواجات، كيران، و المواصلات",       href: "/transport",  category: "life"     as const },
  { icon: Briefcase, title: "الستاجات",           description: "دليل الستاجات و Didosoft",         href: "/stages",     category: "career"   as const },
  { icon: BookOpen,  title: "المكتبة",            description: "مراجع و اكزامانات",                href: "/library",    category: "academic" as const },
];

const campusServices = [
  { icon: UtensilsCrossed, label: "الريستو",   href: "/resto",    color: "#F97316", bg: "rgba(249,115,22,0.10)"  },
  { icon: BookOpen,        label: "المكتبة",   href: "/library",  color: "#3B82F6", bg: "rgba(59,130,246,0.10)"  },
  { icon: Users,           label: "النوادي",   href: "/clubs",    color: "#12B8C8", bg: "rgba(18,184,200,0.10)"  },
  { icon: Award,           label: "الماستر",   href: "/masters",  color: "#8B5CF6", bg: "rgba(139,92,246,0.10)"  },
];



const studentJourney = [
  { title: "التسجيل المبدئي",  description: "ادفع واجب التسجيل وجهز الوثائق",        active: true  },
  { title: "الترسيم الرسمي",   description: "تخلص الترسيم أونلاين و حضرلو يومو",     active: false },
  { title: "المبيت والخدمات",  description: "سجل في المبيت والريستو والنقل",          active: false },
  { title: "بداية الدراسة",   description: "اكتشف المكتبة والنوادي والأنشطة",         active: false },
];

const faqPreview = [
  "كيفاش نعمل الترسيم الجامعي؟",
  "كيفاش نترسيم في المبيت؟",
  "شنية أوراق البورص؟",
  "كيفاش نروح لتونس من زغوان؟",
];

const categoryColors: Record<string, { text: string; bg: string }> = {
  academic: { text: "#3B82F6", bg: "rgba(59,130,246,0.08)"  },
  career:   { text: "#8B5CF6", bg: "rgba(139,92,246,0.08)"  },
  life:     { text: "#12B8C8", bg: "rgba(18,184,200,0.08)"  },
  campus:   { text: "#F97316", bg: "rgba(249,115,22,0.08)"  },
};

/* ======================================================
   ANIMATED SECTION WRAPPER
   ====================================================== */
function Section({ children, className = "", style }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className={className}
      style={style}
    >
      {children}
    </motion.section>
  );
}

/* ======================================================
   SECTION LABEL + TITLE
   ====================================================== */
function SectionTitle({ label, title, subtitle, action }: { label?: string; title: string; subtitle?: string; action?: React.ReactNode }) {
  return (
    <div style={{ marginBottom: "32px", display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "12px" }}>
      <div>
        {label && <span className="section-label">{label}</span>}
        <h2 style={{ fontSize: "clamp(20px,3vw,26px)", fontWeight: 700, color: "var(--color-text)", marginTop: "4px", lineHeight: 1.2 }}>
          {title}
        </h2>
        {subtitle && (
          <p style={{ color: "var(--color-text-secondary)", fontSize: "14px", marginTop: "6px", lineHeight: 1.6 }}>
            {subtitle}
          </p>
        )}
      </div>
      {action}
    </div>
  );
}

/* ======================================================
   MOUNTAIN SVG DECORATION
   ====================================================== */
function MountainDecoration() {
  return (
    <svg
      viewBox="0 0 800 200"
      preserveAspectRatio="none"
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        width: "100%",
        height: "120px",
        opacity: 0.18,
        pointerEvents: "none",
      }}
    >
      <path d="M0,200 L0,120 L80,60 L160,100 L240,40 L320,80 L400,20 L480,70 L560,50 L640,90 L720,45 L800,80 L800,200 Z" fill="white" />
    </svg>
  );
}

/* ======================================================
   FOOTER
   ====================================================== */
function Footer() {
  const links = [
    { label: "الترسيم",  href: "/inscription" },
    { label: "المبيت",   href: "/housing"     },
    { label: "البورص",   href: "/bourse"      },
    { label: "النقل",    href: "/transport"   },
    { label: "الستاجات", href: "/stages"      },
    { label: "المكتبة",  href: "/library"     },
    { label: "النوادي",  href: "/clubs"       },
    { label: "الأسئلة",  href: "/faq"         },
  ];

  // Stars positions
  const stars = [
    { top: "15%", left: "10%", delay: "0s",    size: 2 },
    { top: "25%", left: "25%", delay: "0.4s",  size: 1 },
    { top: "10%", left: "50%", delay: "0.8s",  size: 3 },
    { top: "20%", left: "70%", delay: "0.2s",  size: 2 },
    { top: "35%", left: "85%", delay: "1s",    size: 1 },
    { top: "8%",  left: "38%", delay: "0.6s",  size: 2 },
    { top: "30%", left: "55%", delay: "1.2s",  size: 1 },
    { top: "18%", left: "92%", delay: "0.3s",  size: 2 },
  ];

  return (
    <footer
      className="pb-20 md:pb-0"
      style={{
        position: "relative",
        background: "var(--color-primary)",
        overflow: "hidden",
      }}
    >
      {/* Animated stars */}
      {stars.map((star, i) => (
        <div
          key={i}
          className="animate-twinkle"
          style={{
            position: "absolute",
            top: star.top,
            left: star.left,
            width: `${star.size * 2}px`,
            height: `${star.size * 2}px`,
            borderRadius: "50%",
            background: "#fff",
            animationDelay: star.delay,
            animationDuration: `${2 + i * 0.3}s`,
          }}
        />
      ))}

      {/* Mountain silhouette */}
      <div style={{ position: "relative", height: "80px" }}>
        <svg viewBox="0 0 1200 80" preserveAspectRatio="none" style={{ width: "100%", height: "100%", opacity: 0.12 }}>
          <path d="M0,80 L0,50 L100,20 L200,45 L300,10 L400,35 L500,5 L600,28 L700,15 L800,38 L900,8 L1000,32 L1100,18 L1200,40 L1200,80 Z" fill="white" />
        </svg>
      </div>

      {/* Content */}
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "48px 32px 40px" }}>
        {/* Top: logo + links */}
        <div style={{ display: "flex", gap: "48px", flexWrap: "wrap", marginBottom: "40px" }}>
          <div style={{ flex: "0 0 auto", maxWidth: "240px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "10px",
                  background: "rgba(18,184,200,0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#12B8C8",
                }}
              >
                <GraduationCap size={18} strokeWidth={2} />
              </div>
              <span style={{ fontWeight: 700, fontSize: "14px", color: "#fff" }}>ISET Zaghouan</span>
            </div>
            <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)", lineHeight: 1.7 }}>
              دليلك الشامل للحياة الجامعية — من الترسيم للستاج.
            </p>
          </div>

          <div style={{ flex: 1, display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))", gap: "8px" }}>
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={{
                  color: "rgba(255,255,255,0.5)",
                  textDecoration: "none",
                  fontSize: "13px",
                  padding: "4px 0",
                  transition: "color var(--transition-fast)",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#12B8C8"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.5)"; }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom divider */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "24px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
          <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.3)" }}>
            © 2024 ISET Zaghouan Hub. Made with ❤️ for students.
          </p>
          <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.3)" }}>
            زغوان — تونس
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ======================================================
   HOME PAGE
   ====================================================== */
export default function HomePage() {
  return (
    <>
      {/* ================================================
          HERO SECTION
          ================================================ */}
      <section
        style={{
          position: "relative",
          minHeight: "65vh",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        {/* Real banner photo */}
        <img
          src="/images/banner.webp"
          alt="ISET Zaghouan Campus"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center 60%",
          }}
        />

        {/* Dark overlay — deep navy gradient over the photo */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(135deg, rgba(11,31,58,0.92) 0%, rgba(13,43,78,0.88) 50%, rgba(15,52,96,0.82) 100%)",
          }}
        />

        {/* Cyan accent blob */}
        <div className="blob" style={{ width: "500px", height: "500px", background: "rgba(18,184,200,0.07)", top: "-100px", right: "-100px" }} />
        {/* Gold accent blob */}
        <div className="blob" style={{ width: "400px", height: "400px", background: "rgba(246,180,27,0.04)", bottom: "-80px", left: "-80px" }} />

        {/* Grid pattern */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)
            `,
            backgroundSize: "48px 48px",
            pointerEvents: "none",
          }}
        />

        {/* Mountain decoration */}
        <MountainDecoration />

        {/* Content */}
        <div
          style={{
            position: "relative",
            zIndex: 10,
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "80px 32px",
            width: "100%",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Label badge */}
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(18,184,200,0.12)", border: "1px solid rgba(18,184,200,0.25)", borderRadius: "999px", padding: "6px 16px", marginBottom: "24px" }}>
              <Sparkles size={14} strokeWidth={2} style={{ color: "#12B8C8" }} />
              <span style={{ fontSize: "12px", fontWeight: 600, color: "#12B8C8" }}>🎓 دليل الطالب — ISET Zaghouan</span>
            </div>

            {/* Headline */}
            <h1 style={{ fontSize: "clamp(32px, 5vw, 58px)", fontWeight: 800, color: "#fff", lineHeight: 1.15, letterSpacing: "-0.02em", marginBottom: "20px", maxWidth: "640px" }}>
              ISET ZAGHOUAN
              <br />
              <span style={{ background: "linear-gradient(135deg, #12B8C8, #F6B41B)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Student hub
              </span>
            </h1>

            <p style={{ fontSize: "clamp(14px,2vw,17px)", color: "rgba(255,255,255,0.65)", lineHeight: 1.7, marginBottom: "36px", maxWidth: "480px" }}>
              الترسيم، المبيت، النقل، البورص، الستاجات، وأكثر. دليل شامل مصنوع بطريقة تخلي حياتك الجامعية أسهل.
            </p>

            {/* CTAs */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginBottom: "48px" }}>
              <motion.a
                href="/inscription"
                whileHover={{ y: -2, boxShadow: "0 12px 32px rgba(246,180,27,0.35)" }}
                whileTap={{ scale: 0.97 }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "14px 28px",
                  borderRadius: "14px",
                  background: "var(--color-accent)",
                  color: "var(--color-primary)",
                  fontWeight: 700,
                  fontSize: "15px",
                  textDecoration: "none",
                  transition: "all var(--transition-base)",
                }}
              >
                <CheckCircle2 size={18} strokeWidth={2.5} />
                ابدأ الترسيم
              </motion.a>
              <motion.a
                href="/explore"
                whileHover={{ y: -2, boxShadow: "0 12px 32px rgba(255,255,255,0.1)" }}
                whileTap={{ scale: 0.97 }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "14px 28px",
                  borderRadius: "14px",
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  color: "#fff",
                  fontWeight: 600,
                  fontSize: "15px",
                  textDecoration: "none",
                  transition: "all var(--transition-base)",
                  backdropFilter: "blur(8px)",
                }}
              >
                <MapPin size={18} strokeWidth={2} />
                اكتشف زغوان
              </motion.a>
            </div>

            {/* Floating chips */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {["الترسيم", "المبيت", "البورص", "النقل", "الستاجات"].map((chip, i) => (
                <motion.a
                  key={chip}
                  href={`/${["inscription","housing","bourse","transport","stages"][i]}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.07 }}
                  whileHover={{ y: -2 }}
                  style={{
                    padding: "7px 16px",
                    borderRadius: "999px",
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    color: "rgba(255,255,255,0.7)",
                    fontSize: "12px",
                    fontWeight: 500,
                    textDecoration: "none",
                    transition: "all var(--transition-fast)",
                    backdropFilter: "blur(8px)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = "#12B8C8";
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(18,184,200,0.4)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.7)";
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.12)";
                  }}
                >
                  {chip}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================================================
          PAGE BODY
          ================================================ */}
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px", flex: 1, width: "100%" }}>



        {/* ============================================
            QUICK ACCESS
            ============================================ */}
        <Section style={{ marginBottom: "80px", marginTop: "80px" }}>
          <SectionTitle
            label="الوصول السريع"
            title="كل ما تحتاجه في مكان واحد"
            subtitle="الخدمات الأساسية للحياة الجامعية"
          />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "20px",
            }}
          >
            {quickActions.map((action, i) => (
              <motion.div
                key={action.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
              >
                <ActionCard {...action} />
              </motion.div>
            ))}
          </div>
        </Section>


        {/* ============================================
            STUDENT JOURNEY
            ============================================ */}
        <Section style={{ marginBottom: "80px" }}>
          <Card elevation="feature" padding="40px">
            <SectionTitle
              label="رحلتك الجامعية"
              title="خطوة بخطوة"
              subtitle="دليل مبسط للطالب الجديد"
            />
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "0",
                position: "relative",
              }}
            >
              {/* Connecting line */}
              <div
                style={{
                  position: "absolute",
                  top: "24px",
                  left: "10%",
                  right: "10%",
                  height: "2px",
                  background: "linear-gradient(90deg, var(--color-secondary), var(--color-border))",
                  zIndex: 0,
                }}
              />
              {studentJourney.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  style={{ textAlign: "center", padding: "0 16px", position: "relative", zIndex: 1 }}
                >
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "50%",
                      background: step.active ? "var(--color-secondary)" : "var(--color-surface)",
                      border: step.active ? "none" : "2px solid var(--color-border)",
                      color: step.active ? "#fff" : "var(--color-text-muted)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 16px",
                      fontWeight: 700,
                      fontSize: "15px",
                      boxShadow: step.active ? "0 0 0 6px rgba(18,184,200,0.15)" : "none",
                      transition: "all var(--transition-base)",
                    }}
                  >
                    {step.active ? <Star size={20} strokeWidth={2} /> : i + 1}
                  </div>
                  <p style={{ fontWeight: 600, fontSize: "14px", color: step.active ? "var(--color-secondary)" : "var(--color-text)", marginBottom: "6px" }}>
                    {step.title}
                  </p>
                  <p style={{ fontSize: "12px", color: "var(--color-text-muted)", lineHeight: 1.6 }}>
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </Card>
        </Section>

        {/* ============================================
            CAMPUS SERVICES
            ============================================ */}
        <Section style={{ marginBottom: "80px" }}>
          <SectionTitle
            label="خدمات الحرم"
            title="خدمات الحرم الجامعي"
            subtitle="كل ما تحتاجه داخل ISET Zaghouan"
          />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
              gap: "16px",
            }}
          >
            {campusServices.map((item) => {
              const Icon = item.icon;
              return (
                <motion.a
                  key={item.href}
                  href={item.href}
                  whileHover={{ y: -4, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "12px",
                    padding: "28px 20px",
                    background: "var(--color-surface)",
                    borderRadius: "20px",
                    border: "1px solid var(--color-border)",
                    boxShadow: "var(--shadow-card)",
                    textDecoration: "none",
                    transition: "all var(--transition-base)",
                  }}
                  onMouseEnter={(e) => {
                    const a = e.currentTarget as HTMLAnchorElement;
                    a.style.borderColor = `${item.color}40`;
                    a.style.boxShadow = `0 12px 32px ${item.color}15`;
                  }}
                  onMouseLeave={(e) => {
                    const a = e.currentTarget as HTMLAnchorElement;
                    a.style.borderColor = "var(--color-border)";
                    a.style.boxShadow = "var(--shadow-card)";
                  }}
                >
                  <div
                    style={{
                      width: "56px",
                      height: "56px",
                      borderRadius: "50%",
                      background: item.bg,
                      color: item.color,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Icon size={24} strokeWidth={2} />
                  </div>
                  <span style={{ fontSize: "14px", fontWeight: 600, color: "var(--color-text)" }}>
                    {item.label}
                  </span>
                </motion.a>
              );
            })}
          </div>
        </Section>

        {/* ============================================
            EXTERNAL RESOURCES
            ============================================ */}
        <Section style={{ marginBottom: "80px" }}>
          <SectionTitle
            label="مصادر مفيدة"
            title="روابط تهمك كطالب"
            subtitle="منصات وفيديوهات تعاونك في مسيرتك الجامعية وبعد التخرج"
          />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
            {/* YouTube Video Preview - Oussama Ghizaoui */}
            <Card elevation="raised" padding="0" style={{ overflow: "hidden", display: "flex", flexDirection: "column" }}>
              <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
                <iframe 
                  src="https://www.youtube.com/embed/WKIVD4q5kws" 
                  title="نظرة عامة عن ISET Zaghouan" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                  style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                />
              </div>
              <div style={{ padding: "20px" }}>
                <h3 style={{ fontSize: "16px", fontWeight: 700, marginBottom: "8px", color: "var(--color-text)", lineHeight: 1.4 }}>
                  اكتشف ISET Zaghouan
                </h3>
                <p style={{ fontSize: "13px", color: "var(--color-text-secondary)", lineHeight: 1.6 }}>
                  فيديو مهم للتعرف على أجواء المعهد وكل ما تحتاج معرفته. 
                  <span style={{ display: "block", marginTop: "4px", fontSize: "11px", color: "var(--color-text-muted)" }}>
                    إعداد الطالب: أسامة الغيزاوي
                  </span>
                </p>
              </div>
            </Card>

            {/* YouTube Video Preview - Experience */}
            <Card elevation="raised" padding="0" style={{ overflow: "hidden", display: "flex", flexDirection: "column" }}>
              <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
                <iframe 
                  src="https://www.youtube.com/embed/hs-jfqcg6Bw" 
                  title="تجربة طلبة ISET Zaghouan" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                  style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                />
              </div>
              <div style={{ padding: "20px" }}>
                <h3 style={{ fontSize: "16px", fontWeight: 700, marginBottom: "8px", color: "var(--color-text)", lineHeight: 1.4 }}>
                  تجربة طلبة ISET Zaghouan
                </h3>
                <p style={{ fontSize: "13px", color: "var(--color-text-secondary)", lineHeight: 1.6 }}>
                  نصائح مهمة للناجحين الجدد في البكالوريا وتجربة طلبة إيسات زغوان في المعهد.
                </p>
              </div>
            </Card>

            {/* AceIT Platform */}
            <Card elevation="raised" padding="24px" style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "rgba(59,130,246,0.1)", color: "#3B82F6", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <BookOpen size={24} strokeWidth={2} />
                </div>
                <div>
                  <h3 style={{ fontSize: "16px", fontWeight: 700, color: "var(--color-text)" }}>AceIT Platform</h3>
                  <span style={{ fontSize: "12px", color: "var(--color-text-muted)" }}>Student Resources</span>
                </div>
              </div>
              <p style={{ fontSize: "13px", color: "var(--color-text-secondary)", lineHeight: 1.6, flex: 1, marginBottom: "20px" }}>
                منصة شاملة توفر مصادر دراسية وملخصات لطلاب الإجازة لتسهيل مسيرتهم الأكاديمية.
              </p>
              <a 
                href="https://aceittn.vercel.app" 
                target="_blank" 
                rel="noreferrer"
                style={{ 
                  display: "inline-flex", 
                  alignItems: "center", 
                  justifyContent: "center",
                  gap: "8px", 
                  padding: "10px 16px", 
                  background: "var(--color-background)", 
                  border: "1px solid var(--color-border)",
                  borderRadius: "8px", 
                  color: "var(--color-text)", 
                  fontSize: "13px", 
                  fontWeight: 600, 
                  textDecoration: "none",
                  transition: "all var(--transition-fast)"
                }}
              >
                زور المنصة <ArrowLeft size={14} />
              </a>
            </Card>

            {/* After Graduation Guide */}
            <Card elevation="raised" padding="24px" style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "rgba(139,92,246,0.1)", color: "#8B5CF6", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Briefcase size={24} strokeWidth={2} />
                </div>
                <div>
                  <h3 style={{ fontSize: "16px", fontWeight: 700, color: "var(--color-text)" }}>After Graduation Guide</h3>
                  <span style={{ fontSize: "12px", color: "var(--color-text-muted)" }}>Career & Masters</span>
                </div>
              </div>
              <p style={{ fontSize: "13px", color: "var(--color-text-secondary)", lineHeight: 1.6, flex: 1, marginBottom: "20px" }}>
                دليل متكامل يوجهك بعد التخرج نحو الحياة المهنية، الستاجات، أو إكمال دراستك في الماستر.
              </p>
              <a 
                href="https://after-graduation.vercel.app/" 
                target="_blank" 
                rel="noreferrer"
                style={{ 
                  display: "inline-flex", 
                  alignItems: "center", 
                  justifyContent: "center",
                  gap: "8px", 
                  padding: "10px 16px", 
                  background: "var(--color-background)", 
                  border: "1px solid var(--color-border)",
                  borderRadius: "8px", 
                  color: "var(--color-text)", 
                  fontSize: "13px", 
                  fontWeight: 600, 
                  textDecoration: "none",
                  transition: "all var(--transition-fast)"
                }}
              >
                تصفح الدليل <ArrowLeft size={14} />
              </a>
            </Card>

          </div>
        </Section>

        {/* ============================================
            EXPLORE + FAQ
            ============================================ */}
        <Section style={{ marginBottom: "80px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>

            {/* Explore Zaghouan */}
            <Card elevation="raised" padding="28px">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px" }}>
                <div>
                  <span className="section-label">اكتشاف</span>
                  <h3 style={{ fontWeight: 700, fontSize: "18px", color: "var(--color-text)", marginTop: "4px" }}>
                    اكتشف زغوان
                  </h3>
                </div>
                <a
                  href="/explore"
                  style={{ display: "flex", alignItems: "center", gap: "4px", color: "var(--color-secondary)", fontSize: "13px", fontWeight: 600, textDecoration: "none" }}
                >
                  الكل <ArrowLeft size={14} />
                </a>
              </div>
              <p style={{ color: "var(--color-text-secondary)", fontSize: "13px", lineHeight: 1.7, marginBottom: "16px" }}>
                بلاد مليانة بتاريخها و جبلها. أحسن البلايص باش تقرا و تفرهد.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {["Fabrica", "Café Rahba", "La Vallée", "The Rock", "Paradise"].map((spot) => (
                  <span
                    key={spot}
                    style={{
                      padding: "5px 12px",
                      borderRadius: "999px",
                      fontSize: "12px",
                      fontWeight: 500,
                      background: "var(--color-background)",
                      border: "1px solid var(--color-border)",
                      color: "var(--color-text-secondary)",
                    }}
                  >
                    {spot}
                  </span>
                ))}
              </div>
            </Card>

            {/* FAQ */}
            <Card elevation="raised" padding="28px">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px" }}>
                <div>
                  <span className="section-label">مساعدة</span>
                  <h3 style={{ fontWeight: 700, fontSize: "18px", color: "var(--color-text)", marginTop: "4px" }}>
                    الأسئلة الشائعة
                  </h3>
                </div>
                <a
                  href="/faq"
                  style={{ display: "flex", alignItems: "center", gap: "4px", color: "var(--color-secondary)", fontSize: "13px", fontWeight: 600, textDecoration: "none" }}
                >
                  الكل <ArrowLeft size={14} />
                </a>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {faqPreview.map((q) => (
                  <a
                    key={q}
                    href="/faq"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "11px 14px",
                      borderRadius: "12px",
                      background: "var(--color-background)",
                      textDecoration: "none",
                      color: "var(--color-text)",
                      fontSize: "13px",
                      fontWeight: 500,
                      transition: "all var(--transition-fast)",
                    }}
                    onMouseEnter={(e) => {
                      const a = e.currentTarget as HTMLAnchorElement;
                      a.style.background = "rgba(18,184,200,0.06)";
                      a.style.color = "var(--color-secondary)";
                    }}
                    onMouseLeave={(e) => {
                      const a = e.currentTarget as HTMLAnchorElement;
                      a.style.background = "var(--color-background)";
                      a.style.color = "var(--color-text)";
                    }}
                  >
                    <span>{q}</span>
                    <ChevronLeft size={14} style={{ color: "var(--color-text-muted)", flexShrink: 0 }} />
                  </a>
                ))}
              </div>
            </Card>
          </div>
        </Section>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}
