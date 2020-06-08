<template>
  <div>
    <v-sheet
      dark
      class="primary darken-1 diag-bg py-12"
      tag="section"
    >
      <v-container class="text-center">
        <div class="display-1 font-weight-medium mb-6">
          Free 14-day trial
        </div>
        <p class="subtitle-1">
          Try Clustered Cloud completely free! Sign up now to get started.
        </p>
        <v-btn
          large
          light
          class="mt-4"
          color="white"
          to="/signup/trial"
        >
          Start your free trial
        </v-btn>
      </v-container>
    </v-sheet>
    <footer-nav />
  </div>
</template>

<script>
import FooterNav from '@/components/FooterNav';

export default {
  components: { FooterNav },
};
</script>

<style scoped>
.diag-bg {
  background: linear-gradient(-45deg,#00000005,#00000014 40%,#0000 0,#0000);
}
</style>
