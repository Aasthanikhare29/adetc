'use client';

import { useTransition } from 'react';
import { setStatus, deletePost } from '@/app/admin/actions';

export default function PostActions({ id, status }) {
  const [pending, start] = useTransition();
  const next = status === 'published' ? 'draft' : 'published';

  return (
    <>
      <button
        className="admin-btn"
        disabled={pending}
        onClick={() => start(() => setStatus(id, next))}
      >
        {status === 'published' ? 'Unpublish' : 'Publish'}
      </button>
      <button
        className="admin-btn admin-btn-danger"
        disabled={pending}
        onClick={() => {
          if (confirm('Delete this post?')) start(() => deletePost(id));
        }}
      >
        Delete
      </button>
    </>
  );
}
