import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MotionRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

/** CSS-only enter animation — no Framer Motion (Server Component safe). */
export function MotionReveal({ children, delay = 0, className }: MotionRevealProps) {
  return (
    <div className={cn("motion-reveal", className)} style={{ animationDelay: `${delay}s` }}>
      {children}
    </div>
  );
}
