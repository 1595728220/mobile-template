module.exports = {
  runtimeCompiler: true,
  pages: {
    index: {
      // 页面入口
      entry: "src/main.js",
      // 模板来源
      template: "public/index.html",
      // 在 dist/index.html 的输出
      filename: "index.html",
      title: "原产地真品平台"
    }
  },
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
