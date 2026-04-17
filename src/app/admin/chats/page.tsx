import { getChatSessions } from "@/lib/kv";
import { ChatsViewer } from "./chats-viewer";

export const dynamic = "force-dynamic";

export default async function ChatsPage() {
  const sessions = await getChatSessions(100);

  return (
    <div className="max-w-6xl">
      <div className="flex items-baseline justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">AI Chats</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Every conversation prospects have with the AI assistant.
          </p>
        </div>
        <div className="text-xs font-mono text-muted-foreground">
          {sessions.length} sessions
        </div>
      </div>

      <div className="mt-8">
        <ChatsViewer sessions={sessions} />
      </div>
    </div>
  );
}
