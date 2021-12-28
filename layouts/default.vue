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

<style lang="scss">
$MainFont: Arial, Helvetica, sans-serif;

* {
  margin: 0;
  padding: 0;
}
body {
  background-color: $Black;
  color: $White;
  font-family: Arial, Helvetica, sans-serif;
  letter-spacing: 1px;
}
</style>
