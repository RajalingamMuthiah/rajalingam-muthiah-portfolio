import { Resend } from "resend";

export const dynamic = "force-dynamic";

const ADMIN_EMAIL = "rajalingammathiah2011@gmail.com";

export async function POST(req: Request) {
  console.log("[CONTACT API] Request received");

  try {
    const apiKey = process.env.RESEND_API_KEY;
    console.log("[CONTACT API] API Key present:", !!apiKey);

    if (!apiKey) {
      console.error("[CONTACT API] RESEND_API_KEY not found in env");
      return new Response(
        JSON.stringify({ success: false, error: "RESEND_API_KEY not configured" }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    let body;
    try {
      body = await req.json();
      console.log("[CONTACT API] Body parsed:", { name: body.name, email: body.email, msgLen: body.message?.length });
    } catch (parseErr) {
      console.error("[CONTACT API] JSON parse failed:", parseErr);
      return new Response(
        JSON.stringify({ success: false, error: "Invalid JSON" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const { name, email, message } = body;

    if (!name || !email || !message) {
      console.warn("[CONTACT API] Missing fields");
      return new Response(
        JSON.stringify({ success: false, error: "All fields required" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    if (message.length < 10) {
      console.warn("[CONTACT API] Message too short:", message.length);
      return new Response(
        JSON.stringify({ success: false, error: "Message must be at least 10 characters" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    console.log("[CONTACT API] Initializing Resend with key");
    const resend = new Resend(apiKey);

    console.log("[CONTACT API] Sending admin email to", ADMIN_EMAIL);
    const adminRes = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: ADMIN_EMAIL,
      subject: `New Contact: ${name}`,
      html: `<p>From: ${name} (${email})</p><p>${message}</p>`,
    });

    if (adminRes.error) {
      console.error("[CONTACT API] Admin email failed:", adminRes.error);
      return new Response(
        JSON.stringify({ success: false, error: "Failed to send admin email" }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    console.log("[CONTACT API] Admin email sent, ID:", adminRes.data?.id);

    // Send user confirmation (fire and forget)
    console.log("[CONTACT API] Sending confirmation email to", email);
    resend.emails
      .send({
        from: "onboarding@resend.dev",
        to: email,
        subject: `Message received, ${name}`,
        html: `<p>Thanks for reaching out. We'll be in touch soon!</p>`,
      })
      .then(() => console.log("[CONTACT API] Confirmation email sent"))
      .catch((err) => console.error("[CONTACT API] Confirmation email failed:", err));

    console.log("[CONTACT API] Success response sent");
    return new Response(JSON.stringify({ success: true, message: "Email sent! Check your inbox." }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("[CONTACT API] Unhandled error:", err instanceof Error ? err.message : err);
    return new Response(
      JSON.stringify({ success: false, error: "Server error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
