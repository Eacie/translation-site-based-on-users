<template>
  <div class="head-top">
    <slot name="logo"></slot>
    <router-link to="/home">首页</router-link>
    <router-link to="/login" v-if="signedIn">登录/注册</router-link>
  </div>
</template>

<script>
export default {
  name: "HeadTop",
  props: ["signedIn"],
};
</script>

<style scoped>
.head-top {
  background-color: #ff00aa;
}
</style>
