import { Phone } from "@/lib/icons";
import { MotionReveal } from "@/components/ui/MotionReveal";
import type { Contact } from "@/types";

export function EmergencyContacts({ contacts }: { contacts: Contact[] }) {
  return (
    <div style={{ marginBottom: "28px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "18px" }}>
        <div style={{ width: "34px", height: "34px", borderRadius: "50%", background: "rgba(239,68,68,0.10)", color: "#EF4444", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Phone size={16} strokeWidth={2} />
        </div>
        <span style={{ fontWeight: 700, fontSize: "17px", color: "var(--color-text)" }}>أرقام مهمة</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {contacts.map((contact, i) => (
          <MotionReveal key={contact.name} delay={i * 0.06}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "16px 20px",
                borderRadius: "14px",
                background: "var(--color-surface)",
                border: "1px solid var(--color-border)",
                boxShadow: "var(--shadow-card)",
                gap: "12px",
              }}
            >
              <div>
                <p style={{ fontWeight: 600, fontSize: "14px", color: "var(--color-text)", marginBottom: "3px" }}>{contact.name}</p>
                <p style={{ fontSize: "12px", color: "var(--color-text-muted)" }}>{contact.note}</p>
              </div>
              {contact.phone && contact.phone !== "-" && (
                <a
                  href={`tel:${contact.phone.replace(/[^0-9]/g, "")}`}
                  className="transition-opacity hover:opacity-85"
                  style={{
                    padding: "8px 18px",
                    borderRadius: "var(--radius-button)",
                    background: "var(--color-primary)",
                    color: "#fff",
                    fontSize: "13px",
                    fontWeight: 600,
                    textDecoration: "none",
                    flexShrink: 0,
                  }}
                >
                  {contact.phone}
                </a>
              )}
              {contact.price && (
                <span
                  style={{
                    padding: "8px 18px",
                    borderRadius: "var(--radius-button)",
                    background: "rgba(11,31,58,0.08)",
                    color: "var(--color-primary)",
                    fontSize: "13px",
                    fontWeight: 700,
                    flexShrink: 0,
                  }}
                >
                  {contact.price}
                </span>
              )}
            </div>
          </MotionReveal>
        ))}
      </div>
    </div>
  );
}
