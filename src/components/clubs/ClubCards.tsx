import Link from "next/link";
import { ArrowLeft } from "@/lib/icons";
import { Card } from "@/components/ui/Card";
import { ZoomableImage } from "@/components/ui/Lightbox";
import { clubBenefitIcons } from "@/lib/iconMaps";

import { textTint } from "@/lib/utils";
type BenefitCard = (typeof import("@/data/clubs").clubBenefitCards)[number];
type ClubEntry = (typeof import("@/data/clubs").clubDirectory)[number];

export function ClubBenefitCard({ item, index }: { item: BenefitCard; index: number }) {
  const Icon = clubBenefitIcons[item.id];

  return (
    <div className="motion-reveal transition-[translate] duration-200 hover:-translate-y-1" style={{ animationDelay: `${index * 0.1}s` }}>
      <Card elevation="raised" padding="22px">
        <div style={{ width: "44px", height: "44px", borderRadius: "50%", background: item.bg, color: textTint(item.color), display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "14px" }}>
          <Icon size={20} strokeWidth={2} />
        </div>
        <h3 style={{ fontWeight: 600, fontSize: "14px", color: "var(--color-text)", marginBottom: "6px" }}>{item.title}</h3>
        <p style={{ fontSize: "12px", color: "var(--color-text-muted)", lineHeight: 1.6 }}>{item.desc}</p>
      </Card>
    </div>
  );
}

export function ClubDirectoryCard({ club, index }: { club: ClubEntry; index: number }) {
  return (
    <div className="motion-reveal md:h-full" style={{ animationDelay: `${index * 0.06}s` }}>
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
              <h3 className="text-[14px] font-bold leading-snug text-text md:text-[15px]">
                {club.name}
              </h3>
              <p className="text-[11px] font-semibold leading-snug md:text-[12px]" style={{ color: textTint(club.color) }}>
                {club.slogan}
              </p>
              <p className="text-[12.5px] leading-relaxed text-text-secondary md:text-[13px]">
                {club.description}
              </p>
            </div>
          </div>
          <Link href={club.href} className="shrink-0 no-underline md:mt-auto">
            <div
              className="transition-[translate] duration-200 hover:-translate-x-1 inline-flex w-full items-center justify-center gap-1.5 rounded-lg bg-[rgba(18,184,200,0.08)] px-3 py-2.5 text-[12.5px] font-semibold text-(--color-secondary) md:w-auto md:justify-start md:bg-transparent md:px-0 md:py-0 md:text-[13px]"
            >
              <span>التفاصيل والصور</span>
              <ArrowLeft size={14} />
            </div>
          </Link>
        </div>
      </Card>
    </div>
  );
}
