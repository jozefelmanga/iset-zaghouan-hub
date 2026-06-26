"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HelpCircle,
  ChevronDown,
  Phone,
  AlertTriangle,
  MessageCircle,
} from "lucide-react";
import { AppLayout } from "@/components/layout/AppLayout";
import { SectionHeader, Card, Alert } from "@/components/ui/shared";
import { faqItems, emergencyContacts } from "@/data/content";

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-border rounded-xl overflow-hidden bg-surface">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-4 text-right hover:bg-background/50 transition-colors"
      >
        <span className="font-semibold text-sm text-text">{question}</span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="w-5 h-5 text-text-muted shrink-0" />
        </motion.div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4 text-sm text-text-muted leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQPage() {
  return (
    <AppLayout>
      <div className="max-w-3xl mx-auto px-4 py-6">
        <SectionHeader
          icon={HelpCircle}
          title="الأسئلة الشائعة"
          subtitle="أكثر الأسئلة اللي يسألوها الطلبة الجداد"
        />

        <div className="space-y-3 mb-8">
          {faqItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <FAQItem question={item.question} answer={item.answer} />
            </motion.div>
          ))}
        </div>

        {/* Emergency contacts */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-text mb-3 flex items-center gap-2">
            <Phone className="w-5 h-5 text-danger" />
            أرقام مهمة
          </h3>
          <div className="space-y-3">
            {emergencyContacts.map((contact, i) => (
              <Card key={i}>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-sm text-text">{contact.name}</h4>
                    <p className="text-xs text-text-muted">{contact.note}</p>
                  </div>
                  {contact.phone !== "-" && (
                    <a
                      href={`tel:${contact.phone.replace(/[^0-9]/g, "")}`}
                      className="px-3 py-1.5 bg-primary text-white text-sm rounded-lg hover:bg-primary/90 transition-colors"
                    >
                      {contact.phone}
                    </a>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>

        <Alert title="عندك سؤال؟" variant="info">
          <div className="flex items-start gap-2">
            <MessageCircle className="w-4 h-4 shrink-0 mt-0.5" />
            <p className="text-sm">
              اسأل الطلبة الكبار ولا ممثلين الطلبة. هم يعاونوك و يفضوا مشكلتك.
            </p>
          </div>
        </Alert>
      </div>
    </AppLayout>
  );
}
