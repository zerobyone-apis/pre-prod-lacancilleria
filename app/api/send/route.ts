// app/api/send/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const FROM = process.env.FROM_EMAIL;
const TO = process.env.TO_EMAIL;

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json();


    console.log('Emails: ',TO)

    await resend.emails.send({
      from: `La Cancillería <${FROM}>`,
      to: `${TO}`, // esto deberia ser un listado.
      subject: `New contact from La Cancilleria Web - ${name}`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.5;">
          <h2>New message from the contact form</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || "Not specified"}</p>
          <p><strong>Message:</strong><br/>${message}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Error sending email:", err);
    return NextResponse.json({ error: "Email not sent" }, { status: 500 });
  }
}
