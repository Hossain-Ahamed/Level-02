import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import replace from "@rollup/plugin-replace";
import { babel } from "@rollup/plugin-babel";
export default {
  input: "src/script.js",
  output: {
    file: "public/bundle.js",
    format: "cjs",
  },
  plugins: [
    nodeResolve({
      extensions: [".js", ".jsx"],
    }),
    babel({
      babelHelpers: "bundled",
      presets: ["@babel/preset-react"],
      extensions: [".js", ".jsx"],
    }),
    commonjs(),
    replace({
      "process.env.NODE_ENV": JSON.stringify("development"),
    }),
  ],
};
