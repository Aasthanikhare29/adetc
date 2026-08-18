import './admin.css';
import { Toaster } from '@/components/ui/sonner';

export const metadata = {
  title: 'Admin',
  robots: { index: false, follow: false },
};

// Admin shell root. Own root layout (app/(admin)/layout.jsx) means no marketing
// CSS reaches here; .admin-root scopes all Tailwind/shadcn tokens + the reset.
// The sidebar shell lives in the (panel) group so /admin/login stays bare.
export default function AdminLayout({ children }) {
  return (
    <div className="admin-root min-h-screen">
      {children}
      <Toaster position="top-right" />
    </div>
  );
}
