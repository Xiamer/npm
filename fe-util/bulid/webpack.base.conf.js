const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

function resolve(dir) {
  return path.join(__dirname, '..', dir);
};

module.exports = {
  entry: resolve('src/index.js'),
  context: process.cwd(), // 上下文目录
  mode: 'production',
  output: {
    path: resolve('dist'),
    filename: 'index_bundle.js',
    publicPath: '/'
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: resolve('./example/index.html')
    })
  ]
};
