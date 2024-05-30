import { Resend } from 'resend';
import { EmailTemplate } from '../../../../components/email-template';

const resend = new Resend(process.env.React_APP_RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json();

    const data = await resend.emails.send({
      from: 'hotousagi@nicework.co.jp',
      to: ['niceworkjukai@gmail.com'],
      subject: `${name}様からのお問い合わせ`,
      text: `Welcome ${name},Message: ${message}`,
      react: EmailTemplate({ firstName: `${name}` , firstMessage: `${message}`, firstEmail: `${email}`, firstPhone: `${phone}`}),
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}