import Link from 'next/link';
import { Plus, Layers, Pencil } from 'lucide-react';
import { serverClient } from '@/lib/supabase/server';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import PageHeader from '@/components/admin/PageHeader';
import PageActions from '@/components/admin/PageActions';

export const dynamic = 'force-dynamic';

export default async function Pageslist() {
  const supabase = await serverClient();
  const { data: pages } = await supabase
    .from('pages')
    .select('id,slug,title,status,updated_at,blocks')
    .order('updated_at', { ascending: false });
  const list = pages || [];

  return (
    <div className="space-y-6">
      <PageHeader title="Pages" description="Custom landing pages built from sections.">
        <Button asChild><Link href="/admin/pages/new"><Plus /> New Page</Link></Button>
      </PageHeader>

      <Card className="overflow-hidden">
        {list.length === 0 ? (
          <div className="flex flex-col items-center gap-3 px-6 py-16 text-center">
            <Layers className="size-8 text-muted-foreground" />
            <p className="text-sm text-muted-foreground">No pages yet. Build your first landing page.</p>
            <Button asChild size="sm"><Link href="/admin/pages/new"><Plus /> New Page</Link></Button>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-border text-xs text-muted-foreground">
                  <th className="px-4 py-2.5 text-left font-medium">Page</th>
                  <th className="px-3 py-2.5 text-center font-medium">Sections</th>
                  <th className="px-3 py-2.5 text-left font-medium">Status</th>
                  <th className="px-4 py-2.5 text-right font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {list.map((p) => (
                  <tr key={p.id} className="border-b border-border transition-colors duration-150 last:border-0 hover:bg-surface-hover">
                    <td className="px-4 py-2.5">
                      <Link href={`/admin/pages/${p.id}`} className="block max-w-[28rem] truncate font-medium hover:underline">{p.title}</Link>
                      <p className="truncate text-xs text-muted-foreground">/{p.slug}</p>
                    </td>
                    <td className="px-3 py-2.5 text-center text-muted-foreground">{(p.blocks || []).length}</td>
                    <td className="px-3 py-2.5"><Badge variant={p.status === 'published' ? 'success' : 'neutral'}>{p.status}</Badge></td>
                    <td className="px-4 py-2.5">
                      <div className="flex items-center justify-end gap-1">
                        <Button asChild variant="ghost" size="icon" title="Edit">
                          <Link href={`/admin/pages/${p.id}`} aria-label="Edit"><Pencil /></Link>
                        </Button>
                        <PageActions id={p.id} />
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
