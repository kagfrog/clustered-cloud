<template>
  <v-sheet
    class="page-section"
    tile
  >
    <v-container>
      <div class="centered-block">
        <div class="display-1 font-weight-medium mb-6">
          A unified workflow for your app lifecycle
        </div>
        <p class="mb-12 title font-weight-regular mb-6">
          Simplify your toolchain and get more done with our end-to-end
          DevOps platform
        </p>
      </div>
      <ul class="features-list my-12">
        <li
          v-for="(item, i) in items"
          :key="i"
        >
          <v-list-item>
            <v-list-item-avatar
              class="mr-12"
              size="48"
            >
              <v-icon color="primary">
                {{ item.icon }}
              </v-icon>
            </v-list-item-avatar>
            <v-list-item-content class="py-0">
              <div class="subtitle-3 font-weight-regular mb-1">
                {{ item.header }}
              </div>
              <div class="body-1">
                {{ item.content }}
              </div>
            </v-list-item-content>
          </v-list-item>
        </li>
      </ul>
      <div class="text-center">
        <v-btn
          text
          x-large
          class="text-none"
          to="/platform"
        >
          Explore all platform features
          <v-icon right>
            {{ icons.mdiArrowRight }}
          </v-icon>
        </v-btn>
      </div>
    </v-container>
  </v-sheet>
</template>

<script>
import {
  mdiArrowRight,
  mdiBackupRestore,
  mdiBuffer,
  mdiCardBulletedSettingsOutline,
  mdiCardsOutline,
  mdiCheck,
  mdiCloudLockOutline,
  mdiCubeUnfolded,
  mdiGit,
  mdiPulse,
  mdiRayStartArrow,
  mdiShieldOutline,
  mdiWidgets,
} from '@mdi/js';

export default {
  data () {
    return {
      icons: { mdiArrowRight },
      items: [
        {
          header: 'Private Git repositories',
          icon: mdiGit,
          content: `
            Version your code, create branches and track history using our
            hosted Git repositories.
          `,
        },
        {
          header: 'Multiple environments',
          icon: mdiBuffer,
          content: `
            Manage separate versions of your app, stage changes and promote
            to production with the click of a button.
          `,
        },
        {
          header: 'Stateful apps',
          icon: mdiCardsOutline,
          content: `
            Attach persistent data to your apps using cloud-native,
            software-defined storage.
          `,
        },
        {
          header: 'Self-healing deployments',
          icon: mdiPulse,
          content: `
            Application containers are automatically re-scheduled to
            healthy nodes in case of failure.
          `,
        },
        {
          header: 'Container orchestration',
          icon: mdiCubeUnfolded,
          content: `
            Benefit from containerization without having to build and
            manage your own Docker images.
          `,
        },
        {
          header: 'Push-to-deploy',
          icon: mdiRayStartArrow,
          content: `
            Automatically re-deploy your app when you make code changes
            through build triggers.
          `,
        },
        {
          header: 'Release management',
          icon: mdiBackupRestore,
          content: `
            Version your deploys, track revision history and easily
            revert a bad release in an instant.
          `,
        },
        {
          header: 'Service bindings',
          icon: mdiWidgets,
          content: `
            Attach add-on services to your apps with automatically
            injected connection settings.
          `,
        },
        {
          header: 'Configuration management',
          icon: mdiCardBulletedSettingsOutline,
          content: `
            Decouple app config from code. Update config files and
            environment variables at runtime without a re-deploy.
          `,
        },
        {
          header: 'Inherently secure',
          icon: mdiCloudLockOutline,
          content: `
            Built-in security features such as namespace isolation,
            cgroups and network policies limits the attack surface.
          `,
        },
        {
          header: 'Automatic SSL/TLS',
          icon: mdiShieldOutline,
          content: `
            Out of the box HTTPS encryption for your web apps with free
            Let's Encrypt certificates, automatically managed.
          `,
        },
        {
          header: 'Production-grade hosting',
          icon: mdiCheck,
          content: `
            Host with the best. We partner with the largest cloud providers
            such as Google, Microsoft and AWS for maximum performance and
            uptime.
          `,
        },
      ],
    };
  },
};
</script>

<style scoped>
.centered-block {
  max-width: 850px;
  margin: 0 auto;
  text-align: center;
}

.features-list {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  border-bottom: 1px solid #0000001f;
  padding: 0;
}

.features-list li {
  padding: 40px 20px;
  border-top: 1px solid #0000001f;
}

@media only screen and (min-width: 960px) {
  .features-list li {
    flex: 0 0 50%;
  }

  .features-list li:nth-child(odd) {
    border-right: 1px solid #0000001f;
  }
}
</style>
