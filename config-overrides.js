const webpack = require('webpack')
const fs = require('fs')
// const WebpackBar = require('webpackbar')
const { override, fixBabelImports,addWebpackPlugin,devtool,adjustStyleLoaders,addLessLoader, addWebpackAlias } = require('customize-cra')
const path = require('path')

module.exports = {
 webpack: override(
  (config)=>{
    fs.writeFileSync('wec.txt',JSON.stringify(config),(e)=>{console.log(e);})
    config.devtool = 'source-map'
    return config
   },
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
