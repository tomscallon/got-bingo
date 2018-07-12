const path = require('path');

module.exports = {
  // Mode 'production' => fully optimize output
  mode: 'production',

  // App entry point
  entry: 'app.js',

  // Where to save the output file
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'app.bundle.js',
  },

  // Use a full source map
  devtool: 'source-map',

  // Module loaders
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
        options: {
          presets: ['env', 'flow', 'react']
        }
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'autoprefixer-loader',
          'sass-loader'
        ]
      }
    ]
  },

  // How to resolve paths
  resolve: {
    modules: [
      'node_modules',
      path.resolve(__dirname)
    ]
    extensions: ['.js', '.json', '.jsx', '.css']
  }
};
