const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  assetsDir: 'static',
  parallel: false,
  publicPath: './',
  devServer: {
    allowedHosts: 'all', // 允许所有主机
  }
})


