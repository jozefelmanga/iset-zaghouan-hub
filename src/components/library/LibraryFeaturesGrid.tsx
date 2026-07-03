"use client";

import type { LucideIcon } from "@/lib/icons";
import { BookOpen, Camera, Clock, FileText, Sparkles } from "@/lib/icons";
import { m as motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { enterAnimation } from "@/lib/motion";

const featureMeta: { icon: LucideIcon; color: string; bg: string }[] = [
  { icon: Clock, color: "#12B8C8", bg: "rgba(18,184,200,0.10)" },
  { icon: FileText, color: "#3B82F6", bg: "rgba(59,130,246,0.10)" },
  { icon: Camera, color: "#8B5CF6", bg: "rgba(139,92,246,0.10)" },
  { icon: BookOpen, color: "#22C55E", bg: "rgba(34,197,94,0.10)" },
];

export function LibraryFeaturesGrid({ features }: { features: string[] }) {
  return (
    <section className="mb-7">
      <div className="mb-4 flex items-center gap-2.5">
        <div
          className="flex h-[34px] w-[34px] items-center justify-center rounded-full"
          style={{ background: "rgba(18,184,200,0.10)", color: "var(--color-secondary)" }}
        >
          <Sparkles size={16} strokeWidth={2} />
        </div>
        <h2 className="text-[17px] font-bold text-text">الميزات</h2>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {features.map((text, i) => {
          const meta = featureMeta[i] ?? featureMeta[0];
          const Icon = meta.icon;

          return (
            <motion.div key={text} {...enterAnimation(i * 0.06)} whileHover={{ y: -3 }}>
              <Card elevation="raised" padding="20px" className="h-full">
                <div className="flex items-start gap-3.5">
                  <div
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
                    style={{ background: meta.bg, color: meta.color }}
                  >
                    <Icon size={20} strokeWidth={2} />
                  </div>
                  <p className="pt-1.5 text-[13.5px] font-medium leading-relaxed text-text">
                    {text}
                  </p>
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
