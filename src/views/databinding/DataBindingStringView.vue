<template>
  <div>
    <h1>Hello {{ userName }}</h1>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: "lim",
      message: "Welcome 개발자의 품격",
    };
  },
};
</script>

<style scoped>

</style>
