const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	mode: 'development',
	entry: {
		bundle: path.resolve(__dirname, 'src/js/index.js'),
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name][contenthash].js',
		assetModuleFilename: '[name][ext]',
		clean: true,
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			}, // scss loader
			{
				test: /\.css$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'style-loader',
					},
					{
						loader: 'css-loader',
						options: {
							importLoaders: 1,
						},
					},
					{
						loader: 'postcss-loader',
						options: {
							postcssOptions: {
								ident: 'postcss',
								plugins: [
									require('postcss-import'),
									require('tailwindcss'),
									require('autoprefixer'),
									require('postcss-nested'),
								],
							},
						},
					},
				],
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
					},
				}, // babel-loader is used to transpile ES6 to ES5
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
			},
		],
	},

	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: path.resolve(__dirname, 'src/index.html'),
		}),
		new HtmlWebpackPlugin({
			filename: 'newspages.html',
			template: path.resolve(__dirname, 'src/newspages.html'),
		}),
	],
	devServer: {
		static: {
			directory: path.resolve(__dirname, 'dist'),
		},
		port: 4000,
		open: {
			app: 'Google Chrome',
		}, // open browser
		hot: true, // hot reload
		compress: true, // enable gzip compression
		historyApiFallback: true,
	},
}
