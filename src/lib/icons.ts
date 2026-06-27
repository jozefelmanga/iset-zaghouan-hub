/**
 * Icon Hub — Single re-export point for all Lucide icons used in this project.
 *
 * Rules:
 *  - Import ALL icons from here, never directly from "lucide-react".
 *  - When you need a new icon, add it here first, then import from "@/lib/icons".
 *  - This makes icon audits, replacements, and bundle analysis trivial.
 *
 * Usage:
 *   import { Home, Bus, BookOpen } from "@/lib/icons";
 */

export {
  // Navigation & Layout
  Home,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  ArrowDown,
  ExternalLink,

  // Academic
  GraduationCap,
  BookOpen,
  FileText,
  Award,
  Printer,
  Copy,
  Globe,

  // Student Life
  Building2,
  Banknote,
  Bus,
  UtensilsCrossed,
  Users,
  Heart,

  // Career
  Briefcase,
  Code,
  Coins,
  FlaskConical,
  Layers,

  // Campus & Explore
  MapPin,
  Map,
  Compass,
  Coffee,
  Camera,
  Mountain,
  Store,
  Dumbbell,
  Image as ImageIcon,
  Play,
  Instagram,
  Phone,
  MessageCircle,
  Lightbulb,
  DoorOpen,

  // UI Feedback
  HelpCircle,
  AlertCircle,
  AlertTriangle,
  CheckCircle2,
  Circle,
  Info,
  Bell,
  Star,
  Sparkles,

  // Search & Actions
  Search,
  Plus,
  Minus,
  Edit,
  Trash2,
  Download,
  Upload,
  Share2,
  Filter,

  // Identity & Social
  CreditCard,
  Stethoscope,
  IdCard,
  Calendar,
  Clock,
  TrendingUp,
  Loader2,
} from "lucide-react";

export type { LucideIcon } from "lucide-react";
