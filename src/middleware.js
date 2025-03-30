import { NextResponse } from 'next/server'
import { getToken } from "next-auth/jwt"

export async function middleware(request) {

    const pathname = request.nextUrl.pathname

    const token = await getToken({
        req: request,
        secret: process.env.AUTH_SECRET,
        cookieName: "__Secure-authjs.session-token"
    })

    const excludedPaths = [
        '/admin/admin-login',
        '/center/center-login',
    ];

    console.log("test")
    if (excludedPaths.includes(pathname)) {
        return NextResponse.next();
    }

    if (!token) {
        if (pathname.startsWith("/admin")) {
            return NextResponse.redirect(new URL('/admin/admin-login', request.url))
        }
        if (pathname.startsWith("/center")) {
            return NextResponse.redirect(new URL('/center/center-login', request.url))
        }
        if (pathname.startsWith("/course") || pathname.startsWith("/jobs") || pathname.startsWith("/cart")) {
            return NextResponse.redirect(new URL('/login', request.url))
        }
    }

    if (token.role !== "Admin" && pathname.startsWith("/admin")) {
        return NextResponse.redirect(new URL('/admin/admin-login', request.url))
    } else if (token.role !== "Center" && pathname.startsWith("/center")) {
        return NextResponse.redirect(new URL('/center/center-login', request.url))
    } else if (token.role !== "User" && (pathname.startsWith("/course") || pathname.startsWith("/cart") || pathname.startsWith("/jobs"))) {
        return NextResponse.redirect(new URL('/login', request.url))
    } else if (token.role == "Center" && token.userType != "Center" && pathname.startsWith("/center/teacher")) {
        return NextResponse.redirect(new URL('/center', request.url))
    }
}

export const config = {
    matcher: ['/admin/:path*', '/center/:path*', '/course/:path*', '/cart/:path*', '/jobs/:path*',]
}