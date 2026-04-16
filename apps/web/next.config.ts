import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: [
    "@repo/api",
    "@repo/core",
    "@repo/hooks",
    "@repo/redux",
    "@repo/services",
    "@repo/types",
  ],

  experimental: {
    externalDir: true,
  },
};

export default nextConfig;
