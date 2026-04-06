import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow placehold.co images for demo project cards
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
      },
    ],
  },
  // Ensure Next.js handles TS warnings during build by default, but you might want to uncomment later
  // typescript: { ignoreBuildErrors: false },
};

export default nextConfig;
