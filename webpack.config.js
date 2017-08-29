const path = require("path");
var webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HappyPack = require('happypack');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

var NODE_ENV = process.env.NODE_ENV || "PRO";
var publicPath = process.env.PUBLIC_PATH || '/flight/';

module.exports = {
	entry: {
		app: "./src/index.ts",
	},
	output: {
		filename: "[name].js",
		path: path.resolve("./dist"),
	},
	module: {
		rules: [
			// {
			//   test: /\.js$/,
			//   exclude: /(node_modules|bower_components)/,
			//   use: {
			//     loader: 'babel-loader',
			//     options: {
			//       presets: ['es2015']
			//     }
			//   }
			// }
			{
				test: /\.ts(x?)$/,
				use: [{
					loader: 'awesome-typescript-loader',
					options: {
						useBabel: true,
						useCache: true
					}
				}]
			},
			{
				test: /\.scss$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							modules: true,
							localIdentName: '[name]__[local]__[hash:base64:5]',
						}
					},
					'sass-loader']
			}
		]
	},
	devServer: {
		contentBase: path.join(__dirname, "dist"),
		port: 8002,
	},
	resolve: {
		alias: {
			vue: 'vue/dist/vue.js'
		},
		extensions: ['.ts', '.tsx', '.js']
	},
	devtool: 'inline-source-map',
	plugins: [
		new HtmlWebpackPlugin({
			filename: "index.html",
			template: path.join(__dirname, 'src', 'index.html')
		}),
		new HappyPack({
			id: 'ts',
			threads: 2,
			loaders: [{
				path: 'ts-loader',
				query: {
					happyPackMode: true
				}
			}]
		}),
		new ForkTsCheckerWebpackPlugin(),
		new webpack.DefinePlugin({
			'NODE_ENV': JSON.stringify(NODE_ENV),
			'PUBLIC_PATH': JSON.stringify(publicPath)
		}),
	]
}
