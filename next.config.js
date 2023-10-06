/** @type {import('next').NextConfig} */
const { auth } = require('osu-api-extended');
const fs = require('fs')

async function osuapiStartup(){
  const SCOPE_LIST = ['public'];
  await auth.login(process.env.CLIENT_ID, process.env.CLIENT_SECRET, SCOPE_LIST);
  fs.writeFileSync('token.txt', auth.cache_v2, 'utf8');
  // console.log(auth.cache_v2)
}
osuapiStartup()


const nextConfig = {
    async rewrites() {
        return [{ source: "/:path*", destination: "/api/:path*" }];
      },
}

module.exports = nextConfig
