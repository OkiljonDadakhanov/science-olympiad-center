import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone()

  // Allow internal access for preview URLs or Vercel preview branches
  if (url.hostname.includes("vercel.app")) return NextResponse.next()

  // Only show "Under Construction" on the production domain
  if (url.hostname === "olympcenter.uz") {
    url.pathname = "/under-construction"
    return NextResponse.rewrite(url)
  }

  return NextResponse.next()
}
