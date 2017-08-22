const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HappyPack = require('happypack');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

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
				test: /\.tsx?$/,
				exclude: /node_modules/,
				loader: 'happypack/loader?id=ts'
			}
		]
	},
	devServer: {
		contentBase: path.join(__dirname, "dist")
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
		new ForkTsCheckerWebpackPlugin()
	]
}
