import * as React from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';

// Tonal status pill: 12% tinted background + solid token text. Never bright.
const badgeVariants = cva(
  'inline-flex items-center rounded-[4px] px-2 py-0.5 text-xs font-medium',
  {
    variants: {
      variant: {
        neutral: 'tone-neutral',
        success: 'tone-success',
        warning: 'tone-warning',
        danger: 'tone-danger',
        info: 'tone-info',
      },
    },
    defaultVariants: { variant: 'neutral' },
  }
);

function Badge({ className, variant, ...props }) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
