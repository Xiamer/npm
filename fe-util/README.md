# fe-util 前端常用的js

## 目录

```pre
.
├── build # 编译脚本目录
│   └── rollup.config.js
├── dist # 编译结果目录
│   ├── index.js
│   └── index.js.map
├── example # HTML使用例子
│   └── index.html
├── package.json
└── src # ES6+ 源码
    ├── index.js
    └── lib
        └── demo.js
```



## 常用的rollup

* rollup 模块是rollup.js编译的核心模块
* rollup@plugin-babel 模块是rollup.js支持babel官方编译插件模块
* @babel/core 是官方 babel 编译核心模块
* @babel/preset-env 是官方 babel 编译解析ES6+ 语言的扩展模块
* babel-plugin-transform-object-rest-spread 是官方  babel 编译ES6+ 对象扩展的编译插件
* @rollup/plugin-replace 类比 Webpack 的 DefinePlugin , 可在源码中通过
  ```javascript
  replace({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    }),
  ```
* @rollup/plugin-alias 用于在打包软件包时定义别名。
