'use client';

import { useState, useTransition } from 'react';
import { toast } from 'sonner';
import { Eye, EyeOff, Trash2 } from 'lucide-react';
import { setStatus, deletePost } from '@/app/(admin)/admin/actions';
import { Button } from '@/components/ui/button';
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose,
} from '@/components/ui/dialog';

export default function PostActions({ id, status }) {
  const [pending, start] = useTransition();
  const [confirmOpen, setConfirmOpen] = useState(false);
  const next = status === 'published' ? 'draft' : 'published';

  const toggle = () =>
    start(async () => {
      const res = await setStatus(id, next);
      if (res?.error) toast.error(res.error);
      else toast.success(next === 'published' ? 'Post published' : 'Moved to draft');
    });

  const remove = () =>
    start(async () => {
      const res = await deletePost(id);
      if (res?.error) toast.error(res.error);
      else toast.success('Post deleted');
      setConfirmOpen(false);
    });

  return (
    <>
      <Button variant="ghost" size="sm" disabled={pending} onClick={toggle}>
        {status === 'published' ? <EyeOff /> : <Eye />}
        {status === 'published' ? 'Unpublish' : 'Publish'}
      </Button>
      <Button variant="ghost" size="icon" disabled={pending} onClick={() => setConfirmOpen(true)} aria-label="Delete">
        <Trash2 className="text-destructive" />
      </Button>

      <Dialog open={confirmOpen} onOpenChange={setConfirmOpen}>
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
