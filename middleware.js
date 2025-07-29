import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export function middleware(request) {
  // Get the token from cookies
  const token = request.cookies.get("authToken")?.value;

  // Check if the request is for admin routes
  if (request.nextUrl.pathname.startsWith("/api/admin")) {
    // Skip auth check for login and signup routes
    if (
      request.nextUrl.pathname === "/api/admin/login" ||
      request.nextUrl.pathname === "/api/admin/signup"
    ) {
      return NextResponse.next();
    }

    // Verify token for other admin routes
    if (!token) {
      return NextResponse.json(
        { message: "Authentication required" },
        { status: 401 }
      );
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET || "your-secret-key");
      // Add user info to request headers for use in API routes
      const requestHeaders = new Headers(request.headers);
      requestHeaders.set("user", JSON.stringify(decoded));

      return NextResponse.next({
        request: {
          headers: requestHeaders,
        },
      });
    } catch (error) {
      return NextResponse.json(
        { message: "Invalid or expired token" },
        { status: 401 }
      );
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/api/admin/:path*",
    // Add other protected routes here if needed
  ],
}; 