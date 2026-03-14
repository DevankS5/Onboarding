import { Controller } from 'react-hook-form';
import { RadioGroup } from '@/components/ui/RadioGroup';
import { TextArea } from '@/components/ui/TextArea';
import { TextInput } from '@/components/ui/TextInput';
import { businessTypes, productTypes } from '@/lib/onboardingOptions';
import type { FormStepProps } from '@/components/form/types';

export function StepBusinessBasics({ form }: FormStepProps) {
  const { register, control, watch, formState } = form;
  const errors = formState.errors;
  const businessType = watch('businessType');
  const productType = watch('productType');

  return (
    <div className="space-y-5">
      <header className="space-y-2">
        <h2 className="font-heading text-2xl font-bold">Business Overview</h2>
        <p className="text-sm text-text-secondary">
          Help us understand your business, offer, and target audience so we can build a strategy aligned with your
          market and growth goals.
        </p>
      </header>

      <TextInput
        label="Business Name"
        required
        placeholder="Orygin AI"
        error={errors.businessName?.message as string}
        {...register('businessName')}
      />

      <Controller
        control={control}
        name="businessType"
        render={({ field }) => (
          <RadioGroup
            label="Registered Business Type"
            required
            name={field.name}
            value={field.value}
            onChange={field.onChange}
            options={businessTypes.map((item) => ({ label: item, value: item }))}
            error={errors.businessType?.message as string}
          />
        )}
      />

      {businessType === 'Other' ? (
        <TextInput
          label="Specify Business Type"
          required
          placeholder="Enter your business type"
          error={errors.businessTypeOther?.message as string}
          {...register('businessTypeOther')}
        />
      ) : null}

      <TextArea
        label="Official Business Address (for contract)"
        required
        placeholder="Full business address"
        error={errors.businessAddress?.message as string}
        {...register('businessAddress')}
      />

      <TextInput
        label="Website/Social Media Link"
        type="url"
        placeholder="https://"
        error={errors.websiteLink?.message as string}
        {...register('websiteLink')}
      />

      <TextArea
        label="Describe your business in brief"
        required
        placeholder="What your business does, why it matters and who it serves"
        error={errors.businessDescription?.message as string}
        {...register('businessDescription')}
      />

      <TextArea
        label="What is the product/service you sell?"
        required
        placeholder="Explain your core offering"
        error={errors.productService?.message as string}
        {...register('productService')}
      />

      <Controller
        control={control}
        name="productType"
        render={({ field }) => (
          <RadioGroup
            label="Is your product/service a"
            required
            name={field.name}
            value={field.value}
            onChange={field.onChange}
            options={productTypes.map((item) => ({ label: item, value: item }))}
            error={errors.productType?.message as string}
          />
        )}
      />

      {productType === 'Other' ? (
        <TextInput
          label="Specify Product Type"
          required
          placeholder="Enter your product type"
          error={errors.productTypeOther?.message as string}
          {...register('productTypeOther')}
        />
      ) : null}
    </div>
  );
}
