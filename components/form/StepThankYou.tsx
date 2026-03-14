import { motion } from 'framer-motion';
import { SectionCard } from '@/components/ui/SectionCard';

export function StepThankYou() {
  return (
    <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}>
      <SectionCard active className="relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(245,184,46,0.18),transparent_55%)]" />
        <div className="relative mx-auto max-w-xl space-y-4 py-10">
          <div className="mx-auto grid h-16 w-16 place-items-center rounded-full border border-gold bg-gold/10 text-3xl text-gold shadow-gold">
            ✓
          </div>
          <h2 className="font-heading text-3xl font-bold">You&apos;re All Set!</h2>
          <p className="text-text-secondary">
            Thank you for completing the onboarding form. Our team will review your responses and reach out to you
            shortly.
          </p>
          <p className="text-sm text-text-secondary">If you have any questions, feel free to reach us on WhatsApp.</p>
        </div>
      </SectionCard>
    </motion.div>
  );
}
