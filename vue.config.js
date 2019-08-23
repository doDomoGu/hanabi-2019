const CompressionWebpackPlugin = require("compression-webpack-plugin")
module.exports = {
  configureWebpack: config => {
    // 开发环境不需要gzip
    if (process.env.NODE_ENV !== "production") return
    config.plugins.push(
      new CompressionWebpackPlugin({
        // 正在匹配需要压缩的文件后缀
        test: /.(jpg|js|css|svg|woff|ttf|json|html)$/,
        // 大于10kb的会压缩
        threshold: 10240
        // 其余配置查看compression-webpack-plugin
      })
    )
  },
  devServer: {
    port: 8888 // 端口
  },
  css: {
    loaderOptions: {
      sass: {
        data: `
          //@import "@/assets/styles/_variable.scss";
          @import "@/assets/styles/main.scss";
        `
      }
    }
  }
}
