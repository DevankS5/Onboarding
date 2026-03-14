import { Controller } from 'react-hook-form';
import { CheckboxGroup } from '@/components/ui/CheckboxGroup';
import { RadioGroup } from '@/components/ui/RadioGroup';
import { TextArea } from '@/components/ui/TextArea';
import { TextInput } from '@/components/ui/TextInput';
import { challengeOptions, existingSetupOptions, priceRanges, runAdsOptions } from '@/lib/onboardingOptions';
import type { FormStepProps } from '@/components/form/types';

export function StepBusinessMarket({ form }: FormStepProps) {
  const { control, register, watch, formState } = form;
  const errors = formState.errors;
  const challenges = watch('challenges') || [];

  return (
    <div className="space-y-5">
      <header className="space-y-2">
        <h2 className="font-heading text-2xl font-bold">Market, Pricing &amp; Challenges</h2>
        <p className="text-sm text-text-secondary">
          This section captures your audience, current bottlenecks and growth constraints so strategy can be calibrated
          to real-world conditions.
        </p>
      </header>

      <Controller
        control={control}
        name="priceRange"
        render={({ field }) => (
          <RadioGroup
            label="What is the price range your offer operates"
            required
            name={field.name}
            value={field.value}
            onChange={field.onChange}
            options={priceRanges.map((item) => ({ label: item, value: item }))}
            error={errors.priceRange?.message as string}
          />
        )}
      />

      <TextArea
        label="What is your ideal customer profile?"
        required
        placeholder="Example: age, location, profession, pain points"
        error={errors.idealCustomer?.message as string}
        {...register('idealCustomer')}
      />

      <Controller
        control={control}
        name="challenges"
        render={({ field }) => (
          <CheckboxGroup
            label="What challenges are you currently facing in your business?"
            required
            values={field.value || []}
            onChange={field.onChange}
            options={challengeOptions.map((item) => ({ label: item, value: item }))}
            error={errors.challenges?.message as string}
          />
        )}
      />

      {challenges.includes('Other') ? (
        <TextInput
          label="Specify Other Challenge"
          required
          placeholder="Describe the challenge"
          error={errors.challengesOther?.message as string}
          {...register('challengesOther')}
        />
      ) : null}

      <Controller
        control={control}
        name="runAds"
        render={({ field }) => (
          <RadioGroup
            label="Do you currently run ads?"
            required
            name={field.name}
            value={field.value}
            onChange={field.onChange}
            options={runAdsOptions.map((item) => ({ label: item, value: item }))}
            error={errors.runAds?.message as string}
          />
        )}
      />

      <Controller
        control={control}
        name="existingSetup"
        render={({ field }) => (
          <CheckboxGroup
            label="Which of these do you have already setup?"
            values={field.value || []}
            onChange={field.onChange}
            options={existingSetupOptions.map((item) => ({ label: item, value: item }))}
            error={errors.existingSetup?.message as string}
          />
        )}
      />
    </div>
  );
}
