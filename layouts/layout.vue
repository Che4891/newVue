<template>
    <v-app>
      <navMenu />
      <v-main>
          <Nuxt />
      </v-main>
    </v-app>
</template>

<script>
import navMenu from '~/components/navMenu.vue'

export default {
  name: 'layout',
  components: {
    navMenu,
  },

}
</script>
