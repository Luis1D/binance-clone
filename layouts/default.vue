<template>
  <div>
    <Nuxt />
    <Nav />
  </div>
</template>

<script>
import Nav from '../components/globals/Nav.vue';

export default {
  components: {
    Nav,
  },
  mounted() {
    this.$store.dispatch('getCoinData');
  },
};
</script>

