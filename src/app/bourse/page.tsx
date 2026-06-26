"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Banknote,
  Calculator,
  AlertCircle,
  CheckCircle2,
  FileText,
  Clock,
} from "lucide-react";
import { AppLayout } from "@/components/layout/AppLayout";
import { SectionHeader, Card, Badge, Alert } from "@/components/ui/shared";
import { scholarshipTypes, scholarshipRules, scholarshipDocs } from "@/data/scholarships";

export default function BoursePage() {
  const [income, setIncome] = useState<number | "">("");

  const incomeNum = typeof income === "number" ? income : 0;
  const hasFull = incomeNum <= 5153000;
  const hasIntegration = incomeNum <= 30000000;

  let result = "";
  let resultVariant: "default" | "success" | "warning" | "danger" = "default";

  if (incomeNum === 0) {
    result = "أدخل الدخل السنوي باش تشوف حقك";
    resultVariant = "default";
  } else if (incomeNum > 30000000) {
    result = "لا بورص ولا منحة إدماج (الدخل > 30 مليون)";
    resultVariant = "danger";
  } else if (incomeNum > 5153000) {
    result = "منحة الإدماج فقط (500 د)";
    resultVariant = "warning";
  } else {
    result = "حقك في البورصة الكاملة";
    resultVariant = "success";
  }

  return (
    <AppLayout>
      <div className="max-w-3xl mx-auto px-4 py-6">
        <SectionHeader
          icon={Banknote}
          title="البورصة الجامعية"
          subtitle="منحة الإدماج و البورصة الكاملة - شنية تحتاج تعرفو"
        />

        {/* Calculator */}
        <Card className="mb-6">
          <h3 className="text-lg font-bold text-text mb-4 flex items-center gap-2">
            <Calculator className="w-5 h-5 text-primary" />
            حاسبة الأهلية
          </h3>
          <div className="mb-4">
            <label className="block text-sm font-medium text-text mb-2">
              الدخل السنوي للعائلة (بالدينار)
            </label>
            <input
              type="number"
              value={income}
              onChange={(e) => setIncome(e.target.value === "" ? "" : Number(e.target.value))}
              placeholder="مثلا: 4000000"
              className="w-full px-4 py-3 rounded-lg border border-border bg-background text-text focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>
          <motion.div
            initial={false}
            animate={{ opacity: incomeNum > 0 ? 1 : 0.6 }}
            className={`rounded-xl border p-4 ${
              resultVariant === "success"
                ? "bg-success/5 border-success/20"
                : resultVariant === "warning"
                ? "bg-warning/5 border-warning/20"
                : resultVariant === "danger"
                ? "bg-danger/5 border-danger/20"
                : "bg-primary/5 border-primary/20"
            }`}
          >
            <div className="flex items-center gap-2">
              {resultVariant === "success" ? (
                <CheckCircle2 className="w-5 h-5 text-success" />
              ) : (
                <AlertCircle className="w-5 h-5 text-text-muted" />
              )}
              <span className="font-semibold text-text">{result}</span>
            </div>
          </motion.div>
        </Card>

        {/* Scholarship types */}
        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          {scholarshipTypes.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Card>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl font-bold text-primary">{s.amount} DT</span>
                  <Badge variant={i === 0 ? "accent" : "default"}>{s.name}</Badge>
                </div>
                <p className="text-sm text-text-muted">{s.condition}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Rules */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-text mb-3 flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-warning" />
            قواعد البورص
          </h3>
          <div className="space-y-2">
            {scholarshipRules.map((rule, i) => (
              <Alert key={i} title="" variant="warning">
                {rule}
              </Alert>
            ))}
          </div>
        </div>

        {/* Documents */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-text mb-3 flex items-center gap-2">
            <FileText className="w-5 h-5 text-primary" />
            الأوراق المطلوبة
          </h3>
          <Card>
            <ul className="space-y-2">
              {scholarshipDocs.map((doc, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-text">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  {doc}
                </li>
              ))}
            </ul>
          </Card>
        </div>

        <Alert title="ملاحظة" variant="info">
          أوراق البورص هي نفسها أوراق 500 د. عند تقديم البورص، نفس الأوراق إذا لم يكن الحق في البورص كاملة تأخذ منحة الإدماج.
        </Alert>
      </div>
    </AppLayout>
  );
}
