import Link from 'next/link';
import { FileText, CheckCircle2, PenLine, Plus } from 'lucide-react';
import { serverClient } from '@/lib/supabase/server';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export const dynamic = 'force-dynamic';

export default async function Dashboard() {
  const supabase = await serverClient();
  const { data: posts } = await supabase
    .from('posts')
    .select('id,title,slug,status,updated_at')
    .order('updated_at', { ascending: false });

  const all = posts || [];
  const published = all.filter((p) => p.status === 'published').length;
  const drafts = all.length - published;
  const recent = all.slice(0, 5);

  const stats = [
    { label: 'Total posts', value: all.length, icon: FileText },
    { label: 'Published', value: published, icon: CheckCircle2 },
    { label: 'Drafts', value: drafts, icon: PenLine },
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Dashboard</h1>
          <p className="text-sm text-muted-foreground">Overview of your blog content.</p>
        </div>
        <Button asChild>
          <Link href="/admin/posts/new"><Plus /> New Post</Link>
        </Button>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {stats.map(({ label, value, icon: Icon }) => (
          <Card key={label}>
            <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">{label}</CardTitle>
              <Icon className="size-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-semibold">{value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader className="flex-row items-center justify-between space-y-0">
          <CardTitle>Recent posts</CardTitle>
          <Button asChild variant="ghost" size="sm"><Link href="/admin/posts">View all</Link></Button>
        </CardHeader>
        <CardContent className="p-0">
          {recent.length === 0 ? (
            <p className="px-6 pb-6 text-sm text-muted-foreground">No posts yet.</p>
          ) : (
            <ul className="divide-y divide-border">
              {recent.map((p) => (
                <li key={p.id} className="flex items-center gap-3 px-6 py-3">
                  <Link href={`/admin/posts/${p.id}`} className="flex-1 truncate font-medium hover:underline">
                    {p.title}
                  </Link>
                  <Badge variant={p.status === 'published' ? 'success' : 'warning'}>{p.status}</Badge>
                  <span className="text-xs text-muted-foreground">
                    {new Date(p.updated_at).toLocaleDateString()}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
