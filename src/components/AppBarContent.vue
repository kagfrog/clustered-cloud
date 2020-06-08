<template>
  <v-container class="d-flex align-center py-0 container--fluid">
    <router-link to="/">
      <img src="../../public/img/svg/clustered.svg">
    </router-link>
    <div class="ml-12 hidden-sm-and-down">
      <v-menu
        open-on-hover
        bottom
        offset-y
      >
        <template v-slot:activator="{ on }">
          <v-btn
            text
            to="/platform"
            v-on="on"
          >
            Platform
          </v-btn>
        </template>
        <platform-menu />
      </v-menu>
      <v-menu
        open-on-hover
        bottom
        offset-y
      >
        <template v-slot:activator="{ on }">
          <v-btn
            text
            v-on="on"
          >
            Solutions
          </v-btn>
        </template>
        <v-list nav>
          <v-list-item
            v-for="(solution, index) in solutions"
            :key="index"
            :to="solution.to"
          >
            <v-list-item-title>
              {{ solution.title }}
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-btn
        text
        to="/pricing"
      >
        Pricing
      </v-btn>
      <v-menu
        open-on-hover
        bottom
        offset-y
      >
        <template v-slot:activator="{ on }">
          <v-btn
            text
            v-on="on"
          >
            Resources
          </v-btn>
        </template>
        <v-list nav>
          <v-list-item
            v-for="(resource, index) in resources"
            :key="index"
            :to="resource.to"
          >
            <v-list-item-title>
              {{ resource.title }}
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
    <v-spacer />
    <div>
      <v-btn text>
        Go to console
      </v-btn>
      <v-btn
        outlined
        color="primary"
        to="/signup/trial"
      >
        Free Trial
      </v-btn>
    </div>
  </v-container>
</template>

<script>
import PlatformMenu from '@/components/PlatformMenu';

export default {

  components: { PlatformMenu },

  data () {
    return {
      resources: [
        { title: 'Documentation', to: '/docs' },
        { title: 'Help Center', to: '/help' },
        { title: 'Webinars', to: '/webinars' },
        { title: 'Blog', to: '/blog' },
      ],
      solutions: [
        { title: 'Developers', to: '/solutions/for-developers' },
        { title: 'SaaS and startups', to: '/solutions/saas' },
        { title: 'Agencies', to: '/solutions/for-agencies' },
        { title: 'Enterprise', to: '/solutions/enterprise' },
      ],
    };
  },
};
</script>

<style scoped>
.v-btn {
  text-transform: none;
}
</style>
