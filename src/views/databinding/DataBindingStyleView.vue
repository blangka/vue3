<template>
  <div>
    <div :style="style1">스타일 바인딩</div>
    <button @click="style1.color = 'blue'">change</button>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      style1: {
        color: "red",
        fontSize: "20px",
      },
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {},
};
</script>

<style scoped></style>
