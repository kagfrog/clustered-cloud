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
        primary: '#084678', // appbar
        secondary: '#0ca7d6', // switch, button outline
        accent: '#032f57', // header
        'yellow-text': '#e5c01d', // text
        'gray-bg': '#d5d8d7', // various
      },
    },
  },
};

export default new Vuetify(options);
