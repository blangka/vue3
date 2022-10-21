<template>
  <div>
    <label for="selectCity">
      <select v-model="selected" name="selectCity">
        <option value="01">서울</option>
        <option value="02">부산</option>
        <option value="03">대구</option>
      </select>
    </label>

    <div>
      <label for="html"
        ><input type="checkbox" id="html" value="HTML" v-model="favoriteLang" />HTML</label
      >
      <label for="css">
        <input type="checkbox" id="css" value="CSS" v-model="favoriteLang" />CSS</label
      >
      <label for="js"><input type="checkbox" id="js" value="JS" v-model="favoriteLang" />JS</label>
      <span>{{ favoriteLang }}</span>
    </div>
    <br />
    <div>
      <label for="htmlRadio">
        <input type="radio" id="htmlRadio" value="HTML" v-model="favoriteRadio" />
        HTML
      </label>
      <label for="cssRadio">
        <input type="radio" id="cssRadio" value="CSS" v-model="favoriteRadio" />
        CSS
      </label>
      <label for="jsRadio">
        <input type="radio" id="jsRadio" value="JS" v-model="favoriteRadio" />
        JS
      </label>
      <span>: {{ favoriteRadio }}</span>
      <div>attribute</div>
      <div>
        <label for="inputAttribute">
          <input type="text" id="inputAttribute" v-bind:value="userId" readonly />
        </label>
      </div>
      <div>
        <label for="inputAttributeShort">
          <input type="text" id="inputAttributeShort" :value="userId" readonly />
        </label>
      </div>
      <img :src="imgUrl" style="width: 100px; height: auto" alt="" />
      <br />
      <label for="searchInput"><input type="search" v-model="txt1" /></label>
      <button :disabled="txt1 === ''">조회</button>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      selected: "01",
      favoriteLang: ["JS"],
      favoriteRadio: "",
      userId: "lim",
      imgUrl: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png",
      txt1: "",
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {},
};
</script>

<style scoped>
.imgWrap {
  width: 100px;
  height: auto;
}
</style>
