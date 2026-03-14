import { Controller } from 'react-hook-form';
import { RadioGroup } from '@/components/ui/RadioGroup';
import { TextInput } from '@/components/ui/TextInput';
import { comfortableTimes } from '@/lib/onboardingOptions';
import type { FormStepProps } from '@/components/form/types';

export function StepPersonalInfo({ form }: FormStepProps) {
  const { register, control, formState } = form;
  const errors = formState.errors;

  return (
    <div className="space-y-5">
      <header className="space-y-2">
        <h2 className="font-heading text-2xl font-bold">Personal Information</h2>
        <p className="text-sm text-text-secondary">
          This section helps us keep communication smooth and maintain accurate records for our partnership.
        </p>
      </header>

      <TextInput label="Full Name" required placeholder="John Doe" error={errors.fullName?.message as string} {...register('fullName')} />
      <TextInput
        label="Email Address"
        required
        type="email"
        placeholder="you@company.com"
        error={errors.email?.message as string}
        {...register('email')}
      />
      <TextInput
        label="WhatsApp Number"
        required
        type="tel"
        placeholder="+91 98765 43210"
        error={errors.whatsappNumber?.message as string}
        {...register('whatsappNumber')}
      />
      <TextInput
        label="Designation in the company"
        placeholder="Founder"
        error={errors.designation?.message as string}
        {...register('designation')}
      />

      <Controller
        control={control}
        name="comfortableTime"
        render={({ field }) => (
          <RadioGroup
            label="Comfortable time for communication"
            name={field.name}
            value={field.value}
            onChange={field.onChange}
            options={comfortableTimes.map((item) => ({ label: item, value: item }))}
            error={errors.comfortableTime?.message as string}
          />
        )}
      />
    </div>
  );
}
