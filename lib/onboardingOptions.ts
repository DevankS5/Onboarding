export const comfortableTimes = ['Morning', 'Afternoon', 'Evening', 'Late Night'] as const;

export const businessTypes = [
  'Private Limited',
  'LLP',
  'Proprietorship',
  'Not Govt. Registered',
  'Other'
] as const;

export const productTypes = [
  'One time purchase',
  'Subscription / Retainer',
  'Consultation Service',
  'Multiple Offers',
  'Other'
] as const;

export const priceRanges = ['₹0 - ₹1000', '₹1000 - ₹25,000', '₹25,000 - ₹50,000', '₹50,000 - ₹1,00,000', '₹1,00,000 +'] as const;

export const challengeOptions = [
  'Not getting enough leads',
  'Getting leads but low conversion rate',
  'Inconsistent sales / revenue fluctuations',
  'Poor social media engagement',
  'No clear marketing strategy',
  'High ad spend but low ROI',
  'No proper automation systems',
  'No follow-up system for leads',
  'Poor website performance / low conversions',
  'Scaling issues (operations breaking at growth stage)',
  'Lack of clarity on positioning',
  'No data tracking / analytics setup',
  'Difficulty retaining customers (High Churn Rate)',
  'Other'
] as const;

export const existingSetupOptions = [
  'Website/Domain',
  'Facebook Page (with content)',
  'Instagram connected to Meta',
  'Meta Business Manager',
  'RazorPay for Payments',
  'Active posting on social media pages'
] as const;

export const runAdsOptions = ['Yes', 'No, but have tried in the past', 'Never tried running ads'] as const;

export const vacationOptions = ['Mountains', 'Beaches'] as const;

export const stepFieldMap = {
  personal: ['fullName', 'email', 'whatsappNumber', 'designation', 'comfortableTime'],
  businessBasics: [
    'businessName',
    'businessType',
    'businessTypeOther',
    'businessAddress',
    'websiteLink',
    'businessDescription',
    'productService',
    'productType',
    'productTypeOther'
  ],
  businessMarket: ['priceRange', 'idealCustomer', 'challenges', 'challengesOther', 'runAds', 'existingSetup'],
  beforeBegin: ['expectations', 'legalRestrictions', 'additionalInfo'],
  gettingToKnow: ['businessStory', 'favoriteHobby', 'birthday', 'companyAnniversary', 'vacationPreference'],
  final: ['excitementLevel']
} as const;
