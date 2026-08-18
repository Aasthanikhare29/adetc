import Link from 'next/link';
import { FileText, CheckCircle2, PenLine, Inbox, Mail, Plus } from 'lucide-react';
import { serverClient } from '@/lib/supabase/server';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import PageHeader from '@/components/admin/PageHeader';

export const dynamic = 'force-dynamic';

export default async function Dashboard() {
  const supabase = await serverClient();
  const [{ data: posts }, { data: contacts }, { data: subs }] = await Promise.all([
    supabase.from('posts').select('id,title,slug,status,updated_at').order('updated_at', { ascending: false }),
    supabase.from('contacts').select('id,name,email,subject,handled,created_at').order('created_at', { ascending: false }),
    supabase.from('subscribers').select('id,email,created_at').order('created_at', { ascending: false }),
  ]);

  const allPosts = posts || [];
  const published = allPosts.filter((p) => p.status === 'published').length;
  const msgs = contacts || [];
  const unhandled = msgs.filter((m) => !m.handled).length;
  const subscribers = subs || [];

  const stats = [
    { label: 'Published posts', value: published, icon: CheckCircle2 },
    { label: 'Drafts', value: allPosts.length - published, icon: PenLine },
    { label: 'Messages', value: msgs.length, sub: unhandled ? `${unhandled} new` : null, icon: Inbox, href: '/admin/messages' },
    { label: 'Subscribers', value: subscribers.length, icon: Mail, href: '/admin/subscribers' },
  ];

  return (
    <div className="space-y-8">
      <PageHeader title="Dashboard" description="Content, enquiries and subscribers at a glance.">
        <Button asChild><Link href="/admin/posts/new"><Plus /> New Post</Link></Button>
      </PageHeader>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map(({ label, value, sub, icon: Icon, href }) => {
          const inner = (
            <Card className={href ? 'transition-colors duration-150 hover:border-brand' : undefined}>
              <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">{label}</CardTitle>
                <Icon className="size-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-semibold">{value}</span>
                  {sub && <Badge variant="info">{sub}</Badge>}
                </div>
              </CardContent>
            </Card>
          );
          return href ? <Link key={label} href={href}>{inner}</Link> : <div key={label}>{inner}</div>;
        })}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader className="flex-row items-center justify-between space-y-0">
            <CardTitle>Recent messages</CardTitle>
            <Button asChild variant="ghost" size="sm"><Link href="/admin/messages">View all</Link></Button>
          </CardHeader>
          <CardContent className="p-0">
            {msgs.length === 0 ? (
              <p className="px-6 pb-6 text-sm text-muted-foreground">No enquiries yet.</p>
            ) : (
              <ul className="divide-y divide-border">
                {msgs.slice(0, 5).map((m) => (
                  <li key={m.id} className="flex items-center gap-3 px-4 py-2.5">
                    <div className="min-w-0 flex-1">
                      <div className="truncate font-medium">{m.name} {!m.handled && <Badge variant="info">new</Badge>}</div>
                      <div className="truncate text-xs text-muted-foreground">{m.subject || m.email}</div>
                    </div>
                    <span className="shrink-0 text-xs text-muted-foreground">{new Date(m.created_at).toLocaleDateString()}</span>
                  </li>
                ))}
              </ul>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex-row items-center justify-between space-y-0">
            <CardTitle>Recent subscribers</CardTitle>
            <Button asChild variant="ghost" size="sm"><Link href="/admin/subscribers">View all</Link></Button>
          </CardHeader>
          <CardContent className="p-0">
            {subscribers.length === 0 ? (
              <p className="px-6 pb-6 text-sm text-muted-foreground">No subscribers yet.</p>
            ) : (
              <ul className="divide-y divide-border">
                {subscribers.slice(0, 5).map((s) => (
                  <li key={s.id} className="flex items-center gap-3 px-4 py-2.5">
                    <span className="flex-1 truncate">{s.email}</span>
                    <span className="shrink-0 text-xs text-muted-foreground">{new Date(s.created_at).toLocaleDateString()}</span>
                  </li>
                ))}
              </ul>
            )}
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="flex-row items-center justify-between space-y-0">
          <CardTitle>Recent posts</CardTitle>
          <Button asChild variant="ghost" size="sm"><Link href="/admin/posts">View all</Link></Button>
        </CardHeader>
        <CardContent className="p-0">
          {allPosts.length === 0 ? (
            <p className="px-6 pb-6 text-sm text-muted-foreground">No posts yet.</p>
          ) : (
            <ul className="divide-y divide-border">
              {allPosts.slice(0, 5).map((p) => (
                <li key={p.id} className="flex items-center gap-3 px-4 py-2.5 transition-colors duration-150 hover:bg-surface-hover">
                  <Link href={`/admin/posts/${p.id}`} className="flex-1 truncate font-medium hover:underline">{p.title}</Link>
                  <Badge variant={p.status === 'published' ? 'success' : 'neutral'}>{p.status}</Badge>
                  <span className="text-xs text-muted-foreground">{new Date(p.updated_at).toLocaleDateString()}</span>
                </li>
              ))}
            </ul>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
