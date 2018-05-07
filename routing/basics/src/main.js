import Vue from 'vue';
import App from './app-vue-router/app';
import {router} from './app-vue-router/app';

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
