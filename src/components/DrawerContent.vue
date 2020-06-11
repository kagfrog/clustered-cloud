<template>
  <div>
    <v-toolbar
      flat
      height="64"
    >
      <router-link to="/">
        <v-img :src="require('../../public/img/svg/clustered-mini.svg')" />
      </router-link>
      <v-spacer />
      <v-btn
        v-model="drawer"
        icon
        x-large
        class="mr-0"
        @click="drawer = !drawer"
      >
        <v-icon size="32">
          {{ icons.mdiClose }}
        </v-icon>
      </v-btn>
    </v-toolbar>
  </div>
</template>

<script>
import { mdiClose } from '@mdi/js';

export default {
  props: {
    menu: {
      type: Boolean,
      required: true,
    },
  },

  data () {
    return {
      drawer: false,
      icons: { mdiClose },
    };
  },

  watch: {
    drawer (newVal) { this.$emit('update:menu', newVal); },

    menu (newVal) { this.drawer = newVal; },
  },
};
</script>
