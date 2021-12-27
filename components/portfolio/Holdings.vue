<template>
  <div class="wallet">
    <p class="wallet__title">Fiat Balances</p>
    <div class="wallet__fiat">
      <div class="name-container">
        <p class="wallet__name">US Dollar</p><p class="wallet__abvr">USD</p>
      </div>
      <p class="wallet__balance">${{ userData.portfolio.fiatHoldings[0].balance }}</p>
    </div>
    <p class="wallet__title">Crypto Balances</p>
    <div class="wallet__crypto" v-for="balance in userData.portfolio.cryptoHoldings" :key="balance.coin">
      <div class="name-container">
        <p class="wallet__name">{{ balance.name }}</p><p class="wallet__abvr">{{ balance.coin }}</p>
      </div>
      <div class="crypto-balance">
        <p class="wallet__totalCoins">{{ balance.totalCoins }}</p>
        <p class="wallet__balance">${{ balance.balance }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Wallet',
  props: {
    portfolioData: Object,
  },
  computed: {
    ...mapState([
      'userData',
    ]),
  },
};
</script>

<style lang="scss" scoped>
.wallet {
  padding: .75rem;
  &__title {
    color: $Grey;
    font-size: .9rem;
    margin-bottom: .5rem;
  }
  &__fiat, &__crypto {
    border-top: 1px solid $Charcoal;
    border-bottom: 1px solid $Charcoal;
    display: flex;
    padding: .5rem 0;
    justify-content: space-between;
    align-items: center;
    .name-container {
      p {
        display: inline-block;
      }
    }
  }
  &__fiat {
    margin-bottom: 1.25rem;
  }
  &__abvr {
    color: $Grey;
    margin-left: .35rem;
  }
  &__balance, .crypto-balance {
    float: right;
    font-size: .95rem;
  }
  .crypto-balance {
    p {
      display: block;
    }
    .wallet__balance {
      color: $Grey;
      font-size: .85rem;
    }
  }
}
</style>
