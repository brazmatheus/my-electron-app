const path = require('path');

const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new webpack.IgnorePlugin({ resourceRegExp: /^pg-native$/ })
  ],
  target: 'node',
  resolve: {
    // ... rest of the resolve config
    fallback: {
      "path": require.resolve("path-browserify")
    }
  },
};