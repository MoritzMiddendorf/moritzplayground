import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

const withNextIntl = require('next-intl/plugin')('./app/i18n.ts');

module.exports = withNextIntl({
  // Other Next.js config options...
});

export default nextConfig;
