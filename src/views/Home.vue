<template>
  <div>
    <vue-headful title="End-to-end DevOps platform | Clustered Cloud" />
    <hero />
    <works />
    <scale />
    <v-divider />
    <run-app />
    <v-divider />
    <automate />
    <v-divider />
    <start-small />
    <v-divider />
    <simplify />
    <v-divider />
    <unified />
    <v-divider />
    <whats-new />
  </div>
</template>

<script>
import Automate from '@/components/Automate';
import Hero from '@/components/Hero';
import RunApp from '@/components/RunApp';
import Scale from '@/components/Scale';
import Simplify from '@/components/Simplify';
import StartSmall from '@/components/StartSmall';
import Unified from '@/components/Unified';
import WhatsNew from '@/components/WhatsNew';
import Works from '@/components/Works';

export default {
  components: {
    Automate,
    Hero,
    RunApp,
    Scale,
    Simplify,
    StartSmall,
    Unified,
    WhatsNew,
    Works,
  },

  props: {
    installPromptEvent: {
      type: Event,
      default: null,
    },
    showInstallAppItem: {
      type: Boolean,
      required: true,
    },
    snackBtnText: {
      type: String,
      required: true,
    },
    snackWithButtons: {
      type: Boolean,
      required: true,
    },
  },

  data: () => ({
  }),

  methods: {
    reloadApp () { window.location.reload(); },

    showA2HSPrompt () {
      // Ensures selecting 'Install app' from Home view menu dismisses
      // the 'Install app' snackbar, if currently displayed.
      if (
        this.snackWithButtons === true && this.snackBtnText === 'Install'
      ) {
        this.$emit('update:snackWithButtons', false);
      }

      // Shows the A2HS prompt.
      this.installPromptEvent.prompt();

      // Waits for the user to respond to the prompt.
      this.installPromptEvent.userChoice
        .then((choice) => {
          if (choice.outcome === 'accepted') {
            console.log('User accepted the A2HS prompt');

            this.$emit('update:installPromptEvent', null);

            // Once the app is installed, these are no longer needed.
            localStorage.removeItem('sof_appUseCount');
            localStorage.removeItem('sof_appUseDate');
          } else {
            console.log('User dismissed the A2HS prompt');
          }
        });
    },
  },
};
</script>

<style scoped>

</style>
