import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    // Serve the Sveltia CMS static page at /admin (and /admin/).
    return [{ source: "/admin", destination: "/admin/index.html" }];
  },
};

export default nextConfig;
