// src/pages/api/send.ts
import { Resend } from 'resend';

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export async function POST({ request }: { request: Request }) {
  const body = await request.json();
  const { from } = body;

  try {
    const data = await resend.emails.send({
      from,
      to:import.meta.env.EMAIL_USER,
      subject:'Cliente',
      html: `<p>Nuevo cliente</p>`,
    });

    return new Response(
      JSON.stringify({ success: true, data }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, error: String(error) }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
