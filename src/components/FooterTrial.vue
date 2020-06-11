<template>
  <v-sheet
    dark
    tile
    class="primary darken-1 diag-bg py-12"
    tag="section"
  >
    <v-container class="text-center">
      <h4
        :class="$vuetify.breakpoint.mdAndUp
          ? 'display-1'
          : 'headline'
        "
        class="font-weight-medium mb-6"
      >
        Free 14-day trial
      </h4>
      <p class="subtitle-1">
        Try Clustered Cloud completely free! Sign up now to get started.
      </p>
      <v-btn
        :block="$vuetify.breakpoint.xs"
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
</template>

<script>

export default {};
</script>

<style scoped>
.diag-bg {
  background: linear-gradient(-45deg,#00000005,#00000014 40%,#00000000 0,#00000000);
}
</style>
