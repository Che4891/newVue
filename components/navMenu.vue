<!-- Please remove this file from your project -->
<template>
  <ul class="menu">
    <li class="menu-item" v-for="item in items"
    :key="item.txt">
      <nuxt-link :to="item.link">{{item.txt}}</nuxt-link>
    </li>
  </ul>
</template>
<script>
export default {
  name: 'NavMenu',
  data: () => ({
    items: [
     { txt: 'Main', link: '/'},
     { txt: 'First-lesson', link: '/first-lesson'},
     { txt: 'Second-lesson', link: '/second-lesson'},
     { txt: 'Third-lesson', link: '/third-lesson'},
     { txt: 'Search-name', link: '/search-name'},
     { txt: 'Reacts', link: '/fourth-lesson'},
     { txt: 'Forms', link: '/forms'},
    ]
  }),
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