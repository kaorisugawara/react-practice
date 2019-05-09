const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const ENV = 'development';
// const userSourceMap = (ENV === 'development');

module.exports = {
    mode: process.env.WEBPACK_SERVE ? 'development' : 'production',
    entry: {
      main: ['@babel/polyfill',path.resolve(__dirname, './src', "index.js")],
      style: path.resolve(__dirname, './src', "style.scss")
    },
    output: {
        path: path.resolve(__dirname, './dist/'),
        publicPath: '/',
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude:[ /node_modules/ ],
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                exclude: [/node_modules/],
                use: [
                    "style-loader", 
                    { 
                        loader: "css-loader", 
                        options: { 
                            url: false, 
                            modules: true 
                        } 
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                url: false,
                                // sourceMap: userSourceMap,
                                importLoaders: 2
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                // sourceMap: userSourceMap,
                            }
                        }
                    ]
                })
            },
            {
                test: /\.(jpg|png)$/,
                loader: 'file-loader',
                options: {
                    name: '/proto/images/[name].[ext]',
                }
            }
        ]
    },
    devtool: 'source-map',
    devServer: {
       contentBase: path.join(__dirname, "public"),
       watchContentBase: true,
       open: true
    },
    plugins: [
        new HtmlWebpackPlugin({ template: "src/index.html" }),
        new ExtractTextPlugin('src/style.css')
    ]
}