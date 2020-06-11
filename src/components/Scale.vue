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
            <h5 class="body-1 mb-4 font-weight-light">
              Move faster from idea to cloud
            </h5>
            <h3
              :class="$vuetify.breakpoint.mdAndUp
                ? 'display-1'
                : 'headline'
              "
              class="font-weight-medium mb-6"
            >
              A better way to build and scale apps
            </h3>
            <p
              :class="$vuetify.breakpoint.mdAndUp
                ? 'title'
                : 'subtitle-3'
              "
              class="font-weight-regular mb-6"
            >
              Clustered Cloud combines DevOps automation with enterprise
              container hosting in a complete end-to-end platform.
            </p>
          </div>
        </v-col>
      </v-row>
      <v-row class="justify-space-between">
        <v-col
          v-for="(item, i) in items"
          :key="i"
          cols="auto"
        >
          <div class="benefit-box">
            <v-icon
              color="primary"
              size="64"
            >
              {{ item.icon }}
            </v-icon>
            <h3 class="title my-4">
              {{ item.header }}
            </h3>
            <!-- eslint-disable vue/no-v-html -->
            <p
              class="subtitle-1"
              v-html="item.content"
            />
            <v-btn
              text
              color="primary"
              :to="item.path"
            >
              {{ item.button }}
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
      icons: { mdiArrowRight },
      items: [
        {
          icon: mdiXml,
          header: 'Build apps faster',
          button: 'Supported stacks',
          path: '/stacks',
          content: `
            Use your favorite programming languages and frameworks,
            or leverage <strong>pre-configured app templates</strong>
            to kickstart your new project.
          `,
        },
        {
          icon: mdiRocket,
          header: 'Deploy with confidence, every time',
          button: 'Learn more',
          path: '/platform#rollouts',
          content: `
            Iterate faster with <strong>continuous integration and
            delivery</strong>. Deploy stateful and stateless apps
            in seconds with simple Git commands.
          `,
        },
        {
          icon: mdiTune,
          header: 'Zero-touch infrastructure',
          button: 'Explore platform',
          path: '/platform',
          content: `
            Spend your time <strong>building great apps</strong>, not
            babysitting servers. Let Clustered Cloud automate your
            infrastructure management.
          `,
        },
      ],
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
