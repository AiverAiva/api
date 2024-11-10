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
    return [{ source: "/", destination: "/index.html" }, { source: "/:path*", destination: "/api/:path*" }];
  },
  async headers() {
    return [
      {
        // matching all API routes
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" }, // replace this your actual origin
          { key: "Access-Control-Allow-Methods", value: "GET,DELETE,PATCH,POST,PUT" },
          { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
        ]
      }
    ]
  }
}

module.exports = nextConfig
