<template>
  <header>
    <div class="container">
      <nuxt-link to="/" class="logo"> Logo </nuxt-link>
      <div class="links">
        <nuxt-link to="/"> Films </nuxt-link>
        <button
          type="button"
          class="btn btn-outline-light btn-lg"
          @click="onAuthBtnClick"
        >
          <!-- {{ getUser ? "Logout" : "Log in" }} -->
        </button>
      </div>
    </div>
    <authButton v-if="isAuthModalOpen" @close="isAuthModalOpen = false" />
  </header>
</template>
<script>
import authButton from "~/components/auth/authButton.vue";

export default {
  layout: "layout",
  components: {
    authButton,
  },
  data: () => ({
    isAuthorized: false,
    isAuthModalOpen: false,
  }),
   methods: {
    onAuthBtnClick() {
        this.isAuthModalOpen = true
    }
  }

};
</script>
<style scoped>
header {
  background-color: #0c0c0c;
  padding: 20px 0;
}
.container {
  margin-top: 0;
  display: flex;
  align-items: baseline;
}
a {
  text-decoration: none;
  font-weight: 700;
  color: #ffffff;
  font-size: 25px;
}
.logo {
  color: #eb5804;
  font-size: 30px;
}
.links {
  margin-left: 75px;
  display: flex;
  flex-grow: 1;
}
button {
  margin-left: auto;
}
</style>
