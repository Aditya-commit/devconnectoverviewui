import { NextResponse } from 'next/server'

// This function can be marked async if using await inside
export async function middleware(request) {

  const sessionId = request.cookies.get('sessionid')?.value;

  const apiResponse = await fetch(`${process.env.REMOTE_URL}/auth/authenticate`, {
    method: 'get',
    headers: {
      Cookie: `sessionid=${sessionId}`
    }
  })

  if (!apiResponse.ok) {
    if (apiResponse.status === 401) {

      if (request.nextUrl.pathname !== '/auth/signin' && request.nextUrl.pathname !== '/auth/signup') {

        return NextResponse.redirect(new URL('/auth/signin', request.url))
      }
    }
  }
  else if (apiResponse.status === 200) {
    if (request.nextUrl.pathname === '/auth/signin' || request.nextUrl.pathname === '/auth/signup') {
      return NextResponse.redirect(new URL('/', request.url));
    }
  }

  return NextResponse.next();
}
export const config = {
  matcher: ['/', '/projects/:path*', '/auth/:path*',],
};