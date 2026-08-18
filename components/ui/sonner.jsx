'use client';

import { Toaster as Sonner } from 'sonner';

// Fixed to the admin light theme tokens (admin currently renders light).
export function Toaster(props) {
  return (
    <Sonner
      className="admin-root"
      toastOptions={{
        classNames: {
          toast: 'group rounded-md border border-border bg-popover text-popover-foreground shadow-lg',
          description: 'text-muted-foreground',
          actionButton: 'bg-primary text-primary-foreground',
          cancelButton: 'bg-muted text-muted-foreground',
        },
      }}
      {...props}
    />
  );
}
