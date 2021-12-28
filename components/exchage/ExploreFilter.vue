<template>
  <div class="filter-container">
    <div class="filters">
      <ul>
        <li>Favorites</li>
        <li>USD</li>
        <li>USDT</li>
        <li>BTC</li>
      </ul>
      <img src="../../assets/images/search.png" alt="search"/>
    </div>
    <div class="sort-filters">
      <span>Sort by</span>
      <button>Name</button>
      <button>Vol.</button>
      <button>Price</button>
      <button>24h Chg</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AllCoinsFilter',
};
</script>

<style lang="scss" scoped>
.filter-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.filters {
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
  img {
    width: 1.5rem;
  }
}
ul {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 60%;
  li {
    list-style: none;
  }
}
.sort-filters {
  span {
    margin-right: .5rem;
    color: $Grey;
  }
  button {
    margin-left: .5rem;
    border-radius: 1rem;
    background-color: $Charcoal;
    border: none;
    color: $White;
    padding: .35rem;
    font-size: .8rem;
  }
}
</style>
