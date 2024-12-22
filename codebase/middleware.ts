import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtVerify } from 'jose'; // Install with `npm install jose`

const SECRET_KEY = "your_secret_key";

export async function middleware(request: NextRequest) {
    // Access cookies from the `NextRequest` object
    const authToken = request.cookies.get('authToken')?.value;

    if (!authToken) {
        // Redirect to login if the token is missing
        return NextResponse.redirect(new URL('/login', request.url));
    }

    try {
        // Verify the JWT token
        await jwtVerify(authToken, new TextEncoder().encode(SECRET_KEY));
        return NextResponse.next(); // Allow access to the requested page
    } catch (error) {
        console.error("Token verification failed:", error);
        return NextResponse.redirect(new URL('/login', request.url));
    }
}

// Protect specific routes
export const config = {
    matcher: ['/home', '/dashboard'], // Define routes to apply middleware
};
