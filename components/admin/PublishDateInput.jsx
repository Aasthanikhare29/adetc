'use client';

import { useEffect, useState } from 'react';
import { Input } from '@/components/ui/input';

// <input type="datetime-local"> speaks the browser's local time; the DB stores UTC.
// Convert here (in the browser) and submit a UTC ISO string, so the server's
// timezone never matters.
function toLocalInput(iso) {
  if (!iso) return '';
  const d = new Date(iso);
  return new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString().slice(0, 16);
}

export default function PublishDateInput({ id = 'published_at', value }) {
  const [iso, setIso] = useState(value || '');
  // local time is only known in the browser — render empty on the server to avoid a hydration mismatch
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <>
      <input type="hidden" name="published_at" value={iso} />
      <Input
        id={id}
        type="datetime-local"
        value={mounted ? toLocalInput(iso) : ''}
        onChange={(e) => setIso(e.target.value ? new Date(e.target.value).toISOString() : '')}
      />
    </>
  );
}
