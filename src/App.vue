<template>
  <page-header :menu-items="menuItems"></page-header>
</template>

<script>
import PageHeader from './components/PageHeader.vue';

export default {
  name: 'App',
  components: {
    PageHeader
  },
  data() {
    return {
      menuItems: [
        {
          id: 1,
          name: 'Home',
          route: '/',
          isActive: true
        },
        {
          id: 2,
          name: 'Latest Collection',
          route: '/collections/latest/',
          isActive: false
        },
        {
          id: 3,
          name: 'Archive',
          route: '/collections/archive/',
          isActive: false
        }
      ]
    }
  }
}
</script>

<style>
  body {
    margin: 0;
  }
</style>
