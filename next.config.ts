import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow placehold.co images for demo project cards
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
      },
    ],
    qualities: [70, 75, 80],
  },
  
  // SEO improvements - trailing slashes for consistency
  trailingSlash: false,
  
  // Security headers
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
    ];
  },
  
  // Ensure Next.js handles TS warnings during build by default, but you might want to uncomment later
  // typescript: { ignoreBuildErrors: false },
};

export default nextConfig;
