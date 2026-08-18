'use client';

import { useState, useTransition } from 'react';
import { toast } from 'sonner';
import { Check, Undo2, Trash2 } from 'lucide-react';
import { setContactHandled, deleteContact } from '@/app/(admin)/admin/actions';
import { Button } from '@/components/ui/button';
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose,
} from '@/components/ui/dialog';

export default function MessageActions({ id, handled }) {
  const [pending, start] = useTransition();
  const [open, setOpen] = useState(false);

  const toggle = () =>
    start(async () => {
      const res = await setContactHandled(id, !handled);
      if (res?.error) toast.error(res.error);
      else toast.success(handled ? 'Marked unread' : 'Marked handled');
    });

  const remove = () =>
    start(async () => {
      const res = await deleteContact(id);
      if (res?.error) toast.error(res.error);
      else toast.success('Message deleted');
      setOpen(false);
    });

  return (
    <div className="flex items-center justify-end gap-1">
      <Button variant="ghost" size="icon" disabled={pending} onClick={toggle} title={handled ? 'Mark unread' : 'Mark handled'}>
        {handled ? <Undo2 /> : <Check />}
      </Button>
      <Button variant="ghost" size="icon" disabled={pending} onClick={() => setOpen(true)} title="Delete" aria-label="Delete">
        <Trash2 className="text-destructive" />
      </Button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete this message?</DialogTitle>
            <DialogDescription>This can’t be undone.</DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild><Button variant="outline">Cancel</Button></DialogClose>
            <Button variant="destructive" disabled={pending} onClick={remove}>Delete</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
