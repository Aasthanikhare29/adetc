'use client';

import { useState } from 'react';
import { Plus, Trash2 } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

// Q&A repeater → FAQPage schema. Serializes to a hidden `faq` JSON input.
export default function FaqEditor({ initial }) {
  const [items, setItems] = useState(Array.isArray(initial) && initial.length ? initial : []);

  const update = (i, key, val) =>
    setItems((arr) => arr.map((it, j) => (j === i ? { ...it, [key]: val } : it)));
  const add = () => setItems((arr) => [...arr, { q: '', a: '' }]);
  const remove = (i) => setItems((arr) => arr.filter((_, j) => j !== i));

  return (
    <div className="space-y-3">
      <input type="hidden" name="faq" value={JSON.stringify(items.filter((it) => it.q && it.a))} />
      {items.map((it, i) => (
        <div key={i} className="space-y-2 rounded-lg border border-border p-3">
          <div className="flex items-center gap-2">
            <Input placeholder="Question" value={it.q} onChange={(e) => update(i, 'q', e.target.value)} />
            <Button type="button" variant="ghost" size="icon" onClick={() => remove(i)} aria-label="Remove">
              <Trash2 className="text-destructive" />
            </Button>
          </div>
          <Textarea placeholder="Answer" value={it.a} onChange={(e) => update(i, 'a', e.target.value)} />
        </div>
      ))}
      <Button type="button" variant="secondary" size="sm" onClick={add}><Plus /> Add question</Button>
    </div>
  );
}
