import { NextResponse, type NextRequest } from 'next/server';
import { unsealData } from './lib/session';

export async function middleware(request: NextRequest) {
  const cookie = request.cookies.get('session')?.value;
  const session = cookie ? await unsealData(cookie) : null;
  
  const { pathname } = request.nextUrl;

  // If user is trying to access admin login page
  if (pathname.startsWith('/admin/login')) {
    // If user is already logged in, redirect to dashboard
    if (session && !session.expired) {
      return NextResponse.redirect(new URL('/admin/dashboard', request.url));
    }
    // Otherwise, let them access the login page
    return NextResponse.next();
  }

  // For any other admin route
  if (pathname.startsWith('/admin')) {
    // If session is missing or expired, redirect to login
    if (!session || session.expired) {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  // Matcher for all admin routes, including the login page
  matcher: ['/admin/:path*'],
};