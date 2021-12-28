<template>
  <nav class="nav">
    <ul class="nav__ul">
      <li class="nav__home-link">
        <nuxt-link to="/">
          <img class="nav__icon" src="../../assets/images/home.png" alt="Home"/>
        </nuxt-link>
      </li>
      <li class="nav__home-link">
        <nuxt-link to="/explore">
          <img class="nav__icon" src="../../assets/images/bar-graph.png" alt="Coins"/>
        </nuxt-link>
      </li>
      <li class="nav__home-link">
        <nuxt-link to="/wallet">
          <img class="nav__icon" src="../../assets/images/wallet.png" alt="Wallet"/>
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style lang="scss">
.nav {
  background-color: $Midnight;
  padding: .75rem;
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  max-width: 30rem;
  height: 2rem;
  margin: 0 auto;
  z-index: 2;
  border-top: 1px solid $Charcoal;
  &__ul {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height: 100%;
  }
  &__home-link {
    list-style: none;
    color: $Grey;
  }
  &__icon {
    width: 1.75rem;
  }
}
</style>
