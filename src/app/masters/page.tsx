"use client";

import { motion } from "framer-motion";
import {
  Award,
  GraduationCap,
  CheckCircle2,
  BookOpen,
  ArrowLeft,
} from "lucide-react";
import { AppLayout } from "@/components/layout/AppLayout";
import { SectionHeader, Card } from "@/components/ui/shared";
import { departments } from "@/data/content";

export default function MastersPage() {
  return (
    <AppLayout>
      <div className="max-w-3xl mx-auto px-4 py-6">
        <SectionHeader
          icon={Award}
          title="الماستر"
          subtitle="التخصصات المتاحة بعد الإجازة في ISET Zaghouan"
        />

        <div className="space-y-4">
          {departments.map((dept, i) => (
            <motion.div
              key={dept.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Card>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold">
                    {dept.name}
                  </div>
                  <div>
                    <h3 className="font-bold text-text">{dept.fullName}</h3>
                    <p className="text-xs text-text-muted">Department {dept.name}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  {dept.masters.map((master) => (
                    <div
                      key={master}
                      className="flex items-center gap-2 p-2 bg-background rounded-lg text-sm text-text"
                    >
                      <GraduationCap className="w-4 h-4 text-primary shrink-0" />
                      {master}
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-primary/5 rounded-xl border border-primary/20">
          <div className="flex items-start gap-3">
            <BookOpen className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold text-text mb-1">معلومات عامة</h4>
              <p className="text-sm text-text-muted">
                بعد إتمام الإجازة (3 سنوات)، تنجم تكمل في الماستر حسب التخصص متاعك. اسأل البروفات متاعك للتفاصيل.
              </p>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
