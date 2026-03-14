import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import { OnboardingModel } from '@/lib/models/Onboarding';
import { onboardingSchema } from '@/lib/validations/onboardingSchema';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

function normalizeDate(value?: string) {
  if (!value) return null;
  const parsed = new Date(value);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = onboardingSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          success: false,
          errors: parsed.error.issues.map((issue) => ({
            path: issue.path.join('.'),
            message: issue.message
          }))
        },
        { status: 400 }
      );
    }

    await dbConnect();

    const ipAddress = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || '';
    const userAgent = req.headers.get('user-agent') || '';

    const payload = {
      ...parsed.data,
      birthday: normalizeDate(parsed.data.birthday),
      companyAnniversary: normalizeDate(parsed.data.companyAnniversary),
      ipAddress,
      userAgent
    };

    const submission = await OnboardingModel.create(payload);

    return NextResponse.json(
      {
        success: true,
        message: 'Onboarding submitted successfully',
        id: submission._id,
        submissionId: submission.submissionId
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Onboarding submission failed:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Something went wrong'
      },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  try {
    await dbConnect();

    const { searchParams } = new URL(req.url);
    const page = Math.max(Number(searchParams.get('page') || 1), 1);
    const limit = Math.min(Math.max(Number(searchParams.get('limit') || 10), 1), 100);
    const skip = (page - 1) * limit;

    const [items, total] = await Promise.all([
      OnboardingModel.find({}).sort({ createdAt: -1 }).skip(skip).limit(limit).lean(),
      OnboardingModel.countDocuments({})
    ]);

    return NextResponse.json({
      success: true,
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
      items
    });
  } catch (error) {
    console.error('Fetch onboarding submissions failed:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Something went wrong'
      },
      { status: 500 }
    );
  }
}
