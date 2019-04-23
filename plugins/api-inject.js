export default ({ $axios }, inject) => {
  inject("saveCart", cart => {
    return $axios.$post("/api/saveCart", cart);
  });
  inject("login", user => {
    return $axios.$post("/api/login", user);
  });
  inject("addGood", text => {
    return $axios.$post("/api/goods", { text });
  });
};
