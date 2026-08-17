import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export const runtime = 'nodejs';

const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export async function POST(request) {
  try {
    const body = await request.json();

    const name = String(body.name || '').trim();
    const email = String(body.email || '').trim();
    const phone = String(body.phone || '').trim();
    const subject = String(body.subject || '').trim();
    const projectType = String(body.projectType || '').trim();
    const message = String(body.message || '').trim();

    if (!name || !email || !subject || !message || !projectType) {
      return NextResponse.json(
        { error: 'Please fill in all required fields.' },
        { status: 400 }
      );
    }

    if (!emailPattern.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    const { data, error } = await supabase
      .from('contacts')
      .insert([
        {
          name,
          email,
          phone,
          subject,
          project_type: projectType,
          message,
        },
      ])
      .select();

    if (error) {
      console.error('Supabase insert error:', error);
      return NextResponse.json(
        { error: 'Form submission failed. Please try again.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Thank you! Your message has been sent successfully.', data: data ? data[0] : null },
      { status: 200 }
    );
  } catch (err) {
    console.error('Contact API error:', err);
    return NextResponse.json(
      { error: 'Form submission failed. Please try again.' },
      { status: 500 }
    );
  }
}
