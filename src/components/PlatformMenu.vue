<template>
  <v-sheet>
    <v-row>
      <v-col class="col col-md-4 grey lighten-3">
        <v-list nav>
          <v-subheader>Clustered Cloud</v-subheader>
          <v-list-item
            v-for="(item, index) in items"
            :key="index"
            :to="item.to"
          >
            <v-list-item-title>
              {{ item.title }}
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-col>
      <v-col class="col">
        <v-list nav>
          <v-subheader>Languages</v-subheader>
          <v-list-item
            v-for="(lang, index) in languages"
            :key="index"
            :to="lang.to"
          >
            <v-list-item-title>
              {{ lang.title }}
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-col>
      <v-col class="col">
        <v-list nav>
          <v-subheader>Apps and frameworks</v-subheader>
          <v-list-item
            v-for="(type, index) in appsAndFrameworks"
            :key="index"
            :to="type.to"
          >
            <v-list-item-title>
              {{ type.title }}
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>
  </v-sheet>
</template>

<script>
export default {
  data () {
    return {
      appsAndFrameworks: [
        { title: 'Documentation', to: '/docs' },
        { title: 'Help Center', to: '/help' },
        { title: 'Webinars', to: '/webinars' },
        { title: 'Blog', to: '/blog' },
      ],
      items: [
        { title: 'How it works', to: '/platform' },
        { title: 'Supported stacks', to: '/stacks' },
        { title: 'Addons', to: '/platform#services' },
      ],
      languages: [
        { title: 'Documentation', to: '/docs' },
        { title: 'Help Center', to: '/help' },
        { title: 'Webinars', to: '/webinars' },
        { title: 'Blog', to: '/blog' },
      ],
    };
  },
};
</script>
