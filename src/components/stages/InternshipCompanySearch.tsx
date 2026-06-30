"use client";

import { useMemo, useState } from "react";
import { Search, MapPin, Phone, Mail, ExternalLink, Building2, Download } from "@/lib/icons";
import { Card } from "@/components/ui/shared";
import { stageCompanies } from "@/data/stage-companies";

const PAGE_SIZE = 24;

function normalize(text: string) {
  return text.toLowerCase();
}

function formatWebsite(url: string) {
  return url.replace(/^https?:\/\//i, "").replace(/\/$/, "");
}

export function InternshipCompanySearch() {
  const [query, setQuery] = useState("");
  const [cityFilter, setCityFilter] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const cities = useMemo(() => {
    const counts = new Map<string, number>();
    for (const company of stageCompanies) {
      if (!company.city) continue;
      const key = company.city.trim();
      counts.set(key, (counts.get(key) ?? 0) + 1);
    }
    return [...counts.entries()]
      .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0], "fr"))
      .map(([city]) => city);
  }, []);

  const filtered = useMemo(() => {
    const q = normalize(query.trim());
    return stageCompanies.filter((company) => {
      if (cityFilter && company.city?.toLowerCase() !== cityFilter.toLowerCase()) {
        return false;
      }
      if (!q) return true;
      const haystack = normalize(
        [company.name, company.city, company.address, company.phone, company.email, company.website]
          .filter(Boolean)
          .join(" ")
      );
      return haystack.includes(q);
    });
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
            color: "#6366F1",
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
          placeholder="دوّر على شركة، مدينة، عنوان..."
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
            color: !cityFilter ? "#6366F1" : "var(--color-text)",
            border: !cityFilter ? "1px solid rgba(99,102,241,0.4)" : "1px solid var(--color-border)",
          }}
        >
          الكل
        </button>
        {cities.slice(0, 12).map((city) => (
          <button
            key={city}
            type="button"
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
              color: cityFilter === city ? "#6366F1" : "var(--color-text-muted)",
              border: cityFilter === city ? "1px solid rgba(99,102,241,0.4)" : "1px solid var(--color-border)",
            }}
          >
            {city}
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
                <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: "rgba(99,102,241,0.10)", color: "#6366F1", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Building2 size={16} strokeWidth={2} />
                </div>
                <div style={{ minWidth: 0 }}>
                  <p style={{ fontWeight: 700, fontSize: "14px", color: "var(--color-text)", lineHeight: 1.4 }}>{company.name}</p>
                  {company.city && (
                    <p style={{ display: "flex", alignItems: "center", gap: "4px", fontSize: "12px", color: "var(--color-secondary)", fontWeight: 600, marginTop: "4px" }}>
                      <MapPin size={12} strokeWidth={2} />
                      {company.city}
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
                    <Phone size={12} strokeWidth={2} style={{ color: "var(--color-secondary)", flexShrink: 0 }} />
                    {company.phone}
                  </a>
                )}
                {company.email && (
                  <a
                    href={`mailto:${company.email}`}
                    dir="ltr"
                    style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "var(--color-text-secondary)", textDecoration: "none", wordBreak: "break-all" }}
                  >
                    <Mail size={12} strokeWidth={2} style={{ color: "var(--color-secondary)", flexShrink: 0 }} />
                    {company.email}
                  </a>
                )}
                {company.website && (
                  <a
                    href={company.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    dir="ltr"
                    style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "#6366F1", textDecoration: "none", wordBreak: "break-all" }}
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
