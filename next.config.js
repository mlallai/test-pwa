const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

module.exports = withPWA({
  target: "serverless",
  pwa: {
    dest: 'public',
    runtimeCaching,
  },
  webpack: (config, options) => {
    config.module.rules.push({ parser: { amd: false } })
    return config
  }
})
