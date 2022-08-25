export default {
  target: 'server',

  server: {
    host: 0,
    port: 3000
  },

  //env: {
  //  LIFF_ID: process.env.LIFF_ID || '1655595690-XzrOVmen'
  //},
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'beacon-app',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    // add jquery
    //script: [
    //  {
    //    src: 'https://code.jquery.com/jquery-3.6.0.slim.min.js',
    //    type: 'text/javascript'
    //  }
    //]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  // cp css and images into assets/
  //css: [
  //  '~/assets/css/style.css'
  //],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/liff-init.client.js' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxt/http',
  ],

  serverMiddleware: {
    '/api': '~/fastify/app.js'
  },

  static: {
    prefix: true
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  loading: {
    color: 'blue',
    height: '5px'
  },

  env: {
    SERVER_URL: '4app1.nuxt.config.js',
    MONGO_URL: process.env.MONGO_URL,
    LIFF_ID: process.env.LIFF_ID,
  }
}
