import { serverClient } from '@/lib/supabase/server';
import Sidebar from '@/components/admin/Sidebar';

export const dynamic = 'force-dynamic';

export default async function PanelLayout({ children }) {
  const supabase = await serverClient();
  const { data: { user } } = await supabase.auth.getUser();

  return (
    <div className="flex min-h-screen">
      <Sidebar email={user?.email} />
      <main className="flex-1 bg-background">
        <div className="mx-auto max-w-5xl px-6 py-8">{children}</div>
      </main>
    </div>
  );
}
