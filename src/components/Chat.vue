<template>
  <v-btn
    fixed
    bottom
    dark
    fab
    large
    right
    class="mb-2 mr-2"
    color="primary"
    style="z-index: 10;"
  >
    <v-badge
      content="1"
      color="#ef174f"
    >
      <v-icon large>
        {{ icons.mdiForum }}
      </v-icon>
    </v-badge>
  </v-btn>
</template>

<script>
import { mdiForum } from '@mdi/js';

export default {
  data () {
    return {
      icons: { mdiForum },
    };
  },
};
</script>
