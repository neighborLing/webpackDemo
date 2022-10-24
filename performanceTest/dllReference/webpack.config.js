const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: {
    index: path.join(__dirname, './src/index.js')
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  // devServer: {
  //   static: './dist',
  // },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'demo1',
      template: path.join(__dirname, './src/index.ejs')
    }),
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: path.join(__dirname, '../dll/dist/react.manifest.json')
    })
  ],
};