<template>
  <div class="head-top">
    <div class="logo">
      <slot name="logo"></slot>
    </div>
    <div class="links">
      <div class="link">
        <router-link to="/home">首页</router-link>
      </div>
      <div class="link">
        <router-link to="/login" v-if="signedIn">登录/注册</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeadTop",
  props: ["signedIn"],
};
</script>

<style lang="less" scoped>
.head-top {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  .links {
    display: flex;
    flex-direction: row;
    .link {
      margin: 0 10px;
    }
  }
}
</style>
