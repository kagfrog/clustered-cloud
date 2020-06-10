<template>
  <v-sheet
    class="page-section"
    tile
    tag="section"
  >
    <v-container>
      <v-row>
        <v-col cols="12">
          <div class="centered-block">
            <div class="body-1 mb-4 font-weight-light">
              Move faster from idea to cloud
            </div>
            <h3 class="display-1 font-weight-medium mb-6">
              A better way to build and scale apps
            </h3>
            <p class="title font-weight-regular mb-6">
              Clustered Cloud combines DevOps automation with enterprise
              container hosting in a complete end-to-end platform.
            </p>
          </div>
        </v-col>
      </v-row>
      <v-row class="justify-space-between">
        <v-col cols="auto">
          <div class="benefit-box">
            <v-icon
              color="primary"
              size="64"
            >
              {{ icons.mdiXml }}
            </v-icon>
            <h3 class="title my-4">
              Build apps faster
            </h3>
            <p class="subtitle-1">
              Use your favorite programming languages and frameworks,
              or leverage <strong>pre-configured app templates</strong>
              to kickstart your new project.
            </p>
            <v-btn
              text
              color="primary"
              to="/stacks"
            >
              Supported stacks
              <v-icon right>
                {{ icons.mdiArrowRight }}
              </v-icon>
            </v-btn>
          </div>
        </v-col>

        <v-col cols="auto">
          <div class="benefit-box">
            <v-icon
              color="primary"
              size="64"
            >
              {{ icons.mdiRocket }}
            </v-icon>
            <h3 class="title my-4">
              Deploy with confidence, every time
            </h3>
            <p class="subtitle-1">
              Iterate faster with <strong>continuous integration and
                delivery</strong>. Deploy stateful and stateless apps
              in seconds with simple Git commands.
            </p>
            <v-btn
              text
              color="primary"
              to="/platform#rollouts"
            >
              Learn more
              <v-icon right>
                {{ icons.mdiArrowRight }}
              </v-icon>
            </v-btn>
          </div>
        </v-col>

        <v-col cols="auto">
          <div class="benefit-box">
            <v-icon
              color="primary"
              size="64"
            >
              {{ icons.mdiTune }}
            </v-icon>
            <h3 class="title my-4">
              Zero-touch infrastructure
            </h3>
            <p class="subtitle-1">
              Spend your time <strong>building great apps</strong>, not
              babysitting servers. Let Clustered Cloud automate your
              infrastructure management.
            </p>
            <v-btn
              text
              color="primary"
              to="/platform"
            >
              Explore platform
              <v-icon right>
                {{ icons.mdiArrowRight }}
              </v-icon>
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
import {
  mdiArrowRight,
  mdiRocket,
  mdiTune,
  mdiXml,
} from '@mdi/js';

export default {
  data () {
    return {
      icons: {
        mdiArrowRight,
        mdiRocket,
        mdiTune,
        mdiXml,
      },
    };
  },
};
</script>

<style scoped>
.centered-block {
  max-width: 850px;
  margin: 0 auto;
  text-align: center;
}

.benefit-box {
  margin-top: 24px;
  text-align: center;
}

@media only screen and (min-width: 960px) {
  .benefit-box {
    min-width: 250px;
    max-width: 320px;
  }
}
</style>
