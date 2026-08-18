'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function PostsFilterBar() {
  const router = useRouter();
  const params = useSearchParams();
  const q = params.get('q') || '';
  const status = params.get('status') || 'all';

  const push = (next) => {
    const sp = new URLSearchParams(params.toString());
    Object.entries(next).forEach(([k, v]) => {
      if (!v || v === 'all') sp.delete(k);
      else sp.set(k, v);
    });
    router.replace(`/admin/posts${sp.toString() ? `?${sp}` : ''}`);
  };

  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
      <div className="relative flex-1">
        <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          defaultValue={q}
          placeholder="Search posts…"
          className="pl-9"
          onChange={(e) => push({ q: e.target.value })}
        />
      </div>
      <Select value={status} onValueChange={(v) => push({ status: v })}>
        <SelectTrigger className="sm:w-44"><SelectValue /></SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All statuses</SelectItem>
          <SelectItem value="published">Published</SelectItem>
          <SelectItem value="draft">Draft</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
