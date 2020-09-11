/*
 * @Author: your name
 * @Date: 2020-09-11 09:16:29
 * @LastEditTime: 2020-09-11 09:19:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \dianxin-project\webpack.config.js
 */
const path = require('path')
const webpack = require('webpack')

module.exports = {
    watch:true,
    mode:'development',
    entry:'./src/index.js',
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'src')
    },
    module:{
        rules:[
            { 
                test: /\.js$/,
                use: 'babel-loader' 
            },
            { 
                test: /\.css$/,
                use: ['style-loader','css-loader']
            },
            { 
                test: /\.less$/,
                use: ['style-loader','css-loader','less-loader']
            },
            { 
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: 'file-loader'
            },
            { 
                test: /\.(png|jpg|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 20480
                    }
                }]
            },
        ]
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer:{
        host:'127.0.0.1',
        port:'8080',
        hot:true,
        contentBase:'./src'
    }
}