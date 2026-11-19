"use client";

import { useMemo, useState } from "react";
import { Search, MapPin, Phone, Mail, ExternalLink, Building2, Download } from "@/lib/icons";
import { Card } from "@/components/ui/shared";
import { stageCompanies } from "@/data/stage-companies";

const PAGE_SIZE = 24;
const ABROAD = "abroad";

/** Arabic names, so students can search "سوسة" or "فرنسا" as well as the French name. */
const REGION_AR: Record<string, string> = {
  Tunis: "تونس",
  Ariana: "أريانة",
  "Ben Arous": "بن عروس",
  Sousse: "سوسة",
  Monastir: "المنستير",
  Nabeul: "نابل",
  Sfax: "صفاقس",
  Mahdia: "المهدية",
  Béja: "باجة",
  Gabès: "قابس",
  Zaghouan: "زغوان",
  Médenine: "مدنين",
  France: "فرنسا",
  Allemagne: "ألمانيا",
  "Royaume-Uni": "بريطانيا",
  Canada: "كندا",
  Égypte: "مصر",
  Maroc: "المغرب",
  Turquie: "تركيا",
};
const ABROAD_REGIONS = new Set(["France", "Allemagne", "Royaume-Uni", "Canada", "Égypte", "Maroc", "Turquie"]);

/** Case-, accent- and punctuation-insensitive form; also folds Arabic letter variants. */
function fold(text: string) {
  return text
    .normalize("NFD")
    .replace(/[̀-ًͯ-ٟ]/g, "")
    .toLowerCase()
    .replace(/[أإآ]/g, "ا")
    .replace(/ة/g, "ه")
    .replace(/ى/g, "ي")
    .replace(/[^\p{L}\p{N}@.]+/gu, " ")
    .trim();
}

const indexed = stageCompanies.map((company) => {
  const regionAr = company.region ? REGION_AR[company.region] : undefined;
  return {
    company,
    name: fold(company.name),
    haystack: fold(
      [
        company.name,
        company.city,
        company.region,
        regionAr,
        company.region && ABROAD_REGIONS.has(company.region) ? "خارج تونس abroad etranger" : undefined,
        company.address,
        company.phone,
        company.phone?.replace(/\D/g, ""),
        company.email,
        company.website,
      ]
        .filter(Boolean)
        .join(" ")
    ),
  };
});

function regionMatches(region: string | undefined, filter: string) {
  if (filter === ABROAD) return !!region && ABROAD_REGIONS.has(region);
  return region === filter;
}

function formatWebsite(url: string) {
  return url.replace(/^https?:\/\//i, "").replace(/\/$/, "");
}

export function InternshipCompanySearch() {
  const [query, setQuery] = useState("");
  const [cityFilter, setCityFilter] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  // Tunisian regions by size, then one chip for every company abroad.
  const regions = useMemo(() => {
    const counts = new Map<string, number>();
    let abroad = 0;
    for (const { region } of stageCompanies) {
      if (!region) continue;
      if (ABROAD_REGIONS.has(region)) abroad++;
      else counts.set(region, (counts.get(region) ?? 0) + 1);
    }
    const list = [...counts.entries()]
      .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0], "fr"))
      .map(([value, count]) => ({ value, label: value, count }));
    if (abroad) list.push({ value: ABROAD, label: "خارج تونس", count: abroad });
    return list;
  }, []);

  const filtered = useMemo(() => {
    const tokens = fold(query).split(" ").filter(Boolean);
    const matches = indexed.filter(({ company, haystack }) => {
      if (cityFilter && !regionMatches(company.region, cityFilter)) return false;
      // Every word must appear somewhere, in any order.
      return tokens.every((token) => haystack.includes(token));
    });
    if (!tokens.length) return matches.map((m) => m.company);
    // Companies whose name matches come first, name-prefix matches before the rest.
    const q = tokens.join(" ");
    const rank = (name: string) => (name.startsWith(q) ? 0 : tokens.every((t) => name.includes(t)) ? 1 : 2);
    return matches
      .map((m, i) => ({ m, i, r: rank(m.name) }))
      .sort((a, b) => a.r - b.r || a.i - b.i)
      .map(({ m }) => m.company);
  }, [query, cityFilter]);

  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  return (
    <div id="company-directory">
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
        <p style={{ fontSize: "13px", color: "var(--color-text-muted)", lineHeight: 1.6, flex: "1 1 220px" }}>
          دليل شركات من مصالح التربصات — {stageCompanies.length} شركة. دوّر بالاسم، المدينة، أو العنوان.
        </p>
        <a
          href="/documents/stages/sociétés_final.xlsx"
          download
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            padding: "8px 14px",
            borderRadius: "10px",
            fontSize: "12px",
            fontWeight: 600,
            background: "rgba(99,102,241,0.08)",
            color: "color-mix(in srgb, #6366F1, #fff var(--text-lift))",
            border: "1px solid rgba(99,102,241,0.2)",
            textDecoration: "none",
            flexShrink: 0,
          }}
        >
          <Download size={14} strokeWidth={2} />
          تحميل القائمة الكاملة
        </a>
      </div>

      <div style={{ position: "relative", marginBottom: "14px" }}>
        <label htmlFor="company-search" className="sr-only">
          البحث عن شركة
        </label>
        <Search
          size={16}
          style={{ position: "absolute", right: "14px", top: "50%", transform: "translateY(-50%)", color: "var(--color-text-muted)" }}
          strokeWidth={2}
          aria-hidden="true"
        />
        <input
          id="company-search"
          type="search"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setVisibleCount(PAGE_SIZE);
          }}
          placeholder="دوّر على شركة، مدينة (Sousse أو سوسة)، عنوان، تليفون..."
          style={{
            width: "100%",
            padding: "12px 40px 12px 14px",
            borderRadius: "12px",
            border: "1px solid var(--color-border)",
            background: "var(--color-background)",
            fontSize: "14px",
            fontFamily: "var(--font-sans)",
            color: "var(--color-text)",
          }}
        />
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "16px", maxHeight: "120px", overflowY: "auto" }}>
        <button
          type="button"
          onClick={() => {
            setCityFilter(null);
            setVisibleCount(PAGE_SIZE);
          }}
          style={{
            padding: "5px 12px",
            borderRadius: "999px",
            fontSize: "12px",
            fontWeight: 600,
            cursor: "pointer",
            fontFamily: "var(--font-sans)",
            background: !cityFilter ? "rgba(99,102,241,0.15)" : "var(--color-background)",
            color: !cityFilter ? "color-mix(in srgb, #6366F1, #fff var(--text-lift))" : "var(--color-text)",
            border: !cityFilter ? "1px solid rgba(99,102,241,0.4)" : "1px solid var(--color-border)",
          }}
        >
          الكل
        </button>
        {regions.map(({ value: city, label, count }) => (
          <button
            key={city}
            type="button"
            aria-pressed={cityFilter === city}
            onClick={() => {
              setCityFilter(cityFilter === city ? null : city);
              setVisibleCount(PAGE_SIZE);
            }}
            style={{
              padding: "5px 12px",
              borderRadius: "999px",
              fontSize: "12px",
              fontWeight: 600,
              cursor: "pointer",
              fontFamily: "var(--font-sans)",
              background: cityFilter === city ? "rgba(99,102,241,0.15)" : "var(--color-background)",
              color: cityFilter === city ? "color-mix(in srgb, #6366F1, #fff var(--text-lift))" : "var(--color-text-muted)",
              border: cityFilter === city ? "1px solid rgba(99,102,241,0.4)" : "1px solid var(--color-border)",
            }}
          >
            {label} <span style={{ fontWeight: 500 }}>({count})</span>
          </button>
        ))}
      </div>

      <p style={{ fontSize: "12px", fontWeight: 600, color: "var(--color-text-muted)", marginBottom: "14px" }}>
        {filtered.length} نتيجة
      </p>

      {visible.length > 0 ? (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "12px" }}>
          {visible.map((company) => (
            <Card key={`${company.name}-${company.city ?? ""}-${company.phone ?? ""}`} elevation="raised" padding="16px">
              <div style={{ display: "flex", alignItems: "flex-start", gap: "10px", marginBottom: "10px" }}>
                <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: "rgba(99,102,241,0.10)", color: "color-mix(in srgb, #6366F1, #fff var(--text-lift))", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Building2 size={16} strokeWidth={2} />
                </div>
                <div style={{ minWidth: 0 }}>
                  <p style={{ fontWeight: 700, fontSize: "14px", color: "var(--color-text)", lineHeight: 1.4 }}>{company.name}</p>
                  {(company.city || company.region) && (
                    <p style={{ display: "flex", alignItems: "center", gap: "4px", fontSize: "12px", color: "var(--color-secondary-text)", fontWeight: 600, marginTop: "4px" }}>
                      <MapPin size={12} strokeWidth={2} />
                      {company.city ?? company.region}
                    </p>
                  )}
                </div>
              </div>

              {company.address && (
                <p style={{ fontSize: "12px", color: "var(--color-text-secondary)", lineHeight: 1.5, marginBottom: "10px" }}>
                  {company.address}
                </p>
              )}

              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                {company.phone && (
                  <a
                    href={`tel:${company.phone.replace(/[^\d+]/g, "")}`}
                    dir="ltr"
                    style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px", fontWeight: 600, color: "var(--color-text)", textDecoration: "none" }}
                  >
                    <Phone size={12} strokeWidth={2} style={{ color: "var(--color-secondary-text)", flexShrink: 0 }} />
                    {company.phone}
                  </a>
                )}
                {company.email && (
                  <a
                    href={`mailto:${company.email}`}
                    dir="ltr"
                    style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "var(--color-text-secondary)", textDecoration: "none", wordBreak: "break-all" }}
                  >
                    <Mail size={12} strokeWidth={2} style={{ color: "var(--color-secondary-text)", flexShrink: 0 }} />
                    {company.email}
                  </a>
                )}
                {company.website && (
                  <a
                    href={company.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    dir="ltr"
                    style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "color-mix(in srgb, #6366F1, #fff var(--text-lift))", textDecoration: "none", wordBreak: "break-all" }}
                  >
                    <ExternalLink size={12} strokeWidth={2} style={{ flexShrink: 0 }} />
                    {formatWebsite(company.website)}
                  </a>
                )}
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <Card elevation="flat" padding="24px">
          <p style={{ textAlign: "center", fontSize: "14px", color: "var(--color-text-muted)" }}>
            ما لقيناش شركة بهالمعايير. جرّب كلمة أخرى أو شيل الفلتر.
          </p>
          {(query || cityFilter) && (
            <div style={{ display: "flex", justifyContent: "center", marginTop: "12px" }}>
              <button
                type="button"
                onClick={() => {
                  setQuery("");
                  setCityFilter(null);
                  setVisibleCount(PAGE_SIZE);
                }}
                style={{
                  padding: "8px 16px",
                  borderRadius: "10px",
                  border: "1px solid rgba(99,102,241,0.3)",
                  background: "rgba(99,102,241,0.08)",
                  color: "color-mix(in srgb, #6366F1, #fff var(--text-lift))",
                  fontSize: "12px",
                  fontWeight: 600,
                  cursor: "pointer",
                  fontFamily: "var(--font-sans)",
                }}
              >
                امسح البحث و الفلتر
              </button>
            </div>
          )}
        </Card>
      )}

      {hasMore && (
        <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
          <button
            type="button"
            onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
            style={{
              padding: "10px 20px",
              borderRadius: "10px",
              border: "1px solid var(--color-border)",
              background: "var(--color-surface)",
              fontSize: "13px",
              fontWeight: 600,
              color: "var(--color-text)",
              cursor: "pointer",
              fontFamily: "var(--font-sans)",
            }}
          >
            عرض المزيد ({filtered.length - visibleCount} متبقية)
          </button>
        </div>
      )}
    </div>
  );
}
