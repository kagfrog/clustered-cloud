import Vue from 'vue';
import 'roboto-fontface/css/roboto/sass/roboto-fontface-regular.scss';
import 'roboto-fontface/css/roboto/sass/roboto-fontface-medium.scss';
import 'roboto-fontface/css/roboto/sass/roboto-fontface-bold.scss';
import 'roboto-fontface/css/roboto/sass/roboto-fontface-light.scss';
import 'roboto-fontface/css/roboto/sass/roboto-fontface-regular-italic.scss';
import 'roboto-fontface/css/roboto/sass/roboto-fontface-medium-italic.scss';
import 'roboto-fontface/css/roboto/sass/roboto-fontface-bold-italic.scss';
import 'roboto-fontface/css/roboto/sass/roboto-fontface-light-italic.scss';
import vuetify from '@/plugins/vuetify';
import router from '@/router';
import '@/registerServiceWorker';
import App from '@/App';

Vue.config.productionTip = false;

// Allows use of vue-devtools in staging builds (dev-build) just like localhost.
Vue.config.devtools = (process.env.BASE_URL !== process.env.VUE_APP_PROD_URL);

new Vue({
  router,
  vuetify,
  render: h => h(App),
}).$mount('#app');
