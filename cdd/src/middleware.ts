import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const PROTECTED_PAGES = [
  "/pedidos",
  "/entregas",
  "/enviar-sacola",
  "/montar-sacola",
];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const access_token = request.cookies.get("token")?.value;

  const pathnameStartsWith = (startsWith: string[]) =>
    startsWith.some((item) => {
      if (pathname.startsWith(item)) return true;
    });

  if (
    (pathname.endsWith("/") || pathnameStartsWith(PROTECTED_PAGES)) &&
    !access_token
  )
    return NextResponse.redirect(new URL("/inicio", request.url));
}

export const config = {
  matcher: [
    "/",
    "/pedidos/:path*",
    "/entregas/:path*",
    "/enviar-sacola/:path*",
    "/montar-sacola/:path*",
  ],
};
