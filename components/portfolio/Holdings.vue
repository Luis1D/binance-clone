<template>
  <div class="wallet">
    <p class="wallet__title">Fiat Balances</p>
    <div class="wallet__type fiat-wallet">
      <div class="wallet__currency-wrapper">
        <p class="wallet__currency">US Dollar</p>
        <p class="wallet__currency-abvr">USD</p>
      </div>
      <p class="wallet__balance">${{ userData.portfolio.fiatHoldings[0].balance }}</p>
    </div>
    <p class="wallet__title">Crypto Balances</p>
    <div class="wallet__type crypto-wallet" v-for="balance in userData.portfolio.cryptoHoldings" :key="balance.coin">
      <div class="wallet__currency-wrapper">
        <p class="wallet__currency">{{ balance.name }}</p>
        <p class="wallet__currency-abvr">{{ balance.coin }}</p>
      </div>
      <div class="wallet__crypto-balance">
        <p class="wallet__totalCoins">{{ balance.totalCoins }}</p>
        <p class="wallet__balance">${{ balance.balance }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Holdings',
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
  &__type {
    border-top: 1px solid $Charcoal;
    border-bottom: 1px solid $Charcoal;
    display: flex;
    padding: .5rem 0;
    justify-content: space-between;
    align-items: center;
  }
  &__currency {
    display: inline-block;
  }
  &__currency-abvr {
    color: $Grey;
    margin-left: .35rem;
    display: inline-block;
  }
  &__balance, &__crypto-balance {
    float: right;
    font-size: .95rem;
  }
  &__crypto-balance {
    p {
      display: block;
    }
    .wallet__balance {
      color: $Grey;
      font-size: .85rem;
    }
  }
}
.fiat-wallet {
  margin-bottom: 1.25rem;
}
</style>
