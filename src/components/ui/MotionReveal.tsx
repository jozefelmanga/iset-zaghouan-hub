"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { enterAnimation } from "@/lib/motion";

interface MotionRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

/** Thin client wrapper — use inside Server Component pages for enter animations. */
export function MotionReveal({ children, delay = 0, className }: MotionRevealProps) {
  return (
    <motion.div {...enterAnimation(delay)} className={className}>
      {children}
    </motion.div>
  );
}
