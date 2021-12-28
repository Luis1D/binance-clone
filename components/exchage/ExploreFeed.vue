<template>
  <div class="log">
    <div class="log__wrapper">
      <div class="log__coin" v-for="(coin) in coinData.allData[0]" :key="coin.USD.FROMSYMBOL">
        <!-- First Col -->
        <div class="log__item">
          <span class="log__from">
            {{ coin.USD.FROMSYMBOL }}
            <span class="log__base">/USD</span>
          </span>
          <span class="log__vol">Vol.{{ coin.USD.VOLUMEHOURTO }}</span>
        </div>
        <!-- Middle Col -->
        <div class="log__item">
          <span class="log__price">{{ coin.USD.PRICE }}</span>
          <span
            class="log__change"
            :class="isUp(coin.USD.PRICE, coin.USD.OPEN24HOUR)">
            {{ coin.USD.CHANGEPCT24HOUR }}%
          </span>
        </div>
        <!-- Third Col
        <simple-chart
          :coinReq="coin.USD.FROMSYMBOL"
          :comp="comp"
          :upOrDown="isUp(coin.USD.PRICE, coin.USD.OPEN24HOUR)">
        </simple-chart>
        -->
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'AllCoins',
  data() {
    return {
      comp: 'favorites',
    };
  },
  computed: {
    ...mapState([
      'coinData',
    ])
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
