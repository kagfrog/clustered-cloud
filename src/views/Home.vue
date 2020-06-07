<template>
  <div />
</template>

<script>
import {
  mdiAccountCircle,
  mdiArrowLeft,
  mdiGrid,
  mdiPencil,
} from '@mdi/js';

export default {
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
    addFeature: '',
    upstreamUrl: '',
    broker: true,
    carrier: true,
    maintenanceProvider: true,
    shipper: true,
    visibilityProvider: true,
    icons: {
      mdiAccountCircle,
      mdiArrowLeft,
      mdiGrid,
      mdiPencil,
    },
  }),

  computed: {
    urlPreview () {
      return `${this.upstreamUrl}${this.upstreamUrl ? '/' : ''}`;
    },
  },

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
.card-container {
  display: grid;
  grid-template-columns: 180px 48px 48px 48px 200px auto;
  column-gap: 24px;
}

.row-top {
  grid-template-rows: repeat(4, 40px);
}

.row-bottom {
  grid-template-rows: 40px;
}

.card-titles {
  font-size: 16px;
  font-weight: 700;
}

.checkbox-col {
  justify-self: end;
}
</style>
