const path = require('path');
const serve = require('rollup-plugin-serve');

import { getBabelOutputPlugin } from '@rollup/plugin-babel';


const resolveFile = function(filePath) {
  return path.join(__dirname, '..', filePath)
}

module.exports = {
  input: resolveFile('src/index.js'), // 入口
  output: {
    file: resolveFile('dist/index.js'),
    format: 'esm',
    sourcemap: true, // 开发模式，开启sourcemap文件的生成
  },
  watch: {
    include: [resolveFile('src/**'), resolveFile('example/**')]
  },
  plugins: [
    // 使用和配置babel编译插件
    getBabelOutputPlugin({
      allowAllFormats: true,
      // exclude: 'node_modules/**',
      presets: ['@babel/preset-env']
    }),


    // 使用开发服务插件
    serve({
      open: true,
      port: 3002,
      // 设置 exmaple的访问目录和dist的访问目录
      contentBase: [resolveFile('example'), resolveFile('dist')]
    }),
    // buble()
  ],
}
