import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

const intlMiddleware = createMiddleware(routing);

export function middleware(request: NextRequest) {
  const hostname = request.nextUrl.hostname;

  // Show "under construction" page only on the production domain
  if (hostname === 'olympcenter.uz' || hostname === 'www.olympcenter.uz') {
    const html = `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Olympcenter.uz – Under Construction</title>
      <style>
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          background: radial-gradient(circle at top, #e0f2fe 0, #eff6ff 35%, #f9fafb 70%, #e5e7eb 100%);
          color: #0f172a;
        }
        .card {
          max-width: 520px;
          width: 100%;
          margin: 24px;
          border-radius: 24px;
          padding: 32px 28px;
          background: rgba(255, 255, 255, 0.9);
          box-shadow:
            0 24px 60px rgba(15, 23, 42, 0.18),
            0 0 0 1px rgba(148, 163, 184, 0.25);
          backdrop-filter: blur(18px);
          text-align: center;
        }
        .badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 4px 12px;
          border-radius: 999px;
          font-size: 12px;
          font-weight: 500;
          color: #1d4ed8;
          background: rgba(59, 130, 246, 0.08);
          border: 1px solid rgba(59, 130, 246, 0.25);
          margin-bottom: 16px;
        }
        .dot {
          width: 8px;
          height: 8px;
          border-radius: 999px;
          background: #facc15;
          box-shadow: 0 0 0 4px rgba(250, 204, 21, 0.25);
        }
        h1 {
          font-size: clamp(26px, 4vw, 32px);
          line-height: 1.15;
          margin-bottom: 10px;
          background: linear-gradient(135deg, #1d4ed8, #4f46e5);
          -webkit-background-clip: text;
          color: transparent;
        }
        p {
          font-size: 15px;
          line-height: 1.6;
          color: #4b5563;
          margin-bottom: 20px;
        }
        .muted {
          font-size: 13px;
          color: #9ca3af;
        }
      </style>
    </head>
    <body>
      <main class="card" role="status" aria-label="Site under construction">
        <div class="badge">
          <span class="dot"></span>
          <span>Site under construction</span>
        </div>
        <h1>We&apos;re preparing something new</h1>
        <p>
          The official website of the Science Olympiads Center
          (<strong>olympcenter.uz</strong>) is currently being updated.
          Please check back again soon.
        </p>
        <p class="muted">
          Thank you for your patience and interest.
        </p>
      </main>
    </body>
  </html>`;

    return new NextResponse(html, {
      status: 200,
      headers: {
        'content-type': 'text/html; charset=utf-8',
        'cache-control': 'no-store'
      }
    });
  }

  // For all other hosts (e.g. Vercel preview/production URLs), run the normal i18n middleware
  return intlMiddleware(request);
}

export const config = {
  // Match only internationalized pathnames and general app routes
  matcher: ['/', '/(uz|en|ru)/:path*', '/((?!api|_next|_vercel|.*\\..*).*)']
};
