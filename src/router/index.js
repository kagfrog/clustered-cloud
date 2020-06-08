import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home';
import Platform from '@/views/Platform';
import Pricing from '@/views/Pricing';
import Trial from '@/views/Trial';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '*',
      redirect: '/',
    },
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/platform',
      name: 'platform',
      component: Platform,
    },
    {
      path: '/pricing',
      name: 'pricing',
      component: Pricing,
    },
    {
      path: '/signup/trial',
      name: 'trial',
      component: Trial,
    },
  ],
});
