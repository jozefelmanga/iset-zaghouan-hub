import type { LucideIcon } from "@/lib/icons";
import {
  Globe,
  Briefcase,
  MessageCircle,
  Clock,
  Code,
  Coins,
  FlaskConical,
  BookOpen,
  Coffee,
  Mountain,
  Camera,
  Store,
  Dumbbell,
  FileText,
  Building2,
  Banknote,
  Bus,
  UtensilsCrossed,
  Users,
  Award,
  GraduationCap,
  HelpCircle,
  MapPin,
  Heart,
  Sparkles,
  CreditCard,
  Stethoscope,
  IdCard,
} from "@/lib/icons";

export const clubBenefitIcons: Record<string, LucideIcon> = {
  globe: Globe,
  briefcase: Briefcase,
  "message-circle": MessageCircle,
  clock: Clock,
};

export const departmentIcons: Record<string, LucideIcon> = {
  code: Code,
  coins: Coins,
  flask: FlaskConical,
};

export const exploreServiceIcons: Record<string, LucideIcon> = {
  store: Store,
  camera: Camera,
  book: BookOpen,
  dumbbell: Dumbbell,
};

export const studySpotIcons: LucideIcon[] = [BookOpen, Coffee, Mountain, Camera, Store, Dumbbell];

export const quickActionIcons: Record<string, LucideIcon> = {
  "file-text": FileText,
  building: Building2,
  banknote: Banknote,
  bus: Bus,
  briefcase: Briefcase,
  "book-open": BookOpen,
};

export const campusServiceIcons: Record<string, LucideIcon> = {
  utensils: UtensilsCrossed,
  "book-open": BookOpen,
  users: Users,
  award: Award,
};

export const externalResourceIcons: Record<string, LucideIcon> = {
  "book-open": BookOpen,
  briefcase: Briefcase,
};

/** Icon keys for StaticPageHeader — pass string keys from Server Component pages. */
export const pageHeaderIcons: Record<string, LucideIcon> = {
  "graduation-cap": GraduationCap,
  "help-circle": HelpCircle,
  "map-pin": MapPin,
  users: Users,
  award: Award,
  heart: Heart,
  sparkles: Sparkles,
  "book-open": BookOpen,
  utensils: UtensilsCrossed,
  banknote: Banknote,
  bus: Bus,
  building: Building2,
  briefcase: Briefcase,
  "file-text": FileText,
  code: Code,
  coins: Coins,
  flask: FlaskConical,
};

export const enrollmentStepIcons: Record<string, LucideIcon> = {
  FileText,
  CreditCard,
  BookOpen,
  Stethoscope,
  IdCard,
};
