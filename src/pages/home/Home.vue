<template>
  <div class="home">
    <head-top :signed-in="true">
      <template v-slot:logo>
        <router-link to="/home">Translate</router-link>
      </template>
    </head-top>

    <p>基于用户的精翻网站</p>
    <button @click="translate">翻译</button>
    <div>
      <textarea
        name="input"
        id="input"
        cols="30"
        rows="10"
        placeholder="输入"
        v-model="input"
      >
      </textarea>
      <textarea
        name="output"
        id="output"
        cols="30"
        rows="10"
        placeholder="结果"
        v-model="output"
      >
      </textarea>
    </div>

    <foot-down></foot-down>
  </div>
</template>

<script>
import headTop from "../../components/HeadTop.vue";
import footDown from "../../components/FootDown.vue";

export default {
  name: "Home",
  components: {
    headTop,
    footDown,
  },
  data() {
    return {
      input: "",
      output: "",
    };
  },
  methods: {
    translate() {},
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
