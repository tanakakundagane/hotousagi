
import { Resend } from 'resend';
import { EmailTemplate } from '../../../../components/email-template';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json();

    // 送信者に送るメール内容
    const confirmationEmail = {
      from: 'hotousagi@nicework.co.jp',
      to: [`${email}`],
      subject: 'お問い合わせありがとうございます',
      text: 'お問合せありがとうございます。後に返信させていただきます。',
      html: '<p>お問合せありがとうございます。後に返信させていただきます。</p>',
    };

    // 管理者に送るメール内容
    const adminEmail = {
      from: 'hotousagi@nicework.co.jp',
      to: ['hotousagi@nicework.co.jp'],
      subject: `${name}様からのお問い合わせ`,
      text: `Welcome ${name}, Message: ${message}`,
      react: EmailTemplate({ firstName: `${name}`, firstMessage: `${message}`, firstEmail: `${email}`, firstPhone: `${phone}` }),
    };

    // 両方のメールを送信
    const [confirmationResponse, adminResponse] = await Promise.all([
      resend.emails.send(confirmationEmail),
      resend.emails.send(adminEmail)
    ]);

    return NextResponse.json({ confirmationResponse, adminResponse });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}