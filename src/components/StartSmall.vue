<template>
  <v-sheet
    class="page-section"
    tile
    tag="section"
  >
    <v-container>
      <v-row class="align-end justify-space-between">
        <v-col
          cols="12"
          md="6"
        >
          <div class="text-center text-md-left">
            <h5 class="body-1 mb-4 font-weight-light">
              Adopts to your needs
            </h5>
            <h3 class="display-1 font-weight-medium mb-6">
              Start small, grow big
            </h3>
            <p class="title font-weight-regular mb-6">
              Solo developer or big dev shop? Clustered Cloud helps
              freelancers, startups, agencies and enterprises build better
              apps at any scale regardless of their size and experience.
            </p>
          </div>
          <ul class="simple-list">
            <li
              v-for="(item, i) in items"
              :key="i"
            >
              <v-icon class="accent--text">
                {{ icons.mdiCheckCircle }}
              </v-icon>
              <div>
                {{ item.content }}
              </div>
            </li>
          </ul>
        </v-col>
        <v-col
          cols="12"
          md="5"
          lg="4"
        >
          <v-img
            :src="require('../../public/img/svg/grow-accent.svg')"
            class="mx-auto"
            max-width="400"
          />
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
            Empowers teams to work better together with shared projects
          `,
        },
        {
          content: `
            Consolidate disparate tools and services into a single unified
            toolchain
          `,
        },
        {
          content: `
            Get valuable insights with realtime app metrics and log aggregation
          `,
        },
        {
          content: `
            Replaces products such as GitHub, GitLab, Jira, CircleCI,
            Jenkins, TravisCI, Ansible, Chef, Kubernetes, AWS/GCP/Azure...
          `,
        },
        {
          content: `
            Pay only for what you use, prorated to the second
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
</style>
