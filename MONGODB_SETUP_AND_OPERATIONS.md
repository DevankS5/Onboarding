# MongoDB Setup and Operations (Synced with Current Orygin Onboarding Project)

This document is aligned with the current implementation in this repository:
- DB connector: `lib/mongodb.ts`
- Mongoose model: `lib/models/Onboarding.ts`
- API handlers: `app/api/onboarding/route.ts`
- Env template: `.env.example`

## 1) Quick Setup

### Prerequisites
- MongoDB Atlas account
- Cluster + database user created
- Network access configured (IP allowlist)

### If You Have Not Created Cluster, DB User, or Network Access Yet

Follow these exact Atlas steps first.

#### Step 1: Create Atlas Project
1. Sign in to MongoDB Atlas: https://www.mongodb.com/atlas
2. Click `New Project`.
3. Project name suggestion: `Orygin Onboarding`.
4. Click `Create Project`.

#### Step 2: Create Cluster
1. Inside the new project, click `Build a Database`.
2. Choose `M0 Free` (good for development) or your preferred paid tier.
3. Select cloud provider and region closest to your app users (or closest to your Vercel region).
4. Cluster name suggestion: `orygin-cluster`.
5. Click `Create` / `Create Deployment`.
6. Wait until status becomes ready (can take a few minutes).

#### Step 3: Create Database User (Username/Password)
1. Open `Security` -> `Database Access`.
2. Click `Add New Database User`.
3. Select `Password` authentication method.
4. Enter username (example: `orygin_app_user`).
5. Generate a strong password and save it in your password manager.
6. Under `Database User Privileges`, select:
  - For development: `Read and write to any database`.
  - For production (recommended later): restrict to one DB (for example `orygin-onboarding`) with least privilege.
7. Click `Add User`.

#### Step 4: Configure Network Access (IP Allowlist)
1. Open `Security` -> `Network Access`.
2. Click `Add IP Address`.
3. Choose one option:
  - Local development quick start: `Allow Access from Anywhere` (adds `0.0.0.0/0`).
  - Safer option: add only your current public IP.
4. If you will deploy to Vercel and do not manage fixed egress IPs, keep temporary `0.0.0.0/0` and tighten later when infra is finalized.
5. Click `Confirm`.

#### Step 5: Get Connection String
1. Open `Database` -> your cluster -> click `Connect`.
2. Choose `Drivers`.
3. Select `Node.js` driver and latest version.
4. Copy the URI (format looks like this):

```text
mongodb+srv://<username>:<password>@<cluster>.mongodb.net/?retryWrites=true&w=majority
```

5. Replace:
  - `<username>` with your DB user name.
  - `<password>` with your DB user password.
  - add database name in path: `/orygin-onboarding`.

Final example:

```text
mongodb+srv://orygin_app_user:<password>@orygin-cluster.xxxxx.mongodb.net/orygin-onboarding?retryWrites=true&w=majority
```

#### Step 6: Add URI to This Project
Create `.env.local` in project root:

```env
MONGODB_URI=mongodb+srv://orygin_app_user:<password>@orygin-cluster.xxxxx.mongodb.net/orygin-onboarding?retryWrites=true&w=majority
```

Then restart your app server:

```bash
npm run dev
```

#### Step 7: Verify Connection End-to-End
1. Submit one onboarding form from UI.
2. In Atlas, open `Database` -> `Browse Collections`.
3. Verify DB `orygin-onboarding` appears.
4. Verify collection `onboardingResponses` appears with one document.

If collection does not appear:
- Re-check username/password in URI.
- Re-check network access allowlist.
- Confirm `.env.local` file is in project root.
- Restart server after env change.

### Environment Variable
Create `.env.local` in project root:

```env
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/orygin-onboarding?retryWrites=true&w=majority
```

Important:
- This project throws runtime error if `MONGODB_URI` is missing.
- The connection is cached for serverless reuse using `global.mongooseCache`.

## 2) Current Collection and Schema Mapping

Collection name used by model:
- `onboardingResponses`

Model name:
- `Onboarding`

Key schema characteristics currently active:
- `submissionId`: UUID string, indexed
- Required personal fields: `fullName`, `email`, `whatsappNumber`
- Required business fields: `businessName`, `businessType`, `businessAddress`, `businessDescription`, `productService`, `productType`, `priceRange`, `idealCustomer`, `challenges`, `runAds`
- Required pre-start field: `expectations`
- Required final field: `excitementLevel` (1 to 5)
- Optional date fields stored as `Date | null`: `birthday`, `companyAnniversary`
- Metadata captured on POST: `submittedAt`, `ipAddress`, `userAgent`
- `timestamps: true` adds `createdAt` and `updatedAt`

## 3) Data Flow in Current App

1. Client submits payload to `POST /api/onboarding`.
2. Payload validated with Zod (`onboardingSchema`).
3. API normalizes dates (`birthday`, `companyAnniversary`).
4. API adds request metadata (`ipAddress`, `userAgent`).
5. Record saved via `OnboardingModel.create(...)` to `onboardingResponses`.
6. Success response returns document `_id` and `submissionId`.

## 4) API Operations

### Create Submission
Endpoint:
- `POST /api/onboarding`

Success response:

```json
{
  "success": true,
  "message": "Onboarding submitted successfully",
  "id": "<mongodb_object_id>",
  "submissionId": "<uuid>"
}
```

Validation error response:

```json
{
  "success": false,
  "errors": [
    { "path": "fullName", "message": "Full name is required" }
  ]
}
```

Server error response:

```json
{
  "success": false,
  "message": "Something went wrong"
}
```

### List Submissions (Paginated)
Endpoint:
- `GET /api/onboarding?page=1&limit=10`

Notes:
- `page` min = 1
- `limit` range = 1 to 100
- Sorted newest first by `createdAt`

Sample response:

```json
{
  "success": true,
  "page": 1,
  "limit": 10,
  "total": 56,
  "totalPages": 6,
  "items": [
    {
      "_id": "...",
      "submissionId": "...",
      "fullName": "...",
      "createdAt": "..."
    }
  ]
}
```

## 5) Useful MongoDB Atlas Operations

### A) Verify collection exists
In Atlas Data Explorer:
- Database: `orygin-onboarding` (or whichever DB your URI points to)
- Collection: `onboardingResponses`

### B) Common filters
- Find by email:

```javascript
{ email: "client@example.com" }
```

- Find recent submissions:

```javascript
{ createdAt: { $gte: new Date("2026-01-01") } }
```

- Find by challenge keyword in array:

```javascript
{ challenges: "No clear marketing strategy" }
```

### C) Sort and limit (Atlas query options)
- Sort:

```javascript
{ createdAt: -1 }
```

- Limit: `50`

## 6) Recommended Indexes (Production)

Current schema already indexes:
- `submissionId`

Recommended additional indexes for dashboard use:

```javascript
db.onboardingResponses.createIndex({ createdAt: -1 })
db.onboardingResponses.createIndex({ email: 1 })
db.onboardingResponses.createIndex({ businessName: 1 })
```

For text search (optional):

```javascript
db.onboardingResponses.createIndex({
  fullName: "text",
  businessName: "text",
  businessDescription: "text",
  productService: "text"
})
```

## 7) Update and Delete Operations (Admin Use)

### Update one document by submissionId

```javascript
db.onboardingResponses.updateOne(
  { submissionId: "<uuid>" },
  {
    $set: {
      legalRestrictions: "Updated legal notes",
      updatedAt: new Date()
    }
  }
)
```

### Delete one document by submissionId

```javascript
db.onboardingResponses.deleteOne({ submissionId: "<uuid>" })
```

### Soft-delete pattern (recommended instead of hard delete)
If you choose to add this later, store:
- `isDeleted: true`
- `deletedAt: Date`

## 8) Backup and Export

### Atlas backup
- Enable automated cloud backups in Atlas project settings.

### JSON export with mongoexport

```bash
mongoexport \
  --uri="${MONGODB_URI}" \
  --collection=onboardingResponses \
  --out=onboardingResponses.json
```

### CSV export for reporting

```bash
mongoexport \
  --uri="${MONGODB_URI}" \
  --collection=onboardingResponses \
  --type=csv \
  --fields=submissionId,fullName,email,businessName,createdAt \
  --out=onboardingResponses.csv
```

## 9) Security Checklist

- Never commit `.env.local`.
- Use least-privilege DB users (separate read/write users by environment if possible).
- Restrict Atlas network access to trusted IPs.
- Add API auth before exposing GET submissions publicly.
- Consider rate limiting on `POST /api/onboarding`.

## 10) Troubleshooting

### Error: MONGODB_URI is not defined
- Ensure `.env.local` exists in root and contains `MONGODB_URI`.
- Restart dev server after editing env vars.

### Validation returns 400
- Check `errors[].path` and `errors[].message` in response.
- Confirm conditional fields when selecting `Other` values.

### Dates not saving
- API expects date strings parseable by JavaScript `Date`.
- Empty date values are normalized to `null`.

---

If schema changes are made in `lib/models/Onboarding.ts` or `lib/validations/onboardingSchema.ts`, update this document in the same PR to keep operations and implementation synchronized.
