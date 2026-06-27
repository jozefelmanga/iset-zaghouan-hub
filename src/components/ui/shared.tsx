/**
 * Shared UI Components — Barrel File
 * 
 * Note: These components were previously defined inline in this monolithic file.
 * They have been extracted into individual modules inside `src/components/ui/`
 * during Phase 0 to improve maintainability.
 * 
 * This file is preserved as a re-export hub so existing page imports 
 * don't break. For new components, import directly from their files.
 */

export { SectionHeader } from "./SectionHeader";
export { Card } from "./Card";
export { ActionCard } from "./ActionCard";
export { StepItem } from "./StepItem";
export { Badge } from "./Badge";
export { Alert } from "./Alert";
export { StatCounter } from "./StatCounter";
export { EmptyState } from "./EmptyStates";
export { PageHeader } from "./PageHeader";
export { TimelineItem } from "./TimelineItem";
export { Button } from "./Button";
export { ImageGallery } from "./ImageGallery";
