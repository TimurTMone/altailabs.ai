import { NextResponse } from "next/server";
import { getChatSessions } from "@/lib/kv";

export async function GET() {
  const sessions = await getChatSessions(100);
  return NextResponse.json({ sessions });
}
