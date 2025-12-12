import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const { hostname } = request.nextUrl;

  // Permitir paso en localhost y previews de vercel
  const isLocalhost = hostname === 'localhost' || hostname === '127.0.0.1';
  const isVercelPreview = hostname.endsWith('.vercel.app') && hostname.startsWith('pre');

  // Permitir el acceso a la página WIP y a archivos estáticos/API
  const isWipPage = url.pathname === '/wip';
  const isStatic = url.pathname.startsWith('/_next') || url.pathname.startsWith('/api') || url.pathname.includes('.');

  if (!isLocalhost && !isVercelPreview && !isWipPage && !isStatic) {
    url.pathname = '/wip';
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/:path*',
};
