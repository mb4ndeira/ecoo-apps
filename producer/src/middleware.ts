import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const PAGES_IN_CONSTRUCTION =
  process.env.PAGES_IN_CONSTRUCTION?.split(",") || [];

const PROTECTED_PAGES = ["/produtos"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const access_token = request.cookies.get("token")?.value;

  const pathnameStartsWith = (startsWith: string[]) =>
    startsWith.some((item) => pathname.startsWith(item));

  if (
    (pathname === "/" || pathnameStartsWith(PROTECTED_PAGES)) &&
    !access_token
  ) {
    return NextResponse.redirect(new URL("/inicio", request.url));
  }

  if (PAGES_IN_CONSTRUCTION.includes(pathname)) {
    return NextResponse.redirect(new URL("/em-construcao", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/produtos/:path*"],
};
