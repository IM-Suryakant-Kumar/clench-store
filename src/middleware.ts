import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";

export async function middleware(request: NextRequest) {
	const publicRoutes = ["/login", "/signup"];
	const pathname = request.nextUrl.pathname;
	const redirectTo = request.nextUrl.searchParams.get("redirectTo") || "/";

	const session = await auth.api.getSession({
		headers: await headers(),
	});

	if (!publicRoutes.includes(pathname) && !session) {
		return NextResponse.redirect(
			new URL("/login?redirectTo=" + pathname, request.url)
		);
	}

	if (publicRoutes.includes(pathname) && session) {
		return NextResponse.redirect(new URL(redirectTo, request.url));
	}

	return NextResponse.next();
}

export const config = {
	runtime: "nodejs",
	matcher: [
		"/",
		"/products",
		"/products/:path*",
		"/cart",
		"/wishlist",
		"/orders",
		"/checkout",
		"/login",
		"/signup",
	], // Apply middleware to specific routes
};
