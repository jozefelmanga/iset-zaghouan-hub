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
