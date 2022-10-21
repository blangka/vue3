<template>
  <div>
    <div>
      <label for="city">
        <select name="city">
          <option :value="city.code" :key="city.code" v-for="city in cities">
            {{ city.title }}
          </option>
        </select>
      </label>
      <br />
      <table>
        <thead>
          <tr>
            <th>제품번호</th>
            <th>제품명</th>
            <th>가격</th>
            <th>수량</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="drink in drinkList" :key="drink.drintId">
            <td>{{ drink.drintId }}</td>
            <td>{{ drink.title }}</td>
            <td>{{ drink.price }}</td>
            <td>{{ drink.quantity }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div>클래스 바인딩</div>
    <div>
      <div :class="{ 'text-red': true, active: true }">클래스 바인딩</div>
      <div :class="{ 'text-red': hasError, active: isActive }">클래스 바인딩</div>
    </div>
    <DataBindingSelectView />
  </div>
</template>

<script>
import DataBindingSelectView from "@/views/databinding/DataBindingSelectView";

export default {
  components: { DataBindingSelectView },
  data() {
    return {
      isActive: false,
      hasError: false,
      cities: [
        {
          title: "서울",
          code: "02",
        },
        {
          title: "경기",
          code: "031",
        },
        {
          title: "인천",
          code: "032",
        },
      ],
      drinkList: [
        {
          drintId: "1",
          title: "콜라",
          price: 1000,
          quantity: 2,
        },
        {
          drintId: "2",
          title: "사이다",
          price: 1000,
          quantity: 3,
        },
        {
          drintId: "3",
          title: "환타",
          price: 1000,
          quantity: 3,
        },
        {
          drintId: "4",
          title: "망고주스",
          price: 1000,
          quantity: 3,
        },
        {
          drintId: "5",
          title: "포도주스",
          price: 1000,
          quantity: 3,
        },
      ],
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
.active {
  background-color: greenyellow;
  font-weight: bold;
}

.text-red {
  color: red;
}
</style>
