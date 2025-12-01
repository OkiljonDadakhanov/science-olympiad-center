// middleware.ts
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(req: NextRequest) {
  return NextResponse.next() // 👈 Always allow access
}

export const config = {
  matcher: ["/((?!_next|api|static|favicon.ico).*)"],
}
