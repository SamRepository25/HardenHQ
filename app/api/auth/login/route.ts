import { NextRequest, NextResponse } from 'next/server';
import { checkRateLimit } from '@/lib/rate-limit';
import { AUTH_COOKIE, createSessionToken, getSessionCookieOptions, secureEqual } from '@/lib/auth';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

function clientIdentifier(request: NextRequest): string {
  return request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || request.headers.get('x-real-ip') || 'unknown';
}

function sameOrigin(request: NextRequest): boolean {
  const origin = request.headers.get('origin');
  return !origin || origin === request.nextUrl.origin;
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  if (!sameOrigin(request)) {
    return NextResponse.json({ detail: 'Cross-origin requests are not allowed.' }, { status: 403 });
  }

  try {
    const limit = await checkRateLimit(clientIdentifier(request), 'login');
    if (!limit.allowed) {
      return NextResponse.json(
        { detail: 'Too many login attempts. Please try again later.' },
        { status: 429, headers: { 'Retry-After': String(limit.retryAfter || 60) } }
      );
    }
  } catch (error) {
    console.error('Login rate limiter error:', error);
    return NextResponse.json({ detail: 'Authentication service unavailable.' }, { status: 503 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ detail: 'Invalid request.' }, { status: 400 });
  }

  const username = process.env.ADMIN_USERNAME;
  const password = process.env.ADMIN_PASSWORD;
  const inputUsername = body && typeof body === 'object' && 'username' in body && typeof body.username === 'string' ? body.username : '';
  const inputPassword = body && typeof body === 'object' && 'password' in body && typeof body.password === 'string' ? body.password : '';

  if (!username || !password || !secureEqual(inputUsername, username) || !secureEqual(inputPassword, password)) {
    return NextResponse.json({ detail: 'Invalid username or password.' }, { status: 401 });
  }

  const token = createSessionToken();
  if (!token) {
    return NextResponse.json({ detail: 'Authentication is not configured.' }, { status: 503 });
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set(AUTH_COOKIE, token, getSessionCookieOptions());
  return response;
}
