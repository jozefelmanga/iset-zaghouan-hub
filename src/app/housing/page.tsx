"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Building2,
  Clock,
  MapPin,
  Wallet,
  CheckCircle2,
  AlertCircle,
  Key,
  Sparkles,
  User,
  Users,
} from "lucide-react";
import { AppLayout } from "@/components/layout/AppLayout";
import { SectionHeader, Card, Badge, Alert } from "@/components/ui/shared";
import { housingFoyer, housingLouled, housingProcess } from "@/data/housing";

export default function HousingPage() {
  const [tab, setTab] = useState<"girls" | "boys">("girls");
  const data = tab === "girls" ? housingFoyer : housingLouled;

  return (
    <AppLayout>
      <div className="max-w-3xl mx-auto px-4 py-6">
        <SectionHeader
          icon={Building2}
          title="المبيت الجامعي"
          subtitle="كل ما تحتاجو تعرفوه على السكن الطلابي في زغوان"
        />

        {/* Tabs */}
        <div className="flex gap-2 mb-6">
          <button
            onClick={() => setTab("girls")}
            className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold transition-colors ${
              tab === "girls"
                ? "bg-primary text-white"
                : "bg-surface text-text-muted border border-border hover:text-text"
            }`}
          >
            <User className="w-4 h-4" />
            فواي البنات
          </button>
          <button
            onClick={() => setTab("boys")}
            className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold transition-colors ${
              tab === "boys"
                ? "bg-primary text-white"
                : "bg-surface text-text-muted border border-border hover:text-text"
            }`}
          >
            <Users className="w-4 h-4" />
            فواي الأولاد
          </button>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            {/* Info cards */}
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              <Card>
                <div className="flex items-center gap-2 mb-1">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="text-sm font-semibold text-text">الموقع</span>
                </div>
                <p className="text-sm text-text-muted">{data.location}</p>
              </Card>
              <Card>
                <div className="flex items-center gap-2 mb-1">
                  <Wallet className="w-4 h-4 text-primary" />
                  <span className="text-sm font-semibold text-text">الضمان</span>
                </div>
                <p className="text-sm text-text-muted">{data.deposit} دينار (ترجع اخر العام)</p>
              </Card>
              {data.curfew && (
                <Card>
                  <div className="flex items-center gap-2 mb-1">
                    <Clock className="w-4 h-4 text-warning" />
                    <span className="text-sm font-semibold text-text">وقت الإقفال</span>
                  </div>
                  <p className="text-sm text-text-muted">{data.curfew} ⚠️</p>
                </Card>
              )}
              <Card>
                <div className="flex items-center gap-2 mb-1">
                  <Key className="w-4 h-4 text-primary" />
                  <span className="text-sm font-semibold text-text">المفتاح</span>
                </div>
                <p className="text-sm text-text-muted">بتك (مع التوصيل)</p>
              </Card>
            </div>

            {/* Features */}
            <div className="mb-6">
              <h3 className="text-lg font-bold text-text mb-3 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-secondary" />
                الميزات
              </h3>
              <Card>
                <ul className="space-y-2">
                  {data.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-text">
                      <CheckCircle2 className="w-4 h-4 text-success mt-0.5 shrink-0" />
                      {f}
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
                {data.tips.map((tip, i) => (
                  <Alert key={i} title={""} variant="warning">
                    {tip}
                  </Alert>
                ))}
              </div>
            </div>

            {/* Packing list */}
            <div className="mb-6">
              <h3 className="text-lg font-bold text-text mb-3">📦 قائمة الحاجات</h3>
              <Card>
                <div className="flex flex-wrap gap-2">
                  {data.packingList.map((item, i) => (
                    <Badge key={i} variant="default">
                      {item}
                    </Badge>
                  ))}
                </div>
              </Card>
            </div>

            {/* Docs */}
            <div className="mb-6">
              <h3 className="text-lg font-bold text-text mb-3">📄 الأوراق المطلوبة</h3>
              <Card>
                <ul className="space-y-2">
                  {data.docs.map((doc, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-text">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      {doc}
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Process */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-text mb-3 flex items-center gap-2">
            <Key className="w-5 h-5 text-primary" />
            خطوات التسجيل في المبيت
          </h3>
          <Card>
            <ol className="space-y-3">
              {housingProcess.map((step, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center shrink-0">
                    {i + 1}
                  </span>
                  <p className="text-sm text-text">{step}</p>
                </li>
              ))}
            </ol>
          </Card>
        </div>
      </div>
    </AppLayout>
  );
}
