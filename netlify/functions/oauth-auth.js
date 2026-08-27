// Step 1 of the GitHub OAuth dance for the Sveltia/Decap CMS.
// Sends the editor to GitHub to approve access, then GitHub redirects back to
// /oauth/callback. Requires two environment variables set in Netlify:
//   OAUTH_GITHUB_CLIENT_ID
//   OAUTH_GITHUB_CLIENT_SECRET
const crypto = require("crypto");

exports.handler = async (event) => {
  const clientId = process.env.OAUTH_GITHUB_CLIENT_ID;
  if (!clientId) {
    return { statusCode: 500, body: "OAUTH_GITHUB_CLIENT_ID is not set in Netlify environment variables." };
  }

  const siteUrl = process.env.URL || `https://${event.headers.host}`;
  const state = crypto.randomBytes(12).toString("hex");

  const authUrl =
    "https://github.com/login/oauth/authorize?" +
    new URLSearchParams({
      client_id: clientId,
      redirect_uri: `${siteUrl}/oauth/callback`,
      scope: "repo,user",
      state,
    }).toString();

  return {
    statusCode: 302,
    headers: {
      Location: authUrl,
      "Set-Cookie": `oauth_state=${state}; Path=/; HttpOnly; SameSite=Lax; Max-Age=600`,
      "Cache-Control": "no-store",
    },
  };
};
