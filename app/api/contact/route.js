import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { sendMail, esc } from '@/lib/mailer';

export const runtime = 'nodejs';

const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export async function POST(request) {
  try {
    if (!supabase) {
      return NextResponse.json(
        { error: 'The contact form is unavailable. Please try again later.' },
        { status: 500 }
      );
    }

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

    if (!supabase) {
      return NextResponse.json(
        { error: 'The contact form is temporarily unavailable. Please try again later.' },
        { status: 503 }
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

    // notify the studio (never blocks the response)
    await sendMail({
      subject: `New enquiry: ${subject || projectType || 'Contact form'}`,
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nSubject: ${subject}\nProject type: ${projectType}\n\n${message}`,
      html: `<h2>New contact enquiry</h2>
        <p><strong>Name:</strong> ${esc(name)}<br>
        <strong>Email:</strong> ${esc(email)}<br>
        <strong>Phone:</strong> ${esc(phone) || '—'}<br>
        <strong>Subject:</strong> ${esc(subject) || '—'}<br>
        <strong>Project type:</strong> ${esc(projectType) || '—'}</p>
        <p style="white-space:pre-wrap">${esc(message)}</p>`,
    });

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
