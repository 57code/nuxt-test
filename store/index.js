export const actions = {
  nuxtServerInit({ commit }, { app }) {    
    const token = app.$cookies.get('token');
    if (token) {
      console.log("初始化token:"+token);
      commit("user/init", token);
    }
  }
};
