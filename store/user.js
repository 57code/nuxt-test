export const state = () => ({
  token: null
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
  login({ commit }, u) {
    return this.$login(u).then(({ ok, token }) => {
      if (ok) {
        commit("init", token);
      }
      return !!ok;
    });
  }
};
