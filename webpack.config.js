'use strict';

// require('dotenv').config()
var webpack = require('webpack');
var path = require('path');

const Dotenv = require('dotenv-webpack');


var HtmlWebpackPlugin = require('html-webpack-plugin');

var BUILD_DIR = path.resolve(__dirname, './client/dist');
var APP_DIR = path.resolve(__dirname, './client/src');
const port = parseInt(process.env.PORT) - 1

var config = {
  entry: APP_DIR + '/index.js',
  output: {
    path: BUILD_DIR,
    filename: 'app.js',
  },
  module: {
    loaders : [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        include: APP_DIR,
        loader: [ 'style-loader', 'css-loader' ]
      }
    ]
  },
  plugins: [
      new Dotenv(),
    new webpack.HotModuleReplacementPlugin()
  ],

  devServer: {
    port,
    hot: true,
    hotOnly: true,
    allowedHosts: ['localhost','api.salesloft.com'],
    host: 'localhost',
    headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
        },
      "proxy": {
          "/api": {
              "target": 'https://api.salesloft.com',
              "pathRewrite": {'^/api': ''},
              "changeOrigin": true,
              "secure": false
          }
      },
    contentBase: BUILD_DIR,
  }
};

module.exports = config;