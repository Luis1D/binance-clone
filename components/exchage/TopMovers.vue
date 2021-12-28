<template>
  <div class="top-movers">
    <span class="top-movers__title">Top Gainers & Losers</span>
    <div class="top-movers__wrapper">
      <div
        class="coin-card"
        v-for="(coin) in coinData.topMovers"
        :key="coin.USD.FROMSYMBOL">
        <div class="coin-card__chart-container">
          <img
            :src="'https://www.cryptocompare.com' + coin.USD.IMAGEURL"
            alt="coin"
            class="coin-card__img"
          />
          <!--
          <SimpleChart
            :coinReq="coin.USD.FROMSYMBOL"
            :comp="comp"
            :upOrDown="isUp(coin.USD.PRICE, coin.USD.OPEN24HOUR)"
            class="chart" />
          -->
        </div>
        <div class="coin-card__details-container">
          <span class="coin-card__from-symbol">{{ coin.USD.FROMSYMBOL }}</span>
          <span class="coin-card__to-symbol">/USD</span><br />
          <span class="coin-card__price">{{ coin.USD.PRICE }}</span><br/>
        </div>
        <span :class="isUp(coin.USD.PRICE, coin.USD.OPEN24HOUR)">
          {{ coin.USD.CHANGEPCT24HOUR }}%
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'GainersLosers',
  data() {
    return {
      comp: 'gainerslosers',
    };
  },
  computed: {
    ...mapState([
      'coinData',
    ]),
  },
  methods: {
    isUp(price, open) {
      if (price > open) {
        return 'up';
      }
      return 'down';
    },
  },
};
</script>

<style lang="scss">
.top-movers {
  margin: 0 auto;
  margin-top: 2rem;
  &__wrapper::-webkit-scrollbar {
    display: none;
  }
  &__wrapper {
    width: auto;
    height: 10rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    overflow: scroll;
  }
}
.coin-card {
  background-color: $Midnight;
  margin-right: 1rem;
  height: 7rem;
  min-width: 6.5rem;
  padding: .75rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &__chart-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .chart {
      margin-right: 1rem;
    }
  }
  &__img {
    width: 1.75rem;
  }
  &__to-symbol, &__price {
    color: $Grey;
  }
}
.up {
  color: $Green;
}
.down {
  color: $DangerRed;
}
</style>
