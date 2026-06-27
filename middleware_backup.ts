import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;

  if (!token) {
    return NextResponse.redirect(
      new URL("/authv-3", request.url)
    );
  }

  try {
    const decoded = jwt.verify(
      token,
      process.env.TOKEN_SECRET!
    ) as {
      role: string;
    };

    const role = decoded.role;
    const pathname = request.nextUrl.pathname;

    if (
      pathname.startsWith("/tourist-dashboard") &&
      role !== "tourist"
    ) {
      return redirectToRoleDashboard(role, request);
    }

    if (
      pathname.startsWith("/vendor-dashboard") &&
      role !== "vendor"
    ) {
      return redirectToRoleDashboard(role, request);
    }

    if (
      pathname.startsWith("/organizer-dashboard") &&
      role !== "organizer"
    ) {
      return redirectToRoleDashboard(role, request);
    }

    if (
      pathname.startsWith("/homestay-dashboard") &&
      role !== "homestay_host"
    ) {
      return redirectToRoleDashboard(role, request);
    }

    return NextResponse.next();
  } catch {
    return NextResponse.redirect(
      new URL("/authv-3", request.url)
    );
  }
}

function redirectToRoleDashboard(
  role: string,
  request: NextRequest
) {
  switch (role) {
    case "tourist":
      return NextResponse.redirect(
        new URL("/tourist-dashboard", request.url)
      );

    case "vendor":
      return NextResponse.redirect(
        new URL("/vendor-dashboard", request.url)
      );

    case "organizer":
      return NextResponse.redirect(
        new URL("/organizer-dashboard", request.url)
      );

    case "homestay_host":
      return NextResponse.redirect(
        new URL("/homestay-dashboard", request.url)
      );

    default:
      return NextResponse.redirect(
        new URL("/authv-3", request.url)
      );
  }
}

export const config = {
  matcher: [
    "/tourist-dashboard/:path*",
    "/vendor-dashboard/:path*",
    "/organizer-dashboard/:path*",
    "/homestay-dashboard/:path*",
  ],
};