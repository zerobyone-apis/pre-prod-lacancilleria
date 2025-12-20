import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const { pathname, hostname } = url;

  // 🔧 Flag de mantenimiento (Vercel / env)
  const maintenanceMode = process.env.MAINTENANCE_MODE === 'true';

  // 🌱 Entornos permitidos
  const isLocalhost =
    hostname === 'localhost' || hostname === '127.0.0.1';

  const isVercelPreview =
    hostname.endsWith('.vercel.app') && hostname.startsWith('pre');

  // 📄 Rutas permitidas siempre
  const isWipPage = pathname === '/wip';
  const isStatic =
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.');

  // 🚦 Lógica principal
  if (
    maintenanceMode &&
    !isLocalhost &&
    !isVercelPreview &&
    !isWipPage &&
    !isStatic
  ) {
    url.pathname = '/wip';
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/:path*',
};
