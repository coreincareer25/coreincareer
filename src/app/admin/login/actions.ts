'use server';

import { sealData, unsealData } from '@/lib/session';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function login(
  prevState: string | undefined,
  formData: FormData
) {
  const email = formData.get('email');
  const password = formData.get('password');

  if (email !== 'admin@coreincareer.in' || password !== 'password123') {
    return 'Invalid email or password.';
  }

  const user = { email, isAdmin: true };
  const expires = new Date(Date.now() + 24 * 60 * 60 * 1000 * 7); // 7 days

  const session = await sealData(user, {
    expires,
  });

  cookies().set('session', session, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    expires: expires,
    sameSite: 'lax',
    path: '/',
  });

  redirect('/admin/dashboard');
}

export async function logout() {
  cookies().delete('session');
  redirect('/admin/login');
}

export async function getSession() {
  const cookie = cookies().get('session')?.value;
  if (!cookie) return null;

  try {
    const sessionData = await unsealData(cookie);
    return sessionData.payload as { email: string; isAdmin: boolean, iat: number, exp: number };
  } catch (error) {
    return null;
  }
}