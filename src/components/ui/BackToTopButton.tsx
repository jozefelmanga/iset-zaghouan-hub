"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "@/lib/icons";

export function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`fixed bottom-[90px] right-4 z-40 transition-all duration-300 md:hidden ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
      }`}
    >
      <button
        onClick={scrollToTop}
        className="w-12 h-12 rounded-full bg-[#12B8C8] text-white flex items-center justify-center shadow-lg hover:bg-[#12B8C8]/90 active:scale-90 transition-all outline-none border border-white/20"
        aria-label="العودة للأعلى"
      >
        <ArrowUp size={24} strokeWidth={2.5} />
      </button>
    </div>
  );
}
