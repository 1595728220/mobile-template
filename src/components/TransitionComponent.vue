<template>
  <transition :name="moveName">
    <router-view class="transitionViews"></router-view>
  </transition>
</template>
<script>
export default {
  name: "transitionComponent",
  data() {
    return {
      moveName: ""
    };
  },
  watch: {
    $route(to, from) {
      if (to.meta.index < from.meta.index) {
        this.moveName = "move-right";
      } else {
        this.moveName = "move-left";
      }
    }
  }
};
</script>
<style lang="scss" scoped>
$time: 0.6s;
.transitionViews {
  position: absolute;
  width: 100%;
  top: 0;
}
.move-left-enter,
.move-right-leave-to {
  transform: translateX(100%);
}

.move-left-enter-active,
.move-left-leave-active,
.move-right-enter-active,
.move-right-leave-active {
  transition: transform $time ease;
}
.move-left-leave-to,
.move-right-enter {
  transform: translateX(-100%);
}
</style>
