import * as React from 'react';
import { cn } from '@/lib/utils';

const Textarea = React.forwardRef(({ className, ...props }, ref) => (
  <textarea
    ref={ref}
    className={cn(
      'flex min-h-[70px] w-full rounded-lg border border-input bg-background px-3 py-2 text-sm transition-colors duration-150 placeholder:text-muted-foreground hover:border-brand focus:border-brand disabled:cursor-not-allowed disabled:opacity-50',
      className
    )}
    {...props}
  />
));
Textarea.displayName = 'Textarea';

export { Textarea };
