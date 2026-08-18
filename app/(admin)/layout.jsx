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
      <head>
        {/* Reuse the site's self-hosted Poppins (no new dep, no build fetch). */}
        <link rel="stylesheet" href="/assets/webfonts/font-family-poppins.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}
