'use client';

import { useActionState, useRef, useState } from 'react';
import Link from 'next/link';
import { savePost } from '@/app/admin/actions';
import Editor from './Editor';

export default function PostForm({ post }) {
  const [state, action, pending] = useActionState(savePost, {});
  const [content, setContent] = useState(post?.content_html || '');
  const [cover, setCover] = useState(post?.image || '');
  const coverRef = useRef(null);

  const uploadCover = async (e) => {
    const file = e.target.files?.[0];
    e.target.value = '';
    if (!file) return;
    const fd = new FormData();
    fd.append('file', file);
    const res = await fetch('/admin/api/upload', { method: 'POST', body: fd });
    const json = await res.json();
    if (!res.ok) return alert(json.error || 'Upload failed');
    setCover(json.url);
  };

  return (
    <>
      <div className="admin-topbar">
        <h1>{post ? 'Edit Post' : 'New Post'}</h1>
        <Link className="admin-btn" href="/admin">← Back</Link>
      </div>

      <form action={action} className="admin-card" style={{ padding: 20 }}>
        {post?.id && <input type="hidden" name="id" value={post.id} />}
        <input type="hidden" name="content_html" value={content} />
        <input type="hidden" name="image" value={cover} />

        {state?.error && <p className="admin-error">{state.error}</p>}

        <div className="admin-field">
          <label htmlFor="title">Title</label>
          <input className="admin-input" id="title" name="title" defaultValue={post?.title || ''} required />
        </div>

        <div className="admin-row">
          <div className="admin-field">
            <label htmlFor="slug">Slug <span style={{ fontWeight: 400, color: '#6b7280' }}>(blank = from title)</span></label>
            <input className="admin-input" id="slug" name="slug" defaultValue={post?.slug || ''} placeholder="my-post-url" />
          </div>
          <div className="admin-field">
            <label htmlFor="category">Category</label>
            <input className="admin-input" id="category" name="category" defaultValue={post?.category || ''} />
          </div>
        </div>

        <div className="admin-field">
          <label htmlFor="excerpt">Excerpt</label>
          <textarea className="admin-textarea" id="excerpt" name="excerpt" defaultValue={post?.excerpt || ''} />
        </div>

        <div className="admin-field">
          <label>Cover image</label>
          <button type="button" className="admin-btn" onClick={() => coverRef.current?.click()}>
            {cover ? 'Replace image' : 'Upload image'}
          </button>
          <input ref={coverRef} type="file" accept="image/*" hidden onChange={uploadCover} />
          {cover && <img className="admin-cover" src={cover} alt="cover preview" />}
        </div>

        <div className="admin-field">
          <label>Content</label>
          <Editor value={post?.content_html || ''} onChange={setContent} />
        </div>

        <div className="admin-field" style={{ maxWidth: 220 }}>
          <label htmlFor="status">Status</label>
          <select className="admin-select" id="status" name="status" defaultValue={post?.status || 'draft'}>
            <option value="draft">Draft</option>
            <option value="published">Published</option>
          </select>
        </div>

        <div className="admin-actions">
          <button className="admin-btn admin-btn-primary" type="submit" disabled={pending}>
            {pending ? 'Saving…' : 'Save'}
          </button>
          <Link className="admin-btn" href="/admin">Cancel</Link>
        </div>
      </form>
    </>
  );
}
