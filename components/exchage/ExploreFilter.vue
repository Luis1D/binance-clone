<template>
  <div class="explore-filter">

    <div class="explore-filter__macro">
      <ul class="explore-filter__macro-options">
        <li class="explore-filter__macro-option">Favorites</li>
        <li class="explore-filter__macro-option">USD</li>
        <li class="explore-filter__macro-option">USDT</li>
        <li class="explore-filter__macro-option">BTC</li>
      </ul>
      <img class="explore-filter__search-icon" src="../../assets/images/search.png" alt="search"/>
    </div>

    <div class="explore-filter__micro">
      <span class="explore-filter__micro-label">Sort by</span>
      <button class="explore-filter__micro-option">Name</button>
      <button class="explore-filter__micro-option">Vol.</button>
      <button class="explore-filter__micro-option">Price</button>
      <button class="explore-filter__micro-option">24h Chg</button>
    </div>

  </div>
</template>

<script>
export default {
  name: 'AllCoinsFilter',
};
</script>

<style lang="scss" scoped>
.explore-filter {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &__macro {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-size: .95rem;
    background-color: $Black;
    color: $Grey;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 2;
    max-width: 30rem;
    height: 2.5rem;
    margin: 0 auto;
    padding: 0 1rem;
  }
  &__macro-options {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 60%;
  }
  &__macro-option {
    list-style: none;
  }
  &__search-icon {
    width: 1.5rem;
  }
  &__micro-option {
    margin-left: .5rem;
    border-radius: 1rem;
    background-color: $Charcoal;
    border: none;
    color: $White;
    padding: .35rem;
    font-size: .8rem;
  }
  &__micro-label {
    margin-right: .5rem;
    color: $Grey;
  }
}
</style>
