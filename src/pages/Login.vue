<template>
  <div class="login"></div>
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
  background-image: linear-gradient(to right, #fc4a1a, #f8a32e);
}
</style>
