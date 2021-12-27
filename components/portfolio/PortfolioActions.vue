<template>
  <div class="portfolio-action">
    <div class="portfolio-action__button">
      <img src="../../assets/images/qr-code.png" alt="Deposit"/>
      <span>Deposit</span>
    </div>
    <div class="portfolio-action__button">
      <img src="../../assets/images/send.png" alt="Send"/>
      <span>Withdraw</span>
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
    img {
      width: 1rem;
      margin-right: .35rem;
    }
  }
}
</style>
