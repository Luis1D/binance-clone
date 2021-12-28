<template>
  <div class="favorite">
    <div class="list">
      <div class="list__coin" v-for="(coin) in coinData.allData[0]" :key="coin.USD.FROMSYMBOL">
        <!-- First Col -->
        <div class="list__wrapper">
          <span class="list__from">
            {{ coin.USD.FROMSYMBOL }}
            <span class="list__base">/USD</span>
          </span>
          <span class="list__vol">Vol.{{ coin.USD.VOLUMEHOURTO }}</span>
        </div>
        <!-- Middle Col -->
        <div class="list__wrapper">
          <span class="list__price">{{ coin.USD.PRICE }}</span>
          <span
            class="list__change"
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

<style lang="scss" scoped>
  .list {
    display: flex;
    flex-direction: column;
    background-color: $Midnight;
    padding: .75rem 1rem;
    border-radius: 1rem;
    margin-top: 1rem;
    &__coin {
      border-bottom: 1px solid $Charcoal;
      height: 3rem;
      padding: .25rem;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      font-size: .95rem;
    }
    &__base, &__vol {
      color: $Grey;
    }
    &__wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    &__vol, &__change {
      font-size: .75rem;
    }
  }
  .up {
    color: $Green;
  }
  .down {
    color: $DangerRed;
  }
</style>
