import { z } from 'zod';

const requiredText = (message: string) => z.string().trim().min(1, message);
const optionalText = z.string().trim().optional().or(z.literal(''));
const websiteRegex = /^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/[\S]*)?$/i;

const phoneRegex = /^\+?[0-9\s\-()]{7,20}$/;

export const onboardingSchema = z
  .object({
    fullName: requiredText('Full name is required'),
    email: requiredText('Email is required').email('Enter a valid email'),
    whatsappNumber: requiredText('WhatsApp number is required').regex(phoneRegex, 'Enter a valid phone number'),
    designation: optionalText,
    comfortableTime: z.enum(['Morning', 'Afternoon', 'Evening', 'Late Night', '']).default(''),

    businessName: requiredText('Business name is required'),
    businessType: requiredText('Business type is required'),
    businessTypeOther: optionalText,
    businessAddress: requiredText('Business address is required'),
    websiteLink: z
      .string()
      .trim()
      .optional()
      .default('')
      .refine((value) => value.length === 0 || websiteRegex.test(value), 'Enter a valid website or social link'),
    businessDescription: requiredText('Business description is required'),
    productService: requiredText('Product/service details are required'),
    productType: requiredText('Product type is required'),
    productTypeOther: optionalText,
    priceRange: requiredText('Price range is required'),
    idealCustomer: requiredText('Ideal customer profile is required'),
    challenges: z.array(z.string()).min(1, 'Select at least one challenge'),
    challengesOther: optionalText,
    runAds: requiredText('Please choose an ads option'),
    existingSetup: z.array(z.string()).optional().default([]),

    expectations: requiredText('Expectations are required'),
    legalRestrictions: optionalText,
    additionalInfo: optionalText,

    businessStory: optionalText,
    favoriteHobby: optionalText,
    birthday: z.string().optional().or(z.literal('')),
    companyAnniversary: z.string().optional().or(z.literal('')),
    vacationPreference: z.enum(['Mountains', 'Beaches', '']).default(''),

    excitementLevel: z.coerce.number().int().min(1, 'Select your excitement level').max(5, 'Invalid excitement level')
  })
  .superRefine((data, ctx) => {
    if (data.businessType === 'Other' && !data.businessTypeOther?.trim()) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['businessTypeOther'],
        message: 'Please specify your business type'
      });
    }

    if (data.productType === 'Other' && !data.productTypeOther?.trim()) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['productTypeOther'],
        message: 'Please specify your product type'
      });
    }

    if (data.challenges.includes('Other') && !data.challengesOther?.trim()) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['challengesOther'],
        message: 'Please specify the other challenge'
      });
    }
  });

export type OnboardingFormValues = z.infer<typeof onboardingSchema>;
