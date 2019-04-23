export const actions = {
  nuxtServerInit({ commit }, { req }) {
    if (req.ctx.session.cart) {
      console.log("初始化cart");
      console.log(req.ctx.session.cart);

      commit("cart/init", req.ctx.session.cart);
    }

    if (req.ctx.session.user) {
      console.log("初始化user");
      console.log(req.ctx.session.user);

      commit("user/init", req.ctx.session.user);
    }
  }
};
