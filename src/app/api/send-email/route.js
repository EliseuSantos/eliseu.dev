import { NextResponse } from "next/server";
import { Resend } from 'resend';

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function POST(req) {
  const { email, fullName, message } = await req.json();

    const { data, error} = await resend.emails.send({
      from: 'contact@eliseu.dev',
      to: ["s.eliseu@proton.me"],
      subject: `Contato - Site - ${fullName}`,
      html: `<p>
        Enviada por : ${fullName} - ${email}
      </p>
      <p>${message}</p>`,
    });

    if (error) {
      return NextResponse.error();
    }
    
    return NextResponse.json({ success: true, data });

}
