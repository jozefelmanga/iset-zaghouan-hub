"use client";

import { motion } from "framer-motion";
import {
  UtensilsCrossed,
  Clock,
  Ticket,
  Repeat,
  CalendarDays,
  Moon,
  PartyPopper,
  AlertCircle,
  CheckCircle2,
  Info,
} from "lucide-react";
import { AppLayout } from "@/components/layout/AppLayout";
import { SectionHeader, Card, Badge, Alert } from "@/components/ui/shared";
import { restaurantInfo } from "@/data/restaurant";

export default function RestoPage() {
  return (
    <AppLayout>
      <div className="max-w-3xl mx-auto px-4 py-6">
        <SectionHeader
          icon={UtensilsCrossed}
          title="ريستو ISET Zaghouan"
          subtitle="من أحسن الريستوات في تونس - ماكلا نظيفة و كل شي منظم"
        />

        {/* Rating */}
        <Card className="mb-6 bg-primary/5 border-primary/20">
          <div className="flex items-center gap-2 mb-2">
            <CheckCircle2 className="w-5 h-5 text-success" />
            <span className="font-bold text-primary">{restaurantInfo.rating}</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {restaurantInfo.features.map((f, i) => (
              <Badge key={i} variant="success">
                {f}
              </Badge>
            ))}
          </div>
        </Card>

        {/* Hours */}
        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          <Card>
            <div className="flex items-center gap-2 mb-2">
              <Clock className="w-5 h-5 text-primary" />
              <h3 className="font-bold text-text">الغداة</h3>
            </div>
            <p className="text-sm text-text-muted">
              {restaurantInfo.lunch.open} - {restaurantInfo.lunch.close}
            </p>
          </Card>
          <Card>
            <div className="flex items-center gap-2 mb-2">
              <Moon className="w-5 h-5 text-primary" />
              <h3 className="font-bold text-text">العشاء</h3>
            </div>
            <p className="text-sm text-text-muted">
              {restaurantInfo.dinner.open} - {restaurantInfo.dinner.close}
            </p>
            <p className="text-xs text-text-muted mt-1">{restaurantInfo.dinner.note}</p>
          </Card>
        </div>

        {/* Rules */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-text mb-3 flex items-center gap-2">
            <Info className="w-5 h-5 text-secondary" />
            معلومات مهمة
          </h3>
          <div className="space-y-2">
            <Alert title="الفطور" variant="info">
              {restaurantInfo.breakfast}
            </Alert>
            <Alert title="التيكيات" variant="success">
              {restaurantInfo.tickets}
            </Alert>
            <Alert title="دوبل بلاتو" variant="success">
              {restaurantInfo.doublePlate}
            </Alert>
            <Alert title="السبت" variant="warning">
              {restaurantInfo.saturday}
            </Alert>
          </div>
        </div>

        {/* Ramadan */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-text mb-3 flex items-center gap-2">
            <Moon className="w-5 h-5 text-accent" />
            رمضان في الريستو
          </h3>
          <Card>
            <ul className="space-y-2">
              {restaurantInfo.ramadan.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-text">
                  <CheckCircle2 className="w-4 h-4 text-success mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        </div>

        {/* Special occasions */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-text mb-3 flex items-center gap-2">
            <PartyPopper className="w-5 h-5 text-secondary" />
            المناسبات الخاصة
          </h3>
          <Card>
            <ul className="space-y-2">
              {restaurantInfo.special.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-text">
                  <CheckCircle2 className="w-4 h-4 text-success mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        </div>

        {/* Tips */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-text mb-3 flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-warning" />
            نصائح
          </h3>
          <div className="space-y-2">
            {restaurantInfo.tips.map((tip, i) => (
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
