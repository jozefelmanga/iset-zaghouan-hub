import type { StageCompany } from "@/types/stage-company";
import companies from "./stage-companies.json";

export const stageCompanies = companies as StageCompany[];

export const stageCompanyCount = stageCompanies.length;
