"use client";

import type { ReactNode } from "react";
import { LazyMotion, MotionConfig } from "framer-motion";

const loadFeatures = () => import("@/lib/motion-features").then((mod) => mod.default);

/**
 * Components use the lightweight `m.*` elements; the animation features load
 * after the page in a separate chunk. `strict` throws if a full `motion.*`
 * component sneaks back in, which would pull the whole library into the bundle.
 * `reducedMotion="user"` skips movement for visitors who ask for reduced motion.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <LazyMotion features={loadFeatures} strict>
        {children}
      </LazyMotion>
    </MotionConfig>
  );
}
