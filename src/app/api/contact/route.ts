import { Resend } from "resend";

export const dynamic = "force-dynamic";

const ADMIN_EMAIL = "rajalingammathiah2011@gmail.com";

export async function POST(req: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return new Response(JSON.stringify({ success: false, error: "API key missing" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }

    const body = await req.json();
    const { name, email, message } = body;

    // Validate
    if (!name || !email || !message) {
      return new Response(JSON.stringify({ success: false, error: "Missing fields" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    if (message.length < 10) {
      return new Response(JSON.stringify({ success: false, error: "Message too short" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const resend = new Resend(apiKey);

    // Send admin notification
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: ADMIN_EMAIL,
      subject: `New Contact: ${name}`,
      html: `<p>From: ${name} (${email})</p><p>${message}</p>`,
    });

    // Send user confirmation (fire and forget)
    resend.emails
      .send({
        from: "onboarding@resend.dev",
        to: email,
        subject: `Message received, ${name}`,
        html: `<p>Thanks for reaching out. We'll be in touch soon!</p>`,
      })
      .catch(() => {});

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ success: false, error: "Server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
