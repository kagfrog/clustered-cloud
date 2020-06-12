<template>
  <v-btn
    fixed
    bottom
    dark
    icon
    right
    class="mb-2 mr-2 primary"
    height="60"
    style="z-index: 10;"
    width="60"
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
