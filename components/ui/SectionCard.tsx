import { cn } from '@/lib/utils';

type SectionCardProps = {
  children: React.ReactNode;
  active?: boolean;
  className?: string;
};

export function SectionCard({ children, active, className }: SectionCardProps) {
  return (
    <section
      className={cn(
        'rounded-card border border-border bg-bg-card p-6 sm:p-8',
        active && 'shadow-gold',
        className
      )}
    >
      {children}
    </section>
  );
}
