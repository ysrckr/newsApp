const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    loader: {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'

    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port:3000,
        open: true,
        hot: true,
        historyApiFallback: true
    }

}