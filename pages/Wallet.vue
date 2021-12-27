<template>
  <div class="view">
    <PortfolioCard />
    <PortfolioActions />
    <Holdings />
  </div>
</template>

<script>
import PortfolioCard from '../components/portfolio/PortfolioCard.vue';
import PortfolioActions from '../components/portfolio/PortfolioActions.vue';
import Holdings from '../components/portfolio/Holdings.vue';

export default {
  name: 'Wallet',
  components: {
    PortfolioCard,
    PortfolioActions,
    Holdings,
  },
};
</script>
