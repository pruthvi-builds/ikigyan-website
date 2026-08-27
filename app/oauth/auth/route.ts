// GitHub OAuth — step 1. Sends the CMS editor to GitHub for approval, then
// GitHub redirects back to /oauth/callback. Works on any host (Vercel preview,
// production, or a custom domain) because the redirect URI is derived from the
// incoming request. Requires two environment variables:
//   OAUTH_GITHUB_CLIENT_ID
//   OAUTH_GITHUB_CLIENT_SECRET
import { NextResponse, type NextRequest } from "next/server";
import crypto from "node:crypto";

export const dynamic = "force-dynamic";

function originFromRequest(req: NextRequest): string {
  const host = req.headers.get("x-forwarded-host") ?? req.headers.get("host") ?? "";
  const proto = req.headers.get("x-forwarded-proto") ?? "https";
  return `${proto}://${host}`;
}

export function GET(req: NextRequest) {
  const clientId = process.env.OAUTH_GITHUB_CLIENT_ID;
  if (!clientId) {
    return new NextResponse("OAUTH_GITHUB_CLIENT_ID is not set in the environment.", { status: 500 });
  }

  const state = crypto.randomBytes(12).toString("hex");
  const authUrl =
    "https://github.com/login/oauth/authorize?" +
    new URLSearchParams({
      client_id: clientId,
      redirect_uri: `${originFromRequest(req)}/oauth/callback`,
      scope: "repo,user",
      state,
    }).toString();

  const res = NextResponse.redirect(authUrl);
  res.cookies.set("oauth_state", state, {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge: 600,
  });
  res.headers.set("Cache-Control", "no-store");
  return res;
}
