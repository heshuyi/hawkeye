const webpack = require('webpack')
// const WebpackBar = require('webpackbar')
const { override, fixBabelImports,addWebpackPlugin,adjustStyleLoaders,addLessLoader, addWebpackAlias } = require('customize-cra')
const path = require('path')

module.exports = {
 webpack: override(
   addWebpackAlias({
     '@': path.resolve(__dirname, './src')
   }),
  //  fixBabelImports('import', { 
  //   libraryName: 'antd',
  //   libraryDirectory: 'es',
  //   style: true //或者true, true代表运用less
  // }),
  //  addWebpackPlugin(new webpack.ProgressPlugin()),
   addLessLoader({
     lessOptions: {
      localIdentName: '[local]--[hash:base64:5]'
    }
    }),
    adjustStyleLoaders(({ use: [, , postcss] }) => {
     const postcssOptions = postcss.options;
     postcss.options = { postcssOptions };
   })
 )
}
