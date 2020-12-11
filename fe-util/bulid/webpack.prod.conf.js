const { merge } = require('webpack-merge');
const base = require('./webpack.base.conf');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');


module.exports = merge(base, {
  mode: "production",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env"],
          plugins: [
            // "@babel/plugin-transform-runtime",
            "@babel/plugin-proposal-class-properties",
          ],
        },
      },
    ],
  },
  optimization: {
    minimizer: [
      // new UglifyJsPlugin({
      //   uglifyOptions: {
      //     // 删除注释
      //     output: {
      //       comments: false
      //     },
      //     // 删除 console 和 debugger
      //     compress: {
      //       drop_debugger: true,
      //       drop_console: true
      //     }
      //   }
      // })
    ]
  }
})
