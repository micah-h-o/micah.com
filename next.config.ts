import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: 'micah.com',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
