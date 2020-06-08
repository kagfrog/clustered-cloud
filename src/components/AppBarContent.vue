<template>
  <v-container class="d-flex align-center py-0 container--fluid">
    <router-link to="/">
      <img src="../../public/img/svg/clustered.svg">
    </router-link>
    <div class="ml-12 hidden-sm-and-down">
      <v-btn
        text
        to="/platform"
      >
        Platform
      </v-btn>
      <v-btn text>
        Solutions
      </v-btn>
      <v-btn
        text
        to="/pricing"
      >
        Pricing
      </v-btn>
      <v-btn text>
        Resources
      </v-btn>
    </div>
    <v-spacer />
    <div>
      <v-btn text>
        Go to console
      </v-btn>
      <v-btn
        outlined
        color="primary"
        to="/signup/trial"
      >
        Free Trial
      </v-btn>
    </div>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      //
    };
  },
};
</script>

<style scoped>
.v-btn {
  text-transform: none;
}
</style>
