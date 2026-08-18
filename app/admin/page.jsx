import Link from 'next/link';
import { serverClient } from '@/lib/supabase/server';
import { signOut } from './actions';
import PostActions from '@/components/admin/PostActions';

export const dynamic = 'force-dynamic';

export default async function AdminHome() {
  const supabase = await serverClient();
  const { data: posts } = await supabase
    .from('posts')
    .select('id,slug,title,status,updated_at,href')
    .order('updated_at', { ascending: false });

  return (
    <>
      <div className="admin-topbar">
        <h1>Posts</h1>
        <div style={{ display: 'flex', gap: 10 }}>
          <Link className="admin-btn admin-btn-primary" href="/admin/posts/new">New Post</Link>
          <form action={signOut}>
            <button className="admin-btn" type="submit">Sign out</button>
          </form>
        </div>
      </div>

      <div className="admin-card">
        <ul className="admin-list">
          {(posts || []).length === 0 && (
            <li><span className="meta">No posts yet.</span></li>
          )}
          {(posts || []).map((p) => (
            <li key={p.id}>
              <div className="grow">
                <div className="title">{p.title}</div>
                <div className="meta">
                  /{p.slug}{p.href ? ' · legacy page' : ''} · updated {new Date(p.updated_at).toLocaleDateString()}
                </div>
              </div>
              <span className={`admin-badge ${p.status}`}>{p.status}</span>
              <Link className="admin-btn" href={`/admin/posts/${p.id}`}>Edit</Link>
              <PostActions id={p.id} status={p.status} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
