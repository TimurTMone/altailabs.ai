"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Inbox,
  MessageSquare,
  ArrowUpRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/leads", label: "Leads", icon: Inbox },
  { href: "/admin/chats", label: "AI Chats", icon: MessageSquare },
];

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-60 shrink-0 border-r border-border min-h-screen flex flex-col">
      {/* Logo */}
      <div className="p-5 border-b border-border">
        <Link href="/" className="font-mono text-sm font-bold tracking-tight">
          altai<span className="text-accent-cyan">.</span>labs
        </Link>
        <div className="mt-1 text-xs text-muted-foreground">Admin</div>
      </div>

      {/* Nav */}
      <nav className="flex-1 p-3 space-y-1">
        {navItems.map((item) => {
          const active =
            item.href === "/admin"
              ? pathname === "/admin"
              : pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2 text-sm rounded-md transition-colors",
                active
                  ? "bg-accent-cyan-glow text-accent-cyan"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              <item.icon className="w-4 h-4" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Back to site */}
      <div className="p-3 border-t border-border">
        <Link
          href="/"
          className="flex items-center justify-between px-3 py-2 text-sm rounded-md text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
        >
          Back to site
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </aside>
  );
}
