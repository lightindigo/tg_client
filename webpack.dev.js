//PLUGINS
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: path.resolve(__dirname__,'src/index.ts'),
    output: {
        path: path.resolve('dist')
    },
    module: {
        rules: [
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
                                "@babel/plugin-transform-class-properties",
                                "@babel/plugin-proposal-optional-chaining"
                            ]
                        },
                    },
                ],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/views/dev.html',
            inject: 'body'
          }),
    ]
}