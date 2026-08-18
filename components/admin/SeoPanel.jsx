'use client';

import { useRef, useState } from 'react';
import { toast } from 'sonner';
import { Search, Share2, Settings2, ImagePlus, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import CharCounter from './CharCounter';
import SeoAnalysis, { seoScore } from './SeoAnalysis';

const DOMAIN = 'adetcstudios.com';

async function upload(file) {
  const fd = new FormData();
  fd.append('file', file);
  const res = await fetch('/admin/api/upload', { method: 'POST', body: fd });
  const json = await res.json();
  if (!res.ok) throw new Error(json.error || 'Upload failed');
  return json.url;
}

function scoreDot(score) {
  const tone = score >= 80 ? 'bg-[var(--tone-success)]' : score >= 50 ? 'bg-[var(--tone-warning)]' : 'bg-[var(--tone-danger)]';
  return <span className={cn('inline-block size-2.5 rounded-full', tone)} />;
}

const TABS = [
  { key: 'seo', label: 'SEO', icon: Search },
  { key: 'social', label: 'Social', icon: Share2 },
  { key: 'advanced', label: 'Advanced', icon: Settings2 },
];

export default function SeoPanel({ post, title, slug, content, coverAlt, excerpt }) {
  const [tab, setTab] = useState('seo');
  const [showAnalysis, setShowAnalysis] = useState(false);
  const [metaTitle, setMetaTitle] = useState(post?.meta_title || '');
  const [metaDescription, setMetaDescription] = useState(post?.meta_description || '');
  const [ogTitle, setOgTitle] = useState(post?.og_title || '');
  const [ogDescription, setOgDescription] = useState(post?.og_description || '');
  const [ogImage, setOgImage] = useState(post?.og_image || '');
  const [focusKeyword, setFocusKeyword] = useState(post?.focus_keyword || '');
  const [robots, setRobots] = useState(post?.robots || 'index,follow');
  const ogRef = useRef(null);

  const score = seoScore({
    title, slug, contentHtml: content,
    metaTitle: metaTitle || title, metaDescription, focusKeyword, featuredAlt: coverAlt,
  });

  const pickOg = async (e) => {
    const file = e.target.files?.[0];
    e.target.value = '';
    if (!file) return;
    try { setOgImage(await upload(file)); toast.success('OG image uploaded'); }
    catch (err) { toast.error(err.message); }
  };

  return (
    <Card>
      {/* hidden fields submitted with the form */}
      <input type="hidden" name="meta_title" value={metaTitle} />
      <input type="hidden" name="meta_description" value={metaDescription} />
      <input type="hidden" name="og_title" value={ogTitle} />
      <input type="hidden" name="og_description" value={ogDescription} />
      <input type="hidden" name="og_image" value={ogImage} />
      <input type="hidden" name="focus_keyword" value={focusKeyword} />
      <input type="hidden" name="robots" value={robots} />

      {/* tab bar */}
      <div className="flex items-center justify-between border-b border-border px-2">
        <div className="flex">
          {TABS.map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              type="button"
              onClick={() => setTab(key)}
              className={cn(
                'relative flex items-center gap-2 px-3 py-2.5 text-sm font-medium transition-colors duration-150',
                tab === key ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
              )}
            >
              <Icon className="size-4" /> {label}
              {tab === key && <span className="absolute inset-x-2 bottom-0 h-0.5 bg-brand" />}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-1.5 pr-2 text-xs text-muted-foreground">
          {scoreDot(score)} <span className="tabular-nums">{score}/100</span>
        </div>
      </div>

      <CardContent className="space-y-4 p-4">
        {/* Google snippet preview — always visible (Yoast-style) */}
        <div className="rounded-lg border border-border p-3">
          <p className="truncate text-xs text-[color:var(--tone-success)]">{DOMAIN} › blog › {slug || 'post-url'}</p>
          <p className="mt-0.5 truncate text-base text-[#1a0dab] dark:text-[#8ab4f8]">{metaTitle || title || 'Untitled post'}</p>
          <p className="mt-0.5 line-clamp-2 text-sm text-muted-foreground">
            {metaDescription || excerpt || 'Add a meta description to control the search snippet.'}
          </p>
        </div>

        {tab === 'seo' && (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="focus_keyword">Focus keyphrase</Label>
              <Input id="focus_keyword" value={focusKeyword} onChange={(e) => setFocusKeyword(e.target.value)} placeholder="main keyword you want to rank for" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="secondary_keywords">Supporting keyphrases</Label>
              <Input id="secondary_keywords" name="secondary_keywords" defaultValue={(post?.secondary_keywords || []).join(', ')} placeholder="comma, separated" />
            </div>
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <Label htmlFor="meta_title">SEO title</Label>
                <CharCounter value={metaTitle} min={30} max={60} />
              </div>
              <Input id="meta_title" value={metaTitle} onChange={(e) => setMetaTitle(e.target.value)} placeholder={title || 'Search title'} />
            </div>
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <Label htmlFor="meta_description">Meta description</Label>
                <CharCounter value={metaDescription} min={120} max={160} />
              </div>
              <Textarea id="meta_description" value={metaDescription} onChange={(e) => setMetaDescription(e.target.value)} placeholder="Search snippet" />
            </div>

            <div className="rounded-lg border border-border">
              <button
                type="button"
                onClick={() => setShowAnalysis((v) => !v)}
                className="flex w-full items-center justify-between px-3 py-2 text-sm font-medium transition-colors duration-150 hover:bg-surface-hover"
              >
                <span className="flex items-center gap-2">{scoreDot(score)} Analysis ({score}/100)</span>
                <ChevronDown className={cn('size-4 transition-transform duration-150', showAnalysis && 'rotate-180')} />
              </button>
              {showAnalysis && (
                <div className="border-t border-border p-3">
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
              )}
            </div>
          </div>
        )}

        {tab === 'social' && (
          <div className="space-y-4">
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <Label htmlFor="og_title">Social title</Label>
                <CharCounter value={ogTitle} min={0} max={60} />
              </div>
              <Input id="og_title" value={ogTitle} onChange={(e) => setOgTitle(e.target.value)} placeholder={metaTitle || title} />
            </div>
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <Label htmlFor="og_description">Social description</Label>
                <CharCounter value={ogDescription} min={0} max={110} />
              </div>
              <Textarea id="og_description" value={ogDescription} onChange={(e) => setOgDescription(e.target.value)} placeholder={metaDescription} />
            </div>
            <div className="space-y-2">
              <Label>Social image</Label>
              {/* preview card */}
              <div className="overflow-hidden rounded-lg border border-border">
                {ogImage ? (
                  <img src={ogImage} alt="" className="aspect-[1200/630] w-full object-cover" />
                ) : (
                  <div className="flex aspect-[1200/630] items-center justify-center bg-surface-hover text-xs text-muted-foreground">
                    1200×630 — falls back to featured image
                  </div>
                )}
                <div className="p-2">
                  <p className="truncate text-xs uppercase text-muted-foreground">{DOMAIN}</p>
                  <p className="truncate text-sm font-medium">{ogTitle || metaTitle || title || 'Untitled'}</p>
                  <p className="line-clamp-1 text-xs text-muted-foreground">{ogDescription || metaDescription || excerpt}</p>
                </div>
              </div>
              <div className="flex gap-2">
                <Button type="button" variant="secondary" size="sm" onClick={() => ogRef.current?.click()}>
                  <ImagePlus /> {ogImage ? 'Replace' : 'Upload'}
                </Button>
                {ogImage && <Button type="button" variant="ghost" size="sm" onClick={() => setOgImage('')}>Remove</Button>}
              </div>
              <input ref={ogRef} type="file" accept="image/*" hidden onChange={pickOg} />
              <Input name="og_image_alt" defaultValue={post?.og_image_alt || ''} placeholder="Social image alt text" />
            </div>
          </div>
        )}

        {tab === 'advanced' && (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="canonical">Canonical URL</Label>
              <Input id="canonical" name="canonical" defaultValue={post?.canonical || ''} placeholder="leave blank = self" />
              <p className="text-xs text-muted-foreground">Point elsewhere only when this content is republished from another URL.</p>
            </div>
            <div className="space-y-2">
              <Label>Search engine visibility</Label>
              <Select value={robots} onValueChange={setRobots}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="index,follow">index, follow (default)</SelectItem>
                  <SelectItem value="noindex,follow">noindex, follow</SelectItem>
                  <SelectItem value="index,nofollow">index, nofollow</SelectItem>
                  <SelectItem value="noindex,nofollow">noindex, nofollow</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
