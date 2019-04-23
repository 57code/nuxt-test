export default ({ app }) => {
  app.store.subscribe((mutation, state) => {
    console.log(mutation.type);
    if (/^cart\//.test(mutation.type)) {
      app.store.$saveCart(state.cart.list);
    }
  });
};
