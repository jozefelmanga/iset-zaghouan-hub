"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  Calendar,
  FileText,
  Presentation,
  BookOpen,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  Calculator,
  GraduationCap,
} from "lucide-react";
import { AppLayout } from "@/components/layout/AppLayout";
import { SectionHeader, Card, Badge, Alert, StepItem } from "@/components/ui/shared";
import { internships, internshipDocs, internshipTips } from "@/data/internships";

export default function StagesPage() {
  return (
    <AppLayout>
      <div className="max-w-3xl mx-auto px-4 py-6">
        <SectionHeader
          icon={Briefcase}
          title="الستاجات"
          subtitle="3 سنوات = 3 ستاجات. دليلك الكامل لمراحل التطبيق."
        />

        {/* Timeline */}
        <div className="mb-8">
          <h3 className="text-lg font-bold text-text mb-4 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-primary" />
            التايم لاين
          </h3>
          <div className="space-y-4">
            {internships.map((internship, i) => (
              <motion.div
                key={internship.year}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.15 }}
              >
                <Card
                  className={
                    internship.year === 3 ? "border-primary/30 bg-primary/5" : ""
                  }
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Badge
                      variant={
                        internship.year === 3
                          ? "accent"
                          : internship.year === 2
                          ? "success"
                          : "default"
                      }
                    >
                      السنة {internship.year}
                    </Badge>
                    <h4 className="font-bold text-text">{internship.name}</h4>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-2 text-sm mb-3">
                    <div className="text-text-muted">
                      <span className="font-medium text-text">المدة:</span>{" "}
                      {internship.duration}
                    </div>
                    <div className="text-text-muted">
                      <span className="font-medium text-text">التوقيت:</span>{" "}
                      {internship.timing}
                    </div>
                    <div className="text-text-muted">
                      <span className="font-medium text-text">الوزن:</span>{" "}
                      {internship.weight}
                    </div>
                  </div>
                  <div className="mb-2">
                    <span className="text-sm font-medium text-text">المتطلبات:</span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {internship.requirements.map((r) => (
                        <Badge key={r} variant="default">
                          {r}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  {internship.note && (
                    <div className="mt-2 p-2 bg-accent/10 rounded-lg text-sm text-accent">
                      {internship.note}
                    </div>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Formula */}
        <Card className="mb-6">
          <h3 className="font-bold text-text mb-3 flex items-center gap-2">
            <Calculator className="w-5 h-5 text-primary" />
            معادلة احتساب المعدل
          </h3>
          <div className="p-4 bg-background rounded-lg text-center font-mono text-sm text-text">
            (PFE × 10 + Perfectionnement × 2.5 + Initiation × 2.5) ÷ 15
          </div>
          <p className="text-xs text-text-muted mt-2">
            الستاجات تدخل في معدل السداسي الثاني من السنة الثالثة.
          </p>
        </Card>

        {/* Didosoft */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-text mb-3 flex items-center gap-2">
            <ExternalLink className="w-5 h-5 text-secondary" />
            Didosoft
          </h3>
          <Alert title="التسجيل" variant="info">
            اعمل compte على{" "}
            <a
              href="https://didosoft.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-semibold"
            >
              didosoft
            </a>{" "}
            من أول العام. النتيجة تلقاها هناك.
          </Alert>
        </div>

        {/* Documents */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-text mb-3 flex items-center gap-2">
            <FileText className="w-5 h-5 text-primary" />
            الوثائق المطلوبة
          </h3>
          <Card>
            <ul className="space-y-2">
              {internshipDocs.map((doc, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-text">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  {doc}
                </li>
              ))}
            </ul>
          </Card>
        </div>

        {/* Tips */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-text mb-3 flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-accent" />
            نصائح
          </h3>
          <div className="space-y-2">
            {internshipTips.map((tip, i) => (
              <Alert key={i} title="" variant="warning">
                {tip}
              </Alert>
            ))}
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
