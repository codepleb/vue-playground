<template>
  <div class="home">
    <div class="ui grid">
      <div class="sixteen wide column coin-market">
        <div class="ui three column grid">
          <div class="column">
            <div class="ui segment banner">
              Market Cap: {{totalMarketCap}}
            </div>
          </div>
          <div class="column">
            <div class="ui segment banner">
              Volume (24hr): {{total24HrVolume}}
            </div>
          </div>
          <div class="column">
            <div class="ui segment banner">
              BTC Dominance: {{totalBTCPercentage}}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex';

  export default {
    name: 'HomePage',
    computed: {
      ...mapGetters([
        'totalMarketCap',
        'total24HrVolume',
        'totalBTCPercentage',
      ])
    }
  }
</script>

<style src="@/assets/styles/home-page.css">
</style>
