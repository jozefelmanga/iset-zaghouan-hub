"use client";

import { motion } from "framer-motion";
import {
  Users,
  CheckCircle2,
  Heart,
  Globe,
  Briefcase,
  MessageCircle,
  Clock,
  Award,
  Star,
} from "lucide-react";
import { AppLayout } from "@/components/layout/AppLayout";
import { SectionHeader, Card, Badge, Alert } from "@/components/ui/shared";
import { clubs } from "@/data/content";

export default function ClubsPage() {
  return (
    <AppLayout>
      <div className="max-w-3xl mx-auto px-4 py-6">
        <SectionHeader
          icon={Users}
          title="النوادي و الجمعيات"
          subtitle="الحياة الجامعية مهاش قراية بركا - اكتشف روحك و طور مهاراتك"
        />

        <Card className="mb-6">
          <div className="flex items-center gap-2 mb-4">
            <Heart className="w-5 h-5 text-danger" />
            <h3 className="font-bold text-text">ليش تنضم لنادي؟</h3>
          </div>
          <ul className="space-y-2">
            {clubs[0].benefits.map((b, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-text">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5 shrink-0" />
                {b}
              </li>
            ))}
          </ul>
        </Card>

        <div className="mb-6">
          <h3 className="text-lg font-bold text-text mb-3 flex items-center gap-2">
            <Star className="w-5 h-5 text-accent" />
            Soft Skills اللي تكتسبها
          </h3>
          <div className="flex flex-wrap gap-2">
            {clubs[0].skills.map((s) => (
              <Badge key={s} variant="accent">
                {s}
              </Badge>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-bold text-text mb-3 flex items-center gap-2">
            <Award className="w-5 h-5 text-primary" />
            الفوائد
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { icon: Globe, title: "توسيع دائرة المعرفة", desc: "تعرف عباد من أعمار و اختصاصات مختلفة" },
              { icon: Briefcase, title: "تقوية السيرة الذاتية", desc: "شهادات و خبرات باش تتحصل عليها" },
              { icon: MessageCircle, title: "تطوير التواصل", desc: "تتعلم كيفاه تتواصل معاهم" },
              { icon: Clock, title: "Time Management", desc: "تنظم وقتك بين القراية و الأنشطة" },
            ].map((item) => (
              <Card key={item.title}>
                <item.icon className="w-6 h-6 text-primary mb-2" />
                <h4 className="font-semibold text-text text-sm mb-1">{item.title}</h4>
                <p className="text-xs text-text-muted">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>

        <Alert title="نصيحة" variant="success">
          الحياة الجامعية مهاش قراية بركا. النوادي تربط بين الجو والتفرهيد وتخليك تكتسب خبرة في برشا ميادين مختلفة.
        </Alert>
      </div>
    </AppLayout>
  );
}
