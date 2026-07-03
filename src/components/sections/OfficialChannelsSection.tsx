"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { instituteOfficial } from "@/data/official";
import { CheckCircle2, Facebook, Globe, Lightbulb, Mail, MapPin, Phone } from "@/lib/icons";
import { sectionReveal } from "@/lib/motion";

export function OfficialChannelsSection() {
  const { meta, profile, links, tip } = instituteOfficial;

  const contactRows = [
    {
      icon: MapPin,
      label: profile.location,
      sublabel: profile.address,
      href: undefined,
      ltr: false,
    },
    {
      icon: Phone,
      label: profile.phone,
      sublabel: profile.phones.length > 1 ? profile.phones[1] : undefined,
      href: `tel:${profile.phone.replace(/\s/g, "")}`,
      ltr: true,
    },
    {
      icon: Mail,
      label: profile.email,
      href: `mailto:${profile.email}`,
      ltr: true,
    },
    {
      icon: Globe,
      label: profile.websiteDisplay,
      href: links.website.href,
      external: true,
      ltr: true,
    },
  ] as const;

  return (
    <motion.section {...sectionReveal} className="mb-16">
      <span className="section-label">{meta.label}</span>

      <Card
        elevation="raised"
        padding="0"
        className="mt-3 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, rgba(18,184,200,0.08) 0%, var(--color-surface) 45%, var(--color-surface) 100%)",
        }}
      >
        <div className="px-5 pt-6 pb-5 sm:px-7 sm:pt-7 sm:pb-6">
          <div className="lg:grid lg:grid-cols-2 lg:gap-x-10 lg:gap-y-6 lg:items-center mb-6">
            {/* Identity */}
            <div className="flex flex-col items-center text-center lg:items-end lg:text-right gap-4 mb-6 lg:mb-0">
              <div className="w-[80px] h-[80px] lg:w-[88px] lg:h-[88px] rounded-2xl bg-white border border-[var(--color-border)] shadow-[var(--shadow-card)] flex items-center justify-center p-2.5 shrink-0">
                  <img
                    src={profile.logo}
                    alt={profile.name}
                    width={88}
                    height={88}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
              </div>

              <div className="min-w-0">
                <div className="flex items-center justify-center lg:justify-end gap-2 flex-wrap">
                  <h2 className="text-xl sm:text-2xl font-extrabold text-[var(--color-text)] tracking-tight">
                    {profile.name}
                  </h2>
                  <CheckCircle2
                    size={22}
                    strokeWidth={2.5}
                    className="text-[#3B82F6] shrink-0"
                    aria-label="حساب رسمي"
                  />
                </div>
                <p className="mt-1.5 text-[12px] sm:text-[13px] leading-relaxed text-[var(--color-text-secondary)] max-w-sm mx-auto lg:mx-0 lg:ms-auto">
                  {profile.fullName}
                </p>
              </div>
            </div>

            {/* Contact details — 2×2 on tablet+, fills desktop width */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 lg:border-s lg:border-[var(--color-border)] lg:ps-10">
              {contactRows.map((row) => {
                const Icon = row.icon;
                const inner = (
                  <>
                    <div className="w-9 h-9 rounded-xl bg-[rgba(11,31,58,0.06)] text-[var(--color-primary)] flex items-center justify-center shrink-0">
                      <Icon size={16} strokeWidth={2} />
                    </div>
                    <div className="flex-1 min-w-0 text-right">
                      <p
                        dir={row.ltr ? "ltr" : undefined}
                        className="text-[13px] sm:text-sm font-semibold text-[var(--color-text)] leading-snug break-all sm:break-normal"
                      >
                        {row.label}
                      </p>
                      {"sublabel" in row && row.sublabel && (
                        <p
                          dir={"ltr" in row && row.ltr ? "ltr" : undefined}
                          className="text-[12px] text-[var(--color-text-muted)] mt-0.5 leading-relaxed"
                        >
                          {row.sublabel}
                        </p>
                      )}
                    </div>
                  </>
                );

                const rowClass =
                  "flex items-center gap-3 px-3.5 py-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-background)] min-h-[72px] h-full";

                if (row.href) {
                  return (
                    <a
                      key={row.label}
                      href={row.href}
                      target={"external" in row && row.external ? "_blank" : undefined}
                      rel={"external" in row && row.external ? "noopener noreferrer" : undefined}
                      className={`${rowClass} no-underline transition-all hover:border-[var(--color-secondary)] hover:shadow-[var(--shadow-card)] active:scale-[0.99]`}
                    >
                      {inner}
                    </a>
                  );
                }

                return (
                  <div key={row.label} className={rowClass}>
                    {inner}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Primary actions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:max-w-xl lg:me-auto">
            <a
              href={links.website.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 min-h-[48px] px-4 py-3 rounded-xl text-sm font-bold no-underline transition-all hover:-translate-y-0.5 active:scale-[0.98]"
              style={{
                background: "var(--color-primary)",
                color: "#fff",
                boxShadow: "0 8px 24px rgba(11,31,58,0.18)",
              }}
            >
              <Globe size={16} strokeWidth={2.5} />
              {links.website.label}
            </a>
            <a
              href={links.facebook.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 min-h-[48px] px-4 py-3 rounded-xl text-sm font-bold no-underline border border-[rgba(24,119,242,0.28)] bg-[rgba(24,119,242,0.08)] text-[#1877F2] transition-all hover:-translate-y-0.5 hover:bg-[rgba(24,119,242,0.12)] active:scale-[0.98]"
            >
              <Facebook size={16} strokeWidth={2.5} />
              {links.facebook.label}
            </a>
          </div>
        </div>
      </Card>

      <p className="mt-4 flex items-start gap-2.5 text-[13px] sm:text-sm leading-relaxed text-[var(--color-text-secondary)] px-1">
        <Lightbulb size={16} strokeWidth={2} className="text-[var(--color-accent)] shrink-0 mt-0.5" />
        <span>{tip}</span>
      </p>
    </motion.section>
  );
}
