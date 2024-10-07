/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "imagedelivery.net",
      },
    ],
    domains: ['fireship.io'],
  },
  redirects: async () => {
    return [];
  },
};

export default nextConfig;
