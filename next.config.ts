import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avs-my-portfolio.s3.ap-south-1.amazonaws.com"
      }
    ]
  }
};

export default nextConfig;
