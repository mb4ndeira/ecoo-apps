/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  async redirects() {
    return [
      {
        source: '/cadastrar',
        destination: '/cadastrar/1',
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig
