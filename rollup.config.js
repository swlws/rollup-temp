import { defineConfig } from "rollup";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import { babel } from "@rollup/plugin-babel";
import typescript from "@rollup/plugin-typescript";
import json from "@rollup/plugin-json";

import { name } from "./package.json";

const config = defineConfig({
  input: "src/main.ts",
  output: {
    name: name,
    file: `dist/rollup/${name}-umd.js`,
    format: "umd",
    sourcemap: true,
    globals: {
      axios: "axios",
    },
    banner: "// this is banner",
    footer: "// this is footer",
  },
  plugins: [
    commonjs(), // 通常commonjs必须放在第一个位置
    resolve(), // 将依赖的CommonJS模块，转化为ES6模块
    json(),
    typescript(),
    babel({
      babelHelpers: "bundled",
      exclude: "node_modules/**", // 只编译我们的源代码
    }),
  ],
  // 指出应将哪些模块视为外部模块
  external: ["axios"],
  watch: {
    include: "src/**",
  },
});

export default config;
