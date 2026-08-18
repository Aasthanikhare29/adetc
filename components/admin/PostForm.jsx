'use client';

import { useActionState, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { toast } from 'sonner';
import { ArrowLeft, ImagePlus, ExternalLink } from 'lucide-react';
import { savePost } from '@/app/(admin)/admin/actions';
import Editor from './Editor';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

function slugify(s) {
  return String(s).toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}

export default function PostForm({ post }) {
  const router = useRouter();
  const [state, action, pending] = useActionState(savePost, {});
  const [content, setContent] = useState(post?.content_html || '');
  const [cover, setCover] = useState(post?.image || '');
  const [title, setTitle] = useState(post?.title || '');
  const [slug, setSlug] = useState(post?.slug || '');
  const [slugTouched, setSlugTouched] = useState(Boolean(post?.slug));
  const [status, setStatus] = useState(post?.status || 'draft');
  const coverRef = useRef(null);

  // live slug from title until the user edits the slug directly
  useEffect(() => {
    if (!slugTouched) setSlug(slugify(title));
  }, [title, slugTouched]);

  useEffect(() => {
    if (state?.ok) {
      toast.success(state.status === 'published' ? 'Published' : 'Saved');
      if (!post && state.id) router.replace(`/admin/posts/${state.id}`);
      else router.refresh();
    } else if (state?.error) {
      toast.error(state.error);
    }
  }, [state]); // eslint-disable-line react-hooks/exhaustive-deps

  const uploadCover = async (e) => {
    const file = e.target.files?.[0];
    e.target.value = '';
    if (!file) return;
    const fd = new FormData();
    fd.append('file', file);
    const res = await fetch('/admin/api/upload', { method: 'POST', body: fd });
    const json = await res.json();
    if (!res.ok) return toast.error(json.error || 'Upload failed');
    setCover(json.url);
    toast.success('Cover uploaded');
  };

  const canPreview = post && status === 'published' && !post.href && content;

  return (
    <form action={action} className="space-y-6">
      {/* hidden values submitted to the server action */}
      {post?.id && <input type="hidden" name="id" value={post.id} />}
      <input type="hidden" name="content_html" value={content} />
      <input type="hidden" name="image" value={cover} />
      <input type="hidden" name="status" value={status} />
      <input type="hidden" name="slug" value={slug} />

      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <Button asChild variant="ghost" size="icon"><Link href="/admin/posts"><ArrowLeft /></Link></Button>
          <h1 className="text-2xl font-bold tracking-tight">{post ? 'Edit Post' : 'New Post'}</h1>
        </div>
        <div className="flex items-center gap-2">
          {canPreview && (
            <Button asChild variant="outline" size="sm">
              <a href={`/blog/${slug}`} target="_blank" rel="noreferrer"><ExternalLink /> View</a>
            </Button>
          )}
          <Button type="submit" disabled={pending}>{pending ? 'Saving…' : 'Save'}</Button>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_300px]">
        {/* main column */}
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input id="title" name="title" value={title} onChange={(e) => setTitle(e.target.value)} required placeholder="Post title" />
          </div>
          <div className="space-y-2">
            <Label>Content</Label>
            <div className="rounded-lg border border-input bg-background">
              <Editor value={post?.content_html || ''} onChange={setContent} />
            </div>
          </div>
        </div>

        {/* sidebar column */}
        <div className="space-y-6">
          <Card>
            <CardHeader className="pb-3"><CardTitle className="text-base">Publish</CardTitle></CardHeader>
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
                <Label htmlFor="slug">Slug</Label>
                <Input id="slug" value={slug} onChange={(e) => { setSlugTouched(true); setSlug(e.target.value); }} placeholder="post-url" />
                <p className="text-xs text-muted-foreground">/blog/{slug || 'post-url'}</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3"><CardTitle className="text-base">Cover image</CardTitle></CardHeader>
            <CardContent className="space-y-3">
              {cover ? (
                <img src={cover} alt="cover" className="w-full rounded-md border border-border object-cover" />
              ) : (
                <div className="flex h-28 items-center justify-center rounded-md border border-dashed border-border text-xs text-muted-foreground">
                  No image
                </div>
              )}
              <Button type="button" variant="outline" size="sm" className="w-full" onClick={() => coverRef.current?.click()}>
                <ImagePlus /> {cover ? 'Replace' : 'Upload'}
              </Button>
              <input ref={coverRef} type="file" accept="image/*" hidden onChange={uploadCover} />
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3"><CardTitle className="text-base">Details</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Input id="category" name="category" defaultValue={post?.category || ''} placeholder="e.g. Production Insights" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="excerpt">Excerpt</Label>
                <Textarea id="excerpt" name="excerpt" defaultValue={post?.excerpt || ''} placeholder="Short summary for cards + SEO" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </form>
  );
}
