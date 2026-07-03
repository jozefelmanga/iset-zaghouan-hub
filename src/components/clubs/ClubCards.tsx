"use client";

import { m as motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "@/lib/icons";
import { Card } from "@/components/ui/Card";
import { ZoomableImage } from "@/components/ui/Lightbox";
import { clubBenefitIcons } from "@/lib/iconMaps";
import { enterAnimation } from "@/lib/motion";

type BenefitCard = (typeof import("@/data/clubs").clubBenefitCards)[number];
type ClubEntry = (typeof import("@/data/clubs").clubDirectory)[number];

export function ClubBenefitCard({ item, index }: { item: BenefitCard; index: number }) {
  const Icon = clubBenefitIcons[item.id];

  return (
    <motion.div {...enterAnimation(index * 0.1)} whileHover={{ y: -4 }}>
      <Card elevation="raised" padding="22px">
        <div style={{ width: "44px", height: "44px", borderRadius: "50%", background: item.bg, color: item.color, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "14px" }}>
          <Icon size={20} strokeWidth={2} />
        </div>
        <h4 style={{ fontWeight: 600, fontSize: "14px", color: "var(--color-text)", marginBottom: "6px" }}>{item.title}</h4>
        <p style={{ fontSize: "12px", color: "var(--color-text-muted)", lineHeight: 1.6 }}>{item.desc}</p>
      </Card>
    </motion.div>
  );
}

export function ClubDirectoryCard({ club, index }: { club: ClubEntry; index: number }) {
  return (
    <motion.div {...enterAnimation(index * 0.06)} className="md:h-full">
      <Card elevation="raised" padding="16px" className="h-full md:p-[22px]!">
        <div className="flex flex-col gap-4 md:h-full">
          <div className="flex min-w-0 items-start gap-3">
            <ZoomableImage
              src={club.logo}
              alt={club.name}
              hideHint
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "12px",
                border: "1px solid var(--color-border)",
                flexShrink: 0,
              }}
            />
            <div className="flex min-w-0 flex-1 flex-col gap-2">
              <h4 className="text-[14px] font-bold leading-snug text-text md:text-[15px]">
                {club.name}
              </h4>
              <p className="text-[11px] font-semibold leading-snug md:text-[12px]" style={{ color: club.color }}>
                {club.slogan}
              </p>
              <p className="text-[12.5px] leading-relaxed text-text-secondary md:text-[13px]">
                {club.description}
              </p>
            </div>
          </div>
          <Link href={club.href} className="shrink-0 md:mt-auto" style={{ textDecoration: "none" }}>
            <motion.div
              whileHover={{ x: -4 }}
              className="inline-flex w-full items-center justify-center gap-1.5 rounded-lg bg-[rgba(18,184,200,0.08)] px-3 py-2.5 text-[12.5px] font-semibold text-(--color-secondary) md:w-auto md:justify-start md:bg-transparent md:px-0 md:py-0 md:text-[13px]"
            >
              <span>التفاصيل والصور</span>
              <ArrowLeft size={14} />
            </motion.div>
          </Link>
        </div>
      </Card>
    </motion.div>
  );
}
