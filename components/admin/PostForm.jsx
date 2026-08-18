'use client';

import { useActionState, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { toast } from 'sonner';
import { ArrowLeft, ImagePlus, ExternalLink } from 'lucide-react';
import { savePost } from '@/app/(admin)/admin/actions';
import Editor from './Editor';
import FaqEditor from './FaqEditor';
import SeoAnalysis from './SeoAnalysis';
import CharCounter from './CharCounter';
import RevisionList from './RevisionList';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

function slugify(s) {
  return String(s).toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}
async function upload(file) {
  const fd = new FormData();
  fd.append('file', file);
  const res = await fetch('/admin/api/upload', { method: 'POST', body: fd });
  const json = await res.json();
  if (!res.ok) throw new Error(json.error || 'Upload failed');
  return json.url;
}
const toLocal = (iso) => (iso ? new Date(iso).toISOString().slice(0, 16) : '');

export default function PostForm({ post, revisions }) {
  const router = useRouter();
  const [state, action, pending] = useActionState(savePost, {});

  const [title, setTitle] = useState(post?.title || '');
  const [slug, setSlug] = useState(post?.slug || '');
  const [slugTouched, setSlugTouched] = useState(Boolean(post?.slug));
  const [status, setStatus] = useState(post?.status || 'draft');
  const [content, setContent] = useState(post?.content_html || '');
  const [cover, setCover] = useState(post?.image || '');
  const [coverAlt, setCoverAlt] = useState(post?.image_alt || '');
  const [ogImage, setOgImage] = useState(post?.og_image || '');
  const [robots, setRobots] = useState(post?.robots || 'index,follow');
  const [metaTitle, setMetaTitle] = useState(post?.meta_title || '');
  const [metaDescription, setMetaDescription] = useState(post?.meta_description || '');
  const [ogTitle, setOgTitle] = useState(post?.og_title || '');
  const [ogDescription, setOgDescription] = useState(post?.og_description || '');
  const [focusKeyword, setFocusKeyword] = useState(post?.focus_keyword || '');
  const [tags, setTags] = useState((post?.tags || []).join(', '));
  const coverRef = useRef(null);

  useEffect(() => { if (!slugTouched) setSlug(slugify(title)); }, [title, slugTouched]);

  useEffect(() => {
    if (state?.ok) {
      toast.success(state.status === 'published' ? 'Published' : 'Saved');
      if (!post && state.id) router.replace(`/admin/posts/${state.id}`);
      else router.refresh();
    } else if (state?.error) toast.error(state.error);
  }, [state]); // eslint-disable-line react-hooks/exhaustive-deps

  const uploadCover = async (e) => {
    const file = e.target.files?.[0];
    e.target.value = '';
    if (!file) return;
    try { setCover(await upload(file)); toast.success('Cover uploaded'); }
    catch (err) { toast.error(err.message); }
  };

  const canPreview = post && status === 'published' && !post.href && content;
  const tagChips = tags.split(',').map((t) => t.trim()).filter(Boolean);

  return (
    <form action={action} className="space-y-6">
      {post?.id && <input type="hidden" name="id" value={post.id} />}
      <input type="hidden" name="content_html" value={content} />
      <input type="hidden" name="image" value={cover} />
      <input type="hidden" name="og_image" value={ogImage} />
      <input type="hidden" name="status" value={status} />
      <input type="hidden" name="slug" value={slug} />
      <input type="hidden" name="robots" value={robots} />

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

      <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
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

          <Card>
            <CardHeader className="pb-2"><CardTitle>TL;DR / Key takeaway</CardTitle></CardHeader>
            <CardContent>
              <Textarea name="tldr" defaultValue={post?.tldr || ''} placeholder="One-paragraph summary answer engines can quote." />
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2"><CardTitle>FAQ</CardTitle></CardHeader>
            <CardContent><FaqEditor initial={post?.faq} /></CardContent>
          </Card>
        </div>

        {/* sidebar column */}
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
                <Label htmlFor="slug">Slug</Label>
                <Input id="slug" value={slug} onChange={(e) => { setSlugTouched(true); setSlug(e.target.value); }} placeholder="post-url" />
                <p className="text-xs text-muted-foreground">/blog/{slug || 'post-url'}</p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="published_at">Publish date</Label>
                <Input id="published_at" name="published_at" type="datetime-local" defaultValue={toLocal(post?.published_at)} />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3"><CardTitle>Featured image</CardTitle></CardHeader>
            <CardContent className="space-y-2">
              {cover ? (
                <img src={cover} alt="" className="w-full rounded-lg border border-border object-cover" />
              ) : (
                <div className="flex h-24 items-center justify-center rounded-lg border border-dashed border-border text-xs text-muted-foreground">No image</div>
              )}
              <Button type="button" variant="secondary" size="sm" className="w-full" onClick={() => coverRef.current?.click()}>
                <ImagePlus /> {cover ? 'Replace' : 'Upload'}
              </Button>
              <input ref={coverRef} type="file" accept="image/*" hidden onChange={uploadCover} />
              <Input name="image_alt" value={coverAlt} onChange={(e) => setCoverAlt(e.target.value)} placeholder="Featured image alt text" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3"><CardTitle>SEO</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="focus_keyword">Focus keyword</Label>
                <Input id="focus_keyword" name="focus_keyword" value={focusKeyword} onChange={(e) => setFocusKeyword(e.target.value)} placeholder="main keyword" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="secondary_keywords">Supporting keywords</Label>
                <Input id="secondary_keywords" name="secondary_keywords" defaultValue={(post?.secondary_keywords || []).join(', ')} placeholder="comma, separated" />
              </div>
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <Label htmlFor="meta_title">Meta title</Label>
                  <CharCounter value={metaTitle} min={30} max={60} />
                </div>
                <Input id="meta_title" name="meta_title" value={metaTitle} onChange={(e) => setMetaTitle(e.target.value)} placeholder={title || 'Search title'} />
              </div>
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <Label htmlFor="meta_description">Meta description</Label>
                  <CharCounter value={metaDescription} min={120} max={160} />
                </div>
                <Textarea id="meta_description" name="meta_description" value={metaDescription} onChange={(e) => setMetaDescription(e.target.value)} placeholder="Search snippet" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="canonical">Canonical URL</Label>
                <Input id="canonical" name="canonical" defaultValue={post?.canonical || ''} placeholder="leave blank = self" />
              </div>
              <div className="space-y-2">
                <Label>Robots</Label>
                <Select value={robots} onValueChange={setRobots}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="index,follow">index, follow</SelectItem>
                    <SelectItem value="noindex,follow">noindex, follow</SelectItem>
                    <SelectItem value="index,nofollow">index, nofollow</SelectItem>
                    <SelectItem value="noindex,nofollow">noindex, nofollow</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="border-t border-border pt-4">
                <SeoAnalysis
                  title={title}
                  slug={slug}
                  contentHtml={content}
                  metaTitle={metaTitle || title}
                  metaDescription={metaDescription}
                  focusKeyword={focusKeyword}
                  featuredAlt={coverAlt}
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3"><CardTitle>Social (Open Graph)</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <Label htmlFor="og_title">OG title</Label>
                  <CharCounter value={ogTitle} min={0} max={60} />
                </div>
                <Input id="og_title" name="og_title" value={ogTitle} onChange={(e) => setOgTitle(e.target.value)} placeholder={metaTitle || title} />
              </div>
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <Label htmlFor="og_description">OG description</Label>
                  <CharCounter value={ogDescription} min={0} max={110} />
                </div>
                <Textarea id="og_description" name="og_description" value={ogDescription} onChange={(e) => setOgDescription(e.target.value)} placeholder={metaDescription} />
              </div>
              <div className="space-y-2">
                <Label>OG image</Label>
                {ogImage ? (
                  <img src={ogImage} alt="" className="w-full rounded-lg border border-border object-cover" />
                ) : (
                  <div className="flex h-24 items-center justify-center rounded-lg border border-dashed border-border text-xs text-muted-foreground">Falls back to featured (1200×630 ideal)</div>
                )}
                <OgUploader onDone={setOgImage} has={Boolean(ogImage)} />
                <Input name="og_image_alt" defaultValue={post?.og_image_alt || ''} placeholder="OG image alt text" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3"><CardTitle>Organize</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Input id="category" name="category" defaultValue={post?.category || ''} placeholder="e.g. Production Insights" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="tags">Tags</Label>
                <Input id="tags" name="tags" value={tags} onChange={(e) => setTags(e.target.value)} placeholder="comma, separated" />
                {tagChips.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {tagChips.map((t) => <span key={t} className="tone-neutral rounded-[4px] px-2 py-0.5 text-xs">#{t}</span>)}
                  </div>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="excerpt">Excerpt</Label>
                <Textarea id="excerpt" name="excerpt" defaultValue={post?.excerpt || ''} placeholder="Short summary for cards + fallback meta" />
              </div>
            </CardContent>
          </Card>

          {post && (
            <Card>
              <CardHeader className="pb-3"><CardTitle>Version history</CardTitle></CardHeader>
              <CardContent><RevisionList revisions={revisions} /></CardContent>
            </Card>
          )}
        </div>
      </div>
    </form>
  );
}

function OgUploader({ onDone, has }) {
  const ref = useRef(null);
  const pick = async (e) => {
    const file = e.target.files?.[0];
    e.target.value = '';
    if (!file) return;
    try { onDone(await upload(file)); toast.success('OG image uploaded'); }
    catch (err) { toast.error(err.message); }
  };
  return (
    <>
      <Button type="button" variant="secondary" size="sm" className="w-full" onClick={() => ref.current?.click()}>
        <ImagePlus /> {has ? 'Replace' : 'Upload OG image'}
      </Button>
      <input ref={ref} type="file" accept="image/*" hidden onChange={pick} />
    </>
  );
}
