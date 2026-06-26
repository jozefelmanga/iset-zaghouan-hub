"use client";

import { motion } from "framer-motion";
import {
  Bus,
  Phone,
  MapPin,
  Wallet,
  Clock,
  AlertCircle,
  CheckCircle2,
  Star,
  ExternalLink,
} from "lucide-react";
import { AppLayout } from "@/components/layout/AppLayout";
import { SectionHeader, Card, Badge, Alert } from "@/components/ui/shared";
import { transportRoutes, transportTips } from "@/data/transport";

export default function TransportPage() {
  return (
    <AppLayout>
      <div className="max-w-3xl mx-auto px-4 py-6">
        <SectionHeader
          icon={Bus}
          title="النقل و المواصلات"
          subtitle="كل الطرق باش تروح و تجي من ISET Zaghouan"
        />

        {/* Routes */}
        <div className="space-y-4 mb-8">
          {transportRoutes.map((route, i) => (
            <motion.div
              key={route.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <Card>
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Badge variant={route.type === "shared_taxi" ? "accent" : "default"}>
                        {route.type === "shared_taxi" ? "لواج" : "كار"}
                      </Badge>
                      <h3 className="font-bold text-text">{route.name}</h3>
                    </div>
                    <p className="text-sm text-text-muted">
                      {route.from} → {route.to}
                    </p>
                  </div>
                  <div className="text-left">
                    <span className="text-lg font-bold text-primary">{route.fare}</span>
                    <span className="text-xs text-text-muted"> {route.fareUnit}</span>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-2 text-sm mb-2">
                  <div className="flex items-center gap-2 text-text-muted">
                    <Clock className="w-4 h-4 text-primary shrink-0" />
                    {route.schedule}
                  </div>
                  {route.contact && (
                    <div className="flex items-center gap-2 text-text-muted">
                      <Phone className="w-4 h-4 text-primary shrink-0" />
                      {route.contact.name}: {route.contact.phone}
                    </div>
                  )}
                </div>

                <p className="text-sm text-text-muted">{route.notes}</p>

                {route.abonnement && (
                  <div className="mt-2 p-2 bg-primary/5 rounded-lg text-sm text-primary">
                    أبونمان: {route.abonnement}
                  </div>
                )}
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Tips */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-text mb-3 flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-accent" />
            نصائح النقل
          </h3>
          <div className="space-y-2">
            {transportTips.map((tip, i) => (
              <Alert key={i} title="" variant="info">
                {tip}
              </Alert>
            ))}
          </div>
        </div>

        {/* Contact card */}
        <Card className="mb-6">
          <h3 className="font-bold text-text mb-3 flex items-center gap-2">
            <Phone className="w-5 h-5 text-primary" />
            أرقام مهمة
          </h3>
          <div className="space-y-2 text-sm">
            <p className="text-text">
              <span className="font-semibold">لواجيست قيس:</span>{" "}
              <a href="tel:98202339" className="text-primary hover:underline">98202339</a>
            </p>
            <p className="text-text">
              <span className="font-semibold">النقل المحلي:</span>{" "}
              <a href="tel:900" className="text-primary hover:underline">900</a>
            </p>
          </div>
        </Card>

        <Alert title="Google Sheets" variant="success">
          <a
            href="https://docs.google.com/spreadsheets"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline flex items-center gap-1"
          >
            Louage & Na9l Zaghouan
            <ExternalLink className="w-3 h-3" />
          </a>
        </Alert>
      </div>
    </AppLayout>
  );
}
