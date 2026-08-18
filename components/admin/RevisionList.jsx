'use client';

import { useState, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { History } from 'lucide-react';
import { restoreRevision } from '@/app/(admin)/admin/actions';
import { Button } from '@/components/ui/button';

export default function RevisionList({ revisions }) {
  const router = useRouter();
  const [pending, start] = useTransition();
  const [busy, setBusy] = useState(null);

  if (!revisions?.length) {
    return <p className="text-xs text-muted-foreground">No previous versions yet. A snapshot is saved each time you publish.</p>;
  }

  const restore = (id) =>
    start(async () => {
      setBusy(id);
      const res = await restoreRevision(id);
      setBusy(null);
      if (res?.error) toast.error(res.error);
      else { toast.success('Version restored'); router.refresh(); }
    });

  return (
    <ul className="space-y-1.5">
      {revisions.map((r) => (
        <li key={r.id} className="flex items-center gap-2 text-xs">
          <History className="size-3.5 shrink-0 text-muted-foreground" />
          <span className="flex-1 text-muted-foreground">
            {new Date(r.created_at).toLocaleString()}{r.note ? ` · ${r.note}` : ''}
          </span>
          <Button type="button" variant="secondary" size="sm" disabled={pending} onClick={() => restore(r.id)}>
            {busy === r.id ? '…' : 'Restore'}
          </Button>
        </li>
      ))}
    </ul>
  );
}
