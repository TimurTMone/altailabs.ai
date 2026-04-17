import { kv } from "@vercel/kv";

export interface Lead {
  id: string;
  timestamp: number;
  name: string;
  email: string;
  projectType: string;
  budget: string;
  message: string;
  handled: boolean;
}

export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
  timestamp: number;
}

export interface ChatSession {
  sessionId: string;
  firstSeen: number;
  lastSeen: number;
  messageCount: number;
  messages: ChatMessage[];
}

const LEADS_INDEX = "leads:index";
const CHATS_INDEX = "chats:index";

function isKvConfigured(): boolean {
  return Boolean(
    process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN
  );
}

// === LEADS ===

export async function saveLead(
  lead: Omit<Lead, "id" | "timestamp" | "handled">
): Promise<Lead | null> {
  if (!isKvConfigured()) return null;

  const id = crypto.randomUUID();
  const timestamp = Date.now();
  const record: Lead = { ...lead, id, timestamp, handled: false };

  await kv.set(`lead:${id}`, record);
  await kv.zadd(LEADS_INDEX, { score: timestamp, member: id });

  return record;
}

export async function getLeads(limit = 100): Promise<Lead[]> {
  if (!isKvConfigured()) return [];

  const ids = await kv.zrange<string[]>(LEADS_INDEX, 0, limit - 1, {
    rev: true,
  });
  if (!ids || ids.length === 0) return [];

  const leads = await Promise.all(
    ids.map((id) => kv.get<Lead>(`lead:${id}`))
  );
  return leads.filter((l): l is Lead => l !== null);
}

export async function markLeadHandled(
  id: string,
  handled: boolean
): Promise<void> {
  if (!isKvConfigured()) return;
  const lead = await kv.get<Lead>(`lead:${id}`);
  if (!lead) return;
  await kv.set(`lead:${id}`, { ...lead, handled });
}

// === CHATS ===

export async function saveChatMessage(
  sessionId: string,
  userMessage: string,
  assistantReply: string
): Promise<void> {
  if (!isKvConfigured()) return;

  const now = Date.now();
  const existing = await kv.get<ChatSession>(`chat:${sessionId}`);

  const newMessages: ChatMessage[] = [
    { role: "user", content: userMessage, timestamp: now },
    { role: "assistant", content: assistantReply, timestamp: now },
  ];

  const session: ChatSession = existing
    ? {
        ...existing,
        lastSeen: now,
        messageCount: existing.messageCount + 2,
        messages: [...existing.messages, ...newMessages],
      }
    : {
        sessionId,
        firstSeen: now,
        lastSeen: now,
        messageCount: 2,
        messages: newMessages,
      };

  await kv.set(`chat:${sessionId}`, session);
  await kv.zadd(CHATS_INDEX, { score: now, member: sessionId });
}

export async function getChatSessions(limit = 100): Promise<ChatSession[]> {
  if (!isKvConfigured()) return [];

  const ids = await kv.zrange<string[]>(CHATS_INDEX, 0, limit - 1, {
    rev: true,
  });
  if (!ids || ids.length === 0) return [];

  const sessions = await Promise.all(
    ids.map((id) => kv.get<ChatSession>(`chat:${id}`))
  );
  return sessions.filter((s): s is ChatSession => s !== null);
}

// === STATS ===

export async function getStats(): Promise<{
  totalLeads: number;
  unhandledLeads: number;
  totalChats: number;
  leadsToday: number;
}> {
  if (!isKvConfigured()) {
    return { totalLeads: 0, unhandledLeads: 0, totalChats: 0, leadsToday: 0 };
  }

  const todayStart = new Date();
  todayStart.setHours(0, 0, 0, 0);

  const [leads, chats] = await Promise.all([getLeads(500), getChatSessions(500)]);

  return {
    totalLeads: leads.length,
    unhandledLeads: leads.filter((l) => !l.handled).length,
    totalChats: chats.length,
    leadsToday: leads.filter((l) => l.timestamp >= todayStart.getTime()).length,
  };
}
