
<template>
  <h2>Vue basics</h2>
</template>
<script>
export default {
  layout: "layout",
  created() {
    this.$store.dispatch('loadReactions', 1000)
  },
  data: () => ({}),
};
</script>

<style>
h2 {
  text-align: center;
  color: red;
}
 ul,
  ol {
    list-style: none;
    margin: 0;
    padding: 0 !important;
  }
</style>
