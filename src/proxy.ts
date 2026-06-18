import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

const intlMiddleware = createMiddleware(routing);

export default async function middleware(request: NextRequest) {
  return intlMiddleware(request);
}

export const config = {
  matcher: ["/", "/(fa|en)/:path*", "/((?!api|_next|_vercel|.*\\..*).*)"],
};