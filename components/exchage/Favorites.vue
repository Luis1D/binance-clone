<template>
  <div class="log">
    <span class=log__title>Favorites</span>
    <div class="log__wrapper">
      <div class="log__coin" v-for="(coin) in userData.favoritesData" :key="coin.USD.FROMSYMBOL">

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
// import SimpleChart from './SimpleChart.vue';
import { mapState } from 'vuex';

export default {
  name: 'Favorites',
  data() {
    return {
      comp: 'favorites',
    };
  },
  props: {
    getFavorites: Array,
  },
  computed: {
    ...mapState([
      'userData',
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
.log {
  margin-top: 2rem;
  &__wrapper {
    display: flex;
    flex-direction: column;
    background-color: $Midnight;
    padding: .75rem 1rem;
    border-radius: 1rem;
    margin-top: 1rem;
  }
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
  &__item {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  &__base, &__vol {
    color: $Grey;
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
