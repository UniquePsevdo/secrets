var webpack = require('webpack');
var path = require('path');
/*var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;*/
const app_root = 'src';
var HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractCSS = new ExtractTextPlugin('styles/vendor.[contenthash].css');
const extractSCSS = new ExtractTextPlugin('styles/style.[contenthash].css');

const VENDOR_LIBS = [
	/*"lodash",*/
	"react",
	"react-dom",
	"react-redux",
	"react-router",
	"redux",
	"react-router-redux",
	"redux-form",
	"redux-thunk",
	"jquery",
	"react-materialize"
];

module.exports = {
	entry: {
		bundle: path.join(__dirname, app_root, 'index.js'),
		vendor: VENDOR_LIBS
	},
	output: {
		path: path.join(__dirname, process.env.NODE_ENV==='development' ? 'dev-build' : 'prod-build'),
		filename: '[name].[hash].js',
		/*publicPath: 'public/'*/
	},
	devServer:{
		historyApiFallback: true
	},
	module: {
		rules: [
			{
				use: 'babel-loader',
				test: /\.js$/,
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				loader: extractCSS.extract({
					loader: ['css-loader']//, 'resolve-url-loader'
				})
			},
			{
				test: /\.scss$/,
				loader: extractSCSS.extract({
					loader: ['css-loader','sass-loader']
				}),
				
			}, {
				test: /\.(jpe?g|png|gif|svg)$/,
				use: [
					{
						loader: "url-loader",
						options:{
							limit: 40000,
							// Output below the fonts directory
							name: 'images/[name].[ext]',
							// Tweak publicPath to fix CSS lookups to take
							// the directory into account.
							publicPath: '../',
						}
					},
					'image-webpack-loader?'
				]
			},
			{
				test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				loader: "url-loader",
				options:{
					limit: 10000,
					mimetype: 'application/font-woff',
					// Output below the fonts directory
					name: 'fonts/[name].[ext]',
					// Tweak publicPath to fix CSS lookups to take
					// the directory into account.
					publicPath: '../',
				}
			},
			{
				test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				loaders: "file-loader",
				options:{
					// Output below the fonts directory
					name: 'fonts/[name].[ext]',
					// Tweak publicPath to fix CSS lookups to take
					// the directory into account.
					publicPath: '../',
				}
			}
			
		]
	},
	devtool: process.env.NODE_ENV==='development' ? 'source-map' : 'eval',
	/*devtool: process.env.NODE_ENV==='development' ? 'cheap-eval-source-map' : 'eval',*/
	plugins: [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
		}),
		new webpack.optimize.CommonsChunkPlugin({
			names: ['vendor', 'manifest'],
			minChunks: Infinity
		}),
		new HtmlWebpackPlugin({
			template: 'src/index.html'
		}),
		new webpack.ProvidePlugin({
			$: "jquery",
			jQuery: "jquery"
		}),
		extractCSS,
		extractSCSS/*,
		new BundleAnalyzerPlugin()*/
	]
};
