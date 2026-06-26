"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  FileText,
  Building2,
  Banknote,
  Bus,
  Briefcase,
  BookOpen,
  Users,
  Award,
  MapPin,
  HelpCircle,
  ArrowLeft,
  AlertCircle,
  CheckCircle2,
  Calendar,
  Sparkles,
  UtensilsCrossed,
} from "lucide-react";
import { AppLayout } from "@/components/layout/AppLayout";
import { ActionCard, Alert, Badge } from "@/components/ui/shared";

const quickActions = [
  { icon: FileText, title: "الترسيم الجامعي", description: "خطوات التسجيل و الأوراق المطلوبة", href: "/inscription", color: "primary" },
  { icon: Building2, title: "المبيت الجامعي", description: "فواي البنات و الأولاد", href: "/housing", color: "secondary" },
  { icon: Banknote, title: "البورص", description: "منحة الإدماج و البورص الكاملة", href: "/bourse", color: "accent" },
  { icon: Bus, title: "النقل", description: "لواجات، كيران، و المواصلات", href: "/transport", color: "success" },
  { icon: Briefcase, title: "الستاجات", description: "دليل الستاجات و Didosoft", href: "/stages", color: "danger" },
  { icon: BookOpen, title: "المكتبة", description: "مراجع و اكزامانات", href: "/library", color: "primary" },
];

const announcements = [
  { title: "مواعيد الترسيم الجامعي", message: "لا تنسى تحضر الأوراق من قبل و تخلص online", type: "warning" as const },
  { title: "التسجيل في المبيت", message: "OOUN يحل قريب، جهز الأوراق", type: "info" as const },
  { title: "كارت E-dinar", message: "امشي للبوسطة بكري و اصنع الكارت", type: "success" as const },
];

export default function HomePage() {
  return (
    <AppLayout>
      <div className="max-w-5xl mx-auto px-4 py-6 space-y-8">
        {/* Hero */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative overflow-hidden rounded-2xl bg-primary text-white p-6 sm:p-10"
        >
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-3">
              <Badge variant="warning">🎓 دليل الطالب</Badge>
            </div>
            <h1 className="text-2xl sm:text-4xl font-bold mb-3">
              مرحبا بيك في ISET Zaghouan
            </h1>
            <p className="text-primary-foreground/80 text-sm sm:text-base max-w-lg mb-6">
              كل ما تحتاجو باش تبدأ حياتك الجامعية بثقة و راحة. الترسيم، المبيت، النقل، البورص، و أكثر.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="/inscription"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-primary rounded-lg font-semibold text-sm hover:bg-white/90 transition-colors"
              >
                <CheckCircle2 className="w-4 h-4" />
                ابدأ الترسيم
              </a>
              <a
                href="/explore"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary-foreground/15 text-white rounded-lg font-semibold text-sm hover:bg-primary-foreground/25 transition-colors"
              >
                <MapPin className="w-4 h-4" />
                اكتشف زغوان
              </a>
            </div>
          </div>
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-4 right-4 w-32 h-32 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-4 left-4 w-24 h-24 bg-accent rounded-full blur-3xl" />
          </div>
        </motion.section>

        {/* Announcements */}
        <section>
          <h2 className="text-lg font-bold text-text mb-4 flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-accent" />
            إعلانات مهمة
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {announcements.map((a, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Alert title={a.title} variant={a.type}>
                  {a.message}
                </Alert>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Quick Actions */}
        <section>
          <h2 className="text-lg font-bold text-text mb-4 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-secondary" />
            الوصول السريع
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {quickActions.map((action, i) => (
              <motion.div
                key={action.href}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <ActionCard {...action} />
              </motion.div>
            ))}
          </div>
        </section>

        {/* Campus Services */}
        <section>
          <h2 className="text-lg font-bold text-text mb-4 flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-primary" />
            خدمات الحرم الجامعي
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { icon: UtensilsCrossed, label: "الريستو", href: "/resto" },
              { icon: BookOpen, label: "المكتبة", href: "/library" },
              { icon: Users, label: "النوادي", href: "/clubs" },
              { icon: Award, label: "الماستر", href: "/masters" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="flex flex-col items-center gap-2 p-4 bg-surface rounded-xl border border-border hover:border-primary/30 hover:shadow-sm transition-all"
              >
                <item.icon className="w-6 h-6 text-primary" />
                <span className="text-sm font-medium text-text">{item.label}</span>
              </a>
            ))}
          </div>
        </section>

        {/* Explore teaser */}
        <section className="bg-surface rounded-2xl border border-border p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-text flex items-center gap-2">
              <MapPin className="w-5 h-5 text-accent" />
              اكتشف زغوان
            </h2>
            <a href="/explore" className="text-sm text-primary font-medium flex items-center gap-1 hover:underline">
              الكل
              <ArrowLeft className="w-4 h-4" />
            </a>
          </div>
          <p className="text-text-muted text-sm mb-4">
            بلاد مليانة بتاريخها و جبلها و انهجها المزيانة. أحسن البلايص باش تقرا و تفرهد.
          </p>
          <div className="flex flex-wrap gap-2">
            {["Fabrica", "Café Rahba", "La Vallée", "The Rock", "Paradise"].map((spot) => (
              <span key={spot} className="px-3 py-1.5 bg-background rounded-full text-sm text-text border border-border">
                {spot}
              </span>
            ))}
          </div>
        </section>

        {/* FAQ teaser */}
        <section className="bg-surface rounded-2xl border border-border p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-text flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-primary" />
              الأسئلة الشائعة
            </h2>
            <a href="/faq" className="text-sm text-primary font-medium flex items-center gap-1 hover:underline">
              الكل
              <ArrowLeft className="w-4 h-4" />
            </a>
          </div>
          <div className="space-y-3">
            {[
              "كيفاش نعمل الترسيم الجامعي؟",
              "كيفاش نترسيم في المبيت؟",
              "شنية أوراق البورص؟",
              "كيفاش نروح لتونس من زغوان؟",
            ].map((q) => (
              <a
                key={q}
                href="/faq"
                className="block p-3 bg-background rounded-lg text-sm text-text hover:bg-primary/5 transition-colors"
              >
                {q}
              </a>
            ))}
          </div>
        </section>
      </div>
    </AppLayout>
  );
}
