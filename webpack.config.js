const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // entry: './src/index.js',
    entry: {
        index: './src/index.js',
        // print: './src/print.js',
    },
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
        hot: true,
        port: '5000'
    },
    output: {
        // filename: 'main.js',
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: '管理输出111',
            template: './index.html'
        }),
    ],
    mode: 'development',
    module: {
        rules: [
            //处理css文件
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            //加载图片
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            //加载字体文件
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
            //加载资源文件
            {
                test: /\.(csv|tsv)$/i,
                use: ['csv-loader'],
            },
            {
                test: /\.xml$/i,
                use: ['xml-loader'],
            },
            //加载js文件
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: "babel-loader",
                options: { presets: ["@babel/env"] }
            },
        ],
    },
    resolve: { extensions: ["*", ".js", ".jsx"] },

};