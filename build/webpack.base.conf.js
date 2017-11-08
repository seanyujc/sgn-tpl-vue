const path = require('path')
var webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HappyPack = require('happypack')

module.exports = {
  entry: {
    app: './src/app/index.bootstrap'
  },
  output: {
    filename: 'js/[name]_[hash].js',
    path: path.resolve(__dirname, '../dist')
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js',
      jquery: "jquery/dist/jquery"
    },
    extensions: ['.js', '.ts', '.tsx'],
    modules: [path.resolve(__dirname, '../node_modules')]
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'awesome-typescript-loader',
            options: {
              useBabel: true,
              useCache: true
            }
          }
        ]
      },
      {
        enforce: 'pre',
        test: /\.tsx?$/,
        use: 'source-map-loader'
      },
      {
        test: /\.html$/,
        use: [
          'raw-loader'
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          'url-loader?name=assets/images/[name]_[hash].[ext]&limit=500'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              // modules: true,
              localIdentName: '[local]',
            }
          },
          'sass-loader']
      },
      // {
      //   test: /\.scss$/,
      //   use: ExtractTextPlugin.extract({
      //     fallback: 'style-loader',
      //     //resolve-url-loader may be chained before sass-loader if necessary
      //     use: [{
      //       loader: 'css-loader',
      //       options: {
      //         modules: true,
      //         localIdentName: '[name]__[local]__[hash:base64:5]',
      //       }
      //     },
      //       'autoprefixer-loader?{browsers: ["last 2 versions", "ie 8", "ie 9"]}', 'sass-loader']
      //   })
      // },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'assets/fonts/',
            publicPath: '../'
          }
        }
        ]
      }
    ]
  },
  plugins: [
    new webpack.DllReferencePlugin({
      context: path.resolve(__dirname, '..'),
      manifest: require(path.resolve(__dirname, '../dll/lib-manifest.json'))
    }),
    new webpack.DllReferencePlugin({
      context: path.resolve(__dirname, '..'),
      manifest: require(path.resolve(__dirname, '../dll/styles-manifest.json'))
    }),
    new ExtractTextPlugin('styles/main.css'),
    new HappyPack({
      id: 'scss',
      threads: 4,
      loaders: [
        'css-loader',
        'postcss-loader',
        'sass-loader'
      ]
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery",
    })
  ]
}
