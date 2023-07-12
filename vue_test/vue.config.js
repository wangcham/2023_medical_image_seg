const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false// 解决vue强制要求使用muti-word进行组件的命名

})
