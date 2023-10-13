/** @type {import('next').NextConfig} */
const { auth } = require('osu-api-extended');
const fs = require('fs')

async function osuapiStartup() {
  await auth.login(process.env.CLIENT_ID, process.env.CLIENT_SECRET, ['public']);
  fs.writeFileSync('token.txt', auth.cache_v2, 'utf8');
  // console.log(auth.cache_v2)
}
osuapiStartup()


const nextConfig = {
  reactStrictMode: false,
  // transpilePackages: ['swagger-client', 'swagger-ui-react'],
  async rewrites() {
    return [{ source: "/", destination: "/index.html"}, { source: "/:path*", destination: "/api/:path*" }];
  },
}

module.exports = nextConfig
