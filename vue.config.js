const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: 'warning',
  chainWebpack: config => {
    config.cache({ type: 'filesystem' })

    config.plugin('eslint').tap(options => {
      options.fix = true
      options.formatter = require('eslint-friendly-formatter')
      return options
    })

    return config
  },
})
