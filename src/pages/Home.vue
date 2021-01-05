<template>
  <div class="home">
    <head-top :signed-in="true">
      <template v-slot:logo>
        <router-link to="/home"></router-link>
      </template>
    </head-top>

    <p>基于用户的精翻网站</p>
    <textarea
      name="input"
      id="input"
      cols="30"
      rows="10"
      placeholder="输入"
    ></textarea
    ><textarea
      name="output"
      id="output"
      cols="30"
      rows="10"
      placeholder="结果"
    ></textarea>

    <foot-down></foot-down>
  </div>
</template>

<script>
import headTop from "../components/HeadTop.vue";
import footDown from "../components/FootDown.vue";

export default {
  name: "Home",
  components: {
    headTop,
    footDown,
  },
};
</script>

<style lang="less" scoped>
.home {
  background-color: #ff0000;
  textarea {
    resize: none;
  }
}
</style>
