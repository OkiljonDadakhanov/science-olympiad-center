// middleware.ts
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone()

  // ✅ Allow access for Preview / Vercel branch URLs
  if (url.hostname.endsWith(".vercel.app")) return NextResponse.next()

  // ✅ Only show "Under Construction" on main domain
  if (url.hostname === "www.olympcenter.uz" || url.hostname === "olympcenter.uz") {
    // Prevent infinite loop
    if (url.pathname !== "/under-construction") {
      url.pathname = "/under-construction"
      return NextResponse.rewrite(url)
    }
  }

  return NextResponse.next()
}

// ✅ Required if you use App Router (Next.js 13+)
export const config = {
  matcher: ["/((?!_next|api|static|favicon.ico).*)"],
}
