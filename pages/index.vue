<!-- Please remove this file from your project -->
<template>
  <ul class="menu">
    <li class="menu-item">
      <nuxt-link to="/first-lesson">First-lesson</nuxt-link>
    </li>
    <li class="menu-item">
      <nuxt-link to="/second-lesson">Second-lesson</nuxt-link>
    </li>
    <li class="menu-item">
      <nuxt-link to="/third-lesson">Third-lesson</nuxt-link>
    </li>
    <li class="menu-item"></li>
  </ul>
</template>
<script>
export default {
  data: () => ({}),
};
</script>

<style>
.menu {
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  margin: 0;
  padding: 0 !important;
}
.menu-item {
  padding: 20px;
}

</style>
