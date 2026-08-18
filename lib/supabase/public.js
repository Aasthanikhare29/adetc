import { createClient } from '@supabase/supabase-js';

// Anon client for public, read-only queries (RLS returns published rows only).
// No cookies/session — safe to share across server-component reads.
export function publicClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    { auth: { persistSession: false } }
  );
}
