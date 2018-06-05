const path = require('path');

module.exports = {
  entry: path.join(__dirname, 'index.ts'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  mode: 'production',
  module: {
    rules: [{
      test: /\.ts$/,
      use: [{
        loader: 'ts-loader',
      }]
    }]
  }
}