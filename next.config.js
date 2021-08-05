const nodeExternals = require('webpack-node-externals');


module.exports = {
  reactStrictMode: true,

  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Important: return the modified config
    config.externals = config.externals || [];

    config.target = 'node';
    config.externalsPresets = { node: true };
    config.externals = [...config.externals, nodeExternals()];

    return config
  },
}
