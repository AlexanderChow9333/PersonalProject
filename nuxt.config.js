export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "PersonalProject",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  // buildModules: ["@nuxtjs/eslint-module"],
  buildModules: [
    [
      "nuxt-fontawesome",
      {
        component: "fa", //customize component name
        imports: [
          { set: "@fortawesome/free-solid-svg-icons", icons: ["faHeart"] },
          { set: "@fortawesome/free-brands-svg-icons", icons: ["faGithub"] },
          { set: "@fortawesome/free-regular-svg-icons", icons: ["faHeart"] }
        ]
      }
    ]
    // ,
    // "@nuxtjs/eslint-module"
  ],
  // buildModules: [],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    "bootstrap-vue/nuxt",
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa",
    "@nuxtjs/axios",
    "@nuxtjs/auth-next"
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},

  //   router: {
  //     middleware: ['auth']
  //   },

  auth: {
    redirect: {
      login: "/requestLogin"
    },
    strategies: {
      google: {
        clientId:
          "566501127334-ej848119314nojnffurs19c68kgc8tbc.apps.googleusercontent.com",
        scope: ["profile", "email"],
        codeChallengeMethod: ""
      }
    }
  }
};
