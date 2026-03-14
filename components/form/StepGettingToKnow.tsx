import { Controller } from 'react-hook-form';
import { Badge } from '@/components/ui/Badge';
import { DatePicker } from '@/components/ui/DatePicker';
import { RadioGroup } from '@/components/ui/RadioGroup';
import { TextArea } from '@/components/ui/TextArea';
import { TextInput } from '@/components/ui/TextInput';
import { vacationOptions } from '@/lib/onboardingOptions';
import type { FormStepProps } from '@/components/form/types';

export function StepGettingToKnow({ form }: FormStepProps) {
  const { register, control, formState } = form;
  const errors = formState.errors;

  return (
    <div className="space-y-5">
      <header className="space-y-3">
        <div className="flex flex-wrap items-center gap-3">
          <h2 className="font-heading text-2xl font-bold">Getting to Know You</h2>
          <Badge>Optional but appreciated</Badge>
        </div>
        <p className="text-sm text-text-secondary">
          A few light questions to understand you beyond the business. Strong partnerships are built on understanding,
          not just strategy.
        </p>
      </header>

      <TextArea
        label="How did you start this business?"
        placeholder="Your origin story"
        error={errors.businessStory?.message as string}
        {...register('businessStory')}
      />
      <TextInput
        label="Favorite hobby"
        placeholder="Optional"
        error={errors.favoriteHobby?.message as string}
        {...register('favoriteHobby')}
      />

      <Controller
        control={control}
        name="birthday"
        render={({ field }) => (
          <DatePicker label="Your birthday" name={field.name} value={field.value} onChange={field.onChange} error={errors.birthday?.message as string} />
        )}
      />

      <Controller
        control={control}
        name="companyAnniversary"
        render={({ field }) => (
          <DatePicker
            label="Company anniversary date"
            name={field.name}
            value={field.value}
            onChange={field.onChange}
            error={errors.companyAnniversary?.message as string}
          />
        )}
      />

      <Controller
        control={control}
        name="vacationPreference"
        render={({ field }) => (
          <RadioGroup
            label="What do you prefer for a vacation?"
            name={field.name}
            value={field.value}
            onChange={field.onChange}
            options={vacationOptions.map((item) => ({ label: item, value: item }))}
            error={errors.vacationPreference?.message as string}
          />
        )}
      />
    </div>
  );
}
