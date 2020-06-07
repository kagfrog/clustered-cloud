module.exports = {
  pwa: {
    name: 'Clustered Cloud',
    themeColor: '#084678',
    msTileColor: '#084678',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    iconPaths: {
      // Overrides vue default due to image size being used.
      msTileImage: 'img/icons/mstile-150x150.png',
    },
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: './src/sw.js',
      swDest: 'service-worker.js',
      exclude: [/\.eot$/, /\.ttf$/],
    },
  },
  publicPath: process.env.VUE_APP_BASE_URL,
  productionSourceMap: false,
};
