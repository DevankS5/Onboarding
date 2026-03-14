import { Controller } from 'react-hook-form';
import { ScaleSelector } from '@/components/ui/ScaleSelector';
import type { FormStepProps } from '@/components/form/types';

export function StepFinal({ form }: FormStepProps) {
  const { control, formState } = form;
  const errors = formState.errors;

  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <h2 className="font-heading text-2xl font-bold">Almost There!</h2>
        <p className="text-sm text-text-secondary">
          Thank you for taking the time to complete this onboarding. Your clarity helps us build a strategy that is
          aligned with your goals from day one.
        </p>
      </header>

      <div className="rounded-card border border-gold/40 bg-premium-gradient p-5 text-sm leading-relaxed text-white/90">
        <p>
          We are fully committed to executing with precision, transparency, and performance in mind. Our focus is
          simple - build systems that generate measurable and sustainable growth for your business.
        </p>
        <p className="mt-3 font-semibold text-gold-highlight">Let&apos;s build something powerful.</p>
      </div>

      <Controller
        control={control}
        name="excitementLevel"
        render={({ field }) => (
          <ScaleSelector
            label="On a scale of 1-5, how excited are you to grow this year?"
            required
            value={field.value}
            onChange={field.onChange}
            error={errors.excitementLevel?.message as string}
          />
        )}
      />
    </div>
  );
}
