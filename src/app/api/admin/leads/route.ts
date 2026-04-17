import { NextRequest, NextResponse } from "next/server";
import { getLeads, markLeadHandled } from "@/lib/kv";

export async function GET() {
  const leads = await getLeads(200);
  return NextResponse.json({ leads });
}

export async function PATCH(req: NextRequest) {
  const { id, handled } = await req.json();
  if (!id || typeof handled !== "boolean") {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
  await markLeadHandled(id, handled);
  return NextResponse.json({ success: true });
}
