"use client";

import { useState } from "react";
import { useIsMobile } from "@/hooks/useIsMobile";
import Link from "next/link";
import { m as motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowLeft, ExternalLink } from "@/lib/icons";
import { Badge } from "@/components/ui/shared";
import { Accordion } from "@/components/ui/Accordion";
import { internships, difficultyLabels } from "@/data/internships";
import { hoverLift } from "@/lib/motion";
import styles from "./stages.module.css";

const yearColors = [
  { bg: "rgba(18,184,200,0.08)", border: "rgba(18,184,200,0.2)", text: "#12B8C8", badge: "info" as const },
  { bg: "rgba(34,197,94,0.08)", border: "rgba(34,197,94,0.2)", text: "#22C55E", badge: "success" as const },
  { bg: "rgba(246,180,27,0.08)", border: "rgba(246,180,27,0.2)", text: "#B45309", badge: "warning" as const },
];

function WorkloadGrid({ workload }: { workload: (typeof internships)[0]["workload"] }) {
  const items = [
    { icon: "📝", label: "Rapport", value: workload.reportPages },
    { icon: "🎤", label: "Présentation", value: workload.presentationMinutes },
    { icon: "📖", label: "Journal", value: workload.journalEntries },
    { icon: "👨‍🏫", label: "Soutenance", value: workload.defenseMinutes },
  ].filter((i) => i.value);

  return (
    <div className={styles.workloadGrid}>
      {items.map(({ icon, label, value }) => (
        <div key={label} style={{ padding: "10px 12px", borderRadius: "10px", background: "rgba(255,255,255,0.6)" }}>
          <p style={{ fontSize: "16px", marginBottom: "4px" }}>{icon}</p>
          <p style={{ fontSize: "11px", fontWeight: 600, color: "var(--color-text-muted)" }}>{label}</p>
          <p style={{ fontSize: "13px", fontWeight: 700, color: "var(--color-text)" }}>{value}</p>
        </div>
      ))}
    </div>
  );
}

function StageDetail({ internship, colors, isExpanded }: {
  internship: (typeof internships)[0];
  colors: (typeof yearColors)[0];
  isExpanded: boolean;
}) {
  const diff = difficultyLabels[internship.difficulty];

  return (
    <AnimatePresence>
      {isExpanded && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.28, ease: "easeOut" }}
          style={{ overflow: "hidden" }}
        >
          <div style={{ paddingTop: "16px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "14px" }}>
              <span style={{ fontSize: "12px", fontWeight: 600, color: "var(--color-text-muted)" }}>الصعوبة</span>
              <span style={{ fontSize: "13px", fontWeight: 700, color: diff.color }}>
                {diff.dot} {diff.label}
              </span>
            </div>

            <WorkloadGrid workload={internship.workload} />

            <div className={styles.metaGrid}>
              {[
                { label: "المدة", value: internship.duration },
                { label: "التوقيت", value: internship.timing },
                { label: "الوزن", value: `${internship.weight}/15` },
              ].map(({ label, value }) => (
                <div key={label} style={{ padding: "10px 14px", borderRadius: "10px", background: "rgba(255,255,255,0.6)" }}>
                  <p style={{ fontSize: "11px", fontWeight: 600, color: "var(--color-text-muted)", marginBottom: "3px", textTransform: "uppercase", letterSpacing: "0.06em" }}>{label}</p>
                  <p style={{ fontSize: "13px", fontWeight: 600, color: "var(--color-text)" }}>{value}</p>
                </div>
              ))}
            </div>

            <div style={{ marginBottom: "14px" }}>
              <p style={{ fontSize: "12px", fontWeight: 600, color: "var(--color-text-muted)", marginBottom: "8px" }}>الأهداف:</p>
              <ul style={{ margin: 0, paddingRight: "18px", fontSize: "13px", color: "var(--color-text-secondary)", lineHeight: 1.7 }}>
                {internship.objectives.map((o) => <li key={o}>{o}</li>)}
              </ul>
            </div>

            <div style={{ marginBottom: "14px" }}>
              <p style={{ fontSize: "12px", fontWeight: 600, color: "var(--color-text-muted)", marginBottom: "8px" }}>المخرجات:</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {internship.deliverables.map((d) => (
                  <span key={d} style={{ padding: "4px 12px", borderRadius: "999px", fontSize: "12px", fontWeight: 500, background: "rgba(255,255,255,0.7)", color: colors.text, border: `1px solid ${colors.border}` }}>
                    {d}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ marginBottom: "14px" }}>
              <p style={{ fontSize: "12px", fontWeight: 600, color: "var(--color-text-muted)", marginBottom: "8px" }}>المتطلبات:</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {internship.requirements.map((r) => (
                  <span key={r} style={{ padding: "4px 12px", borderRadius: "999px", fontSize: "12px", fontWeight: 500, background: "rgba(255,255,255,0.7)", color: colors.text, border: `1px solid ${colors.border}` }}>
                    {r}
                  </span>
                ))}
              </div>
            </div>

            <div id={`faq-${internship.year}`} style={{ marginBottom: internship.hasDedicatedPage ? "14px" : 0 }}>
              {internship.faq.length > 0 && (
                <>
                  <p style={{ fontSize: "12px", fontWeight: 600, color: "var(--color-text-muted)", marginBottom: "10px" }}>أسئلة خاصة بهالسنة:</p>
                  <Accordion items={internship.faq} />
                </>
              )}
            </div>

            {internship.hasDedicatedPage && (
              <Link
                href="/stages/pfe"
                className={styles.pfeLink}
                style={{ background: colors.text }}
              >
                <ExternalLink size={16} strokeWidth={2} />
                دليل PFE الكامل
                <ArrowLeft size={14} strokeWidth={2.5} />
              </Link>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

interface InternshipTimelineProps {
  activeYear?: number;
  onYearChange?: (year: number) => void;
  hideSelector?: boolean;
}

export function InternshipTimeline({ activeYear: controlledYear, onYearChange, hideSelector }: InternshipTimelineProps) {
  const [internalYear, setInternalYear] = useState(1);
  const activeYear = controlledYear ?? internalYear;
  const setActiveYear = (year: number) => {
    setInternalYear(year);
    onYearChange?.(year);
  };

  const isMobile = useIsMobile();
  const [mobileOpen, setMobileOpen] = useState<number | null>(controlledYear ?? 1);
  const [prevControlledYear, setPrevControlledYear] = useState(controlledYear);

  if (controlledYear !== prevControlledYear) {
    setPrevControlledYear(controlledYear);
    if (controlledYear !== undefined) {
      setMobileOpen(controlledYear);
    }
  }

  if (isMobile && !hideSelector) {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {internships.map((internship, i) => {
          const colors = yearColors[i] || yearColors[0];
          const isOpen = mobileOpen === internship.year;

          return (
            <div
              key={internship.year}
              style={{
                background: colors.bg,
                border: `1px solid ${isOpen ? colors.text : colors.border}`,
                borderRadius: "16px",
                overflow: "hidden",
                transition: "border-color 0.2s",
              }}
            >
              <button
                type="button"
                onClick={() => {
                  setMobileOpen(isOpen ? null : internship.year);
                  setActiveYear(internship.year);
                }}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "16px 18px",
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "var(--font-sans)",
                  textAlign: "right",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <span style={{ fontSize: "24px" }}>{internship.emoji}</span>
                  <div>
                    <p style={{ fontWeight: 700, fontSize: "15px", color: "var(--color-text)" }}>
                      {i + 1}️⃣ {internship.name}
                    </p>
                    <p style={{ fontSize: "12px", color: "var(--color-text-muted)" }}>{internship.duration}</p>
                  </div>
                </div>
                <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.22 }}>
                  <ChevronDown size={18} style={{ color: colors.text }} strokeWidth={2.5} />
                </motion.div>
              </button>
              {isOpen && (
                <div style={{ padding: "0 18px 18px" }}>
                  <StageDetail internship={internship} colors={colors} isExpanded={true} />
                </div>
              )}
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div>
      {!hideSelector && (
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 0, marginBottom: "24px", padding: "0 8px" }}>
        {internships.map((internship, i) => {
          const colors = yearColors[i] || yearColors[0];
          const isActive = activeYear === internship.year;
          const isLast = i === internships.length - 1;

          return (
            <div key={internship.year} style={{ display: "flex", alignItems: "center", flex: isLast ? "none" : 1 }}>
              <motion.button
                type="button"
                onClick={() => setActiveYear(internship.year)}
                {...hoverLift}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "8px",
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  padding: "8px 12px",
                  fontFamily: "var(--font-sans)",
                }}
              >
                <div
                  style={{
                    width: isActive ? "52px" : "44px",
                    height: isActive ? "52px" : "44px",
                    borderRadius: "50%",
                    background: isActive ? colors.text : "var(--color-surface)",
                    color: isActive ? "#fff" : colors.text,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: isActive ? "22px" : "18px",
                    boxShadow: isActive ? `0 0 0 4px ${colors.bg}, 0 0 0 6px ${colors.border}` : `0 0 0 2px ${colors.border}`,
                    transition: "all 0.25s ease",
                  }}
                >
                  {internship.emoji}
                </div>
                <span style={{ fontSize: "12px", fontWeight: isActive ? 700 : 500, color: isActive ? colors.text : "var(--color-text-muted)" }}>
                  السنة {internship.year}
                </span>
              </motion.button>
              {!isLast && (
                <div
                  style={{
                    flex: 1,
                    height: "2px",
                    margin: "0 4px",
                    marginBottom: "28px",
                    background: `linear-gradient(to left, ${yearColors[i + 1]?.text || colors.text}, ${colors.text})`,
                    borderRadius: "999px",
                    opacity: activeYear > internship.year ? 1 : 0.35,
                    transition: "opacity 0.3s",
                  }}
                />
              )}
            </div>
          );
        })}
      </div>
      )}

      {/* Expanded card for active stage */}
      {internships.map((internship, i) => {
        if (internship.year !== activeYear) return null;
        const colors = yearColors[i] || yearColors[0];
        const isExpanded = true;

        return (
          <motion.div
            key={internship.year}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              {...hoverLift}
              className={styles.stageCard}
              style={{
                background: colors.bg,
                border: `1px solid ${colors.border}`,
              }}
            >
              <div className={styles.stageHeaderRow}>
                <div
                  className={styles.stageEmojiBox}
                  style={{ border: `1px solid ${colors.border}` }}
                >
                  {internship.emoji}
                </div>
                <div className={styles.stageBody}>
                  <div className={styles.stageTitleRow}>
                    <Badge variant={colors.badge}>السنة {internship.year}</Badge>
                    <h4 className={styles.stageTitle} style={{ fontWeight: 700, fontSize: "18px", color: "var(--color-text)", margin: 0 }}>{internship.name}</h4>
                  </div>
                  <StageDetail internship={internship} colors={colors} isExpanded={isExpanded} />
                </div>
              </div>
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
}
