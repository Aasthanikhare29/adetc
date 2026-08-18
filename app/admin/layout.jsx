import './admin.css';

export const metadata = {
  title: 'Admin',
  robots: { index: false, follow: false },
};

// ponytail: fixed overlay hides the inherited marketing chrome. Proper fix =
// route-group root layouts (app/(site) + app/(admin)); do it if admin grows.
export default function AdminLayout({ children }) {
  return (
    <div className="admin-overlay">
      <div className="admin-wrap">{children}</div>
    </div>
  );
}
