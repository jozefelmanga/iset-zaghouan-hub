"use client";

import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  elevation?: "flat" | "raised" | "feature";
  padding?: string;
  style?: React.CSSProperties;
}

export function Card({ children, className = "", onClick, elevation = "raised", padding, style }: CardProps) {
  const elevationClass = {
    flat: "card-flat",
    raised: "card-raised",
    feature: "card-feature",
  }[elevation];

  return (
    <div
      onClick={onClick}
      className={`${elevationClass} ${className}`}
      style={{ ...style, ...(padding ? { padding } : {}) }}
    >
      {children}
    </div>
  );
}
