<template>
  <div class="view">
    <PortfolioCard />
    <button @click="getData()">click</button>
    {{ coinData }}
  </div>
</template>

<script>
import PortfolioCard from '../components/portfolio/PortfolioCard.vue';
import { mapState, mapActions } from 'vuex';

export default {
  name: 'IndexPage',
  components: {
    PortfolioCard,
  },
  computed: {
    ...mapState([
      'coinData',
    ]),
  },
  methods: {
    ...mapActions({
      getData: 'getCoinData'
    }),
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
.view {
  max-width: 30rem;
  margin: 0 auto;
  padding: 1rem 1rem 4rem 1rem;
}
</style>
