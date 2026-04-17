import { NextRequest, NextResponse } from "next/server";
import { saveLead } from "@/lib/kv";

export async function POST(req: NextRequest) {
  try {
    const { name, email, projectType, budget, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Persist to KV for admin dashboard (no-op if KV not configured)
    await saveLead({
      name,
      email,
      projectType: projectType || "",
      budget: budget || "",
      message,
    });

    // If Resend API key is configured, send email notification
    const resendKey = process.env.RESEND_API_KEY;
    if (resendKey) {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Altai Labs <noreply@altailabs.ai>",
          to: ["timur.mone@gmail.com"],
          subject: `New Lead: ${projectType} — ${budget}`,
          html: `
            <h2>New Venture Inquiry</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Collaboration Type:</strong> ${projectType}</p>
            <p><strong>Scope:</strong> ${budget}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
          `,
          reply_to: email,
        }),
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
