import { type NextRequest } from "next/server";
import { updateSession } from "@/lib/supabase/middleware";

export async function middleware(request: NextRequest) {
  return await updateSession(request);
}

export const config = {
  // Run on portal/admin/auth routes; skip static assets and the marketing site.
  matcher: ["/portal/:path*", "/admin/:path*", "/login", "/auth/:path*"],
};
