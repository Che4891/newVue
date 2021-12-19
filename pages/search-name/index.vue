<template>
  <div><searchName />
   <productList />
   </div>
</template>
<script>
import searchName from "~/components/searchName.vue";
import productList from "~/components/product-list/productList.vue";

export default {
  layout: "layout",
  components: {
    searchName,
    productList,
  },
};
</script>
