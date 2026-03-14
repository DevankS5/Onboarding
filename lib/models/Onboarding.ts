import { randomUUID } from 'crypto';
import mongoose, { InferSchemaType, Model } from 'mongoose';

const OnboardingSchema = new mongoose.Schema(
  {
    submissionId: { type: String, default: () => randomUUID(), index: true },

    fullName: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    whatsappNumber: { type: String, required: true, trim: true },
    designation: { type: String, trim: true, default: '' },
    comfortableTime: { type: String, enum: ['Morning', 'Afternoon', 'Evening', 'Late Night', ''], default: '' },

    businessName: { type: String, required: true, trim: true },
    businessType: { type: String, required: true, trim: true },
    businessTypeOther: { type: String, trim: true, default: '' },
    businessAddress: { type: String, required: true, trim: true },
    websiteLink: { type: String, trim: true, default: '' },
    businessDescription: { type: String, required: true, trim: true },
    productService: { type: String, required: true, trim: true },
    productType: { type: String, required: true, trim: true },
    productTypeOther: { type: String, trim: true, default: '' },
    priceRange: { type: String, required: true, trim: true },
    idealCustomer: { type: String, required: true, trim: true },
    challenges: { type: [String], required: true },
    challengesOther: { type: String, trim: true, default: '' },
    runAds: { type: String, required: true, trim: true },
    existingSetup: { type: [String], default: [] },

    expectations: { type: String, required: true, trim: true },
    legalRestrictions: { type: String, trim: true, default: '' },
    additionalInfo: { type: String, trim: true, default: '' },

    businessStory: { type: String, trim: true, default: '' },
    favoriteHobby: { type: String, trim: true, default: '' },
    birthday: { type: Date, default: null },
    companyAnniversary: { type: Date, default: null },
    vacationPreference: { type: String, enum: ['Mountains', 'Beaches', ''], default: '' },

    excitementLevel: { type: Number, required: true, min: 1, max: 5 },

    submittedAt: { type: Date, default: Date.now },
    ipAddress: { type: String, default: '' },
    userAgent: { type: String, default: '' }
  },
  { timestamps: true, collection: 'onboardingResponses' }
);

export type OnboardingDocument = InferSchemaType<typeof OnboardingSchema>;

export const OnboardingModel: Model<OnboardingDocument> =
  (mongoose.models.Onboarding as Model<OnboardingDocument>) ||
  mongoose.model<OnboardingDocument>('Onboarding', OnboardingSchema);
