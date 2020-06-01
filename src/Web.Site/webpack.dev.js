const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = () => {
  const clientBundle = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
      contentBase: './wwwwroot/dist',
    },
    entry: {
      app: path.resolve(__dirname, './React/index.tsx'),
    },
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, './wwwroot/dist'),
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        minify: false,
        filename: '../../Views/Home/Index.cshtml',
        template: './Views/Home/Template.cshtml',
        excludeChunks: ['app'],
      }),
    ],
  });

  const serverBundle = merge(common, {
    mode: 'development',
    target: 'node',
    devtool: 'inline-source-map',
    devServer: {
      contentBase: './wwwwroot/dist',
    },
    entry: {
      server: path.resolve(__dirname, './React/server.tsx'),
    },
    output: {
      libraryTarget: 'commonjs',
      filename: 'server.js',
      path: path.resolve(__dirname, './React/ssr'),
    },
    plugins: [
      new CleanWebpackPlugin(),
    ],
  });

  return [clientBundle, serverBundle];
};
