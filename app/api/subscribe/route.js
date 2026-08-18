import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { sendMail, esc, OWNER_TO } from '@/lib/mailer';

export const runtime = 'nodejs';

const EMAIL = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export async function POST(request) {
  if (!supabase) {
    return NextResponse.json({ error: 'Subscriptions are temporarily unavailable.' }, { status: 503 });
  }
  let body;
  try { body = await request.json(); } catch { return NextResponse.json({ error: 'Bad request' }, { status: 400 }); }

  // honeypot
  if (body.company) return NextResponse.json({ success: true });

  const email = String(body.email || '').trim().toLowerCase();
  if (!EMAIL.test(email)) {
    return NextResponse.json({ error: 'Please provide a valid email address.' }, { status: 400 });
  }

  // idempotent: duplicate email is still a success
  const { error } = await supabase
    .from('subscribers')
    .upsert({ email }, { onConflict: 'email', ignoreDuplicates: true });
  if (error) {
    console.error('Subscribe insert error:', error);
    return NextResponse.json({ error: 'Could not subscribe. Please try again.' }, { status: 500 });
  }

  // welcome the subscriber + notify the studio (never blocks the response)
  await sendMail({
    to: email,
    subject: 'You’re subscribed to Ad Etc Studios',
    text: 'Thanks for subscribing! You’ll hear from us when we publish new work and stories.',
    html: '<p>Thanks for subscribing to <strong>Ad Etc Studios</strong>! You’ll hear from us when we publish new work and stories.</p>',
  });
  if (OWNER_TO) {
    await sendMail({ subject: 'New newsletter subscriber', text: `New subscriber: ${email}`, html: `<p>New subscriber: ${esc(email)}</p>` });
  }

  return NextResponse.json({ success: true, message: 'Thank you for subscribing!' });
}
