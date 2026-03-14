'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { AnimatePresence, motion } from 'framer-motion';
import { useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { StepBeforeWeBegin } from '@/components/form/StepBeforeWeBegin';
import { StepBusinessBasics } from '@/components/form/StepBusinessBasics';
import { StepBusinessMarket } from '@/components/form/StepBusinessMarket';
import { StepFinal } from '@/components/form/StepFinal';
import { StepGettingToKnow } from '@/components/form/StepGettingToKnow';
import { StepPersonalInfo } from '@/components/form/StepPersonalInfo';
import { StepThankYou } from '@/components/form/StepThankYou';
import { StepWelcome } from '@/components/form/StepWelcome';
import { Button } from '@/components/ui/Button';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { SectionCard } from '@/components/ui/SectionCard';
import { stepFieldMap } from '@/lib/onboardingOptions';
import { onboardingSchema, type OnboardingFormValues } from '@/lib/validations/onboardingSchema';

const stepKeys = [
  'personal',
  'businessBasics',
  'businessMarket',
  'beforeBegin',
  'gettingToKnow',
  'final'
] as const;

const totalFormSteps = stepKeys.length;

const defaultValues: OnboardingFormValues = {
  fullName: '',
  email: '',
  whatsappNumber: '',
  designation: '',
  comfortableTime: '',

  businessName: '',
  businessType: '',
  businessTypeOther: '',
  businessAddress: '',
  websiteLink: '',
  businessDescription: '',
  productService: '',
  productType: '',
  productTypeOther: '',
  priceRange: '',
  idealCustomer: '',
  challenges: [],
  challengesOther: '',
  runAds: '',
  existingSetup: [],

  expectations: '',
  legalRestrictions: '',
  additionalInfo: '',

  businessStory: '',
  favoriteHobby: '',
  birthday: '',
  companyAnniversary: '',
  vacationPreference: '',

  excitementLevel: 1
};

export function FormWizard() {
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<OnboardingFormValues>({
    resolver: zodResolver(onboardingSchema),
    mode: 'onBlur',
    defaultValues
  });

  const {
    handleSubmit,
    trigger,
    setError,
    setFocus,
    formState: { isSubmitting }
  } = form;

  const activeProgressStep = step === 0 ? 0 : Math.min(step, totalFormSteps);

  const currentStepContent = useMemo(() => {
    if (submitted) return <StepThankYou />;

    switch (step) {
      case 0:
        return <StepWelcome onBegin={() => setStep(1)} />;
      case 1:
        return <StepPersonalInfo form={form} />;
      case 2:
        return <StepBusinessBasics form={form} />;
      case 3:
        return <StepBusinessMarket form={form} />;
      case 4:
        return <StepBeforeWeBegin form={form} />;
      case 5:
        return <StepGettingToKnow form={form} />;
      case 6:
        return <StepFinal form={form} />;
      default:
        return <StepThankYou />;
    }
  }, [form, step, submitted]);

  const nextStep = async () => {
    if (step === 0) {
      setDirection(1);
      setStep(1);
      return;
    }

    const stepKey = stepKeys[step - 1];
    const fields = [...stepFieldMap[stepKey]] as Array<keyof OnboardingFormValues>;
    const valid = await trigger(fields, { shouldFocus: true });

    if (!valid) {
      const firstErroredField = fields.find((fieldName) => {
        const state = form.getFieldState(fieldName);
        return Boolean(state.error);
      });

      if (firstErroredField) {
        setFocus(firstErroredField);
        const state = form.getFieldState(firstErroredField);
        toast.error(state.error?.message || 'Please resolve highlighted fields before proceeding.');
      } else {
        toast.error('Please resolve highlighted fields before proceeding.');
      }

      return;
    }

    if (step < totalFormSteps) {
      setDirection(1);
      setStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    if (step <= 0) return;
    setDirection(-1);
    setStep((prev) => prev - 1);
  };

  const onSubmit = async (values: OnboardingFormValues) => {
    try {
      const response = await fetch('/api/onboarding', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      });

      const payload = await response.json();

      if (!response.ok) {
        if (Array.isArray(payload?.errors)) {
          payload.errors.forEach((entry: { path: keyof OnboardingFormValues; message: string }) => {
            setError(entry.path, { message: entry.message });
          });
        }

        toast.error(payload?.message || 'Submission failed. Please try again.');
        return;
      }

      toast.success('Onboarding submitted successfully.');
      setDirection(1);
      setSubmitted(true);
      setStep(totalFormSteps + 1);
    } catch (error) {
      console.error(error);
      toast.error('Server error. Please try again in a moment.');
    }
  };

  const isFormStep = step > 0 && step <= totalFormSteps && !submitted;
  const isFinalStep = step === totalFormSteps;

  return (
    <main className="mx-auto min-h-screen w-full max-w-3xl px-4 py-8 sm:px-6 sm:py-12">
      <div className="relative">
        <div className="pointer-events-none absolute inset-x-10 top-16 -z-10 h-40 rounded-full bg-gold/20 blur-[100px]" />

        {isFormStep ? <ProgressBar current={activeProgressStep} total={totalFormSteps} /> : null}

        <form
          onSubmit={handleSubmit(onSubmit)}
          onKeyDown={(event) => {
            if (event.key === 'Enter' && (event.target as HTMLElement).tagName !== 'TEXTAREA') {
              event.preventDefault();
            }
          }}
          className="space-y-5"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={`${step}-${submitted ? 'submitted' : 'active'}`}
              initial={{ opacity: 0, x: direction > 0 ? 35 : -35 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction > 0 ? -35 : 35 }}
              transition={{ duration: 0.28, ease: 'easeOut' }}
            >
              {step > 0 && step <= totalFormSteps && !submitted ? (
                <SectionCard active>{currentStepContent}</SectionCard>
              ) : (
                currentStepContent
              )}
            </motion.div>
          </AnimatePresence>

          {isFormStep ? (
            <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-between">
              <Button type="button" variant="secondary" onClick={prevStep} className="w-full sm:w-auto" disabled={isSubmitting}>
                Back
              </Button>

              {isFinalStep ? (
                <Button type="submit" className="w-full sm:w-auto" loading={isSubmitting}>
                  Submit Onboarding -&gt;
                </Button>
              ) : (
                <Button type="button" className="w-full sm:w-auto" onClick={nextStep} disabled={isSubmitting}>
                  Next
                </Button>
              )}
            </div>
          ) : null}
        </form>
      </div>
    </main>
  );
}
