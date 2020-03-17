<template>
  <div class="index">
    <div class="index-content">
      <transition-component></transition-component>
    </div>
    <tab-bar></tab-bar>
  </div>
</template>
<script>
import TabBar from "../components/TabBar";
import TransitionComponent from "../components/TransitionComponent";
export default {
  name: "index",
  components: {
    "tab-bar": TabBar,
    "transition-component": TransitionComponent
  }
};
</script>
<style lang="scss" scoped>
.index {
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  .index-content {
    position: relative;
    flex: 1;
  }
}
</style>
