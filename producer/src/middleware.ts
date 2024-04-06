import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  if (
    request.nextUrl.pathname.startsWith("/") ||
    request.nextUrl.pathname.startsWith("/produtos/")
  ) {
    const accessToken = request.cookies.get("token")?.value;
    if (accessToken) {
      return NextResponse.redirect(new URL("/inicio", request.url));
    }
  }
}
export const config = {
  matcher: ["/produtos/:path*", "/"],
};
