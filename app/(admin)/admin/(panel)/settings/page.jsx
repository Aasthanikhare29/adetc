import { serverClient } from '@/lib/supabase/server';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import PageHeader from '@/components/admin/PageHeader';
import AuthorForm from '@/components/admin/AuthorForm';

export const dynamic = 'force-dynamic';

export default async function SettingsPage() {
  const supabase = await serverClient();
  const [{ data: { user } }, { data: settings }] = await Promise.all([
    supabase.auth.getUser(),
    supabase.from('site_settings').select('*').eq('id', 1).maybeSingle(),
  ]);

  return (
    <div className="space-y-6">
      <PageHeader title="Settings" description="Account and author identity." />

      <Card>
        <CardHeader>
          <CardTitle>Author (E-E-A-T)</CardTitle>
          <CardDescription>Applied to every post as the byline + Person schema. Improves author trust for search + answer engines.</CardDescription>
        </CardHeader>
        <CardContent><AuthorForm settings={settings} /></CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Account</CardTitle>
          <CardDescription>Signed in as the blog administrator.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-1 text-sm">
          <div className="flex justify-between border-b border-border py-2">
            <span className="text-muted-foreground">Email</span><span>{user?.email}</span>
          </div>
          <div className="flex justify-between py-2">
            <span className="text-muted-foreground">Password</span>
            <span className="text-muted-foreground">Change it in the Supabase dashboard → Authentication</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
