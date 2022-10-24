const path = require("path");
const distPath = path.resolve(__dirname, "./dist");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  entry: {
    react: ["react", "react-dom", "vue"],
  },
  output: {
    filename: "[name].[contenthash:8].dll.js",
    path: distPath,
    library: '[name]_dll',
    clean: {
      keep: /manifest\.json$/
    }
  },
  plugins: [
    new webpack.DllPlugin({
      name: '[name]_dll',
      path: path.join(distPath, '[name].manifest.json'),
      format: true,
    }),
  ],
};
