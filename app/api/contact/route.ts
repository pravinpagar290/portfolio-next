import { NextResponse } from "next/server";

// Simple in-memory rate limiting map for basic spam protection
const rateLimitMap = new Map<string, { count: number; lastReset: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 5;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now - record.lastReset > RATE_LIMIT_WINDOW) {
    rateLimitMap.set(ip, { count: 1, lastReset: now });
    return false;
  }

  if (record.count >= MAX_REQUESTS_PER_WINDOW) {
    return true;
  }

  record.count += 1;
  return false;
}

export async function POST(request: Request) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "127.0.0.1";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        {
          error: "Too many requests. Please wait a moment before sending another message.",
        },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { name, email, message } = body;

    // Strict validation
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { error: "Name must be at least 2 characters long." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== "string" || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { error: "A valid email address is required." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 10) {
      return NextResponse.json(
        { error: "Message must be at least 10 characters long." },
        { status: 400 }
      );
    }

    const cleanName = name.trim().slice(0, 100);
    const cleanEmail = email.trim().slice(0, 100);
    const cleanMessage = message.trim().slice(0, 2000);

    // Option 1: Resend integration (if RESEND_API_KEY is configured)
    if (process.env.RESEND_API_KEY) {
      const resendRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: process.env.RESEND_FROM_EMAIL || "portfolio@pravinpagar.dev",
          to: "pravinpagar290@gmail.com",
          reply_to: cleanEmail,
          subject: `Portfolio Inquiry from ${cleanName}`,
          text: `Name: ${cleanName}\nEmail: ${cleanEmail}\n\nMessage:\n${cleanMessage}`,
          html: `
            <div style="font-family: sans-serif; padding: 20px; line-height: 1.6; color: #111;">
              <h2 style="color: #7C3AED;">New Portfolio Inquiry</h2>
              <p><strong>From:</strong> ${cleanName} &lt;<a href="mailto:${cleanEmail}">${cleanEmail}</a>&gt;</p>
              <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
              <p style="white-space: pre-wrap;">${cleanMessage}</p>
            </div>
          `,
        }),
      });

      if (!resendRes.ok) {
        const errorText = await resendRes.text();
        console.error("Resend API error:", errorText);
      }
    }

    // Option 2: Web3Forms integration (if WEB3FORMS_ACCESS_KEY is configured)
    if (process.env.WEB3FORMS_ACCESS_KEY) {
      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.WEB3FORMS_ACCESS_KEY,
          name: cleanName,
          email: cleanEmail,
          message: cleanMessage,
          subject: `Portfolio message from ${cleanName}`,
          to_email: "pravinpagar290@gmail.com",
        }),
      });
    }

    // Always log on server for developer visibility
    console.log(
      `[Contact Submission] ${new Date().toISOString()} | From: ${cleanName} (${cleanEmail})`
    );

    return NextResponse.json(
      {
        success: true,
        message:
          "Thank you! Your message has been received. Pravin will get back to you shortly.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API internal error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please email pravinpagar290@gmail.com directly." },
      { status: 500 }
    );
  }
}

