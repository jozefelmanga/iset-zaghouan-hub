import Link from "next/link";
import { GraduationCap } from "@/lib/icons";
import { Container } from "@/components/ui/layout";
import { footerLinks } from "@/constants/navigation";

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

export function Footer() {
  return (
    <footer
      className="pb-24 md:pb-0 relative overflow-hidden"
      style={{
        background: "var(--color-primary)",
      }}
    >
      {/* Dynamic Stars Background */}
      <div className="absolute inset-0 pointer-events-none opacity-50">
        {stars.map((star, i) => (
          <div
            key={i}
            className="animate-twinkle absolute rounded-full bg-white"
            style={{
              top: star.top,
              left: star.left,
              width: `${star.size * 2}px`,
              height: `${star.size * 2}px`,
              animationDelay: star.delay,
              animationDuration: `${2 + i * 0.3}s`,
            }}
          />
        ))}
      </div>

      {/* Top SVG Decorative Border */}
      <div className="relative h-[40px] md:h-[80px] w-full">
        <svg viewBox="0 0 1200 80" preserveAspectRatio="none" className="w-full h-full opacity-10">
          <path d="M0,80 L0,50 L100,20 L200,45 L300,10 L400,35 L500,5 L600,28 L700,15 L800,38 L900,8 L1000,32 L1100,18 L1200,40 L1200,80 Z" fill="white" />
        </svg>
      </div>

      <Container size="content" className="relative z-10 pb-10 pt-4 md:pt-8">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 mb-12">
          
          {/* Brand Section */}
          <div className="flex-none w-full lg:w-auto lg:max-w-[300px] flex flex-col items-center lg:items-start text-center lg:text-start">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 lg:w-10 lg:h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#12B8C8] backdrop-blur-sm shadow-inner shadow-white/5">
                <GraduationCap size={24} strokeWidth={2} />
              </div>
              <span className="font-bold text-xl lg:text-lg text-white tracking-wide">ISET Zaghouan</span>
            </div>
            <p className="text-[14px] lg:text-[13px] text-white/60 leading-relaxed max-w-[280px]">
              دليلك الشامل للحياة الجامعية — من الترسيم للستاج. مبادرة مستقلة لدعم الطلبة.
            </p>
          </div>

          {/* Links Section */}
          <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-2 px-4 lg:px-0">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/60 hover:text-[#12B8C8] transition-colors duration-200 no-underline text-[14px] py-2 flex items-center justify-center sm:justify-start lg:justify-start"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col-reverse md:flex-row justify-between items-center gap-8 md:gap-4">
          <div className="text-center md:text-start flex flex-col gap-2 md:gap-1">
            <p className="text-[13px] text-white/50 m-0">
              © {new Date().getFullYear()} Guide ISET Zaghouan — Plateforme indépendante.
            </p>
            <p className="text-[13px] text-white/40 m-0">
              Développé avec ❤️ par <a href="https://linktr.ee/Youssef_Ben_Salem" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors underline decoration-white/20 underline-offset-4">Youssef Ben Salem</a>.
            </p>
          </div>
          <div className="flex items-center gap-3 bg-white/5 px-4 py-2.5 rounded-full border border-white/10 shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#12B8C8] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#12B8C8]"></span>
            </span>
            <p className="text-[13px] font-medium text-white/80 m-0">
              زغوان — تونس
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
