const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

console.log(' - - -- --  -- - --', process.cwd());

module.exports = {
  entry: '../src/index.js',
  // context: process.cwd(),
  // coontext:
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js'
  },
    devServer: {
      //启动服务器端口
      port: 8080,
      // contentBase: './dist',
      //默认是localhost，只能本地访问
      host: "0.0.0.0",
      //自动打开浏览器
      open: true,
      //启用模块热替换
      hot: true,
      //启用gzip压缩
      compress: true
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: '../example/index.html',
      inject: 'head'
    })
  ]
};
