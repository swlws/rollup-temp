# Readme

`rollup`的特性：

1. 支持 ES6 模块
2. 支持 tree-shake
3. 同时支持命令行接口和 JS API

打包模式：

- iife，浏览器环境
- cjs，CommonJS module
- umd，同时支持浏览器环境和 CommonJS module

## 配置文件

`rollup.config.js`：[Option Config](https://www.rollupjs.com/guide/command-line-reference)

## 使用`rollup`开发组件

### rollup 的插件

[官方推荐的插件列表](https://github.com/rollup/awesome)

必须装的插件：

- `@rollup/plugin-node-resolve`, 告诉 Rollup 如何查找外部模块
- `@rollup/plugin-commonjs`，用来将 CommonJS 转换成 ES2015 模块的，应该用在其他插件转换你的模块之前 - 这是为了防止其他插件的改变破坏 CommonJS 的检测。

### 启用 typescript

- `@rollup/plugin-typescript`，在 rollup 中使用 typescript
- `typescript`, typescript 的核心库
- `tslib`，`@rollup/plugin-typescript`的依赖模块

### 启用 babel

- `@rollup/plugin-babel`，在 rollup 中使用 babel
- `@babel/core`, Babel 的核心库
- `@babel/preset-env`，babel 的 presets。a smart preset that allows you to use the latest JavaScript without needing to micromanage which syntax transforms (and optionally, browser polyfills) are needed by your target environment(s).
- `@babel/preset-typescript`，babel 的 presets，This preset is recommended if you use TypeScript, a typed superset of JavaScript.

### 启用 JOSN

- `rollup-plugin-json`， 令 Rollup 从 JSON 文件中读取数据。

`tsconfig.json`中添加配置：

```json
{
  "compilerOptions": {
    "resolveJsonModule": true
  }
}
```

## 备注

Q1: 单独执行 babel 时，箭头函数被转换了。执行 rollup 时，箭头函数未被转化，why？

A1: 单独 babel 的转化，使用为配置了`@babel/plugin-transform-arrow-functions`。此时`rollup`也在使用这个配置，可是未被转化，奇怪了？

Q2: 将`tsconfig.json`的`target`的值改为低版本`es3`时。执行`rollup`或`tsc`，箭头函数被转化了。所以，是 ts 转化的？还是 babel 转化的？

A2: 单独的 ts 的转化，是因为目标版本为低版本的 es。那 rollup 呢，因为 ts、还是 babel？
