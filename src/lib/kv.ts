import Redis from "ioredis";

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

let client: Redis | null = null;
let warned = false;

function getClient(): Redis | null {
  if (client) return client;
  const url = process.env.REDIS_URL;
  if (!url) {
    if (!warned) {
      console.warn(
        "[kv] REDIS_URL not set — lead + chat persistence disabled."
      );
      warned = true;
    }
    return null;
  }
  client = new Redis(url, {
    maxRetriesPerRequest: 3,
    lazyConnect: false,
  });
  client.on("error", (err) => console.error("[kv] redis error:", err.message));
  return client;
}

async function safeGet<T>(key: string): Promise<T | null> {
  const r = getClient();
  if (!r) return null;
  const raw = await r.get(key);
  return raw ? (JSON.parse(raw) as T) : null;
}

async function safeSet(key: string, value: unknown): Promise<void> {
  const r = getClient();
  if (!r) return;
  await r.set(key, JSON.stringify(value));
}

// === LEADS ===

export async function saveLead(
  lead: Omit<Lead, "id" | "timestamp" | "handled">
): Promise<Lead | null> {
  const r = getClient();
  if (!r) return null;

  const id = crypto.randomUUID();
  const timestamp = Date.now();
  const record: Lead = { ...lead, id, timestamp, handled: false };

  await safeSet(`lead:${id}`, record);
  await r.zadd(LEADS_INDEX, timestamp, id);
  return record;
}

export async function getLeads(limit = 100): Promise<Lead[]> {
  const r = getClient();
  if (!r) return [];

  const ids = await r.zrevrange(LEADS_INDEX, 0, limit - 1);
  if (!ids || ids.length === 0) return [];

  const leads = await Promise.all(ids.map((id) => safeGet<Lead>(`lead:${id}`)));
  return leads.filter((l): l is Lead => l !== null);
}

export async function markLeadHandled(
  id: string,
  handled: boolean
): Promise<void> {
  const existing = await safeGet<Lead>(`lead:${id}`);
  if (!existing) return;
  await safeSet(`lead:${id}`, { ...existing, handled });
}

// === CHATS ===

export async function saveChatMessage(
  sessionId: string,
  userMessage: string,
  assistantReply: string
): Promise<void> {
  const r = getClient();
  if (!r) return;

  const now = Date.now();
  const existing = await safeGet<ChatSession>(`chat:${sessionId}`);

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

  await safeSet(`chat:${sessionId}`, session);
  await r.zadd(CHATS_INDEX, now, sessionId);
}

export async function getChatSessions(limit = 100): Promise<ChatSession[]> {
  const r = getClient();
  if (!r) return [];

  const ids = await r.zrevrange(CHATS_INDEX, 0, limit - 1);
  if (!ids || ids.length === 0) return [];

  const sessions = await Promise.all(
    ids.map((id) => safeGet<ChatSession>(`chat:${id}`))
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
