const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const config = {
    entry: __dirname + '/client/js/index.jsx',
    output: {
        path: __dirname + '/build',
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css']
    },
    module: {
        rules: [
        {
            test: /\.jsx?/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['@babel/preset-env', '@babel/react']
            }
        },
        {
            test: /\.(png|jpg|svg|gif|mp4|mov)$/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: '/assets/[name]-[hash:8].[ext]'
                }
            }]
        },
        {
            test: /\.scss$/,
            loader: 'style-loader!css-loader!sass-loader'
        }
        ]
    },
    devServer: {
        publicPath: '/',
        contentBase: __dirname + '/build',
        port: 5000,
        historyApiFallback: {
            index: 'index.html'
        }
    },
    // node: {
    //     fs: 'empty'
    // },
    plugins: [
        new CopyWebpackPlugin([
            { from: './client/index.html', to: './index.html' }
        ]),
        // new Dotenv({
        //     path: './.env',
        // }),
        // new webpack.DefinePlugin({
		// 	'process.env': {
        //         NODE_ENV: JSON.stringify("development"),
		// 		REACT_APP_DBUSER: JSON.stringify(process.env.REACT_APP_DBUSER),
		// 		REACT_APP_DBPASSWORD: JSON.stringify(process.env.REACT_APP_DBPASSWORD)
		// 	}
		// })
    ]
}


module.exports = config