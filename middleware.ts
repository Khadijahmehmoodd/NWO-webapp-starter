// import { type NextRequest } from 'next/server';
// import { updateSession } from '@/lib/utils/supabase/middleware';

// export async function middleware(request: NextRequest) {
//   return await updateSession(request);
// }

// export const config = {
//   matcher: [
//     /*
//      * Match all request paths except:
//      * - _next/static (static files)
//      * - _next/image (image optimization files)
//      * - favicon.ico (favicon file)
//      * - images - .svg, .png, .jpg, .jpeg, .gif, .webp
//      * Feel free to modify this pattern to include more paths.
//      */
//     '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
//   ],
// };

import { type NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/utils/supabase/middleware';

export async function middleware(request: NextRequest) {
  const { supabase, response } = createClient(request); // ✅ this createClient accepts `request`

  const {
    data: { session },
  } = await supabase.auth.getSession();

  // ✅ Redirect to `/products` if session exists and user is on `/` (login page)
  if (session && request.nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL('/products', request.url));
  }

  // ✅ Redirect to `/` (login) if not logged in and trying to access a protected route
  const isProtectedRoute =
    request.nextUrl.pathname.startsWith('/products') ||
    request.nextUrl.pathname.startsWith('/account');

  if (!session && isProtectedRoute) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return response; // Always return the response from `createClient`
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};
