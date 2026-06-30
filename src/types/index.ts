export type Step = {
  id: number;
  title: string;
  description: string;
  icon: string;
  checked: boolean;
};

export type Phase = {
  id: string;
  title: string;
  steps: string[];
};

export type TransportRoute = {
  id: string;
  name: string;
  type: "shared_taxi" | "bus";
  from: string;
  to: string;
  fare?: number;
  fareUnit?: string;
  schedule: string;
  notes: string;
  contact?: { name: string; phone: string };
  abonnement?: string;
};

export type InternshipDifficulty = "easy" | "medium" | "hard";

export type InternshipWorkload = {
  reportPages?: string;
  presentationMinutes?: string;
  journalEntries?: string;
  defenseMinutes?: string;
};

export type InternshipDeadline = {
  label: string;
  month: string;
  monthIndex: number;
};

export type Internship = {
  year: number;
  name: string;
  emoji: string;
  duration: string;
  durationDays?: number;
  timing: string;
  weight: number;
  difficulty: InternshipDifficulty;
  requirements: string[];
  docs: string[];
  objectives: string[];
  deliverables: string[];
  deadlines: InternshipDeadline[];
  faq: FAQItem[];
  workload: InternshipWorkload;
  note?: string;
  hasDedicatedPage?: boolean;
};

export type FAQRelatedLink = {
  href: string;
  label: string;
};

export type FAQItem = {
  question: string;
  answer: string;
  links?: FAQRelatedLink[];
};

export type HousingPlace = {
  name: string;
  gender: string;
  location: string;
  curfew?: string;
  deposit: number;
  features: string[];
  tips: string[];
  packingList: string[];
  docs: string[];
};

/* ============================================================
   SHARED UI TYPES (added in Phase 0)
   ============================================================ */

/** Category key used for color coding across cards, badges, and nav groups. */
export type Category = "academic" | "life" | "career" | "campus" | "primary";

/** A generic content card item. */
export interface ContentCard {
  title: string;
  description?: string;
  href?: string;
  category?: Category;
  badge?: string;
  featured?: boolean;
}

/** A single announcement/timeline entry. */
export interface Announcement {
  time: string;
  title: string;
  description: string;
  type?: "info" | "warning" | "success";
}

/** A location or spot on the Explore page. */
export interface ExploreSpot {
  name: string;
  category: "cafe" | "study" | "attraction" | "food" | "transport";
  description?: string;
  lat?: number;
  lng?: number;
}

/** A contact entry (emergency contacts, transport operators, etc.). */
export interface Contact {
  name: string;
  phone?: string;
  price?: string;
  email?: string;
  note?: string;
}
