import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { name, email, message, website } = req.body ?? {};
    // Honeypot check
    if (website) {
      return res.status(200).json({ ok: true });
    }
    if (!name || !email || !message) {
      return res.status(400).json({ error: "Missing fields" });
    }

    const from = process.env.CONTACT_FROM;
    const to = process.env.CONTACT_TO;
    if (!from || !to || !process.env.RESEND_API_KEY) {
      return res.status(500).json({ error: "Server not configured" });
    }

    await resend.emails.send({
      from,
      to,
      subject: `New portfolio message from ${name}`,
      reply_to: email,
      text: `From: ${name} <${email}>

${message}`,
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    return res.status(500).json({ error: "Failed to send" });
  }
}
