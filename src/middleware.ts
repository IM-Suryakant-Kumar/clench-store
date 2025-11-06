import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";

export async function middleware(request: NextRequest) {
	const publicRoutes = ["/login", "/signup"];
	const pathname = request.nextUrl.pathname;

	const session = await auth.api.getSession({
		headers: await headers(),
	});

	if (!session && !publicRoutes.includes(pathname)) {
		return NextResponse.redirect(new URL("/login", request.url));
	}

	if (session && publicRoutes.includes(pathname)) {
		return NextResponse.redirect(new URL(pathname, request.url));
	}

	return NextResponse.next();
}

export const config = {
	runtime: "nodejs",
	matcher: [
		"/",
		"/products",
		"/cart",
		"/wishlist",
		"/orders",
		"/checkout",
		"/login",
		"/signup",
	], // Apply middleware to specific routes
};
