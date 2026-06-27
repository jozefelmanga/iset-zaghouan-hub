interface PageContentPlaceholderProps {
  minHeight?: number;
  className?: string;
}

/** Lightweight loading shell for dynamically imported page content. */
export function PageContentPlaceholder({
  minHeight = 240,
  className = "",
}: PageContentPlaceholderProps) {
  return (
    <div
      className={`shimmer rounded-[20px] my-6 ${className}`.trim()}
      style={{ minHeight }}
      role="status"
      aria-label="تحميل..."
    />
  );
}
