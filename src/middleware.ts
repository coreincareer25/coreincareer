import { NextRequest, NextResponse } from 'next/server';
import { unsealData } from '@/lib/session';

export async function middleware(request: NextRequest) {
  const sessionCookie = request.cookies.get('session');

  // If no session cookie, redirect to login
  if (!sessionCookie) {
    return NextResponse.redirect(new URL('/admin/login', request.url));
  }

  // Verify the session
  const { payload, expired } = await unsealData(sessionCookie.value);

  if (expired || !payload?.isAdmin) {
    // If expired or not an admin, destroy cookie and redirect to login
    const response = NextResponse.redirect(new URL('/admin/login', request.url));
    response.cookies.set('session', '', { expires: new Date(0) });
    return response;
  }

  // If session is valid, continue
  return NextResponse.next();
}

// Apply middleware only to the protected admin paths
export const config = {
  matcher: '/admin/(protected)/:path*',
};
