"use client";

import { useState } from "react";
import { CheckCircle, Circle, Mail } from "lucide-react";
import type { Lead } from "@/lib/kv";
import { cn } from "@/lib/utils";

interface Props {
  initialLeads: Lead[];
}

function formatDate(ts: number): string {
  return new Date(ts).toLocaleString(undefined, {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function LeadsTable({ initialLeads }: Props) {
  const [leads, setLeads] = useState(initialLeads);
  const [expanded, setExpanded] = useState<string | null>(null);
  const [filter, setFilter] = useState<"all" | "unhandled" | "handled">("all");

  const filtered = leads.filter((l) => {
    if (filter === "unhandled") return !l.handled;
    if (filter === "handled") return l.handled;
    return true;
  });

  async function toggleHandled(id: string, newVal: boolean) {
    setLeads((prev) =>
      prev.map((l) => (l.id === id ? { ...l, handled: newVal } : l))
    );
    await fetch("/api/admin/leads", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, handled: newVal }),
    });
  }

  if (leads.length === 0) {
    return (
      <div className="glow-card p-12 text-center">
        <Mail className="w-8 h-8 mx-auto text-muted-foreground" />
        <p className="mt-3 text-sm text-muted-foreground">
          No leads yet. They&apos;ll appear here when someone submits the
          contact form on the site.
        </p>
      </div>
    );
  }

  return (
    <>
      {/* Filters */}
      <div className="flex gap-2 mb-4">
        {(["all", "unhandled", "handled"] as const).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={cn(
              "px-3 py-1.5 text-xs font-mono rounded-md border transition-colors",
              filter === f
                ? "bg-accent-cyan text-black border-accent-cyan"
                : "border-border text-muted-foreground hover:text-foreground"
            )}
          >
            {f} ({f === "all" ? leads.length : leads.filter((l) => (f === "unhandled" ? !l.handled : l.handled)).length})
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="glow-card overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-muted/30 border-b border-border">
            <tr className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
              <th className="px-4 py-3 text-left w-10"></th>
              <th className="px-4 py-3 text-left">Name</th>
              <th className="px-4 py-3 text-left hidden md:table-cell">Email</th>
              <th className="px-4 py-3 text-left hidden lg:table-cell">Type</th>
              <th className="px-4 py-3 text-left hidden lg:table-cell">Scope</th>
              <th className="px-4 py-3 text-left">When</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {filtered.map((lead) => (
              <>
                <tr
                  key={lead.id}
                  onClick={() =>
                    setExpanded(expanded === lead.id ? null : lead.id)
                  }
                  className="cursor-pointer hover:bg-muted/20 transition-colors"
                >
                  <td className="px-4 py-3" onClick={(e) => e.stopPropagation()}>
                    <button
                      onClick={() => toggleHandled(lead.id, !lead.handled)}
                      aria-label={
                        lead.handled ? "Mark unhandled" : "Mark handled"
                      }
                    >
                      {lead.handled ? (
                        <CheckCircle className="w-4 h-4 text-green-500" />
                      ) : (
                        <Circle className="w-4 h-4 text-accent-amber" />
                      )}
                    </button>
                  </td>
                  <td className="px-4 py-3 font-medium">{lead.name}</td>
                  <td className="px-4 py-3 text-muted-foreground hidden md:table-cell">
                    {lead.email}
                  </td>
                  <td className="px-4 py-3 text-muted-foreground hidden lg:table-cell">
                    {lead.projectType}
                  </td>
                  <td className="px-4 py-3 text-muted-foreground hidden lg:table-cell">
                    {lead.budget}
                  </td>
                  <td className="px-4 py-3 font-mono text-xs text-muted-foreground">
                    {formatDate(lead.timestamp)}
                  </td>
                </tr>
                {expanded === lead.id && (
                  <tr className="bg-muted/20">
                    <td colSpan={6} className="px-6 py-5">
                      <div className="space-y-3 text-sm">
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div>
                            <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1">
                              Email
                            </div>
                            <a
                              href={`mailto:${lead.email}`}
                              className="text-accent-cyan hover:underline"
                            >
                              {lead.email}
                            </a>
                          </div>
                          <div>
                            <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1">
                              Collaboration
                            </div>
                            <div>{lead.projectType}</div>
                          </div>
                          <div>
                            <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1">
                              Scope
                            </div>
                            <div>{lead.budget}</div>
                          </div>
                          <div>
                            <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1">
                              Received
                            </div>
                            <div className="font-mono text-xs">
                              {new Date(lead.timestamp).toLocaleString()}
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1">
                            Message
                          </div>
                          <div className="whitespace-pre-wrap leading-relaxed">
                            {lead.message}
                          </div>
                        </div>
                        <div className="pt-2">
                          <a
                            href={`mailto:${lead.email}?subject=Re: Your inquiry to Altai Labs`}
                            className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium bg-accent-cyan text-black rounded-md hover:bg-accent-cyan/90 transition-colors"
                          >
                            <Mail className="w-3 h-3" />
                            Reply
                          </a>
                        </div>
                      </div>
                    </td>
                  </tr>
                )}
              </>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
