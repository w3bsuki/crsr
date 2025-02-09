/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      }
    }
    return config
  },
  // Disable static exports for Vercel deployment
  output: 'export',
  // Disable image optimization for static export
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig 