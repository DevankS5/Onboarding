import { motion } from 'framer-motion';

type ProgressBarProps = {
  current: number;
  total: number;
};

export function ProgressBar({ current, total }: ProgressBarProps) {
  const pct = Math.min(Math.max((current / total) * 100, 0), 100);

  return (
    <div className="mb-6">
      <div className="mb-2 flex items-center justify-between text-xs text-text-secondary">
        <span>Progress</span>
        <span>{Math.round(pct)}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-pill bg-btn-secondary">
        <motion.div
          className="h-full rounded-pill bg-gold shadow-gold"
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
}
