<template>
  <v-sheet
    class="page-section blue-grey lighten-5"
    tile
  >
    <v-container>
      <v-row class="justify-center">
        <v-col
          cols="12"
          lg="10"
          xl="10"
        >
          <div class="text-center">
            <div class="display-2 font-weight-medium mb-6">
              How it works
            </div>
            <v-tabs
              v-model="tab"
              centered
              fixed-tabs
              background-color="transparent"
              height="72"
            >
              <v-tab
                v-for="item in items"
                :key="item.tab"
                class="title"
              >
                {{ item.tab }}
              </v-tab>
            </v-tabs>
            <v-tabs-items
              v-model="tab"
              class="transparent mt-6"
            >
              <!-- :id="item.tab" -->
              <v-tab-item
                v-for="item in items"
                :key="item.tab"
              >
                <v-row class="flex-md-nowrap text-md-left">
                  <v-col
                    cols="12"
                    md="5"
                  >
                    <div
                      class="tab-content-headline display-1 font-weight-bold"
                    >
                      {{ item.header }}
                    </div>
                  </v-col>
                  <v-col
                    cols="12"
                    md="auto"
                    class="flex-shrink-1"
                  >
                    <v-sheet
                      tile
                      class="tab-content white"
                    >
                      <v-avatar
                        class="tab-icon hidden-sm-and-down accent"
                        size="130"
                      >
                        <v-icon class="accent--text text--lighten-1">
                          {{ item.icon }}
                        </v-icon>
                      </v-avatar>
                      <p class="subtitle-3 font-weight-regular mb-6">
                        Work with the languages and frameworks you love.
                        Version and track your code with built-in Git support.
                        Facilitate collaboration with team projects.
                        Create web apps, APIs, backend workers, microservices
                        and more. Add databases, caching,
                        search and other services with one click.
                      </p>
                      <div class="mt-12 mb-6">
                        <v-btn
                          dark
                          depressed
                          to="/stacks"
                        >
                          Supported stacks
                        </v-btn>
                        <v-btn
                          text
                          class="ml-4"
                          to="/docs"
                        >
                          Developer docs
                          <v-icon right>
                            {{ icons.mdiArrowRight }}
                          </v-icon>
                        </v-btn>
                      </div>
                    </v-sheet>
                  </v-col>
                </v-row>
              </v-tab-item>
            </v-tabs-items>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
import {
  mdiArrowRight,
  mdiCloud,
  mdiCogs,
  mdiDocker,
  mdiRocket,
  mdiTune,
  mdiViewDashboard,
  mdiXml,
} from '@mdi/js';

export default {
  data () {
    return {
      tab: null,
      icons: { mdiArrowRight },
      items: [
        {
          tab: 'develop',
          header: 'Build something great',
          content: '',
          icon: mdiXml,
        },
        {
          tab: 'build',
          header: 'Optimize builds with integrated CI/CD pipeline',
          content: '',
          icon: mdiCogs,
        },
        {
          tab: 'package',
          header: 'Containerize your application with one click',
          content: '',
          icon: mdiDocker,
        },
        {
          tab: 'deploy',
          header: 'Put your deployments on autopilot',
          content: '',
          icon: mdiRocket,
        },
        {
          tab: 'run',
          header: 'Resilient cloud hosting built to scale',
          content: '',
          icon: mdiCloud,
        },
        {
          tab: 'manage',
          header: 'Be in control at all times',
          content: '',
          icon: mdiViewDashboard,
        },
        {
          tab: 'scale',
          header: 'Scale as you grow',
          content: '',
          icon: mdiTune,
        },
      ],
    };
  },
};
</script>

<style scoped>
.page-section {
  padding-top: 48px;
  padding-bottom: 48px;
}

@media only screen and (min-width: 960px) {
  .page-section {
    padding-top: 72px;
    padding-bottom: 72px;
  }
}

.tab-content {
  padding: 64px 40px 40px;
  position: relative;
  min-height: 360px;
  height: 100%;
}

.tab-content-headline {
  position: relative;
  padding-top: 24px;
  z-index: 1;
}

@media only screen and (min-width: 960px) {
  .tab-content::before {
    content: "";
    position: absolute;
    top: 0;
    left: -160px;
    width: 160px;
    height: 100%;
    display: block;
    background-color: #fff;
  }

  .tab-content-headline {
    padding-top: 64px;
    min-height: 360px;
    margin-bottom: 0;
  }
}

.tab-icon {
  position: absolute;
  left: -225px;
  bottom: 0;
}

.tab-icon .v-icon {
  /* font-size: 132px; */
  bottom: -24px;
  right: -24px;
}
</style>
