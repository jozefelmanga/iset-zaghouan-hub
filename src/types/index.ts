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
  fare: number;
  fareUnit: string;
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
