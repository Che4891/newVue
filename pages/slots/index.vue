<template>
  <slots />
</template>
<script>
import slots from "~/components/slots/slots.vue";

export default {
  layout: "layout",
  components: {
    slots,
  },
};
</script>
