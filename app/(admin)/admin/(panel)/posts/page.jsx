import Link from 'next/link';
import { Plus, FileText } from 'lucide-react';
import { serverClient } from '@/lib/supabase/server';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import PostsFilterBar from '@/components/admin/PostsFilterBar';
import PostActions from '@/components/admin/PostActions';

export const dynamic = 'force-dynamic';

export default async function PostsPage({ searchParams }) {
  const { q = '', status = 'all' } = await searchParams;
  const supabase = await serverClient();

  let query = supabase
    .from('posts')
    .select('id,slug,title,status,updated_at,image,href')
    .order('updated_at', { ascending: false });
  if (status === 'published' || status === 'draft') query = query.eq('status', status);
  if (q) query = query.ilike('title', `%${q}%`);
  const { data: posts } = await query;
  const list = posts || [];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Posts</h1>
          <p className="text-sm text-muted-foreground">{list.length} post{list.length === 1 ? '' : 's'}</p>
        </div>
        <Button asChild><Link href="/admin/posts/new"><Plus /> New Post</Link></Button>
      </div>

      <PostsFilterBar />

      <Card className="overflow-hidden">
        {list.length === 0 ? (
          <div className="flex flex-col items-center gap-3 px-6 py-16 text-center">
            <FileText className="size-8 text-muted-foreground" />
            <p className="text-sm text-muted-foreground">
              {q || status !== 'all' ? 'No posts match your filters.' : 'No posts yet. Create your first one.'}
            </p>
            {!q && status === 'all' && (
              <Button asChild size="sm"><Link href="/admin/posts/new"><Plus /> New Post</Link></Button>
            )}
          </div>
        ) : (
          <ul className="divide-y divide-border">
            {list.map((p) => (
              <li key={p.id} className="flex items-center gap-4 px-4 py-3">
                <div className="h-11 w-16 shrink-0 overflow-hidden rounded-md bg-muted">
                  {p.image && <img src={p.image} alt="" className="h-full w-full object-cover" />}
                </div>
                <div className="min-w-0 flex-1">
                  <Link href={`/admin/posts/${p.id}`} className="block truncate font-medium hover:underline">
                    {p.title}
                  </Link>
                  <p className="truncate text-xs text-muted-foreground">
                    /{p.slug}{p.href ? ' · legacy page' : ''} · {new Date(p.updated_at).toLocaleDateString()}
                  </p>
                </div>
                <Badge variant={p.status === 'published' ? 'success' : 'warning'}>{p.status}</Badge>
                <div className="flex items-center gap-1">
                  <Button asChild variant="ghost" size="sm"><Link href={`/admin/posts/${p.id}`}>Edit</Link></Button>
                  <PostActions id={p.id} status={p.status} />
                </div>
              </li>
            ))}
          </ul>
        )}
      </Card>
    </div>
  );
}
