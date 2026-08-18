import { cn } from '@/lib/utils';

// Color-coded character count. Green in range, amber under, red over.
export default function CharCounter({ value, min = 0, max }) {
  const n = (value || '').length;
  let tone = 'tone-neutral';
  if (n > max) tone = 'tone-danger';
  else if (n >= min && n <= max) tone = 'tone-success';
  else if (n > 0) tone = 'tone-warning';
  return (
    <span className={cn('rounded-[4px] px-1.5 py-0.5 text-[11px] font-medium tabular-nums', tone)}>
      {n}/{max}
    </span>
  );
}
