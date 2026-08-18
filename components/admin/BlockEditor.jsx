'use client';

import { useState } from 'react';
import { toast } from 'sonner';
import { Plus, Trash2, ChevronUp, ChevronDown, ImagePlus, GripVertical } from 'lucide-react';
import { BLOCK_TYPES, BLOCK_LABEL, newBlock } from '@/lib/blocks';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Editor from './Editor';

async function upload(file) {
  const fd = new FormData();
  fd.append('file', file);
  const res = await fetch('/admin/api/upload', { method: 'POST', body: fd });
  const json = await res.json();
  if (!res.ok) throw new Error(json.error || 'Upload failed');
  return json.url;
}

function ImageInput({ value, onChange, label = 'image' }) {
  const pick = async (e) => {
    const file = e.target.files?.[0];
    e.target.value = '';
    if (!file) return;
    try { onChange(await upload(file)); } catch (err) { toast.error(err.message); }
  };
  return (
    <div className="flex items-center gap-2">
      {value ? <img src={value} alt="" className="h-10 w-16 rounded-md border border-border object-cover" /> : null}
      <label className="cursor-pointer">
        <span className="inline-flex h-8 items-center gap-2 rounded-[4px] border border-border bg-secondary px-3 text-xs font-medium transition-colors duration-150 hover:border-brand">
          <ImagePlus className="size-3.5" /> {value ? 'Replace' : `Upload ${label}`}
        </span>
        <input type="file" accept="image/*" hidden onChange={pick} />
      </label>
      {value && <Button type="button" variant="ghost" size="sm" onClick={() => onChange('')}>Clear</Button>}
    </div>
  );
}

function Field({ label, children }) {
  return <div className="space-y-1.5"><Label>{label}</Label>{children}</div>;
}

// Repeater for cards / faq items
function Items({ items, onChange, render, addLabel, blank }) {
  const set = (i, patch) => onChange(items.map((it, j) => (j === i ? { ...it, ...patch } : it)));
  return (
    <div className="space-y-3">
      {(items || []).map((it, i) => (
        <div key={i} className="space-y-2 rounded-lg border border-border p-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-muted-foreground">Item {i + 1}</span>
            <Button type="button" variant="ghost" size="icon" onClick={() => onChange(items.filter((_, j) => j !== i))} aria-label="Remove">
              <Trash2 className="text-destructive" />
            </Button>
          </div>
          {render(it, (patch) => set(i, patch))}
        </div>
      ))}
      <Button type="button" variant="secondary" size="sm" onClick={() => onChange([...(items || []), { ...blank }])}>
        <Plus /> {addLabel}
      </Button>
    </div>
  );
}

function BlockFields({ block, onChange }) {
  const set = (patch) => onChange({ ...block, ...patch });
  switch (block.type) {
    case 'hero':
      return (
        <div className="space-y-3">
          <Field label="Heading"><Input value={block.heading} onChange={(e) => set({ heading: e.target.value })} /></Field>
          <Field label="Subheading"><Textarea value={block.subheading} onChange={(e) => set({ subheading: e.target.value })} /></Field>
          <Field label="Background image"><ImageInput value={block.image} onChange={(v) => set({ image: v })} /></Field>
          <div className="grid grid-cols-2 gap-3">
            <Field label="Button label"><Input value={block.ctaLabel} onChange={(e) => set({ ctaLabel: e.target.value })} /></Field>
            <Field label="Button link"><Input value={block.ctaHref} onChange={(e) => set({ ctaHref: e.target.value })} placeholder="/contact" /></Field>
          </div>
        </div>
      );
    case 'richtext':
      return (
        <div className="rounded-lg border border-input">
          <Editor value={block.html} onChange={(html) => set({ html })} />
        </div>
      );
    case 'image':
      return (
        <div className="space-y-3">
          <Field label="Image"><ImageInput value={block.src} onChange={(v) => set({ src: v })} /></Field>
          <Field label="Alt text"><Input value={block.alt} onChange={(e) => set({ alt: e.target.value })} /></Field>
          <Field label="Caption"><Input value={block.caption} onChange={(e) => set({ caption: e.target.value })} /></Field>
        </div>
      );
    case 'cards':
      return (
        <div className="space-y-3">
          <div className="grid grid-cols-[1fr_auto] gap-3">
            <Field label="Heading"><Input value={block.heading} onChange={(e) => set({ heading: e.target.value })} /></Field>
            <Field label="Columns">
              <Select value={String(block.columns || 3)} onValueChange={(v) => set({ columns: Number(v) })}>
                <SelectTrigger className="w-20"><SelectValue /></SelectTrigger>
                <SelectContent>{[2, 3, 4].map((n) => <SelectItem key={n} value={String(n)}>{n}</SelectItem>)}</SelectContent>
              </Select>
            </Field>
          </div>
          <Items
            items={block.items} onChange={(items) => set({ items })} addLabel="Add card"
            blank={{ title: '', text: '', image: '', href: '' }}
            render={(it, upd) => (
              <div className="space-y-2">
                <Input placeholder="Title" value={it.title} onChange={(e) => upd({ title: e.target.value })} />
                <Textarea placeholder="Text" value={it.text} onChange={(e) => upd({ text: e.target.value })} />
                <Input placeholder="Link (optional)" value={it.href} onChange={(e) => upd({ href: e.target.value })} />
                <ImageInput value={it.image} onChange={(v) => upd({ image: v })} />
              </div>
            )}
          />
        </div>
      );
    case 'faq':
      return (
        <div className="space-y-3">
          <Field label="Heading"><Input value={block.heading} onChange={(e) => set({ heading: e.target.value })} /></Field>
          <Items
            items={block.items} onChange={(items) => set({ items })} addLabel="Add question"
            blank={{ q: '', a: '' }}
            render={(it, upd) => (
              <div className="space-y-2">
                <Input placeholder="Question" value={it.q} onChange={(e) => upd({ q: e.target.value })} />
                <Textarea placeholder="Answer" value={it.a} onChange={(e) => upd({ a: e.target.value })} />
              </div>
            )}
          />
        </div>
      );
    case 'cta':
      return (
        <div className="space-y-3">
          <Field label="Heading"><Input value={block.heading} onChange={(e) => set({ heading: e.target.value })} /></Field>
          <Field label="Text"><Textarea value={block.text} onChange={(e) => set({ text: e.target.value })} /></Field>
          <div className="grid grid-cols-2 gap-3">
            <Field label="Button label"><Input value={block.buttonLabel} onChange={(e) => set({ buttonLabel: e.target.value })} /></Field>
            <Field label="Button link"><Input value={block.buttonHref} onChange={(e) => set({ buttonHref: e.target.value })} placeholder="/contact" /></Field>
          </div>
        </div>
      );
    case 'stats':
      return (
        <div className="space-y-3">
          <Field label="Heading"><Input value={block.heading} onChange={(e) => set({ heading: e.target.value })} /></Field>
          <Items
            items={block.items} onChange={(items) => set({ items })} addLabel="Add stat"
            blank={{ value: '', suffix: '', label: '' }}
            render={(it, upd) => (
              <div className="space-y-2">
                <div className="grid grid-cols-2 gap-2">
                  <Input placeholder="Value (e.g. 150)" value={it.value} onChange={(e) => upd({ value: e.target.value })} />
                  <Input placeholder="Suffix (e.g. +)" value={it.suffix} onChange={(e) => upd({ suffix: e.target.value })} />
                </div>
                <Input placeholder="Label" value={it.label} onChange={(e) => upd({ label: e.target.value })} />
              </div>
            )}
          />
        </div>
      );
    case 'testimonials':
      return (
        <div className="space-y-3">
          <Field label="Heading"><Input value={block.heading} onChange={(e) => set({ heading: e.target.value })} /></Field>
          <Items
            items={block.items} onChange={(items) => set({ items })} addLabel="Add testimonial"
            blank={{ quote: '', name: '', role: '', avatar: '' }}
            render={(it, upd) => (
              <div className="space-y-2">
                <Textarea placeholder="Quote" value={it.quote} onChange={(e) => upd({ quote: e.target.value })} />
                <div className="grid grid-cols-2 gap-2">
                  <Input placeholder="Name" value={it.name} onChange={(e) => upd({ name: e.target.value })} />
                  <Input placeholder="Role / company" value={it.role} onChange={(e) => upd({ role: e.target.value })} />
                </div>
                <ImageInput value={it.avatar} onChange={(v) => upd({ avatar: v })} label="avatar" />
              </div>
            )}
          />
        </div>
      );
    case 'team':
      return (
        <div className="space-y-3">
          <Field label="Heading"><Input value={block.heading} onChange={(e) => set({ heading: e.target.value })} /></Field>
          <Field label="Subheading"><Input value={block.subheading} onChange={(e) => set({ subheading: e.target.value })} /></Field>
          <Items
            items={block.members} onChange={(members) => set({ members })} addLabel="Add member"
            blank={{ name: '', designation: '', image: '', url: '' }}
            render={(it, upd) => (
              <div className="space-y-2">
                <div className="grid grid-cols-2 gap-2">
                  <Input placeholder="Name" value={it.name} onChange={(e) => upd({ name: e.target.value })} />
                  <Input placeholder="Designation" value={it.designation} onChange={(e) => upd({ designation: e.target.value })} />
                </div>
                <Input placeholder="Profile link (optional)" value={it.url} onChange={(e) => upd({ url: e.target.value })} />
                <ImageInput value={it.image} onChange={(v) => upd({ image: v })} label="photo" />
              </div>
            )}
          />
        </div>
      );
    case 'logos':
      return (
        <div className="space-y-3">
          <Field label="Heading"><Input value={block.heading} onChange={(e) => set({ heading: e.target.value })} /></Field>
          <Items
            items={block.logos} onChange={(logos) => set({ logos })} addLabel="Add logo"
            blank={{ image: '', alt: '' }}
            render={(it, upd) => (
              <div className="space-y-2">
                <ImageInput value={it.image} onChange={(v) => upd({ image: v })} label="logo" />
                <Input placeholder="Alt text" value={it.alt} onChange={(e) => upd({ alt: e.target.value })} />
              </div>
            )}
          />
        </div>
      );
    default:
      return null;
  }
}

export default function BlockEditor({ initial }) {
  const [blocks, setBlocks] = useState(Array.isArray(initial) ? initial : []);

  const update = (i, next) => setBlocks((arr) => arr.map((b, j) => (j === i ? next : b)));
  const remove = (i) => setBlocks((arr) => arr.filter((_, j) => j !== i));
  const move = (i, dir) =>
    setBlocks((arr) => {
      const j = i + dir;
      if (j < 0 || j >= arr.length) return arr;
      const copy = [...arr];
      [copy[i], copy[j]] = [copy[j], copy[i]];
      return copy;
    });
  const add = (type) => setBlocks((arr) => [...arr, newBlock(type)]);

  return (
    <div className="space-y-3">
      <input type="hidden" name="blocks" value={JSON.stringify(blocks)} />

      {blocks.map((b, i) => (
        <div key={i} className="rounded-lg border border-border">
          <div className="flex items-center justify-between border-b border-border px-3 py-2">
            <span className="flex items-center gap-2 text-sm font-medium">
              <GripVertical className="size-4 text-muted-foreground" /> {BLOCK_LABEL[b.type] || b.type}
            </span>
            <div className="flex items-center gap-0.5">
              <Button type="button" variant="ghost" size="icon" disabled={i === 0} onClick={() => move(i, -1)} aria-label="Move up"><ChevronUp /></Button>
              <Button type="button" variant="ghost" size="icon" disabled={i === blocks.length - 1} onClick={() => move(i, 1)} aria-label="Move down"><ChevronDown /></Button>
              <Button type="button" variant="ghost" size="icon" onClick={() => remove(i)} aria-label="Remove"><Trash2 className="text-destructive" /></Button>
            </div>
          </div>
          <div className="p-3"><BlockFields block={b} onChange={(next) => update(i, next)} /></div>
        </div>
      ))}

      <div className="flex flex-wrap gap-2 rounded-lg border border-dashed border-border p-3">
        <span className="self-center text-xs text-muted-foreground">Add block:</span>
        {BLOCK_TYPES.map((t) => (
          <Button key={t.type} type="button" variant="secondary" size="sm" onClick={() => add(t.type)}>
            <Plus /> {t.label}
          </Button>
        ))}
      </div>
    </div>
  );
}
