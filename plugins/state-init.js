export default ({ store }) => {
  store.subscribe(mutation => {
    if (/^cart\//.test(mutation.type)) {
      // 如果是操作购物车，缓存到localstorage
      if (localStorage) {
        localStorage.setItem("cart", JSON.stringify(store.state.cart.list));
      }
    }
  });

  if (!process.server) {
    const cart = JSON.parse(localStorage.getItem("cart"));
    if (cart) {
      store.commit("cart/init", cart);
    }
  }
};
