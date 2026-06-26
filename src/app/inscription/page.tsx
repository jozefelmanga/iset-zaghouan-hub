"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FileText,
  CreditCard,
  BookOpen,
  Stethoscope,
  IdCard,
  CheckCircle2,
  Circle,
  AlertCircle,
  Printer,
  Globe,
  Copy,
  ArrowLeft,
} from "lucide-react";
import { AppLayout } from "@/components/layout/AppLayout";
import { SectionHeader, Card, StepItem, Alert, Badge } from "@/components/ui/shared";
import { enrollmentSteps, enrollmentPhases, enrollmentDocs } from "@/data/enrollment";

const iconMap: Record<string, React.ElementType> = {
  FileText,
  CreditCard,
  BookOpen,
  Stethoscope,
  IdCard,
};

export default function InscriptionPage() {
  const [checked, setChecked] = useState<Record<number, boolean>>({});

  const toggle = (id: number) => {
    setChecked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const completed = Object.values(checked).filter(Boolean).length;
  const progress = Math.round((completed / enrollmentSteps.length) * 100);

  return (
    <AppLayout>
      <div className="max-w-3xl mx-auto px-4 py-6">
        <SectionHeader
          icon={FileText}
          title="الترسيم الجامعي"
          subtitle="خطوة بخطوة باش تسجل في ISET Zaghouan"
        />

        {/* Progress */}
        <Card className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-text">تقدم التحضير</span>
            <Badge variant={progress === 100 ? "success" : "default"}>{progress}%</Badge>
          </div>
          <div className="h-2 bg-border rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-primary"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
          <p className="text-xs text-text-muted mt-2">
            {completed} من {enrollmentSteps.length} أوراق جاهزة
          </p>
        </Card>

        {/* Steps checklist */}
        <div className="space-y-3 mb-8">
          {enrollmentSteps.map((step) => {
            const Icon = iconMap[step.icon] || FileText;
            const isChecked = checked[step.id];
            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: step.id * 0.05 }}
              >
                <Card
                  className={`cursor-pointer transition-colors ${
                    isChecked ? "border-success/30 bg-success/5" : ""
                  }`}
                  onClick={() => toggle(step.id)}
                >
                  <div className="flex items-start gap-3">
                    <button
                      className="mt-0.5 shrink-0"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggle(step.id);
                      }}
                    >
                      {isChecked ? (
                        <CheckCircle2 className="w-5 h-5 text-success" />
                      ) : (
                        <Circle className="w-5 h-5 text-text-muted" />
                      )}
                    </button>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <Icon className="w-4 h-4 text-primary" />
                        <h3
                          className={`font-semibold text-sm ${
                            isChecked ? "line-through text-text-muted" : "text-text"
                          }`}
                        >
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-sm text-text-muted">{step.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Phases */}
        <div className="mb-8">
          <h3 className="text-lg font-bold text-text mb-4 flex items-center gap-2">
            <Globe className="w-5 h-5 text-secondary" />
            مراحل الترسيم
          </h3>
          <div className="space-y-4">
            {enrollmentPhases.map((phase, i) => (
              <Card key={phase.id}>
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant={i === 0 ? "default" : "success"}>المرحلة {i + 1}</Badge>
                  <h4 className="font-semibold text-text">{phase.title}</h4>
                </div>
                <ul className="space-y-2">
                  {phase.steps.map((step, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-text-muted">
                      <ArrowLeft className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      {step}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>

        {/* Document list */}
        <div className="mb-8">
          <h3 className="text-lg font-bold text-text mb-4 flex items-center gap-2">
            <Printer className="w-5 h-5 text-accent" />
            قائمة الأوراق
          </h3>
          <Card>
            <ul className="space-y-2">
              {enrollmentDocs.map((doc, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-text">
                  <Copy className="w-4 h-4 text-primary shrink-0" />
                  {doc}
                </li>
              ))}
            </ul>
          </Card>
        </div>

        <Alert title="تنبيه مهم" variant="warning">
          شهادة الترسيم لازمك تستحفظ عليها و تخبيها. اعمل برشا نسخ و تخبيهم في بلاصات مختلفة.
        </Alert>
      </div>
    </AppLayout>
  );
}
