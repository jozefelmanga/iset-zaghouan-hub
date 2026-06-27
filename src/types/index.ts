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
  abonnementDocs?: string[];
};

export type Internship = {
  year: number;
  name: string;
  duration: string;
  timing: string;
  weight: number;
  requirements: string[];
  docs: string[];
  note?: string;
};

export type FAQItem = {
  question: string;
  answer: string;
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
  email?: string;
  note?: string;
}
