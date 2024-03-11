import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  if (
    request.nextUrl.pathname.startsWith("/") ||
    request.nextUrl.pathname.startsWith("/entregas/") ||
    request.nextUrl.pathname.startsWith("/enviar-sacola/") ||
    request.nextUrl.pathname.startsWith("/montar-sacola/")
  ) {
    const accessToken = request.cookies.get("token")?.value;
    if (!accessToken)
      return NextResponse.redirect(new URL("/inicio", request.url));
  }
}
export const config = {
  // matcher: [
  //   "/entregas/:path*",
  //   "/enviar-sacola/:path*",
  //   "/montar-sacola/:path*",
  //   "/",
  // ],
};
