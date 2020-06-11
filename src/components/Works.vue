<template>
  <v-sheet
    class="page-section blue-grey lighten-5"
    tile
    tag="section"
  >
    <v-container>
      <v-row class="justify-center">
        <v-col
          cols="12"
          lg="10"
          xl="10"
        >
          <div class="text-center">
            <h2
              :class="$vuetify.breakpoint.mdAndUp
                ? 'display-2'
                : 'display-1'
              "
              class="display-2 font-weight-medium mb-6"
            >
              How it works
            </h2>
            <v-tabs
              v-model="tab"
              centered
              fixed-tabs
              background-color="transparent"
              height="72"
            >
              <v-tab
                v-for="item in items"
                :key="item.tab"
                class="title"
              >
                {{ item.tab }}
              </v-tab>
            </v-tabs>
            <v-tabs-items
              v-model="tab"
              class="transparent mt-6"
            >
              <!-- :id="item.tab" -->
              <v-tab-item
                v-for="item in items"
                :key="item.tab"
                reverse-transition="fade-transition"
                transition="fade-transition"
              >
                <v-row class="flex-md-nowrap text-md-left">
                  <v-col
                    cols="12"
                    md="5"
                  >
                    <h3
                      :class="$vuetify.breakpoint.mdAndUp
                        ? 'display-1'
                        : 'headline'
                      "
                      class="tab-content-headline font-weight-bold"
                    >
                      {{ item.header }}
                    </h3>
                  </v-col>
                  <v-col
                    cols="12"
                    md="auto"
                    class="flex-shrink-1"
                  >
                    <v-sheet
                      tile
                      class="tab-content white"
                    >
                      <v-avatar
                        class="tab-icon hidden-sm-and-down accent"
                        size="130"
                      >
                        <v-icon class="accent--text text--lighten-1">
                          {{ item.icon }}
                        </v-icon>
                      </v-avatar>
                      <!-- eslint-disable vue/no-v-html -->
                      <p
                        :class="$vuetify.breakpoint.mdAndUp
                          ? 'subtitle-3'
                          : 'subtitle-1'
                        "
                        class="font-weight-regular mb-6"
                        v-html="item.content"
                      />
                      <template v-if="item.tab === 'develop'">
                        <div class="mt-12 mb-6">
                          <v-btn
                            dark
                            depressed
                            to="/stacks"
                          >
                            Supported stacks
                          </v-btn>
                          <v-btn
                            text
                            class="ml-4"
                            to="/docs"
                          >
                            Developer docs
                            <v-icon right>
                              {{ icons.mdiArrowRight }}
                            </v-icon>
                          </v-btn>
                        </div>
                      </template>
                      <template v-if="item.tab === 'build'">
                        <div class="title mb-1">
                          <strong>Replaces tools such as</strong>
                        </div>
                        <p
                          :class="$vuetify.breakpoint.mdAndUp
                            ? 'subtitle-3'
                            : 'subtitle-1'
                          "
                          class="font-weight-regular mb-6"
                        >
                          CircleCI, GitLab, Jenkins, Travis CI, Buddy
                        </p>
                      </template>
                      <template v-if="item.tab === 'package'">
                        <p
                          :class="$vuetify.breakpoint.mdAndUp
                            ? 'subtitle-3'
                            : 'subtitle-1'
                          "
                          class="mt-8 font-weight-regular mb-6"
                        >
                          <router-link to="/platform#containers">
                            Learn more about the benefits of containerization
                          </router-link>
                        </p>
                      </template>
                      <template v-if="item.tab === 'deploy'">
                        <code class="typer d-block mt-8">
                          <vue-typer :text="typerText" />
                        </code>
                      </template>
                      <template v-if="item.tab === 'run'">
                        <div class="title mb-1">
                          <strong>A superior alternative to</strong>
                        </div>
                        <p
                          :class="$vuetify.breakpoint.mdAndUp
                            ? 'subtitle-3'
                            : 'subtitle-1'
                          "
                          class="font-weight-regular mb-6"
                        >
                          Bare-metal servers, AWS, Kubernetes, Heroku, Firebase
                        </p>
                      </template>
                      <template v-if="item.tab === 'manage'">
                        <div class="title mb-1">
                          <strong>Get built-in features such as</strong>
                        </div>
                        <p
                          :class="$vuetify.breakpoint.mdAndUp
                            ? 'subtitle-3'
                            : 'subtitle-1'
                          "
                          class="font-weight-regular mb-6"
                        >
                          Revision history, easy rollback,
                          runtime config management
                        </p>
                      </template>
                      <template v-if="item.tab === 'scale'">
                        <p
                          :class="$vuetify.breakpoint.mdAndUp
                            ? 'subtitle-3'
                            : 'subtitle-1'
                          "
                          class="font-weight-regular mb-6"
                        >
                          Scale each container individually and pay only for
                          what you use for maximum flexibility and cost
                          efficiency.
                        </p>
                      </template>
                    </v-sheet>
                  </v-col>
                </v-row>
              </v-tab-item>
            </v-tabs-items>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
import { VueTyper } from 'vue-typer';
import {
  mdiArrowRight,
  mdiCloud,
  mdiCogs,
  mdiDocker,
  mdiRocket,
  mdiTune,
  mdiViewDashboard,
  mdiXml,
} from '@mdi/js';

export default {
  components: { VueTyper },

  data () {
    return {
      tab: null,
      icons: { mdiArrowRight },
      items: [
        {
          tab: 'develop',
          header: 'Build something great',
          icon: mdiXml,
          content: `
            Work with the languages and frameworks you love.
            Version and track your code with built-in Git support.
            Facilitate collaboration with team projects.
            Create web apps, APIs, backend workers, microservices
            and more. Add databases, caching,
            search and other services with one click.
          `,
        },
        {
          tab: 'build',
          header: 'Optimize builds with integrated CI/CD pipeline',
          icon: mdiCogs,
          content: `
            Create build triggers to automatically run a pipeline when
            you make changes to your source code. Compile dependencies
            and run preprocessing tasks without polluting your dev
            environment with unnecessary build toolkits.
            Supports popular package managers such as Composer and npm.
          `,
        },
        {
          tab: 'package',
          header: 'Containerize your application with one click',
          icon: mdiDocker,
          content: `
            Our DevOps platform <em>automatically</em> packages your application
            code and runtime into optimized container images when new builds are
            triggered. Dependencies are pinned to their exact versions to
            guarantee environment-parity and 100% reproducible deploys.
            Put an end to the "Works on my machine" syndrome.
          `,
        },
        {
          tab: 'deploy',
          header: 'Put your deployments on autopilot',
          icon: mdiRocket,
          content: `
            As modern developers we need to move fast, ship new features
            and fix bugs – often many times per day. Without the right set
            of processes in place you are constantly slowed down by tedious
            deploy routines and the fear of breaking things. Clustered makes
            life easier with Zero Downtime, atomic deployments driven by Git.
          `,
        },
        {
          tab: 'run',
          header: 'Resilient cloud hosting built to scale',
          icon: mdiCloud,
          content: `
            With Clustered Cloud you get production-ready hosting out of
            the box. Each component of your application runs in an isolated
            container, managed by our self-healing orchestration layer.
            Run your apps on the same infrastructure that powers some of
            the world's largest websites.
          `,
        },
        {
          tab: 'manage',
          header: 'Be in control at all times',
          icon: mdiViewDashboard,
          content: `
            Manage configurations for your apps and services across all
            deployments within a unified interface. Easily clone environments,
            create snapshots, view logs, run one-off admin tasks or debug
            at runtime using the integrated web terminal. Limit permissions
            through role-based access control.
          `,
        },
        {
          tab: 'scale',
          header: 'Scale as you grow',
          icon: mdiTune,
          content: `
            Add more resources when and where it is needed without
            overspending or committing to long-term contracts.
            Clustered Cloud offers instant horizontal and vertical scaling
            for all your stateless <em>and</em> stateful apps. Don't lose
            sales and frustrated customers because of overloaded servers.
          `,
        },
      ],
      typerText: [
        'git add new-file.js',
        'git commit -m \'Add new file\'',
        'git push origin master',
        '[Deployed to https://my-awesome-app.appcluster.com]',
      ],
    };
  },
};
</script>

<style scoped>
.tab-content {
  padding: 64px 40px 40px;
  position: relative;
  min-height: 360px;
  height: 100%;
}

.tab-content-headline {
  position: relative;
  padding-top: 24px;
  z-index: 1;
}

@media only screen and (min-width: 960px) {
  .tab-content::before {
    content: "";
    position: absolute;
    top: 0;
    left: -160px;
    width: 160px;
    height: 100%;
    display: block;
    background-color: #ffffff;
  }

  .tab-content-headline {
    padding-top: 64px;
    min-height: 360px;
    margin-bottom: 0;
  }
}

.tab-icon {
  position: absolute;
  left: -225px;
  bottom: 0;
}

.tab-icon .v-icon {
  /* font-size: 132px; */
  bottom: -24px;
  right: -24px;
}

.typer {
  background: #000000;
  padding-top: 12px;
  padding-bottom: 12px;
}

code >>> .vue-typer .custom.char {
  color: #ffffff;
}
</style>
