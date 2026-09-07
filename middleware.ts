import { NextRequest, NextResponse } from 'next/server';
import { AUTH_COOKIE, isValidSessionToken } from '@/lib/auth';

function isProtectedPath(pathname: string): boolean {
  return (
    pathname === '/dashboard' ||
    pathname.startsWith('/dashboard/') ||
    pathname === '/monitor' ||
    pathname.startsWith('/monitor/') ||
    pathname === '/scan-history' ||
    pathname.startsWith('/scan-history/') ||
    pathname === '/api/dashboard' ||
    pathname === '/api/scans' ||
    pathname.startsWith('/api/scans/') ||
    pathname === '/api/sites' ||
    pathname.startsWith('/api/sites/')
  );
}

function isAuthRoute(pathname: string): boolean {
  return pathname === '/auth' || pathname === '/api/auth/login' || pathname === '/api/auth/logout';
}

export function buildCsp(nonce: string): string {
  return [
    "default-src 'self'",
    `script-src 'self' 'nonce-${nonce}' 'strict-dynamic'`,
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: blob: https:",
    "font-src 'self' data: https:",
    "connect-src 'self' https:",
    "frame-ancestors 'none'",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
  ].join('; ');
}

function withSecurityHeaders(response: NextResponse, nonce: string): NextResponse {
  response.headers.set('Content-Security-Policy', buildCsp(nonce));
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
  response.headers.set('Cross-Origin-Opener-Policy', 'same-origin');
  response.headers.set('Cross-Origin-Embedder-Policy', 'credentialless');
  response.headers.set('Cross-Origin-Resource-Policy', 'same-origin');
  response.headers.set('Cache-Control', 'no-store');
  return response;
}

export function middleware(request: NextRequest): NextResponse {
  const nonce = Buffer.from(crypto.randomUUID()).toString('base64');
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-nonce', nonce);
  requestHeaders.set('Content-Security-Policy', buildCsp(nonce));
  const nextInit = { request: { headers: requestHeaders } };
  const pathname = request.nextUrl.pathname;

  if (process.env.MAINTENANCE_MODE === 'true' && pathname !== '/maintenance' && pathname !== '/api/health' && !isProtectedPath(pathname)) {
    return withSecurityHeaders(NextResponse.rewrite(new URL('/maintenance', request.url), nextInit), nonce);
  }

  if (isAuthRoute(pathname) || !isProtectedPath(pathname)) {
    return withSecurityHeaders(NextResponse.next(nextInit), nonce);
  }

  if (!['GET', 'HEAD', 'OPTIONS'].includes(request.method)) {
    const origin = request.headers.get('origin');
    if (origin && origin !== request.nextUrl.origin) {
      return withSecurityHeaders(NextResponse.json({ detail: 'Cross-origin requests are not allowed.' }, { status: 403 }), nonce);
    }
  }

  if (isValidSessionToken(request.cookies.get(AUTH_COOKIE)?.value)) {
    return withSecurityHeaders(NextResponse.next(nextInit), nonce);
  }

  if (pathname.startsWith('/api/')) {
    return withSecurityHeaders(NextResponse.json({ detail: 'Authentication required.' }, { status: 401 }), nonce);
  }

  const loginUrl = new URL('/auth', request.url);
  loginUrl.searchParams.set('next', `${pathname}${request.nextUrl.search}`);
  return withSecurityHeaders(NextResponse.redirect(loginUrl), nonce);
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
  runtime: 'nodejs',
};
