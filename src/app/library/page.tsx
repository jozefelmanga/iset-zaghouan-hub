"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  CheckCircle2,
  Camera,
  BookMarked,
  DoorOpen,
  Info,
} from "lucide-react";
import { AppLayout } from "@/components/layout/AppLayout";
import { SectionHeader, Card, Alert } from "@/components/ui/shared";
import { libraryInfo } from "@/data/content";

export default function LibraryPage() {
  return (
    <AppLayout>
      <div className="max-w-3xl mx-auto px-4 py-6">
        <SectionHeader
          icon={BookOpen}
          title="المكتبة الجامعية"
          subtitle="مراجع، اكزامانات، وكل ما يعاونك على المراجعة"
        />

        <Card className="mb-6 bg-primary/5 border-primary/20">
          <div className="flex items-center gap-2 mb-2">
            <DoorOpen className="w-5 h-5 text-success" />
            <span className="font-bold text-primary">الدخول حر</span>
          </div>
          <p className="text-sm text-text-muted">{libraryInfo.access}</p>
        </Card>

        <div className="mb-6">
          <h3 className="text-lg font-bold text-text mb-3 flex items-center gap-2">
            <Info className="w-5 h-5 text-secondary" />
            الميزات
          </h3>
          <Card>
            <ul className="space-y-2">
              {libraryInfo.features.map((f, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-text">
                  <CheckCircle2 className="w-4 h-4 text-success mt-0.5 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </Card>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-bold text-text mb-3 flex items-center gap-2">
            <Camera className="w-5 h-5 text-accent" />
            نصائح
          </h3>
          <div className="space-y-2">
            {libraryInfo.tips.map((tip, i) => (
              <Alert key={i} title="" variant="info">
                {tip}
              </Alert>
            ))}
          </div>
        </div>

        <Alert title="موقع" variant="success">
          {libraryInfo.location}
        </Alert>
      </div>
    </AppLayout>
  );
}
