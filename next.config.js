/** @type {import('next').NextConfig} */
const webpack = require('webpack');

const nextConfig = {
  transpilePackages: ['three'],
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
        buffer: require.resolve('buffer/'),
        stream: require.resolve('stream-browserify'),
        crypto: require.resolve('crypto-browserify'),
        path: require.resolve('path-browserify'),
        zlib: require.resolve('browserify-zlib'),
        http: require.resolve('stream-http'),
        https: require.resolve('https-browserify'),
        assert: require.resolve('assert/'),
        os: require.resolve('os-browserify/browser'),
        url: require.resolve('url/'),
        util: require.resolve('util/'),
        process: require.resolve('process/browser'),
      }

      config.plugins.push(
        new webpack.ProvidePlugin({
          Buffer: ['buffer', 'Buffer'],
          process: 'process/browser',
        }),
      )
    }

    // Add support for importing Three.js examples
    config.resolve.alias = {
      ...config.resolve.alias,
      'three/examples/jsm/controls/OrbitControls': require.resolve('three/examples/jsm/controls/OrbitControls'),
    }

    return config
  },
}

module.exports = nextConfig 