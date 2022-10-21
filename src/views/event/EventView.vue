<template>
  <div>
    <label for="city">
      <select name="city" @change="changeCity($event)" v-model="selectedCity">
        <option :value="city.cityCode" :key="city.code" v-for="city in cities">
          {{ city.title }}
        </option>
      </select>
      <select>
        <option :value="dong.dongCode" :key="dong.dongCode" v-for="dong in selectedDongList">
          {{ dong.dongTitle }}
        </option>
      </select>
    </label>
  </div>
  <div></div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      cities: [
        {
          title: "서울",
          cityCode: "02",
        },
        {
          title: "경기",
          cityCode: "031",
        },
        {
          title: "인천",
          cityCode: "032",
        },
      ],
      dongList: [
        {
          cityCode: "02",
          dongCode: "1",
          dongTitle: "서울1동",
        },
        {
          cityCode: "02",
          dongCode: "2",
          dongTitle: "서울2동",
        },
        {
          cityCode: "02",
          dongCode: "3",
          dongTitle: "서울3동",
        },
        {
          cityCode: "031",
          dongCode: "1",
          dongTitle: "경기1동",
        },
        {
          cityCode: "031",
          dongCode: "2",
          dongTitle: "경기2동",
        },
        {
          cityCode: "031",
          dongCode: "3",
          dongTitle: "경기3동",
        },
        {
          cityCode: "032",
          dongCode: "1",
          dongTitle: "인천1동",
        },
        {
          cityCode: "032",
          dongCode: "2",
          dongTitle: "인천2동",
        },
        {
          cityCode: "032",
          dongCode: "3",
          dongTitle: "인천3동",
        },
      ],
      selectedDongList: [],
      selectedCity: "",
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    changeCity(event) {
      console.log(event.target.tagName);
      this.selectedDongList = this.dongList.filter((dong) => dong.cityCode === this.selectedCity);
    },
  },
};
</script>

<style scoped></style>
