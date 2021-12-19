<template>
  <div class="wrapper">
    <h2>Search name</h2>
    <input @input="searchName = $event.target.value" type="text" />
    <p>
      Total name: {{ names.length }} Coincidences: {{ getFilterName.length }}
    </p>
    <ul>
      <li v-for="(name, index) in getFilterName" :key="index">{{ name }}</li>
    </ul>
    <button @click="chengeText = !chengeText" class="big-btn">
      {{chengeText ? 'Show' : 'Hiden'}}
    </button>
  </div>
</template>
<style scoped>
.big-btn {
  padding: 15px;
  width: 100px;
  color: #fff;
  background-color: brown;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
<script>
export default {
  name: "SearchName",
  data: () => ({
    chengeText: true,
    searchName: "",
    names: ["Eva", "Inna", "Anton", "Ivan", "Maike"],
  }),
  computed: {
    getFilterName() {
      return this.names.filter((name) =>
        name.toLowerCase().includes(this.searchName.toLowerCase())
      );
    },
  },
};
</script>
