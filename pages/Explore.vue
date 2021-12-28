<template>
  <div id="view">
    <ExploreFilter />
    <ExploreFeed />
  </div>
</template>

<script>
import ExploreFilter from '../components/exchage/ExploreFilter.vue';
import ExploreFeed from '../components/exchage/ExploreFeed.vue';

export default {
  name: 'App',
  components: {
    ExploreFilter,
    ExploreFeed,
  },
};
</script>

<style lang="scss">
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
#view {
  max-width: 30rem;
  margin: 0 auto;
  padding: 2.75rem 1rem 4rem 1rem;
}
</style>
