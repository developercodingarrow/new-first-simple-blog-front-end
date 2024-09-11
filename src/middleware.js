import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import CryptoJS from "crypto-js";

// we need to define const varible here and store cookes here then we import that varible in api file

export const checkMidelwear = "this is midelwear file";
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
