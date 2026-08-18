import { serverClient } from '@/lib/supabase/server';
import PageHeader from '@/components/admin/PageHeader';
import SubscribersPanel from '@/components/admin/SubscribersPanel';

export const dynamic = 'force-dynamic';

export default async function SubscribersPage() {
  const supabase = await serverClient();
  const { data } = await supabase
    .from('subscribers')
    .select('id,email,created_at')
    .order('created_at', { ascending: false });
  const list = data || [];

  return (
    <div className="space-y-6">
      <PageHeader title="Subscribers" description={`${list.length} newsletter subscriber${list.length === 1 ? '' : 's'}`} />
      <SubscribersPanel subscribers={list} />
    </div>
  );
}
