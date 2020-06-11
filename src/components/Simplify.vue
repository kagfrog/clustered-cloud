<template>
  <v-sheet
    class="page-section"
    tile
    tag="section"
  >
    <v-container>
      <!-- eslint-disable max-len -->
      <v-row class="align-center justify-space-between">
        <v-col
          cols="12"
          md="5"
          lg="4"
        >
          <v-img
            :src="require('../../public/img/svg/team-accent.svg')"
            class="mx-auto"
            max-width="400"
          />
        </v-col>
        <v-col
          class="text-center text-md-left"
          cols="12"
          md="6"
        >
          <h5
            id="cloud-migration"
            class="body-1 mb-4 font-weight-light"
          >
            Remove cloud barriers
          </h5>
          <h3
            :class="$vuetify.breakpoint.mdAndUp
              ? 'display-1'
              : 'headline'
            "
            class="font-weight-medium mb-6"
          >
            Simplify migration to the cloud
          </h3>
          <p
            :class="$vuetify.breakpoint.mdAndUp
              ? 'title'
              : 'subtitle-3'
            "
            class="font-weight-regular mb-6"
          >
            Unfortunately, most applications were not built to be
            <a
              href="https://12factor.net/"
              target="_blank"
            >
              cloud-ready
            </a>.
            Clustered let you migrate your existing apps with minimal
            effort so you can take full advantage of the cloud.
          </p>
          <ul class="simple-list text-left">
            <li
              v-for="(item, i) in items"
              :key="i"
            >
              <v-icon class="accent--text">
                {{ icons.mdiCheckCircle }}
              </v-icon>
              <!-- eslint-disable vue/no-v-html -->
              <div v-html="item.content" />
            </li>
          </ul>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
import { mdiCheckCircle } from '@mdi/js';

export default {
  data () {
    return {
      icons: { mdiCheckCircle },
      items: [
        {
          content: `
            Deploy any kind of application, including complex CMS and
            ecommerce platforms such as Wordpress and Magento
          `,
        },
        {
          content: `
            Create scalable clusters of <strong>stateless and stateful</strong>
            apps by using the built-in, container-native storage volumes
            toolchain
          `,
        },
        {
          content: `
            Supports apps that normally doesn't work in a containerized
            environment
          `,
        },
        {
          content: `
            Works with your existing application code, frameworks and
            integrations
          `,
        },
      ],
    };
  },
};
</script>

<style scoped>
.simple-list {
  list-style: none;
  margin-top: 32px;
}

.simple-list li {
  display: flex;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
}

.simple-list li:not(:last-child) {
  padding-bottom: 16px;
}

.simple-list li > :first-child {
  -webkit-box-flex: 0;
  -ms-flex-positive: 0;
  flex-grow: 0;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  margin-right: 24px;
}

@media only screen and (max-width: 599px) {
  .simple-list {
    padding-left: 0 !important;
  }
}
</style>
