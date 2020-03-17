<template>
  <van-tabbar route :safe-area-inset-bottom="true" :fixed="false">
    <van-tabbar-item replace to="/" icon="home-o">
      首页
    </van-tabbar-item>
    <van-tabbar-item replace to="/search" icon="search">
      标签
    </van-tabbar-item>
    <van-tabbar-item replace to="/search" icon="search">
      标签
    </van-tabbar-item>
    <van-tabbar-item replace to="/user" icon="search">
      用户
    </van-tabbar-item>
  </van-tabbar>
</template>
<script>
import { Tabbar, TabbarItem } from "vant";
export default {
  name: "tabBar",
  components: {
    "van-tabbar": Tabbar,
    "van-tabbar-item": TabbarItem
  }
};
</script>
