import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

import axios from "axios";
// 公共方法
import baseMethod from "./global/baseMethod";

import { Notify } from "vant";
import "vant/lib/index.css";

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;
Vue.use(baseMethod);
const SUCCESS_CODE = 200;
// 添加一个响应拦截器
axios.interceptors.response.use(
  response => {
    let err = { message: "" };
    let data = response.data;
    // 如果是直接返回的数据，没有状态码
    if (data.code === undefined) {
      return response;
    }
    switch (data.code) {
      // 成功
      case SUCCESS_CODE:
        return response;
      // 其他错误
      default:
        err.message = data.message;
        Notify({ type: "danger", message: err.message });
        return Promise.reject(err);
    }
  },
  err => {
    if (err && err.response && err.response.data && err.response.data.msg) {
      err.message = err.response.data.msg;
    } else {
      err.message = "请求超时";
    }
    Notify({ type: "danger", message: err.message });
    return Promise.reject(err);
  }
);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
