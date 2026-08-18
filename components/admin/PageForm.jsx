'use client';

import { useActionState, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { toast } from 'sonner';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { savePage } from '@/app/(admin)/admin/actions';
import BlockEditor from './BlockEditor';
import SeoPanel from './SeoPanel';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

function slugifyPath(s) {
  return String(s || '').split('/').map((seg) =>
    seg.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '')
  ).filter(Boolean).join('/');
}
const toLocal = (iso) => (iso ? new Date(iso).toISOString().slice(0, 16) : '');
const richText = (blocks) => (blocks || []).filter((b) => b.type === 'richtext').map((b) => b.html).join(' ');

export default function PageForm({ page }) {
  const router = useRouter();
  const [state, action, pending] = useActionState(savePage, {});
  const [title, setTitle] = useState(page?.title || '');
  const [slug, setSlug] = useState(page?.slug || '');
  const [slugTouched, setSlugTouched] = useState(Boolean(page?.slug));
  const [status, setStatus] = useState(page?.status || 'draft');

  useEffect(() => { if (!slugTouched) setSlug(slugifyPath(title)); }, [title, slugTouched]);

  useEffect(() => {
    if (state?.ok) {
      toast.success(state.status === 'published' ? 'Published' : 'Saved');
      if (!page && state.id) router.replace(`/admin/pages/${state.id}`);
      else router.refresh();
    } else if (state?.error) toast.error(state.error);
  }, [state]); // eslint-disable-line react-hooks/exhaustive-deps

  const canView = page && status === 'published';

  return (
    <form action={action} className="space-y-6">
      {page?.id && <input type="hidden" name="id" value={page.id} />}
      <input type="hidden" name="status" value={status} />
      <input type="hidden" name="slug" value={slug} />

      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <Button asChild variant="ghost" size="icon"><Link href="/admin/pages"><ArrowLeft /></Link></Button>
          <h1 className="text-2xl font-bold tracking-tight">{page ? 'Edit Page' : 'New Page'}</h1>
        </div>
        <div className="flex items-center gap-2">
          {canView && (
            <Button asChild variant="outline" size="sm">
              <a href={`/${slug}`} target="_blank" rel="noreferrer"><ExternalLink /> View</a>
            </Button>
          )}
          <Button type="submit" disabled={pending}>{pending ? 'Saving…' : 'Save'}</Button>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_280px]">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input id="title" name="title" value={title} onChange={(e) => setTitle(e.target.value)} required placeholder="Page title" />
          </div>

          <div className="space-y-2">
            <Label>Sections</Label>
            <BlockEditor initial={page?.blocks} />
          </div>

          <SeoPanel post={page} title={title} slug={slug} content={richText(page?.blocks)} excerpt={page?.meta_description} />
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader className="pb-3"><CardTitle>Publish</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Status</Label>
                <Select value={status} onValueChange={setStatus}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="draft">Draft</SelectItem>
                    <SelectItem value="published">Published</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="slug">Slug (URL path)</Label>
                <Input id="slug" value={slug} onChange={(e) => { setSlugTouched(true); setSlug(e.target.value); }} placeholder="summer-promo" />
                <p className="text-xs text-muted-foreground">adetcstudios.com/{slug || 'path'}</p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="published_at">Publish date</Label>
                <Input id="published_at" name="published_at" type="datetime-local" defaultValue={toLocal(page?.published_at)} />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </form>
  );
}
