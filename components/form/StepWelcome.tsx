import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { SectionCard } from '@/components/ui/SectionCard';

export function StepWelcome({ onBegin }: { onBegin: () => void }) {
  return (
    <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -14 }}>
      <SectionCard active className="relative overflow-hidden bg-premium-gradient">
        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gold/15 blur-3xl" aria-hidden="true" />
        <div className="relative space-y-6 text-center">
          <div className="mx-auto inline-flex rounded-pill border border-gold/70 px-4 py-1 text-xs uppercase tracking-[0.2em] text-gold">
            Orygin AI
          </div>
          <h1 className="font-heading text-3xl font-bold text-white sm:text-4xl">Onboarding Form - Orygin AI</h1>
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-text-secondary sm:text-base">
            This onboarding helps us understand your business, goals, and growth vision in depth so we can build a
            high-performing system tailored specifically for you. The more clarity you provide, the stronger and faster
            we can execute.
          </p>
          <p className="text-sm text-gold">Please take 8-10 minutes to complete this carefully.</p>
          <Button type="button" onClick={onBegin} className="mx-auto w-full sm:w-auto">
            Let&apos;s Begin -&gt;
          </Button>
        </div>
      </SectionCard>
    </motion.div>
  );
}
