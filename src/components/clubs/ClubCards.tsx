"use client";

import { motion } from "framer-motion";
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
    <motion.div {...enterAnimation(index * 0.1)}>
      <Card elevation="raised" padding="22px">
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", alignItems: "center" }}>
          <ZoomableImage
            src={club.logo}
            alt={club.name}
            hideHint
            style={{ width: "52px", height: "52px", borderRadius: "12px", border: "1px solid var(--color-border)", flexShrink: 0 }}
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
  );
}
