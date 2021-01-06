<template>
  <div class="foot-down">
    <div>@2021 雏雁</div>
    <div>
      <router-link to="/about">关于</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "FootDown",
};
</script>

<style lang="less" scoped>
.foot-down {
  display: flex;
  justify-content: space-evenly;
  font-size: 10px;
  background-color: #d7d7d7;
  padding: 30px;
}
</style>
