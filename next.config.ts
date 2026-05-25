import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ hostname: "huy0t4exz6.ufs.sh" }, { hostname: "i.imgur.com" }],
    qualities: [75, 85],
  },
};

export default nextConfig;
