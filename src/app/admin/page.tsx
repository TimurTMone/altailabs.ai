import { Inbox, MessageSquare, AlertCircle, Calendar } from "lucide-react";
import { StatCard } from "@/components/admin/stat-card";
import { getStats, getLeads, getChatSessions } from "@/lib/kv";
import Link from "next/link";

export const dynamic = "force-dynamic";

function formatRelative(timestamp: number): string {
  const diff = Date.now() - timestamp;
  const mins = Math.floor(diff / 60000);
  const hours = Math.floor(mins / 60);
  const days = Math.floor(hours / 24);
  if (mins < 1) return "just now";
  if (mins < 60) return `${mins}m ago`;
  if (hours < 24) return `${hours}h ago`;
  if (days < 7) return `${days}d ago`;
  return new Date(timestamp).toLocaleDateString();
}

export default async function AdminDashboard() {
  const [stats, recentLeads, recentChats] = await Promise.all([
    getStats(),
    getLeads(5),
    getChatSessions(5),
  ]);

  return (
    <div className="max-w-5xl">
      <div className="flex items-baseline justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-xs font-mono text-muted-foreground">
          Last updated: {new Date().toLocaleTimeString()}
        </p>
      </div>

      {/* Stats */}
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          label="Total Leads"
          value={stats.totalLeads}
          icon={Inbox}
        />
        <StatCard
          label="Unhandled"
          value={stats.unhandledLeads}
          icon={AlertCircle}
          accent="var(--accent-amber)"
        />
        <StatCard
          label="Leads Today"
          value={stats.leadsToday}
          icon={Calendar}
        />
        <StatCard
          label="AI Chat Sessions"
          value={stats.totalChats}
          icon={MessageSquare}
        />
      </div>

      {/* Recent Leads */}
      <section className="mt-10">
        <div className="flex items-baseline justify-between mb-4">
          <h2 className="text-lg font-semibold">Recent Leads</h2>
          <Link
            href="/admin/leads"
            className="text-xs text-accent-cyan hover:underline"
          >
            View all →
          </Link>
        </div>

        {recentLeads.length === 0 ? (
          <div className="glow-card p-8 text-center text-sm text-muted-foreground">
            No leads yet. They&apos;ll show up here when someone submits the
            contact form.
          </div>
        ) : (
          <div className="glow-card divide-y divide-border overflow-hidden">
            {recentLeads.map((lead) => (
              <Link
                key={lead.id}
                href="/admin/leads"
                className="block p-4 hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-sm truncate">
                        {lead.name}
                      </span>
                      {!lead.handled && (
                        <span className="px-1.5 py-0.5 text-[10px] font-mono rounded bg-accent-amber/10 text-accent-amber border border-accent-amber/20">
                          NEW
                        </span>
                      )}
                    </div>
                    <div className="text-xs text-muted-foreground truncate">
                      {lead.email} · {lead.projectType} · {lead.budget}
                    </div>
                  </div>
                  <div className="text-xs font-mono text-muted-foreground shrink-0">
                    {formatRelative(lead.timestamp)}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>

      {/* Recent Chats */}
      <section className="mt-10">
        <div className="flex items-baseline justify-between mb-4">
          <h2 className="text-lg font-semibold">Recent AI Chats</h2>
          <Link
            href="/admin/chats"
            className="text-xs text-accent-cyan hover:underline"
          >
            View all →
          </Link>
        </div>

        {recentChats.length === 0 ? (
          <div className="glow-card p-8 text-center text-sm text-muted-foreground">
            No chat sessions yet.
          </div>
        ) : (
          <div className="glow-card divide-y divide-border overflow-hidden">
            {recentChats.map((chat) => (
              <Link
                key={chat.sessionId}
                href="/admin/chats"
                className="block p-4 hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="min-w-0 flex-1">
                    <div className="font-mono text-xs text-muted-foreground">
                      {chat.sessionId.slice(0, 8)}
                    </div>
                    <div className="mt-1 text-sm truncate">
                      {chat.messages[0]?.content || "Empty session"}
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground shrink-0">
                    {chat.messageCount} msgs &middot;{" "}
                    {formatRelative(chat.lastSeen)}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
