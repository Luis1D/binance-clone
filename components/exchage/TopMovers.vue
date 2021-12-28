<template>
  <div class="gainers-losers">
    <span>Top Gainers & Losers</span>
    <div class="card-container">
      <div
        class="card-container__card"
        v-for="(coin) in coinData.topMovers"
        :key="coin.USD.FROMSYMBOL">
        <div class="card-container__chart">
          <img
            :src="'https://www.cryptocompare.com' + coin.USD.IMAGEURL"
            alt="coin"
            class="card-container__img"
          />
          <!--
          <SimpleChart
            :coinReq="coin.USD.FROMSYMBOL"
            :comp="comp"
            :upOrDown="isUp(coin.USD.PRICE, coin.USD.OPEN24HOUR)"
            class="chart" />
          -->
        </div>
        <div>
          <span class="card-container__from-symbol">{{ coin.USD.FROMSYMBOL }}</span>
          <span class="card-container__to-symbol">/USD</span><br />
          <span class="card-container__price">{{ coin.USD.PRICE }}</span><br/>
        </div>
        <span
          class="card-container__price-change"
          :class="isUp(coin.USD.PRICE, coin.USD.OPEN24HOUR)"
        >
          {{ coin.USD.CHANGEPCT24HOUR }}%
        </span>
      </div>
    </div>
  </div>
</template>

<script>
// import SimpleChart from '../visuals/SimpleChart.vue';
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
    test() {
      return console.log(this.coinData);
    }
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
.gainers-losers {
  margin: 0 auto;
  margin-top: 2rem;
}
.card-container::-webkit-scrollbar {
  display: none;
}
.card-container {
  width: auto;
  height: 10rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  overflow: scroll;
  &__card {
    background-color: $Midnight;
    margin-right: 1rem;
    height: 7rem;
    min-width: 6.5rem;
    padding: .75rem;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  &__to-symbol, &__price {
    color: $Grey;
  }
  &__price-change {
    color: $Green;
  }
  &__img {
    width: 1.75rem;
  }
  &__chart {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .chart {
      margin-right: 1rem;
    }
  }
  .up {
    color: $Green;
  }
  .down {
    color: $DangerRed;
  }
}
</style>
