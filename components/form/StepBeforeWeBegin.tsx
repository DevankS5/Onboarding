import { TextArea } from '@/components/ui/TextArea';
import type { FormStepProps } from '@/components/form/types';

export function StepBeforeWeBegin({ form }: FormStepProps) {
  const { register, formState } = form;
  const errors = formState.errors;

  return (
    <div className="space-y-5">
      <header className="space-y-2">
        <h2 className="font-heading text-2xl font-bold">Before We Begin</h2>
        <p className="text-sm text-text-secondary">
          This ensures we are aligned on expectations, compliance requirements, and key details before execution starts.
        </p>
      </header>

      <TextArea
        label="What are your expectations working with us?"
        required
        placeholder="Share your ideal working style, outcomes and priorities..."
        error={errors.expectations?.message as string}
        {...register('expectations')}
      />
      <TextArea
        label="Any legal restrictions or compliance requirements in your industry?"
        placeholder="Optional"
        error={errors.legalRestrictions?.message as string}
        {...register('legalRestrictions')}
      />
      <TextArea
        label="Is there anything else we should know to serve you better?"
        placeholder="Optional"
        error={errors.additionalInfo?.message as string}
        {...register('additionalInfo')}
      />
    </div>
  );
}
