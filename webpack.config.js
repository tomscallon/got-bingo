/* @flow */

const path = require('path');

module.exports = {
  // Mode 'production' => fully optimize output
  mode: 'production',

  // App entry point
  entry: './client/app.js',

  // Where to save the output file
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: './app.bundle.js',
  },

  // Use a full source map
  devtool: 'source-map',

  // Module loaders
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/preset-env',
            '@babel/preset-flow',
            '@babel/preset-react',
          ],
          plugins: [
            'transform-class-properties',
            '@babel/plugin-proposal-nullish-coalescing-operator',
          ],
        },
      },
      {
        test: /\.scss$/,
        loader: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
    ],
  },

  // How to resolve paths
  resolve: {
    modules: ['node_modules', path.resolve(__dirname)],
    extensions: ['.js', '.json', '.jsx', '.css'],
  },
};
