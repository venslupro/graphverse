import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Needed because the app has multiple root layouts ("/" redirect + "/[lang]").
    globalNotFound: true,
  },
};

export default nextConfig;
