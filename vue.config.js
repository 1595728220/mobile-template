module.exports = {
  runtimeCompiler: true,
  devServer: {
    proxy: {
      "/api": {
        target: "http://www.urlip.cn:8058", // 测试
        changeOrigin: true,
        pathRewrite: {
          // 重写路径
          "^/api": ""
        }
      }
    }
  },
  pluginOptions: {
    "style-resources-loader": {
      patterns: [],
      preProcessor: "scss"
    }
  },
  css: {
    // 向所有 Sass 样式传入共享的全局变量：
    loaderOptions: {
      // 给 sass-loader 传递选项
      sass: {
        // @/ 是 src/ 的别名
        prependData: `@import "~@/styles/index.scss";`
      }
    }
  }
};
