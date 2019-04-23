const router = require("koa-router")({ prefix: "/api" });
const goods = [
  { id: 1, text: "Web全栈架构师", price: 1000 },
  { id: 2, text: "Python架构师", price: 1000 }
];
router.get("/goods", ctx => {
  ctx.body = {
    ok: 1,
    goods
  };
});
router.post("/goods", ctx => {
  console.log(ctx.request.body);

  goods.push({
    id: goods.length + 1,
    text: ctx.request.body.text,
    price: 1000
  });
  ctx.body = {
    ok: 1
  };
});
router.post("/saveCart", ctx => {
  ctx.session.cart = ctx.request.body;
  ctx.body = { ok: 1 };
});

router.post("/login", ctx => {
  const user = ctx.request.body;
  if (user.username === "jerry" && user.password === "123") {
    user.token = "a mock token";
    delete user.password;
    ctx.session.user = user;
    ctx.body = { ok: 1, user };
  } else {
    ctx.body = { ok: 0 };
  }
});

module.exports = router;
