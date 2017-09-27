var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: './lib',
  output: {
    path: __dirname + '/dist',
    filename: 'style-value-types.min.js'
  },
  resolve: {
    extensions: ['.js']
  },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      mangle: true,
      minimize: true
    })
  ]
};
