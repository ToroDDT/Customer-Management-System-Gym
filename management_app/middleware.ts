import { NextRequest, NextResponse } from "next/server";
import { useState } from "react";

export function middleware(request: NextRequest) {
  // Redirect to login page if not authenticated
  return NextResponse.redirect(new URL("/login", request.url));
}

export const config = {
  matcher: "/dashboard",
};
