import Vue from 'vue';
import VueRouter from 'vue-router';
import Blog from '@/views/Blog';
import Company from '@/views/Company';
import Contact from '@/views/Contact';
import Docs from '@/views/Docs';
import Enterprise from '@/views/Enterprise';
import ForAgencies from '@/views/ForAgencies';
import ForDevelopers from '@/views/ForDevelopers';
import Go from '@/views/Go';
import Help from '@/views/Help';
import Home from '@/views/Home';
import Html from '@/views/Html';
import Laravel from '@/views/Laravel';
import Magento from '@/views/Magento';
import Nodejs from '@/views/Nodejs';
import Php from '@/views/Php';
import Platform from '@/views/Platform';
import Pricing from '@/views/Pricing';
import Privacy from '@/views/Privacy';
import Python from '@/views/Python';
import Saas from '@/views/Saas';
import Stacks from '@/views/Stacks';
import Tos from '@/views/Tos';
import Trial from '@/views/Trial';
import Vuejs from '@/views/Vuejs';
import Webinars from '@/views/Webinars';
import Wordpress from '@/views/Wordpress';

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
      path: '/stacks/magento',
      name: 'magento',
      component: Magento,
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
    {
      path: '/company',
      name: 'company',
      component: Company,
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
    },
  ],
});
