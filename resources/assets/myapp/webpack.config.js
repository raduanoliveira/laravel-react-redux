const webpack = require('webpack')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: { main: './src/index.jsx' },
    output: {
        path: path.resolve(__dirname, '../../../public/assets/'),
        filename: './app.js',
        publicPath: '/'
    },
    devServer: {
        port: 3002,
        contentBase: './public',
        historyApiFallback: true
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'app.css',
        }),
        new HtmlWebpackPlugin({
            inject: false,
            hash: true,
            template: path.resolve(__dirname, './src/files', 'index.html'),
            filename: './index.html',
            // favicon: "./src/files/assets/images/favicon.png"
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
    ],

    module: {
        rules: [{
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/react', '@babel/preset-env', { 'plugins': ['@babel/plugin-proposal-class-properties'] }],
                        plugins: ['transform-object-rest-spread','@babel/transform-runtime']
                    }
                }]
            },
            {
                test: /\.css$/,
                use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.scss$/,
                use: ['raw-loader','sass-loader']
            },
            {
                test: /\.jpe?g$|\.gif$|\.png$|\.PNG$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: './src/files/assets/images/',
                        publicPath: './src/files/assets/images/',
                        
                    }
                    // options: {
                    //     esModule: false,
                    //   },
                }]
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'modules/font-awesome/css/font-awesome.min.css',
                        publicPath: 'modules/font-awesome/css/font-awesome.min.css'
                    }
                }]
            }
        ]
    },

    resolve: {
        extensions: [
            '.js',
            '.jsx'
        ],
        alias: {
            modules: __dirname + '/node_modules',
            path_images: path.resolve(__dirname, "../../../public/storage")
        }
    },
    externals: {
        jQuery: 'jQuery'
    }

}