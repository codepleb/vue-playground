import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    coins: [],
    totalMarketCap: 0,
    total24HrVolume: 0,
    totalBTCPercentage: 0,
    loading: false,
  },
  // Mutating store state
  mutations: {
    UPDATE_COINS(state, payload) {

    }
  },
  // Components dispatch actions that commits to mutations
  actions: {

  },
  // Help compute store state, tha components can directly retrieve
  getter: {

  }
})
