import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

let supabase = null;

if (supabaseUrl && supabaseServiceKey) {
  supabase = createClient(supabaseUrl, supabaseServiceKey, {
    auth: { persistSession: false },
  });
} else {
  console.warn(
    'Supabase environment variables are not configured. The contact form will be unavailable until SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY are set.'
  );
}

export { supabase };
