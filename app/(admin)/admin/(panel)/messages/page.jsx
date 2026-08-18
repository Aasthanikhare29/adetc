import { serverClient } from '@/lib/supabase/server';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import PageHeader from '@/components/admin/PageHeader';
import MessageActions from '@/components/admin/MessageActions';
import { Inbox } from 'lucide-react';

export const dynamic = 'force-dynamic';

export default async function MessagesPage() {
  const supabase = await serverClient();
  const { data } = await supabase
    .from('contacts')
    .select('id,name,email,phone,subject,project_type,message,handled,created_at')
    .order('created_at', { ascending: false });
  const list = data || [];
  const unread = list.filter((m) => !m.handled).length;

  return (
    <div className="space-y-6">
      <PageHeader title="Messages" description={`${list.length} total · ${unread} unhandled`} />

      <Card className="overflow-hidden">
        {list.length === 0 ? (
          <div className="flex flex-col items-center gap-3 px-6 py-16 text-center">
            <Inbox className="size-8 text-muted-foreground" />
            <p className="text-sm text-muted-foreground">No messages yet.</p>
          </div>
        ) : (
          <ul className="divide-y divide-border">
            {list.map((m) => (
              <li key={m.id} className={`px-4 py-3 ${m.handled ? 'opacity-60' : ''}`}>
                <div className="flex items-start gap-3">
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-medium">{m.name}</span>
                      <a href={`mailto:${m.email}`} className="text-sm text-muted-foreground hover:underline">{m.email}</a>
                      {m.phone && <span className="text-xs text-muted-foreground">· {m.phone}</span>}
                      {!m.handled && <Badge variant="info">new</Badge>}
                      {m.project_type && <Badge variant="neutral">{m.project_type}</Badge>}
                    </div>
                    {m.subject && <p className="mt-0.5 text-sm font-medium">{m.subject}</p>}
                    <p className="mt-1 whitespace-pre-wrap text-sm text-muted-foreground">{m.message}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{new Date(m.created_at).toLocaleString()}</p>
                  </div>
                  <MessageActions id={m.id} handled={m.handled} />
                </div>
              </li>
            ))}
          </ul>
        )}
      </Card>
    </div>
  );
}
