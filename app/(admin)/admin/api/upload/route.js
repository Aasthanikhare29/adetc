import { NextResponse } from 'next/server';
import { serverClient } from '@/lib/supabase/server';

// Authenticated image upload → Supabase Storage → returns public URL.
// Used by both the cover-image picker and the Tiptap inline-image button.
export async function POST(request) {
  const supabase = await serverClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const form = await request.formData();
  const file = form.get('file');
  if (!file || typeof file === 'string') {
    return NextResponse.json({ error: 'No file' }, { status: 400 });
  }

  const safe = file.name.replace(/[^a-zA-Z0-9.-]/g, '-');
  const path = `${Date.now()}-${safe}`;
  const { error } = await supabase.storage
    .from('blog-images')
    .upload(path, file, { contentType: file.type, upsert: false });
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  const { data } = supabase.storage.from('blog-images').getPublicUrl(path);
  return NextResponse.json({ url: data.publicUrl });
}
