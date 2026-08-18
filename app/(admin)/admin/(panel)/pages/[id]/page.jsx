import { notFound } from 'next/navigation';
import { serverClient } from '@/lib/supabase/server';
import PageForm from '@/components/admin/PageForm';

export const dynamic = 'force-dynamic';

export default async function EditPage({ params }) {
  const { id } = await params;
  const supabase = await serverClient();
  const { data: page } = await supabase.from('pages').select('*').eq('id', id).maybeSingle();
  if (!page) notFound();
  return <PageForm page={page} />;
}
