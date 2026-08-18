import { notFound } from 'next/navigation';
import { serverClient } from '@/lib/supabase/server';
import PostForm from '@/components/admin/PostForm';

export const dynamic = 'force-dynamic';

export default async function EditPostPage({ params }) {
  const { id } = await params;
  const supabase = await serverClient();
  const { data: post } = await supabase
    .from('posts')
    .select('id,slug,title,excerpt,category,image,content_html,status')
    .eq('id', id)
    .maybeSingle();

  if (!post) notFound();
  return <PostForm post={post} />;
}
