import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    // allow images from all sources
    dangerouslyAllowSVG: true,
    remotePatterns: [{ protocol: "https", hostname: "*" }],
  },
  experimental: {
    ppr: "incremental",
  },
  // devIndicators: {
  //   appIsrStatus: true,
  //   buildActivity: true,
  //   buildActivityPosition: "bottom-right",
  // },
};

export default nextConfig;
