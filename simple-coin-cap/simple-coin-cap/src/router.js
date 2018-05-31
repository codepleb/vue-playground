import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/views/home/home-page.vue'
import CoinDetailsPage from '@/views/coin-details/coin-details-page';
import AboutPage from '@/views/about/about-page.vue';
import NotFoundPage from '@/views/not-found/not-found.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/about',
      name: '/about',
      component: AboutPage
    },
    {
      path: '/*',
      name: '/NotFoundPage',
      component: NotFoundPage
    },
    {
      path: '/currency/:slug',
      name: 'CoinDetailsPage',
      component: CoinDetailsPage,
      props: true,  // Enable access to 'slug'
    }
  ]
})
