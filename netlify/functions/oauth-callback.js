// Step 2 of the GitHub OAuth dance. GitHub redirects here with a short-lived
// ?code=... which we exchange for an access token, then hand back to the CMS
// window via postMessage in the format Sveltia/Decap expects.
exports.handler = async (event) => {
  const clientId = process.env.OAUTH_GITHUB_CLIENT_ID;
  const clientSecret = process.env.OAUTH_GITHUB_CLIENT_SECRET;
  if (!clientId || !clientSecret) {
    return { statusCode: 500, body: "OAUTH_GITHUB_CLIENT_ID / OAUTH_GITHUB_CLIENT_SECRET are not set." };
  }

  const { code } = event.queryStringParameters || {};
  if (!code) {
    return { statusCode: 400, body: "Missing ?code from GitHub." };
  }

  const render = (status, payload) => ({
    statusCode: 200,
    headers: { "Content-Type": "text/html; charset=utf-8", "Cache-Control": "no-store" },
    body: `<!doctype html><html><body><script>
(function () {
  function send() {
    window.opener && window.opener.postMessage(
      'authorization:github:${status}:${JSON.stringify(payload).replace(/</g, "\\u003c")}',
      '*'
    );
  }
  window.addEventListener('message', send, false);
  send();
  setTimeout(function () { window.close(); }, 800);
})();
</script><p>You can close this window.</p></body></html>`,
  });

  try {
    const res = await fetch("https://github.com/login/oauth/access_token", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ client_id: clientId, client_secret: clientSecret, code }),
    });
    const data = await res.json();
    if (data.error || !data.access_token) {
      return render("error", { message: data.error_description || "Token exchange failed." });
    }
    return render("success", { token: data.access_token, provider: "github" });
  } catch (err) {
    return render("error", { message: String(err) });
  }
};
