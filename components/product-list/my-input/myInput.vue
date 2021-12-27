<template>
    <div class="search-input">
      <input type="text" @input="$emit('input', $event.target.value)"/>
      <button>Search</button>
    </div>
</template>
<style scoped>
.search-input {
  display: flex;
  align-items: center;
  margin-bottom: 50px;

}
.search-input input {
  padding: 3px;
  line-height: 24px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.search-input button {
  color: #fff;
  background-color: brown;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  line-height: 24px;
  margin-right: 5px;
}
</style>
<script>

export default {
    model: {
        prop: 'value',
        event: 'input'
    },
  data: () => ({
  }),   
};
</script>