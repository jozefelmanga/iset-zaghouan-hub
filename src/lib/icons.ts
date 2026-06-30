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
  Link2,

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
  User,
  Heart,
  Shield,
  Leaf,
  Key,
  Wallet,
  Moon,
  PartyPopper,

  // Career
  Briefcase,
  Code,
  Bot,
  Cpu,
  Zap,
  Wrench,
  Coins,
  FlaskConical,
  Layers,
  Trophy,

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
  Facebook,
  Linkedin,
  Youtube,
  Phone,
  Mail,
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
  ZoomIn,

  // Identity & Social
  CreditCard,
  Stethoscope,
  IdCard,
  Calendar,
  Clock,
  Calculator,
  TrendingUp,
  Loader2,
} from "lucide-react";

export type { LucideIcon } from "lucide-react";
