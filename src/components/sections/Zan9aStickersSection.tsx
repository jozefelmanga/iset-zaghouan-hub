import { ArrowLeft } from "@/lib/icons";

const ZAN9A_URL = "https://zan9a.tn/?utm_source=guideisetzg&utm_medium=banner&utm_campaign=homepage";

/**
 * Stickers on the blue tile panel, laid out in a wrapping row with gaps so
 * none overlap at any width (slight tilt for a hand-stuck look).
 */
const STICKERS = [
  { src: "full-mark", w: 220, h: 131, size: "w-[64px] sm:w-[100px]", tilt: "-rotate-[6deg]" },
  { src: "cs-tears", w: 158, h: 220, size: "w-[38px] sm:w-[58px]", tilt: "rotate-[7deg]" },
  { src: "harissa", w: 164, h: 220, size: "w-[40px] sm:w-[60px]", tilt: "-rotate-[4deg]" },
  { src: "khomsa", w: 188, h: 220, size: "w-[32px] sm:w-[48px]", tilt: "rotate-[8deg]" },
  { src: "graduation-loading", w: 220, h: 120, size: "w-[64px] sm:w-[100px]", tilt: "rotate-[5deg]" },
  { src: "chilli", w: 126, h: 220, size: "hidden sm:block sm:w-[26px]", tilt: "rotate-[16deg]" },
] as const;

// Keep in sync with zan9a.tn (rating, customers).
const PERKS = ["★ 4.7", "+1000 زبون"];

export function Zan9aStickersSection() {
  return (
    <section className="section-reveal mb-16">
      <a
        href={ZAN9A_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="group grid overflow-hidden rounded-[20px] border border-[var(--color-border)] bg-[var(--color-surface)] no-underline shadow-[var(--shadow-card)] transition-shadow hover:shadow-[var(--shadow-hover)] lg:grid-cols-[minmax(0,1fr)_minmax(0,42%)]"
      >
        {/* Blue Tunisian tile panel with stickers (top strip; left side on large screens) */}
        <div
          aria-hidden="true"
          className="zan9a-tiles flex min-h-[120px] flex-wrap content-center items-center justify-center gap-x-3 gap-y-5 px-2.5 py-5 sm:gap-x-6 lg:order-2 lg:min-h-[240px] lg:gap-y-6 lg:p-6"
        >
          {STICKERS.map((s) => (
            <img
              key={s.src}
              src={`/images/zan9a/${s.src}.webp`}
              alt=""
              width={s.w}
              height={s.h}
              loading="lazy"
              decoding="async"
              className={`h-auto shrink-0 ${s.size} ${s.tilt} drop-shadow-[0_4px_6px_rgba(0,0,0,0.28)] transition-[rotate,scale] duration-300 ease-out group-hover:rotate-0 group-hover:scale-105`}
            />
          ))}
        </div>

        <div className="p-4 sm:p-6">
          <div className="flex items-center gap-2.5">
            <img src="/images/zan9a/logo.webp" alt="Zan9a" width={120} height={121} loading="lazy" className="h-10 w-10" />
            <span className="text-[12px] font-bold tracking-wide text-[var(--color-text-muted)]">ستيكرز تونسية · zan9a.tn</span>
          </div>

          <h2 className="mt-3 text-[24px] font-black leading-[1.2] text-[var(--color-text)] sm:text-[28px]">
            البيسي متاعك يستاهل <span className="text-[#EA580C]">ستيكر</span>
          </h2>
          <p className="mt-1.5 text-[13.5px] leading-relaxed text-[var(--color-text-secondary)] sm:text-[14.5px]">
            أكثر من 2000 ستيكر: تونس، قراية، كود و برشا حاجات أخرى.
          </p>

          <ul className="mt-3.5 flex flex-wrap gap-1.5">
            {PERKS.map((perk) => (
              <li
                key={perk}
                className="rounded-full border border-[var(--color-border)] bg-[var(--color-background)] px-2.5 py-1 text-[12px] font-semibold text-[var(--color-text-secondary)]"
              >
                {perk}
              </li>
            ))}
          </ul>

          <span className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-[#C2410C] px-4 py-3 text-[14.5px] font-extrabold text-white transition-colors group-hover:bg-[#9A3412]">
            اطلب من zan9a.tn
            <ArrowLeft size={16} strokeWidth={2.5} aria-hidden="true" />
          </span>
        </div>
      </a>
    </section>
  );
}
