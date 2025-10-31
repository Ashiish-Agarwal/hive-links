import type { NextConfig } from "next";


const nextConfig: NextConfig = {
  typedRoutes: true,
  experimental: {
    staleTimes: {
      dynamic: 30,
      static: 180,
    }
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'utfs.io',
        port: '',
        pathname: '/f/**',
      },
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
