const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

console.log('yy', __dirname);

module.exports = {
  entry: './src/index.js',
  context: process.cwd(), // 上下文目录
  // coontext:
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js',
    publicPath: '/'
  },
  devServer: {
    //启动服务器端口
    port: 8080,
    contentBase: path.resolve(__dirname, 'dist'), // 静态资源服务器
    // //默认是localhost，只能本地访问
    // host: "0.0.0.0",
    //自动打开浏览器
    open: true,
    // 启用模块热替换  静态文件目录位置，只有当你需要在webpack-dev-server本地服务器查看或引用静态文件时用到。类型：boolean | string | array, 建议使用绝对路径（boolan example 不会自动刷新）
    // hot: true,
    // //启用gzip压缩
    compress: true
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './example/index.html',
      inject: 'body'
    })
  ]
};
