"use client";

import { motion } from "framer-motion";
import { TimelineItem } from "@/components/ui/TimelineItem";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { announcements } from "@/data/content";
import { sectionReveal } from "@/lib/motion";
import { Bell } from "@/lib/icons";

export function AnnouncementsSection() {
  return (
    <motion.section {...sectionReveal} className="mb-20">
      <SectionHeader
        label="مستجدات"
        title="إعلانات هامة"
        subtitle="آخر التحديثات التي تهمك"
        icon={Bell}
      />
      <Card padding="32px">
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {announcements.map((item, i) => (
            <TimelineItem
              key={i}
              time={item.time}
              title={item.title}
              description={item.description}
              type={item.type as any}
              isLast={i === announcements.length - 1}
            />
          ))}
        </div>
      </Card>
    </motion.section>
  );
}
