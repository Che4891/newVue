<template>
  <div class="filters">
    <textarea
      class="filters__input"
      v-model="textFild"
      name="text"
      id="textFild"
      cols="30"
      rows="10"
    >
    </textarea>
    <!-- * Для строк
    <div class="filters__text">
        {{textFild | upperCase | emoji}}
    </div> -->
    <!-- * Для HTML кода   -->
    <div
      class="filters__text"
      :inner-html.prop="textFild | upperCase | emoji"
    ></div>
    <ul class="store__list">
      <li class="store__item" v-for="(item, index) in reactions" :key="index">
        {{item.id}} and {{item.title}}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data: () => ({
    textFild: "",
  }),
  filters: {
    upperCase(value) {
      return value.toUpperCase();
    },
    emoji(value) {
      return value.replace(":)", "&#128512").replace(":(", "&#128169");
    },
  },
  computed: {
    reactions() {
      return this.$store.getters.getReactions;
    },
  },
};
</script>
<style scoped>
.filters {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
