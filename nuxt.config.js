const pkg = require('./package')
const bodyParser = require('body-parser')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'WD Blog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Vue + Nuxt WD Blog' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Open+Sans&display=swap'}
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070', failedColor: 'coral', height: '6px', duration: 5000 },

  /*
  ** Global CSS
  */
  css: [
    '~assets/styles/main.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~plugins/core-components.js',
    '~plugins/date-filter.js'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    //'@nuxtjs/axios'
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */

    extend(config, ctx) {}
  },
  env: {
    baseUrl: process.env.BASE_URL 
    || "https://nuxt-course-project-32dec-default-rtdb.europe-west1.firebasedatabase.app",
    fbAPIKey: 'AIzaSyDpTHuDdsPZH7w9x7jL21u0h9Dttm3KEYs'
  },
  transition: {
    name: "fade",
    mode: "out-in"
  },
  serverMiddleware: [
    bodyParser.json(),
    '~/api'
  ]
}