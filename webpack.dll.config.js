const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
  entry: {
    lib: ['jquery'],
    styles: ['bootstrap-loader']
  },
  output: {
    path: path.resolve(__dirname, 'dll/dll/'),
    filename: '[name]-dll.js',
    library: '[name]_lib'
  },
  resolve: {
    extensions: ['*', '.js', '.scss'],
    modules: [path.resolve(__dirname, 'node_modules')]
  },
  plugins: [
    new UglifyJSPlugin({
      sourceMap: 'source-map'
    }),
    new webpack.DllPlugin({
      path: path.resolve(__dirname, 'dll/[name]-manifest.json'),
      name: '[name]_lib'
    }),
    new ExtractTextPlugin('../styles/bootstrap.css'),
    new webpack.LoaderOptionsPlugin({
      postcss: [autoprefixer],
    }),
  ],
  module: {
    rules: [
      {
        test: /bootstrap-sass[\/\\]assets[\/\\]javascripts[\/\\]/,
        use: [{ loader: 'imports-loader?jQuery=jquery' }]
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: [{
          loader: 'file-loader?name=../assets/fonts/[name].[ext]'
        }]
      }
    ]
  },

}
