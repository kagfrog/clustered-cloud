<template>
  <v-sheet
    class="page-section"
    tile
    tag="section"
  >
    <v-container>
      <h3 class="text-center display-2 font-weight-medium mb-6">
        What's new
      </h3>
      <v-row class="py-12 flex-md-nowrap justify-md-space-around">
        <template
          v-for="(item, i) in items"
        >
          <v-col
            :key="i"
            class="flex-shrink-1"
            cols="12"
            sm="auto"
          >
            <v-card
              :ripple="false"
              :to="item.path"
              flat
              class="newsbox"
            >
              <figure class="post-image">
                <v-sheet
                  tile
                  class="post-image__inner blue lighten-5"
                >
                  <v-icon size="64">
                    {{ item.icon }}
                  </v-icon>
                </v-sheet>
              </figure>
              <v-card-subtitle class="pb-2">
                {{ item.topic }}
              </v-card-subtitle>
              <v-card-title class="headline newsbox-headline">
                {{ item.header }}
              </v-card-title>
              <v-card-text class="newsbox-text">
                {{ item.content }}
              </v-card-text>
              <v-card-actions>
                <v-btn
                  text
                  class="nudge-icon"
                  color="primary"
                >
                  Learn more
                  <v-icon right>
                    {{ icons.mdiArrowRight }}
                  </v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-divider
            v-if="item.divider"
            :key="i"
            vertical
            class="hidden-sm-and-down"
          />
        </template>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
import { mdiArrowRight, mdiImage, mdiPlay } from '@mdi/js';

export default {
  data () {
    return {
      icons: { mdiArrowRight },
      items: [
        {
          topic: 'Blog',
          icon: mdiImage,
          divider: true,
          path: '/blog',
          header: 'Zero-downtime deployments with Git and CI/CD',
          content: `
            Simplify your development workflow with atomic deployments and
            automated build pipelines.
          `,
        },
        {
          topic: 'Webinar',
          icon: mdiPlay,
          divider: true,
          path: '/webinars',
          header: `
            How to deploy a highly available Magento cluster in 3
            simple steps
          `,
          content: `
            Learn how to eliminate slowness and downtime with self-healing
            containers and horizontal scaling.
          `,
        },
        {
          topic: 'Blog',
          icon: mdiImage,
          divider: false,
          path: '/blog',
          header: `
            Introducing Clustered Cloud: a new way to build and
            manage apps
          `,
          content: `
            Clustered Cloud brings DevOps automation and  container hosting
            to everyone in a single platform.
          `,
        },
      ],
    };
  },
};
</script>

<style scoped>
/* This is very cool! Hovering over a card affects translate on button icon! */
/* Actually, via another ruleset, it also scales the top image icon by 1.02. */
.newsbox:hover .nudge-icon .v-icon {
  transform: translateX(4px);
}

.post-image {
  height: 200px;
  overflow: hidden;
}

.post-image__inner {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transform-origin: 60% 0;
  transition: transform 0.35s ease-in-out;
}

.newsbox {
  height: 100%;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
}

.newsbox-headline {
  font-weight: 700 !important;
  padding-top: 0;
  word-break: normal;
}

.newsbox:hover .newsbox-headline {
  opacity: 0.7;
}

.newsbox:hover .post-image__inner {
  transform: scale(1.02);
}

.newsbox-text {
  font-size: 1rem;
  color: #000000de !important;
}

@media only screen and (min-width: 600px) {
  .newsbox {
    min-width: 200px;
    max-width: 300px;
  }
}
</style>
