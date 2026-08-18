import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[4px] text-sm font-medium transition-colors duration-150 disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        // exactly one of these (accent fill) should appear per view
        default: 'bg-primary text-primary-foreground hover:opacity-90',
        // gray-bordered secondary: border shifts to accent on hover
        secondary: 'border border-border bg-secondary text-secondary-foreground hover:border-brand',
        outline: 'border border-border bg-secondary text-secondary-foreground hover:border-brand',
        ghost: 'text-foreground hover:bg-surface-hover',
        destructive: 'bg-destructive text-destructive-foreground hover:opacity-90',
        link: 'text-brand underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-9 px-3.5',
        sm: 'h-8 px-3 text-xs',
        icon: 'size-9',
      },
    },
    defaultVariants: { variant: 'default', size: 'default' },
  }
);

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : 'button';
  return <Comp ref={ref} className={cn(buttonVariants({ variant, size, className }))} {...props} />;
});
Button.displayName = 'Button';

export { Button, buttonVariants };
