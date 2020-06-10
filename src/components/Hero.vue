<template>
  <v-sheet
    class="hero"
    tile
  >
    <v-container>
      <v-row class="align-center justify-space-between">
        <v-col cols="12">
          <v-banner
            :tile="false"
            dark
            single-line
            color="secondary"
            elevation="5"
            style="display: none;"
          >
            <v-avatar
              slot="icon"
              size="40"
            >
              <v-img :src="require('../../public/img/svg/producthunt.svg')" />
            </v-avatar>
            Thank you for supporting us on Product Hunt!
            Sign up to claim your special deal 😊
            <template v-slot:actions>
              <v-btn
                outlined
                to="/signup/trial"
              >
                Sign up
              </v-btn>
            </template>
          </v-banner>
        </v-col>
        <v-col
          cols="12"
          md="6"
          class="pr-0"
        >
          <div class="display-3 font-weight-bold mb-6">
            Write
            <span class="primary--text">code</span>, forget about the rest
          </div>
          <p class="title font-weight-regular mb-6">
            Deploy and scale modern apps and microservices without
            the complexities of DevOps and infrastructure management.
          </p>
          <v-row class="align-center">
            <v-col
              cols="12"
              sm="auto"
            >
              <v-btn
                x-large
                to="/signup/trial"
                class="nudge-icon"
                color="primary"
              >
                Try for free
                <v-icon right>
                  {{ icons.mdiArrowRight }}
                </v-icon>
              </v-btn>
            </v-col>
            <v-col
              cols="12"
              sm="auto"
            >
              <div>
                <v-btn
                  depressed
                  outlined
                  text
                  x-large
                  class="white-bg"
                  color="primary"
                >
                  Request a demo
                </v-btn>
                <div
                  class="v-overlay theme--dark"
                  style="z-index: 5; transition: none 0s ease 0s;"
                >
                  <div
                    class="v-overlay__scrim white"
                    style="opacity: 0;"
                  />
                </div>
              </div>
            </v-col>
            <v-col cols="12">
              <div class="body-1 text--secondary">
                Free 14-day trial. No credit card required.
              </div>
            </v-col>
          </v-row>
        </v-col>
        <v-col
          class="offset-md-1"
          cols="12"
          md="5"
        >
          <v-card class="box-shadow">
            <div
              class="wistia_responsive_padding"
              style="padding: 56.25% 0 0; position: relative;"
            >
              <div
                class="wistia_responsive_wrapper"
                style="height: 100%; left: 0; position: absolute;
                top: 0; width: 100%;"
              >
                <span
                  id="wistia-wz9mklec7c-1"
                  class="wistia_embed wistia_async_wz9mklec7c
                  popover=true popoverAnimateThumbnail=false
                  videoFoam=true wistia_embed_initialized"
                  style="display: inline-block; height: 100%; width: 100%;
                  position: relative;"
                >
                  <div
                    id="wistia_30.thumb_container"
                    class="wistia_click_to_play"
                    style="position: relative; height: 264.229px; width: 469.75px;"
                  >
                    <div
                      id="wistia_61.thumbnail"
                      tabindex="0"
                      style="cursor: pointer; display: block; height: 264.219px;
                      overflow: hidden; outline: none; position: relative;
                      width: 469.75px;"
                    >
                      <div
                        id="wistia_77.big_play_button_background"
                        style="height: 81px; position: absolute; width: 127px;
                        z-index: 1; background-color: rgba(121, 110, 255, 0.8);
                        left: 171px; top: 92px;"
                      />
                      <!-- eslint-disable max-len -->
                      <div
                        id="wistia_77.big_play_button_graphic"
                        tabindex="0"
                        role="button"
                        aria-label="Play"
                        style="background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAP4AAACiCAYAAABh2nDdAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAulJREFUeNrs3d1tGlEQBtAlSgEpgXSAO8AdxB2QDuwONhWQDpxUAB14OyAdmA5IB+SOvDdCSHnLn/WdI91XP4z1aYY77DIMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAvnc/nQzsrlYCs4JdTOxvVgKzgd7t23qkKZAW/PLezVhnICn43qg7kBb88tbNUJcgKfr/4+6BSkBX8buviD/KCf7bzh8zgd/cqB3nBt/OH0OD3i7+1KkJW8O38ITj4/eJvqaKQFXw7fwgNfvfo4i/PQgleV/D/0J8+tnO3WCy+qXKGN0pAU5/3D3b+Oj5ZHf/SNHf/7yqu45Nj3Y7n/AWfQHXZV4/5bpXCqE/GqH+tLvw+uvjT8cmymrv/Ril0fHI6/qX93P1d/Ak+QcEvx8HO36hPnOXwsvMflULHJ6fjX5oGO38dnzjr4WXn72EfwSdM7fx3XvBp1Cdn1L9m56/jE6jv/D3so+MT1PEv2fnr+ASqC7+Dh30EnzzLefQflcKoT8aof60u/Grnf/Sf1PHJsZpHfzt/wSfMz52/Ugg+WWrk/6oMgk+OL+3c+oLPv/dWCfgLapdfO/29Uuj4ZJjauRF6wSfHpxb4Wys8oz4ZjvNoPymFjk+G/TzaC73gE6Au8B5a4L2Rx6hPCM/h6/iE+dwCfyP0Oj45o73dvOATZBq8XdeoT5S+mxd6HZ8Ax8Ev6Oj4ROm7eaEXfAL0Czyf5436hPCqLB2fMH03L/Q6PiGj/Z3v2ev45Kiwvxd6wSfHg908/KfOv1+97nqlspAT/Ec/aw05wT/5UQvICn6N9kuVhJzgjyoIOcE/+alqyAr+zgUe5AS/uvy9ikFO8O3mISz4W6M95ATfbh7Cgv9kNw9ZwR9VBXKC/+wCD7KCbzcPYcHfqAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAvE4/BBgAB9Vp0xXzB8AAAAAASUVORK5CYII=') 0 0 / 127px 81px no-repeat transparent; cursor: pointer; display: block; height: 81px; outline: none; position: absolute; width: 127px; z-index: 1; left: 171px; top: 92px;"
                      />
                      <img
                        id="wistia_61.thumbnail_img"
                        alt="Introduction to Clustered Cloud"
                        src="https://embed-fastly.wistia.com/deliveries/3979e1fae33e42d1c877d572bb14ee20.webp?image_crop_resized=960x540"
                        style="border: 0; display: block; float: none;
                        height: 264.219px; margin: 0; max-height: none;
                        max-width: none; padding: 0; position: absolute;
                        width: 469.75px; left: 0; top: 0;"
                      >
                      <!-- eslint-enable max-len -->
                    </div>
                  </div>
                </span>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
import { mdiArrowRight } from '@mdi/js';

export default {
  data () {
    return {
      icons: { mdiArrowRight },
    };
  },
};
</script>

<style scoped>
.hero {
  padding: 16px 0 48px;
  background: linear-gradient(90deg,#ffffff 20px,#00000000 1%) 50%,
    linear-gradient(#ffffff 20px, #00000000 1%) 50%, #e8e8e8;
  background-size: 22px 22px;
}

@media only screen and (min-width: 960px) {
  .hero {
    padding: 72px 0;
  }
}

.nudge-icon:hover .v-icon {
  transform: translateX(4px);
}

.white-bg {
  background-color: #ffffff;
}

.box-shadow {
  box-shadow: 0 10px 30px 0 rgba(0,0,0,0.12);
}
</style>
