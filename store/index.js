// 1.定义到index
// 2.实现nuxtServerInit
export const actions = {
    nuxtServerInit({ commit }, { app }) {
      // app是nuxt实例？koa实例？
      const token = app.$cookies.get("token");
      if (token) {
        console.log("nuxtServerInit: token:"+token);
        commit("user/init", token);
      }
    }
  };