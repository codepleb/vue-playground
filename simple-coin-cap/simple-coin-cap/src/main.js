import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//import vue-select from npm
import VueSelect from 'vue-select';

// Register this "directive" globally for the app
Vue.component('v-select', VueSelect);

// CSS from node-modules
import 'semantic-ui-css/semantic.css';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
