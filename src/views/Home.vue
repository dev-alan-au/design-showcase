<template>
  <slideshow :heading="heading" :subheading="subheading" />
</template>

<script>
// @ is an alias to /src
import Slideshow from '@/components/Slideshow.vue';

export default {
  name: 'Home',
  components: {
    Slideshow
  },
  data() {
    return {
      heading: 'A world apart;',
      subheading: 'A part of the world.'
    }
  },
  beforeMount() {

  }
}
</script>
