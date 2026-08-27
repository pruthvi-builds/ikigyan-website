// GitHub OAuth — step 2. Exchanges the ?code for an access token and hands it
// back to the CMS window via postMessage in the format Sveltia/Decap expects.
import { NextResponse, type NextRequest } from "next/server";

export const dynamic = "force-dynamic";

function resultPage(status: "success" | "error", payload: Record<string, unknown>) {
  const body = `<!doctype html><html><body><script>
(function () {
  var payload = ${JSON.stringify(payload)};
  function send() {
    if (window.opener) {
      window.opener.postMessage('authorization:github:${status}:' + JSON.stringify(payload), '*');
    }
  }
  window.addEventListener('message', send, false);
  send();
  setTimeout(function () { window.close(); }, 800);
})();
</script><p>You can close this window.</p></body></html>`;
  return new NextResponse(body, {
    status: 200,
    headers: { "content-type": "text/html; charset=utf-8", "Cache-Control": "no-store" },
  });
}

export async function GET(req: NextRequest) {
  const clientId = process.env.OAUTH_GITHUB_CLIENT_ID;
  const clientSecret = process.env.OAUTH_GITHUB_CLIENT_SECRET;
  if (!clientId || !clientSecret) {
    return new NextResponse("OAUTH_GITHUB_CLIENT_ID / OAUTH_GITHUB_CLIENT_SECRET are not set.", { status: 500 });
  }

  const code = req.nextUrl.searchParams.get("code");
  if (!code) return new NextResponse("Missing ?code from GitHub.", { status: 400 });

  try {
    const res = await fetch("https://github.com/login/oauth/access_token", {
      method: "POST",
      headers: { "content-type": "application/json", accept: "application/json" },
      body: JSON.stringify({ client_id: clientId, client_secret: clientSecret, code }),
    });
    const data = (await res.json()) as { access_token?: string; error_description?: string };
    if (!data.access_token) {
      return resultPage("error", { message: data.error_description || "Token exchange failed." });
    }
    return resultPage("success", { token: data.access_token, provider: "github" });
  } catch (err) {
    return resultPage("error", { message: String(err) });
  }
}
