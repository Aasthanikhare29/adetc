import { serverClient } from '@/lib/supabase/server';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export const dynamic = 'force-dynamic';

export default async function SettingsPage() {
  const supabase = await serverClient();
  const { data: { user } } = await supabase.auth.getUser();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Settings</h1>
        <p className="text-sm text-muted-foreground">Account and site configuration.</p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Account</CardTitle>
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
