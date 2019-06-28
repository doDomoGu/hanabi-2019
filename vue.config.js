module.exports = {
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
