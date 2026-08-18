import Link from 'next/link';
import { Plus, FileText, Pencil } from 'lucide-react';
import { serverClient } from '@/lib/supabase/server';
import { segScores } from '@/lib/seo-score';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import PostsFilterBar from '@/components/admin/PostsFilterBar';
import PostActions from '@/components/admin/PostActions';
import PageHeader from '@/components/admin/PageHeader';
import { SegChip, SegLegend } from '@/components/admin/SegIndicators';

export const dynamic = 'force-dynamic';

export default async function PostsPage({ searchParams }) {
  const { q = '', status = 'all' } = await searchParams;
  const supabase = await serverClient();

  let query = supabase
    .from('posts')
    .select(
      'id,slug,title,status,updated_at,image,href,meta_title,meta_description,focus_keyword,' +
        'image_alt,secondary_keywords,tags,faq,tldr,content_html'
    )
    .order('updated_at', { ascending: false });
  if (status === 'published' || status === 'draft') query = query.eq('status', status);
  if (q) query = query.ilike('title', `%${q}%`);

  const [{ data: posts }, { data: settings }] = await Promise.all([
    query,
    supabase.from('site_settings').select('author_name').eq('id', 1).maybeSingle(),
  ]);
  const authorSet = Boolean(settings?.author_name);
  const list = (posts || []).map((p) => ({ ...p, scores: segScores(p, authorSet) }));

  return (
    <div className="space-y-6">
      <PageHeader title="Posts" description={`${list.length} post${list.length === 1 ? '' : 's'}`}>
        <Button asChild><Link href="/admin/posts/new"><Plus /> New Post</Link></Button>
      </PageHeader>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <PostsFilterBar />
        <SegLegend />
      </div>

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
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-border text-xs text-muted-foreground">
                  <th className="px-4 py-2.5 text-left font-medium">Post</th>
                  <th className="px-1.5 py-2.5 text-center font-medium" title="SEO">S</th>
                  <th className="px-1.5 py-2.5 text-center font-medium" title="GEO">G</th>
                  <th className="px-1.5 py-2.5 text-center font-medium" title="AEO">E</th>
                  <th className="px-3 py-2.5 text-left font-medium">Status</th>
                  <th className="px-4 py-2.5 text-right font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {list.map((p) => (
                  <tr key={p.id} className="border-b border-border transition-colors duration-150 last:border-0 hover:bg-surface-hover">
                    <td className="px-4 py-2.5">
                      <div className="flex items-center gap-3">
                        <div className="h-9 w-14 shrink-0 overflow-hidden rounded-md bg-muted">
                          {p.image && <img src={p.image} alt="" className="h-full w-full object-cover" />}
                        </div>
                        <div className="min-w-0">
                          <Link href={`/admin/posts/${p.id}`} className="block max-w-[26rem] truncate font-medium hover:underline">
                            {p.title}
                          </Link>
                          <p className="truncate text-xs text-muted-foreground">/{p.slug}{p.href ? ' · legacy' : ''}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-1.5 py-2.5 text-center"><SegChip which="s" scores={p.scores} /></td>
                    <td className="px-1.5 py-2.5 text-center"><SegChip which="g" scores={p.scores} /></td>
                    <td className="px-1.5 py-2.5 text-center"><SegChip which="e" scores={p.scores} /></td>
                    <td className="px-3 py-2.5">
                      <Badge variant={p.status === 'published' ? 'success' : 'neutral'}>{p.status}</Badge>
                    </td>
                    <td className="px-4 py-2.5">
                      <div className="flex items-center justify-end gap-1">
                        <Button asChild variant="ghost" size="icon" title="Edit">
                          <Link href={`/admin/posts/${p.id}`} aria-label="Edit"><Pencil /></Link>
                        </Button>
                        <PostActions id={p.id} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </Card>
    </div>
  );
}
