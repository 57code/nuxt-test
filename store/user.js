export const state = () => ({
    token: ''
  });
  
  export const mutations = {
    init(state, token) {
      state.token = token;
    }
  };
  
  export const getters = {
    isLogin(state) {
      return !!state.token;
    }
  };
  
  export const actions = {
    login({ commit, getters }, u) {
        // this.$axios由@nuxt/axios模块提供
      return this.$login(u).then(({ token }) => {
        if (token) {
          commit("init", token);
        }
        return getters.isLogin;
      });
    }
  };