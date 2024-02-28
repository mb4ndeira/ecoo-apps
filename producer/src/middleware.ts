import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  if (
    request.nextUrl.pathname.startsWith("/") ||
    request.nextUrl.pathname.startsWith("/produtos/")
  ) {
    const accessToken = request.cookies.get("access_token")?.value;

    if (!accessToken)
      return NextResponse.redirect(new URL("/inicio", request.url));
  }
}
export const config = {
  matcher: ["/produtos/:path*", "/"],
};
