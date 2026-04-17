import { cn } from "@/lib/utils";

export function TechBadge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-1 text-xs font-mono font-medium rounded-md bg-muted text-muted-foreground border border-border",
        className
      )}
    >
      {children}
    </span>
  );
}
