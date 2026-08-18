'use client';

import { useState, useTransition } from 'react';
import { toast } from 'sonner';
import { Trash2 } from 'lucide-react';
import { deletePost } from '@/app/(admin)/admin/actions';
import { Button } from '@/components/ui/button';
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose,
} from '@/components/ui/dialog';

export default function PostActions({ id }) {
  const [pending, start] = useTransition();
  const [open, setOpen] = useState(false);

  const remove = () =>
    start(async () => {
      const res = await deletePost(id);
      if (res?.error) toast.error(res.error);
      else toast.success('Post deleted');
      setOpen(false);
    });

  return (
    <>
      <Button variant="ghost" size="icon" disabled={pending} onClick={() => setOpen(true)} aria-label="Delete" title="Delete">
        <Trash2 className="text-destructive" />
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete this post?</DialogTitle>
            <DialogDescription>This can’t be undone. The post is removed permanently.</DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild><Button variant="outline">Cancel</Button></DialogClose>
            <Button variant="destructive" disabled={pending} onClick={remove}>Delete</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
