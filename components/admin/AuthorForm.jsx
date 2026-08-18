'use client';

import { useActionState, useEffect } from 'react';
import { toast } from 'sonner';
import { saveSettings } from '@/app/(admin)/admin/actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

export default function AuthorForm({ settings }) {
  const [state, action, pending] = useActionState(saveSettings, {});

  useEffect(() => {
    if (state?.ok) toast.success('Author saved');
    else if (state?.error) toast.error(state.error);
  }, [state]);

  return (
    <form action={action} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="author_name">Name</Label>
          <Input id="author_name" name="author_name" defaultValue={settings?.author_name || ''} placeholder="Jane Doe" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="author_title">Title / role</Label>
          <Input id="author_title" name="author_title" defaultValue={settings?.author_title || ''} placeholder="Founder, AdEtc Studios" />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="author_bio">Bio</Label>
        <Textarea id="author_bio" name="author_bio" defaultValue={settings?.author_bio || ''} placeholder="Short bio establishing expertise (E-E-A-T)." />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="author_photo">Photo URL</Label>
          <Input id="author_photo" name="author_photo" defaultValue={settings?.author_photo || ''} placeholder="https://…" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="author_url">Profile URL</Label>
          <Input id="author_url" name="author_url" defaultValue={settings?.author_url || ''} placeholder="https://…/about" />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="author_sameas">Social profiles (sameAs)</Label>
        <Textarea id="author_sameas" name="author_sameas" defaultValue={(settings?.author_sameas || []).join('\n')} placeholder="One URL per line — LinkedIn, X, etc." />
        <p className="text-xs text-muted-foreground">Feeds the Person schema. Strengthens author entity for AEO/GEO.</p>
      </div>
      <Button type="submit" disabled={pending}>{pending ? 'Saving…' : 'Save author'}</Button>
    </form>
  );
}
