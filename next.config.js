/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["flagcdn.com", "upload.wikimedia.org", "shutterstock.com"],
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: 'flagcdn.com',
    //     port: '',
    //     pathname: '/account123/**',
    //   },
    // ],
  }
}

module.exports = nextConfig
