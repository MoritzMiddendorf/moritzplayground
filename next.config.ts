const withNextIntl = require("next-intl/plugin")("./app/i18n.ts")

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    return config
  },
}

module.exports = withNextIntl(nextConfig)