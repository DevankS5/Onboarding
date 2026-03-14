import type { UseFormReturn } from 'react-hook-form';
import type { OnboardingFormValues } from '@/lib/validations/onboardingSchema';

export type FormStepProps = {
  form: UseFormReturn<OnboardingFormValues>;
};
