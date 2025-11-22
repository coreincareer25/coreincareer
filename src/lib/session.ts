import 'server-only';
import { SignJWT, jwtVerify } from 'jose';
import type { JWTPayload } from 'jose';

const secretKey = process.env.SESSION_SECRET || 'your-fallback-secret-key-that-is-at-least-32-characters-long';
const encodedKey = new TextEncoder().encode(secretKey);

if (process.env.NODE_ENV === 'development' && secretKey === 'your-fallback-secret-key-that-is-at-least-32-characters-long') {
  console.warn(
    'Warning: The session secret is not set. Please set SESSION_SECRET in your .env file.'
  );
}


export async function sealData(payload: JWTPayload, options: { expires?: Date }) {
  const iat = Math.floor(Date.now() / 1000);
  const exp = options.expires ? Math.floor(options.expires.getTime() / 1000) : iat + 60 * 60 * 24 * 7; // 7 days

  return new SignJWT({ ...payload })
    .setProtectedHeader({ alg: 'HS256', typ: 'JWT' })
    .setExpirationTime(exp)
    .setIssuedAt(iat)
    .setNotBefore(iat)
    .sign(encodedKey);
}

export async function unsealData(token: string) {
  try {
    const { payload } = await jwtVerify(token, encodedKey, {
      algorithms: ['HS256'],
    });
    return { payload, expired: false };
  } catch (error) {
    return { payload: null, expired: true };
  }
}