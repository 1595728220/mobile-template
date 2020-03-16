<template>
  <div class="home">
    {{ this.$store.state.count }}
    <van-button type="default" size="large" @click="test">默认按钮</van-button>
  </div>
</template>

<script>
// @ is an alias to /src
import { Button } from "vant";
export default {
  name: "Home",
  components: {
    "van-button": Button
  },
  methods: {
    test() {
      this.$axios
        .get("/api/notice/list")
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.error(err);
        });
    }
  }
};
</script>
