import { Resend } from "resend";

export const dynamic = "force-dynamic";

const ADMIN_EMAIL = "rajalingammathiah2011@gmail.com";
const FROM_ADMIN = "Portfolio Contact <onboarding@resend.dev>";
const FROM_USER_REPLY = "Rajalingam Mathiah <onboarding@resend.dev>";

export async function POST(req: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return new Response(
        JSON.stringify({ error: "Email service not configured" }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    let body;
    try {
      body = await req.json();
    } catch {
      return new Response(
        JSON.stringify({ error: "Invalid JSON in request" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const { name, email, message } = body;
    const trimmedName = (name || "").trim();
    const trimmedEmail = (email || "").trim();
    const trimmedMessage = (message || "").trim();

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      return new Response(
        JSON.stringify({ error: "All fields are required" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    if (trimmedMessage.length < 10) {
      return new Response(
        JSON.stringify({ error: "Message must be at least 10 characters" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const resend = new Resend(apiKey);

    // Send admin notification
    const adminResult = await resend.emails.send({
      from: FROM_ADMIN,
      to: ADMIN_EMAIL,
      subject: `New Portfolio Contact: ${trimmedName}`,
      html: `<h2>New message from ${trimmedName}</h2><p>Email: ${trimmedEmail}</p><p>Message: ${trimmedMessage}</p>`,
    });

    if (adminResult.error) {
      console.error("Admin email failed:", adminResult.error);
      return new Response(
        JSON.stringify({ error: "Failed to send notification email" }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    // Send user confirmation (non-blocking)
    resend.emails
      .send({
        from: FROM_USER_REPLY,
        to: trimmedEmail,
        subject: `Thank you ${trimmedName}! Message received`,
        html: `<h2>Hi ${trimmedName},</h2><p>Thank you for contacting us. We received your message and will reply within 24-48 hours.</p><p>Best,<br>Rajalingam Mathiah</p>`,
      })
      .catch((err) => console.error("User confirmation email failed:", err));

    console.log("Contact email sent successfully", {
      to: ADMIN_EMAIL,
      from: trimmedEmail,
    });

    return new Response(
      JSON.stringify({ success: true, message: "Email sent! Check your inbox." }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Contact API error:", error);
    return new Response(
      JSON.stringify({
        error:
          error instanceof Error
            ? error.message
            : "Internal server error",
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
