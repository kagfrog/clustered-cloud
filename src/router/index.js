import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home';
import Platform from '@/views/Platform';
import Pricing from '@/views/Pricing';
import Trial from '@/views/Trial';
import Docs from '@/views/Docs';
import Help from '@/views/Help';
import Blog from '@/views/Blog';
import Webinars from '@/views/Webinars';
import ForDevelopers from '@/views/ForDevelopers';
import Enterprise from '@/views/Enterprise';
import ForAgencies from '@/views/ForAgencies';
import Saas from '@/views/Saas';
import Stacks from '@/views/Stacks';
import Nodejs from '@/views/Nodejs';
import Php from '@/views/Php';
import Python from '@/views/Python';
import Go from '@/views/Go';
import Html from '@/views/Html';
import Magneto from '@/views/Magneto';
import Wordpress from '@/views/Wordpress';
import Vuejs from '@/views/Vuejs';
import Laravel from '@/views/Laravel';
import Privacy from '@/views/Privacy';
import Tos from '@/views/Tos';

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
    {
      path: '/docs',
      name: 'docs',
      component: Docs,
    },
    {
      path: '/help',
      name: 'help',
      component: Help,
    },
    {
      path: '/blog',
      name: 'blog',
      component: Blog,
    },
    {
      path: '/webinars',
      name: 'webinars',
      component: Webinars,
    },
    {
      path: '/solutions/for-developers',
      name: 'for-developers',
      component: ForDevelopers,
    },
    {
      path: '/solutions/enterprise',
      name: 'enterprise',
      component: Enterprise,
    },
    {
      path: '/solutions/for-agencies',
      name: 'for-agencies',
      component: ForAgencies,
    },
    {
      path: '/solutions/saas',
      name: 'saas',
      component: Saas,
    },
    {
      path: '/stacks',
      name: 'stacks',
      component: Stacks,
    },
    {
      path: '/stacks/nodejs',
      name: 'nodejs',
      component: Nodejs,
    },
    {
      path: '/stacks/php',
      name: 'php',
      component: Php,
    },
    {
      path: '/stacks/python',
      name: 'python',
      component: Python,
    },
    {
      path: '/stacks/go',
      name: 'go',
      component: Go,
    },
    {
      path: '/stacks/html',
      name: 'html',
      component: Html,
    },
    {
      path: '/stacks/magneto',
      name: 'magneto',
      component: Magneto,
    },
    {
      path: '/stacks/wordpress',
      name: 'wordpress',
      component: Wordpress,
    },
    {
      path: '/stacks/vuejs',
      name: 'vuejs',
      component: Vuejs,
    },
    {
      path: '/stacks/laravel',
      name: 'laravel',
      component: Laravel,
    },
    {
      path: '/legal/privacy',
      name: 'privacy',
      component: Privacy,
    },
    {
      path: '/legal/tos',
      name: 'tos',
      component: Tos,
    },
  ],
});
