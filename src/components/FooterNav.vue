<template>
  <v-sheet
    dark
    tile
    class="secondary"
    tag="section"
  >
    <v-container>
      <v-row no-gutters>
        <v-col class="col-md-3 col-lg-4 col-12">
          <router-link to="/">
            <v-img
              src="../../public/img/svg/clustered-dark.svg"
              class="my-2"
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
              <div class="body-2 font-weight-bold mb-2">
                PLATFORM
              </div>
              <ul class="nav-links body-2">
                <li>
                  <a href="/platform">Overview</a>
                </li>
                <li>
                  <a href="/platform#workflow">DevOps Automation</a>
                </li>
                <li>
                  <a href="/platform#containers">Container orchestration</a>
                </li>
                <li>
                  <a href="/platform#services">Service catalog</a>
                </li>
                <li>
                  <a href="/pricing">Pricing</a>
                </li>
              </ul>
            </v-col>
            <v-col class="col-sm-auto col-12">
              <div class="body-2 font-weight-bold mb-2">
                USE CASES
              </div>
              <ul class="nav-links body-2">
                <li>
                  <a href="/stacks/magento">Scalable Magento clusters</a>
                </li>
                <li>
                  <a href="/stacks/wordpress">Wordpress DevOps platform</a>
                </li>
                <li>
                  <a href="/#cloud-migration">Legacy app migration</a>
                </li>
                <li>
                  <a href="/stacks">Polyglot microservices</a>
                </li>
              </ul>
            </v-col>
            <v-col class="col-sm-auto col-6">
              <div class="body-2 font-weight-bold mb-2">
                RESOURCES
              </div>
              <ul class="nav-links body-2">
                <li>
                  <a href="/docs">Developer Docs</a>
                </li>
                <li>
                  <a href="/help">Help Center</a>
                </li>
                <li>
                  <a href="/webinars">Webinars</a>
                </li>
                <li>
                  <a href="/blog">Blog</a>
                </li>
              </ul>
            </v-col>
            <v-col class="col-sm-auto col-6">
              <div class="body-2 font-weight-bold mb-2">
                COMPANY
              </div>
              <ul class="nav-links body-2">
                <li>
                  <a href="/company">About</a>
                </li>
                <li>
                  <a href="/contact">Contact</a>
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
              <a href="/legal/tos">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="/legal/privacy">
                Privacy
              </a>
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
