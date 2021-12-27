<template>
  <div class="portfolio-value">
    <span class="portfolio-value__encrypt-toggle">
      Portfolio Value
      <img
        src="../../assets/images/view.png"
        alt="Hide Value"
        v-on:click="toggleAccountVis"
        v-if="!hideAccount"
      />
      <img
        src="../../assets/images/visibility.png"
        alt="Hide Value"
        v-on:click="toggleAccountVis"
        v-else
      />
    </span>
    <span v-if="!hideAccount" class="portfolio-value__value">{{ userData.portfolio.value }}</span>
    <hr v-else class="portfolio-value__hidden" />
    <div className="percent-change">
      <span v-if="!hideAccount" class="percent-change__percent">+$3.54%</span>
      <hr v-else class="portfolio-value__hidden" />
      <span class="percent-change__last">last 24h</span>
    </div>
    <div class="portfolio-value-btns">
      <button class="portfolio-value-btns__btn notifications"></button>
      <button class="portfolio-value-btns__btn send-money"></button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'PortfolioCard',
  data() {
    return {
      hideAccount: false,
    };
  },
  methods: {
    toggleAccountVis() {
      this.hideAccount = !this.hideAccount;
    },
  },
  computed: {
    ...mapState([
      'userData',
    ]),
  },
};
</script>

<style lang="scss" scoped>
  .portfolio-value {
  width: 90%;
  height: 6rem;
  margin: 0 auto;
  padding: .5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  &__encrypt-toggle {
    color: $Grey;
    font-size: .95rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 8.5rem;
    img {
      width: 1rem;
    }
  }
  &__hidden {
    font-size: 3rem;
    width: 30%;
    border: none;
    border-bottom: .5rem dotted $White;
    display: inline-block;
  }
  &__value {
    font-size: 2rem;
  }
}
.portfolio-value-btns {
  width: 4.5rem;
  position: absolute;
  right: 1rem;
  top: 35%;
  display: flex;
  justify-content: space-between;
  &__btn {
    width: 1.75rem;
    height: 1.75rem;
    border-radius: 50%;
    border: none;
  }
  .notifications {
    background-color: $Charcoal;
  }
  .send-money {
    background-color: $Yellow;
  }
}
.percent-change {
  width: 9rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  &__percent, &__last {
    color: $Grey;
  }
  &__percent {
    color: $Green;
    font-size: .95rem;
  }
  &__last {
    background-color: $Charcoal;
    color: $White;
    border-radius: .25rem;
    padding: .25rem .4rem;
    font-size: .75rem;
  }
}
</style>
