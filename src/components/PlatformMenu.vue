<template>
  <v-sheet
    style="min-width: 700px; top: 54px; left: 219px;
    transform-origin: left top; z-index: 8;"
  >
    <v-row class="flex-nowrap">
      <v-col class="col col-md-4 grey lighten-3">
        <v-list
          nav
          class="transparent"
        >
          <template v-for="item in items">
            <v-subheader
              v-if="item.header"
              :key="item.header"
              class="font-weight-regular px-2 py-1 pb-3"
              style="font-size: 18px;"
              v-text="item.header"
            />
            <v-list-item
              v-else
              :key="item"
              :to="item.to"
            >
              <v-list-item-title>
                {{ item.title }}
              </v-list-item-title>
            </v-list-item>
          </template>
        </v-list>
      </v-col>
      <v-col class="col">
        <v-list
          dense
          nav
        >
          <template v-for="lang in languages">
            <v-subheader
              v-if="lang.header"
              :key="lang.header"
              v-text="lang.header"
            />
            <v-list-item
              v-else
              :key="lang"
              :to="lang.to"
            >
              <v-list-item-avatar
                class="align-center"
                tile
                size="24"
              >
                <v-img
                  :src="require(`../../public/img/svg/${lang.icon}`)"
                  contain
                />
              </v-list-item-avatar>
              <v-list-item-title>
                {{ lang.title }}
              </v-list-item-title>
            </v-list-item>
          </template>
        </v-list>
      </v-col>
      <v-col class="col">
        <v-list
          dense
          nav
        >
          <template v-for="type in appsAndFrameworks">
            <v-subheader
              v-if="type.header"
              :key="type.header"
              v-text="type.header"
            />
            <v-list-item
              v-else
              :key="type"
              :to="type.to"
            >
              <v-list-item-avatar
                class="align-center"
                tile
                size="24"
              >
                <v-img
                  :src="require(`../../public/img/svg/${type.icon}`)"
                  contain
                />
              </v-list-item-avatar>
              <v-list-item-title>
                {{ type.title }}
              </v-list-item-title>
            </v-list-item>
          </template>
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
        { header: 'Apps and frameworks' },
        { title: 'Magento', to: '/stacks/magento', icon: 'magento.svg' },
        { title: 'Wordpress', to: '/stacks/wordpress', icon: 'wordpress.svg' },
        { title: 'Vue.js', to: '/stacks/vuejs', icon: 'vuejs.svg' },
        { title: 'Laravel', to: '/stacks/laravel', icon: 'laravel.svg' },
      ],
      items: [
        { header: 'Clustered Cloud' },
        { title: 'How it works', to: '/platform' },
        { title: 'Supported stacks', to: '/stacks' },
        { title: 'Addons', to: '/platform#services' },
      ],
      languages: [
        { header: 'Languages' },
        { title: 'Node.js', to: '/stacks/nodejs', icon: 'nodejs.svg' },
        { title: 'PHP', to: '/stacks/php', icon: 'php.svg' },
        { title: 'Python', to: '/stacks/python', icon: 'python.svg' },
        { title: 'Go', to: '/stacks/go', icon: 'golang.svg' },
        { title: 'HTML/CSS/JS', to: '/stacks/html', icon: 'javascript.svg' },
      ],
    };
  },
};
</script>
