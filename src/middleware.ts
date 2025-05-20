// middleware.ts - DEVRE DIŞI BIRAKILDI (statik export ile uyumsuz)
// import { NextResponse } from 'next/server'
// import type { NextRequest } from 'next/server'

// Statik export (output: 'export') kullanırken middleware çalışmaz
// Bu fonksiyonu yorum satırına aldık. Client-side kimlik doğrulama kullanılmalıdır.
/*
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
*/