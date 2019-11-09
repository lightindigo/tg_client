//PLUGINS
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: "development",
    devtool: "source-map",
    entry: path.resolve('src/client/index.ts'),
    output: {
        path: path.resolve('public/j'),
        filename: "[name].[contenthash].js",
        publicPath: '/public/j'
    },
    module: {
        rules: [
            {
                test: /\.json$/i,
                use: [
                    'raw-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.svg$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.ts?$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: 'babel_cache',
                            presets: [
                                '@babel/preset-env',
                                '@babel/preset-typescript'
                            ],
                            plugins: [
                                "@babel/plugin-syntax-dynamic-import",
                                "@babel/plugin-proposal-class-properties",
                                "@babel/plugin-proposal-optional-chaining"
                            ]
                        },
                    },
                ],
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [
            '.js', '.ts', '.json', '.css'
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: '../index.html',
            template: 'src/index.html',
            inject: 'body'
        }),
    ]
}