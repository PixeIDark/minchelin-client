import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  // next-auth.session-token <= next-auth 가 로그인 시 자동으로 생성하는 쿠키. getToken 이 자동으로 가져옴 goat;
  const token = await getToken({ req: request });

  console.log(token);

  if (request.nextUrl.pathname.startsWith('/user')) {
    if (!token) {
      const loginUrl = new URL('/auth/login', request.url);
      loginUrl.searchParams.set('callbackUrl', request.nextUrl.pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/user/:path*',
};
