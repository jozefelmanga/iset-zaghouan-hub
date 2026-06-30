import { stageCompanies } from "@/data/stage-companies";

/**
 * Crawlable company index — rendered in static HTML for search engines and LLMs.
 * Visually hidden; interactive search UI remains the primary experience.
 */
export function InternshipCompanySeoIndex() {
  return (
    <section aria-label="فهرس شركات الستاج" className="sr-only">
      <h2>دليل شركات الستاج في ISET Zaghouan</h2>
      <ul>
        {stageCompanies.map((company, index) => (
          <li key={`${company.name}-${company.city ?? ""}-${index}`}>
            <h3>{company.name}</h3>
            {company.city && <p>{company.city}</p>}
            {company.address && <p>{company.address}</p>}
            {company.phone && <p>{company.phone}</p>}
            {company.email && <p>{company.email}</p>}
            {company.website && <p>{company.website}</p>}
          </li>
        ))}
      </ul>
    </section>
  );
}
