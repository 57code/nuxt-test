export const actions = {
    // 参数1：action上下文对象，参数2：nuxt页面上下文
    nuxtServerInit({ commit }, { app }) {
      const token = app.$cookies.get("token");
      if (token) {
        console.log("nuxtServerInit: token:"+token);
        commit("user/init", token);
      }
    }
  };