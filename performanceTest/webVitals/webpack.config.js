const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    reactLib: [
      'react',
      'react-dom'
    ],
    vue: [
      'vue',
      'vue-router',
      'vuex'
    ],
    shared: [
      'lodash',
      'axios'
    ],
    index: path.join(__dirname, './src/index.js')
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  devServer: {
    static: './dist',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'demo1',
      template: path.join(__dirname, './src/index.ejs')
    })
  ],
  optimization: {
    runtimeChunk: 'single',
  },
};