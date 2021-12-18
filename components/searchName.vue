<template>
  <div class="wrapper">
    <h2>Search name</h2>
    <input @input="searchName = $event.target.value" type="text" />
    <p>Total name: {{ names.length }} Coincidences: {{ getFilterName.length }}</p>
    <ul>
      <li v-for="(name, index) in getFilterName" :key="index">{{ name }}</li>
    </ul>
  </div>
</template>
<script>

export default {
    name: 'SearchName',
  data: () => ({
    searchName: "",
    names: ['Eva', 'Inna', 'Anton', 'Ivan', 'Maike'],
  }),
  computed: {
    getFilterName() {
      return this.names.filter(name => name.toLowerCase().includes(this.searchName.toLowerCase())
      );
    },
  },
};
</script>
