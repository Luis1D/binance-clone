<template>
  <div class="view">
    <PortfolioCard />
    <TopMovers />
    <Favorites />
  </div>
</template>

<script>
import PortfolioCard from '../components/portfolio/PortfolioCard.vue';
import TopMovers from '../components/exchage/TopMovers.vue';
import Favorites from '../components/exchage/Favorites.vue';

export default {
  name: 'IndexPage',
  components: {
    PortfolioCard,
    TopMovers,
    Favorites,
  },
};
</script>

<style lang="scss">
.view {
  max-width: 30rem;
  margin: 0 auto;
  padding: 1rem 1rem 4rem 1rem;
}
</style>
