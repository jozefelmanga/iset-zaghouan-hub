export type StageCompany = {
  name: string;
  address?: string;
  city?: string;
  /** Governorate (or country abroad) used for filtering; normalized at build time. */
  region?: string;
  phone?: string;
  email?: string;
  website?: string;
};
