import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { USER_LOGIN_COOKIE } from "./constants/cookies";

export async function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;
  const url = req.nextUrl.clone();
  const tokenCookie = req.cookies.get(USER_LOGIN_COOKIE);

  if (pathname === "/") {
    if (!tokenCookie) {
      url.pathname = "/login";
      return NextResponse.redirect(url);
    }
  } else {
    if (tokenCookie) {
      url.pathname = "/";
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/login", "/register", "/"],
};
