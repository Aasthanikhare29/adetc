import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// Fixed locale + the studio's timezone, so server and browser render the same
// text (no hydration mismatch) and admins see IST rather than the server's UTC.
const dateFmt = new Intl.DateTimeFormat('en-IN', { timeZone: 'Asia/Kolkata', dateStyle: 'medium' });
const dateTimeFmt = new Intl.DateTimeFormat('en-IN', { timeZone: 'Asia/Kolkata', dateStyle: 'medium', timeStyle: 'short' });
export const fmtDate = (d) => dateFmt.format(new Date(d));
export const fmtDateTime = (d) => dateTimeFmt.format(new Date(d));
