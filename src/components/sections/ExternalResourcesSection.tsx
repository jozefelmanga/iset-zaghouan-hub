"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { BookOpen, Briefcase, ArrowLeft } from "@/lib/icons";
import { sectionReveal } from "@/lib/motion";

export function ExternalResourcesSection() {
  return (
    <motion.section {...sectionReveal} className="mb-20">
      <SectionHeader
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
    </motion.section>
  );
}
