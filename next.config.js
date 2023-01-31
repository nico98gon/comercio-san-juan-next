/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
}

// const withBabelExclude = require('next-plugin-babel-exclude')
// module.exports = withBabelExclude(['path/to/library'])

module.exports = nextConfig
