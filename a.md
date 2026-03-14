

# Prompt: Build a Custom Onboarding Form System

---

## 🎯 Objective

Build a **custom multi-section onboarding web form** for **Orygin AI** using **Next.js (App Router)** with a **MongoDB** backend. This form replaces an existing Google Form and stores all responses directly in our own database for integration with a personal dashboard.

The form must feel like a **premium, luxury SaaS experience** — dark, minimal, gold-accented, and buttery smooth. Think high-end funnel UI, not a boring survey.

---

## 🧱 Tech Stack

| Layer | Technology |
|---|---|
| **Frontend** | Next.js 14+ (App Router), React, Tailwind CSS |
| **Backend/API** | Next.js API Routes (`/app/api/`) |
| **Database** | MongoDB (via Mongoose ODM) |
| **Font** | Inter (primary), Manrope or Satoshi (headings) |
| **Deployment-ready** | Vercel-compatible |
| **Form Handling** | React Hook Form + Zod validation |
| **Animations** | Framer Motion for section transitions, micro-interactions |

---

## 🎨 Design Theme: Premium Dark Gold SaaS / Luxury Funnel UI

**Style:** Dark minimal interface, gold accent highlights, rounded cards, soft borders, pill buttons, high-contrast typography, subtle gold glow effects.

### Core UI Rules

- **Background:** Deep black
- **Cards:** Dark surfaces with soft borders
- **Accent:** Warm gold for CTAs and highlights
- **Buttons:** Pill-shaped gold CTAs
- **Typography:** Bold white headings, muted gray body text
- **Effects:** Subtle gold glow and dark gradients
- **Layout:** Single-column centered form, max-width ~680px, generous padding and spacing

### Exact Color Palette (HEX)

```
/* ── Backgrounds ── */
Primary Background:    #000000
Section Background:    #0A0A0A
Card Background:       #111111
Alt Card Background:   #141414

/* ── Borders ── */
Border:                #2A2A2A

/* ── Gold Accent ── */
Primary Gold:          #F5B82E
Gold Hover:            #E6A91F
Highlight Gold:        #FFC83D

/* ── Text Colors ── */
Primary Text:          #FFFFFF
Secondary Text:        #A1A1A1
Muted Text:            #6B6B6B

/* ── Buttons ── */
Primary Button BG:     #F5B82E
Primary Button Text:   #000000
Secondary Button BG:   #1A1A1A
Secondary Button Border:#2A2A2A
Secondary Button Text: #A1A1A1

/* ── Premium Gradient ── */
Gradient:              linear-gradient(135deg, #2B1405, #4A260A)

/* ── Glow Effect ── */
Glow:                  box-shadow: 0 0 20px rgba(245,184,46,0.25)

/* ── Fonts ── */
Primary Font:          'Inter', sans-serif
Heading Font:          'Manrope' or 'Satoshi', sans-serif
```

### Component Styling Guidelines

- **Input Fields:** Background `#141414`, border `1px solid #2A2A2A`, border-radius `12px`, text color `#FFFFFF`, placeholder color `#6B6B6B`. On focus: border color transitions to `#F5B82E` with subtle gold glow `0 0 10px rgba(245,184,46,0.15)`.
- **Select / Dropdown:** Same styling as inputs. Custom styled — no browser defaults.
- **Radio Buttons & Checkboxes:** Custom styled with gold accent when selected. Unselected: border `#2A2A2A`, bg `#141414`. Selected: border `#F5B82E`, inner fill `#F5B82E`.
- **Cards (each section):** Background `#111111`, border `1px solid #2A2A2A`, border-radius `16px`, padding `32px`, subtle gold glow on the active/current section.
- **Section Headers:** Font size `24px`, font-weight `700`, color `#FFFFFF`, with a small gold accent bar or gold underline.
- **Section Descriptions:** Font size `14px`, color `#A1A1A1`, margin-bottom `24px`.
- **Required Field Indicator:** Gold asterisk `*` in `#F5B82E`.
- **Progress Bar:** Thin bar at top of the form showing completion. Background `#1A1A1A`, fill `#F5B82E` with gold glow.
- **"Next" / "Submit" Buttons:** Pill-shaped (border-radius `9999px`), background `#F5B82E`, text `#000000`, font-weight `600`. On hover: background `#E6A91F`, scale `1.02`, gold glow. Full width on mobile.
- **"Back" Button:** Ghost style — background transparent, border `1px solid #2A2A2A`, text `#A1A1A1`, pill-shaped. On hover: border `#F5B82E`, text `#FFFFFF`.
- **Date Picker:** Styled to match the dark theme. Gold accent on selected date.
- **Scale Selector (1-5):** Horizontal row of circular buttons. Unselected: bg `#141414`, border `#2A2A2A`. Selected: bg `#F5B82E`, text `#000000`, gold glow.
- **Textarea:** Same as inputs, min-height `120px`, resize vertical only.

---

## 📋 Form Structure — Multi-Step Wizard

The form should be a **multi-step wizard** (one section per step) with smooth Framer Motion transitions between steps. Each step is rendered inside a styled card.

### Step 0: Welcome / Intro Screen

Display before the form begins:

```
Heading: "Onboarding Form — Orygin AI"
Subtext: "This onboarding helps us understand your business, goals, and growth 
vision in depth so we can build a high-performing system tailored specifically 
for you. The more clarity you provide, the stronger and faster we can execute."
Note: "Please take 8–10 minutes to complete this carefully."
CTA Button: "Let's Begin →"
```

Design: Center-aligned, premium gradient background behind the card, Orygin AI logo/wordmark at the top (placeholder if no logo), gold glow on the CTA button.

---

### Step 1: Personal Information

**Section Title:** "Personal Information"
**Section Description:** "This section helps us keep communication smooth and maintain accurate records for our partnership."

| Field Label | Field Name | Type | Required | Options/Notes |
|---|---|---|---|---|
| Full Name | `fullName` | Text Input | ✅ Yes | |
| Email Address | `email` | Email Input | ✅ Yes | Validate email format |
| WhatsApp Number | `whatsappNumber` | Tel Input | ✅ Yes | Validate phone format |
| Designation in the company | `designation` | Text Input | ❌ No | |
| Comfortable time for communication | `comfortableTime` | Radio (single select) | ❌ No | Options: `Morning`, `Afternoon`, `Evening`, `Late Night` |

---

### Step 2: Business Overview

**Section Title:** "Business Overview"
**Section Description:** "Help us understand your business, offer, and target audience so we can build a strategy aligned with your market and growth goals."

| Field Label | Field Name | Type | Required | Options/Notes |
|---|---|---|---|---|
| Business Name | `businessName` | Text Input | ✅ Yes | |
| Registered Business Type | `businessType` | Radio (single select) | ✅ Yes | Options: `Private Limited`, `LLP`, `Proprietorship`, `Not Govt. Registered`, `Other` (if "Other" is selected, show a text input for custom value) |
| Official Business Address (for contract) | `businessAddress` | Textarea | ✅ Yes | |
| Website/Social Media Link | `websiteLink` | URL Input | ❌ No | |
| Describe your business in brief | `businessDescription` | Textarea | ✅ Yes | |
| What is the product/service you sell? | `productService` | Textarea | ✅ Yes | |
| Is your product/service a ___ | `productType` | Radio (single select) | ✅ Yes | Options: `One time purchase`, `Subscription / Retainer`, `Consultation Service`, `Multiple Offers`, `Other` (with custom input) |
| What is the price range your offer operates | `priceRange` | Radio (single select) | ✅ Yes | Options: `₹0 - ₹1000`, `₹1000 - ₹25,000`, `₹25,000 - ₹50,000`, `₹50,000 - ₹1,00,000`, `₹1,00,000 +` |
| What is your ideal customer profile? | `idealCustomer` | Textarea | ✅ Yes | Placeholder: "Example: (age, location, profession, pain points)" |
| What challenges are you currently facing in your business? | `challenges` | Checkbox (multi-select) | ✅ Yes (at least 1) | Options: `Not getting enough leads`, `Getting leads but low conversion rate`, `Inconsistent sales / revenue fluctuations`, `Poor social media engagement`, `No clear marketing strategy`, `High ad spend but low ROI`, `No proper automation systems`, `No follow-up system for leads`, `Poor website performance / low conversions`, `Scaling issues (operations breaking at growth stage)`, `Lack of clarity on positioning`, `No data tracking / analytics setup`, `Difficulty retaining customers (High Churn Rate)`, `Other` (with custom input) |
| Do you currently run ads? | `runAds` | Radio (single select) | ✅ Yes | Options: `Yes`, `No, but have tried in the past`, `Never tried running ads` |
| Which of these do you have already setup? | `existingSetup` | Checkbox (multi-select) | ❌ No | Options: `Website/Domain`, `Facebook Page (with content)`, `Instagram connected to Meta`, `Meta Business Manager`, `RazorPay for Payments`, `Active posting on social media pages` |

> **Note:** This step has many fields. Consider splitting it into **Step 2a** (Business basics — name through product type) and **Step 2b** (Market & challenges — price range through existing setup) for better UX, or use a scrollable single-step card. Use your best judgment for UX. If splitting, update the progress bar accordingly.

---

### Step 3: Before We Begin

**Section Title:** "Before We Begin"
**Section Description:** "This ensures we are aligned on expectations, compliance requirements, and key details before execution starts."

| Field Label | Field Name | Type | Required | Options/Notes |
|---|---|---|---|---|
| What are your expectations working with us? | `expectations` | Textarea | ✅ Yes | |
| Any legal restrictions or compliance requirements in your industry? | `legalRestrictions` | Textarea | ❌ No | |
| Is there anything else we should know to serve you better? | `additionalInfo` | Textarea | ❌ No | |

---

### Step 4: Getting to Know You (Optional)

**Section Title:** "Getting to Know You"
**Section Description:** "A few light questions to understand you beyond the business. Strong partnerships are built on understanding, not just strategy."
**Badge/Tag:** Show a small pill badge saying "Optional but appreciated" in gold outline style.

| Field Label | Field Name | Type | Required | Options/Notes |
|---|---|---|---|---|
| How did you start this business? | `businessStory` | Textarea | ❌ No | |
| Favorite hobby | `favoriteHobby` | Text Input | ❌ No | |
| Your birthday | `birthday` | Date Picker | ❌ No | |
| Company anniversary date | `companyAnniversary` | Date Picker | ❌ No | |
| What do you prefer for a vacation? 😁 | `vacationPreference` | Radio (single select) | ❌ No | Options: `Mountains 🏔️`, `Beaches 🏖️` |

---

### Step 5: Final Step / Excitement & Submit

**Section Title:** "Almost There!"
**Section Description:** "Thank you for taking the time to complete this onboarding. Your clarity helps us build a strategy that is aligned with your goals from day one."

**Additional Text Block (styled as a quote or highlight card with premium gradient background):**
```
"We are fully committed to executing with precision, transparency, and 
performance in mind. Our focus is simple — build systems that generate 
measurable and sustainable growth for your business.

Let's build something powerful."
```

| Field Label | Field Name | Type | Required | Options/Notes |
|---|---|---|---|---|
| On a scale of 1-5, how excited are you to grow this year? | `excitementLevel` | Custom Scale Selector (1-5) | ✅ Yes | Display as 5 circular buttons in a row. Numbers 1 through 5. Gold highlight on selected. |

**Submit Button:** "Submit Onboarding →" — Large, pill-shaped, full gold, with gold glow animation on hover.

---

### Step 6: Thank You / Confirmation Screen

After successful submission, show a confirmation screen:

```
Icon: ✅ (gold checkmark or animated success icon)
Heading: "You're All Set!"
Subtext: "Thank you for completing the onboarding form. Our team will review 
your responses and reach out to you shortly."
Secondary Text: "If you have any questions, feel free to reach us on WhatsApp."
```

Design: Centered, confetti animation (optional), gold glow on the checkmark.

---

## 🗄️ MongoDB Schema

### Collection: `onboardingResponses`

```javascript
const OnboardingSchema = new mongoose.Schema({
  // Personal Information
  fullName: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true, lowercase: true },
  whatsappNumber: { type: String, required: true, trim: true },
  designation: { type: String, trim: true, default: '' },
  comfortableTime: { 
    type: String, 
    enum: ['Morning', 'Afternoon', 'Evening', 'Late Night', ''],
    default: '' 
  },

  // Business Overview
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

  // Before We Begin
  expectations: { type: String, required: true, trim: true },
  legalRestrictions: { type: String, trim: true, default: '' },
  additionalInfo: { type: String, trim: true, default: '' },

  // Getting to Know You (Optional)
  businessStory: { type: String, trim: true, default: '' },
  favoriteHobby: { type: String, trim: true, default: '' },
  birthday: { type: Date, default: null },
  companyAnniversary: { type: Date, default: null },
  vacationPreference: { type: String, enum: ['Mountains', 'Beaches', ''], default: '' },

  // Final
  excitementLevel: { type: Number, required: true, min: 1, max: 5 },

  // Metadata
  submittedAt: { type: Date, default: Date.now },
  ipAddress: { type: String, default: '' },
  userAgent: { type: String, default: '' },
}, { timestamps: true });
```

---

## 🔌 API Endpoint

### `POST /api/onboarding`

- Accepts the full form data as JSON body.
- Validates all required fields server-side using Zod.
- Connects to MongoDB using Mongoose (use a cached connection pattern for serverless).
- Saves the response to the `onboardingResponses` collection.
- Returns `201 Created` with `{ success: true, message: "Onboarding submitted successfully", id: <document_id> }`.
- On validation error: Returns `400 Bad Request` with `{ success: false, errors: [...] }`.
- On server error: Returns `500 Internal Server Error` with `{ success: false, message: "Something went wrong" }`.

### `GET /api/onboarding` (Optional / Admin)

- Returns all submissions (paginated).
- This is for future dashboard integration. Can be protected later with auth.

---

## 📁 Project File Structure

```
/app
  /page.tsx                          → Main onboarding form page
  /layout.tsx                        → Root layout with fonts, metadata
  /globals.css                       → Tailwind + custom CSS variables
  /api
    /onboarding
      /route.ts                      → POST & GET API handlers
/components
  /form
    /FormWizard.tsx                   → Multi-step form controller
    /StepWelcome.tsx                  → Step 0: Welcome screen
    /StepPersonalInfo.tsx             → Step 1
    /StepBusinessOverview.tsx         → Step 2 (or split into 2a/2b)
    /StepBeforeWeBegin.tsx            → Step 3
    /StepGettingToKnow.tsx            → Step 4
    /StepFinal.tsx                    → Step 5: Excitement + Submit
    /StepThankYou.tsx                 → Step 6: Confirmation
  /ui
    /TextInput.tsx                    → Reusable styled text input
    /TextArea.tsx                     → Reusable styled textarea
    /RadioGroup.tsx                   → Reusable styled radio group
    /CheckboxGroup.tsx                → Reusable styled checkbox group
    /DatePicker.tsx                   → Reusable styled date picker
    /ScaleSelector.tsx                → 1-5 scale selector component
    /Button.tsx                       → Primary & Secondary buttons
    /ProgressBar.tsx                  → Top progress bar
    /SectionCard.tsx                  → Card wrapper for each step
    /Badge.tsx                        → Pill badge component
/lib
  /mongodb.ts                        → MongoDB connection utility (cached)
  /models
    /Onboarding.ts                   → Mongoose model
  /validations
    /onboardingSchema.ts             → Zod validation schema
/public
  /fonts/                            → Self-hosted Inter/Manrope if needed
  /images/                           → Logo, icons
.env.local                           → MONGODB_URI
tailwind.config.ts                   → Extended with custom colors
next.config.js
package.json
```

---

## ⚙️ Technical Requirements

1. **Form State Management:** Use `react-hook-form` with a single form context that persists across all steps. Each step component registers its own fields.

2. **Validation:** Use `Zod` schemas for both client-side (via `@hookform/resolvers/zod`) and server-side validation. Per-step validation — validate the current step's fields before allowing "Next".

3. **Step Navigation:** 
   - "Next" button validates current step, then animates to next step.
   - "Back" button goes to previous step without losing data.
   - Progress bar updates on each step.
   - Keyboard: Enter key should NOT submit the form prematurely.

4. **Animations:** Use `Framer Motion` for:
   - Step transitions (slide left/right or fade).
   - Input focus effects.
   - Button hover effects.
   - Progress bar animation.
   - Success screen entrance.

5. **Responsive Design:** Fully responsive. Mobile-first. Form card should be full-width on mobile with proper padding. On desktop, centered with max-width ~680px.

6. **MongoDB Connection:** Use a cached connection pattern suitable for Next.js serverless:
   ```typescript
   // lib/mongodb.ts
   import mongoose from 'mongoose';
   
   const MONGODB_URI = process.env.MONGODB_URI!;
   
   let cached = global.mongoose;
   
   if (!cached) {
     cached = global.mongoose = { conn: null, promise: null };
   }
   
   async function dbConnect() {
     if (cached.conn) return cached.conn;
     if (!cached.promise) {
       cached.promise = mongoose.connect(MONGODB_URI).then((mongoose) => mongoose);
     }
     cached.conn = await cached.promise;
     return cached.conn;
   }
   
   export default dbConnect;
   ```

7. **Environment Variables:**
   ```
   MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/oryginai?retryWrites=true&w=majority
   ```

8. **Error Handling:** Show inline validation errors below each field in `#F5B82E` gold text. Show a toast notification for server errors.

9. **Loading State:** Show a loading spinner (gold colored) on the submit button while the API call is in progress. Disable the button to prevent double submission.

10. **Accessibility:** Proper labels, aria attributes, focus management between steps, keyboard navigable.

---

## 🏗️ Tailwind Config Extension

```typescript
// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#000000',
          section: '#0A0A0A',
          card: '#111111',
          altCard: '#141414',
        },
        border: {
          DEFAULT: '#2A2A2A',
        },
        gold: {
          DEFAULT: '#F5B82E',
          hover: '#E6A91F',
          highlight: '#FFC83D',
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#A1A1A1',
          muted: '#6B6B6B',
        },
        btn: {
          primary: '#F5B82E',
          primaryText: '#000000',
          secondary: '#1A1A1A',
          secondaryBorder: '#2A2A2A',
          secondaryText: '#A1A1A1',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Manrope', 'sans-serif'],
      },
      boxShadow: {
        gold: '0 0 20px rgba(245,184,46,0.25)',
        'gold-sm': '0 0 10px rgba(245,184,46,0.15)',
      },
      backgroundImage: {
        'premium-gradient': 'linear-gradient(135deg, #2B1405, #4A260A)',
      },
      borderRadius: {
        card: '16px',
        input: '12px',
        pill: '9999px',
      },
    },
  },
  plugins: [],
};

export default config;
```

---

## 📦 Dependencies

```json
{
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "mongoose": "^8.0.0",
    "react-hook-form": "^7.0.0",
    "@hookform/resolvers": "^3.0.0",
    "zod": "^3.0.0",
    "framer-motion": "^11.0.0",
    "sonner": "^1.0.0"
  },
  "devDependencies": {
    "tailwindcss": "^3.4.0",
    "typescript": "^5.0.0",
    "@types/react": "^18.0.0",
    "@types/node": "^20.0.0"
  }
}
```

---

## ✅ Deliverables Checklist

- [ ] Multi-step form wizard with smooth transitions (Framer Motion)
- [ ] All form fields implemented with proper types and validation
- [ ] Premium dark gold UI matching the exact color palette
- [ ] Custom styled inputs, radios, checkboxes, date pickers, scale selector
- [ ] Progress bar showing form completion
- [ ] Client-side validation per step (Zod + React Hook Form)
- [ ] Server-side validation and MongoDB storage via API route
- [ ] Mongoose model with proper schema
- [ ] Cached MongoDB connection for serverless
- [ ] Responsive design (mobile-first)
- [ ] Loading states and error handling
- [ ] Thank you / confirmation screen after submission
- [ ] Clean, modular component architecture
- [ ] Environment variable setup for MongoDB URI
- [ ] Full project compiles and runs with `npm run dev`

---

**Build the complete application with all files. Every component should be fully functional and styled. Do not use placeholder components — implement everything end-to-end.**