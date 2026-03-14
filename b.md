

# Prompt: Build a Premium Dark Gold Onboarding Form System with React/Next.js & MongoDB

---

You are a senior full-stack developer specializing in building premium, production-ready web applications. Your task is to build a **complete custom onboarding form system** that replaces Google Forms, stores all responses in a **MongoDB database**, and features a **premium dark gold luxury UI**.

---

## 📋 PROJECT OVERVIEW

Build a multi-section onboarding form web application for **Orygin AI**. This form collects detailed business and personal information from new clients during onboarding. Currently, this is done via Google Forms + Google Sheets. We are replacing it with a **custom-built solution** using **Next.js (App Router)** for the frontend and API routes, and **MongoDB (via Mongoose)** as the database.

The form must be:
- Fully functional with validation
- Multi-section with smooth navigation (step-by-step wizard or scrollable single page with section anchors)
- Mobile responsive
- Visually stunning with a premium dark gold luxury aesthetic
- Connected to MongoDB to store every submission

---

## 🎨 DESIGN THEME: Premium Dark Gold SaaS / Luxury Funnel UI

**Style:** Dark minimal interface, gold accent highlights, rounded cards, soft borders, pill-shaped buttons, high-contrast typography, subtle gold glow effects, smooth transitions and micro-interactions.

### Exact Color Palette (use these HEX values precisely):

**Backgrounds:**
```
Primary Background: #000000
Section Background: #0A0A0A
Card Background: #111111
Alt Card: #141414
```

**Borders:**
```
Border Color: #2A2A2A
```

**Gold Accent:**
```
Primary Gold: #F5B82E
Gold Hover: #E6A91F
Highlight Gold: #FFC83D
```

**Text Colors:**
```
Primary Text (headings, labels): #FFFFFF
Secondary Text (descriptions, helper text): #A1A1A1
Muted Text (placeholders, disabled): #6B6B6B
```

**Buttons:**
```
Primary Button Background: #F5B82E
Primary Button Text: #000000
Secondary Button Background: #1A1A1A
Secondary Button Border: #2A2A2A
Secondary Button Text: #A1A1A1
```

**Premium Gradient (for decorative cards/sections):**
```
linear-gradient(135deg, #2B1405, #4A260A)
```

**Glow Effect (apply to focused inputs, active cards, CTA buttons):**
```
box-shadow: 0 0 20px rgba(245, 184, 46, 0.25)
```

**Fonts:** Use `Inter` as primary, fallback to `Manrope` or `Satoshi`. Import from Google Fonts. Use bold weights (600-800) for headings, regular (400) for body text.

### UI Rules:
- All cards must have `background: #111111`, `border: 1px solid #2A2A2A`, and `border-radius: 16px`
- All input fields: dark background `#141414`, border `#2A2A2A`, white text, gold border on focus with glow effect
- All buttons: pill-shaped (`border-radius: 9999px`), gold background for primary, dark for secondary
- Radio buttons and checkboxes: custom styled with gold accent when selected
- Section transitions: smooth fade or slide animations
- Progress indicator: gold progress bar or step dots at the top
- Form sections should appear as elegant cards stacked or as wizard steps
- Add subtle gold glow behind the main form container
- Top of the form: Orygin AI logo/branding area with the intro text styled beautifully
- Success/thank-you screen after submission with the closing message and confetti or subtle gold particle animation

---

## 📝 COMPLETE FORM STRUCTURE & FIELDS

Build the form with the following sections and fields exactly as specified:

---

### **SECTION 0: Introduction / Hero**
Display the following text beautifully (not a form field, just styled content):

**Title:** "Onboarding Form — Orygin AI"

**Subtitle/Description:**
"This onboarding helps us understand your business, goals, and growth vision in depth so we can build a high-performing system tailored specifically for you. The more clarity you provide, the stronger and faster we can execute."

**Note:** "Please take 8–10 minutes to complete this carefully."

---

### **SECTION 1: Personal Information**
**Section Description:** "This section helps us keep communication smooth and maintain accurate records for our partnership."

| Field Name | Type | Required | Options/Notes |
|---|---|---|---|
| Full Name | Text Input | ✅ Yes | |
| Email Address | Email Input | ✅ Yes | Validate email format |
| WhatsApp Number | Tel Input | ✅ Yes | Validate phone format |
| Designation in the company | Text Input | ❌ No | |
| Comfortable time for communication | Radio Buttons (Single Select) | ❌ No | Options: `Morning`, `Afternoon`, `Evening`, `Late Night` |

---

### **SECTION 2: Business Overview**
**Section Description:** "Help us understand your business, offer, and target audience so we can build a strategy aligned with your market and growth goals."

| Field Name | Type | Required | Options/Notes |
|---|---|---|---|
| Business Name | Text Input | ✅ Yes | |
| Registered Business Type | Radio Buttons (Single Select) | ✅ Yes | Options: `Private Limited`, `LLP`, `Proprietorship`, `Not Govt. Registered`, `Other` (if Other, show a text input for custom value) |
| Official Business Address (for contract) | Textarea | ✅ Yes | |
| Website/Social Media Link | URL Input | ❌ No | |
| Describe your business in brief | Textarea | ✅ Yes | |
| What is the product/service you sell? | Textarea | ✅ Yes | |
| Is your product/service a ___ | Radio Buttons (Single Select) | ✅ Yes | Options: `One time purchase`, `Subscription / Retainer`, `Consultation Service`, `Multiple Offers`, `Other` (if Other, show text input) |
| What is the price range your offer operates | Radio Buttons (Single Select) | ✅ Yes | Options: `₹0 - ₹1000`, `₹1000 - ₹25,000`, `₹25,000 - ₹50,000`, `₹50,000 - ₹1,00,000`, `₹1,00,000 +` |
| What is your ideal customer profile? | Textarea | ✅ Yes | Placeholder: "Example: (age, location, profession, pain points)" |
| What challenges are you currently facing in your business? | Checkboxes (Multi Select) | ✅ Yes (at least one) | Options: `Not getting enough leads`, `Getting leads but low conversion rate`, `Inconsistent sales / revenue fluctuations`, `Poor social media engagement`, `No clear marketing strategy`, `High ad spend but low ROI`, `No proper automation systems`, `No follow-up system for leads`, `Poor website performance / low conversions`, `Scaling issues (operations breaking at growth stage)`, `Lack of clarity on positioning`, `No data tracking / analytics setup`, `Difficulty retaining customers (High Churn Rate)`, `Other` (if Other, show text input) |
| Do you currently run ads? | Radio Buttons (Single Select) | ✅ Yes | Options: `Yes`, `No, but have tried in the past`, `Never tried running ads` |
| Which of these do you have already setup? | Checkboxes (Multi Select) | ❌ No | Options: `Website/Domain`, `Facebook Page (with content)`, `Instagram connected to Meta`, `Meta Business Manager`, `RazorPay for Payments`, `Active posting on social media pages` |

---

### **SECTION 3: Before We Begin**
**Section Description:** "This ensures we are aligned on expectations, compliance requirements, and key details before execution starts."

| Field Name | Type | Required | Options/Notes |
|---|---|---|---|
| What are your expectations working with us? | Textarea | ✅ Yes | |
| Any legal restrictions or compliance requirements in your industry? | Textarea | ❌ No | |
| Is there anything else we should know to serve you better? | Textarea | ❌ No | |

---

### **SECTION 4: Getting to Know You (Optional but appreciated)**
**Section Description:** "A few light questions to understand you beyond the business. Strong partnerships are built on understanding, not just strategy."

**Note:** Mark this entire section as optional in the UI with a subtle badge or note.

| Field Name | Type | Required | Options/Notes |
|---|---|---|---|
| How did you start this business? | Textarea | ❌ No | |
| Favorite hobby | Text Input | ❌ No | |
| Your birthday | Date Picker | ❌ No | |
| Company anniversary date | Date Picker | ❌ No | |
| What do you prefer for a vacation? 😁 | Radio Buttons (Single Select) | ❌ No | Options: `Mountains`, `Beaches` |

---

### **SECTION 5: Final Section**
Display the following closing message beautifully:

**Text:**
"Thank you for taking the time to complete this onboarding. Your clarity helps us build a strategy that is aligned with your goals from day one. We are fully committed to executing with precision, transparency, and performance in mind. Our focus is simple — build systems that generate measurable and sustainable growth for your business."

**Bold/Highlighted:** "Let's build something powerful."

| Field Name | Type | Required | Options/Notes |
|---|---|---|---|
| On a scale of 1-5, how excited are you to grow this year? | Rating Scale (1-5) | ❌ No | Display as 5 clickable gold stars or numbered gold circles. Visual, interactive. |

Then a **Submit** button (pill-shaped, gold, with glow effect on hover).

---

## 🗄️ TECHNICAL REQUIREMENTS

### Tech Stack:
- **Framework:** Next.js 14+ (App Router)
- **Styling:** Tailwind CSS (with custom theme config matching the color palette above) OR CSS Modules / Styled Components — but Tailwind is preferred
- **Database:** MongoDB Atlas (cloud) via **Mongoose ODM**
- **Form Handling:** React Hook Form + Zod validation (or similar robust validation)
- **API:** Next.js API Routes (`app/api/...`) to handle form submission POST request
- **Deployment-ready:** Should work on Vercel with MongoDB Atlas connection string in `.env.local`

### MongoDB Schema:
Create a Mongoose schema/model called `OnboardingSubmission` that stores ALL form fields. Use appropriate types:
- Strings for text fields
- Array of strings for checkbox/multi-select fields
- Date for date fields
- Number for the excitement rating
- Add `createdAt` timestamp automatically
- Add an `submissionId` field (auto-generated UUID or ObjectId)

### API Route:
- `POST /api/onboarding` — receives the full form data as JSON, validates it server-side, saves to MongoDB, returns success/error response
- `GET /api/onboarding` — (optional but nice to have) returns all submissions (for future admin dashboard use), protected or basic

### Environment Variables:
```
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/orygin-onboarding?retryWrites=true&w=majority
```

### Validation:
- Client-side: Real-time validation with helpful error messages (styled in red/gold)
- Server-side: Validate again in the API route before saving
- Required fields must show error if empty on submit attempt
- Email must be valid format
- Phone number should accept international formats

### Form UX:
- Multi-step wizard with Previous/Next buttons AND a progress bar at the top
- Each section = one step
- Smooth transition animations between steps (fade, slide, or scale)
- "Next" button should validate current section before proceeding
- Final step shows a review/summary (optional but nice) before submit
- On successful submission: show a beautiful thank-you screen with the closing message, maybe with a subtle gold confetti animation
- On error: show a toast notification or inline error

### Responsiveness:
- Must be fully responsive: mobile, tablet, desktop
- On mobile: full-width cards, stacked layout, larger touch targets
- On desktop: centered form container (max-width ~700px), elegant spacing

### Accessibility:
- Proper labels for all inputs
- Keyboard navigable
- Focus states with gold glow
- ARIA attributes where needed

---

## 📁 PROJECT STRUCTURE (Suggested)

```
/app
  /page.tsx                    → Main onboarding form page
  /api
    /onboarding
      /route.ts                → POST & GET handlers
  /layout.tsx                  → Root layout with fonts, metadata
  /globals.css                 → Global styles, Tailwind imports
  /thank-you
    /page.tsx                  → Thank you page (optional, or show inline)

/components
  /ui
    /Button.tsx
    /Input.tsx
    /Textarea.tsx
    /RadioGroup.tsx
    /CheckboxGroup.tsx
    /DatePicker.tsx
    /RatingScale.tsx
    /ProgressBar.tsx
    /Card.tsx
    /SectionHeader.tsx
  /forms
    /PersonalInfoSection.tsx
    /BusinessOverviewSection.tsx
    /BeforeWeBeginSection.tsx
    /GettingToKnowYouSection.tsx
    /FinalSection.tsx
  /OnboardingForm.tsx          → Main form wizard component

/lib
  /mongodb.ts                  → MongoDB connection utility
  /models
    /OnboardingSubmission.ts   → Mongoose schema & model
  /validations
    /onboardingSchema.ts       → Zod validation schema

/public
  /logo.svg                    → Orygin AI logo (placeholder)

tailwind.config.ts             → Custom theme with all gold/dark colors
.env.local                     → MONGODB_URI
```

---

## ✅ DELIVERABLES

1. **Complete, working Next.js application** with all files
2. **All form sections** with every field as specified
3. **Custom-styled UI components** matching the premium dark gold theme exactly
4. **MongoDB integration** with Mongoose — fully functional save to database
5. **Client and server validation**
6. **Responsive design** across all devices
7. **Progress bar** and multi-step navigation
8. **Thank you screen** after successful submission
9. **Clean, well-commented code** with TypeScript
10. **README with setup instructions** (how to install, configure MongoDB URI, run locally)

---

## ⚠️ IMPORTANT NOTES

- Do NOT use any UI library like Material UI, Chakra, or shadcn/ui — build all components custom to match the exact design theme
- Every color must match the HEX values provided — no approximations
- The form should feel like a premium, luxury product — smooth animations, elegant spacing, beautiful typography
- Gold glow effects should be subtle, not overwhelming
- The overall vibe: **dark, premium, confident, professional — like a high-end SaaS product**
- Make sure the MongoDB connection is properly handled (connection pooling, error handling)
- Include proper loading states on the submit button (spinner + disabled state)
- Make the code production-ready, not a prototype

---

Build this complete application now. Provide all files with complete code, no placeholders, no "add your code here" comments. Every file should be fully implemented and ready to run.