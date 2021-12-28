<template>
  <div class="portfolio-action">
    <div class="portfolio-action__button">
      <img class="portfolio-action__icon" src="../../assets/images/qr-code.png" alt="Deposit"/>
      <p class="portfolio-action__label">Deposit</p>
    </div>
    <div class="portfolio-action__button">
      <img class="portfolio-action__icon" src="../../assets/images/send.png" alt="Send"/>
      <p class="portfolio-action__label">Withdraw</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PortfolioAction',
};
</script>

<style lang="scss" scoped>
.portfolio-action {
  padding: .75rem;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  &__button {
    width: 40%;
    height: 2.25rem;
    border: none;
    background-color: $Charcoal;
    color: $White;
    font-weight: bold;
    font-size: .85rem;
    border-radius: .25rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  &__icon {
    width: 1rem;
    margin-right: .35rem;
  }
}
</style>
