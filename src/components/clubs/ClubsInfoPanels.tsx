import type { ReactNode } from "react";
import { CheckCircle2, ChevronDown } from "@/lib/icons";
import { clubMeta } from "@/data/clubs";

function InfoPanel({ title, children, defaultOpen = false }: { title: string; children: ReactNode; defaultOpen?: boolean }) {
  return (
    <details className="group rounded-2xl border border-border bg-surface shadow-[var(--shadow-card)]" open={defaultOpen}>
      <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-4 py-3.5 text-[15px] font-bold text-text md:px-5 md:py-4 [&::-webkit-details-marker]:hidden">
        <span>{title}</span>
        <ChevronDown
          size={18}
          className="shrink-0 text-text-muted transition-transform duration-200 group-open:rotate-180"
        />
      </summary>
      <div className="border-t border-border px-4 pb-4 pt-3 md:px-5 md:pb-5">{children}</div>
    </details>
  );
}

/** Compact FAQ panels above the club directory. */
export function ClubsInfoPanels() {
  return (
    <div className="flex flex-col gap-4">
      <InfoPanel title="علاش تنضم لنادي؟">
        <ul className="mb-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
          {clubMeta.benefits.map((b) => (
            <li key={b} className="flex items-start gap-2 text-[13px] leading-snug text-text">
              <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-success" strokeWidth={2.5} />
              <span>{b}</span>
            </li>
          ))}
        </ul>

        <p className="mb-2 text-[12px] font-bold uppercase tracking-wide text-text-muted">
          مهارات تكتسبها
        </p>
        <div className="flex flex-wrap gap-2">
          {clubMeta.skills.map((s) => (
            <span
              key={s}
              className="rounded-full border border-[rgba(246,180,27,0.25)] bg-[rgba(246,180,27,0.10)] px-3 py-1 text-[12px] font-semibold text-[#B45309]"
            >
              {s}
            </span>
          ))}
        </div>
      </InfoPanel>

      <InfoPanel title="كيفاش ننضم لنادي؟">
        <ul className="flex flex-col gap-3 text-[13px] leading-relaxed text-text-secondary">
          <li className="flex items-start gap-2">
            <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-success" strokeWidth={2.5} />
            <span>
              كل نادي يفتح <strong className="text-text">التسجيل في بداية السنة</strong> الجامعية — تابع الإعلانات متاعهم باش ما تفلتش الفرصة.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-success" strokeWidth={2.5} />
            <span>
              بعض النوادي عندها <strong className="text-text">مقابلة (interview)</strong> باش يقبلوك، و بعضهم ينضموا مباشرة بلا مقابلة — يختلف من نادي لنادي.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-success" strokeWidth={2.5} />
            <span>
              <strong className="text-text">تابعهم على السوشيال ميديا</strong> (Facebook، Instagram…) باش تبقى على اطلاع بالتسجيل، الأحداث، والأخبار.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-success" strokeWidth={2.5} />
            <span>
              وتنجم <strong className="text-text">تكتشفهم الكل في يوم الاندماج</strong> (Journée d&apos;intégration) — تظاهرة خاصة بالمعهد باش تتعرف على المعهد، النوادي، والأنشطة و تسأل مباشرة.
            </span>
          </li>
        </ul>
      </InfoPanel>
    </div>
  );
}
