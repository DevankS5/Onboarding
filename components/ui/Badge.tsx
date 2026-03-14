import { cn } from '@/lib/utils';

export function Badge({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={cn('inline-flex rounded-pill border border-gold px-3 py-1 text-xs text-gold', className)}>
      {children}
    </span>
  );
}
