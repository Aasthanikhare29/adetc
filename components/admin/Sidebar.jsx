'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, FileText, Settings, LogOut, PanelLeftClose, PanelLeft } from 'lucide-react';
import { cn } from '@/lib/utils';
import { signOut } from '@/app/(admin)/admin/actions';

const GROUPS = [
  {
    label: 'Content',
    items: [
      { href: '/admin', label: 'Dashboard', icon: LayoutDashboard, exact: true },
      { href: '/admin/posts', label: 'Posts', icon: FileText },
    ],
  },
  {
    label: 'System',
    items: [{ href: '/admin/settings', label: 'Settings', icon: Settings }],
  },
];

export default function Sidebar({ email }) {
  const pathname = usePathname();
  // Default collapsed; restore the saved choice after mount (avoids SSR mismatch).
  const [collapsed, setCollapsed] = useState(true);
  useEffect(() => {
    const saved = localStorage.getItem('admin:sidebar-collapsed');
    if (saved !== null) setCollapsed(saved === '1');
  }, []);
  const toggle = () =>
    setCollapsed((v) => {
      const next = !v;
      localStorage.setItem('admin:sidebar-collapsed', next ? '1' : '0');
      return next;
    });

  return (
    <aside
      className={cn(
        'sticky top-0 flex h-screen shrink-0 flex-col border-r border-sidebar-border bg-sidebar text-sidebar-foreground',
        collapsed ? 'w-14' : 'w-56'
      )}
    >
      {/* workspace mark */}
      <div className={cn('flex h-14 items-center gap-2.5 border-b border-sidebar-border px-3', collapsed && 'justify-center')}>
        <div className="flex size-8 shrink-0 items-center justify-center rounded-[4px] bg-primary text-sm font-bold text-primary-foreground">
          A
        </div>
        {!collapsed && <span className="truncate text-sm font-semibold tracking-tight">Ad Etc Studios</span>}
      </div>

      {/* nav */}
      <nav className="flex-1 overflow-y-auto py-3">
        {GROUPS.map((group) => (
          <div key={group.label} className="mb-4 px-2">
            {!collapsed && (
              <p className="px-2 pb-1.5 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                {group.label}
              </p>
            )}
            <div className="space-y-0.5">
              {group.items.map(({ href, label, icon: Icon, exact }) => {
                const active = exact ? pathname === href : pathname.startsWith(href);
                return (
                  <Link
                    key={href}
                    href={href}
                    title={collapsed ? label : undefined}
                    className={cn(
                      'relative flex h-9 items-center gap-3 rounded-[4px] px-3 text-sm transition-colors duration-150',
                      collapsed && 'justify-center px-0',
                      active
                        ? 'bg-surface-hover font-medium text-foreground'
                        : 'text-muted-foreground hover:bg-surface-hover'
                    )}
                  >
                    {active && <span className="absolute left-0 top-0 h-full w-0.5 bg-brand" />}
                    <Icon className="size-4 shrink-0" />
                    {!collapsed && <span className="truncate">{label}</span>}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      {/* footer */}
      <div className="border-t border-sidebar-border p-2">
        <button
          type="button"
          onClick={toggle}
          title={collapsed ? 'Expand' : 'Collapse'}
          className={cn(
            'mb-1 flex h-9 w-full items-center gap-3 rounded-[4px] px-3 text-sm text-muted-foreground transition-colors duration-150 hover:bg-surface-hover',
            collapsed && 'justify-center px-0'
          )}
        >
          {collapsed ? <PanelLeft className="size-4 shrink-0" /> : <><PanelLeftClose className="size-4 shrink-0" /> <span>Collapse</span></>}
        </button>
        {!collapsed && email && <p className="truncate px-3 py-1 text-xs text-muted-foreground">{email}</p>}
        <form action={signOut}>
          <button
            type="submit"
            title={collapsed ? 'Sign out' : undefined}
            className={cn(
              'flex h-9 w-full items-center gap-3 rounded-[4px] px-3 text-sm text-muted-foreground transition-colors duration-150 hover:bg-surface-hover',
              collapsed && 'justify-center px-0'
            )}
          >
            <LogOut className="size-4 shrink-0" />
            {!collapsed && <span>Sign out</span>}
          </button>
        </form>
      </div>
    </aside>
  );
}
