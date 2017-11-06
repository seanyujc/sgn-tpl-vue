const path = require('path')
var NODE_ENV = process.env.NODE_ENV || 'DEV'

const htmlWebpackPluginOption = {
  filename: 'index.html',
  template: path.join(__dirname, '../../src/app', 'index-tpl.htm'),
  basePath: '',
  dlls: ['dll/lib-dll', 'dll/styles-dll'],
  styles: ['styles/bootstrap']
}

const build = {
  index: path.resolve(__dirname, '../dist/index.html'),
  assetsRoot: path.resolve(__dirname, '../dist'),
  assetsSubDirectory: 'static',
  assetsPublicPath: '/bsm/',
  productionSourceMap: true,
  htmlWebpackPluginOption
}

const dev = {
  port: 8003,
  autoOpenBrowser: true,
  assetsSubDirectory: '',
  assetsPublicPath: '/',
  cssSourceMap: false,
  htmlWebpackPluginOption
}


build.htmlWebpackPluginOption.basePath = build.assetsPublicPath;
dev.htmlWebpackPluginOption.basePath = dev.assetsPublicPath;

// if(NODE_ENV==="DEV"){
//   build.assetsPublicPath = "/vue/"
//   build.htmlWebpackPluginOption.basePath = "/vue/"
// }

module.exports = {
  build,
  dev
}
