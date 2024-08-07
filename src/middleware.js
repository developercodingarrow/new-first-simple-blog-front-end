import { NextResponse } from "next/server";

export function middleware(request) {
  const isAuthToken = request.cookies.get("jwt")?.value;

  if (isAuthToken !== undefined) {
    return NextResponse.next();
  }
  return NextResponse.redirect(new URL("/login", request.url));
}

export const config = {
  // matcher: "/write", (userdashboard)
  matcher: ["/userdashboard/:path*"],
};
