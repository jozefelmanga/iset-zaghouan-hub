import { stageCompanies, stageCompanyCount } from "@/data/stage-companies";

/**
 * Full company list in the static HTML (for search engines, LLMs and anyone
 * who prefers browsing to searching). Collapsed by default under the search;
 * visible on demand rather than hidden, since hidden text is an SEO risk.
 */
export function InternshipCompanySeoIndex() {
  return (
    <details className="group mt-8 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-5 py-4 text-[15px] font-bold text-[var(--color-text)] [&::-webkit-details-marker]:hidden">
        <h2 className="text-[15px] font-bold">كل الشركات ({stageCompanyCount})</h2>
        <span aria-hidden="true" className="text-[var(--color-text-muted)] transition-[rotate] duration-200 group-open:rotate-180">
          ▾
        </span>
      </summary>
      <ul className="divide-y divide-[var(--color-border)] border-t border-[var(--color-border)] px-5">
        {stageCompanies.map((company, index) => (
          <li key={`${company.name}-${company.city ?? ""}-${index}`} className="py-3">
            <h3 className="text-[14px] font-semibold text-[var(--color-text)]">{company.name}</h3>
            <p className="mt-0.5 text-[12.5px] leading-relaxed text-[var(--color-text-secondary)]">
              {[company.city, company.address].filter(Boolean).join(" — ")}
            </p>
            {(company.phone || company.email || company.website) && (
              <p dir="ltr" className="mt-0.5 text-right text-[12.5px] text-[var(--color-text-secondary)]">
                {[company.phone, company.email, company.website].filter(Boolean).join(" · ")}
              </p>
            )}
          </li>
        ))}
      </ul>
    </details>
  );
}
