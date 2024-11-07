import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const token = request.cookies.get('new-token');

    if (!token && !request.nextUrl.pathname.startsWith('/login')) {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    if (token && request.nextUrl.pathname === '/login') {
        return NextResponse.redirect(new URL('/', request.url));
    }


    return NextResponse.next();
}

export const config = {
    matcher: ['/', '/ssg-page', '/ssr-page'],
};
