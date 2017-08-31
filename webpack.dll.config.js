const path = require("path");
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
  entry: {
    styles: ["bootstrap-loader"]
  },
  output: {
    path: path.resolve(__dirname, "dll/"),
    filename: "[name]-dll.js",
    library: '[name]_lib'
  },
  module: {
    rules: [
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: ['file-loader?name=assets/fonts/[name].[ext]']
      }
    ]
  },
  resolve: {
    extensions: ["*", '.js', '.scss'],
    modules: [path.resolve(__dirname, 'node_modules')]
  },
  plugins: [
    new UglifyJSPlugin({
      sourceMap: "nosources-source-map"
    }),
    new webpack.DllPlugin({
      path: path.resolve(__dirname, 'dll/[name]-manifest.json'),
      name: '[name]_lib'
    }),
    new ExtractTextPlugin('bootstrap.css'),
    new webpack.LoaderOptionsPlugin({
      postcss: [autoprefixer],
    }),
  ],

}
