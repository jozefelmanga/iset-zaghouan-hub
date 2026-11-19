import { Card } from "@/components/ui/shared";
import { busTimetables, busTimetableNotes, busTimetableSource, type BusRoute } from "@/data/transport";

/** Departure times as real text (readable by search engines, screen readers, and offline). */
export function BusTimetables() {
  return (
    <div style={{ marginBottom: "20px" }}>
      <p style={{ fontSize: "12px", color: "var(--color-text-muted)", marginBottom: "14px", lineHeight: 1.6 }}>
        {busTimetableSource.label}. ثبّت في الموقع الرسمي و صفحة Facebook قبل ما تخرج.
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "14px" }}>
        {busTimetables.map((route) => (
          <RouteCard key={route.id} route={route} />
        ))}
      </div>
      <ul style={{ display: "flex", flexWrap: "wrap", gap: "6px 16px", margin: "12px 0 0", padding: 0, listStyle: "none" }}>
        {busTimetableNotes.map((note) => (
          <li key={note.mark} style={{ fontSize: "12px", color: "var(--color-text-secondary)" }}>
            <strong>{note.mark}</strong> {note.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

function RouteCard({ route }: { route: BusRoute }) {
  const rows = Math.max(route.from.times.length, route.to.times.length);
  const cell = { padding: "6px 8px", textAlign: "center" as const, fontVariantNumeric: "tabular-nums", fontSize: "14px" };

  return (
    <Card elevation="flat" padding="16px">
      <h3 style={{ fontSize: "15px", fontWeight: 700, color: "var(--color-text)", marginBottom: "10px" }}>
        {route.name}{" "}
        <span style={{ fontSize: "12px", fontWeight: 500, color: "var(--color-text-muted)" }}>(خط {route.lines})</span>
      </h3>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <caption className="sr-only">
          توقيت الحافلات {route.name}
        </caption>
        <thead>
          <tr>
            {[route.from.label, route.to.label].map((label) => (
              <th
                key={label}
                scope="col"
                style={{ ...cell, fontSize: "12px", fontWeight: 700, color: "var(--color-secondary-text)", borderBottom: "1px solid var(--color-border)" }}
              >
                {label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: rows }, (_, i) => (
            <tr key={i} style={{ background: i % 2 ? "var(--color-background)" : "transparent" }}>
              {[route.from.times[i], route.to.times[i]].map((time, col) => (
                <td key={col} style={{ ...cell, color: "var(--color-text)" }}>
                  {/* ltr keeps "16:00①" and "05:00*" in reading order inside the RTL page */}
                  <span dir="ltr">{time ?? "—"}</span>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}
