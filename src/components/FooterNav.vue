<template>
  <v-sheet
    dark
    tile
    class="secondary"
    tag="section"
  >
    <v-container>
      <v-row no-gutters>
        <v-col />
        <v-col />
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
.links {
  padding: 0;
}

.links li {
  display: inline-block;
}

.links li:not(:last-child) {
  margin-right: 24px;
}

.links li a {
  color: #ffffffb3;
  text-decoration: none;
  font-weight: 400;
}

.light--text {
  color: #ffffffb3;
}
</style>
