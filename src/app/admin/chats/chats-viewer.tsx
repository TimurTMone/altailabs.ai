"use client";

import { useState } from "react";
import { MessageSquare } from "lucide-react";
import type { ChatSession } from "@/lib/kv";
import { cn } from "@/lib/utils";

interface Props {
  sessions: ChatSession[];
}

function formatRelative(ts: number): string {
  const diff = Date.now() - ts;
  const mins = Math.floor(diff / 60000);
  const hours = Math.floor(mins / 60);
  const days = Math.floor(hours / 24);
  if (mins < 1) return "just now";
  if (mins < 60) return `${mins}m ago`;
  if (hours < 24) return `${hours}h ago`;
  if (days < 7) return `${days}d ago`;
  return new Date(ts).toLocaleDateString();
}

export function ChatsViewer({ sessions }: Props) {
  const [selected, setSelected] = useState<string | null>(
    sessions[0]?.sessionId ?? null
  );

  if (sessions.length === 0) {
    return (
      <div className="glow-card p-12 text-center">
        <MessageSquare className="w-8 h-8 mx-auto text-muted-foreground" />
        <p className="mt-3 text-sm text-muted-foreground">
          No chat sessions yet. They&apos;ll appear here when visitors use the
          AI chat widget on the site.
        </p>
      </div>
    );
  }

  const activeSession = sessions.find((s) => s.sessionId === selected);

  return (
    <div className="grid lg:grid-cols-[320px_1fr] gap-6 h-[calc(100vh-12rem)]">
      {/* Session list */}
      <div className="glow-card overflow-y-auto">
        <div className="divide-y divide-border">
          {sessions.map((s) => (
            <button
              key={s.sessionId}
              onClick={() => setSelected(s.sessionId)}
              className={cn(
                "w-full text-left p-4 hover:bg-muted/30 transition-colors",
                selected === s.sessionId && "bg-muted/50"
              )}
            >
              <div className="font-mono text-[10px] text-muted-foreground">
                {s.sessionId.slice(0, 12)}
              </div>
              <div className="mt-1 text-sm truncate">
                {s.messages[0]?.content || "Empty"}
              </div>
              <div className="mt-1 flex items-center gap-2 text-xs text-muted-foreground">
                <span>{s.messageCount} msgs</span>
                <span>&middot;</span>
                <span>{formatRelative(s.lastSeen)}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Conversation */}
      <div className="glow-card flex flex-col overflow-hidden">
        {activeSession ? (
          <>
            <div className="p-4 border-b border-border">
              <div className="font-mono text-xs text-muted-foreground">
                Session {activeSession.sessionId}
              </div>
              <div className="mt-1 text-xs text-muted-foreground">
                Started {new Date(activeSession.firstSeen).toLocaleString()}{" "}
                &middot; {activeSession.messageCount} messages
              </div>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {activeSession.messages.map((msg, i) => (
                <div
                  key={i}
                  className={cn(
                    "flex",
                    msg.role === "user" ? "justify-end" : "justify-start"
                  )}
                >
                  <div
                    className={cn(
                      "max-w-[80%] rounded-xl px-4 py-2.5 text-sm leading-relaxed",
                      msg.role === "user"
                        ? "bg-accent-cyan text-black"
                        : "bg-muted/70 text-foreground"
                    )}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center text-sm text-muted-foreground">
            Select a session
          </div>
        )}
      </div>
    </div>
  );
}
