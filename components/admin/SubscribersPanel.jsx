'use client';

import { useState, useTransition } from 'react';
import { toast } from 'sonner';
import { Copy, Trash2, Mail } from 'lucide-react';
import { deleteSubscriber } from '@/app/(admin)/admin/actions';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose,
} from '@/components/ui/dialog';

export default function SubscribersPanel({ subscribers }) {
  const [pending, start] = useTransition();
  const [target, setTarget] = useState(null); // subscriber to delete

  const copyAll = async () => {
    const emails = subscribers.map((s) => s.email).join(', ');
    try { await navigator.clipboard.writeText(emails); toast.success(`Copied ${subscribers.length} emails`); }
    catch { toast.error('Copy failed'); }
  };

  const remove = () =>
    start(async () => {
      const res = await deleteSubscriber(target.id);
      if (res?.error) toast.error(res.error);
      else toast.success('Subscriber removed');
      setTarget(null);
    });

  if (!subscribers.length) {
    return (
      <Card className="flex flex-col items-center gap-3 px-6 py-16 text-center">
        <Mail className="size-8 text-muted-foreground" />
        <p className="text-sm text-muted-foreground">No subscribers yet.</p>
      </Card>
    );
  }

  return (
    <>
      <div className="mb-3 flex justify-end">
        <Button variant="secondary" size="sm" onClick={copyAll}><Copy /> Copy all emails</Button>
      </div>
      <Card className="overflow-hidden">
        <ul className="divide-y divide-border">
          {subscribers.map((s) => (
            <li key={s.id} className="flex items-center gap-3 px-4 py-2.5">
              <a href={`mailto:${s.email}`} className="flex-1 truncate hover:underline">{s.email}</a>
              <span className="text-xs text-muted-foreground">{new Date(s.created_at).toLocaleDateString()}</span>
              <Button variant="ghost" size="icon" onClick={() => setTarget(s)} title="Remove" aria-label="Remove">
                <Trash2 className="text-destructive" />
              </Button>
            </li>
          ))}
        </ul>
      </Card>

      <Dialog open={!!target} onOpenChange={(o) => !o && setTarget(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Remove subscriber?</DialogTitle>
            <DialogDescription>{target?.email} will be removed from the list.</DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild><Button variant="outline">Cancel</Button></DialogClose>
            <Button variant="destructive" disabled={pending} onClick={remove}>Remove</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
