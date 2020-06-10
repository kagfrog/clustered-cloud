<template>
  <v-sheet
    dark
    tile
    class="secondary page-section pb-4"
    tag="section"
  >
    <v-container>
      <v-row no-gutters>
        <v-col class="col-md-3 col-lg-4 col-12">
          <router-link to="/">
            <v-img
              :src="require('../../public/img/svg/clustered-dark.svg')"
              class="mb-4 mt-2"
              width="133"
            />
          </router-link>
          <p class="subtitle-2 light--text hidden-sm-and-down">
            The complete end-to-end
            <br>
            DevOps platform
          </p>
        </v-col>
        <v-col class="flex-grow-1 col-md-auto col-12">
          <v-row class="justify-space-between">
            <v-col class="col-sm-auto col-12">
              <h5 class="body-2 font-weight-bold mb-2">
                PLATFORM
              </h5>
              <ul class="nav-links body-2">
                <li>
                  <router-link to="/platform">
                    Overview
                  </router-link>
                </li>
                <li>
                  <router-link to="/platform#workflow">
                    DevOps Automation
                  </router-link>
                </li>
                <li>
                  <router-link to="/platform#containers">
                    Container orchestration
                  </router-link>
                </li>
                <li>
                  <router-link to="/platform#services">
                    Service catalog
                  </router-link>
                </li>
                <li>
                  <router-link to="/pricing">
                    Pricing
                  </router-link>
                </li>
              </ul>
            </v-col>
            <v-col class="col-sm-auto col-12">
              <h5 class="body-2 font-weight-bold mb-2">
                USE CASES
              </h5>
              <ul class="nav-links body-2">
                <li>
                  <router-link to="/stacks/magento">
                    Scalable Magento clusters
                  </router-link>
                </li>
                <li>
                  <router-link to="/stacks/wordpress">
                    Wordpress DevOps platform
                  </router-link>
                </li>
                <li>
                  <router-link to="/#cloud-migration">
                    Legacy app migration
                  </router-link>
                </li>
                <li>
                  <router-link to="/stacks">
                    Polyglot microservices
                  </router-link>
                </li>
              </ul>
            </v-col>
            <v-col class="col-sm-auto col-6">
              <h5 class="body-2 font-weight-bold mb-2">
                RESOURCES
              </h5>
              <ul class="nav-links body-2">
                <li>
                  <router-link to="/docs">
                    Developer Docs
                  </router-link>
                </li>
                <li>
                  <router-link to="/help">
                    Help Center
                  </router-link>
                </li>
                <li>
                  <a
                    href="/webinars"
                  >Webinars
                  </a>
                </li>
                <li>
                  <router-link to="/blog">
                    Blog
                  </router-link>
                </li>
              </ul>
            </v-col>
            <v-col class="col-sm-auto col-6">
              <h5 class="body-2 font-weight-bold mb-2">
                COMPANY
              </h5>
              <ul class="nav-links body-2">
                <li>
                  <router-link to="/company">
                    About
                  </router-link>
                </li>
                <li>
                  <router-link to="/contact">
                    Contact
                  </router-link>
                </li>
              </ul>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-divider class="my-6" />
      <v-row>
        <v-col
          class="order-sm-1"
          cols="auto"
        >
          <ul class="caption links">
            <li>
              <router-link to="/legal/tos">
                Terms of Service
              </router-link>
            </li>
            <li>
              <router-link to="/legal/privacy">
                Privacy
              </router-link>
            </li>
          </ul>
        </v-col>
        <v-col
          class="flex-grow-1"
          cols="auto"
        >
          <div class="light--text caption">
            © Copyright 2020 Clustered.com. All rights reserved.
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
export default {

};
</script>

<style scoped>
.nav-links {
  list-style: none;
  padding: 0;
}

.nav-links li {
  padding: 8px 0;
}

.nav-links li a {
  color: #ffffffb3;
  text-decoration: none;
  transition: color 0.12s ease;
}

.links li a {
  color: #ffffffb3;
  text-decoration: none;
  font-weight: 400;
}

.nav-links li a:hover {
  color: #ffffff;
}

.links {
  padding: 0;
}

.links li {
  display: inline-block;
}

.links li:not(:last-child) {
  margin-right: 24px;
}

.links li a:hover {
  color: #ffffff;
}

.light--text {
  color: #ffffffb3;
}
</style>
