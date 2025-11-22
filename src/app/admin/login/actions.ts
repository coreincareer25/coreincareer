'use server';

import { sealData } from '@/lib/session';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function login(prevState: string | undefined, formData: FormData) {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  // WARNING: Hardcoded credentials. In a real app, use a database.
  if (email !== 'admin@coreincareer.in' || password !== 'password123') {
    return 'Invalid email or password.';
  }

  // Create the session
  const expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
  const session = await sealData({ email, isAdmin: true }, { expires });

  // Save the session in a cookie
  cookies().set('session', session, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    expires: expires,
    path: '/',
  });

  redirect('/admin/dashboard');
}

export async function logout() {
  // Destroy the session
  cookies().set('session', '', { expires: new Date(0) });
  redirect('/admin/login');
}
