<template>
  <v-sheet
    class="page-section"
    tile
    tag="section"
  >
    <v-container>
      <v-row class="align-center justify-space-between">
        <v-col
          cols="12"
          md="6"
        >
          <div class="text-center text-md-left">
            <h5 class="body-1 mb-4 font-weight-light">
              End-to-end application lifecycle management
            </h5>
            <h3 class="display-1 font-weight-medium mb-6">
              Run your application as-is
            </h3>
            <p class="title font-weight-regular mb-6">
              Our platform <strong>automatically</strong> packages and
              deploys your code and its dependencies as self-contained
              microservices that are easy to manage and scale.
            </p>
          </div>
          <!-- eslint-disable max-len -->
          <ul class="simple-list">
            <li>
              <v-icon class="accent--text">
                {{ icons.mdiCheckCircle }}
              </v-icon>
              <div>
                Deploy your existing applications without re-architecturing
                it for the cloud: Node.js, PHP, Python, Golang, Django,
                Wordpress, Magento, you name it!
              </div>
            </li>
            <li>
              <v-icon class="accent--text">
                {{ icons.mdiCheckCircle }}
              </v-icon>
              <div>
                Self-healing container orchestration layer seamlessly
                monitor and protects your apps from downtime
              </div>
            </li>
            <li>
              <v-icon class="accent--text">
                {{ icons.mdiCheckCircle }}
              </v-icon>
              <div>
                Choose between different deployment strategies such as
                staging previews, canary release or blue/green deployment
              </div>
            </li>
            <li>
              <v-icon class="accent--text">
                {{ icons.mdiCheckCircle }}
              </v-icon>
              <div>
                Atomic, zero-downtime deployments with instant rollback
              </div>
            </li>
          </ul>
        </v-col>
        <v-col
          cols="12"
          lg="4"
          md="5"
        >
          <v-img
            class="mx-auto"
            max-width="400"
            :src="require('../../public/img/svg/tech-stacks.svg')"
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
    };
  },
};
</script>

<style scoped>
.simple-list {
  list-style: none;
  margin-top: 32px;
}

.simple-list li:not(:last-child) {
  padding-bottom: 16px;
}

.simple-list li {
  display: flex;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
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
