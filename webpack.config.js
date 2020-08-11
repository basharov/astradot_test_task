const webpack = require('webpack')
const path = require('path')

const sourcePath = path.join(__dirname, './src')
const outPath = path.join(__dirname, 'build')

const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    context: sourcePath,
    entry: {
        main: './App.tsx',
        vendor: [
            'react',
            'react-dom']
    },
    output: {
        path: outPath,
        publicPath: '/',
        filename: 'bundle.[name].js'
    },
    target: 'web',
    resolve: {
        extensions: ['.js', '.ts', '.tsx', '.css'],
        mainFields: ['main'],
    },
    devServer: {
        contentBase: outPath,
        compress: true,
        port: 9000
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.tsx?$/,
                use: [
                    'babel-loader'
                ],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
            'process.env.DEBUG': JSON.stringify(process.env.DEBUG)
        }),

        new HtmlWebpackPlugin({
            template: 'index.html'
        }),
    ]
}
