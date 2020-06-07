import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

const options = {
  icons: {
    iconfont: 'mdiSvg',
  },
  theme: {
    options: { customProperties: true },
    themes: {
      light: {
        primary: '#796eff', // purple
        secondary: '#000020', // blackish-purple
        accent: '#00acc1', // blue-green
      },
    },
  },
};

export default new Vuetify(options);
