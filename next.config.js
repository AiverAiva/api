/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [{ source: "/:path*", destination: "/api/:path*" }];
      },
}

module.exports = nextConfig
