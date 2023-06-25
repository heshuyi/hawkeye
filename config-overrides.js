const webpack = require('webpack')
const fs = require('fs')
// const WebpackBar = require('webpackbar')
const { override, fixBabelImports,addWebpackPlugin,adjustStyleLoaders,addLessLoader, addWebpackAlias } = require('customize-cra')
const path = require('path')

module.exports = {
 webpack: override(
   addWebpackAlias({
     '@': path.resolve(__dirname, './src')
   }),
   addLessLoader({
     lessOptions: {
      localIdentName: '[local]--[hash:base64:5]'
    }
    }),
    adjustStyleLoaders(({ use: [, , postcss] }) => {
     const postcssOptions = postcss.options;
     postcss.options = { postcssOptions };
   }),
 ),
 
}
