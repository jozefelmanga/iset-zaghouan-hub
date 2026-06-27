"use client";

import { GraduationCap } from "@/lib/icons";
import { Container } from "@/components/ui/layout";

export function Footer() {
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
      <Container size="content" className="pb-10 pt-4">
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
      </Container>
    </footer>
  );
}
