const pkg = require("./package");

module.exports = {
  // 服务端渲染，如果要单页渲染设置为spa
  mode: "universal",

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: pkg.description }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#f00" },

  /*
   ** Global CSS
   */
  css: ["element-ui/lib/theme-chalk/index.css"],

  // 路由相关配置
  router: {
    // 扩展路由
    extendRoutes(routes, resolve) {
      console.log(routes);

      // 增加了一个路由foo，组件是custom.vue
      routes.push({
        name: "foo",
        path: "/foo",
        component: resolve(__dirname, "pages/custom.vue")
      });
    }
  },

  /*
   ** Plugins to load before mounting the App
   */
  plugins: ["@/plugins/element-ui", '@/plugins/interceptor'],

  modules: ["@nuxtjs/axios","cookie-universal-nuxt"],
  axios: {
    proxy: true
  },
  proxy: {
    "/api": "http://localhost:8080"
  },

  /*
   ** Build configuration
   */
  build: {
    transpile: [/^element-ui/],

    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
