const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['via.placeholder.com', 'loremflickr.com'],
  },
  webpack: (config) => {
    config.resolve.alias.canvas = false;
    return config;
    },
};

module.exports = nextConfig;
