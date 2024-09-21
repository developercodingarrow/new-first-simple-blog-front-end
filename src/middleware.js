import { NextResponse } from "next/server";
import { getSession } from "./app/lib/authentication";

export async function middleware(request) {
  const isAuthToken = request.cookies.get("jwt")?.value;
  const userData = await getSession(); // Get decrypted user data

  console.log("midelwaer--", userData);
  // Ensure user data is valid before accessing the role
  const userRole = userData?.role;
  const url = request.nextUrl.pathname;

  // If authenticated and trying to access login or registration pages, redirect to userdashboard
  if (isAuthToken && userRole === "user") {
    console.log("------------user");
    if (url.startsWith("/login") || url.startsWith("/user-registration")) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  // If authenticated and trying to access login or registration pages, redirect to userdashboard
  if (isAuthToken && userRole === "superAdmin") {
    console.log("---------superAdmin");
    if (
      url.startsWith("/admin-login") ||
      url.startsWith("/login") ||
      url.startsWith("/user-registration")
    ) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  // If not authenticated and trying to access protected routes, redirect to login
  if (!isAuthToken || !userData) {
    if (!url.startsWith("/login") && !url.startsWith("/user-registration")) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
    // Allow access to login and registration pages if not authenticated
    return NextResponse.next();
  }

  // Role-based access control
  if (userRole === "user") {
    if (url.startsWith("/userdashboard")) {
      return NextResponse.next(); // Allow access to userdashboard
    } else {
      return NextResponse.redirect(new URL("/login", request.url)); // Restrict access to other areas
    }
  }

  if (userRole === "superAdmin") {
    if (url.startsWith("/admindashboard")) {
      return NextResponse.next(); // Allow access to admindashboard
    } else {
      return NextResponse.redirect(new URL("/admin-login", request.url)); // Restrict access to other areas
    }
  }

  // Default fallback: if no matching role, redirect to login page
  return NextResponse.redirect(new URL("/login", request.url));
}

export const config = {
  matcher: [
    "/userdashboard/:path*",
    "/admindashboard/:path*",
    "/login",
    "/user-registration",
  ],
};
