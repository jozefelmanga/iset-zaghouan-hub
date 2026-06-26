"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Coffee,
  BookOpen,
  Camera,
  Mountain,
  Store,
  Dumbbell,
  ArrowLeft,
  ExternalLink,
} from "lucide-react";
import { AppLayout } from "@/components/layout/AppLayout";
import { SectionHeader, Card } from "@/components/ui/shared";
import { exploreZaghouan } from "@/data/content";

export default function ExplorePage() {
  return (
    <AppLayout>
      <div className="max-w-3xl mx-auto px-4 py-6">
        <SectionHeader
          icon={MapPin}
          title="اكتشف زغوان"
          subtitle="بلاد مليانة بتاريخها و جبلها و انهجها المزيانة"
        />

        {/* Description */}
        <Card className="mb-6 bg-primary/5 border-primary/20">
          <p className="text-sm text-text leading-relaxed">{exploreZaghouan.description}</p>
        </Card>

        {/* Study spots */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-text mb-3 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-primary" />
            بلايص القراية
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {exploreZaghouan.studySpots.map((spot) => (
              <motion.div
                key={spot}
                whileHover={{ scale: 1.02 }}
                className="p-4 bg-surface rounded-xl border border-border text-center hover:border-primary/30 transition-colors"
              >
                <BookOpen className="w-6 h-6 text-primary mx-auto mb-2" />
                <span className="text-sm font-medium text-text">{spot}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Cafés */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-text mb-3 flex items-center gap-2">
            <Coffee className="w-5 h-5 text-secondary" />
            كافيهات و تفرهيد
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {exploreZaghouan.cafes.map((cafe) => (
              <motion.div
                key={cafe}
                whileHover={{ scale: 1.02 }}
                className="p-4 bg-surface rounded-xl border border-border text-center hover:border-secondary/30 transition-colors"
              >
                <Coffee className="w-6 h-6 text-secondary mx-auto mb-2" />
                <span className="text-sm font-medium text-text">{cafe}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Services */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-text mb-3 flex items-center gap-2">
            <Store className="w-5 h-5 text-accent" />
            خدمات قريبة
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { icon: Store, label: "كرفور اكبراس", color: "text-accent" },
              { icon: Camera, label: "publinet", color: "text-primary" },
              { icon: BookOpen, label: "مكتبة", color: "text-secondary" },
              { icon: Dumbbell, label: "قاعة رياضة", color: "text-success" },
            ].map((s) => (
              <div
                key={s.label}
                className="p-3 bg-surface rounded-xl border border-border text-center"
              >
                <s.icon className={`w-5 h-5 ${s.color} mx-auto mb-1`} />
                <span className="text-xs font-medium text-text">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Map placeholder */}
        <Card className="mb-6">
          <h3 className="font-bold text-text mb-3 flex items-center gap-2">
            <Mountain className="w-5 h-5 text-primary" />
            جبل زغوان
          </h3>
          <p className="text-sm text-text-muted mb-3">
            كي تطلعلو المنظر من فوق اينسيك الدنيا و ما فيها. أنصحك بزيارتو في نهاية الأسبوع.
          </p>
          <div className="aspect-video bg-background rounded-xl border border-border flex items-center justify-center text-text-muted">
            <div className="text-center">
              <Mountain className="w-10 h-10 mx-auto mb-2 text-primary/30" />
              <p className="text-sm">خريطة زغوان (OpenStreetMap)</p>
              <p className="text-xs mt-1">36.4029° N, 10.1423° E</p>
            </div>
          </div>
        </Card>
      </div>
    </AppLayout>
  );
}
