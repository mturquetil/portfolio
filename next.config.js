require('dotenv').config();

module.exports = {
  env: {
    SERVER_URL: process.env.SERVER_URL,
  },
  experimental: {
    jsconfigPaths: true,
  },
}
