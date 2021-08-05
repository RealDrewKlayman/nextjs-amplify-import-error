module.exports = {
  reactStrictMode: true,
  webpack: config => {
    config.module.rules.push({
      test: /\.bin$/i,
      type: 'asset/resource',
      generator: {
        // important, otherwise it will output into a folder that is not served by next
        filename: 'static/[hash][ext][query]'
      }
    })
    return config
  },
}
