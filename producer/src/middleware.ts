import { NextRequest, NextResponse } from "next/server"

export default function middleware(request: NextRequest){
  const token = request.cookies.get('access_token')?.value

  const urlRedirect = new URL('/inicio', request.url)

  if(!token){
    return NextResponse.redirect(urlRedirect)
  }
}

export const config = {
  matcher: ['/', '/produtos/:path*']
}