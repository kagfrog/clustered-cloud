<template>
  <v-container class="d-flex align-center py-0 container--fluid">
    <img src="../../public/img/svg/clustered.svg">
    <div class="ml-12 hidden-sm-and-down">
      <v-btn text>
        Platform
      </v-btn>
      <v-btn text>
        Platform
      </v-btn>
      <v-btn text>
        Solutions
      </v-btn>
      <v-btn text>
        Pricing
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
