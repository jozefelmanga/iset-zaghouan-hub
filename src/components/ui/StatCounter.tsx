"use client";

import { useRef, useEffect, useState } from "react";
import { m as motion } from "framer-motion";
import { itemReveal } from "@/lib/motion";

interface StatCounterProps {
  value: string;
  label: string;
  suffix?: string;
  delay?: number;
}

export function StatCounter({ value, label, suffix = "", delay = 0 }: StatCounterProps) {
  const [displayed, setDisplayed] = useState("0");
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const numericValue = parseInt(value.replace(/\D/g, ""), 10) || 0;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          setTimeout(() => {
            const duration = 1600;
            const start = Date.now();
            const tick = () => {
              const elapsed = Date.now() - start;
              const progress = Math.min(elapsed / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              const current = Math.round(numericValue * eased);
              setDisplayed(current.toLocaleString());
              if (progress < 1) requestAnimationFrame(tick);
              else setDisplayed(value);
            };
            requestAnimationFrame(tick);
          }, delay);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [numericValue, value, delay, hasAnimated]);

  return (
    <motion.div
      ref={ref}
      {...itemReveal(delay / 1000)}
      className="text-center"
    >
      <div
        className="text-4xl sm:text-5xl font-bold mb-2"
        style={{ color: "var(--color-secondary)", fontFeatureSettings: '"tnum"' }}
      >
        {displayed}{suffix}
      </div>
      <p style={{ color: "var(--color-text-secondary)", fontSize: "14px", fontWeight: 500 }}>{label}</p>
    </motion.div>
  );
}
