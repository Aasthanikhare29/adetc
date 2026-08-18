import { notFound } from 'next/navigation';
import { serverClient } from '@/lib/supabase/server';
import PostForm from '@/components/admin/PostForm';

export const dynamic = 'force-dynamic';

export default async function EditPostPage({ params }) {
  const { id } = await params;
  const supabase = await serverClient();

  const [{ data: post }, { data: revisions }] = await Promise.all([
    supabase.from('posts').select('*').eq('id', id).maybeSingle(),
    supabase
      .from('post_revisions')
      .select('id,created_at,note')
      .eq('post_id', id)
      .order('created_at', { ascending: false })
      .limit(20),
  ]);

  if (!post) notFound();
  return <PostForm post={post} revisions={revisions || []} />;
}
