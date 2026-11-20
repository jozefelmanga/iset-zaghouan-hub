"use client";

import Link from "next/link";

/** Shown inside the site layout if a page crashes, instead of a blank screen. */
export default function PageError({ reset }: { error: Error; reset: () => void }) {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-md flex-col items-center justify-center px-6 py-16 text-center">
      <p className="text-5xl" aria-hidden="true">😕</p>
      <h1 className="mt-4 text-xl font-bold text-[var(--color-text)]">صار مشكل في الصفحة</h1>
      <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-secondary)]">
        عاود جرّب. كان المشكل يبقى، ارجع للصفحة الرئيسية.
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <button
          type="button"
          onClick={reset}
          className="cursor-pointer rounded-xl bg-[var(--color-primary-bg)] px-5 py-2.5 text-sm font-bold text-white"
        >
          عاود جرّب
        </button>
        <Link
          href="/"
          className="rounded-xl border border-[var(--color-border)] px-5 py-2.5 text-sm font-semibold text-[var(--color-text)] no-underline"
        >
          الصفحة الرئيسية
        </Link>
      </div>
    </div>
  );
}
