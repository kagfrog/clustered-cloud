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
  ],
});
