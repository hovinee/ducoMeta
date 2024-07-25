/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: [
      'cdn.imweb.me',
      'i.ytimg.com',
      'cphinf.pstatic.net',
      'imagedelivery.net',
    ],
  },
}

module.exports = nextConfig
