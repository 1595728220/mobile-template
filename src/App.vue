<template>
  <div id="app">
    <transition-component></transition-component>
  </div>
</template>
<script>
import TransitionComponent from "./components/TransitionComponent";
export default {
  components: {
    "transition-component": TransitionComponent
  }
};
</script>
<style lang="scss">
#app {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
}
</style>
