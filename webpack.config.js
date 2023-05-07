const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'src/[name].[fullhash].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-proposal-object-rest-spread']
                    }
                }
            },
            {
                test:/\.css$/,
                include: path.resolve(__dirname, 'src'),
                use:[
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader"
                ]
            },
            { test: /\.ts$/, use: 'ts-loader' }
        ],
    },
    devServer: {
        static: path.resolve(__dirname, 'dist'),
        historyApiFallback: true,
        host: '127.0.0.1',
        port: 9090,
        open: true,
        hot: true,
        client: {
            logging: 'info',
            overlay: true,
            progress: true,
            webSocketTransport: 'ws'
        },
        webSocketServer: 'ws',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/index.html'),
            inject: 'body',
            hash: true
        }),
        new ESLintPlugin({
            extensions: 'js',
            exclude: 'node_modules',
            files: './src/'
        }),
        new MiniCssExtractPlugin({
            filename:"tailwind.css",
            chunkFilename:"tailwind.css"
        })
    ]
};
