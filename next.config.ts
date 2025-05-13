import { resolve } from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@codesVarun": resolve(__dirname),
    };
    return config;
  },
};

export default nextConfig;
