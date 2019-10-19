const pkg = require("./package");

module.exports = {
  mode: "universal",

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: pkg.description },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },

  /*
   ** Global CSS
   */
  css: ["element-ui/lib/theme-chalk/index.css"],

  router: {
    extendRoutes(routes, resolve) {
      // routes已经生成的路由
      // resolve是获取页面方法
      routes.push({
        name: "foo",
        path: "/foo",
        component: resolve(__dirname, "pages/custom.vue"),
      });
    },
  },

  /*
   ** Plugins to load before mounting the App
   */
  plugins: ["@/plugins/element-ui"],

  /*
   ** Nuxt.js modules
   */
  modules: ["@nuxtjs/axios", "cookie-universal-nuxt"],
  axios: {
    proxy: true,
  },
  proxy: {
    "/api": "http://localhost:8080",
  },

  /*
   ** Build configuration
   */
  build: {
    transpile: [/^element-ui/],

    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
  },
};
