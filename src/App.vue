<template>
  <div class="page-overlay" @click="toggleMenu(false)"></div>
  <page-nav :menu-items="menuItems" />
  <page-header @update:menu-state="toggleMenu" :page-has-scrolled="pageHasScrolled" />
  <div class="page">
    <div class="page-wrapper">
      <router-view />
    </div>
  </div>
</template>

<script>
import PageNav from './components/PageNav.vue';
import PageHeader from './components/PageHeader.vue';

export default {
  name: 'App',
  components: {
    PageHeader,
    PageNav
  },
  data() {
    return {
      dom: {
        html: null
      },
      menuIsVisible: false,
      menuItems: [
        {
          id: 1,
          name: 'Home',
          route: '/',
          icon: 'home',
          isActive: true
        },
        {
          id: 2,
          name: 'Latest Collection',
          route: '/collection/latest/',
          icon: 'ninja',
          isActive: false
        },
        {
          id: 3,
          name: 'Archive',
          route: '/collection/archive/',
          icon: 'package',
          isActive: false
        },
        {
          id: 4,
          name: 'Contact Us',
          route: '/contact-us/',
          icon: 'human',
          isActive: false
        }
      ],
      pageHasScrolled: false
    }
  },
  methods: {
    getHeaderHeight() {
      const headerHeightDesktop = 100;
      const headerHeightMobile = 75;
      const mql = window.matchMedia('(max-width: 767px)');

      if(mql.matches) return headerHeightMobile;
      return headerHeightDesktop;
    },
    toggleMenu(state) {
      if(typeof state !== 'undefined') {
        this.menuIsVisible = state;
      } else {
        this.menuIsVisible = !this.menuIsVisible;
      }
    }
  },
  watch: {
    $route(to) {
      document.title = to.meta.title || '';
      this.toggleMenu(false);
    },
    menuIsVisible() {
      this.dom.html.setAttribute('data-menu-visible', this.menuIsVisible);
    }
  },
  beforeMount() {
    this.dom.html = document.querySelector('html');
  },
  mounted() {
    this.pageHasScrolled = (window.pageYOffset > this.getHeaderHeight());

    ['scroll', 'resize'].forEach(event => {
      window.addEventListener(event, () => {
        this.pageHasScrolled = window.pageYOffset > this.getHeaderHeight();
      }, {passive: true})
    })
  },
  updated() {
    this.pageHasScrolled = (window.pageYOffset > this.getHeaderHeight());
  }
}
</script>
<style lang="scss">
  html[data-menu-visible="true"] {
    width: 100%;
    height: 100%;
    // overflow: hidden;

    body {
      height: 100%;
      overflow: hidden;
    }
  }

  body {
    width: 100%;
    margin: 0;
    overflow-x: hidden;
  }
</style>
<style lang="scss" scoped>
  .page {
    display: flex;
    position: relative;
    z-index: map-get($z-index, page);
    transform: translateX(0);
    transition: transform .5s ease-in-out;

    &::before {
      content: '';
      height: 100vh;
    }
  }

  html[data-menu-visible="true"] {
    .page {
      transform: translateX(300px);
    }

    .page-overlay {
      z-index: map-get($z-index, page-overlay);
      opacity: 1;
      visibility: visible;
    }
  }

  .page-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    background-color: rgba(red, .3);
    opacity: 0;
    visibility: hidden;
    transition: opacity .5s ease-in-out;
  }

  .page-wrapper {
    position: relative;
    flex: 0 0 100%;
    max-width: 100%;
  }

  .filler {
    height: 200vh;
    background-color: green;
  }
</style>
