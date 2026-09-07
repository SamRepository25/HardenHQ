import { createHmac } from 'crypto';

export const AUTH_COOKIE = 'hardenhq_admin';
const SESSION_TTL_SECONDS = 8 * 60 * 60;

function getSecret(): string | null {
  const username = process.env.ADMIN_USERNAME;
  const password = process.env.ADMIN_PASSWORD;
  if (!username || !password) return null;
  return `${username}:${password}`;
}

function sign(value: string): string | null {
  const secret = getSecret();
  if (!secret) return null;
  return createHmac('sha256', secret).update(value).digest('hex');
}

export function createSessionToken(): string | null {
  const expiresAt = Math.floor(Date.now() / 1000) + SESSION_TTL_SECONDS;
  const payload = String(expiresAt);
  const signature = sign(payload);
  return signature ? `${payload}.${signature}` : null;
}

export function isValidSessionToken(token: string | undefined): boolean {
  if (!token) return false;
  const separator = token.indexOf('.');
  if (separator <= 0) return false;

  const payload = token.slice(0, separator);
  const signature = token.slice(separator + 1);
  const expiresAt = Number(payload);
  if (!Number.isSafeInteger(expiresAt) || expiresAt <= Math.floor(Date.now() / 1000)) return false;

  const expected = sign(payload);
  if (!expected || signature.length !== expected.length) return false;

  let result = 0;
  for (let i = 0; i < expected.length; i += 1) {
    result |= expected.charCodeAt(i) ^ signature.charCodeAt(i);
  }
  return result === 0;
}

export function getSessionCookieOptions() {
  return {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax' as const,
    path: '/',
    maxAge: SESSION_TTL_SECONDS,
  };
}
