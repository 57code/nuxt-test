export const state = () => ({
  user: null
});

export const mutations = {
  init(state, user) {
    state.user = user;
  }
};

export const getters = {
  isLogin(state) {
    return !!state.user;
  }
};

export const actions = {
  login({ commit }, u) {
    return this.$login(u).then(({ ok, user }) => {
      if (ok) {
        commit("init", user);
      }
      return !!ok;
    });
  }
};
