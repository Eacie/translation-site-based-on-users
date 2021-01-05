<template>
  <div class="login">
    <router-link to="/home">back</router-link>
    <form action="" method="post" @submit="validate">
      <div><label>账号</label><input type="text" /></div>
      <div><label>密码</label><input type="password" /></div>
      <div><button type="submit">登录</button></div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Login",
  methods: {
    validate(event) {
      console.log(event.target);
      event.preventDefault();
    },
  },
};
</script>

<style scoped>
.login {
  background-color: #00ffff;
}
</style>
