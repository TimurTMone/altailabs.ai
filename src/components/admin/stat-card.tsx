import { LucideIcon } from "lucide-react";

interface StatCardProps {
  label: string;
  value: string | number;
  icon: LucideIcon;
  accent?: string;
}

export function StatCard({
  label,
  value,
  icon: Icon,
  accent = "var(--accent-cyan)",
}: StatCardProps) {
  return (
    <div className="glow-card p-6">
      <div className="flex items-center justify-between">
        <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
          {label}
        </div>
        <Icon
          className="w-4 h-4"
          style={{ color: accent }}
        />
      </div>
      <div
        className="mt-3 text-3xl font-bold font-mono tabular-nums"
        style={{ color: accent }}
      >
        {value}
      </div>
    </div>
  );
}
