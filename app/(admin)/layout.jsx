// Minimal root layout for the admin group — deliberately NO marketing CSS,
// fonts, chrome, or bundle.js. The nested admin layout adds admin.css
// (Tailwind + shadcn) scoped under .admin-root, so nothing from the public
// site can leak in. Separate root layout keeps the public pages fully static.
export const metadata = {
  title: 'Admin',
  robots: { index: false, follow: false },
};

export default function AdminRootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
