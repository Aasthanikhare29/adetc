import { cookies } from 'next/headers';
import { createServerClient } from '@supabase/ssr';

// Cookie-bound client for the admin area (server components + server actions).
export async function serverClient() {
  const cookieStore = await cookies();
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(list) {
          // In server components cookies() is read-only; middleware refreshes the
          // session, so ignore write errors here.
          try {
            list.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            );
          } catch {}
        },
      },
    }
  );
}
