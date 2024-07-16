import {type NextRequest, NextResponse} from "next/server";


export async function middleware(request: NextRequest) {
    const url = request.nextUrl;
    const hostname = request.headers.get("host")!;
    const searchParams = request.nextUrl.searchParams.toString();
    const path = `${url.pathname}${searchParams.length > 0 ? `?${searchParams}` : ""}`;

    const isDashboard = hostname === "app.localhost:3000" || hostname === "app.acme.com";

    if (!isDashboard) {

        if (url.pathname.startsWith("/dashboard")) {
            return NextResponse.redirect(new URL("/", request.url));
        }

        return NextResponse.next();
    } else {
        // authorize user here

        return NextResponse.rewrite(
            new URL(`/dashboard${path}`, request.url),
        );
    }
}


export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         * Feel free to modify this pattern to include more paths.
         */
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
};
