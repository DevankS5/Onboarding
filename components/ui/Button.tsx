import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

type ButtonProps = HTMLMotionProps<'button'> & {
  variant?: 'primary' | 'secondary';
  loading?: boolean;
  children?: React.ReactNode;
};

export function Button({ className, children, variant = 'primary', loading, disabled, ...props }: ButtonProps) {
  return (
    <motion.button
      whileHover={disabled ? undefined : { scale: 1.02 }}
      whileTap={disabled ? undefined : { scale: 0.98 }}
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-pill px-6 py-3 font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold disabled:cursor-not-allowed disabled:opacity-60',
        variant === 'primary' && 'bg-btn-primary text-btn-primaryText hover:bg-gold-hover hover:shadow-gold',
        variant === 'secondary' &&
          'border border-btn-secondaryBorder bg-btn-secondary text-btn-secondaryText hover:border-gold hover:text-text-primary',
        className
      )}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <span
          className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-black/30 border-t-black"
          aria-hidden="true"
        />
      )}
      {children}
    </motion.button>
  );
}
