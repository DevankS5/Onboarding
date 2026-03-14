# Orygin AI Onboarding Form

Premium dark-gold onboarding wizard built with Next.js App Router, React Hook Form, Zod, Framer Motion, and MongoDB/Mongoose.

## Features

- Multi-step onboarding flow with animated transitions
- Split business section for better UX
- Per-step validation using React Hook Form + Zod
- Custom dark-gold design system with Tailwind
- API routes for POST and paginated GET submissions
- MongoDB persistence with cached serverless connection
- Fully responsive card-based interface
- Accessible labels, focus states, and keyboard-safe navigation

## Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- React Hook Form
- Zod
- Framer Motion
- Sonner (toast notifications)
- MongoDB + Mongoose

## Setup

1. Install dependencies:

```bash
npm install
```

2. Create environment file:

```bash
cp .env.example .env.local
```

3. Fill your MongoDB connection string in `.env.local`:

```env
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/orygin-onboarding?retryWrites=true&w=majority
```

4. Run development server:

```bash
npm run dev
```

5. Open: `http://localhost:3000`

## API

### `POST /api/onboarding`

- Validates payload with Zod
- Stores in MongoDB collection `onboardingResponses`
- Returns:

```json
{
  "success": true,
  "message": "Onboarding submitted successfully",
  "id": "<document_id>",
  "submissionId": "<uuid>"
}
```

### `GET /api/onboarding?page=1&limit=10`

Returns paginated submissions for future admin/dashboard integration.

## Project Structure

- `app/page.tsx`: main page entry
- `components/form/FormWizard.tsx`: wizard controller and transitions
- `components/form/*`: all onboarding step sections
- `components/ui/*`: reusable dark-gold primitives
- `app/api/onboarding/route.ts`: POST/GET handlers
- `lib/mongodb.ts`: cached DB connector
- `lib/models/Onboarding.ts`: Mongoose model
- `lib/validations/onboardingSchema.ts`: shared validation schema
