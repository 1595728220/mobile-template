<template>
  <div class="notFound">
    <div class="notFoundContent">
      <div class="codeState">404</div>
      <div class="msg">您访问的页面，走丢了!</div>
      <div class="tip">{{ time }}秒后返回首页</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "notFound",
  data() {
    return {
      timer: null,
      time: 5
    };
  },
  mounted() {
    this.timer = setInterval(() => {
      if (this.time <= 1) {
        this.$router.replace("/");
      }
      this.time--;
    }, 1000);
  },
  destroyed() {
    if (this.timer !== null) {
      clearInterval(this.timer);
    }
  }
};
</script>
<style lang="scss" scoped>
.notFound {
  width: 100%;
  height: 100%;
  position: relative;
  .notFoundContent {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .codeState {
      font-size: 2rem;
      color: red;
      text-align: center;
      margin-bottom: 0.5rem;
    }
    .msg {
      font-size: 0.5rem;
      text-align: center;
      margin-bottom: 0.2rem;
    }
    .tip {
      text-align: center;
    }
  }
}
</style>
