// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// middleware.ts
export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname
  const protectedRoutes = ['/dashboard']

  if (protectedRoutes.some(route => path.startsWith(route))) {
    const session = request.cookies.get('loggedIn')?.value

    if (!session) {
      return NextResponse.redirect(new URL('/login', request.url))
    }
  }

  return NextResponse.next()
}