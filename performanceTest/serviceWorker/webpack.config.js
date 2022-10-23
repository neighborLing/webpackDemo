const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');

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
    index: path.join(__dirname, './src/index.js'),
    sw: path.join(__dirname, './src/sw.js'),
    app: path.join(__dirname, './src/app.js')
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './dist'),
    clean: true
  },
  devServer: {
    static: './dist',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'demo1',
      template: path.join(__dirname, './src/index.ejs'),
      inject: false,
      templateParameters: (compilation, assets, assetTags, options) => {
        // console.log('options: ', options);
        // console.log('assetTags: ', assetTags);
        console.log('assets: ', assets);
        // console.log('compilation: ', compilation);
        return {
          htmlWebpackPlugin: {
            scripts: assets.js.map(item => ({
              src: item,
              scriptLoading: /^sw.?(.*)?$/.test(item) ? '' : 'defer'
            }))
          }
        };
      },
    }),
    new WebpackManifestPlugin({
      basePath: path.join(__dirname, './dist')
    })
  ],
  optimization: {
    runtimeChunk: 'single',
  },
};