import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ejopwpdbdtwoeegjklwh.supabase.co",
        pathname: "/storage/v1/object/public/**",
      },
    ],
  },
  // output: "export"
};

export default nextConfig;
